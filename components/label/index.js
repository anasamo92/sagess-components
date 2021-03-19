'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('sagess-core/translation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
function Label(_ref) {
    var name = _ref.name,
        text = _ref.text;

    var content = text || name;
    return _react2.default.createElement(
        'label',
        { 'data-focus': 'label', htmlFor: name },
        (0, _translation.translate)(content)
    );
}

Label.propTypes = {
    name: _react.PropTypes.string.isRequired,
    text: _react.PropTypes.string
};

exports.default = Label;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiTGFiZWwiLCJuYW1lIiwidGV4dCIsImNvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRkE7QUFJQSxTQUFTQSxLQUFULE9BQStCO0FBQUEsUUFBZEMsSUFBYyxRQUFkQSxJQUFjO0FBQUEsUUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUMzQixRQUFNQyxVQUFVRCxRQUFRRCxJQUF4QjtBQUNBLFdBQ0k7QUFBQTtBQUFBLFVBQU8sY0FBVyxPQUFsQixFQUEwQixTQUFTQSxJQUFuQztBQUNLLG9DQUFVRSxPQUFWO0FBREwsS0FESjtBQUtIOztBQUVESCxNQUFNSSxTQUFOLEdBQWtCO0FBQ2RILFVBQU1JLGlCQUFVQyxNQUFWLENBQWlCQyxVQURUO0FBRWRMLFVBQU1HLGlCQUFVQztBQUZGLENBQWxCOztrQkFLZU4sSyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdzYWdlc3MtY29yZS90cmFuc2xhdGlvbic7XG5cbmZ1bmN0aW9uIExhYmVsKHsgbmFtZSwgdGV4dCB9KSB7XG4gICAgY29uc3QgY29udGVudCA9IHRleHQgfHwgbmFtZTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGFiZWwgZGF0YS1mb2N1cz0nbGFiZWwnIGh0bWxGb3I9e25hbWV9PlxuICAgICAgICAgICAge3RyYW5zbGF0ZShjb250ZW50KX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICApO1xufVxuXG5MYWJlbC5wcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iXX0=