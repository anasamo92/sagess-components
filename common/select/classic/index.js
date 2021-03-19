'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mixin = require('../../i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _stylable = require('../../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

var _union = require('lodash/array/union');

var _union2 = _interopRequireDefault(_union);

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isNull = require('lodash/lang/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _isNumber = require('lodash/lang/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //Dependencies.


var UNSELECTED_KEY = 'UNSELECTED_KEY';

/**
* Input text mixin.
* @type {Object}
*/
var selectMixin = {
    /** @inheritdoc */
    displayName: 'Select',
    /** @inheritdoc */
    mixins: [_mixin2.default, _stylable2.default],
    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            labelKey: 'label',
            multiple: false,
            values: [],
            valueKey: 'code',
            hasUndefined: true,
            disabled: false
        };
    },

    /** @inheritdoc */
    propTypes: {
        multiple: (0, _types2.default)('bool'),
        labelKey: (0, _types2.default)('string'),
        name: (0, _types2.default)('string'),
        isRequired: (0, _types2.default)('bool'),
        onChange: (0, _types2.default)('func'),
        value: (0, _types2.default)(['number', 'string', 'array']),
        values: (0, _types2.default)('array'),
        valueKey: (0, _types2.default)('string'),
        disabled: (0, _types2.default)('bool')
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 0.7.0: this component is deprecated, please use SagessComponents.components.input.Select');
    },

    /** @inheritdoc */
    getInitialState: function getInitialState() {
        var _props = this.props,
            hasUndefined = _props.hasUndefined,
            value = _props.value,
            values = _props.values,
            valueKey = _props.valueKey,
            isRequired = _props.isRequired;

        var hasValue = !(0, _isUndefined2.default)(value) && !(0, _isNull2.default)(value);
        var isRequiredAndHasValue = true === isRequired && hasValue;
        return {
            value: value,
            hasUndefined: false === hasUndefined || isRequiredAndHasValue ? false : true, //!value
            isNumber: values && 0 < values.length && values[0] && values[0][valueKey] && (0, _isNumber2.default)(values[0][valueKey])
        };
    },

    /** @inheritdoc */
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        this.setState({ value: newProps.value });
    },

    /**
    * Get the value of the component.
    * @return {object} - Return the value of the component.
    */
    getValue: function getValue() {
        var select = this.refs.select;

        var domValue = _reactDom2.default.findDOMNode(select).value;
        if (domValue === UNSELECTED_KEY) {
            return null;
        }
        return this.state.isNumber ? +domValue : domValue;
    },

    /**
    * Handle the change value of the input.
    * @param {object} event - The sanitize event of input.
    */
    _handleOnChange: function _handleOnChange(event) {
        //On change handler.
        var _props2 = this.props,
            onChange = _props2.onChange,
            multiple = _props2.multiple;

        if (onChange) {
            onChange(event);
        } else {
            var domValue = event.target.value;
            var value = this.state.isNumber ? +domValue : domValue;
            //Set the state then call the change handler.
            if (multiple) {
                var vals = this.state.value;
                vals.push(value);
                return this.setState({ value: vals });
            }
            return this.setState({ value: value });
        }
    },

    /** @inheritdoc */
    renderOptions: function renderOptions() {
        var _this = this;

        var processValues = void 0;
        var _props3 = this.props,
            labelKey = _props3.labelKey,
            valueKey = _props3.valueKey,
            values = _props3.values;
        var hasUndefined = this.state.hasUndefined;

        if (hasUndefined) {
            var _ref;

            processValues = (0, _union2.default)([(_ref = {}, _defineProperty(_ref, labelKey, 'select.unSelected'), _defineProperty(_ref, valueKey, UNSELECTED_KEY), _ref)], values);
        } else {
            processValues = values;
        }
        return processValues.map(function (val, idx) {
            var value = '' + val[valueKey];
            var label = val[labelKey] || 'select.noLabel';
            return _react2.default.createElement(
                'option',
                { key: idx, value: value },
                _this.i18n(label)
            );
        });
    },

    /**
    * Render an input.
    * @return {DOM} - The dom of an input.
    */
    render: function render() {
        var props = this.props,
            state = this.state,
            _getStyleClassName = this._getStyleClassName,
            _handleOnChange = this._handleOnChange;
        var disabled = props.disabled,
            error = props.error,
            multiple = props.multiple,
            name = props.name;
        var value = state.value;

        var disabledProps = disabled ? { disabled: 'disabled' } : {};
        var selectProps = Object.assign({ multiple: multiple, value: '' + value, name: name, onChange: _handleOnChange, className: _getStyleClassName(), ref: 'select' }, disabledProps);
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'select', 'data-valid': !error },
            _react2.default.createElement(
                'select',
                selectProps,
                this.renderOptions()
            ),
            error && _react2.default.createElement(
                'div',
                { className: 'label-error', ref: 'error' },
                error
            )
        );
    }
};

