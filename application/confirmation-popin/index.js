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

var _popin = require('../popin');

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
var ConfirmationPopin = {
    /**
    * Display name.
    */
    displayName: 'confirmation-popin',
    mixins: [_mixin2.default],
    getDefaultProps: function getDefaultProps() {
        return {
            open: false,
            cancelButtonLabel: 'popin.confirmation.cancel',
            confirmButtonLabel: 'popin.confirmation.confirm'
        };
    },
    getInitialState: function getInitialState() {
        return {
            fromButtonClick: false
        };
    },


    propTypes: {
        cancelButtonLabel: (0, _types2.default)('string'),
        cancelHandler: (0, _types2.default)(['func', 'object']),
        confirmButtonLabel: (0, _types2.default)('string'),
        confirmHandler: (0, _types2.default)(['func', 'object'])
    },

    /**
    * Confirmation action handler
    */
    _handleConfirm: function _handleConfirm() {
        this.toggleOpen();
        if (this.props.confirmHandler) {
            this.props.confirmHandler();
        }
    },


    /**
    * Cancel action handler
    */
    _handleCancel: function _handleCancel() {
        this.toggleOpen();
        if (this.props.cancelHandler) {
            this.props.cancelHandler();
        }
    },
    _handlePopinClose: function _handlePopinClose() {
        if (this.props.cancelHandler && !this.state.fromButtonClick) {
            this.props.cancelHandler();
        }
        this.setState({ fromButtonClick: false });
    },
    toggleOpen: function toggleOpen() {
        var _this = this;

        this.setState({
            fromButtonClick: true
        }, function () {
            _this.refs.popin.toggleOpen();
        });
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'confirmation-popin' },
            _react2.default.createElement(
                _popin.component,
                { onPopinClose: this._handlePopinClose, open: this.props.open, ref: 'popin' },
                this.props.children,
                _react2.default.createElement(
                    'div',
                    { 'data-focus': 'button-stack' },
                    _react2.default.createElement(_button2.default, { handleOnClick: this._handleCancel, label: this.i18n(this.props.cancelButtonLabel) }),
                    _react2.default.createElement(_button2.default, { handleOnClick: this._handleConfirm, label: this.i18n(this.props.confirmButtonLabel), option: 'primary' })
                )
            )
        );
    }
};
// Mixins

// Dependencies

