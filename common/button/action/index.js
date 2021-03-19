'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _translation = require('sagess-core/translation');

var _stylable = require('../../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

var _mdlBehaviour = require('../../mixin/mdl-behaviour');

var _mdlBehaviour2 = _interopRequireDefault(_mdlBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BTN_JS = 'mdl-js-button';
var BTN_CLASS = 'mdl-button';
var BUTTON_PRFX = 'mdl-button--';
var RIPPLE_EFFECT = 'mdl-js-ripple-effect';

var propTypes = {
    id: _react.PropTypes.string,
    label: _react.PropTypes.string,
    handleOnClick: _react.PropTypes.func,
    type: _react.PropTypes.oneOf(['submit', 'button']),
    shape: _react.PropTypes.oneOf([undefined, 'raised', 'fab', 'icon', 'mini-fab']),
    color: _react.PropTypes.oneOf([undefined, 'colored', 'primary', 'accent']),
    hasRipple: _react.PropTypes.bool,
    isJs: _react.PropTypes.bool,
    icon: _react.PropTypes.string,
    iconLibrary: _react.PropTypes.oneOf(['material', 'font-awesome', 'font-custom'])
};

/**
* Mixin button.
* @type {Object}
*/
var buttonMixin = {
    /** inheritedDoc */
    mixins: [_stylable2.default, _mdlBehaviour2.default],
    displayName: 'Button',
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents v0.15: the \'Button\' component from SagessComponents.common is deprecated, please use SagessComponents.components.Button');
    },

    /** inheritedDoc */
    getDefaultProps: function getDefaultProps() {
        return {
            type: 'submit',
            shape: 'raised',
            label: '',
            icon: null,
            id: '',
            hasRipple: false,
            isJs: false,
            iconLibrary: 'material'
        };
    },

    propTypes: propTypes,
    /**
    * Handle click event.
    * @return {Object} - Action call.
    */
    handleOnClick: function handleOnClick() {
        var handleOnClick = this.props.handleOnClick;

        if (handleOnClick) {
            return handleOnClick.apply(this, arguments);
        }
    },

    /**
    * Date de composant.
    * @return {string} Classe.
    */
    _getComponentClassName: function _getComponentClassName() {
        var _props = this.props,
            shape = _props.shape,
            color = _props.color,
            hasRipple = _props.hasRipple,
            isJs = _props.isJs;

        var SHAPE_CLASS = void 0;
        switch (shape) {
            case 'raised':
                SHAPE_CLASS = BUTTON_PRFX + 'raised';
                break;
            case 'fab':
                SHAPE_CLASS = BUTTON_PRFX + 'fab';
                break;
            case 'icon':
                SHAPE_CLASS = BUTTON_PRFX + 'icon';
                break;
            case 'mini-fab':
                SHAPE_CLASS = BUTTON_PRFX + 'mini-fab ' + BUTTON_PRFX + 'fab';
                break;
            default:
                SHAPE_CLASS = null;
                break;
        }
        var COLOR_CLASS = color ? '' + BUTTON_PRFX + color : '';
        var JS_CLASS = isJs ? BTN_JS : '';
        var RIPPLE_EFFECT_CLASS = hasRipple ? RIPPLE_EFFECT : '';
        return BTN_CLASS + ' ' + COLOR_CLASS + ' ' + SHAPE_CLASS + ' ' + JS_CLASS + ' ' + RIPPLE_EFFECT_CLASS;
    },

    /**
    * Render the pressed button.
    * @return {Component} - Component button.
    */
    renderPressedButton: function renderPressedButton() {
        return _react2.default.createElement(
            'button',
            null,
            'Loading...'
        );
    },

    /**
    * Render an icon.
    * @return {Component} - Composant icone.
    */
    _renderIcon: function _renderIcon() {
        var _props2 = this.props,
            icon = _props2.icon,
            iconLibrary = _props2.iconLibrary;

        switch (iconLibrary) {
            case 'material':
                return _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    icon
                );
            case 'font-awesome':
                var faCss = 'fa fa-' + icon;
                return _react2.default.createElement('i', { className: faCss });
            case 'font-custom':
                return _react2.default.createElement('span', { className: 'icon-' + icon });
            default:
                return null;
        }
    },

    /**
    * Render the label.
    * @return {Component} - Tle button label.
    */
    _renderLabel: function _renderLabel() {
        var _props3 = this.props,
            label = _props3.label,
            shape = _props3.shape;

        if (label && 'fab' !== shape && 'icon' !== shape && 'mini-fab' !== shape) {
            return (0, _translation.translate)(label);
        }
        return null;
    },

    /** inheritedDoc */
    render: function render() {
        var _props4 = this.props,
            className = _props4.className,
            icon = _props4.icon,
            id = _props4.id,
            type = _props4.type,
            label = _props4.label,
            style = _props4.style,
            otherProps = _objectWithoutProperties(_props4, ['className', 'icon', 'id', 'type', 'label', 'style']);

        return _react2.default.createElement(
            'button',
            Object.assign({ alt: (0, _translation.translate)(label), className: className + ' ' + this._getComponentClassName(), 'data-focus': 'button-action', id: id, onClick: this.handleOnClick, title: (0, _translation.translate)(label), type: type }, otherProps),
            icon && this._renderIcon(),
            this._renderLabel()
        );
    }
};

