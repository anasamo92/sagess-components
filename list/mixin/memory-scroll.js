"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var memoryMixin = {

    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            data: [],
            reference: {},
            perPage: 5
        };
    },


    /** @inheritdoc */
    getInitialState: function getInitialState() {
        return {
            page: 1,
            maxElements: this.props.perPage
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (nextProps.perPage && nextProps.perPage !== this.props.perPage) {
            this.setState({
                maxElements: nextProps.perPage
            });
        }
    },


    /**
     * Calculate the number of element to display in the memory list.
     * @param page the current page to fetch
     */
    fetchNextPage: function fetchNextPage() {
        var currentPage = this.state.page + 1;
        this.setState({
            page: currentPage,
            maxElements: this.props.perPage * currentPage
        });
    },


    /**
     * Calculate the data to display.
     * @return data list
     */
    getDataToUse: function getDataToUse() {
        if (!this.props.data) {
            return [];
        }
        return this.props.data.slice(0, this.state.maxElements);
    },


    /**
     * Get the reference lists.
     * @return {object} object wich contains all reference lists.
     */
    getReference: function getReference() {
        return this.state.reference || this.props.reference;
    }
};

exports.default = memoryMixin;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibWVtb3J5TWl4aW4iLCJnZXREZWZhdWx0UHJvcHMiLCJkYXRhIiwicmVmZXJlbmNlIiwicGVyUGFnZSIsImdldEluaXRpYWxTdGF0ZSIsInBhZ2UiLCJtYXhFbGVtZW50cyIsInByb3BzIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwiZmV0Y2hOZXh0UGFnZSIsImN1cnJlbnRQYWdlIiwic3RhdGUiLCJnZXREYXRhVG9Vc2UiLCJzbGljZSIsImdldFJlZmVyZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxjQUFjOztBQUVoQjtBQUNBQyxtQkFIZ0IsNkJBR0U7QUFDZCxlQUFPO0FBQ0hDLGtCQUFNLEVBREg7QUFFSEMsdUJBQVcsRUFGUjtBQUdIQyxxQkFBUztBQUhOLFNBQVA7QUFLSCxLQVRlOzs7QUFXaEI7QUFDQUMsbUJBWmdCLDZCQVlFO0FBQ2QsZUFBTztBQUNIQyxrQkFBTSxDQURIO0FBRUhDLHlCQUFhLEtBQUtDLEtBQUwsQ0FBV0o7QUFGckIsU0FBUDtBQUlILEtBakJlO0FBbUJoQkssNkJBbkJnQixxQ0FtQlVDLFNBbkJWLEVBbUJxQjtBQUNqQyxZQUFJQSxVQUFVTixPQUFWLElBQXFCTSxVQUFVTixPQUFWLEtBQXNCLEtBQUtJLEtBQUwsQ0FBV0osT0FBMUQsRUFBbUU7QUFDL0QsaUJBQUtPLFFBQUwsQ0FBYztBQUNWSiw2QkFBYUcsVUFBVU47QUFEYixhQUFkO0FBR0g7QUFDSixLQXpCZTs7O0FBMkJoQjs7OztBQUlBUSxpQkEvQmdCLDJCQStCQTtBQUNaLFlBQUlDLGNBQWMsS0FBS0MsS0FBTCxDQUFXUixJQUFYLEdBQWtCLENBQXBDO0FBQ0EsYUFBS0ssUUFBTCxDQUFjO0FBQ1ZMLGtCQUFNTyxXQURJO0FBRVZOLHlCQUFhLEtBQUtDLEtBQUwsQ0FBV0osT0FBWCxHQUFxQlM7QUFGeEIsU0FBZDtBQUlILEtBckNlOzs7QUF1Q2hCOzs7O0FBSUFFLGdCQTNDZ0IsMEJBMkNEO0FBQ1gsWUFBSSxDQUFDLEtBQUtQLEtBQUwsQ0FBV04sSUFBaEIsRUFBc0I7QUFDbEIsbUJBQU8sRUFBUDtBQUNIO0FBQ0QsZUFBTyxLQUFLTSxLQUFMLENBQVdOLElBQVgsQ0FBZ0JjLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCLEtBQUtGLEtBQUwsQ0FBV1AsV0FBcEMsQ0FBUDtBQUNILEtBaERlOzs7QUFrRGhCOzs7O0FBSUFVLGdCQXREZ0IsMEJBc0REO0FBQ1gsZUFBTyxLQUFLSCxLQUFMLENBQVdYLFNBQVgsSUFBd0IsS0FBS0ssS0FBTCxDQUFXTCxTQUExQztBQUNIO0FBeERlLENBQXBCOztrQkEyRGVILFciLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbW9yeU1peGluID0ge1xyXG5cclxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xyXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICByZWZlcmVuY2U6IHt9LFxyXG4gICAgICAgICAgICBwZXJQYWdlOiA1XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgbWF4RWxlbWVudHM6IHRoaXMucHJvcHMucGVyUGFnZVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5wZXJQYWdlICYmIG5leHRQcm9wcy5wZXJQYWdlICE9PSB0aGlzLnByb3BzLnBlclBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBtYXhFbGVtZW50czogbmV4dFByb3BzLnBlclBhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGVsZW1lbnQgdG8gZGlzcGxheSBpbiB0aGUgbWVtb3J5IGxpc3QuXHJcbiAgICAgKiBAcGFyYW0gcGFnZSB0aGUgY3VycmVudCBwYWdlIHRvIGZldGNoXHJcbiAgICAgKi9cclxuICAgIGZldGNoTmV4dFBhZ2UoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gdGhpcy5zdGF0ZS5wYWdlICsgMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGFnZTogY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgIG1heEVsZW1lbnRzOiB0aGlzLnByb3BzLnBlclBhZ2UgKiBjdXJyZW50UGFnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgZGF0YSB0byBkaXNwbGF5LlxyXG4gICAgICogQHJldHVybiBkYXRhIGxpc3RcclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YVRvVXNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5zbGljZSgwLCB0aGlzLnN0YXRlLm1heEVsZW1lbnRzKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHJlZmVyZW5jZSBsaXN0cy5cclxuICAgICAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IHdpY2ggY29udGFpbnMgYWxsIHJlZmVyZW5jZSBsaXN0cy5cclxuICAgICAqL1xyXG4gICAgZ2V0UmVmZXJlbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnJlZmVyZW5jZSB8fCB0aGlzLnByb3BzLnJlZmVyZW5jZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW9yeU1peGluO1xyXG4iXX0=