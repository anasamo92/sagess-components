'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('material-design-lite/material');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mdlBehaviourMixin = {

    /**
    * Called when component is mounted.
    */
    componentDidMount: function componentDidMount() {
        if (_reactDom2.default.findDOMNode(this)) {
            componentHandler.upgradeElement(_reactDom2.default.findDOMNode(this));
        }
    },


    /**
    * Called before component is unmounted.
    */
    componentWillUnmount: function componentWillUnmount() {
        if (_reactDom2.default.findDOMNode(this)) {
            componentHandler.downgradeElements(_reactDom2.default.findDOMNode(this));
        }
    }
}; //https://github.com/google/material-design-lite/blob/master/src/mdlComponentHandler.js#L333
exports.default = mdlBehaviourMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibWRsQmVoYXZpb3VyTWl4aW4iLCJjb21wb25lbnREaWRNb3VudCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJjb21wb25lbnRIYW5kbGVyIiwidXBncmFkZUVsZW1lbnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvd25ncmFkZUVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxvQkFBb0I7O0FBRXRCOzs7QUFHQUMscUJBTHNCLCtCQUtGO0FBQ2hCLFlBQUlDLG1CQUFTQyxXQUFULENBQXFCLElBQXJCLENBQUosRUFBZ0M7QUFDNUJDLDZCQUFpQkMsY0FBakIsQ0FBZ0NILG1CQUFTQyxXQUFULENBQXFCLElBQXJCLENBQWhDO0FBQ0g7QUFDSixLQVRxQjs7O0FBV3RCOzs7QUFHQUcsd0JBZHNCLGtDQWNDO0FBQ25CLFlBQUlKLG1CQUFTQyxXQUFULENBQXFCLElBQXJCLENBQUosRUFBZ0M7QUFDNUJDLDZCQUFpQkcsaUJBQWpCLENBQW1DTCxtQkFBU0MsV0FBVCxDQUFxQixJQUFyQixDQUFuQztBQUNIO0FBQ0o7QUFsQnFCLENBQTFCLEMsQ0FMQTtrQkEyQmVILGlCIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvbWF0ZXJpYWwtZGVzaWduLWxpdGUvYmxvYi9tYXN0ZXIvc3JjL21kbENvbXBvbmVudEhhbmRsZXIuanMjTDMzM1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICdtYXRlcmlhbC1kZXNpZ24tbGl0ZS9tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBtZGxCZWhhdmlvdXJNaXhpbiA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICogQ2FsbGVkIHdoZW4gY29tcG9uZW50IGlzIG1vdW50ZWQuXHJcbiAgICAqL1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQoUmVhY3RET00uZmluZERPTU5vZGUodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENhbGxlZCBiZWZvcmUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuICAgICovXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAoUmVhY3RET00uZmluZERPTU5vZGUodGhpcykpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50SGFuZGxlci5kb3duZ3JhZGVFbGVtZW50cyhSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1kbEJlaGF2aW91ck1peGluO1xyXG4iXX0=