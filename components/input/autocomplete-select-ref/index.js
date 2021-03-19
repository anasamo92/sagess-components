'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _field = require('../autocomplete-select/field');

var _field2 = _interopRequireDefault(_field);

var _field3 = require('../autocomplete-select-multiple/field');

var _field4 = _interopRequireDefault(_field3);

var _referenceBehaviour = require('../../../common/form/mixin/reference-behaviour');

var _referenceBehaviour2 = _interopRequireDefault(_referenceBehaviour);

var _storeBehaviour = require('../../../common/mixin/store-behaviour');

var _storeBehaviour2 = _interopRequireDefault(_storeBehaviour);

var _stringNormalize = require('../../../utils/string-normalize');

var _stringNormalize2 = _interopRequireDefault(_stringNormalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var displayName = 'AutocompleteReference';

var propTypes = {
    referenceName: _react.PropTypes.string.isRequired,
    keyName: _react.PropTypes.string,
    labelName: _react.PropTypes.string,
    multiple: _react.PropTypes.bool
};

var defaultProps = {
    keyName: 'key',
    labelName: 'label',
    multiple: false
};

var AutocompleteReference = _react2.default.createClass({

    displayName: displayName,
    mixins: [_referenceBehaviour2.default, _storeBehaviour2.default],

    querySearcher: function querySearcher(query) {
        var _this = this;

        var normalizedQuery = (0, _stringNormalize2.default)(query);
        var _props = this.props,
            referenceName = _props.referenceName,
            labelName = _props.labelName,
            keyName = _props.keyName;
        //We use this normalizedList in order not to normalize the list for every query

        if (!this.normalizedList && this.state.reference[referenceName]) {
            this.normalizedList = this.state.reference[referenceName].map(function (x) {
                var _ref;

                return _ref = {}, _defineProperty(_ref, keyName, x[keyName]), _defineProperty(_ref, labelName, (0, _stringNormalize2.default)(x[labelName])), _ref;
            });
        }

        var data = (this.normalizedList || []).filter(function (x) {
            return x[labelName].indexOf(normalizedQuery) !== -1;
        });
        var totalCount = data.length;
        // Let's take only the first 100 propositions
        data = data.slice(0, 100).map(function (elt) {
            return (_this.state.reference[referenceName] || []).find(function (item) {
                return item[keyName] === elt[keyName];
            });
        });
        return Promise.resolve({ data: data, totalCount: totalCount });
    },
    componentWillReceiveProps: function componentWillReceiveProps(_ref2) {
        var referenceName = _ref2.referenceName,
            labelName = _ref2.labelName;

        if (referenceName !== this.props.referenceName || labelName !== this.props.labelName) {
            this.normalizedList = null;
        }
    },
    keyResolver: function keyResolver(key) {
        var _this2 = this;

        var data = (this.state.reference[this.props.referenceName] || []).find(function (x) {
            return x[_this2.props.keyName] === key;
        });
        return Promise.resolve((data || {})[this.props.labelName] || key);
    },
    getValue: function getValue() {
        return this.refs.input.getValue();
    },
    _validate: function _validate() {
        return this.refs.input._validate();
    },
    render: function render() {
        var ToRenderComp = this.props.multiple ? _field4.default : _field2.default;
        var hasListLoaded = this.state.reference[this.props.referenceName] && this.state.reference[this.props.referenceName].length > 0;
        // We must not render the component with value before the reference list is loaded
        var value = hasListLoaded ? this.props.value : this.props.multiple ? [] : '';
        return _react2.default.createElement(ToRenderComp, Object.assign({
            ref: 'input'
        }, this.props, {
            value: value,
            querySearcher: this.querySearcher,
            keyResolver: this.keyResolver,
            keyName: this.props.keyName,
            labelName: this.props.labelName
        }));
    }
});

var AutocompleteReferenceWithProps = _react2.default.createClass({

    displayName: 'AutocompleteReferenceWrapped',
    propTypes: propTypes,

    getDefaultProps: function getDefaultProps() {
        return defaultProps;
    },
    render: function render() {
        return _react2.default.createElement(AutocompleteReference, Object.assign({}, this.props, { referenceNames: [this.props.referenceName] }));
    }
});

exports.default = AutocompleteReferenceWithProps;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJyZWZlcmVuY2VOYW1lIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImtleU5hbWUiLCJsYWJlbE5hbWUiLCJtdWx0aXBsZSIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJBdXRvY29tcGxldGVSZWZlcmVuY2UiLCJSZWFjdCIsImNyZWF0ZUNsYXNzIiwibWl4aW5zIiwicmVmZXJlbmNlTWl4aW4iLCJzdG9yZU1peGluIiwicXVlcnlTZWFyY2hlciIsInF1ZXJ5Iiwibm9ybWFsaXplZFF1ZXJ5IiwicHJvcHMiLCJub3JtYWxpemVkTGlzdCIsInN0YXRlIiwicmVmZXJlbmNlIiwibWFwIiwieCIsImRhdGEiLCJmaWx0ZXIiLCJpbmRleE9mIiwidG90YWxDb3VudCIsImxlbmd0aCIsInNsaWNlIiwiZmluZCIsIml0ZW0iLCJlbHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJrZXlSZXNvbHZlciIsImtleSIsImdldFZhbHVlIiwicmVmcyIsImlucHV0IiwiX3ZhbGlkYXRlIiwicmVuZGVyIiwiVG9SZW5kZXJDb21wIiwiQXV0b2NvbXBsZXRlU2VsZWN0TXVsdGlwbGUiLCJBdXRvY29tcGxldGVTZWxlY3QiLCJoYXNMaXN0TG9hZGVkIiwidmFsdWUiLCJBdXRvY29tcGxldGVSZWZlcmVuY2VXaXRoUHJvcHMiLCJnZXREZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLHVCQUFwQjs7QUFFQSxJQUFNQyxZQUFZO0FBQ2RDLG1CQUFlQyxpQkFBVUMsTUFBVixDQUFpQkMsVUFEbEI7QUFFZEMsYUFBU0gsaUJBQVVDLE1BRkw7QUFHZEcsZUFBV0osaUJBQVVDLE1BSFA7QUFJ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b0QsQ0FBbEIsQ0FBdkM7O2tCQWVlZ0QsOEIiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGVTZWxlY3QgZnJvbSAnLi4vYXV0b2NvbXBsZXRlLXNlbGVjdC9maWVsZCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGVTZWxlY3RNdWx0aXBsZSBmcm9tICcuLi9hdXRvY29tcGxldGUtc2VsZWN0LW11bHRpcGxlL2ZpZWxkJztcclxuXHJcbmltcG9ydCByZWZlcmVuY2VNaXhpbiBmcm9tICcuLi8uLi8uLi9jb21tb24vZm9ybS9taXhpbi9yZWZlcmVuY2UtYmVoYXZpb3VyJztcclxuaW1wb3J0IHN0b3JlTWl4aW4gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21peGluL3N0b3JlLWJlaGF2aW91cic7XHJcbmltcG9ydCB0b05vcm1hbGl6ZWRMb3dlclN0cmluZyBmcm9tICcuLi8uLi8uLi91dGlscy9zdHJpbmctbm9ybWFsaXplJztcclxuXHJcbmNvbnN0IGRpc3BsYXlOYW1lID0gJ0F1dG9jb21wbGV0ZVJlZmVyZW5jZSc7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgICByZWZlcmVuY2VOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBrZXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWxOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGtleU5hbWU6ICdrZXknLFxyXG4gICAgbGFiZWxOYW1lOiAnbGFiZWwnLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IEF1dG9jb21wbGV0ZVJlZmVyZW5jZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcbiAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXHJcbiAgICBtaXhpbnM6IFtyZWZlcmVuY2VNaXhpbiwgc3RvcmVNaXhpbl0sXHJcblxyXG4gICAgcXVlcnlTZWFyY2hlcihxdWVyeSkge1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHRvTm9ybWFsaXplZExvd2VyU3RyaW5nKHF1ZXJ5KTtcclxuICAgICAgICBjb25zdCB7IHJlZmVyZW5jZU5hbWUsIGxhYmVsTmFtZSwga2V5TmFtZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvL1dlIHVzZSB0aGlzIG5vcm1hbGl6ZWRMaXN0IGluIG9yZGVyIG5vdCB0byBub3JtYWxpemUgdGhlIGxpc3QgZm9yIGV2ZXJ5IHF1ZXJ5XHJcbiAgICAgICAgaWYgKCF0aGlzLm5vcm1hbGl6ZWRMaXN0ICYmIHRoaXMuc3RhdGUucmVmZXJlbmNlW3JlZmVyZW5jZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9ybWFsaXplZExpc3QgPSB0aGlzLnN0YXRlLnJlZmVyZW5jZVtyZWZlcmVuY2VOYW1lXS5tYXAoeCA9PiAoeyBba2V5TmFtZV06IHhba2V5TmFtZV0sIFtsYWJlbE5hbWVdOiB0b05vcm1hbGl6ZWRMb3dlclN0cmluZyh4W2xhYmVsTmFtZV0pIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gKHRoaXMubm9ybWFsaXplZExpc3QgfHwgW10pLmZpbHRlcih4ID0+IHhbbGFiZWxOYW1lXS5pbmRleE9mKG5vcm1hbGl6ZWRRdWVyeSkgIT09IC0xKTtcclxuICAgICAgICBjb25zdCB0b3RhbENvdW50ID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgLy8gTGV0J3MgdGFrZSBvbmx5IHRoZSBmaXJzdCAxMDAgcHJvcG9zaXRpb25zXHJcbiAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoMCwgMTAwKVxyXG4gICAgICAgICAgICAubWFwKGVsdCA9PiAodGhpcy5zdGF0ZS5yZWZlcmVuY2VbcmVmZXJlbmNlTmFtZV0gfHwgW10pLmZpbmQoaXRlbSA9PiBpdGVtW2tleU5hbWVdID09PSBlbHRba2V5TmFtZV0pKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgZGF0YSwgdG90YWxDb3VudCB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgcmVmZXJlbmNlTmFtZSwgbGFiZWxOYW1lIH0pIHtcclxuICAgICAgICBpZiAocmVmZXJlbmNlTmFtZSAhPT0gdGhpcy5wcm9wcy5yZWZlcmVuY2VOYW1lIHx8IGxhYmVsTmFtZSAhPT0gdGhpcy5wcm9wcy5sYWJlbE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3JtYWxpemVkTGlzdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBrZXlSZXNvbHZlcihrZXkpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gKHRoaXMuc3RhdGUucmVmZXJlbmNlW3RoaXMucHJvcHMucmVmZXJlbmNlTmFtZV0gfHwgW10pLmZpbmQoeCA9PiB4W3RoaXMucHJvcHMua2V5TmFtZV0gPT09IGtleSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgoZGF0YSB8fCB7fSlbdGhpcy5wcm9wcy5sYWJlbE5hbWVdIHx8IGtleSlcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5pbnB1dC5nZXRWYWx1ZSgpO1xyXG4gICAgfSxcclxuICAgIF92YWxpZGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmlucHV0Ll92YWxpZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBUb1JlbmRlckNvbXAgPSB0aGlzLnByb3BzLm11bHRpcGxlID8gQXV0b2NvbXBsZXRlU2VsZWN0TXVsdGlwbGUgOiBBdXRvY29tcGxldGVTZWxlY3Q7XHJcbiAgICAgICAgY29uc3QgaGFzTGlzdExvYWRlZCA9IHRoaXMuc3RhdGUucmVmZXJlbmNlW3RoaXMucHJvcHMucmVmZXJlbmNlTmFtZV0gJiYgdGhpcy5zdGF0ZS5yZWZlcmVuY2VbdGhpcy5wcm9wcy5yZWZlcmVuY2VOYW1lXS5sZW5ndGggPiAwO1xyXG4gICAgICAgIC8vIFdlIG11c3Qgbm90IHJlbmRlciB0aGUgY29tcG9uZW50IHdpdGggdmFsdWUgYmVmb3JlIHRoZSByZWZlcmVuY2UgbGlzdCBpcyBsb2FkZWRcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGhhc0xpc3RMb2FkZWQgPyB0aGlzLnByb3BzLnZhbHVlIDogdGhpcy5wcm9wcy5tdWx0aXBsZSA/IFtdIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRvUmVuZGVyQ29tcFxyXG4gICAgICAgICAgICAgICAgcmVmPSdpbnB1dCdcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcXVlcnlTZWFyY2hlcj17dGhpcy5xdWVyeVNlYXJjaGVyfVxyXG4gICAgICAgICAgICAgICAga2V5UmVzb2x2ZXI9e3RoaXMua2V5UmVzb2x2ZXJ9XHJcbiAgICAgICAgICAgICAgICBrZXlOYW1lPXt0aGlzLnByb3BzLmtleU5hbWV9XHJcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWU9e3RoaXMucHJvcHMubGFiZWxOYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5cclxuY29uc3QgQXV0b2NvbXBsZXRlUmVmZXJlbmNlV2l0aFByb3BzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuICAgIGRpc3BsYXlOYW1lOiAnQXV0b2NvbXBsZXRlUmVmZXJlbmNlV3JhcHBlZCcsXHJcbiAgICBwcm9wVHlwZXM6IHByb3BUeXBlcyxcclxuXHJcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPEF1dG9jb21wbGV0ZVJlZmVyZW5jZSB7Li4udGhpcy5wcm9wc30gcmVmZXJlbmNlTmFtZXM9e1t0aGlzLnByb3BzLnJlZmVyZW5jZU5hbWVdfSAvPjtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGVSZWZlcmVuY2VXaXRoUHJvcHM7Il19