'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
    formatter: function formatter(data) {
        return data;
    }
};

var propTypes = {
    formatter: _react.PropTypes.func,
    name: _react.PropTypes.string,
    style: _react.PropTypes.object,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

//v2 : replace div by span
function DisplayText(_ref) {
    var formatter = _ref.formatter,
        style = _ref.style,
        value = _ref.value;

    return _react2.default.createElement(
        'div',
        { className: style },
        formatter(value)
    );
}

//Static props.
DisplayText.displayName = 'DisplayText';
DisplayText.defaultProps = defaultProps;
DisplayText.propTypes = propTypes;

exports.default = DisplayText;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiZm9ybWF0dGVyIiwiZGF0YSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJuYW1lIiwic3RyaW5nIiwic3R5bGUiLCJvYmplY3QiLCJ2YWx1ZSIsIm9uZU9mVHlwZSIsIm51bWJlciIsIkRpc3BsYXlUZXh0IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlO0FBQ2pCQyxlQUFXLG1CQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBVjtBQUFBO0FBRE0sQ0FBckI7O0FBSUEsSUFBTUMsWUFBWTtBQUNkRixlQUFXRyxpQkFBVUMsSUFEUDtBQUVkQyxVQUFNRixpQkFBVUcsTUFGRjtBQUdkQyxXQUFPSixpQkFBVUssTUFISDtBQUlkQyxXQUFPTixpQkFBVU8sU0FBVixDQUFvQixDQUFDUCxpQkFBVUcsTUFBWCxFQUFtQkgsaUJBQVVRLE1BQTdCLENBQXBCO0FBSk8sQ0FBbEI7O0FBT0E7QUFDQSxTQUFTQyxXQUFULE9BQWtEO0FBQUEsUUFBM0JaLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLFFBQWhCTyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxRQUFURSxLQUFTLFFBQVRBLEtBQVM7O0FBQzlDLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBV0YsS0FBaEI7QUFBd0JQLGtCQUFVUyxLQUFWO0FBQXhCLEtBREo7QUFHSDs7QUFFRDtBQUNBRyxZQUFZQyxXQUFaLEdBQTBCLGFBQTFCO0FBQ0FELFlBQVliLFlBQVosR0FBMkJBLFlBQTNCO0FBQ0FhLFlBQVlWLFNBQVosR0FBd0JBLFNBQXhCOztrQkFFZVUsVyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGZvcm1hdHRlcjogKGRhdGEpID0+IGRhdGFcclxufTtcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICAgIGZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxyXG59O1xyXG5cclxuLy92MiA6IHJlcGxhY2UgZGl2IGJ5IHNwYW5cclxuZnVuY3Rpb24gRGlzcGxheVRleHQoeyBmb3JtYXR0ZXIsIHN0eWxlLCB2YWx1ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0+e2Zvcm1hdHRlcih2YWx1ZSl9PC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG4vL1N0YXRpYyBwcm9wcy5cclxuRGlzcGxheVRleHQuZGlzcGxheU5hbWUgPSAnRGlzcGxheVRleHQnO1xyXG5EaXNwbGF5VGV4dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcbkRpc3BsYXlUZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlUZXh0O1xyXG4iXX0=