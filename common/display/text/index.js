'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixin = require('../../i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Input text mixin.
* @type {Object}
*/
var displayTextMixin = {
    mixins: [_mixin2.default],
    displayName: 'DeprecatedDisplayText',
    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            formatter: function formatter(data) {
                return data;
            }
        };
    },

    /** @inheritdoc */
    propTypes: {
        type: _react.PropTypes.string,
        value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
        name: _react.PropTypes.string,
        style: _react.PropTypes.object
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/display/text instead');
    },

    /**
    * Render the value.
    * @return {string} The formated value.
    */
    renderValue: function renderValue() {
        var _props = this.props,
            formatter = _props.formatter,
            value = _props.value;

        return formatter(value);
    },

    /** @inheritdoc */
    render: function render() {
        return _react2.default.createElement(
            'div',
            this.props,
            this.renderValue()
        );
    }
}; //Dependencies.

var _builder = (0, _builder3.default)(displayTextMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGlzcGxheVRleHRNaXhpbiIsIm1peGlucyIsImkxOG5CZWhhdmlvdXIiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImZvcm1hdHRlciIsImRhdGEiLCJwcm9wVHlwZXMiLCJ0eXBlIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwidmFsdWUiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJuYW1lIiwic3R5bGUiLCJvYmplY3QiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsInJlbmRlclZhbHVlIiwicHJvcHMiLCJyZW5kZXIiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxtQkFBbUI7QUFDckJDLFlBQVEsQ0FBQ0MsZUFBRCxDQURhO0FBRXJCQyxpQkFBYSx1QkFGUTtBQUdyQjtBQUNBQyxtQkFKcUIsNkJBSUg7QUFDZCxlQUFPO0FBQ0hDLHVCQUFXLG1CQUFDQyxJQUFEO0FBQUEsdUJBQVVBLElBQVY7QUFBQTtBQURSLFNBQVA7QUFHSCxLQVJvQjs7QUFTckI7QUFDQUMsZUFBVztBQUNQQyxjQUFNQyxpQkFBVUMsTUFEVDtBQUVQQyxlQUFPRixpQkFBVUcsU0FBVixDQUFvQixDQUFDSCxpQkFBVUMsTUFBWCxFQUFtQkQsaUJBQVVJLE1BQTdCLENBQXBCLENBRkE7QUFHUEMsY0FBTUwsaUJBQVVDLE1BSFQ7QUFJUEssZUFBT04saUJBQVVPO0FBSlYsS0FWVTtBQWdCckJDLHNCQWhCcUIsZ0NBZ0JBO0FBQ2pCQyxnQkFBUUMsSUFBUixDQUFhLG9IQUFiO0FBQ0gsS0FsQm9COztBQW1CckI7Ozs7QUFJQUMsZUF2QnFCLHlCQXVCUDtBQUFBLHFCQUNtQixLQUFLQyxLQUR4QjtBQUFBLFlBQ0ZoQixTQURFLFVBQ0ZBLFNBREU7QUFBQSxZQUNTTSxLQURULFVBQ1NBLEtBRFQ7O0FBRVYsZUFBT04sVUFBVU0sS0FBVixDQUFQO0FBQ0gsS0ExQm9COztBQTJCckI7QUFDQVcsVUE1QnFCLG9CQTRCWjtBQUNMLGVBQ0k7QUFBQTtBQUFTLGlCQUFLRCxLQUFkO0FBQ0ssaUJBQUtELFdBQUw7QUFETCxTQURKO0FBS0g7QUFsQ29CLENBQXpCLEMsQ0FUQTs7ZUE4QzZCLHVCQUFRcEIsZ0JBQVIsQztJQUFyQnVCLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0RlcGVuZGVuY2llcy5cbmltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaTE4bkJlaGF2aW91ciBmcm9tICcuLi8uLi9pMThuL21peGluJztcblxuLyoqXG4qIElucHV0IHRleHQgbWl4aW4uXG4qIEB0eXBlIHtPYmplY3R9XG4qL1xuY29uc3QgZGlzcGxheVRleHRNaXhpbiA9IHtcbiAgICBtaXhpbnM6IFtpMThuQmVoYXZpb3VyXSxcbiAgICBkaXNwbGF5TmFtZTogJ0RlcHJlY2F0ZWREaXNwbGF5VGV4dCcsXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybWF0dGVyOiAoZGF0YSkgPT4gZGF0YVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAyLjIuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBzYWdlc3MtY29tcG9uZW50cy9jb21wb25lbnRzL2Rpc3BsYXkvdGV4dCBpbnN0ZWFkJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgdmFsdWUuXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBmb3JtYXRlZCB2YWx1ZS5cbiAgICAqL1xuICAgIHJlbmRlclZhbHVlKCkge1xuICAgICAgICBjb25zdCB7IGZvcm1hdHRlciwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZXIodmFsdWUpO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVmFsdWUoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihkaXNwbGF5VGV4dE1peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19