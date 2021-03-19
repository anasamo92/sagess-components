'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _reduce = require('lodash/collection/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _omit = require('lodash/object/omit');

var _omit2 = _interopRequireDefault(_omit);

var _index = require('../../../list/action-bar/index');

var _mixin = require('../../../common/i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
// Dependencies
var Bar = {
    mixins: [_mixin2.default],
    /**
     * Get the default props
     * @return {object} the default props
     */
    getDefaultProps: function getDefaultProps() {
        return {
            action: undefined,
            groupableColumnList: {},
            groupingKey: undefined,
            hasGrouping: true,
            lineOperationList: undefined,
            orderableColumnList: {},
            orderSelected: undefined,
            selectionAction: undefined,
            selectionStatus: undefined,
            selectedFacets: {}
        };
    },

    /**
     * Filter the facet list so that the scope facet is not displayed
     * @return {object} The filtered facet list
     */
    _filterFacetList: function _filterFacetList() {
        var _this = this;

        var selectedFacets = this.props.selectedFacets;

        return (0, _reduce2.default)(selectedFacets, function (result, facet, facetKey) {
            result[facetKey] = {
                label: _this.i18n('live.filter.facets.' + facetKey),
                value: facet.data.label
            };
            return result;
        }, {});
    },

    /**
     * On facet click, remove it from the selected facets, and update the store
     * @param  {string} key The facet key to remove
     */
    _onFacetClick: function _onFacetClick(key) {
        var _props = this.props,
            selectedFacets = _props.selectedFacets,
            updateProperties = _props.action.updateProperties;

        updateProperties({ selectedFacets: (0, _omit2.default)(selectedFacets, key) });
    },

    /**
     * Update the store to ask for a new results order
     * @param  {string} key   the filed key to sort by
     * @param  {boolean} order the sort direciton, ascending or descending
     */
    _orderAction: function _orderAction(key, order) {
        this.props.action.updateProperties({
            sortBy: key,
            sortAsc: order
        });
    },

    /**
     * Group by the given key
     * @param  {string} key The facet key to base the grouping on
     */
    _groupAction: function _groupAction(key) {
        this.props.action.updateProperties({
            groupingKey: key
        });
    },

    /**
     * Render the component
     * @return {HTML} the rendered component
     */
    render: function render() {
        var _props2 = this.props,
            groupableColumnList = _props2.groupableColumnList,
            groupingKey = _props2.groupingKey,
            hasGrouping = _props2.hasGrouping,
            isSelection = _props2.isSelection,
            operationList = _props2.operationList,
            orderableColumnList = _props2.orderableColumnList,
            selectionAction = _props2.selectionAction,
            selectionStatus = _props2.selectionStatus,
            sortBy = _props2.sortBy;

        return _react2.default.createElement(_index.component, {
            'data-focus': 'advanced-search-action-bar',
            facetClickAction: this._onFacetClick,
            facetList: this._filterFacetList(),
            groupAction: this._groupAction,
            groupableColumnList: groupableColumnList,
            groupLabelPrefix: 'live.filter.facets.',
            groupSelectedKey: groupingKey,
            hasGrouping: hasGrouping,
            isSelection: isSelection,
            operationList: operationList,
            orderAction: this._orderAction,
            orderSelected: sortBy,
            orderableColumnList: orderableColumnList,
            selectionAction: selectionAction,
            selectionStatus: selectionStatus
        });
    }
};
//Mixins

var _builder = (0, _builder3.default)(Bar),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQmFyIiwibWl4aW5zIiwiaTE4bk1peGluIiwiZ2V0RGVmYXVsdFByb3BzIiwiYWN0aW9uIiwidW5kZWZpbmVkIiwiZ3JvdXBhYmxlQ29sdW1uTGlzdCIsImdyb3VwaW5nS2V5IiwiaGFzR3JvdXBpbmciLCJsaW5lT3BlcmF0aW9uTGlzdCIsIm9yZGVyYWJsZUNvbHVtbkxpc3QiLCJvcmRlclNlbGVjdGVkIiwic2VsZWN0aW9uQWN0aW9uIiwic2VsZWN0aW9uU3RhdHVzIiwic2VsZWN0ZWRGYWNldHMiLCJfZmlsdGVyRmFjZXRMaXN0IiwicHJvcHMiLCJyZXN1bHQiLCJmYWNldCIsImZhY2V0S2V5IiwibGFiZWwiLCJpMThuIiwidmFsdWUiLCJkYXRhIiwiX29uRmFjZXRDbGljayIsImtleSIsInVwZGF0ZVByb3BlcnRpZXMiLCJfb3JkZXJBY3Rpb24iLCJvcmRlciIsInNvcnRCeSIsInNvcnRBc2MiLCJfZ3JvdXBBY3Rpb24iLCJyZW5kZXIiLCJpc1NlbGVjdGlvbiIsIm9wZXJhdGlvbkxpc3QiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7OztBQUhBO0FBTEE7QUFVQSxJQUFNQSxNQUFNO0FBQ1JDLFlBQVEsQ0FBQ0MsZUFBRCxDQURBO0FBRVI7Ozs7QUFJQUMsbUJBTlEsNkJBTVU7QUFDZCxlQUFRO0FBQ0pDLG9CQUFRQyxTQURKO0FBRUpDLGlDQUFxQixFQUZqQjtBQUdKQyx5QkFBYUYsU0FIVDtBQUlKRyx5QkFBYSxJQUpUO0FBS0pDLCtCQUFtQkosU0FMZjtBQU1KSyxpQ0FBcUIsRUFOakI7QUFPSkMsMkJBQWVOLFNBUFg7QUFRSk8sNkJBQWlCUCxTQVJiO0FBU0pRLDZCQUFpQlIsU0FUYjtBQVVKUyw0QkFBZ0I7QUFWWixTQUFSO0FBWUgsS0FuQk87O0FBb0JSOzs7O0FBSUFDLG9CQXhCUSw4QkF3Qlc7QUFBQTs7QUFBQSxZQUNQRCxjQURPLEdBQ1ksS0FBS0UsS0FEakIsQ0FDUEYsY0FETzs7QUFFZixlQUFPLHNCQUFPQSxjQUFQLEVBQXVCLFVBQUNHLE1BQUQsRUFBU0MsS0FBVCxFQUFnQkMsUUFBaEIsRUFBNkI7QUFDdkRGLG1CQUFPRSxRQUFQLElBQW1CO0FBQ2ZDLHVCQUFPLE1BQUtDLElBQUwseUJBQWdDRixRQUFoQyxDQURRO0FBRWZHLHVCQUFPSixNQUFNSyxJQUFOLENBQVdIO0FBRkgsYUFBbkI7QUFJQSxtQkFBT0gsTUFBUDtBQUNILFNBTk0sRUFNSixFQU5JLENBQVA7QUFPSCxLQWpDTzs7QUFrQ1I7Ozs7QUFJQU8saUJBdENRLHlCQXNDTUMsR0F0Q04sRUFzQ1c7QUFBQSxxQkFDMEMsS0FBS1QsS0FEL0M7QUFBQSxZQUNQRixjQURPLFVBQ1BBLGNBRE87QUFBQSxZQUNtQlksZ0JBRG5CLFVBQ1N0QixNQURULENBQ21Cc0IsZ0JBRG5COztBQUVmQSx5QkFBaUIsRUFBRVosZ0JBQWdCLG9CQUFLQSxjQUFMLEVBQXFCVyxHQUFyQixDQUFsQixFQUFqQjtBQUNILEtBekNPOztBQTBDUjs7Ozs7QUFLQUUsZ0JBL0NRLHdCQStDS0YsR0EvQ0wsRUErQ1VHLEtBL0NWLEVBK0NpQjtBQUNyQixhQUFLWixLQUFMLENBQVdaLE1BQVgsQ0FBa0JzQixnQkFBbEIsQ0FBbUM7QUFDL0JHLG9CQUFRSixHQUR1QjtBQUUvQksscUJBQVNGO0FBRnNCLFNBQW5DO0FBSUgsS0FwRE87O0FBcURSOzs7O0FBSUFHLGdCQXpEUSx3QkF5REtOLEdBekRMLEVBeURVO0FBQ2QsYUFBS1QsS0FBTCxDQUFXWixNQUFYLENBQWtCc0IsZ0JBQWxCLENBQW1DO0FBQy9CbkIseUJBQWFrQjtBQURrQixTQUFuQztBQUdILEtBN0RPOztBQThEUjs7OztBQUlBTyxVQWxFUSxvQkFrRUM7QUFBQSxzQkFDZ0osS0FBS2hCLEtBRHJKO0FBQUEsWUFDR1YsbUJBREgsV0FDR0EsbUJBREg7QUFBQSxZQUN3QkMsV0FEeEIsV0FDd0JBLFdBRHhCO0FBQUEsWUFDcUNDLFdBRHJDLFdBQ3FDQSxXQURyQztBQUFBLFlBQ2tEeUIsV0FEbEQsV0FDa0RBLFdBRGxEO0FBQUEsWUFDK0RDLGFBRC9ELFdBQytEQSxhQUQvRDtBQUFBLFlBQzhFeEIsbUJBRDlFLFdBQzhFQSxtQkFEOUU7QUFBQSxZQUNtR0UsZUFEbkcsV0FDbUdBLGVBRG5HO0FBQUEsWUFDb0hDLGVBRHBILFdBQ29IQSxlQURwSDtBQUFBLFlBQ3FJZ0IsTUFEckksV0FDcUlBLE1BRHJJOztBQUVMLGVBQ0ksOEJBQUMsZ0JBQUQ7QUFDSSwwQkFBVyw0QkFEZjtBQUVJLDhCQUFrQixLQUFLTCxhQUYzQjtBQUdJLHVCQUFXLEtBQUtULGdCQUFMLEVBSGY7QUFJSSx5QkFBYSxLQUFLZ0IsWUFKdEI7QUFLSSxpQ0FBcUJ6QixtQkFMekI7QUFNSSw4QkFBaUIscUJBTnJCO0FBT0ksOEJBQWtCQyxXQVB0QjtBQVFJLHlCQUFhQyxXQVJqQjtBQVNJLHlCQUFheUIsV0FUakI7QUFVSSwyQkFBZUMsYUFWbkI7QUFXSSx5QkFBYSxLQUFLUCxZQVh0QjtBQVlJLDJCQUFlRSxNQVpuQjtBQWFJLGlDQUFxQm5CLG1CQWJ6QjtBQWNJLDZCQUFpQkUsZUFkckI7QUFlSSw2QkFBaUJDO0FBZnJCLFVBREo7QUFtQkg7QUF2Rk8sQ0FBWjtBQUhBOztlQTZGNkIsdUJBQVFiLEdBQVIsQztJQUFyQm1DLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9jb2xsZWN0aW9uL3JlZHVjZSc7XG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb2JqZWN0L29taXQnO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIExpc3RBY3Rpb25CYXIgfSBmcm9tICcuLi8uLi8uLi9saXN0L2FjdGlvbi1iYXIvaW5kZXgnO1xuLy9NaXhpbnNcbmltcG9ydCBpMThuTWl4aW4gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2kxOG4vbWl4aW4nO1xuXG5jb25zdCBCYXIgPSB7XG4gICAgbWl4aW5zOiBbaTE4bk1peGluXSxcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgcHJvcHNcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBkZWZhdWx0IHByb3BzXG4gICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIGFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ3JvdXBhYmxlQ29sdW1uTGlzdDoge30sXG4gICAgICAgICAgICBncm91cGluZ0tleTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGFzR3JvdXBpbmc6IHRydWUsXG4gICAgICAgICAgICBsaW5lT3BlcmF0aW9uTGlzdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb3JkZXJhYmxlQ29sdW1uTGlzdDoge30sXG4gICAgICAgICAgICBvcmRlclNlbGVjdGVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzZWxlY3Rpb25BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNlbGVjdGlvblN0YXR1czogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2VsZWN0ZWRGYWNldHM6IHt9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRmlsdGVyIHRoZSBmYWNldCBsaXN0IHNvIHRoYXQgdGhlIHNjb3BlIGZhY2V0IGlzIG5vdCBkaXNwbGF5ZWRcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBmaWx0ZXJlZCBmYWNldCBsaXN0XG4gICAgICovXG4gICAgX2ZpbHRlckZhY2V0TGlzdCgpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZEZhY2V0cyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIHJlZHVjZShzZWxlY3RlZEZhY2V0cywgKHJlc3VsdCwgZmFjZXQsIGZhY2V0S2V5KSA9PiB7XG4gICAgICAgICAgICByZXN1bHRbZmFjZXRLZXldID0ge1xuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmkxOG4oYGxpdmUuZmlsdGVyLmZhY2V0cy4ke2ZhY2V0S2V5fWApLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWNldC5kYXRhLmxhYmVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwge30pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogT24gZmFjZXQgY2xpY2ssIHJlbW92ZSBpdCBmcm9tIHRoZSBzZWxlY3RlZCBmYWNldHMsIGFuZCB1cGRhdGUgdGhlIHN0b3JlXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgVGhlIGZhY2V0IGtleSB0byByZW1vdmVcbiAgICAgKi9cbiAgICBfb25GYWNldENsaWNrKGtleSkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdGVkRmFjZXRzLCBhY3Rpb246IHsgdXBkYXRlUHJvcGVydGllcyB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB1cGRhdGVQcm9wZXJ0aWVzKHsgc2VsZWN0ZWRGYWNldHM6IG9taXQoc2VsZWN0ZWRGYWNldHMsIGtleSkgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0b3JlIHRvIGFzayBmb3IgYSBuZXcgcmVzdWx0cyBvcmRlclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5ICAgdGhlIGZpbGVkIGtleSB0byBzb3J0IGJ5XG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gb3JkZXIgdGhlIHNvcnQgZGlyZWNpdG9uLCBhc2NlbmRpbmcgb3IgZGVzY2VuZGluZ1xuICAgICAqL1xuICAgIF9vcmRlckFjdGlvbihrZXksIG9yZGVyKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9uLnVwZGF0ZVByb3BlcnRpZXMoe1xuICAgICAgICAgICAgc29ydEJ5OiBrZXksXG4gICAgICAgICAgICBzb3J0QXNjOiBvcmRlclxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdyb3VwIGJ5IHRoZSBnaXZlbiBrZXlcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSBUaGUgZmFjZXQga2V5IHRvIGJhc2UgdGhlIGdyb3VwaW5nIG9uXG4gICAgICovXG4gICAgX2dyb3VwQWN0aW9uKGtleSkge1xuICAgICAgICB0aGlzLnByb3BzLmFjdGlvbi51cGRhdGVQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgIGdyb3VwaW5nS2V5OiBrZXlcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudFxuICAgICAqIEByZXR1cm4ge0hUTUx9IHRoZSByZW5kZXJlZCBjb21wb25lbnRcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZ3JvdXBhYmxlQ29sdW1uTGlzdCwgZ3JvdXBpbmdLZXksIGhhc0dyb3VwaW5nLCBpc1NlbGVjdGlvbiwgb3BlcmF0aW9uTGlzdCwgb3JkZXJhYmxlQ29sdW1uTGlzdCwgc2VsZWN0aW9uQWN0aW9uLCBzZWxlY3Rpb25TdGF0dXMsIHNvcnRCeSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaXN0QWN0aW9uQmFyXG4gICAgICAgICAgICAgICAgZGF0YS1mb2N1cz0nYWR2YW5jZWQtc2VhcmNoLWFjdGlvbi1iYXInXG4gICAgICAgICAgICAgICAgZmFjZXRDbGlja0FjdGlvbj17dGhpcy5fb25GYWNldENsaWNrfVxuICAgICAgICAgICAgICAgIGZhY2V0TGlzdD17dGhpcy5fZmlsdGVyRmFjZXRMaXN0KCl9XG4gICAgICAgICAgICAgICAgZ3JvdXBBY3Rpb249e3RoaXMuX2dyb3VwQWN0aW9ufVxuICAgICAgICAgICAgICAgIGdyb3VwYWJsZUNvbHVtbkxpc3Q9e2dyb3VwYWJsZUNvbHVtbkxpc3R9XG4gICAgICAgICAgICAgICAgZ3JvdXBMYWJlbFByZWZpeD0nbGl2ZS5maWx0ZXIuZmFjZXRzLidcbiAgICAgICAgICAgICAgICBncm91cFNlbGVjdGVkS2V5PXtncm91cGluZ0tleX1cbiAgICAgICAgICAgICAgICBoYXNHcm91cGluZz17aGFzR3JvdXBpbmd9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3Rpb249e2lzU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbkxpc3Q9e29wZXJhdGlvbkxpc3R9XG4gICAgICAgICAgICAgICAgb3JkZXJBY3Rpb249e3RoaXMuX29yZGVyQWN0aW9ufVxuICAgICAgICAgICAgICAgIG9yZGVyU2VsZWN0ZWQ9e3NvcnRCeX1cbiAgICAgICAgICAgICAgICBvcmRlcmFibGVDb2x1bW5MaXN0PXtvcmRlcmFibGVDb2x1bW5MaXN0fVxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkFjdGlvbj17c2VsZWN0aW9uQWN0aW9ufVxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblN0YXR1cz17c2VsZWN0aW9uU3RhdHVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoQmFyKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19