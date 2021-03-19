'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _find2 = require('lodash/collection/find');

var _find3 = _interopRequireDefault(_find2);

var _result = require('lodash/object/result');

var _result2 = _interopRequireDefault(_result);

var _isReactClassComponent = require('../../../utils/is-react-class-component');

var _field = require('../../../components/input/autocomplete-select/field');

var _field2 = _interopRequireDefault(_field);

var _field3 = require('../../../components/input/autocomplete-text/field');

var _field4 = _interopRequireDefault(_field3);

var _text = require('../../../components/input/text');

var _text2 = _interopRequireDefault(_text);

var _text3 = require('../../../components/display/text');

var _text4 = _interopRequireDefault(_text3);

var _select = require('../../../components/input/select');

var _select2 = _interopRequireDefault(_select);

var _label = require('../../../components/label');

var _label2 = _interopRequireDefault(_label);

var _field5 = require('../../autocomplete/field');

var _fieldGridBehaviour = require('../../mixin/field-grid-behaviour');

var _fieldGridBehaviour2 = _interopRequireDefault(_fieldGridBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Dependencies

// Components

// Mixins


var fieldBuiltInComponentsMixin = {
    mixins: [_fieldGridBehaviour2.default],
    getDefaultProps: function getDefaultProps() {
        return {
            /**
            * Does the component has a Label.
            * @type {Boolean}
            */
            hasLabel: true,
            /**
            * Redefine complety the component.
            * @type {Object}
            */
            FieldComponent: undefined,
            /**
            * Redefine only the input and label component.
            * @type {Object}
            */
            InputLabelComponent: undefined,
            /**
            * Component for the input.
            * @type {Object}
            */
            InputComponent: _text2.default,
            /**
             * Autocomplete component
             * @type {Object}
             */
            AutocompleteComponent: _field5.component,
            AutocompleteSelectComponent: _field2.default,
            AutocompleteTextComponent: _field4.default,
            /**
            * Component for the select.
            * @type {Object}
            */
            SelectComponent: _select2.default,
            /**
            * Component for the display.
            * @type {Object}
            */
            DisplayComponent: _text4.default,
            /**
            * Component for the label.
            * @type {Object}
            */
            LabelComponent: _label2.default
        };
    },

    /** @inheriteDoc */
    propTypes: {
        AutocompleteComponent: _react.PropTypes.func,
        AutocompleteSelectComponent: _react.PropTypes.func,
        DisplayComponent: _react.PropTypes.func,
        FieldComponent: _react.PropTypes.func,
        InputComponent: _react.PropTypes.func,
        InputLabelComponent: _react.PropTypes.func,
        LabelComponent: _react.PropTypes.func,
        SelectComponent: _react.PropTypes.func,
        hasLabel: _react.PropTypes.bool,
        labelSize: _react.PropTypes.number
    },
    _buildStyle: function _buildStyle() {
        var style = this.props.style;

        style = style || {};
        style.className = style && style.className ? style.className : '';
        return style;
    },

    /**
    * Render the label part of the component.
    * @returns {Component} - The builded label component.
    */
    label: function label() {
        var _props = this.props,
            name = _props.name,
            label = _props.label,
            LabelComponent = _props.LabelComponent,
            domain = _props.domain,
            isEdit = _props.isEdit;

        return _react2.default.createElement(
            'div',
            {
                className: '' + this._getLabelGridClassName(),
                'data-focus': 'field-label-container'
            },
            _react2.default.createElement(LabelComponent, {
                domain: domain,
                name: name,
                text: label,
                isEdit: isEdit
            })
        );
    },

    /**
    * Rendet the input part of the component.
    * @return {Component} - The constructed input component.
    */
    input: function input() {
        var _props2 = this.props,
            id = _props2.name,
            placeholder = _props2.placeholder;
        var _state = this.state,
            value = _state.value,
            error = _state.error;
        var onChange = this.onInputChange;

        var inputBuildedProps = Object.assign({}, this.props, {
            id: id,
            onChange: onChange,
            value: value,
            error: error,
            placeholder: placeholder
        });
        var finalInputProps = (0, _isReactClassComponent.addRefToPropsIfNotPure)(this.props.InputComponent, inputBuildedProps, _isReactClassComponent.INPUT);
        return _react2.default.createElement(this.props.InputComponent, finalInputProps);
    },

    /**
     * Autocomplete render
     * @return {JSX} rendered component
     */
    autocomplete: function autocomplete() {
        var _props3 = this.props,
            id = _props3.name,
            placeholder = _props3.placeholder;
        var _state2 = this.state,
            value = _state2.value,
            error = _state2.error;
        var onChange = this.onInputChange;

        var inputBuildedProps = Object.assign({}, this.props, {
            id: id,
            onChange: onChange,
            value: value,
            error: error,
            placeholder: placeholder
        });
        var finalInputProps = (0, _isReactClassComponent.addRefToPropsIfNotPure)(this.props.AutocompleteComponent, inputBuildedProps, _isReactClassComponent.INPUT);
        return _react2.default.createElement(this.props.AutocompleteComponent, finalInputProps);
    },
    autocompleteSelect: function autocompleteSelect() {
        var _props4 = this.props,
            id = _props4.name,
            placeHolder = _props4.label;
        var _state3 = this.state,
            value = _state3.value,
            error = _state3.error;
        var onChange = this.onInputChange;

        var inputBuildedProps = Object.assign({}, this.props, {
            id: id,
            onChange: onChange,
            value: value,
            error: error,
            placeHolder: placeHolder
        });
        var finalInputProps = (0, _isReactClassComponent.addRefToPropsIfNotPure)(this.props.AutocompleteSelectComponent, inputBuildedProps, _isReactClassComponent.INPUT);
        return _react2.default.createElement(this.props.AutocompleteSelectComponent, finalInputProps);
    },
    autocompleteText: function autocompleteText() {
        var _props5 = this.props,
            id = _props5.name,
            placeHolder = _props5.label;
        var _state4 = this.state,
            value = _state4.value,
            error = _state4.error;
        var onChange = this.onInputChange;

        var inputBuildedProps = Object.assign({}, this.props, {
            id: id,
            onChange: onChange,
            value: value,
            error: error,
            placeHolder: placeHolder
        });
        var finalInputProps = (0, _isReactClassComponent.addRefToPropsIfNotPure)(this.props.AutocompleteTextComponent, inputBuildedProps, _isReactClassComponent.INPUT);
        return _react2.default.createElement(this.props.AutocompleteTextComponent, finalInputProps);
    },

    /**
     * Build a select component depending on the domain, definition and props.
     * @return {Component} - The builded select component.
     */
    select: function select() {
        var _state5 = this.state,
            error = _state5.error,
            value = _state5.value;

        var buildedSelectProps = Object.assign({}, this.props, {
            value: value,
            style: this._buildStyle(),
            onChange: this.onInputChange,
            error: error
        });
        var finalSelectProps = (0, _isReactClassComponent.addRefToPropsIfNotPure)(this.props.SelectComponent, buildedSelectProps, _isReactClassComponent.INPUT);
        return _react2.default.createElement(this.props.SelectComponent, finalSelectProps);
    },

    /**
    * Render the display part of the component.
    * @return {object} - The display part of the compoennt if the mode is not edit.
    */
    display: function display() {
        var value = this.state.value;
        var _props6 = this.props,
            name = _props6.name,
            valueKey = _props6.valueKey,
            labelKey = _props6.labelKey,
            values = _props6.values;

        var _processValue = values ? (0, _result2.default)((0, _find3.default)(values, _defineProperty({}, valueKey || 'code', value)), labelKey || 'label') : value;
        var buildedDislplayProps = Object.assign({}, this.props, {
            id: name,
            style: this._buildStyle(),
            value: _processValue
        });
        var finalDisplayProps = (0, _isReactClassComponent.addRefToPropsIfNotPure)(this.props.DisplayComponent, buildedDislplayProps, _isReactClassComponent.DISPLAY);
        return _react2.default.createElement(this.props.DisplayComponent, finalDisplayProps);
    },

    /**
    * Render the error part of the component.
    * @return {object} - The error part of the component.
    */
    error: function error() {
        var error = this.state.error;

        if (error) {
            return _react2.default.createElement(
                'span',
                { className: 'mdl-textfield__error' },
                error
            );
        }
    },

    /**
    * Render the help component.
    * @return {object} - The help part of the component.
    */
    help: function help() {
        var _props7 = this.props,
            help = _props7.help,
            name = _props7.name;

        if (help) {
            return _react2.default.createElement(
                'label',
                {
                    className: 'mdl-textfield__label',
                    htmFor: '' + name
                },
                help
            );
        }
    },

    /**
     * Render the field component if it is overriden in the component definition.
     * @return {Component} - The builded field component.
     */
    _renderFieldComponent: function _renderFieldComponent() {
        var FieldComponent = this.props.FieldComponent || this.props.InputLabelComponent;
        var _state6 = this.state,
            value = _state6.value,
            error = _state6.error;

        var buildedProps = Object.assign({}, this.props, {
            id: this.props.name,
            value: value,
            error: error,
            onChange: this.onInputChange
        });
        var finalBuildedProps = (0, _isReactClassComponent.addRefToPropsIfNotPure)(FieldComponent, buildedProps, _isReactClassComponent.INPUT);
        return _react2.default.createElement(FieldComponent, finalBuildedProps);
    }
};

exports.default = fieldBuiltInComponentsMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZmllbGRCdWlsdEluQ29tcG9uZW50c01peGluIiwibWl4aW5zIiwiZmllbGRHcmlkQmVoYXZpb3VyTWl4aW4iLCJnZXREZWZhdWx0UHJvcHMiLCJoYXNMYWJlbCIsIkZpZWxkQ29tcG9uZW50IiwidW5kZWZpbmVkIiwiSW5wdXRMYWJlbENvbXBvbmVudCIsIklucHV0Q29tcG9uZW50IiwiSW5wdXRUZXh0IiwiQXV0b2NvbXBsZXRlQ29tcG9uZW50IiwiQXV0b2NvbXBsZXRlIiwiQXV0b2NvbXBsZXRlU2VsZWN0Q29tcG9uZW50IiwiQXV0b2NvbXBsZXRlVGV4dENvbXBvbmVudCIsIlNlbGVjdENvbXBvbmVudCIsIlNlbGVjdENsYXNzaWMiLCJEaXNwbGF5Q29tcG9uZW50IiwiRGlzcGxheVRleHQiLCJMYWJlbENvbXBvbmVudCIsIkxhYmVsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiLCJsYWJlbFNpemUiLCJudW1iZXIiLCJfYnVpbGRTdHlsZSIsInN0eWxlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJsYWJlbCIsIm5hbWUiLCJkb21haW4iLCJpc0VkaXQiLCJfZ2V0TGFiZWxHcmlkQ2xhc3NOYW1lIiwiaW5wdXQiLCJpZCIsInBsYWNlaG9sZGVyIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yIiwib25DaGFuZ2UiLCJvbklucHV0Q2hhbmdlIiwiaW5wdXRCdWlsZGVkUHJvcHMiLCJmaW5hbElucHV0UHJvcHMiLCJJTlBVVCIsImF1dG9jb21wbGV0ZSIsImF1dG9jb21wbGV0ZVNlbGVjdCIsInBsYWNlSG9sZGVyIiwiYXV0b2NvbXBsZXRlVGV4dCIsInNlbGVjdCIsImJ1aWxkZWRTZWxlY3RQcm9wcyIsImZpbmFsU2VsZWN0UHJvcHMiLCJkaXNwbGF5IiwidmFsdWVLZXkiLCJsYWJlbEtleSIsInZhbHVlcyIsIl9wcm9jZXNzVmFsdWUiLCJidWlsZGVkRGlzbHBsYXlQcm9wcyIsImZpbmFsRGlzcGxheVByb3BzIiwiRElTUExBWSIsImhlbHAiLCJfcmVuZGVyRmllbGRDb21wb25lbnQiLCJidWlsZGVkUHJvcHMiLCJmaW5hbEJ1aWxkZWRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7OztrTkFkQTs7QUFLQTs7QUFRQTs7O0FBR0EsSUFBTUEsOEJBQThCO0FBQ2hDQyxZQUFRLENBQUNDLDRCQUFELENBRHdCO0FBRWhDQyxtQkFGZ0MsNkJBRWQ7QUFDZCxlQUFPO0FBQ0g7Ozs7QUFJQUMsc0JBQVUsSUFMUDtBQU1IOzs7O0FBSUFDLDRCQUFnQkMsU0FWYjtBQVdIOzs7O0FBSUFDLGlDQUFxQkQsU0FmbEI7QUFnQkg7Ozs7QUFJQUUsNEJBQWdCQyxjQXBCYjtBQXFCSDs7OztBQUlBQyxtQ0FBdUJDLGlCQXpCcEI7QUEwQkhDLHdEQTFCRztBQTJCSEMsc0RBM0JHO0FBNEJIOzs7O0FBSUFDLDZCQUFpQkMsZ0JBaENkO0FBaUNIOzs7O0FBSUFDLDhCQUFrQkMsY0FyQ2Y7QUFzQ0g7Ozs7QUFJQUMsNEJBQWdCQztBQTFDYixTQUFQO0FBNENILEtBL0MrQjs7QUFnRGhDO0FBQ0FDLGVBQVc7QUFDUFYsK0JBQXVCVyxpQkFBVUMsSUFEMUI7QUFFUFYscUNBQTZCUyxpQkFBVUMsSUFGaEM7QUFHUE4sMEJBQWtCSyxpQkFBVUMsSUFIckI7QUFJUGpCLHdCQUFnQmdCLGlCQUFVQyxJQUpuQjtBQUtQZCx3QkFBZ0JhLGlCQUFVQyxJQUxuQjtBQU1QZiw2QkFBcUJjLGlCQUFVQyxJQU54QjtBQU9QSix3QkFBZ0JHLGlCQUFVQyxJQVBuQjtBQVFQUix5QkFBaUJPLGlCQUFVQyxJQVJwQjtBQVNQbEIsa0JBQVVpQixpQkFBVUUsSUFUYjtBQVVQQyxtQkFBV0gsaUJBQVVJO0FBVmQsS0FqRHFCO0FBNkRoQ0MsZUE3RGdDLHlCQTZEbEI7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SUFESDtBQUFBLFlBQ1M5QixJQURULFdBQ1NBLElBRFQ7O0FBRUgsWUFBSThCLElBQUosRUFBVTtBQUNOLG1CQUNJO0FBQUE7QUFBQTtBQUNJLCtCQUFVLHNCQURkO0FBRUksaUNBQVc5QjtBQUZmO0FBSUs4QjtBQUpMLGFBREo7QUFRSDtBQUNKLEtBdE8rQjs7QUF1T2hDOzs7O0FBSUFDLHlCQTNPZ0MsbUNBMk9SO0FBQ3BCLFlBQU16RCxpQkFBaUIsS0FBS3VCLEtBQUwsQ0FBV3ZCLGNBQVgsSUFBNkIsS0FBS3VCLEtBQUwsQ0FBV3JCLG1CQUEvRDtBQURvQixzQkFFSyxLQUFLK0IsS0FGVjtBQUFBLFlBRVpDLEtBRlksV0FFWkEsS0FGWTtBQUFBLFlBRUxDLEtBRkssV0FFTEEsS0FGSzs7QUFHcEIsWUFBTXVCLGlDQUNDLEtBQUtuQyxLQUROO0FBRUZRLGdCQUFJLEtBQUtSLEtBQUwsQ0FBV0csSUFGYjtBQUdGUSxtQkFBT0EsS0FITDtBQUlGQyxtQkFBT0EsS0FKTDtBQUtGQyxzQkFBVSxLQUFLQztBQUxiLFVBQU47QUFPQSxZQUFNc0Isb0JBQW9CLG1EQUF1QjNELGNBQXZCLEVBQXVDMEQsWUFBdkMsRUFBcURsQiw0QkFBckQsQ0FBMUI7QUFDQSxlQUNJLDhCQUFDLGNBQUQsRUFBb0JtQixpQkFBcEIsQ0FESjtBQUdIO0FBelArQixDQUFwQzs7a0JBNFBlaEUsMkIiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmaW5kIGZyb20gJ2xvZGFzaC9jb2xsZWN0aW9uL2ZpbmQnO1xuaW1wb3J0IHJlc3VsdCBmcm9tICdsb2Rhc2gvb2JqZWN0L3Jlc3VsdCc7XG5pbXBvcnQgeyBhZGRSZWZUb1Byb3BzSWZOb3RQdXJlLCBJTlBVVCwgRElTUExBWSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2lzLXJlYWN0LWNsYXNzLWNvbXBvbmVudCc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgQXV0b2NvbXBsZXRlU2VsZWN0Q29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaW5wdXQvYXV0b2NvbXBsZXRlLXNlbGVjdC9maWVsZCc7XG5pbXBvcnQgQXV0b2NvbXBsZXRlVGV4dENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2lucHV0L2F1dG9jb21wbGV0ZS10ZXh0L2ZpZWxkJztcbmltcG9ydCBJbnB1dFRleHQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9pbnB1dC90ZXh0JztcbmltcG9ydCBEaXNwbGF5VGV4dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Rpc3BsYXkvdGV4dCc7XG5pbXBvcnQgU2VsZWN0Q2xhc3NpYyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2lucHV0L3NlbGVjdCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYWJlbCc7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgQXV0b2NvbXBsZXRlIH0gZnJvbSAnLi4vLi4vYXV0b2NvbXBsZXRlL2ZpZWxkJztcbi8vIE1peGluc1xuaW1wb3J0IGZpZWxkR3JpZEJlaGF2aW91ck1peGluIGZyb20gJy4uLy4uL21peGluL2ZpZWxkLWdyaWQtYmVoYXZpb3VyJztcblxuY29uc3QgZmllbGRCdWlsdEluQ29tcG9uZW50c01peGluID0ge1xuICAgIG1peGluczogW2ZpZWxkR3JpZEJlaGF2aW91ck1peGluXSxcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogRG9lcyB0aGUgY29tcG9uZW50IGhhcyBhIExhYmVsLlxuICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBoYXNMYWJlbDogdHJ1ZSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBSZWRlZmluZSBjb21wbGV0eSB0aGUgY29tcG9uZW50LlxuICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIEZpZWxkQ29tcG9uZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogUmVkZWZpbmUgb25seSB0aGUgaW5wdXQgYW5kIGxhYmVsIGNvbXBvbmVudC5cbiAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBJbnB1dExhYmVsQ29tcG9uZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogQ29tcG9uZW50IGZvciB0aGUgaW5wdXQuXG4gICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgSW5wdXRDb21wb25lbnQ6IElucHV0VGV4dCxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQXV0b2NvbXBsZXRlIGNvbXBvbmVudFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50OiBBdXRvY29tcGxldGUsXG4gICAgICAgICAgICBBdXRvY29tcGxldGVTZWxlY3RDb21wb25lbnQsXG4gICAgICAgICAgICBBdXRvY29tcGxldGVUZXh0Q29tcG9uZW50LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAqIENvbXBvbmVudCBmb3IgdGhlIHNlbGVjdC5cbiAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBTZWxlY3RDb21wb25lbnQ6IFNlbGVjdENsYXNzaWMsXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogQ29tcG9uZW50IGZvciB0aGUgZGlzcGxheS5cbiAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBEaXNwbGF5Q29tcG9uZW50OiBEaXNwbGF5VGV4dCxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBDb21wb25lbnQgZm9yIHRoZSBsYWJlbC5cbiAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBMYWJlbENvbXBvbmVudDogTGFiZWxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGVEb2MgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgQXV0b2NvbXBsZXRlU2VsZWN0Q29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgRGlzcGxheUNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIEZpZWxkQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgSW5wdXRDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBJbnB1dExhYmVsQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgTGFiZWxDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBTZWxlY3RDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBoYXNMYWJlbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGxhYmVsU2l6ZTogUHJvcFR5cGVzLm51bWJlclxuICAgIH0sXG4gICAgX2J1aWxkU3R5bGUoKSB7XG4gICAgICAgIGxldCB7IHN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBzdHlsZSA9IHN0eWxlIHx8IHt9O1xuICAgICAgICBzdHlsZS5jbGFzc05hbWUgPSBzdHlsZSAmJiBzdHlsZS5jbGFzc05hbWUgPyBzdHlsZS5jbGFzc05hbWUgOiAnJztcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIGxhYmVsIHBhcnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAqIEByZXR1cm5zIHtDb21wb25lbnR9IC0gVGhlIGJ1aWxkZWQgbGFiZWwgY29tcG9uZW50LlxuICAgICovXG4gICAgbGFiZWwoKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgbGFiZWwsIExhYmVsQ29tcG9uZW50LCBkb21haW4sIGlzRWRpdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3RoaXMuX2dldExhYmVsR3JpZENsYXNzTmFtZSgpfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1mb2N1cz0nZmllbGQtbGFiZWwtY29udGFpbmVyJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMYWJlbENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBkb21haW49e2RvbWFpbn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdD17aXNFZGl0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGV0IHRoZSBpbnB1dCBwYXJ0IG9mIHRoZSBjb21wb25lbnQuXG4gICAgKiBAcmV0dXJuIHtDb21wb25lbnR9IC0gVGhlIGNvbnN0cnVjdGVkIGlucHV0IGNvbXBvbmVudC5cbiAgICAqL1xuICAgIGlucHV0KCkge1xuICAgICAgICBjb25zdCB7IG5hbWU6IGlkLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgb25JbnB1dENoYW5nZTogb25DaGFuZ2UgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGlucHV0QnVpbGRlZFByb3BzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgb25DaGFuZ2UsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmluYWxJbnB1dFByb3BzID0gYWRkUmVmVG9Qcm9wc0lmTm90UHVyZSh0aGlzLnByb3BzLklucHV0Q29tcG9uZW50LCBpbnB1dEJ1aWxkZWRQcm9wcywgSU5QVVQpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGhpcy5wcm9wcy5JbnB1dENvbXBvbmVudCB7Li4uZmluYWxJbnB1dFByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQXV0b2NvbXBsZXRlIHJlbmRlclxuICAgICAqIEByZXR1cm4ge0pTWH0gcmVuZGVyZWQgY29tcG9uZW50XG4gICAgICovXG4gICAgYXV0b2NvbXBsZXRlKCkge1xuICAgICAgICBjb25zdCB7IG5hbWU6IGlkLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgb25JbnB1dENoYW5nZTogb25DaGFuZ2UgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGlucHV0QnVpbGRlZFByb3BzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgb25DaGFuZ2UsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmluYWxJbnB1dFByb3BzID0gYWRkUmVmVG9Qcm9wc0lmTm90UHVyZSh0aGlzLnByb3BzLkF1dG9jb21wbGV0ZUNvbXBvbmVudCwgaW5wdXRCdWlsZGVkUHJvcHMsIElOUFVUKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0aGlzLnByb3BzLkF1dG9jb21wbGV0ZUNvbXBvbmVudCB7Li4uZmluYWxJbnB1dFByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgYXV0b2NvbXBsZXRlU2VsZWN0KCkge1xuICAgICAgICBjb25zdCB7IG5hbWU6IGlkLCBsYWJlbDogcGxhY2VIb2xkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IG9uSW5wdXRDaGFuZ2U6IG9uQ2hhbmdlIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBpbnB1dEJ1aWxkZWRQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG9uQ2hhbmdlLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZpbmFsSW5wdXRQcm9wcyA9IGFkZFJlZlRvUHJvcHNJZk5vdFB1cmUodGhpcy5wcm9wcy5BdXRvY29tcGxldGVTZWxlY3RDb21wb25lbnQsIGlucHV0QnVpbGRlZFByb3BzLCBJTlBVVClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0aGlzLnByb3BzLkF1dG9jb21wbGV0ZVNlbGVjdENvbXBvbmVudCB7Li4uZmluYWxJbnB1dFByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgYXV0b2NvbXBsZXRlVGV4dCgpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lOiBpZCwgbGFiZWw6IHBsYWNlSG9sZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBvbklucHV0Q2hhbmdlOiBvbkNoYW5nZSB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgaW5wdXRCdWlsZGVkUHJvcHMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBvbkNoYW5nZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICBwbGFjZUhvbGRlclxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaW5hbElucHV0UHJvcHMgPSBhZGRSZWZUb1Byb3BzSWZOb3RQdXJlKHRoaXMucHJvcHMuQXV0b2NvbXBsZXRlVGV4dENvbXBvbmVudCwgaW5wdXRCdWlsZGVkUHJvcHMsIElOUFVUKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0aGlzLnByb3BzLkF1dG9jb21wbGV0ZVRleHRDb21wb25lbnQgey4uLmZpbmFsSW5wdXRQcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGEgc2VsZWN0IGNvbXBvbmVudCBkZXBlbmRpbmcgb24gdGhlIGRvbWFpbiwgZGVmaW5pdGlvbiBhbmQgcHJvcHMuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFRoZSBidWlsZGVkIHNlbGVjdCBjb21wb25lbnQuXG4gICAgICovXG4gICAgc2VsZWN0KCkge1xuICAgICAgICBjb25zdCB7IGVycm9yLCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgYnVpbGRlZFNlbGVjdFByb3BzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHRoaXMuX2J1aWxkU3R5bGUoKSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgICBlcnJvclxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmaW5hbFNlbGVjdFByb3BzID0gYWRkUmVmVG9Qcm9wc0lmTm90UHVyZSh0aGlzLnByb3BzLlNlbGVjdENvbXBvbmVudCwgYnVpbGRlZFNlbGVjdFByb3BzLCBJTlBVVCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGhpcy5wcm9wcy5TZWxlY3RDb21wb25lbnQgey4uLmZpbmFsU2VsZWN0UHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgZGlzcGxheSBwYXJ0IG9mIHRoZSBjb21wb25lbnQuXG4gICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGRpc3BsYXkgcGFydCBvZiB0aGUgY29tcG9lbm50IGlmIHRoZSBtb2RlIGlzIG5vdCBlZGl0LlxuICAgICovXG4gICAgZGlzcGxheSgpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZUtleSwgbGFiZWxLZXksIHZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgX3Byb2Nlc3NWYWx1ZSA9IHZhbHVlcyA/IHJlc3VsdChmaW5kKHZhbHVlcywgeyBbdmFsdWVLZXkgfHwgJ2NvZGUnXTogdmFsdWUgfSksIGxhYmVsS2V5IHx8ICdsYWJlbCcpIDogdmFsdWU7XG4gICAgICAgIGNvbnN0IGJ1aWxkZWREaXNscGxheVByb3BzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGlkOiBuYW1lLFxuICAgICAgICAgICAgc3R5bGU6IHRoaXMuX2J1aWxkU3R5bGUoKSxcbiAgICAgICAgICAgIHZhbHVlOiBfcHJvY2Vzc1ZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZpbmFsRGlzcGxheVByb3BzID0gYWRkUmVmVG9Qcm9wc0lmTm90UHVyZSh0aGlzLnByb3BzLkRpc3BsYXlDb21wb25lbnQsIGJ1aWxkZWREaXNscGxheVByb3BzLCBESVNQTEFZKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0aGlzLnByb3BzLkRpc3BsYXlDb21wb25lbnQgey4uLmZpbmFsRGlzcGxheVByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIGVycm9yIHBhcnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAqIEByZXR1cm4ge29iamVjdH0gLSBUaGUgZXJyb3IgcGFydCBvZiB0aGUgY29tcG9uZW50LlxuICAgICovXG4gICAgZXJyb3IoKSB7XG4gICAgICAgIGxldCB7IGVycm9yIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZGwtdGV4dGZpZWxkX19lcnJvcic+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgaGVscCBjb21wb25lbnQuXG4gICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGhlbHAgcGFydCBvZiB0aGUgY29tcG9uZW50LlxuICAgICovXG4gICAgaGVscCgpIHtcbiAgICAgICAgbGV0IHsgaGVscCwgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGhlbHApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWRsLXRleHRmaWVsZF9fbGFiZWwnXG4gICAgICAgICAgICAgICAgICAgIGh0bUZvcj17YCR7bmFtZX1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2hlbHB9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgZmllbGQgY29tcG9uZW50IGlmIGl0IGlzIG92ZXJyaWRlbiBpbiB0aGUgY29tcG9uZW50IGRlZmluaXRpb24uXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFRoZSBidWlsZGVkIGZpZWxkIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBfcmVuZGVyRmllbGRDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IEZpZWxkQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5GaWVsZENvbXBvbmVudCB8fCB0aGlzLnByb3BzLklucHV0TGFiZWxDb21wb25lbnQ7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBidWlsZGVkUHJvcHMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2VcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZmluYWxCdWlsZGVkUHJvcHMgPSBhZGRSZWZUb1Byb3BzSWZOb3RQdXJlKEZpZWxkQ29tcG9uZW50LCBidWlsZGVkUHJvcHMsIElOUFVUKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudCB7Li4uZmluYWxCdWlsZGVkUHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmllbGRCdWlsdEluQ29tcG9uZW50c01peGluO1xuIl19