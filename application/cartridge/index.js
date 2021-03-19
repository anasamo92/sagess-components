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

var cartridgeMixin = {
    /** @inheriteddoc */
    getInitialState: function getInitialState() {
        return this._getStateFromStore();
    },

    /** @inheriteddoc */
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use components from sagess-components/components/layout folder');
        _builtInStore2.default.addCartridgeComponentChangeListener(this._handleComponentChange);
    },

    /** @inheriteddoc */
    componentWillUnmount: function componentWillUnmount() {
        _builtInStore2.default.removeCartridgeComponentChangeListener(this._handleComponentChange);
    },

    /**
     * Read the component state from the connected stores.
     * @return {object} - The new state.
     */
    _getStateFromStore: function _getStateFromStore() {
        return { cartridgeComponent: _builtInStore2.default.getCartridgeComponent() || { component: 'div', props: {} } };
    },

    /**
     * Handle the component change cb.
     */
    _handleComponentChange: function _handleComponentChange() {
        this.setState(this._getStateFromStore());
    },

    /** @inheriteddoc */
    render: function render() {
        var cartridgeComponent = this.state.cartridgeComponent;
        var Component = cartridgeComponent.component,
            props = cartridgeComponent.props;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'cartridge' },
            _react2.default.createElement(Component, props)
        );
    }
};

var _builder = (0, _builder3.default)(cartridgeMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY2FydHJpZGdlTWl4aW4iLCJnZXRJbml0aWFsU3RhdGUiLCJfZ2V0U3RhdGVGcm9tU3RvcmUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsImFwcGxpY2F0aW9uU3RvcmUiLCJhZGRDYXJ0cmlkZ2VDb21wb25lbnRDaGFuZ2VMaXN0ZW5lciIsIl9oYW5kbGVDb21wb25lbnRDaGFuZ2UiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUNhcnRyaWRnZUNvbXBvbmVudENoYW5nZUxpc3RlbmVyIiwiY2FydHJpZGdlQ29tcG9uZW50IiwiZ2V0Q2FydHJpZGdlQ29tcG9uZW50IiwiY29tcG9uZW50IiwicHJvcHMiLCJzZXRTdGF0ZSIsInJlbmRlciIsInN0YXRlIiwiQ29tcG9uZW50IiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGlCQUFpQjtBQUNuQjtBQUNBQyxtQkFGbUIsNkJBRUQ7QUFDZCxlQUFPLEtBQUtDLGtCQUFMLEVBQVA7QUFDSCxLQUprQjs7QUFLbkI7QUFDQUMsc0JBTm1CLGdDQU1FO0FBQ2pCQyxnQkFBUUMsSUFBUixDQUFhLDZIQUFiO0FBQ0FDLCtCQUFpQkMsbUNBQWpCLENBQXFELEtBQUtDLHNCQUExRDtBQUNILEtBVGtCOztBQVVuQjtBQUNBQyx3QkFYbUIsa0NBV0k7QUFDbkJILCtCQUFpQkksc0NBQWpCLENBQXdELEtBQUtGLHNCQUE3RDtBQUNILEtBYmtCOztBQWNuQjs7OztBQUlBTixzQkFsQm1CLGdDQWtCRTtBQUNqQixlQUFPLEVBQUVTLG9CQUFvQkwsdUJBQWlCTSxxQkFBakIsTUFBNEMsRUFBRUMsV0FBVyxLQUFiLEVBQW9CQyxPQUFPLEVBQTNCLEVBQWxFLEVBQVA7QUFDSCxLQXBCa0I7O0FBcUJuQjs7O0FBR0FOLDBCQXhCbUIsb0NBd0JNO0FBQ3JCLGFBQUtPLFFBQUwsQ0FBYyxLQUFLYixrQkFBTCxFQUFkO0FBQ0gsS0ExQmtCOztBQTJCbkI7QUFDQWMsVUE1Qm1CLG9CQTRCVjtBQUFBLFlBQ0dMLGtCQURILEdBQzBCLEtBQUtNLEtBRC9CLENBQ0dOLGtCQURIO0FBQUEsWUFFY08sU0FGZCxHQUVtQ1Asa0JBRm5DLENBRUdFLFNBRkg7QUFBQSxZQUV5QkMsS0FGekIsR0FFbUNILGtCQUZuQyxDQUV5QkcsS0FGekI7O0FBR0wsZUFDSTtBQUFBO0FBQUEsY0FBSyxjQUFXLFdBQWhCO0FBQ0ksMENBQUMsU0FBRCxFQUFlQSxLQUFmO0FBREosU0FESjtBQUtIO0FBcENrQixDQUF2Qjs7ZUF1QzZCLHVCQUFRZCxjQUFSLEM7SUFBckJtQixLLFlBQUFBLEs7SUFBT04sUyxZQUFBQSxTOztRQUNOTSxLLEdBQUFBLEs7UUFBT04sUyxHQUFBQSxTO2tCQUNELEVBQUVNLFlBQUYsRUFBU04sb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcHBsaWNhdGlvblN0b3JlIGZyb20gJ3NhZ2Vzcy1jb3JlL2FwcGxpY2F0aW9uL2J1aWx0LWluLXN0b3JlJztcblxuY29uc3QgY2FydHJpZGdlTWl4aW4gPSB7XG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRTdGF0ZUZyb21TdG9yZSgpO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAyLjIuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBjb21wb25lbnRzIGZyb20gc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9sYXlvdXQgZm9sZGVyJyk7XG4gICAgICAgIGFwcGxpY2F0aW9uU3RvcmUuYWRkQ2FydHJpZGdlQ29tcG9uZW50Q2hhbmdlTGlzdGVuZXIodGhpcy5faGFuZGxlQ29tcG9uZW50Q2hhbmdlKTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGVkZG9jICovXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGFwcGxpY2F0aW9uU3RvcmUucmVtb3ZlQ2FydHJpZGdlQ29tcG9uZW50Q2hhbmdlTGlzdGVuZXIodGhpcy5faGFuZGxlQ29tcG9uZW50Q2hhbmdlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlYWQgdGhlIGNvbXBvbmVudCBzdGF0ZSBmcm9tIHRoZSBjb25uZWN0ZWQgc3RvcmVzLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gLSBUaGUgbmV3IHN0YXRlLlxuICAgICAqL1xuICAgIF9nZXRTdGF0ZUZyb21TdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHsgY2FydHJpZGdlQ29tcG9uZW50OiBhcHBsaWNhdGlvblN0b3JlLmdldENhcnRyaWRnZUNvbXBvbmVudCgpIHx8IHsgY29tcG9uZW50OiAnZGl2JywgcHJvcHM6IHt9IH0gfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgY29tcG9uZW50IGNoYW5nZSBjYi5cbiAgICAgKi9cbiAgICBfaGFuZGxlQ29tcG9uZW50Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldFN0YXRlRnJvbVN0b3JlKCkpO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2FydHJpZGdlQ29tcG9uZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IGNvbXBvbmVudDogQ29tcG9uZW50LCBwcm9wcyB9ID0gY2FydHJpZGdlQ29tcG9uZW50O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdjYXJ0cmlkZ2UnPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKGNhcnRyaWRnZU1peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19