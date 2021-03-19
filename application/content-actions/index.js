'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _isObject = require('lodash/lang/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _builtInStore = require('sagess-core/application/built-in-store');

var _builtInStore2 = _interopRequireDefault(_builtInStore);

var _stylable = require('../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _selectAction = require('../../common/select-action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // Libs

// Dependencies

// Stores

// Mixins

// Components


var ContentActions = {

    mixins: [_stylable2.default],

    /** @inheritdoc */
    getInitialState: function getInitialState() {
        return this._getStateFromStore();
    },


    /** @inheritdoc */
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use components from sagess-components/components/layout folder');
        _builtInStore2.default.addActionsChangeListener(this._handleComponentChange);
    },


    /** @inheritdoc */
    componentWillUnmount: function componentWillUnmount() {
        _builtInStore2.default.removeActionsChangeListener(this._handleComponentChange);
    },


    /**
     * Get state from store
     * @return {Object} actions extracted from the store
     */
    _getStateFromStore: function _getStateFromStore() {
        return {
            actions: _builtInStore2.default.getActions() || { primary: [], secondary: [] }
        };
    },


    /**
     * Component change handler
     */
    _handleComponentChange: function _handleComponentChange() {
        this.setState(this._getStateFromStore());
    },


    /**
     * Render a list fab component.
     * @param {object} fab Fab.
     * @returns {JSXElement} Component.
     */
    renderFabListAction: function renderFabListAction(fab) {
        if (Array.isArray(fab.action) && fab.action.length > 0) {
            var icon = fab.icon,
                iconLibrary = fab.iconLibrary,
                action = fab.action,
                otherProps = _objectWithoutProperties(fab, ['icon', 'iconLibrary', 'action']);

            return React.createElement(_selectAction.component, Object.assign({
                iconProps: { name: icon, iconLibrary: iconLibrary },
                operationList: action,
                shape: 'fab'
            }, otherProps));
        }
    },


    /**
     * Render a fab component.
     * @param {object} fab Fab.
     * @returns {JSXElement} Component.
     */
    renderFabAction: function renderFabAction(fab) {
        var action = fab.action,
            className = fab.className,
            icon = fab.icon,
            iconLibrary = fab.iconLibrary,
            label = fab.label,
            otherProps = _objectWithoutProperties(fab, ['action', 'className', 'icon', 'iconLibrary', 'label']);

        return React.createElement(_button2.default, Object.assign({
            key: 'header-action-' + label,
            className: className,
            handleOnClick: action,
            icon: icon,
            iconLibrary: iconLibrary,
            label: label,
            shape: 'fab',
            type: 'button'
        }, otherProps));
    },


    /** @inheritdoc */
    render: function render() {
        var _this = this;

        var _state$actions = this.state.actions,
            primary = _state$actions.primary,
            secondary = _state$actions.secondary;


        return React.createElement(
            'div',
            { className: this._getStyleClassName(), 'data-focus': 'content-actions' },
            primary.map(function (action) {
                return action && Array.isArray(action.action) ? _this.renderFabListAction(action) : _this.renderFabAction(action);
            }),
            Array.isArray(secondary) && this.renderFabListAction({ action: secondary }),
            (0, _isObject2.default)(secondary) && this.renderFabListAction(secondary)
        );
    }
};

