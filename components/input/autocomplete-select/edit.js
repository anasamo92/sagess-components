'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentBase = require('../../../behaviours/component-base');

var _componentBase2 = _interopRequireDefault(_componentBase);

var _material = require('../../../behaviours/material');

var _material2 = _interopRequireDefault(_material);

var _filterHtmlAttributes = require('../../../utils/filter-html-attributes');

var _filterHtmlAttributes2 = _interopRequireDefault(_filterHtmlAttributes);

var _closest = require('closest');

var _closest2 = _interopRequireDefault(_closest);

var _debounce = require('lodash/function/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _uniqueId = require('lodash/utility/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ENTER_KEY_CODE = 13;
var TAB_KEY_CODE = 27;
var UP_ARROW_KEY_CODE = 38;
var DOWN_ARROW_KEY_CODE = 40;

var propTypes = {
    customError: _react.PropTypes.string,
    inputTimeout: _react.PropTypes.number.isRequired,
    keyName: _react.PropTypes.string.isRequired,
    keyResolver: _react.PropTypes.func.isRequired,
    labelName: _react.PropTypes.string.isRequired,
    onBadInput: _react.PropTypes.func,
    onChange: _react.PropTypes.func.isRequired,
    placeholder: _react.PropTypes.string,
    querySearcher: _react.PropTypes.func.isRequired,
    renderOptions: _react.PropTypes.func,
    value: _react.PropTypes.string,
    onSelectClear: _react.PropTypes.bool,
    clearOnNullValue: _react.PropTypes.bool
};

var defaultProps = {
    keyName: 'key',
    labelName: 'label',
    inputTimeout: 200,
    onSelectClear: false,
    clearOnNullValue: true
};

var Autocomplete = (_dec = (0, _material2.default)('loader'), _dec2 = (0, _material2.default)('inputText'), _dec(_class = _dec2(_class = (0, _componentBase2.default)(_class = function (_Component) {
    _inherits(Autocomplete, _Component);

    function Autocomplete(props) {
        _classCallCheck(this, Autocomplete);

        var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

        _this._handleDocumentClick = function (_ref) {
            var target = _ref.target;
            var _this$state = _this.state,
                focus = _this$state.focus,
                inputValue = _this$state.inputValue;
            var onBadInput = _this.props.onBadInput;

            if (focus) {
                var closestACParent = (0, _closest2.default)(target, '[data-id=\'' + _this.autocompleteId + '\']', true);
                if (closestACParent === undefined) {
                    _this.setState({ focus: false }, function () {
                        if (onBadInput && _this.getValue() === null && inputValue !== '') {
                            onBadInput(inputValue);
                        }
                    });
                }
            }
        };

        _this._handleQueryChange = function (_ref2) {
            var value = _ref2.target.value;

            if (value === '') {
                // the user cleared the input, don't call the querySearcher
                var onChange = _this.props.onChange;

                _this.setState({ inputValue: value, fromKeyResolver: false });
                if (onChange) onChange(null);
            } else {
                _this.setState({ inputValue: value, fromKeyResolver: false, isLoading: true });
                _this._debouncedQuerySearcher(value);
            }
        };

        _this._querySearcher = function (value) {
            var _this$props = _this.props,
                querySearcher = _this$props.querySearcher,
                keyName = _this$props.keyName,
                labelName = _this$props.labelName;

            querySearcher(value).then(function (_ref3) {
                var data = _ref3.data,
                    totalCount = _ref3.totalCount;

                // TODO handle the incomplete option list case
                var options = new Map();
                data.forEach(function (item) {
                    options.set(item[keyName], item[labelName]);
                });
                _this.setState({ options: options, isLoading: false, totalCount: totalCount });
            }).catch(function (error) {
                return _this.setState({ customError: error.message });
            });
        };

        _this._handleQueryFocus = function () {
            _this.refs.options.scrollTop = 0;
            if (_this.props.onFocus) {
                _this.props.onFocus.call(_this);
            }
            _this.setState({ active: '', focus: true });
        };

        _this._handleQueryKeyDown = function (event) {
            event.stopPropagation();
            var which = event.which;
            var _this$state2 = _this.state,
                active = _this$state2.active,
                options = _this$state2.options;

            if (which === ENTER_KEY_CODE && active) {
                _this._select(active);
            }
            if (which === TAB_KEY_CODE) {
                _this.setState({ focus: false }, function () {
                    return _this.refs.htmlInput.blur();
                });
            }
            if ([DOWN_ARROW_KEY_CODE, UP_ARROW_KEY_CODE].indexOf(which) !== -1) {
                // the user pressed on an arrow key, change the active key
                var optionKeys = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = options.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var key = _step.value;

                        optionKeys.push(key);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var currentIndex = optionKeys.indexOf(active);
                var newIndex = currentIndex + (which === DOWN_ARROW_KEY_CODE ? 1 : -1);
                if (newIndex >= options.size) {
                    newIndex -= options.size;
                }
                if (newIndex < 0) {
                    newIndex += options.size;
                }
                _this.setState({ active: optionKeys[newIndex] });
            }
        };

        _this._handleSuggestionHover = function (key) {
            _this.setState({ active: key });
        };

        _this._renderOptions = function () {
            var _this$state3 = _this.state,
                active = _this$state3.active,
                options = _this$state3.options,
                focus = _this$state3.focus;

            var renderedOptions = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _ref4 = _step2.value;

                    var _ref5 = _slicedToArray(_ref4, 2);

                    var key = _ref5[0];
                    var value = _ref5[1];

                    var isActive = active === key;
                    renderedOptions.push(_react2.default.createElement(
                        'li',
                        {
                            'data-active': isActive,
                            'data-focus': 'option',
                            key: key,
                            onClick: _this._select.bind(_this, key),
                            onMouseOver: _this._handleSuggestionHover.bind(_this, key)
                        },
                        _this.i18n(value)
                    ));
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return _react2.default.createElement(
                'ul',
                { 'data-focus': 'options', ref: 'options', 'data-focussed': focus },
                renderedOptions
            );
        };

        var state = {
            focus: false,
            inputValue: _this.props.value,
            options: new Map(),
            active: null,
            selected: _this.props.value,
            fromKeyResolver: false,
            isLoading: false,
            customError: _this.props.customError,
            totalCount: 0
        };

        _this.state = state;
        _this.autocompleteId = (0, _uniqueId2.default)('autocomplete-text-');
        return _this;
    }

    _createClass(Autocomplete, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                value = _props.value,
                keyResolver = _props.keyResolver,
                inputTimeout = _props.inputTimeout;


            if (value !== undefined && value !== null) {
                // value is defined, call the keyResolver to get the associated label
                keyResolver(value).then(function (inputValue) {
                    _this2.setState({ inputValue: inputValue, fromKeyResolver: true });
                }).catch(function (error) {
                    return _this2.setState({ customError: error.message });
                });
            }

            document.addEventListener('click', this._handleDocumentClick);
            this._debouncedQuerySearcher = (0, _debounce2.default)(this._querySearcher, inputTimeout);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref6) {
            var _this3 = this;

            var value = _ref6.value,
                customError = _ref6.customError,
                error = _ref6.error,
                keyResolver = _ref6.keyResolver;

            if (value !== this.props.value && value !== undefined && value !== null) {
                // value is defined, call the keyResolver to get the associated label
                this.setState({ inputValue: value, customError: customError }, function () {
                    return keyResolver(value).then(function (inputValue) {
                        _this3.setState({ inputValue: inputValue, fromKeyResolver: true });
                    }).catch(function (error) {
                        return _this3.setState({ customError: error.message });
                    });
                });
            } else if (customError !== this.props.customError) {
                this.setState({ customError: customError });
            }

            if (error) {
                this.setState({ customError: error });
            }

            if (this.props.clearOnNullValue && this.props.clearOnNullValue === true && value === null && this.state.inputValue !== null) {
                this.setState({ inputValue: '' });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.customError) {
                this.refs.inputText.classList.add('is-invalid');
            } else {
                this.refs.inputText.classList.remove('is-invalid');
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this._handleDocumentClick);
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            var _props2 = this.props,
                labelName = _props2.labelName,
                keyName = _props2.keyName,
                value = _props2.value;
            var _state = this.state,
                inputValue = _state.inputValue,
                selected = _state.selected,
                options = _state.options,
                fromKeyResolver = _state.fromKeyResolver;

            var resolvedLabel = options.get(selected);
            if (inputValue === '') {
                // The user cleared the field, return a null
                return null;
            } else if (fromKeyResolver) {
                // Value was received from the keyResolver, give it firectly
                return value;
            } else if (resolvedLabel !== inputValue && selected !== inputValue) {
                // The user typed something without selecting any option, return a null
                return null;
            } else {
                // The user selected an option (or no value was provided), return it
                return selected || null;
            }
        }
    }, {
        key: '_select',
        value: function _select(key) {
            var options = this.state.options;
            var onChange = this.props.onChange;

            var resolvedLabel = options.get(key) || '';
            this.refs.htmlInput.blur();
            var newState = { inputValue: this.i18n(resolvedLabel), selected: key, focus: false };
            if (this.props.onSelectClear === true) {
                newState = { inputValue: '', selected: null, focus: false };
            }
            this.setState(newState, function () {
                if (onChange) {
                    onChange(key);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                inputValue = _state2.inputValue,
                isLoading = _state2.isLoading;
            var _props3 = this.props,
                customError = _props3.customError,
                renderOptions = _props3.renderOptions;


            var validInputProps = (0, _filterHtmlAttributes2.default)(this.props);

            var placeholder = validInputProps.placeholder;


            validInputProps.value = inputValue;
            validInputProps.onFocus = this._handleQueryFocus;
            validInputProps.onKeyDown = this._handleQueryKeyDown;
            validInputProps.onChange = this._handleQueryChange;

            var inputProps = Object.assign({}, validInputProps);

            return _react2.default.createElement(
                'div',
                { 'data-focus': 'autocomplete', 'data-id': this.autocompleteId },
                _react2.default.createElement(
                    'div',
                    { className: 'mdl-textfield mdl-js-textfield' + (customError ? ' is-invalid' : ''), 'data-focus': 'input-text', ref: 'inputText' },
                    _react2.default.createElement('div', { 'data-focus': 'loading', 'data-loading': isLoading, className: 'mdl-progress mdl-js-progress mdl-progress__indeterminate', ref: 'loader' }),
                    _react2.default.createElement('input', Object.assign({
                        className: 'mdl-textfield__input'
                    }, inputProps, {
                        ref: 'htmlInput',
                        type: 'text',
                        autoComplete: 'off'
                    })),
                    _react2.default.createElement(
                        'label',
                        { className: 'mdl-textfield__label' },
                        this.i18n(placeholder)
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'mdl-textfield__error' },
                        this.i18n(customError)
                    )
                ),
                renderOptions ? renderOptions.call(this) : this._renderOptions()
            );
        }
    }]);

    return Autocomplete;
}(_react.Component)) || _class) || _class) || _class);


