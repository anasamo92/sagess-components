'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _mixin = require('../../common/i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _stylable = require('../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

var _title = require('../title');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Mixin used in order to create a block.
* @type {Object}
*/
var blockMixin = {
    mixins: [_mixin2.default, _stylable2.default],

    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            actionsPosition: 'top'
        };
    },


    /** @inheritedDoc */
    propTypes: {
        actions: (0, _types2.default)('func'),
        actionsPosition: _react2.default.PropTypes.oneOf(['both', 'bottom', 'top']),
        title: (0, _types2.default)('string')
    },
    /**
    * Header of theblock function.
    * @return {[type]} [description]
    */
    heading: function heading() {
        if (this.props.title) {
            return this.i18n(this.props.title);
        }
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 0.7.0: this component is deprecated, please use SagessComponents.components.Panel');
    },

    /**
    * Render the a block container and the cild content of the block.
    * @return {DOM} React DOM element
    */
    render: function render() {
        var _props = this.props,
            actions = _props.actions,
            actionsPosition = _props.actionsPosition,
            children = _props.children;

        var shouldDisplayActionsTop = actions && ['both', 'top'].includes(actionsPosition);
        var shouldDisplayActionsBottom = actions && ['both', 'bottom'].includes(actionsPosition);
        return _react2.default.createElement(
            'div',
            { className: 'mdl-card mdl-card--border mdl-shadow--4dp', 'data-focus': 'block' },
            _react2.default.createElement(
                'div',
                { className: 'mdl-card__title mdl-card--border', 'data-focus': 'block-title' },
                _react2.default.createElement(_title.component, { label: this.heading() }),
                shouldDisplayActionsTop && _react2.default.createElement(
                    'div',
                    { className: 'actions' },
                    actions()
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'mdl-card__supporting-text', 'data-focus': 'block-content' },
                children
            ),
            shouldDisplayActionsBottom && _react2.default.createElement(
                'div',
                { className: 'mdl-card__actions mdl-card--border', 'data-focus': 'block-actions' },
                actions()
            )
        );
    }
};

