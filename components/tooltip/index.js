'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //dependencies


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _material = require('../../behaviours/material');

var _material2 = _interopRequireDefault(_material);

var _translation = require('../../behaviours/translation');

var _translation2 = _interopRequireDefault(_translation);

var _filterHtmlAttributes = require('../../utils/filter-html-attributes');

var _filterHtmlAttributes2 = _interopRequireDefault(_filterHtmlAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component's props
 */
var propTypes = {
    position: _react.PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
    isLarge: _react.PropTypes.bool,
    label: _react.PropTypes.string.isRequired,
    htmlFor: _react.PropTypes.string.isRequired
};

/**
 * Component default Props
 */
var defaultProps = {
    position: 'bottom',
    isLarge: false
};

/**
* Tooltip Component.
*/
var Tooltip = (_dec = (0, _material2.default)('materialTooltip'), _dec(_class = (0, _translation2.default)(_class = function (_PureComponent) {
    _inherits(Tooltip, _PureComponent);

    function Tooltip() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Tooltip);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.buildClassname = function () {
            var _this$props = _this.props,
                isLarge = _this$props.isLarge,
                position = _this$props.position;

            var tooltipLarge = isLarge === true ? ' mdl-tooltip--large' : '';
            return ' mdl-tooltip mdl-tooltip--' + position + tooltipLarge;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Builds the tooltip's className
     * @return {string} The built classname
     */


    _createClass(Tooltip, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                className = _props.className,
                htmlFor = _props.htmlFor,
                others = _objectWithoutProperties(_props, ['label', 'className', 'htmlFor']);

            var renderedClassName = '' + (className ? className : '') + this.buildClassname();
            var tooltipProps = Object.assign({}, (0, _filterHtmlAttributes2.default)(others), { htmlFor: htmlFor, className: renderedClassName });

            return _react2.default.createElement(
                'div',
                Object.assign({ 'data-focus': 'tooltip', ref: 'materialTooltip' }, tooltipProps),
                _react2.default.createElement(
                    'span',
                    { className: 'tooltip-text' },
                    this.i18n(label)
                )
            );
        }
    }]);

    return Tooltip;
}(_react.PureComponent)) || _class) || _class);


Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

