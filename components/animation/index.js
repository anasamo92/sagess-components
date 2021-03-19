'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //dependencies


var propTypes = {
    //If you want to use a custom css class
    // for each transion step, set this prop to TRUE.
    customClasses: _react.PropTypes.bool,
    // to enable transition
    appear: _react.PropTypes.bool,
    enter: _react.PropTypes.bool,
    leave: _react.PropTypes.bool,

    // Transition duration
    appearTimeout: _react.PropTypes.number,
    enterTimeout: _react.PropTypes.number,
    leaveTimeout: _react.PropTypes.number,

    // Transition css className.
    appearName: _react.PropTypes.string,
    appearActiveName: _react.PropTypes.string,
    enterName: _react.PropTypes.string,
    enterActiveName: _react.PropTypes.string,
    leaveName: _react.PropTypes.string,
    leaveActiveName: _react.PropTypes.string,
    transitionName: _react.PropTypes.string.isRequired
};

var defaultProps = {
    customClasses: true,

    appear: true,
    enter: true,
    leave: true,

    appearTimeout: 500,
    enterTimeout: 500,
    leaveTimeout: 500,

    appearName: 'bounce',
    appearActiveName: 'bounce',
    enterName: 'bounce',
    enterActiveName: 'bounce',
    leaveName: 'bounceOut',
    leaveActiveName: 'bounceOut'
};

/**
 * Animation component.
 * @param {object} props Props.
 * @returns {JsxElement} Component.
 */
function Animation(_ref) {
    var customClasses = _ref.customClasses,
        appear = _ref.appear,
        enter = _ref.enter,
        leave = _ref.leave,
        appearName = _ref.appearName,
        appearActiveName = _ref.appearActiveName,
        enterName = _ref.enterName,
        enterActiveName = _ref.enterActiveName,
        leaveName = _ref.leaveName,
        leaveActiveName = _ref.leaveActiveName,
        appearTimeout = _ref.appearTimeout,
        enterTimeout = _ref.enterTimeout,
        leaveTimeout = _ref.leaveTimeout,
        transitionName = _ref.transitionName,
        otherProps = _objectWithoutProperties(_ref, ['customClasses', 'appear', 'enter', 'leave', 'appearName', 'appearActiveName', 'enterName', 'enterActiveName', 'leaveName', 'leaveActiveName', 'appearTimeout', 'enterTimeout', 'leaveTimeout', 'transitionName']);

    var transitionClassName = transitionName;
    if (true === customClasses) {
        transitionClassName = {
            appear: appearName,
            appearActive: appearActiveName,
            enter: enterName,
            enterActive: enterActiveName,
            leave: leaveName,
            leaveActive: leaveActiveName
        };
    }
    return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
            transitionAppear: appear,
            transitionAppearTimeout: enter,
            transitionEnter: leave,
            transitionEnterTimeout: appearTimeout,
            transitionLeave: enterTimeout,
            transitionLeaveTimeout: leaveTimeout,
            transitionName: transitionClassName
        },
        _react2.default.createElement(
            'div',
            { className: 'animated' },
            otherProps.children
        )
    );
}

//Static props.
Animation.displayName = 'animation';
Animation.defaultProps = defaultProps;
Animation.propTypes = propTypes;

