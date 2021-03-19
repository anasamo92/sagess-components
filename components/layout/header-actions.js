'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isObject = require('lodash/lang/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _filterHtmlAttributes = require('../../utils/filter-html-attributes');

var _filterHtmlAttributes2 = _interopRequireDefault(_filterHtmlAttributes);

var _builtInStore = require('sagess-core/application/built-in-store');

var _builtInStore2 = _interopRequireDefault(_builtInStore);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _iconDropdown = require('../../components/icon-dropdown');

var _iconDropdown2 = _interopRequireDefault(_iconDropdown);

var _connect = require('../../behaviours/store/connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // Libs

// Stores

// Components


/** Connector for HeaderActions. */
var connector = (0, _connect2.default)([{
    store: _builtInStore2.default,
    properties: ['actions']
}], function () {
    return {
        actions: _builtInStore2.default.getActions() || { primary: [], secondary: [] }
    };
});

/** Sub-action type. */
var subActionType = _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string.isRequired,
    action: _react.PropTypes.func.isRequired
}));

/** Action type. */
var actionType = _react.PropTypes.oneOfType([_react.PropTypes.shape({ // Icon action
    label: _react.PropTypes.string.isRequired,
    action: _react.PropTypes.func.isRequired,
    icon: _react.PropTypes.string.isRequired,
    iconLibrary: _react.PropTypes.string,
    className: _react.PropTypes.string
}), _react.PropTypes.shape({ // Dropdown action
    icon: _react.PropTypes.string,
    iconLibrary: _react.PropTypes.string,
    action: subActionType.isRequired
})]);

/** Proptypes validation for HeaderActions. */
var propTypes = {
    actions: _react.PropTypes.shape({
        primary: _react.PropTypes.arrayOf(actionType),
        secondary: _react.PropTypes.oneOfType([subActionType, actionType])
    }).isRequired
};

/**
 * Render a list fab component.
 * @param {object} fab Fab.
 * @param {number} idx Index. 
 * @returns {JSXElement} Component.
 */
function renderFabListAction(fab, idx) {
    if (Array.isArray(fab.action) && fab.action.length > 0) {
        var icon = fab.icon,
            iconLibrary = fab.iconLibrary,
            action = fab.action,
            otherProps = _objectWithoutProperties(fab, ['icon', 'iconLibrary', 'action']);

        return _react2.default.createElement(_iconDropdown2.default, Object.assign({
            key: 'header-action-' + idx,
            iconProps: { name: icon, iconLibrary: iconLibrary },
            operationList: action,
            shape: 'fab'
        }, otherProps));
    }
}

/**
 * Render a fab component.
 * @param {object} fab Fab.
 * @returns {JSXElement} Component.
 */
function renderFabAction(fab) {
    var action = fab.action,
        className = fab.className,
        icon = fab.icon,
        iconLibrary = fab.iconLibrary,
        label = fab.label,
        otherProps = _objectWithoutProperties(fab, ['action', 'className', 'icon', 'iconLibrary', 'label']);

    return _react2.default.createElement(_button2.default, Object.assign({
        key: 'header-action-' + label,
        className: className,
        handleOnClick: action,
        icon: icon,
        iconLibrary: iconLibrary,
        label: label,
        shape: 'fab',
        type: 'button'
    }, otherProps));
}

/**
 * HeaderActions component.
 * @returns {JSXElement} Component.
 */
var HeaderActions = function HeaderActions(_ref) {
    var _ref$actions = _ref.actions,
        primary = _ref$actions.primary,
        secondary = _ref$actions.secondary,
        otherProps = _objectWithoutProperties(_ref, ['actions']);

    return _react2.default.createElement(
        'div',
        Object.assign({ 'data-focus': 'header-actions' }, (0, _filterHtmlAttributes2.default)(otherProps)),
        primary.map(function (action, idx) {
            return action && Array.isArray(action.action) ? renderFabListAction(action, idx) : renderFabAction(action);
        }),
        Array.isArray(secondary) && renderFabListAction({ action: secondary }, 0),
        (0, _isObject2.default)(secondary) && renderFabListAction(secondary, 0)
    );
};
HeaderActions.displayName = 'HeaderActions';
HeaderActions.propTypes = propTypes;

