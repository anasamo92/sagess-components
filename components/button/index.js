'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

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

var BTN_JS = 'mdl-js-button';
var BTN_CLASS = 'mdl-button';
var BUTTON_PRFX = 'mdl-button--';
var RIPPLE_EFFECT = 'mdl-js-ripple-effect';

/**
 * Button component.
 */
var Button = (_dec = (0, _material2.default)('materialButton', 'MaterialButton'), _dec(_class = (0, _translation2.default)(_class = (_temp = _class2 = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'componentDidMount',


        /** @inheritdoc */


        /** PropTypes. */
        value: function componentDidMount() {
            var hasRipple = this.props.hasRipple;

            var refNode = _reactDom2.default.findDOMNode(this.refs.materialButton);
            if (hasRipple) {
                componentHandler.upgradeElement(refNode, 'MaterialRipple');
            }
        }

        /** @inheritdoc */


        /** DefaultProps. */


        /** DisplayName. */

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var spinnerNode = _reactDom2.default.findDOMNode(this.refs['double-action-button-spinner']);
            if (spinnerNode) {
                componentHandler.upgradeElement(spinnerNode, 'MaterialSpinner');
            }
        }

        /**
        * Date de composant.
        * @return {string} Classe.
        */

    }, {
        key: '_getComponentClassName',
        value: function _getComponentClassName() {
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
                case null:
                    SHAPE_CLASS = '';
                    break;
                default:
                    SHAPE_CLASS = null;
                    break;
            }
            var COLOR_CLASS = color ? '' + BUTTON_PRFX + color : '';
            var JS_CLASS = isJs ? BTN_JS : '';
            var RIPPLE_EFFECT_CLASS = hasRipple ? RIPPLE_EFFECT : '';

            return BTN_CLASS + ' ' + COLOR_CLASS + ' ' + SHAPE_CLASS + ' ' + JS_CLASS + ' ' + RIPPLE_EFFECT_CLASS;
        }

        /**
         * Render the pressed button.
         * @return {Component} - Component button.
         */

    }, {
        key: 'renderPressedButton',
        value: function renderPressedButton() {
            return _react2.default.createElement(
                'button',
                null,
                'Loading...'
            );
        }

        /**
        * Render an icon.
        * @return {Component} - Composant icone.
        */

    }, {
        key: '_renderIcon',
        value: function _renderIcon() {
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
                    return _react2.default.createElement('i', { className: 'fa fa-' + icon });
                case 'font-custom':
                    return _react2.default.createElement('span', { className: 'icon-' + icon });
                default:
                    return null;
            }
        }

        /**
        * Render the label.
        * @return {Component} - Tle button label.
        */

    }, {
        key: '_renderLabel',
        value: function _renderLabel() {
            var _props3 = this.props,
                isLoading = _props3.isLoading,
                label = _props3.label,
                processLabel = _props3.processLabel,
                shape = _props3.shape;


            if (label && 'fab' !== shape && 'icon' !== shape && 'mini-fab' !== shape && (!isLoading || !processLabel)) {
                return _react2.default.createElement(
                    'span',
                    { 'data-focus': 'button-label' },
                    this.i18n(label)
                );
            } else if (processLabel && 'fab' !== shape && 'icon' !== shape && 'mini-fab' !== shape && isLoading) {
                return _react2.default.createElement(
                    'span',
                    { 'data-focus': 'button-label' },
                    this.i18n(processLabel)
                );
            }
            return null;
        }

        /**
         * Wrapper around on click, to prevent click action is spinner is showed.
         * 
         * @param {any} event the html event
         * @param {any} onClick the onclick function to call
         * 
         * @memberOf Button
         */

    }, {
        key: '_wrappedOnClick',
        value: function _wrappedOnClick(event, onClick) {
            if (this.props.isLoading) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                onClick(event);
            }
        }

        /** @inheritdoc */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            // attribute doc : https://developer.mozilla.org/fr/docs/Web/HTML/Element/Button
            // be careful the way you declare your attribute names : https://developer.mozilla.org/fr/docs/Web/HTML/Element/Button
            var _props4 = this.props,
                className = _props4.className,
                disabled = _props4.disabled,
                formNoValidate = _props4.formNoValidate,
                handleOnClick = _props4.handleOnClick,
                icon = _props4.icon,
                id = _props4.id,
                onClick = _props4.onClick,
                type = _props4.type,
                label = _props4.label,
                style = _props4.style,
                isLoading = _props4.isLoading,
                rest = _objectWithoutProperties(_props4, ['className', 'disabled', 'formNoValidate', 'handleOnClick', 'icon', 'id', 'onClick', 'type', 'label', 'style', 'isLoading']);

            var onClickFunc = handleOnClick ? handleOnClick : onClick;
            var otherInputProps = (0, _filterHtmlAttributes2.default)(Object.assign({ disabled: disabled, formNoValidate: formNoValidate, style: style, type: type }, rest)); //on click for legacy. Remove handleOnClick in v2

            if (onClickFunc) {
                otherInputProps.onClick = function (event) {
                    return _this2._wrappedOnClick(event, onClickFunc);
                };
            }
            var renderedClassName = (className + ' ' + this._getComponentClassName()).trim();

            return _react2.default.createElement(
                'button',
                Object.assign({
                    alt: this.i18n(label),
                    className: renderedClassName,
                    'data-focus': 'button-action',
                    'data-saving': isLoading,
                    disabled: isLoading,
                    id: id,
                    ref: 'materialButton',
                    title: this.i18n(label)
                }, otherInputProps),
                icon && this._renderIcon(),
                this._renderLabel(),
                isLoading && _react2.default.createElement('div', {
                    className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active',
                    'data-focus': 'double-action-button-spinner',
                    ref: 'double-action-button-spinner'
                })
            );
        }
    }]);

    return Button;
}(_react.Component), _class2.displayName = 'Button', _class2.propTypes = {
    className: _react.PropTypes.string,
    color: _react.PropTypes.oneOf([undefined, 'colored', 'primary', 'accent']),
    disabled: _react.PropTypes.bool,
    formNoValidate: _react.PropTypes.bool,
    handleOnClick: _react.PropTypes.func, //to remove in V2
    hasRipple: _react.PropTypes.bool,
    id: _react.PropTypes.string,
    icon: _react.PropTypes.string,
    iconLibrary: _react.PropTypes.oneOf(['material', 'font-awesome', 'font-custom']),
    isJs: _react.PropTypes.bool,
    isLoading: _react.PropTypes.bool,
    label: _react.PropTypes.string,
    onClick: _react.PropTypes.func,
    processLabel: _react.PropTypes.string,
    shape: _react.PropTypes.oneOf([undefined, 'raised', 'fab', 'icon', 'mini-fab']),
    type: _react.PropTypes.oneOf(['submit', 'button'])
}, _class2.defaultProps = {
    className: '',
    color: undefined,
    disabled: false,
    formNoValidate: false,
    handleOnClick: undefined,
    hasRipple: false,
    icon: null,
    iconLibrary: 'material',
    id: '',
    isJs: false,
    isLoading: false,
    label: '',
    onClick: undefined,
    processLabel: '',
    shape: 'raised',
    type: 'submit'
}, _temp)) || _class) || _class);
exports.default = Button;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQlROX0pTIiwiQlROX0NMQVNTIiwiQlVUVE9OX1BSRlgiLCJSSVBQTEVfRUZGRUNUIiwiQnV0dG9uIiwiVHJhbnNsYXRpb24iLCJoYXNSaXBwbGUiLCJwcm9wcyIsInJlZk5vZGUiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwicmVmcyIsIm1hdGVyaWFsQnV0dG9uIiwiY29tcG9uZW50SGFuZGxlciIsInVwZ3JhZGVFbGVtZW50Iiwic3Bpbm5lck5vZGUiLCJzaGFwZSIsImNvbG9yIiwiaXNKcyIsIlNIQVBFX0NMQVNTIiwiQ09MT1JfQ0xBU1MiLCJKU19DTEFTUyIsIlJJUFBMRV9FRkZFQ1RfQ0xBU1MiLCJpY29uIiwiaWNvbkxpYnJhcnkiLCJpc0xvYWRpbmciLCJsYWJlbCIsInByb2Nlc3NMYWJlbCIsImkxOG4iLCJldmVudCIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiZm9ybU5vVmFsaWRhdGUiLCJoYW5kbGVPbkNsaWNrIiwiaWQiLCJ0eXBlIiwic3R5bGUiLCJyZXN0Iiwib25DbGlja0Z1bmMiLCJvdGhlcklucHV0UHJvcHMiLCJfd3JhcHBlZE9uQ2xpY2siLCJyZW5kZXJlZENsYXNzTmFtZSIsIl9nZXRDb21wb25lbnRDbGFzc05hbWUiLCJ0cmltIiwiX3JlbmRlckljb24iLCJfcmVuZGVyTGFiZWwiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwidW5kZWZpbmVkIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsZUFBZjtBQUNBLElBQU1DLFlBQVksWUFBbEI7QUFD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S2ZwQixtQkFBZWdCLGlCQUFVSyxJQUxWLEVBS2dCO0FBQy9CbkQsZUFBVzhDLGlCQUFVSSxJQU5OO0FBT2ZuQixRQUFJZSxpQkFBVUMsTUFQQztBQVFmOUIsVUFBTTZCLGlCQUFVQyxNQVJEO0FBU2Y3QixpQkFBYTRCLGlCQUFVRSxLQUFWLENBQWdCLENBQUMsVUFBRCxFQUFhLGNBQWIsRUFBNkIsYUFBN0IsQ0FBaEIsQ0FURTtBQVVmcEMsVUFBTWtDLGlCQUFVSSxJQVZEO0FBV2YvQixlQUFXMkIsaUJBQVVJLElBWE47QUFZZjlCLFdBQU8wQixpQkFBVUMsTUFaRjtBQWFmdkIsYUFBU3NCLGlCQUFVSyxJQWJKO0FBY2Y5QixrQkFBY3lCLGlCQUFVQyxNQWRUO0FBZWZyQyxXQUFPb0MsaUJBQVVFLEtBQVYsQ0FBZ0IsQ0FBQ0MsU0FBRCxFQUFZLFFBQVosRUFBc0IsS0FBdEIsRUFBNkIsTUFBN0IsRUFBcUMsVUFBckMsQ0FBaEIsQ0FmUTtBQWdCZmpCLFVBQU1jLGlCQUFVRSxLQUFWLENBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBaEI7QUFoQlMsQyxVQW9CWkksWSxHQUFlO0FBQ2xCekIsZUFBVyxFQURPO0FBRWxCaEIsV0FBT3NDLFNBRlc7QUFHbEJyQixjQUFVLEtBSFE7QUFJbEJDLG9CQUFnQixLQUpFO0FBS2xCQyxtQkFBZW1CLFNBTEc7QUFNbEJqRCxlQUFXLEtBTk87QUFPbEJpQixVQUFNLElBUFk7QUFRbEJDLGlCQUFhLFVBUks7QUFTbEJhLFFBQUksRUFUYztBQVVsQm5CLFVBQU0sS0FWWTtBQVdsQk8sZUFBVyxLQVhPO0FBWWxCQyxXQUFPLEVBWlc7QUFhbEJJLGFBQVN5QixTQWJTO0FBY2xCNUIsa0JBQWMsRUFkSTtBQWVsQlgsV0FBTyxRQWZXO0FBZ0JsQnNCLFVBQU07QUFoQlksQztrQkE0S1hsQyxNIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBNREJlaGF2aW91ciBmcm9tICcuLi8uLi9iZWhhdmlvdXJzL21hdGVyaWFsJztcbmltcG9ydCBUcmFuc2xhdGlvbiBmcm9tICcuLi8uLi9iZWhhdmlvdXJzL3RyYW5zbGF0aW9uJztcbmltcG9ydCBmaWx0ZXJQcm9wcyBmcm9tICcuLi8uLi91dGlscy9maWx0ZXItaHRtbC1hdHRyaWJ1dGVzJztcblxuY29uc3QgQlROX0pTID0gJ21kbC1qcy1idXR0b24nO1xuY29uc3QgQlROX0NMQVNTID0gJ21kbC1idXR0b24nO1xuY29uc3QgQlVUVE9OX1BSRlggPSAnbWRsLWJ1dHRvbi0tJztcbmNvbnN0IFJJUFBMRV9FRkZFQ1QgPSAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnO1xuXG5ATURCZWhhdmlvdXIoJ21hdGVyaWFsQnV0dG9uJywgJ01hdGVyaWFsQnV0dG9uJylcbkBUcmFuc2xhdGlvblxuLyoqXG4gKiBCdXR0b24gY29tcG9uZW50LlxuICovXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgLyoqIERpc3BsYXlOYW1lLiAqL1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuXG4gICAgLyoqIFByb3BUeXBlcy4gKi9cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW3VuZGVmaW5lZCwgJ2NvbG9yZWQnLCAncHJpbWFyeScsICdhY2NlbnQnXSksXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZm9ybU5vVmFsaWRhdGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBoYW5kbGVPbkNsaWNrOiBQcm9wVHlwZXMuZnVuYywgLy90byByZW1vdmUgaW4gVjJcbiAgICAgICAgaGFzUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGljb25MaWJyYXJ5OiBQcm9wVHlwZXMub25lT2YoWydtYXRlcmlhbCcsICdmb250LWF3ZXNvbWUnLCAnZm9udC1jdXN0b20nXSksXG4gICAgICAgIGlzSnM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHByb2Nlc3NMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbdW5kZWZpbmVkLCAncmFpc2VkJywgJ2ZhYicsICdpY29uJywgJ21pbmktZmFiJ10pLFxuICAgICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydzdWJtaXQnLCAnYnV0dG9uJ10pXG4gICAgfTtcblxuICAgIC8qKiBEZWZhdWx0UHJvcHMuICovXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgY29sb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBmb3JtTm9WYWxpZGF0ZTogZmFsc2UsXG4gICAgICAgIGhhbmRsZU9uQ2xpY2s6IHVuZGVmaW5lZCxcbiAgICAgICAgaGFzUmlwcGxlOiBmYWxzZSxcbiAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgaWNvbkxpYnJhcnk6ICdtYXRlcmlhbCcsXG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgaXNKczogZmFsc2UsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgb25DbGljazogdW5kZWZpbmVkLFxuICAgICAgICBwcm9jZXNzTGFiZWw6ICcnLFxuICAgICAgICBzaGFwZTogJ3JhaXNlZCcsXG4gICAgICAgIHR5cGU6ICdzdWJtaXQnXG4gICAgfTtcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IGhhc1JpcHBsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgcmVmTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tYXRlcmlhbEJ1dHRvbik7XG4gICAgICAgIGlmIChoYXNSaXBwbGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQocmVmTm9kZSwgJ01hdGVyaWFsUmlwcGxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHNwaW5uZXJOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzWydkb3VibGUtYWN0aW9uLWJ1dHRvbi1zcGlubmVyJ10pO1xuICAgICAgICBpZiAoc3Bpbm5lck5vZGUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQoc3Bpbm5lck5vZGUsICdNYXRlcmlhbFNwaW5uZXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogRGF0ZSBkZSBjb21wb3NhbnQuXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IENsYXNzZS5cbiAgICAqL1xuICAgIF9nZXRDb21wb25lbnRDbGFzc05hbWUoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcGUsIGNvbG9yLCBoYXNSaXBwbGUsIGlzSnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IFNIQVBFX0NMQVNTO1xuICAgICAgICBzd2l0Y2ggKHNoYXBlKSB7XG4gICAgICAgICAgICBjYXNlICdyYWlzZWQnOlxuICAgICAgICAgICAgICAgIFNIQVBFX0NMQVNTID0gYCR7QlVUVE9OX1BSRlh9cmFpc2VkYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZhYic6XG4gICAgICAgICAgICAgICAgU0hBUEVfQ0xBU1MgPSBgJHtCVVRUT05fUFJGWH1mYWJgO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaWNvbic6XG4gICAgICAgICAgICAgICAgU0hBUEVfQ0xBU1MgPSBgJHtCVVRUT05fUFJGWH1pY29uYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21pbmktZmFiJzpcbiAgICAgICAgICAgICAgICBTSEFQRV9DTEFTUyA9IGAke0JVVFRPTl9QUkZYfW1pbmktZmFiICR7QlVUVE9OX1BSRlh9ZmFiYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICAgICAgICBTSEFQRV9DTEFTUyA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBTSEFQRV9DTEFTUyA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgQ09MT1JfQ0xBU1MgPSBjb2xvciA/IGAke0JVVFRPTl9QUkZYfSR7Y29sb3J9YCA6ICcnO1xuICAgICAgICBjb25zdCBKU19DTEFTUyA9IGlzSnMgPyBCVE5fSlMgOiAnJztcbiAgICAgICAgY29uc3QgUklQUExFX0VGRkVDVF9DTEFTUyA9IGhhc1JpcHBsZSA/IFJJUFBMRV9FRkZFQ1QgOiAnJztcblxuICAgICAgICByZXR1cm4gYCR7QlROX0NMQVNTfSAke0NPTE9SX0NMQVNTfSAke1NIQVBFX0NMQVNTfSAke0pTX0NMQVNTfSAke1JJUFBMRV9FRkZFQ1RfQ0xBU1N9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIHByZXNzZWQgYnV0dG9uLlxuICAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBDb21wb25lbnQgYnV0dG9uLlxuICAgICAqL1xuICAgIHJlbmRlclByZXNzZWRCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiAoPGJ1dHRvbj57J0xvYWRpbmcuLi4nfTwvYnV0dG9uPik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgYW4gaWNvbi5cbiAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBDb21wb3NhbnQgaWNvbmUuXG4gICAgKi9cbiAgICBfcmVuZGVySWNvbigpIHtcbiAgICAgICAgY29uc3QgeyBpY29uLCBpY29uTGlicmFyeSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgc3dpdGNoIChpY29uTGlicmFyeSkge1xuICAgICAgICAgICAgY2FzZSAnbWF0ZXJpYWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+e2ljb259PC9pPik7XG4gICAgICAgICAgICBjYXNlICdmb250LWF3ZXNvbWUnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoPGkgY2xhc3NOYW1lPXtgZmEgZmEtJHtpY29ufWB9IC8+KTtcbiAgICAgICAgICAgIGNhc2UgJ2ZvbnQtY3VzdG9tJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT17YGljb24tJHtpY29ufWB9IC8+KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgbGFiZWwuXG4gICAgKiBAcmV0dXJuIHtDb21wb25lbnR9IC0gVGxlIGJ1dHRvbiBsYWJlbC5cbiAgICAqL1xuICAgIF9yZW5kZXJMYWJlbCgpIHtcbiAgICAgICAgY29uc3QgeyBpc0xvYWRpbmcsIGxhYmVsLCBwcm9jZXNzTGFiZWwsIHNoYXBlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChsYWJlbCAmJiAnZmFiJyAhPT0gc2hhcGUgJiYgJ2ljb24nICE9PSBzaGFwZSAmJiAnbWluaS1mYWInICE9PSBzaGFwZSAmJiAoIWlzTG9hZGluZyB8fCAhcHJvY2Vzc0xhYmVsKSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWZvY3VzPSdidXR0b24tbGFiZWwnPnt0aGlzLmkxOG4obGFiZWwpfTwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzc0xhYmVsICYmICdmYWInICE9PSBzaGFwZSAmJiAnaWNvbicgIT09IHNoYXBlICYmICdtaW5pLWZhYicgIT09IHNoYXBlICYmIGlzTG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWZvY3VzPSdidXR0b24tbGFiZWwnPnt0aGlzLmkxOG4ocHJvY2Vzc0xhYmVsKX08L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyYXBwZXIgYXJvdW5kIG9uIGNsaWNrLCB0byBwcmV2ZW50IGNsaWNrIGFjdGlvbiBpcyBzcGlubmVyIGlzIHNob3dlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2FueX0gZXZlbnQgdGhlIGh0bWwgZXZlbnRcbiAgICAgKiBAcGFyYW0ge2FueX0gb25DbGljayB0aGUgb25jbGljayBmdW5jdGlvbiB0byBjYWxsXG4gICAgICogXG4gICAgICogQG1lbWJlck9mIEJ1dHRvblxuICAgICAqL1xuICAgIF93cmFwcGVkT25DbGljayhldmVudCwgb25DbGljaykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBhdHRyaWJ1dGUgZG9jIDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvSFRNTC9FbGVtZW50L0J1dHRvblxuICAgICAgICAvLyBiZSBjYXJlZnVsIHRoZSB3YXkgeW91IGRlY2xhcmUgeW91ciBhdHRyaWJ1dGUgbmFtZXMgOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvQnV0dG9uXG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBkaXNhYmxlZCwgZm9ybU5vVmFsaWRhdGUsIGhhbmRsZU9uQ2xpY2ssIGljb24sIGlkLCBvbkNsaWNrLCB0eXBlLCBsYWJlbCwgc3R5bGUsIGlzTG9hZGluZywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgb25DbGlja0Z1bmMgPSBoYW5kbGVPbkNsaWNrID8gaGFuZGxlT25DbGljayA6IG9uQ2xpY2s7XG4gICAgICAgIGNvbnN0IG90aGVySW5wdXRQcm9wcyA9IGZpbHRlclByb3BzKHsgZGlzYWJsZWQsIGZvcm1Ob1ZhbGlkYXRlLCBzdHlsZSwgdHlwZSwgLi4ucmVzdCB9KTsgLy9vbiBjbGljayBmb3IgbGVnYWN5LiBSZW1vdmUgaGFuZGxlT25DbGljayBpbiB2MlxuXG4gICAgICAgIGlmIChvbkNsaWNrRnVuYykge1xuICAgICAgICAgICAgb3RoZXJJbnB1dFByb3BzLm9uQ2xpY2sgPSBldmVudCA9PiB0aGlzLl93cmFwcGVkT25DbGljayhldmVudCwgb25DbGlja0Z1bmMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkQ2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSAke3RoaXMuX2dldENvbXBvbmVudENsYXNzTmFtZSgpfWAudHJpbSgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgYWx0PXt0aGlzLmkxOG4obGFiZWwpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cmVuZGVyZWRDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgZGF0YS1mb2N1cz0nYnV0dG9uLWFjdGlvbidcbiAgICAgICAgICAgICAgICBkYXRhLXNhdmluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgIHJlZj0nbWF0ZXJpYWxCdXR0b24nXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuaTE4bihsYWJlbCl9XG4gICAgICAgICAgICAgICAgey4uLm90aGVySW5wdXRQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aWNvbiAmJiB0aGlzLl9yZW5kZXJJY29uKCl9XG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckxhYmVsKCl9XG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWRsLXNwaW5uZXIgbWRsLXNwaW5uZXItLXNpbmdsZS1jb2xvciBtZGwtanMtc3Bpbm5lciBpcy1hY3RpdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZvY3VzPSdkb3VibGUtYWN0aW9uLWJ1dHRvbi1zcGlubmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPSdkb3VibGUtYWN0aW9uLWJ1dHRvbi1zcGlubmVyJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsgICAgICAgICAgICAgICAgICAgXG4iXX0=