exports.default = Tooltip;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwicG9zaXRpb24iLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzTGFyZ2UiLCJib29sIiwibGFiZWwiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiaHRtbEZvciIsImRlZmF1bHRQcm9wcyIsIlRvb2x0aXAiLCJUcmFuc2xhdGlvbiIsImJ1aWxkQ2xhc3NuYW1lIiwicHJvcHMiLCJ0b29sdGlwTGFyZ2UiLCJjbGFzc05hbWUiLCJvdGhlcnMiLCJyZW5kZXJlZENsYXNzTmFtZSIsInRvb2x0aXBQcm9wcyIsImkxOG4iLCJQdXJlQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0FBR0EsSUFBTUEsWUFBWTtBQUNkQyxjQUFVQyxpQkFBVUMsS0FBVixDQUFnQixDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLENBQWhCLENBREk7QUFFZEMsYUFBU0YsaUJBQVVHLElBRkw7QUFHZEMsV0FBT0osaUJBQVVLLE1BQVYsQ0FBaUJDLFVBSFY7QUFJZEMsYUFBU1AsaUJBQVVLLE1BQVYsQ0FBaUJDO0FBSlosQ0FBbEI7O0FBT0E7OztBQUdBLElBQU1FLGVBQWU7QUFDakJULGNBQVUsUUFETztBQUVqQkcsYUFBUztBQUZRLENBQXJCOztBQUtBOzs7SUFLTU8sTyxXQUZMLHdCQUFZLGlCQUFaLEMsb0JBQ0FDLHFCOzs7Ozs7Ozs7Ozs7Ozs0TEFPR0MsYyxHQUFpQixZQUFNO0FBQUEsOEJBQ1csTUFBS0MsS0FEaEI7QUFBQSxnQkFDWFYsT0FEVyxlQUNYQSxPQURXO0FBQUEsZ0JBQ0ZILFFBREUsZUFDRkEsUUFERTs7QUFFbkIsZ0JBQUljLGVBQWVYLFlBQVksSUFBWixHQUFtQixxQkFBbkIsR0FBMkMsRUFBOUQ7QUFDQSxrREFBb0NILFFBQXBDLEdBQStDYyxZQUEvQztBQUNILFM7OztBQVJEOzs7Ozs7OztpQ0FVUztBQUFBLHlCQUM0QyxLQUFLRCxLQURqRDtBQUFBLGdCQUNHUixLQURILFVBQ0dBLEtBREg7QUFBQSxnQkFDVVUsU0FEVixVQUNVQSxTQURWO0FBQUEsZ0JBQ3FCUCxPQURyQixVQUNxQkEsT0FEckI7QUFBQSxnQkFDaUNRLE1BRGpDOztBQUVMLGdCQUFNQywwQkFBdUJGLFlBQVlBLFNBQVosR0FBd0IsRUFBL0MsSUFBb0QsS0FBS0gsY0FBTCxFQUExRDtBQUNBLGdCQUFNTSxpQ0FBb0Isb0NBQVlGLE1BQVosQ0FBcEIsSUFBeUNSLGdCQUF6QyxFQUFrRE8sV0FBV0UsaUJBQTdELEdBQU47O0FBRUEsbUJBQ0k7QUFBQTtBQUFBLGdDQUFLLGNBQVcsU0FBaEIsRUFBMEIsS0FBSSxpQkFBOUIsSUFBb0RDLFlBQXBEO0FBQ0k7QUFBQTtBQUFBLHNCQUFNLFdBQVUsY0FBaEI7QUFBZ0MseUJBQUtDLElBQUwsQ0FBVWQsS0FBVjtBQUFoQztBQURKLGFBREo7QUFLSDs7OztFQXRCaUJlLG9COzs7QUF5QnRCVixRQUFRVyxXQUFSLEdBQXNCLFNBQXRCO0FBQ0FYLFFBQVFYLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0FXLFFBQVFELFlBQVIsR0FBdUJBLFlBQXZCOztrQkFFZUMsTyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZXBlbmRlbmNpZXNcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTURCZWhhdmlvdXIgZnJvbSAnLi4vLi4vYmVoYXZpb3Vycy9tYXRlcmlhbCc7XG5pbXBvcnQgVHJhbnNsYXRpb24gZnJvbSAnLi4vLi4vYmVoYXZpb3Vycy90cmFuc2xhdGlvbic7XG5pbXBvcnQgZmlsdGVyUHJvcHMgZnJvbSAnLi4vLi4vdXRpbHMvZmlsdGVyLWh0bWwtYXR0cmlidXRlcydcblxuLyoqXG4gKiBDb21wb25lbnQncyBwcm9wc1xuICovXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdsZWZ0JywgJ2JvdHRvbScsICdyaWdodCddKSxcbiAgICBpc0xhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGh0bWxGb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuLyoqXG4gKiBDb21wb25lbnQgZGVmYXVsdCBQcm9wc1xuICovXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgIGlzTGFyZ2U6IGZhbHNlXG59O1xuXG4vKipcbiogVG9vbHRpcCBDb21wb25lbnQuXG4qL1xuQE1EQmVoYXZpb3VyKCdtYXRlcmlhbFRvb2x0aXAnKVxuQFRyYW5zbGF0aW9uXG5jbGFzcyBUb29sdGlwIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgdGhlIHRvb2x0aXAncyBjbGFzc05hbWVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBidWlsdCBjbGFzc25hbWVcbiAgICAgKi9cbiAgICBidWlsZENsYXNzbmFtZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBpc0xhcmdlLCBwb3NpdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHRvb2x0aXBMYXJnZSA9IGlzTGFyZ2UgPT09IHRydWUgPyAnIG1kbC10b29sdGlwLS1sYXJnZScgOiAnJztcbiAgICAgICAgcmV0dXJuIGAgbWRsLXRvb2x0aXAgbWRsLXRvb2x0aXAtLSR7cG9zaXRpb259JHt0b29sdGlwTGFyZ2V9YDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGNsYXNzTmFtZSwgaHRtbEZvciwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCByZW5kZXJlZENsYXNzTmFtZSA9IGAke2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnfSR7dGhpcy5idWlsZENsYXNzbmFtZSgpfWA7XG4gICAgICAgIGNvbnN0IHRvb2x0aXBQcm9wcyA9IHsgLi4uZmlsdGVyUHJvcHMob3RoZXJzKSwgaHRtbEZvciwgY2xhc3NOYW1lOiByZW5kZXJlZENsYXNzTmFtZSB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J3Rvb2x0aXAnIHJlZj0nbWF0ZXJpYWxUb29sdGlwJyB7Li4udG9vbHRpcFByb3BzfSA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0b29sdGlwLXRleHQnPnt0aGlzLmkxOG4obGFiZWwpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVG9vbHRpcC5kaXNwbGF5TmFtZSA9ICdUb29sdGlwJztcblRvb2x0aXAucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0=