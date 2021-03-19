'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('material-design-lite/material');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Material = function Material(ref, jsClass, watchedProp) {
    return function (Component) {
        return function (_Component) {
            _inherits(MaterialComponent, _Component);

            function MaterialComponent() {
                _classCallCheck(this, MaterialComponent);

                return _possibleConstructorReturn(this, (MaterialComponent.__proto__ || Object.getPrototypeOf(MaterialComponent)).apply(this, arguments));
            }

            _createClass(MaterialComponent, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    var refNode = _reactDom2.default.findDOMNode(this.refs[ref]);
                    if (refNode) {
                        componentHandler.upgradeElement(refNode, jsClass);
                    }
                    if (Component.prototype.componentDidMount) {
                        Component.prototype.componentDidMount.call(this);
                    }
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    var refNode = _reactDom2.default.findDOMNode(this.refs[ref]);
                    if (refNode) {
                        componentHandler.downgradeElements(refNode, jsClass);
                    }
                    if (Component.prototype.componentWillUnmount) {
                        Component.prototype.componentWillUnmount.call(this);
                    }
                }
            }, {
                key: 'componentWillReceiveProps',
                value: function componentWillReceiveProps(nextProps) {
                    var propName = watchedProp || 'error';
                    var newWatchedProp = nextProps[propName];
                    if (newWatchedProp !== this.props[propName] || (this.props.placeholder || nextProps.placeholder) && this.props.value !== nextProps.value) {
                        var refNode = _reactDom2.default.findDOMNode(this.refs[ref]);
                        componentHandler.upgradeElement(refNode, jsClass);
                    }
                    if (Component.prototype.componentWillReceiveProps) {
                        Component.prototype.componentWillReceiveProps.call(this, nextProps);
                    }
                }
            }]);

            return MaterialComponent;
        }(Component);
    };
};

Material.componentHandler = componentHandler;

