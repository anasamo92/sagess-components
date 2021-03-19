'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chip = require('../../chip');

var _chip2 = _interopRequireDefault(_chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Multi-autocomplete with Chip component in consult mode.
 */
var AutocompleteMultipleConsult = (_temp = _class = function (_Component) {
    _inherits(AutocompleteMultipleConsult, _Component);

    /**
     * Class constructor.
     * @param {object} props props given to component.
     */


    /**
     * Component's prop types.
     */
    function AutocompleteMultipleConsult(props) {
        _classCallCheck(this, AutocompleteMultipleConsult);

        var _this = _possibleConstructorReturn(this, (AutocompleteMultipleConsult.__proto__ || Object.getPrototypeOf(AutocompleteMultipleConsult)).call(this, props));

        _this.state = {};

        _this.updateLabel = _this.updateLabel.bind(_this);
        _this.deleteElement = _this.deleteElement.bind(_this);
        _this.renderChip = _this.renderChip.bind(_this);
        return _this;
    }

    /**
     * @inheritdoc
     */


    /**
     * Component's default props.
     */


    /**
     * Component's display name.
     */


    _createClass(AutocompleteMultipleConsult, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.updateLabel(this.props.value);
        }

        /**
         * @inheritdoc
         */

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var value = _ref.value;

            this.updateLabel(value);
        }

        /**
         * Method to resolve labels.
         * @param {array} value Array of selected ids.
         */

    }, {
        key: 'updateLabel',
        value: function updateLabel(value) {
            var _this2 = this;

            value.filter(function (id) {
                return !_this2.state[id];
            }).forEach(function (id) {
                return _this2.props.keyResolver(id).then(function (resolvedLabel) {
                    _this2.setState(_defineProperty({}, id, resolvedLabel));
                });
            });
        }

        /**
         * Remove a selected element.
         * @param {number} id Identifier to delete.
         */

    }, {
        key: 'deleteElement',
        value: function deleteElement(id) {
            if (!this.props.readonly) {
                this.props.onChange(this.props.value.filter(function (elt) {
                    return elt !== id;
                }));
            }
        }

        /**
         * Renders one element.
         * @param {number} id Identifier to render.
         * @return {ReactElement} markup.
         */

    }, {
        key: 'renderChip',
        value: function renderChip(id) {
            var _this3 = this;

            var ChipElement = this.props.ChipElement;


            return _react2.default.createElement(ChipElement, {
                key: id,
                label: this.state[id] || id,
                readonly: this.props.readonly,
                deleteElement: function deleteElement() {
                    return _this3.deleteElement(id);
                }
            });
        }

        /**
         * Render component.
         * @return {ReactElement} markup.
         */

    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var value = this.props.value;


            return _react2.default.createElement(
                'div',
                { 'data-focus': 'list-chips' },
                value.map(function (id) {
                    return _this4.renderChip(id);
                })
            );
        }
    }]);

    return AutocompleteMultipleConsult;
}(_react.Component), _class.displayName = 'AutocompleteMultipleConsult', _class.propTypes = {
    value: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
    readonly: _react.PropTypes.bool.isRequired,
    keyResolver: _react.PropTypes.func.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    ChipElement: _react.PropTypes.any
}, _class.defaultProps = {
    value: [],
    readonly: true,
    ChipElement: _chip2.default
}, _temp);
exports.default = AutocompleteMultipleConsult;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlTXVsdGlwbGVDb25zdWx0IiwicHJvcHMiLCJzdGF0ZSIsInVwZGF0ZUxhYmVsIiwiYmluZCIsImRlbGV0ZUVsZW1lbnQiLCJyZW5kZXJDaGlwIiwidmFsdWUiLCJmaWx0ZXIiLCJpZCIsImZvckVhY2giLCJrZXlSZXNvbHZlciIsInRoZW4iLCJyZXNvbHZlZExhYmVsIiwic2V0U3RhdGUiLCJyZWFkb25seSIsIm9uQ2hhbmdlIiwiZWx0IiwiQ2hpcEVsZW1lbnQiLCJtYXAiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJhbnkiLCJkZWZhdWx0UHJvcHMiLCJDaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLDJCOzs7QUEyQkY7Ozs7OztBQXBCQTs7O0FBd0JBLHlDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEpBQ1RBLEtBRFM7O0FBR2YsY0FBS0MsS0FBTCxHQUFhLEVBQWI7O0FBRUEsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLGNBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsT0FBckI7QUFDQSxjQUFLRSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLE9BQWxCO0FBUGU7QUFRbEI7O0FBRUQ7Ozs7O0FBdkJBOzs7OztBQWhCQTs7Ozs7Ozs2Q0EwQ3FCO0FBQ2pCLGlCQUFLRCxXQUFMLENBQWlCLEtBQUtGLEtBQUwsQ0FBV00sS0FBNUI7QUFDSDs7QUFFRDs7Ozs7O3dEQUdxQztBQUFBLGdCQUFUQSxLQUFTLFFBQVRBLEtBQVM7O0FBQ2pDLGlCQUFLSixXQUFMLENBQWlCSSxLQUFqQjtBQUNIOztBQUVEOzs7Ozs7O29DQUlZQSxLLEVBQU87QUFBQTs7QUFDZkEsa0JBQU1DLE1BQU4sQ0FBYTtBQUFBLHVCQUFNLENBQUMsT0FBS04sS0FBTCxDQUFXTyxFQUFYLENBQVA7QUFBQSxhQUFiLEVBQW9DQyxPQUFwQyxDQUE0QztBQUFBLHVCQUFNLE9BQUtULEtBQUwsQ0FBV1UsV0FBWCxDQUF1QkYsRUFBdkIsRUFBMkJHLElBQTNCLENBQWdDLFVBQUNDLGFBQUQsRUFBbUI7QUFDakcsMkJBQUtDLFFBQUwscUJBQWlCTCxFQUFqQixFQUFzQkksYUFBdEI7QUFDSCxpQkFGaUQsQ0FBTjtBQUFBLGFBQTVDO0FBR0g7O0FBRUQ7Ozs7Ozs7c0NBSWNKLEUsRUFBSTtBQUNkLGdCQUFJLENBQUMsS0FBS1IsS0FBTCxDQUFXYyxRQUFoQixFQUEwQjtBQUN0QixxQkFBS2QsS0FBTCxDQUFXZSxRQUFYLENBQW9CLEtBQUtmLEtBQUwsQ0FBV00sS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0I7QUFBQSwyQkFBT1MsUUFBUVIsRUFBZjtBQUFBLGlCQUF4QixDQUFwQjtBQUNIO0FBQ0o7O0FBRUQ7Ozs7Ozs7O21DQUtXQSxFLEVBQUk7QUFBQTs7QUFBQSxnQkFDSFMsV0FERyxHQUNhLEtBQUtqQixLQURsQixDQUNIaUIsV0FERzs7O0FBR1gsbUJBQ0ksOEJBQUMsV0FBRDtBQUNJLHFCQUFLVCxFQURUO0FBRUksdUJBQU8sS0FBS1AsS0FBTCxDQUFXTyxFQUFYLEtBQWtCQSxFQUY3QjtBQUdJLDBCQUFVLEtBQUtSLEtBQUwsQ0FBV2MsUUFIekI7QUFJSSwrQkFBZTtBQUFBLDJCQUFNLE9BQUtWLGFBQUwsQ0FBbUJJLEVBQW5CLENBQU47QUFBQTtBQUpuQixjQURKO0FBUUg7O0FBRUQ7Ozs7Ozs7aUNBSVM7QUFBQTs7QUFBQSxnQkFDR0YsS0FESCxHQUNhLEtBQUtOLEtBRGxCLENBQ0dNLEtBREg7OztBQUdMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLFlBQWhCO0FBQ0tBLHNCQUFNWSxHQUFOLENBQVU7QUFBQSwyQkFBTSxPQUFLYixVQUFMLENBQWdCRyxFQUFoQixDQUFOO0FBQUEsaUJBQVY7QUFETCxhQURKO0FBS0g7Ozs7RUF6R3FDVyxnQixVQUsvQkMsVyxHQUFjLDZCLFNBS2RDLFMsR0FBWTtBQUNmZixXQUFPZ0IsaUJBQVVDLE9BQVYsQ0FBa0JELGlCQUFVRSxNQUE1QixFQUFvQ0MsVUFENUI7QUFFZlgsY0FBVVEsaUJBQVVJLElBQVYsQ0FBZUQsVUFGVjtBQUdmZixpQkFBYVksaUJBQVVLLElBQVYsQ0FBZUYsVUFIYjtBQUlmVixjQUFVTyxpQkFBVUssSUFBVixDQUFlRixVQUpWO0FBS2ZSLGlCQUFhSyxpQkFBVU07QUFMUixDLFNBV1pDLFksR0FBZTtBQUNsQnZCLFdBQU8sRUFEVztBQUVsQlEsY0FBVSxJQUZRO0FBR2xCRyxpQkFBYWE7QUFISyxDO2tCQXdGWC9CLDJCIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hpcCBmcm9tICcuLi8uLi9jaGlwJztcblxuLyoqXG4gKiBNdWx0aS1hdXRvY29tcGxldGUgd2l0aCBDaGlwIGNvbXBvbmVudCBpbiBjb25zdWx0IG1vZGUuXG4gKi9cbmNsYXNzIEF1dG9jb21wbGV0ZU11bHRpcGxlQ29uc3VsdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQncyBkaXNwbGF5IG5hbWUuXG4gICAgICovXG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0F1dG9jb21wbGV0ZU11bHRpcGxlQ29uc3VsdCc7XG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQncyBwcm9wIHR5cGVzLlxuICAgICAqL1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgICAgICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAga2V5UmVzb2x2ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBDaGlwRWxlbWVudDogUHJvcFR5cGVzLmFueVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQncyBkZWZhdWx0IHByb3BzLlxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgIENoaXBFbGVtZW50OiBDaGlwXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsYXNzIGNvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBwcm9wcyBnaXZlbiB0byBjb21wb25lbnQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsID0gdGhpcy51cGRhdGVMYWJlbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRlbGV0ZUVsZW1lbnQgPSB0aGlzLmRlbGV0ZUVsZW1lbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlwID0gdGhpcy5yZW5kZXJDaGlwLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWwodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgdmFsdWUgfSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gcmVzb2x2ZSBsYWJlbHMuXG4gICAgICogQHBhcmFtIHthcnJheX0gdmFsdWUgQXJyYXkgb2Ygc2VsZWN0ZWQgaWRzLlxuICAgICAqL1xuICAgIHVwZGF0ZUxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlLmZpbHRlcihpZCA9PiAhdGhpcy5zdGF0ZVtpZF0pLmZvckVhY2goaWQgPT4gdGhpcy5wcm9wcy5rZXlSZXNvbHZlcihpZCkudGhlbigocmVzb2x2ZWRMYWJlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtpZF06IHJlc29sdmVkTGFiZWwgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBzZWxlY3RlZCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBJZGVudGlmaWVyIHRvIGRlbGV0ZS5cbiAgICAgKi9cbiAgICBkZWxldGVFbGVtZW50KGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5yZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLnZhbHVlLmZpbHRlcihlbHQgPT4gZWx0ICE9PSBpZCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBvbmUgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWQgSWRlbnRpZmllciB0byByZW5kZXIuXG4gICAgICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBtYXJrdXAuXG4gICAgICovXG4gICAgcmVuZGVyQ2hpcChpZCkge1xuICAgICAgICBjb25zdCB7IENoaXBFbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2hpcEVsZW1lbnRcbiAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnN0YXRlW2lkXSB8fCBpZH1cbiAgICAgICAgICAgICAgICByZWFkb25seT17dGhpcy5wcm9wcy5yZWFkb25seX1cbiAgICAgICAgICAgICAgICBkZWxldGVFbGVtZW50PXsoKSA9PiB0aGlzLmRlbGV0ZUVsZW1lbnQoaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgY29tcG9uZW50LlxuICAgICAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gbWFya3VwLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdsaXN0LWNoaXBzJz5cbiAgICAgICAgICAgICAgICB7dmFsdWUubWFwKGlkID0+IHRoaXMucmVuZGVyQ2hpcChpZCkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dG9jb21wbGV0ZU11bHRpcGxlQ29uc3VsdDtcbiJdfQ==