'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _pagination = require('../mixin/pagination');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var topOfElement = function topOfElement(element) {
    if (!element) {
        return 0;
    }
    return element.offsetTop + topOfElement(element.offsetParent);
};

/**
 *
 * Mixin which add infinite scroll behavior.
 */
var InfiniteScrollMixin = {

    mixins: [_pagination.mixin],
    /**
     * defaults props for the mixin.
     * @returns {object} - the default props
     */
    getDefaultProps: function getDefaultProps() {
        return {
            isInfiniteScroll: true,
            initialPage: 1,
            offset: 250
        };
    },


    /**
     * Before component mount
     */
    componentWillMount: function componentWillMount() {
        this.nextPage = this.props.initialPage;
    },


    /**
     * Before component unmount.
     */
    componentWillUnmount: function componentWillUnmount() {
        if (!this.props.isManualFetch) {
            this.detachScrollListener();
        }
    },


    /**
     * After component Mount.
     */
    componentDidMount: function componentDidMount() {
        this.parentNode = this.props.parentSelector ? document.querySelector(this.props.parentSelector) : window;
        if (!this.props.isManualFetch) {
            this.attachScrollListener();
        }
    },


    /**
     * after component update.
     */
    componentDidUpdate: function componentDidUpdate() {
        if (!this.props.isLoading && !this.props.isManualFetch) {
            this.attachScrollListener();
        }
    },


    /**
     * Handler for the scroll event.
     */
    scrollListener: function scrollListener() {
        var el = _reactDom2.default.findDOMNode(this);
        var scrollTop = this.parentNode.pageYOffset !== undefined ? this.parentNode.pageYOffset : this.parentNode.scrollTop;
        if (topOfElement(el) + el.offsetHeight - scrollTop - (window.innerHeight || this.parentNode.offsetHeight) < this.props.offset) {
            this.detachScrollListener();
            this.fetchNextPage(this.nextPage++);
        }
    },


    /**
     * Attach scroll listener on the component.
     */
    attachScrollListener: function attachScrollListener() {
        if (!this.props.hasMoreData) {
            return;
        }
        this.parentNode.addEventListener('scroll', this.scrollListener);
        this.parentNode.addEventListener('resize', this.scrollListener);
        this.scrollListener();
    },


    /**
     * detach scroll listener on the component
     */
    detachScrollListener: function detachScrollListener() {
        this.parentNode.removeEventListener('scroll', this.scrollListener);
        this.parentNode.removeEventListener('resize', this.scrollListener);
    }
};

