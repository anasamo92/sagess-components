'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _appHeader = require('./app-header');

var _appHeader2 = _interopRequireDefault(_appHeader);

var _loadingBar = require('../loading-bar');

var _messageCenter = require('../message-center');

var _errorCenter = require('../error-center');

var _stylable = require('../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
var contentActionsMixin = {
    mixins: [_stylable2.default],
    /** inheriteddoc */
    getDefaultProps: function getDefaultProps() {
        return {
            AppHeader: _appHeader2.default,
            LoadingBar: _loadingBar.component,
            MessageCenter: _messageCenter.component,
            ErrorCenter: _errorCenter.component,
            displayDevBar: true,
            footerText: 'Please override the footer text by giving a "footerText" property to the Layout component.'
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use components from sagess-components/components/layout folder');
    },

    /** inheriteddoc */
    render: function render() {
        var _props = this.props,
            LoadingBar = _props.LoadingBar,
            MessageCenter = _props.MessageCenter,
            ErrorCenter = _props.ErrorCenter,
            AppHeader = _props.AppHeader,
            MenuLeft = _props.MenuLeft,
            footerText = _props.footerText,
            displayDevBar = _props.displayDevBar,
            children = _props.children;

        return React.createElement(
            'div',
            { className: this._getStyleClassName(), 'data-focus': 'layout' },
            React.createElement(LoadingBar, { displayDevBar: displayDevBar }),
            React.createElement(MessageCenter, null),
            React.createElement(ErrorCenter, null),
            React.createElement(AppHeader, null),
            React.createElement(
                'div',
                { 'data-focus': 'menu' },
                MenuLeft && React.createElement(MenuLeft, null)
            ),
            React.createElement('div', { 'data-focus': 'page-content' }),
            React.createElement(
                'footer',
                { 'data-focus': 'footer' },
                footerText
            ),
            children
        );
    }
};
// Mixins

// Components

var _builder = (0, _builder3.default)(contentActionsMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY29udGVudEFjdGlvbnNNaXhpbiIsIm1peGlucyIsInN0eWxhYmxlQmVoYXZpb3VyIiwiZ2V0RGVmYXVsdFByb3BzIiwiQXBwSGVhZGVyIiwiQXBwSGVhZGVyRGVmYXVsdCIsIkxvYWRpbmdCYXIiLCJMb2FkaW5nQmFyRGVmYXVsdCIsIk1lc3NhZ2VDZW50ZXIiLCJNZXNzYWdlQ2VudGVyRGVmYXVsdCIsIkVycm9yQ2VudGVyIiwiRXJyb3JDZW50ZXJEZWZhdWx0IiwiZGlzcGxheURldkJhciIsImZvb3RlclRleHQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsInJlbmRlciIsInByb3BzIiwiTWVudUxlZnQiLCJjaGlsZHJlbiIsIl9nZXRTdHlsZUNsYXNzTmFtZSIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFSQTtBQVVBLElBQU1BLHNCQUFzQjtBQUN4QkMsWUFBUSxDQUFDQyxrQkFBRCxDQURnQjtBQUV4QjtBQUNBQyxtQkFId0IsNkJBR047QUFDZCxlQUFPO0FBQ0hDLHVCQUFXQyxtQkFEUjtBQUVIQyx3QkFBWUMscUJBRlQ7QUFHSEMsMkJBQWVDLHdCQUhaO0FBSUhDLHlCQUFhQyxzQkFKVjtBQUtIQywyQkFBZSxJQUxaO0FBTUhDLHdCQUFZO0FBTlQsU0FBUDtBQVFILEtBWnVCO0FBYXhCQyxzQkFid0IsZ0NBYUg7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsNkhBQWI7QUFDSCxLQWZ1Qjs7QUFnQnhCO0FBQ0FDLFVBakJ3QixvQkFpQmY7QUFBQSxxQkFDd0csS0FBS0MsS0FEN0c7QUFBQSxZQUNHWixVQURILFVBQ0dBLFVBREg7QUFBQSxZQUNlRSxhQURmLFVBQ2VBLGFBRGY7QUFBQSxZQUM4QkUsV0FEOUIsVUFDOEJBLFdBRDlCO0FBQUEsWUFDMkNOLFNBRDNDLFVBQzJDQSxTQUQzQztBQUFBLFlBQ3NEZSxRQUR0RCxVQUNzREEsUUFEdEQ7QUFBQSxZQUNnRU4sVUFEaEUsVUFDZ0VBLFVBRGhFO0FBQUEsWUFDNEVELGFBRDVFLFVBQzRFQSxhQUQ1RTtBQUFBLFlBQzJGUSxRQUQzRixVQUMyRkEsUUFEM0Y7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFXLEtBQUtDLGtCQUFMLEVBQWhCLEVBQTJDLGNBQVcsUUFBdEQ7QUFDSSxnQ0FBQyxVQUFELElBQVksZUFBZVQsYUFBM0IsR0FESjtBQUVJLGdDQUFDLGFBQUQsT0FGSjtBQUdJLGdDQUFDLFdBQUQsT0FISjtBQUlJLGdDQUFDLFNBQUQsT0FKSjtBQUtJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLE1BQWhCO0FBQ0tPLDRCQUFZLG9CQUFDLFFBQUQ7QUFEakIsYUFMSjtBQVFJLHlDQUFLLGNBQVcsY0FBaEIsR0FSSjtBQVNJO0FBQUE7QUFBQSxrQkFBUSxjQUFXLFFBQW5CO0FBQ0tOO0FBREwsYUFUSjtBQVlLTztBQVpMLFNBREo7QUFnQkg7QUFuQ3VCLENBQTVCO0FBSEE7O0FBTEE7O2VBOEM2Qix1QkFBUXBCLG1CQUFSLEM7SUFBckJzQixLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgQXBwSGVhZGVyRGVmYXVsdCBmcm9tICcuL2FwcC1oZWFkZXInO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIExvYWRpbmdCYXJEZWZhdWx0IH0gZnJvbSAnLi4vbG9hZGluZy1iYXInO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIE1lc3NhZ2VDZW50ZXJEZWZhdWx0IH0gZnJvbSAnLi4vbWVzc2FnZS1jZW50ZXInO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIEVycm9yQ2VudGVyRGVmYXVsdCB9IGZyb20gJy4uL2Vycm9yLWNlbnRlcic7XG4vLyBNaXhpbnNcbmltcG9ydCBzdHlsYWJsZUJlaGF2aW91ciBmcm9tICcuLi8uLi9taXhpbi9zdHlsYWJsZSc7XG5cbmNvbnN0IGNvbnRlbnRBY3Rpb25zTWl4aW4gPSB7XG4gICAgbWl4aW5zOiBbc3R5bGFibGVCZWhhdmlvdXJdLFxuICAgIC8qKiBpbmhlcml0ZWRkb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBBcHBIZWFkZXI6IEFwcEhlYWRlckRlZmF1bHQsXG4gICAgICAgICAgICBMb2FkaW5nQmFyOiBMb2FkaW5nQmFyRGVmYXVsdCxcbiAgICAgICAgICAgIE1lc3NhZ2VDZW50ZXI6IE1lc3NhZ2VDZW50ZXJEZWZhdWx0LFxuICAgICAgICAgICAgRXJyb3JDZW50ZXI6IEVycm9yQ2VudGVyRGVmYXVsdCxcbiAgICAgICAgICAgIGRpc3BsYXlEZXZCYXI6IHRydWUsXG4gICAgICAgICAgICBmb290ZXJUZXh0OiAnUGxlYXNlIG92ZXJyaWRlIHRoZSBmb290ZXIgdGV4dCBieSBnaXZpbmcgYSBcImZvb3RlclRleHRcIiBwcm9wZXJ0eSB0byB0aGUgTGF5b3V0IGNvbXBvbmVudC4nXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAyLjIuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBjb21wb25lbnRzIGZyb20gc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9sYXlvdXQgZm9sZGVyJyk7XG4gICAgfSxcbiAgICAvKiogaW5oZXJpdGVkZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IExvYWRpbmdCYXIsIE1lc3NhZ2VDZW50ZXIsIEVycm9yQ2VudGVyLCBBcHBIZWFkZXIsIE1lbnVMZWZ0LCBmb290ZXJUZXh0LCBkaXNwbGF5RGV2QmFyLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLl9nZXRTdHlsZUNsYXNzTmFtZSgpfSBkYXRhLWZvY3VzPSdsYXlvdXQnPlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nQmFyIGRpc3BsYXlEZXZCYXI9e2Rpc3BsYXlEZXZCYXJ9IC8+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VDZW50ZXIgLz5cbiAgICAgICAgICAgICAgICA8RXJyb3JDZW50ZXIgLz5cbiAgICAgICAgICAgICAgICA8QXBwSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdtZW51Jz5cbiAgICAgICAgICAgICAgICAgICAge01lbnVMZWZ0ICYmIDxNZW51TGVmdCAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J3BhZ2UtY29udGVudCcgLz5cbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGRhdGEtZm9jdXM9J2Zvb3Rlcic+XG4gICAgICAgICAgICAgICAgICAgIHtmb290ZXJUZXh0fVxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihjb250ZW50QWN0aW9uc01peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19