'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _confirm = require('../confirm');

var _confirm2 = _interopRequireDefault(_confirm);

var _errorCenter = require('../../application/error-center');

var _headerDefaultTemplate = require('./header-default-template');

var _headerDefaultTemplate2 = _interopRequireDefault(_headerDefaultTemplate);

var _headerLoadingBar = require('./header-loading-bar');

var _headerLoadingBar2 = _interopRequireDefault(_headerLoadingBar);

var _messageCenter = require('../message-center');

var _messageCenter2 = _interopRequireDefault(_messageCenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// component default props.
var defaultProps = {
    AppHeader: _headerDefaultTemplate2.default, //default app header.
    ErrorCenter: _errorCenter.component, // default error center
    LoadingBar: _headerLoadingBar2.default, // default loading bar
    MessageCenter: _messageCenter2.default, // default message center
    ConfirmWrapper: _confirm2.default // default confirm wrapper,
};

// component props definition.
var propTypes = {
    AppHeader: _react.PropTypes.func,
    ConfirmWrapper: _react.PropTypes.func,
    ErrorCenter: _react.PropTypes.func,
    Footer: _react.PropTypes.func,
    LoadingBar: _react.PropTypes.func,
    LoadingStatusBar: _react.PropTypes.func,
    MenuLeft: _react.PropTypes.func,
    MessageCenter: _react.PropTypes.func
};

/**
* Layout component.
*/
var Layout = function Layout(_ref) {
    var AppHeader = _ref.AppHeader,
        children = _ref.children,
        ConfirmWrapper = _ref.ConfirmWrapper,
        ErrorCenter = _ref.ErrorCenter,
        Footer = _ref.Footer,
        LoadingBar = _ref.LoadingBar,
        MenuLeft = _ref.MenuLeft,
        MessageCenter = _ref.MessageCenter,
        DevTools = _ref.DevTools,
        OtherRootComponent = _ref.OtherRootComponent,
        otherProps = _objectWithoutProperties(_ref, ['AppHeader', 'children', 'ConfirmWrapper', 'ErrorCenter', 'Footer', 'LoadingBar', 'MenuLeft', 'MessageCenter', 'DevTools', 'OtherRootComponent']);

    var menuType = MenuLeft ? 'left' : 'other';

    return _react2.default.createElement(
        'div',
        Object.assign({ 'data-focus': 'layout', 'data-menu': menuType }, otherProps),
        _react2.default.createElement(LoadingBar, null),
        _react2.default.createElement(MessageCenter, null),
        ErrorCenter && _react2.default.createElement(ErrorCenter, null),
        _react2.default.createElement(ConfirmWrapper, null),
        _react2.default.createElement(AppHeader, null),
        MenuLeft && _react2.default.createElement(MenuLeft, null),
        _react2.default.createElement(
            'div',
            { 'data-focus': 'page-content' },
            children
        ),
        Footer && _react2.default.createElement(
            'footer',
            { 'data-focus': 'footer' },
            _react2.default.createElement(Footer, null)
        ),
        DevTools && _react2.default.createElement(DevTools, null),
        OtherRootComponent && _react2.default.createElement(OtherRootComponent, null)
    );
};

//Static props.
Layout.displayName = 'Layout';
Layout.defaultProps = defaultProps;
Layout.propTypes = propTypes;

exports.default = Layout;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiQXBwSGVhZGVyIiwiSGVhZGVyRGVmYXVsdFRlbXBsYXRlIiwiRXJyb3JDZW50ZXIiLCJFcnJvckNlbnRlckRlZmF1bHQiLCJMb2FkaW5nQmFyIiwiTG9hZGluZ0JhckRlZmF1bHQiLCJNZXNzYWdlQ2VudGVyIiwiTWVzc2FnZUNlbnRlckRlZmF1bHQiLCJDb25maXJtV3JhcHBlciIsIkNvbmZpcm1XcmFwcGVyRGVmYXVsdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJGb290ZXIiLCJMb2FkaW5nU3RhdHVzQmFyIiwiTWVudUxlZnQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIkRldlRvb2xzIiwiT3RoZXJSb290Q29tcG9uZW50Iiwib3RoZXJQcm9wcyIsIm1lbnVUeXBlIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxlQUFlO0FBQ2pCQyxlQUFXQywrQkFETSxFQUNpQjtBQUNsQ0MsaUJBQWFDLHNCQUZJLEVBRWdCO0FBQ2pDQyxnQkFBWUMsMEJBSEssRUFHYztBQUMvQkMsbUJBQWVDLHVCQUpFLEVBSW9CO0FBQ3JDQyxvQkFBZ0JDLGlCQUxDLENBS3FCO0FBTHJCLENBQXJCOztBQVFBO0FBQ0EsSUFBTUMsWUFBWTtBQUNkVixlQUFXVyxpQkFBVUMsSUFEUDtBQUVkSixvQkFBZ0JHLGlCQUFVQyxJQUZaO0FBR2RWLGlCQUFhUyxpQkFBVUMsSUFIVDtBQUlkQyxZQUFRRixpQkFBVUMsSUFKSjtBQUtkUixnQkFBWU8saUJBQVVDLElBTFI7QUFNZEUsc0JBQWtCSCxpQkFBVUMsSUFOZDtBQU9kRyxjQUFVSixpQkFBVUMsSUFQTjtBQVFkTixtQkFBZUssaUJBQVVDO0FBUlgsQ0FBbEI7O0FBV0E7OztBQUdBLElBQU1JLFNBQVMsU0FBVEEsTUFBUyxPQUNzRDtBQUFBLFFBRG5EaEIsU0FDbUQsUUFEbkRBLFNBQ21EO0FBQUEsUUFEeENpQixRQUN3QyxRQUR4Q0EsUUFDd0M7QUFBQSxRQUQ5QlQsY0FDOEIsUUFEOUJBLGNBQzhCO0FBQUEsUUFEZE4sV0FDYyxRQURkQSxXQUNjO0FBQUEsUUFERFcsTUFDQyxRQUREQSxNQUNDO0FBQUEsUUFET1QsVUFDUCxRQURPQSxVQUNQO0FBQUEsUUFEbUJXLFFBQ25CLFFBRG1CQSxRQUNuQjtBQUFBLFFBQWpFVCxhQUFpRSxRQUFqRUEsYUFBaUU7QUFBQSxRQUFsRFksUUFBa0QsUUFBbERBLFFBQWtEO0FBQUEsUUFBeENDLGtCQUF3QyxRQUF4Q0Esa0JBQXdDO0FBQUEsUUFBakJDLFVBQWlCOztBQUVqRSxRQUFNQyxXQUFXTixXQUFXLE1BQVgsR0FBb0IsT0FBckM7O0FBRUEsV0FDSTtBQUFBO0FBQUEsd0JBQUssY0FBVyxRQUFoQixFQUF5QixhQUFXTSxRQUFwQyxJQUFrREQsVUFBbEQ7QUFDSSxzQ0FBQyxVQUFELE9BREo7QUFFSSxzQ0FBQyxhQUFELE9BRko7QUFHS2xCLHVCQUNHLDhCQUFDLFdBQUQsT0FKUjtBQU1JLHNDQUFDLGNBQUQsT0FOSjtBQU9JLHNDQUFDLFNBQUQsT0FQSjtBQVFLYSxvQkFDRyw4QkFBQyxRQUFELE9BVFI7QUFXSTtBQUFBO0FBQUEsY0FBSyxjQUFXLGNBQWhCO0FBQ0tFO0FBREwsU0FYSjtBQWNLSixrQkFDRztBQUFBO0FBQUEsY0FBUSxjQUFXLFFBQW5CO0FBQ0ksMENBQUMsTUFBRDtBQURKLFNBZlI7QUFtQktLLG9CQUFZLDhCQUFDLFFBQUQsT0FuQmpCO0FBb0JLQyw4QkFBc0IsOEJBQUMsa0JBQUQ7QUFwQjNCLEtBREo7QUF3QkgsQ0E3QkQ7O0FBK0JBO0FBQ0FILE9BQU9NLFdBQVAsR0FBcUIsUUFBckI7QUFDQU4sT0FBT2pCLFlBQVAsR0FBc0JBLFlBQXRCO0FBQ0FpQixPQUFPTixTQUFQLEdBQW1CQSxTQUFuQjs7a0JBRWVNLE0iLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb25maXJtV3JhcHBlckRlZmF1bHQgZnJvbSAnLi4vY29uZmlybSc7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgRXJyb3JDZW50ZXJEZWZhdWx0IH0gZnJvbSAnLi4vLi4vYXBwbGljYXRpb24vZXJyb3ItY2VudGVyJztcbmltcG9ydCBIZWFkZXJEZWZhdWx0VGVtcGxhdGUgZnJvbSAnLi9oZWFkZXItZGVmYXVsdC10ZW1wbGF0ZSc7XG5pbXBvcnQgTG9hZGluZ0JhckRlZmF1bHQgZnJvbSAnLi9oZWFkZXItbG9hZGluZy1iYXInO1xuaW1wb3J0IE1lc3NhZ2VDZW50ZXJEZWZhdWx0IGZyb20gJy4uL21lc3NhZ2UtY2VudGVyJztcblxuLy8gY29tcG9uZW50IGRlZmF1bHQgcHJvcHMuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgQXBwSGVhZGVyOiBIZWFkZXJEZWZhdWx0VGVtcGxhdGUsIC8vZGVmYXVsdCBhcHAgaGVhZGVyLlxuICAgIEVycm9yQ2VudGVyOiBFcnJvckNlbnRlckRlZmF1bHQsIC8vIGRlZmF1bHQgZXJyb3IgY2VudGVyXG4gICAgTG9hZGluZ0JhcjogTG9hZGluZ0JhckRlZmF1bHQsIC8vIGRlZmF1bHQgbG9hZGluZyBiYXJcbiAgICBNZXNzYWdlQ2VudGVyOiBNZXNzYWdlQ2VudGVyRGVmYXVsdCwgLy8gZGVmYXVsdCBtZXNzYWdlIGNlbnRlclxuICAgIENvbmZpcm1XcmFwcGVyOiBDb25maXJtV3JhcHBlckRlZmF1bHQgLy8gZGVmYXVsdCBjb25maXJtIHdyYXBwZXIsXG59O1xuXG4vLyBjb21wb25lbnQgcHJvcHMgZGVmaW5pdGlvbi5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBBcHBIZWFkZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIENvbmZpcm1XcmFwcGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBFcnJvckNlbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgRm9vdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBMb2FkaW5nQmFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBMb2FkaW5nU3RhdHVzQmFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBNZW51TGVmdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgTWVzc2FnZUNlbnRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuKiBMYXlvdXQgY29tcG9uZW50LlxuKi9cbmNvbnN0IExheW91dCA9ICh7IEFwcEhlYWRlciwgY2hpbGRyZW4sIENvbmZpcm1XcmFwcGVyLCBFcnJvckNlbnRlciwgRm9vdGVyLCBMb2FkaW5nQmFyLCBNZW51TGVmdCxcbiAgICBNZXNzYWdlQ2VudGVyLCBEZXZUb29scywgT3RoZXJSb290Q29tcG9uZW50LCAuLi5vdGhlclByb3BzIH0pID0+IHtcblxuICAgIGNvbnN0IG1lbnVUeXBlID0gTWVudUxlZnQgPyAnbGVmdCcgOiAnb3RoZXInO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdsYXlvdXQnIGRhdGEtbWVudT17bWVudVR5cGV9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgICAgIDxMb2FkaW5nQmFyIC8+XG4gICAgICAgICAgICA8TWVzc2FnZUNlbnRlciAvPlxuICAgICAgICAgICAge0Vycm9yQ2VudGVyICYmXG4gICAgICAgICAgICAgICAgPEVycm9yQ2VudGVyIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8Q29uZmlybVdyYXBwZXIgLz5cbiAgICAgICAgICAgIDxBcHBIZWFkZXIgLz5cbiAgICAgICAgICAgIHtNZW51TGVmdCAmJlxuICAgICAgICAgICAgICAgIDxNZW51TGVmdCAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdwYWdlLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge0Zvb3RlciAmJlxuICAgICAgICAgICAgICAgIDxmb290ZXIgZGF0YS1mb2N1cz0nZm9vdGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge0RldlRvb2xzICYmIDxEZXZUb29scyAvPn1cbiAgICAgICAgICAgIHtPdGhlclJvb3RDb21wb25lbnQgJiYgPE90aGVyUm9vdENvbXBvbmVudCAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLy9TdGF0aWMgcHJvcHMuXG5MYXlvdXQuZGlzcGxheU5hbWUgPSAnTGF5b3V0JztcbkxheW91dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5MYXlvdXQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0=