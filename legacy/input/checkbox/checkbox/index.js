'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixin = require('../../../../common/i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _fieldGridBehaviour = require('../../../../common/mixin/field-grid-behaviour');

var _fieldGridBehaviour2 = _interopRequireDefault(_fieldGridBehaviour);

var _mdlBehaviour = require('../../../../common/mixin/mdl-behaviour');

var _mdlBehaviour2 = _interopRequireDefault(_mdlBehaviour);

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkBoxMixin = {
    mixins: [_mixin2.default, _fieldGridBehaviour2.default, _mdlBehaviour2.default],

    /**
    * Tag name.
    */
    displayName: 'input-checkbox',

    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            value: false
        };
    },

    /**
    * Properties validation.
    * @type {Object}
    */
    propTypes: {
        value: (0, _types2.default)('bool'),
        label: (0, _types2.default)('string'),
        onChange: (0, _types2.default)('func')
    },
    /** @inheritdoc */
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        this.setState({ isChecked: newProps.value });
    },

    /** @inheritDoc */
    getInitialState: function getInitialState() {
        var value = this.props.value;

        return {
            isChecked: (0, _isUndefined2.default)(value) ? false : value
        };
    },

    /**
    * Executed actions on change event.
    * @param  {event} event
    */
    _onChange: function _onChange() {
        var _this = this;

        this.setState({
            isChecked: !this.state.isChecked
        }, function () {
            if (_this.props.onChange) {
                _this.props.onChange(_this.state.isChecked);
            }
        });
    },

    /**
    * Get the value from the input in  the DOM.
    * @returns The DOM node value.
    */
    getValue: function getValue() {
        return this.state.isChecked;
    },

    /**
    * Render the Checkbox HTML.
    * @return {VirtualDOM} - The virtual DOM of the checkbox.
    */
    render: function render() {
        var isChecked = this.state.isChecked;
        var label = this.props.label;

        var checkedProps = isChecked ? { checked: 'checked' } : {};
        var inputProps = Object.assign({ className: 'mdl-checkbox__input', onChange: this._onChange, type: 'checkbox' }, checkedProps);
        return _react2.default.createElement(
            'label',
            { className: 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect', 'data-focus': 'input-checkbox' },
            _react2.default.createElement('input', inputProps),
            label && _react2.default.createElement(
                'span',
                { className: 'mdl-checkbox__label' },
                this.i18n(label)
            )
        );
    }
};

