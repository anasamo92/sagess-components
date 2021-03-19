'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = connectToStores;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEqual = require('lodash/lang/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function connectToStores(Component, stores, pickProps, getState) {
    return function (_React$Component) {
        _inherits(StoreConnector, _React$Component);

        function StoreConnector(props) {
            _classCallCheck(this, StoreConnector);

            var _this = _possibleConstructorReturn(this, (StoreConnector.__proto__ || Object.getPrototypeOf(StoreConnector)).call(this, props));

            _this.state = _this.getStateFromStores(props);
            _this.handleStoresChanged = _this.handleStoresChanged.bind(_this);
            return _this;
        }

        _createClass(StoreConnector, [{
            key: 'getStateFromStores',
            value: function getStateFromStores(props) {
                return getState(pickProps(props));
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                stores.forEach(function (store) {
                    return store.addChangeListener(_this2.handleStoresChanged);
                });
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (!(0, _isEqual2.default)(pickProps(nextProps), pickProps(this.props))) {
                    //isEqual
                    this.setState(this.getStateFromStores(nextProps));
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                var _this3 = this;

                stores.forEach(function (store) {
                    return store.removeChangeListener(_this3.handleStoresChanged);
                });
            }
        }, {
            key: 'handleStoresChanged',
            value: function handleStoresChanged() {
                this.setState(this.getStateFromStores(this.props));
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(Component, Object.assign({}, this.props, this.state));
            }
        }]);

        return StoreConnector;
    }(_react2.default.Component);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY29ubmVjdFRvU3RvcmVzIiwiQ29tcG9uZW50Iiwic3RvcmVzIiwicGlja1Byb3BzIiwiZ2V0U3RhdGUiLCJwcm9wcyIsInN0YXRlIiwiZ2V0U3RhdGVGcm9tU3RvcmVzIiwiaGFuZGxlU3RvcmVzQ2hhbmdlZCIsImJpbmQiLCJmb3JFYWNoIiwic3RvcmUiLCJhZGRDaGFuZ2VMaXN0ZW5lciIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwicmVtb3ZlQ2hhbmdlTGlzdGVuZXIiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBR3dCQSxlOztBQUh4Qjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxlQUFULENBQXlCQyxTQUF6QixFQUFvQ0MsTUFBcEMsRUFBNENDLFNBQTVDLEVBQXVEQyxRQUF2RCxFQUFpRTtBQUM1RTtBQUFBOztBQUNJLGdDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0lBQ1RBLEtBRFM7O0FBRWYsa0JBQUtDLEtBQUwsR0FBYSxNQUFLQyxrQkFBTCxDQUF3QkYsS0FBeEIsQ0FBYjtBQUNBLGtCQUFLRyxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QkMsSUFBekIsT0FBM0I7QUFIZTtBQUlsQjs7QUFMTDtBQUFBO0FBQUEsK0NBT3VCSixLQVB2QixFQU84QjtBQUN0Qix1QkFBT0QsU0FBU0QsVUFBVUUsS0FBVixDQUFULENBQVA7QUFDSDtBQVRMO0FBQUE7QUFBQSxnREFXd0I7QUFBQTs7QUFDaEJILHVCQUFPUSxPQUFQLENBQWU7QUFBQSwyQkFDWEMsTUFBTUMsaUJBQU4sQ0FBd0IsT0FBS0osbUJBQTdCLENBRFc7QUFBQSxpQkFBZjtBQUdIO0FBZkw7QUFBQTtBQUFBLHNEQWlCOEJLLFNBakI5QixFQWlCeUM7QUFDakMsb0JBQUksQ0FBQyx1QkFBUVYsVUFBVVUsU0FBVixDQUFSLEVBQThCVixVQUFVLEtBQUtFLEtBQWYsQ0FBOUIsQ0FBTCxFQUEyRDtBQUFFO0FBQ3pELHlCQUFLUyxRQUFMLENBQWMsS0FBS1Asa0JBQUwsQ0FBd0JNLFNBQXhCLENBQWQ7QUFDSDtBQUNKO0FBckJMO0FBQUE7QUFBQSxtREF1QjJCO0FBQUE7O0FBQ25CWCx1QkFBT1EsT0FBUCxDQUFlO0FBQUEsMkJBQ1hDLE1BQU1JLG9CQUFOLENBQTJCLE9BQUtQLG1CQUFoQyxDQURXO0FBQUEsaUJBQWY7QUFHSDtBQTNCTDtBQUFBO0FBQUEsa0RBNkIwQjtBQUNsQixxQkFBS00sUUFBTCxDQUFjLEtBQUtQLGtCQUFMLENBQXdCLEtBQUtGLEtBQTdCLENBQWQ7QUFDSDtBQS9CTDtBQUFBO0FBQUEscUNBaUNhO0FBQ0wsdUJBQ0ksOEJBQUMsU0FBRCxvQkFBZSxLQUFLQSxLQUFwQixFQUErQixLQUFLQyxLQUFwQyxFQURKO0FBR0g7QUFyQ0w7O0FBQUE7QUFBQSxNQUFvQ1UsZ0JBQU1mLFNBQTFDO0FBdUNIIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvbGFuZy9pc0VxdWFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbm5lY3RUb1N0b3JlcyhDb21wb25lbnQsIHN0b3JlcywgcGlja1Byb3BzLCBnZXRTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNsYXNzIFN0b3JlQ29ubmVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlRnJvbVN0b3Jlcyhwcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RvcmVzQ2hhbmdlZCA9IHRoaXMuaGFuZGxlU3RvcmVzQ2hhbmdlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0U3RhdGVGcm9tU3RvcmVzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRTdGF0ZShwaWNrUHJvcHMocHJvcHMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgICBzdG9yZXMuZm9yRWFjaChzdG9yZSA9PlxyXG4gICAgICAgICAgICAgICAgc3RvcmUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy5oYW5kbGVTdG9yZXNDaGFuZ2VkKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHBpY2tQcm9wcyhuZXh0UHJvcHMpLCBwaWNrUHJvcHModGhpcy5wcm9wcykpKSB7IC8vaXNFcXVhbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldFN0YXRlRnJvbVN0b3JlcyhuZXh0UHJvcHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgICAgIHN0b3Jlcy5mb3JFYWNoKHN0b3JlID0+XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLmhhbmRsZVN0b3Jlc0NoYW5nZWQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kbGVTdG9yZXNDaGFuZ2VkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0U3RhdGVGcm9tU3RvcmVzKHRoaXMucHJvcHMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIl19