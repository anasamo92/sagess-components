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

var _mixin = require('../common/i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _button = require('../components/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageMixin = {
    /** @inheritedDoc */
    getDefaultProps: function getDefaultProps() {
        return {
            type: 'info',
            style: {}
        };
    },


    /** @inheritedDoc */
    propTypes: {
        content: (0, _types2.default)('string'),
        style: (0, _types2.default)('object'),
        title: (0, _types2.default)('string'),
        ttl: (0, _types2.default)('number'),
        type: (0, _types2.default)('string')
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use the message center instead instead');
    },

    /** @inheritedDoc */
    componentDidMount: function componentDidMount() {
        var _this = this;

        if (this.props.ttl) {
            setTimeout(function () {
                _this._handleTimeToLeave();
            }, this.props.ttl);
        }
    },


    /** @inheritedDoc */
    mixins: [_mixin2.default],

    /**
    * Time to leave handler.
    */
    _handleTimeToLeave: function _handleTimeToLeave() {
        var _props = this.props,
            handleTimeToLeave = _props.handleTimeToLeave,
            id = _props.id;

        if (handleTimeToLeave) {
            handleTimeToLeave(id);
        }
    },


    /**
    * Handle click on the dismiss button.
    * @param {Event} event - Sanitize event.
    */
    _handleOnClick: function _handleOnClick(event) {
        var _props2 = this.props,
            handleOnClick = _props2.handleOnClick,
            id = _props2.id;

        if (handleOnClick) {
            handleOnClick(id);
        }
    },


    /**
    * Render an alert.
    * @return {JSX} The jsx.
    */
    render: function render() {
        var _props3 = this.props,
            type = _props3.type,
            id = _props3.id,
            content = _props3.content,
            title = _props3.title;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'message', 'data-id': id, 'data-message-type': type },
            _react2.default.createElement(_button2.default, { handleOnClick: this._handleOnClick, icon: 'clear', shape: 'icon', type: 'button' }),
            title && _react2.default.createElement(
                'h4',
                null,
                title
            ),
            _react2.default.createElement(
                'p',
                null,
                this.i18n(content)
            )
        );
    }
};

