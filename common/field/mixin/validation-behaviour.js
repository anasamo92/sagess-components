'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validate = require('sagess-core/definition/validator/validate');

var _validate2 = _interopRequireDefault(_validate);

var _isNull = require('lodash/lang/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isString = require('lodash/lang/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isObject = require('lodash/lang/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isEmpty = require('lodash/lang/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _i18n = require('../../i18n');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validationMixin = {
    mixins: [_i18n.mixin],
    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            isRequired: false,
            validator: undefined
        };
    },
    /**
    * Compute the validation status and merge all errors into one.
    * @param  {object} validationStatus - The result from the validation.
    * @return {true | string} - true if the validation is ok and a message if it is not the case.
    */
    _computeValidationStatus: function _computeValidationStatus(validationStatus) {
        if (validationStatus.isValid) {
            return true;
        }
        return validationStatus.errors.join(', ');
    },

    /**
    * Validate the input.
    * @return {object}
    */
    validateInput: function validateInput() {
        var shouldComponentHandleValidation = this.refs && this.refs.input && (0, _isFunction2.default)(this.refs.input.validate);
        var value = this.getValue();
        var _props = this.props,
            isRequired = _props.isRequired,
            validator = _props.validator,
            label = _props.label;

        var isEmptyValue = (0, _isUndefined2.default)(value) || (0, _isNull2.default)(value) || ((0, _isArray2.default)(value) || (0, _isObject2.default)(value) || (0, _isString2.default)(value)) && (0, _isEmpty2.default)(value);

        if (isRequired && isEmptyValue) {
            return this.i18n('field.required', { name: this.i18n(label) });
        }
        //The validation is performed only when the field has a value, otherwise, only the required validation is performed.
        if (validator && !isEmptyValue) {
            var validStat = this._computeValidationStatus((0, _validate2.default)({ value: value, name: this.i18n(label) }, validator));
            if (true !== validStat) {
                validStat = this.i18n(validStat);
            }
            return validStat;
        }
        return shouldComponentHandleValidation ? this._customValidate(this.refs.input) : true;
    },
    _customValidate: function _customValidate(_ref) {
        var componentValidation = _ref.validate;

        var _componentValidation = componentValidation(),
            isValid = _componentValidation.isValid,
            message = _componentValidation.message;

        return isValid ? true : this.i18n(message);
    },

    /**
    * Validate the field.
    * @return {object} - undefined if valid, {name: "errors"} if not valid.
    */
    validate: function validate() {
        var isValid = this.validateInput();
        if (true !== isValid) {
            this.setError(isValid);
            return isValid;
        }
    },

    /**
    * Set the error on the field.
    * @param error Error to set.
    */
    setError: function setError(error) {
        this.setState({ error: error });
    }
};

