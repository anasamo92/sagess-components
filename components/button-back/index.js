'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _history = require('sagess-core/history');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    back: _react.PropTypes.func
};

var defaultProps = {
    back: _history.back
};

function ButtonBack(_ref) {
    var back = _ref.back;

    return _react2.default.createElement(_button2.default, {
        handleOnClick: back,
        icon: 'keyboard_backspace',
        label: 'button.back',
        shape: null,
        type: 'button'
    });
}

ButtonBack.propTypes = propTypes;
ButtonBack.defaultProps = defaultProps;

exports.default = ButtonBack;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiYmFjayIsIlByb3BUeXBlcyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJkZWZhdWx0QmFjayIsIkJ1dHRvbkJhY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVk7QUFDZEMsVUFBTUMsaUJBQVVDO0FBREYsQ0FBbEI7O0FBSUEsSUFBTUMsZUFBZTtBQUNqQkgsVUFBTUk7QUFEVyxDQUFyQjs7QUFJQSxTQUFTQyxVQUFULE9BQThCO0FBQUEsUUFBUkwsSUFBUSxRQUFSQSxJQUFROztBQUMxQixXQUNJLDhCQUFDLGdCQUFEO0FBQ0ksdUJBQWVBLElBRG5CO0FBRUksY0FBSyxvQkFGVDtBQUdJLGVBQU0sYUFIVjtBQUlJLGVBQU8sSUFKWDtBQUtJLGNBQUs7QUFMVCxNQURKO0FBU0g7O0FBRURLLFdBQVdOLFNBQVgsR0FBdUJBLFNBQXZCO0FBQ0FNLFdBQVdGLFlBQVgsR0FBMEJBLFlBQTFCOztrQkFFZUUsVSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcbmltcG9ydCB7IGJhY2sgYXMgZGVmYXVsdEJhY2sgfSBmcm9tICdzYWdlc3MtY29yZS9oaXN0b3J5JztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGJhY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYmFjazogZGVmYXVsdEJhY2tcbn07XG5cbmZ1bmN0aW9uIEJ1dHRvbkJhY2soeyBiYWNrIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBoYW5kbGVPbkNsaWNrPXtiYWNrfVxuICAgICAgICAgICAgaWNvbj0na2V5Ym9hcmRfYmFja3NwYWNlJ1xuICAgICAgICAgICAgbGFiZWw9J2J1dHRvbi5iYWNrJ1xuICAgICAgICAgICAgc2hhcGU9e251bGx9XG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgIC8+XG4gICAgKTtcbn1cblxuQnV0dG9uQmFjay5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5CdXR0b25CYWNrLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQmFjaztcbiJdfQ==