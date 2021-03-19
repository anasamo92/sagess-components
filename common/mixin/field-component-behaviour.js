'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isObject = require('lodash/lang/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _identity = require('lodash/utility/identity');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fieldBehaviourMixin = {
    _modifiedFields: [],
    _defaultOnChange: function _defaultOnChange(fieldname, value) {
        this.setState(_defineProperty({}, fieldname, value));
    },
    _buildResetState: function _buildResetState() {
        if (this.buildResetState) {
            return this.buildResetState(this._modifiedFields);
        }
        return this._modifiedFields.reduce(function (acc, value) {
            acc[value] = null;
            return acc;
        }, {});
    },
    _wrappedOnChange: function _wrappedOnChange(onChange, fieldname, value) {
        if (this._modifiedFields.indexOf(fieldname) === -1) {
            this._modifiedFields.push(fieldname);
        }
        if (onChange) {
            onChange(value);
        } else {
            this._defaultOnChange(fieldname, value);
        }
    },

    /**
    * Build the field properties.
    * @param {string} name - property name.
    * @param {object} options - An object which contains all options for the built of the field
    * @param {object} context - Function context, this by default.
    * @returns {object} - The constructed props for the field.
    */
    _buildFieldProps: function _buildFieldProps(name) {
        var _this = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var context = arguments[2];

        context = context || this;
        //Properties.
        var isEdit = options.isEdit !== undefined ? options.isEdit : context.state.isEdit;
        var value = options.value !== undefined ? options.value : context.state[name];
        var def = context.definition && context.definition[name] ? context.definition[name] : {};
        var listName = options.listName || def.listName;
        //hasLabel
        var hasLabel = function hasLabel() {
            if (options.hasLabel !== undefined) {
                return options.hasLabel;
            }
            if (def.hasLabel !== undefined) {
                return options.hasLabel;
            }return true;
        }();
        //Build a container for the props.
        var baseName = name;
        name = options.name || this.definitionPath + '.' + name;
        var onChange = function onChange(value) {
            return _this._wrappedOnChange(options.onChange || (options.options || {}).onChange || def.onChange, baseName, value);
        };

        var propsContainer = {
            name: name,
            label: def.label || options.label || name,
            ref: name,
            value: value,
            domain: options.domain || def.domain,
            error: context.state.error ? context.state.error[name] : undefined,
            locale: def.locale,
            format: def.format,
            //Mode
            isEdit: isEdit,
            hasLabel: hasLabel,
            isRequired: !(0, _isUndefined2.default)(options.isRequired) && options.isRequired || def.isRequired || def.required, //legacy on required on model generation.
            //Style
            style: options.style,
            // Type
            type: def.type,
            //Methods
            validator: def.validator,
            formatter: def.formatter || _identity2.default,
            unformatter: def.unformatter || _identity2.default,
            //Component
            FieldComponent: def.FieldComponent,
            InputLabelComponent: def.InputLabelComponent,
            InputComponent: def.InputComponent,
            SelectComponent: def.SelectComponent,
            TextComponent: def.TextComponent,
            DisplayComponent: def.DisplayComponent,
            LabelComponent: def.LabelComponent,
            AutocompleteSelectComponent: def.AutocompleteSelectComponent,
            AutocompleteTextComponent: def.AutocompleteTextComponent,
            options: options.options || def.options //Add options to the fields
        };
        //Extend the options object in order to be able to specify more options to thie son's component.
        var fieldProps = (0, _objectAssign2.default)(propsContainer, options, options.options || def.options);
        // Forcing the use of the wrapper for onChange
        fieldProps.onChange = onChange;

        // Values list.
        var refContainer = options.refContainer || def.refContainer || context.state.reference;
        // case no props.values and then
        if (!options.hasOwnProperty('values') && (0, _isObject2.default)(refContainer) && refContainer.hasOwnProperty(listName)) {
            (0, _objectAssign2.default)(fieldProps, { values: refContainer[listName] || [] });
        }
        return fieldProps;
    }
};