exports.default = connector(HeaderActions);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY29ubmVjdG9yIiwic3RvcmUiLCJhcHBsaWNhdGlvblN0b3JlIiwicHJvcGVydGllcyIsImFjdGlvbnMiLCJnZXRBY3Rpb25zIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInN1YkFjdGlvblR5cGUiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJsYWJlbCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhY3Rpb24iLCJmdW5jIiwiYWN0aW9uVHlwZSIsIm9uZU9mVHlwZSIsImljb24iLCJpY29uTGlicmFyeSIsImNsYXNzTmFtZSIsInByb3BUeXBlcyIsInJlbmRlckZhYkxpc3RBY3Rpb24iLCJmYWIiLCJpZHgiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvdGhlclByb3BzIiwibmFtZSIsInJlbmRlckZhYkFjdGlvbiIsIkhlYWRlckFjdGlvbnMiLCJtYXAiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs2TkFUQTs7QUFJQTs7QUFFQTs7O0FBS0E7QUFDQSxJQUFNQSxZQUFZLHVCQUFhLENBQUM7QUFDNUJDLFdBQU9DLHNCQURxQjtBQUU1QkMsZ0JBQVksQ0FBQyxTQUFEO0FBRmdCLENBQUQsQ0FBYixFQUdkO0FBQUEsV0FBTztBQUNQQyxpQkFBU0YsdUJBQWlCRyxVQUFqQixNQUFpQyxFQUFFQyxTQUFTLEVBQVgsRUFBZUMsV0FBVyxFQUExQjtBQURuQyxLQUFQO0FBQUEsQ0FIYyxDQUFsQjs7QUFPQTtBQUNBLElBQU1DLGdCQUFnQkMsaUJBQVVDLE9BQVYsQ0FBa0JELGlCQUFVRSxLQUFWLENBQWdCO0FBQ3BEQyxXQUFPSCxpQkFBVUksTUFBVixDQUFpQkMsVUFENEI7QUFFcERDLFlBQVFOLGlCQUFVTyxJQUFWLENBQWVGO0FBRjZCLENBQWhCLENBQWxCLENBQXRC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QUFvQlIsTUFBcEIsRUFBNEJVLEdBQTVCLENBQXpDLEdBQTRFTSxnQkFBZ0JoQixNQUFoQixDQUFuRjtBQUNILFNBRkEsQ0FETDtBQUlLVyxjQUFNQyxPQUFOLENBQWNwQixTQUFkLEtBQTRCZ0Isb0JBQW9CLEVBQUVSLFFBQVFSLFNBQVYsRUFBcEIsRUFBMkMsQ0FBM0MsQ0FKakM7QUFLSyxnQ0FBU0EsU0FBVCxLQUF1QmdCLG9CQUFvQmhCLFNBQXBCLEVBQStCLENBQS9CO0FBTDVCLEtBREo7QUFTSCxDQVZEO0FBV0F5QixjQUFjRSxXQUFkLEdBQTRCLGVBQTVCO0FBQ0FGLGNBQWNWLFNBQWQsR0FBMEJBLFNBQTFCOztrQkFFZXRCLFVBQVVnQyxhQUFWLEMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnbG9kYXNoL2xhbmcvaXNPYmplY3QnO1xuaW1wb3J0IGZpbHRlclByb3BzIGZyb20gJy4uLy4uL3V0aWxzL2ZpbHRlci1odG1sLWF0dHJpYnV0ZXMnO1xuLy8gU3RvcmVzXG5pbXBvcnQgYXBwbGljYXRpb25TdG9yZSBmcm9tICdzYWdlc3MtY29yZS9hcHBsaWNhdGlvbi9idWlsdC1pbi1zdG9yZSc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ljb24tZHJvcGRvd24nO1xuaW1wb3J0IHN0b3JlQ29ubmVjdCBmcm9tICcuLi8uLi9iZWhhdmlvdXJzL3N0b3JlL2Nvbm5lY3QnO1xuXG4vKiogQ29ubmVjdG9yIGZvciBIZWFkZXJBY3Rpb25zLiAqL1xuY29uc3QgY29ubmVjdG9yID0gc3RvcmVDb25uZWN0KFt7XG4gICAgc3RvcmU6IGFwcGxpY2F0aW9uU3RvcmUsXG4gICAgcHJvcGVydGllczogWydhY3Rpb25zJ11cbn1dLCAoKSA9PiAoe1xuICAgIGFjdGlvbnM6IGFwcGxpY2F0aW9uU3RvcmUuZ2V0QWN0aW9ucygpIHx8IHsgcHJpbWFyeTogW10sIHNlY29uZGFyeTogW10gfVxufSkpO1xuXG4vKiogU3ViLWFjdGlvbiB0eXBlLiAqL1xuY29uc3Qgc3ViQWN0aW9uVHlwZSA9IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn0pKTtcblxuLyoqIEFjdGlvbiB0eXBlLiAqL1xuY29uc3QgYWN0aW9uVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zaGFwZSh7IC8vIEljb24gYWN0aW9uXG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGFjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBpY29uTGlicmFyeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSksXG4gICAgUHJvcFR5cGVzLnNoYXBlKHsgLy8gRHJvcGRvd24gYWN0aW9uXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGljb25MaWJyYXJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBhY3Rpb246IHN1YkFjdGlvblR5cGUuaXNSZXF1aXJlZFxuICAgIH0pXG5dKTtcblxuLyoqIFByb3B0eXBlcyB2YWxpZGF0aW9uIGZvciBIZWFkZXJBY3Rpb25zLiAqL1xuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHByaW1hcnk6IFByb3BUeXBlcy5hcnJheU9mKGFjdGlvblR5cGUpLFxuICAgICAgICBzZWNvbmRhcnk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICAgICAgc3ViQWN0aW9uVHlwZSxcbiAgICAgICAgICAgIGFjdGlvblR5cGVcbiAgICAgICAgXSlcbiAgICB9KS5pc1JlcXVpcmVkXG59O1xuXG4vKipcbiAqIFJlbmRlciBhIGxpc3QgZmFiIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmYWIgRmFiLlxuICogQHBhcmFtIHtudW1iZXJ9IGlkeCBJbmRleC4gXG4gKiBAcmV0dXJucyB7SlNYRWxlbWVudH0gQ29tcG9uZW50LlxuICovXG5mdW5jdGlvbiByZW5kZXJGYWJMaXN0QWN0aW9uKGZhYiwgaWR4KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmFiLmFjdGlvbikgJiYgZmFiLmFjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHsgaWNvbiwgaWNvbkxpYnJhcnksIGFjdGlvbiwgLi4ub3RoZXJQcm9wcyB9ID0gZmFiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAga2V5PXtgaGVhZGVyLWFjdGlvbi0ke2lkeH1gfVxuICAgICAgICAgICAgICAgIGljb25Qcm9wcz17eyBuYW1lOiBpY29uLCBpY29uTGlicmFyeSB9fVxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbkxpc3Q9e2FjdGlvbn1cbiAgICAgICAgICAgICAgICBzaGFwZT0nZmFiJ1xuICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVuZGVyIGEgZmFiIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmYWIgRmFiLlxuICogQHJldHVybnMge0pTWEVsZW1lbnR9IENvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyRmFiQWN0aW9uKGZhYikge1xuICAgIGNvbnN0IHsgYWN0aW9uLCBjbGFzc05hbWUsIGljb24sIGljb25MaWJyYXJ5LCBsYWJlbCwgLi4ub3RoZXJQcm9wcyB9ID0gZmFiO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17YGhlYWRlci1hY3Rpb24tJHtsYWJlbH1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICBoYW5kbGVPbkNsaWNrPXthY3Rpb259XG4gICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgaWNvbkxpYnJhcnk9e2ljb25MaWJyYXJ5fVxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgc2hhcGU9J2ZhYidcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAvPlxuICAgICk7XG59XG5cbi8qKlxuICogSGVhZGVyQWN0aW9ucyBjb21wb25lbnQuXG4gKiBAcmV0dXJucyB7SlNYRWxlbWVudH0gQ29tcG9uZW50LlxuICovXG5jb25zdCBIZWFkZXJBY3Rpb25zID0gKHsgYWN0aW9uczogeyBwcmltYXJ5LCBzZWNvbmRhcnkgfSwgLi4ub3RoZXJQcm9wcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdoZWFkZXItYWN0aW9ucycgey4uLmZpbHRlclByb3BzKG90aGVyUHJvcHMpfT5cbiAgICAgICAgICAgIHtwcmltYXJ5Lm1hcCgoYWN0aW9uLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uICYmIEFycmF5LmlzQXJyYXkoYWN0aW9uLmFjdGlvbikgPyByZW5kZXJGYWJMaXN0QWN0aW9uKGFjdGlvbiwgaWR4KSA6IHJlbmRlckZhYkFjdGlvbihhY3Rpb24pXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KHNlY29uZGFyeSkgJiYgcmVuZGVyRmFiTGlzdEFjdGlvbih7IGFjdGlvbjogc2Vjb25kYXJ5IH0sIDApfVxuICAgICAgICAgICAge2lzT2JqZWN0KHNlY29uZGFyeSkgJiYgcmVuZGVyRmFiTGlzdEFjdGlvbihzZWNvbmRhcnksIDApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbkhlYWRlckFjdGlvbnMuZGlzcGxheU5hbWUgPSAnSGVhZGVyQWN0aW9ucyc7XG5IZWFkZXJBY3Rpb25zLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKEhlYWRlckFjdGlvbnMpO1xuIl19