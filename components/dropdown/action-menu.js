'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('sagess-core/translation');

var _noop = require('lodash/utility/noop');

var _noop2 = _interopRequireDefault(_noop);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _material = require('../../behaviours/material');

var _material2 = _interopRequireDefault(_material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Action menu component
 * 
 * @class ActionMenu
 * @extends {Component}
 */
var ActionMenu = (_dec = (0, _material2.default)('dropdown'), _dec(_class = function (_Component) {
    _inherits(ActionMenu, _Component);

    /**
     * Creates an instance of ActionMenu.
     * @param {any} props component props
     * @memberof ActionMenu
     */
    function ActionMenu(props) {
        _classCallCheck(this, ActionMenu);

        return _possibleConstructorReturn(this, (ActionMenu.__proto__ || Object.getPrototypeOf(ActionMenu)).call(this, props));
    }

    /**
     * Build a function to handle the action call.
     * 
     * @param {function} action the function to call
     * @returns {function} the built function
     * @memberof ActionMenu
     */


    _createClass(ActionMenu, [{
        key: '_handleAction',
        value: function _handleAction(action) {
            var _this2 = this;

            return function () {
                if (_this2.props.operationParam) {
                    action(_this2.props.operationParam);
                } else {
                    action();
                }
            };
        }

        /**
         * Render the menu items.
         * 
         * @param {array} operationList the list of action to display
         * @returns {any} the render
         * @memberof ActionMenu
         */

    }, {
        key: 'renderMenuItems',
        value: function renderMenuItems(operationList) {
            var _this3 = this;

            return operationList.map(function (operation, idx) {
                return _react2.default.createElement(
                    'li',
                    { className: 'mdl-menu__item ' + operation.style, key: idx,
                        onClick: _this3._handleAction(operation.action)
                    },
                    (0, _translation.translate)(operation.label)
                );
            });
        }

        /** @inheritdoc */

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                iconProps = _props.iconProps,
                operationList = _props.operationList,
                position = _props.position,
                shape = _props.shape;

            // This button/menu thing is actually working based on htmlFor and buttonId
            // No action is required on click, so we give a noop function for onclick

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_button2.default, { type: 'button', icon: iconProps.name, id: id, isJs: true, shape: shape,
                    handleOnClick: _noop2.default
                }),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'ul',
                        { className: 'mdl-menu mdl-menu--bottom-' + position + ' mdl-js-menu mdl-js-ripple-effect',
                            htmlFor: id,
                            ref: 'dropdown'
                        },
                        this.renderMenuItems(operationList || [])
                    )
                )
            );
        }
    }]);

    return ActionMenu;
}(_react.Component)) || _class);
exports.default = ActionMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQWN0aW9uTWVudSIsInByb3BzIiwiYWN0aW9uIiwib3BlcmF0aW9uUGFyYW0iLCJvcGVyYXRpb25MaXN0IiwibWFwIiwib3BlcmF0aW9uIiwiaWR4Iiwic3R5bGUiLCJfaGFuZGxlQWN0aW9uIiwibGFiZWwiLCJpZCIsImljb25Qcm9wcyIsInBvc2l0aW9uIiwic2hhcGUiLCJuYW1lIiwibm9vcCIsInJlbmRlck1lbnVJdGVtcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7O0lBTU1BLFUsV0FQTCx3QkFBWSxVQUFaLEM7OztBQVVHOzs7OztBQUtBLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsdUhBQ1RBLEtBRFM7QUFFbEI7O0FBRUQ7Ozs7Ozs7Ozs7O3NDQU9jQyxNLEVBQVE7QUFBQTs7QUFDbEIsbUJBQU8sWUFBTTtBQUNULG9CQUFJLE9BQUtELEtBQUwsQ0FBV0UsY0FBZixFQUErQjtBQUMzQkQsMkJBQU8sT0FBS0QsS0FBTCxDQUFXRSxjQUFsQjtBQUNILGlCQUZELE1BRU87QUFDSEQ7QUFDSDtBQUNKLGFBTkQ7QUFPSDs7QUFFRDs7Ozs7Ozs7Ozt3Q0FPZ0JFLGEsRUFBZTtBQUFBOztBQUMzQixtQkFBT0EsY0FBY0MsR0FBZCxDQUFrQixVQUFDQyxTQUFELEVBQVlDLEdBQVosRUFBb0I7QUFDekMsdUJBQ0k7QUFBQTtBQUFBLHNCQUFJLCtCQUE2QkQsVUFBVUUsS0FBM0MsRUFBb0QsS0FBS0QsR0FBekQ7QUFDSSxpQ0FBUyxPQUFLRSxhQUFMLENBQW1CSCxVQUFVSixNQUE3QjtBQURiO0FBR0ssZ0RBQVVJLFVBQVVJLEtBQXBCO0FBSEwsaUJBREo7QUFPSCxhQVJNLENBQVA7QUFTSDs7QUFHRDs7OztpQ0FDUztBQUFBLHlCQUNxRCxLQUFLVCxLQUQxRDtBQUFBLGdCQUNHVSxFQURILFVBQ0dBLEVBREg7QUFBQSxnQkFDT0MsU0FEUCxVQUNPQSxTQURQO0FBQUEsZ0JBQ2tCUixhQURsQixVQUNrQkEsYUFEbEI7QUFBQSxnQkFDaUNTLFFBRGpDLFVBQ2lDQSxRQURqQztBQUFBLGdCQUMyQ0MsS0FEM0MsVUFDMkNBLEtBRDNDOztBQUdMO0FBQ0E7O0FBQ0EsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksOENBQUMsZ0JBQUQsSUFBUSxNQUFLLFFBQWIsRUFBc0IsTUFBTUYsVUFBVUcsSUFBdEMsRUFBNEMsSUFBSUosRUFBaEQsRUFBb0QsVUFBcEQsRUFBeUQsT0FBT0csS0FBaEU7QUFDSSxtQ0FBZUU7QUFEbkIsa0JBREo7QUFJSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMEJBQUksMENBQXdDSCxRQUF4QyxzQ0FBSjtBQUNJLHFDQUFTRixFQURiO0FBRUksaUNBQUk7QUFGUjtBQUlLLDZCQUFLTSxlQUFMLENBQXFCYixpQkFBaUIsRUFBdEM7QUFKTDtBQURKO0FBSkosYUFESjtBQWVIOzs7O0VBdEVvQmMsZ0I7a0JBeUVWbEIsVSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL3RyYW5zbGF0aW9uJztcbmltcG9ydCBub29wIGZyb20gJ2xvZGFzaC91dGlsaXR5L25vb3AnXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IE1EQmVoYXZpb3VyIGZyb20gJy4uLy4uL2JlaGF2aW91cnMvbWF0ZXJpYWwnO1xuXG5ATURCZWhhdmlvdXIoJ2Ryb3Bkb3duJylcbi8qKlxuICogQWN0aW9uIG1lbnUgY29tcG9uZW50XG4gKiBcbiAqIEBjbGFzcyBBY3Rpb25NZW51XG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5jbGFzcyBBY3Rpb25NZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBBY3Rpb25NZW51LlxuICAgICAqIEBwYXJhbSB7YW55fSBwcm9wcyBjb21wb25lbnQgcHJvcHNcbiAgICAgKiBAbWVtYmVyb2YgQWN0aW9uTWVudVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgYWN0aW9uIGNhbGwuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gYWN0aW9uIHRoZSBmdW5jdGlvbiB0byBjYWxsXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufSB0aGUgYnVpbHQgZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyb2YgQWN0aW9uTWVudVxuICAgICAqL1xuICAgIF9oYW5kbGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcGVyYXRpb25QYXJhbSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbih0aGlzLnByb3BzLm9wZXJhdGlvblBhcmFtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBtZW51IGl0ZW1zLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IG9wZXJhdGlvbkxpc3QgdGhlIGxpc3Qgb2YgYWN0aW9uIHRvIGRpc3BsYXlcbiAgICAgKiBAcmV0dXJucyB7YW55fSB0aGUgcmVuZGVyXG4gICAgICogQG1lbWJlcm9mIEFjdGlvbk1lbnVcbiAgICAgKi9cbiAgICByZW5kZXJNZW51SXRlbXMob3BlcmF0aW9uTGlzdCkge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW9uTGlzdC5tYXAoKG9wZXJhdGlvbiwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BtZGwtbWVudV9faXRlbSAke29wZXJhdGlvbi5zdHlsZX1gfSBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5faGFuZGxlQWN0aW9uKG9wZXJhdGlvbi5hY3Rpb24pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZShvcGVyYXRpb24ubGFiZWwpfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIGljb25Qcm9wcywgb3BlcmF0aW9uTGlzdCwgcG9zaXRpb24sIHNoYXBlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIFRoaXMgYnV0dG9uL21lbnUgdGhpbmcgaXMgYWN0dWFsbHkgd29ya2luZyBiYXNlZCBvbiBodG1sRm9yIGFuZCBidXR0b25JZFxuICAgICAgICAvLyBObyBhY3Rpb24gaXMgcmVxdWlyZWQgb24gY2xpY2ssIHNvIHdlIGdpdmUgYSBub29wIGZ1bmN0aW9uIGZvciBvbmNsaWNrXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nYnV0dG9uJyBpY29uPXtpY29uUHJvcHMubmFtZX0gaWQ9e2lkfSBpc0pzIHNoYXBlPXtzaGFwZX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DbGljaz17bm9vcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BtZGwtbWVudSBtZGwtbWVudS0tYm90dG9tLSR7cG9zaXRpb259IG1kbC1qcy1tZW51IG1kbC1qcy1yaXBwbGUtZWZmZWN0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPSdkcm9wZG93bidcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWVudUl0ZW1zKG9wZXJhdGlvbkxpc3QgfHwgW10pfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25NZW51O1xuIl19