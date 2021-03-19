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

var _mdlBehaviour = require('../../mixin/mdl-behaviour');

var _mdlBehaviour2 = _interopRequireDefault(_mdlBehaviour);

var _uniqueId = require('lodash/utility/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _radio = require('../../input/radio');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectRadioMixin = {
    mixins: [_mixin2.default, _mdlBehaviour2.default],
    /**
    * Tag name.
    */
    displayName: 'SelectRadio',

    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            values: [],
            valueKey: 'code',
            labelKey: 'label',
            disabled: false
        };
    },


    /** @inheritdoc */
    propTypes: {
        values: (0, _types2.default)('array'),
        value: (0, _types2.default)(['number', 'string', 'array']),
        valueKey: (0, _types2.default)('string'),
        labelKey: (0, _types2.default)('string'),
        onChange: (0, _types2.default)('func'),
        disabled: (0, _types2.default)('bool')
    },

    /** @inheritdoc */
    getInitialState: function getInitialState() {
        return {
            uniqueName: (0, _uniqueId2.default)('options_'),
            value: this.props.value
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents v0.15: the \'select-radio\' component from SagessComponents.common is deprecated, please use SagessComponents.components.select.SelectRadio');
    },


    /** @inheritdoc */
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        this.setState({
            value: newProps.value
        });
    },


    /**
     * Get the value from the select in the DOM.
     * @return {string, number} selected value
     */
    getValue: function getValue() {
        return this.state.value;
    },


    /**
    * handle click on radio
    * @param {object} event - the click event
    */
    _handleRadioChange: function _handleRadioChange(newValue) {
        var onChange = this.props.onChange;

        if (onChange) {
            onChange(newValue);
            return;
        }
        //Set the state then call the change handler.
        this.setState({ value: newValue });
    },

    /**
     * Closure to capture key and radio status.
     * @param  {string} key the key of radio
     * @return {func} status closure
     */
    _getRadioChangeHandler: function _getRadioChangeHandler(key) {
        var _this = this;

        return function () {
            _this._handleRadioChange(key);
        };
    },

    /**
    * Render radio for each values
    * @return {XML} the different radio values
    */
    renderSelectRadios: function renderSelectRadios() {
        var _this2 = this;

        var uniqueName = this.state.uniqueName;

        return this.props.values.map(function (val, idx) {
            var value = val[_this2.props.valueKey];
            var label = val[_this2.props.labelKey];
            var disabled = _this2.props.disabled;
            var isChecked = value === _this2.state.value;
            return _react2.default.createElement(_radio.component, { key: idx, label: _this2.i18n(label), name: uniqueName, onChange: _this2._getRadioChangeHandler(value), value: isChecked, disabled: disabled });
        });
    },

    /** @inheritdoc */
    render: function render() {
        var error = this.props.error;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'select-radio', 'data-valid': !error },
            this.renderSelectRadios(),
            error && _react2.default.createElement(
                'div',
                { className: 'label-error', ref: 'error' },
                error
            )
        );
    }
};

