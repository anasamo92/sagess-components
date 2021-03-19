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

var _checkbox = require('../../../components/input/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _mixin = require('../../i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _pull = require('lodash/array/pull');

var _pull2 = _interopRequireDefault(_pull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectCheckboxMixin = {
    mixins: [_mixin2.default],
    /**
    * Tag name.
    */
    displayName: 'SelectCheckbox',

    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            values: [], // all values
            value: [], // selected values list
            valueKey: 'value', // key for the displayed value
            labelKey: 'label' // key for the displayed label
        };
    },

    /** @inheritdoc */
    propTypes: function propTypes() {
        return {
            values: (0, _types2.default)('array'),
            value: (0, _types2.default)('array'),
            valueKey: (0, _types2.default)('string'),
            labelKey: (0, _types2.default)('string'),
            onChange: (0, _types2.default)('func')
        };
    },


    /** @inheritdoc */
    getInitialState: function getInitialState() {
        return {
            selectedValues: this.props.value
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents v0.15: the \'select-checkbox\' component from SagessComponents.common is deprecated, please use SagessComponents.components.select.SelectCheckbox');
    },


    /** @inheritdoc */
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        if (newProps) {
            this.setState({ selectedValues: newProps.value });
        }
    },


    /**
    * Get the value from the select in the DOM.
    * @return {string} value
    */
    getValue: function getValue() {
        return this.state.selectedValues;
    },


    /**
     * Handle a change of value.
     * @param  {[type]} key       the key
     * @param  {[type]} newStatus the new status
     */
    _handleCheckboxChange: function _handleCheckboxChange(key, newStatus) {
        if (this.props.onChange) {
            this.props.onChange(key, newStatus);
            return;
        }
        var selectedValues = this.state.selectedValues;
        if (newStatus) {
            selectedValues.push(key);
        } else {
            (0, _pull2.default)(selectedValues, key);
        }
        this.setState({ value: selectedValues });
    },

    /**
     * Closure to capture key and checbox status.
     * @param  {[type]} key the key of checkbox
     * @return {[type]} status closure
     */
    _getCheckboxChangeHandler: function _getCheckboxChangeHandler(key) {
        var _this = this;

        return function (status) {
            _this._handleCheckboxChange(key, status);
        };
    },

    /**
     * Render all selection checkbox.
     * @return {ReactDOMNode} list of ReactDomNode
     */
    renderCheckboxes: function renderCheckboxes() {
        var _this2 = this;

        return this.props.values.map(function (val, idx) {
            var value = val[_this2.props.valueKey];
            var label = val[_this2.props.labelKey];
            var isChecked = 0 <= _this2.state.selectedValues.indexOf(value);
            return _react2.default.createElement(_checkbox2.default, { key: idx, label: _this2.i18n(label), onChange: _this2._getCheckboxChangeHandler(value), value: isChecked });
        });
    },


    /** @inheritdoc */
    render: function render() {
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'select-checkbox' },
            this.renderCheckboxes()
        );
    }
};

