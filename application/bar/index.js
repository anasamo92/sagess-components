'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builtInStore = require('sagess-core/application/built-in-store');

var _builtInStore2 = _interopRequireDefault(_builtInStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var barMixin = {
    /**
    * Get initial state
    * @return {object} Initial state
    */
    getInitialState: function getInitialState() {
        return this._getStateFromStore();
    },

    /**
    * Component will mount
    */
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use components from sagess-components/components/layout folder');
        _builtInStore2.default.addSummaryComponentChangeListener(this._handleComponentChange);
        _builtInStore2.default.addBarContentLeftComponentChangeListener(this._handleComponentChange);
        _builtInStore2.default.addBarContentRightComponentChangeListener(this._handleComponentChange);
    },

    /**
    * Component will unmount.
    */
    componentWillUnmount: function componentWillUnmount() {
        _builtInStore2.default.removeSummaryComponentChangeListener(this._handleComponentChange);
        _builtInStore2.default.removeBarContentLeftComponentChangeListener(this._handleComponentChange);
        _builtInStore2.default.removeBarContentRightComponentChangeListener(this._handleComponentChange);
    },

    /**
    * Get state from store
    * @return {object} state from store
    */
    _getStateFromStore: function _getStateFromStore() {
        return {
            summaryComponent: _builtInStore2.default.getSummaryComponent(),
            barContentLeftComponent: _builtInStore2.default.getBarContentLeftComponent(),
            barContentRightComponent: _builtInStore2.default.getBarContentRightComponent()
        };
    },

    /**
    * Component change handler.
    */
    _handleComponentChange: function _handleComponentChange() {
        this.setState(this._getStateFromStore());
    },

    /**
    * Render the component
    * @return {HTML} Rendered component
    */
    render: function render() {
        var _state = this.state,
            barContentLeftComponent = _state.barContentLeftComponent,
            barContentRightComponent = _state.barContentRightComponent,
            summaryComponent = _state.summaryComponent;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'bar' },
            _react2.default.createElement(
                'div',
                { 'data-focus': 'bar-content-left' },
                barContentLeftComponent && _react2.default.createElement(barContentLeftComponent.component, barContentLeftComponent.props)
            ),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'bar-content-right' },
                barContentRightComponent && _react2.default.createElement(barContentRightComponent.component, barContentRightComponent.props)
            ),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'bar-content-middle' },
                summaryComponent && _react2.default.createElement(summaryComponent.component, summaryComponent.props)
            )
        );
    }
};

