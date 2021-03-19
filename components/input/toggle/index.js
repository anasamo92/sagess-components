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

var _translation = require('../../../behaviours/translation');

var _translation2 = _interopRequireDefault(_translation);

var _material = require('../../../behaviours/material');

var _material2 = _interopRequireDefault(_material);

var _filterHtmlAttributes = require('../../../utils/filter-html-attributes');

var _filterHtmlAttributes2 = _interopRequireDefault(_filterHtmlAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    label: _react.PropTypes.string,
    onChange: _react.PropTypes.func.isRequired,
    value: _react.PropTypes.bool.isRequired
};

var defaultProps = {
    value: false
};

var displayName = 'InputToggle';

var InputToggle = (_dec = (0, _material2.default)('mdlHolder'), (0, _translation2.default)(_class = _dec(_class = function (_Component) {
    _inherits(InputToggle, _Component);

    function InputToggle() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InputToggle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputToggle.__proto__ || Object.getPrototypeOf(InputToggle)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
            var domElement = _reactDom2.default.findDOMNode(_this.refs.toggle);
            return domElement.checked;
        }, _this.handleOnChange = function (_ref2) {
            var checked = _ref2.target.checked;
            var onChange = _this.props.onChange;

            onChange(checked);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InputToggle, [{
        key: 'render',
        value: function render() {
            var validInputProps = (0, _filterHtmlAttributes2.default)(this.props);
            var label = validInputProps.label,
                value = validInputProps.value;


            validInputProps.onChange = this.handleOnChange;
            validInputProps.checked = value;
            var inputProps = Object.assign({}, validInputProps);

            return _react2.default.createElement(
                'label',
                { className: 'mdl-switch mdl-js-switch mdl-js-ripple-effect', 'data-focus': 'input-toggle', ref: 'mdlHolder' },
                _react2.default.createElement('input', Object.assign({ className: 'mdl-switch__input', ref: 'toggle', type: 'checkbox' }, inputProps)),
                label && _react2.default.createElement(
                    'span',
                    { className: 'mdl-switch__label' },
                    this.i18n(label)
                )
            );
        }
    }]);

    return InputToggle;
}(_react.Component)) || _class) || _class);


InputToggle.propTypes = propTypes;
InputToggle.defaultProps = defaultProps;
InputToggle.displayName = displayName;

