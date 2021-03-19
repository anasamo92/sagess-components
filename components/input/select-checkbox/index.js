'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _translation = require('../../../behaviours/translation');

var _translation2 = _interopRequireDefault(_translation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * SelectCheckbox component.
 */
var SelectCheckbox = (0, _translation2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(SelectCheckbox, _Component);

    function SelectCheckbox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectCheckbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectCheckbox.__proto__ || Object.getPrototypeOf(SelectCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selectedValues: _this.props.value
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Display name.
     */


    /**
     * PropTypes.
     */


    /**
     * Default props.
     */


    /**
     * Initial state.
     */


    _createClass(SelectCheckbox, [{
        key: 'componentWillReceiveProps',


        /**
         * React componentWillReceiveProps hook.
         * @param {object} newProps new props.
         */
        value: function componentWillReceiveProps(newProps) {
            if (newProps) {
                this.setState({ selectedValues: newProps.value });
            }
        }

        /**
        * Get the value from the select in the DOM.
        * @return {string} value
        */

    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state.selectedValues;
        }

        /**
         * Handle a change of value.
         * @param  {[type]} key       the key
         * @param  {[type]} newStatus the new status
         */

    }, {
        key: '_handleCheckboxChange',
        value: function _handleCheckboxChange(key, newStatus) {
            var selectedValues = newStatus ? this.state.selectedValues.concat([key]) : this.state.selectedValues.filter(function (elt) {
                return elt !== key;
            });

            if (this.props.onChange && this.props.legacyOnChange) {
                this.props.onChange(key, newStatus);
            } else if (this.props.onChange) {
                this.props.onChange(selectedValues);
            } else {
                this.setState({ selectedValues: selectedValues });
            }
        }

        /**
         * Closure to capture key and checbox status.
         * @param  {[type]} key the key of checkbox
         * @return {[type]} status closure
         */

    }, {
        key: '_getCheckboxChangeHandler',
        value: function _getCheckboxChangeHandler(key) {
            var _this2 = this;

            return function (status) {
                _this2._handleCheckboxChange(key, status);
            };
        }

        /**
         * Render all selection checkbox.
         * @return {ReactDOMNode} list of ReactDomNode
         */

    }, {
        key: 'renderCheckboxes',
        value: function renderCheckboxes() {
            var _this3 = this;

            return this.props.values.map(function (val, idx) {
                var value = val[_this3.props.valueKey];
                var label = val[_this3.props.labelKey];
                var isChecked = 0 <= _this3.state.selectedValues.indexOf(value);
                return _react2.default.createElement(_checkbox2.default, { key: idx, label: _this3.i18n(label), onChange: _this3._getCheckboxChangeHandler(value), value: isChecked });
            });
        }

        /**
         * Render.
         * @return {ReactElement} markup.
         */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { 'data-focus': 'select-checkbox' },
                this.renderCheckboxes()
            );
        }
    }]);

    return SelectCheckbox;
}(_react.Component), _class2.displayName = 'SelectCheckbox', _class2.propTypes = {
    values: _react.PropTypes.array,
    value: _react.PropTypes.array,
    valueKey: _react.PropTypes.string,
    labelKey: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    legacyOnChange: _react.PropTypes.bool
}, _class2.defaultProps = {
    values: [], // all values
    value: [], // selected values list
    valueKey: 'value', // key for the displayed value
    labelKey: 'label', // key for the displayed label
    onChange: undefined,
    legacyOnChange: false
}, _temp2)) || _class;

