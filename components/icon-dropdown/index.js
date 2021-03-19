'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _translation = require('../../behaviours/translation');

var _translation2 = _interopRequireDefault(_translation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

var Dropdown = (0, _translation2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dropdown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            visible: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dropdown, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('click', this._handleDocumentClick.bind(this));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this._handleDocumentClick);
        }
    }, {
        key: '_handleDocumentClick',
        value: function _handleDocumentClick(_ref2) {
            var target = _ref2.target;
            var visible = this.state.visible;

            if (visible) {
                var dropdownElement = _reactDom2.default.findDOMNode(this.refs.parent);
                if (!isDescendant(dropdownElement, target)) {
                    this.setState({ visible: false });
                }
            }
        }
    }, {
        key: '_handleIconClick',
        value: function _handleIconClick() {
            this.setState({ visible: !this.state.visible });
        }
    }, {
        key: '_operationActionWrapper',
        value: function _operationActionWrapper(action) {
            var _this2 = this;

            return function () {
                action();
                _this2.setState({ visible: false });
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _Dropdown$defaultProp = Dropdown.defaultProps.iconProps,
                defaultName = _Dropdown$defaultProp.name,
                defaultIconLibrary = _Dropdown$defaultProp.iconLibrary;
            var _props = this.props,
                _props$iconProps = _props.iconProps,
                _props$iconProps$name = _props$iconProps.name,
                name = _props$iconProps$name === undefined ? defaultName : _props$iconProps$name,
                _props$iconProps$icon = _props$iconProps.iconLibrary,
                iconLibrary = _props$iconProps$icon === undefined ? defaultIconLibrary : _props$iconProps$icon,
                operationList = _props.operationList,
                shape = _props.shape,
                openDirection = _props.openDirection,
                buttonType = _props.buttonType;
            var visible = this.state.visible;


            return _react2.default.createElement(
                'div',
                { 'data-focus': 'icon-dropdown', ref: 'parent' },
                _react2.default.createElement(_button2.default, {
                    shape: shape,
                    icon: name,
                    iconLibrary: iconLibrary,
                    handleOnClick: this._handleIconClick.bind(this),
                    type: buttonType
                }),
                visible && _react2.default.createElement(
                    'div',
                    { 'data-focus': 'dropdown-menu', 'data-position': openDirection, ref: 'dropdown' },
                    operationList.map(function (_ref3, idx) {
                        var label = _ref3.label,
                            action = _ref3.action;
                        return _react2.default.createElement(
                            'div',
                            { key: idx, 'data-role': 'dropdown-item', onClick: _this3._operationActionWrapper(action) },
                            _this3.i18n(label)
                        );
                    })
                )
            );
        }
    }]);

    return Dropdown;
}(_react.Component), _class2.propTypes = {
    openDirection: _react.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right'])
}, _class2.defaultProps = {
    openDirection: 'bottom-left',
    iconProps: {
        name: 'more_vert',
        iconLibrary: 'material'
    },
    shape: 'fab',
    operationList: [],
    buttonType: 'submit'
}, _temp2)) || _class;