var _builder = (0, _builder3.default)(messageMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibWVzc2FnZU1peGluIiwiZ2V0RGVmYXVsdFByb3BzIiwidHlwZSIsInN0eWxlIiwicHJvcFR5cGVzIiwiY29udGVudCIsInRpdGxlIiwidHRsIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwic2V0VGltZW91dCIsIl9oYW5kbGVUaW1lVG9MZWF2ZSIsIm1peGlucyIsImkxOG5CZWhhdmlvdXIiLCJoYW5kbGVUaW1lVG9MZWF2ZSIsImlkIiwiX2hhbmRsZU9uQ2xpY2siLCJldmVudCIsImhhbmRsZU9uQ2xpY2siLCJyZW5kZXIiLCJpMThuIiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlO0FBQ2pCO0FBQ0FDLG1CQUZpQiw2QkFFQztBQUNkLGVBQU87QUFDSEMsa0JBQU0sTUFESDtBQUVIQyxtQkFBTztBQUZKLFNBQVA7QUFJSCxLQVBnQjs7O0FBU2pCO0FBQ0FDLGVBQVc7QUFDUEMsaUJBQVMscUJBQU0sUUFBTixDQURGO0FBRVBGLGVBQU8scUJBQU0sUUFBTixDQUZBO0FBR1BHLGVBQU8scUJBQU0sUUFBTixDQUhBO0FBSVBDLGFBQUsscUJBQU0sUUFBTixDQUpFO0FBS1BMLGNBQU0scUJBQU0sUUFBTjtBQUxDLEtBVk07QUFpQmpCTSxzQkFqQmlCLGdDQWlCSTtBQUNqQkMsZ0JBQVFDLElBQVIsQ0FBYSxxR0FBYjtBQUNILEtBbkJnQjs7QUFvQmpCO0FBQ0FDLHFCQXJCaUIsK0JBcUJHO0FBQUE7O0FBQ2hCLFlBQUksS0FBS0MsS0FBTCxDQUFXTCxHQUFmLEVBQW9CO0FBQ2hCTSx1QkFBVyxZQUFNO0FBQ2Isc0JBQUtDLGtCQUFMO0FBQ0gsYUFGRCxFQUVHLEtBQUtGLEtBQUwsQ0FBV0wsR0FGZDtBQUdIO0FBQ0osS0EzQmdCOzs7QUE2QmpCO0FBQ0FRLFlBQVEsQ0FBQ0MsZUFBRCxDQTlCUzs7QUFnQ2pCOzs7QUFHQUYsc0JBbkNpQixnQ0FtQ0k7QUFBQSxxQkFDZSxLQUFLRixLQURwQjtBQUFBLFlBQ1hLLGlCQURXLFVBQ1hBLGlCQURXO0FBQUEsWUFDUUMsRUFEUixVQUNRQSxFQURSOztBQUVqQixZQUFJRCxpQkFBSixFQUF1QjtBQUNuQkEsOEJBQWtCQyxFQUFsQjtBQUNIO0FBQ0osS0F4Q2dCOzs7QUEwQ2pCOzs7O0FBSUFDLGtCQTlDaUIsMEJBOENGQyxLQTlDRSxFQThDSztBQUFBLHNCQUNVLEtBQUtSLEtBRGY7QUFBQSxZQUNaUyxhQURZLFdBQ1pBLGFBRFk7QUFBQSxZQUNHSCxFQURILFdBQ0dBLEVBREg7O0FBRWxCLFlBQUlHLGFBQUosRUFBbUI7QUFDZkEsMEJBQWNILEVBQWQ7QUFDSDtBQUNKLEtBbkRnQjs7O0FBcURqQjs7OztBQUlBSSxVQXpEaUIsb0JBeURSO0FBQUEsc0JBQ2dDLEtBQUtWLEtBRHJDO0FBQUEsWUFDR1YsSUFESCxXQUNHQSxJQURIO0FBQUEsWUFDU2dCLEVBRFQsV0FDU0EsRUFEVDtBQUFBLFlBQ2FiLE9BRGIsV0FDYUEsT0FEYjtBQUFBLFlBQ3NCQyxLQUR0QixXQUNzQkEsS0FEdEI7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxjQUFXLFNBQWhCLEVBQTBCLFdBQVNZLEVBQW5DLEVBQXVDLHFCQUFtQmhCLElBQTFEO0FBQ0ksMENBQUMsZ0JBQUQsSUFBUSxlQUFlLEtBQUtpQixjQUE1QixFQUE0QyxNQUFLLE9BQWpELEVBQXlELE9BQU0sTUFBL0QsRUFBc0UsTUFBSyxRQUEzRSxHQURKO0FBRUtiLHFCQUFTO0FBQUE7QUFBQTtBQUFLQTtBQUFMLGFBRmQ7QUFHSTtBQUFBO0FBQUE7QUFBSSxxQkFBS2lCLElBQUwsQ0FBVWxCLE9BQVY7QUFBSjtBQUhKLFNBREo7QUFPSDtBQWxFZ0IsQ0FBckI7O2VBcUU2Qix1QkFBUUwsWUFBUixDO0lBQXJCd0IsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgdHlwZXMgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbmltcG9ydCBpMThuQmVoYXZpb3VyIGZyb20gJy4uL2NvbW1vbi9pMThuL21peGluJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nO1xuXG5jb25zdCBtZXNzYWdlTWl4aW4gPSB7XG4gICAgLyoqIEBpbmhlcml0ZWREb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqIEBpbmhlcml0ZWREb2MgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29udGVudDogdHlwZXMoJ3N0cmluZycpLFxuICAgICAgICBzdHlsZTogdHlwZXMoJ29iamVjdCcpLFxuICAgICAgICB0aXRsZTogdHlwZXMoJ3N0cmluZycpLFxuICAgICAgICB0dGw6IHR5cGVzKCdudW1iZXInKSxcbiAgICAgICAgdHlwZTogdHlwZXMoJ3N0cmluZycpXG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAyLjIuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSB0aGUgbWVzc2FnZSBjZW50ZXIgaW5zdGVhZCBpbnN0ZWFkJyk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRlZERvYyAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50dGwpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVRpbWVUb0xlYXZlKCk7XG4gICAgICAgICAgICB9LCB0aGlzLnByb3BzLnR0bCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqIEBpbmhlcml0ZWREb2MgKi9cbiAgICBtaXhpbnM6IFtpMThuQmVoYXZpb3VyXSxcblxuICAgIC8qKlxuICAgICogVGltZSB0byBsZWF2ZSBoYW5kbGVyLlxuICAgICovXG4gICAgX2hhbmRsZVRpbWVUb0xlYXZlKCkge1xuICAgICAgICBsZXQgeyBoYW5kbGVUaW1lVG9MZWF2ZSwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChoYW5kbGVUaW1lVG9MZWF2ZSkge1xuICAgICAgICAgICAgaGFuZGxlVGltZVRvTGVhdmUoaWQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogSGFuZGxlIGNsaWNrIG9uIHRoZSBkaXNtaXNzIGJ1dHRvbi5cbiAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gU2FuaXRpemUgZXZlbnQuXG4gICAgKi9cbiAgICBfaGFuZGxlT25DbGljayhldmVudCkge1xuICAgICAgICBsZXQgeyBoYW5kbGVPbkNsaWNrLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGhhbmRsZU9uQ2xpY2spIHtcbiAgICAgICAgICAgIGhhbmRsZU9uQ2xpY2soaWQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmVuZGVyIGFuIGFsZXJ0LlxuICAgICogQHJldHVybiB7SlNYfSBUaGUganN4LlxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIGlkLCBjb250ZW50LCB0aXRsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbWVzc2FnZScgZGF0YS1pZD17aWR9IGRhdGEtbWVzc2FnZS10eXBlPXt0eXBlfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGhhbmRsZU9uQ2xpY2s9e3RoaXMuX2hhbmRsZU9uQ2xpY2t9IGljb249J2NsZWFyJyBzaGFwZT0naWNvbicgdHlwZT0nYnV0dG9uJyAvPlxuICAgICAgICAgICAgICAgIHt0aXRsZSAmJiA8aDQ+e3RpdGxlfTwvaDQ+fVxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLmkxOG4oY29udGVudCl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKG1lc3NhZ2VNaXhpbik7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==