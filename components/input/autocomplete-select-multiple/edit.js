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

var _edit = require('../autocomplete-select/edit');

var _edit2 = _interopRequireDefault(_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Multi-autocomplete with Chip component in edit mode.
 */
var AutocompleteMutipleEdit = (_temp = _class = function (_Component) {
    _inherits(AutocompleteMutipleEdit, _Component);

    /**
     * Class constructor.
     * @param {object} props props given to component.
     */


    /**
     * Component's prop types.
     */
    function AutocompleteMutipleEdit(props) {
        _classCallCheck(this, AutocompleteMutipleEdit);

        var _this = _possibleConstructorReturn(this, (AutocompleteMutipleEdit.__proto__ || Object.getPrototypeOf(AutocompleteMutipleEdit)).call(this, props));

        _this.state = { customError: '' };

        _this.handleOnChange = _this.handleOnChange.bind(_this);
        _this.renderConsult = _this.renderConsult.bind(_this);
        return _this;
    }

    /**
     * Handle update behavior.
     * @param {number} id Identifier.
     */


    /**
     * Component's default props.
     */


    /**
     * Component's display name.
     */


    _createClass(AutocompleteMutipleEdit, [{
        key: 'handleOnChange',
        value: function handleOnChange(id) {
            this.setState({ customError: '' });

            var alreadyIncluded = this.props.value.includes(id);
            if (!alreadyIncluded && id) {
                this.props.onChange(this.props.value.concat([id]));
            } else if (this.props.checkDuplicate && alreadyIncluded) {
                this.setState({ customError: 'input.multiAutocomplete.duplicate' });
            }
        }

        /**
         * Render consult component.
         * @return {ReactElement} markup.
         */

    }, {
        key: 'renderConsult',
        value: function renderConsult() {
            var _this2 = this;

            return _react2.default.createElement(_consult2.default, {
                value: this.props.value,
                keyResolver: this.props.keyResolver,
                readonly: false,
                onChange: function onChange(value) {
                    return _this2.props.onChange(value);
                },
                ChipElement: this.props.ChipElement
            });
        }

        /**
         * Render component.
         * @return {ReactElement} markup.
         */

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                keyResolver = _props.keyResolver,
                querySearcher = _props.querySearcher,
                error = _props.error,
                keyName = _props.keyName,
                labelName = _props.labelName;

            return _react2.default.createElement(
                'div',
                { 'data-focus': 'autocomplete-select-multiple' },
                this.props.position === 'top' && this.renderConsult(),
                _react2.default.createElement(_edit2.default, {
                    customError: this.state.customError || error,
                    keyResolver: keyResolver,
                    keyName: keyName,
                    labelName: labelName,
                    querySearcher: querySearcher,
                    onChange: this.handleOnChange,
                    onSelectClear: true
                }),
                this.props.position === 'bottom' && this.renderConsult()
            );
        }
    }]);

    return AutocompleteMutipleEdit;
}(_react.Component), _class.displayName = 'AutocompleteMutipleEdit', _class.propTypes = {
    value: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
    onChange: _react.PropTypes.func.isRequired,
    keyResolver: _react.PropTypes.func.isRequired,
    querySearcher: _react.PropTypes.func.isRequired,
    checkDuplicate: _react.PropTypes.bool.isRequired,
    error: _react.PropTypes.string,
    ChipElement: _react.PropTypes.any,
    position: _react.PropTypes.oneOf(['top', 'bottom'])
}, _class.defaultProps = {
    value: [],
    checkDuplicate: false,
    error: null,
    ChipElement: undefined,
    position: 'top'
}, _temp);
exports.default = AutocompleteMutipleEdit;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlTXV0aXBsZUVkaXQiLCJwcm9wcyIsInN0YXRlIiwiY3VzdG9tRXJyb3IiLCJoYW5kbGVPbkNoYW5nZSIsImJpbmQiLCJyZW5kZXJDb25zdWx0IiwiaWQiLCJzZXRTdGF0ZSIsImFscmVhZHlJbmNsdWRlZCIsInZhbHVlIiwiaW5jbHVkZXMiLCJvbkNoYW5nZSIsImNvbmNhdCIsImNoZWNrRHVwbGljYXRlIiwia2V5UmVzb2x2ZXIiLCJDaGlwRWxlbWVudCIsInF1ZXJ5U2VhcmNoZXIiLCJlcnJvciIsImtleU5hbWUiLCJsYWJlbE5hbWUiLCJwb3NpdGlvbiIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCIsInN0cmluZyIsImFueSIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLHVCOzs7QUFnQ0Y7Ozs7OztBQXpCQTs7O0FBNkJBLHFDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0pBQ1RBLEtBRFM7O0FBR2YsY0FBS0MsS0FBTCxHQUFhLEVBQUVDLGFBQWEsRUFBZixFQUFiOztBQUVBLGNBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxjQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLE9BQXJCO0FBTmU7QUFPbEI7O0FBRUQ7Ozs7OztBQXhCQTs7Ozs7QUFuQkE7Ozs7Ozs7dUNBK0NlRSxFLEVBQUk7QUFDZixpQkFBS0MsUUFBTCxDQUFjLEVBQUVMLGFBQWEsRUFBZixFQUFkOztBQUVBLGdCQUFNTSxrQkFBbUIsS0FBS1IsS0FBTCxDQUFXUyxLQUFaLENBQW1CQyxRQUFuQixDQUE0QkosRUFBNUIsQ0FBeEI7QUFDQSxnQkFBSSxDQUFDRSxlQUFELElBQW9CRixFQUF4QixFQUE0QjtBQUN4QixxQkFBS04sS0FBTCxDQUFXVyxRQUFYLENBQXFCLEtBQUtYLEtBQUwsQ0FBV1MsS0FBWixDQUFtQkcsTUFBbkIsQ0FBMEIsQ0FBQ04sRUFBRCxDQUExQixDQUFwQjtBQUNILGFBRkQsTUFFTyxJQUFJLEtBQUtOLEtBQUwsQ0FBV2EsY0FBWCxJQUE2QkwsZUFBakMsRUFBa0Q7QUFDckQscUJBQUtELFFBQUwsQ0FBYyxFQUFFTCxhQUFhLG1DQUFmLEVBQWQ7QUFDSDtBQUNKOztBQUVEOzs7Ozs7O3dDQUlnQjtBQUFBOztBQUNaLG1CQUNJLDhCQUFDLGlCQUFEO0FBQ0ksdUJBQU8sS0FBS0YsS0FBTCxDQUFXUyxLQUR0QjtBQUVJLDZCQUFhLEtBQUtULEtBQUwsQ0FBV2MsV0FGNUI7QUFHSSwwQkFBVSxLQUhkO0FBSUksMEJBQVU7QUFBQSwyQkFBUyxPQUFLZCxLQUFMLENBQVdXLFFBQVgsQ0FBb0JGLEtBQXBCLENBQVQ7QUFBQSxpQkFKZDtBQUtJLDZCQUFhLEtBQUtULEtBQUwsQ0FBV2U7QUFMNUIsY0FESjtBQVNIOztBQUVEOzs7Ozs7O2lDQUlTO0FBQUEseUJBQzZELEtBQUtmLEtBRGxFO0FBQUEsZ0JBQ0djLFdBREgsVUFDR0EsV0FESDtBQUFBLGdCQUNnQkUsYUFEaEIsVUFDZ0JBLGFBRGhCO0FBQUEsZ0JBQytCQyxLQUQvQixVQUMrQkEsS0FEL0I7QUFBQSxnQkFDc0NDLE9BRHRDLFVBQ3NDQSxPQUR0QztBQUFBLGdCQUMrQ0MsU0FEL0MsVUFDK0NBLFNBRC9DOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLDhCQUFoQjtBQUNLLHFCQUFLbkIsS0FBTCxDQUFXb0IsUUFBWCxLQUF3QixLQUF4QixJQUFpQyxLQUFLZixhQUFMLEVBRHRDO0FBRUksOENBQUMsY0FBRDtBQUNJLGlDQUFhLEtBQUtKLEtBQUwsQ0FBV0MsV0FBWCxJQUEwQmUsS0FEM0M7QUFFSSxpQ0FBYUgsV0FGakI7QUFHSSw2QkFBU0ksT0FIYjtBQUlJLCtCQUFXQyxTQUpmO0FBS0ksbUNBQWVILGFBTG5CO0FBTUksOEJBQVUsS0FBS2IsY0FObkI7QUFPSTtBQVBKLGtCQUZKO0FBV0sscUJBQUtILEtBQUwsQ0FBV29CLFFBQVgsS0FBd0IsUUFBeEIsSUFBb0MsS0FBS2YsYUFBTDtBQVh6QyxhQURKO0FBZUg7Ozs7RUFqR2lDZ0IsZ0IsVUFLM0JDLFcsR0FBYyx5QixTQUtkQyxTLEdBQVk7QUFDZmQsV0FBT2UsaUJBQVVDLE9BQVYsQ0FBa0JELGlCQUFVRSxNQUE1QixFQUFvQ0MsVUFENUI7QUFFZmhCLGNBQVVhLGlCQUFVSSxJQUFWLENBQWVELFVBRlY7QUFHZmIsaUJBQWFVLGlCQUFVSSxJQUFWLENBQWVELFVBSGI7QUFJZlgsbUJBQWVRLGlCQUFVSSxJQUFWLENBQWVELFVBSmY7QUFLZmQsb0JBQWdCVyxpQkFBVUssSUFBVixDQUFlRixVQUxoQjtBQU1mVixXQUFPTyxpQkFBVU0sTUFORjtBQU9mZixpQkFBYVMsaUJBQVVPLEdBUFI7QUFRZlgsY0FBVUksaUJBQVVRLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELEVBQVEsUUFBUixDQUFoQjtBQVJLLEMsU0FjWkMsWSxHQUFlO0FBQ2xCeEIsV0FBTyxFQURXO0FBRWxCSSxvQkFBZ0IsS0FGRTtBQUdsQkksV0FBTyxJQUhXO0FBSWxCRixpQkFBYW1CLFNBSks7QUFLbEJkLGNBQVU7QUFMUSxDO2tCQTZFWHJCLHVCIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3VsdCBmcm9tICcuL2NvbnN1bHQnO1xuaW1wb3J0IEF1dG9jb21wbGV0ZVNlbGVjdEVkaXQgZnJvbSAnLi4vYXV0b2NvbXBsZXRlLXNlbGVjdC9lZGl0JztcblxuLyoqXG4gKiBNdWx0aS1hdXRvY29tcGxldGUgd2l0aCBDaGlwIGNvbXBvbmVudCBpbiBlZGl0IG1vZGUuXG4gKi9cbmNsYXNzIEF1dG9jb21wbGV0ZU11dGlwbGVFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIENvbXBvbmVudCdzIGRpc3BsYXkgbmFtZS5cbiAgICAgKi9cbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQXV0b2NvbXBsZXRlTXV0aXBsZUVkaXQnO1xuXG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50J3MgcHJvcCB0eXBlcy5cbiAgICAgKi9cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGtleVJlc29sdmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBxdWVyeVNlYXJjaGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBjaGVja0R1cGxpY2F0ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIENoaXBFbGVtZW50OiBQcm9wVHlwZXMuYW55LFxuICAgICAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbSddKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQncyBkZWZhdWx0IHByb3BzLlxuICAgICAqL1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgY2hlY2tEdXBsaWNhdGU6IGZhbHNlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgQ2hpcEVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsYXNzIGNvbnN0cnVjdG9yLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBwcm9wcyBnaXZlbiB0byBjb21wb25lbnQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGN1c3RvbUVycm9yOiAnJyB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlT25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyQ29uc3VsdCA9IHRoaXMucmVuZGVyQ29uc3VsdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB1cGRhdGUgYmVoYXZpb3IuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIElkZW50aWZpZXIuXG4gICAgICovXG4gICAgaGFuZGxlT25DaGFuZ2UoaWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUVycm9yOiAnJyB9KTtcblxuICAgICAgICBjb25zdCBhbHJlYWR5SW5jbHVkZWQgPSAodGhpcy5wcm9wcy52YWx1ZSkuaW5jbHVkZXMoaWQpO1xuICAgICAgICBpZiAoIWFscmVhZHlJbmNsdWRlZCAmJiBpZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSgodGhpcy5wcm9wcy52YWx1ZSkuY29uY2F0KFtpZF0pKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmNoZWNrRHVwbGljYXRlICYmIGFscmVhZHlJbmNsdWRlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1c3RvbUVycm9yOiAnaW5wdXQubXVsdGlBdXRvY29tcGxldGUuZHVwbGljYXRlJyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBjb25zdWx0IGNvbXBvbmVudC5cbiAgICAgKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IG1hcmt1cC5cbiAgICAgKi9cbiAgICByZW5kZXJDb25zdWx0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnN1bHRcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgICAgICBrZXlSZXNvbHZlcj17dGhpcy5wcm9wcy5rZXlSZXNvbHZlcn1cbiAgICAgICAgICAgICAgICByZWFkb25seT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICAgIENoaXBFbGVtZW50PXt0aGlzLnByb3BzLkNoaXBFbGVtZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgY29tcG9uZW50LlxuICAgICAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gbWFya3VwLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBrZXlSZXNvbHZlciwgcXVlcnlTZWFyY2hlciwgZXJyb3IsIGtleU5hbWUsIGxhYmVsTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nYXV0b2NvbXBsZXRlLXNlbGVjdC1tdWx0aXBsZSc+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMucG9zaXRpb24gPT09ICd0b3AnICYmIHRoaXMucmVuZGVyQ29uc3VsdCgpfVxuICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVTZWxlY3RFZGl0XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUVycm9yPXt0aGlzLnN0YXRlLmN1c3RvbUVycm9yIHx8IGVycm9yfVxuICAgICAgICAgICAgICAgICAgICBrZXlSZXNvbHZlcj17a2V5UmVzb2x2ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGtleU5hbWU9e2tleU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsTmFtZT17bGFiZWxOYW1lfVxuICAgICAgICAgICAgICAgICAgICBxdWVyeVNlYXJjaGVyPXtxdWVyeVNlYXJjaGVyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RDbGVhclxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMucG9zaXRpb24gPT09ICdib3R0b20nICYmIHRoaXMucmVuZGVyQ29uc3VsdCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dG9jb21wbGV0ZU11dGlwbGVFZGl0O1xuIl19