'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _actionMenu = require('./action-menu');

var _actionMenu2 = _interopRequireDefault(_actionMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Dropdown component
 * 
 * @class Dropdown
 * @extends {Component}
 */
var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    /**
     * Creates an instance of Dropdown.
     * @param {any} props component props
     * @memberof Dropdown
     */
    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
    }

    /** @inheritdoc */


    _createClass(Dropdown, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this._htmlId = _uuid2.default.v4();
        }

        /** @inheritdoc */

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                iconProps = _props.iconProps,
                operationList = _props.operationList,
                position = _props.position,
                shape = _props.shape;

            var id = this._htmlId;
            if (0 === operationList.length) {
                return null;
            }
            return _react2.default.createElement(_actionMenu2.default, { id: id, iconProps: iconProps, operationList: operationList, position: position, shape: shape });
        }
    }]);

    return Dropdown;
}(_react.Component);

Dropdown.displayName = 'Dropdown';

Dropdown.defaultProps = {
    position: 'right',
    iconProps: {
        name: 'more_vert'
    },
    shape: 'icon',
    operationList: []
};

Dropdown.propTypes = {
    position: _react.PropTypes.string,
    iconProps: _react.PropTypes.object,
    operationList: _react.PropTypes.array,
    shape: _react.PropTypes.string
};

exports.default = Dropdown;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJwcm9wcyIsIl9odG1sSWQiLCJ1dWlkIiwidjQiLCJpY29uUHJvcHMiLCJvcGVyYXRpb25MaXN0IiwicG9zaXRpb24iLCJzaGFwZSIsImlkIiwibGVuZ3RoIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTUEsUTs7O0FBRUY7Ozs7O0FBS0Esc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDVEEsS0FEUztBQUVsQjs7QUFFRDs7Ozs7NkNBQ3FCO0FBQ2pCLGlCQUFLQyxPQUFMLEdBQWVDLGVBQUtDLEVBQUwsRUFBZjtBQUNIOztBQUVEOzs7O2lDQUNTO0FBQUEseUJBQ2lELEtBQUtILEtBRHREO0FBQUEsZ0JBQ0dJLFNBREgsVUFDR0EsU0FESDtBQUFBLGdCQUNjQyxhQURkLFVBQ2NBLGFBRGQ7QUFBQSxnQkFDNkJDLFFBRDdCLFVBQzZCQSxRQUQ3QjtBQUFBLGdCQUN1Q0MsS0FEdkMsVUFDdUNBLEtBRHZDOztBQUVMLGdCQUFNQyxLQUFLLEtBQUtQLE9BQWhCO0FBQ0EsZ0JBQUksTUFBTUksY0FBY0ksTUFBeEIsRUFBZ0M7QUFDNUIsdUJBQU8sSUFBUDtBQUNIO0FBQ0QsbUJBQ0ksOEJBQUMsb0JBQUQsSUFBWSxJQUFJRCxFQUFoQixFQUFvQixXQUFXSixTQUEvQixFQUEwQyxlQUFlQyxhQUF6RCxFQUF3RSxVQUFVQyxRQUFsRixFQUE0RixPQUFPQyxLQUFuRyxHQURKO0FBR0g7Ozs7RUExQmtCRyxnQjs7QUErQnZCWCxTQUFTWSxXQUFULEdBQXVCLFVBQXZCOztBQUVBWixTQUFTYSxZQUFULEdBQXdCO0FBQ3BCTixjQUFVLE9BRFU7QUFFcEJGLGVBQVc7QUFDUFMsY0FBTTtBQURDLEtBRlM7QUFLcEJOLFdBQU8sTUFMYTtBQU1wQkYsbUJBQWU7QUFOSyxDQUF4Qjs7QUFTQU4sU0FBU2UsU0FBVCxHQUFxQjtBQUNqQlIsY0FBVVMsaUJBQVVDLE1BREg7QUFFakJaLGVBQVdXLGlCQUFVRSxNQUZKO0FBR2pCWixtQkFBZVUsaUJBQVVHLEtBSFI7QUFJakJYLFdBQU9RLGlCQUFVQztBQUpBLENBQXJCOztrQkFPZWpCLFEiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xyXG5cclxuaW1wb3J0IEFjdGlvbk1lbnUgZnJvbSAnLi9hY3Rpb24tbWVudSc7XHJcblxyXG4vKipcclxuICogRHJvcGRvd24gY29tcG9uZW50XHJcbiAqIFxyXG4gKiBAY2xhc3MgRHJvcGRvd25cclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cclxuICovXHJcbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRHJvcGRvd24uXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gcHJvcHMgY29tcG9uZW50IHByb3BzXHJcbiAgICAgKiBAbWVtYmVyb2YgRHJvcGRvd25cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faHRtbElkID0gdXVpZC52NCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWNvblByb3BzLCBvcGVyYXRpb25MaXN0LCBwb3NpdGlvbiwgc2hhcGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLl9odG1sSWQ7XHJcbiAgICAgICAgaWYgKDAgPT09IG9wZXJhdGlvbkxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QWN0aW9uTWVudSBpZD17aWR9IGljb25Qcm9wcz17aWNvblByb3BzfSBvcGVyYXRpb25MaXN0PXtvcGVyYXRpb25MaXN0fSBwb3NpdGlvbj17cG9zaXRpb259IHNoYXBlPXtzaGFwZX0gLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkRyb3Bkb3duLmRpc3BsYXlOYW1lID0gJ0Ryb3Bkb3duJztcclxuXHJcbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgaWNvblByb3BzOiB7XHJcbiAgICAgICAgbmFtZTogJ21vcmVfdmVydCdcclxuICAgIH0sXHJcbiAgICBzaGFwZTogJ2ljb24nLFxyXG4gICAgb3BlcmF0aW9uTGlzdDogW11cclxufTtcclxuXHJcbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaWNvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb3BlcmF0aW9uTGlzdDogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgc2hhcGU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xyXG4iXX0=