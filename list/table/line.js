'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = undefined;

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _referenceProperty = require('../../common/mixin/reference-property');

var _referenceProperty2 = _interopRequireDefault(_referenceProperty);

var _definition = require('../../common/mixin/definition');

var _definition2 = _interopRequireDefault(_definition);

var _builtInComponents = require('../mixin/built-in-components');

var _builtInComponents2 = _interopRequireDefault(_builtInComponents);

var _i18n = require('../../common/i18n');

var _actionContextual = require('../action-contextual');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
var lineMixin = {
    /**
     * React component name.
     */
    displayName: 'table-line',

    /**
     * Mixin dependancies.
     */
    mixins: [_i18n.mixin, _definition2.default, _referenceProperty2.default, _builtInComponents2.default],

    /**@inheritDoc**/
    getDefaultProps: function getDefaultProps() {
        return {};
    },


    /**@inheritDoc**/
    getInitialState: function getInitialState() {
        return {};
    },


    /**
     * line property validation.
     * @type {Object}
     */
    propTypes: {
        data: (0, _types2.default)('object'),
        saveAction: (0, _types2.default)('func'),
        deleteAction: (0, _types2.default)('func'),
        onLineClick: (0, _types2.default)('func'),
        onSelection: (0, _types2.default)('func'),
        operationList: (0, _types2.default)('array', true)
    },

    /**
     * Render line Actions.
     */
    renderLineActions: function renderLineActions() {
        if (this.props.operationList.length > 0) {
            return React.createElement(
                'div',
                { 'data-focus': 'table-line-actions' },
                React.createElement(_actionContextual.component, { operationList: this.props.operationList, operationParam: this.props.data })
            );
        }
    },
    _onLineClickHandler: function _onLineClickHandler(data) {
        var _this = this;

        return function () {
            _this.props.onLineClick(data);
        };
    },
    render: function render() {
        return this.renderLineContent(this.props.data);
    }
};
// Components

