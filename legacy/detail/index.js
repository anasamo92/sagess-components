'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _scrollspy = require('../../common/scrollspy');

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _stylable = require('../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

var _buttonBackToTop = require('../../components/button-back-to-top');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Mixin used in order to create a Detail.
* @type {Object}
*/
var detailMixin = {
    mixins: [_stylable2.default],
    /** @inheritedDoc */
    getDefaultProps: function getDefaultProps() {
        return {
            /**
            * Activate the presence of the sticky navigation component.
            * @type {Boolean}
            */
            hasNavigation: true,
            hasBackToTop: true,
            BackToTopComponent: _buttonBackToTop.component,
            navigationAffixOffset: 80
        };
    },

    /** @inheritedDoc */
    propTypes: {
        hasNavigation: (0, _types2.default)('bool'),
        hasBackToTop: (0, _types2.default)('bool'),
        BackToTopComponent: (0, _types2.default)(['func', 'object']),
        navigationAffixOffset: (0, _types2.default)('number')
    },
    /**
    * Returns detail content.
    * @return {object} detail content
    */
    _detailContent: function _detailContent() {
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'detail-content' },
            this.props.children
        );
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 0.7.0: this component is deprecated, please use SagessComponents.components.ScrollspyContainer');
    },

    /** @inheritedDoc */
    render: function render() {
        var _props = this.props,
            hasNavigation = _props.hasNavigation,
            hasBackToTop = _props.hasBackToTop,
            BackToTopComponent = _props.BackToTopComponent,
            navigationAffixOffset = _props.navigationAffixOffset;

        return _react2.default.createElement(
            'div',
            { className: '' + this._getStyleClassName(), 'data-focus': 'detail' },
            hasNavigation ? _react2.default.createElement(
                _scrollspy.component,
                { affixOffset: navigationAffixOffset },
                this._detailContent()
            ) : this._detailContent(),
            hasBackToTop && _react2.default.createElement(BackToTopComponent, null)
        );
    }
};

