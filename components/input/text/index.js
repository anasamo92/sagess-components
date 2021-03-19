'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //dependencies


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

var MODE = { isEdit: true };

var propTypes = {
    disabled: _react.PropTypes.bool,
    error: _react.PropTypes.string,
    name: _react.PropTypes.string.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    onKeyPress: _react.PropTypes.func,
    placeholder: _react.PropTypes.string,
    unformatter: _react.PropTypes.func,
    formatter: _react.PropTypes.func,
    type: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var defaultProps = {
    disabled: false,
    formatter: _identity2.default,
    unformatter: _identity2.default,
    type: 'text'
};

/**
* Component standing for an HTML input.
*/
var InputText = (_dec = (0, _material2.default)('inputText'), _dec(_class = (0, _componentBase2.default)(_class = function (_Component) {
    _inherits(InputText, _Component);

    function InputText() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InputText);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputText.__proto__ || Object.getPrototypeOf(InputText)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
            var unformatter = _this.props.unformatter;

            var domEl = _reactDom2.default.findDOMNode(_this.refs.htmlInput);

            return unformatter(domEl.value, MODE);
        }, _this._handleInputChange = function (evt) {
            var _this$props = _this.props,
                unformatter = _this$props.unformatter,
                onChange = _this$props.onChange;
            var value = evt.target.value;


            return onChange(unformatter(value, MODE));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
    * Get the dom value of the component.
    * @return {object} - The unformated dom value.
    */


    _createClass(InputText, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var error = this.props.error;

            if (!error) {
                // Make sure that the main div does not hold a is-invalid class when there's no error
                // MDL keeps the class even if React removes it
                this.refs.inputText.classList.remove('is-invalid');
            }
        }

        /**
        * Handle the change on the input text, it only propagate the value.
        * @param  {object} evt - The react DOM event.
        * @return {object} - The function onChannge from the props, called.
        */

    }, {
        key: 'render',


        /**
        * @inheritdoc
        * @override
        */
        value: function render() {
            var validInputProps = (0, _filterHtmlAttributes2.default)(this.props);
            var _props = this.props,
                error = _props.error,
                style = _props.style;
            var name = validInputProps.name,
                placeholder = validInputProps.placeholder,
                valueToFormat = validInputProps.value;


            validInputProps.value = this.props.formatter(valueToFormat, MODE);
            validInputProps.onChange = this._handleInputChange;

            // To prevent regression
            if (validInputProps.name) {
                validInputProps.id = validInputProps.name;
            }
            if (validInputProps.placeholder) {
                validInputProps.placeholder = this.i18n(validInputProps.placeholder);
            }

            var pattern = error ? 'hasError' : null; //add pattern to overide mdl error style when displaying an focus error.

            var inputProps = Object.assign({}, validInputProps, { pattern: pattern });
            var cssClass = 'mdl-textfield mdl-js-textfield' + (error ? ' is-invalid' : '');

            return _react2.default.createElement(
                'div',
                { className: cssClass, 'data-focus': 'input-text', ref: 'inputText', style: style },
                _react2.default.createElement('input', Object.assign({ className: 'mdl-textfield__input', ref: 'htmlInput' }, inputProps)),
                _react2.default.createElement(
                    'label',
                    { className: 'mdl-textfield__label', htmlFor: name },
                    this.i18n(placeholder)
                ),
                error && _react2.default.createElement(
                    'span',
                    { className: 'mdl-textfield__error' },
                    this.i18n(error)
                )
            );
        }
    }]);

    return InputText;
}(_react.Component)) || _class) || _class);

//Static props.

InputText.displayName = 'InputText';
InputText.defaultProps = defaultProps;
InputText.propTypes = propTypes;