// Mixins
exports.mixin = lineMixin;
exports.default = {
    mixin: lineMixin
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibGluZU1peGluIiwiZGlzcGxheU5hbWUiLCJtaXhpbnMiLCJ0cmFuc2xhdGlvbk1peGluIiwiZGVmaW5pdGlvbk1peGluIiwicmVmZXJlbmNlTWl4aW4iLCJidWlsdEluQ29tcG9uZW50c01peGluIiwiZ2V0RGVmYXVsdFByb3BzIiwiZ2V0SW5pdGlhbFN0YXRlIiwicHJvcFR5cGVzIiwiZGF0YSIsInNhdmVBY3Rpb24iLCJkZWxldGVBY3Rpb24iLCJvbkxpbmVDbGljayIsIm9uU2VsZWN0aW9uIiwib3BlcmF0aW9uTGlzdCIsInJlbmRlckxpbmVBY3Rpb25zIiwicHJvcHMiLCJsZW5ndGgiLCJfb25MaW5lQ2xpY2tIYW5kbGVyIiwicmVuZGVyIiwicmVuZGVyTGluZUNvbnRlbnQiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFSQTtBQVVBLElBQUlBLFlBQVk7QUFDWjs7O0FBR0FDLGlCQUFhLFlBSkQ7O0FBTVo7OztBQUdBQyxZQUFRLENBQUNDLFdBQUQsRUFBbUJDLG9CQUFuQixFQUFvQ0MsMkJBQXBDLEVBQW9EQywyQkFBcEQsQ0FUSTs7QUFXWjtBQUNBQyxtQkFaWSw2QkFZTTtBQUNkLGVBQU8sRUFBUDtBQUNILEtBZFc7OztBQWdCWjtBQUNBQyxtQkFqQlksNkJBaUJNO0FBQ2QsZUFBTyxFQUFQO0FBQ0gsS0FuQlc7OztBQXFCWjs7OztBQUlBQyxlQUFXO0FBQ1BDLGNBQU0scUJBQUssUUFBTCxDQURDO0FBRVBDLG9CQUFZLHFCQUFLLE1BQUwsQ0FGTDtBQUdQQyxzQkFBYyxxQkFBSyxNQUFMLENBSFA7QUFJUEMscUJBQWEscUJBQUssTUFBTCxDQUpOO0FBS1BDLHFCQUFhLHFCQUFLLE1BQUwsQ0FMTjtBQU1QQyx1QkFBZSxxQkFBSyxPQUFMLEVBQWMsSUFBZDtBQU5SLEtBekJDOztBQWtDWjs7O0FBR0FDLHFCQXJDWSwrQkFxQ1E7QUFDaEIsWUFBSSxLQUFLQyxLQUFMLENBQVdGLGFBQVgsQ0FBeUJHLE1BQXpCLEdBQWtDLENBQXRDLEVBQXlDO0FBQ3JDLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLG9CQUFoQjtBQUNJLG9DQUFDLDJCQUFELElBQW1CLGVBQWUsS0FBS0QsS0FBTCxDQUFXRixhQUE3QyxFQUE0RCxnQkFBZ0IsS0FBS0UsS0FBTCxDQUFXUCxJQUF2RjtBQURKLGFBREo7QUFLSDtBQUNKLEtBN0NXO0FBOENaUyx1QkE5Q1ksK0JBOENRVCxJQTlDUixFQThDYztBQUFBOztBQUN0QixlQUFPLFlBQU07QUFBRSxrQkFBS08sS0FBTCxDQUFXSixXQUFYLENBQXVCSCxJQUF2QjtBQUErQixTQUE5QztBQUNILEtBaERXO0FBaURaVSxVQWpEWSxvQkFpREg7QUFDTCxlQUFPLEtBQUtDLGlCQUFMLENBQXVCLEtBQUtKLEtBQUwsQ0FBV1AsSUFBbEMsQ0FBUDtBQUNIO0FBbkRXLENBQWhCO0FBSEE7O0FBTEE7UUErRGlCWSxLLEdBQWJ0QixTO2tCQUVXO0FBQ1hzQixXQUFPdEI7QUFESSxDIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCB0eXBlIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC90eXBlcyc7XG4vLyBNaXhpbnNcbmltcG9ydCByZWZlcmVuY2VNaXhpbiBmcm9tICcuLi8uLi9jb21tb24vbWl4aW4vcmVmZXJlbmNlLXByb3BlcnR5JztcbmltcG9ydCBkZWZpbml0aW9uTWl4aW4gZnJvbSAnLi4vLi4vY29tbW9uL21peGluL2RlZmluaXRpb24nO1xuaW1wb3J0IGJ1aWx0SW5Db21wb25lbnRzTWl4aW4gZnJvbSAnLi4vbWl4aW4vYnVpbHQtaW4tY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtaXhpbiBhcyB0cmFuc2xhdGlvbk1peGluIH0gZnJvbSAnLi4vLi4vY29tbW9uL2kxOG4nO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIENvbnRleHR1YWxBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9uLWNvbnRleHR1YWwnO1xuXG5sZXQgbGluZU1peGluID0ge1xuICAgIC8qKlxuICAgICAqIFJlYWN0IGNvbXBvbmVudCBuYW1lLlxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lOiAndGFibGUtbGluZScsXG5cbiAgICAvKipcbiAgICAgKiBNaXhpbiBkZXBlbmRhbmNpZXMuXG4gICAgICovXG4gICAgbWl4aW5zOiBbdHJhbnNsYXRpb25NaXhpbiwgZGVmaW5pdGlvbk1peGluLCByZWZlcmVuY2VNaXhpbiwgYnVpbHRJbkNvbXBvbmVudHNNaXhpbl0sXG5cbiAgICAvKipAaW5oZXJpdERvYyoqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sXG5cbiAgICAvKipAaW5oZXJpdERvYyoqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBsaW5lIHByb3BlcnR5IHZhbGlkYXRpb24uXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgZGF0YTogdHlwZSgnb2JqZWN0JyksXG4gICAgICAgIHNhdmVBY3Rpb246IHR5cGUoJ2Z1bmMnKSxcbiAgICAgICAgZGVsZXRlQWN0aW9uOiB0eXBlKCdmdW5jJyksXG4gICAgICAgIG9uTGluZUNsaWNrOiB0eXBlKCdmdW5jJyksXG4gICAgICAgIG9uU2VsZWN0aW9uOiB0eXBlKCdmdW5jJyksXG4gICAgICAgIG9wZXJhdGlvbkxpc3Q6IHR5cGUoJ2FycmF5JywgdHJ1ZSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGxpbmUgQWN0aW9ucy5cbiAgICAgKi9cbiAgICByZW5kZXJMaW5lQWN0aW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3BlcmF0aW9uTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0ndGFibGUtbGluZS1hY3Rpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRleHR1YWxBY3Rpb25zIG9wZXJhdGlvbkxpc3Q9e3RoaXMucHJvcHMub3BlcmF0aW9uTGlzdH0gb3BlcmF0aW9uUGFyYW09e3RoaXMucHJvcHMuZGF0YX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIF9vbkxpbmVDbGlja0hhbmRsZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4gKCkgPT4geyB0aGlzLnByb3BzLm9uTGluZUNsaWNrKGRhdGEpOyB9O1xuICAgIH0sXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJMaW5lQ29udGVudCh0aGlzLnByb3BzLmRhdGEpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7XG4gICAgbGluZU1peGluIGFzIG1peGluXG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW46IGxpbmVNaXhpblxufVxuIl19