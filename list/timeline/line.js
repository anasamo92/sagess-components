'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _i18n = require('../../common/i18n');

var _referenceProperty = require('../../common/mixin/reference-property');

var _referenceProperty2 = _interopRequireDefault(_referenceProperty);

var _definition = require('../../common/mixin/definition');

var _definition2 = _interopRequireDefault(_definition);

var _builtInComponents = require('../mixin/built-in-components');

var _builtInComponents2 = _interopRequireDefault(_builtInComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lineMixin = {
    /**
     * React component name.
     */
    displayName: 'timeline-line',

    /**
     * Mixin dependancies.
     */
    mixins: [_i18n.mixin, _definition2.default, _referenceProperty2.default, _builtInComponents2.default],

    getInitialState: function getInitialSate() {
        return {};
    },

    /**
     * line property validation.
     * @type {Object}
     */
    propTypes: {
        data: (0, _types2.default)('object'),
        dateField: (0, _types2.default)('string'),
        dateComponent: (0, _types2.default)('object'),
        onLineClick: (0, _types2.default)('func')
    },

    /**
     * Get the line value.
     * @returns {object} - the data od the line.
     */
    getValue: function getValue() {
        return {
            item: this.props.data
        };
    },


    /**
     * Line Click handler.
     * @param {object} event - the event
     */
    _handleLineClick: function _handleLineClick(event) {
        if (this.props.onLineClick) {
            this.props.onLineClick(this.props.data);
        }
    },


    /**
     * render content for a line.
     * @returns {XML} the line content
     */
    _renderLineContent: function _renderLineContent() {
        if (this.renderLineContent) {
            return this.renderLineContent(this.props.data);
        } else {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'timeline-heading' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'timeline-title' },
                        this.props.data.title
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'timeline-body' },
                    _react2.default.createElement(
                        'p',
                        null,
                        this.props.data.body
                    )
                )
            );
        }
    },


    /**
     * Render line in list.
     * @returns {XML} - the render of the line
     */
    render: function render() {
        if (this.renderLine) {
            return this.renderLine();
        } else {
            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'timeline-date' },
                    this.textFor(this.props.dateField, {})
                ),
                _react2.default.createElement('div', { className: 'timeline-badge' }),
                _react2.default.createElement(
                    'div',
                    { className: 'timeline-panel', onClick: this._handleLineClick },
                    this._renderLineContent()
                )
            );
        }
    }
}; /**@jsx*/
exports.mixin = lineMixin;
exports.default = { mixin: lineMixin };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibGluZU1peGluIiwiZGlzcGxheU5hbWUiLCJtaXhpbnMiLCJ0cmFuc2xhdGlvbk1peGluIiwiZGVmaW5pdGlvbk1peGluIiwicmVmZXJlbmNlTWl4aW4iLCJidWlsdEluQ29tcG9uZW50c01peGluIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZ2V0SW5pdGlhbFNhdGUiLCJwcm9wVHlwZXMiLCJkYXRhIiwiZGF0ZUZpZWxkIiwiZGF0ZUNvbXBvbmVudCIsIm9uTGluZUNsaWNrIiwiZ2V0VmFsdWUiLCJpdGVtIiwicHJvcHMiLCJfaGFuZGxlTGluZUNsaWNrIiwiZXZlbnQiLCJfcmVuZGVyTGluZUNvbnRlbnQiLCJyZW5kZXJMaW5lQ29udGVudCIsInRpdGxlIiwiYm9keSIsInJlbmRlciIsInJlbmRlckxpbmUiLCJ0ZXh0Rm9yIiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDZDs7O0FBR0FDLGlCQUFhLGVBSkM7O0FBTWQ7OztBQUdBQyxZQUFRLENBQUNDLFdBQUQsRUFBbUJDLG9CQUFuQixFQUFvQ0MsMkJBQXBDLEVBQW9EQywyQkFBcEQsQ0FUTTs7QUFXZEMscUJBQWlCLFNBQVNDLGNBQVQsR0FBMEI7QUFDdkMsZUFBTyxFQUFQO0FBQ0gsS0FiYTs7QUFlZDs7OztBQUlBQyxlQUFXO0FBQ1BDLGNBQU0scUJBQUssUUFBTCxDQURDO0FBRVBDLG1CQUFXLHFCQUFLLFFBQUwsQ0FGSjtBQUdQQyx1QkFBZSxxQkFBSyxRQUFMLENBSFI7QUFJUEMscUJBQWEscUJBQUssTUFBTDtBQUpOLEtBbkJHOztBQTBCZDs7OztBQUlBQyxZQTlCYyxzQkE4Qkg7QUFDUCxlQUFPO0FBQ0hDLGtCQUFNLEtBQUtDLEtBQUwsQ0FBV047QUFEZCxTQUFQO0FBR0gsS0FsQ2E7OztBQW9DZDs7OztBQUlBTyxvQkF4Q2MsNEJBd0NHQyxLQXhDSCxFQXdDVTtBQUNwQixZQUFJLEtBQUtGLEtBQUwsQ0FBV0gsV0FBZixFQUE0QjtBQUN4QixpQkFBS0csS0FBTCxDQUFXSCxXQUFYLENBQXVCLEtBQUtHLEtBQUwsQ0FBV04sSUFBbEM7QUFDSDtBQUNKLEtBNUNhOzs7QUE4Q2Q7Ozs7QUFJQVMsc0JBbERjLGdDQWtETztBQUNqQixZQUFJLEtBQUtDLGlCQUFULEVBQTRCO0FBQ3hCLG1CQUFPLEtBQUtBLGlCQUFMLENBQXVCLEtBQUtKLEtBQUwsQ0FBV04sSUFBbEMsQ0FBUDtBQUNILFNBRkQsTUFFTztBQUNILG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGtCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFJLFdBQVUsZ0JBQWQ7QUFBZ0MsNkJBQUtNLEtBQUwsQ0FBV04sSUFBWCxDQUFnQlc7QUFBaEQ7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUE7QUFBSSw2QkFBS0wsS0FBTCxDQUFXTixJQUFYLENBQWdCWTtBQUFwQjtBQURKO0FBSkosYUFESjtBQVdIO0FBQ0osS0FsRWE7OztBQW9FZDs7OztBQUlBQyxVQXhFYyxvQkF3RUw7QUFDTCxZQUFJLEtBQUtDLFVBQVQsRUFBcUI7QUFDakIsbUJBQU8sS0FBS0EsVUFBTCxFQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZUFBZjtBQUFnQyx5QkFBS0MsT0FBTCxDQUFhLEtBQUtULEtBQUwsQ0FBV0wsU0FBeEIsRUFBbUMsRUFBbkM7QUFBaEMsaUJBREo7QUFFSSx1REFBSyxXQUFVLGdCQUFmLEdBRko7QUFHSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZixFQUFnQyxTQUFTLEtBQUtNLGdCQUE5QztBQUNLLHlCQUFLRSxrQkFBTDtBQURMO0FBSEosYUFESjtBQVNIO0FBQ0o7QUF0RmEsQ0FBbEIsQyxDQVRBO1FBa0dzQk8sSyxHQUFiMUIsUztrQkFDTSxFQUFFMEIsT0FBTzFCLFNBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHR5cGUgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbmltcG9ydCB7IG1peGluIGFzIHRyYW5zbGF0aW9uTWl4aW4gfSBmcm9tICcuLi8uLi9jb21tb24vaTE4bic7XG5pbXBvcnQgcmVmZXJlbmNlTWl4aW4gZnJvbSAnLi4vLi4vY29tbW9uL21peGluL3JlZmVyZW5jZS1wcm9wZXJ0eSc7XG5pbXBvcnQgZGVmaW5pdGlvbk1peGluIGZyb20gJy4uLy4uL2NvbW1vbi9taXhpbi9kZWZpbml0aW9uJztcbmltcG9ydCBidWlsdEluQ29tcG9uZW50c01peGluIGZyb20gJy4uL21peGluL2J1aWx0LWluLWNvbXBvbmVudHMnO1xuXG5jb25zdCBsaW5lTWl4aW4gPSB7XG4gICAgLyoqXG4gICAgICogUmVhY3QgY29tcG9uZW50IG5hbWUuXG4gICAgICovXG4gICAgZGlzcGxheU5hbWU6ICd0aW1lbGluZS1saW5lJyxcblxuICAgIC8qKlxuICAgICAqIE1peGluIGRlcGVuZGFuY2llcy5cbiAgICAgKi9cbiAgICBtaXhpbnM6IFt0cmFuc2xhdGlvbk1peGluLCBkZWZpbml0aW9uTWl4aW4sIHJlZmVyZW5jZU1peGluLCBidWlsdEluQ29tcG9uZW50c01peGluXSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFNhdGUoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogbGluZSBwcm9wZXJ0eSB2YWxpZGF0aW9uLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGRhdGE6IHR5cGUoJ29iamVjdCcpLFxuICAgICAgICBkYXRlRmllbGQ6IHR5cGUoJ3N0cmluZycpLFxuICAgICAgICBkYXRlQ29tcG9uZW50OiB0eXBlKCdvYmplY3QnKSxcbiAgICAgICAgb25MaW5lQ2xpY2s6IHR5cGUoJ2Z1bmMnKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxpbmUgdmFsdWUuXG4gICAgICogQHJldHVybnMge29iamVjdH0gLSB0aGUgZGF0YSBvZCB0aGUgbGluZS5cbiAgICAgKi9cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW06IHRoaXMucHJvcHMuZGF0YVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaW5lIENsaWNrIGhhbmRsZXIuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IC0gdGhlIGV2ZW50XG4gICAgICovXG4gICAgX2hhbmRsZUxpbmVDbGljayhldmVudCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkxpbmVDbGljaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkxpbmVDbGljayh0aGlzLnByb3BzLmRhdGEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJlbmRlciBjb250ZW50IGZvciBhIGxpbmUuXG4gICAgICogQHJldHVybnMge1hNTH0gdGhlIGxpbmUgY29udGVudFxuICAgICAqL1xuICAgIF9yZW5kZXJMaW5lQ29udGVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyTGluZUNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxpbmVDb250ZW50KHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lbGluZS1oZWFkaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RpbWVsaW5lLXRpdGxlJz57dGhpcy5wcm9wcy5kYXRhLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGltZWxpbmUtYm9keSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5kYXRhLmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgbGluZSBpbiBsaXN0LlxuICAgICAqIEByZXR1cm5zIHtYTUx9IC0gdGhlIHJlbmRlciBvZiB0aGUgbGluZVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyTGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTGluZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lbGluZS1kYXRlJz57dGhpcy50ZXh0Rm9yKHRoaXMucHJvcHMuZGF0ZUZpZWxkLCB7fSl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lbGluZS1iYWRnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWVsaW5lLXBhbmVsJyBvbkNsaWNrPXt0aGlzLl9oYW5kbGVMaW5lQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckxpbmVDb250ZW50KCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IHsgbGluZU1peGluIGFzIG1peGluIH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluOiBsaW5lTWl4aW4gfTtcbiJdfQ==