'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isString = require('lodash/lang/isString');

var _isString2 = _interopRequireDefault(_isString);

var _application = require('sagess-core/application');

var _confirmationPopin = require('../../application/confirmation-popin');

var _connect = require('../../behaviours/store/connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
    isVisible: _react.PropTypes.bool,
    ConfirmContentComponent: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
    cancelHandler: _react.PropTypes.func,
    confirmHandler: _react.PropTypes.func
};

var defaultProps = {
    isVisible: false,
    ConfirmContentComponent: null,
    cancelHandler: null,
    confirmHandler: null
};

var connector = (0, _connect2.default)([{
    store: _application.builtInStore,
    properties: ['confirmConfig']
}], function () {
    var _ref = _application.builtInStore.getConfirmConfig() || {},
        _ref$isVisible = _ref.isVisible,
        isVisible = _ref$isVisible === undefined ? false : _ref$isVisible,
        _ref$Content = _ref.Content,
        ConfirmContentComponent = _ref$Content === undefined ? null : _ref$Content,
        cancelHandler = _ref.handleCancel,
        confirmHandler = _ref.handleConfirm,
        contentProps = _objectWithoutProperties(_ref, ['isVisible', 'Content', 'handleCancel', 'handleConfirm']);

    return { isVisible: isVisible, ConfirmContentComponent: ConfirmContentComponent, cancelHandler: cancelHandler, confirmHandler: confirmHandler, contentProps: contentProps };
});

var ConfirmWrapper = function ConfirmWrapper(props) {
    var isVisible = props.isVisible,
        ConfirmContentComponent = props.ConfirmContentComponent,
        cancelHandler = props.cancelHandler,
        confirmHandler = props.confirmHandler,
        contentProps = props.contentProps;

    var ConfirmContent = (0, _isString2.default)(ConfirmContentComponent) ? function () {
        return _react2.default.createElement(
            'span',
            null,
            ConfirmContentComponent
        );
    } : ConfirmContentComponent;

    return isVisible ? _react2.default.createElement(
        _confirmationPopin.component,
        Object.assign({
            open: true,
            cancelHandler: cancelHandler,
            confirmHandler: confirmHandler
        }, contentProps),
        ConfirmContent ? _react2.default.createElement(ConfirmContent, null) : null
    ) : null;
};

ConfirmWrapper.propTypes = propTypes;
ConfirmWrapper.defaultProps = defaultProps;
ConfirmWrapper.displayName = 'ConfirmWrapper';

