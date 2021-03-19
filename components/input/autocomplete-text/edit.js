'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentBase = require('../../../behaviours/component-base');

var _componentBase2 = _interopRequireDefault(_componentBase);

var _material = require('../../../behaviours/material');

var _material2 = _interopRequireDefault(_material);

var _filterHtmlAttributes = require('../../../utils/filter-html-attributes');

var _filterHtmlAttributes2 = _interopRequireDefault(_filterHtmlAttributes);

var _debounce = require('lodash/function/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutocompleteTextEdit = (_dec = (0, _material2.default)('materialInput'), _dec2 = (0, _material2.default)('loader'), _dec(_class = _dec2(_class = (0, _componentBase2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(AutocompleteTextEdit, _Component);

    function AutocompleteTextEdit(props) {
        _classCallCheck(this, AutocompleteTextEdit);

        var _this = _possibleConstructorReturn(this, (AutocompleteTextEdit.__proto__ || Object.getPrototypeOf(AutocompleteTextEdit)).call(this, props));

        _this.state = {
            inputValue: _this.props.value,
            suggestions: [],
            hasSuggestions: false,
            error: _this.props.error,
            hasFocus: false,
            isLoading: false
        };

        _this.getValue = function () {
            var inputValue = _this.state.inputValue;

            if (inputValue !== undefined) {
                return inputValue;
            } else {
                return null;
            }
        };

        _this._querySearcher = function (value) {
            var querySearcher = _this.props.querySearcher;


            querySearcher(value).then(function (_ref) {
                var data = _ref.data,
                    totalCount = _ref.totalCount;

                if (totalCount > 0) {
                    _this.setState({ hasSuggestions: true, suggestions: data, error: '' });
                }
                _this.refs.loader.classList.remove('mdl-progress__indeterminate');
                _this.setState({ isLoading: false });
            }).catch(function (err) {
                _this.refs.loader.classList.remove('mdl-progress__indeterminate');
                _this.setState({ error: JSON.stringify(err), isLoading: false });
                _this.refs.materialInput.classList.add('is-invalid');
            });
        };

        _this.onQueryChange = function (_ref2) {
            var value = _ref2.target.value;

            _this.setState({ inputValue: value });
            if (value.trim() === '') {
                _this.setState({ hasSuggestions: false });
            } else {
                _this.refs.loader.classList.add('mdl-progress__indeterminate');
                _this.setState({ isLoading: true });

                _this._debouncedQuerySearcher(value);
                // this._querySearcher(value); 
            }
        };

        _this.renderSuggestions = function () {
            var suggestions = _this.state.suggestions;

            var allSuggestions = suggestions.map(function (_ref3) {
                var key = _ref3.key,
                    label = _ref3.label;
                return _react2.default.createElement(
                    'li',
                    { key: key, onMouseDown: function onMouseDown(e) {
                            _this.onResultClick(label);e.preventDefault();
                        }, 'data-focus': 'option' },
                    label
                );
            });
            return _react2.default.createElement(
                'ul',
                { ref: 'suggestions', 'data-focus': 'options' },
                allSuggestions
            );
        };

        _this.toggleHasFocus = function (e) {
            var _this$state = _this.state,
                hasSuggestions = _this$state.hasSuggestions,
                hasFocus = _this$state.hasFocus;
            var _this$props = _this.props,
                showAtFocus = _this$props.showAtFocus,
                emptyShowAll = _this$props.emptyShowAll;

            _this.setState({ hasFocus: !_this.state.hasFocus });
            if (hasSuggestions && !showAtFocus && hasFocus === false) {
                _this.setState({ hasSuggestions: false });
            }
            if (!hasSuggestions && e.target.value.trim() === '' && emptyShowAll && hasFocus === false) {
                // Doing a global search here
                _this._querySearcher('');
            }
            return true;
        };

        _this.toggleHasFocus = _this.toggleHasFocus.bind(_this);
        _this.onQueryChange = _this.onQueryChange.bind(_this);
        _this.toggleHasFocus = _this.toggleHasFocus.bind(_this);
        _this._querySearcher = _this._querySearcher.bind(_this);
        return _this;
    }

    _createClass(AutocompleteTextEdit, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref4) {
            var error = _ref4.error;

            if (error) {
                this.setState({ error: error });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var inputTimeout = this.props.inputTimeout;

            this._debouncedQuerySearcher = (0, _debounce2.default)(this._querySearcher, inputTimeout);
        }

        // Returns the state's inputValue


        // Gets the defined props' querySearch and returns the object given by the promise
        // Sets the hasSuggestions' state if the given object has a none empty array


        // Sets the state's inputValue when the user is typing

    }, {
        key: 'onResultClick',


        // Sets the value input with the selected suggestion and hides the dropdown
        value: function onResultClick(value) {
            this.refs.inputText.value = value;
            this.setState({ inputValue: value, hasSuggestions: false, suggestions: [] });
            return value;
        }

        // Returns an html list whith the Suggestions


        // Behaviour when onFocus and onBlur are triggered

    }, {
        key: 'render',


        // Maybe give the option for the floating label
        value: function render() {
            var _state = this.state,
                inputValue = _state.inputValue,
                hasSuggestions = _state.hasSuggestions,
                hasFocus = _state.hasFocus,
                isLoading = _state.isLoading;


            var validInputProps = (0, _filterHtmlAttributes2.default)(this.props);
            var _props = this.props,
                placeholder = _props.placeholder,
                error = _props.error;


            validInputProps.value = inputValue === undefined || inputValue === null ? '' : inputValue;
            validInputProps.onFocus = this.toggleHasFocus;
            validInputProps.onChange = this.onQueryChange;
            validInputProps.onBlur = this.toggleHasFocus;
            var inputProps = Object.assign({}, validInputProps);

            return _react2.default.createElement(
                'div',
                { 'data-focus': 'autocompleteText' },
                _react2.default.createElement(
                    'div',
                    { className: 'mdl-textfield mdl-js-textfield' + (error ? ' is-invalid' : ''), ref: 'materialInput' },
                    _react2.default.createElement('div', { 'data-focus': 'loading', 'data-loading': isLoading, className: 'mdl-progress mdl-js-progress', ref: 'loader' }),
                    _react2.default.createElement('input', Object.assign({ className: 'mdl-textfield__input', type: 'text', ref: 'inputText' }, inputProps, { autoComplete: 'off' })),
                    _react2.default.createElement(
                        'label',
                        { className: 'mdl-textfield__label' },
                        this.i18n(placeholder)
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'mdl-textfield__error', ref: 'errorMessage' },
                        this.i18n(error)
                    )
                ),
                hasSuggestions && hasFocus && this.renderSuggestions()
            );
        }
    }]);

    return AutocompleteTextEdit;
}(_react.Component), _class2.defaultProps = {
    placeholder: 'Search here...',
    showAtFocus: false,
    emptyShowAll: false,
    inputTimeout: 200
}, _class2.propTypes = {
    /**
    * Returns a promise which is connected to the web service.
    * @type {Function}
    */
    querySearcher: _react.PropTypes.func.isRequired,

    /**
    * Field value.
    * @type {String}
    */
    value: _react.PropTypes.string,

    /**
    * Launches the querySearcher.
    * @type {Function}
    */
    onChange: _react.PropTypes.func,

    /**
    * Error showed message.
    * @type {String}
    */
    error: _react.PropTypes.string,

    /**
    * Placeholder field.
    * @type {String}
    */
    placeholder: _react.PropTypes.string,

    /**
    * Defines it shows suggestions on focus.
    * @type {Boolean}
    */
    showAtFocus: _react.PropTypes.bool,

    /**
    * Defines if it shows suggestions on focus when the input is empty.
    * @type {Boolean}
    */
    emptyShowAll: _react.PropTypes.bool,

    /**
    * [inputTimeout description]
    * @type {number}
    */
    inputTimeout: _react.PropTypes.number.isRequired
}, _temp)) || _class) || _class) || _class);
exports.default = AutocompleteTextEdit;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlVGV4dEVkaXQiLCJDb21wb25lbnRCYXNlQmVoYXZpb3VyIiwicHJvcHMiLCJzdGF0ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInN1Z2dlc3Rpb25zIiwiaGFzU3VnZ2VzdGlvbnMiLCJlcnJvciIsImhhc0ZvY3VzIiwiaXNMb2FkaW5nIiwiZ2V0VmFsdWUiLCJ1bmRlZmluZWQiLCJfcXVlcnlTZWFyY2hlciIsInF1ZXJ5U2VhcmNoZXIiLCJ0aGVuIiwiZGF0YSIsInRvdGFsQ291bnQiLCJzZXRTdGF0ZSIsInJlZnMiLCJsb2FkZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjYXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnIiLCJtYXRlcmlhbElucHV0IiwiYWRkIiwib25RdWVyeUNoYW5nZSIsInRhcmdldCIsInRyaW0iLCJfZGVib3VuY2VkUXVlcnlTZWFyY2hlciIsInJlbmRlclN1Z2dlc3Rpb25zIiwiYWxsU3VnZ2VzdGlvbnMiLCJtYXAiLCJrZXkiLCJsYWJlbCIsImUiLCJvblJlc3VsdENsaWNrIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVIYXNGb2N1cyIsInNob3dBdEZvY3VzIiwiZW1wdHlTaG93QWxsIiwiYmluZCIsImlucHV0VGltZW91dCIsImlucHV0VGV4dCIsInZhbGlkSW5wdXRQcm9wcyIsInBsYWNlaG9sZGVyIiwib25Gb2N1cyIsIm9uQ2hhbmdlIiwib25CbHVyIiwiaW5wdXRQcm9wcyIsImkxOG4iLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFLTUEsb0IsV0FITCx3QkFBWSxlQUFaLEMsVUFDQSx3QkFBWSxRQUFaLEMsbUNBQ0FDLHVCOzs7QUFxRUcsa0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSkFDVEEsS0FEUzs7QUFBQSxjQVRuQkMsS0FTbUIsR0FUWDtBQUNKQyx3QkFBWSxNQUFLRixLQUFMLENBQVdHLEtBRG5CO0FBRUpDLHlCQUFhLEVBRlQ7QUFHSkMsNEJBQWdCLEtBSFo7QUFJSkMsbUJBQU8sTUFBS04sS0FBTCxDQUFXTSxLQUpkO0FBS0pDLHNCQUFVLEtBTE47QUFNSkMsdUJBQVc7QUFOUCxTQVNXOztBQUFBLGNBb0JuQkMsUUFwQm1CLEdBb0JSLFlBQU07QUFBQSxnQkFDTFAsVUFESyxHQUNVLE1BQUtELEtBRGYsQ0FDTEMsVUFESzs7QUFFYixnQkFBSUEsZUFBZVEsU0FBbkIsRUFBOEI7QUFDMUIsdUJBQU9SLFVBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFBTyxJQUFQO0FBQ0g7QUFDSixTQTNCa0I7O0FBQUEsY0ErQm5CUyxjQS9CbUIsR0ErQkYsaUJBQVM7QUFBQSxnQkFDZEMsYUFEYyxHQUNJLE1BQUtaLEtBRFQsQ0FDZFksYUFEYzs7O0FBR3RCQSwwQkFBY1QsS0FBZCxFQUFxQlUsSUFBckIsQ0FBMEIsZ0JBQTBCO0FBQUEsb0JBQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSxvQkFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFDaEQsb0JBQUlBLGFBQWEsQ0FBakIsRUFBb0I7QUFDaEIsMEJBQUtDLFFBQUwsQ0FBYyxFQUFFWCxnQkFBZ0IsSUFBbEIsRUFBd0JELGFBQWFVLElBQXJDLEVBQTJDUixPQUFPLEVBQWxELEVBQWQ7QUFDSDtBQUNELHNCQUFLVyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQyw2QkFBbEM7QUFDQSxzQkFBS0osUUFBTCxDQUFjLEVBQUVSLFdBQVcsS0FBYixFQUFkO0FBQ0gsYUFORCxFQU1HYSxLQU5ILENBTVMsZUFBTztBQUNaLHNCQUFLSixJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQyw2QkFBbEM7QUFDQSxzQkFBS0osUUFBTCxDQUFjLEVBQUVWLE9BQU9nQixLQUFLQyxTQUFMLENBQWVDLEdBQWYsQ0FBVCxFQUE4QmhCLFdBQVcsS0FBekMsRUFBZDtBQUNBLHNCQUFLUyxJQUFMLENBQVVRLGFBQVYsQ0FBd0JOLFNBQXhCLENBQWtDTyxHQUFsQyxDQUFzQyxZQUF0QztBQUNILGFBVkQ7QUFXSCxTQTdDa0I7O0FBQUEsY0FnRG5CQyxhQWhEbUIsR0FnREgsaUJBQTJCO0FBQUEsZ0JBQWR4QixLQUFjLFNBQXhCeUIsTUFBd0IsQ0FBZHpCLEtBQWM7O0FBQ3ZDLGtCQUFLYSxRQUFMLENBQWMsRUFBRWQsWUFBWUMsS0FBZCxFQUFkO0FBQ0EsZ0JBQUlBLE1BQU0wQixJQUFOLE9BQWlCLEVBQXJCLEVBQXlCO0FBQ3JCLHNCQUFLYixRQUFMLENBQWMsRUFBRVgsZ0JBQWdCLEtBQWxCLEVBQWQ7QUFDSCxhQUZELE1BRU87QUFDSCxzQkFBS1ksSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxTQUFqQixDQUEyQk8sR0FBM0IsQ0FBK0IsNkJBQS9CO0FBQ0Esc0JBQUtWLFFBQUwsQ0FBYyxFQUFFUixXQUFXLElBQWIsRUFBZDs7QUFFQSxzQkFBS3NCLHVCQUFMLENBQTZCM0IsS0FBN0I7QUFDQTtBQUNIO0FBQ0osU0EzRGtCOztBQUFBLGNBcUVuQjRCLGlCQXJFbUIsR0FxRUMsWUFBTTtBQUFBLGdCQUNkM0IsV0FEYyxHQUNFLE1BQUtILEtBRFAsQ0FDZEcsV0FEYzs7QUFFdEIsZ0JBQU00QixpQkFBaUI1QixZQUFZNkIsR0FBWixDQUFnQjtBQUFBLG9CQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSxvQkFBUUMsS0FBUixTQUFRQSxLQUFSO0FBQUEsdUJBQW9CO0FBQUE7QUFBQSxzQkFBSSxLQUFLRCxHQUFULEVBQWMsYUFBYSxxQkFBQ0UsQ0FBRCxFQUFPO0FBQUUsa0NBQUtDLGFBQUwsQ0FBbUJGLEtBQW5CLEVBQTJCQyxFQUFFRSxjQUFGO0FBQXFCLHlCQUFwRixFQUFzRixjQUFXLFFBQWpHO0FBQTRHSDtBQUE1RyxpQkFBcEI7QUFBQSxhQUFoQixDQUF2QjtBQUNBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSSxLQUFJLGFBQVIsRUFBc0IsY0FBVyxTQUFqQztBQUNLSDtBQURMLGFBREo7QUFLSCxTQTdFa0I7O0FBQUEsY0FnRm5CTyxjQWhGbUIsR0FnRkYsYUFBSztBQUFBLDhCQUNtQixNQUFLdEMsS0FEeEI7QUFBQSxnQkFDVkksY0FEVSxlQUNWQSxjQURVO0FBQUEsZ0JBQ01FLFFBRE4sZUFDTUEsUUFETjtBQUFBLDhCQUVvQixNQUFLUCxLQUZ6QjtBQUFBLGdCQUVWd0MsV0FGVSxlQUVWQSxXQUZVO0FBQUEsZ0JBRUdDLFlBRkgsZUFFR0EsWUFGSDs7QUFHbEIsa0JBQUt6QixRQUFMLENBQWMsRUFBRVQsVUFBVSxDQUFDLE1BQUtOLEtBQUwsQ0FBV00sUUFBeEIsRUFBZDtBQUNBLGdCQUFJRixrQkFBa0IsQ0FBQ21DLFdBQW5CLElBQWtDakMsYUFBYSxLQUFuRCxFQUEwRDtBQUN0RCxzQkFBS1MsUUFBTCxDQUFjLEVBQUVYLGdCQUFnQixLQUFsQixFQUFkO0FBQ0g7QUFDRCxnQkFBSSxDQUFDQSxjQUFELElBQW1CK0IsRUFBRVIsTUFBRixDQUFTekIsS0FBVCxDQUFlMEIsSUFBZixPQUEwQixFQUE3QyxJQUFtRFksWUFBbkQsSUFBbUVsQyxhQUFhLEtBQXBGLEVBQTJGO0FBQ3ZGO0FBQ0Esc0JBQUtJLGNBQUwsQ0FBb0IsRUFBcEI7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSCxTQTVGa0I7O0FBRWYsY0FBSzRCLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkcsSUFBcEIsT0FBdEI7QUFDQSxjQUFLZixhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJlLElBQW5CLE9BQXJCO0FBQ0EsY0FBS0gsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRyxJQUFwQixPQUF0QjtBQUNBLGNBQUsvQixjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0IrQixJQUFwQixPQUF0QjtBQUxlO0FBTWxCOzs7O3lEQUVvQztBQUFBLGdCQUFUcEMsS0FBUyxTQUFUQSxLQUFTOztBQUNqQyxnQkFBSUEsS0FBSixFQUFXO0FBQ1AscUJBQUtVLFFBQUwsQ0FBYyxFQUFFVixPQUFPQSxLQUFULEVBQWQ7QUFDSDtBQUNKOzs7NENBRW1CO0FBQUEsZ0JBQ1JxQyxZQURRLEdBQ1MsS0FBSzNDLEtBRGQsQ0FDUjJDLFlBRFE7O0FBRWhCLGlCQUFLYix1QkFBTCxHQUErQix3QkFBUyxLQUFLbkIsY0FBZCxFQUE4QmdDLFlBQTlCLENBQS9CO0FBQ0g7O0FBRUQ7OztBQVVBO0FBQ0E7OztBQWlCQTs7Ozs7O0FBY0E7c0NBQ2N4QyxLLEVBQU87QUFDakIsaUJBQUtjLElBQUwsQ0FBVTJCLFNBQVYsQ0FBb0J6QyxLQUFwQixHQUE0QkEsS0FBNUI7QUFDQSxpQkFBS2EsUUFBTCxDQUFjLEVBQUVkLFlBQVlDLEtBQWQsRUFBcUJFLGdCQUFnQixLQUFyQyxFQUE0Q0QsYUFBYSxFQUF6RCxFQUFkO0FBQ0EsbUJBQU9ELEtBQVA7QUFDSDs7QUFFRDs7O0FBV0E7Ozs7OztBQWVBO2lDQUNTO0FBQUEseUJBQ3VELEtBQUtGLEtBRDVEO0FBQUEsZ0JBQ0dDLFVBREgsVUFDR0EsVUFESDtBQUFBLGdCQUNlRyxjQURmLFVBQ2VBLGNBRGY7QUFBQSxnQkFDK0JFLFFBRC9CLFVBQytCQSxRQUQvQjtBQUFBLGdCQUN5Q0MsU0FEekMsVUFDeUNBLFNBRHpDOzs7QUFHTCxnQkFBTXFDLGtCQUFrQixvQ0FBWSxLQUFLN0MsS0FBakIsQ0FBeEI7QUFISyx5QkFJMEIsS0FBS0EsS0FKL0I7QUFBQSxnQkFJRzhDLFdBSkgsVUFJR0EsV0FKSDtBQUFBLGdCQUlnQnhDLEtBSmhCLFVBSWdCQSxLQUpoQjs7O0FBTUx1Qyw0QkFBZ0IxQyxLQUFoQixHQUF3QkQsZUFBZVEsU0FBZixJQUE0QlIsZUFBZSxJQUEzQyxHQUFrRCxFQUFsRCxHQUF1REEsVUFBL0U7QUFDQTJDLDRCQUFnQkUsT0FBaEIsR0FBMEIsS0FBS1IsY0FBL0I7QUFDQU0sNEJBQWdCRyxRQUFoQixHQUEyQixLQUFLckIsYUFBaEM7QUFDQWtCLDRCQUFnQkksTUFBaEIsR0FBeUIsS0FBS1YsY0FBOUI7QUFDQSxnQkFBTVcsK0JBQWtCTCxlQUFsQixDQUFOOztBQUVBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLGtCQUFoQjtBQUNJO0FBQUE7QUFBQSxzQkFBSywrQ0FBNEN2QyxRQUFRLGFBQVIsR0FBd0IsRUFBcEUsQ0FBTCxFQUErRSxLQUFJLGVBQW5GO0FBQ0ksMkRBQUssY0FBVyxTQUFoQixFQUEwQixnQkFBY0UsU0FBeEMsRUFBbUQsV0FBVSw4QkFBN0QsRUFBNEYsS0FBSSxRQUFoRyxHQURKO0FBRUksMkVBQU8sV0FBVSxzQkFBakIsRUFBd0MsTUFBSyxNQUE3QyxFQUFvRCxLQUFJLFdBQXhELElBQXdFMEMsVUFBeEUsSUFBb0YsY0FBYSxLQUFqRyxJQUZKO0FBR0k7QUFBQTtBQUFBLDBCQUFPLFdBQVUsc0JBQWpCO0FBQXlDLDZCQUFLQyxJQUFMLENBQVVMLFdBQVY7QUFBekMscUJBSEo7QUFJSTtBQUFBO0FBQUEsMEJBQU0sV0FBVSxzQkFBaEIsRUFBdUMsS0FBSSxjQUEzQztBQUEyRCw2QkFBS0ssSUFBTCxDQUFVN0MsS0FBVjtBQUEzRDtBQUpKLGlCQURKO0FBT0tELGtDQUFrQkUsUUFBbEIsSUFDRyxLQUFLd0IsaUJBQUw7QUFSUixhQURKO0FBYUg7Ozs7RUE1TDhCcUIsZ0IsV0FFeEJDLFksR0FBZTtBQUNsQlAsaUJBQWEsZ0JBREs7QUFFbEJOLGlCQUFhLEtBRks7QUFHbEJDLGtCQUFjLEtBSEk7QUFJbEJFLGtCQUFjO0FBSkksQyxVQU9mVyxTLEdBQVk7QUFDZjs7OztBQUlBMUMsbUJBQWUyQyxpQkFBVUMsSUFBVixDQUFlQyxVQUxmOztBQU9mOzs7O0FBSUF0RCxXQUFPb0QsaUJBQVVHLE1BWEY7O0FBYWY7Ozs7QUFJQVYsY0FBVU8saUJBQVVDLElBakJMOztBQW1CZjs7OztBQUlBbEQsV0FBT2lELGlCQUFVRyxNQXZCRjs7QUF5QmY7Ozs7QUFJQVosaUJBQWFTLGlCQUFVRyxNQTdCUjs7QUErQmY7Ozs7QUFJQWxCLGlCQUFhZSxpQkFBVUksSUFuQ1I7O0FBcUNmOzs7O0FBSUFsQixrQkFBY2MsaUJBQVVJLElBekNUOztBQTJDZjs7OztBQUlBaEIsa0JBQWNZLGlCQUFVSyxNQUFWLENBQWlCSDtBQS9DaEIsQztrQkFzTFIzRCxvQiIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudEJhc2VCZWhhdmlvdXIgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3Vycy9jb21wb25lbnQtYmFzZSc7XG5pbXBvcnQgTURCZWhhdmlvdXIgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3Vycy9tYXRlcmlhbCc7XG5pbXBvcnQgZmlsdGVyUHJvcHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmlsdGVyLWh0bWwtYXR0cmlidXRlcyc7XG5cbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZnVuY3Rpb24vZGVib3VuY2UnO1xuXG5ATURCZWhhdmlvdXIoJ21hdGVyaWFsSW5wdXQnKVxuQE1EQmVoYXZpb3VyKCdsb2FkZXInKVxuQENvbXBvbmVudEJhc2VCZWhhdmlvdXJcbmNsYXNzIEF1dG9jb21wbGV0ZVRleHRFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGhlcmUuLi4nLFxuICAgICAgICBzaG93QXRGb2N1czogZmFsc2UsXG4gICAgICAgIGVtcHR5U2hvd0FsbDogZmFsc2UsXG4gICAgICAgIGlucHV0VGltZW91dDogMjAwXG4gICAgfTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdoaWNoIGlzIGNvbm5lY3RlZCB0byB0aGUgd2ViIHNlcnZpY2UuXG4gICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAgICAqL1xuICAgICAgICBxdWVyeVNlYXJjaGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIEZpZWxkIHZhbHVlLlxuICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICovXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIExhdW5jaGVzIHRoZSBxdWVyeVNlYXJjaGVyLlxuICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgICAgKi9cbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIEVycm9yIHNob3dlZCBtZXNzYWdlLlxuICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICovXG4gICAgICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIFBsYWNlaG9sZGVyIGZpZWxkLlxuICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICovXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIERlZmluZXMgaXQgc2hvd3Mgc3VnZ2VzdGlvbnMgb24gZm9jdXMuXG4gICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICovXG4gICAgICAgIHNob3dBdEZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgICAgICAvKipcbiAgICAgICAgKiBEZWZpbmVzIGlmIGl0IHNob3dzIHN1Z2dlc3Rpb25zIG9uIGZvY3VzIHdoZW4gdGhlIGlucHV0IGlzIGVtcHR5LlxuICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAqL1xuICAgICAgICBlbXB0eVNob3dBbGw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAqIFtpbnB1dFRpbWVvdXQgZGVzY3JpcHRpb25dXG4gICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGlucHV0VmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgIHN1Z2dlc3Rpb25zOiBbXSxcbiAgICAgICAgaGFzU3VnZ2VzdGlvbnM6IGZhbHNlLFxuICAgICAgICBlcnJvcjogdGhpcy5wcm9wcy5lcnJvcixcbiAgICAgICAgaGFzRm9jdXM6IGZhbHNlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy50b2dnbGVIYXNGb2N1cyA9IHRoaXMudG9nZ2xlSGFzRm9jdXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblF1ZXJ5Q2hhbmdlID0gdGhpcy5vblF1ZXJ5Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlSGFzRm9jdXMgPSB0aGlzLnRvZ2dsZUhhc0ZvY3VzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX3F1ZXJ5U2VhcmNoZXIgPSB0aGlzLl9xdWVyeVNlYXJjaGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IGVycm9yIH0pIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXRUaW1lb3V0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLl9kZWJvdW5jZWRRdWVyeVNlYXJjaGVyID0gZGVib3VuY2UodGhpcy5fcXVlcnlTZWFyY2hlciwgaW5wdXRUaW1lb3V0KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBzdGF0ZSdzIGlucHV0VmFsdWVcbiAgICBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEdldHMgdGhlIGRlZmluZWQgcHJvcHMnIHF1ZXJ5U2VhcmNoIGFuZCByZXR1cm5zIHRoZSBvYmplY3QgZ2l2ZW4gYnkgdGhlIHByb21pc2VcbiAgICAvLyBTZXRzIHRoZSBoYXNTdWdnZXN0aW9ucycgc3RhdGUgaWYgdGhlIGdpdmVuIG9iamVjdCBoYXMgYSBub25lIGVtcHR5IGFycmF5XG4gICAgX3F1ZXJ5U2VhcmNoZXIgPSB2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcXVlcnlTZWFyY2hlciB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBxdWVyeVNlYXJjaGVyKHZhbHVlKS50aGVuKCh7IGRhdGEsIHRvdGFsQ291bnQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRvdGFsQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc1N1Z2dlc3Rpb25zOiB0cnVlLCBzdWdnZXN0aW9uczogZGF0YSwgZXJyb3I6ICcnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZWZzLmxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdtZGwtcHJvZ3Jlc3NfX2luZGV0ZXJtaW5hdGUnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWZzLmxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdtZGwtcHJvZ3Jlc3NfX2luZGV0ZXJtaW5hdGUnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyKSwgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHRoaXMucmVmcy5tYXRlcmlhbElucHV0LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFNldHMgdGhlIHN0YXRlJ3MgaW5wdXRWYWx1ZSB3aGVuIHRoZSB1c2VyIGlzIHR5cGluZ1xuICAgIG9uUXVlcnlDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNTdWdnZXN0aW9uczogZmFsc2UgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMubG9hZGVyLmNsYXNzTGlzdC5hZGQoJ21kbC1wcm9ncmVzc19faW5kZXRlcm1pbmF0ZScpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgdGhpcy5fZGVib3VuY2VkUXVlcnlTZWFyY2hlcih2YWx1ZSk7XG4gICAgICAgICAgICAvLyB0aGlzLl9xdWVyeVNlYXJjaGVyKHZhbHVlKTsgXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU2V0cyB0aGUgdmFsdWUgaW5wdXQgd2l0aCB0aGUgc2VsZWN0ZWQgc3VnZ2VzdGlvbiBhbmQgaGlkZXMgdGhlIGRyb3Bkb3duXG4gICAgb25SZXN1bHRDbGljayh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJlZnMuaW5wdXRUZXh0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSwgaGFzU3VnZ2VzdGlvbnM6IGZhbHNlLCBzdWdnZXN0aW9uczogW10gfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIGFuIGh0bWwgbGlzdCB3aGl0aCB0aGUgU3VnZ2VzdGlvbnNcbiAgICByZW5kZXJTdWdnZXN0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdWdnZXN0aW9ucyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgYWxsU3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9ucy5tYXAoKHsga2V5LCBsYWJlbCB9KSA9PiA8bGkga2V5PXtrZXl9IG9uTW91c2VEb3duPXsoZSkgPT4geyB0aGlzLm9uUmVzdWx0Q2xpY2sobGFiZWwpOyBlLnByZXZlbnREZWZhdWx0KCk7IH19IGRhdGEtZm9jdXM9J29wdGlvbicgPntsYWJlbH08L2xpPik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dWwgcmVmPSdzdWdnZXN0aW9ucycgZGF0YS1mb2N1cz0nb3B0aW9ucyc+XG4gICAgICAgICAgICAgICAge2FsbFN1Z2dlc3Rpb25zfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gQmVoYXZpb3VyIHdoZW4gb25Gb2N1cyBhbmQgb25CbHVyIGFyZSB0cmlnZ2VyZWRcbiAgICB0b2dnbGVIYXNGb2N1cyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7IGhhc1N1Z2dlc3Rpb25zLCBoYXNGb2N1cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBzaG93QXRGb2N1cywgZW1wdHlTaG93QWxsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzRm9jdXM6ICF0aGlzLnN0YXRlLmhhc0ZvY3VzIH0pO1xuICAgICAgICBpZiAoaGFzU3VnZ2VzdGlvbnMgJiYgIXNob3dBdEZvY3VzICYmIGhhc0ZvY3VzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc1N1Z2dlc3Rpb25zOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc1N1Z2dlc3Rpb25zICYmIGUudGFyZ2V0LnZhbHVlLnRyaW0oKSA9PT0gJycgJiYgZW1wdHlTaG93QWxsICYmIGhhc0ZvY3VzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gRG9pbmcgYSBnbG9iYWwgc2VhcmNoIGhlcmVcbiAgICAgICAgICAgIHRoaXMuX3F1ZXJ5U2VhcmNoZXIoJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvLyBNYXliZSBnaXZlIHRoZSBvcHRpb24gZm9yIHRoZSBmbG9hdGluZyBsYWJlbFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpbnB1dFZhbHVlLCBoYXNTdWdnZXN0aW9ucywgaGFzRm9jdXMsIGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCB2YWxpZElucHV0UHJvcHMgPSBmaWx0ZXJQcm9wcyh0aGlzLnByb3BzKTtcbiAgICAgICAgY29uc3QgeyBwbGFjZWhvbGRlciwgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdmFsaWRJbnB1dFByb3BzLnZhbHVlID0gaW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGlucHV0VmFsdWUgPT09IG51bGwgPyAnJyA6IGlucHV0VmFsdWU7XG4gICAgICAgIHZhbGlkSW5wdXRQcm9wcy5vbkZvY3VzID0gdGhpcy50b2dnbGVIYXNGb2N1cztcbiAgICAgICAgdmFsaWRJbnB1dFByb3BzLm9uQ2hhbmdlID0gdGhpcy5vblF1ZXJ5Q2hhbmdlO1xuICAgICAgICB2YWxpZElucHV0UHJvcHMub25CbHVyID0gdGhpcy50b2dnbGVIYXNGb2N1cztcbiAgICAgICAgY29uc3QgaW5wdXRQcm9wcyA9IHsgLi4udmFsaWRJbnB1dFByb3BzIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nYXV0b2NvbXBsZXRlVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQke2Vycm9yID8gJyBpcy1pbnZhbGlkJyA6ICcnfWB9IHJlZj0nbWF0ZXJpYWxJbnB1dCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbG9hZGluZycgZGF0YS1sb2FkaW5nPXtpc0xvYWRpbmd9IGNsYXNzTmFtZT0nbWRsLXByb2dyZXNzIG1kbC1qcy1wcm9ncmVzcycgcmVmPSdsb2FkZXInIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J21kbC10ZXh0ZmllbGRfX2lucHV0JyB0eXBlPSd0ZXh0JyByZWY9J2lucHV0VGV4dCcgey4uLmlucHV0UHJvcHN9IGF1dG9Db21wbGV0ZT0nb2ZmJyAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtZGwtdGV4dGZpZWxkX19sYWJlbCc+e3RoaXMuaTE4bihwbGFjZWhvbGRlcil9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZGwtdGV4dGZpZWxkX19lcnJvcicgcmVmPSdlcnJvck1lc3NhZ2UnPnt0aGlzLmkxOG4oZXJyb3IpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7aGFzU3VnZ2VzdGlvbnMgJiYgaGFzRm9jdXMgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTdWdnZXN0aW9ucygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGVUZXh0RWRpdDtcbiJdfQ==