'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = connectToStores;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _capitalize = require('lodash/string/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Behavior for store connection.
 * @param {array} storesConfiguration Provide the store configuration `[{store: yourStore, properties: ['property1', 'property2']}]`.
 * @param {func} getState Provide a function to read state from your store.
 * @returns {func} Wrapper function.
 */
function connectToStores(storesConfiguration, getState) {
    // Validate the stores object
    if (!(0, _isArray2.default)(storesConfiguration)) {
        throw new Error('connectToStores: you need to provide an array of store config.');
    }

    // Validate getState function
    if (!(0, _isFunction2.default)(getState)) {
        throw new Error('connectToStores: you need to provide function to read state from store.');
    }

    /**
     * Wrapping store behavior.
     * @param {JSXElement} DecoratedComponent Component to be wrapped.
     * @returns {JSXElement} Wrapped component.
     */
    return function connectComponent(DecoratedComponent) {
        var _class, _temp;

        // Save the display name for later
        var displayName = DecoratedComponent.displayName || 'Component';

        /**
         * The goal of this class is to connect a component to a list of stores with properties.
         */
        var StoreConnector = (_temp = _class = function (_Component) {
            _inherits(StoreConnector, _Component);

            /**
             * Constructor.
             * @param {object} props Props.
             */
            function StoreConnector(props) {
                _classCallCheck(this, StoreConnector);

                var _this = _possibleConstructorReturn(this, (StoreConnector.__proto__ || Object.getPrototypeOf(StoreConnector)).call(this, props));

                _this._isMounted = false;
                _this.handleStoresChanged = _this.handleStoresChanged.bind(_this);
                return _this;
            }

            /** @inheritdoc */


            /** Display name. */


            _createClass(StoreConnector, [{
                key: 'componentWillMount',
                value: function componentWillMount() {
                    // When the component will mount, we listen to all stores changes.
                    // When a change occurs the state is read again from the state.
                    this.handleStoreListenerChange('add');
                }

                /** @inheritdoc */

            }, {
                key: 'componentDidMount',
                value: function componentDidMount() {
                    this._isMounted = true;
                }

                /** @inheritdoc */

            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    this._isMounted = false;
                    this.handleStoreListenerChange('remove');
                }

                /**
                 * Handle adding or removing listeners.
                 * @param {string} type Add or remove listeners.
                 */

            }, {
                key: 'handleStoreListenerChange',
                value: function handleStoreListenerChange(type) {
                    var _this2 = this;

                    storesConfiguration.forEach(function (_ref) {
                        var properties = _ref.properties,
                            storeArg = _ref.store;

                        var store = typeof storeArg === 'function' ? storeArg() : storeArg;
                        properties.forEach(function (property) {
                            if (!store || !store.definition || !store.definition[property]) {
                                console.warn('\n                                StoreConnector ' + displayName + ':\n                                    You add a property : ' + property + ' in your store configuration which is not in your definition : ' + Object.keys(store.definition) + '\n                            ');
                            }
                            var capitalizedProperty = (0, _capitalize2.default)(property);
                            store['' + type + capitalizedProperty + 'ChangeListener'](_this2.handleStoresChanged);
                            store['' + type + capitalizedProperty + 'ErrorListener'](_this2.handleStoresChanged);
                        });
                    });
                }

                /**
                 * Handle the store changes
                 */

            }, {
                key: 'handleStoresChanged',
                value: function handleStoresChanged() {
                    if (this._isMounted) {
                        this.forceUpdate();
                    }
                }

                /**
                 * Get the decorated component.
                 * @returns {JSXElement} Component.
                 */

            }, {
                key: 'getDecoratedComponent',
                value: function getDecoratedComponent() {
                    return this.refs.decoratedComponent;
                }

                /**
                 * Get the isLoading state from  all the store.
                 * @returns {object} The object with isLoading key set.
                 */

            }, {
                key: '_getLoadingStateFromStores',
                value: function _getLoadingStateFromStores() {
                    var isLoading = false;

                    storesConfiguration.forEach(function (storeConf) {
                        var properties = storeConf.properties,
                            storeArg = storeConf.store;

                        var store = typeof storeArg === 'function' ? storeArg() : storeArg;
                        if (!isLoading) {
                            properties.forEach(function (property) {
                                if (!isLoading) {
                                    var propStatus = store.getStatus(property) || {};
                                    isLoading = propStatus.isLoading || false;
                                }
                            });
                        }
                    });

                    return isLoading;
                }

                /** @inheritdoc */

            }, {
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(DecoratedComponent, Object.assign({
                        isLoading: this._getLoadingStateFromStores()
                    }, this.props, getState(this.props), {
                        ref: 'decoratedComponent'
                    }));
                }
            }]);

            return StoreConnector;
        }(_react.Component), _class.displayName = displayName + 'Connected', _temp);


        return StoreConnector;
    };
}

