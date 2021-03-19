'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mixin used in order to create a block.
 * @type {Object}
 */
var panelMixin = {
    getDefaultProps: function getDefaultProps() {
        return {
            style: {}
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/panel instead');
    },

    /**
     * Header of theblock function.
     * @return {[type]} [description]
     */
    heading: function heading() {
        if (this.props.title) {
            return _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                this.props.title
            );
        }
    },

    /**
     * Render the a block container and the cild content of the block.
     * @return {DOM}
     */
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'panel panel-default ' + this.props.style.className },
            this.heading(),
            _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                this.props.children
            )
        );
    }
};

var _builder = (0, _builder3.default)(panelMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicGFuZWxNaXhpbiIsImdldERlZmF1bHRQcm9wcyIsInN0eWxlIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJoZWFkaW5nIiwicHJvcHMiLCJ0aXRsZSIsInJlbmRlciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFDQTs7OztBQUlBLElBQUlBLGFBQWE7QUFDYkMsbUJBRGEsNkJBQ0s7QUFDZCxlQUFPO0FBQ0hDLG1CQUFPO0FBREosU0FBUDtBQUdILEtBTFk7QUFNYkMsc0JBTmEsZ0NBTVE7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsNkdBQWI7QUFDSCxLQVJZOztBQVNiOzs7O0FBSUFDLFdBYmEscUJBYUg7QUFDTixZQUFJLEtBQUtDLEtBQUwsQ0FBV0MsS0FBZixFQUFzQjtBQUNsQixtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxlQUFmO0FBQ0sscUJBQUtELEtBQUwsQ0FBV0M7QUFEaEIsYUFESjtBQUtIO0FBQ0osS0FyQlk7O0FBc0JiOzs7O0FBSUFDLFVBMUJhLG9CQTBCSjtBQUNMLGVBQ0k7QUFBQTtBQUFBLGNBQUssb0NBQWtDLEtBQUtGLEtBQUwsQ0FBV0wsS0FBWCxDQUFpQlEsU0FBeEQ7QUFDSyxpQkFBS0osT0FBTCxFQURMO0FBRUk7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUNLLHFCQUFLQyxLQUFMLENBQVdJO0FBRGhCO0FBRkosU0FESjtBQVFIO0FBbkNZLENBQWpCOztlQXFDNkIsdUJBQVFYLFVBQVIsQztJQUFyQlksSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG4vKipcbiAqIE1peGluIHVzZWQgaW4gb3JkZXIgdG8gY3JlYXRlIGEgYmxvY2suXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5sZXQgcGFuZWxNaXhpbiA9IHtcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgMi4yLjA6IHRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2Ugc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9wYW5lbCBpbnN0ZWFkJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBIZWFkZXIgb2YgdGhlYmxvY2sgZnVuY3Rpb24uXG4gICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgaGVhZGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudGl0bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhbmVsLWhlYWRpbmcnPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgYSBibG9jayBjb250YWluZXIgYW5kIHRoZSBjaWxkIGNvbnRlbnQgb2YgdGhlIGJsb2NrLlxuICAgICAqIEByZXR1cm4ge0RPTX1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBhbmVsIHBhbmVsLWRlZmF1bHQgJHt0aGlzLnByb3BzLnN0eWxlLmNsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5oZWFkaW5nKCl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhbmVsLWJvZHknPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihwYW5lbE1peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19