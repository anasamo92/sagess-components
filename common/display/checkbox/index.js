'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _mixin = require('../../i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Input text mixin.
 * @type {Object}
 */
//Dependencies.
var displayCheckboxMixin = {
    mixins: [_mixin2.default],
    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            value: undefined,
            name: undefined,
            style: {}
        };
    },

    /** @inheritdoc */
    propTypes: {
        type: (0, _types2.default)('string'),
        value: (0, _types2.default)('bool'),
        name: (0, _types2.default)('string'),
        style: (0, _types2.default)('object')
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/display/checkbox/ instead');
    },

    /**
     * Render the boolean value.
     */
    renderValue: function renderValue() {
        var stringValue = this.props.value === true ? 'true' : 'false';
        return this.i18n('display.checkbox.' + stringValue);
    },

    /**
     * Render a display field.
     * @return {DOM} - The dom of an input.
     */
    render: function render() {
        return _react2.default.createElement(
            'div',
            {
                id: this.props.name,
                name: this.props.name,
                className: this.props.style.class
            },
            this.renderValue()
        );
    }
};

var _builder = (0, _builder3.default)(displayCheckboxMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGlzcGxheUNoZWNrYm94TWl4aW4iLCJtaXhpbnMiLCJpMThuQmVoYXZpb3VyIiwiZ2V0RGVmYXVsdFByb3BzIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJuYW1lIiwic3R5bGUiLCJwcm9wVHlwZXMiLCJ0eXBlIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJyZW5kZXJWYWx1ZSIsInN0cmluZ1ZhbHVlIiwicHJvcHMiLCJpMThuIiwicmVuZGVyIiwiY2xhc3MiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7OztBQU5BO0FBVUEsSUFBSUEsdUJBQXVCO0FBQ3ZCQyxZQUFRLENBQUNDLGVBQUQsQ0FEZTtBQUV2QjtBQUNBQyxtQkFIdUIsNkJBR0w7QUFDZCxlQUFPO0FBQ0hDLG1CQUFPQyxTQURKO0FBRUhDLGtCQUFNRCxTQUZIO0FBR0hFLG1CQUFPO0FBSEosU0FBUDtBQUtILEtBVHNCOztBQVV2QjtBQUNBQyxlQUFXO0FBQ1BDLGNBQU0scUJBQUssUUFBTCxDQURDO0FBRVBMLGVBQU8scUJBQUssTUFBTCxDQUZBO0FBR1BFLGNBQU0scUJBQUssUUFBTCxDQUhDO0FBSVBDLGVBQU8scUJBQUssUUFBTDtBQUpBLEtBWFk7QUFpQnZCRyxzQkFqQnVCLGdDQWlCRjtBQUNqQkMsZ0JBQVFDLElBQVIsQ0FBYSx5SEFBYjtBQUNILEtBbkJzQjs7QUFvQnZCOzs7QUFHQUMsZUF2QnVCLHlCQXVCVDtBQUNWLFlBQUlDLGNBQWMsS0FBS0MsS0FBTCxDQUFXWCxLQUFYLEtBQXFCLElBQXJCLEdBQTRCLE1BQTVCLEdBQXFDLE9BQXZEO0FBQ0EsZUFBTyxLQUFLWSxJQUFMLHVCQUE4QkYsV0FBOUIsQ0FBUDtBQUNILEtBMUJzQjs7QUEyQnZCOzs7O0FBSUFHLFVBL0J1QixvQkErQmQ7QUFDTCxlQUNJO0FBQUE7QUFBQTtBQUNJLG9CQUFJLEtBQUtGLEtBQUwsQ0FBV1QsSUFEbkI7QUFFSSxzQkFBTSxLQUFLUyxLQUFMLENBQVdULElBRnJCO0FBR0ksMkJBQVcsS0FBS1MsS0FBTCxDQUFXUixLQUFYLENBQWlCVztBQUhoQztBQUtLLGlCQUFLTCxXQUFMO0FBTEwsU0FESjtBQVNIO0FBekNzQixDQUEzQjs7ZUE2QzZCLHVCQUFRYixvQkFBUixDO0lBQXJCbUIsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRGVwZW5kZW5jaWVzLlxuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC90eXBlcyc7XG5pbXBvcnQgaTE4bkJlaGF2aW91ciBmcm9tICcuLi8uLi9pMThuL21peGluJztcblxuLyoqXG4gKiBJbnB1dCB0ZXh0IG1peGluLlxuICogQHR5cGUge09iamVjdH1cbiAqL1xubGV0IGRpc3BsYXlDaGVja2JveE1peGluID0ge1xuICAgIG1peGluczogW2kxOG5CZWhhdmlvdXJdLFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICB0eXBlOiB0eXBlKCdzdHJpbmcnKSxcbiAgICAgICAgdmFsdWU6IHR5cGUoJ2Jvb2wnKSxcbiAgICAgICAgbmFtZTogdHlwZSgnc3RyaW5nJyksXG4gICAgICAgIHN0eWxlOiB0eXBlKCdvYmplY3QnKVxuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgMi4yLjA6IHRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2Ugc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9kaXNwbGF5L2NoZWNrYm94LyBpbnN0ZWFkJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGJvb2xlYW4gdmFsdWUuXG4gICAgICovXG4gICAgcmVuZGVyVmFsdWUoKSB7XG4gICAgICAgIGxldCBzdHJpbmdWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICAgICAgICByZXR1cm4gdGhpcy5pMThuKGBkaXNwbGF5LmNoZWNrYm94LiR7c3RyaW5nVmFsdWV9YCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYSBkaXNwbGF5IGZpZWxkLlxuICAgICAqIEByZXR1cm4ge0RPTX0gLSBUaGUgZG9tIG9mIGFuIGlucHV0LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuc3R5bGUuY2xhc3N9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVmFsdWUoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKGRpc3BsYXlDaGVja2JveE1peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19