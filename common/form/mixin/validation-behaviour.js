'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Validate each field of the form.
* In case of errors the state is modified.
* @returns {boolean} - A boolean true if the validation is correct.
*/
function _fieldsValidation() {
    var validationMap = {};
    var isValid = true;
    for (var inptKey in this.refs) {
        var refElt = this.refs[inptKey];
        //validate only the reference elements which have valid function
        if ((0, _isFunction2.default)(refElt.validate) || (0, _isFunction2.default)(refElt._validate)) {
            var validationRes = (0, _isFunction2.default)(refElt.validate) ? refElt.validate() : refElt._validate();
            if (validationRes !== undefined && validationRes !== true) {
                isValid = false;
            }
        }
    }
    return isValid;
}
/**
 * Custom validation of the field.
 * @return {true} -  If the custom validation is defined.
 */
//Dependencies.
function _customValidation() {
    if (this.customValidation) {
        return this.customValidation();
    }
    return true;
}
/**
 * Validate .
 * @return {boolean} - True if the validation is ok.
 */
function _validate() {
    var fieldsValidation = this._fieldsValidation();
    var customValidation = this._customValidation();

    return fieldsValidation && customValidation;
}

exports.default = {
    _fieldsValidation: _fieldsValidation,
    _customValidation: _customValidation,
    _validate: _validate
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiX2ZpZWxkc1ZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uTWFwIiwiaXNWYWxpZCIsImlucHRLZXkiLCJyZWZzIiwicmVmRWx0IiwidmFsaWRhdGUiLCJfdmFsaWRhdGUiLCJ2YWxpZGF0aW9uUmVzIiwidW5kZWZpbmVkIiwiX2N1c3RvbVZhbGlkYXRpb24iLCJjdXN0b21WYWxpZGF0aW9uIiwiZmllbGRzVmFsaWRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLFNBQVNBLGlCQUFULEdBQTZCO0FBQ3pCLFFBQUlDLGdCQUFnQixFQUFwQjtBQUNBLFFBQUlDLFVBQVUsSUFBZDtBQUNBLFNBQUssSUFBSUMsT0FBVCxJQUFvQixLQUFLQyxJQUF6QixFQUErQjtBQUMzQixZQUFNQyxTQUFTLEtBQUtELElBQUwsQ0FBVUQsT0FBVixDQUFmO0FBQ0E7QUFDQSxZQUFJLDBCQUFXRSxPQUFPQyxRQUFsQixLQUErQiwwQkFBV0QsT0FBT0UsU0FBbEIsQ0FBbkMsRUFBaUU7QUFDN0QsZ0JBQUlDLGdCQUFnQiwwQkFBV0gsT0FBT0MsUUFBbEIsSUFBOEJELE9BQU9DLFFBQVAsRUFBOUIsR0FBa0RELE9BQU9FLFNBQVAsRUFBdEU7QUFDQSxnQkFBSUMsa0JBQWtCQyxTQUFsQixJQUErQkQsa0JBQWtCLElBQXJELEVBQTJEO0FBQ3ZETiwwQkFBVSxLQUFWO0FBQ0g7QUFDSjtBQUNKO0FBQ0QsV0FBT0EsT0FBUDtBQUNIO0FBQ0Q7Ozs7QUF2QkE7QUEyQkEsU0FBU1EsaUJBQVQsR0FBNkI7QUFDekIsUUFBSSxLQUFLQyxnQkFBVCxFQUEyQjtBQUN2QixlQUFPLEtBQUtBLGdCQUFMLEVBQVA7QUFDSDtBQUNELFdBQU8sSUFBUDtBQUNIO0FBQ0Q7Ozs7QUFJQSxTQUFTSixTQUFULEdBQXFCO0FBQ2pCLFFBQU1LLG1CQUFtQixLQUFLWixpQkFBTCxFQUF6QjtBQUNBLFFBQU1XLG1CQUFtQixLQUFLRCxpQkFBTCxFQUF6Qjs7QUFFQSxXQUFPRSxvQkFBb0JELGdCQUEzQjtBQUNIOztrQkFFYztBQUNYWCx3Q0FEVztBQUVYVSx3Q0FGVztBQUdYSDtBQUhXLEMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRGVwZW5kZW5jaWVzLlxyXG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvbGFuZy9pc0Z1bmN0aW9uJztcclxuXHJcbi8qKlxyXG4qIFZhbGlkYXRlIGVhY2ggZmllbGQgb2YgdGhlIGZvcm0uXHJcbiogSW4gY2FzZSBvZiBlcnJvcnMgdGhlIHN0YXRlIGlzIG1vZGlmaWVkLlxyXG4qIEByZXR1cm5zIHtib29sZWFufSAtIEEgYm9vbGVhbiB0cnVlIGlmIHRoZSB2YWxpZGF0aW9uIGlzIGNvcnJlY3QuXHJcbiovXHJcbmZ1bmN0aW9uIF9maWVsZHNWYWxpZGF0aW9uKCkge1xyXG4gICAgbGV0IHZhbGlkYXRpb25NYXAgPSB7fTtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGlucHRLZXkgaW4gdGhpcy5yZWZzKSB7XHJcbiAgICAgICAgY29uc3QgcmVmRWx0ID0gdGhpcy5yZWZzW2lucHRLZXldO1xyXG4gICAgICAgIC8vdmFsaWRhdGUgb25seSB0aGUgcmVmZXJlbmNlIGVsZW1lbnRzIHdoaWNoIGhhdmUgdmFsaWQgZnVuY3Rpb25cclxuICAgICAgICBpZiAoaXNGdW5jdGlvbihyZWZFbHQudmFsaWRhdGUpIHx8IGlzRnVuY3Rpb24ocmVmRWx0Ll92YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25SZXMgPSBpc0Z1bmN0aW9uKHJlZkVsdC52YWxpZGF0ZSkgPyByZWZFbHQudmFsaWRhdGUoKSA6IHJlZkVsdC5fdmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25SZXMgIT09IHVuZGVmaW5lZCAmJiB2YWxpZGF0aW9uUmVzICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxufVxyXG4vKipcclxuICogQ3VzdG9tIHZhbGlkYXRpb24gb2YgdGhlIGZpZWxkLlxyXG4gKiBAcmV0dXJuIHt0cnVlfSAtICBJZiB0aGUgY3VzdG9tIHZhbGlkYXRpb24gaXMgZGVmaW5lZC5cclxuICovXHJcbmZ1bmN0aW9uIF9jdXN0b21WYWxpZGF0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tVmFsaWRhdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1c3RvbVZhbGlkYXRpb24oKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSAuXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGUgdmFsaWRhdGlvbiBpcyBvay5cclxuICovXHJcbmZ1bmN0aW9uIF92YWxpZGF0ZSgpIHtcclxuICAgIGNvbnN0IGZpZWxkc1ZhbGlkYXRpb24gPSB0aGlzLl9maWVsZHNWYWxpZGF0aW9uKCk7XHJcbiAgICBjb25zdCBjdXN0b21WYWxpZGF0aW9uID0gdGhpcy5fY3VzdG9tVmFsaWRhdGlvbigpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZmllbGRzVmFsaWRhdGlvbiAmJiBjdXN0b21WYWxpZGF0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBfZmllbGRzVmFsaWRhdGlvbixcclxuICAgIF9jdXN0b21WYWxpZGF0aW9uLFxyXG4gICAgX3ZhbGlkYXRlXHJcbn07XHJcbiJdfQ==