'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _reactHtmlAttributes = require('./react-html-attributes');

var _pairs = require('lodash/object/pairs');

var _pairs2 = _interopRequireDefault(_pairs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Filter the incoming props, so only valid props for native HTML elements are passed through.
 * Value prop is also defaulted to empty string, instead of null or undefined.
 * 
 * @param {object} props the incoming props
 * @returns {object} an object with valid <props></props>
 */
function checkProps(props) {
    return (0, _pairs2.default)(props).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (_reactHtmlAttributes.inputHtmlAttributes.indexOf(key) !== -1 || _reactHtmlAttributes.eventHtmlAttributes.indexOf(key) !== -1 || key.startsWith('data-') || key.startsWith('aria-')) {
            acc[key] = key === 'value' && (value === null || value === undefined) ? '' : value;
        }
        return acc;
    }, {});
}

exports.default = checkProps;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY2hlY2tQcm9wcyIsInByb3BzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwidmFsdWUiLCJpbnB1dEh0bWxBdHRyaWJ1dGVzIiwiaW5kZXhPZiIsImV2ZW50SHRtbEF0dHJpYnV0ZXMiLCJzdGFydHNXaXRoIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQTs7Ozs7OztBQU9BLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3ZCLFdBQU8scUJBQU1BLEtBQU4sRUFBYUMsTUFBYixDQUFvQixVQUFDQyxHQUFELFFBQXVCO0FBQUE7QUFBQSxZQUFoQkMsR0FBZ0I7QUFBQSxZQUFYQyxLQUFXOztBQUM5QyxZQUFJQyx5Q0FBb0JDLE9BQXBCLENBQTRCSCxHQUE1QixNQUFxQyxDQUFDLENBQXRDLElBQTJDSSx5Q0FBb0JELE9BQXBCLENBQTRCSCxHQUE1QixNQUFxQyxDQUFDLENBQWpGLElBQXNGQSxJQUFJSyxVQUFKLENBQWUsT0FBZixDQUF0RixJQUFpSEwsSUFBSUssVUFBSixDQUFlLE9BQWYsQ0FBckgsRUFBOEk7QUFDMUlOLGdCQUFJQyxHQUFKLElBQVlBLFFBQVEsT0FBUixLQUFvQkMsVUFBVSxJQUFWLElBQWtCQSxVQUFVSyxTQUFoRCxDQUFELEdBQStELEVBQS9ELEdBQW9FTCxLQUEvRTtBQUNIO0FBQ0QsZUFBT0YsR0FBUDtBQUNILEtBTE0sRUFLSixFQUxJLENBQVA7QUFNSDs7a0JBRWNILFUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlucHV0SHRtbEF0dHJpYnV0ZXMsIGV2ZW50SHRtbEF0dHJpYnV0ZXMgfSBmcm9tICcuL3JlYWN0LWh0bWwtYXR0cmlidXRlcyc7XHJcbmltcG9ydCBwYWlycyBmcm9tICdsb2Rhc2gvb2JqZWN0L3BhaXJzJztcclxuXHJcbi8qKlxyXG4gKiBGaWx0ZXIgdGhlIGluY29taW5nIHByb3BzLCBzbyBvbmx5IHZhbGlkIHByb3BzIGZvciBuYXRpdmUgSFRNTCBlbGVtZW50cyBhcmUgcGFzc2VkIHRocm91Z2guXHJcbiAqIFZhbHVlIHByb3AgaXMgYWxzbyBkZWZhdWx0ZWQgdG8gZW1wdHkgc3RyaW5nLCBpbnN0ZWFkIG9mIG51bGwgb3IgdW5kZWZpbmVkLlxyXG4gKiBcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIHRoZSBpbmNvbWluZyBwcm9wc1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBhbiBvYmplY3Qgd2l0aCB2YWxpZCA8cHJvcHM+PC9wcm9wcz5cclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrUHJvcHMocHJvcHMpIHtcclxuICAgIHJldHVybiBwYWlycyhwcm9wcykucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dEh0bWxBdHRyaWJ1dGVzLmluZGV4T2Yoa2V5KSAhPT0gLTEgfHwgZXZlbnRIdG1sQXR0cmlidXRlcy5pbmRleE9mKGtleSkgIT09IC0xIHx8IGtleS5zdGFydHNXaXRoKCdkYXRhLScpIHx8IGtleS5zdGFydHNXaXRoKCdhcmlhLScpKSB7XHJcbiAgICAgICAgICAgIGFjY1trZXldID0gKGtleSA9PT0gJ3ZhbHVlJyAmJiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkpID8gJycgOiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tQcm9wczsgICJdfQ==