exports.default = Dropdown;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiaXNEZXNjZW5kYW50IiwicGFyZW50IiwiY2hpbGQiLCJub2RlIiwicGFyZW50Tm9kZSIsIkRyb3Bkb3duIiwiVHJhbnNsYXRpb24iLCJzdGF0ZSIsInZpc2libGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlRG9jdW1lbnRDbGljayIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiZHJvcGRvd25FbGVtZW50IiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInJlZnMiLCJzZXRTdGF0ZSIsImFjdGlvbiIsImRlZmF1bHRQcm9wcyIsImljb25Qcm9wcyIsImRlZmF1bHROYW1lIiwibmFtZSIsImRlZmF1bHRJY29uTGlicmFyeSIsImljb25MaWJyYXJ5IiwicHJvcHMiLCJvcGVyYXRpb25MaXN0Iiwic2hhcGUiLCJvcGVuRGlyZWN0aW9uIiwiYnV0dG9uVHlwZSIsIl9oYW5kbGVJY29uQ2xpY2siLCJtYXAiLCJpZHgiLCJsYWJlbCIsIl9vcGVyYXRpb25BY3Rpb25XcmFwcGVyIiwiaTE4biIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCQyxLQUE5QixFQUFxQztBQUNqQyxRQUFJQyxPQUFPRCxNQUFNRSxVQUFqQjtBQUNBLFdBQU9ELFFBQVEsSUFBZixFQUFxQjtBQUNqQixZQUFJQSxRQUFRRixNQUFaLEVBQW9CO0FBQ2hCLG1CQUFPLElBQVA7QUFDSDtBQUNERSxlQUFPQSxLQUFLQyxVQUFaO0FBQ0g7QUFDRCxXQUFPLEtBQVA7QUFDSDs7SUFHS0MsUSxPQURMQyxxQjs7Ozs7Ozs7Ozs7Ozs7OExBa0JHQyxLLEdBQVE7QUFDSkMscUJBQVM7QUFE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QUFFUEUscUJBQWE7QUFGTixLQUZPO0FBTWxCRyxXQUFPLEtBTlc7QUFPbEJELG1CQUFlLEVBUEc7QUFRbEJHLGdCQUFZO0FBUk0sQzs7a0JBb0VYMUIsUSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCBUcmFuc2xhdGlvbiBmcm9tICcuLi8uLi9iZWhhdmlvdXJzL3RyYW5zbGF0aW9uJztcblxuZnVuY3Rpb24gaXNEZXNjZW5kYW50KHBhcmVudCwgY2hpbGQpIHtcbiAgICBsZXQgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICBpZiAobm9kZSA9PSBwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuQFRyYW5zbGF0aW9uXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBvcGVuRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0J10pXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG9wZW5EaXJlY3Rpb246ICdib3R0b20tbGVmdCcsXG4gICAgICAgIGljb25Qcm9wczoge1xuICAgICAgICAgICAgbmFtZTogJ21vcmVfdmVydCcsXG4gICAgICAgICAgICBpY29uTGlicmFyeTogJ21hdGVyaWFsJ1xuICAgICAgICB9LFxuICAgICAgICBzaGFwZTogJ2ZhYicsXG4gICAgICAgIG9wZXJhdGlvbkxpc3Q6IFtdLFxuICAgICAgICBidXR0b25UeXBlOiAnc3VibWl0J1xuICAgIH07XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRG9jdW1lbnRDbGljayh7IHRhcmdldCB9KSB7XG4gICAgICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5wYXJlbnQpO1xuICAgICAgICAgICAgaWYgKCFpc0Rlc2NlbmRhbnQoZHJvcGRvd25FbGVtZW50LCB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZUljb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6ICF0aGlzLnN0YXRlLnZpc2libGUgfSk7XG4gICAgfVxuXG4gICAgX29wZXJhdGlvbkFjdGlvbldyYXBwZXIoYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBhY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lOiBkZWZhdWx0TmFtZSwgaWNvbkxpYnJhcnk6IGRlZmF1bHRJY29uTGlicmFyeSB9ID0gRHJvcGRvd24uZGVmYXVsdFByb3BzLmljb25Qcm9wcztcbiAgICAgICAgY29uc3QgeyBpY29uUHJvcHM6IHsgbmFtZSA9IGRlZmF1bHROYW1lLCBpY29uTGlicmFyeSA9IGRlZmF1bHRJY29uTGlicmFyeSB9LCBvcGVyYXRpb25MaXN0LCBzaGFwZSwgb3BlbkRpcmVjdGlvbiwgYnV0dG9uVHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2ljb24tZHJvcGRvd24nIHJlZj0ncGFyZW50Jz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlPXtzaGFwZX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbkxpYnJhcnk9e2ljb25MaWJyYXJ5fVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVPbkNsaWNrPXt0aGlzLl9oYW5kbGVJY29uQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17YnV0dG9uVHlwZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt2aXNpYmxlICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nZHJvcGRvd24tbWVudScgZGF0YS1wb3NpdGlvbj17b3BlbkRpcmVjdGlvbn0gcmVmPSdkcm9wZG93bic+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3BlcmF0aW9uTGlzdC5tYXAoKHsgbGFiZWwsIGFjdGlvbiB9LCBpZHgpID0+ICg8ZGl2IGtleT17aWR4fSBkYXRhLXJvbGU9J2Ryb3Bkb3duLWl0ZW0nIG9uQ2xpY2s9e3RoaXMuX29wZXJhdGlvbkFjdGlvbldyYXBwZXIoYWN0aW9uKX0+e3RoaXMuaTE4bihsYWJlbCl9PC9kaXY+KSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdfQ==