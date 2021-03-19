"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DEFAULT_TIMEOUT = 500; // 0.5s

var currentCall = {};

function actionWrapper(searchAction, context, timeout) {
    var _this = this,
        _arguments = arguments;

    return function () {
        context = context || _this || {};
        var args = _arguments;
        if (currentCall) {
            //Cancel previous search action.
            window.clearTimeout(currentCall.timeout);
            if (currentCall.action && currentCall.action.cancel) {
                currentCall.action.cancel();
            }
        }
        currentCall.timeout = window.setTimeout(function () {
            currentCall.action = searchAction.apply(context, args);
            if (currentCall.action && currentCall.action.cancel) {
                currentCall.action.then(function () {
                    currentCall = {};
                });
            } else {
                currentCall = {};
            }
        }, timeout !== undefined ? timeout : DEFAULT_TIMEOUT);
        return currentCall.timeout;
    };
}

exports.default = actionWrapper;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiREVGQVVMVF9USU1FT1VUIiwiY3VycmVudENhbGwiLCJhY3Rpb25XcmFwcGVyIiwic2VhcmNoQWN0aW9uIiwiY29udGV4dCIsInRpbWVvdXQiLCJhcmdzIiwid2luZG93IiwiY2xlYXJUaW1lb3V0IiwiYWN0aW9uIiwiY2FuY2VsIiwic2V0VGltZW91dCIsImFwcGx5IiwidGhlbiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxrQkFBa0IsR0FBeEIsQyxDQUE2Qjs7QUFFN0IsSUFBSUMsY0FBYyxFQUFsQjs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxZQUF2QixFQUFxQ0MsT0FBckMsRUFBOENDLE9BQTlDLEVBQXVEO0FBQUE7QUFBQTs7QUFDbkQsV0FBTyxZQUFNO0FBQ1RELGtCQUFVQSxvQkFBbUIsRUFBN0I7QUFDQSxZQUFJRSxpQkFBSjtBQUNBLFlBQUlMLFdBQUosRUFBaUI7QUFDYjtBQUNBTSxtQkFBT0MsWUFBUCxDQUFvQlAsWUFBWUksT0FBaEM7QUFDQSxnQkFBSUosWUFBWVEsTUFBWixJQUFzQlIsWUFBWVEsTUFBWixDQUFtQkMsTUFBN0MsRUFBcUQ7QUFDakRULDRCQUFZUSxNQUFaLENBQW1CQyxNQUFuQjtBQUNIO0FBQ0o7QUFDRFQsb0JBQVlJLE9BQVosR0FBc0JFLE9BQU9JLFVBQVAsQ0FBa0IsWUFBTTtBQUMxQ1Ysd0JBQVlRLE1BQVosR0FBcUJOLGFBQWFTLEtBQWIsQ0FBbUJSLE9BQW5CLEVBQTRCRSxJQUE1QixDQUFyQjtBQUNBLGdCQUFJTCxZQUFZUSxNQUFaLElBQXNCUixZQUFZUSxNQUFaLENBQW1CQyxNQUE3QyxFQUFxRDtBQUNqRFQsNEJBQVlRLE1BQVosQ0FBbUJJLElBQW5CLENBQXdCLFlBQU07QUFDMUJaLGtDQUFjLEVBQWQ7QUFDSCxpQkFGRDtBQUdILGFBSkQsTUFJTztBQUNIQSw4QkFBYyxFQUFkO0FBQ0g7QUFDSixTQVRxQixFQVVsQkksWUFBWVMsU0FBWixHQUF3QlQsT0FBeEIsR0FBa0NMLGVBVmhCLENBQXRCO0FBWUEsZUFBT0MsWUFBWUksT0FBbkI7QUFDSCxLQXZCRDtBQXdCSDs7a0JBRWNILGEiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDUwMDsgLy8gMC41c1xyXG5cclxubGV0IGN1cnJlbnRDYWxsID0ge307XHJcblxyXG5mdW5jdGlvbiBhY3Rpb25XcmFwcGVyKHNlYXJjaEFjdGlvbiwgY29udGV4dCwgdGltZW91dCkge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzIHx8IHt9O1xyXG4gICAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIGlmIChjdXJyZW50Q2FsbCkge1xyXG4gICAgICAgICAgICAvL0NhbmNlbCBwcmV2aW91cyBzZWFyY2ggYWN0aW9uLlxyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGN1cnJlbnRDYWxsLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudENhbGwuYWN0aW9uICYmIGN1cnJlbnRDYWxsLmFjdGlvbi5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDYWxsLmFjdGlvbi5jYW5jZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50Q2FsbC50aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2FsbC5hY3Rpb24gPSBzZWFyY2hBY3Rpb24uYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q2FsbC5hY3Rpb24gJiYgY3VycmVudENhbGwuYWN0aW9uLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENhbGwuYWN0aW9uLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYWxsID0ge307XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENhbGwgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpbWVvdXQgIT09IHVuZGVmaW5lZCA/IHRpbWVvdXQgOiBERUZBVUxUX1RJTUVPVVRcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50Q2FsbC50aW1lb3V0O1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uV3JhcHBlcjtcclxuIl19