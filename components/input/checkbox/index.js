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
    disabled: _react.PropTypes.bool,
    onChange: _react.PropTypes.func.isRequired,
    value: _react.PropTypes.bool.isRequired
};

var defaultProps = {
    value: false,
    disabled: false
};

var displayName = 'InputCheckBox';

var InputCheckBox = (_dec = (0, _material2.default)('mdlHolder'), (0, _translation2.default)(_class = _dec(_class = function (_Component) {
    _inherits(InputCheckBox, _Component);

    function InputCheckBox(props) {
        _classCallCheck(this, InputCheckBox);

        var _this = _possibleConstructorReturn(this, (InputCheckBox.__proto__ || Object.getPrototypeOf(InputCheckBox)).call(this, props));

        _this.getValue = function () {
            return _this.props.value;
        };

        _this.handleOnChange = function (_ref) {
            var checked = _ref.target.checked;
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(checked);
            }
        };

        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }

    _createClass(InputCheckBox, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var value = this.props.value;

            var method = value ? 'add' : 'remove';
            var node = _reactDom2.default.findDOMNode(this.refs.mdlHolder);
            if (node) {
                node.classList[method]('is-checked');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var validInputProps = (0, _filterHtmlAttributes2.default)(this.props);

            var _props = this.props,
                label = _props.label,
                value = _props.value,
                disabled = _props.disabled;


            validInputProps.onChange = this.handleOnChange;
            var inputProps = Object.assign({}, validInputProps, { type: 'checkbox', disabled: disabled, checked: value, className: 'mdl-checkbox__input' });
            delete inputProps.value;

            return _react2.default.createElement(
                'div',
                { 'data-focus': 'input-checkbox-container' },
                _react2.default.createElement(
                    'label',
                    { className: 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect', 'data-focus': 'input-checkbox', ref: 'mdlHolder' },
                    _react2.default.createElement('input', Object.assign({ ref: 'checkbox' }, inputProps)),
                    label && _react2.default.createElement(
                        'span',
                        { className: 'mdl-checkbox__label' },
                        this.i18n(label)
                    )
                )
            );
        }
    }]);

    return InputCheckBox;
}(_react.Component)) || _class) || _class);


InputCheckBox.propTypes = propTypes;
InputCheckBox.defaultProps = defaultProps;
InputCheckBox.displayName = displayName;

