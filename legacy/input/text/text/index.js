'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _mdlBehaviour = require('../../../../common/mixin/mdl-behaviour');

var _mdlBehaviour2 = _interopRequireDefault(_mdlBehaviour);

var _mixin = require('../../../../common/i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Identity function.
* @param  {object} d - The data.
*/
var identity = function identity(d) {
    return d;
};

/**
* Input text mixin.
* @type {Object}
*/
// Dependencies.
var inputTextComponent = {
    mixins: [_mdlBehaviour2.default, _mixin2.default],

    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            type: 'text',
            /**
            * Default formatter.
            * @param  {object} d - Data to format.
            * @return {object}   - The formatted data.
            */
            formatter: identity,
            /**
            * Default unformatter.
            * @param  {object} d - Data to unformat.
            * @return {object}   - The unformatted data.
            */
            unformatter: identity
        };
    },

    /** @inheritdoc */
    propTypes: {
        onChange: (0, _types2.default)('func'),
        onKeyPress: (0, _types2.default)('func'),
        error: (0, _types2.default)('string'),
        type: (0, _types2.default)('string'),
        value: (0, _types2.default)(['string', 'number']),
        name: (0, _types2.default)('string'),
        placeholder: (0, _types2.default)('string')
    },
    /** @inheritdoc */
    getInitialState: function getInitialState() {
        var _props = this.props,
            formatter = _props.formatter,
            value = _props.value;

        return {
            value: formatter(value)
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 0.7.0: this component is deprecated, please use SagessComponents.components.input.Text');
    },

    /**
    * Update the component.
    * @param {object} newProps - The new props to update.
    */
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        this.setState({ value: this.props.formatter(newProps.value) });
    },

    /**
    * Get the value from the input in the DOM.
    * @return {object} - The value of the formatter.
    */
    getValue: function getValue() {
        return this.props.unformatter(_reactDom2.default.findDOMNode(this.refs.inputText).value);
    },

    /**
    * Handle the change value of the input.
    * @param {object} event - The sanitize event of input.
    */
    _handleInputChange: function _handleInputChange(event) {
        //On change handler.
        var onChange = this.props.onChange;

        if (onChange) {
            return onChange(event);
        } else {
            //Set the state then call the change handler.
            this.setState({ value: event.target.value });
        }
    },

    /**
     * Input key press handler.
     * @param  {Object} event   event raised by the key press
     */
    _handleInputKeyPress: function _handleInputKeyPress(event) {
        var onKeyPress = this.props.onKeyPress;

        if (onKeyPress) {
            onKeyPress(event);
        }
    },

    /**
    * Render an input.
    * @return {DOM} - The dom of an input.
    */
    render: function render() {
        var value = this.state.value;
        var _props2 = this.props,
            error = _props2.error,
            name = _props2.name,
            placeholder = _props2.placeholder,
            style = _props2.style;

        var inputProps = (0, _objectAssign2.default)({}, this.props, { value: value }, { id: name, onChange: this._handleInputChange, onKeyPress: this._handleInputKeyPress });
        var pattern = error ? 'hasError' : null; //add pattern to overide mdl error style when displaying an focus error.
        var cssClass = 'mdl-textfield mdl-js-textfield ' + (error ? 'is-invalid' : '');
        return _react2.default.createElement(
            'div',
            { className: cssClass, 'data-focus': 'input-text', style: style },
            _react2.default.createElement('input', Object.assign({ className: 'mdl-textfield__input', ref: 'inputText' }, inputProps, { pattern: pattern })),
            _react2.default.createElement(
                'label',
                { className: 'mdl-textfield__label', htmlFor: name },
                value ? '' : this.i18n(placeholder)
            ),
            error && _react2.default.createElement(
                'span',
                { className: 'mdl-textfield__error' },
                error
            )
        );
    }
};

