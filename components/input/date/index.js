'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp, _initialiseProps; // Dependencies


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactDatePicker = require('react-date-picker');

var _reactDatePicker2 = _interopRequireDefault(_reactDatePicker);

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _uniqueId = require('lodash/utility/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _closest = require('closest');

var _closest2 = _interopRequireDefault(_closest);

var _componentBase = require('../../../behaviours/component-base');

var _componentBase2 = _interopRequireDefault(_componentBase);

var _text = require('../text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isISOString = function isISOString(value) {
    return _moment2.default.utc(value, _moment2.default.ISO_8601, true).isValid();
};

var propTypes = {
    beforeValueGetter: _react.PropTypes.func.isRequired,
    checkOnlyOnBlur: _react.PropTypes.bool,
    triggerOnChangeIfEmpty: _react.PropTypes.bool,
    drops: _react.PropTypes.oneOf(['up', 'down']).isRequired,
    error: _react.PropTypes.string,
    locale: _react.PropTypes.string.isRequired,
    minDate: _react.PropTypes.string,
    maxDate: _react.PropTypes.string,
    name: _react.PropTypes.string.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    placeholder: _react.PropTypes.string,
    showDropdowns: _react.PropTypes.bool.isRequired,
    validate: _react.PropTypes.func,
    value: function value(props, propName, componentName) {
        var prop = props[propName];
        if (prop && !isISOString(prop)) {
            throw new Error('The date ' + prop + ' provided to the component ' + componentName + ' is not an ISO date. Please provide a valid date string.');
        }
    }
};

var defaultProps = {
    beforeValueGetter: function beforeValueGetter(value) {
        return value;
    },
    checkOnlyOnBlur: false,
    triggerOnChangeIfEmpty: true,
    drops: 'down',
    format: 'MM/DD/YYYY',
    locale: 'en',
    /**
    * Default onChange prop, that will log an error.
    */
    onChange: function onChange() {
        console.error('You did not give an onChange method to an input date, please check your code.');
    },

    showDropdowns: true,
    validate: isISOString
};

/**
 * Date input component with text input and date picker.
 * Validate user input at each change in the text input.
 */

var InputDate = (0, _componentBase2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(InputDate, _Component);

    /**
     * Create a new component.
     * @param {*} props Props.
     */
    function InputDate(props) {
        _classCallCheck(this, InputDate);

        var _this = _possibleConstructorReturn(this, (InputDate.__proto__ || Object.getPrototypeOf(InputDate)).call(this, props));

        _initialiseProps.call(_this);

        var value = props.value;


        var state = {
            dropDownDate: isISOString(value) ? _moment2.default.utc(value, _moment2.default.ISO_8601) : _moment2.default.utc(),
            inputDate: _this._formatDate(value),
            displayPicker: false
        };
        _this.state = state;

        _this._inputDateId = (0, _uniqueId2.default)('input-date-');
        return _this;
    }

    /**
     * Before component mount.
     */


    _createClass(InputDate, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            document.addEventListener('click', this._onDocumentClick);
        }

        /**
         * Receive component props.
         * @param {*} param0 
         */

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var value = _ref.value;

            this.setState({
                dropDownDate: isISOString(value) ? _moment2.default.utc(value, _moment2.default.ISO_8601) : _moment2.default.utc(),
                inputDate: this._formatDate(value)
            });
        }

        /**
         * Before component unmount.
         */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this._onDocumentClick);
        }

        /**
         * Check if input value is a valid date.
         */


        /**
         * Parse input value and try converting it to date.
         * Formats could be defined with the format props.
         * The default format is 'MM/DD/YYYY'.
         */


        /**
         * Format the date to the first format in the format props (if array). 
         * The default format is 'MM/DD/YYYY'.
         */


        /**
         * Handle changes.
         */


        /**
         * Handle input text blur.
         */


        /**
         * Handle calendar changes.
         * @memberOf InputDate
         */


        /**
         * Handle input text focus.
         */


        /**
         * Handle document click to close the calendar.
         * @memberOf InputDate
         */


        /**
         * Handle Tab and Enter keys to close the calendar.
         */


        /**
         * Return value in a valid date format.
         */


        /**
         * Validate the input.
         */

    }, {
        key: 'render',


        /**
         * Render text input and datepicker.
         */
        value: function render() {
            var _props = this.props,
                error = _props.error,
                locale = _props.locale,
                name = _props.name,
                placeholder = _props.placeholder,
                disabled = _props.disabled,
                minDate = _props.minDate,
                maxDate = _props.maxDate;
            var _state = this.state,
                dropDownDate = _state.dropDownDate,
                inputDate = _state.inputDate,
                displayPicker = _state.displayPicker;
            var _onInputBlur = this._onInputBlur,
                _onInputChange = this._onInputChange,
                _onInputFocus = this._onInputFocus,
                _onDropDownChange = this._onDropDownChange,
                _onPickerCloserClick = this._onPickerCloserClick,
                _handleKeyDown = this._handleKeyDown;

            var inputProps = { disabled: disabled };

            return _react2.default.createElement(
                'div',
                { 'data-focus': 'input-date', 'data-id': this._inputDateId },
                _react2.default.createElement(_text2.default, Object.assign({ error: error, name: name, onChange: _onInputChange, onKeyDown: _handleKeyDown, onFocus: _onInputFocus, placeholder: placeholder, ref: 'input', value: inputDate }, inputProps)),
                displayPicker && _react2.default.createElement(
                    'div',
                    { 'data-focus': 'picker-zone' },
                    _react2.default.createElement(_reactDatePicker2.default, {
                        date: dropDownDate,
                        hideFooter: true,
                        locale: locale,
                        onChange: _onDropDownChange,
                        ref: 'picker',
                        minDate: minDate,
                        maxDate: maxDate
                    })
                )
            );
        }
    }]);

    return InputDate;
}(_react.Component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this._isInputFormatCorrect = function (value) {
        return _this2._parseInputDate(value).isValid();
    };

    this._parseInputDate = function (inputDate) {
        var format = _this2.props.format;

        return _moment2.default.utc(inputDate, format, true);
    };

    this._formatDate = function (isoDate) {
        var format = _this2.props.format;

        if (isISOString(isoDate)) {
            if ((0, _isArray2.default)(format)) {
                format = format[0];
            }
            return _moment2.default.utc(isoDate, _moment2.default.ISO_8601).format(format);
        } else {
            return isoDate;
        }
    };

    this._onInputChange = function (inputDate, fromBlur) {
        var _props2 = _this2.props,
            checkOnlyOnBlur = _props2.checkOnlyOnBlur,
            triggerOnChangeIfEmpty = _props2.triggerOnChangeIfEmpty;
        // When checkOnlyOnBlur is true skip all checks.

        if (checkOnlyOnBlur === true && fromBlur !== true) {
            // Use case : incompatibles date formats (DD/MM/YY, DD/MM/YYYY)
            _this2.setState({ inputDate: inputDate });
            return;
        }

        var isCorrect = _this2._isInputFormatCorrect(inputDate);
        var dropDownDate = isCorrect ? _this2._parseInputDate(inputDate) : null;
        var shouldTriggerChange = isCorrect || triggerOnChangeIfEmpty && (inputDate || '').trim() === ''; // Fire onChange event, only if date if correct, or empty, if the option is activated
        var newData = isCorrect ? dropDownDate.toISOString() : null; // if date is not correct, it is empty, so send null (or empty string ?)

        if (isCorrect) {
            _this2.setState({ dropDownDate: dropDownDate, inputDate: inputDate });
        } else {
            _this2.setState({ inputDate: inputDate });
        }

        // When checkOnlyOnBlur is true skip all checks.
        if (checkOnlyOnBlur === true) {
            if (shouldTriggerChange) {
                _this2.props.onChange(newData);
            }
            return;
        }

        // Fire onChange event, only if date if correct, or empty, if the option is activated
        if (fromBlur !== true && shouldTriggerChange) {
            _this2.props.onChange(newData);
        }
    };

    this._onInputBlur = function () {
        var inputDate = _this2.state.inputDate;

        _this2._onInputChange(inputDate, true);
    };

    this._onDropDownChange = function (text, date) {
        if (date._isValid) {
            _this2.setState({ displayPicker: false }, function () {
                var correctedDate = _moment2.default.utc(date).add((0, _moment2.default)(date).utcOffset(), 'minutes').toISOString(); // Add UTC offset to get right ISO string
                _this2.props.onChange(correctedDate);
                _this2._onInputChange(_this2._formatDate(correctedDate), true);
            });
        }
    };

    this._onInputFocus = function () {
        _this2.setState({ displayPicker: true });
    };

    this._onDocumentClick = function (_ref2) {
        var target = _ref2.target;

        var targetClassAttr = target.getAttribute('class');
        var isTriggeredFromPicker = targetClassAttr ? targetClassAttr.includes('dp-cell') : false; //this is the only way to check the target comes from picker cause at this stage, month and year div are unmounted by React.

        // We do not trigger the setState, or the inputBlur if the picker was not displayed
        if (!isTriggeredFromPicker && _this2.state.displayPicker && (0, _closest2.default)(target, '[data-id=\'' + _this2._inputDateId + '\']', true) === undefined) {
            //if target was not triggered inside the date picker, we check it was not triggered by the input
            _this2.setState({ displayPicker: false }, function () {
                return _this2._onInputBlur();
            });
        }
    };

    this._handleKeyDown = function (_ref3) {
        var key = _ref3.key;

        if (key === 'Tab' || key === 'Enter') {
            _this2.setState({ displayPicker: false }, function () {
                return _this2._onInputBlur();
            });
        }
    };

    this.getValue = function () {
        var inputDate = _this2.state.inputDate;

        var rawValue = _this2._isInputFormatCorrect(inputDate) ? _this2._parseInputDate(inputDate).toISOString() : null;

        return _this2.props.beforeValueGetter(rawValue);
    };

    this.validate = function () {
        var inputDate = _this2.state.inputDate;
        var isRequired = _this2.props.isRequired;

        if ('' === inputDate || !inputDate) {
            return {
                isValid: !isRequired,
                message: 'field.required'
            };
        } else {
            return {
                isValid: _this2._isInputFormatCorrect(inputDate),
                message: _this2.i18n('input.date.invalid', { date: inputDate })
            };
        }
    };
}, _temp)) || _class;

