'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builtInStore = require('sagess-core/application/built-in-store');

var _builtInStore2 = _interopRequireDefault(_builtInStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* HeaderContent component.
*/
var HeaderContent = (_temp = _class = function (_Component) {
    _inherits(HeaderContent, _Component);

    /**
     * Constructor.
     * @param {object} props Props.
     */
    function HeaderContent(props) {
        _classCallCheck(this, HeaderContent);

        var _this = _possibleConstructorReturn(this, (HeaderContent.__proto__ || Object.getPrototypeOf(HeaderContent)).call(this, props));

        _this.state = _this._getStateFromStore();

        _this._handleComponentChange = _this._handleComponentChange.bind(_this);
        return _this;
    }

    /** @inheriteddoc */


    /** Display name. */


    _createClass(HeaderContent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _builtInStore2.default.addCartridgeComponentChangeListener(this._handleComponentChange);
        }

        /** @inheriteddoc */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _builtInStore2.default.removeCartridgeComponentChangeListener(this._handleComponentChange);
        }

        /**
        * Read the component state from the connected stores.
        * @return {object} - The new state.
        */

    }, {
        key: '_getStateFromStore',
        value: function _getStateFromStore() {
            return {
                cartridgeComponent: _builtInStore2.default.getCartridgeComponent() || { component: 'div', props: {} }
            };
        }

        /**
        * Handle the component change cb.
        */

    }, {
        key: '_handleComponentChange',
        value: function _handleComponentChange() {
            this.setState(this._getStateFromStore());
        }

        /** @inheritdoc */

    }, {
        key: 'render',
        value: function render() {
            var _state$cartridgeCompo = this.state.cartridgeComponent,
                Component = _state$cartridgeCompo.component,
                props = _state$cartridgeCompo.props;


            return _react2.default.createElement(
                'div',
                { 'data-focus': 'header-content' },
                _react2.default.createElement(Component, props)
            );
        }
    }]);

    return HeaderContent;
}(_react.Component), _class.displayName = 'HeaderContent', _temp);
exports.default = HeaderContent;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiSGVhZGVyQ29udGVudCIsInByb3BzIiwic3RhdGUiLCJfZ2V0U3RhdGVGcm9tU3RvcmUiLCJfaGFuZGxlQ29tcG9uZW50Q2hhbmdlIiwiYmluZCIsImFwcGxpY2F0aW9uU3RvcmUiLCJhZGRDYXJ0cmlkZ2VDb21wb25lbnRDaGFuZ2VMaXN0ZW5lciIsInJlbW92ZUNhcnRyaWRnZUNvbXBvbmVudENoYW5nZUxpc3RlbmVyIiwiY2FydHJpZGdlQ29tcG9uZW50IiwiZ2V0Q2FydHJpZGdlQ29tcG9uZW50IiwiY29tcG9uZW50Iiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYTs7O0FBS0Y7Ozs7QUFJQSwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNUQSxLQURTOztBQUdmLGNBQUtDLEtBQUwsR0FBYSxNQUFLQyxrQkFBTCxFQUFiOztBQUVBLGNBQUtDLHNCQUFMLEdBQThCLE1BQUtBLHNCQUFMLENBQTRCQyxJQUE1QixPQUE5QjtBQUxlO0FBTWxCOztBQUVEOzs7QUFmQTs7Ozs7NkNBZ0JxQjtBQUNqQkMsbUNBQWlCQyxtQ0FBakIsQ0FBcUQsS0FBS0gsc0JBQTFEO0FBQ0g7O0FBRUQ7Ozs7K0NBQ3VCO0FBQ25CRSxtQ0FBaUJFLHNDQUFqQixDQUF3RCxLQUFLSixzQkFBN0Q7QUFDSDs7QUFFRDs7Ozs7Ozs2Q0FJcUI7QUFDakIsbUJBQU87QUFDSEssb0NBQW9CSCx1QkFBaUJJLHFCQUFqQixNQUE0QyxFQUFFQyxXQUFXLEtBQWIsRUFBb0JWLE9BQU8sRUFBM0I7QUFEN0QsYUFBUDtBQUdIOztBQUVEOzs7Ozs7aURBR3lCO0FBQ3JCLGlCQUFLVyxRQUFMLENBQWMsS0FBS1Qsa0JBQUwsRUFBZDtBQUNIOztBQUVEOzs7O2lDQUNTO0FBQUEsd0NBQzJELEtBQUtELEtBRGhFLENBQ0dPLGtCQURIO0FBQUEsZ0JBQ29DSSxTQURwQyx5QkFDeUJGLFNBRHpCO0FBQUEsZ0JBQytDVixLQUQvQyx5QkFDK0NBLEtBRC9DOzs7QUFHTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssY0FBVyxnQkFBaEI7QUFDSSw4Q0FBQyxTQUFELEVBQWVBLEtBQWY7QUFESixhQURKO0FBS0g7Ozs7RUFyRHVCWSxnQixVQUdqQkMsVyxHQUFjLGU7a0JBcURWZCxhIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcGxpY2F0aW9uU3RvcmUgZnJvbSAnc2FnZXNzLWNvcmUvYXBwbGljYXRpb24vYnVpbHQtaW4tc3RvcmUnO1xuXG4vKipcbiogSGVhZGVyQ29udGVudCBjb21wb25lbnQuXG4qL1xuY2xhc3MgSGVhZGVyQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAvKiogRGlzcGxheSBuYW1lLiAqL1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdIZWFkZXJDb250ZW50JztcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldFN0YXRlRnJvbVN0b3JlKCk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlQ29tcG9uZW50Q2hhbmdlID0gdGhpcy5faGFuZGxlQ29tcG9uZW50Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGFwcGxpY2F0aW9uU3RvcmUuYWRkQ2FydHJpZGdlQ29tcG9uZW50Q2hhbmdlTGlzdGVuZXIodGhpcy5faGFuZGxlQ29tcG9uZW50Q2hhbmdlKTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRlZGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBhcHBsaWNhdGlvblN0b3JlLnJlbW92ZUNhcnRyaWRnZUNvbXBvbmVudENoYW5nZUxpc3RlbmVyKHRoaXMuX2hhbmRsZUNvbXBvbmVudENoYW5nZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZWFkIHRoZSBjb21wb25lbnQgc3RhdGUgZnJvbSB0aGUgY29ubmVjdGVkIHN0b3Jlcy5cbiAgICAqIEByZXR1cm4ge29iamVjdH0gLSBUaGUgbmV3IHN0YXRlLlxuICAgICovXG4gICAgX2dldFN0YXRlRnJvbVN0b3JlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FydHJpZGdlQ29tcG9uZW50OiBhcHBsaWNhdGlvblN0b3JlLmdldENhcnRyaWRnZUNvbXBvbmVudCgpIHx8IHsgY29tcG9uZW50OiAnZGl2JywgcHJvcHM6IHt9IH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEhhbmRsZSB0aGUgY29tcG9uZW50IGNoYW5nZSBjYi5cbiAgICAqL1xuICAgIF9oYW5kbGVDb21wb25lbnRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3RhdGVGcm9tU3RvcmUoKSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNhcnRyaWRnZUNvbXBvbmVudDogeyBjb21wb25lbnQ6IENvbXBvbmVudCwgcHJvcHMgfSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdoZWFkZXItY29udGVudCc+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbnRlbnQ7XG4iXX0=