exports.default = SelectCheckbox;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiU2VsZWN0Q2hlY2tib3giLCJUcmFuc2xhdGlvbiIsInN0YXRlIiwic2VsZWN0ZWRWYWx1ZXMiLCJwcm9wcyIsInZhbHVlIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsImtleSIsIm5ld1N0YXR1cyIsImNvbmNhdCIsImZpbHRlciIsImVsdCIsIm9uQ2hhbmdlIiwibGVnYWN5T25DaGFuZ2UiLCJzdGF0dXMiLCJfaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJ2YWx1ZXMiLCJtYXAiLCJ2YWwiLCJpZHgiLCJ2YWx1ZUtleSIsImxhYmVsIiwibGFiZWxLZXkiLCJpc0NoZWNrZWQiLCJpbmRleE9mIiwiaTE4biIsIl9nZXRDaGVja2JveENoYW5nZUhhbmRsZXIiLCJyZW5kZXJDaGVja2JveGVzIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsInN0cmluZyIsImZ1bmMiLCJib29sIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBSU1BLGMsT0FETEMscUI7Ozs7Ozs7Ozs7Ozs7OzBNQW1DR0MsSyxHQUFRO0FBQ0pDLDRCQUFnQixNQUFLQyxLQUFMLENBQVdDO0FBRHZCLFM7OztBQWhDUjs7Ozs7QUFLQTs7Ozs7QUFZQTs7Ozs7QUFZQTs7Ozs7Ozs7O0FBT0E7Ozs7a0RBSTBCQyxRLEVBQVU7QUFDaEMsZ0JBQUlBLFFBQUosRUFBYztBQUNWLHFCQUFLQyxRQUFMLENBQWMsRUFBRUosZ0JBQWdCRyxTQUFTRCxLQUEzQixFQUFkO0FBQ0g7QUFDSjs7QUFFRDs7Ozs7OzttQ0FJVztBQUNQLG1CQUFPLEtBQUtILEtBQUwsQ0FBV0MsY0FBbEI7QUFDSDs7QUFFRDs7Ozs7Ozs7OENBS3NCSyxHLEVBQUtDLFMsRUFBVztBQUNsQyxnQkFBTU4saUJBQWlCTSxZQUNqQixLQUFLUCxLQUFMLENBQVdDLGNBQVgsQ0FBMEJPLE1BQTFCLENBQWlDLENBQUNGLEdBQUQsQ0FBakMsQ0FEaUIsR0FFakIsS0FBS04sS0FBTCxDQUFXQyxjQUFYLENBQTBCUSxNQUExQixDQUFpQztBQUFBLHVCQUFPQyxRQUFRSixHQUFmO0FBQUEsYUFBakMsQ0FGTjs7QUFJQSxnQkFBSSxLQUFLSixLQUFMLENBQVdTLFFBQVgsSUFBdUIsS0FBS1QsS0FBTCxDQUFXVSxjQUF0QyxFQUFzRDtBQUNsRCxxQkFBS1YsS0FBTCxDQUFXUyxRQUFYLENBQW9CTCxHQUFwQixFQUF5QkMsU0FBekI7QUFDSCxhQUZELE1BRU8sSUFBSSxLQUFLTCxLQUFMLENBQVdTLFFBQWYsRUFBeUI7QUFDNUIscUJBQUtULEtBQUwsQ0FBV1MsUUFBWCxDQUFvQlYsY0FBcEI7QUFDSCxhQUZNLE1BRUE7QUFDSCxxQkFBS0ksUUFBTCxDQUFjLEVBQUVKLDhCQUFGLEVBQWQ7QUFDSDtBQUNKOztBQUVEOzs7Ozs7OztrREFLMEJLLEcsRUFBSztBQUFBOztBQUMzQixtQkFBTyxVQUFDTyxNQUFELEVBQVk7QUFDZix1QkFBS0MscUJBQUwsQ0FBMkJSLEdBQTNCLEVBQWdDTyxNQUFoQztBQUNILGFBRkQ7QUFHSDs7QUFFRDs7Ozs7OzsyQ0FJbUI7QUFBQTs7QUFDZixtQkFBTyxLQUFLWCxLQUFMLENBQVdhLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3ZDLG9CQUFNZixRQUFRYyxJQUFJLE9BQUtmLEtBQUwsQ0FBV2lCLFFBQWYsQ0FBZDtBQUNBLG9CQUFNQyxRQUFRSCxJQUFJLE9BQUtmLEtBQUwsQ0FBV21CLFFBQWYsQ0FBZDtBQUNBLG9CQUFNQyxZQUFZLEtBQUssT0FBS3RCLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQnNCLE9BQTFCLENBQWtDcEIsS0FBbEMsQ0FBdkI7QUFDQSx1QkFDSSw4QkFBQyxrQkFBRCxJQUFVLEtBQUtlLEdBQWYsRUFBb0IsT0FBTyxPQUFLTSxJQUFMLENBQVVKLEtBQVYsQ0FBM0IsRUFBNkMsVUFBVSxPQUFLSyx5QkFBTCxDQUErQnRCLEtBQS9CLENBQXZELEVBQThGLE9BQU9tQixTQUFyRyxHQURKO0FBR0gsYUFQTSxDQUFQO0FBUUg7O0FBRUQ7Ozs7Ozs7aUNBSVM7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssY0FBVyxpQkFBaEI7QUFDSyxxQkFBS0ksZ0JBQUw7QUFETCxhQURKO0FBS0g7Ozs7RUEvR3dCQyxnQixXQUtsQkMsVyxHQUFjLGdCLFVBS2RDLFMsR0FBWTtBQUNmZCxZQUFRZSxpQkFBVUMsS0FESDtBQUVmNUIsV0FBTzJCLGlCQUFVQyxLQUZGO0FBR2ZaLGNBQVVXLGlCQUFVRSxNQUhMO0FBSWZYLGNBQVVTLGlCQUFVRSxNQUpMO0FBS2ZyQixjQUFVbUIsaUJBQVVHLElBTEw7QUFNZnJCLG9CQUFnQmtCLGlCQUFVSTtBQU5YLEMsVUFZWkMsWSxHQUFlO0FBQ2xCcEIsWUFBUSxFQURVLEVBQ047QUFDWlosV0FBTyxFQUZXLEVBRVA7QUFDWGdCLGNBQVUsT0FIUSxFQUdDO0FBQ25CRSxjQUFVLE9BSlEsRUFJQztBQUNuQlYsY0FBVXlCLFNBTFE7QUFNbEJ4QixvQkFBZ0I7QUFORSxDOztrQkE0RlhkLGMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi9jaGVja2JveCc7XG5pbXBvcnQgVHJhbnNsYXRpb24gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3Vycy90cmFuc2xhdGlvbic7XG5cbi8qKlxuICogU2VsZWN0Q2hlY2tib3ggY29tcG9uZW50LlxuICovXG5AVHJhbnNsYXRpb25cbmNsYXNzIFNlbGVjdENoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgbmFtZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnU2VsZWN0Q2hlY2tib3gnO1xuXG4gICAgLyoqXG4gICAgICogUHJvcFR5cGVzLlxuICAgICAqL1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHZhbHVlczogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICB2YWx1ZUtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbGFiZWxLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgbGVnYWN5T25DaGFuZ2U6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgcHJvcHMuXG4gICAgICovXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdmFsdWVzOiBbXSwgLy8gYWxsIHZhbHVlc1xuICAgICAgICB2YWx1ZTogW10sIC8vIHNlbGVjdGVkIHZhbHVlcyBsaXN0XG4gICAgICAgIHZhbHVlS2V5OiAndmFsdWUnLCAvLyBrZXkgZm9yIHRoZSBkaXNwbGF5ZWQgdmFsdWVcbiAgICAgICAgbGFiZWxLZXk6ICdsYWJlbCcsIC8vIGtleSBmb3IgdGhlIGRpc3BsYXllZCBsYWJlbFxuICAgICAgICBvbkNoYW5nZTogdW5kZWZpbmVkLFxuICAgICAgICBsZWdhY3lPbkNoYW5nZTogZmFsc2VcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBzdGF0ZS5cbiAgICAgKi9cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZXM6IHRoaXMucHJvcHMudmFsdWVcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVhY3QgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyBob29rLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuZXdQcm9wcyBuZXcgcHJvcHMuXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICBpZiAobmV3UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFZhbHVlczogbmV3UHJvcHMudmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgc2VsZWN0IGluIHRoZSBET00uXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IHZhbHVlXG4gICAgKi9cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgY2hhbmdlIG9mIHZhbHVlLlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0ga2V5ICAgICAgIHRoZSBrZXlcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19IG5ld1N0YXR1cyB0aGUgbmV3IHN0YXR1c1xuICAgICAqL1xuICAgIF9oYW5kbGVDaGVja2JveENoYW5nZShrZXksIG5ld1N0YXR1cykge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IG5ld1N0YXR1c1xuICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWVzLmNvbmNhdChba2V5XSlcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlcy5maWx0ZXIoZWx0ID0+IGVsdCAhPT0ga2V5KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLmxlZ2FjeU9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGtleSwgbmV3U3RhdHVzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNlbGVjdGVkVmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFZhbHVlcyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3N1cmUgdG8gY2FwdHVyZSBrZXkgYW5kIGNoZWNib3ggc3RhdHVzLlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0ga2V5IHRoZSBrZXkgb2YgY2hlY2tib3hcbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IHN0YXR1cyBjbG9zdXJlXG4gICAgICovXG4gICAgX2dldENoZWNrYm94Q2hhbmdlSGFuZGxlcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNoZWNrYm94Q2hhbmdlKGtleSwgc3RhdHVzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYWxsIHNlbGVjdGlvbiBjaGVja2JveC5cbiAgICAgKiBAcmV0dXJuIHtSZWFjdERPTU5vZGV9IGxpc3Qgb2YgUmVhY3REb21Ob2RlXG4gICAgICovXG4gICAgcmVuZGVyQ2hlY2tib3hlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWVzLm1hcCgodmFsLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsW3RoaXMucHJvcHMudmFsdWVLZXldO1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB2YWxbdGhpcy5wcm9wcy5sYWJlbEtleV07XG4gICAgICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSAwIDw9IHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBrZXk9e2lkeH0gbGFiZWw9e3RoaXMuaTE4bihsYWJlbCl9IG9uQ2hhbmdlPXt0aGlzLl9nZXRDaGVja2JveENoYW5nZUhhbmRsZXIodmFsdWUpfSB2YWx1ZT17aXNDaGVja2VkfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyLlxuICAgICAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gbWFya3VwLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nc2VsZWN0LWNoZWNrYm94Jz5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveGVzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdENoZWNrYm94O1xuIl19