var _builder = (0, _builder3.default)(buttonMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQlROX0pTIiwiQlROX0NMQVNTIiwiQlVUVE9OX1BSRlgiLCJSSVBQTEVfRUZGRUNUIiwicHJvcFR5cGVzIiwiaWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJsYWJlbCIsImhhbmRsZU9uQ2xpY2siLCJmdW5jIiwidHlwZSIsIm9uZU9mIiwic2hhcGUiLCJ1bmRlZmluZWQiLCJjb2xvciIsImhhc1JpcHBsZSIsImJvb2wiLCJpc0pzIiwiaWNvbiIsImljb25MaWJyYXJ5IiwiYnV0dG9uTWl4aW4iLCJtaXhpbnMiLCJzdHlsYWJsZU1peGluIiwibWF0ZXJpYWxCZWhhdmlvdXIiLCJkaXNwbGF5TmFtZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0RGVmYXVsdFByb3BzIiwicHJvcHMiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9nZXRDb21wb25lbnRDbGFzc05hbWUiLCJTSEFQRV9DTEFTUyIsIkNPTE9SX0NMQVNTIiwiSlNfQ0xBU1MiLCJSSVBQTEVfRUZGRUNUX0NMQVNTIiwicmVuZGVyUHJlc3NlZEJ1dHRvbiIsIl9yZW5kZXJJY29uIiwiZmFDc3MiLCJfcmVuZGVyTGFiZWwiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm90aGVyUHJvcHMiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVMsZUFBZjtBQUNBLElBQU1DLFlBQVksWUFBbEI7QUFDQSxJQUFNQyxjQUFjLGNBQXBCO0FBQ0EsSUFBTUMsZ0JBQWdCLHNCQUF0Qjs7QUFFQSxJQUFNQyxZQUFZO0FBQ2RDLFFBQUlDLGlCQUFVQyxNQURBO0FBRWRDLFdBQU9GLGlCQUFVQyxNQUZIO0FBR2RFLG1CQUFlSCxpQkFBVUksSUFIWDtBQUlkQyxVQUFNTCxpQkFBVU0sS0FBVixDQUFn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Q0sxQixvQkFBUSxLQUFLb0IsV0FBTCxFQURiO0FBRUssaUJBQUtFLFlBQUw7QUFGTCxTQURKO0FBTUg7QUF6R2UsQ0FBcEI7O2VBNEc2Qix1QkFBUXBCLFdBQVIsQztJQUFyQnlCLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnc2FnZXNzLWNvcmUvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHN0eWxhYmxlTWl4aW4gZnJvbSAnLi4vLi4vLi4vbWl4aW4vc3R5bGFibGUnO1xuaW1wb3J0IG1hdGVyaWFsQmVoYXZpb3VyIGZyb20gJy4uLy4uL21peGluL21kbC1iZWhhdmlvdXInO1xuXG5jb25zdCBCVE5fSlMgPSAnbWRsLWpzLWJ1dHRvbic7XG5jb25zdCBCVE5fQ0xBU1MgPSAnbWRsLWJ1dHRvbic7XG5jb25zdCBCVVRUT05fUFJGWCA9ICdtZGwtYnV0dG9uLS0nO1xuY29uc3QgUklQUExFX0VGRkVDVCA9ICdtZGwtanMtcmlwcGxlLWVmZmVjdCc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoYW5kbGVPbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydzdWJtaXQnLCAnYnV0dG9uJ10pLFxuICAgIHNoYXBlOiBQcm9wVHlwZXMub25lT2YoW3VuZGVmaW5lZCwgJ3JhaXNlZCcsICdmYWInLCAnaWNvbicsICdtaW5pLWZhYiddKSxcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFt1bmRlZmluZWQsICdjb2xvcmVkJywgJ3ByaW1hcnknLCAnYWNjZW50J10pLFxuICAgIGhhc1JpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNKczogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpY29uTGlicmFyeTogUHJvcFR5cGVzLm9uZU9mKFsnbWF0ZXJpYWwnLCAnZm9udC1hd2Vzb21lJywgJ2ZvbnQtY3VzdG9tJ10pXG59O1xuXG4vKipcbiogTWl4aW4gYnV0dG9uLlxuKiBAdHlwZSB7T2JqZWN0fVxuKi9cbmNvbnN0IGJ1dHRvbk1peGluID0ge1xuICAgIC8qKiBpbmhlcml0ZWREb2MgKi9cbiAgICBtaXhpbnM6IFtzdHlsYWJsZU1peGluLCBtYXRlcmlhbEJlaGF2aW91cl0sXG4gICAgZGlzcGxheU5hbWU6ICdCdXR0b24nLFxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIHYwLjE1OiB0aGUgXFwnQnV0dG9uXFwnIGNvbXBvbmVudCBmcm9tIFNhZ2Vzc0NvbXBvbmVudHMuY29tbW9uIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgU2FnZXNzQ29tcG9uZW50cy5jb21wb25lbnRzLkJ1dHRvbicpO1xuICAgIH0sXG4gICAgLyoqIGluaGVyaXRlZERvYyAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnLFxuICAgICAgICAgICAgc2hhcGU6ICdyYWlzZWQnLFxuICAgICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgIGhhc1JpcHBsZTogZmFsc2UsXG4gICAgICAgICAgICBpc0pzOiBmYWxzZSxcbiAgICAgICAgICAgIGljb25MaWJyYXJ5OiAnbWF0ZXJpYWwnXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBwcm9wVHlwZXM6IHByb3BUeXBlcyxcbiAgICAvKipcbiAgICAqIEhhbmRsZSBjbGljayBldmVudC5cbiAgICAqIEByZXR1cm4ge09iamVjdH0gLSBBY3Rpb24gY2FsbC5cbiAgICAqL1xuICAgIGhhbmRsZU9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IHsgaGFuZGxlT25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGhhbmRsZU9uQ2xpY2spIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVPbkNsaWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICogRGF0ZSBkZSBjb21wb3NhbnQuXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IENsYXNzZS5cbiAgICAqL1xuICAgIF9nZXRDb21wb25lbnRDbGFzc05hbWUoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGNvbG9yLCBoYXNSaXBwbGUsIGlzSnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBTSEFQRV9DTEFTUztcbiAgICAgICAgc3dpdGNoIChzaGFwZSkge1xuICAgICAgICAgICAgY2FzZSAncmFpc2VkJzpcbiAgICAgICAgICAgICAgICBTSEFQRV9DTEFTUyA9IGAke0JVVFRPTl9QUkZYfXJhaXNlZGA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmYWInOlxuICAgICAgICAgICAgICAgIFNIQVBFX0NMQVNTID0gYCR7QlVUVE9OX1BSRlh9ZmFiYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ljb24nOlxuICAgICAgICAgICAgICAgIFNIQVBFX0NMQVNTID0gYCR7QlVUVE9OX1BSRlh9aWNvbmA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtaW5pLWZhYic6XG4gICAgICAgICAgICAgICAgU0hBUEVfQ0xBU1MgPSBgJHtCVVRUT05fUFJGWH1taW5pLWZhYiAke0JVVFRPTl9QUkZYfWZhYmA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIFNIQVBFX0NMQVNTID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBDT0xPUl9DTEFTUyA9IGNvbG9yID8gYCR7QlVUVE9OX1BSRlh9JHtjb2xvcn1gIDogJyc7XG4gICAgICAgIGNvbnN0IEpTX0NMQVNTID0gaXNKcyA/IEJUTl9KUyA6ICcnO1xuICAgICAgICBjb25zdCBSSVBQTEVfRUZGRUNUX0NMQVNTID0gaGFzUmlwcGxlID8gUklQUExFX0VGRkVDVCA6ICcnO1xuICAgICAgICByZXR1cm4gYCR7QlROX0NMQVNTfSAke0NPTE9SX0NMQVNTfSAke1NIQVBFX0NMQVNTfSAke0pTX0NMQVNTfSAke1JJUFBMRV9FRkZFQ1RfQ0xBU1N9YDtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBwcmVzc2VkIGJ1dHRvbi5cbiAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBDb21wb25lbnQgYnV0dG9uLlxuICAgICovXG4gICAgcmVuZGVyUHJlc3NlZEJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuICg8YnV0dG9uPkxvYWRpbmcuLi48L2J1dHRvbj4pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgYW4gaWNvbi5cbiAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBDb21wb3NhbnQgaWNvbmUuXG4gICAgKi9cbiAgICBfcmVuZGVySWNvbigpIHtcbiAgICAgICAgY29uc3QgeyBpY29uLCBpY29uTGlicmFyeSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgc3dpdGNoIChpY29uTGlicmFyeSkge1xuICAgICAgICAgICAgY2FzZSAnbWF0ZXJpYWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz57aWNvbn08L2k+O1xuICAgICAgICAgICAgY2FzZSAnZm9udC1hd2Vzb21lJzpcbiAgICAgICAgICAgICAgICBjb25zdCBmYUNzcyA9IGBmYSBmYS0ke2ljb259YDtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGkgY2xhc3NOYW1lPXtmYUNzc30gLz47XG4gICAgICAgICAgICBjYXNlICdmb250LWN1c3RvbSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17YGljb24tJHtpY29ufWB9IC8+O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIGxhYmVsLlxuICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFRsZSBidXR0b24gbGFiZWwuXG4gICAgKi9cbiAgICBfcmVuZGVyTGFiZWwoKSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIHNoYXBlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobGFiZWwgJiYgJ2ZhYicgIT09IHNoYXBlICYmICdpY29uJyAhPT0gc2hhcGUgJiYgJ21pbmktZmFiJyAhPT0gc2hhcGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGUobGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgLyoqIGluaGVyaXRlZERvYyAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWUsIGljb24sIGlkLCB0eXBlLCBsYWJlbCwgc3R5bGUsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGFsdD17dHJhbnNsYXRlKGxhYmVsKX0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7dGhpcy5fZ2V0Q29tcG9uZW50Q2xhc3NOYW1lKCl9YH0gZGF0YS1mb2N1cz0nYnV0dG9uLWFjdGlvbicgaWQ9e2lkfSBvbkNsaWNrPXt0aGlzLmhhbmRsZU9uQ2xpY2t9IHRpdGxlPXt0cmFuc2xhdGUobGFiZWwpfSB0eXBlPXt0eXBlfSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgICAgICAgICAge2ljb24gJiYgdGhpcy5fcmVuZGVySWNvbigpfVxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJMYWJlbCgpfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKGJ1dHRvbk1peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19