exports.default = (0, _builder2.default)(inputTextComponent);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiaWRlbnRpdHkiLCJkIiwiaW5wdXRUZXh0Q29tcG9uZW50IiwibWl4aW5zIiwibWRsQmVoYXZpb3VyIiwiaTE4bkJlaGF2aW91ciIsImdldERlZmF1bHRQcm9wcyIsInR5cGUiLCJmb3JtYXR0ZXIiLCJ1bmZvcm1hdHRlciIsInByb3BUeXBlcyIsIm9uQ2hhbmdlIiwib25LZXlQcmVzcyIsImVycm9yIiwidmFsdWUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJnZXRJbml0aWFsU3RhdGUiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJnZXRWYWx1ZSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZWZzIiwiaW5wdXRUZXh0IiwiX2hhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJfaGFuZGxlSW5wdXRLZXlQcmVzcyIsInJlbmRlciIsInN0YXRlIiwic3R5bGUiLCJpbnB1dFByb3BzIiwiaWQiLCJwYXR0ZXJuIiwiY3NzQ2xhc3MiLCJpMThuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxXQUFLQyxDQUFMO0FBQUEsQ0FBakI7O0FBRUE7Ozs7QUFmQTtBQW1CQSxJQUFNQyxxQkFBcUI7QUFDdkJDLFlBQVEsQ0FBQ0Msc0JBQUQsRUFBZUMsZUFBZixDQURlOztBQUd2QjtBQUNBQyxtQkFKdUIsNkJBSUw7QUFDZCxlQUFPO0FBQ0hDLGtCQUFNLE1BREg7QUFFSDs7Ozs7QUFLQUMsdUJBQVdSLFFBUFI7QUFRSDs7Ozs7QUFLQVMseUJBQWFUO0FBYlYsU0FBUDtBQWVILEtBcEJzQjs7QUFxQnZC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akIsRUFBd0MsU0FBU3hCLElBQWpEO0FBQXdERCx3QkFBUSxFQUFSLEdBQWEsS0FBSzJCLElBQUwsQ0FBVXpCLFdBQVY7QUFBckUsYUFGSjtBQUdLSCxxQkFDRztBQUFBO0FBQUEsa0JBQU0sV0FBVSxzQkFBaEI7QUFBd0NBO0FBQXhDO0FBSlIsU0FESjtBQVNIO0FBbEdzQixDQUEzQjs7a0JBcUdlLHVCQUFRWCxrQkFBUixDIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXMuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgdHlwZXMgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5pbXBvcnQgbWRsQmVoYXZpb3VyIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9taXhpbi9tZGwtYmVoYXZpb3VyJztcbmltcG9ydCBpMThuQmVoYXZpb3VyIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9pMThuL21peGluJztcblxuLyoqXG4qIElkZW50aXR5IGZ1bmN0aW9uLlxuKiBAcGFyYW0gIHtvYmplY3R9IGQgLSBUaGUgZGF0YS5cbiovXG5jb25zdCBpZGVudGl0eSA9IGQgPT4gZDtcblxuLyoqXG4qIElucHV0IHRleHQgbWl4aW4uXG4qIEB0eXBlIHtPYmplY3R9XG4qL1xuY29uc3QgaW5wdXRUZXh0Q29tcG9uZW50ID0ge1xuICAgIG1peGluczogW21kbEJlaGF2aW91ciwgaTE4bkJlaGF2aW91cl0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogRGVmYXVsdCBmb3JtYXR0ZXIuXG4gICAgICAgICAgICAqIEBwYXJhbSAge29iamVjdH0gZCAtIERhdGEgdG8gZm9ybWF0LlxuICAgICAgICAgICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgLSBUaGUgZm9ybWF0dGVkIGRhdGEuXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgZm9ybWF0dGVyOiBpZGVudGl0eSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBEZWZhdWx0IHVuZm9ybWF0dGVyLlxuICAgICAgICAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGQgLSBEYXRhIHRvIHVuZm9ybWF0LlxuICAgICAgICAgICAgKiBAcmV0dXJuIHtvYmplY3R9ICAgLSBUaGUgdW5mb3JtYXR0ZWQgZGF0YS5cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICB1bmZvcm1hdHRlcjogaWRlbnRpdHlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBvbkNoYW5nZTogdHlwZXMoJ2Z1bmMnKSxcbiAgICAgICAgb25LZXlQcmVzczogdHlwZXMoJ2Z1bmMnKSxcbiAgICAgICAgZXJyb3I6IHR5cGVzKCdzdHJpbmcnKSxcbiAgICAgICAgdHlwZTogdHlwZXMoJ3N0cmluZycpLFxuICAgICAgICB2YWx1ZTogdHlwZXMoWydzdHJpbmcnLCAnbnVtYmVyJ10pLFxuICAgICAgICBuYW1lOiB0eXBlcygnc3RyaW5nJyksXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0eXBlcygnc3RyaW5nJylcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgeyBmb3JtYXR0ZXIsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGZvcm1hdHRlcih2YWx1ZSlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIDAuNy4wOiB0aGlzIGNvbXBvbmVudCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFNhZ2Vzc0NvbXBvbmVudHMuY29tcG9uZW50cy5pbnB1dC5UZXh0Jyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFVwZGF0ZSB0aGUgY29tcG9uZW50LlxuICAgICogQHBhcmFtIHtvYmplY3R9IG5ld1Byb3BzIC0gVGhlIG5ldyBwcm9wcyB0byB1cGRhdGUuXG4gICAgKi9cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5wcm9wcy5mb3JtYXR0ZXIobmV3UHJvcHMudmFsdWUpIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIHZhbHVlIGZyb20gdGhlIGlucHV0IGluIHRoZSBET00uXG4gICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIHZhbHVlIG9mIHRoZSBmb3JtYXR0ZXIuXG4gICAgKi9cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudW5mb3JtYXR0ZXIoUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0VGV4dCkudmFsdWUpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBIYW5kbGUgdGhlIGNoYW5nZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgLSBUaGUgc2FuaXRpemUgZXZlbnQgb2YgaW5wdXQuXG4gICAgKi9cbiAgICBfaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgLy9PbiBjaGFuZ2UgaGFuZGxlci5cbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gb25DaGFuZ2UoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9TZXQgdGhlIHN0YXRlIHRoZW4gY2FsbCB0aGUgY2hhbmdlIGhhbmRsZXIuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogSW5wdXQga2V5IHByZXNzIGhhbmRsZXIuXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudCAgIGV2ZW50IHJhaXNlZCBieSB0aGUga2V5IHByZXNzXG4gICAgICovXG4gICAgX2hhbmRsZUlucHV0S2V5UHJlc3MoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyBvbktleVByZXNzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25LZXlQcmVzcykge1xuICAgICAgICAgICAgb25LZXlQcmVzcyhldmVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIGFuIGlucHV0LlxuICAgICogQHJldHVybiB7RE9NfSAtIFRoZSBkb20gb2YgYW4gaW5wdXQuXG4gICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgZXJyb3IsIG5hbWUsIHBsYWNlaG9sZGVyLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaW5wdXRQcm9wcyA9IGFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyB2YWx1ZSB9LCB7IGlkOiBuYW1lLCBvbkNoYW5nZTogdGhpcy5faGFuZGxlSW5wdXRDaGFuZ2UsIG9uS2V5UHJlc3M6IHRoaXMuX2hhbmRsZUlucHV0S2V5UHJlc3MgfSk7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBlcnJvciA/ICdoYXNFcnJvcicgOiBudWxsOyAvL2FkZCBwYXR0ZXJuIHRvIG92ZXJpZGUgbWRsIGVycm9yIHN0eWxlIHdoZW4gZGlzcGxheWluZyBhbiBmb2N1cyBlcnJvci5cbiAgICAgICAgY29uc3QgY3NzQ2xhc3MgPSBgbWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkICR7ZXJyb3IgPyAnaXMtaW52YWxpZCcgOiAnJ31gO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc0NsYXNzfSBkYXRhLWZvY3VzPSdpbnB1dC10ZXh0JyBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J21kbC10ZXh0ZmllbGRfX2lucHV0JyByZWY9J2lucHV0VGV4dCcgey4uLmlucHV0UHJvcHN9IHBhdHRlcm49e3BhdHRlcm59IC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbWRsLXRleHRmaWVsZF9fbGFiZWwnIGh0bWxGb3I9e25hbWV9Pnt2YWx1ZSA/ICcnIDogdGhpcy5pMThuKHBsYWNlaG9sZGVyKX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIHtlcnJvciAmJlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21kbC10ZXh0ZmllbGRfX2Vycm9yJz57ZXJyb3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkZXIoaW5wdXRUZXh0Q29tcG9uZW50KTtcbiJdfQ==