var _builder = (0, _builder3.default)(selectCheckboxMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsic2VsZWN0Q2hlY2tib3hNaXhpbiIsIm1peGlucyIsImkxOG5CZWhhdmlvdXIiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInZhbHVlcyIsInZhbHVlIiwidmFsdWVLZXkiLCJsYWJlbEtleSIsInByb3BUeXBlcyIsIm9uQ2hhbmdlIiwiZ2V0SW5pdGlhbFN0YXRlIiwic2VsZWN0ZWRWYWx1ZXMiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJnZXRWYWx1ZSIsInN0YXRlIiwiX2hhbmRsZUNoZWNrYm94Q2hhbmdlIiwia2V5IiwibmV3U3RhdHVzIiwicHVzaCIsIl9nZXRDaGVja2JveENoYW5nZUhhbmRsZXIiLCJzdGF0dXMiLCJyZW5kZXJDaGVja2JveGVzIiwibWFwIiwidmFsIiwiaWR4IiwibGFiZWwiLCJpc0NoZWNrZWQiLCJpbmRleE9mIiwiaTE4biIsInJlbmRlciIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxzQkFBc0I7QUFDeEJDLFlBQVEsQ0FBQ0MsZUFBRCxDQURnQjtBQUV4Qjs7O0FBR0FDLGlCQUFhLGdCQUxXOztBQU94QjtBQUNBQyxtQkFSd0IsNkJBUU47QUFDZCxlQUFPO0FBQ0hDLG9CQUFRLEVBREwsRUFDUztBQUNaQyxtQkFBTyxFQUZKLEVBRVE7QUFDWEMsc0JBQVUsT0FIUCxFQUdnQjtBQUNuQkMsc0JBQVUsT0FKUCxDQUllO0FBSmYsU0FBUDtBQU1ILEtBZnVCOztBQWdCeEI7QUFDQUMsYUFqQndCLHVCQWlCWjtBQUNSLGVBQU87QUFDSEosb0JBQVEscUJBQU0sT0FBTixDQURMO0FBRUhDLG1CQUFPLHFCQUFNLE9BQU4sQ0FGSjtBQUdIQyxzQkFBVSxxQkFBTSxRQUFOLENBSFA7QUFJSEMsc0JBQVUscUJBQU0sUUFBTixDQUpQO0FBS0hFLHNCQUFVLHFCQUFNLE1BQU47QUFMUCxTQUFQO0FBT0gsS0F6QnVCOzs7QUEyQnhCO0FBQ0FDLG1CQTVCd0IsNkJBNEJOO0FBQ2QsZUFBTztBQUNIQyw0QkFBZ0IsS0FBS0MsS0FBTCxDQUFXUDtBQUR4QixTQUFQO0FBR0gsS0FoQ3VCO0FBa0N4QlEsc0JBbEN3QixnQ0FrQ0g7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsb0tBQWI7QUFDSCxLQXBDdUI7OztBQXNDeEI7QUFDQUMsNkJBdkN3QixxQ0F1Q0VDLFFBdkNGLEVBdUNZO0FBQ2hDLFlBQUlBLFFBQUosRUFBYztBQUNWLGlCQUFLQyxRQUFMLENBQWMsRUFBRVAsZ0JBQWdCTSxTQUFTWixLQUEzQixFQUFkO0FBQ0g7QUFDSixLQTNDdUI7OztBQTZDeEI7Ozs7QUFJQWMsWUFqRHdCLHNCQWlEYjtBQUNQLGVBQU8sS0FBS0MsS0FBTCxDQUFXVCxjQUFsQjtBQUNILEtBbkR1Qjs7O0FBcUR4Qjs7Ozs7QUFLQVUseUJBMUR3QixpQ0EwREZDLEdBMURFLEVBMERHQyxTQTFESCxFQTBEYztBQUNsQyxZQUFJLEtBQUtYLEtBQUwsQ0FBV0gsUUFBZixFQUF5QjtBQUNyQixpQkFBS0csS0FBTCxDQUFXSCxRQUFYLENBQW9CYSxHQUFwQixFQUF5QkMsU0FBekI7QUFDQTtBQUNIO0FBQ0QsWUFBTVosaUJBQWlCLEtBQUtTLEtBQUwsQ0FBV1QsY0FBbEM7QUFDQSxZQUFJWSxTQUFKLEVBQWU7QUFDWFosMkJBQWVhLElBQWYsQ0FBb0JGLEdBQXBCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZ0NBQUtYLGNBQUwsRUFBcUJXLEdBQXJCO0FBQ0g7QUFDRCxhQUFLSixRQUFMLENBQWMsRUFBRWIsT0FBT00sY0FBVCxFQUFkO0FBQ0gsS0F0RXVCOztBQXVFeEI7Ozs7O0FBS0FjLDZCQTVFd0IscUNBNEVFSCxHQTVFRixFQTRFTztBQUFBOztBQUMzQixlQUFPLFVBQUNJLE1BQUQsRUFBWTtBQUNmLGtCQUFLTCxxQkFBTCxDQUEyQkMsR0FBM0IsRUFBZ0NJLE1BQWhDO0FBQ0gsU0FGRDtBQUdILEtBaEZ1Qjs7QUFpRnhCOzs7O0FBSUFDLG9CQXJGd0IsOEJBcUZMO0FBQUE7O0FBQ2YsZUFBTyxLQUFLZixLQUFMLENBQVdSLE1BQVgsQ0FBa0J3QixHQUFsQixDQUFzQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN2QyxnQkFBTXpCLFFBQVF3QixJQUFJLE9BQUtqQixLQUFMLENBQVdOLFFBQWYsQ0FBZDtBQUNBLGdCQUFNeUIsUUFBUUYsSUFBSSxPQUFLakIsS0FBTCxDQUFXTCxRQUFmLENBQWQ7QUFDQSxnQkFBTXlCLFlBQVksS0FBSyxPQUFLWixLQUFMLENBQVdULGNBQVgsQ0FBMEJzQixPQUExQixDQUFrQzVCLEtBQWxDLENBQXZCO0FBQ0EsbUJBQ0ksOEJBQUMsa0JBQUQsSUFBVSxLQUFLeUIsR0FBZixFQUFvQixPQUFPLE9BQUtJLElBQUwsQ0FBVUgsS0FBVixDQUEzQixFQUE2QyxVQUFVLE9BQUtOLHlCQUFMLENBQStCcEIsS0FBL0IsQ0FBdkQsRUFBOEYsT0FBTzJCLFNBQXJHLEdBREo7QUFHSCxTQVBNLENBQVA7QUFRSCxLQTlGdUI7OztBQWdHeEI7QUFDQUcsVUFqR3dCLG9CQWlHZjtBQUNMLGVBQ0k7QUFBQTtBQUFBLGNBQUssY0FBVyxpQkFBaEI7QUFDSyxpQkFBS1IsZ0JBQUw7QUFETCxTQURKO0FBS0g7QUF2R3VCLENBQTVCOztlQTBHNkIsdUJBQVE1QixtQkFBUixDO0lBQXJCcUMsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCB0eXBlcyBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2lucHV0L2NoZWNrYm94JztcbmltcG9ydCBpMThuQmVoYXZpb3VyIGZyb20gJy4uLy4uL2kxOG4vbWl4aW4nO1xuaW1wb3J0IHB1bGwgZnJvbSAnbG9kYXNoL2FycmF5L3B1bGwnXG5cbmNvbnN0IHNlbGVjdENoZWNrYm94TWl4aW4gPSB7XG4gICAgbWl4aW5zOiBbaTE4bkJlaGF2aW91cl0sXG4gICAgLyoqXG4gICAgKiBUYWcgbmFtZS5cbiAgICAqL1xuICAgIGRpc3BsYXlOYW1lOiAnU2VsZWN0Q2hlY2tib3gnLFxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWVzOiBbXSwgLy8gYWxsIHZhbHVlc1xuICAgICAgICAgICAgdmFsdWU6IFtdLCAvLyBzZWxlY3RlZCB2YWx1ZXMgbGlzdFxuICAgICAgICAgICAgdmFsdWVLZXk6ICd2YWx1ZScsIC8vIGtleSBmb3IgdGhlIGRpc3BsYXllZCB2YWx1ZVxuICAgICAgICAgICAgbGFiZWxLZXk6ICdsYWJlbCcgLy8ga2V5IGZvciB0aGUgZGlzcGxheWVkIGxhYmVsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwcm9wVHlwZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHR5cGVzKCdhcnJheScpLFxuICAgICAgICAgICAgdmFsdWU6IHR5cGVzKCdhcnJheScpLFxuICAgICAgICAgICAgdmFsdWVLZXk6IHR5cGVzKCdzdHJpbmcnKSxcbiAgICAgICAgICAgIGxhYmVsS2V5OiB0eXBlcygnc3RyaW5nJyksXG4gICAgICAgICAgICBvbkNoYW5nZTogdHlwZXMoJ2Z1bmMnKVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlczogdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyB2MC4xNTogdGhlIFxcJ3NlbGVjdC1jaGVja2JveFxcJyBjb21wb25lbnQgZnJvbSBTYWdlc3NDb21wb25lbnRzLmNvbW1vbiBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFNhZ2Vzc0NvbXBvbmVudHMuY29tcG9uZW50cy5zZWxlY3QuU2VsZWN0Q2hlY2tib3gnKTtcbiAgICB9LFxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICBpZiAobmV3UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFZhbHVlczogbmV3UHJvcHMudmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIHNlbGVjdCBpbiB0aGUgRE9NLlxuICAgICogQHJldHVybiB7c3RyaW5nfSB2YWx1ZVxuICAgICovXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWVzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYSBjaGFuZ2Ugb2YgdmFsdWUuXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSBrZXkgICAgICAgdGhlIGtleVxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gbmV3U3RhdHVzIHRoZSBuZXcgc3RhdHVzXG4gICAgICovXG4gICAgX2hhbmRsZUNoZWNrYm94Q2hhbmdlKGtleSwgbmV3U3RhdHVzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGtleSwgbmV3U3RhdHVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZXM7XG4gICAgICAgIGlmIChuZXdTdGF0dXMpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzLnB1c2goa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHB1bGwoc2VsZWN0ZWRWYWx1ZXMsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBzZWxlY3RlZFZhbHVlcyB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENsb3N1cmUgdG8gY2FwdHVyZSBrZXkgYW5kIGNoZWNib3ggc3RhdHVzLlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0ga2V5IHRoZSBrZXkgb2YgY2hlY2tib3hcbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IHN0YXR1cyBjbG9zdXJlXG4gICAgICovXG4gICAgX2dldENoZWNrYm94Q2hhbmdlSGFuZGxlcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNoZWNrYm94Q2hhbmdlKGtleSwgc3RhdHVzKTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhbGwgc2VsZWN0aW9uIGNoZWNrYm94LlxuICAgICAqIEByZXR1cm4ge1JlYWN0RE9NTm9kZX0gbGlzdCBvZiBSZWFjdERvbU5vZGVcbiAgICAgKi9cbiAgICByZW5kZXJDaGVja2JveGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZXMubWFwKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWxbdGhpcy5wcm9wcy52YWx1ZUtleV07XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHZhbFt0aGlzLnByb3BzLmxhYmVsS2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IDAgPD0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGtleT17aWR4fSBsYWJlbD17dGhpcy5pMThuKGxhYmVsKX0gb25DaGFuZ2U9e3RoaXMuX2dldENoZWNrYm94Q2hhbmdlSGFuZGxlcih2YWx1ZSl9IHZhbHVlPXtpc0NoZWNrZWR9IC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdzZWxlY3QtY2hlY2tib3gnPlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoZWNrYm94ZXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihzZWxlY3RDaGVja2JveE1peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19