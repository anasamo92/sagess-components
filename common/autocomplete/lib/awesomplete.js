'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Simple, lightweight, usable local autocomplete library for modern browsers
 * Because there weren’t enough autocomplete scripts in the world? Because I’m completely insane and have NIH syndrome? Probably both. :P
 * @author Lea Verou http://leaverou.github.io/awesomplete
 * MIT license
 */

(function () {

	var _ = function _(input, o) {
		var me = this;

		// Setup

		this.input = $(input);
		this.input.setAttribute('autocomplete', 'false');
		this.input.setAttribute('aria-autocomplete', 'list');

		o = o || {};

		configure.call(this, {
			minChars: 2,
			maxItems: 10,
			autoFirst: false,
			filter: _.FILTER_CONTAINS,
			sort: _.SORT_BYLENGTH,
			item: function item(text, input) {
				return $.create('li', {
					innerHTML: text.replace(RegExp($.regExpEscape(input.trim()), 'gi'), '<mark>$&</mark>'),
					'aria-selected': 'false'
				});
			},
			replace: function replace(text) {
				this.input.value = text;
			}
		}, o);

		this.index = -1;

		// Create necessary elements

		this.container = $.create('div', {
			className: 'awesomplete',
			around: input
		});

		this.ul = $.create('ul', {
			hidden: '',
			inside: this.container
		});

		this.status = $.create('span', {
			className: 'visually-hidden',
			role: 'status',
			'aria-live': 'assertive',
			'aria-relevant': 'additions',
			inside: this.container
		});

		// Bind events

		$.bind(this.input, {
			'input': this.evaluate.bind(this),
			'blur': this.close.bind(this),
			'keydown': function keydown(evt) {
				var c = evt.keyCode;

				// If the dropdown `ul` is in view, then act on keydown for the following keys:
				// Enter / Esc / Up / Down
				if (me.opened) {
					if (c === 13 && me.selected) {
						// Enter
						evt.preventDefault();
						me.select();
					} else if (c === 27) {
						// Esc
						me.close();
					} else if (c === 38 || c === 40) {
						// Down/Up arrow
						evt.preventDefault();
						me[c === 38 ? 'previous' : 'next']();
					}
				}
			}
		});

		$.bind(this.input.form, { 'submit': this.close.bind(this) });

		$.bind(this.ul, { 'mousedown': function mousedown(evt) {
				var li = evt.target;

				if (li !== this) {

					while (li && !/li/i.test(li.nodeName)) {
						li = li.parentNode;
					}

					if (li) {
						me.select(li);
					}
				}
			} });

		if (this.input.hasAttribute('list')) {
			this.list = '#' + input.getAttribute('list');
			input.removeAttribute('list');
		} else {
			this.list = this.input.getAttribute('data-list') || o.list || [];
		}

		_.all.push(this);
	};

	_.prototype = {
		set list(list) {
			if (Array.isArray(list)) {
				this._list = list;
			} else if (typeof list === 'string' && list.indexOf(',') > -1) {
				this._list = list.split(/\s*,\s*/);
			} else {
				// Element or CSS selector
				list = $(list);

				if (list && list.children) {
					this._list = slice.apply(list.children).map(function (el) {
						return el.textContent.trim();
					});
				}
			}

			if (document.activeElement === this.input) {
				this.evaluate();
			}
		},

		get selected() {
			return this.index > -1;
		},

		get opened() {
			return this.ul && this.ul.getAttribute('hidden') == null;
		},

		close: function close() {
			this.ul.setAttribute('hidden', '');
			this.index = -1;

			$.fire(this.input, 'awesomplete-close');
		},

		open: function open() {
			this.ul.removeAttribute('hidden');

			if (this.autoFirst && this.index === -1) {
				this.goto(0);
			}

			$.fire(this.input, 'awesomplete-open');
		},

		next: function next() {
			var count = this.ul.children.length;

			this.goto(this.index < count - 1 ? this.index + 1 : -1);
		},

		previous: function previous() {
			var count = this.ul.children.length;

			this.goto(this.selected ? this.index - 1 : count - 1);
		},

		// Should not be used, highlights specific item without any checks!
		goto: function goto(i) {
			var lis = this.ul.children;

			if (this.selected) {
				lis[this.index].setAttribute('aria-selected', 'false');
			}

			this.index = i;

			if (i > -1 && lis.length > 0) {
				lis[i].setAttribute('aria-selected', 'true');
				this.status.textContent = lis[i].textContent;
			}

			$.fire(this.input, 'awesomplete-highlight');
		},

		select: function select(selected) {
			selected = selected || this.ul.children[this.index];

			if (selected) {
				var prevented;

				$.fire(this.input, 'awesomplete-select', {
					text: selected.textContent,
					preventDefault: function preventDefault() {
						prevented = true;
					}
				});

				if (!prevented) {
					this.replace(selected.textContent);
					this.close();
					$.fire(this.input, 'awesomplete-selectcomplete');
				}
			}
		},

		evaluate: function evaluate() {
			var me = this;
			var value = this.input.value;

			if (value.length >= this.minChars && this._list.length > 0) {
				this.index = -1;
				// Populate list with options that match
				this.ul.innerHTML = '';

				this._list.filter(function (item) {
					return me.filter(item, value);
				}).sort(this.sort).every(function (text, i) {
					me.ul.appendChild(me.item(text, value));

					return i < me.maxItems - 1;
				});

				if (this.ul.children.length === 0) {
					this.close();
				} else {
					this.open();
				}
			} else {
				this.close();
			}
		}
	};

	// Static methods/properties

	_.all = [];

	_.FILTER_CONTAINS = function (text, input) {
		return RegExp($.regExpEscape(input.trim()), 'i').test(text);
	};

	_.FILTER_STARTSWITH = function (text, input) {
		return RegExp('^' + $.regExpEscape(input.trim()), 'i').test(text);
	};

	_.SORT_BYLENGTH = function (a, b) {
		if (a.length !== b.length) {
			return a.length - b.length;
		}

		return a < b ? -1 : 1;
	};

	// Private functions

	function configure(properties, o) {
		for (var i in properties) {
			var initial = properties[i],
			    attrValue = this.input.getAttribute('data-' + i.toLowerCase());

			if (typeof initial === 'number') {
				this[i] = parseInt(attrValue);
			} else if (initial === false) {
				// Boolean options must be false by default anyway
				this[i] = attrValue !== null;
			} else if (initial instanceof Function) {
				this[i] = null;
			} else {
				this[i] = attrValue;
			}

			if (!this[i] && this[i] !== 0) {
				this[i] = i in o ? o[i] : initial;
			}
		}
	}

	// Helpers

	var slice = Array.prototype.slice;

	function $(expr, con) {
		return typeof expr === 'string' ? (con || document).querySelector(expr) : expr || null;
	}

	function $$(expr, con) {
		return slice.call((con || document).querySelectorAll(expr));
	}

	$.create = function (tag, o) {
		var element = document.createElement(tag);

		for (var i in o) {
			var val = o[i];

			if (i === 'inside') {
				$(val).appendChild(element);
			} else if (i === 'around') {
				var ref = $(val);
				ref.parentNode.insertBefore(element, ref);
				element.appendChild(ref);
			} else if (i in element) {
				element[i] = val;
			} else {
				element.setAttribute(i, val);
			}
		}

		return element;
	};

	$.bind = function (element, o) {
		if (element) {
			for (var event in o) {
				var callback = o[event];

				event.split(/\s+/).forEach(function (event) {
					element.addEventListener(event, callback);
				});
			}
		}
	};

	$.fire = function (target, type, properties) {
		var evt = document.createEvent('HTMLEvents');

		evt.initEvent(type, true, true);

		for (var j in properties) {
			evt[j] = properties[j];
		}

		target.dispatchEvent(evt);
	};

	$.regExpEscape = function (s) {
		return s.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
	};

	// Initialization

	function init() {
		$$('input.awesomplete').forEach(function (input) {
			new _(input);
		});
	}

	// Are we in a browser? Check for Document constructor
	if (typeof Document !== 'undefined') {
		// DOM already loaded?
		if (document.readyState !== 'loading') {
			init();
		} else {
			// Wait for it
			document.addEventListener('DOMContentLoaded', init);
		}
	}

	_.$ = $;
	_.$$ = $$;

	// Make sure to export Awesomplete on self when in a browser
	if (typeof self !== 'undefined') {
		self.Awesomplete = _;
	}

	// Expose Awesomplete as a CJS module
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
		module.exports = _;
	}

	return _;
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiXyIsImlucHV0IiwibyIsIm1lIiwiJCIsInNldEF0dHJpYnV0ZSIsImNvbmZpZ3VyZSIsImNhbGwiLCJtaW5DaGFycyIsIm1heEl0ZW1zIiwiYXV0b0ZpcnN0IiwiZmlsdGVyIiwiRklMVEVSX0NPTlRBSU5TIiwic29ydCIsIlNPUlRfQllMRU5HVEgiLCJpdGVtIiwidGV4dCIsImNyZWF0ZSIsImlubmVySFRNTCIsInJlcGxhY2UiLCJSZWdFeHAiLCJyZWdFeHBFc2NhcGUiLCJ0cmltIiwidmFsdWUiLCJpbmRleCIsImNvbnRhaW5lciIsImNsYXNzTmFtZSIsImFyb3VuZCIsInVsIiwiaGlkZGVuIiwiaW5zaWRlIiwic3RhdHVzIiwicm9sZSIsImJpbmQiLCJldmFsdWF0ZSIsImNsb3NlIiwiZXZ0IiwiYyIsImtleUNvZGUiLCJvcGVuZWQiLCJzZWxlY3RlZCIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0IiwiZm9ybSIsImxpIiwidGFyZ2V0IiwidGVzdCIsIm5vZGVOYW1lIiwicGFyZW50Tm9kZSIsImhhc0F0dHJpYnV0ZSIsImxpc3QiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhbGwiLCJwdXNoIiwicHJvdG90eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwiX2xpc3QiLCJpbmRleE9mIiwic3BsaXQiLCJjaGlsZHJlbiIsInNsaWNlIiwiYXBwbHkiLCJtYXAiLCJlbCIsInRleHRDb250ZW50IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZmlyZSIsIm9wZW4iLCJnb3RvIiwibmV4dCIsImNvdW50IiwibGVuZ3RoIiwicHJldmlvdXMiLCJpIiwibGlzIiwicHJldmVudGVkIiwiZXZlcnkiLCJhcHBlbmRDaGlsZCIsIkZJTFRFUl9TVEFSVFNXSVRIIiwiYSIsImIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbCIsImF0dHJWYWx1ZSIsInRvTG93ZXJDYXNlIiwicGFyc2VJbnQiLCJGdW5jdGlvbiIsImV4cHIiLCJjb24iLCJxdWVyeVNlbGVjdG9yIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFnIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWwiLCJyZWYiLCJpbnNlcnRCZWZvcmUiLCJldmVudCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0eXBlIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJqIiwiZGlzcGF0Y2hFdmVudCIsInMiLCJpbml0IiwiRG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwic2VsZiIsIkF3ZXNvbXBsZXRlIiwiZXhwb3J0cyIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7O0FBT0MsYUFBWTs7QUFFVCxLQUFJQSxJQUFJLFNBQUpBLENBQUksQ0FBVUMsS0FBVixFQUFpQkMsQ0FBakIsRUFBb0I7QUFDSCxNQUFJQyxLQUFLLElBQVQ7O0FBRTVCOztBQUU0QixPQUFLRixLQUFMLEdBQWFHLEVBQUVILEtBQUYsQ0FBYjtBQUNBLE9BQUtBLEtBQUwsQ0FBV0ksWUFBWCxDQUF3QixjQUF4QixFQUF3QyxPQUF4QztBQUNBLE9BQUtKLEtBQUwsQ0FBV0ksWUFBWCxDQUF3QixtQkFBeEIsRUFBNkMsTUFBN0M7O0FBRUFILE1BQUlBLEtBQUssRUFBVDs7QUFFQUksWUFBVUMsSUFBVixDQUFlLElBQWYsRUFBcUI7QUFDaENDLGFBQVUsQ0FEc0I7QUFFaENDLGFBQVUsRUFGc0I7QUFHaENDLGNBQVcsS0FIcUI7QUFJaENDLFdBQVFYLEVBQUVZLGVBSnNCO0FBS2hDQyxTQUFNYixFQUFFYyxhQUx3QjtBQU1oQ0MsU0FBTSxjQUFVQyxJQUFWLEVBQWdCZixLQUFoQixFQUF1QjtBQUM1QixXQUFPRyxFQUFFYSxNQUFGLENBQVMsSUFBVCxFQUFlO0FBQ3JCQyxnQkFBV0YsS0FBS0csT0FBTCxDQUFhQyxPQUFPaEIsRUFBRWlCLFlBQUYsQ0FBZXBCLE1BQU1xQixJQUFOLEVBQWYsQ0FBUCxFQUFxQyxJQUFyQyxDQUFi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QUFDNEIsTUFBSTdDLFNBQVM4QyxVQUFULEtBQXdCLFNBQTVCLEVBQXVDO0FBQ2xERjtBQUNoQixHQUYyQixNQUdLO0FBQ2hDO0FBQ2dCNUMsWUFBU3FDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q08sSUFBOUM7QUFDaEI7QUFDRzs7QUFFRC9HLEdBQUVJLENBQUYsR0FBTUEsQ0FBTjtBQUNBSixHQUFFNkYsRUFBRixHQUFPQSxFQUFQOztBQUVKO0FBQ0ksS0FBSSxPQUFPcUIsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUNSQSxPQUFLQyxXQUFMLEdBQW1CbkgsQ0FBbkI7QUFDeEI7O0FBRUw7QUFDSSxLQUFJLFFBQU9vSCxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQXZCLEVBQWlDO0FBQ1JDLFNBQU9ELE9BQVAsR0FBaUJwSCxDQUFqQjtBQUN4Qjs7QUFFRCxRQUFPQSxDQUFQO0FBRUgsQ0EvWEEsR0FBRCIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFNpbXBsZSwgbGlnaHR3ZWlnaHQsIHVzYWJsZSBsb2NhbCBhdXRvY29tcGxldGUgbGlicmFyeSBmb3IgbW9kZXJuIGJyb3dzZXJzXHJcbiAqIEJlY2F1c2UgdGhlcmUgd2VyZW7igJl0IGVub3VnaCBhdXRvY29tcGxldGUgc2NyaXB0cyBpbiB0aGUgd29ybGQ/IEJlY2F1c2UgSeKAmW0gY29tcGxldGVseSBpbnNhbmUgYW5kIGhhdmUgTklIIHN5bmRyb21lPyBQcm9iYWJseSBib3RoLiA6UFxyXG4gKiBAYXV0aG9yIExlYSBWZXJvdSBodHRwOi8vbGVhdmVyb3UuZ2l0aHViLmlvL2F3ZXNvbXBsZXRlXHJcbiAqIE1JVCBsaWNlbnNlXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgXyA9IGZ1bmN0aW9uIChpbnB1dCwgbykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG5cclxuXHQvLyBTZXR1cFxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9ICQoaW5wdXQpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ2ZhbHNlJyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWF1dG9jb21wbGV0ZScsICdsaXN0Jyk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gbyB8fCB7fTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyZS5jYWxsKHRoaXMsIHtcclxuXHRcdCAgICAgICAgICAgICAgICBtaW5DaGFyczogMixcclxuXHRcdCAgICAgICAgICAgICAgICBtYXhJdGVtczogMTAsXHJcblx0XHQgICAgICAgICAgICAgICAgYXV0b0ZpcnN0OiBmYWxzZSxcclxuXHRcdCAgICAgICAgICAgICAgICBmaWx0ZXI6IF8uRklMVEVSX0NPTlRBSU5TLFxyXG5cdFx0ICAgICAgICAgICAgICAgIHNvcnQ6IF8uU09SVF9CWUxFTkdUSCxcclxuXHRcdCAgICAgICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiAodGV4dCwgaW5wdXQpIHtcclxuXHRcdFx0ICAgICAgICAgICAgICAgIHJldHVybiAkLmNyZWF0ZSgnbGknLCB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIGlubmVySFRNTDogdGV4dC5yZXBsYWNlKFJlZ0V4cCgkLnJlZ0V4cEVzY2FwZShpbnB1dC50cmltKCkpLCAnZ2knKSwgJzxtYXJrPiQmPC9tYXJrPicpLFxyXG5cdFx0XHRcdCAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ2ZhbHNlJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQgICAgICAgICAgICAgICAgcmVwbGFjZTogZnVuY3Rpb24gKHRleHQpIHtcclxuXHRcdFx0ICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0ZXh0O1xyXG5cdFx0fVxyXG5cdH0sIG8pO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IC0xO1xyXG5cclxuXHQvLyBDcmVhdGUgbmVjZXNzYXJ5IGVsZW1lbnRzXHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQuY3JlYXRlKCdkaXYnLCB7XHJcblx0XHQgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXdlc29tcGxldGUnLFxyXG5cdFx0ICAgICAgICAgICAgICAgIGFyb3VuZDogaW5wdXRcclxuXHR9KTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWwgPSAkLmNyZWF0ZSgndWwnLCB7XHJcblx0XHQgICAgICAgICAgICAgICAgaGlkZGVuOiAnJyxcclxuXHRcdCAgICAgICAgICAgICAgICBpbnNpZGU6IHRoaXMuY29udGFpbmVyXHJcblx0fSk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICQuY3JlYXRlKCdzcGFuJywge1xyXG5cdFx0ICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zpc3VhbGx5LWhpZGRlbicsXHJcblx0XHQgICAgICAgICAgICAgICAgcm9sZTogJ3N0YXR1cycsXHJcblx0XHQgICAgICAgICAgICAnYXJpYS1saXZlJzogJ2Fzc2VydGl2ZScsXHJcblx0XHQgICAgICAgICAgICAnYXJpYS1yZWxldmFudCc6ICdhZGRpdGlvbnMnLFxyXG5cdFx0ICAgICAgICAgICAgICAgIGluc2lkZTogdGhpcy5jb250YWluZXJcclxuXHR9KTtcclxuXHJcblx0Ly8gQmluZCBldmVudHNcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYmluZCh0aGlzLmlucHV0LCB7XHJcblx0XHQgICAgICAgICAgICAnaW5wdXQnOiB0aGlzLmV2YWx1YXRlLmJpbmQodGhpcyksXHJcblx0XHQgICAgICAgICAgICAnYmx1cic6IHRoaXMuY2xvc2UuYmluZCh0aGlzKSxcclxuXHRcdCAgICAgICAgICAgICdrZXlkb3duJzogZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdCAgICAgICAgICAgICAgICB2YXIgYyA9IGV2dC5rZXlDb2RlO1xyXG5cclxuXHRcdFx0Ly8gSWYgdGhlIGRyb3Bkb3duIGB1bGAgaXMgaW4gdmlldywgdGhlbiBhY3Qgb24ga2V5ZG93biBmb3IgdGhlIGZvbGxvd2luZyBrZXlzOlxyXG5cdFx0XHQvLyBFbnRlciAvIEVzYyAvIFVwIC8gRG93blxyXG5cdFx0XHQgICAgICAgICAgICAgICAgaWYobWUub3BlbmVkKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIGlmIChjID09PSAxMyAmJiBtZS5zZWxlY3RlZCkgeyAvLyBFbnRlclxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIG1lLnNlbGVjdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gMjcpIHsgLy8gRXNjXHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgbWUuY2xvc2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoYyA9PT0gMzggfHwgYyA9PT0gNDApIHsgLy8gRG93bi9VcCBhcnJvd1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIG1lW2MgPT09IDM4PyAncHJldmlvdXMnIDogJ25leHQnXSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5iaW5kKHRoaXMuaW5wdXQuZm9ybSwgeydzdWJtaXQnOiB0aGlzLmNsb3NlLmJpbmQodGhpcyl9KTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuYmluZCh0aGlzLnVsLCB7J21vdXNlZG93bic6IGZ1bmN0aW9uKGV2dCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHZhciBsaSA9IGV2dC50YXJnZXQ7XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgIGlmIChsaSAhPT0gdGhpcykge1xyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIHdoaWxlIChsaSAmJiAhL2xpL2kudGVzdChsaS5ub2RlTmFtZSkpIHtcclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgbGkgPSBsaS5wYXJlbnROb2RlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgaWYgKGxpKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIG1lLnNlbGVjdChsaSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9fSk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dC5oYXNBdHRyaWJ1dGUoJ2xpc3QnKSkge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9ICcjJyArIGlucHV0LmdldEF0dHJpYnV0ZSgnbGlzdCcpO1xyXG5cdFx0ICAgICAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnbGlzdCcpO1xyXG5cdH1cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblx0XHQgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5pbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdCcpIHx8IG8ubGlzdCB8fCBbXTtcclxuXHR9XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmFsbC5wdXNoKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfLnByb3RvdHlwZSA9IHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IGxpc3QobGlzdCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKSB7XHJcblx0XHRcdCAgICAgICAgICAgICAgICB0aGlzLl9saXN0ID0gbGlzdDtcclxuXHRcdH1cclxuXHRcdCAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbGlzdCA9PT0gJ3N0cmluZycgJiYgbGlzdC5pbmRleE9mKCcsJykgPiAtMSkge1xyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICB0aGlzLl9saXN0ID0gbGlzdC5zcGxpdCgvXFxzKixcXHMqLyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHsgLy8gRWxlbWVudCBvciBDU1Mgc2VsZWN0b3JcclxuXHRcdFx0ICAgICAgICAgICAgICAgIGxpc3QgPSAkKGxpc3QpO1xyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIGlmIChsaXN0ICYmIGxpc3QuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgdGhpcy5fbGlzdCA9IHNsaWNlLmFwcGx5KGxpc3QuY2hpbGRyZW4pLm1hcChmdW5jdGlvbiAoZWwpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICByZXR1cm4gZWwudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmlucHV0KSB7XHJcblx0XHRcdCAgICAgICAgICAgICAgICB0aGlzLmV2YWx1YXRlKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCBzZWxlY3RlZCgpIHtcclxuXHRcdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA+IC0xO1xyXG5cdH0sXHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQgb3BlbmVkKCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVsICYmIHRoaXMudWwuZ2V0QXR0cmlidXRlKCdoaWRkZW4nKSA9PSBudWxsO1xyXG5cdH0sXHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHRoaXMudWwuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XHJcblx0XHQgICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IC0xO1xyXG5cclxuXHRcdCAgICAgICAgICAgICAgICAkLmZpcmUodGhpcy5pbnB1dCwgJ2F3ZXNvbXBsZXRlLWNsb3NlJyk7XHJcblx0fSxcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgICAgICAgICB0aGlzLnVsLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9GaXJzdCAmJiB0aGlzLmluZGV4ID09PSAtMSkge1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgdGhpcy5nb3RvKDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdCAgICAgICAgICAgICAgICAkLmZpcmUodGhpcy5pbnB1dCwgJ2F3ZXNvbXBsZXRlLW9wZW4nKTtcclxuXHR9LFxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IHRoaXMudWwuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cclxuXHRcdCAgICAgICAgICAgICAgICB0aGlzLmdvdG8odGhpcy5pbmRleCA8IGNvdW50IC0gMT8gdGhpcy5pbmRleCArIDEgOiAtMSk7XHJcblx0fSxcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gdGhpcy51bC5jaGlsZHJlbi5sZW5ndGg7XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgIHRoaXMuZ290byh0aGlzLnNlbGVjdGVkPyB0aGlzLmluZGV4IC0gMSA6IGNvdW50IC0gMSk7XHJcblx0fSxcclxuXHJcblx0Ly8gU2hvdWxkIG5vdCBiZSB1c2VkLCBoaWdobGlnaHRzIHNwZWNpZmljIGl0ZW0gd2l0aG91dCBhbnkgY2hlY2tzIVxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb3RvOiBmdW5jdGlvbiAoaSkge1xyXG5cdFx0ICAgICAgICAgICAgICAgIHZhciBsaXMgPSB0aGlzLnVsLmNoaWxkcmVuO1xyXG5cclxuXHRcdCAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgbGlzW3RoaXMuaW5kZXhdLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gaTtcclxuXHJcblx0XHQgICAgICAgICAgICAgICAgaWYgKGkgPiAtMSAmJiBsaXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgbGlzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XHJcblx0XHRcdCAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cy50ZXh0Q29udGVudCA9IGxpc1tpXS50ZXh0Q29udGVudDtcclxuXHRcdH1cclxuXHJcblx0XHQgICAgICAgICAgICAgICAgJC5maXJlKHRoaXMuaW5wdXQsICdhd2Vzb21wbGV0ZS1oaWdobGlnaHQnKTtcclxuXHR9LFxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcclxuXHRcdCAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdGVkIHx8IHRoaXMudWwuY2hpbGRyZW5bdGhpcy5pbmRleF07XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgdmFyIHByZXZlbnRlZDtcclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAkLmZpcmUodGhpcy5pbnB1dCwgJ2F3ZXNvbXBsZXRlLXNlbGVjdCcsIHtcclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgdGV4dDogc2VsZWN0ZWQudGV4dENvbnRlbnQsXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgcHJldmVudGVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIGlmICghcHJldmVudGVkKSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZShzZWxlY3RlZC50ZXh0Q29udGVudCk7XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgJC5maXJlKHRoaXMuaW5wdXQsICdhd2Vzb21wbGV0ZS1zZWxlY3Rjb21wbGV0ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2YWx1YXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdCAgICAgICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG5cdFx0ICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gdGhpcy5taW5DaGFycyAmJiB0aGlzLl9saXN0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0ICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSAtMTtcclxuXHRcdFx0Ly8gUG9wdWxhdGUgbGlzdCB3aXRoIG9wdGlvbnMgdGhhdCBtYXRjaFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgdGhpcy51bC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICB0aGlzLl9saXN0XHJcblx0XHRcdFx0LmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgcmV0dXJuIG1lLmZpbHRlcihpdGVtLCB2YWx1ZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc29ydCh0aGlzLnNvcnQpXHJcblx0XHRcdFx0LmV2ZXJ5KGZ1bmN0aW9uKHRleHQsIGkpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICBtZS51bC5hcHBlbmRDaGlsZChtZS5pdGVtKHRleHQsIHZhbHVlKSk7XHJcblxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIHJldHVybiBpIDwgbWUubWF4SXRlbXMgLSAxO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIGlmICh0aGlzLnVsLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIHRoaXMub3BlbigpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQgICAgICAgICAgICAgICAgZWxzZSB7XHJcblx0XHRcdCAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcblx0XHR9XHJcblx0fVxyXG4gICAgfTtcclxuXHJcbi8vIFN0YXRpYyBtZXRob2RzL3Byb3BlcnRpZXNcclxuXHJcbiAgICBfLmFsbCA9IFtdO1xyXG5cclxuICAgIF8uRklMVEVSX0NPTlRBSU5TID0gZnVuY3Rpb24gKHRleHQsIGlucHV0KSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWdFeHAoJC5yZWdFeHBFc2NhcGUoaW5wdXQudHJpbSgpKSwgJ2knKS50ZXN0KHRleHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfLkZJTFRFUl9TVEFSVFNXSVRIID0gZnVuY3Rpb24gKHRleHQsIGlucHV0KSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWdFeHAoJ14nICsgJC5yZWdFeHBFc2NhcGUoaW5wdXQudHJpbSgpKSwgJ2knKS50ZXN0KHRleHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfLlNPUlRfQllMRU5HVEggPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XHJcblx0XHQgICAgICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPCBiPyAtMSA6IDE7XHJcbiAgICB9O1xyXG5cclxuLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuXHJcbiAgICBmdW5jdGlvbiBjb25maWd1cmUocHJvcGVydGllcywgbykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHByb3BlcnRpZXMpIHtcclxuXHRcdCAgICAgICAgICAgICAgICB2YXIgaW5pdGlhbCA9IHByb3BlcnRpZXNbaV0sXHJcblx0XHQgICAgICAgICAgICAgICAgICAgIGF0dHJWYWx1ZSA9IHRoaXMuaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBpLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuXHRcdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGluaXRpYWwgPT09ICdudW1iZXInKSB7XHJcblx0XHRcdCAgICAgICAgICAgICAgICB0aGlzW2ldID0gcGFyc2VJbnQoYXR0clZhbHVlKTtcclxuXHRcdH1cclxuXHRcdCAgICAgICAgICAgICAgICBlbHNlIGlmIChpbml0aWFsID09PSBmYWxzZSkgeyAvLyBCb29sZWFuIG9wdGlvbnMgbXVzdCBiZSBmYWxzZSBieSBkZWZhdWx0IGFueXdheVxyXG5cdFx0XHQgICAgICAgICAgICAgICAgdGhpc1tpXSA9IGF0dHJWYWx1ZSAhPT0gbnVsbDtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGluaXRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgdGhpc1tpXSA9IG51bGw7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBhdHRyVmFsdWU7XHJcblx0XHR9XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgIGlmICghdGhpc1tpXSAmJiB0aGlzW2ldICE9PSAwKSB7XHJcblx0XHRcdCAgICAgICAgICAgICAgICB0aGlzW2ldID0gKGkgaW4gbyk/IG9baV0gOiBpbml0aWFsO1xyXG5cdFx0fVxyXG5cdH1cclxuICAgIH1cclxuXHJcbi8vIEhlbHBlcnNcclxuXHJcbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XHJcblxyXG4gICAgZnVuY3Rpb24gJChleHByLCBjb24pIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBleHByID09PSAnc3RyaW5nJz8gKGNvbiB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihleHByKSA6IGV4cHIgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkJChleHByLCBjb24pIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNsaWNlLmNhbGwoKGNvbiB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChleHByKSk7XHJcbiAgICB9XHJcblxyXG4gICAgJC5jcmVhdGUgPSBmdW5jdGlvbih0YWcsIG8pIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIG8pIHtcclxuXHRcdCAgICAgICAgICAgICAgICB2YXIgdmFsID0gb1tpXTtcclxuXHJcblx0XHQgICAgICAgICAgICAgICAgaWYgKGkgPT09ICdpbnNpZGUnKSB7XHJcblx0XHRcdCAgICAgICAgICAgICAgICAkKHZhbCkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHQgICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gJ2Fyb3VuZCcpIHtcclxuXHRcdFx0ICAgICAgICAgICAgICAgIHZhciByZWYgPSAkKHZhbCk7XHJcblx0XHRcdCAgICAgICAgICAgICAgICByZWYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcmVmKTtcclxuXHRcdFx0ICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmVmKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGkgaW4gZWxlbWVudCkge1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgZWxlbWVudFtpXSA9IHZhbDtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaSwgdmFsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgJC5iaW5kID0gZnVuY3Rpb24oZWxlbWVudCwgbykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGV2ZW50IGluIG8pIHtcclxuXHRcdFx0ICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IG9bZXZlbnRdO1xyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIGV2ZW50LnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuICAgIH07XHJcblxyXG4gICAgJC5maXJlID0gZnVuY3Rpb24odGFyZ2V0LCB0eXBlLCBwcm9wZXJ0aWVzKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LmluaXRFdmVudCh0eXBlLCB0cnVlLCB0cnVlICk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHByb3BlcnRpZXMpIHtcclxuXHRcdCAgICAgICAgICAgICAgICBldnRbal0gPSBwcm9wZXJ0aWVzW2pdO1xyXG5cdH1cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9O1xyXG5cclxuICAgICQucmVnRXhwRXNjYXBlID0gZnVuY3Rpb24gKHMpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvWy1cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XHJcbiAgICB9XHJcblxyXG4vLyBJbml0aWFsaXphdGlvblxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkKCdpbnB1dC5hd2Vzb21wbGV0ZScpLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XHJcblx0XHQgICAgICAgICAgICAgICAgbmV3IF8oaW5wdXQpO1xyXG5cdH0pO1xyXG4gICAgfVxyXG5cclxuLy8gQXJlIHdlIGluIGEgYnJvd3Nlcj8gQ2hlY2sgZm9yIERvY3VtZW50IGNvbnN0cnVjdG9yXHJcbiAgICBpZiAodHlwZW9mIERvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdC8vIERPTSBhbHJlYWR5IGxvYWRlZD9cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xyXG5cdFx0ICAgICAgICAgICAgICAgIGluaXQoKTtcclxuXHR9XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cdFx0Ly8gV2FpdCBmb3IgaXRcclxuXHRcdCAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblx0fVxyXG4gICAgfVxyXG5cclxuICAgIF8uJCA9ICQ7XHJcbiAgICBfLiQkID0gJCQ7XHJcblxyXG4vLyBNYWtlIHN1cmUgdG8gZXhwb3J0IEF3ZXNvbXBsZXRlIG9uIHNlbGYgd2hlbiBpbiBhIGJyb3dzZXJcclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5Bd2Vzb21wbGV0ZSA9IF87XHJcbiAgICB9XHJcblxyXG4vLyBFeHBvc2UgQXdlc29tcGxldGUgYXMgYSBDSlMgbW9kdWxlXHJcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gXztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gXztcclxuXHJcbn0oKSk7XHJcbiJdfQ==