exports.mixin = InfiniteScrollMixin;
exports.default = { mixin: InfiniteScrollMixin };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsidG9wT2ZFbGVtZW50IiwiZWxlbWVudCIsIm9mZnNldFRvcCIsIm9mZnNldFBhcmVudCIsIkluZmluaXRlU2Nyb2xsTWl4aW4iLCJtaXhpbnMiLCJwYWdpbmF0aW9uTWl4aW4iLCJnZXREZWZhdWx0UHJvcHMiLCJpc0luZmluaXRlU2Nyb2xsIiwiaW5pdGlhbFBhZ2UiLCJvZmZzZXQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJuZXh0UGFnZSIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJpc01hbnVhbEZldGNoIiwiZGV0YWNoU2Nyb2xsTGlzdGVuZXIiLCJjb21wb25lbnREaWRNb3VudCIsInBhcmVudE5vZGUiLCJwYXJlbnRTZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsImF0dGFjaFNjcm9sbExpc3RlbmVyIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiaXNMb2FkaW5nIiwic2Nyb2xsTGlzdGVuZXIiLCJlbCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsInVuZGVmaW5lZCIsIm9mZnNldEhlaWdodCIsImlubmVySGVpZ2h0IiwiZmV0Y2hOZXh0UGFnZSIsImhhc01vcmVEYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWUsU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDaEQsUUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDVixlQUFPLENBQVA7QUFDSDtBQUNELFdBQU9BLFFBQVFDLFNBQVIsR0FBb0JGLGFBQWFDLFFBQVFFLFlBQXJCLENBQTNCO0FBQ0gsQ0FMRDs7QUFPQTs7OztBQUlBLElBQU1DLHNCQUFzQjs7QUFFeEJDLFlBQVEsQ0FBQ0MsaUJBQUQsQ0FGZ0I7QUFHeEI7Ozs7QUFJQUMsbUJBUHdCLDZCQU9OO0FBQ2QsZUFBTztBQUNIQyw4QkFBa0IsSUFEZjtBQUVIQyx5QkFBYSxDQUZWO0FBR0hDLG9CQUFRO0FBSEwsU0FBUDtBQUtILEtBYnVCOzs7QUFleEI7OztBQUdBQyxzQkFsQndCLGdDQWtCSDtBQUNqQixhQUFLQyxRQUFMLEdBQWdCLEtBQUtDLEtBQUwsQ0FBV0osV0FBM0I7QUFDSCxLQXBCdUI7OztBQXNCeEI7OztBQUdBSyx3QkF6QndCLGtDQXlCRDtBQUNuQixZQUFJLENBQUMsS0FBS0QsS0FBTCxDQUFXRSxhQUFoQixFQUErQjtBQUMzQixpQkFBS0Msb0JBQUw7QUFDSDtBQUNKLEtBN0J1Qjs7O0FBK0J4Qjs7O0FBR0FDLHFCQWxDd0IsK0JBa0NKO0FBQ2hCLGFBQUtDLFVBQUwsR0FBa0IsS0FBS0wsS0FBTCxDQUFXTSxjQUFYLEdBQTRCQyxTQUFTQyxhQUFULENBQXVCLEtBQUtSLEtBQUwsQ0FBV00sY0FBbEMsQ0FBNUIsR0FBZ0ZHLE1BQWxHO0FBQ0EsWUFBSSxDQUFDLEtBQUtULEtBQUwsQ0FBV0UsYUFBaEIsRUFBK0I7QUFDM0IsaUJBQUtRLG9CQUFMO0FBQ0g7QUFDSixLQXZDdUI7OztBQXlDeEI7OztBQUdBQyxzQkE1Q3dCLGdDQTRDSDtBQUNqQixZQUFJLENBQUMsS0FBS1gsS0FBTCxDQUFXWSxTQUFaLElBQXlCLENBQUMsS0FBS1osS0FBTCxDQUFXRSxhQUF6QyxFQUF3RDtBQUNwRCxpQkFBS1Esb0JBQUw7QUFDSDtBQUNKLEtBaER1Qjs7O0FBa0R4Qjs7O0FBR0FHLGtCQXJEd0IsNEJBcURQO0FBQ2IsWUFBTUMsS0FBS0MsbUJBQVNDLFdBQVQsQ0FBcUIsSUFBckIsQ0FBWDtBQUNBLFlBQU1DLFlBQWEsS0FBS1osVUFBTCxDQUFnQmEsV0FBaEIsS0FBZ0NDLFNBQWpDLEdBQThDLEtBQUtkLFVBQUwsQ0FBZ0JhLFdBQTlELEdBQTRFLEtBQUtiLFVBQUwsQ0FBZ0JZLFNBQTlHO0FBQ0EsWUFBSTlCLGFBQWEyQixFQUFiLElBQW1CQSxHQUFHTSxZQUF0QixHQUFxQ0gsU0FBckMsSUFBa0RSLE9BQU9ZLFdBQVAsSUFBc0IsS0FBS2hCLFVBQUwsQ0FBZ0JlLFlBQXhGLElBQXdHLEtBQUtwQixLQUFMLENBQVdILE1BQXZILEVBQStIO0FBQzNILGlCQUFLTSxvQkFBTDtBQUNBLGlCQUFLbUIsYUFBTCxDQUFtQixLQUFLdkIsUUFBTCxFQUFuQjtBQUNIO0FBQ0osS0E1RHVCOzs7QUE4RHhCOzs7QUFHQVcsd0JBakV3QixrQ0FpRUQ7QUFDbkIsWUFBSSxDQUFDLEtBQUtWLEtBQUwsQ0FBV3VCLFdBQWhCLEVBQTZCO0FBQ3pCO0FBQ0g7QUFDRCxhQUFLbEIsVUFBTCxDQUFnQm1CLGdCQUFoQixDQUFpQyxRQUFqQyxFQUEyQyxLQUFLWCxjQUFoRDtBQUNBLGFBQUtSLFVBQUwsQ0FBZ0JtQixnQkFBaEIsQ0FBaUMsUUFBakMsRUFBMkMsS0FBS1gsY0FBaEQ7QUFDQSxhQUFLQSxjQUFMO0FBQ0gsS0F4RXVCOzs7QUEwRXhCOzs7QUFHQVYsd0JBN0V3QixrQ0E2RUQ7QUFDbkIsYUFBS0UsVUFBTCxDQUFnQm9CLG1CQUFoQixDQUFvQyxRQUFwQyxFQUE4QyxLQUFLWixjQUFuRDtBQUNBLGFBQUtSLFVBQUwsQ0FBZ0JvQixtQkFBaEIsQ0FBb0MsUUFBcEMsRUFBOEMsS0FBS1osY0FBbkQ7QUFDSDtBQWhGdUIsQ0FBNUI7O1FBbUZnQ2EsSyxHQUF2Qm5DLG1CO2tCQUNNLEVBQUVtQyxPQUFPbkMsbUJBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IG1peGluIGFzIHBhZ2luYXRpb25NaXhpbiB9IGZyb20gJy4uL21peGluL3BhZ2luYXRpb24nO1xyXG5cclxuY29uc3QgdG9wT2ZFbGVtZW50ID0gZnVuY3Rpb24gdG9wT2ZFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0VG9wICsgdG9wT2ZFbGVtZW50KGVsZW1lbnQub2Zmc2V0UGFyZW50KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBNaXhpbiB3aGljaCBhZGQgaW5maW5pdGUgc2Nyb2xsIGJlaGF2aW9yLlxyXG4gKi9cclxuY29uc3QgSW5maW5pdGVTY3JvbGxNaXhpbiA9IHtcclxuXHJcbiAgICBtaXhpbnM6IFtwYWdpbmF0aW9uTWl4aW5dLFxyXG4gICAgLyoqXHJcbiAgICAgKiBkZWZhdWx0cyBwcm9wcyBmb3IgdGhlIG1peGluLlxyXG4gICAgICogQHJldHVybnMge29iamVjdH0gLSB0aGUgZGVmYXVsdCBwcm9wc1xyXG4gICAgICovXHJcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNJbmZpbml0ZVNjcm9sbDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IDEsXHJcbiAgICAgICAgICAgIG9mZnNldDogMjUwXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCZWZvcmUgY29tcG9uZW50IG1vdW50XHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLm5leHRQYWdlID0gdGhpcy5wcm9wcy5pbml0aWFsUGFnZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCZWZvcmUgY29tcG9uZW50IHVubW91bnQuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc01hbnVhbEZldGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoU2Nyb2xsTGlzdGVuZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWZ0ZXIgY29tcG9uZW50IE1vdW50LlxyXG4gICAgICovXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSB0aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKSA6IHdpbmRvdztcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNNYW51YWxGZXRjaCkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaFNjcm9sbExpc3RlbmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGFmdGVyIGNvbXBvbmVudCB1cGRhdGUuXHJcbiAgICAgKi9cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNMb2FkaW5nICYmICF0aGlzLnByb3BzLmlzTWFudWFsRmV0Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hTY3JvbGxMaXN0ZW5lcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVyIGZvciB0aGUgc2Nyb2xsIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICBzY3JvbGxMaXN0ZW5lcigpIHtcclxuICAgICAgICBjb25zdCBlbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9ICh0aGlzLnBhcmVudE5vZGUucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB0aGlzLnBhcmVudE5vZGUucGFnZVlPZmZzZXQgOiB0aGlzLnBhcmVudE5vZGUuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmICh0b3BPZkVsZW1lbnQoZWwpICsgZWwub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsVG9wIC0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCB0aGlzLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0KSA8IHRoaXMucHJvcHMub2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoU2Nyb2xsTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaE5leHRQYWdlKHRoaXMubmV4dFBhZ2UrKyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCBzY3JvbGwgbGlzdGVuZXIgb24gdGhlIGNvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgYXR0YWNoU2Nyb2xsTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhhc01vcmVEYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsTGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjcm9sbExpc3RlbmVyKTtcclxuICAgICAgICB0aGlzLnNjcm9sbExpc3RlbmVyKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGV0YWNoIHNjcm9sbCBsaXN0ZW5lciBvbiB0aGUgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGRldGFjaFNjcm9sbExpc3RlbmVyKCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVyKTtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zY3JvbGxMaXN0ZW5lcik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBJbmZpbml0ZVNjcm9sbE1peGluIGFzIG1peGluIH1cclxuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbjogSW5maW5pdGVTY3JvbGxNaXhpbiB9O1xyXG4iXX0=