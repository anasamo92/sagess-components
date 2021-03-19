'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scrollPosition = exports.scrollTo = undefined;

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Get the scroll position from the top of the screen.
* @param {object} node
* @returns {int} - The position in pixel from the top of the scroll container.
*/
function scrollPosition(domNode) {
    if ((0, _isUndefined2.default)(domNode)) {
        var y = window.pageYOffset || document.documentElement.scrollTop;
        var x = window.pageXOffset || document.documentElement.scrollLeft;
        return { top: y, left: x };
    }
    return { top: domNode.scrollTop, left: domNode.scrollLeft };
}

/**
* Set scrollbar position with smooth animation.
* http://www.w3schools.com/jsref/prop_win_pagexoffset.asp
*
* @param {object} element  element parent for the scroll
* @param {number} to       position of the scroll
* @param {number} duration duration of animation
*/
function scrollTo(element, to) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

    if ((0, _isUndefined2.default)(element)) {
        window.scrollTo(0, to);
        return;
    }
    element.scrollTop = to;
}

exports.scrollTo = scrollTo;
exports.scrollPosition = scrollPosition;
exports.default = { scrollTo: scrollTo, scrollPosition: scrollPosition };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsic2Nyb2xsUG9zaXRpb24iLCJkb21Ob2RlIiwieSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ4IiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwidG9wIiwibGVmdCIsInNjcm9sbFRvIiwiZWxlbWVudCIsInRvIiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7Ozs7O0FBS0EsU0FBU0EsY0FBVCxDQUF3QkMsT0FBeEIsRUFBaUM7QUFDN0IsUUFBSSwyQkFBWUEsT0FBWixDQUFKLEVBQTBCO0FBQ3RCLFlBQU1DLElBQUlDLE9BQU9DLFdBQVAsSUFBc0JDLFNBQVNDLGVBQVQsQ0FBeUJDLFNBQXpEO0FBQ0EsWUFBTUMsSUFBSUwsT0FBT00sV0FBUCxJQUFzQkosU0FBU0MsZUFBVCxDQUF5QkksVUFBekQ7QUFDQSxlQUFPLEVBQUVDLEtBQUtULENBQVAsRUFBVVUsTUFBTUosQ0FBaEIsRUFBUDtBQUNIO0FBQ0QsV0FBTyxFQUFFRyxLQUFLVixRQUFRTSxTQUFmLEVBQTBCSyxNQUFNWCxRQUFRUyxVQUF4QyxFQUFQO0FBQ0g7O0FBR0Q7Ozs7Ozs7O0FBUUEsU0FBU0csUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkJDLEVBQTNCLEVBQStDO0FBQUEsUUFBaEJDLFFBQWdCLHVFQUFMLEdBQUs7O0FBQzNDLFFBQUksMkJBQVlGLE9BQVosQ0FBSixFQUEwQjtBQUN0QlgsZUFBT1UsUUFBUCxDQUFnQixDQUFoQixFQUFtQkUsRUFBbkI7QUFDQTtBQUNIO0FBQ0RELFlBQVFQLFNBQVIsR0FBb0JRLEVBQXBCO0FBQ0g7O1FBRVFGLFEsR0FBQUEsUTtRQUFVYixjLEdBQUFBLGM7a0JBQ0osRUFBRWEsa0JBQUYsRUFBWWIsOEJBQVosRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzVW5kZWZpbmVkIGZyb20gJ2xvZGFzaC9sYW5nL2lzVW5kZWZpbmVkJztcclxuXHJcbi8qKlxyXG4qIEdldCB0aGUgc2Nyb2xsIHBvc2l0aW9uIGZyb20gdGhlIHRvcCBvZiB0aGUgc2NyZWVuLlxyXG4qIEBwYXJhbSB7b2JqZWN0fSBub2RlXHJcbiogQHJldHVybnMge2ludH0gLSBUaGUgcG9zaXRpb24gaW4gcGl4ZWwgZnJvbSB0aGUgdG9wIG9mIHRoZSBzY3JvbGwgY29udGFpbmVyLlxyXG4qL1xyXG5mdW5jdGlvbiBzY3JvbGxQb3NpdGlvbihkb21Ob2RlKSB7XHJcbiAgICBpZiAoaXNVbmRlZmluZWQoZG9tTm9kZSkpIHtcclxuICAgICAgICBjb25zdCB5ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgY29uc3QgeCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICByZXR1cm4geyB0b3A6IHksIGxlZnQ6IHggfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHRvcDogZG9tTm9kZS5zY3JvbGxUb3AsIGxlZnQ6IGRvbU5vZGUuc2Nyb2xsTGVmdCB9O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiogU2V0IHNjcm9sbGJhciBwb3NpdGlvbiB3aXRoIHNtb290aCBhbmltYXRpb24uXHJcbiogaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2pzcmVmL3Byb3Bfd2luX3BhZ2V4b2Zmc2V0LmFzcFxyXG4qXHJcbiogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgIGVsZW1lbnQgcGFyZW50IGZvciB0aGUgc2Nyb2xsXHJcbiogQHBhcmFtIHtudW1iZXJ9IHRvICAgICAgIHBvc2l0aW9uIG9mIHRoZSBzY3JvbGxcclxuKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gZHVyYXRpb24gb2YgYW5pbWF0aW9uXHJcbiovXHJcbmZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiA9IDUwMCkge1xyXG4gICAgaWYgKGlzVW5kZWZpbmVkKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHRvKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHRvO1xyXG59XHJcblxyXG5leHBvcnQgeyBzY3JvbGxUbywgc2Nyb2xsUG9zaXRpb24gfTtcclxuZXhwb3J0IGRlZmF1bHQgeyBzY3JvbGxUbywgc2Nyb2xsUG9zaXRpb24gfTtcclxuIl19