var _builder = (0, _builder3.default)(ConfirmationPopin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQ29uZmlybWF0aW9uUG9waW4iLCJkaXNwbGF5TmFtZSIsIm1peGlucyIsImkxOG5NaXhpbiIsImdldERlZmF1bHRQcm9wcyIsIm9wZW4iLCJjYW5jZWxCdXR0b25MYWJlbCIsImNvbmZpcm1CdXR0b25MYWJlbCIsImdldEluaXRpYWxTdGF0ZSIsImZyb21CdXR0b25DbGljayIsInByb3BUeXBlcyIsImNhbmNlbEhhbmRsZXIiLCJjb25maXJtSGFuZGxlciIsIl9oYW5kbGVDb25maXJtIiwidG9nZ2xlT3BlbiIsInByb3BzIiwiX2hhbmRsZUNhbmNlbCIsIl9oYW5kbGVQb3BpbkNsb3NlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJlZnMiLCJwb3BpbiIsInJlbmRlciIsImNoaWxkcmVuIiwiaTE4biIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBRkE7QUFJQSxJQUFJQSxvQkFBb0I7QUFDcEI7OztBQUdBQyxpQkFBYSxvQkFKTztBQUtwQkMsWUFBUSxDQUFDQyxlQUFELENBTFk7QUFNcEJDLG1CQU5vQiw2QkFNRjtBQUNkLGVBQU87QUFDSEMsa0JBQU0sS0FESDtBQUVIQywrQkFBbUIsMkJBRmhCO0FBR0hDLGdDQUFvQjtBQUhqQixTQUFQO0FBS0gsS0FabUI7QUFjcEJDLG1CQWRvQiw2QkFjRjtBQUNkLGVBQVE7QUFDSkMsNkJBQWlCO0FBRGIsU0FBUjtBQUdILEtBbEJtQjs7O0FBb0JwQkMsZUFBVztBQUNQSiwyQkFBbUIscUJBQUssUUFBTCxDQURaO0FBRVBLLHVCQUFlLHFCQUFLLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBTCxDQUZSO0FBR1BKLDRCQUFvQixxQkFBSyxRQUFMLENBSGI7QUFJUEssd0JBQWdCLHFCQUFLLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBTDtBQUpULEtBcEJTOztBQTJCcEI7OztBQUdBQyxrQkE5Qm9CLDRCQThCSDtBQUNiLGFBQUtDLFVBQUw7QUFDQSxZQUFJLEtBQUtDLEtBQUwsQ0FBV0gsY0FBZixFQUErQjtBQUMzQixpQkFBS0csS0FBTCxDQUFXSCxjQUFYO0FBQ0g7QUFDSixLQW5DbUI7OztBQXFDcEI7OztBQUdBSSxpQkF4Q29CLDJCQXdDSjtBQUNaLGFBQUtGLFVBQUw7QUFDQSxZQUFJLEtBQUtDLEtBQUwsQ0FBV0osYUFBZixFQUE4QjtBQUMxQixpQkFBS0ksS0FBTCxDQUFXSixhQUFYO0FBQ0g7QUFDSixLQTdDbUI7QUErQ3BCTSxxQkEvQ29CLCtCQStDQTtBQUNoQixZQUFJLEtBQUtGLEtBQUwsQ0FBV0osYUFBWCxJQUE0QixDQUFDLEtBQUtPLEtBQUwsQ0FBV1QsZUFBNUMsRUFBNkQ7QUFDekQsaUJBQUtNLEtBQUwsQ0FBV0osYUFBWDtBQUNIO0FBQ0QsYUFBS1EsUUFBTCxDQUFjLEVBQUVWLGlCQUFpQixLQUFuQixFQUFkO0FBQ0gsS0FwRG1CO0FBc0RwQkssY0F0RG9CLHdCQXNEUDtBQUFBOztBQUNULGFBQUtLLFFBQUwsQ0FBYztBQUNWViw2QkFBaUI7QUFEUCxTQUFkLEVBRUcsWUFBTTtBQUNMLGtCQUFLVyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JQLFVBQWhCO0FBQ0gsU0FKRDtBQUtILEtBNURtQjtBQThEcEJRLFVBOURvQixvQkE4RFg7QUFDTCxlQUNJO0FBQUE7QUFBQSxjQUFLLGNBQVcsb0JBQWhCO0FBQ0k7QUFBQyxnQ0FBRDtBQUFBLGtCQUFPLGNBQWMsS0FBS0wsaUJBQTFCLEVBQTZDLE1BQU0sS0FBS0YsS0FBTCxDQUFXVixJQUE5RCxFQUFvRSxLQUFJLE9BQXhFO0FBQ0sscUJBQUtVLEtBQUwsQ0FBV1EsUUFEaEI7QUFFSTtBQUFBO0FBQUEsc0JBQUssY0FBVyxjQUFoQjtBQUNJLGtEQUFDLGdCQUFELElBQVEsZUFBZSxLQUFLUCxhQUE1QixFQUEyQyxPQUFPLEtBQUtRLElBQUwsQ0FBVSxLQUFLVCxLQUFMLENBQVdULGlCQUFyQixDQUFsRCxHQURKO0FBRUksa0RBQUMsZ0JBQUQsSUFBUSxlQUFlLEtBQUtPLGNBQTVCLEVBQTRDLE9BQU8sS0FBS1csSUFBTCxDQUFVLEtBQUtULEtBQUwsQ0FBV1Isa0JBQXJCLENBQW5ELEVBQTZGLFFBQU8sU0FBcEc7QUFGSjtBQUZKO0FBREosU0FESjtBQVdIO0FBMUVtQixDQUF4QjtBQU5BOztBQUhBOztlQXNGNkIsdUJBQVFQLGlCQUFSLEM7SUFBckJ5QixLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHR5cGUgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbi8vIE1peGluc1xuaW1wb3J0IGkxOG5NaXhpbiBmcm9tICcuLi8uLi9jb21tb24vaTE4bi9taXhpbic7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBjb21wb25lbnQgYXMgUG9waW4gfSBmcm9tICcuLi9wb3Bpbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJztcblxubGV0IENvbmZpcm1hdGlvblBvcGluID0ge1xuICAgIC8qKlxuICAgICogRGlzcGxheSBuYW1lLlxuICAgICovXG4gICAgZGlzcGxheU5hbWU6ICdjb25maXJtYXRpb24tcG9waW4nLFxuICAgIG1peGluczogW2kxOG5NaXhpbl0sXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25MYWJlbDogJ3BvcGluLmNvbmZpcm1hdGlvbi5jYW5jZWwnLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkxhYmVsOiAncG9waW4uY29uZmlybWF0aW9uLmNvbmZpcm0nXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBmcm9tQnV0dG9uQ2xpY2s6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY2FuY2VsQnV0dG9uTGFiZWw6IHR5cGUoJ3N0cmluZycpLFxuICAgICAgICBjYW5jZWxIYW5kbGVyOiB0eXBlKFsnZnVuYycsICdvYmplY3QnXSksXG4gICAgICAgIGNvbmZpcm1CdXR0b25MYWJlbDogdHlwZSgnc3RyaW5nJyksXG4gICAgICAgIGNvbmZpcm1IYW5kbGVyOiB0eXBlKFsnZnVuYycsICdvYmplY3QnXSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBDb25maXJtYXRpb24gYWN0aW9uIGhhbmRsZXJcbiAgICAqL1xuICAgIF9oYW5kbGVDb25maXJtKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZU9wZW4oKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlybUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlybUhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIENhbmNlbCBhY3Rpb24gaGFuZGxlclxuICAgICovXG4gICAgX2hhbmRsZUNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuKCk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNhbmNlbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FuY2VsSGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9oYW5kbGVQb3BpbkNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jYW5jZWxIYW5kbGVyICYmICF0aGlzLnN0YXRlLmZyb21CdXR0b25DbGljaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYW5jZWxIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZyb21CdXR0b25DbGljazogZmFsc2UgfSk7XG4gICAgfSxcblxuICAgIHRvZ2dsZU9wZW4oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZnJvbUJ1dHRvbkNsaWNrOiB0cnVlXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVmcy5wb3Bpbi50b2dnbGVPcGVuKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2NvbmZpcm1hdGlvbi1wb3Bpbic+XG4gICAgICAgICAgICAgICAgPFBvcGluIG9uUG9waW5DbG9zZT17dGhpcy5faGFuZGxlUG9waW5DbG9zZX0gb3Blbj17dGhpcy5wcm9wcy5vcGVufSByZWY9J3BvcGluJz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nYnV0dG9uLXN0YWNrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaGFuZGxlT25DbGljaz17dGhpcy5faGFuZGxlQ2FuY2VsfSBsYWJlbD17dGhpcy5pMThuKHRoaXMucHJvcHMuY2FuY2VsQnV0dG9uTGFiZWwpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBoYW5kbGVPbkNsaWNrPXt0aGlzLl9oYW5kbGVDb25maXJtfSBsYWJlbD17dGhpcy5pMThuKHRoaXMucHJvcHMuY29uZmlybUJ1dHRvbkxhYmVsKX0gb3B0aW9uPSdwcmltYXJ5JyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1BvcGluPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKENvbmZpcm1hdGlvblBvcGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19