exports.default = InputText;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiTU9ERSIsImlzRWRpdCIsInByb3BUeXBlcyIsImRpc2FibGVkIiwiUHJvcFR5cGVzIiwiYm9vbCIsImVycm9yIiwic3RyaW5nIiwibmFtZSIsImlzUmVxdWlyZWQiLCJvbkNoYW5nZSIsImZ1bmMiLCJvbktleVByZXNzIiwicGxhY2Vob2xkZXIiLCJ1bmZvcm1hdHRlciIsImZvcm1hdHRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsImlkZW50aXR5IiwiSW5wdXRUZXh0IiwiQ29tcG9uZW50QmFzZUJlaGF2aW91ciIsImdldFZhbHVlIiwicHJvcHMiLCJkb21FbCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZWZzIiwiaHRtbElucHV0IiwiX2hhbmRsZUlucHV0Q2hhbmdlIiwiZXZ0IiwidGFyZ2V0IiwiaW5wdXRUZXh0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidmFsaWRJbnB1dFByb3BzIiwic3R5bGUiLCJ2YWx1ZVRvRm9ybWF0IiwiaWQiLCJpMThuIiwicGF0dGVybiIsImlucHV0UHJvcHMiLCJjc3NDbGFzcyIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxPQUFPLEVBQUVDLFFBQVEsSUFBVixFQUFiOztBQUVBLElBQU1DLFlBQVk7QUFDZEMsY0FBVUMsaUJBQVVDLElBRE47QUFFZEMsV0FBT0YsaUJBQVVHLE1BRkg7QUFHZEMsVUFBTUosaUJBQVVHLE1BQVYsQ0FBaUJFLFVBSFQ7QUFJZEMsY0FBVU4saUJBQVVPLElBQVYsQ0FBZUYsVUFKWDtBQUtkRyxnQkFBWVIsaUJBQVVPLElBTFI7QUFNZEUsaUJBQWFULGlCQUFVRyxNQU5UO0FBT2RPLGlCQUFhVixpQkFB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QTVELEVBREo7QUFFSTtBQUFBO0FBQUEsc0JBQU8sV0FBVSxzQkFBakIsRUFBd0MsU0FBU25DLElBQWpEO0FBQXdELHlCQUFLaUMsSUFBTCxDQUFVNUIsV0FBVjtBQUF4RCxpQkFGSjtBQUdLUCx5QkFBVTtBQUFBO0FBQUEsc0JBQU0sV0FBVSxzQkFBaEI7QUFBd0MseUJBQUttQyxJQUFMLENBQVVuQyxLQUFWO0FBQXhDO0FBSGYsYUFESjtBQU9IOzs7O0VBbEVtQnVDLGdCOztBQXFFeEI7O0FBQ0F2QixVQUFVd0IsV0FBVixHQUF3QixXQUF4QjtBQUNBeEIsVUFBVUYsWUFBVixHQUF5QkEsWUFBekI7QUFDQUUsVUFBVXBCLFNBQVYsR0FBc0JBLFNBQXRCOztrQkFFZW9CLFMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBpZGVudGl0eSBmcm9tICdsb2Rhc2gvdXRpbGl0eS9pZGVudGl0eSc7XG5pbXBvcnQgQ29tcG9uZW50QmFzZUJlaGF2aW91ciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvdXJzL2NvbXBvbmVudC1iYXNlJztcbmltcG9ydCBNREJlaGF2aW91ciBmcm9tICcuLi8uLi8uLi9iZWhhdmlvdXJzL21hdGVyaWFsJztcbmltcG9ydCBmaWx0ZXJQcm9wcyBmcm9tICcuLi8uLi8uLi91dGlscy9maWx0ZXItaHRtbC1hdHRyaWJ1dGVzJztcbmNvbnN0IE1PREUgPSB7IGlzRWRpdDogdHJ1ZSB9O1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbktleVByZXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1bmZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxuICAgIF0pXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGZvcm1hdHRlcjogaWRlbnRpdHksXG4gICAgdW5mb3JtYXR0ZXI6IGlkZW50aXR5LFxuICAgIHR5cGU6ICd0ZXh0J1xufTtcblxuLyoqXG4qIENvbXBvbmVudCBzdGFuZGluZyBmb3IgYW4gSFRNTCBpbnB1dC5cbiovXG5ATURCZWhhdmlvdXIoJ2lucHV0VGV4dCcpXG5AQ29tcG9uZW50QmFzZUJlaGF2aW91clxuY2xhc3MgSW5wdXRUZXh0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICogR2V0IHRoZSBkb20gdmFsdWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAqIEByZXR1cm4ge29iamVjdH0gLSBUaGUgdW5mb3JtYXRlZCBkb20gdmFsdWUuXG4gICAgKi9cbiAgICBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB1bmZvcm1hdHRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZG9tRWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuaHRtbElucHV0KTtcblxuICAgICAgICByZXR1cm4gdW5mb3JtYXR0ZXIoZG9tRWwudmFsdWUsIE1PREUpO1xuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBtYWluIGRpdiBkb2VzIG5vdCBob2xkIGEgaXMtaW52YWxpZCBjbGFzcyB3aGVuIHRoZXJlJ3Mgbm8gZXJyb3JcbiAgICAgICAgICAgIC8vIE1ETCBrZWVwcyB0aGUgY2xhc3MgZXZlbiBpZiBSZWFjdCByZW1vdmVzIGl0XG4gICAgICAgICAgICB0aGlzLnJlZnMuaW5wdXRUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogSGFuZGxlIHRoZSBjaGFuZ2Ugb24gdGhlIGlucHV0IHRleHQsIGl0IG9ubHkgcHJvcGFnYXRlIHRoZSB2YWx1ZS5cbiAgICAqIEBwYXJhbSAge29iamVjdH0gZXZ0IC0gVGhlIHJlYWN0IERPTSBldmVudC5cbiAgICAqIEByZXR1cm4ge29iamVjdH0gLSBUaGUgZnVuY3Rpb24gb25DaGFubmdlIGZyb20gdGhlIHByb3BzLCBjYWxsZWQuXG4gICAgKi9cbiAgICBfaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdW5mb3JtYXR0ZXIsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBldnQudGFyZ2V0O1xuXG4gICAgICAgIHJldHVybiBvbkNoYW5nZSh1bmZvcm1hdHRlcih2YWx1ZSwgTU9ERSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIEBpbmhlcml0ZG9jXG4gICAgKiBAb3ZlcnJpZGVcbiAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdmFsaWRJbnB1dFByb3BzID0gZmlsdGVyUHJvcHModGhpcy5wcm9wcyk7XG4gICAgICAgIGNvbnN0IHsgZXJyb3IsIHN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IG5hbWUsIHBsYWNlaG9sZGVyLCB2YWx1ZTogdmFsdWVUb0Zvcm1hdCB9ID0gdmFsaWRJbnB1dFByb3BzO1xuXG4gICAgICAgIHZhbGlkSW5wdXRQcm9wcy52YWx1ZSA9IHRoaXMucHJvcHMuZm9ybWF0dGVyKHZhbHVlVG9Gb3JtYXQsIE1PREUpO1xuICAgICAgICB2YWxpZElucHV0UHJvcHMub25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVJbnB1dENoYW5nZTtcblxuICAgICAgICAvLyBUbyBwcmV2ZW50IHJlZ3Jlc3Npb25cbiAgICAgICAgaWYgKHZhbGlkSW5wdXRQcm9wcy5uYW1lKSB7XG4gICAgICAgICAgICB2YWxpZElucHV0UHJvcHMuaWQgPSB2YWxpZElucHV0UHJvcHMubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWRJbnB1dFByb3BzLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICB2YWxpZElucHV0UHJvcHMucGxhY2Vob2xkZXIgPSB0aGlzLmkxOG4odmFsaWRJbnB1dFByb3BzLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBlcnJvciA/ICdoYXNFcnJvcicgOiBudWxsOyAvL2FkZCBwYXR0ZXJuIHRvIG92ZXJpZGUgbWRsIGVycm9yIHN0eWxlIHdoZW4gZGlzcGxheWluZyBhbiBmb2N1cyBlcnJvci5cblxuICAgICAgICBjb25zdCBpbnB1dFByb3BzID0geyAuLi52YWxpZElucHV0UHJvcHMsIHBhdHRlcm4gfTtcbiAgICAgICAgY29uc3QgY3NzQ2xhc3MgPSBgbWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkJHtlcnJvciA/ICcgaXMtaW52YWxpZCcgOiAnJ31gO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ2xhc3N9IGRhdGEtZm9jdXM9J2lucHV0LXRleHQnIHJlZj0naW5wdXRUZXh0JyBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J21kbC10ZXh0ZmllbGRfX2lucHV0JyByZWY9J2h0bWxJbnB1dCcgey4uLmlucHV0UHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbWRsLXRleHRmaWVsZF9fbGFiZWwnIGh0bWxGb3I9e25hbWV9Pnt0aGlzLmkxOG4ocGxhY2Vob2xkZXIpfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAge2Vycm9yICYmICg8c3BhbiBjbGFzc05hbWU9J21kbC10ZXh0ZmllbGRfX2Vycm9yJz57dGhpcy5pMThuKGVycm9yKX08L3NwYW4+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLy9TdGF0aWMgcHJvcHMuXG5JbnB1dFRleHQuZGlzcGxheU5hbWUgPSAnSW5wdXRUZXh0JztcbklucHV0VGV4dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5JbnB1dFRleHQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFRleHQ7XG4iXX0=