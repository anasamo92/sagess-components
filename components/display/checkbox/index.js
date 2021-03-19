'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('sagess-core/translation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Render the boolean value.
*/
function renderValue(value) {
    var stringValue = value ? 'true' : 'false';
    return (0, _translation.translate)('display.checkbox.' + stringValue);
}

function displayCheckbox(_ref) {
    var name = _ref.name,
        value = _ref.value;

    return _react2.default.createElement(
        'div',
        { id: name, name: name },
        renderValue(value)
    );
}

displayCheckbox.defaultProps = {
    value: undefined,
    name: undefined,
    style: {}
};

displayCheckbox.propTypes = {
    type: _react.PropTypes.string,
    value: _react.PropTypes.bool,
    name: _react.PropTypes.string,
    style: _react.PropTypes.object
};

displayCheckbox.displayName = 'DisplayCheckbox';

exports.default = displayCheckbox;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicmVuZGVyVmFsdWUiLCJ2YWx1ZSIsInN0cmluZ1ZhbHVlIiwiZGlzcGxheUNoZWNrYm94IiwibmFtZSIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInN0eWxlIiwicHJvcFR5cGVzIiwidHlwZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJvYmplY3QiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7QUFHQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUN4QixRQUFNQyxjQUFjRCxRQUFRLE1BQVIsR0FBaUIsT0FBckM7QUFDQSxXQUFPLGtEQUE4QkMsV0FBOUIsQ0FBUDtBQUNIOztBQUVELFNBQVNDLGVBQVQsT0FBMEM7QUFBQSxRQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxRQUFUSCxLQUFTLFFBQVRBLEtBQVM7O0FBQ3RDLFdBQ0k7QUFBQTtBQUFBLFVBQUssSUFBSUcsSUFBVCxFQUFlLE1BQU1BLElBQXJCO0FBQ0tKLG9CQUFZQyxLQUFaO0FBREwsS0FESjtBQUtIOztBQUVERSxnQkFBZ0JFLFlBQWhCLEdBQStCO0FBQzNCSixXQUFPSyxTQURvQjtBQUUzQkYsVUFBTUUsU0FGcUI7QUFHM0JDLFdBQU87QUFIb0IsQ0FBL0I7O0FBTUFKLGdCQUFnQkssU0FBaEIsR0FBNEI7QUFDeEJDLFVBQU1DLGlCQUFVQyxNQURRO0FBRXhCVixXQUFPUyxpQkFBVUUsSUFGTztBQUd4QlIsVUFBTU0saUJBQVVDLE1BSFE7QUFJeEJKLFdBQU9HLGlCQUFVRztBQUpPLENBQTVCOztBQU9BVixnQkFBZ0JXLFdBQWhCLEdBQThCLGlCQUE5Qjs7a0JBRWVYLGUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdzYWdlc3MtY29yZS90cmFuc2xhdGlvbic7XG5cbi8qKlxuKiBSZW5kZXIgdGhlIGJvb2xlYW4gdmFsdWUuXG4qL1xuZnVuY3Rpb24gcmVuZGVyVmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IHZhbHVlID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICByZXR1cm4gdHJhbnNsYXRlKGBkaXNwbGF5LmNoZWNrYm94LiR7c3RyaW5nVmFsdWV9YCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDaGVja2JveCh7IG5hbWUsIHZhbHVlIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXtuYW1lfSBuYW1lPXtuYW1lfT5cbiAgICAgICAgICAgIHtyZW5kZXJWYWx1ZSh2YWx1ZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmRpc3BsYXlDaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgc3R5bGU6IHt9XG59O1xuXG5kaXNwbGF5Q2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmRpc3BsYXlDaGVja2JveC5kaXNwbGF5TmFtZSA9ICdEaXNwbGF5Q2hlY2tib3gnO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q2hlY2tib3g7XG4iXX0=