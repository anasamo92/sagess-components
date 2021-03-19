'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = exports.component = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _valueBehaviour = require('./mixin/value-behaviour');

var _valueBehaviour2 = _interopRequireDefault(_valueBehaviour);

var _validationBehaviour = require('./mixin/validation-behaviour');

var _validationBehaviour2 = _interopRequireDefault(_validationBehaviour);

var _builtInComponents = require('./mixin/built-in-components');

var _builtInComponents2 = _interopRequireDefault(_builtInComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mixin for the field helper.
 * @type {Object}
 */
var FieldMixin = {
    /** @inheriteDoc */
    mixins: [_valueBehaviour2.default, _validationBehaviour2.default, _builtInComponents2.default],
    /** @inheriteDoc */
    getDefaultProps: function getDefaultProps() {
        return {
            isEdit: true,
            type: 'text'
        };
    },

    /** @inheritdoc */
    propTypes: {
        /**
        * Edition mode of the field.
        * @type {Boolean}
        */
        isEdit: (0, _types2.default)('bool'),
        /**
        * HTML input type.
        * @type {String}
        */
        type: (0, _types2.default)('string'),
        /**
        * Field name.
        * @type {string}
        */
        name: (0, _types2.default)('string'),
        value: (0, _types2.default)(['string', 'number'])
    },
    /** @inheritdoc */
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        var _state = this.state,
            value = _state.value,
            values = _state.values;

        var newState = { value: newProps.value, values: newProps.values };
        if (value !== newProps.value || values !== newProps.values) {
            newState.error = null;
        }
        if (newProps.error) {
            newState.error = newProps.error;
        }
        this.setState(newState);
    },

    /**
    * Get the css class of the field component.
    */
    _className: function _className() {
        var stateClass = this.state.error ? 'is-invalid' : '';
        return 'mdl-grid ' + stateClass;
    },

    /** @inheritdoc */
    render: function render() {
        var error = this.state.error;
        var _props = this.props,
            FieldComponent = _props.FieldComponent,
            InputLabelComponent = _props.InputLabelComponent,
            domain = _props.domain,
            codeResolver = _props.codeResolver,
            searcher = _props.searcher,
            keyResolver = _props.keyResolver,
            querySearcher = _props.querySearcher,
            isRequired = _props.isRequired,
            values = _props.values,
            hasLabel = _props.hasLabel,
            isEdit = _props.isEdit;

        var isCustomComponent = FieldComponent || InputLabelComponent;
        var autocomplete = this.autocomplete,
            autocompleteSelect = this.autocompleteSelect,
            autocompleteText = this.autocompleteText,
            label = this.label,
            input = this.input,
            select = this.select,
            display = this.display;

        return _react2.default.createElement(
            'div',
            { className: 'mdl-grid', 'data-domain': domain, 'data-focus': 'field', 'data-mode': isEdit ? 'edit' : 'consult', 'data-required': isRequired, 'data-valid': !error },
            isCustomComponent && this._renderFieldComponent(),
            !isCustomComponent && hasLabel && label(),
            !isCustomComponent && _react2.default.createElement(
                'div',
                { className: '' + this._getContentGridClassName(), 'data-focus': 'field-value-container' },
                codeResolver && searcher ? autocomplete() : keyResolver && querySearcher ? autocompleteSelect() : querySearcher ? autocompleteText() : isEdit ? values ? select() : input() : display()
            )
        );
    }
};
// Components

// Mixins

var builtComp = (0, _builder2.default)(FieldMixin);
var component = builtComp.component,
    mixin = builtComp.mixin;