InputDate.propTypes = propTypes;
InputDate.defaultProps = defaultProps;
InputDate.displayName = 'InputDate';

exports.default = InputDate;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiaXNJU09TdHJpbmciLCJtb21lbnQiLCJ1dGMiLCJ2YWx1ZSIsIklTT184NjAxIiwiaXNWYWxpZCIsInByb3BUeXBlcyIsImJlZm9yZVZhbHVlR2V0dGVyIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJjaGVja09ubHlPbkJsdXIiLCJib29sIiwidHJpZ2dlck9uQ2hhbmdlSWZFbXB0eSIsImRyb3BzIiwib25lT2YiLCJlcnJvciIsInN0cmluZyIsImxvY2FsZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwibmFtZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzaG93RHJvcGRvd25zIiwidmFsaWRhdGUiLCJwcm9wcyIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsInByb3AiLCJFcnJvciIsImRlZmF1bHRQcm9wcyIsImZvcm1hdCIsImNvbnNvbGUiLCJJbnB1dERhdGUiLCJCYXNlIiwic3RhdGUiLCJkcm9wRG93bkRhdGUiLCJpbnB1dERhdGUiLCJfZm9ybWF0RGF0ZSIsImRpc3BsYXlQaWNrZXIiLCJfaW5wdXREYXRlSWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25Eb2N1bWVudENsaWNrIiwic2V0U3RhdGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGlzYWJsZWQiLCJfb25JbnB1dEJsdXIiLCJfb25JbnB1dENoYW5nZSIsIl9vbklucHV0Rm9jdXMiLCJfb25Ecm9wRG93bkNoYW5nZSIsIl9vblBpY2tlckNsb3NlckNsaWNrIiwiX2hhbmRsZUtleURvd24iLCJpbnB1dFByb3BzIiwiQ29tcG9uZW50IiwiX2lzSW5wdXRGb3JtYXRDb3JyZWN0IiwiX3BhcnNlSW5wdXREYXRlIiwiaXNvRGF0ZSIsImZyb21CbHVyIiwiaXNDb3JyZWN0Iiwic2hvdWxkVHJpZ2dlckNoYW5nZSIsInRyaW0iLCJuZXdEYXRhIiwidG9JU09TdHJpbmciLCJ0ZXh0IiwiZGF0ZSIsIl9pc1ZhbGlkIiwiY29ycmVjdGVkRGF0ZSIsImFkZCIsInV0Y09mZnNldCIsInRhcmdldCIsInRhcmdldENsYXNzQXR0ciIsImdldEF0dHJpYnV0ZSIsImlzVHJpZ2dlcmVkRnJvbVBpY2tlciIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwia2V5IiwiZ2V0VmFsdWUiLCJyYXdWYWx1ZSIsIm1lc3NhZ2UiLCJpMThuIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzhDQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsU0FBZEEsV0FBYztBQUFBLFdBQVNDLGlCQUFPQyxHQUFQLENBQVdDLEtBQVgsRUFBa0JGLGlCQUFPRyxRQUF6QixFQUFtQyxJQUFuQyxFQUF5Q0MsT0FBekMsRUFBVDtBQUFBLENBQXBCOztBQUVBLElBQU1DLFlBQVk7QUFDZEMsdUJBQW1CQyxpQkFBVUMsSUFBVixDQUFlQyxVQURwQjtBQUVkQyxxQkFBaUJILGlCQUFVSSxJQUZiO0FBR2RDLDRCQUF3QkwsaUJBQVVJLElBSHBCO0FBSWRFLFdBQU9OLGlCQUFVTyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FBaEIsRUFBZ0NMLFVBSnpCO0FBS2RNLFdBQU9SLGlCQUFVUyxNQUxIO0FBTWRDLFlBQVFWLGlCQUFVUyxNQUFWLENBQWlCUCxVQU5YO0FBT2RTLGFBQVNYLGlCQUFVUyxNQVBMO0FBUWRHLGFBQVNaLGlCQUFVUyxNQVJMO0FBU2RJLFVBQU1iLGlCQUFVUyxNQUFWLENBQWlCUCxVQVRUO0FBVWRZLGNBQVVkLGlCQUFVQyxJQUFWLENBQWVDLFVBVlg7QUFXZGEsaUJBQWFmLGlCQUFVUyxNQVhUO0FBWWRPLG1CQUFlaEIsaUJBQVVJLElBQVYsQ0FBZUYsVUFaaEI7QUFhZGUsY0FBVWpCLGlCQUFVQyxJQWJOO0FBY2ROLFdBQU8sZUFBQ3VCLEtBQUQsRUFBUUMsUUFB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QUZLOztBQUdiLFlBQUksT0FBTzRCLFNBQVAsSUFBb0IsQ0FBQ0EsU0FBekIsRUFBb0M7QUFDaEMsbUJBQVE7QUFDSmpDLHlCQUFTLENBQUNLLFVBRE47QUFFSnNFLHlCQUFTO0FBRkwsYUFBUjtBQUlILFNBTEQsTUFLTztBQUNILG1CQUFRO0FBQ0ozRSx5QkFBUyxPQUFLbUQscUJBQUwsQ0FBMkJsQixTQUEzQixDQURMO0FBRUowQyx5QkFBUyxPQUFLQyxJQUFMLENBQVUsb0JBQVYsRUFBZ0MsRUFBRWYsTUFBTTVCLFNBQVIsRUFBaEM7QUFGTCxhQUFSO0FBSUg7QUFDSixLOzs7QUFnQ0xKLFVBQVU1QixTQUFWLEdBQXNCQSxTQUF0QjtBQUNBNEIsVUFBVUgsWUFBVixHQUF5QkEsWUFBekI7QUFDQUcsVUFBVWdELFdBQVYsR0FBd0IsV0FBeEI7O2tCQUVlaEQsUyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGUtcGlja2VyJztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9sYW5nL2lzQXJyYXknO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJ2xvZGFzaC91dGlsaXR5L3VuaXF1ZUlkJztcbmltcG9ydCBjbG9zZXN0IGZyb20gJ2Nsb3Nlc3QnO1xuXG5pbXBvcnQgQmFzZSBmcm9tICcuLi8uLi8uLi9iZWhhdmlvdXJzL2NvbXBvbmVudC1iYXNlJztcbmltcG9ydCBJbnB1dFRleHQgZnJvbSAnLi4vdGV4dCc7XG5cbmNvbnN0IGlzSVNPU3RyaW5nID0gdmFsdWUgPT4gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxLCB0cnVlKS5pc1ZhbGlkKCk7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBiZWZvcmVWYWx1ZUdldHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGVja09ubHlPbkJsdXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHRyaWdnZXJPbkNoYW5nZUlmRW1wdHk6IFByb3BUeXBlcy5ib29sLFxuICAgIGRyb3BzOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdkb3duJ10pLmlzUmVxdWlyZWQsXG4gICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbWluRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtYXhEYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaG93RHJvcGRvd25zOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHZhbGlkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2YWx1ZTogKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICBpZiAocHJvcCAmJiAhaXNJU09TdHJpbmcocHJvcCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGUgJHtwcm9wfSBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX0gaXMgbm90IGFuIElTTyBkYXRlLiBQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGRhdGUgc3RyaW5nLmApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGJlZm9yZVZhbHVlR2V0dGVyOiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICBjaGVja09ubHlPbkJsdXI6IGZhbHNlLFxuICAgIHRyaWdnZXJPbkNoYW5nZUlmRW1wdHk6IHRydWUsXG4gICAgZHJvcHM6ICdkb3duJyxcbiAgICBmb3JtYXQ6ICdNTS9ERC9ZWVlZJyxcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgLyoqXG4gICAgKiBEZWZhdWx0IG9uQ2hhbmdlIHByb3AsIHRoYXQgd2lsbCBsb2cgYW4gZXJyb3IuXG4gICAgKi9cbiAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignWW91IGRpZCBub3QgZ2l2ZSBhbiBvbkNoYW5nZSBtZXRob2QgdG8gYW4gaW5wdXQgZGF0ZSwgcGxlYXNlIGNoZWNrIHlvdXIgY29kZS4nKTtcbiAgICB9LFxuICAgIHNob3dEcm9wZG93bnM6IHRydWUsXG4gICAgdmFsaWRhdGU6IGlzSVNPU3RyaW5nXG59O1xuXG4vKipcbiAqIERhdGUgaW5wdXQgY29tcG9uZW50IHdpdGggdGV4dCBpbnB1dCBhbmQgZGF0ZSBwaWNrZXIuXG4gKiBWYWxpZGF0ZSB1c2VyIGlucHV0IGF0IGVhY2ggY2hhbmdlIGluIHRoZSB0ZXh0IGlucHV0LlxuICovXG5AQmFzZVxuY2xhc3MgSW5wdXREYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjb21wb25lbnQuXG4gICAgICogQHBhcmFtIHsqfSBwcm9wcyBQcm9wcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHM7XG5cbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgICAgICBkcm9wRG93bkRhdGU6IGlzSVNPU3RyaW5nKHZhbHVlKSA/IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSkgOiBtb21lbnQudXRjKCksXG4gICAgICAgICAgICBpbnB1dERhdGU6IHRoaXMuX2Zvcm1hdERhdGUodmFsdWUpLFxuICAgICAgICAgICAgZGlzcGxheVBpY2tlcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgIHRoaXMuX2lucHV0RGF0ZUlkID0gdW5pcXVlSWQoJ2lucHV0LWRhdGUtJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmVmb3JlIGNvbXBvbmVudCBtb3VudC5cbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWNlaXZlIGNvbXBvbmVudCBwcm9wcy5cbiAgICAgKiBAcGFyYW0geyp9IHBhcmFtMCBcbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgdmFsdWUgfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRyb3BEb3duRGF0ZTogaXNJU09TdHJpbmcodmFsdWUpID8gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKSA6IG1vbWVudC51dGMoKSxcbiAgICAgICAgICAgIGlucHV0RGF0ZTogdGhpcy5fZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmVmb3JlIGNvbXBvbmVudCB1bm1vdW50LlxuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uRG9jdW1lbnRDbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaW5wdXQgdmFsdWUgaXMgYSB2YWxpZCBkYXRlLlxuICAgICAqL1xuICAgIF9pc0lucHV0Rm9ybWF0Q29ycmVjdCA9IHZhbHVlID0+IHRoaXMuX3BhcnNlSW5wdXREYXRlKHZhbHVlKS5pc1ZhbGlkKCk7XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBpbnB1dCB2YWx1ZSBhbmQgdHJ5IGNvbnZlcnRpbmcgaXQgdG8gZGF0ZS5cbiAgICAgKiBGb3JtYXRzIGNvdWxkIGJlIGRlZmluZWQgd2l0aCB0aGUgZm9ybWF0IHByb3BzLlxuICAgICAqIFRoZSBkZWZhdWx0IGZvcm1hdCBpcyAnTU0vREQvWVlZWScuXG4gICAgICovXG4gICAgX3BhcnNlSW5wdXREYXRlID0gaW5wdXREYXRlID0+IHtcbiAgICAgICAgY29uc3QgeyBmb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBtb21lbnQudXRjKGlucHV0RGF0ZSwgZm9ybWF0LCB0cnVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IHRoZSBkYXRlIHRvIHRoZSBmaXJzdCBmb3JtYXQgaW4gdGhlIGZvcm1hdCBwcm9wcyAoaWYgYXJyYXkpLiBcbiAgICAgKiBUaGUgZGVmYXVsdCBmb3JtYXQgaXMgJ01NL0REL1lZWVknLlxuICAgICAqL1xuICAgIF9mb3JtYXREYXRlID0gaXNvRGF0ZSA9PiB7XG4gICAgICAgIGxldCB7IGZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGlzSVNPU3RyaW5nKGlzb0RhdGUpKSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudC51dGMoaXNvRGF0ZSwgbW9tZW50LklTT184NjAxKS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc29EYXRlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIF9vbklucHV0Q2hhbmdlID0gKGlucHV0RGF0ZSwgZnJvbUJsdXIpID0+IHtcbiAgICAgICAgbGV0IHsgY2hlY2tPbmx5T25CbHVyLCB0cmlnZ2VyT25DaGFuZ2VJZkVtcHR5IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvLyBXaGVuIGNoZWNrT25seU9uQmx1ciBpcyB0cnVlIHNraXAgYWxsIGNoZWNrcy5cbiAgICAgICAgaWYgKGNoZWNrT25seU9uQmx1ciA9PT0gdHJ1ZSAmJiBmcm9tQmx1ciAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gVXNlIGNhc2UgOiBpbmNvbXBhdGlibGVzIGRhdGUgZm9ybWF0cyAoREQvTU0vWVksIEREL01NL1lZWVkpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNDb3JyZWN0ID0gdGhpcy5faXNJbnB1dEZvcm1hdENvcnJlY3QoaW5wdXREYXRlKTtcbiAgICAgICAgY29uc3QgZHJvcERvd25EYXRlID0gaXNDb3JyZWN0ID8gdGhpcy5fcGFyc2VJbnB1dERhdGUoaW5wdXREYXRlKSA6IG51bGw7XG4gICAgICAgIGNvbnN0IHNob3VsZFRyaWdnZXJDaGFuZ2UgPSBpc0NvcnJlY3QgfHwgKHRyaWdnZXJPbkNoYW5nZUlmRW1wdHkgJiYgKGlucHV0RGF0ZSB8fCAnJykudHJpbSgpID09PSAnJyk7IC8vIEZpcmUgb25DaGFuZ2UgZXZlbnQsIG9ubHkgaWYgZGF0ZSBpZiBjb3JyZWN0LCBvciBlbXB0eSwgaWYgdGhlIG9wdGlvbiBpcyBhY3RpdmF0ZWRcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGlzQ29ycmVjdCA/IGRyb3BEb3duRGF0ZS50b0lTT1N0cmluZygpIDogbnVsbDsgLy8gaWYgZGF0ZSBpcyBub3QgY29ycmVjdCwgaXQgaXMgZW1wdHksIHNvIHNlbmQgbnVsbCAob3IgZW1wdHkgc3RyaW5nID8pXG5cbiAgICAgICAgaWYgKGlzQ29ycmVjdCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BEb3duRGF0ZSwgaW5wdXREYXRlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gY2hlY2tPbmx5T25CbHVyIGlzIHRydWUgc2tpcCBhbGwgY2hlY2tzLlxuICAgICAgICBpZiAoY2hlY2tPbmx5T25CbHVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkVHJpZ2dlckNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIG9uQ2hhbmdlIGV2ZW50LCBvbmx5IGlmIGRhdGUgaWYgY29ycmVjdCwgb3IgZW1wdHksIGlmIHRoZSBvcHRpb24gaXMgYWN0aXZhdGVkXG4gICAgICAgIGlmIChmcm9tQmx1ciAhPT0gdHJ1ZSAmJiBzaG91bGRUcmlnZ2VyQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBpbnB1dCB0ZXh0IGJsdXIuXG4gICAgICovXG4gICAgX29uSW5wdXRCbHVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGlucHV0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5fb25JbnB1dENoYW5nZShpbnB1dERhdGUsIHRydWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgY2FsZW5kYXIgY2hhbmdlcy5cbiAgICAgKiBAbWVtYmVyT2YgSW5wdXREYXRlXG4gICAgICovXG4gICAgX29uRHJvcERvd25DaGFuZ2UgPSAodGV4dCwgZGF0ZSkgPT4ge1xuICAgICAgICBpZiAoZGF0ZS5faXNWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlQaWNrZXI6IGZhbHNlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3JyZWN0ZWREYXRlID0gbW9tZW50LnV0YyhkYXRlKS5hZGQobW9tZW50KGRhdGUpLnV0Y09mZnNldCgpLCAnbWludXRlcycpLnRvSVNPU3RyaW5nKCk7IC8vIEFkZCBVVEMgb2Zmc2V0IHRvIGdldCByaWdodCBJU08gc3RyaW5nXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShjb3JyZWN0ZWREYXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbklucHV0Q2hhbmdlKHRoaXMuX2Zvcm1hdERhdGUoY29ycmVjdGVkRGF0ZSksIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGlucHV0IHRleHQgZm9jdXMuXG4gICAgICovXG4gICAgX29uSW5wdXRGb2N1cyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlQaWNrZXI6IHRydWUgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBkb2N1bWVudCBjbGljayB0byBjbG9zZSB0aGUgY2FsZW5kYXIuXG4gICAgICogQG1lbWJlck9mIElucHV0RGF0ZVxuICAgICAqL1xuICAgIF9vbkRvY3VtZW50Q2xpY2sgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRDbGFzc0F0dHIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICBjb25zdCBpc1RyaWdnZXJlZEZyb21QaWNrZXIgPSB0YXJnZXRDbGFzc0F0dHIgPyB0YXJnZXRDbGFzc0F0dHIuaW5jbHVkZXMoJ2RwLWNlbGwnKSA6IGZhbHNlOyAvL3RoaXMgaXMgdGhlIG9ubHkgd2F5IHRvIGNoZWNrIHRoZSB0YXJnZXQgY29tZXMgZnJvbSBwaWNrZXIgY2F1c2UgYXQgdGhpcyBzdGFnZSwgbW9udGggYW5kIHllYXIgZGl2IGFyZSB1bm1vdW50ZWQgYnkgUmVhY3QuXG5cbiAgICAgICAgLy8gV2UgZG8gbm90IHRyaWdnZXIgdGhlIHNldFN0YXRlLCBvciB0aGUgaW5wdXRCbHVyIGlmIHRoZSBwaWNrZXIgd2FzIG5vdCBkaXNwbGF5ZWRcbiAgICAgICAgaWYgKCFpc1RyaWdnZXJlZEZyb21QaWNrZXIgJiYgdGhpcy5zdGF0ZS5kaXNwbGF5UGlja2VyICYmIGNsb3Nlc3QodGFyZ2V0LCBgW2RhdGEtaWQ9JyR7dGhpcy5faW5wdXREYXRlSWR9J11gLCB0cnVlKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvL2lmIHRhcmdldCB3YXMgbm90IHRyaWdnZXJlZCBpbnNpZGUgdGhlIGRhdGUgcGlja2VyLCB3ZSBjaGVjayBpdCB3YXMgbm90IHRyaWdnZXJlZCBieSB0aGUgaW5wdXRcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5UGlja2VyOiBmYWxzZSB9LCAoKSA9PiB0aGlzLl9vbklucHV0Qmx1cigpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgVGFiIGFuZCBFbnRlciBrZXlzIHRvIGNsb3NlIHRoZSBjYWxlbmRhci5cbiAgICAgKi9cbiAgICBfaGFuZGxlS2V5RG93biA9ICh7IGtleSB9KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09ICdUYWInIHx8IGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlQaWNrZXI6IGZhbHNlIH0sICgpID0+IHRoaXMuX29uSW5wdXRCbHVyKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybiB2YWx1ZSBpbiBhIHZhbGlkIGRhdGUgZm9ybWF0LlxuICAgICAqL1xuICAgIGdldFZhbHVlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGlucHV0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgcmF3VmFsdWUgPSB0aGlzLl9pc0lucHV0Rm9ybWF0Q29ycmVjdChpbnB1dERhdGUpID8gdGhpcy5fcGFyc2VJbnB1dERhdGUoaW5wdXREYXRlKS50b0lTT1N0cmluZygpIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5iZWZvcmVWYWx1ZUdldHRlcihyYXdWYWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBpbnB1dERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgaXNSZXF1aXJlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCcnID09PSBpbnB1dERhdGUgfHwgIWlucHV0RGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgaXNWYWxpZDogIWlzUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2ZpZWxkLnJlcXVpcmVkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0aGlzLl9pc0lucHV0Rm9ybWF0Q29ycmVjdChpbnB1dERhdGUpLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuaTE4bignaW5wdXQuZGF0ZS5pbnZhbGlkJywgeyBkYXRlOiBpbnB1dERhdGUgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0ZXh0IGlucHV0IGFuZCBkYXRlcGlja2VyLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBlcnJvciwgbG9jYWxlLCBuYW1lLCBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIG1pbkRhdGUsIG1heERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgZHJvcERvd25EYXRlLCBpbnB1dERhdGUsIGRpc3BsYXlQaWNrZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgX29uSW5wdXRCbHVyLCBfb25JbnB1dENoYW5nZSwgX29uSW5wdXRGb2N1cywgX29uRHJvcERvd25DaGFuZ2UsIF9vblBpY2tlckNsb3NlckNsaWNrLCBfaGFuZGxlS2V5RG93biB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgaW5wdXRQcm9wcyA9IHsgZGlzYWJsZWQgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdpbnB1dC1kYXRlJyBkYXRhLWlkPXt0aGlzLl9pbnB1dERhdGVJZH0+XG4gICAgICAgICAgICAgICAgPElucHV0VGV4dCBlcnJvcj17ZXJyb3J9IG5hbWU9e25hbWV9IG9uQ2hhbmdlPXtfb25JbnB1dENoYW5nZX0gb25LZXlEb3duPXtfaGFuZGxlS2V5RG93bn0gb25Gb2N1cz17X29uSW5wdXRGb2N1c30gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSByZWY9J2lucHV0JyB2YWx1ZT17aW5wdXREYXRlfSB7Li4uaW5wdXRQcm9wc30gLz5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheVBpY2tlciAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J3BpY2tlci16b25lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17ZHJvcERvd25EYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGb290ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17X29uRHJvcERvd25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPSdwaWNrZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5JbnB1dERhdGUucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuSW5wdXREYXRlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbklucHV0RGF0ZS5kaXNwbGF5TmFtZSA9ICdJbnB1dERhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dERhdGU7XG4iXX0=