exports.default = (0, _builder2.default)(detailMixin);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGV0YWlsTWl4aW4iLCJtaXhpbnMiLCJzdHlsYWJsZSIsImdldERlZmF1bHRQcm9wcyIsImhhc05hdmlnYXRpb24iLCJoYXNCYWNrVG9Ub3AiLCJCYWNrVG9Ub3BDb21wb25lbnQiLCJEZWZhdWx0QmFja1RvVG9wQ29tcG9uZW50IiwibmF2aWdhdGlvbkFmZml4T2Zmc2V0IiwicHJvcFR5cGVzIiwiX2RldGFpbENvbnRlbnQiLCJwcm9wcyIsImNoaWxkcmVuIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJyZW5kZXIiLCJfZ2V0U3R5bGVDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUlBLElBQU1BLGNBQWM7QUFDaEJDLFlBQVEsQ0FBQ0Msa0JBQUQsQ0FEUTtBQUVoQjtBQUNBQyxtQkFIZ0IsNkJBR0U7QUFDZCxlQUFPO0FBQ0g7Ozs7QUFJQUMsMkJBQWUsSUFMWjtBQU1IQywwQkFBYyxJQU5YO0FBT0hDLGdDQUFvQkMsMEJBUGpCO0FBUUhDLG1DQUF1QjtBQVJwQixTQUFQO0FBVUgsS0FkZTs7QUFlaEI7QUFDQUMsZUFBVztBQUNQTCx1QkFBZSxxQkFBSyxNQUFMLENBRFI7QUFFUEMsc0JBQWMscUJBQUssTUFBTCxDQUZQO0FBR1BDLDRCQUFvQixxQkFBSyxDQUFDLE1BQUQsRUFBUyxRQUFULENBQUwsQ0FIYjtBQUlQRSwrQkFBdUIscUJBQUssUUFBTDtBQUpoQixLQWhCSztBQXNCaEI7Ozs7QUFJQUUsa0JBMUJnQiw0QkEwQkM7QUFDYixlQUNJO0FBQUE7QUFBQSxjQUFLLGNBQVcsZ0JBQWhCO0FBQ0ssaUJBQUtDLEtBQUwsQ0FBV0M7QUFEaEIsU0FESjtBQUtILEtBaENlO0FBaUNoQkMsc0JBakNnQixnQ0FpQ0s7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsaUhBQWI7QUFDSCxLQW5DZTs7QUFvQ2hCO0FBQ0FDLFVBckNnQixvQkFxQ1A7QUFBQSxxQkFDOEUsS0FBS0wsS0FEbkY7QUFBQSxZQUNHUCxhQURILFVBQ0dBLGFBREg7QUFBQSxZQUNrQkMsWUFEbEIsVUFDa0JBLFlBRGxCO0FBQUEsWUFDZ0NDLGtCQURoQyxVQUNnQ0Esa0JBRGhDO0FBQUEsWUFDb0RFLHFCQURwRCxVQUNvREEscUJBRHBEOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssZ0JBQWMsS0FBS1Msa0JBQUwsRUFBbkIsRUFBZ0QsY0FBVyxRQUEzRDtBQUNLYiw0QkFBZ0I7QUFBQyxvQ0FBRDtBQUFBLGtCQUFXLGFBQWFJLHFCQUF4QjtBQUFnRCxxQkFBS0UsY0FBTDtBQUFoRCxhQUFoQixHQUFxRyxLQUFLQSxjQUFMLEVBRDFHO0FBRUtMLDRCQUFnQiw4QkFBQyxrQkFBRDtBQUZyQixTQURKO0FBTUg7QUE3Q2UsQ0FBcEI7O2tCQWdEZSx1QkFBUUwsV0FBUixDIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIFNjcm9sbHNweSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zY3JvbGxzcHknO1xuaW1wb3J0IHR5cGUgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbmltcG9ydCBzdHlsYWJsZSBmcm9tICcuLi8uLi9taXhpbi9zdHlsYWJsZSc7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgRGVmYXVsdEJhY2tUb1RvcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uLWJhY2stdG8tdG9wJztcbi8qKlxuKiBNaXhpbiB1c2VkIGluIG9yZGVyIHRvIGNyZWF0ZSBhIERldGFpbC5cbiogQHR5cGUge09iamVjdH1cbiovXG5jb25zdCBkZXRhaWxNaXhpbiA9IHtcbiAgICBtaXhpbnM6IFtzdHlsYWJsZV0sXG4gICAgLyoqIEBpbmhlcml0ZWREb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogQWN0aXZhdGUgdGhlIHByZXNlbmNlIG9mIHRoZSBzdGlja3kgbmF2aWdhdGlvbiBjb21wb25lbnQuXG4gICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGhhc05hdmlnYXRpb246IHRydWUsXG4gICAgICAgICAgICBoYXNCYWNrVG9Ub3A6IHRydWUsXG4gICAgICAgICAgICBCYWNrVG9Ub3BDb21wb25lbnQ6IERlZmF1bHRCYWNrVG9Ub3BDb21wb25lbnQsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQWZmaXhPZmZzZXQ6IDgwXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRlZERvYyAqL1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBoYXNOYXZpZ2F0aW9uOiB0eXBlKCdib29sJyksXG4gICAgICAgIGhhc0JhY2tUb1RvcDogdHlwZSgnYm9vbCcpLFxuICAgICAgICBCYWNrVG9Ub3BDb21wb25lbnQ6IHR5cGUoWydmdW5jJywgJ29iamVjdCddKSxcbiAgICAgICAgbmF2aWdhdGlvbkFmZml4T2Zmc2V0OiB0eXBlKCdudW1iZXInKVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGRldGFpbCBjb250ZW50LlxuICAgICogQHJldHVybiB7b2JqZWN0fSBkZXRhaWwgY29udGVudFxuICAgICovXG4gICAgX2RldGFpbENvbnRlbnQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2RldGFpbC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgMC43LjA6IHRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgU2FnZXNzQ29tcG9uZW50cy5jb21wb25lbnRzLlNjcm9sbHNweUNvbnRhaW5lcicpO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZWREb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaGFzTmF2aWdhdGlvbiwgaGFzQmFja1RvVG9wLCBCYWNrVG9Ub3BDb21wb25lbnQsIG5hdmlnYXRpb25BZmZpeE9mZnNldCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLl9nZXRTdHlsZUNsYXNzTmFtZSgpfWB9IGRhdGEtZm9jdXM9J2RldGFpbCc+XG4gICAgICAgICAgICAgICAge2hhc05hdmlnYXRpb24gPyA8U2Nyb2xsc3B5IGFmZml4T2Zmc2V0PXtuYXZpZ2F0aW9uQWZmaXhPZmZzZXR9Pnt0aGlzLl9kZXRhaWxDb250ZW50KCl9PC9TY3JvbGxzcHk+IDogdGhpcy5fZGV0YWlsQ29udGVudCgpfVxuICAgICAgICAgICAgICAgIHtoYXNCYWNrVG9Ub3AgJiYgPEJhY2tUb1RvcENvbXBvbmVudCAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkZXIoZGV0YWlsTWl4aW4pO1xuIl19