exports.default = fieldBehaviourMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZmllbGRCZWhhdmlvdXJNaXhpbiIsIl9tb2RpZmllZEZpZWxkcyIsIl9kZWZhdWx0T25DaGFuZ2UiLCJmaWVsZG5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwiX2J1aWxkUmVzZXRTdGF0ZSIsImJ1aWxkUmVzZXRTdGF0ZSIsInJlZHVjZSIsImFjYyIsIl93cmFwcGVkT25DaGFuZ2UiLCJvbkNoYW5nZSIsImluZGV4T2YiLCJwdXNoIiwiX2J1aWxkRmllbGRQcm9wcyIsIm5hbWUiLCJvcHRpb25zIiwiY29udGV4dCIsImlzRWRpdCIsInVuZGVmaW5lZCIsInN0YXRlIiwiZGVmIiwiZGVmaW5pdGlvbiIsImxpc3ROYW1lIiwiaGFzTGFiZWwiLCJiYXNlTmFtZSIsImRlZmluaXRpb25QYXRoIiwicHJvcHNDb250YWluZXIiLCJsYWJlbCIsInJlZiIsImRvbWFpbiIsImVycm9yIiwibG9jYWxlIiwiZm9ybWF0IiwiaXNSZXF1aXJlZCIsInJlcXVpcmVkIiwic3R5bGUiLCJ0eXBlIiwidmFsaWRhdG9yIiwiZm9ybWF0dGVyIiwiaWRlbnRpdHkiLCJ1bmZvcm1hdHRlciIsIkZpZWxkQ29tcG9uZW50IiwiSW5wdXRMYWJlbENvbXBvbmVudCIsIklucHV0Q29tcG9uZW50IiwiU2VsZWN0Q29tcG9uZW50IiwiVGV4dENvbXBvbmVudCIsIkRpc3BsYXlDb21wb25lbnQiLCJMYWJlbENvbXBvbmVudCIsIkF1dG9jb21wbGV0ZVNlbGVjdENvbXBvbmVudCIsIkF1dG9jb21wbGV0ZVRleHRDb21wb25lbnQiLCJmaWVsZFByb3BzIiwicmVmQ29udGFpbmVyIiwicmVmZXJlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLHNCQUFzQjtBQUN4QkMscUJBQWlCLEVBRE87QUFFeEJDLG9CQUZ3Qiw0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eEMsUUFBWCxHQUFzQkEsUUFBdEI7O0FBRUE7QUFDQSxZQUFNeUMsZUFBZXBDLFFBQVFvQyxZQUFSLElBQXdCL0IsSUFBSStCLFlBQTVCLElBQTRDbkMsUUFBUUcsS0FBUixDQUFjaUMsU0FBL0U7QUFDQTtBQUNBLFlBQUksQ0FBRXJDLFFBQVFzQyxjQUFSLENBQXVCLFFBQXZCLENBQUYsSUFBdUMsd0JBQVNGLFlBQVQsQ0FBdkMsSUFBaUVBLGFBQWFFLGNBQWIsQ0FBNEIvQixRQUE1QixDQUFyRSxFQUE0RztBQUN4Ryx3Q0FBTzRCLFVBQVAsRUFBbUIsRUFBRUksUUFBUUgsYUFBYTdCLFFBQWIsS0FBMEIsRUFBcEMsRUFBbkI7QUFDSDtBQUNELGVBQU80QixVQUFQO0FBQ0g7QUFuR3VCLENBQTVCOztrQkFzR2VuRCxtQiIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcclxuXHJcbmltcG9ydCBpc1VuZGVmaW5lZCBmcm9tICdsb2Rhc2gvbGFuZy9pc1VuZGVmaW5lZCc7XHJcbmltcG9ydCBpc09iamVjdCBmcm9tICdsb2Rhc2gvbGFuZy9pc09iamVjdCc7XHJcbmltcG9ydCBpZGVudGl0eSBmcm9tICdsb2Rhc2gvdXRpbGl0eS9pZGVudGl0eSc7XHJcblxyXG5jb25zdCBmaWVsZEJlaGF2aW91ck1peGluID0ge1xyXG4gICAgX21vZGlmaWVkRmllbGRzOiBbXSxcclxuICAgIF9kZWZhdWx0T25DaGFuZ2UoZmllbGRuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbZmllbGRuYW1lXTogdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIF9idWlsZFJlc2V0U3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVpbGRSZXNldFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkUmVzZXRTdGF0ZSh0aGlzLl9tb2RpZmllZEZpZWxkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RpZmllZEZpZWxkcy5yZWR1Y2UoKGFjYywgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgYWNjW3ZhbHVlXSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgfSxcclxuICAgIF93cmFwcGVkT25DaGFuZ2Uob25DaGFuZ2UsIGZpZWxkbmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5fbW9kaWZpZWRGaWVsZHMuaW5kZXhPZihmaWVsZG5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2RpZmllZEZpZWxkcy5wdXNoKGZpZWxkbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVmYXVsdE9uQ2hhbmdlKGZpZWxkbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICogQnVpbGQgdGhlIGZpZWxkIHByb3BlcnRpZXMuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gcHJvcGVydHkgbmFtZS5cclxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBBbiBvYmplY3Qgd2hpY2ggY29udGFpbnMgYWxsIG9wdGlvbnMgZm9yIHRoZSBidWlsdCBvZiB0aGUgZmllbGRcclxuICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBGdW5jdGlvbiBjb250ZXh0LCB0aGlzIGJ5IGRlZmF1bHQuXHJcbiAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gVGhlIGNvbnN0cnVjdGVkIHByb3BzIGZvciB0aGUgZmllbGQuXHJcbiAgICAqL1xyXG4gICAgX2J1aWxkRmllbGRQcm9wcyhuYW1lLCBvcHRpb25zID0ge30sIGNvbnRleHQpIHtcclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzO1xyXG4gICAgICAgIC8vUHJvcGVydGllcy5cclxuICAgICAgICBjb25zdCBpc0VkaXQgPSBvcHRpb25zLmlzRWRpdCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5pc0VkaXQgOiBjb250ZXh0LnN0YXRlLmlzRWRpdDtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnMudmFsdWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMudmFsdWUgOiBjb250ZXh0LnN0YXRlW25hbWVdO1xyXG4gICAgICAgIGNvbnN0IGRlZiA9IChjb250ZXh0LmRlZmluaXRpb24gJiYgY29udGV4dC5kZWZpbml0aW9uW25hbWVdKSA/IGNvbnRleHQuZGVmaW5pdGlvbltuYW1lXSA6IHt9O1xyXG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gb3B0aW9ucy5saXN0TmFtZSB8fCBkZWYubGlzdE5hbWU7XHJcbiAgICAgICAgLy9oYXNMYWJlbFxyXG4gICAgICAgIGNvbnN0IGhhc0xhYmVsID0gKGZ1bmN0aW9uIGhhc0xhYmVsKCkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oYXNMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5oYXNMYWJlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGVmLmhhc0xhYmVsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmhhc0xhYmVsO1xyXG4gICAgICAgICAgICB9IHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgLy9CdWlsZCBhIGNvbnRhaW5lciBmb3IgdGhlIHByb3BzLlxyXG4gICAgICAgIGNvbnN0IGJhc2VOYW1lID0gbmFtZTtcclxuICAgICAgICBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IGAke3RoaXMuZGVmaW5pdGlvblBhdGh9LiR7bmFtZX1gO1xyXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB0aGlzLl93cmFwcGVkT25DaGFuZ2Uob3B0aW9ucy5vbkNoYW5nZSB8fCAob3B0aW9ucy5vcHRpb25zIHx8IHt9KS5vbkNoYW5nZSB8fCBkZWYub25DaGFuZ2UsIGJhc2VOYW1lLCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb3BzQ29udGFpbmVyID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDogZGVmLmxhYmVsIHx8IG9wdGlvbnMubGFiZWwgfHwgbmFtZSxcclxuICAgICAgICAgICAgcmVmOiBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgIGRvbWFpbjogb3B0aW9ucy5kb21haW4gfHwgZGVmLmRvbWFpbixcclxuICAgICAgICAgICAgZXJyb3I6IGNvbnRleHQuc3RhdGUuZXJyb3IgPyBjb250ZXh0LnN0YXRlLmVycm9yW25hbWVdIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBsb2NhbGU6IGRlZi5sb2NhbGUsXHJcbiAgICAgICAgICAgIGZvcm1hdDogZGVmLmZvcm1hdCxcclxuICAgICAgICAgICAgLy9Nb2RlXHJcbiAgICAgICAgICAgIGlzRWRpdDogaXNFZGl0LFxyXG4gICAgICAgICAgICBoYXNMYWJlbDogaGFzTGFiZWwsXHJcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ6ICghaXNVbmRlZmluZWQob3B0aW9ucy5pc1JlcXVpcmVkKSAmJiBvcHRpb25zLmlzUmVxdWlyZWQpIHx8IGRlZi5pc1JlcXVpcmVkIHx8IGRlZi5yZXF1aXJlZCwgLy9sZWdhY3kgb24gcmVxdWlyZWQgb24gbW9kZWwgZ2VuZXJhdGlvbi5cclxuICAgICAgICAgICAgLy9TdHlsZVxyXG4gICAgICAgICAgICBzdHlsZTogb3B0aW9ucy5zdHlsZSxcclxuICAgICAgICAgICAgLy8gVHlwZVxyXG4gICAgICAgICAgICB0eXBlOiBkZWYudHlwZSxcclxuICAgICAgICAgICAgLy9NZXRob2RzXHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjogZGVmLnZhbGlkYXRvcixcclxuICAgICAgICAgICAgZm9ybWF0dGVyOiBkZWYuZm9ybWF0dGVyIHx8IGlkZW50aXR5LFxyXG4gICAgICAgICAgICB1bmZvcm1hdHRlcjogZGVmLnVuZm9ybWF0dGVyIHx8IGlkZW50aXR5LFxyXG4gICAgICAgICAgICAvL0NvbXBvbmVudFxyXG4gICAgICAgICAgICBGaWVsZENvbXBvbmVudDogZGVmLkZpZWxkQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBJbnB1dExhYmVsQ29tcG9uZW50OiBkZWYuSW5wdXRMYWJlbENvbXBvbmVudCxcclxuICAgICAgICAgICAgSW5wdXRDb21wb25lbnQ6IGRlZi5JbnB1dENvbXBvbmVudCxcclxuICAgICAgICAgICAgU2VsZWN0Q29tcG9uZW50OiBkZWYuU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICBUZXh0Q29tcG9uZW50OiBkZWYuVGV4dENvbXBvbmVudCxcclxuICAgICAgICAgICAgRGlzcGxheUNvbXBvbmVudDogZGVmLkRpc3BsYXlDb21wb25lbnQsXHJcbiAgICAgICAgICAgIExhYmVsQ29tcG9uZW50OiBkZWYuTGFiZWxDb21wb25lbnQsXHJcbiAgICAgICAgICAgIEF1dG9jb21wbGV0ZVNlbGVjdENvbXBvbmVudDogZGVmLkF1dG9jb21wbGV0ZVNlbGVjdENvbXBvbmVudCxcclxuICAgICAgICAgICAgQXV0b2NvbXBsZXRlVGV4dENvbXBvbmVudDogZGVmLkF1dG9jb21wbGV0ZVRleHRDb21wb25lbnQsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMub3B0aW9ucyB8fCBkZWYub3B0aW9ucyAvL0FkZCBvcHRpb25zIHRvIHRoZSBmaWVsZHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vRXh0ZW5kIHRoZSBvcHRpb25zIG9iamVjdCBpbiBvcmRlciB0byBiZSBhYmxlIHRvIHNwZWNpZnkgbW9yZSBvcHRpb25zIHRvIHRoaWUgc29uJ3MgY29tcG9uZW50LlxyXG4gICAgICAgIGxldCBmaWVsZFByb3BzID0gYXNzaWduKHByb3BzQ29udGFpbmVyLCBvcHRpb25zLCBvcHRpb25zLm9wdGlvbnMgfHwgZGVmLm9wdGlvbnMpO1xyXG4gICAgICAgIC8vIEZvcmNpbmcgdGhlIHVzZSBvZiB0aGUgd3JhcHBlciBmb3Igb25DaGFuZ2VcclxuICAgICAgICBmaWVsZFByb3BzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XHJcblxyXG4gICAgICAgIC8vIFZhbHVlcyBsaXN0LlxyXG4gICAgICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IG9wdGlvbnMucmVmQ29udGFpbmVyIHx8IGRlZi5yZWZDb250YWluZXIgfHwgY29udGV4dC5zdGF0ZS5yZWZlcmVuY2U7XHJcbiAgICAgICAgLy8gY2FzZSBubyBwcm9wcy52YWx1ZXMgYW5kIHRoZW5cclxuICAgICAgICBpZiAoIShvcHRpb25zLmhhc093blByb3BlcnR5KCd2YWx1ZXMnKSkgJiYgaXNPYmplY3QocmVmQ29udGFpbmVyKSAmJiByZWZDb250YWluZXIuaGFzT3duUHJvcGVydHkobGlzdE5hbWUpKSB7XHJcbiAgICAgICAgICAgIGFzc2lnbihmaWVsZFByb3BzLCB7IHZhbHVlczogcmVmQ29udGFpbmVyW2xpc3ROYW1lXSB8fCBbXSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkUHJvcHM7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaWVsZEJlaGF2aW91ck1peGluO1xyXG4iXX0=