'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _translation = require('sagess-core/translation');

var _translation2 = _interopRequireDefault(_translation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global window*/
/*todo check the library presence*/
exports.default = {
    /**
     * Compute the translated label.
     * @param key {string}- Key in the dictionnary of translations.
     * @param data {object} - Data to interpole in the translated string.
     * @returns {string} - Translated string.
     */
    i18n: function i18n(key, data) {
        return _translation2.default.translate(key, data);
    }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiaTE4biIsImtleSIsImRhdGEiLCJ0cmFuc2xhdGlvbiIsInRyYW5zbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7a0JBQ2U7QUFDWDs7Ozs7O0FBTUFBLFFBUFcsZ0JBT05DLEdBUE0sRUFPREMsSUFQQyxFQU9LO0FBQ1osZUFBT0Msc0JBQVlDLFNBQVosQ0FBc0JILEdBQXRCLEVBQTJCQyxJQUEzQixDQUFQO0FBQ0g7QUFUVSxDIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhbnNsYXRpb24gZnJvbSAnc2FnZXNzLWNvcmUvdHJhbnNsYXRpb24nXG5cbi8qZ2xvYmFsIHdpbmRvdyovXG4vKnRvZG8gY2hlY2sgdGhlIGxpYnJhcnkgcHJlc2VuY2UqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqIENvbXB1dGUgdGhlIHRyYW5zbGF0ZWQgbGFiZWwuXG4gICAgICogQHBhcmFtIGtleSB7c3RyaW5nfS0gS2V5IGluIHRoZSBkaWN0aW9ubmFyeSBvZiB0cmFuc2xhdGlvbnMuXG4gICAgICogQHBhcmFtIGRhdGEge29iamVjdH0gLSBEYXRhIHRvIGludGVycG9sZSBpbiB0aGUgdHJhbnNsYXRlZCBzdHJpbmcuXG4gICAgICogQHJldHVybnMge3N0cmluZ30gLSBUcmFuc2xhdGVkIHN0cmluZy5cbiAgICAgKi9cbiAgICBpMThuKGtleSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb24udHJhbnNsYXRlKGtleSwgZGF0YSk7XG4gICAgfVxufTtcbiJdfQ==