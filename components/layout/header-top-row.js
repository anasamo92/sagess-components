'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builtInStore = require('sagess-core/application/built-in-store');

var _builtInStore2 = _interopRequireDefault(_builtInStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* HeaderTopRow component.
*/
var HeaderTopRow = function (_Component) {
    _inherits(HeaderTopRow, _Component);

    function HeaderTopRow(props) {
        _classCallCheck(this, HeaderTopRow);

        var _this = _possibleConstructorReturn(this, (HeaderTopRow.__proto__ || Object.getPrototypeOf(HeaderTopRow)).call(this, props));

        _this._handleComponentChange = function () {
            _this.setState(_this._getStateFromStore());
        };

        _this.state = _this._getStateFromStore();
        return _this;
    }

    /** @inheriteddoc */


    _createClass(HeaderTopRow, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _builtInStore2.default.addSummaryComponentChangeListener(this._handleComponentChange);
            _builtInStore2.default.addBarContentLeftComponentChangeListener(this._handleComponentChange);
            _builtInStore2.default.addBarContentRightComponentChangeListener(this._handleComponentChange);
        }

        /** @inheriteddoc */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _builtInStore2.default.removeSummaryComponentChangeListener(this._handleComponentChange);
            _builtInStore2.default.removeBarContentLeftComponentChangeListener(this._handleComponentChange);
            _builtInStore2.default.removeBarContentRightComponentChangeListener(this._handleComponentChange);
        }
    }, {
        key: '_getStateFromStore',
        value: function _getStateFromStore() {
            return {
                summaryComponent: _builtInStore2.default.getSummaryComponent(),
                barContentLeftComponent: _builtInStore2.default.getBarContentLeftComponent(),
                barContentRightComponent: _builtInStore2.default.getBarContentRightComponent()
            };
        }

        /**
        * Component change handler.
        */

    }, {
        key: 'render',


        /**
        * Render the component
        * @return {HTML} Rendered component
        */
        value: function render() {
            var _state = this.state,
                barContentLeftComponent = _state.barContentLeftComponent,
                barContentRightComponent = _state.barContentRightComponent,
                summaryComponent = _state.summaryComponent;


            return _react2.default.createElement(
                'div',
                { 'data-focus': 'header-top-row' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { 'data-focus': 'header-top-row-left' },
                        barContentLeftComponent && _react2.default.createElement(barContentLeftComponent.component, barContentLeftComponent.props)
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'data-focus': 'header-top-row-right' },
                        barContentRightComponent && _react2.default.createElement(barContentRightComponent.component, barContentRightComponent.props)
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'data-focus': 'header-top-row-middle' },
                        summaryComponent && _react2.default.createElement(summaryComponent.component, summaryComponent.props)
                    )
                )
            );
        }
    }]);

    return HeaderTopRow;
}(_react.Component);

HeaderTopRow.displayName = 'HeaderTopRow';

exports.default = HeaderTopRow;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiSGVhZGVyVG9wUm93IiwicHJvcHMiLCJfaGFuZGxlQ29tcG9uZW50Q2hhbmdlIiwic2V0U3RhdGUiLCJfZ2V0U3RhdGVGcm9tU3RvcmUiLCJzdGF0ZSIsImFwcGxpY2F0aW9uU3RvcmUiLCJhZGRTdW1tYXJ5Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIiLCJhZGRCYXJDb250ZW50TGVmdENvbXBvbmVudENoYW5nZUxpc3RlbmVyIiwiYWRkQmFyQ29udGVudFJpZ2h0Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIiLCJyZW1vdmVTdW1tYXJ5Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIiLCJyZW1vdmVCYXJDb250ZW50TGVmdENvbXBvbmVudENoYW5nZUxpc3RlbmVyIiwicmVtb3ZlQmFyQ29udGVudFJpZ2h0Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIiLCJzdW1tYXJ5Q29tcG9uZW50IiwiZ2V0U3VtbWFyeUNvbXBvbmVudCIsImJhckNvbnRlbnRMZWZ0Q29tcG9uZW50IiwiZ2V0QmFyQ29udGVudExlZnRDb21wb25lbnQiLCJiYXJDb250ZW50UmlnaHRDb21wb25lbnQiLCJnZXRCYXJDb250ZW50UmlnaHRDb21wb25lbnQiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLFk7OztBQUVGLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1RBLEtBRFM7O0FBQUEsY0ErQm5CQyxzQkEvQm1CLEdBK0JNLFlBQU07QUFDM0Isa0JBQUtDLFFBQUwsQ0FBYyxNQUFLQyxrQkFBTCxFQUFkO0FBQ0gsU0FqQ2tCOztBQUdmLGNBQUtDLEtBQUwsR0FBYSxNQUFLRCxrQkFBTCxFQUFiO0FBSGU7QUFJbEI7O0FBRUQ7Ozs7OzZDQUNxQjtBQUNqQkUsbUNBQWlCQyxpQ0FBakIsQ0FBbUQsS0FBS0wsc0JBQXhEO0FBQ0FJLG1DQUFpQkUsd0NBQWpCLENBQTBELEtBQUtOLHNCQUEvRDtBQUNBSSxtQ0FBaUJHLHlDQUFqQixDQUEyRCxLQUFLUCxzQkFBaEU7QUFDSDs7QUFFRDs7OzsrQ0FDdUI7QUFDbkJJLG1DQUFpQkksb0NBQWpCLENBQXNELEtBQUtSLHNCQUEzRDtBQUNBSSxtQ0FBaUJLLDJDQUFqQixDQUE2RCxLQUFLVCxzQkFBbEU7QUFDQUksbUNBQWlCTSw0Q0FBakIsQ0FBOEQsS0FBS1Ysc0JBQW5FO0FBQ0g7Ozs2Q0FFb0I7QUFDakIsbUJBQU87QUFDSFcsa0NBQWtCUCx1QkFBaUJRLG1CQUFqQixFQURmO0FBRUhDLHlDQUF5QlQsdUJBQWlCVSwwQkFBakIsRUFGdEI7QUFHSEMsMENBQTBCWCx1QkFBaUJZLDJCQUFqQjtBQUh2QixhQUFQO0FBS0g7O0FBRUQ7Ozs7Ozs7O0FBT0E7Ozs7aUNBSVM7QUFBQSx5QkFDMkUsS0FBS2IsS0FEaEY7QUFBQSxnQkFDR1UsdUJBREgsVUFDR0EsdUJBREg7QUFBQSxnQkFDNEJFLHdCQUQ1QixVQUM0QkEsd0JBRDVCO0FBQUEsZ0JBQ3NESixnQkFEdEQsVUFDc0RBLGdCQUR0RDs7O0FBR0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLGNBQVcsZ0JBQWhCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLGNBQVcscUJBQWhCO0FBQ0tFLG1EQUNHLDhCQUFDLHVCQUFELENBQXlCLFNBQXpCLEVBQXVDQSx3QkFBd0JkLEtBQS9EO0FBRlIscUJBREo7QUFNSTtBQUFBO0FBQUEsMEJBQUssY0FBVyxzQkFBaEI7QUFDS2dCLG9EQUNHLDhCQUFDLHdCQUFELENBQTBCLFNBQTFCLEVBQXdDQSx5QkFBeUJoQixLQUFqRTtBQUZSLHFCQU5KO0FBV0k7QUFBQTtBQUFBLDBCQUFLLGNBQVcsdUJBQWhCO0FBQ0tZLDRDQUNHLDhCQUFDLGdCQUFELENBQWtCLFNBQWxCLEVBQWdDQSxpQkFBaUJaLEtBQWpEO0FBRlI7QUFYSjtBQURKLGFBREo7QUFxQkg7Ozs7RUFqRXNCa0IsZ0I7O0FBb0UzQm5CLGFBQWFvQixXQUFiLEdBQTJCLGNBQTNCOztrQkFFZXBCLFkiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXBwbGljYXRpb25TdG9yZSBmcm9tICdzYWdlc3MtY29yZS9hcHBsaWNhdGlvbi9idWlsdC1pbi1zdG9yZSc7XG5cbi8qKlxuKiBIZWFkZXJUb3BSb3cgY29tcG9uZW50LlxuKi9cbmNsYXNzIEhlYWRlclRvcFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldFN0YXRlRnJvbVN0b3JlKCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGFwcGxpY2F0aW9uU3RvcmUuYWRkU3VtbWFyeUNvbXBvbmVudENoYW5nZUxpc3RlbmVyKHRoaXMuX2hhbmRsZUNvbXBvbmVudENoYW5nZSk7XG4gICAgICAgIGFwcGxpY2F0aW9uU3RvcmUuYWRkQmFyQ29udGVudExlZnRDb21wb25lbnRDaGFuZ2VMaXN0ZW5lcih0aGlzLl9oYW5kbGVDb21wb25lbnRDaGFuZ2UpO1xuICAgICAgICBhcHBsaWNhdGlvblN0b3JlLmFkZEJhckNvbnRlbnRSaWdodENvbXBvbmVudENoYW5nZUxpc3RlbmVyKHRoaXMuX2hhbmRsZUNvbXBvbmVudENoYW5nZSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgYXBwbGljYXRpb25TdG9yZS5yZW1vdmVTdW1tYXJ5Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIodGhpcy5faGFuZGxlQ29tcG9uZW50Q2hhbmdlKTtcbiAgICAgICAgYXBwbGljYXRpb25TdG9yZS5yZW1vdmVCYXJDb250ZW50TGVmdENvbXBvbmVudENoYW5nZUxpc3RlbmVyKHRoaXMuX2hhbmRsZUNvbXBvbmVudENoYW5nZSk7XG4gICAgICAgIGFwcGxpY2F0aW9uU3RvcmUucmVtb3ZlQmFyQ29udGVudFJpZ2h0Q29tcG9uZW50Q2hhbmdlTGlzdGVuZXIodGhpcy5faGFuZGxlQ29tcG9uZW50Q2hhbmdlKTtcbiAgICB9XG5cbiAgICBfZ2V0U3RhdGVGcm9tU3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdW1tYXJ5Q29tcG9uZW50OiBhcHBsaWNhdGlvblN0b3JlLmdldFN1bW1hcnlDb21wb25lbnQoKSxcbiAgICAgICAgICAgIGJhckNvbnRlbnRMZWZ0Q29tcG9uZW50OiBhcHBsaWNhdGlvblN0b3JlLmdldEJhckNvbnRlbnRMZWZ0Q29tcG9uZW50KCksXG4gICAgICAgICAgICBiYXJDb250ZW50UmlnaHRDb21wb25lbnQ6IGFwcGxpY2F0aW9uU3RvcmUuZ2V0QmFyQ29udGVudFJpZ2h0Q29tcG9uZW50KClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENvbXBvbmVudCBjaGFuZ2UgaGFuZGxlci5cbiAgICAqL1xuICAgIF9oYW5kbGVDb21wb25lbnRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3RhdGVGcm9tU3RvcmUoKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBjb21wb25lbnRcbiAgICAqIEByZXR1cm4ge0hUTUx9IFJlbmRlcmVkIGNvbXBvbmVudFxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGJhckNvbnRlbnRMZWZ0Q29tcG9uZW50LCBiYXJDb250ZW50UmlnaHRDb21wb25lbnQsIHN1bW1hcnlDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0naGVhZGVyLXRvcC1yb3cnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0naGVhZGVyLXRvcC1yb3ctbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YmFyQ29udGVudExlZnRDb21wb25lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmFyQ29udGVudExlZnRDb21wb25lbnQuY29tcG9uZW50IHsuLi5iYXJDb250ZW50TGVmdENvbXBvbmVudC5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0naGVhZGVyLXRvcC1yb3ctcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAge2JhckNvbnRlbnRSaWdodENvbXBvbmVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiYXJDb250ZW50UmlnaHRDb21wb25lbnQuY29tcG9uZW50IHsuLi5iYXJDb250ZW50UmlnaHRDb21wb25lbnQucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2hlYWRlci10b3Atcm93LW1pZGRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VtbWFyeUNvbXBvbmVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5Q29tcG9uZW50LmNvbXBvbmVudCB7Li4uc3VtbWFyeUNvbXBvbmVudC5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkhlYWRlclRvcFJvdy5kaXNwbGF5TmFtZSA9ICdIZWFkZXJUb3BSb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUb3BSb3c7XG4iXX0=