'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};

var DisplayTextArea = function DisplayTextArea(_ref) {
    var value = _ref.value;
    return _react2.default.createElement(
        'div',
        { 'data-focus': 'display-textarea' },
        value
    );
};

DisplayTextArea.propTypes = propTypes;

exports.default = DisplayTextArea;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwidmFsdWUiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJEaXNwbGF5VGV4dEFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2RDLFdBQU9DLGlCQUFVQyxTQUFWLENBQW9CLENBQ3ZCRCxpQkFBVUUsTUFEYSxFQUV2QkYsaUJBQVVHLE1BRmEsQ0FBcEI7QUFETyxDQUFsQjs7QUFPQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsUUFBR0wsS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FDcEI7QUFBQTtBQUFBLFVBQUssY0FBVyxrQkFBaEI7QUFDS0E7QUFETCxLQURvQjtBQUFBLENBQXhCOztBQU1BSyxnQkFBZ0JOLFNBQWhCLEdBQTRCQSxTQUE1Qjs7a0JBRWVNLGUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxuICAgIF0pXG59XG5cbmNvbnN0IERpc3BsYXlUZXh0QXJlYSA9ICh7IHZhbHVlIH0pID0+IChcbiAgICA8ZGl2IGRhdGEtZm9jdXM9J2Rpc3BsYXktdGV4dGFyZWEnPlxuICAgICAgICB7dmFsdWV9XG4gICAgPC9kaXY+XG4pO1xuXG5EaXNwbGF5VGV4dEFyZWEucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5VGV4dEFyZWE7XG4iXX0=