var _builder = (0, _builder3.default)(blockMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiYmxvY2tNaXhpbiIsIm1peGlucyIsImkxOG5CZWhhdmlvdXIiLCJzdHlsZUJlaGF2aW91ciIsImdldERlZmF1bHRQcm9wcyIsImFjdGlvbnNQb3NpdGlvbiIsInByb3BUeXBlcyIsImFjdGlvbnMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9uZU9mIiwidGl0bGUiLCJoZWFkaW5nIiwicHJvcHMiLCJpMThuIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJyZW5kZXIiLCJjaGlsZHJlbiIsInNob3VsZERpc3BsYXlBY3Rpb25zVG9wIiwiaW5jbHVkZXMiLCJzaG91bGREaXNwbGF5QWN0aW9uc0JvdHRvbSIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxhQUFhO0FBQ2ZDLFlBQVEsQ0FBQ0MsZUFBRCxFQUFnQkMsa0JBQWhCLENBRE87O0FBR2Y7QUFDQUMsbUJBSmUsNkJBSUc7QUFDZCxlQUFPO0FBQ0hDLDZCQUFpQjtBQURkLFNBQVA7QUFHSCxLQVJjOzs7QUFVZjtBQUNBQyxlQUFXO0FBQ1BDLGlCQUFTLHFCQUFNLE1BQU4sQ0FERjtBQUVQRix5QkFBaUJHLGdCQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLEtBQW5CLENBQXRCLENBRlY7QUFHUEMsZUFBTyxxQkFBTSxRQUFOO0FBSEEsS0FYSTtBQWdCZjs7OztBQUlBQyxXQXBCZSxxQkFvQkw7QUFDTixZQUFJLEtBQUtDLEtBQUwsQ0FBV0YsS0FBZixFQUFzQjtBQUNsQixtQkFBTyxLQUFLRyxJQUFMLENBQVUsS0FBS0QsS0FBTCxDQUFXRixLQUFyQixDQUFQO0FBQ0g7QUFDSixLQXhCYztBQXlCZkksc0JBekJlLGdDQXlCTTtBQUNqQkMsZ0JBQVFDLElBQVIsQ0FBYSxvR0FBYjtBQUNILEtBM0JjOztBQTRCZjs7OztBQUlBQyxVQWhDZSxvQkFnQ047QUFBQSxxQkFDMEMsS0FBS0wsS0FEL0M7QUFBQSxZQUNHTixPQURILFVBQ0dBLE9BREg7QUFBQSxZQUNZRixlQURaLFVBQ1lBLGVBRFo7QUFBQSxZQUM2QmMsUUFEN0IsVUFDNkJBLFFBRDdCOztBQUVMLFlBQU1DLDBCQUEwQmIsV0FBVyxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCYyxRQUFoQixDQUF5QmhCLGVBQXpCLENBQTNDO0FBQ0EsWUFBTWlCLDZCQUE2QmYsV0FBVyxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CYyxRQUFuQixDQUE0QmhCLGVBQTVCLENBQTlDO0FBQ0EsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLDJDQUFmLEVBQTJELGNBQVcsT0FBdEU7QUFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxrQ0FBZixFQUFrRCxjQUFXLGFBQTdEO0FBQ0ksOENBQUMsZ0JBQUQsSUFBTyxPQUFPLEtBQUtPLE9BQUwsRUFBZCxHQURKO0FBRUtRLDJDQUNHO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFNBQWY7QUFBMEJiO0FBQTFCO0FBSFIsYUFESjtBQU9JO0FBQUE7QUFBQSxrQkFBSyxXQUFVLDJCQUFmLEVBQTJDLGNBQVcsZUFBdEQ7QUFDS1k7QUFETCxhQVBKO0FBVUtHLDBDQUNHO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG9DQUFmLEVBQW9ELGNBQVcsZUFBL0Q7QUFDS2Y7QUFETDtBQVhSLFNBREo7QUFrQkg7QUF0RGMsQ0FBbkI7O2VBeUQ2Qix1QkFBUVAsVUFBUixDO0lBQXJCdUIsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgdHlwZXMgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbmltcG9ydCBpMThuQmVoYXZpb3VyIGZyb20gJy4uLy4uL2NvbW1vbi9pMThuL21peGluJztcbmltcG9ydCBzdHlsZUJlaGF2aW91ciBmcm9tICcuLi8uLi9taXhpbi9zdHlsYWJsZSc7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgVGl0bGUgfSBmcm9tICcuLi90aXRsZSc7XG5cbi8qKlxuKiBNaXhpbiB1c2VkIGluIG9yZGVyIHRvIGNyZWF0ZSBhIGJsb2NrLlxuKiBAdHlwZSB7T2JqZWN0fVxuKi9cbmNvbnN0IGJsb2NrTWl4aW4gPSB7XG4gICAgbWl4aW5zOiBbaTE4bkJlaGF2aW91ciwgc3R5bGVCZWhhdmlvdXJdLFxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aW9uc1Bvc2l0aW9uOiAndG9wJ1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKiogQGluaGVyaXRlZERvYyAqL1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBhY3Rpb25zOiB0eXBlcygnZnVuYycpLFxuICAgICAgICBhY3Rpb25zUG9zaXRpb246IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2JvdGgnLCAnYm90dG9tJywgJ3RvcCddKSxcbiAgICAgICAgdGl0bGU6IHR5cGVzKCdzdHJpbmcnKVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBIZWFkZXIgb2YgdGhlYmxvY2sgZnVuY3Rpb24uXG4gICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAqL1xuICAgIGhlYWRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRpdGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pMThuKHRoaXMucHJvcHMudGl0bGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAwLjcuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBTYWdlc3NDb21wb25lbnRzLmNvbXBvbmVudHMuUGFuZWwnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBhIGJsb2NrIGNvbnRhaW5lciBhbmQgdGhlIGNpbGQgY29udGVudCBvZiB0aGUgYmxvY2suXG4gICAgKiBAcmV0dXJuIHtET019IFJlYWN0IERPTSBlbGVtZW50XG4gICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aW9ucywgYWN0aW9uc1Bvc2l0aW9uLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc2hvdWxkRGlzcGxheUFjdGlvbnNUb3AgPSBhY3Rpb25zICYmIFsnYm90aCcsICd0b3AnXS5pbmNsdWRlcyhhY3Rpb25zUG9zaXRpb24pO1xuICAgICAgICBjb25zdCBzaG91bGREaXNwbGF5QWN0aW9uc0JvdHRvbSA9IGFjdGlvbnMgJiYgWydib3RoJywgJ2JvdHRvbSddLmluY2x1ZGVzKGFjdGlvbnNQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWRsLWNhcmQgbWRsLWNhcmQtLWJvcmRlciBtZGwtc2hhZG93LS00ZHAnIGRhdGEtZm9jdXM9J2Jsb2NrJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWRsLWNhcmRfX3RpdGxlIG1kbC1jYXJkLS1ib3JkZXInIGRhdGEtZm9jdXM9J2Jsb2NrLXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGxhYmVsPXt0aGlzLmhlYWRpbmcoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAge3Nob3VsZERpc3BsYXlBY3Rpb25zVG9wICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb25zJz57YWN0aW9ucygpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0JyBkYXRhLWZvY3VzPSdibG9jay1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtzaG91bGREaXNwbGF5QWN0aW9uc0JvdHRvbSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyJyBkYXRhLWZvY3VzPSdibG9jay1hY3Rpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoYmxvY2tNaXhpbik7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==