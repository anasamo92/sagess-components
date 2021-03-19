'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = undefined;

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paginationMixin = {
    /**
     * @inheritDoc
     */
    getDefaultProps: function getDefaultProps() {
        return {
            hasMoreData: false,
            isManualFetch: false
        };
    },


    propTypes: {
        hasMoreData: (0, _types2.default)('bool'),
        fetchNextPage: (0, _types2.default)('func'),
        isManualFetch: (0, _types2.default)('bool')
    },

    /**
     * Fetch the next page.
     * @param {number} page the page to fetch
     * @return {*} the next page
     */
    fetchNextPage: function fetchNextPage(page) {
        if (!this.props.hasMoreData) {
            return;
        }
        if (this.props.fetchNextPage) {
            return this.props.fetchNextPage(page);
        }
    },


    /**
     * handle manual fetch.
     * @param {object} event event received
     */
    handleShowMore: function handleShowMore(event) {
        this.nextPage++;
        this.fetchNextPage(this.nextPage);
    }
};

exports.mixin = paginationMixin;
exports.default = { mixin: paginationMixin };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicGFnaW5hdGlvbk1peGluIiwiZ2V0RGVmYXVsdFByb3BzIiwiaGFzTW9yZURhdGEiLCJpc01hbnVhbEZldGNoIiwicHJvcFR5cGVzIiwiZmV0Y2hOZXh0UGFnZSIsInBhZ2UiLCJwcm9wcyIsImhhbmRsZVNob3dNb3JlIiwiZXZlbnQiLCJuZXh0UGFnZSIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLGtCQUFrQjtBQUNwQjs7O0FBR0FDLG1CQUpvQiw2QkFJRjtBQUNkLGVBQU87QUFDSEMseUJBQWEsS0FEVjtBQUVIQywyQkFBZTtBQUZaLFNBQVA7QUFJSCxLQVRtQjs7O0FBV3BCQyxlQUFXO0FBQ1BGLHFCQUFhLHFCQUFLLE1BQUwsQ0FETjtBQUVQRyx1QkFBZSxxQkFBSyxNQUFMLENBRlI7QUFHUEYsdUJBQWUscUJBQUssTUFBTDtBQUhSLEtBWFM7O0FBaUJwQjs7Ozs7QUFLQUUsaUJBdEJvQix5QkFzQk5DLElBdEJNLEVBc0JBO0FBQ2hCLFlBQUksQ0FBQyxLQUFLQyxLQUFMLENBQVdMLFdBQWhCLEVBQTZCO0FBQ3pCO0FBQ0g7QUFDRCxZQUFJLEtBQUtLLEtBQUwsQ0FBV0YsYUFBZixFQUE4QjtBQUMxQixtQkFBTyxLQUFLRSxLQUFMLENBQVdGLGFBQVgsQ0FBeUJDLElBQXpCLENBQVA7QUFDSDtBQUNKLEtBN0JtQjs7O0FBK0JwQjs7OztBQUlBRSxrQkFuQ29CLDBCQW1DTEMsS0FuQ0ssRUFtQ0U7QUFDbEIsYUFBS0MsUUFBTDtBQUNBLGFBQUtMLGFBQUwsQ0FBbUIsS0FBS0ssUUFBeEI7QUFDSDtBQXRDbUIsQ0FBeEI7O1FBeUM0QkMsSyxHQUFuQlgsZTtrQkFDTSxFQUFFVyxPQUFPWCxlQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC90eXBlcyc7XG5cbmNvbnN0IHBhZ2luYXRpb25NaXhpbiA9IHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc01vcmVEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGlzTWFudWFsRmV0Y2g6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBoYXNNb3JlRGF0YTogdHlwZSgnYm9vbCcpLFxuICAgICAgICBmZXRjaE5leHRQYWdlOiB0eXBlKCdmdW5jJyksXG4gICAgICAgIGlzTWFudWFsRmV0Y2g6IHR5cGUoJ2Jvb2wnKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCB0aGUgbmV4dCBwYWdlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIHRoZSBwYWdlIHRvIGZldGNoXG4gICAgICogQHJldHVybiB7Kn0gdGhlIG5leHQgcGFnZVxuICAgICAqL1xuICAgIGZldGNoTmV4dFBhZ2UocGFnZSkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaGFzTW9yZURhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5mZXRjaE5leHRQYWdlKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGhhbmRsZSBtYW51YWwgZmV0Y2guXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IGV2ZW50IHJlY2VpdmVkXG4gICAgICovXG4gICAgaGFuZGxlU2hvd01vcmUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5uZXh0UGFnZSsrO1xuICAgICAgICB0aGlzLmZldGNoTmV4dFBhZ2UodGhpcy5uZXh0UGFnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgcGFnaW5hdGlvbk1peGluIGFzIG1peGluIH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluOiBwYWdpbmF0aW9uTWl4aW4gfTtcbiJdfQ==