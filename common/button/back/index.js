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

var _mixin = require('../../i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _stylable = require('../../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

var _action = require('../action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Mixin button.
* @type {Object}
*/
var buttonBackMixin = {
    /** inheritedDoc */
    mixins: [_mixin2.default, _stylable2.default],
    /** inheritedDoc */
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents v0.15: this component is deprecated, please use SagessComponents.components.Back');
    },
    render: function render() {
        return _react2.default.createElement(_action.component, {
            handleOnClick: function handleOnClick() {
                _history2.default.history.back();
            },
            icon: 'keyboard_backspace',
            label: this.i18n('button.back'),
            shape: null,
            type: 'button'
        });
    }
};
// Components

// Mixins

// Dependencies

var _builder = (0, _builder3.default)(buttonBackMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiYnV0dG9uQmFja01peGluIiwibWl4aW5zIiwiaTE4bk1peGluIiwic3R5bGFibGVNaXhpbiIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwicmVuZGVyIiwiaGlzdG9yaWMiLCJoaXN0b3J5IiwiYmFjayIsImkxOG4iLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBSUEsSUFBTUEsa0JBQWtCO0FBQ3BCO0FBQ0FDLFlBQVEsQ0FBQ0MsZUFBRCxFQUFZQyxrQkFBWixDQUZZO0FBR3BCO0FBQ0FDLHNCQUpvQixnQ0FJQztBQUNqQkMsZ0JBQVFDLElBQVIsQ0FBYSxtR0FBYjtBQUNILEtBTm1CO0FBT3BCQyxVQVBvQixvQkFPWDtBQUNMLGVBQ0ksOEJBQUMsaUJBQUQ7QUFDSSwyQkFBZSx5QkFBTTtBQUFFQyxrQ0FBU0MsT0FBVCxDQUFpQkMsSUFBakI7QUFBeUIsYUFEcEQ7QUFFSSxrQkFBSyxvQkFGVDtBQUdJLG1CQUFPLEtBQUtDLElBQUwsQ0FBVSxhQUFWLENBSFg7QUFJSSxtQkFBTyxJQUpYO0FBS0ksa0JBQUs7QUFMVCxVQURKO0FBU0g7QUFqQm1CLENBQXhCO0FBUEE7O0FBSEE7O0FBSEE7O2VBaUM2Qix1QkFBUVgsZUFBUixDO0lBQXJCWSxLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IGhpc3RvcmljIGZyb20gJ3NhZ2Vzcy1jb3JlL2hpc3RvcnknO1xuLy8gTWl4aW5zXG5pbXBvcnQgaTE4bk1peGluIGZyb20gJy4uLy4uL2kxOG4vbWl4aW4nO1xuaW1wb3J0IHN0eWxhYmxlTWl4aW4gZnJvbSAnLi4vLi4vLi4vbWl4aW4vc3R5bGFibGUnO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIEJ1dHRvbiB9IGZyb20gJy4uL2FjdGlvbic7XG5cbi8qKlxuKiBNaXhpbiBidXR0b24uXG4qIEB0eXBlIHtPYmplY3R9XG4qL1xuY29uc3QgYnV0dG9uQmFja01peGluID0ge1xuICAgIC8qKiBpbmhlcml0ZWREb2MgKi9cbiAgICBtaXhpbnM6IFtpMThuTWl4aW4sIHN0eWxhYmxlTWl4aW5dLFxuICAgIC8qKiBpbmhlcml0ZWREb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyB2MC4xNTogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBTYWdlc3NDb21wb25lbnRzLmNvbXBvbmVudHMuQmFjaycpO1xuICAgIH0sXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2xpY2s9eygpID0+IHsgaGlzdG9yaWMuaGlzdG9yeS5iYWNrKCkgfX1cbiAgICAgICAgICAgICAgICBpY29uPSdrZXlib2FyZF9iYWNrc3BhY2UnXG4gICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMuaTE4bignYnV0dG9uLmJhY2snKX1cbiAgICAgICAgICAgICAgICBzaGFwZT17bnVsbH1cbiAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihidXR0b25CYWNrTWl4aW4pO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=