exports.default = validationMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsidmFsaWRhdGlvbk1peGluIiwibWl4aW5zIiwiaTE4bk1peGluIiwiZ2V0RGVmYXVsdFByb3BzIiwiaXNSZXF1aXJlZCIsInZhbGlkYXRvciIsInVuZGVmaW5lZCIsIl9jb21wdXRlVmFsaWRhdGlvblN0YXR1cyIsInZhbGlkYXRpb25TdGF0dXMiLCJpc1ZhbGlkIiwiZXJyb3JzIiwiam9pbiIsInZhbGlkYXRlSW5wdXQiLCJzaG91bGRDb21wb25lbnRIYW5kbGVWYWxpZGF0aW9uIiwicmVmcyIsImlucHV0IiwidmFsaWRhdGUiLCJ2YWx1ZSIsImdldFZhbHVlIiwicHJvcHMiLCJsYWJlbCIsImlzRW1wdHlWYWx1ZSIsImkxOG4iLCJuYW1lIiwidmFsaWRTdGF0IiwiX2N1c3RvbVZhbGlkYXRlIiwiY29tcG9uZW50VmFsaWRhdGlvbiIsIm1lc3NhZ2UiLCJzZXRFcnJvciIsImVycm9yIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBLElBQUlBLGtCQUFrQjtBQUNsQkMsWUFBUSxDQUFDQyxXQUFELENBRFU7QUFFbEI7QUFDQUMscUJBQWlCLFNBQVNBLGVBQVQsR0FBMkI7QUFDeEMsZUFBTztBQUNIQyx3QkFBWSxLQURUO0FBRUhDLHVCQUFXQztBQUZSLFNBQVA7QUFJSCxLQVJpQjtBQVNsQjs7Ozs7QUFLQUMsNEJBZGtCLG9DQWNPQyxnQkFkUCxFQWN5QjtBQUN2QyxZQUFJQSxpQkFBaUJDLE9BQXJCLEVBQThCO0FBQzFCLG1CQUFPLElBQVA7QUFDSDtBQUNELGVBQU9ELGlCQUFpQkUsTUFBakIsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBQVA7QUFDSCxLQW5CaUI7O0FBb0JsQjs7OztBQUlBQyxpQkF4QmtCLDJCQXdCRjtBQUNaLFlBQU1DLGtDQUFrQyxLQUFLQyxJQUFMLElBQWEsS0FBS0EsSUFBTCxDQUFVQyxLQUF2QixJQUFnQywwQkFBVyxLQUFLRCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLFFBQTNCLENBQXhFO0FBQ0EsWUFBSUMsUUFBUSxLQUFLQyxRQUFMLEVBQVo7QUFGWSxxQkFHMkIsS0FBS0MsS0FIaEM7QUFBQSxZQUdOZixVQUhNLFVBR05BLFVBSE07QUFBQSxZQUdNQyxTQUhOLFVBR01BLFNBSE47QUFBQSxZQUdpQmUsS0FIakIsVUFHaUJBLEtBSGpCOztBQUlaLFlBQUlDLGVBQWUsMkJBQVlKLEtBQVosS0FBc0Isc0JBQU9BLEtBQVAsQ0FBdEIsSUFBd0MsQ0FBQyx1QkFBUUEsS0FBUixLQUFrQix3QkFBU0EsS0FBVCxDQUFsQixJQUFxQyx3QkFBU0EsS0FBVCxDQUF0QyxLQUEwRCx1QkFBUUEsS0FBUixDQUFySDs7QUFFQSxZQUFJYixjQUFjaUIsWUFBbEIsRUFBZ0M7QUFDNUIsbUJBQU8sS0FBS0MsSUFBTCxDQUFVLGdCQUFWLEVBQTRCLEVBQUVDLE1BQU0sS0FBS0QsSUFBTCxDQUFVRixLQUFWLENBQVIsRUFBNUIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSxZQUFJZixhQUFhLENBQUNnQixZQUFsQixFQUFnQztBQUM1QixnQkFBSUcsWUFBWSxLQUFLakIsd0JBQUwsQ0FDWix3QkFDSSxFQUFFVSxPQUFPQSxLQUFULEVBQWdCTSxNQUFNLEtBQUtELElBQUwsQ0FBVUYsS0FBVixDQUF0QixFQURKLEVBRUlmLFNBRkosQ0FEWSxDQUFoQjtBQU1BLGdCQUFJLFNBQVNtQixTQUFiLEVBQXdCO0FBQ3BCQSw0QkFBWSxLQUFLRixJQUFMLENBQVVFLFNBQVYsQ0FBWjtBQUNIO0FBQ0QsbUJBQU9BLFNBQVA7QUFDSDtBQUNELGVBQU9YLGtDQUFrQyxLQUFLWSxlQUFMLENBQXFCLEtBQUtYLElBQUwsQ0FBVUMsS0FBL0IsQ0FBbEMsR0FBMEUsSUFBakY7QUFDSCxLQS9DaUI7QUFnRGxCVSxtQkFoRGtCLGlDQWdEaUM7QUFBQSxZQUF2QkMsbUJBQXVCLFFBQWpDVixRQUFpQzs7QUFBQSxtQ0FDbEJVLHFCQURrQjtBQUFBLFlBQ3ZDakIsT0FEdUMsd0JBQ3ZDQSxPQUR1QztBQUFBLFlBQzlCa0IsT0FEOEIsd0JBQzlCQSxPQUQ4Qjs7QUFFL0MsZUFBT2xCLFVBQVUsSUFBVixHQUFpQixLQUFLYSxJQUFMLENBQVVLLE9BQVYsQ0FBeEI7QUFDSCxLQW5EaUI7O0FBb0RsQjs7OztBQUlBWCxZQXhEa0Isc0JBd0RQO0FBQ1AsWUFBTVAsVUFBVSxLQUFLRyxhQUFMLEVBQWhCO0FBQ0EsWUFBSSxTQUFTSCxPQUFiLEVBQXNCO0FBQ2xCLGlCQUFLbUIsUUFBTCxDQUFjbkIsT0FBZDtBQUNBLG1CQUFPQSxPQUFQO0FBQ0g7QUFDSixLQTlEaUI7O0FBK0RsQjs7OztBQUlBbUIsWUFuRWtCLG9CQW1FVEMsS0FuRVMsRUFtRUY7QUFDWixhQUFLQyxRQUFMLENBQWMsRUFBRUQsT0FBT0EsS0FBVCxFQUFkO0FBQ0g7QUFyRWlCLENBQXRCOztrQkF3RWU3QixlIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICdzYWdlc3MtY29yZS9kZWZpbml0aW9uL3ZhbGlkYXRvci92YWxpZGF0ZSc7XG5cbmltcG9ydCBpc051bGwgZnJvbSAnbG9kYXNoL2xhbmcvaXNOdWxsJztcbmltcG9ydCBpc1VuZGVmaW5lZCBmcm9tICdsb2Rhc2gvbGFuZy9pc1VuZGVmaW5lZCc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvbGFuZy9pc0FycmF5JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvbGFuZy9pc1N0cmluZyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnbG9kYXNoL2xhbmcvaXNPYmplY3QnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2xhbmcvaXNGdW5jdGlvbic7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvbGFuZy9pc0VtcHR5JztcblxuaW1wb3J0IHsgbWl4aW4gYXMgaTE4bk1peGluIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5cbmxldCB2YWxpZGF0aW9uTWl4aW4gPSB7XG4gICAgbWl4aW5zOiBbaTE4bk1peGluXSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogQ29tcHV0ZSB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgYW5kIG1lcmdlIGFsbCBlcnJvcnMgaW50byBvbmUuXG4gICAgKiBAcGFyYW0gIHtvYmplY3R9IHZhbGlkYXRpb25TdGF0dXMgLSBUaGUgcmVzdWx0IGZyb20gdGhlIHZhbGlkYXRpb24uXG4gICAgKiBAcmV0dXJuIHt0cnVlIHwgc3RyaW5nfSAtIHRydWUgaWYgdGhlIHZhbGlkYXRpb24gaXMgb2sgYW5kIGEgbWVzc2FnZSBpZiBpdCBpcyBub3QgdGhlIGNhc2UuXG4gICAgKi9cbiAgICBfY29tcHV0ZVZhbGlkYXRpb25TdGF0dXModmFsaWRhdGlvblN0YXR1cykge1xuICAgICAgICBpZiAodmFsaWRhdGlvblN0YXR1cy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvblN0YXR1cy5lcnJvcnMuam9pbignLCAnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogVmFsaWRhdGUgdGhlIGlucHV0LlxuICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICovXG4gICAgdmFsaWRhdGVJbnB1dCgpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkQ29tcG9uZW50SGFuZGxlVmFsaWRhdGlvbiA9IHRoaXMucmVmcyAmJiB0aGlzLnJlZnMuaW5wdXQgJiYgaXNGdW5jdGlvbih0aGlzLnJlZnMuaW5wdXQudmFsaWRhdGUpO1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGxldCB7IGlzUmVxdWlyZWQsIHZhbGlkYXRvciwgbGFiZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBpc0VtcHR5VmFsdWUgPSBpc1VuZGVmaW5lZCh2YWx1ZSkgfHwgaXNOdWxsKHZhbHVlKSB8fCAoKGlzQXJyYXkodmFsdWUpIHx8IGlzT2JqZWN0KHZhbHVlKSB8fCBpc1N0cmluZyh2YWx1ZSkpICYmIGlzRW1wdHkodmFsdWUpKTtcblxuICAgICAgICBpZiAoaXNSZXF1aXJlZCAmJiBpc0VtcHR5VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmkxOG4oJ2ZpZWxkLnJlcXVpcmVkJywgeyBuYW1lOiB0aGlzLmkxOG4obGFiZWwpIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vVGhlIHZhbGlkYXRpb24gaXMgcGVyZm9ybWVkIG9ubHkgd2hlbiB0aGUgZmllbGQgaGFzIGEgdmFsdWUsIG90aGVyd2lzZSwgb25seSB0aGUgcmVxdWlyZWQgdmFsaWRhdGlvbiBpcyBwZXJmb3JtZWQuXG4gICAgICAgIGlmICh2YWxpZGF0b3IgJiYgIWlzRW1wdHlWYWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZhbGlkU3RhdCA9IHRoaXMuX2NvbXB1dGVWYWxpZGF0aW9uU3RhdHVzKFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlKFxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiB2YWx1ZSwgbmFtZTogdGhpcy5pMThuKGxhYmVsKSB9LFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHRydWUgIT09IHZhbGlkU3RhdCkge1xuICAgICAgICAgICAgICAgIHZhbGlkU3RhdCA9IHRoaXMuaTE4bih2YWxpZFN0YXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkU3RhdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hvdWxkQ29tcG9uZW50SGFuZGxlVmFsaWRhdGlvbiA/IHRoaXMuX2N1c3RvbVZhbGlkYXRlKHRoaXMucmVmcy5pbnB1dCkgOiB0cnVlO1xuICAgIH0sXG4gICAgX2N1c3RvbVZhbGlkYXRlKHsgdmFsaWRhdGU6IGNvbXBvbmVudFZhbGlkYXRpb24gfSkge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWQsIG1lc3NhZ2UgfSA9IGNvbXBvbmVudFZhbGlkYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQgPyB0cnVlIDogdGhpcy5pMThuKG1lc3NhZ2UpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBWYWxpZGF0ZSB0aGUgZmllbGQuXG4gICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gdW5kZWZpbmVkIGlmIHZhbGlkLCB7bmFtZTogXCJlcnJvcnNcIn0gaWYgbm90IHZhbGlkLlxuICAgICovXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlSW5wdXQoKTtcbiAgICAgICAgaWYgKHRydWUgIT09IGlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3IoaXNWYWxpZCk7XG4gICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBTZXQgdGhlIGVycm9yIG9uIHRoZSBmaWVsZC5cbiAgICAqIEBwYXJhbSBlcnJvciBFcnJvciB0byBzZXQuXG4gICAgKi9cbiAgICBzZXRFcnJvcihlcnJvcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IGVycm9yIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRpb25NaXhpbjtcbiJdfQ==