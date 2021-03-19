'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _identity = require('lodash/utility/identity');

var _identity2 = _interopRequireDefault(_identity);

var _componentBase = require('../../../behaviours/component-base');

var _componentBase2 = _interopRequireDefault(_componentBase);

var _material = require('../../../behaviours/material');

var _material2 = _interopRequireDefault(_material);

var _filterHtmlAttributes = require('../../../utils/filter-html-attributes');

var _filterHtmlAttributes2 = _interopRequireDefault(_filterHtmlAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    cols: _react.PropTypes.number,
    error: _react.PropTypes.string,
    formatter: _react.PropTypes.func,
    minLength: _react.PropTypes.number,
    maxLength: _react.PropTypes.number,
    name: _react.PropTypes.string.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    onKeyPress: _react.PropTypes.func,
    placeholder: _react.PropTypes.string,
    //required: PropTypes.bool,
    rows: _react.PropTypes.number,
    type: _react.PropTypes.string,
    unformatter: _react.PropTypes.func,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    wrap: _react.PropTypes.string
};

var defaultProps = {
    type: 'text',
    formatter: _identity2.default,
    unformatter: _identity2.default,
    minLength: 0,
    wrap: 'soft',
    //required: false,
    rows: 6,
    cols: 50
};

/**
* Component standing for an HTML input.
*/
var InputTextarea = (_dec = (0, _material2.default)('inputTextarea'), _dec(_class = (0, _componentBase2.default)(_class = function (_Component) {
    _inherits(InputTextarea, _Component);

    function InputTextarea() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InputTextarea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputTextarea.__proto__ || Object.getPrototypeOf(InputTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
            var unformatter = _this.props.unformatter;

            var domEl = _reactDom2.default.findDOMNode(_this.refs.htmlInput);
            return unformatter(domEl.value);
        }, _this._handleInputChange = function (evt) {
            var _this$props = _this.props,
                unformatter = _this$props.unformatter,
                onChange = _this$props.onChange;
            var value = evt.target.value;

            return onChange(unformatter(value));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
    * Get the dom value of the component.
    * @return {object} - The unformated dom value.
    */


    /**
    * Handle the change on the input text, it only propagate the value.
    * @param  {object} evt - The react DOM event.
    * @return {object} - The function onChannge from the props, called.
    */


    _createClass(InputTextarea, [{
        key: 'render',


        /**
        * @inheritdoc
        * @override
        */
        value: function render() {
            var validInputProps = (0, _filterHtmlAttributes2.default)(this.props);

            var _props = this.props,
                formatter = _props.formatter,
                error = _props.error;
            var name = validInputProps.name,
                style = validInputProps.style,
                placeholder = validInputProps.placeholder,
                value = validInputProps.value;


            var pattern = error ? 'hasError' : null; //add pattern to overide mdl error style when displaying an focus error.
            var mdlClasses = 'mdl-textfield mdl-js-textfield' + (error ? ' is-invalid' : '');

            validInputProps.value = formatter(value) === undefined || formatter(value) === null ? '' : formatter(value);
            validInputProps.onChange = this._handleInputChange;
            var inputProps = Object.assign({}, validInputProps, { pattern: pattern });

            return _react2.default.createElement(
                'div',
                { 'data-error': !!error, 'data-focus': 'input-textarea' },
                _react2.default.createElement(
                    'div',
                    { className: mdlClasses, ref: 'inputTextarea', style: style },
                    _react2.default.createElement('textarea', Object.assign({ className: 'mdl-textfield__input', ref: 'htmlInput' }, inputProps)),
                    _react2.default.createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: name },
                        this.i18n(placeholder)
                    )
                ),
                error && _react2.default.createElement(
                    'div',
                    { className: 'label-error', ref: 'error' },
                    error
                )
            );
        }
    }]);

    return InputTextarea;
}(_react.Component)) || _class) || _class);

//Static props.

InputTextarea.displayName = 'InputTextarea';
InputTextarea.defaultProps = defaultProps;
InputTextarea.propTypes = propTypes;