exports.default = InputCheckBox;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibGFiZWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJkaXNhYmxlZCIsImJvb2wiLCJvbkNoYW5nZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsIklucHV0Q2hlY2tCb3giLCJUcmFuc2xhdGlvbiIsInByb3BzIiwiZ2V0VmFsdWUiLCJoYW5kbGVPbkNoYW5nZSIsImNoZWNrZWQiLCJ0YXJnZXQiLCJiaW5kIiwibWV0aG9kIiwibm9kZSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZWZzIiwibWRsSG9sZGVyIiwiY2xhc3NMaXN0IiwidmFsaWRJbnB1dFByb3BzIiwiaW5wdXRQcm9wcyIsInR5cGUiLCJjbGFzc05hbWUiLCJpMThuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNkQyxXQUFPQyxpQkFBVUMsTUFESDtBQUVkQyxjQUFVRixpQkFBVUcsSUFGTjtBQUdkQyxjQUFVSixpQkFBVUssSUFBVixDQUFlQyxVQUhYO0FBSWRDLFdBQU9QLGlCQUFVRyxJQUFWLENBQWVHO0FBSlIsQ0FBbEI7O0FBT0EsSUFBTUUsZUFBZTtBQUNqQkQsV0FBTyxLQURVO0FBRWpCTCxjQUFVO0FBRk8sQ0FBckI7O0FBS0EsSUFBTU8sY0FBYyxlQUFwQjs7SUFJTUMsYSxXQURMLHdCQUFTLFdBQVQsQyxNQURBQyxxQjs7O0FBSUcsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSUFDVEEsS0FEUzs7QUFBQSxjQUtuQkMsUUFMbUIsR0FLUixZQUFNO0FBQ2IsbUJBQU8sTUFBS0QsS0FBTCxDQUFXTCxLQUFsQjtBQUNILFNBUGtCOztBQUFBLGNBa0JuQk8sY0FsQm1CLEdBa0JGLGdCQUE2QjtBQUFBLGdCQUFoQkMsT0FBZ0IsUUFBMUJDLE1BQTBCLENBQWhCRCxPQUFnQjtBQUFBLGdCQUNsQ1gsUUFEa0MsR0FDckIsTUFBS1EsS0FEZ0IsQ0FDbENSLFFBRGtDOztBQUUxQyxnQkFBSUEsUUFBSixFQUFjO0FBQ1ZBLHlCQUFTVyxPQUFUO0FBQ0g7QUFDSixTQXZCa0I7O0FBRWYsY0FBS0QsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRyxJQUFwQixPQUF0QjtBQUZlO0FBR2xCOzs7OzZDQU1vQjtBQUFBLGdCQUNUVixLQURTLEdBQ0MsS0FBS0ssS0FETixDQUNUTCxLQURTOztBQUVqQixnQkFBTVcsU0FBU1gsUUFBUSxLQUFSLEdBQWdCLFFBQS9CO0FBQ0EsZ0JBQU1ZLE9BQU9DLG1CQUFTQyxXQUFULENBQXFCLEtBQUtDLElBQUwsQ0FBVUMsU0FBL0IsQ0FBYjtBQUNBLGdCQUFJSixJQUFKLEVBQVU7QUFDTkEscUJBQUtLLFNBQUwsQ0FBZU4sTUFBZixFQUF1QixZQUF2QjtBQUNIO0FBQ0o7OztpQ0FTUTtBQUNMLGdCQUFNTyxrQkFBa0Isb0NBQVksS0FBS2IsS0FBakIsQ0FBeEI7O0FBREsseUJBRzhCLEtBQUtBLEtBSG5DO0FBQUEsZ0JBR0diLEtBSEgsVUFHR0EsS0FISDtBQUFBLGdCQUdVUSxLQUhWLFVBR1VBLEtBSFY7QUFBQSxnQkFHaUJMLFFBSGpCLFVBR2lCQSxRQUhqQjs7O0FBS0x1Qiw0QkFBZ0JyQixRQUFoQixHQUEyQixLQUFLVSxjQUFoQztBQUNBLGdCQUFNWSwrQkFBa0JELGVBQWxCLElBQW1DRSxNQUFNLFVBQXpDLEVBQXFEekIsa0JBQXJELEVBQStEYSxTQUFTUixLQUF4RSxFQUErRXFCLFdBQVcscUJBQTFGLEdBQU47QUFDQSxtQkFBT0YsV0FBV25CLEtBQWxCOztBQUVBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLDBCQUFoQjtBQUNJO0FBQUE7QUFBQSxzQkFBTyxXQUFXLG1EQUFsQixFQUF1RSxjQUFXLGdCQUFsRixFQUFtRyxLQUFJLFdBQXZHO0FBQ0ksMkVBQU8sS0FBSSxVQUFYLElBQTBCbUIsVUFBMUIsRUFESjtBQUVLM0IsNkJBQVM7QUFBQTtBQUFBLDBCQUFNLFdBQVUscUJBQWhCO0FBQXVDLDZCQUFLOEIsSUFBTCxDQUFVOUIsS0FBVjtBQUF2QztBQUZkO0FBREosYUFESjtBQVFIOzs7O0VBNUN1QitCLGdCOzs7QUErQzVCcEIsY0FBY1osU0FBZCxHQUEwQkEsU0FBMUI7QUFDQVksY0FBY0YsWUFBZCxHQUE2QkEsWUFBN0I7QUFDQUUsY0FBY0QsV0FBZCxHQUE0QkEsV0FBNUI7O2tCQUVlQyxhIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUcmFuc2xhdGlvbiBmcm9tICcuLi8uLi8uLi9iZWhhdmlvdXJzL3RyYW5zbGF0aW9uJztcbmltcG9ydCBNYXRlcmlhbCBmcm9tICcuLi8uLi8uLi9iZWhhdmlvdXJzL21hdGVyaWFsJztcbmltcG9ydCBmaWx0ZXJQcm9wcyBmcm9tICcuLi8uLi8uLi91dGlscy9maWx0ZXItaHRtbC1hdHRyaWJ1dGVzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cbmNvbnN0IGRpc3BsYXlOYW1lID0gJ0lucHV0Q2hlY2tCb3gnO1xuXG5AVHJhbnNsYXRpb25cbkBNYXRlcmlhbCgnbWRsSG9sZGVyJylcbmNsYXNzIElucHV0Q2hlY2tCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZU9uQ2hhbmdlID0gdGhpcy5oYW5kbGVPbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldFZhbHVlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBtZXRob2QgPSB2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSc7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubWRsSG9sZGVyKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0W21ldGhvZF0oJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU9uQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2UoY2hlY2tlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkSW5wdXRQcm9wcyA9IGZpbHRlclByb3BzKHRoaXMucHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIHZhbHVlLCBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB2YWxpZElucHV0UHJvcHMub25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlO1xuICAgICAgICBjb25zdCBpbnB1dFByb3BzID0geyAuLi52YWxpZElucHV0UHJvcHMsIHR5cGU6ICdjaGVja2JveCcsIGRpc2FibGVkLCBjaGVja2VkOiB2YWx1ZSwgY2xhc3NOYW1lOiAnbWRsLWNoZWNrYm94X19pbnB1dCcgfTtcbiAgICAgICAgZGVsZXRlIGlucHV0UHJvcHMudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0naW5wdXQtY2hlY2tib3gtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXsnbWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdCd9IGRhdGEtZm9jdXM9J2lucHV0LWNoZWNrYm94JyByZWY9J21kbEhvbGRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9J2NoZWNrYm94JyB7Li4uaW5wdXRQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAge2xhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT0nbWRsLWNoZWNrYm94X19sYWJlbCc+e3RoaXMuaTE4bihsYWJlbCl9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5JbnB1dENoZWNrQm94LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbklucHV0Q2hlY2tCb3guZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuSW5wdXRDaGVja0JveC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dENoZWNrQm94O1xuIl19