'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _fieldGridBehaviour = require('../../../../common/mixin/field-grid-behaviour');

var _fieldGridBehaviour2 = _interopRequireDefault(_fieldGridBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggleMixin = {
    mixins: [_fieldGridBehaviour2.default],
    /**
     * Get the checkbox default attributes.
     */
    getDefaultProps: function getDefaultProps() {
        return {
            value: undefined,
            label: undefined,
            style: {}
        };
    },

    /**
     * Properties validation.
     * @type {Object}
     */
    propTypes: {
        value: (0, _types2.default)('bool'),
        label: (0, _types2.default)('string'),
        style: (0, _types2.default)('object')
    },
    getInitialState: function getInitialState() {
        return {
            isChecked: this.props.value
        };
    },
    _onChange: function _onChange(event) {
        this.setState({
            isChecked: !this.state.isChecked
        });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    },
    _labelClassName: function _labelClassName() {
        return '' + this._getContentGridClassName();
    },

    /**
     * Get the value from the input in  the DOM.
     */
    getValue: function getValue() {
        return this.getDOMNode().value;
    },

    /**
     * Render the Checkbox HTML.
     * @return {VirtualDOM} - The virtual DOM of the checkbox.
     */
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'togglebutton form-group' },
            _react2.default.createElement(
                'label',
                { className: this._getLabelGridClassName() },
                this.props.label ? this.props.label : ''
            ),
            _react2.default.createElement(
                'label',
                { className: this._labelClassName() },
                _react2.default.createElement('input', { ref: 'checkbox', checked: this.state.isChecked, onChange: this._onChange, type: 'checkbox' })
            )
        );
    },

    /** @inheritedDoc*/
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (nextProps.value !== undefined) {
            this.setState({ isChecked: nextProps.value });
        }
    }
};