var _builder = (0, _builder3.default)(selectRadioMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsic2VsZWN0UmFkaW9NaXhpbiIsIm1peGlucyIsImkxOG5CZWhhdmlvdXIiLCJtZGxCZWhhdmlvdXIiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInZhbHVlcyIsInZhbHVlS2V5IiwibGFiZWxLZXkiLCJkaXNhYmxlZCIsInByb3BUeXBlcyIsInZhbHVlIiwib25DaGFuZ2UiLCJnZXRJbml0aWFsU3RhdGUiLCJ1bmlxdWVOYW1lIiwicHJvcHMiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiZ2V0VmFsdWUiLCJzdGF0ZSIsIl9oYW5kbGVSYWRpb0NoYW5nZSIsIm5ld1ZhbHVlIiwiX2dldFJhZGlvQ2hhbmdlSGFuZGxlciIsImtleSIsInJlbmRlclNlbGVjdFJhZGlvcyIsIm1hcCIsInZhbCIsImlkeCIsImxhYmVsIiwiaXNDaGVja2VkIiwiaTE4biIsInJlbmRlciIsImVycm9yIiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLG1CQUFtQjtBQUNyQkMsWUFBUSxDQUFDQyxlQUFELEVBQWdCQyxzQkFBaEIsQ0FEYTtBQUVyQjs7O0FBR0FDLGlCQUFhLGFBTFE7O0FBT3JCO0FBQ0FDLG1CQVJxQiw2QkFRSDtBQUNkLGVBQU87QUFDSEMsb0JBQVEsRUFETDtBQUVIQyxzQkFBVSxNQUZQO0FBR0hDLHNCQUFVLE9BSFA7QUFJSEMsc0JBQVU7QUFKUCxTQUFQO0FBTUgsS0Fmb0I7OztBQWlCckI7QUFDQUMsZUFBVztBQUNQSixnQkFBUSxxQkFBTSxPQUFOLENBREQ7QUFFUEssZUFBTyxxQkFBTSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLE9BQXJCLENBQU4sQ0FGQTtBQUdQSixrQkFBVSxxQkFBTSxRQUFOLENBSEg7QUFJUEMsa0JBQVUscUJBQU0sUUFBTixDQUpIO0FBS1BJLGtCQUFVLHFCQUFNLE1BQU4sQ0FMSDtBQU1QSCxrQkFBVSxxQkFBTSxNQUFOO0FBTkgsS0FsQlU7O0FBMkJyQjtBQUNBSSxtQkE1QnFCLDZCQTRCSDtBQUNkLGVBQU87QUFDSEMsd0JBQVksd0JBQVMsVUFBVCxDQURUO0FBRUhILG1CQUFPLEtBQUtJLEtBQUwsQ0FBV0o7QUFGZixTQUFQO0FBSUgsS0FqQ29CO0FBbUNyQkssc0JBbkNxQixnQ0FtQ0E7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsOEpBQWI7QUFDSCxLQXJDb0I7OztBQXVDckI7QUFDQUMsNkJBeENxQixxQ0F3Q0tDLFFBeENMLEVBd0NlO0FBQ2hDLGFBQUtDLFFBQUwsQ0FBYztBQUNWVixtQkFBT1MsU0FBU1Q7QUFETixTQUFkO0FBR0gsS0E1Q29COzs7QUE4Q3JCOzs7O0FBSUFXLFlBbERxQixzQkFrRFY7QUFDUCxlQUFPLEtBQUtDLEtBQUwsQ0FBV1osS0FBbEI7QUFDSCxLQXBEb0I7OztBQXNEckI7Ozs7QUFJQWEsc0JBMURxQiw4QkEwREZDLFFBMURFLEVBMERRO0FBQUEsWUFDakJiLFFBRGlCLEdBQ0osS0FBS0csS0FERCxDQUNqQkgsUUFEaUI7O0FBRXpCLFlBQUlBLFFBQUosRUFBYztBQUNWQSxxQkFBU2EsUUFBVDtBQUNBO0FBQ0g7QUFDRDtBQUNBLGFBQUtKLFFBQUwsQ0FBYyxFQUFFVixPQUFPYyxRQUFULEVBQWQ7QUFDSCxLQWxFb0I7O0FBbUVyQjs7Ozs7QUFLQUMsMEJBeEVxQixrQ0F3RUVDLEdBeEVGLEVBd0VPO0FBQUE7O0FBQ3hCLGVBQU8sWUFBTTtBQUNULGtCQUFLSCxrQkFBTCxDQUF3QkcsR0FBeEI7QUFDSCxTQUZEO0FBR0gsS0E1RW9COztBQTZFckI7Ozs7QUFJQUMsc0JBakZxQixnQ0FpRkE7QUFBQTs7QUFBQSxZQUNUZCxVQURTLEdBQ00sS0FBS1MsS0FEWCxDQUNUVCxVQURTOztBQUVqQixlQUFPLEtBQUtDLEtBQUwsQ0FBV1QsTUFBWCxDQUFrQnVCLEdBQWxCLENBQXNCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3ZDLGdCQUFNcEIsUUFBUW1CLElBQUksT0FBS2YsS0FBTCxDQUFXUixRQUFmLENBQWQ7QUFDQSxnQkFBTXlCLFFBQVFGLElBQUksT0FBS2YsS0FBTCxDQUFXUCxRQUFmLENBQWQ7QUFDQSxnQkFBTUMsV0FBVyxPQUFLTSxLQUFMLENBQVdOLFFBQTVCO0FBQ0EsZ0JBQU13QixZQUFZdEIsVUFBVSxPQUFLWSxLQUFMLENBQVdaLEtBQXZDO0FBQ0EsbUJBQ0ksOEJBQUMsZ0JBQUQsSUFBWSxLQUFLb0IsR0FBakIsRUFBc0IsT0FBTyxPQUFLRyxJQUFMLENBQVVGLEtBQVYsQ0FBN0IsRUFBK0MsTUFBTWxCLFVBQXJELEVBQWlFLFVBQVUsT0FBS1ksc0JBQUwsQ0FBNEJmLEtBQTVCLENBQTNFLEVBQStHLE9BQU9zQixTQUF0SCxFQUFpSSxVQUFVeEIsUUFBM0ksR0FESjtBQUdILFNBUk0sQ0FBUDtBQVNILEtBNUZvQjs7QUE2RnJCO0FBQ0EwQixVQTlGcUIsb0JBOEZaO0FBQUEsWUFDR0MsS0FESCxHQUNhLEtBQUtyQixLQURsQixDQUNHcUIsS0FESDs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLGNBQVcsY0FBaEIsRUFBK0IsY0FBWSxDQUFDQSxLQUE1QztBQUNLLGlCQUFLUixrQkFBTCxFQURMO0FBRUtRLHFCQUFTO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGFBQWYsRUFBNkIsS0FBSSxPQUFqQztBQUEwQ0E7QUFBMUM7QUFGZCxTQURKO0FBTUg7QUF0R29CLENBQXpCOztlQXlHNkIsdUJBQVFwQyxnQkFBUixDO0lBQXJCcUMsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZXMgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbmltcG9ydCBpMThuQmVoYXZpb3VyIGZyb20gJy4uLy4uL2kxOG4vbWl4aW4nO1xuaW1wb3J0IG1kbEJlaGF2aW91ciBmcm9tICcuLi8uLi9taXhpbi9tZGwtYmVoYXZpb3VyJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICdsb2Rhc2gvdXRpbGl0eS91bmlxdWVJZCc7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgSW5wdXRSYWRpbyB9IGZyb20gJy4uLy4uL2lucHV0L3JhZGlvJztcblxuY29uc3Qgc2VsZWN0UmFkaW9NaXhpbiA9IHtcbiAgICBtaXhpbnM6IFtpMThuQmVoYXZpb3VyLCBtZGxCZWhhdmlvdXJdLFxuICAgIC8qKlxuICAgICogVGFnIG5hbWUuXG4gICAgKi9cbiAgICBkaXNwbGF5TmFtZTogJ1NlbGVjdFJhZGlvJyxcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgICAgICB2YWx1ZUtleTogJ2NvZGUnLFxuICAgICAgICAgICAgbGFiZWxLZXk6ICdsYWJlbCcsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHZhbHVlczogdHlwZXMoJ2FycmF5JyksXG4gICAgICAgIHZhbHVlOiB0eXBlcyhbJ251bWJlcicsICdzdHJpbmcnLCAnYXJyYXknXSksXG4gICAgICAgIHZhbHVlS2V5OiB0eXBlcygnc3RyaW5nJyksXG4gICAgICAgIGxhYmVsS2V5OiB0eXBlcygnc3RyaW5nJyksXG4gICAgICAgIG9uQ2hhbmdlOiB0eXBlcygnZnVuYycpLFxuICAgICAgICBkaXNhYmxlZDogdHlwZXMoJ2Jvb2wnKVxuICAgIH0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bmlxdWVOYW1lOiB1bmlxdWVJZCgnb3B0aW9uc18nKSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIHYwLjE1OiB0aGUgXFwnc2VsZWN0LXJhZGlvXFwnIGNvbXBvbmVudCBmcm9tIFNhZ2Vzc0NvbXBvbmVudHMuY29tbW9uIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgU2FnZXNzQ29tcG9uZW50cy5jb21wb25lbnRzLnNlbGVjdC5TZWxlY3RSYWRpbycpO1xuICAgIH0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmFsdWU6IG5ld1Byb3BzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIHNlbGVjdCBpbiB0aGUgRE9NLlxuICAgICAqIEByZXR1cm4ge3N0cmluZywgbnVtYmVyfSBzZWxlY3RlZCB2YWx1ZVxuICAgICAqL1xuICAgIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBoYW5kbGUgY2xpY2sgb24gcmFkaW9cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCAtIHRoZSBjbGljayBldmVudFxuICAgICovXG4gICAgX2hhbmRsZVJhZGlvQ2hhbmdlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vU2V0IHRoZSBzdGF0ZSB0aGVuIGNhbGwgdGhlIGNoYW5nZSBoYW5kbGVyLlxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQ2xvc3VyZSB0byBjYXB0dXJlIGtleSBhbmQgcmFkaW8gc3RhdHVzLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5IHRoZSBrZXkgb2YgcmFkaW9cbiAgICAgKiBAcmV0dXJuIHtmdW5jfSBzdGF0dXMgY2xvc3VyZVxuICAgICAqL1xuICAgIF9nZXRSYWRpb0NoYW5nZUhhbmRsZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVSYWRpb0NoYW5nZShrZXkpO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgcmFkaW8gZm9yIGVhY2ggdmFsdWVzXG4gICAgKiBAcmV0dXJuIHtYTUx9IHRoZSBkaWZmZXJlbnQgcmFkaW8gdmFsdWVzXG4gICAgKi9cbiAgICByZW5kZXJTZWxlY3RSYWRpb3MoKSB7XG4gICAgICAgIGNvbnN0IHsgdW5pcXVlTmFtZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWVzLm1hcCgodmFsLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsW3RoaXMucHJvcHMudmFsdWVLZXldO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB2YWxbdGhpcy5wcm9wcy5sYWJlbEtleV07XG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMucHJvcHMuZGlzYWJsZWQ7XG4gICAgICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSB2YWx1ZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPElucHV0UmFkaW8ga2V5PXtpZHh9IGxhYmVsPXt0aGlzLmkxOG4obGFiZWwpfSBuYW1lPXt1bmlxdWVOYW1lfSBvbkNoYW5nZT17dGhpcy5fZ2V0UmFkaW9DaGFuZ2VIYW5kbGVyKHZhbHVlKX0gdmFsdWU9e2lzQ2hlY2tlZH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J3NlbGVjdC1yYWRpbycgZGF0YS12YWxpZD17IWVycm9yfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTZWxlY3RSYWRpb3MoKX1cbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9J2xhYmVsLWVycm9yJyByZWY9J2Vycm9yJz57ZXJyb3J9PC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKHNlbGVjdFJhZGlvTWl4aW4pO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=