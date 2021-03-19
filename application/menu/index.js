'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _history = require('sagess-core/history');

var _history2 = _interopRequireDefault(_history);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _popinBehaviour = require('../mixin/popin-behaviour');

var _stylable = require('../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
var Menu = {
    mixins: [_stylable2.default, _popinBehaviour.mixin], /** @inheritedProps*/
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use component from sagess-components/components/menu');
    },

    /** @inheritedProps*/
    getDefaultProps: function getDefaultProps() {
        return {
            items: []
        };
    },

    /** @inheritedProps*/
    propTypes: {
        code: (0, _types2.default)('array')
    },
    /**
    * Toggle the state of the menu.
    */
    toggle: function toggle() {
        this.setState({ open: !this.state.open });
    },

    /**
    * Render the links of the menu
    */
    _renderMenuItems: function _renderMenuItems() {
        var _this = this,
            _arguments = arguments;

        return this.props.items.map(function (link, idx) {
            var clickHandler = void 0;
            if (link.route !== undefined) {
                clickHandler = function clickHandler() {
                    if (link.onClick) link.onClick.call(_this, _arguments);
                    _history2.default.navigate(link.route, true);
                };
            } else {
                clickHandler = link.onClick;
            }
            var buttonProps = Object.assign({
                option: 'link',
                shape: 'icon',
                type: 'button'
            }, link);
            return _react2.default.createElement(
                'li',
                { key: idx, onClick: clickHandler },
                _react2.default.createElement(_button2.default, buttonProps),
                _react2.default.createElement(
                    'span',
                    null,
                    link.name
                )
            );
        });
    },

    /** @inheriteddoc */
    render: function render() {
        var _props = this.props,
            direction = _props.direction,
            position = _props.position,
            children = _props.children;

        var className = 'menu menu-' + direction + ' menu-' + position + ' menu-' + (this.state.open ? 'open' : '') + ' ' + this._getStyleClassName();
        return _react2.default.createElement(
            'nav',
            { className: className, 'data-focus': 'menu' },
            _react2.default.createElement('div', { 'data-focus': 'menu-brand' }),
            _react2.default.createElement(
                'ul',
                { 'data-focus': 'menu-items' },
                this._renderMenuItems()
            ),
            children
        );
    }
};
// Components

// Mixins