exports.component = component;
exports.mixin = mixin;
exports.default = builtComp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiRmllbGRNaXhpbiIsIm1peGlucyIsInZhbHVlQmVoYXZpb3VyIiwidmFsaWRhdGlvbkJlaGF2aW91ciIsImJ1aWx0SW5Db21wb25lbnRzIiwiZ2V0RGVmYXVsdFByb3BzIiwiaXNFZGl0IiwidHlwZSIsInByb3BUeXBlcyIsIm5hbWUiLCJ2YWx1ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXdQcm9wcyIsInN0YXRlIiwidmFsdWVzIiwibmV3U3RhdGUiLCJlcnJvciIsInNldFN0YXRlIiwiX2NsYXNzTmFtZSIsInN0YXRlQ2xhc3MiLCJyZW5kZXIiLCJwcm9wcyIsIkZpZWxkQ29tcG9uZW50IiwiSW5wdXRMYWJlbENvbXBvbmVudCIsImRvbWFpbiIsImNvZGVSZXNvbHZlciIsInNlYXJjaGVyIiwia2V5UmVzb2x2ZXIiLCJxdWVyeVNlYXJjaGVyIiwiaXNSZXF1aXJlZCIsImhhc0xhYmVsIiwiaXNDdXN0b21Db21wb25lbnQiLCJhdXRvY29tcGxldGUiLCJhdXRvY29tcGxldGVTZWxlY3QiLCJhdXRvY29tcGxldGVUZXh0IiwibGFiZWwiLCJpbnB1dCIsInNlbGVjdCIsImRpc3BsYXkiLCJfcmVuZGVyRmllbGRDb21wb25lbnQiLCJfZ2V0Q29udGVudEdyaWRDbGFzc05hbWUiLCJidWlsdENvbXAiLCJjb21wb25lbnQiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxhQUFhO0FBQ2Y7QUFDQUMsWUFBUSxDQUFDQyx3QkFBRCxFQUFpQkMsNkJBQWpCLEVBQXNDQywyQkFBdEMsQ0FGTztBQUdmO0FBQ0FDLG1CQUplLDZCQUlHO0FBQ2QsZUFBTztBQUNIQyxvQkFBUSxJQURMO0FBRUhDLGtCQUFNO0FBRkgsU0FBUDtBQUlILEtBVGM7O0FBVWY7QUFDQUMsZUFB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QUFlQyxhQUFmLEdBQStCSyxvQkFBL0IsR0FBc0RMLGdCQUFnQk0sa0JBQWhCLEdBQXFDNUIsU0FBVVEsU0FBU3VCLFFBQVQsR0FBb0JELE9BQTlCLEdBQXlDRTtBQURyTDtBQUpSLFNBREo7QUFXSDtBQWpFYyxDQUFuQjtBQVBBOztBQUhBOztBQTZFQSxJQUFNRyxZQUFZLHVCQUFRekMsVUFBUixDQUFsQjtJQUNRMEMsUyxHQUFxQkQsUyxDQUFyQkMsUztJQUFXQyxLLEdBQVVGLFMsQ0FBVkUsSztRQUdmRCxTLEdBQUFBLFM7UUFDQUMsSyxHQUFBQSxLO2tCQUVXRixTIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHR5cGUgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbi8vIE1peGluc1xuaW1wb3J0IHZhbHVlQmVoYXZpb3VyIGZyb20gJy4vbWl4aW4vdmFsdWUtYmVoYXZpb3VyJztcbmltcG9ydCB2YWxpZGF0aW9uQmVoYXZpb3VyIGZyb20gJy4vbWl4aW4vdmFsaWRhdGlvbi1iZWhhdmlvdXInO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IGJ1aWx0SW5Db21wb25lbnRzIGZyb20gJy4vbWl4aW4vYnVpbHQtaW4tY29tcG9uZW50cyc7XG5cbi8qKlxuICogTWl4aW4gZm9yIHRoZSBmaWVsZCBoZWxwZXIuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBGaWVsZE1peGluID0ge1xuICAgIC8qKiBAaW5oZXJpdGVEb2MgKi9cbiAgICBtaXhpbnM6IFt2YWx1ZUJlaGF2aW91ciwgdmFsaWRhdGlvbkJlaGF2aW91ciwgYnVpbHRJbkNvbXBvbmVudHNdLFxuICAgIC8qKiBAaW5oZXJpdGVEb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0VkaXQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCdcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICAvKipcbiAgICAgICAgKiBFZGl0aW9uIG1vZGUgb2YgdGhlIGZpZWxkLlxuICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAqL1xuICAgICAgICBpc0VkaXQ6IHR5cGUoJ2Jvb2wnKSxcbiAgICAgICAgLyoqXG4gICAgICAgICogSFRNTCBpbnB1dCB0eXBlLlxuICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICovXG4gICAgICAgIHR5cGU6IHR5cGUoJ3N0cmluZycpLFxuICAgICAgICAvKipcbiAgICAgICAgKiBGaWVsZCBuYW1lLlxuICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICovXG4gICAgICAgIG5hbWU6IHR5cGUoJ3N0cmluZycpLFxuICAgICAgICB2YWx1ZTogdHlwZShbJ3N0cmluZycsICdudW1iZXInXSlcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgdmFsdWVzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgdmFsdWU6IG5ld1Byb3BzLnZhbHVlLCB2YWx1ZXM6IG5ld1Byb3BzLnZhbHVlcyB9O1xuICAgICAgICBpZiAodmFsdWUgIT09IG5ld1Byb3BzLnZhbHVlIHx8IHZhbHVlcyAhPT0gbmV3UHJvcHMudmFsdWVzKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1Byb3BzLmVycm9yKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5lcnJvciA9IG5ld1Byb3BzLmVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIGNzcyBjbGFzcyBvZiB0aGUgZmllbGQgY29tcG9uZW50LlxuICAgICovXG4gICAgX2NsYXNzTmFtZSgpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVDbGFzcyA9IHRoaXMuc3RhdGUuZXJyb3IgPyAnaXMtaW52YWxpZCcgOiAnJztcbiAgICAgICAgcmV0dXJuIGBtZGwtZ3JpZCAke3N0YXRlQ2xhc3N9YDtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBGaWVsZENvbXBvbmVudCwgSW5wdXRMYWJlbENvbXBvbmVudCwgZG9tYWluLCBjb2RlUmVzb2x2ZXIsIHNlYXJjaGVyLCBrZXlSZXNvbHZlciwgcXVlcnlTZWFyY2hlciwgaXNSZXF1aXJlZCwgdmFsdWVzLCBoYXNMYWJlbCwgaXNFZGl0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpc0N1c3RvbUNvbXBvbmVudCA9IEZpZWxkQ29tcG9uZW50IHx8IElucHV0TGFiZWxDb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgYXV0b2NvbXBsZXRlLCBhdXRvY29tcGxldGVTZWxlY3QsIGF1dG9jb21wbGV0ZVRleHQsIGxhYmVsLCBpbnB1dCwgc2VsZWN0LCBkaXNwbGF5IH0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kbC1ncmlkJyBkYXRhLWRvbWFpbj17ZG9tYWlufSBkYXRhLWZvY3VzPSdmaWVsZCcgZGF0YS1tb2RlPXtpc0VkaXQgPyAnZWRpdCcgOiAnY29uc3VsdCd9IGRhdGEtcmVxdWlyZWQ9e2lzUmVxdWlyZWR9IGRhdGEtdmFsaWQ9eyFlcnJvcn0+XG4gICAgICAgICAgICAgICAge2lzQ3VzdG9tQ29tcG9uZW50ICYmIHRoaXMuX3JlbmRlckZpZWxkQ29tcG9uZW50KCl9XG4gICAgICAgICAgICAgICAgeyFpc0N1c3RvbUNvbXBvbmVudCAmJiBoYXNMYWJlbCAmJiBsYWJlbCgpfVxuICAgICAgICAgICAgICAgIHshaXNDdXN0b21Db21wb25lbnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5fZ2V0Q29udGVudEdyaWRDbGFzc05hbWUoKX1gfSBkYXRhLWZvY3VzPSdmaWVsZC12YWx1ZS1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvZGVSZXNvbHZlciAmJiBzZWFyY2hlciA/IGF1dG9jb21wbGV0ZSgpIDoga2V5UmVzb2x2ZXIgJiYgcXVlcnlTZWFyY2hlciA/IGF1dG9jb21wbGV0ZVNlbGVjdCgpIDogcXVlcnlTZWFyY2hlciA/IGF1dG9jb21wbGV0ZVRleHQoKSA6IGlzRWRpdCA/ICh2YWx1ZXMgPyBzZWxlY3QoKSA6IGlucHV0KCkpIDogZGlzcGxheSgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcbmNvbnN0IGJ1aWx0Q29tcCA9IGJ1aWxkZXIoRmllbGRNaXhpbik7XG5jb25zdCB7IGNvbXBvbmVudCwgbWl4aW4gfSA9IGJ1aWx0Q29tcDtcblxuZXhwb3J0IHtcbiAgICBjb21wb25lbnQsXG4gICAgbWl4aW5cbn1cbmV4cG9ydCBkZWZhdWx0IGJ1aWx0Q29tcDtcbiJdfQ==