Autocomplete.displayName = 'Autocomplete';
Autocomplete.defaultProps = defaultProps;
Autocomplete.propTypes = propTypes;

exports.default = Autocomplete;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJUQUJfS0VZX0NPREUiLCJVUF9BUlJPV19LRVlfQ09ERSIsIkRPV05fQVJST1dfS0VZX0NPREUiLCJwcm9wVHlwZXMiLCJjdXN0b21FcnJvciIsIlByb3BUeXBlcyIsInN0cmluZyIsImlucHV0VGltZW91dCIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJrZXlOYW1lIiwia2V5UmVzb2x2ZXIiLCJmdW5jIiwibGFiZWxOYW1lIiwib25CYWRJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJxdWVyeVNlYXJjaGVyIiwicmVuZGVyT3B0aW9ucyIsInZhbHVlIiwib25TZWxlY3RDbGVhciIsImJvb2wiLCJjbGVhck9uTnVsbFZhbHVlIiwiZGVmYXVsdFByb3BzIiwiQXV0b2NvbXBsZXRlIiwiQ29tcG9uZW50QmFzZUJlaGF2aW91ciIsInByb3BzIiwiX2hhbmRsZURvY3VtZW50Q2xpY2siLCJ0YXJnZXQiLCJzdGF0ZSIsImZvY3VzIiwiaW5wdXRWYWx1ZSIsImNsb3Nlc3RBQ1BhcmVudCIsImF1dG9jb21wbGV0ZUlkIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJnZXRWYWx1ZSIsIl9oYW5kbGVRdWVyeUNoYW5nZSIsImZyb21LZXlSZXNvbHZlciIsImlzTG9hZGluZyIsIl9kZWJvdW5jZWRRdWVyeVNlYXJjaGVyIiwiX3F1ZXJ5U2VhcmNoZXIiLCJ0aGVuIiwiZGF0YSIsInRvdGFsQ291bnQiLCJvcHRpb25zIiwiTWFwIiwiZm9yRWFjaCIsInNldCIsIml0ZW0iLCJjYXRjaCIsImVycm9yIiwibWVzc2FnZSIsIl9oYW5kbGVRdWVyeUZvY3VzIiwicmVmcyIsInNjcm9sbFRvcCIsIm9uRm9jdXMiLCJjYWxsIiwiYWN0aXZlIiwiX2hhbmRsZVF1ZXJ5S2V5RG93biIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwid2hpY2giLCJfc2VsZWN0IiwiaHRtbElucHV0IiwiYmx1ciIsImluZGV4T2YiLCJvcHRpb25LZXlzIiwia2V5cyIsImtleSIsInB1c2giLCJjdXJyZW50SW5kZXgiLCJuZXdJbmRleCIsInNpemUiLCJfaGFuZGxlU3VnZ2VzdGlvbkhvdmVyIiwiX3JlbmRlck9wdGlvbnMiLCJyZW5kZXJlZE9wdGlvbnMiLCJpc0FjdGl2ZSIsImJpbmQiLCJpMThuIiwic2VsZWN0ZWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dFRleHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzb2x2ZWRMYWJlbCIsImdldCIsIm5ld1N0YXRlIiwidmFsaWRJbnB1dFByb3BzIiwib25LZXlEb3duIiwiaW5wdXRQcm9wcyIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEVBQXZCO0FBQ0EsSUFBTUMsZUFBZSxFQUFyQjtBQUNBLElBQU1DLG9CQUFvQixFQUExQjtBQUNBLElBQU1DLHNCQUFzQixFQUE1Qjs7QUFFQSxJQUFNQyxZQUFZO0FBQ2RDLGlCQUFhQyxpQkFBVUMsTUFEVDtBQUVkQyxrQkFBY0YsaUJBQVVHLE1BQVYsQ0FBaUJDLFVBRmpCO0FBR2RDLGFBQVNMLGlCQUFVQyxNQUFWLENBQWlCRyxVQUhaO0FBSWRFLGlCQUFhTixpQkFBVU8sSUFBVixDQUFlSCxVQUpkO0FBS2RJLGVBQVdSLGlCQUFVQyxNQUFWLENBQWlCRyxVQUxkO0FBTWRLLGdCQUFZVCxpQkFBVU8sSUFOUjtBQU9kRyxjQUFVVixpQkFBVU8sSUFBVixDQUFlSCxVQVBYO0FBUWRPLGlCQUFhWCxpQkFBVUMsTUFSVDtBQVNkVyxtQkFBZVosaUJBQVVPLElBQVYsQ0FBZUgsVUFUaEI7QUFVZFMsbUJBQWViLGlCQUFVTyxJQVZYO0FBV2RPLFdBQU9k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R0FBMkIsY0FBM0I7QUFDQXZFLGFBQWFELFlBQWIsR0FBNEJBLFlBQTVCO0FBQ0FDLGFBQWFyQixTQUFiLEdBQXlCQSxTQUF6Qjs7a0JBRWVxQixZIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50QmFzZUJlaGF2aW91ciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvdXJzL2NvbXBvbmVudC1iYXNlJztcbmltcG9ydCBNREJlaGF2aW91ciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvdXJzL21hdGVyaWFsJztcbmltcG9ydCBmaWx0ZXJQcm9wcyBmcm9tICcuLi8uLi8uLi91dGlscy9maWx0ZXItaHRtbC1hdHRyaWJ1dGVzJztcbmltcG9ydCBjbG9zZXN0IGZyb20gJ2Nsb3Nlc3QnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9mdW5jdGlvbi9kZWJvdW5jZSc7XG5pbXBvcnQgdW5pcXVlSWQgZnJvbSAnbG9kYXNoL3V0aWxpdHkvdW5pcXVlSWQnO1xuXG5jb25zdCBFTlRFUl9LRVlfQ09ERSA9IDEzO1xuY29uc3QgVEFCX0tFWV9DT0RFID0gMjc7XG5jb25zdCBVUF9BUlJPV19LRVlfQ09ERSA9IDM4O1xuY29uc3QgRE9XTl9BUlJPV19LRVlfQ09ERSA9IDQwO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgY3VzdG9tRXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAga2V5TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGtleVJlc29sdmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxhYmVsTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uQmFkSW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHF1ZXJ5U2VhcmNoZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVuZGVyT3B0aW9uczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25TZWxlY3RDbGVhcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xlYXJPbk51bGxWYWx1ZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBrZXlOYW1lOiAna2V5JyxcbiAgICBsYWJlbE5hbWU6ICdsYWJlbCcsXG4gICAgaW5wdXRUaW1lb3V0OiAyMDAsXG4gICAgb25TZWxlY3RDbGVhcjogZmFsc2UsXG4gICAgY2xlYXJPbk51bGxWYWx1ZTogdHJ1ZVxufTtcblxuQE1EQmVoYXZpb3VyKCdsb2FkZXInKVxuQE1EQmVoYXZpb3VyKCdpbnB1dFRleHQnKVxuQENvbXBvbmVudEJhc2VCZWhhdmlvdXJcbmNsYXNzIEF1dG9jb21wbGV0ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgICAgICBmb2N1czogZmFsc2UsXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczogbmV3IE1hcCgpLFxuICAgICAgICAgICAgYWN0aXZlOiBudWxsLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgICBmcm9tS2V5UmVzb2x2ZXI6IGZhbHNlLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGN1c3RvbUVycm9yOiB0aGlzLnByb3BzLmN1c3RvbUVycm9yLFxuICAgICAgICAgICAgdG90YWxDb3VudDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVJZCA9IHVuaXF1ZUlkKCdhdXRvY29tcGxldGUtdGV4dC0nKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwga2V5UmVzb2x2ZXIsIGlucHV0VGltZW91dCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkgeyAvLyB2YWx1ZSBpcyBkZWZpbmVkLCBjYWxsIHRoZSBrZXlSZXNvbHZlciB0byBnZXQgdGhlIGFzc29jaWF0ZWQgbGFiZWxcbiAgICAgICAgICAgIGtleVJlc29sdmVyKHZhbHVlKS50aGVuKGlucHV0VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlLCBmcm9tS2V5UmVzb2x2ZXI6IHRydWUgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRXJyb3I6IGVycm9yLm1lc3NhZ2UgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICAgICAgdGhpcy5fZGVib3VuY2VkUXVlcnlTZWFyY2hlciA9IGRlYm91bmNlKHRoaXMuX3F1ZXJ5U2VhcmNoZXIsIGlucHV0VGltZW91dCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IHZhbHVlLCBjdXN0b21FcnJvciwgZXJyb3IsIGtleVJlc29sdmVyIH0pIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHsgLy8gdmFsdWUgaXMgZGVmaW5lZCwgY2FsbCB0aGUga2V5UmVzb2x2ZXIgdG8gZ2V0IHRoZSBhc3NvY2lhdGVkIGxhYmVsXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdmFsdWUsIGN1c3RvbUVycm9yIH0sICgpID0+IGtleVJlc29sdmVyKHZhbHVlKS50aGVuKGlucHV0VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlLCBmcm9tS2V5UmVzb2x2ZXI6IHRydWUgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRXJyb3I6IGVycm9yLm1lc3NhZ2UgfSkpKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXN0b21FcnJvciAhPT0gdGhpcy5wcm9wcy5jdXN0b21FcnJvcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUVycm9yIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VzdG9tRXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xlYXJPbk51bGxWYWx1ZSAmJiB0aGlzLnByb3BzLmNsZWFyT25OdWxsVmFsdWUgPT09IHRydWUgJiYgdmFsdWUgPT09IG51bGwgJiYgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogJycgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1c3RvbUVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMuaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy5pbnB1dFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGljayk7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWxOYW1lLCBrZXlOYW1lLCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBpbnB1dFZhbHVlLCBzZWxlY3RlZCwgb3B0aW9ucywgZnJvbUtleVJlc29sdmVyIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCByZXNvbHZlZExhYmVsID0gb3B0aW9ucy5nZXQoc2VsZWN0ZWQpO1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycpIHsgLy8gVGhlIHVzZXIgY2xlYXJlZCB0aGUgZmllbGQsIHJldHVybiBhIG51bGxcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGZyb21LZXlSZXNvbHZlcikgeyAvLyBWYWx1ZSB3YXMgcmVjZWl2ZWQgZnJvbSB0aGUga2V5UmVzb2x2ZXIsIGdpdmUgaXQgZmlyZWN0bHlcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlZExhYmVsICE9PSBpbnB1dFZhbHVlICYmIHNlbGVjdGVkICE9PSBpbnB1dFZhbHVlKSB7IC8vIFRoZSB1c2VyIHR5cGVkIHNvbWV0aGluZyB3aXRob3V0IHNlbGVjdGluZyBhbnkgb3B0aW9uLCByZXR1cm4gYSBudWxsXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHsgLy8gVGhlIHVzZXIgc2VsZWN0ZWQgYW4gb3B0aW9uIChvciBubyB2YWx1ZSB3YXMgcHJvdmlkZWQpLCByZXR1cm4gaXRcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZCB8fCBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZURvY3VtZW50Q2xpY2sgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGZvY3VzLCBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IG9uQmFkSW5wdXQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChmb2N1cykge1xuICAgICAgICAgICAgY29uc3QgY2xvc2VzdEFDUGFyZW50ID0gY2xvc2VzdCh0YXJnZXQsIGBbZGF0YS1pZD0nJHt0aGlzLmF1dG9jb21wbGV0ZUlkfSddYCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoY2xvc2VzdEFDUGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uQmFkSW5wdXQgJiYgdGhpcy5nZXRWYWx1ZSgpID09PSBudWxsICYmIGlucHV0VmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJhZElucHV0KGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX2hhbmRsZVF1ZXJ5Q2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7IC8vIHRoZSB1c2VyIGNsZWFyZWQgdGhlIGlucHV0LCBkb24ndCBjYWxsIHRoZSBxdWVyeVNlYXJjaGVyXG4gICAgICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHZhbHVlLCBmcm9tS2V5UmVzb2x2ZXI6IGZhbHNlIH0pO1xuICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSBvbkNoYW5nZShudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSwgZnJvbUtleVJlc29sdmVyOiBmYWxzZSwgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5fZGVib3VuY2VkUXVlcnlTZWFyY2hlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX3F1ZXJ5U2VhcmNoZXIgPSB2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcXVlcnlTZWFyY2hlciwga2V5TmFtZSwgbGFiZWxOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBxdWVyeVNlYXJjaGVyKHZhbHVlKS50aGVuKCh7IGRhdGEsIHRvdGFsQ291bnQgfSkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgdGhlIGluY29tcGxldGUgb3B0aW9uIGxpc3QgY2FzZVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNldChpdGVtW2tleU5hbWVdLCBpdGVtW2xhYmVsTmFtZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3B0aW9ucywgaXNMb2FkaW5nOiBmYWxzZSwgdG90YWxDb3VudCB9KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUVycm9yOiBlcnJvci5tZXNzYWdlIH0pKTtcbiAgICB9O1xuXG4gICAgX2hhbmRsZVF1ZXJ5Rm9jdXMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcy5vcHRpb25zLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb2N1cy5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6ICcnLCBmb2N1czogdHJ1ZSB9KTtcbiAgICB9O1xuXG4gICAgX2hhbmRsZVF1ZXJ5S2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgeyB3aGljaCB9ID0gZXZlbnQ7XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlLCBvcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAod2hpY2ggPT09IEVOVEVSX0tFWV9DT0RFICYmIGFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0KGFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdoaWNoID09PSBUQUJfS0VZX0NPREUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogZmFsc2UgfSwgKCkgPT4gdGhpcy5yZWZzLmh0bWxJbnB1dC5ibHVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChbRE9XTl9BUlJPV19LRVlfQ09ERSwgVVBfQVJST1dfS0VZX0NPREVdLmluZGV4T2Yod2hpY2gpICE9PSAtMSkgeyAvLyB0aGUgdXNlciBwcmVzc2VkIG9uIGFuIGFycm93IGtleSwgY2hhbmdlIHRoZSBhY3RpdmUga2V5XG4gICAgICAgICAgICBjb25zdCBvcHRpb25LZXlzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgb2Ygb3B0aW9ucy5rZXlzKCkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IG9wdGlvbktleXMuaW5kZXhPZihhY3RpdmUpO1xuICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gY3VycmVudEluZGV4ICsgKHdoaWNoID09PSBET1dOX0FSUk9XX0tFWV9DT0RFID8gMSA6IC0xKTtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+PSBvcHRpb25zLnNpemUpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCAtPSBvcHRpb25zLnNpemVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCArPSBvcHRpb25zLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBvcHRpb25LZXlzW25ld0luZGV4XSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBfaGFuZGxlU3VnZ2VzdGlvbkhvdmVyID0ga2V5ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZToga2V5IH0pO1xuICAgIH07XG5cbiAgICBfc2VsZWN0KGtleSkge1xuICAgICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkTGFiZWwgPSBvcHRpb25zLmdldChrZXkpIHx8ICcnO1xuICAgICAgICB0aGlzLnJlZnMuaHRtbElucHV0LmJsdXIoKTtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0geyBpbnB1dFZhbHVlOiB0aGlzLmkxOG4ocmVzb2x2ZWRMYWJlbCksIHNlbGVjdGVkOiBrZXksIGZvY3VzOiBmYWxzZSB9O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdENsZWFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHsgaW5wdXRWYWx1ZTogJycsIHNlbGVjdGVkOiBudWxsLCBmb2N1czogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmVuZGVyT3B0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmUsIG9wdGlvbnMsIGZvY3VzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCByZW5kZXJlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gYWN0aXZlID09PSBrZXk7XG4gICAgICAgICAgICByZW5kZXJlZE9wdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLWZvY3VzPSdvcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zZWxlY3QuYmluZCh0aGlzLCBrZXkpfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5faGFuZGxlU3VnZ2VzdGlvbkhvdmVyLmJpbmQodGhpcywga2V5KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmkxOG4odmFsdWUpfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx1bCBkYXRhLWZvY3VzPSdvcHRpb25zJyByZWY9J29wdGlvbnMnIGRhdGEtZm9jdXNzZWQ9e2ZvY3VzfT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyZWRPcHRpb25zfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlucHV0VmFsdWUsIGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBjdXN0b21FcnJvciwgcmVuZGVyT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCB2YWxpZElucHV0UHJvcHMgPSBmaWx0ZXJQcm9wcyh0aGlzLnByb3BzKTtcblxuICAgICAgICBjb25zdCB7IHBsYWNlaG9sZGVyIH0gPSB2YWxpZElucHV0UHJvcHM7XG5cbiAgICAgICAgdmFsaWRJbnB1dFByb3BzLnZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgdmFsaWRJbnB1dFByb3BzLm9uRm9jdXMgPSB0aGlzLl9oYW5kbGVRdWVyeUZvY3VzO1xuICAgICAgICB2YWxpZElucHV0UHJvcHMub25LZXlEb3duID0gdGhpcy5faGFuZGxlUXVlcnlLZXlEb3duO1xuICAgICAgICB2YWxpZElucHV0UHJvcHMub25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVRdWVyeUNoYW5nZTtcblxuICAgICAgICBjb25zdCBpbnB1dFByb3BzID0geyAuLi52YWxpZElucHV0UHJvcHMgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdhdXRvY29tcGxldGUnIGRhdGEtaWQ9e3RoaXMuYXV0b2NvbXBsZXRlSWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkJHtjdXN0b21FcnJvciA/ICcgaXMtaW52YWxpZCcgOiAnJ31gfSBkYXRhLWZvY3VzPSdpbnB1dC10ZXh0JyByZWY9J2lucHV0VGV4dCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbG9hZGluZycgZGF0YS1sb2FkaW5nPXtpc0xvYWRpbmd9IGNsYXNzTmFtZT0nbWRsLXByb2dyZXNzIG1kbC1qcy1wcm9ncmVzcyBtZGwtcHJvZ3Jlc3NfX2luZGV0ZXJtaW5hdGUnIHJlZj0nbG9hZGVyJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWRsLXRleHRmaWVsZF9faW5wdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj0naHRtbElucHV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtZGwtdGV4dGZpZWxkX19sYWJlbCc+e3RoaXMuaTE4bihwbGFjZWhvbGRlcil9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZGwtdGV4dGZpZWxkX19lcnJvcic+e3RoaXMuaTE4bihjdXN0b21FcnJvcil9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJPcHRpb25zID8gcmVuZGVyT3B0aW9ucy5jYWxsKHRoaXMpIDogdGhpcy5fcmVuZGVyT3B0aW9ucygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BdXRvY29tcGxldGUuZGlzcGxheU5hbWUgPSAnQXV0b2NvbXBsZXRlJztcbkF1dG9jb21wbGV0ZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5BdXRvY29tcGxldGUucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGU7XG4iXX0=