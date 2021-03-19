'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Export a method which add an identifier to component;
 * @type {Object}
 */
exports.default = {
    /** @inheriteDoc */
    componentWillMount: function componentWillMount() {
        Object.defineProperty(this, '_identifier', {
            value: _uuid2.default.v4(),
            writable: false,
            enumerable: true,
            configurable: false
        });
    }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY29tcG9uZW50V2lsbE1vdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsInV1aWQiLCJ2NCIsIndyaXRhYmxlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBOzs7O2tCQUllO0FBQ1g7QUFDQUEsc0JBRlcsZ0NBRVU7QUFDakJDLGVBQU9DLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsRUFBMkM7QUFDdkNDLG1CQUFPQyxlQUFLQyxFQUFMLEVBRGdDO0FBRXZDQyxzQkFBVSxLQUY2QjtBQUd2Q0Msd0JBQVksSUFIMkI7QUFJdkNDLDBCQUFjO0FBSnlCLFNBQTNDO0FBTUg7QUFUVSxDIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbi8qKlxyXG4gKiBFeHBvcnQgYSBtZXRob2Qgd2hpY2ggYWRkIGFuIGlkZW50aWZpZXIgdG8gY29tcG9uZW50O1xyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqIEBpbmhlcml0ZURvYyAqL1xyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2lkZW50aWZpZXInLCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB1dWlkLnY0KCksXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG4iXX0=