exports.default = InputToggle;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibGFiZWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbkNoYW5nZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiLCJJbnB1dFRvZ2dsZSIsIlRyYW5zbGF0aW9uIiwiZ2V0VmFsdWUiLCJkb21FbGVtZW50IiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInJlZnMiLCJ0b2dnbGUiLCJjaGVja2VkIiwiaGFuZGxlT25DaGFuZ2UiLCJ0YXJnZXQiLCJwcm9wcyIsInZhbGlkSW5wdXRQcm9wcyIsImlucHV0UHJvcHMiLCJpMThuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNkQyxXQUFPQyxpQkFBVUMsTUFESDtBQUVkQyxjQUFVRixpQkFBVUcsSUFBVixDQUFlQyxVQUZYO0FBR2RDLFdBQU9MLGlCQUFVTSxJQUFWLENBQWVGO0FBSFIsQ0FBbEI7O0FBTUEsSUFBTUcsZUFBZTtBQUNqQkYsV0FBTztBQURVLENBQXJCOztBQUlBLElBQU1HLGNBQWMsYUFBcEI7O0lBSU1DLFcsV0FETCx3QkFBUyxXQUFULEMsTUFEQUMscUI7Ozs7Ozs7Ozs7Ozs7O29NQUlHQyxRLEdBQVcsWUFBTTtBQUNiLGdCQUFNQyxhQUFhQyxtQkFBU0MsV0FBVCxDQUFxQixNQUFLQyxJQUFMLENBQVVDLE1BQS9CLENBQW5CO0FBQ0EsbUJBQU9KLFdBQVdLLE9BQWxCO0FBQ0gsUyxRQUVEQyxjLEdBQWlCLGlCQUE2QjtBQUFBLGdCQUFoQkQsT0FBZ0IsU0FBMUJFLE1BQTBCLENBQWhCRixPQUFnQjtBQUFBLGdCQUNsQ2YsUUFEa0MsR0FDckIsTUFBS2tCLEtBRGdCLENBQ2xDbEIsUUFEa0M7O0FBRTFDQSxxQkFBU2UsT0FBVDtBQUNILFM7Ozs7O2lDQUVRO0FBQ0wsZ0JBQU1JLGtCQUFrQixvQ0FBWSxLQUFLRCxLQUFqQixDQUF4QjtBQURLLGdCQUVHckIsS0FGSCxHQUVvQnNCLGVBRnBCLENBRUd0QixLQUZIO0FBQUEsZ0JBRVVNLEtBRlYsR0FFb0JnQixlQUZwQixDQUVVaEIsS0FGVjs7O0FBSUxnQiw0QkFBZ0JuQixRQUFoQixHQUEyQixLQUFLZ0IsY0FBaEM7QUFDQUcsNEJBQWdCSixPQUFoQixHQUEwQlosS0FBMUI7QUFDQSxnQkFBTWlCLCtCQUFrQkQsZUFBbEIsQ0FBTjs7QUFFQSxtQkFDSTtBQUFBO0FBQUEsa0JBQU8sV0FBVSwrQ0FBakIsRUFBaUUsY0FBVyxjQUE1RSxFQUEyRixLQUFJLFdBQS9GO0FBQ0ksdUVBQU8sV0FBVSxtQkFBakIsRUFBcUMsS0FBSSxRQUF6QyxFQUFrRCxNQUFLLFVBQXZELElBQXNFQyxVQUF0RSxFQURKO0FBRUt2Qix5QkFBUztBQUFBO0FBQUEsc0JBQU0sV0FBVSxtQkFBaEI7QUFBcUMseUJBQUt3QixJQUFMLENBQVV4QixLQUFWO0FBQXJDO0FBRmQsYUFESjtBQU1IOzs7O0VBMUJxQnlCLGdCOzs7QUE2QjFCZixZQUFZWCxTQUFaLEdBQXdCQSxTQUF4QjtBQUNBVyxZQUFZRixZQUFaLEdBQTJCQSxZQUEzQjtBQUNBRSxZQUFZRCxXQUFaLEdBQTBCQSxXQUExQjs7a0JBRWVDLFciLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFRyYW5zbGF0aW9uIGZyb20gJy4uLy4uLy4uL2JlaGF2aW91cnMvdHJhbnNsYXRpb24nO1xuaW1wb3J0IE1hdGVyaWFsIGZyb20gJy4uLy4uLy4uL2JlaGF2aW91cnMvbWF0ZXJpYWwnO1xuaW1wb3J0IGZpbHRlclByb3BzIGZyb20gJy4uLy4uLy4uL3V0aWxzL2ZpbHRlci1odG1sLWF0dHJpYnV0ZXMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogZmFsc2Vcbn07XG5cbmNvbnN0IGRpc3BsYXlOYW1lID0gJ0lucHV0VG9nZ2xlJztcblxuQFRyYW5zbGF0aW9uXG5ATWF0ZXJpYWwoJ21kbEhvbGRlcicpXG5jbGFzcyBJbnB1dFRvZ2dsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy50b2dnbGUpO1xuICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5jaGVja2VkO1xuICAgIH07XG5cbiAgICBoYW5kbGVPbkNoYW5nZSA9ICh7IHRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBvbkNoYW5nZShjaGVja2VkKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB2YWxpZElucHV0UHJvcHMgPSBmaWx0ZXJQcm9wcyh0aGlzLnByb3BzKTtcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgdmFsdWUgfSA9IHZhbGlkSW5wdXRQcm9wcztcblxuICAgICAgICB2YWxpZElucHV0UHJvcHMub25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlO1xuICAgICAgICB2YWxpZElucHV0UHJvcHMuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICBjb25zdCBpbnB1dFByb3BzID0geyAuLi52YWxpZElucHV0UHJvcHMgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbWRsLXN3aXRjaCBtZGwtanMtc3dpdGNoIG1kbC1qcy1yaXBwbGUtZWZmZWN0JyBkYXRhLWZvY3VzPSdpbnB1dC10b2dnbGUnIHJlZj0nbWRsSG9sZGVyJz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdtZGwtc3dpdGNoX19pbnB1dCcgcmVmPSd0b2dnbGUnIHR5cGU9J2NoZWNrYm94JyB7Li4uaW5wdXRQcm9wc30gLz5cbiAgICAgICAgICAgICAgICB7bGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPSdtZGwtc3dpdGNoX19sYWJlbCc+e3RoaXMuaTE4bihsYWJlbCl9PC9zcGFuPn1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5JbnB1dFRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5JbnB1dFRvZ2dsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5JbnB1dFRvZ2dsZS5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFRvZ2dsZTtcbiJdfQ==