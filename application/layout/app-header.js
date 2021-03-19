'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../header');

var _cartridge = require('../cartridge');

var _contentBar = require('../content-bar');

var _bar = require('../bar');

var _contentActions = require('../content-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Needed components


/**
 * Application header
 */
var AppHeader = function (_Component) {
    _inherits(AppHeader, _Component);

    function AppHeader() {
        _classCallCheck(this, AppHeader);

        return _possibleConstructorReturn(this, (AppHeader.__proto__ || Object.getPrototypeOf(AppHeader)).apply(this, arguments));
    }

    _createClass(AppHeader, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.warn('SagessComponents 2.2.0: this component is deprecated, please use components from sagess-components/components/layout folder');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _header.component,
                null,
                _react2.default.createElement(
                    _contentBar.component,
                    null,
                    _react2.default.createElement(_bar.component, null),
                    _react2.default.createElement(_cartridge.component, null)
                ),
                _react2.default.createElement(_contentActions.component, null)
            );
        }
    }]);

    return AppHeader;
}(_react.Component);
// static props


AppHeader.displayName = 'AppHeader';

exports.default = AppHeader;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQXBwSGVhZGVyIiwiY29uc29sZSIsIndhcm4iLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OzsrZUFOQTs7O0FBUUE7OztJQUdNQSxTOzs7Ozs7Ozs7Ozs2Q0FFbUI7QUFDakJDLG9CQUFRQyxJQUFSLENBQWEsNkhBQWI7QUFDSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQyxpQ0FBRDtBQUFBO0FBQ0k7QUFBQyx5Q0FBRDtBQUFBO0FBQ0ksa0RBQUMsY0FBRCxPQURKO0FBRUksa0RBQUMsb0JBQUQ7QUFGSixpQkFESjtBQUtJLDhDQUFDLHlCQUFEO0FBTEosYUFESjtBQVNIOzs7O0VBaEJtQkMsZ0I7QUFrQnhCOzs7QUFDQUgsVUFBVUksV0FBVixHQUF3QixXQUF4Qjs7a0JBRWVKLFMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vTmVlZGVkIGNvbXBvbmVudHNcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgSGVhZGVyIH0gZnJvbSAnLi4vaGVhZGVyJztcbmltcG9ydCB7IGNvbXBvbmVudCBhcyBDYXJ0cmlkZ2UgfSBmcm9tICcuLi9jYXJ0cmlkZ2UnO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIENvbnRlbnRCYXIgfSBmcm9tICcuLi9jb250ZW50LWJhcic7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgQmFyIH0gZnJvbSAnLi4vYmFyJztcbmltcG9ydCB7IGNvbXBvbmVudCBhcyBDb250ZW50QWN0aW9ucyB9IGZyb20gJy4uL2NvbnRlbnQtYWN0aW9ucyc7XG5cbi8qKlxuICogQXBwbGljYXRpb24gaGVhZGVyXG4gKi9cbmNsYXNzIEFwcEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAyLjIuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBjb21wb25lbnRzIGZyb20gc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9sYXlvdXQgZm9sZGVyJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q29udGVudEJhcj5cbiAgICAgICAgICAgICAgICAgICAgPEJhciAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2FydHJpZGdlIC8+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50QmFyPlxuICAgICAgICAgICAgICAgIDxDb250ZW50QWN0aW9ucyAvPlxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuLy8gc3RhdGljIHByb3BzXG5BcHBIZWFkZXIuZGlzcGxheU5hbWUgPSAnQXBwSGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgQXBwSGVhZGVyO1xuIl19