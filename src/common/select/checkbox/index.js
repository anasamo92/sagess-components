import builder from 'focus-core/component/builder';
import types from 'focus-core/component/types';
import React from 'react';
import Checkbox from '../../../components/input/checkbox';
import i18nBehaviour from '../../i18n/mixin';
import pull from 'lodash/array/pull'

const selectCheckboxMixin = {
    mixins: [i18nBehaviour],
    /**
    * Tag name.
    */
    displayName: 'SelectCheckbox',

    /** @inheritdoc */
    getDefaultProps() {
        return {
            values: [], // all values
            value: [], // selected values list
            valueKey: 'value', // key for the displayed value
            labelKey: 'label' // key for the displayed label
        };
    },
    /** @inheritdoc */
    propTypes() {
        return {
            values: types('array'),
            value: types('array'),
            valueKey: types('string'),
            labelKey: types('string'),
            onChange: types('func')
        };
    },

    /** @inheritdoc */
    getInitialState() {
        return {
            selectedValues: this.props.value
        };
    },

    componentWillMount() {
        console.warn('FocusComponents v0.15: the \'select-checkbox\' component from FocusComponents.common is deprecated, please use FocusComponents.components.select.SelectCheckbox');
    },

    /** @inheritdoc */
    componentWillReceiveProps(newProps) {
        if (newProps) {
            this.setState({ selectedValues: newProps.value });
        }
    },

    /**
    * Get the value from the select in the DOM.
    * @return {string} value
    */
    getValue() {
        return this.state.selectedValues;
    },

    /**
     * Handle a change of value.
     * @param  {[type]} key       the key
     * @param  {[type]} newStatus the new status
     */
    _handleCheckboxChange(key, newStatus) {
        if (this.props.onChange) {
            this.props.onChange(key, newStatus);
            return;
        }
        const selectedValues = this.state.selectedValues;
        if (newStatus) {
            selectedValues.push(key);
        } else {
            pull(selectedValues, key);
        }
        this.setState({ value: selectedValues });
    },
    /**
     * Closure to capture key and checbox status.
     * @param  {[type]} key the key of checkbox
     * @return {[type]} status closure
     */
    _getCheckboxChangeHandler(key) {
        return (status) => {
            this._handleCheckboxChange(key, status);
        };
    },
    /**
     * Render all selection checkbox.
     * @return {ReactDOMNode} list of ReactDomNode
     */
    renderCheckboxes() {
        return this.props.values.map((val, idx) => {
            const value = val[this.props.valueKey];
            const label = val[this.props.labelKey];
            const isChecked = 0 <= this.state.selectedValues.indexOf(value);
            return (
                <Checkbox key={idx} label={this.i18n(label)} onChange={this._getCheckboxChangeHandler(value)} value={isChecked} />
            );
        });
    },

    /** @inheritdoc */
    render() {
        return (
            <div data-focus='select-checkbox'>
                {this.renderCheckboxes()}
            </div>
        );
    }
};

const { mixin, component } = builder(selectCheckboxMixin);
export { mixin, component };
export default { mixin, component };
