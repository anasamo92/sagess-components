'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _translation = require('sagess-core/translation');

var _stylable = require('../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Label mixin for form.
* @type {Object}
*/
// Dependencies
var labelMixin = {
    mixins: [_stylable2.default],

    /** @inheritdoc */
    propTypes: {
        name: _react.PropTypes.string.isRequired,
        text: _react.PropTypes.string
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents v0.15: the \'Label\' component from SagessComponents.common is deprecated, please use SagessComponents.components.Label');
    },

    /** @inheritdoc */
    render: function render() {
        var _props = this.props,
            name = _props.name,
            text = _props.text,
            style = _props.style;

        var content = text || name;
        return _react2.default.createElement(
            'label',
            { className: style.className, 'data-focus': 'label', htmlFor: name },
            (0, _translation.translate)(content)
        );
    }
};

var _builder = (0, _builder3.default)(labelMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibGFiZWxNaXhpbiIsIm1peGlucyIsInN0eWxlQmVoYXZpb3VyIiwicHJvcFR5cGVzIiwibmFtZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJ0ZXh0IiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJyZW5kZXIiLCJwcm9wcyIsInN0eWxlIiwiY29udGVudCIsImNsYXNzTmFtZSIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7OztBQU5BO0FBVUEsSUFBTUEsYUFBYTtBQUNmQyxZQUFRLENBQUNDLGtCQUFELENBRE87O0FBR2Y7QUFDQUMsZUFBVztBQUNQQyxjQUFNQyxpQkFBVUMsTUFBVixDQUFpQkMsVUFEaEI7QUFFUEMsY0FBTUgsaUJBQVVDO0FBRlQsS0FKSTtBQVFmRyxzQkFSZSxnQ0FRTTtBQUNqQkMsZ0JBQVFDLElBQVIsQ0FBYSwwSUFBYjtBQUNILEtBVmM7O0FBV2Y7QUFDQUMsVUFaZSxvQkFZTjtBQUFBLHFCQUN5QixLQUFLQyxLQUQ5QjtBQUFBLFlBQ0dULElBREgsVUFDR0EsSUFESDtBQUFBLFlBQ1NJLElBRFQsVUFDU0EsSUFEVDtBQUFBLFlBQ2VNLEtBRGYsVUFDZUEsS0FEZjs7QUFFTCxZQUFNQyxVQUFVUCxRQUFRSixJQUF4QjtBQUNBLGVBQ0k7QUFBQTtBQUFBLGNBQU8sV0FBV1UsTUFBTUUsU0FBeEIsRUFBbUMsY0FBVyxPQUE5QyxFQUFzRCxTQUFTWixJQUEvRDtBQUNLLHdDQUFVVyxPQUFWO0FBREwsU0FESjtBQUtIO0FBcEJjLENBQW5COztlQXVCNkIsdUJBQVFmLFVBQVIsQztJQUFyQmlCLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdzYWdlc3MtY29yZS90cmFuc2xhdGlvbic7XG5pbXBvcnQgc3R5bGVCZWhhdmlvdXIgZnJvbSAnLi4vLi4vbWl4aW4vc3R5bGFibGUnO1xuXG4vKipcbiogTGFiZWwgbWl4aW4gZm9yIGZvcm0uXG4qIEB0eXBlIHtPYmplY3R9XG4qL1xuY29uc3QgbGFiZWxNaXhpbiA9IHtcbiAgICBtaXhpbnM6IFtzdHlsZUJlaGF2aW91cl0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyB2MC4xNTogdGhlIFxcJ0xhYmVsXFwnIGNvbXBvbmVudCBmcm9tIFNhZ2Vzc0NvbXBvbmVudHMuY29tbW9uIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgU2FnZXNzQ29tcG9uZW50cy5jb21wb25lbnRzLkxhYmVsJyk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdGV4dCwgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXh0IHx8IG5hbWU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZS5jbGFzc05hbWV9IGRhdGEtZm9jdXM9XCJsYWJlbFwiIGh0bWxGb3I9e25hbWV9PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoY29udGVudCl9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihsYWJlbE1peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19