exports.default = connector(ConfirmWrapper);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiaXNWaXNpYmxlIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkNvbmZpcm1Db250ZW50Q29tcG9uZW50Iiwib25lT2ZUeXBlIiwiZnVuYyIsInN0cmluZyIsImNhbmNlbEhhbmRsZXIiLCJjb25maXJtSGFuZGxlciIsImRlZmF1bHRQcm9wcyIsImNvbm5lY3RvciIsInN0b3JlIiwiYXBwbGljYXRpb25TdG9yZSIsInByb3BlcnRpZXMiLCJnZXRDb25maXJtQ29uZmlnIiwiQ29udGVudCIsImhhbmRsZUNhbmNlbCIsImhhbmRsZUNvbmZpcm0iLCJjb250ZW50UHJvcHMiLCJDb25maXJtV3JhcHBlciIsInByb3BzIiwiQ29uZmlybUNvbnRlbnQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7OztBQUdBLElBQU1BLFlBQVk7QUFDZEMsZUFBV0MsaUJBQVVDLElBRFA7QUFFZEMsNkJBQXlCRixpQkFBVUcsU0FBVixDQUFvQixDQUFDSCxpQkFBVUksSUFBWCxFQUFpQkosaUJBQVVLLE1BQTNCLENBQXBCLENBRlg7QUFHZEMsbUJBQWVOLGlCQUFVSSxJQUhYO0FBSWRHLG9CQUFnQlAsaUJBQVVJO0FBSlosQ0FBbEI7O0FBT0EsSUFBTUksZUFBZTtBQUNqQlQsZUFBVyxLQURNO0FBRWpCRyw2QkFBeUIsSUFGUjtBQUdqQkksbUJBQWUsSUFIRTtBQUlqQkMsb0JBQWdCO0FBSkMsQ0FBckI7O0FBT0EsSUFBTUUsWUFBWSx1QkFDZCxDQUFDO0FBQ0dDLFdBQU9DLHlCQURWO0FBRUdDLGdCQUFZLENBQUMsZUFBRDtBQUZmLENBQUQsQ0FEYyxFQUtkLFlBQU07QUFBQSxlQU9FRCwwQkFBaUJFLGdCQUFqQixNQUF1QyxFQVB6QztBQUFBLDhCQUVFZCxTQUZGO0FBQUEsUUFFRUEsU0FGRixrQ0FFYyxLQUZkO0FBQUEsNEJBR0VlLE9BSEY7QUFBQSxRQUdXWix1QkFIWCxnQ0FHcUMsSUFIckM7QUFBQSxRQUlnQkksYUFKaEIsUUFJRVMsWUFKRjtBQUFBLFFBS2lCUixjQUxqQixRQUtFUyxhQUxGO0FBQUEsUUFNS0MsWUFOTDs7QUFTRixXQUFPLEVBQUVsQixvQkFBRixFQUFhRyxnREFBYixFQUFzQ0ksNEJBQXRDLEVBQXFEQyw4QkFBckQsRUFBcUVVLDBCQUFyRSxFQUFQO0FBQ0gsQ0FmYSxDQUFsQjs7QUFrQkEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQSxRQUN0QnBCLFNBRHNCLEdBQzhEb0IsS0FEOUQsQ0FDdEJwQixTQURzQjtBQUFBLFFBQ1hHLHVCQURXLEdBQzhEaUIsS0FEOUQsQ0FDWGpCLHVCQURXO0FBQUEsUUFDY0ksYUFEZCxHQUM4RGEsS0FEOUQsQ0FDY2IsYUFEZDtBQUFBLFFBQzZCQyxjQUQ3QixHQUM4RFksS0FEOUQsQ0FDNkJaLGNBRDdCO0FBQUEsUUFDNkNVLFlBRDdDLEdBQzhERSxLQUQ5RCxDQUM2Q0YsWUFEN0M7O0FBRTlCLFFBQU1HLGlCQUFpQix3QkFBU2xCLHVCQUFULElBQ2pCO0FBQUEsZUFBTztBQUFBO0FBQUE7QUFBT0E7QUFBUCxTQUFQO0FBQUEsS0FEaUIsR0FFakJBLHVCQUZOOztBQUlBLFdBQU9ILFlBQ0g7QUFBQyxvQ0FBRDtBQUFBO0FBQ0ksc0JBREo7QUFFSSwyQkFBZU8sYUFGbkI7QUFHSSw0QkFBZ0JDO0FBSHBCLFdBSVFVLFlBSlI7QUFNS0cseUJBQWtCLDhCQUFDLGNBQUQsT0FBbEIsR0FBd0M7QUFON0MsS0FERyxHQVNILElBVEo7QUFVSCxDQWhCRDs7QUFrQkFGLGVBQWVwQixTQUFmLEdBQTJCQSxTQUEzQjtBQUNBb0IsZUFBZVYsWUFBZixHQUE4QkEsWUFBOUI7QUFDQVUsZUFBZUcsV0FBZixHQUE2QixnQkFBN0I7O2tCQUVlWixVQUFVUyxjQUFWLEMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2xhbmcvaXNTdHJpbmcnO1xuXG5pbXBvcnQgeyBidWlsdEluU3RvcmUgYXMgYXBwbGljYXRpb25TdG9yZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL2FwcGxpY2F0aW9uJztcblxuaW1wb3J0IHsgY29tcG9uZW50IGFzIENvbmZpcm1hdGlvbk1vZGFsIH0gZnJvbSAnLi4vLi4vYXBwbGljYXRpb24vY29uZmlybWF0aW9uLXBvcGluJztcbmltcG9ydCBjb25uZWN0IGZyb20gJy4uLy4uL2JlaGF2aW91cnMvc3RvcmUvY29ubmVjdCc7XG5cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGlzVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgQ29uZmlybUNvbnRlbnRDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgY2FuY2VsSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29uZmlybUhhbmRsZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICBDb25maXJtQ29udGVudENvbXBvbmVudDogbnVsbCxcbiAgICBjYW5jZWxIYW5kbGVyOiBudWxsLFxuICAgIGNvbmZpcm1IYW5kbGVyOiBudWxsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KFxuICAgIFt7XG4gICAgICAgIHN0b3JlOiBhcHBsaWNhdGlvblN0b3JlLFxuICAgICAgICBwcm9wZXJ0aWVzOiBbJ2NvbmZpcm1Db25maWcnXVxuICAgIH1dLFxuICAgICgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaXNWaXNpYmxlID0gZmFsc2UsXG4gICAgICAgICAgICBDb250ZW50OiBDb25maXJtQ29udGVudENvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICBoYW5kbGVDYW5jZWw6IGNhbmNlbEhhbmRsZXIsXG4gICAgICAgICAgICBoYW5kbGVDb25maXJtOiBjb25maXJtSGFuZGxlcixcbiAgICAgICAgICAgIC4uLmNvbnRlbnRQcm9wc1xuICAgICAgICB9ID0gYXBwbGljYXRpb25TdG9yZS5nZXRDb25maXJtQ29uZmlnKCkgfHwge307XG5cbiAgICAgICAgcmV0dXJuIHsgaXNWaXNpYmxlLCBDb25maXJtQ29udGVudENvbXBvbmVudCwgY2FuY2VsSGFuZGxlciwgY29uZmlybUhhbmRsZXIsIGNvbnRlbnRQcm9wcyB9O1xuICAgIH1cbilcblxuY29uc3QgQ29uZmlybVdyYXBwZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGlzVmlzaWJsZSwgQ29uZmlybUNvbnRlbnRDb21wb25lbnQsIGNhbmNlbEhhbmRsZXIsIGNvbmZpcm1IYW5kbGVyLCBjb250ZW50UHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IENvbmZpcm1Db250ZW50ID0gaXNTdHJpbmcoQ29uZmlybUNvbnRlbnRDb21wb25lbnQpXG4gICAgICAgID8gKCkgPT4gKDxzcGFuPntDb25maXJtQ29udGVudENvbXBvbmVudH08L3NwYW4+KVxuICAgICAgICA6IENvbmZpcm1Db250ZW50Q29tcG9uZW50O1xuXG4gICAgcmV0dXJuIGlzVmlzaWJsZSA/IChcbiAgICAgICAgPENvbmZpcm1hdGlvbk1vZGFsXG4gICAgICAgICAgICBvcGVuXG4gICAgICAgICAgICBjYW5jZWxIYW5kbGVyPXtjYW5jZWxIYW5kbGVyfVxuICAgICAgICAgICAgY29uZmlybUhhbmRsZXI9e2NvbmZpcm1IYW5kbGVyfVxuICAgICAgICAgICAgey4uLmNvbnRlbnRQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAge0NvbmZpcm1Db250ZW50ID8gKDxDb25maXJtQ29udGVudCAvPikgOiBudWxsfVxuICAgICAgICA8L0NvbmZpcm1hdGlvbk1vZGFsPlxuICAgICkgOiBudWxsO1xufVxuXG5Db25maXJtV3JhcHBlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Db25maXJtV3JhcHBlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5Db25maXJtV3JhcHBlci5kaXNwbGF5TmFtZSA9ICdDb25maXJtV3JhcHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihDb25maXJtV3JhcHBlcik7XG4iXX0=