// Add a function to connect a store to a component .
// All the store properties values will be provided to the component as props.
// This could be use as an ES7 annotation or as a function.

// ### ES6 version
// ```jsx
// store
// const newStore = new CoreStore({definition: {name: 'name', email: 'email'}});
//Component
// const Component = props => <div>{JSON.stringify(props)}</div>;
// create a connector function
// const connector = storeConnectBehaviour(
//     [{store: newStore, properties: ['name', 'email']}],
//     (props) => {return newStore.getValue()}
// );
// Component connected to the store
// const ConnectedComponent = connector(Component);
// ```

// ### ES7 version
// ```jsx
//    Class version
// @connect( [{store: newStore, properties: ['name', 'email']}],(props) => newStore.getValue())
// class YourComponent extends Component{
//     render(){
//          return  <div>{JSON.stringify(props)}</div>;
//     }
// }
// ```

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY29ubmVjdFRvU3RvcmVzIiwic3RvcmVzQ29uZmlndXJhdGlvbiIsImdldFN0YXRlIiwiRXJyb3IiLCJjb25uZWN0Q29tcG9uZW50IiwiRGVjb3JhdGVkQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJTdG9yZUNvbm5lY3RvciIsInByb3BzIiwiX2lzTW91bnRlZCIsImhhbmRsZVN0b3Jlc0NoYW5nZWQiLCJiaW5kIiwiaGFuZGxlU3RvcmVMaXN0ZW5lckNoYW5nZSIsInR5cGUiLCJmb3JFYWNoIiwicHJvcGVydGllcyIsInN0b3JlQXJnIiwic3RvcmUiLCJkZWZpbml0aW9uIiwicHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsIk9iamVjdCIsImtleXMiLCJjYXBpdGFsaXplZFByb3BlcnR5IiwiZm9yY2VVcGRhdGUiLCJyZWZzIiwiZGVjb3JhdGVkQ29tcG9uZW50IiwiaXNMb2FkaW5nIiwic3RvcmVDb25mIiwicHJvcFN0YXR1cyIsImdldFN0YXR1cyIsIl9nZXRMb2FkaW5nU3RhdGVGcm9tU3RvcmVzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFZd0JBLGU7O0FBWnhCOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsZUFBVCxDQUF5QkMsbUJBQXpCLEVBQThDQyxRQUE5QyxFQUF3RDtBQUNuRTtBQUNBLFFBQUksQ0FBQyx1QkFBUUQsbUJBQVIsQ0FBTCxFQUFtQztBQUMvQixjQUFNLElBQUlFLEtBQUosQ0FBVSxnRUFBVixDQUFOO0FBQ0g7O0FBRUQ7QUFDQSxRQUFJLENBQUMsMEJBQVdELFFBQVgsQ0FBTCxFQUEyQjtBQUN2QixjQUFNLElBQUlDLEtBQUosQ0FBVSx5RUFBVixDQUFOO0FBQ0g7O0FBRUQ7Ozs7O0FBS0EsV0FBTyxTQUFTQyxnQkFBVCxDQUEwQkMsa0JBQTFCLEVBQThDO0FBQUE7O0FBRWpEO0FBQ0Es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QUFEZix1QkFFUSxLQUFLeEIsS0FGYixFQUdRTixTQUFTLEtBQUtNLEtBQWQsQ0FIUjtBQUlJLDZCQUFJO0FBSlIsdUJBREo7QUFRSDtBQWhINEM7O0FBQUE7QUFBQSxVQVFwQnlCLGdCQVJvQixVQVd0QzNCLFdBWHNDLEdBV3JCQSxXQVhxQjs7O0FBbUhqRCxlQUFPQyxjQUFQO0FBQ0gsS0FwSEQ7QUFxSEg7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvbGFuZy9pc0Z1bmN0aW9uJztcclxuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2xhbmcvaXNBcnJheSc7XHJcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJ2xvZGFzaC9zdHJpbmcvY2FwaXRhbGl6ZSdcclxuXHJcbi8qKlxyXG4gKiBCZWhhdmlvciBmb3Igc3RvcmUgY29ubmVjdGlvbi5cclxuICogQHBhcmFtIHthcnJheX0gc3RvcmVzQ29uZmlndXJhdGlvbiBQcm92aWRlIHRoZSBzdG9yZSBjb25maWd1cmF0aW9uIGBbe3N0b3JlOiB5b3VyU3RvcmUsIHByb3BlcnRpZXM6IFsncHJvcGVydHkxJywgJ3Byb3BlcnR5MiddfV1gLlxyXG4gKiBAcGFyYW0ge2Z1bmN9IGdldFN0YXRlIFByb3ZpZGUgYSBmdW5jdGlvbiB0byByZWFkIHN0YXRlIGZyb20geW91ciBzdG9yZS5cclxuICogQHJldHVybnMge2Z1bmN9IFdyYXBwZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25uZWN0VG9TdG9yZXMoc3RvcmVzQ29uZmlndXJhdGlvbiwgZ2V0U3RhdGUpIHtcclxuICAgIC8vIFZhbGlkYXRlIHRoZSBzdG9yZXMgb2JqZWN0XHJcbiAgICBpZiAoIWlzQXJyYXkoc3RvcmVzQ29uZmlndXJhdGlvbikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3RUb1N0b3JlczogeW91IG5lZWQgdG8gcHJvdmlkZSBhbiBhcnJheSBvZiBzdG9yZSBjb25maWcuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgZ2V0U3RhdGUgZnVuY3Rpb25cclxuICAgIGlmICghaXNGdW5jdGlvbihnZXRTdGF0ZSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3RUb1N0b3JlczogeW91IG5lZWQgdG8gcHJvdmlkZSBmdW5jdGlvbiB0byByZWFkIHN0YXRlIGZyb20gc3RvcmUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXcmFwcGluZyBzdG9yZSBiZWhhdmlvci5cclxuICAgICAqIEBwYXJhbSB7SlNYRWxlbWVudH0gRGVjb3JhdGVkQ29tcG9uZW50IENvbXBvbmVudCB0byBiZSB3cmFwcGVkLlxyXG4gICAgICogQHJldHVybnMge0pTWEVsZW1lbnR9IFdyYXBwZWQgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY29ubmVjdENvbXBvbmVudChEZWNvcmF0ZWRDb21wb25lbnQpIHtcclxuXHJcbiAgICAgICAgLy8gU2F2ZSB0aGUgZGlzcGxheSBuYW1lIGZvciBsYXRlclxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gRGVjb3JhdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8ICdDb21wb25lbnQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgZ29hbCBvZiB0aGlzIGNsYXNzIGlzIHRvIGNvbm5lY3QgYSBjb21wb25lbnQgdG8gYSBsaXN0IG9mIHN0b3JlcyB3aXRoIHByb3BlcnRpZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3MgU3RvcmVDb25uZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgICAgICAgICAgLyoqIERpc3BsYXkgbmFtZS4gKi9cclxuICAgICAgICAgICAgc3RhdGljIGRpc3BsYXlOYW1lID0gYCR7ZGlzcGxheU5hbWV9Q29ubmVjdGVkYDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb25zdHJ1Y3Rvci5cclxuICAgICAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdG9yZXNDaGFuZ2VkID0gdGhpcy5oYW5kbGVTdG9yZXNDaGFuZ2VkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgICAgICAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBjb21wb25lbnQgd2lsbCBtb3VudCwgd2UgbGlzdGVuIHRvIGFsbCBzdG9yZXMgY2hhbmdlcy5cclxuICAgICAgICAgICAgICAgIC8vIFdoZW4gYSBjaGFuZ2Ugb2NjdXJzIHRoZSBzdGF0ZSBpcyByZWFkIGFnYWluIGZyb20gdGhlIHN0YXRlLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdG9yZUxpc3RlbmVyQ2hhbmdlKCdhZGQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICAgICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN0b3JlTGlzdGVuZXJDaGFuZ2UoJ3JlbW92ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSGFuZGxlIGFkZGluZyBvciByZW1vdmluZyBsaXN0ZW5lcnMuXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIEFkZCBvciByZW1vdmUgbGlzdGVuZXJzLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaGFuZGxlU3RvcmVMaXN0ZW5lckNoYW5nZSh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZXNDb25maWd1cmF0aW9uLmZvckVhY2goKHsgcHJvcGVydGllcywgc3RvcmU6IHN0b3JlQXJnIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdG9yZSA9IHR5cGVvZiBzdG9yZUFyZyA9PT0gJ2Z1bmN0aW9uJyA/IHN0b3JlQXJnKCkgOiBzdG9yZUFyZztcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2gocHJvcGVydHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0b3JlIHx8ICFzdG9yZS5kZWZpbml0aW9uIHx8ICFzdG9yZS5kZWZpbml0aW9uW3Byb3BlcnR5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yZUNvbm5lY3RvciAke2Rpc3BsYXlOYW1lfTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGFkZCBhIHByb3BlcnR5IDogJHtwcm9wZXJ0eX0gaW4geW91ciBzdG9yZSBjb25maWd1cmF0aW9uIHdoaWNoIGlzIG5vdCBpbiB5b3VyIGRlZmluaXRpb24gOiAke09iamVjdC5rZXlzKHN0b3JlLmRlZmluaXRpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRQcm9wZXJ0eSA9IGNhcGl0YWxpemUocHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZVtgJHt0eXBlfSR7Y2FwaXRhbGl6ZWRQcm9wZXJ0eX1DaGFuZ2VMaXN0ZW5lcmBdKHRoaXMuaGFuZGxlU3RvcmVzQ2hhbmdlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlW2Ake3R5cGV9JHtjYXBpdGFsaXplZFByb3BlcnR5fUVycm9yTGlzdGVuZXJgXSh0aGlzLmhhbmRsZVN0b3Jlc0NoYW5nZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBIYW5kbGUgdGhlIHN0b3JlIGNoYW5nZXNcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGhhbmRsZVN0b3Jlc0NoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNNb3VudGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR2V0IHRoZSBkZWNvcmF0ZWQgY29tcG9uZW50LlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7SlNYRWxlbWVudH0gQ29tcG9uZW50LlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0RGVjb3JhdGVkQ29tcG9uZW50KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5kZWNvcmF0ZWRDb21wb25lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBHZXQgdGhlIGlzTG9hZGluZyBzdGF0ZSBmcm9tICBhbGwgdGhlIHN0b3JlLlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBUaGUgb2JqZWN0IHdpdGggaXNMb2FkaW5nIGtleSBzZXQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBfZ2V0TG9hZGluZ1N0YXRlRnJvbVN0b3JlcygpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdG9yZXNDb25maWd1cmF0aW9uLmZvckVhY2goc3RvcmVDb25mID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHByb3BlcnRpZXMsIHN0b3JlOiBzdG9yZUFyZyB9ID0gc3RvcmVDb25mO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHlwZW9mIHN0b3JlQXJnID09PSAnZnVuY3Rpb24nID8gc3RvcmVBcmcoKSA6IHN0b3JlQXJnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BTdGF0dXMgPSBzdG9yZS5nZXRTdGF0dXMocHJvcGVydHkpIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA9IHByb3BTdGF0dXMuaXNMb2FkaW5nIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNMb2FkaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgICAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8RGVjb3JhdGVkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17dGhpcy5fZ2V0TG9hZGluZ1N0YXRlRnJvbVN0b3JlcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFN0YXRlKHRoaXMucHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9J2RlY29yYXRlZENvbXBvbmVudCdcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFN0b3JlQ29ubmVjdG9yO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gQWRkIGEgZnVuY3Rpb24gdG8gY29ubmVjdCBhIHN0b3JlIHRvIGEgY29tcG9uZW50IC5cclxuLy8gQWxsIHRoZSBzdG9yZSBwcm9wZXJ0aWVzIHZhbHVlcyB3aWxsIGJlIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgYXMgcHJvcHMuXHJcbi8vIFRoaXMgY291bGQgYmUgdXNlIGFzIGFuIEVTNyBhbm5vdGF0aW9uIG9yIGFzIGEgZnVuY3Rpb24uXHJcblxyXG4vLyAjIyMgRVM2IHZlcnNpb25cclxuLy8gYGBganN4XHJcbi8vIHN0b3JlXHJcbi8vIGNvbnN0IG5ld1N0b3JlID0gbmV3IENvcmVTdG9yZSh7ZGVmaW5pdGlvbjoge25hbWU6ICduYW1lJywgZW1haWw6ICdlbWFpbCd9fSk7XHJcbi8vQ29tcG9uZW50XHJcbi8vIGNvbnN0IENvbXBvbmVudCA9IHByb3BzID0+IDxkaXY+e0pTT04uc3RyaW5naWZ5KHByb3BzKX08L2Rpdj47XHJcbi8vIGNyZWF0ZSBhIGNvbm5lY3RvciBmdW5jdGlvblxyXG4vLyBjb25zdCBjb25uZWN0b3IgPSBzdG9yZUNvbm5lY3RCZWhhdmlvdXIoXHJcbi8vICAgICBbe3N0b3JlOiBuZXdTdG9yZSwgcHJvcGVydGllczogWyduYW1lJywgJ2VtYWlsJ119XSxcclxuLy8gICAgIChwcm9wcykgPT4ge3JldHVybiBuZXdTdG9yZS5nZXRWYWx1ZSgpfVxyXG4vLyApO1xyXG4vLyBDb21wb25lbnQgY29ubmVjdGVkIHRvIHRoZSBzdG9yZVxyXG4vLyBjb25zdCBDb25uZWN0ZWRDb21wb25lbnQgPSBjb25uZWN0b3IoQ29tcG9uZW50KTtcclxuLy8gYGBgXHJcblxyXG4vLyAjIyMgRVM3IHZlcnNpb25cclxuLy8gYGBganN4XHJcbi8vICAgIENsYXNzIHZlcnNpb25cclxuLy8gQGNvbm5lY3QoIFt7c3RvcmU6IG5ld1N0b3JlLCBwcm9wZXJ0aWVzOiBbJ25hbWUnLCAnZW1haWwnXX1dLChwcm9wcykgPT4gbmV3U3RvcmUuZ2V0VmFsdWUoKSlcclxuLy8gY2xhc3MgWW91ckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuLy8gICAgIHJlbmRlcigpe1xyXG4vLyAgICAgICAgICByZXR1cm4gIDxkaXY+e0pTT04uc3RyaW5naWZ5KHByb3BzKX08L2Rpdj47XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gYGBgXHJcbiJdfQ==