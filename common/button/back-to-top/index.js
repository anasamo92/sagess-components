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

var _action = require('../action');

var _mixin = require('../../i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _stylable = require('../../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

var _scroll = require('../../mixin/scroll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Mixin button.
* @type {Object}
*/
var backToTopMixin = {
    displayName: 'ButtonBackToTop',
    mixins: [_mixin2.default, _stylable2.default],
    /** inheritedDoc */
    getDefaultProps: function getDefaultProps() {
        return {
            iconPrefix: 'fa fa-',
            iconName: 'arrow-circle-up',
            duration: 100,
            scrollStart: 100
        };
    },

    /**
    * Props validation
    */
    propTypes: {
        iconPrefix: (0, _types2.default)('string'),
        iconName: (0, _types2.default)('string'),
        duration: (0, _types2.default)('number'),
        scrollStart: (0, _types2.default)('number')
    },
    /** inheritedDoc */
    getInitialState: function getInitialState() {
        return {
            isVisible: false
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents v0.15: the \'ButtonBackToTop\' component from SagessComponents.common is deprecated, please use SagessComponents.components.ButtonBackToTop');
    },

    /**
    * Component did mount, attach the scroll spy
    */
    componentDidMount: function componentDidMount() {
        this._scrollCarrier = window;
        this._scrollCarrier.addEventListener('scroll', this._scrollSpy);
        this._scrollCarrier.addEventListener('resize', this._scrollSpy);
        this._scrollSpy();
    },
    componentWillUnmount: function componentWillUnmount() {
        this._scrollCarrier.removeEventListener('scroll', this._scrollSpy);
        this._scrollCarrier.removeEventListener('resize', this._scrollSpy);
    },

    /**
    * The scroll event handler
    * @private
    */
    _scrollSpy: function _scrollSpy() {
        var currentScrollPosition = (0, _scroll.scrollPosition)();
        if (currentScrollPosition.top > this.props.scrollStart) {
            if (!this.state.isVisible) {
                this.setState({ isVisible: true });
            }
        } else {
            if (this.state.isVisible) {
                this.setState({ isVisible: false });
            }
        }
    },

    /**
    * Go back to the top of the page.
    */
    goBackToTop: function goBackToTop() {
        //TODO: Add animation
        (0, _scroll.scrollTo)(undefined, 0);
    },

    /** inheritedDoc */
    render: function render() {
        var isVisible = this.state.isVisible;

        return isVisible ? _react2.default.createElement(
            'div',
            { 'data-focus': 'back-to-top' },
            _react2.default.createElement(_action.component, { color: 'colored', handleOnClick: this.goBackToTop, icon: 'expand_less', shape: 'fab' })
        ) : null;
    }
};

var _builder = (0, _builder3.default)(backToTopMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiYmFja1RvVG9wTWl4aW4iLCJkaXNwbGF5TmFtZSIsIm1peGlucyIsImkxOG5NaXhpbiIsInN0eWxhYmxlTWl4aW4iLCJnZXREZWZhdWx0UHJvcHMiLCJpY29uUHJlZml4IiwiaWNvbk5hbWUiLCJkdXJhdGlvbiIsInNjcm9sbFN0YXJ0IiwicHJvcFR5cGVzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaXNWaXNpYmxlIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJjb21wb25lbnREaWRNb3VudCIsIl9zY3JvbGxDYXJyaWVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zY3JvbGxTcHkiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50U2Nyb2xsUG9zaXRpb24iLCJ0b3AiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJnb0JhY2tUb1RvcCIsInVuZGVmaW5lZCIsInJlbmRlciIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxpQkFBaUI7QUFDbkJDLGlCQUFhLGlCQURNO0FBRW5CQyxZQUFRLENBQUNDLGVBQUQsRUFBWUMsa0JBQVosQ0FGVztBQUduQjtBQUNBQyxtQkFKbUIsNkJBSUQ7QUFDZCxlQUFPO0FBQ0hDLHdCQUFZLFFBRFQ7QUFFSEMsc0JBQVUsaUJBRlA7QUFHSEMsc0JBQVUsR0FIUDtBQUlIQyx5QkFBYTtBQUpWLFNBQVA7QUFNSCxLQVhrQjs7QUFZbkI7OztBQUdBQyxlQUFXO0FBQ1BKLG9CQUFZLHFCQUFNLFFBQU4sQ0FETDtBQUVQQyxrQkFBVSxxQkFBTSxRQUFOLENBRkg7QUFHUEMsa0JBQVUscUJBQU0sUUFBTixDQUhIO0FBSVBDLHFCQUFhLHFCQUFNLFFBQU47QUFKTixLQWZRO0FBcUJuQjtBQUNBRSxtQkF0Qm1CLDZCQXNCRDtBQUNkLGVBQU87QUFDSEMsdUJBQVc7QUFEUixTQUFQO0FBR0gsS0ExQmtCO0FBMkJuQkMsc0JBM0JtQixnQ0EyQkU7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsOEpBQWI7QUFDSCxLQTdCa0I7O0FBOEJuQjs7O0FBR0FDLHFCQWpDbUIsK0JBaUNDO0FBQ2hCLGFBQUtDLGNBQUwsR0FBc0JDLE1BQXRCO0FBQ0EsYUFBS0QsY0FBTCxDQUFvQkUsZ0JBQXBCLENBQXFDLFFBQXJDLEVBQStDLEtBQUtDLFVBQXBEO0FBQ0EsYUFBS0gsY0FBTCxDQUFvQkUsZ0JBQXBCLENBQXFDLFFBQXJDLEVBQStDLEtBQUtDLFVBQXBEO0FBQ0EsYUFBS0EsVUFBTDtBQUNILEtBdENrQjtBQXVDbkJDLHdCQXZDbUIsa0NBdUNJO0FBQ25CLGFBQUtKLGNBQUwsQ0FBb0JLLG1CQUFwQixDQUF3QyxRQUF4QyxFQUFrRCxLQUFLRixVQUF2RDtBQUNBLGFBQUtILGNBQUwsQ0FBb0JLLG1CQUFwQixDQUF3QyxRQUF4QyxFQUFrRCxLQUFLRixVQUF2RDtBQUNILEtBMUNrQjs7QUEyQ25COzs7O0FBSUFBLGNBL0NtQix3QkErQ047QUFDVCxZQUFNRyx3QkFBd0IsNkJBQTlCO0FBQ0EsWUFBSUEsc0JBQXNCQyxHQUF0QixHQUE0QixLQUFLQyxLQUFMLENBQVdoQixXQUEzQyxFQUF3RDtBQUNwRCxnQkFBSSxDQUFDLEtBQUtpQixLQUFMLENBQVdkLFNBQWhCLEVBQTJCO0FBQ3ZCLHFCQUFLZSxRQUFMLENBQWMsRUFBRWYsV0FBVyxJQUFiLEVBQWQ7QUFDSDtBQUNKLFNBSkQsTUFJTztBQUNILGdCQUFJLEtBQUtjLEtBQUwsQ0FBV2QsU0FBZixFQUEwQjtBQUN0QixxQkFBS2UsUUFBTCxDQUFjLEVBQUVmLFdBQVcsS0FBYixFQUFkO0FBQ0g7QUFDSjtBQUNKLEtBMURrQjs7QUEyRG5COzs7QUFHQWdCLGVBOURtQix5QkE4REw7QUFDVjtBQUNBLDhCQUFTQyxTQUFULEVBQW9CLENBQXBCO0FBQ0gsS0FqRWtCOztBQWtFbkI7QUFDQUMsVUFuRW1CLG9CQW1FVjtBQUFBLFlBQ0dsQixTQURILEdBQ2lCLEtBQUtjLEtBRHRCLENBQ0dkLFNBREg7O0FBRUwsZUFBT0EsWUFDSDtBQUFBO0FBQUEsY0FBSyxjQUFXLGFBQWhCO0FBQThCLDBDQUFDLGlCQUFELElBQVEsT0FBTSxTQUFkLEVBQXdCLGVBQWUsS0FBS2dCLFdBQTVDLEVBQXlELE1BQUssYUFBOUQsRUFBNEUsT0FBTSxLQUFsRjtBQUE5QixTQURHLEdBRUgsSUFGSjtBQUdIO0FBeEVrQixDQUF2Qjs7ZUEyRTZCLHVCQUFRNUIsY0FBUixDO0lBQXJCK0IsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgdHlwZXMgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbmltcG9ydCB7IGNvbXBvbmVudCBhcyBCdXR0b24gfSBmcm9tICcuLi9hY3Rpb24nO1xuaW1wb3J0IGkxOG5NaXhpbiBmcm9tICcuLi8uLi9pMThuL21peGluJztcbmltcG9ydCBzdHlsYWJsZU1peGluIGZyb20gJy4uLy4uLy4uL21peGluL3N0eWxhYmxlJztcbmltcG9ydCB7IHNjcm9sbFRvLCBzY3JvbGxQb3NpdGlvbiB9IGZyb20gJy4uLy4uL21peGluL3Njcm9sbCc7XG5cbi8qKlxuKiBNaXhpbiBidXR0b24uXG4qIEB0eXBlIHtPYmplY3R9XG4qL1xuY29uc3QgYmFja1RvVG9wTWl4aW4gPSB7XG4gICAgZGlzcGxheU5hbWU6ICdCdXR0b25CYWNrVG9Ub3AnLFxuICAgIG1peGluczogW2kxOG5NaXhpbiwgc3R5bGFibGVNaXhpbl0sXG4gICAgLyoqIGluaGVyaXRlZERvYyAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGljb25QcmVmaXg6ICdmYSBmYS0nLFxuICAgICAgICAgICAgaWNvbk5hbWU6ICdhcnJvdy1jaXJjbGUtdXAnLFxuICAgICAgICAgICAgZHVyYXRpb246IDEwMCxcbiAgICAgICAgICAgIHNjcm9sbFN0YXJ0OiAxMDBcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUHJvcHMgdmFsaWRhdGlvblxuICAgICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGljb25QcmVmaXg6IHR5cGVzKCdzdHJpbmcnKSxcbiAgICAgICAgaWNvbk5hbWU6IHR5cGVzKCdzdHJpbmcnKSxcbiAgICAgICAgZHVyYXRpb246IHR5cGVzKCdudW1iZXInKSxcbiAgICAgICAgc2Nyb2xsU3RhcnQ6IHR5cGVzKCdudW1iZXInKVxuICAgIH0sXG4gICAgLyoqIGluaGVyaXRlZERvYyAqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIHYwLjE1OiB0aGUgXFwnQnV0dG9uQmFja1RvVG9wXFwnIGNvbXBvbmVudCBmcm9tIFNhZ2Vzc0NvbXBvbmVudHMuY29tbW9uIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgU2FnZXNzQ29tcG9uZW50cy5jb21wb25lbnRzLkJ1dHRvbkJhY2tUb1RvcCcpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBDb21wb25lbnQgZGlkIG1vdW50LCBhdHRhY2ggdGhlIHNjcm9sbCBzcHlcbiAgICAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxDYXJyaWVyID0gd2luZG93O1xuICAgICAgICB0aGlzLl9zY3JvbGxDYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbFNweSk7XG4gICAgICAgIHRoaXMuX3Njcm9sbENhcnJpZXIuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fc2Nyb2xsU3B5KTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsU3B5KCk7XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQ2Fycmllci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGxTcHkpO1xuICAgICAgICB0aGlzLl9zY3JvbGxDYXJyaWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Njcm9sbFNweSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFRoZSBzY3JvbGwgZXZlbnQgaGFuZGxlclxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIF9zY3JvbGxTcHkoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsUG9zaXRpb24udG9wID4gdGhpcy5wcm9wcy5zY3JvbGxTdGFydCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Zpc2libGU6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHbyBiYWNrIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UuXG4gICAgKi9cbiAgICBnb0JhY2tUb1RvcCgpIHtcbiAgICAgICAgLy9UT0RPOiBBZGQgYW5pbWF0aW9uXG4gICAgICAgIHNjcm9sbFRvKHVuZGVmaW5lZCwgMCk7XG4gICAgfSxcbiAgICAvKiogaW5oZXJpdGVkRG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzVmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIGlzVmlzaWJsZSA/IChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nYmFjay10by10b3AnPjxCdXR0b24gY29sb3I9J2NvbG9yZWQnIGhhbmRsZU9uQ2xpY2s9e3RoaXMuZ29CYWNrVG9Ub3B9IGljb249J2V4cGFuZF9sZXNzJyBzaGFwZT0nZmFiJyAvPjwvZGl2PlxuICAgICAgICApIDogbnVsbDtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoYmFja1RvVG9wTWl4aW4pO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=