exports.default = (0, _builder2.default)(toggleMixin);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsidG9nZ2xlTWl4aW4iLCJtaXhpbnMiLCJmaWVsZEdyaWRCZWhhdmlvdXJNaXhpbiIsImdldERlZmF1bHRQcm9wcyIsInZhbHVlIiwidW5kZWZpbmVkIiwibGFiZWwiLCJzdHlsZSIsInByb3BUeXBlcyIsImdldEluaXRpYWxTdGF0ZSIsImlzQ2hlY2tlZCIsInByb3BzIiwiX29uQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInN0YXRlIiwib25DaGFuZ2UiLCJfbGFiZWxDbGFzc05hbWUiLCJfZ2V0Q29udGVudEdyaWRDbGFzc05hbWUiLCJnZXRWYWx1ZSIsImdldERPTU5vZGUiLCJyZW5kZXIiLCJfZ2V0TGFiZWxHcmlkQ2xhc3NOYW1lIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGNBQWM7QUFDaEJDLFlBQVEsQ0FBQ0MsNEJBQUQsQ0FEUTtBQUVoQjs7O0FBR0FDLG1CQUxnQiw2QkFLRTtBQUNkLGVBQU87QUFDSEMsbUJBQU9DLFNBREo7QUFFSEMsbUJBQU9ELFNBRko7QUFHSEUsbUJBQU87QUFISixTQUFQO0FBS0gsS0FYZTs7QUFZaEI7Ozs7QUFJQUMsZUFBVztBQUNQSixlQUFPLHFCQUFLLE1BQUwsQ0FEQTtBQUVQRSxlQUFPLHFCQUFLLFFBQUwsQ0FGQTtBQUdQQyxlQUFPLHFCQUFLLFFBQUw7QUFIQSxLQWhCSztBQXFCaEJFLG1CQXJCZ0IsNkJBcUJFO0FBQ2QsZUFBTztBQUNIQyx1QkFBVyxLQUFLQyxLQUFMLENBQVdQO0FBRG5CLFNBQVA7QUFHSCxLQXpCZTtBQTBCaEJRLGFBMUJnQixxQkEwQk5DLEtBMUJNLEVBMEJDO0FBQ2IsYUFBS0MsUUFBTCxDQUFjO0FBQ1ZKLHVCQUFXLENBQUMsS0FBS0ssS0FBTCxDQUFXTDtBQURiLFNBQWQ7QUFHQSxZQUFJLEtBQUtDLEtBQUwsQ0FBV0ssUUFBZixFQUF5QjtBQUNyQixpQkFBS0wsS0FBTCxDQUFXSyxRQUFYLENBQW9CSCxLQUFwQjtBQUNIO0FBQ0osS0FqQ2U7QUFrQ2hCSSxtQkFsQ2dCLDZCQWtDRTtBQUNkLG9CQUFVLEtBQUtDLHdCQUFMLEVBQVY7QUFDSCxLQXBDZTs7QUFxQ2hCOzs7QUFHQUMsWUF4Q2dCLHNCQXdDTDtBQUNQLGVBQU8sS0FBS0MsVUFBTCxHQUFrQmhCLEtBQXpCO0FBQ0gsS0ExQ2U7O0FBMkNoQjs7OztBQUlBaUIsVUEvQ2dCLG9CQStDUDtBQUNMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSx5QkFBZjtBQUNJO0FBQUE7QUFBQSxrQkFBTyxXQUFXLEtBQUtDLHNCQUFMLEVBQWxCO0FBQWtELHFCQUFLWCxLQUFMLENBQVdMLEtBQVgsR0FBbUIsS0FBS0ssS0FBTCxDQUFXTCxLQUE5QixHQUFzQztBQUF4RixhQURKO0FBRUk7QUFBQTtBQUFBLGtCQUFPLFdBQVcsS0FBS1csZUFBTCxFQUFsQjtBQUNJLHlEQUFPLEtBQUksVUFBWCxFQUFzQixTQUFTLEtBQUtGLEtBQUwsQ0FBV0wsU0FBMUMsRUFBcUQsVUFBVSxLQUFLRSxTQUFwRSxFQUErRSxNQUFLLFVBQXBGO0FBREo7QUFGSixTQURKO0FBUUgsS0F4RGU7O0FBeURoQjtBQUNBVyw2QkExRGdCLHFDQTBEVUMsU0ExRFYsRUEwRHFCO0FBQ2pDLFlBQUlBLFVBQVVwQixLQUFWLEtBQW9CQyxTQUF4QixFQUFtQztBQUMvQixpQkFBS1MsUUFBTCxDQUFjLEVBQUVKLFdBQVdjLFVBQVVwQixLQUF2QixFQUFkO0FBQ0g7QUFDSjtBQTlEZSxDQUFwQjs7a0JBaUVlLHVCQUFRSixXQUFSLEMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IGZpZWxkR3JpZEJlaGF2aW91ck1peGluIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9taXhpbi9maWVsZC1ncmlkLWJlaGF2aW91cic7XG5cbmNvbnN0IHRvZ2dsZU1peGluID0ge1xuICAgIG1peGluczogW2ZpZWxkR3JpZEJlaGF2aW91ck1peGluXSxcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNoZWNrYm94IGRlZmF1bHQgYXR0cmlidXRlcy5cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGFiZWw6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN0eWxlOiB7fVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyB2YWxpZGF0aW9uLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHZhbHVlOiB0eXBlKCdib29sJyksXG4gICAgICAgIGxhYmVsOiB0eXBlKCdzdHJpbmcnKSxcbiAgICAgICAgc3R5bGU6IHR5cGUoJ29iamVjdCcpXG4gICAgfSxcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0NoZWNrZWQ6IHRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIF9vbkNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQ2hlY2tlZDogIXRoaXMuc3RhdGUuaXNDaGVja2VkXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIF9sYWJlbENsYXNzTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuX2dldENvbnRlbnRHcmlkQ2xhc3NOYW1lKCl9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgaW5wdXQgaW4gIHRoZSBET00uXG4gICAgICovXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERPTU5vZGUoKS52YWx1ZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgQ2hlY2tib3ggSFRNTC5cbiAgICAgKiBAcmV0dXJuIHtWaXJ0dWFsRE9NfSAtIFRoZSB2aXJ0dWFsIERPTSBvZiB0aGUgY2hlY2tib3guXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZ2dsZWJ1dHRvbiBmb3JtLWdyb3VwJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLl9nZXRMYWJlbEdyaWRDbGFzc05hbWUoKX0+e3RoaXMucHJvcHMubGFiZWwgPyB0aGlzLnByb3BzLmxhYmVsIDogJyd9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLl9sYWJlbENsYXNzTmFtZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj0nY2hlY2tib3gnIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaXNDaGVja2VkfSBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2V9IHR5cGU9J2NoZWNrYm94JyAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGVkRG9jKi9cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0NoZWNrZWQ6IG5leHRQcm9wcy52YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkZXIodG9nZ2xlTWl4aW4pO1xuIl19