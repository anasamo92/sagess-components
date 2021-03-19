'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = undefined;

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _search = require('sagess-core/search');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
var SearchMixin = {
    getDefaultProps: function getDefaultProps() {
        return {
            store: _search.BuiltInSearchStore.searchStore
        };
    },

    /**
     * Next page fetch action handler.
     */
    fetchNextPage: function fetchNextPage() {
        this.setState({
            isLoading: true,
            currentPage: this.state.currentPage + 1
        }, this.search);
    },

    /**
     * State for a no fetch search.
     * @returns {object} current page set to 1.
     */
    getNoFetchState: function getNoFetchState() {
        return {
            currentPage: 1
        };
    },

    /**
     * Returns the search criteria sent to the store.
     * @param {string} scope Current scope.
     * @param {string} query Current query.
     * @param {object} facets Selected facets.
     * @returns {object} Formatted criteria {criteria:{}, pagesInfos:{}, facets:{}}.
     */
    _buildSearchCriteria: function _buildSearchCriteria(facets) {
        var query = Focus.search.builtInStore.queryStore.getQuery() || '';
        var scope = Focus.search.builtInStore.queryStore.getScope() || '';
        return {
            criteria: { scope: scope, query: query },
            pageInfos: {
                page: this.state.currentPage,
                order: this.state.orderSelected,
                group: this.state.groupSelectedKey
            },
            facets: facets
        };
    },
    getSearchCriteria: function getSearchCriteria() {
        if (!(0, _isFunction2.default)(this.props.searchAction)) {
            console.warn('Your page seems to miss a search action, add in your props a {searchAction: function(scope, query, facets){}}', this.props.searchAction);
        }
        return this._buildSearchCriteria(this.state.selectedFacetList);
    },
    search: function search() {
        this.props.searchAction(this.getSearchCriteria());
    }
};
// Stores
exports.mixin = SearchMixin;
exports.default = { mixin: SearchMixin };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiU2VhcmNoTWl4aW4iLCJnZXREZWZhdWx0UHJvcHMiLCJzdG9yZSIsIkJ1aWx0SW5TZWFyY2hTdG9yZSIsInNlYXJjaFN0b3JlIiwiZmV0Y2hOZXh0UGFnZSIsInNldFN0YXRlIiwiaXNMb2FkaW5nIiwiY3VycmVudFBhZ2UiLCJzdGF0ZSIsInNlYXJjaCIsImdldE5vRmV0Y2hTdGF0ZSIsIl9idWlsZFNlYXJjaENyaXRlcmlhIiwiZmFjZXRzIiwicXVlcnkiLCJGb2N1cyIsImJ1aWx0SW5TdG9yZSIsInF1ZXJ5U3RvcmUiLCJnZXRRdWVyeSIsInNjb3BlIiwiZ2V0U2NvcGUiLCJjcml0ZXJpYSIsInBhZ2VJbmZvcyIsInBhZ2UiLCJvcmRlciIsIm9yZGVyU2VsZWN0ZWQiLCJncm91cCIsImdyb3VwU2VsZWN0ZWRLZXkiLCJnZXRTZWFyY2hDcml0ZXJpYSIsInByb3BzIiwic2VhcmNoQWN0aW9uIiwiY29uc29sZSIsIndhcm4iLCJzZWxlY3RlZEZhY2V0TGlzdCIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQTs7OztBQUhBO0FBS0EsSUFBTUEsY0FBYztBQUNoQkMsbUJBRGdCLDZCQUNFO0FBQ2QsZUFBUTtBQUNKQyxtQkFBT0MsMkJBQW1CQztBQUR0QixTQUFSO0FBR0gsS0FMZTs7QUFNaEI7OztBQUdBQyxpQkFUZ0IsMkJBU0E7QUFDWixhQUFLQyxRQUFMLENBQWM7QUFDVkMsdUJBQVcsSUFERDtBQUVWQyx5QkFBYSxLQUFLQyxLQUFMLENBQVdELFdBQVgsR0FBeUI7QUFGNUIsU0FBZCxFQUdHLEtBQUtFLE1BSFI7QUFJSCxLQWRlOztBQWVoQjs7OztBQUlBQyxtQkFuQmdCLDZCQW1CRTtBQUNkLGVBQU87QUFDSEgseUJBQWE7QUFEVixTQUFQO0FBR0gsS0F2QmU7O0FBd0JoQjs7Ozs7OztBQU9BSSx3QkEvQmdCLGdDQStCS0MsTUEvQkwsRUErQmE7QUFDekIsWUFBSUMsUUFBUUMsTUFBTUwsTUFBTixDQUFhTSxZQUFiLENBQTBCQyxVQUExQixDQUFxQ0MsUUFBckMsTUFBbUQsRUFBL0Q7QUFDQSxZQUFJQyxRQUFRSixNQUFNTCxNQUFOLENBQWFNLFlBQWIsQ0FBMEJDLFVBQTFCLENBQXFDRyxRQUFyQyxNQUFtRCxFQUEvRDtBQUNBLGVBQU87QUFDSEMsc0JBQVUsRUFBRUYsWUFBRixFQUFTTCxZQUFULEVBRFA7QUFFSFEsdUJBQVc7QUFDUEMsc0JBQU0sS0FBS2QsS0FBTCxDQUFXRCxXQURWO0FBRVBnQix1QkFBTyxLQUFLZixLQUFMLENBQVdnQixhQUZYO0FBR1BDLHVCQUFPLEtBQUtqQixLQUFMLENBQVdrQjtBQUhYLGFBRlI7QUFPSGQ7QUFQRyxTQUFQO0FBU0gsS0EzQ2U7QUE0Q2hCZSxxQkE1Q2dCLCtCQTRDSTtBQUNoQixZQUFJLENBQUMsMEJBQVcsS0FBS0MsS0FBTCxDQUFXQyxZQUF0QixDQUFMLEVBQTBDO0FBQ3RDQyxvQkFBUUMsSUFBUixDQUFhLCtHQUFiLEVBQThILEtBQUtILEtBQUwsQ0FBV0MsWUFBekk7QUFDSDtBQUNELGVBQU8sS0FBS2xCLG9CQUFMLENBQTBCLEtBQUtILEtBQUwsQ0FBV3dCLGlCQUFyQyxDQUFQO0FBQ0gsS0FqRGU7QUFrRGhCdkIsVUFsRGdCLG9CQWtEUDtBQUNMLGFBQUttQixLQUFMLENBQVdDLFlBQVgsQ0FDSSxLQUFLRixpQkFBTCxFQURKO0FBR0g7QUF0RGUsQ0FBcEI7QUFIQTtRQTREd0JNLEssR0FBZmxDLFc7a0JBQ00sRUFBRWtDLE9BQU9sQyxXQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2xhbmcvaXNGdW5jdGlvbic7XG4vLyBTdG9yZXNcbmltcG9ydCB7IEJ1aWx0SW5TZWFyY2hTdG9yZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL3NlYXJjaCc7XG5cbmNvbnN0IFNlYXJjaE1peGluID0ge1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBzdG9yZTogQnVpbHRJblNlYXJjaFN0b3JlLnNlYXJjaFN0b3JlXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogTmV4dCBwYWdlIGZldGNoIGFjdGlvbiBoYW5kbGVyLlxuICAgICAqL1xuICAgIGZldGNoTmV4dFBhZ2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgKyAxXG4gICAgICAgIH0sIHRoaXMuc2VhcmNoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFN0YXRlIGZvciBhIG5vIGZldGNoIHNlYXJjaC5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBjdXJyZW50IHBhZ2Ugc2V0IHRvIDEuXG4gICAgICovXG4gICAgZ2V0Tm9GZXRjaFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNlYXJjaCBjcml0ZXJpYSBzZW50IHRvIHRoZSBzdG9yZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGUgQ3VycmVudCBzY29wZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgQ3VycmVudCBxdWVyeS5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmFjZXRzIFNlbGVjdGVkIGZhY2V0cy5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBGb3JtYXR0ZWQgY3JpdGVyaWEge2NyaXRlcmlhOnt9LCBwYWdlc0luZm9zOnt9LCBmYWNldHM6e319LlxuICAgICAqL1xuICAgIF9idWlsZFNlYXJjaENyaXRlcmlhKGZhY2V0cykge1xuICAgICAgICBsZXQgcXVlcnkgPSBGb2N1cy5zZWFyY2guYnVpbHRJblN0b3JlLnF1ZXJ5U3RvcmUuZ2V0UXVlcnkoKSB8fCAnJztcbiAgICAgICAgbGV0IHNjb3BlID0gRm9jdXMuc2VhcmNoLmJ1aWx0SW5TdG9yZS5xdWVyeVN0b3JlLmdldFNjb3BlKCkgfHwgJyc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcml0ZXJpYTogeyBzY29wZSwgcXVlcnkgfSxcbiAgICAgICAgICAgIHBhZ2VJbmZvczoge1xuICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICAgICAgb3JkZXI6IHRoaXMuc3RhdGUub3JkZXJTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBncm91cDogdGhpcy5zdGF0ZS5ncm91cFNlbGVjdGVkS2V5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFjZXRzXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRTZWFyY2hDcml0ZXJpYSgpIHtcbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHRoaXMucHJvcHMuc2VhcmNoQWN0aW9uKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3VyIHBhZ2Ugc2VlbXMgdG8gbWlzcyBhIHNlYXJjaCBhY3Rpb24sIGFkZCBpbiB5b3VyIHByb3BzIGEge3NlYXJjaEFjdGlvbjogZnVuY3Rpb24oc2NvcGUsIHF1ZXJ5LCBmYWNldHMpe319JywgdGhpcy5wcm9wcy5zZWFyY2hBY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9idWlsZFNlYXJjaENyaXRlcmlhKHRoaXMuc3RhdGUuc2VsZWN0ZWRGYWNldExpc3QpO1xuICAgIH0sXG4gICAgc2VhcmNoKCkge1xuICAgICAgICB0aGlzLnByb3BzLnNlYXJjaEFjdGlvbihcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VhcmNoQ3JpdGVyaWEoKVxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IFNlYXJjaE1peGluIGFzIG1peGluIH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluOiBTZWFyY2hNaXhpbiB9O1xuIl19