exports.default = InputTextarea;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiY29scyIsIlByb3BUeXBlcyIsIm51bWJlciIsImVycm9yIiwic3RyaW5nIiwiZm9ybWF0dGVyIiwiZnVuYyIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm5hbWUiLCJpc1JlcXVpcmVkIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwidHlwZSIsInVuZm9ybWF0dGVyIiwidmFsdWUiLCJvbmVPZlR5cGUiLCJ3cmFwIiwiZGVmYXVsdFByb3BzIiwiaWRlbnRpdHkiLCJJbnB1dFRleHRhcmVhIiwiQ29tcG9uZW50QmFzZUJlaGF2aW91ciIsImdldFZhbHVlIiwicHJvcHMiLCJkb21FbCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZWZzIiwiaHRtbElucHV0IiwiX2hhbmRsZUlucHV0Q2hhbmdlIiwiZXZ0IiwidGFyZ2V0IiwidmFsaWRJbnB1dFByb3BzIiwic3R5bGUiLCJwYXR0ZXJuIiwibWRsQ2xhc3NlcyIsInVuZGVmaW5lZCIsImlucHV0UHJvcHMiLCJpMThuIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDZEMsVUFBTUMsaUJBQVVDLE1BREY7QUFFZEMsV0FBT0YsaUJBQVVHLE1BRkg7QUFHZEMsZUFBV0osaUJBQVVLLElBSFA7QUFJZEMsZUFBV04saUJBQVVDLE1BSlA7QUFLZE0sZUFBV1AsaUJBQVVDLE1BTFA7QUFNZE8sVUFBTVIsaUJBQVVHLE1BQVYsQ0FBaUJNLFVBTlQ7QUFPZEMsY0FBVVYsaUJBQVVLLElBQVYsQ0FBZUksVUFQWDtBQVFkRSxnQkFBWVgsaUJBQVVLLElBUlI7QUFTZE8saUJBQWFaLGlCQUFVRyxNQVRUO0FBVWQ7QUFDQVUsVUFB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O0FBTGQsYUFESjtBQVNIOzs7O0VBakR1QnNDLGdCOztBQW9ENUI7O0FBQ0FuQixjQUFjb0IsV0FBZCxHQUE0QixlQUE1QjtBQUNBcEIsY0FBY0YsWUFBZCxHQUE2QkEsWUFBN0I7QUFDQUUsY0FBY3ZCLFNBQWQsR0FBMEJBLFNBQTFCOztrQkFFZXVCLGEiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gJ2xvZGFzaC91dGlsaXR5L2lkZW50aXR5JztcbmltcG9ydCBDb21wb25lbnRCYXNlQmVoYXZpb3VyIGZyb20gJy4uLy4uLy4uL2JlaGF2aW91cnMvY29tcG9uZW50LWJhc2UnO1xuaW1wb3J0IE1EQmVoYXZpb3VyIGZyb20gJy4uLy4uLy4uL2JlaGF2aW91cnMvbWF0ZXJpYWwnO1xuaW1wb3J0IGZpbHRlclByb3BzIGZyb20gJy4uLy4uLy4uL3V0aWxzL2ZpbHRlci1odG1sLWF0dHJpYnV0ZXMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG1pbkxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXhMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uS2V5UHJlc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8vcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1bmZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyXG4gICAgXSksXG4gICAgd3JhcDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBmb3JtYXR0ZXI6IGlkZW50aXR5LFxuICAgIHVuZm9ybWF0dGVyOiBpZGVudGl0eSxcbiAgICBtaW5MZW5ndGg6IDAsXG4gICAgd3JhcDogJ3NvZnQnLFxuICAgIC8vcmVxdWlyZWQ6IGZhbHNlLFxuICAgIHJvd3M6IDYsXG4gICAgY29sczogNTBcbn07XG5cblxuLyoqXG4qIENvbXBvbmVudCBzdGFuZGluZyBmb3IgYW4gSFRNTCBpbnB1dC5cbiovXG5ATURCZWhhdmlvdXIoJ2lucHV0VGV4dGFyZWEnKVxuQENvbXBvbmVudEJhc2VCZWhhdmlvdXJcbmNsYXNzIElucHV0VGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIGRvbSB2YWx1ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICogQHJldHVybiB7b2JqZWN0fSAtIFRoZSB1bmZvcm1hdGVkIGRvbSB2YWx1ZS5cbiAgICAqL1xuICAgIGdldFZhbHVlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHVuZm9ybWF0dGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBkb21FbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5odG1sSW5wdXQpO1xuICAgICAgICByZXR1cm4gdW5mb3JtYXR0ZXIoZG9tRWwudmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIEhhbmRsZSB0aGUgY2hhbmdlIG9uIHRoZSBpbnB1dCB0ZXh0LCBpdCBvbmx5IHByb3BhZ2F0ZSB0aGUgdmFsdWUuXG4gICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2dCAtIFRoZSByZWFjdCBET00gZXZlbnQuXG4gICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGZ1bmN0aW9uIG9uQ2hhbm5nZSBmcm9tIHRoZSBwcm9wcywgY2FsbGVkLlxuICAgICovXG4gICAgX2hhbmRsZUlucHV0Q2hhbmdlID0gKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHVuZm9ybWF0dGVyLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgcmV0dXJuIG9uQ2hhbmdlKHVuZm9ybWF0dGVyKHZhbHVlKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogQGluaGVyaXRkb2NcbiAgICAqIEBvdmVycmlkZVxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB2YWxpZElucHV0UHJvcHMgPSBmaWx0ZXJQcm9wcyh0aGlzLnByb3BzKTtcblxuICAgICAgICBjb25zdCB7IGZvcm1hdHRlciwgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgc3R5bGUsIHBsYWNlaG9sZGVyLCB2YWx1ZSB9ID0gdmFsaWRJbnB1dFByb3BzO1xuXG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBlcnJvciA/ICdoYXNFcnJvcicgOiBudWxsOyAvL2FkZCBwYXR0ZXJuIHRvIG92ZXJpZGUgbWRsIGVycm9yIHN0eWxlIHdoZW4gZGlzcGxheWluZyBhbiBmb2N1cyBlcnJvci5cbiAgICAgICAgY29uc3QgbWRsQ2xhc3NlcyA9IGBtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQke2Vycm9yID8gJyBpcy1pbnZhbGlkJyA6ICcnfWA7XG5cbiAgICAgICAgdmFsaWRJbnB1dFByb3BzLnZhbHVlID0gZm9ybWF0dGVyKHZhbHVlKSA9PT0gdW5kZWZpbmVkIHx8IGZvcm1hdHRlcih2YWx1ZSkgPT09IG51bGwgPyAnJyA6IGZvcm1hdHRlcih2YWx1ZSk7XG4gICAgICAgIHZhbGlkSW5wdXRQcm9wcy5vbkNoYW5nZSA9IHRoaXMuX2hhbmRsZUlucHV0Q2hhbmdlXG4gICAgICAgIGNvbnN0IGlucHV0UHJvcHMgPSB7IC4uLnZhbGlkSW5wdXRQcm9wcywgcGF0dGVybiB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZXJyb3I9eyEhZXJyb3J9IGRhdGEtZm9jdXM9J2lucHV0LXRleHRhcmVhJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWRsQ2xhc3Nlc30gcmVmPSdpbnB1dFRleHRhcmVhJyBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPSdtZGwtdGV4dGZpZWxkX19pbnB1dCcgcmVmPSdodG1sSW5wdXQnIHsuLi5pbnB1dFByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtZGwtdGV4dGZpZWxkX19sYWJlbCcgaHRtbEZvcj17bmFtZX0+e3RoaXMuaTE4bihwbGFjZWhvbGRlcil9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9J2xhYmVsLWVycm9yJyByZWY9J2Vycm9yJz57ZXJyb3J9PC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vL1N0YXRpYyBwcm9wcy5cbklucHV0VGV4dGFyZWEuZGlzcGxheU5hbWUgPSAnSW5wdXRUZXh0YXJlYSc7XG5JbnB1dFRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbklucHV0VGV4dGFyZWEucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFRleHRhcmVhO1xuIl19