var _builder = (0, _builder3.default)(barMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiYmFyTWl4aW4iLCJnZXRJbml0aWFsU3RhdGUiLCJfZ2V0U3RhdGVGcm9tU3RvcmUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsImFwcGxpY2F0aW9uU3RvcmUiLCJhZGRTdW1tYXJ5Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIiLCJfaGFuZGxlQ29tcG9uZW50Q2hhbmdlIiwiYWRkQmFyQ29udGVudExlZnRDb21wb25lbnRDaGFuZ2VMaXN0ZW5lciIsImFkZEJhckNvbnRlbnRSaWdodENvbXBvbmVudENoYW5nZUxpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVTdW1tYXJ5Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIiLCJyZW1vdmVCYXJDb250ZW50TGVmdENvbXBvbmVudENoYW5nZUxpc3RlbmVyIiwicmVtb3ZlQmFyQ29udGVudFJpZ2h0Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIiLCJzdW1tYXJ5Q29tcG9uZW50IiwiZ2V0U3VtbWFyeUNvbXBvbmVudCIsImJhckNvbnRlbnRMZWZ0Q29tcG9uZW50IiwiZ2V0QmFyQ29udGVudExlZnRDb21wb25lbnQiLCJiYXJDb250ZW50UmlnaHRDb21wb25lbnQiLCJnZXRCYXJDb250ZW50UmlnaHRDb21wb25lbnQiLCJzZXRTdGF0ZSIsInJlbmRlciIsInN0YXRlIiwicHJvcHMiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVztBQUNiOzs7O0FBSUFDLG1CQUxhLDZCQUtLO0FBQ2QsZUFBTyxLQUFLQyxrQkFBTCxFQUFQO0FBQ0gsS0FQWTs7QUFRYjs7O0FBR0FDLHNCQVhhLGdDQVdRO0FBQ2pCQyxnQkFBUUMsSUFBUixDQUFhLDZIQUFiO0FBQ0FDLCtCQUFpQkMsaUNBQWpCLENBQW1ELEtBQUtDLHNCQUF4RDtBQUNBRiwrQkFBaUJHLHdDQUFqQixDQUEwRCxLQUFLRCxzQkFBL0Q7QUFDQUYsK0JBQWlCSSx5Q0FBakIsQ0FBMkQsS0FBS0Ysc0JBQWhFO0FBQ0gsS0FoQlk7O0FBaUJiOzs7QUFHQUcsd0JBcEJhLGtDQW9CVTtBQUNuQkwsK0JBQWlCTSxvQ0FBakIsQ0FBc0QsS0FBS0osc0JBQTNEO0FBQ0FGLCtCQUFpQk8sMkNBQWpCLENBQTZELEtBQUtMLHNCQUFsRTtBQUNBRiwrQkFBaUJRLDRDQUFqQixDQUE4RCxLQUFLTixzQkFBbkU7QUFDSCxLQXhCWTs7QUF5QmI7Ozs7QUFJQU4sc0JBN0JhLGdDQTZCUTtBQUNqQixlQUFPO0FBQ0hhLDhCQUFrQlQsdUJBQWlCVSxtQkFBakIsRUFEZjtBQUVIQyxxQ0FBeUJYLHVCQUFpQlksMEJBQWpCLEVBRnRCO0FBR0hDLHNDQUEwQmIsdUJBQWlCYywyQkFBakI7QUFIdkIsU0FBUDtBQUtILEtBbkNZOztBQW9DYjs7O0FBR0FaLDBCQXZDYSxvQ0F1Q1k7QUFDckIsYUFBS2EsUUFBTCxDQUFjLEtBQUtuQixrQkFBTCxFQUFkO0FBQ0gsS0F6Q1k7O0FBMENiOzs7O0FBSUFvQixVQTlDYSxvQkE4Q0o7QUFBQSxxQkFDMkUsS0FBS0MsS0FEaEY7QUFBQSxZQUNHTix1QkFESCxVQUNHQSx1QkFESDtBQUFBLFlBQzRCRSx3QkFENUIsVUFDNEJBLHdCQUQ1QjtBQUFBLFlBQ3NESixnQkFEdEQsVUFDc0RBLGdCQUR0RDs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLGNBQVcsS0FBaEI7QUFDSTtBQUFBO0FBQUEsa0JBQUssY0FBVyxrQkFBaEI7QUFDS0UsMkNBQ0csOEJBQUMsdUJBQUQsQ0FBeUIsU0FBekIsRUFBdUNBLHdCQUF3Qk8sS0FBL0Q7QUFGUixhQURKO0FBTUk7QUFBQTtBQUFBLGtCQUFLLGNBQVcsbUJBQWhCO0FBQ0tMLDRDQUNHLDhCQUFDLHdCQUFELENBQTBCLFNBQTFCLEVBQXdDQSx5QkFBeUJLLEtBQWpFO0FBRlIsYUFOSjtBQVdJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLG9CQUFoQjtBQUNLVCxvQ0FDRyw4QkFBQyxnQkFBRCxDQUFrQixTQUFsQixFQUFnQ0EsaUJBQWlCUyxLQUFqRDtBQUZSO0FBWEosU0FESjtBQW1CSDtBQW5FWSxDQUFqQjs7ZUFzRTZCLHVCQUFReEIsUUFBUixDO0lBQXJCeUIsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXBwbGljYXRpb25TdG9yZSBmcm9tICdzYWdlc3MtY29yZS9hcHBsaWNhdGlvbi9idWlsdC1pbi1zdG9yZSc7XG5cbmNvbnN0IGJhck1peGluID0ge1xuICAgIC8qKlxuICAgICogR2V0IGluaXRpYWwgc3RhdGVcbiAgICAqIEByZXR1cm4ge29iamVjdH0gSW5pdGlhbCBzdGF0ZVxuICAgICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0U3RhdGVGcm9tU3RvcmUoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogQ29tcG9uZW50IHdpbGwgbW91bnRcbiAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIDIuMi4wOiB0aGlzIGNvbXBvbmVudCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGNvbXBvbmVudHMgZnJvbSBzYWdlc3MtY29tcG9uZW50cy9jb21wb25lbnRzL2xheW91dCBmb2xkZXInKTtcbiAgICAgICAgYXBwbGljYXRpb25TdG9yZS5hZGRTdW1tYXJ5Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIodGhpcy5faGFuZGxlQ29tcG9uZW50Q2hhbmdlKTtcbiAgICAgICAgYXBwbGljYXRpb25TdG9yZS5hZGRCYXJDb250ZW50TGVmdENvbXBvbmVudENoYW5nZUxpc3RlbmVyKHRoaXMuX2hhbmRsZUNvbXBvbmVudENoYW5nZSk7XG4gICAgICAgIGFwcGxpY2F0aW9uU3RvcmUuYWRkQmFyQ29udGVudFJpZ2h0Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIodGhpcy5faGFuZGxlQ29tcG9uZW50Q2hhbmdlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogQ29tcG9uZW50IHdpbGwgdW5tb3VudC5cbiAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBhcHBsaWNhdGlvblN0b3JlLnJlbW92ZVN1bW1hcnlDb21wb25lbnRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9oYW5kbGVDb21wb25lbnRDaGFuZ2UpO1xuICAgICAgICBhcHBsaWNhdGlvblN0b3JlLnJlbW92ZUJhckNvbnRlbnRMZWZ0Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIodGhpcy5faGFuZGxlQ29tcG9uZW50Q2hhbmdlKTtcbiAgICAgICAgYXBwbGljYXRpb25TdG9yZS5yZW1vdmVCYXJDb250ZW50UmlnaHRDb21wb25lbnRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9oYW5kbGVDb21wb25lbnRDaGFuZ2UpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgc3RhdGUgZnJvbSBzdG9yZVxuICAgICogQHJldHVybiB7b2JqZWN0fSBzdGF0ZSBmcm9tIHN0b3JlXG4gICAgKi9cbiAgICBfZ2V0U3RhdGVGcm9tU3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdW1tYXJ5Q29tcG9uZW50OiBhcHBsaWNhdGlvblN0b3JlLmdldFN1bW1hcnlDb21wb25lbnQoKSxcbiAgICAgICAgICAgIGJhckNvbnRlbnRMZWZ0Q29tcG9uZW50OiBhcHBsaWNhdGlvblN0b3JlLmdldEJhckNvbnRlbnRMZWZ0Q29tcG9uZW50KCksXG4gICAgICAgICAgICBiYXJDb250ZW50UmlnaHRDb21wb25lbnQ6IGFwcGxpY2F0aW9uU3RvcmUuZ2V0QmFyQ29udGVudFJpZ2h0Q29tcG9uZW50KClcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogQ29tcG9uZW50IGNoYW5nZSBoYW5kbGVyLlxuICAgICovXG4gICAgX2hhbmRsZUNvbXBvbmVudENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRTdGF0ZUZyb21TdG9yZSgpKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBjb21wb25lbnRcbiAgICAqIEByZXR1cm4ge0hUTUx9IFJlbmRlcmVkIGNvbXBvbmVudFxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGJhckNvbnRlbnRMZWZ0Q29tcG9uZW50LCBiYXJDb250ZW50UmlnaHRDb21wb25lbnQsIHN1bW1hcnlDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2Jhcic+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdiYXItY29udGVudC1sZWZ0Jz5cbiAgICAgICAgICAgICAgICAgICAge2JhckNvbnRlbnRMZWZ0Q29tcG9uZW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiYXJDb250ZW50TGVmdENvbXBvbmVudC5jb21wb25lbnQgey4uLmJhckNvbnRlbnRMZWZ0Q29tcG9uZW50LnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nYmFyLWNvbnRlbnQtcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICB7YmFyQ29udGVudFJpZ2h0Q29tcG9uZW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiYXJDb250ZW50UmlnaHRDb21wb25lbnQuY29tcG9uZW50IHsuLi5iYXJDb250ZW50UmlnaHRDb21wb25lbnQucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdiYXItY29udGVudC1taWRkbGUnPlxuICAgICAgICAgICAgICAgICAgICB7c3VtbWFyeUNvbXBvbmVudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeUNvbXBvbmVudC5jb21wb25lbnQgey4uLnN1bW1hcnlDb21wb25lbnQucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoYmFyTWl4aW4pO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=