'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _translation = require('sagess-core/translation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonHelp(_ref) {
    var blockName = _ref.blockName;
    var _window$location = window.location,
        hash = _window$location.hash,
        pathname = _window$location.pathname;

    var url = hash && hash.replace('#', '') || pathname;
    var _window = window,
        openHelpCenter = _window.openHelpCenter;


    if (typeof openHelpCenter !== 'function') {
        console.warn('You forgot to set the function "window.openHelpCenter". Please mount somewhere in your application a "DraggableIframe" with "openHelpCenter" as the "toggleFunctionName" prop');
    }

    return _react2.default.createElement(_button2.default, {
        className: 'help-button',
        handleOnClick: function handleOnClick() {
            return openHelpCenter(url, blockName);
        },
        icon: 'help_outline',
        label: (0, _translation.translate)('help.alt') + ' : ' + blockName,
        shape: 'icon',
        type: 'button'
    });
}

ButtonHelp.propTypes = {
    blockName: _react.PropTypes.string
};

exports.default = ButtonHelp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQnV0dG9uSGVscCIsImJsb2NrTmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInBhdGhuYW1lIiwidXJsIiwicmVwbGFjZSIsIm9wZW5IZWxwQ2VudGVyIiwiY29uc29sZSIsIndhcm4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLFNBQVNBLFVBQVQsT0FBaUM7QUFBQSxRQUFaQyxTQUFZLFFBQVpBLFNBQVk7QUFBQSwyQkFDSkMsT0FBT0MsUUFESDtBQUFBLFFBQ3RCQyxJQURzQixvQkFDdEJBLElBRHNCO0FBQUEsUUFDaEJDLFFBRGdCLG9CQUNoQkEsUUFEZ0I7O0FBRTdCLFFBQU1DLE1BQU1GLFFBQVFBLEtBQUtHLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEVBQWxCLENBQVIsSUFBaUNGLFFBQTdDO0FBRjZCLGtCQUdKSCxNQUhJO0FBQUEsUUFHdEJNLGNBSHNCLFdBR3RCQSxjQUhzQjs7O0FBSzdCLFFBQUksT0FBT0EsY0FBUCxLQUEwQixVQUE5QixFQUEwQztBQUN0Q0MsZ0JBQVFDLElBQVIsQ0FBYSwrS0FBYjtBQUNIOztBQUVELFdBQ0ksOEJBQUMsZ0JBQUQ7QUFDSSxtQkFBVSxhQURkO0FBRUksdUJBQWU7QUFBQSxtQkFBTUYsZUFBZUYsR0FBZixFQUFvQkwsU0FBcEIsQ0FBTjtBQUFBLFNBRm5CO0FBR0ksY0FBSyxjQUhUO0FBSUksZUFBVSw0QkFBVSxVQUFWLENBQVYsV0FBcUNBLFNBSnpDO0FBS0ksZUFBTSxNQUxWO0FBTUksY0FBSztBQU5ULE1BREo7QUFVSDs7QUFFREQsV0FBV1csU0FBWCxHQUF1QjtBQUNuQlYsZUFBV1csaUJBQVVDO0FBREYsQ0FBdkI7O2tCQUllYixVIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcbmltcG9ydCB7dHJhbnNsYXRlfSBmcm9tICdzYWdlc3MtY29yZS90cmFuc2xhdGlvbic7XG5cbmZ1bmN0aW9uIEJ1dHRvbkhlbHAoe2Jsb2NrTmFtZX0pIHtcbiAgICBjb25zdCB7aGFzaCwgcGF0aG5hbWV9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IHVybCA9IGhhc2ggJiYgaGFzaC5yZXBsYWNlKCcjJywgJycpIHx8IHBhdGhuYW1lO1xuICAgIGNvbnN0IHtvcGVuSGVscENlbnRlcn0gPSB3aW5kb3c7XG5cbiAgICBpZiAodHlwZW9mIG9wZW5IZWxwQ2VudGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignWW91IGZvcmdvdCB0byBzZXQgdGhlIGZ1bmN0aW9uIFwid2luZG93Lm9wZW5IZWxwQ2VudGVyXCIuIFBsZWFzZSBtb3VudCBzb21ld2hlcmUgaW4geW91ciBhcHBsaWNhdGlvbiBhIFwiRHJhZ2dhYmxlSWZyYW1lXCIgd2l0aCBcIm9wZW5IZWxwQ2VudGVyXCIgYXMgdGhlIFwidG9nZ2xlRnVuY3Rpb25OYW1lXCIgcHJvcCcpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0naGVscC1idXR0b24nICAgICAgICAgXG4gICAgICAgICAgICBoYW5kbGVPbkNsaWNrPXsoKSA9PiBvcGVuSGVscENlbnRlcih1cmwsIGJsb2NrTmFtZSl9XG4gICAgICAgICAgICBpY29uPSdoZWxwX291dGxpbmUnXG4gICAgICAgICAgICBsYWJlbD17YCR7dHJhbnNsYXRlKCdoZWxwLmFsdCcpfSA6ICR7YmxvY2tOYW1lfWB9XG4gICAgICAgICAgICBzaGFwZT0naWNvbidcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgLz5cbiAgICApO1xufVxuXG5CdXR0b25IZWxwLnByb3BUeXBlcyA9IHtcbiAgICBibG9ja05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkhlbHA7XG4iXX0=