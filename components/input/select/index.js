'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; //dependencies


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('sagess-core/translation');

var _componentBase = require('../../../behaviours/component-base');

var _componentBase2 = _interopRequireDefault(_componentBase);

var _filterHtmlAttributes = require('../../../utils/filter-html-attributes');

var _filterHtmlAttributes2 = _interopRequireDefault(_filterHtmlAttributes);

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isNull = require('lodash/lang/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _union = require('lodash/array/union');

var _union2 = _interopRequireDefault(_union);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNSELECTED_KEY = 'UNSELECTED_KEY';

/**
* Parse the value.
* @param  {string | number} propsValue - The value given as props to read the type.
* @param  {string} rawValue   - The raw string value.
* @return {strint | number}  - The parsed value.
*/
function _valueParser(propsValue, rawValue) {
    if (UNSELECTED_KEY === rawValue) {
        return undefined;
    }
    var type = this.props.type;

    return type === 'number' ? +rawValue : rawValue;
}

var propTypes = {
    disabled: _react.PropTypes.bool,
    error: _react.PropTypes.string,
    hasUndefined: _react.PropTypes.bool,
    isActiveProperty: _react.PropTypes.string,
    isRequired: _react.PropTypes.bool,
    labelKey: _react.PropTypes.string,
    multiple: _react.PropTypes.bool,
    name: _react.PropTypes.string.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    placeholder: _react.PropTypes.string,
    unSelectedLabel: _react.PropTypes.string,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    valueKey: _react.PropTypes.string,
    values: _react.PropTypes.array.isRequired
};

var defaultProps = {
    disabled: false,
    hasUndefined: true,
    isActiveProperty: 'isActive',
    isRequired: false,
    labelKey: 'label',
    multiple: false,
    unSelectedLabel: 'select.unSelected',
    values: [],
    valueKey: 'code',
    valueParser: _valueParser
};

/**
* Component standing for an HTML input.
*/

var Select = (0, _componentBase2.default)(_class = function (_Component) {
    _inherits(Select, _Component);

    function Select() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
            var _this$props = _this.props,
                type = _this$props.type,
                value = _this$props.value;

            if ((0, _isNull2.default)(value) || (0, _isUndefined2.default)(value) || UNSELECTED_KEY === value) return null;
            return type === 'number' ? +value : value;
        }, _this._handleSelectChange = function (evt) {
            var _this$props2 = _this.props,
                onChange = _this$props2.onChange,
                valueParser = _this$props2.valueParser,
                propsValue = _this$props2.value;
            var value = evt.target.value;

            return onChange(valueParser.call(_this, propsValue, value));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
    * Get the dom value of the component.
    * @return {object} - The unformated dom value.
    */


    /**
    * Handle the change on the select, it only propagates the value.
    * @param  {object} evt - The react DOM event.
    * @return {object} - The function onChange from the props, called.
    */


    _createClass(Select, [{
        key: '_renderOptions',


        /** inheritdoc */
        value: function _renderOptions(_ref2) {
            var _this2 = this;

            var hasUndefined = _ref2.hasUndefined,
                labelKey = _ref2.labelKey,
                isRequired = _ref2.isRequired,
                value = _ref2.value,
                _ref2$values = _ref2.values,
                values = _ref2$values === undefined ? [] : _ref2$values,
                valueKey = _ref2.valueKey,
                isActiveProperty = _ref2.isActiveProperty,
                unSelectedLabel = _ref2.unSelectedLabel;

            var isRequiredAndNoValue = isRequired && ((0, _isUndefined2.default)(value) || (0, _isNull2.default)(value));
            if (hasUndefined || isRequiredAndNoValue) {
                var _ref3;

                values = (0, _union2.default)([(_ref3 = {}, _defineProperty(_ref3, labelKey, this.i18n(unSelectedLabel)), _defineProperty(_ref3, valueKey, UNSELECTED_KEY), _ref3)], values);
            }
            return values.filter(function (v) {
                return (0, _isUndefined2.default)(v[isActiveProperty]) || v[isActiveProperty] === true;
            }) // Filter on the
            .map(function (val, idx) {
                var optVal = '' + val[valueKey];
                var elementValue = val[labelKey];
                var optLabel = (0, _isUndefined2.default)(elementValue) || (0, _isNull2.default)(elementValue) ? _this2.i18n('select.noLabel') : elementValue;

                return _react2.default.createElement(
                    'option',
                    { key: idx, value: optVal },
                    optLabel
                );
            });
        }

        /**
        * @inheritdoc
        * @override
        */

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                error = _props.error,
                style = _props.style;

            var validInputProps = (0, _filterHtmlAttributes2.default)(this.props);

            validInputProps.onChange = this._handleSelectChange;
            var inputProps = Object.assign({}, validInputProps);

            return _react2.default.createElement(
                'div',
                { 'data-focus': 'select', ref: 'select', 'data-valid': !error, style: style },
                _react2.default.createElement(
                    'select',
                    Object.assign({ ref: 'htmlSelect' }, inputProps),
                    this._renderOptions(this.props)
                ),
                error && _react2.default.createElement(
                    'div',
                    { className: 'label-error', ref: 'error' },
                    (0, _translation.translate)(error)
                )
            );
        }
    }]);

    return Select;
}(_react.Component)) || _class;