exports.default = (0, _builder2.default)(checkBoxMixin);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY2hlY2tCb3hNaXhpbiIsIm1peGlucyIsImkxOG5CZWhhdmlvdXIiLCJmaWVsZEdyaWRCZWhhdmlvdXIiLCJtZGxCZWhhdmlvdXIiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInZhbHVlIiwicHJvcFR5cGVzIiwibGFiZWwiLCJvbkNoYW5nZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiaXNDaGVja2VkIiwiZ2V0SW5pdGlhbFN0YXRlIiwicHJvcHMiLCJfb25DaGFuZ2UiLCJzdGF0ZSIsImdldFZhbHVlIiwicmVuZGVyIiwiY2hlY2tlZFByb3BzIiwiY2hlY2tlZCIsImlucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaTE4biJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGdCQUFnQjtBQUNsQkMsWUFBUSxDQUFDQyxlQUFELEVBQWdCQyw0QkFBaEIsRUFBb0NDLHNCQUFwQyxDQURVOztBQUdsQjs7O0FBR0FDLGlCQUFhLGdCQU5LOztBQVFsQjtBQUNBQyxtQkFUa0IsNkJBU0E7QUFDZCxlQUFPO0FBQ0hDLG1CQUFPO0FBREosU0FBUDtBQUdILEtBYmlCOztBQWNsQjs7OztBQUlBQyxlQUFXO0FBQ1BELGVBQU8scUJBQU0sTUFBTixDQURBO0FBRVBFLGVBQU8scUJBQU0sUUFBTixDQUZBO0FBR1BDLGtCQUFVLHFCQUFNLE1BQU47QUFISCxLQWxCTztBQXVCbEI7QUFDQUMsNkJBeEJrQixxQ0F3QlFDLFFBeEJSLEVBd0JrQjtBQUNoQyxhQUFLQyxRQUFMLENBQWMsRUFBRUMsV0FBV0YsU0FBU0wsS0FBdEIsRUFBZDtBQUNILEtBMUJpQjs7QUEyQmxCO0FBQ0FRLG1CQTVCa0IsNkJBNEJBO0FBQUEsWUFDTlIsS0FETSxHQUNJLEtBQUtTLEtBRFQsQ0FDTlQsS0FETTs7QUFFZCxlQUFPO0FBQ0hPLHVCQUFXLDJCQUFZUCxLQUFaLElBQXFCLEtBQXJCLEdBQTZCQTtBQURyQyxTQUFQO0FBR0gsS0FqQ2lCOztBQWtDbEI7Ozs7QUFJQVUsYUF0Q2tCLHVCQXNDTjtBQUFBOztBQUNSLGFBQUtKLFFBQUwsQ0FBYztBQUNWQyx1QkFBVyxDQUFDLEtBQUtJLEtBQUwsQ0FBV0o7QUFEYixTQUFkLEVBRUcsWUFBTTtBQUNMLGdCQUFJLE1BQUtFLEtBQUwsQ0FBV04sUUFBZixFQUF5QjtBQUNyQixzQkFBS00sS0FBTCxDQUFXTixRQUFYLENBQW9CLE1BQUtRLEtBQUwsQ0FBV0osU0FBL0I7QUFDSDtBQUNKLFNBTkQ7QUFPSCxLQTlDaUI7O0FBK0NsQjs7OztBQUlBSyxZQW5Ea0Isc0JBbURQO0FBQ1AsZUFBTyxLQUFLRCxLQUFMLENBQVdKLFNBQWxCO0FBQ0gsS0FyRGlCOztBQXNEbEI7Ozs7QUFJQU0sVUExRGtCLG9CQTBEVDtBQUFBLFlBQ0dOLFNBREgsR0FDaUIsS0FBS0ksS0FEdEIsQ0FDR0osU0FESDtBQUFBLFlBRUdMLEtBRkgsR0FFYSxLQUFLTyxLQUZsQixDQUVHUCxLQUZIOztBQUdMLFlBQU1ZLGVBQWVQLFlBQVksRUFBRVEsU0FBUyxTQUFYLEVBQVosR0FBcUMsRUFBMUQ7QUFDQSxZQUFNQywyQkFBa0IsRUFBRUMsV0FBVyxxQkFBYixFQUFvQ2QsVUFBVSxLQUFLTyxTQUFuRCxFQUE4RFEsTUFBTSxVQUFwRSxFQUFsQixFQUF1R0osWUFBdkcsQ0FBTjtBQUNBLGVBQ0k7QUFBQTtBQUFBLGNBQU8sV0FBVSxtREFBakIsRUFBcUUsY0FBVyxnQkFBaEY7QUFDSSxtREFBV0UsVUFBWCxDQURKO0FBRUtkLHFCQUNHO0FBQUE7QUFBQSxrQkFBTSxXQUFVLHFCQUFoQjtBQUF1QyxxQkFBS2lCLElBQUwsQ0FBVWpCLEtBQVY7QUFBdkM7QUFIUixTQURKO0FBUUg7QUF2RWlCLENBQXRCOztrQkEwRWUsdUJBQVFULGFBQVIsQyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHR5cGVzIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC90eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGkxOG5CZWhhdmlvdXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2kxOG4vbWl4aW4nO1xuaW1wb3J0IGZpZWxkR3JpZEJlaGF2aW91ciBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbWl4aW4vZmllbGQtZ3JpZC1iZWhhdmlvdXInO1xuaW1wb3J0IG1kbEJlaGF2aW91ciBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vbWl4aW4vbWRsLWJlaGF2aW91cic7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnbG9kYXNoL2xhbmcvaXNVbmRlZmluZWQnO1xuXG5jb25zdCBjaGVja0JveE1peGluID0ge1xuICAgIG1peGluczogW2kxOG5CZWhhdmlvdXIsIGZpZWxkR3JpZEJlaGF2aW91ciwgbWRsQmVoYXZpb3VyXSxcblxuICAgIC8qKlxuICAgICogVGFnIG5hbWUuXG4gICAgKi9cbiAgICBkaXNwbGF5TmFtZTogJ2lucHV0LWNoZWNrYm94JyxcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBQcm9wZXJ0aWVzIHZhbGlkYXRpb24uXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHZhbHVlOiB0eXBlcygnYm9vbCcpLFxuICAgICAgICBsYWJlbDogdHlwZXMoJ3N0cmluZycpLFxuICAgICAgICBvbkNoYW5nZTogdHlwZXMoJ2Z1bmMnKVxuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNDaGVja2VkOiBuZXdQcm9wcy52YWx1ZSB9KTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzQ2hlY2tlZDogaXNVbmRlZmluZWQodmFsdWUpID8gZmFsc2UgOiB2YWx1ZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBFeGVjdXRlZCBhY3Rpb25zIG9uIGNoYW5nZSBldmVudC5cbiAgICAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICAgICovXG4gICAgX29uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQ2hlY2tlZDogIXRoaXMuc3RhdGUuaXNDaGVja2VkXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmlzQ2hlY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIGlucHV0IGluICB0aGUgRE9NLlxuICAgICogQHJldHVybnMgVGhlIERPTSBub2RlIHZhbHVlLlxuICAgICovXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmlzQ2hlY2tlZDtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBDaGVja2JveCBIVE1MLlxuICAgICogQHJldHVybiB7VmlydHVhbERPTX0gLSBUaGUgdmlydHVhbCBET00gb2YgdGhlIGNoZWNrYm94LlxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzQ2hlY2tlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY2hlY2tlZFByb3BzID0gaXNDaGVja2VkID8geyBjaGVja2VkOiAnY2hlY2tlZCcgfSA6IHt9O1xuICAgICAgICBjb25zdCBpbnB1dFByb3BzID0geyAuLi57IGNsYXNzTmFtZTogJ21kbC1jaGVja2JveF9faW5wdXQnLCBvbkNoYW5nZTogdGhpcy5fb25DaGFuZ2UsIHR5cGU6ICdjaGVja2JveCcgfSwgLi4uY2hlY2tlZFByb3BzIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0JyBkYXRhLWZvY3VzPSdpbnB1dC1jaGVja2JveCc+XG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5pbnB1dFByb3BzfSAvPlxuICAgICAgICAgICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWRsLWNoZWNrYm94X19sYWJlbCc+e3RoaXMuaTE4bihsYWJlbCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkZXIoY2hlY2tCb3hNaXhpbik7XG4iXX0=