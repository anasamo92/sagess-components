'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _headerScrolling = require('./header-scrolling');

var _headerScrolling2 = _interopRequireDefault(_headerScrolling);

var _headerTopRow = require('./header-top-row');

var _headerTopRow2 = _interopRequireDefault(_headerTopRow);

var _headerContent = require('./header-content');

var _headerContent2 = _interopRequireDefault(_headerContent);

var _headerActions = require('./header-actions');

var _headerActions2 = _interopRequireDefault(_headerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Application header
 */
var AppHeader = function AppHeader() {
    return _react2.default.createElement(
        _headerScrolling2.default,
        null,
        _react2.default.createElement(_headerTopRow2.default, null),
        _react2.default.createElement(_headerContent2.default, null),
        _react2.default.createElement(_headerActions2.default, null)
    );
}; //Needed components


AppHeader.displayName = 'AppHeader';

exports.default = AppHeader;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQXBwSGVhZGVyIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVksR0FBTTtBQUNwQixXQUNJO0FBQUMsaUNBQUQ7QUFBQTtBQUNJLHNDQUFDLHNCQUFELE9BREo7QUFFSSxzQ0FBQyx1QkFBRCxPQUZKO0FBR0ksc0NBQUMsdUJBQUQ7QUFISixLQURKO0FBT0gsQ0FSRCxDLENBVkE7OztBQW9CQUEsVUFBVUMsV0FBVixHQUF3QixXQUF4Qjs7a0JBRWVELFMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vTmVlZGVkIGNvbXBvbmVudHNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlclNjcm9sbGluZyBmcm9tICcuL2hlYWRlci1zY3JvbGxpbmcnO1xyXG5pbXBvcnQgSGVhZGVyVG9wUm93IGZyb20gJy4vaGVhZGVyLXRvcC1yb3cnO1xyXG5pbXBvcnQgSGVhZGVyQ29udGVudCBmcm9tICcuL2hlYWRlci1jb250ZW50JztcclxuaW1wb3J0IEhlYWRlckFjdGlvbnMgZnJvbSAnLi9oZWFkZXItYWN0aW9ucyc7XHJcblxyXG4vKipcclxuICogQXBwbGljYXRpb24gaGVhZGVyXHJcbiAqL1xyXG5jb25zdCBBcHBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWFkZXJTY3JvbGxpbmc+XHJcbiAgICAgICAgICAgIDxIZWFkZXJUb3BSb3cgLz5cclxuICAgICAgICAgICAgPEhlYWRlckNvbnRlbnQgLz5cclxuICAgICAgICAgICAgPEhlYWRlckFjdGlvbnMgLz5cclxuICAgICAgICA8L0hlYWRlclNjcm9sbGluZz5cclxuICAgICk7XHJcbn1cclxuXHJcbkFwcEhlYWRlci5kaXNwbGF5TmFtZSA9ICdBcHBIZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwSGVhZGVyO1xyXG4iXX0=