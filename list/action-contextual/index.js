'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = exports.component = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _dropdown = require('../../components/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
// Dependencies
var actionContextualMixin = {

    /**
    * Display name.
    */
    displayName: 'ActionContextual',

    /**
    * Init default props.
    * @returns {object} Default props.
    */
    getDefaultProps: function getDefaultProps() {
        return {
            buttonComponent: _button2.default,
            operationList: [],
            operationParam: undefined
        };
    },


    /**
    * Init default state.
    * @returns {oject} Initial state.
    */
    getInitialState: function getInitialState() {
        return {
            isSecondaryActionListExpanded: false // true if secondary actionList is expanded.
        };
    },


    /**
    * Handle contextual action on click.
    * @param {string} key Action key.
    * @return {function} action handler.
    */
    _handleAction: function _handleAction(key) {
        var _props = this.props,
            operationList = _props.operationList,
            operationParam = _props.operationParam;

        return function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (operationParam) {
                operationList[key].action(operationParam);
            } else {
                operationList[key].action();
            }
        };
    },


    /**
    * render the component.
    * @returns {JSX} Html code.
    */
    render: function render() {
        var _this = this;

        var _props2 = this.props,
            operationList = _props2.operationList,
            operationParam = _props2.operationParam,
            buttonComponent = _props2.buttonComponent;
        var isSecondaryActionListExpanded = this.state.isSecondaryActionListExpanded;

        var _operationList$reduce = operationList.reduce(function (actionLists, operation, key) {
            var primaryActions = actionLists.primaryActionList,
                secondaryActions = actionLists.secondaryActionList;

            if (1 === operation.priority) {
                primaryActions.push(_react2.default.createElement(_this.props.buttonComponent, Object.assign({
                    handleOnClick: _this._handleAction(key),
                    icon: operation.icon,
                    iconLibrary: operation.iconLibrary,
                    key: key,
                    label: operation.label,
                    shape: operation.style && operation.style.shape || 'icon',
                    style: operation.style || {},
                    type: 'button'
                }, _this.props, operation)));
            } else {
                secondaryActions.push(operation);
            }
            return actionLists;
        }, { primaryActionList: [], secondaryActionList: [] }),
            primaryActionList = _operationList$reduce.primaryActionList,
            secondaryActionList = _operationList$reduce.secondaryActionList;

        return _react2.default.createElement(
            'div',
            { className: 'list-action-contextual' },
            _react2.default.createElement(
                'span',
                null,
                primaryActionList
            ),
            _react2.default.createElement(_dropdown2.default, {
                isExpanded: isSecondaryActionListExpanded,
                operationList: secondaryActionList,
                operationParam: operationParam
            })
        );
    }
};

var _builder = (0, _builder3.default)(actionContextualMixin),
    component = _builder.component,
    mixin = _builder.mixin;

