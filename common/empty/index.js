'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptyMixin = {
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents v0.15: the \'Empty\' component from SagessComponents.common is deprecated, please use SagessComponents.components.Empty');
    },
    render: function render() {
        return _react2.default.createElement('div', { 'data-focus': 'empty' });
    }
};

var _builder = (0, _builder3.default)(emptyMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZW1wdHlNaXhpbiIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwicmVuZGVyIiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxhQUFhO0FBQ2JDLHNCQURhLGdDQUNRO0FBQ2pCQyxnQkFBUUMsSUFBUixDQUFhLDBJQUFiO0FBQ0gsS0FIWTtBQUliQyxVQUphLG9CQUlKO0FBQ0wsZUFDSSx1Q0FBSyxjQUFXLE9BQWhCLEdBREo7QUFHSDtBQVJZLENBQWpCOztlQVc2Qix1QkFBUUosVUFBUixDO0lBQXJCSyxLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IGVtcHR5TWl4aW4gPSB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgdjAuMTU6IHRoZSBcXCdFbXB0eVxcJyBjb21wb25lbnQgZnJvbSBTYWdlc3NDb21wb25lbnRzLmNvbW1vbiBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFNhZ2Vzc0NvbXBvbmVudHMuY29tcG9uZW50cy5FbXB0eScpO1xuICAgIH0sXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdlbXB0eScgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihlbXB0eU1peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19