exports.default = Material;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiTWF0ZXJpYWwiLCJyZWYiLCJqc0NsYXNzIiwid2F0Y2hlZFByb3AiLCJyZWZOb2RlIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInJlZnMiLCJjb21wb25lbnRIYW5kbGVyIiwidXBncmFkZUVsZW1lbnQiLCJDb21wb25lbnQiLCJwcm90b3R5cGUiLCJjb21wb25lbnREaWRNb3VudCIsImNhbGwiLCJkb3duZ3JhZGVFbGVtZW50cyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwibmV4dFByb3BzIiwicHJvcE5hbWUiLCJuZXdXYXRjaGVkUHJvcCIsInByb3BzIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBZUMsV0FBZjtBQUFBLFdBQStCO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG9EQUN4QjtBQUNoQix3QkFBTUMsVUFBVUMsbUJBQVNDLFdBQVQsQ0FBcUIsS0FBS0MsSUFBTCxDQUFVTixHQUFWLENBQXJCLENBQWhCO0FBQ0Esd0JBQUlHLE9BQUosRUFBYTtBQUNUSSx5Q0FBaUJDLGNBQWpCLENBQWdDTCxPQUFoQyxFQUF5Q0YsT0FBekM7QUFDSDtBQUNELHdCQUFJUSxVQUFVQyxTQUFWLENBQW9CQyxpQkFBeEIsRUFBMkM7QUFDdkNGLGtDQUFVQyxTQUFWLENBQW9CQyxpQkFBcEIsQ0FBc0NDLElBQXRDLENBQTJDLElBQTNDO0FBQ0g7QUFDSjtBQVQyQztBQUFBO0FBQUEsdURBV3JCO0FBQ25CLHdCQUFNVCxVQUFVQyxtQkFBU0MsV0FBVCxDQUFxQixLQUFLQyxJQUFMLENBQVVOLEdBQVYsQ0FBckIsQ0FBaEI7QUFDQSx3QkFBSUcsT0FBSixFQUFhO0FBQ1RJLHlDQUFpQk0saUJBQWpCLENBQW1DVixPQUFuQyxFQUE0Q0YsT0FBNUM7QUFDSDtBQUNELHdCQUFJUSxVQUFVQyxTQUFWLENBQW9CSSxvQkFBeEIsRUFBOEM7QUFDMUNMLGtDQUFVQyxTQUFWLENBQW9CSSxvQkFBcEIsQ0FBeUNGLElBQXpDLENBQThDLElBQTlDO0FBQ0g7QUFDSjtBQW5CMkM7QUFBQTtBQUFBLDBEQXFCbEJHLFNBckJrQixFQXFCUDtBQUNqQyx3QkFBTUMsV0FBV2QsZUFBZSxPQUFoQztBQUNBLHdCQUFNZSxpQkFBaUJGLFVBQVVDLFFBQVYsQ0FBdkI7QUFDQSx3QkFBSUMsbUJBQW1CLEtBQUtDLEtBQUwsQ0FBV0YsUUFBWCxDQUFuQixJQUE0QyxDQUFDLEtBQUtFLEtBQUwsQ0FBV0MsV0FBWCxJQUEwQkosVUFBVUksV0FBckMsS0FBcUQsS0FBS0QsS0FBTCxDQUFXRSxLQUFYLEtBQXFCTCxVQUFVSyxLQUFwSSxFQUE0STtBQUN4SSw0QkFBTWpCLFVBQVVDLG1CQUFTQyxXQUFULENBQXFCLEtBQUtDLElBQUwsQ0FBVU4sR0FBVixDQUFyQixDQUFoQjtBQUNBTyx5Q0FBaUJDLGNBQWpCLENBQWdDTCxPQUFoQyxFQUF5Q0YsT0FBekM7QUFDSDtBQUNELHdCQUFJUSxVQUFVQyxTQUFWLENBQW9CVyx5QkFBeEIsRUFBbUQ7QUFDL0NaLGtDQUFVQyxTQUFWLENBQW9CVyx5QkFBcEIsQ0FBOENULElBQTlDLENBQW1ELElBQW5ELEVBQXlERyxTQUF6RDtBQUNIO0FBQ0o7QUEvQjJDOztBQUFBO0FBQUEsVUFBNkNOLFNBQTdDO0FBQUEsS0FBL0I7QUFBQSxDQUFqQjs7QUFrQ0FWLFNBQVNRLGdCQUFULEdBQTRCQSxnQkFBNUI7O2tCQUVlUixRIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICdtYXRlcmlhbC1kZXNpZ24tbGl0ZS9tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBNYXRlcmlhbCA9IChyZWYsIGpzQ2xhc3MsIHdhdGNoZWRQcm9wKSA9PiBDb21wb25lbnQgPT4gY2xhc3MgTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgcmVmTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmc1tyZWZdKTtcclxuICAgICAgICBpZiAocmVmTm9kZSkge1xyXG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHJlZk5vZGUsIGpzQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCkge1xyXG4gICAgICAgICAgICBDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHJlZk5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNbcmVmXSk7XHJcbiAgICAgICAgaWYgKHJlZk5vZGUpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50SGFuZGxlci5kb3duZ3JhZGVFbGVtZW50cyhyZWZOb2RlLCBqc0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQpIHtcclxuICAgICAgICAgICAgQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHByb3BOYW1lID0gd2F0Y2hlZFByb3AgfHwgJ2Vycm9yJztcclxuICAgICAgICBjb25zdCBuZXdXYXRjaGVkUHJvcCA9IG5leHRQcm9wc1twcm9wTmFtZV07XHJcbiAgICAgICAgaWYgKG5ld1dhdGNoZWRQcm9wICE9PSB0aGlzLnByb3BzW3Byb3BOYW1lXSB8fCAoKHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfHwgbmV4dFByb3BzLnBsYWNlaG9sZGVyKSAmJiB0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZk5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNbcmVmXSk7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQocmVmTm9kZSwganNDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMpIHtcclxuICAgICAgICAgICAgQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzLmNhbGwodGhpcywgbmV4dFByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5NYXRlcmlhbC5jb21wb25lbnRIYW5kbGVyID0gY29tcG9uZW50SGFuZGxlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsO1xyXG4iXX0=