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
    value: _react.PropTypes.bool.isRequired,
    error: _react.PropTypes.string
};

var defaultProps = {
    value: false
};

var InputCheckBoxWithError = (_dec = (0, _material2.default)('mdlHolder'), (0, _translation2.default)(_class = _dec(_class = function (_Component) {
    _inherits(InputCheckBoxWithError, _Component);

    function InputCheckBoxWithError(props) {
        _classCallCheck(this, InputCheckBoxWithError);

        var _this = _possibleConstructorReturn(this, (InputCheckBoxWithError.__proto__ || Object.getPrototypeOf(InputCheckBoxWithError)).call(this, props));

        _this.getValue = function () {
            var domElement = _reactDom2.default.findDOMNode(_this.refs.checkbox);
            return domElement.checked;
        };

        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }

    _createClass(InputCheckBoxWithError, [{
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
        key: 'handleOnChange',
        value: function handleOnChange(_ref) {
            var checked = _ref.target.checked;
            var onChange = this.props.onChange;

            onChange(checked);
        }
    }, {
        key: 'render',
        value: function render() {
            var validInputProps = (0, _filterHtmlAttributes2.default)(this.props);

            var _props = this.props,
                label = _props.label,
                value = _props.value,
                disabled = _props.disabled,
                error = _props.error;


            validInputProps.onChange = this.handleOnChange;
            var inputProps = Object.assign({}, validInputProps, { type: 'checkbox', disabled: disabled, checked: value, className: 'mdl-checkbox__input' });
            delete inputProps.value;

            return _react2.default.createElement(
                'div',
                { 'data-error': !!error, 'data-focus': 'input-checkbox-with-error-container' },
                _react2.default.createElement(
                    'label',
                    { className: 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect', 'data-focus': 'input-checkbox', ref: 'mdlHolder' },
                    _react2.default.createElement('input', Object.assign({ ref: 'checkbox' }, inputProps)),
                    label && _react2.default.createElement(
                        'span',
                        { className: 'mdl-checkbox__label' },
                        this.i18n(label)
                    ),
                    error && _react2.default.createElement(
                        'span',
                        { className: 'input-checkbox__error' },
                        this.i18n(error)
                    )
                )
            );
        }
    }]);

    return InputCheckBoxWithError;
}(_react.Component)) || _class) || _class);


InputCheckBoxWithError.displayName = 'InputCheckBoxWithError';
InputCheckBoxWithError.propTypes = propTypes;
InputCheckBoxWithError.defaultProps = defaultProps;

exports.default = InputCheckBoxWithError;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibGFiZWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbkNoYW5nZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwidmFsdWUiLCJib29sIiwiZXJyb3IiLCJkZWZhdWx0UHJvcHMiLCJJbnB1dENoZWNrQm94V2l0aEVycm9yIiwiVHJhbnNsYXRpb24iLCJwcm9wcyIsImdldFZhbHVlIiwiZG9tRWxlbWVudCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZWZzIiwiY2hlY2tib3giLCJjaGVja2VkIiwiaGFuZGxlT25DaGFuZ2UiLCJiaW5kIiwibWV0aG9kIiwibm9kZSIsIm1kbEhvbGRlciIsImNsYXNzTGlzdCIsInRhcmdldCIsInZhbGlkSW5wdXRQcm9wcyIsImRpc2FibGVkIiwiaW5wdXRQcm9wcyIsInR5cGUiLCJjbGFzc05hbWUiLCJpMThuIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2RDLFdBQU9DLGlCQUFVQyxNQURIO0FBRWRDLGNBQVVGLGlCQUFVRyxJQUFWLENBQWVDLFVBRlg7QUFHZEMsV0FBT0wsaUJBQVVNLElBQVYsQ0FBZUYsVUFIUjtBQUlkRyxXQUFPUCxpQkFBVUM7QUFKSCxDQUFsQjs7QUFPQSxJQUFNTyxlQUFlO0FBQ2pCSCxXQUFPO0FBRFUsQ0FBckI7O0lBTU1JLHNCLFdBREwsd0JBQVMsV0FBVCxDLE1BREFDLHFCOzs7QUFJRyxvQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9KQUNUQSxLQURTOztBQUFBLGNBS25CQyxRQUxtQixHQUtSLFlBQU07QUFDYixnQkFBTUMsYUFBYUMsbUJBQVNDLFdBQVQsQ0FBcUIsTUFBS0MsSUFBTCxDQUFVQyxRQUEvQixDQUFuQjtBQUNBLG1CQUFPSixXQUFXSyxPQUFsQjtBQUNILFNBUmtCOztBQUVmLGNBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFGZTtBQUdsQjs7Ozs2Q0FPb0I7QUFBQSxnQkFDVGYsS0FEUyxHQUNDLEtBQUtNLEtBRE4sQ0FDVE4sS0FEUzs7QUFFakIsZ0JBQU1nQixTQUFTaEIsUUFBUSxLQUFSLEdBQWdCLFFBQS9CO0FBQ0EsZ0JBQU1pQixPQUFPUixtQkFBU0MsV0FBVCxDQUFxQixLQUFLQyxJQUFMLENBQVVPLFNBQS9CLENBQWI7QUFDQSxnQkFBSUQsSUFBSixFQUFVO0FBQ05BLHFCQUFLRSxTQUFMLENBQWVILE1BQWYsRUFBdUIsWUFBdkI7QUFDSDtBQUNKOzs7NkNBRXVDO0FBQUEsZ0JBQWJILE9BQWEsUUFBdkJPLE1BQXVCLENBQWJQLE9BQWE7QUFBQSxnQkFDNUJoQixRQUQ0QixHQUNmLEtBQUtTLEtBRFUsQ0FDNUJULFFBRDRCOztBQUVwQ0EscUJBQVNnQixPQUFUO0FBQ0g7OztpQ0FFUTtBQUNMLGdCQUFNUSxrQkFBa0Isb0NBQVksS0FBS2YsS0FBakIsQ0FBeEI7O0FBREsseUJBR3FDLEtBQUtBLEtBSDFDO0FBQUEsZ0JBR0daLEtBSEgsVUFHR0EsS0FISDtBQUFBLGdCQUdVTSxLQUhWLFVBR1VBLEtBSFY7QUFBQSxnQkFHaUJzQixRQUhqQixVQUdpQkEsUUFIakI7QUFBQSxnQkFHMkJwQixLQUgzQixVQUcyQkEsS0FIM0I7OztBQUtMbUIsNEJBQWdCeEIsUUFBaEIsR0FBMkIsS0FBS2lCLGNBQWhDO0FBQ0EsZ0JBQU1TLCtCQUFrQkYsZUFBbEIsSUFBbUNHLE1BQU0sVUFBekMsRUFBcURGLGtCQUFyRCxFQUErRFQsU0FBU2IsS0FBeEUsRUFBK0V5QixXQUFXLHFCQUExRixHQUFOO0FBQ0EsbUJBQU9GLFdBQVd2QixLQUFsQjs7QUFFQSxtQkFDSTtBQUFBO0FBQUEsa0JBQUssY0FBWSxDQUFDLENBQUNFLEtBQW5CLEVBQTBCLGNBQVcscUNBQXJDO0FBQ0k7QUFBQTtBQUFBLHNCQUFPLFdBQVcsbURBQWxCLEVBQXVFLGNBQVcsZ0JBQWxGLEVBQW1HLEtBQUksV0FBdkc7QUFDSSwyRUFBTyxLQUFJLFVBQVgsSUFBMEJxQixVQUExQixFQURKO0FBRUs3Qiw2QkFBUztBQUFBO0FBQUEsMEJBQU0sV0FBVSxxQkFBaEI7QUFBdUMsNkJBQUtnQyxJQUFMLENBQVVoQyxLQUFWO0FBQXZDLHFCQUZkO0FBR0tRLDZCQUFTO0FBQUE7QUFBQSwwQkFBTSxXQUFVLHVCQUFoQjtBQUF5Qyw2QkFBS3dCLElBQUwsQ0FBVXhCLEtBQVY7QUFBekM7QUFIZDtBQURKLGFBREo7QUFTSDs7OztFQTVDZ0N5QixnQjs7O0FBK0NyQ3ZCLHVCQUF1QndCLFdBQXZCLEdBQXFDLHdCQUFyQztBQUNBeEIsdUJBQXVCWCxTQUF2QixHQUFtQ0EsU0FBbkM7QUFDQVcsdUJBQXVCRCxZQUF2QixHQUFzQ0EsWUFBdEM7O2tCQUVlQyxzQiIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVHJhbnNsYXRpb24gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3Vycy90cmFuc2xhdGlvbic7XG5pbXBvcnQgTWF0ZXJpYWwgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3Vycy9tYXRlcmlhbCc7XG5pbXBvcnQgZmlsdGVyUHJvcHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmlsdGVyLWh0bWwtYXR0cmlidXRlcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiBmYWxzZVxufTtcblxuQFRyYW5zbGF0aW9uXG5ATWF0ZXJpYWwoJ21kbEhvbGRlcicpXG5jbGFzcyBJbnB1dENoZWNrQm94V2l0aEVycm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPbkNoYW5nZSA9IHRoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5jaGVja2JveCk7XG4gICAgICAgIHJldHVybiBkb21FbGVtZW50LmNoZWNrZWQ7XG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgbWV0aG9kID0gdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnO1xuICAgICAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLm1kbEhvbGRlcik7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdFttZXRob2RdKCdpcy1jaGVja2VkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVPbkNoYW5nZSh7IHRhcmdldDogeyBjaGVja2VkIH0gfSkge1xuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBvbkNoYW5nZShjaGVja2VkKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkSW5wdXRQcm9wcyA9IGZpbHRlclByb3BzKHRoaXMucHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIHZhbHVlLCBkaXNhYmxlZCwgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdmFsaWRJbnB1dFByb3BzLm9uQ2hhbmdlID0gdGhpcy5oYW5kbGVPbkNoYW5nZTtcbiAgICAgICAgY29uc3QgaW5wdXRQcm9wcyA9IHsgLi4udmFsaWRJbnB1dFByb3BzLCB0eXBlOiAnY2hlY2tib3gnLCBkaXNhYmxlZCwgY2hlY2tlZDogdmFsdWUsIGNsYXNzTmFtZTogJ21kbC1jaGVja2JveF9faW5wdXQnIH07XG4gICAgICAgIGRlbGV0ZSBpbnB1dFByb3BzLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZXJyb3I9eyEhZXJyb3J9IGRhdGEtZm9jdXM9J2lucHV0LWNoZWNrYm94LXdpdGgtZXJyb3ItY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXsnbWRsLWNoZWNrYm94IG1kbC1qcy1jaGVja2JveCBtZGwtanMtcmlwcGxlLWVmZmVjdCd9IGRhdGEtZm9jdXM9J2lucHV0LWNoZWNrYm94JyByZWY9J21kbEhvbGRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9J2NoZWNrYm94JyB7Li4uaW5wdXRQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAge2xhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT0nbWRsLWNoZWNrYm94X19sYWJlbCc+e3RoaXMuaTE4bihsYWJlbCl9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtY2hlY2tib3hfX2Vycm9yJz57dGhpcy5pMThuKGVycm9yKX08L3NwYW4+fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbklucHV0Q2hlY2tCb3hXaXRoRXJyb3IuZGlzcGxheU5hbWUgPSAnSW5wdXRDaGVja0JveFdpdGhFcnJvcic7XG5JbnB1dENoZWNrQm94V2l0aEVycm9yLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbklucHV0Q2hlY2tCb3hXaXRoRXJyb3IuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dENoZWNrQm94V2l0aEVycm9yO1xuIl19