exports.component = component;
exports.mixin = mixin;
exports.default = { component: component, mixin: mixin };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiYWN0aW9uQ29udGV4dHVhbE1peGluIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJidXR0b25Db21wb25lbnQiLCJCdXR0b24iLCJvcGVyYXRpb25MaXN0Iiwib3BlcmF0aW9uUGFyYW0iLCJ1bmRlZmluZWQiLCJnZXRJbml0aWFsU3RhdGUiLCJpc1NlY29uZGFyeUFjdGlvbkxpc3RFeHBhbmRlZCIsIl9oYW5kbGVBY3Rpb24iLCJrZXkiLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJhY3Rpb24iLCJyZW5kZXIiLCJzdGF0ZSIsInJlZHVjZSIsImFjdGlvbkxpc3RzIiwib3BlcmF0aW9uIiwicHJpbWFyeUFjdGlvbnMiLCJwcmltYXJ5QWN0aW9uTGlzdCIsInNlY29uZGFyeUFjdGlvbnMiLCJzZWNvbmRhcnlBY3Rpb25MaXN0IiwicHJpb3JpdHkiLCJwdXNoIiwiaWNvbiIsImljb25MaWJyYXJ5IiwibGFiZWwiLCJzdHlsZSIsInNoYXBlIiwiY29tcG9uZW50IiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRkE7QUFIQTtBQU9BLElBQU1BLHdCQUF3Qjs7QUFFMUI7OztBQUdBQyxpQkFBYSxrQkFMYTs7QUFPMUI7Ozs7QUFJQUMsbUJBWDBCLDZCQVdSO0FBQ2QsZUFBTztBQUNIQyw2QkFBaUJDLGdCQURkO0FBRUhDLDJCQUFlLEVBRlo7QUFHSEMsNEJBQWdCQztBQUhiLFNBQVA7QUFLSCxLQWpCeUI7OztBQW1CMUI7Ozs7QUFJQUMsbUJBdkIwQiw2QkF1QlI7QUFDZCxlQUFPO0FBQ0hDLDJDQUErQixLQUQ1QixDQUNrQztBQURsQyxTQUFQO0FBR0gsS0EzQnlCOzs7QUE2QjFCOzs7OztBQUtBQyxpQkFsQzBCLHlCQWtDWkMsR0FsQ1ksRUFrQ1A7QUFBQSxxQkFDMkIsS0FBS0MsS0FEaEM7QUFBQSxZQUNQUCxhQURPLFVBQ1BBLGFBRE87QUFBQSxZQUNRQyxjQURSLFVBQ1FBLGNBRFI7O0FBRWYsZUFBTyxpQkFBUztBQUNaTyxrQkFBTUMsY0FBTjtBQUNBRCxrQkFBTUUsZUFBTjtBQUNBLGdCQUFJVCxjQUFKLEVBQW9CO0FBQ2hCRCw4QkFBY00sR0FBZCxFQUFtQkssTUFBbkIsQ0FBMEJWLGNBQTFCO0FBQ0gsYUFGRCxNQUVPO0FBQ0hELDhCQUFjTSxHQUFkLEVBQW1CSyxNQUFuQjtBQUNIO0FBQ0osU0FSRDtBQVNILEtBN0N5Qjs7O0FBK0MxQjs7OztBQUlBQyxVQW5EMEIsb0JBbURqQjtBQUFBOztBQUFBLHNCQUNzRCxLQUFLTCxLQUQzRDtBQUFBLFlBQ0dQLGFBREgsV0FDR0EsYUFESDtBQUFBLFlBQ2tCQyxjQURsQixXQUNrQkEsY0FEbEI7QUFBQSxZQUNrQ0gsZUFEbEMsV0FDa0NBLGVBRGxDO0FBQUEsWUFFR00sNkJBRkgsR0FFcUMsS0FBS1MsS0FGMUMsQ0FFR1QsNkJBRkg7O0FBQUEsb0NBRzhDSixjQUFjYyxNQUFkLENBQXFCLFVBQUNDLFdBQUQsRUFBY0MsU0FBZCxFQUF5QlYsR0FBekIsRUFBaUM7QUFBQSxnQkFDNUVXLGNBRDRFLEdBQ2xCRixXQURrQixDQUMvRkcsaUJBRCtGO0FBQUEsZ0JBQ3ZDQyxnQkFEdUMsR0FDbEJKLFdBRGtCLENBQzVESyxtQkFENEQ7O0FBRXJHLGdCQUFJLE1BQU1KLFVBQVVLLFFBQXBCLEVBQThCO0FBQzFCSiwrQkFBZUssSUFBZixDQUNJLG9DQUFNLEtBQU4sQ0FBWSxlQUFaO0FBQ0ksbUNBQWUsTUFBS2pCLGFBQUwsQ0FBbUJDLEdBQW5CLENBRG5CO0FBRUksMEJBQU1VLFVBQVVPLElBRnBCO0FBR0ksaUNBQWFQLFVBQVVRLFdBSDNCO0FBSUkseUJBQUtsQixHQUpUO0FBS0ksMkJBQU9VLFVBQVVTLEtBTHJCO0FBTUksMkJBQU9ULFVBQVVVLEtBQVYsSUFBbUJWLFVBQVVVLEtBQVYsQ0FBZ0JDLEtBQW5DLElBQTRDLE1BTnZEO0FBT0ksMkJBQU9YLFVBQVVVLEtBQVYsSUFBbUIsRUFQOUI7QUFRSSwwQkFBSztBQVJULG1CQVNRLE1BQUtuQixLQVRiLEVBVVFTLFNBVlIsRUFESjtBQWNILGFBZkQsTUFlTztBQUNIRyxpQ0FBaUJHLElBQWpCLENBQXNCTixTQUF0QjtBQUNIO0FBQ0QsbUJBQU9ELFdBQVA7QUFDSCxTQXJCa0QsRUFxQmhELEVBQUVHLG1CQUFtQixFQUFyQixFQUF5QkUscUJBQXFCLEVBQTlDLEVBckJnRCxDQUg5QztBQUFBLFlBR0dGLGlCQUhILHlCQUdHQSxpQkFISDtBQUFBLFlBR3NCRSxtQkFIdEIseUJBR3NCQSxtQkFIdEI7O0FBeUJMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSx3QkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFPRjtBQUFQLGFBREo7QUFFSSwwQ0FBQyxrQkFBRDtBQUNJLDRCQUFZZCw2QkFEaEI7QUFFSSwrQkFBZWdCLG1CQUZuQjtBQUdJLGdDQUFnQm5CO0FBSHBCO0FBRkosU0FESjtBQVVIO0FBdEZ5QixDQUE5Qjs7ZUF5RjZCLHVCQUFRTixxQkFBUixDO0lBQXJCaUMsUyxZQUFBQSxTO0lBQVdDLEssWUFBQUEsSzs7UUFDVkQsUyxHQUFBQSxTO1FBQVdDLEssR0FBQUEsSztrQkFDTCxFQUFFRCxvQkFBRixFQUFhQyxZQUFiLEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbi8vIENvbXBvbmVudHNcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IFNlbGVjdEFjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Ryb3Bkb3duJztcblxuY29uc3QgYWN0aW9uQ29udGV4dHVhbE1peGluID0ge1xuXG4gICAgLyoqXG4gICAgKiBEaXNwbGF5IG5hbWUuXG4gICAgKi9cbiAgICBkaXNwbGF5TmFtZTogJ0FjdGlvbkNvbnRleHR1YWwnLFxuXG4gICAgLyoqXG4gICAgKiBJbml0IGRlZmF1bHQgcHJvcHMuXG4gICAgKiBAcmV0dXJucyB7b2JqZWN0fSBEZWZhdWx0IHByb3BzLlxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnV0dG9uQ29tcG9uZW50OiBCdXR0b24sXG4gICAgICAgICAgICBvcGVyYXRpb25MaXN0OiBbXSxcbiAgICAgICAgICAgIG9wZXJhdGlvblBhcmFtOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBJbml0IGRlZmF1bHQgc3RhdGUuXG4gICAgKiBAcmV0dXJucyB7b2plY3R9IEluaXRpYWwgc3RhdGUuXG4gICAgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1NlY29uZGFyeUFjdGlvbkxpc3RFeHBhbmRlZDogZmFsc2UgLy8gdHJ1ZSBpZiBzZWNvbmRhcnkgYWN0aW9uTGlzdCBpcyBleHBhbmRlZC5cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBIYW5kbGUgY29udGV4dHVhbCBhY3Rpb24gb24gY2xpY2suXG4gICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEFjdGlvbiBrZXkuXG4gICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gYWN0aW9uIGhhbmRsZXIuXG4gICAgKi9cbiAgICBfaGFuZGxlQWN0aW9uKGtleSkge1xuICAgICAgICBjb25zdCB7IG9wZXJhdGlvbkxpc3QsIG9wZXJhdGlvblBhcmFtIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKG9wZXJhdGlvblBhcmFtKSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uTGlzdFtrZXldLmFjdGlvbihvcGVyYXRpb25QYXJhbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbkxpc3Rba2V5XS5hY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiByZW5kZXIgdGhlIGNvbXBvbmVudC5cbiAgICAqIEByZXR1cm5zIHtKU1h9IEh0bWwgY29kZS5cbiAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBvcGVyYXRpb25MaXN0LCBvcGVyYXRpb25QYXJhbSwgYnV0dG9uQ29tcG9uZW50IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGlzU2Vjb25kYXJ5QWN0aW9uTGlzdEV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IHByaW1hcnlBY3Rpb25MaXN0LCBzZWNvbmRhcnlBY3Rpb25MaXN0IH0gPSBvcGVyYXRpb25MaXN0LnJlZHVjZSgoYWN0aW9uTGlzdHMsIG9wZXJhdGlvbiwga2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwcmltYXJ5QWN0aW9uTGlzdDogcHJpbWFyeUFjdGlvbnMsIHNlY29uZGFyeUFjdGlvbkxpc3Q6IHNlY29uZGFyeUFjdGlvbnMgfSA9IGFjdGlvbkxpc3RzO1xuICAgICAgICAgICAgaWYgKDEgPT09IG9wZXJhdGlvbi5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDx0aGlzLnByb3BzLmJ1dHRvbkNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DbGljaz17dGhpcy5faGFuZGxlQWN0aW9uKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtvcGVyYXRpb24uaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25MaWJyYXJ5PXtvcGVyYXRpb24uaWNvbkxpYnJhcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtvcGVyYXRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZT17b3BlcmF0aW9uLnN0eWxlICYmIG9wZXJhdGlvbi5zdHlsZS5zaGFwZSB8fCAnaWNvbid9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17b3BlcmF0aW9uLnN0eWxlIHx8IHt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ub3BlcmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbnMucHVzaChvcGVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkxpc3RzO1xuICAgICAgICB9LCB7IHByaW1hcnlBY3Rpb25MaXN0OiBbXSwgc2Vjb25kYXJ5QWN0aW9uTGlzdDogW10gfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1hY3Rpb24tY29udGV4dHVhbCc+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3ByaW1hcnlBY3Rpb25MaXN0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0QWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlzRXhwYW5kZWQ9e2lzU2Vjb25kYXJ5QWN0aW9uTGlzdEV4cGFuZGVkfVxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25MaXN0PXtzZWNvbmRhcnlBY3Rpb25MaXN0fVxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25QYXJhbT17b3BlcmF0aW9uUGFyYW19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgY29tcG9uZW50LCBtaXhpbiB9ID0gYnVpbGRlcihhY3Rpb25Db250ZXh0dWFsTWl4aW4pO1xuZXhwb3J0IHsgY29tcG9uZW50LCBtaXhpbiB9O1xuZXhwb3J0IGRlZmF1bHQgeyBjb21wb25lbnQsIG1peGluIH07XG4iXX0=