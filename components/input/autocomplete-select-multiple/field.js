'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _consult = require('./consult');

var _consult2 = _interopRequireDefault(_consult);

var _edit = require('./edit');

var _edit2 = _interopRequireDefault(_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Multi-autocomplete with Chip component.
 */
var MultiAutocomplete = (_temp = _class = function (_Component) {
    _inherits(MultiAutocomplete, _Component);

    /**
     * Class constructor.
     * @param {object} props props.
     */


    /**
     * Component's prop types.
     */
    function MultiAutocomplete(props) {
        _classCallCheck(this, MultiAutocomplete);

        var _this = _possibleConstructorReturn(this, (MultiAutocomplete.__proto__ || Object.getPrototypeOf(MultiAutocomplete)).call(this, props));

        _this.getValue = _this.getValue.bind(_this);
        _this.validate = _this.validate.bind(_this);
        _this.renderEdit = _this.renderEdit.bind(_this);
        _this.renderConsult = _this.renderConsult.bind(_this);
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


    _createClass(MultiAutocomplete, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var value = _ref.value;

            this.setState({ value: value });
        }

        /**
         * Returns value.
         * @return {array} current value.
         */

    }, {
        key: 'getValue',
        value: function getValue() {
            return this.props.value;
        }

        /**
         * Validate component state.
         */

    }, {
        key: 'validate',
        value: function validate() {
            // do nothing, validation is done at each selection
            var isRequired = this.props.isRequired;

            return {
                isValid: !isRequired || this.props.value && this.props.value.length > 0,
                message: 'field.required'
            };
        }

        /**
         * Render in consult mode.
         * @return {ReactElement} markup.
         */

    }, {
        key: 'renderConsult',
        value: function renderConsult() {
            var _props = this.props,
                value = _props.value,
                keyResolver = _props.keyResolver,
                keyName = _props.keyName,
                labelName = _props.labelName;


            return _react2.default.createElement(_consult2.default, {
                value: value,
                keyResolver: keyResolver,
                keyName: keyName,
                labelName: labelName,
                readonly: true
            });
        }

        /**
         * Render in edit mode.
         * @return {ReactElement} markup.
         */

    }, {
        key: 'renderEdit',
        value: function renderEdit() {
            var _props2 = this.props,
                keyResolver = _props2.keyResolver,
                querySearcher = _props2.querySearcher,
                onChange = _props2.onChange,
                checkDuplicate = _props2.checkDuplicate,
                position = _props2.position,
                ChipElement = _props2.ChipElement,
                keyName = _props2.keyName,
                labelName = _props2.labelName;


            return _react2.default.createElement(_edit2.default, {
                value: this.props.value,
                readonly: false,
                keyResolver: keyResolver,
                querySearcher: querySearcher,
                onChange: onChange,
                checkDuplicate: checkDuplicate,
                position: position,
                ChipElement: ChipElement,
                keyName: keyName,
                labelName: labelName
            });
        }

        /**
         * Render component.
         * @return {ReactElement} markup.
         */

    }, {
        key: 'render',
        value: function render() {
            return this.props.isEdit ? this.renderEdit() : this.renderConsult();
        }
    }]);

    return MultiAutocomplete;
}(_react.Component), _class.displayName = 'MultiAutocomplete', _class.propTypes = {
    value: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
    isEdit: _react.PropTypes.bool.isRequired,
    keyResolver: _react.PropTypes.func.isRequired,
    querySearcher: _react.PropTypes.func.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    checkDuplicate: _react.PropTypes.bool,
    ChipElement: _react.PropTypes.any,
    position: _react.PropTypes.oneOf(['top', 'bottom'])
}, _class.defaultProps = {
    checkDuplicate: false,
    ChipElement: undefined,
    position: 'top'
}, _temp);
exports.default = MultiAutocomplete;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiTXVsdGlBdXRvY29tcGxldGUiLCJwcm9wcyIsImdldFZhbHVlIiwiYmluZCIsInZhbGlkYXRlIiwicmVuZGVyRWRpdCIsInJlbmRlckNvbnN1bHQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiaXNSZXF1aXJlZCIsImlzVmFsaWQiLCJsZW5ndGgiLCJtZXNzYWdlIiwia2V5UmVzb2x2ZXIiLCJrZXlOYW1lIiwibGFiZWxOYW1lIiwicXVlcnlTZWFyY2hlciIsIm9uQ2hhbmdlIiwiY2hlY2tEdXBsaWNhdGUiLCJwb3NpdGlvbiIsIkNoaXBFbGVtZW50IiwiaXNFZGl0IiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJhbnkiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxpQjs7O0FBOEJGOzs7Ozs7QUF2QkE7OztBQTJCQSwrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNUQSxLQURTOztBQUdmLGNBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQsT0FBaEI7QUFDQSxjQUFLRSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JGLElBQWhCLE9BQWxCO0FBQ0EsY0FBS0csYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSCxJQUFuQixPQUFyQjtBQU5lO0FBT2xCOztBQUVEOzs7OztBQXRCQTs7Ozs7QUFuQkE7Ozs7Ozs7d0RBNENxQztBQUFBLGdCQUFUSSxLQUFTLFFBQVRBLEtBQVM7O0FBQ2pDLGlCQUFLQyxRQUFMLENBQWMsRUFBRUQsWUFBRixFQUFkO0FBQ0g7O0FBRUQ7Ozs7Ozs7bUNBSVc7QUFDUCxtQkFBTyxLQUFLTixLQUFMLENBQVdNLEtBQWxCO0FBQ0g7O0FBRUQ7Ozs7OzttQ0FHVztBQUNQO0FBRE8sZ0JBRUNFLFVBRkQsR0FFZ0IsS0FBS1IsS0FGckIsQ0FFQ1EsVUFGRDs7QUFHUCxtQkFBUTtBQUNKQyx5QkFBUyxDQUFDRCxVQUFELElBQWdCLEtBQUtSLEtBQUwsQ0FBV00sS0FBWCxJQUFvQixLQUFLTixLQUFMLENBQVdNLEtBQVgsQ0FBaUJJLE1BQWpCLEdBQTBCLENBRG5FO0FBRUpDLHlCQUFTO0FBRkwsYUFBUjtBQUtIOztBQUVEOzs7Ozs7O3dDQUlnQjtBQUFBLHlCQUN1QyxLQUFLWCxLQUQ1QztBQUFBLGdCQUNKTSxLQURJLFVBQ0pBLEtBREk7QUFBQSxnQkFDR00sV0FESCxVQUNHQSxXQURIO0FBQUEsZ0JBQ2dCQyxPQURoQixVQUNnQkEsT0FEaEI7QUFBQSxnQkFDeUJDLFNBRHpCLFVBQ3lCQSxTQUR6Qjs7O0FBR1osbUJBQ0ksOEJBQUMsaUJBQUQ7QUFDSSx1QkFBT1IsS0FEWDtBQUVJLDZCQUFhTSxXQUZqQjtBQUdJLHlCQUFTQyxPQUhiO0FBSUksMkJBQVdDLFNBSmY7QUFLSTtBQUxKLGNBREo7QUFTSDs7QUFFRDs7Ozs7OztxQ0FJYTtBQUFBLDBCQUNtRyxLQUFLZCxLQUR4RztBQUFBLGdCQUNEWSxXQURDLFdBQ0RBLFdBREM7QUFBQSxnQkFDWUcsYUFEWixXQUNZQSxhQURaO0FBQUEsZ0JBQzJCQyxRQUQzQixXQUMyQkEsUUFEM0I7QUFBQSxnQkFDcUNDLGNBRHJDLFdBQ3FDQSxjQURyQztBQUFBLGdCQUNxREMsUUFEckQsV0FDcURBLFFBRHJEO0FBQUEsZ0JBQytEQyxXQUQvRCxXQUMrREEsV0FEL0Q7QUFBQSxnQkFDNEVOLE9BRDVFLFdBQzRFQSxPQUQ1RTtBQUFBLGdCQUNxRkMsU0FEckYsV0FDcUZBLFNBRHJGOzs7QUFHVCxtQkFDSSw4QkFBQyxjQUFEO0FBQ0ksdUJBQU8sS0FBS2QsS0FBTCxDQUFXTSxLQUR0QjtBQUVJLDBCQUFVLEtBRmQ7QUFHSSw2QkFBYU0sV0FIakI7QUFJSSwrQkFBZUcsYUFKbkI7QUFLSSwwQkFBVUMsUUFMZDtBQU1JLGdDQUFnQkMsY0FOcEI7QUFPSSwwQkFBVUMsUUFQZDtBQVFJLDZCQUFhQyxXQVJqQjtBQVNJLHlCQUFTTixPQVRiO0FBVUksMkJBQVdDO0FBVmYsY0FESjtBQWNIOztBQUVEOzs7Ozs7O2lDQUlTO0FBQ0wsbUJBQU8sS0FBS2QsS0FBTCxDQUFXb0IsTUFBWCxHQUFvQixLQUFLaEIsVUFBTCxFQUFwQixHQUF3QyxLQUFLQyxhQUFMLEVBQS9DO0FBQ0g7Ozs7RUF0SDJCZ0IsZ0IsVUFLckJDLFcsR0FBYyxtQixTQUtkQyxTLEdBQVk7QUFDZmpCLFdBQU9rQixpQkFBVUMsT0FBVixDQUFrQkQsaUJBQVVFLE1BQTVCLEVBQW9DbEIsVUFENUI7QUFFZlksWUFBUUksaUJBQVVHLElBQVYsQ0FBZW5CLFVBRlI7QUFHZkksaUJBQWFZLGlCQUFVSSxJQUFWLENBQWVwQixVQUhiO0FBSWZPLG1CQUFlUyxpQkFBVUksSUFBVixDQUFlcEIsVUFKZjtBQUtmUSxjQUFVUSxpQkFBVUksSUFBVixDQUFlcEIsVUFMVjtBQU1mUyxvQkFBZ0JPLGlCQUFVRyxJQU5YO0FBT2ZSLGlCQUFhSyxpQkFBVUssR0FQUjtBQVFmWCxjQUFVTSxpQkFBVU0sS0FBVixDQUFnQixDQUFDLEtBQUQsRUFBUSxRQUFSLENBQWhCO0FBUkssQyxTQWNaQyxZLEdBQWU7QUFDbEJkLG9CQUFnQixLQURFO0FBRWxCRSxpQkFBYWEsU0FGSztBQUdsQmQsY0FBVTtBQUhRLEM7a0JBa0dYbkIsaUIiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnN1bHQgZnJvbSAnLi9jb25zdWx0JztcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0JztcclxuXHJcbi8qKlxyXG4gKiBNdWx0aS1hdXRvY29tcGxldGUgd2l0aCBDaGlwIGNvbXBvbmVudC5cclxuICovXHJcbmNsYXNzIE11bHRpQXV0b2NvbXBsZXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXBvbmVudCdzIGRpc3BsYXkgbmFtZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ011bHRpQXV0b2NvbXBsZXRlJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXBvbmVudCdzIHByb3AgdHlwZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaXNFZGl0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGtleVJlc29sdmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIHF1ZXJ5U2VhcmNoZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY2hlY2tEdXBsaWNhdGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIENoaXBFbGVtZW50OiBQcm9wVHlwZXMuYW55LFxyXG4gICAgICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd0b3AnLCAnYm90dG9tJ10pXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcG9uZW50J3MgZGVmYXVsdCBwcm9wcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBjaGVja0R1cGxpY2F0ZTogZmFsc2UsXHJcbiAgICAgICAgQ2hpcEVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCdcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGFzcyBjb25zdHJ1Y3Rvci5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBwcm9wcy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VmFsdWUgPSB0aGlzLmdldFZhbHVlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZSA9IHRoaXMudmFsaWRhdGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbmRlckVkaXQgPSB0aGlzLnJlbmRlckVkaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbnN1bHQgPSB0aGlzLnJlbmRlckNvbnN1bHQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbmhlcml0ZG9jXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyB2YWx1ZSB9KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB2YWx1ZS5cclxuICAgICAqIEByZXR1cm4ge2FycmF5fSBjdXJyZW50IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBnZXRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIGNvbXBvbmVudCBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGUoKSB7XHJcbiAgICAgICAgLy8gZG8gbm90aGluZywgdmFsaWRhdGlvbiBpcyBkb25lIGF0IGVhY2ggc2VsZWN0aW9uXHJcbiAgICAgICAgY29uc3QgeyBpc1JlcXVpcmVkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiAhaXNSZXF1aXJlZCB8fCAodGhpcy5wcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLnZhbHVlLmxlbmd0aCA+IDApLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnZmllbGQucmVxdWlyZWQnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIGluIGNvbnN1bHQgbW9kZS5cclxuICAgICAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gbWFya3VwLlxyXG4gICAgICovXHJcbiAgICByZW5kZXJDb25zdWx0KCkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGtleVJlc29sdmVyLCBrZXlOYW1lLCBsYWJlbE5hbWUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb25zdWx0XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBrZXlSZXNvbHZlcj17a2V5UmVzb2x2ZXJ9XHJcbiAgICAgICAgICAgICAgICBrZXlOYW1lPXtrZXlOYW1lfVxyXG4gICAgICAgICAgICAgICAgbGFiZWxOYW1lPXtsYWJlbE5hbWV9XHJcbiAgICAgICAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgaW4gZWRpdCBtb2RlLlxyXG4gICAgICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBtYXJrdXAuXHJcbiAgICAgKi9cclxuICAgIHJlbmRlckVkaXQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBrZXlSZXNvbHZlciwgcXVlcnlTZWFyY2hlciwgb25DaGFuZ2UsIGNoZWNrRHVwbGljYXRlLCBwb3NpdGlvbiwgQ2hpcEVsZW1lbnQsIGtleU5hbWUsIGxhYmVsTmFtZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEVkaXRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAga2V5UmVzb2x2ZXI9e2tleVJlc29sdmVyfVxyXG4gICAgICAgICAgICAgICAgcXVlcnlTZWFyY2hlcj17cXVlcnlTZWFyY2hlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGNoZWNrRHVwbGljYXRlPXtjaGVja0R1cGxpY2F0ZX1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgIENoaXBFbGVtZW50PXtDaGlwRWxlbWVudH1cclxuICAgICAgICAgICAgICAgIGtleU5hbWU9e2tleU5hbWV9XHJcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWU9e2xhYmVsTmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIGNvbXBvbmVudC5cclxuICAgICAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gbWFya3VwLlxyXG4gICAgICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXNFZGl0ID8gdGhpcy5yZW5kZXJFZGl0KCkgOiB0aGlzLnJlbmRlckNvbnN1bHQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11bHRpQXV0b2NvbXBsZXRlOyJdfQ==