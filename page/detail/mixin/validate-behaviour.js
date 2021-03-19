'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isEmpty = require('lodash/lang/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
    validate: function validate() {
        var validationMap = {};
        for (var blockKey in this.refs) {
            //validate only the reference elements which have valide function
            // todo: @pierr see if it is sufficient
            if ((0, _isFunction2.default)(this.refs[blockKey].validate)) {
                var validationRes = this.refs[blockKey].validate();
                if (validationRes !== undefined) {
                    (0, _objectAssign2.default)(validationMap, _defineProperty({}, blockKey, validationRes));
                }
            }
        }
        if ((0, _isEmpty2.default)(validationMap)) {
            return true;
        }
    }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJ2YWxpZGF0aW9uTWFwIiwiYmxvY2tLZXkiLCJyZWZzIiwidmFsaWRhdGlvblJlcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7OztrQkFFZTtBQUNYQSxZQURXLHNCQUNBO0FBQ1AsWUFBSUMsZ0JBQWdCLEVBQXBCO0FBQ0EsYUFBSyxJQUFJQyxRQUFULElBQXFCLEtBQUtDLElBQTFCLEVBQWdDO0FBQzVCO0FBQ0E7QUFDQSxnQkFBSSwwQkFBVyxLQUFLQSxJQUFMLENBQVVELFFBQVYsRUFBb0JGLFFBQS9CLENBQUosRUFBOEM7QUFDMUMsb0JBQUlJLGdCQUFnQixLQUFLRCxJQUFMLENBQVVELFFBQVYsRUFBb0JGLFFBQXBCLEVBQXBCO0FBQ0Esb0JBQUlJLGtCQUFrQkMsU0FBdEIsRUFBaUM7QUFDN0IsZ0RBQU9KLGFBQVAsc0JBQ0tDLFFBREwsRUFDZ0JFLGFBRGhCO0FBR0g7QUFDSjtBQUVKO0FBQ0QsWUFBSSx1QkFBUUgsYUFBUixDQUFKLEVBQTRCO0FBQ3hCLG1CQUFPLElBQVA7QUFDSDtBQUNKO0FBbkJVLEMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9sYW5nL2lzRnVuY3Rpb24nO1xyXG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvbGFuZy9pc0VtcHR5JztcclxuXHJcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB2YWxpZGF0ZSgpIHtcclxuICAgICAgICBsZXQgdmFsaWRhdGlvbk1hcCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGJsb2NrS2V5IGluIHRoaXMucmVmcykge1xyXG4gICAgICAgICAgICAvL3ZhbGlkYXRlIG9ubHkgdGhlIHJlZmVyZW5jZSBlbGVtZW50cyB3aGljaCBoYXZlIHZhbGlkZSBmdW5jdGlvblxyXG4gICAgICAgICAgICAvLyB0b2RvOiBAcGllcnIgc2VlIGlmIGl0IGlzIHN1ZmZpY2llbnRcclxuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5yZWZzW2Jsb2NrS2V5XS52YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uUmVzID0gdGhpcy5yZWZzW2Jsb2NrS2V5XS52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25SZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbih2YWxpZGF0aW9uTWFwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtibG9ja0tleV06IHZhbGlkYXRpb25SZXNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRW1wdHkodmFsaWRhdGlvbk1hcCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iXX0=