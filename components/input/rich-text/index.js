'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRte = require('react-rte');

var _reactRte2 = _interopRequireDefault(_reactRte);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// FIX ME cannot import RichTextEditor from 'react-rte/lib/RichTextEditor';
// Due to use of CSS modules

/**
 * Rich text editor, for both edition and consult mode.
 * See https://github.com/sstur/react-rte for more details and options. 
 * 
 * @class RichTextField
 * @extends {Component}
 */
var RichTextField = (_temp = _class = function (_Component) {
    _inherits(RichTextField, _Component);

    /**
     * Creates an instance of RichTextField.
     * @param {any} props props from parent
     * @memberof RichTextField
     */
    function RichTextField(props) {
        _classCallCheck(this, RichTextField);

        var _this = _possibleConstructorReturn(this, (RichTextField.__proto__ || Object.getPrototypeOf(RichTextField)).call(this, props));

        var _this$props = _this.props,
            value = _this$props.value,
            language = _this$props.language;

        _this.state = {
            value: _this.buildValue(value, language)
        };

        _this.onChange = _this.onChange.bind(_this);
        _this.forceChange = _this.forceChange.bind(_this);
        return _this;
    }

    /** @inheritdoc */


    _createClass(RichTextField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var value = _ref.value,
                language = _ref.language;

            // We are only listening to first value, else we have cursor issue in edit mode
            if (value && !this.props.value) {
                this.forceChange(value, language);
            }
        }

        /**
         * Build Value for the editor from a string value and the markup type.
         * 
         * @param {string} strValue the value
         * @param {string} language the markup
         * @returns {object} a value for the editor
         * @memberof RichTextField
         */

    }, {
        key: 'buildValue',
        value: function buildValue(strValue, language) {
            return strValue ? _reactRte2.default.createValueFromString(strValue, language) : _reactRte2.default.createEmptyValue();
        }

        /**
         * Method to forcibly change content of editor, if it already have value.
         * 
         * @param {string} value new value for editor content
         * @param {string} language the markuo to use (html, markdown)
         * @memberof RichTextField
         */

    }, {
        key: 'forceChange',
        value: function forceChange(value, language) {
            this.setState({
                value: this.buildValue(value, language)
            });
        }

        /**
         * Inner onchange on the component, to avoid cursor issue for this component and to return string value.
         * 
         * @param {object} value Value returned by the RTE component
         * @memberof RichTextField
         */

    }, {
        key: 'onChange',
        value: function onChange(value) {
            this.setState({ value: value });
            if (this.props.onChange) {
                this.props.onChange(value.toString(this.props.language));
            }
        }

        /** @inheritdoc */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactRte2.default, Object.assign({}, this.props, {
                    value: this.state.value,
                    onChange: this.onChange,
                    readOnly: !this.props.isEdit
                }))
            );
        }
    }]);

    return RichTextField;
}(_react.Component), _class.propTypes = {
    onChange: _react.PropTypes.func.isRequired,
    value: _react.PropTypes.string.isRequired,
    language: _react.PropTypes.oneOf('html', 'markdown'),
    isEdit: _react.PropTypes.bool.isRequired
}, _class.defaultProps = {
    language: 'markdown'
}, _temp);
exports.default = RichTextField;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiUmljaFRleHRGaWVsZCIsInByb3BzIiwidmFsdWUiLCJsYW5ndWFnZSIsInN0YXRlIiwiYnVpbGRWYWx1ZSIsIm9uQ2hhbmdlIiwiYmluZCIsImZvcmNlQ2hhbmdlIiwic3RyVmFsdWUiLCJSaWNoVGV4dEVkaXRvciIsImNyZWF0ZVZhbHVlRnJvbVN0cmluZyIsImNyZWF0ZUVtcHR5VmFsdWUiLCJzZXRTdGF0ZSIsInRvU3RyaW5nIiwiaXNFZGl0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0lBT01BLGE7OztBQVlGOzs7OztBQUtBLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1RBLEtBRFM7O0FBQUEsMEJBRWEsTUFBS0EsS0FGbEI7QUFBQSxZQUVQQyxLQUZPLGVBRVBBLEtBRk87QUFBQSxZQUVBQyxRQUZBLGVBRUFBLFFBRkE7O0FBR2YsY0FBS0MsS0FBTCxHQUFhO0FBQ1RGLG1CQUFPLE1BQUtHLFVBQUwsQ0FBZ0JILEtBQWhCLEVBQXVCQyxRQUF2QjtBQURFLFNBQWI7O0FBSUEsY0FBS0csUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFDQSxjQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBUmU7QUFTbEI7O0FBRUQ7Ozs7O3dEQUMrQztBQUFBLGdCQUFuQkwsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsZ0JBQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDM0M7QUFDQSxnQkFBSUQsU0FBUyxDQUFDLEtBQUtELEtBQUwsQ0FBV0MsS0FBekIsRUFBZ0M7QUFDNUIscUJBQUtNLFdBQUwsQ0FBaUJOLEtBQWpCLEVBQXdCQyxRQUF4QjtBQUNIO0FBQ0o7O0FBRUQ7Ozs7Ozs7Ozs7O21DQVFXTSxRLEVBQVVOLFEsRUFBVTtBQUMzQixtQkFBT00sV0FBV0MsbUJBQWVDLHFCQUFmLENBQXFDRixRQUFyQyxFQUErQ04sUUFBL0MsQ0FBWCxHQUFzRU8sbUJBQWVFLGdCQUFmLEVBQTdFO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7b0NBT1lWLEssRUFBT0MsUSxFQUFVO0FBQ3pCLGlCQUFLVSxRQUFMLENBQWM7QUFDVlgsdUJBQU8sS0FBS0csVUFBTCxDQUFnQkgsS0FBaEIsRUFBdUJDLFFBQXZCO0FBREcsYUFBZDtBQUdIOztBQUVEOzs7Ozs7Ozs7aUNBTVNELEssRUFBTztBQUNaLGlCQUFLVyxRQUFMLENBQWMsRUFBRVgsWUFBRixFQUFkO0FBQ0EsZ0JBQUksS0FBS0QsS0FBTCxDQUFXSyxRQUFmLEVBQXlCO0FBQ3JCLHFCQUFLTCxLQUFMLENBQVdLLFFBQVgsQ0FBb0JKLE1BQU1ZLFFBQU4sQ0FBZSxLQUFLYixLQUFMLENBQVdFLFFBQTFCLENBQXBCO0FBQ0g7QUFDSjs7QUFFRDs7OztpQ0FDUztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJLDhDQUFDLGtCQUFELG9CQUNRLEtBQUtGLEtBRGI7QUFFSSwyQkFBTyxLQUFLRyxLQUFMLENBQVdGLEtBRnRCO0FBR0ksOEJBQVUsS0FBS0ksUUFIbkI7QUFJSSw4QkFBVSxDQUFDLEtBQUtMLEtBQUwsQ0FBV2M7QUFKMUI7QUFESixhQURKO0FBVUg7Ozs7RUF0RnVCQyxnQixVQUNqQkMsUyxHQUFZO0FBQ2ZYLGNBQVVZLGlCQUFVQyxJQUFWLENBQWVDLFVBRFY7QUFFZmxCLFdBQU9nQixpQkFBVUcsTUFBVixDQUFpQkQsVUFGVDtBQUdmakIsY0FBVWUsaUJBQVVJLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsVUFBeEIsQ0FISztBQUlmUCxZQUFRRyxpQkFBVUssSUFBVixDQUFlSDtBQUpSLEMsU0FPWkksWSxHQUFlO0FBQ2xCckIsY0FBVTtBQURRLEM7a0JBaUZYSCxhIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICdyZWFjdC1ydGUnO1xyXG4vLyBGSVggTUUgY2Fubm90IGltcG9ydCBSaWNoVGV4dEVkaXRvciBmcm9tICdyZWFjdC1ydGUvbGliL1JpY2hUZXh0RWRpdG9yJztcclxuLy8gRHVlIHRvIHVzZSBvZiBDU1MgbW9kdWxlc1xyXG5cclxuLyoqXHJcbiAqIFJpY2ggdGV4dCBlZGl0b3IsIGZvciBib3RoIGVkaXRpb24gYW5kIGNvbnN1bHQgbW9kZS5cclxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zc3R1ci9yZWFjdC1ydGUgZm9yIG1vcmUgZGV0YWlscyBhbmQgb3B0aW9ucy4gXHJcbiAqIFxyXG4gKiBAY2xhc3MgUmljaFRleHRGaWVsZFxyXG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxyXG4gKi9cclxuY2xhc3MgUmljaFRleHRGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5vbmVPZignaHRtbCcsICdtYXJrZG93bicpLFxyXG4gICAgICAgIGlzRWRpdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGxhbmd1YWdlOiAnbWFya2Rvd24nXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSaWNoVGV4dEZpZWxkLlxyXG4gICAgICogQHBhcmFtIHthbnl9IHByb3BzIHByb3BzIGZyb20gcGFyZW50XHJcbiAgICAgKiBAbWVtYmVyb2YgUmljaFRleHRGaWVsZFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBjb25zdCB7IHZhbHVlLCBsYW5ndWFnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5idWlsZFZhbHVlKHZhbHVlLCBsYW5ndWFnZSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VDaGFuZ2UgPSB0aGlzLmZvcmNlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgdmFsdWUsIGxhbmd1YWdlIH0pIHtcclxuICAgICAgICAvLyBXZSBhcmUgb25seSBsaXN0ZW5pbmcgdG8gZmlyc3QgdmFsdWUsIGVsc2Ugd2UgaGF2ZSBjdXJzb3IgaXNzdWUgaW4gZWRpdCBtb2RlXHJcbiAgICAgICAgaWYgKHZhbHVlICYmICF0aGlzLnByb3BzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VDaGFuZ2UodmFsdWUsIGxhbmd1YWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZCBWYWx1ZSBmb3IgdGhlIGVkaXRvciBmcm9tIGEgc3RyaW5nIHZhbHVlIGFuZCB0aGUgbWFya3VwIHR5cGUuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJWYWx1ZSB0aGUgdmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSB0aGUgbWFya3VwXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBhIHZhbHVlIGZvciB0aGUgZWRpdG9yXHJcbiAgICAgKiBAbWVtYmVyb2YgUmljaFRleHRGaWVsZFxyXG4gICAgICovXHJcbiAgICBidWlsZFZhbHVlKHN0clZhbHVlLCBsYW5ndWFnZSkge1xyXG4gICAgICAgIHJldHVybiBzdHJWYWx1ZSA/IFJpY2hUZXh0RWRpdG9yLmNyZWF0ZVZhbHVlRnJvbVN0cmluZyhzdHJWYWx1ZSwgbGFuZ3VhZ2UpIDogUmljaFRleHRFZGl0b3IuY3JlYXRlRW1wdHlWYWx1ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXRob2QgdG8gZm9yY2libHkgY2hhbmdlIGNvbnRlbnQgb2YgZWRpdG9yLCBpZiBpdCBhbHJlYWR5IGhhdmUgdmFsdWUuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBuZXcgdmFsdWUgZm9yIGVkaXRvciBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgdGhlIG1hcmt1byB0byB1c2UgKGh0bWwsIG1hcmtkb3duKVxyXG4gICAgICogQG1lbWJlcm9mIFJpY2hUZXh0RmllbGRcclxuICAgICAqL1xyXG4gICAgZm9yY2VDaGFuZ2UodmFsdWUsIGxhbmd1YWdlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmJ1aWxkVmFsdWUodmFsdWUsIGxhbmd1YWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbm5lciBvbmNoYW5nZSBvbiB0aGUgY29tcG9uZW50LCB0byBhdm9pZCBjdXJzb3IgaXNzdWUgZm9yIHRoaXMgY29tcG9uZW50IGFuZCB0byByZXR1cm4gc3RyaW5nIHZhbHVlLlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgVmFsdWUgcmV0dXJuZWQgYnkgdGhlIFJURSBjb21wb25lbnRcclxuICAgICAqIEBtZW1iZXJvZiBSaWNoVGV4dEZpZWxkXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUudG9TdHJpbmcodGhpcy5wcm9wcy5sYW5ndWFnZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJpY2hUZXh0RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyF0aGlzLnByb3BzLmlzRWRpdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJpY2hUZXh0RmllbGQ7Il19