var _builder = (0, _builder3.default)(selectMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiVU5TRUxFQ1RFRF9LRVkiLCJzZWxlY3RNaXhpbiIsImRpc3BsYXlOYW1lIiwibWl4aW5zIiwiaTE4bk1peGluIiwic3R5bGFibGVNaXhpbiIsImdldERlZmF1bHRQcm9wcyIsImxhYmVsS2V5IiwibXVsdGlwbGUiLCJ2YWx1ZXMiLCJ2YWx1ZUtleSIsImhhc1VuZGVmaW5lZCIsImRpc2FibGVkIiwicHJvcFR5cGVzIiwibmFtZSIsImlzUmVxdWlyZWQiLCJvbkNoYW5nZSIsInZhbHVlIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJnZXRJbml0aWFsU3RhdGUiLCJwcm9wcyIsImhhc1ZhbHVlIiwiaXNSZXF1aXJlZEFuZEhhc1ZhbHVlIiwiaXNOdW1iZXIiLCJsZW5ndGgiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsImdldFZhbHVlIiwic2VsZWN0IiwicmVmcyIsImRvbVZhbHVlIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInN0YXRlIiwiX2hhbmRsZU9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWxzIiwicHVzaCIsInJlbmRlck9wdGlvbnMiLCJwcm9jZXNzVmFsdWVzIiwibWFwIiwidmFsIiwiaWR4IiwibGFiZWwiLCJpMThuIiwicmVuZGVyIiwiX2dldFN0eWxlQ2xhc3NOYW1lIiwiZXJyb3IiLCJkaXNhYmxlZFByb3BzIiwic2VsZWN0UHJvcHMiLCJjbGFzc05hbWUiLCJyZWYiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a05BWEE7OztBQWFBLElBQU1BLGlCQUFpQixnQkFBdkI7O0FBRUE7Ozs7QUFJQSxJQUFNQyxjQUFjO0FBQ2hC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WUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0RlcGVuZGVuY2llcy5cbmltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCB0eXBlcyBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGkxOG5NaXhpbiBmcm9tICcuLi8uLi9pMThuL21peGluJztcbmltcG9ydCBzdHlsYWJsZU1peGluIGZyb20gJy4uLy4uLy4uL21peGluL3N0eWxhYmxlJztcbmltcG9ydCB1bmlvbiBmcm9tICdsb2Rhc2gvYXJyYXkvdW5pb24nO1xuXG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnbG9kYXNoL2xhbmcvaXNVbmRlZmluZWQnO1xuaW1wb3J0IGlzTnVsbCBmcm9tICdsb2Rhc2gvbGFuZy9pc051bGwnO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJ2xvZGFzaC9sYW5nL2lzTnVtYmVyJztcblxuY29uc3QgVU5TRUxFQ1RFRF9LRVkgPSAnVU5TRUxFQ1RFRF9LRVknO1xuXG4vKipcbiogSW5wdXQgdGV4dCBtaXhpbi5cbiogQHR5cGUge09iamVjdH1cbiovXG5jb25zdCBzZWxlY3RNaXhpbiA9IHtcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBkaXNwbGF5TmFtZTogJ1NlbGVjdCcsXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgbWl4aW5zOiBbaTE4bk1peGluLCBzdHlsYWJsZU1peGluXSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbEtleTogJ2xhYmVsJyxcbiAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgICAgICB2YWx1ZUtleTogJ2NvZGUnLFxuICAgICAgICAgICAgaGFzVW5kZWZpbmVkOiB0cnVlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgbXVsdGlwbGU6IHR5cGVzKCdib29sJyksXG4gICAgICAgIGxhYmVsS2V5OiB0eXBlcygnc3RyaW5nJyksXG4gICAgICAgIG5hbWU6IHR5cGVzKCdzdHJpbmcnKSxcbiAgICAgICAgaXNSZXF1aXJlZDogdHlwZXMoJ2Jvb2wnKSxcbiAgICAgICAgb25DaGFuZ2U6IHR5cGVzKCdmdW5jJyksXG4gICAgICAgIHZhbHVlOiB0eXBlcyhbJ251bWJlcicsICdzdHJpbmcnLCAnYXJyYXknXSksXG4gICAgICAgIHZhbHVlczogdHlwZXMoJ2FycmF5JyksXG4gICAgICAgIHZhbHVlS2V5OiB0eXBlcygnc3RyaW5nJyksXG4gICAgICAgIGRpc2FibGVkOiB0eXBlcygnYm9vbCcpXG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAwLjcuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBTYWdlc3NDb21wb25lbnRzLmNvbXBvbmVudHMuaW5wdXQuU2VsZWN0Jyk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgaGFzVW5kZWZpbmVkLCB2YWx1ZSwgdmFsdWVzLCB2YWx1ZUtleSwgaXNSZXF1aXJlZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaGFzVmFsdWUgPSAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xuICAgICAgICBjb25zdCBpc1JlcXVpcmVkQW5kSGFzVmFsdWUgPSB0cnVlID09PSBpc1JlcXVpcmVkICYmIGhhc1ZhbHVlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgaGFzVW5kZWZpbmVkOiBmYWxzZSA9PT0gaGFzVW5kZWZpbmVkIHx8IGlzUmVxdWlyZWRBbmRIYXNWYWx1ZSA/IGZhbHNlIDogdHJ1ZSwgLy8hdmFsdWVcbiAgICAgICAgICAgIGlzTnVtYmVyOiB2YWx1ZXMgJiYgMCA8IHZhbHVlcy5sZW5ndGggJiYgdmFsdWVzWzBdICYmIHZhbHVlc1swXVt2YWx1ZUtleV0gJiYgaXNOdW1iZXIodmFsdWVzWzBdW3ZhbHVlS2V5XSlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXdQcm9wcy52YWx1ZSB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICogQHJldHVybiB7b2JqZWN0fSAtIFJldHVybiB0aGUgdmFsdWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAqL1xuICAgIGdldFZhbHVlKCkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdCB9ID0gdGhpcy5yZWZzO1xuICAgICAgICBjb25zdCBkb21WYWx1ZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHNlbGVjdCkudmFsdWU7XG4gICAgICAgIGlmIChkb21WYWx1ZSA9PT0gVU5TRUxFQ1RFRF9LRVkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmlzTnVtYmVyID8gK2RvbVZhbHVlIDogZG9tVmFsdWU7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIEhhbmRsZSB0aGUgY2hhbmdlIHZhbHVlIG9mIHRoZSBpbnB1dC5cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCAtIFRoZSBzYW5pdGl6ZSBldmVudCBvZiBpbnB1dC5cbiAgICAqL1xuICAgIF9oYW5kbGVPbkNoYW5nZShldmVudCkge1xuICAgICAgICAvL09uIGNoYW5nZSBoYW5kbGVyLlxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlLCBtdWx0aXBsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBvbkNoYW5nZShldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkb21WYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZS5pc051bWJlciA/ICtkb21WYWx1ZSA6IGRvbVZhbHVlO1xuICAgICAgICAgICAgLy9TZXQgdGhlIHN0YXRlIHRoZW4gY2FsbCB0aGUgY2hhbmdlIGhhbmRsZXIuXG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFscyA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFscy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWxzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHJlbmRlck9wdGlvbnMoKSB7XG4gICAgICAgIGxldCBwcm9jZXNzVmFsdWVzO1xuICAgICAgICBjb25zdCB7IGxhYmVsS2V5LCB2YWx1ZUtleSwgdmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGhhc1VuZGVmaW5lZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKGhhc1VuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlcyA9IHVuaW9uKFxuICAgICAgICAgICAgICAgIFt7IFtsYWJlbEtleV06ICdzZWxlY3QudW5TZWxlY3RlZCcsIFt2YWx1ZUtleV06IFVOU0VMRUNURURfS0VZIH1dLFxuICAgICAgICAgICAgICAgIHZhbHVlc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2Nlc3NWYWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NWYWx1ZXMubWFwKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBgJHt2YWxbdmFsdWVLZXldfWA7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHZhbFtsYWJlbEtleV0gfHwgJ3NlbGVjdC5ub0xhYmVsJztcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fSB2YWx1ZT17dmFsdWV9Pnt0aGlzLmkxOG4obGFiZWwpfTwvb3B0aW9uPjtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciBhbiBpbnB1dC5cbiAgICAqIEByZXR1cm4ge0RPTX0gLSBUaGUgZG9tIG9mIGFuIGlucHV0LlxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb3BzLCBzdGF0ZSwgX2dldFN0eWxlQ2xhc3NOYW1lLCBfaGFuZGxlT25DaGFuZ2UgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgZGlzYWJsZWQsIGVycm9yLCBtdWx0aXBsZSwgbmFtZSB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHN0YXRlO1xuICAgICAgICBjb25zdCBkaXNhYmxlZFByb3BzID0gZGlzYWJsZWQgPyB7IGRpc2FibGVkOiAnZGlzYWJsZWQnIH0gOiB7fTtcbiAgICAgICAgY29uc3Qgc2VsZWN0UHJvcHMgPSB7IC4uLnsgbXVsdGlwbGUsIHZhbHVlOiBgJHt2YWx1ZX1gLCBuYW1lLCBvbkNoYW5nZTogX2hhbmRsZU9uQ2hhbmdlLCBjbGFzc05hbWU6IF9nZXRTdHlsZUNsYXNzTmFtZSgpLCByZWY6ICdzZWxlY3QnIH0sIC4uLmRpc2FibGVkUHJvcHMgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nc2VsZWN0JyBkYXRhLXZhbGlkPXshZXJyb3J9PlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgey4uLnNlbGVjdFByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyT3B0aW9ucygpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT0nbGFiZWwtZXJyb3InIHJlZj0nZXJyb3InPntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoc2VsZWN0TWl4aW4pO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=