var _builder = (0, _builder3.default)(ContentActions),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQ29udGVudEFjdGlvbnMiLCJtaXhpbnMiLCJzdHlsYWJsZUJlaGF2aW91ciIsImdldEluaXRpYWxTdGF0ZSIsIl9nZXRTdGF0ZUZyb21TdG9yZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwiYXBwbGljYXRpb25TdG9yZSIsImFkZEFjdGlvbnNDaGFuZ2VMaXN0ZW5lciIsIl9oYW5kbGVDb21wb25lbnRDaGFuZ2UiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUFjdGlvbnNDaGFuZ2VMaXN0ZW5lciIsImFjdGlvbnMiLCJnZXRBY3Rpb25zIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInNldFN0YXRlIiwicmVuZGVyRmFiTGlzdEFjdGlvbiIsImZhYiIsIkFycmF5IiwiaXNBcnJheSIsImFjdGlvbiIsImxlbmd0aCIsImljb24iLCJpY29uTGlicmFyeSIsIm90aGVyUHJvcHMiLCJuYW1lIiwicmVuZGVyRmFiQWN0aW9uIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJyZW5kZXIiLCJzdGF0ZSIsIl9nZXRTdHlsZUNsYXNzTmFtZSIsIm1hcCIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7OzZOQVZBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFJQSxJQUFNQSxpQkFBaUI7O0FBRW5CQyxZQUFRLENBQUNDLGtCQUFELENBRlc7O0FBSW5CO0FBQ0FDLG1CQUxtQiw2QkFLRDtBQUNkLGVBQU8sS0FBS0Msa0JBQUwsRUFBUDtBQUNILEtBUGtCOzs7QUFTbkI7QUFDQUMsc0JBVm1CLGdDQVVFO0FBQ2pCQyxnQkFBUUMsSUFBUixDQUFhLDZIQUFiO0FBQ0FDLCtCQUFpQkMsd0JBQWpCLENBQTBDLEtBQUtDLHNCQUEvQztBQUNILEtBYmtCOzs7QUFlbkI7QUFDQUMs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UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJ2xvZGFzaC9sYW5nL2lzT2JqZWN0Jztcbi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuLy8gU3RvcmVzXG5pbXBvcnQgYXBwbGljYXRpb25TdG9yZSBmcm9tICdzYWdlc3MtY29yZS9hcHBsaWNhdGlvbi9idWlsdC1pbi1zdG9yZSc7XG4vLyBNaXhpbnNcbmltcG9ydCBzdHlsYWJsZUJlaGF2aW91ciBmcm9tICcuLi8uLi9taXhpbi9zdHlsYWJsZSc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IGNvbXBvbmVudCBhcyBEcm9wZG93biB9IGZyb20gJy4uLy4uL2NvbW1vbi9zZWxlY3QtYWN0aW9uJztcblxuY29uc3QgQ29udGVudEFjdGlvbnMgPSB7XG5cbiAgICBtaXhpbnM6IFtzdHlsYWJsZUJlaGF2aW91cl0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRTdGF0ZUZyb21TdG9yZSgpO1xuICAgIH0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAyLjIuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBjb21wb25lbnRzIGZyb20gc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9sYXlvdXQgZm9sZGVyJyk7XG4gICAgICAgIGFwcGxpY2F0aW9uU3RvcmUuYWRkQWN0aW9uc0NoYW5nZUxpc3RlbmVyKHRoaXMuX2hhbmRsZUNvbXBvbmVudENoYW5nZSk7XG4gICAgfSxcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBhcHBsaWNhdGlvblN0b3JlLnJlbW92ZUFjdGlvbnNDaGFuZ2VMaXN0ZW5lcih0aGlzLl9oYW5kbGVDb21wb25lbnRDaGFuZ2UpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc3RhdGUgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm4ge09iamVjdH0gYWN0aW9ucyBleHRyYWN0ZWQgZnJvbSB0aGUgc3RvcmVcbiAgICAgKi9cbiAgICBfZ2V0U3RhdGVGcm9tU3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3Rpb25zOiBhcHBsaWNhdGlvblN0b3JlLmdldEFjdGlvbnMoKSB8fCB7IHByaW1hcnk6IFtdLCBzZWNvbmRhcnk6IFtdIH1cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50IGNoYW5nZSBoYW5kbGVyXG4gICAgICovXG4gICAgX2hhbmRsZUNvbXBvbmVudENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRTdGF0ZUZyb21TdG9yZSgpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGEgbGlzdCBmYWIgY29tcG9uZW50LlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmYWIgRmFiLlxuICAgICAqIEByZXR1cm5zIHtKU1hFbGVtZW50fSBDb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyRmFiTGlzdEFjdGlvbihmYWIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmFiLmFjdGlvbikgJiYgZmFiLmFjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IGljb24sIGljb25MaWJyYXJ5LCBhY3Rpb24sIC4uLm90aGVyUHJvcHMgfSA9IGZhYjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIGljb25Qcm9wcz17eyBuYW1lOiBpY29uLCBpY29uTGlicmFyeSB9fVxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25MaXN0PXthY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlPSdmYWInXG4gICAgICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhIGZhYiBjb21wb25lbnQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZhYiBGYWIuXG4gICAgICogQHJldHVybnMge0pTWEVsZW1lbnR9IENvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXJGYWJBY3Rpb24oZmFiKSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aW9uLCBjbGFzc05hbWUsIGljb24sIGljb25MaWJyYXJ5LCBsYWJlbCwgLi4ub3RoZXJQcm9wcyB9ID0gZmFiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17YGhlYWRlci1hY3Rpb24tJHtsYWJlbH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2xpY2s9e2FjdGlvbn1cbiAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgIGljb25MaWJyYXJ5PXtpY29uTGlicmFyeX1cbiAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgc2hhcGU9J2ZhYidcbiAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aW9uczogeyBwcmltYXJ5LCBzZWNvbmRhcnkgfSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuX2dldFN0eWxlQ2xhc3NOYW1lKCl9IGRhdGEtZm9jdXM9J2NvbnRlbnQtYWN0aW9ucyc+XG4gICAgICAgICAgICAgICAge3ByaW1hcnkubWFwKChhY3Rpb24pID0+IGFjdGlvbiAmJiBBcnJheS5pc0FycmF5KGFjdGlvbi5hY3Rpb24pID8gdGhpcy5yZW5kZXJGYWJMaXN0QWN0aW9uKGFjdGlvbikgOiB0aGlzLnJlbmRlckZhYkFjdGlvbihhY3Rpb24pKX1cbiAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShzZWNvbmRhcnkpICYmIHRoaXMucmVuZGVyRmFiTGlzdEFjdGlvbih7IGFjdGlvbjogc2Vjb25kYXJ5IH0pfVxuICAgICAgICAgICAgICAgIHtpc09iamVjdChzZWNvbmRhcnkpICYmIHRoaXMucmVuZGVyRmFiTGlzdEFjdGlvbihzZWNvbmRhcnkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKENvbnRlbnRBY3Rpb25zKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19