var _builder = (0, _builder3.default)(Menu),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiTWVudSIsIm1peGlucyIsInN0eWxhYmUiLCJwb3BpblByb3BlcnRpZXMiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsImdldERlZmF1bHRQcm9wcyIsIml0ZW1zIiwicHJvcFR5cGVzIiwiY29kZSIsInRvZ2dsZSIsInNldFN0YXRlIiwib3BlbiIsInN0YXRlIiwiX3JlbmRlck1lbnVJdGVtcyIsInByb3BzIiwibWFwIiwibGluayIsImlkeCIsImNsaWNrSGFuZGxlciIsInJvdXRlIiwidW5kZWZpbmVkIiwib25DbGljayIsImNhbGwiLCJoaXN0b3JpYyIsIm5hdmlnYXRlIiwiYnV0dG9uUHJvcHMiLCJvcHRpb24iLCJzaGFwZSIsInR5cGUiLCJuYW1lIiwicmVuZGVyIiwiZGlyZWN0aW9uIiwicG9zaXRpb24iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIl9nZXRTdHlsZUNsYXNzTmFtZSIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUVBOzs7Ozs7QUFSQTtBQVVBLElBQU1BLE9BQU87QUFDVEMsWUFBUSxDQUFDQyxrQkFBRCxFQUFVQyxxQkFBVixDQURDLEVBQzBCO0FBQ25DQyxzQkFGUyxnQ0FFWTtBQUNqQkMsZ0JBQVFDLElBQVIsQ0FBYSxtSEFBYjtBQUNILEtBSlE7O0FBS1Q7QUFDQUMsbUJBTlMsNkJBTVM7QUFDZCxlQUFPO0FBQ0hDLG1CQUFPO0FBREosU0FBUDtBQUdILEtBVlE7O0FBV1Q7QUFDQUMsZUFBVztBQUNQQyxjQUFNLHFCQUFNLE9BQU47QUFEQyxLQVpGO0FBZVQ7OztBQUdBQyxVQWxCUyxvQkFrQkE7QUFDTCxhQUFLQyxRQUFMLENBQWMsRUFBRUMsTUFBTSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0QsSUFBcEIsRUFBZDtBQUNILEtBcEJROztBQXFCVDs7O0FBR0FFLG9CQXhCUyw4QkF3QlU7QUFBQTtBQUFBOztBQUNmLGVBQU8sS0FBS0MsS0FBTCxDQUFXUixLQUFYLENBQWlCUyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUN2QyxnQkFBSUMscUJBQUo7QUFDQSxnQkFBSUYsS0FBS0csS0FBTCxLQUFlQyxTQUFuQixFQUE4QjtBQUMxQkYsK0JBQWUsd0JBQU07QUFDakIsd0JBQUlGLEtBQUtLLE9BQVQsRUFBa0JMLEtBQUtLLE9BQUwsQ0FBYUMsSUFBYjtBQUNsQkMsc0NBQVNDLFFBQVQsQ0FBa0JSLEtBQUtHLEtBQXZCLEVBQThCLElBQTlCO0FBQ0gsaUJBSEQ7QUFJSCxhQUxELE1BS087QUFDSEQsK0JBQWVGLEtBQUtLLE9BQXBCO0FBQ0g7QUFDRCxnQkFBTUk7QUFDRkMsd0JBQVEsTUFETjtBQUVGQyx1QkFBTyxNQUZMO0FBR0ZDLHNCQUFNO0FBSEosZUFJQ1osSUFKRCxDQUFOO0FBTUEsbUJBQ0k7QUFBQTtBQUFBLGtCQUFJLEtBQUtDLEdBQVQsRUFBYyxTQUFTQyxZQUF2QjtBQUNJLDhDQUFDLGdCQUFELEVBQVlPLFdBQVosQ0FESjtBQUVJO0FBQUE7QUFBQTtBQUFPVCx5QkFBS2E7QUFBWjtBQUZKLGFBREo7QUFNSCxTQXRCTSxDQUFQO0FBdUJILEtBaERROztBQWlEVDtBQUNBQyxVQWxEUyxvQkFrREE7QUFBQSxxQkFDcUMsS0FBS2hCLEtBRDFDO0FBQUEsWUFDR2lCLFNBREgsVUFDR0EsU0FESDtBQUFBLFlBQ2NDLFFBRGQsVUFDY0EsUUFEZDtBQUFBLFlBQ3dCQyxRQUR4QixVQUN3QkEsUUFEeEI7O0FBRUwsWUFBTUMsMkJBQXlCSCxTQUF6QixjQUEyQ0MsUUFBM0MsZUFBNEQsS0FBS3BCLEtBQUwsQ0FBV0QsSUFBWCxHQUFrQixNQUFsQixHQUEyQixFQUF2RixVQUE2RixLQUFLd0Isa0JBQUwsRUFBbkc7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVdELFNBQWhCLEVBQTJCLGNBQVcsTUFBdEM7QUFDSSxtREFBSyxjQUFXLFlBQWhCLEdBREo7QUFFSTtBQUFBO0FBQUEsa0JBQUksY0FBVyxZQUFmO0FBQTZCLHFCQUFLckIsZ0JBQUw7QUFBN0IsYUFGSjtBQUdLb0I7QUFITCxTQURKO0FBT0g7QUE1RFEsQ0FBYjtBQUhBOztBQUhBOztlQXFFNkIsdUJBQVFuQyxJQUFSLEM7SUFBckJzQyxLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IGhpc3RvcmljIGZyb20gJ3NhZ2Vzcy1jb3JlL2hpc3RvcnknO1xuaW1wb3J0IHR5cGVzIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC90eXBlcyc7XG4vLyBNaXhpbnNcbmltcG9ydCB7IG1peGluIGFzIHBvcGluUHJvcGVydGllcyB9IGZyb20gJy4uL21peGluL3BvcGluLWJlaGF2aW91cic7XG5pbXBvcnQgc3R5bGFiZSBmcm9tICcuLi8uLi9taXhpbi9zdHlsYWJsZSdcbi8vIENvbXBvbmVudHNcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nO1xuXG5jb25zdCBNZW51ID0ge1xuICAgIG1peGluczogW3N0eWxhYmUsIHBvcGluUHJvcGVydGllc10sLyoqIEBpbmhlcml0ZWRQcm9wcyovXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgMi4yLjA6IHRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgY29tcG9uZW50IGZyb20gc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9tZW51Jyk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRlZFByb3BzKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGVkUHJvcHMqL1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb2RlOiB0eXBlcygnYXJyYXknKVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBUb2dnbGUgdGhlIHN0YXRlIG9mIHRoZSBtZW51LlxuICAgICovXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBsaW5rcyBvZiB0aGUgbWVudVxuICAgICovXG4gICAgX3JlbmRlck1lbnVJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaXRlbXMubWFwKChsaW5rLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGxldCBjbGlja0hhbmRsZXI7XG4gICAgICAgICAgICBpZiAobGluay5yb3V0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGluay5vbkNsaWNrKSBsaW5rLm9uQ2xpY2suY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3JpYy5uYXZpZ2F0ZShsaW5rLnJvdXRlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXIgPSBsaW5rLm9uQ2xpY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBidXR0b25Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBvcHRpb246ICdsaW5rJyxcbiAgICAgICAgICAgICAgICBzaGFwZTogJ2ljb24nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIC4uLmxpbmtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0gb25DbGljaz17Y2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB7Li4uYnV0dG9uUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntsaW5rLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGVkZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGRpcmVjdGlvbiwgcG9zaXRpb24sIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgbWVudSBtZW51LSR7ZGlyZWN0aW9ufSBtZW51LSR7cG9zaXRpb259IG1lbnUtJHt0aGlzLnN0YXRlLm9wZW4gPyAnb3BlbicgOiAnJ30gJHt0aGlzLl9nZXRTdHlsZUNsYXNzTmFtZSgpfWA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBkYXRhLWZvY3VzPSdtZW51Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J21lbnUtYnJhbmQnIC8+XG4gICAgICAgICAgICAgICAgPHVsIGRhdGEtZm9jdXM9J21lbnUtaXRlbXMnPnt0aGlzLl9yZW5kZXJNZW51SXRlbXMoKX08L3VsPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihNZW51KTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19