//Static props.


Select.displayName = 'Select';
Select.defaultProps = defaultProps;
Select.propTypes = propTypes;

exports.default = Select;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiVU5TRUxFQ1RFRF9LRVkiLCJfdmFsdWVQYXJzZXIiLCJwcm9wc1ZhbHVlIiwicmF3VmFsdWUiLCJ1bmRlZmluZWQiLCJ0eXBlIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJkaXNhYmxlZCIsIlByb3BUeXBlcyIsImJvb2wiLCJlcnJvciIsInN0cmluZyIsImhhc1VuZGVmaW5lZCIsImlzQWN0aXZlUHJvcGVydHkiLCJpc1JlcXVpcmVkIiwibGFiZWxLZXkiLCJtdWx0aXBsZSIsIm5hbWUiLCJvbkNoYW5nZSIsImZ1bmMiLCJwbGFjZWhvbGRlciIsInVuU2VsZWN0ZWRMYWJlbCIsInZhbHVlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwidmFsdWVLZXkiLCJ2YWx1ZXMiLCJhcnJheSIsImRlZmF1bHRQcm9wcyIsInZhbHVlUGFyc2VyIiwiU2VsZWN0IiwiQ29tcG9uZW50QmFzZUJlaGF2aW91ciIsImdldFZhbHVlIiwiX2hhbmRsZVNlbGVjdENoYW5nZSIsImV2dCIsInRhcmdldCIsImNhbGwiLCJpc1JlcXVpcmVkQW5kTm9WYWx1ZSIsImkxOG4iLCJmaWx0ZXIiLCJ2IiwibWFwIiwidmFsIiwiaWR4Iiwib3B0VmFsIiwiZWxlbWVudFZhbHVlIiwib3B0TGFiZWwiLCJzdHlsZSIsInZhbGlkSW5wdXRQcm9wcyIsImlucHV0UHJvcHMiLCJfcmVuZGVyT3B0aW9ucyIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztZQUFBOzs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsaUJBQWlCLGdCQUF2Qjs7QUFFQTs7Ozs7O0FBTUEsU0FBU0MsWUFBVCxDQUFzQkMsVUFBdEIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQ3hDLFFBQUlILG1CQUFtQkcsUUFBdkIsRUFBaUM7QUFDN0IsZUFBT0MsU0FB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Q0sseUJBQUtDLGNBQUwsQ0FBb0IsS0FBSzdDLEtBQXpCO0FBREwsaUJBREo7QUFJS0sseUJBQVM7QUFBQTtBQUFBLHNCQUFLLFdBQVUsYUFBZixFQUE2QixLQUFJLE9BQWpDO0FBQTBDLGdEQUFVQSxLQUFWO0FBQTFDO0FBSmQsYUFESjtBQVFIOzs7O0VBaEVnQnlDLGdCOztBQW1FckI7OztBQUNBckIsT0FBT3NCLFdBQVAsR0FBcUIsUUFBckI7QUFDQXRCLE9BQU9GLFlBQVAsR0FBc0JBLFlBQXRCO0FBQ0FFLE9BQU94QixTQUFQLEdBQW1CQSxTQUFuQjs7a0JBRWV3QixNIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnc2FnZXNzLWNvcmUvdHJhbnNsYXRpb24nO1xuaW1wb3J0IENvbXBvbmVudEJhc2VCZWhhdmlvdXIgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3Vycy9jb21wb25lbnQtYmFzZSc7XG5pbXBvcnQgZmlsdGVyUHJvcHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmlsdGVyLWh0bWwtYXR0cmlidXRlcyc7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnbG9kYXNoL2xhbmcvaXNVbmRlZmluZWQnO1xuaW1wb3J0IGlzTnVsbCBmcm9tICdsb2Rhc2gvbGFuZy9pc051bGwnO1xuXG5pbXBvcnQgdW5pb24gZnJvbSAnbG9kYXNoL2FycmF5L3VuaW9uJztcbmNvbnN0IFVOU0VMRUNURURfS0VZID0gJ1VOU0VMRUNURURfS0VZJztcblxuLyoqXG4qIFBhcnNlIHRoZSB2YWx1ZS5cbiogQHBhcmFtICB7c3RyaW5nIHwgbnVtYmVyfSBwcm9wc1ZhbHVlIC0gVGhlIHZhbHVlIGdpdmVuIGFzIHByb3BzIHRvIHJlYWQgdGhlIHR5cGUuXG4qIEBwYXJhbSAge3N0cmluZ30gcmF3VmFsdWUgICAtIFRoZSByYXcgc3RyaW5nIHZhbHVlLlxuKiBAcmV0dXJuIHtzdHJpbnQgfCBudW1iZXJ9ICAtIFRoZSBwYXJzZWQgdmFsdWUuXG4qL1xuZnVuY3Rpb24gX3ZhbHVlUGFyc2VyKHByb3BzVmFsdWUsIHJhd1ZhbHVlKSB7XG4gICAgaWYgKFVOU0VMRUNURURfS0VZID09PSByYXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdudW1iZXInID8gK3Jhd1ZhbHVlIDogcmF3VmFsdWU7XG59XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGFzVW5kZWZpbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0FjdGl2ZVByb3BlcnR5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzUmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGxhYmVsS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdW5TZWxlY3RlZExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxuICAgIF0pLFxuICAgIHZhbHVlS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaGFzVW5kZWZpbmVkOiB0cnVlLFxuICAgIGlzQWN0aXZlUHJvcGVydHk6ICdpc0FjdGl2ZScsXG4gICAgaXNSZXF1aXJlZDogZmFsc2UsXG4gICAgbGFiZWxLZXk6ICdsYWJlbCcsXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgIHVuU2VsZWN0ZWRMYWJlbDogJ3NlbGVjdC51blNlbGVjdGVkJyxcbiAgICB2YWx1ZXM6IFtdLFxuICAgIHZhbHVlS2V5OiAnY29kZScsXG4gICAgdmFsdWVQYXJzZXI6IF92YWx1ZVBhcnNlclxufTtcblxuLyoqXG4qIENvbXBvbmVudCBzdGFuZGluZyBmb3IgYW4gSFRNTCBpbnB1dC5cbiovXG5AQ29tcG9uZW50QmFzZUJlaGF2aW91clxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICogR2V0IHRoZSBkb20gdmFsdWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAqIEByZXR1cm4ge29iamVjdH0gLSBUaGUgdW5mb3JtYXRlZCBkb20gdmFsdWUuXG4gICAgKi9cbiAgICBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGlzTnVsbCh2YWx1ZSkgfHwgaXNVbmRlZmluZWQodmFsdWUpIHx8IFVOU0VMRUNURURfS0VZID09PSB2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0eXBlID09PSAnbnVtYmVyJyA/ICt2YWx1ZSA6IHZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAqIEhhbmRsZSB0aGUgY2hhbmdlIG9uIHRoZSBzZWxlY3QsIGl0IG9ubHkgcHJvcGFnYXRlcyB0aGUgdmFsdWUuXG4gICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2dCAtIFRoZSByZWFjdCBET00gZXZlbnQuXG4gICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGZ1bmN0aW9uIG9uQ2hhbmdlIGZyb20gdGhlIHByb3BzLCBjYWxsZWQuXG4gICAgKi9cbiAgICBfaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGV2dCkgPT4ge1xuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlLCB2YWx1ZVBhcnNlciwgdmFsdWU6IHByb3BzVmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2dC50YXJnZXQ7XG4gICAgICAgIHJldHVybiBvbkNoYW5nZSh2YWx1ZVBhcnNlci5jYWxsKHRoaXMsIHByb3BzVmFsdWUsIHZhbHVlKSk7XG4gICAgfTtcblxuICAgIC8qKiBpbmhlcml0ZG9jICovXG4gICAgX3JlbmRlck9wdGlvbnMoeyBoYXNVbmRlZmluZWQsIGxhYmVsS2V5LCBpc1JlcXVpcmVkLCB2YWx1ZSwgdmFsdWVzID0gW10sIHZhbHVlS2V5LCBpc0FjdGl2ZVByb3BlcnR5LCB1blNlbGVjdGVkTGFiZWwgfSkge1xuICAgICAgICBjb25zdCBpc1JlcXVpcmVkQW5kTm9WYWx1ZSA9IGlzUmVxdWlyZWQgJiYgKGlzVW5kZWZpbmVkKHZhbHVlKSB8fCBpc051bGwodmFsdWUpKTtcbiAgICAgICAgaWYgKGhhc1VuZGVmaW5lZCB8fCBpc1JlcXVpcmVkQW5kTm9WYWx1ZSkge1xuICAgICAgICAgICAgdmFsdWVzID0gdW5pb24oXG4gICAgICAgICAgICAgICAgW3sgW2xhYmVsS2V5XTogdGhpcy5pMThuKHVuU2VsZWN0ZWRMYWJlbCksIFt2YWx1ZUtleV06IFVOU0VMRUNURURfS0VZIH1dLFxuICAgICAgICAgICAgICAgIHZhbHVlc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzXG4gICAgICAgICAgICAuZmlsdGVyKHYgPT4gaXNVbmRlZmluZWQodltpc0FjdGl2ZVByb3BlcnR5XSkgfHwgdltpc0FjdGl2ZVByb3BlcnR5XSA9PT0gdHJ1ZSkgLy8gRmlsdGVyIG9uIHRoZVxuICAgICAgICAgICAgLm1hcCgodmFsLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRWYWwgPSBgJHt2YWxbdmFsdWVLZXldfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudFZhbHVlID0gdmFsW2xhYmVsS2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRMYWJlbCA9IGlzVW5kZWZpbmVkKGVsZW1lbnRWYWx1ZSkgfHwgaXNOdWxsKGVsZW1lbnRWYWx1ZSkgPyB0aGlzLmkxOG4oJ3NlbGVjdC5ub0xhYmVsJykgOiBlbGVtZW50VmFsdWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aWR4fSB2YWx1ZT17b3B0VmFsfT57b3B0TGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQGluaGVyaXRkb2NcbiAgICAqIEBvdmVycmlkZVxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGVycm9yLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdmFsaWRJbnB1dFByb3BzID0gZmlsdGVyUHJvcHModGhpcy5wcm9wcyk7XG5cbiAgICAgICAgdmFsaWRJbnB1dFByb3BzLm9uQ2hhbmdlID0gdGhpcy5faGFuZGxlU2VsZWN0Q2hhbmdlO1xuICAgICAgICBjb25zdCBpbnB1dFByb3BzID0geyAuLi52YWxpZElucHV0UHJvcHMgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdzZWxlY3QnIHJlZj0nc2VsZWN0JyBkYXRhLXZhbGlkPXshZXJyb3J9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCByZWY9J2h0bWxTZWxlY3QnIHsuLi5pbnB1dFByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlck9wdGlvbnModGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPSdsYWJlbC1lcnJvcicgcmVmPSdlcnJvcic+e3RyYW5zbGF0ZShlcnJvcil9PC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vL1N0YXRpYyBwcm9wcy5cblNlbGVjdC5kaXNwbGF5TmFtZSA9ICdTZWxlY3QnO1xuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblNlbGVjdC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcbiJdfQ==