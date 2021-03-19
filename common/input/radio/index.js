'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _mixin = require('../../i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _fieldGridBehaviour = require('../../mixin/field-grid-behaviour');

var _fieldGridBehaviour2 = _interopRequireDefault(_fieldGridBehaviour);

var _mdlBehaviour = require('../../mixin/mdl-behaviour');

var _mdlBehaviour2 = _interopRequireDefault(_mdlBehaviour);

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var radioMixin = {
    mixins: [_mixin2.default, _fieldGridBehaviour2.default, _mdlBehaviour2.default],
    /**
    * Tag name.
    */
    displayName: 'input-radio',

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
        label: (0, _types2.default)('string').isRequired,
        name: (0, _types2.default)('string'),
        value: (0, _types2.default)('bool'),
        onChange: (0, _types2.default)('func')
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/input/select-radio instead');
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
    componentDidUpdate: function componentDidUpdate() {
        var inputMdl = this.refs.inputMdl;
        var isChecked = this.state.isChecked;

        if (inputMdl) {
            var classList = inputMdl.classList;

            if (isChecked === true) classList.add('is-checked');
            if (isChecked === false) classList.remove('is-checked');
        }
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

        var _props = this.props,
            label = _props.label,
            name = _props.name,
            otherProps = _objectWithoutProperties(_props, ['label', 'name']);
        // we use inputProps to be able to display 'checked' property. it is required to be able to use MDL.


        var checkedProps = isChecked ? { checked: 'checked' } : {};
        var inputProps = Object.assign({ className: 'mdl-radio__button', name: name, onChange: this._onChange, type: 'radio' }, checkedProps, otherProps);

        return _react2.default.createElement(
            'label',
            { className: 'mdl-radio mdl-js-radio mdl-js-ripple-effect', 'data-focus': 'input-radio', ref: 'inputMdl' },
            _react2.default.createElement('input', inputProps),
            _react2.default.createElement(
                'span',
                { className: 'mdl-radio__label' },
                this.i18n(label)
            )
        );
    }
};

var _builder = (0, _builder3.default)(radioMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicmFkaW9NaXhpbiIsIm1peGlucyIsImkxOG5CZWhhdmlvdXIiLCJmaWVsZEdyaWRCZWhhdmlvdXJNaXhpbiIsIm1kbEJlaGF2aW91ciIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJsYWJlbCIsImlzUmVxdWlyZWQiLCJuYW1lIiwib25DaGFuZ2UiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwiaXNDaGVja2VkIiwiZ2V0SW5pdGlhbFN0YXRlIiwicHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJpbnB1dE1kbCIsInJlZnMiLCJzdGF0ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIl9vbkNoYW5nZSIsImdldFZhbHVlIiwicmVuZGVyIiwib3RoZXJQcm9wcyIsImNoZWNrZWRQcm9wcyIsImNoZWNrZWQiLCJpbnB1dFByb3BzIiwiY2xhc3NOYW1lIiwidHlwZSIsImkxOG4iLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWE7QUFDZkMsWUFBUSxDQUFDQyxlQUFELEVBQWdCQyw0QkFBaEIsRUFBeUNDLHNCQUF6QyxDQURPO0FBRWY7OztBQUdBQyxpQkFBYSxhQUxFOztBQU9mO0FBQ0FDLG1CQVJlLDZCQVFHO0FBQ2QsZUFBTztBQUNIQyxtQkFBTztBQURKLFNBQVA7QUFHSCxLQVpjOztBQWFmOzs7O0FBSUFDLGVBQVc7QUFDUEMsZUFBTyxxQkFBTSxRQUFOLEVBQWdCQyxVQURoQjtBQUVQQyxjQUFNLHFCQUFNLFFBQU4sQ0FGQztBQUdQSixlQUFPLHFCQUFNLE1BQU4sQ0FIQTtBQUlQSyxrQkFBVSxxQkFBTSxNQUFOO0FBSkgsS0FqQkk7QUF1QmZDLHNCQXZCZSxnQ0F1Qk07QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsMEhBQWI7QUFDSCxLQXpCYzs7QUEwQmY7QUFDQUMsNkJBM0JlLHFDQTJCV0MsUUEzQlgsRUEyQnFCO0FBQ2hDLGFBQUtDLFFBQUwsQ0FBYyxFQUFFQyxXQUFXRixTQUFTVixLQUF0QixFQUFkO0FBQ0gsS0E3QmM7O0FBOEJmO0FBQ0FhLG1CQS9CZSw2QkErQkc7QUFBQSxZQUNOYixLQURNLEdBQ0ksS0FBS2MsS0FEVCxDQUNOZCxLQURNOztBQUVkLGVBQU87QUFDSFksdUJBQVcsMkJBQVlaLEtBQVosSUFBcUIsS0FBckIsR0FBNkJBO0FBRHJDLFNBQVA7QUFHSCxLQXBDYztBQXFDZmUsc0JBckNlLGdDQXFDTTtBQUFBLFlBQ1RDLFFBRFMsR0FDSSxLQUFLQyxJQURULENBQ1RELFFBRFM7QUFBQSxZQUVUSixTQUZTLEdBRUssS0FBS00sS0FGVixDQUVUTixTQUZTOztBQUdqQixZQUFJSSxRQUFKLEVBQWM7QUFBQSxnQkFDRkcsU0FERSxHQUNZSCxRQURaLENBQ0ZHLFNBREU7O0FBRVYsZ0JBQUlQLGNBQWMsSUFBbEIsRUFBd0JPLFVBQVVDLEdBQVYsQ0FBYyxZQUFkO0FBQ3hCLGdCQUFJUixjQUFjLEtBQWxCLEVBQXlCTyxVQUFVRSxNQUFWLENBQWlCLFlBQWpCO0FBQzVCO0FBQ0osS0E3Q2M7O0FBOENmOzs7O0FBSUFDLGFBbERlLHVCQWtESDtBQUFBOztBQUNSLGFBQUtYLFFBQUwsQ0FBYztBQUNWQyx1QkFBVyxDQUFDLEtBQUtNLEtBQUwsQ0FBV047QUFEYixTQUFkLEVBRUcsWUFBTTtBQUNMLGdCQUFJLE1BQUtFLEtBQUwsQ0FBV1QsUUFBZixFQUF5QjtBQUNyQixzQkFBS1MsS0FBTCxDQUFXVCxRQUFYLENBQW9CLE1BQUthLEtBQUwsQ0FBV04sU0FBL0I7QUFDSDtBQUNKLFNBTkQ7QUFPSCxLQTFEYzs7QUEyRGY7Ozs7QUFJQVcsWUEvRGUsc0JBK0RKO0FBQ1AsZUFBTyxLQUFLTCxLQUFMLENBQVdOLFNBQWxCO0FBQ0gsS0FqRWM7O0FBa0VmOzs7O0FBSUFZLFVBdEVlLG9CQXNFTjtBQUFBLFlBQ0daLFNBREgsR0FDaUIsS0FBS00sS0FEdEIsQ0FDR04sU0FESDs7QUFBQSxxQkFFa0MsS0FBS0UsS0FGdkM7QUFBQSxZQUVHWixLQUZILFVBRUdBLEtBRkg7QUFBQSxZQUVVRSxJQUZWLFVBRVVBLElBRlY7QUFBQSxZQUVtQnFCLFVBRm5CO0FBR0w7OztBQUNBLFlBQU1DLGVBQWVkLFlBQVksRUFBRWUsU0FBUyxTQUFYLEVBQVosR0FBcUMsRUFBMUQ7QUFDQSxZQUFNQywyQkFBa0IsRUFBRUMsV0FBVyxtQkFBYixFQUFrQ3pCLE1BQU1BLElBQXhDLEVBQThDQyxVQUFVLEtBQUtpQixTQUE3RCxFQUF3RVEsTUFBTSxPQUE5RSxFQUFsQixFQUE4R0osWUFBOUcsRUFBK0hELFVBQS9ILENBQU47O0FBRUEsZUFDSTtBQUFBO0FBQUEsY0FBTyxXQUFVLDZDQUFqQixFQUErRCxjQUFXLGFBQTFFLEVBQXdGLEtBQUksVUFBNUY7QUFDSSxtREFBV0csVUFBWCxDQURKO0FBRUk7QUFBQTtBQUFBLGtCQUFNLFdBQVUsa0JBQWhCO0FBQW9DLHFCQUFLRyxJQUFMLENBQVU3QixLQUFWO0FBQXBDO0FBRkosU0FESjtBQU1IO0FBbkZjLENBQW5COztlQXNGNkIsdUJBQVFULFVBQVIsQztJQUFyQnVDLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHR5cGVzIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC90eXBlcyc7XG5pbXBvcnQgaTE4bkJlaGF2aW91ciBmcm9tICcuLi8uLi9pMThuL21peGluJztcbmltcG9ydCBmaWVsZEdyaWRCZWhhdmlvdXJNaXhpbiBmcm9tICcuLi8uLi9taXhpbi9maWVsZC1ncmlkLWJlaGF2aW91cic7XG5pbXBvcnQgbWRsQmVoYXZpb3VyIGZyb20gJy4uLy4uL21peGluL21kbC1iZWhhdmlvdXInO1xuaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJ2xvZGFzaC9sYW5nL2lzVW5kZWZpbmVkJztcblxuY29uc3QgcmFkaW9NaXhpbiA9IHtcbiAgICBtaXhpbnM6IFtpMThuQmVoYXZpb3VyLCBmaWVsZEdyaWRCZWhhdmlvdXJNaXhpbiwgbWRsQmVoYXZpb3VyXSxcbiAgICAvKipcbiAgICAqIFRhZyBuYW1lLlxuICAgICovXG4gICAgZGlzcGxheU5hbWU6ICdpbnB1dC1yYWRpbycsXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUHJvcGVydGllcyB2YWxpZGF0aW9uLlxuICAgICogQHR5cGUge09iamVjdH1cbiAgICAqL1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBsYWJlbDogdHlwZXMoJ3N0cmluZycpLmlzUmVxdWlyZWQsXG4gICAgICAgIG5hbWU6IHR5cGVzKCdzdHJpbmcnKSxcbiAgICAgICAgdmFsdWU6IHR5cGVzKCdib29sJyksXG4gICAgICAgIG9uQ2hhbmdlOiB0eXBlcygnZnVuYycpXG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAyLjIuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBzYWdlc3MtY29tcG9uZW50cy9jb21wb25lbnRzL2lucHV0L3NlbGVjdC1yYWRpbyBpbnN0ZWFkJyk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0NoZWNrZWQ6IG5ld1Byb3BzLnZhbHVlIH0pO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNDaGVja2VkOiBpc1VuZGVmaW5lZCh2YWx1ZSkgPyBmYWxzZSA6IHZhbHVlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXRNZGwgfSA9IHRoaXMucmVmcztcbiAgICAgICAgY29uc3QgeyBpc0NoZWNrZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChpbnB1dE1kbCkge1xuICAgICAgICAgICAgY29uc3QgeyBjbGFzc0xpc3QgfSA9IGlucHV0TWRsO1xuICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCA9PT0gdHJ1ZSkgY2xhc3NMaXN0LmFkZCgnaXMtY2hlY2tlZCcpO1xuICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCA9PT0gZmFsc2UpIGNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBFeGVjdXRlZCBhY3Rpb25zIG9uIGNoYW5nZSBldmVudC5cbiAgICAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICAgICovXG4gICAgX29uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQ2hlY2tlZDogIXRoaXMuc3RhdGUuaXNDaGVja2VkXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmlzQ2hlY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIGlucHV0IGluICB0aGUgRE9NLlxuICAgICogQHJldHVybnMgVGhlIERPTSBub2RlIHZhbHVlLlxuICAgICovXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmlzQ2hlY2tlZDtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBDaGVja2JveCBIVE1MLlxuICAgICogQHJldHVybiB7VmlydHVhbERPTX0gLSBUaGUgdmlydHVhbCBET00gb2YgdGhlIGNoZWNrYm94LlxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzQ2hlY2tlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgbmFtZSwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgLy8gd2UgdXNlIGlucHV0UHJvcHMgdG8gYmUgYWJsZSB0byBkaXNwbGF5ICdjaGVja2VkJyBwcm9wZXJ0eS4gaXQgaXMgcmVxdWlyZWQgdG8gYmUgYWJsZSB0byB1c2UgTURMLlxuICAgICAgICBjb25zdCBjaGVja2VkUHJvcHMgPSBpc0NoZWNrZWQgPyB7IGNoZWNrZWQ6ICdjaGVja2VkJyB9IDoge307XG4gICAgICAgIGNvbnN0IGlucHV0UHJvcHMgPSB7IC4uLnsgY2xhc3NOYW1lOiAnbWRsLXJhZGlvX19idXR0b24nLCBuYW1lOiBuYW1lLCBvbkNoYW5nZTogdGhpcy5fb25DaGFuZ2UsIHR5cGU6ICdyYWRpbycgfSwgLi4uY2hlY2tlZFByb3BzLCAuLi5vdGhlclByb3BzIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J21kbC1yYWRpbyBtZGwtanMtcmFkaW8gbWRsLWpzLXJpcHBsZS1lZmZlY3QnIGRhdGEtZm9jdXM9J2lucHV0LXJhZGlvJyByZWY9J2lucHV0TWRsJz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLmlucHV0UHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZGwtcmFkaW9fX2xhYmVsJz57dGhpcy5pMThuKGxhYmVsKX08L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihyYWRpb01peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19