exports.default = Animation;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiY3VzdG9tQ2xhc3NlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJhcHBlYXIiLCJlbnRlciIsImxlYXZlIiwiYXBwZWFyVGltZW91dCIsIm51bWJlciIsImVudGVyVGltZW91dCIsImxlYXZlVGltZW91dCIsImFwcGVhck5hbWUiLCJzdHJpbmciLCJhcHBlYXJBY3RpdmVOYW1lIiwiZW50ZXJOYW1lIiwiZW50ZXJBY3RpdmVOYW1lIiwibGVhdmVOYW1lIiwibGVhdmVBY3RpdmVOYW1lIiwidHJhbnNpdGlvbk5hbWUiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiQW5pbWF0aW9uIiwib3RoZXJQcm9wcyIsInRyYW5zaXRpb25DbGFzc05hbWUiLCJhcHBlYXJBY3RpdmUiLCJlbnRlckFjdGl2ZSIsImxlYXZlQWN0aXZlIiwiY2hpbGRyZW4iLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OzZOQUZBOzs7QUFJQSxJQUFNQSxZQUFZO0FBQ2Q7QUFDQTtBQUNBQyxtQkFBZUMsaUJBQVVDLElBSFg7QUFJZDtBQUNBQyxZQUFRRixpQkFBVUMsSUFMSjtBQU1kRSxXQUFPSCxpQkFBVUMsSUFOSDtBQU9kRyxXQUFPSixpQkFBVUMsSUFQSDs7QUFTZDtBQUNBSSxtQkFBZUwsaUJBQVVNLE1BVlg7QUFXZEMsa0JBQWNQLGlCQUFVTSxNQVhWO0FBWWRFLGtCQUFjUixpQkFBVU0sTUFaVjs7QUFjZDtBQUNBRyxnQkFBWVQsaUJBQVVVLE1BZlI7QUFnQmRDLHNCQUFrQlgsaUJBQVVVLE1BaEJkO0FBaUJkRSxlQUFXWixpQkFBVVUsTUFqQlA7QUFrQmRHLHFCQUFpQmIsaUJBQVVVLE1BbEJiO0FBbUJkSSxlQUFXZCxpQkFBVVUsTUFuQlA7QUFvQmRLLHFCQUFpQmYsaUJBQVVVLE1BcEJiO0FBcUJkTSxvQkFBZ0JoQixpQkFBVVUsTUFBVixDQUFpQk87QUFyQm5CLENBQWxCOztBQXdCQSxJQUFNQyxlQUFlO0FBQ2pCbkIsbUJBQWUsSUFERTs7QUFHakJHLFlBQVEsSUFIUztBQUlqQkMsV0FBTyxJQUpVO0FBS2pCQyxXQUFPLElBTFU7O0FBT2pCQyxtQkFBZSxHQVBFO0FBUWpCRSxrQkFBYyxHQVJHO0FBU2pCQyxrQkFBYyxHQVRHOztBQVdqQkMsZ0JBQVksUUFYSztBQVlqQkUsc0JBQWtCLFFBWkQ7QUFhakJDLGVBQVcsUUFiTTtBQWNqQkMscUJBQWlCLFFBZEE7QUFlakJDLGVBQVcsV0FmTTtBQWdCakJDLHFCQUFpQjtBQWhCQSxDQUFyQjs7QUFtQkE7Ozs7O0FBS0EsU0FBU0ksU0FBVCxPQUVnRjtBQUFBLFFBRjNEcEIsYUFFMkQsUUFGM0RBLGFBRTJEO0FBQUEsUUFGNUNHLE1BRTRDLFFBRjVDQSxNQUU0QztBQUFBLFFBRnBDQyxLQUVvQyxRQUZwQ0EsS0FFb0M7QUFBQSxRQUY3QkMsS0FFNkIsUUFGN0JBLEtBRTZCO0FBQUEsUUFGdEJLLFVBRXNCLFFBRnRCQSxVQUVzQjtBQUFBLFFBRDVFRSxnQkFDNEUsUUFENUVBLGdCQUM0RTtBQUFBLFFBRDFEQyxTQUMwRCxRQUQxREEsU0FDMEQ7QUFBQSxRQUQvQ0MsZUFDK0MsUUFEL0NBLGVBQytDO0FBQUEsUUFEOUJDLFNBQzhCLFFBRDlCQSxTQUM4QjtBQUFBLFFBRG5CQyxlQUNtQixRQURuQkEsZUFDbUI7QUFBQSxRQUE1RVYsYUFBNEUsUUFBNUVBLGFBQTRFO0FBQUEsUUFBN0RFLFlBQTZELFFBQTdEQSxZQUE2RDtBQUFBLFFBQS9DQyxZQUErQyxRQUEvQ0EsWUFBK0M7QUFBQSxRQUFqQ1EsY0FBaUMsUUFBakNBLGNBQWlDO0FBQUEsUUFBZEksVUFBYzs7QUFDNUUsUUFBSUMsc0JBQXNCTCxjQUExQjtBQUNBLFFBQUksU0FBU2pCLGFBQWIsRUFBNEI7QUFDeEJzQiw4QkFBc0I7QUFDbEJuQixvQkFBUU8sVUFEVTtBQUVsQmEsMEJBQWNYLGdCQUZJO0FBR2xCUixtQkFBT1MsU0FIVztBQUlsQlcseUJBQWFWLGVBSks7QUFLbEJULG1CQUFPVSxTQUxXO0FBTWxCVSx5QkFBYVQ7QUFOSyxTQUF0QjtBQVFIO0FBQ0QsV0FDSTtBQUFDLCtDQUFEO0FBQUE7QUFDSSw4QkFBa0JiLE1BRHRCO0FBRUkscUNBQXlCQyxLQUY3QjtBQUdJLDZCQUFpQkMsS0FIckI7QUFJSSxvQ0FBd0JDLGFBSjVCO0FBS0ksNkJBQWlCRSxZQUxyQjtBQU1JLG9DQUF3QkMsWUFONUI7QUFPSSw0QkFBZ0JhO0FBUHBCO0FBU0k7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0tELHVCQUFXSztBQURoQjtBQVRKLEtBREo7QUFlSDs7QUFFRDtBQUNBTixVQUFVTyxXQUFWLEdBQXdCLFdBQXhCO0FBQ0FQLFVBQVVELFlBQVYsR0FBeUJBLFlBQXpCO0FBQ0FDLFVBQVVyQixTQUFWLEdBQXNCQSxTQUF0Qjs7a0JBRWVxQixTIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlcGVuZGVuY2llc1xyXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICAgIC8vSWYgeW91IHdhbnQgdG8gdXNlIGEgY3VzdG9tIGNzcyBjbGFzc1xyXG4gICAgLy8gZm9yIGVhY2ggdHJhbnNpb24gc3RlcCwgc2V0IHRoaXMgcHJvcCB0byBUUlVFLlxyXG4gICAgY3VzdG9tQ2xhc3NlczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyB0byBlbmFibGUgdHJhbnNpdGlvblxyXG4gICAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGxlYXZlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvLyBUcmFuc2l0aW9uIGR1cmF0aW9uXHJcbiAgICBhcHBlYXJUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgZW50ZXJUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgbGVhdmVUaW1lb3V0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cclxuICAgIC8vIFRyYW5zaXRpb24gY3NzIGNsYXNzTmFtZS5cclxuICAgIGFwcGVhck5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBhcHBlYXJBY3RpdmVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZW50ZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZW50ZXJBY3RpdmVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGVhdmVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGVhdmVBY3RpdmVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY3VzdG9tQ2xhc3NlczogdHJ1ZSxcclxuXHJcbiAgICBhcHBlYXI6IHRydWUsXHJcbiAgICBlbnRlcjogdHJ1ZSxcclxuICAgIGxlYXZlOiB0cnVlLFxyXG5cclxuICAgIGFwcGVhclRpbWVvdXQ6IDUwMCxcclxuICAgIGVudGVyVGltZW91dDogNTAwLFxyXG4gICAgbGVhdmVUaW1lb3V0OiA1MDAsXHJcblxyXG4gICAgYXBwZWFyTmFtZTogJ2JvdW5jZScsXHJcbiAgICBhcHBlYXJBY3RpdmVOYW1lOiAnYm91bmNlJyxcclxuICAgIGVudGVyTmFtZTogJ2JvdW5jZScsXHJcbiAgICBlbnRlckFjdGl2ZU5hbWU6ICdib3VuY2UnLFxyXG4gICAgbGVhdmVOYW1lOiAnYm91bmNlT3V0JyxcclxuICAgIGxlYXZlQWN0aXZlTmFtZTogJ2JvdW5jZU91dCdcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBbmltYXRpb24gY29tcG9uZW50LlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgUHJvcHMuXHJcbiAqIEByZXR1cm5zIHtKc3hFbGVtZW50fSBDb21wb25lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBBbmltYXRpb24oeyBjdXN0b21DbGFzc2VzLCBhcHBlYXIsIGVudGVyLCBsZWF2ZSwgYXBwZWFyTmFtZSxcclxuICAgIGFwcGVhckFjdGl2ZU5hbWUsIGVudGVyTmFtZSwgZW50ZXJBY3RpdmVOYW1lLCBsZWF2ZU5hbWUsIGxlYXZlQWN0aXZlTmFtZSxcclxuICAgIGFwcGVhclRpbWVvdXQsIGVudGVyVGltZW91dCwgbGVhdmVUaW1lb3V0LCB0cmFuc2l0aW9uTmFtZSwgLi4ub3RoZXJQcm9wcyB9KSB7XHJcbiAgICBsZXQgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHRyYW5zaXRpb25OYW1lO1xyXG4gICAgaWYgKHRydWUgPT09IGN1c3RvbUNsYXNzZXMpIHtcclxuICAgICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0ge1xyXG4gICAgICAgICAgICBhcHBlYXI6IGFwcGVhck5hbWUsXHJcbiAgICAgICAgICAgIGFwcGVhckFjdGl2ZTogYXBwZWFyQWN0aXZlTmFtZSxcclxuICAgICAgICAgICAgZW50ZXI6IGVudGVyTmFtZSxcclxuICAgICAgICAgICAgZW50ZXJBY3RpdmU6IGVudGVyQWN0aXZlTmFtZSxcclxuICAgICAgICAgICAgbGVhdmU6IGxlYXZlTmFtZSxcclxuICAgICAgICAgICAgbGVhdmVBY3RpdmU6IGxlYXZlQWN0aXZlTmFtZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI9e2FwcGVhcn1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ9e2VudGVyfVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXI9e2xlYXZlfVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXthcHBlYXJUaW1lb3V0fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmU9e2VudGVyVGltZW91dH1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17bGVhdmVUaW1lb3V0fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17dHJhbnNpdGlvbkNsYXNzTmFtZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltYXRlZCc+XHJcbiAgICAgICAgICAgICAgICB7b3RoZXJQcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vU3RhdGljIHByb3BzLlxyXG5BbmltYXRpb24uZGlzcGxheU5hbWUgPSAnYW5pbWF0aW9uJztcclxuQW5pbWF0aW9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuQW5pbWF0aW9uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbjtcclxuIl19