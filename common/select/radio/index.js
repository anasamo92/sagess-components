import builder from 'focus-core/component/builder';
import React from 'react';
import types from 'focus-core/component/types';
import i18nBehaviour from '../../i18n/mixin';
import mdlBehaviour from '../../mixin/mdl-behaviour';
import uniqueId from 'lodash/utility/uniqueId';
import { component as InputRadio } from '../../input/radio';

const selectRadioMixin = {
    mixins: [i18nBehaviour, mdlBehaviour],
    /**
    * Tag name.
    */
    displayName: 'SelectRadio',

    /** @inheritdoc */
    getDefaultProps() {
        return {
            values: [],
            valueKey: 'code',
            labelKey: 'label',
            disabled: false
        };
    },

    /** @inheritdoc */
    propTypes: {
        values: types('array'),
        value: types(['number', 'string', 'array']),
        valueKey: types('string'),
        labelKey: types('string'),
        onChange: types('func'),
        disabled: types('bool')
    },

    /** @inheritdoc */
    getInitialState() {
        return {
            uniqueName: uniqueId('options_'),
            value: this.props.value
        };
    },

    componentWillMount() {
        console.warn('FocusComponents v0.15: the \'select-radio\' component from FocusComponents.common is deprecated, please use FocusComponents.components.select.SelectRadio');
    },

    /** @inheritdoc */
    componentWillReceiveProps(newProps) {
        this.setState({
            value: newProps.value
        });
    },

    /**
     * Get the value from the select in the DOM.
     * @return {string, number} selected value
     */
    getValue() {
        return this.state.value;
    },

    /**
    * handle click on radio
    * @param {object} event - the click event
    */
    _handleRadioChange(newValue) {
        const { onChange } = this.props;
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
    _getRadioChangeHandler(key) {
        return () => {
            this._handleRadioChange(key);
        };
    },
    /**
    * Render radio for each values
    * @return {XML} the different radio values
    */
    renderSelectRadios() {
        const { uniqueName } = this.state;
        return this.props.values.map((val, idx) => {
            const value = val[this.props.valueKey];
            const label = val[this.props.labelKey];
            const disabled = this.props.disabled;
            const isChecked = value === this.state.value;
            return (
                <InputRadio key={idx} label={this.i18n(label)} name={uniqueName} onChange={this._getRadioChangeHandler(value)} value={isChecked} disabled={disabled} />
            );
        });
    },
    /** @inheritdoc */
    render() {
        const { error } = this.props;
        return (
            <div data-focus='select-radio' data-valid={!error}>
                {this.renderSelectRadios()}
                {error && <div className='label-error' ref='error'>{error}</div>}
            </div>
        );
    }
};

const { mixin, component } = builder(selectRadioMixin);
export { mixin, component };
export default { mixin, component };
