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

var headerMixin = {
    componenWillMount: function componenWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use components from sagess-components/components/layout folder');
    },

    /** @inheriteddoc */
    render: function render() {
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'content-bar' },
            this.props.children
        );
    }
};

var _builder = (0, _builder3.default)(headerMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiaGVhZGVyTWl4aW4iLCJjb21wb25lbldpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwicmVuZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYztBQUNoQkMscUJBRGdCLCtCQUNJO0FBQ2hCQyxnQkFBUUMsSUFBUixDQUFhLDZIQUFiO0FBQ0gsS0FIZTs7QUFJaEI7QUFDQUMsVUFMZ0Isb0JBS1A7QUFDTCxlQUNJO0FBQUE7QUFBQSxjQUFLLGNBQVcsYUFBaEI7QUFDSyxpQkFBS0MsS0FBTCxDQUFXQztBQURoQixTQURKO0FBS0g7QUFYZSxDQUFwQjs7ZUFjNkIsdUJBQVFOLFdBQVIsQztJQUFyQk8sSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGhlYWRlck1peGluID0ge1xuICAgIGNvbXBvbmVuV2lsbE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgMi4yLjA6IHRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgY29tcG9uZW50cyBmcm9tIHNhZ2Vzcy1jb21wb25lbnRzL2NvbXBvbmVudHMvbGF5b3V0IGZvbGRlcicpO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2NvbnRlbnQtYmFyJz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihoZWFkZXJNaXhpbik7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==