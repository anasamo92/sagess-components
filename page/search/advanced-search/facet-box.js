'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _facetBox = require('../../../search/facet-box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scopeFacetKey = 'FCT_SCOPE';
// Components
// Dependencies


var Box = {
    /**
     * Get the default props
     * @return {object} the default props
     */
    getDefaultProps: function getDefaultProps() {
        return {
            facets: {},
            selectedFacets: {},
            facetConfig: {},
            action: undefined,
            scopesConfig: undefined
        };
    },

    /**
     * Facet selection handler
     * @param  {object}  facetComponentData The new facet box state, given by the FacetBox component
     * @param  {Boolean} isDisableGroup     override the groupinKey ?
     */
    _onFacetSelection: function _onFacetSelection(facetComponentData, isDisableGroup) {
        if (Object.keys(facetComponentData.selectedFacetList).length === 1 && facetComponentData.selectedFacetList[scopeFacetKey]) {
            this.props.action.updateProperties({
                scope: this.props.scopesConfig[facetComponentData.selectedFacetList[scopeFacetKey].key],
                sortBy: undefined,
                sortAsc: true
            });
        } else {
            delete facetComponentData.selectedFacetList[scopeFacetKey];
            var newProperties = {
                selectedFacets: facetComponentData.selectedFacetList
            };
            if (isDisableGroup) {
                newProperties.groupingKey = undefined;
            }
            this.props.action.updateProperties(newProperties);
        }
    },

    /**
     * Render the component
     * @return {HTML} the rendered component
     */
    render: function render() {
        return _react2.default.createElement(_facetBox.component, {
            'data-focus': 'advanced-search-facet-box',
            facetList: this.props.facets,
            selectedFacetList: this.props.selectedFacets,
            config: this.props.facetConfig,
            openedFacetList: this.props.openedFacetList,
            dataSelectionHandler: this._onFacetSelection
        });
    }
};

var _builder = (0, _builder3.default)(Box),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsic2NvcGVGYWNldEtleSIsIkJveCIsImdldERlZmF1bHRQcm9wcyIsImZhY2V0cyIsInNlbGVjdGVkRmFjZXRzIiwiZmFjZXRDb25maWciLCJhY3Rpb24iLCJ1bmRlZmluZWQiLCJzY29wZXNDb25maWciLCJfb25GYWNldFNlbGVjdGlvbiIsImZhY2V0Q29tcG9uZW50RGF0YSIsImlzRGlzYWJsZUdyb3VwIiwiT2JqZWN0Iiwia2V5cyIsInNlbGVjdGVkRmFjZXRMaXN0IiwibGVuZ3RoIiwicHJvcHMiLCJ1cGRhdGVQcm9wZXJ0aWVzIiwic2NvcGUiLCJrZXkiLCJzb3J0QnkiLCJzb3J0QXNjIiwibmV3UHJvcGVydGllcyIsImdyb3VwaW5nS2V5IiwicmVuZGVyIiwib3BlbmVkRmFjZXRMaXN0IiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsV0FBdEI7QUFIQTtBQUhBOzs7QUFRQSxJQUFNQyxNQUFNO0FBQ1I7Ozs7QUFJQUMsbUJBTFEsNkJBS1U7QUFDZCxlQUFRO0FBQ0pDLG9CQUFRLEVBREo7QUFFSkMsNEJBQWdCLEVBRlo7QUFHSkMseUJBQWEsRUFIVDtBQUlKQyxvQkFBUUMsU0FKSjtBQUtKQywwQkFBY0Q7QUFMVixTQUFSO0FBT0gsS0FiTzs7QUFjUjs7Ozs7QUFLQUUscUJBbkJRLDZCQW1CVUMsa0JBbkJWLEVBbUI4QkMsY0FuQjlCLEVBbUI4QztBQUNsRCxZQUFJQyxPQUFPQyxJQUFQLENBQVlILG1CQUFtQkksaUJBQS9CLEVBQWtEQyxNQUFsRCxLQUE2RCxDQUE3RCxJQUFrRUwsbUJBQW1CSSxpQkFBbkIsQ0FBcUNkLGFBQXJDLENBQXRFLEVBQTJIO0FBQ3ZILGlCQUFLZ0IsS0FBTCxDQUFXVixNQUFYLENBQWtCVyxnQkFBbEIsQ0FBbUM7QUFDL0JDLHVCQUFPLEtBQUtGLEtBQUwsQ0FBV1IsWUFBWCxDQUF3QkUsbUJBQW1CSSxpQkFBbkIsQ0FBcUNkLGFBQXJDLEVBQW9EbUIsR0FBNUUsQ0FEd0I7QUFFL0JDLHdCQUFRYixTQUZ1QjtBQUcvQmMseUJBQVM7QUFIc0IsYUFBbkM7QUFLSCxTQU5ELE1BTU87QUFDSCxtQkFBT1gsbUJBQW1CSSxpQkFBbkIsQ0FBcUNkLGFBQXJDLENBQVA7QUFDQSxnQkFBTXNCLGdCQUFnQjtBQUNsQmxCLGdDQUFnQk0sbUJBQW1CSTtBQURqQixhQUF0QjtBQUdBLGdCQUFJSCxjQUFKLEVBQW9CO0FBQ2hCVyw4QkFBY0MsV0FBZCxHQUE0QmhCLFNBQTVCO0FBQ0g7QUFDRCxpQkFBS1MsS0FBTCxDQUFXVixNQUFYLENBQWtCVyxnQkFBbEIsQ0FBbUNLLGFBQW5DO0FBQ0g7QUFFSixLQXJDTzs7QUFzQ1I7Ozs7QUFJQUUsVUExQ1Esb0JBMENDO0FBQ0wsZUFDSSw4QkFBQyxtQkFBRDtBQUNJLDBCQUFXLDJCQURmO0FBRUksdUJBQVcsS0FBS1IsS0FBTCxDQUFXYixNQUYxQjtBQUdJLCtCQUFtQixLQUFLYSxLQUFMLENBQVdaLGNBSGxDO0FBSUksb0JBQVEsS0FBS1ksS0FBTCxDQUFXWCxXQUp2QjtBQUtJLDZCQUFpQixLQUFLVyxLQUFMLENBQVdTLGVBTGhDO0FBTUksa0NBQXNCLEtBQUtoQjtBQU4vQixVQURKO0FBVUg7QUFyRE8sQ0FBWjs7ZUF3RDZCLHVCQUFRUixHQUFSLEM7SUFBckJ5QixLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIEZhY2V0Qm94IH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2ZhY2V0LWJveCc7XG5cbmNvbnN0IHNjb3BlRmFjZXRLZXkgPSAnRkNUX1NDT1BFJztcblxuY29uc3QgQm94ID0ge1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGVmYXVsdCBwcm9wc1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gdGhlIGRlZmF1bHQgcHJvcHNcbiAgICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgZmFjZXRzOiB7fSxcbiAgICAgICAgICAgIHNlbGVjdGVkRmFjZXRzOiB7fSxcbiAgICAgICAgICAgIGZhY2V0Q29uZmlnOiB7fSxcbiAgICAgICAgICAgIGFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2NvcGVzQ29uZmlnOiB1bmRlZmluZWRcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBGYWNldCBzZWxlY3Rpb24gaGFuZGxlclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gIGZhY2V0Q29tcG9uZW50RGF0YSBUaGUgbmV3IGZhY2V0IGJveCBzdGF0ZSwgZ2l2ZW4gYnkgdGhlIEZhY2V0Qm94IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGlzRGlzYWJsZUdyb3VwICAgICBvdmVycmlkZSB0aGUgZ3JvdXBpbktleSA/XG4gICAgICovXG4gICAgX29uRmFjZXRTZWxlY3Rpb24oZmFjZXRDb21wb25lbnREYXRhLCBpc0Rpc2FibGVHcm91cCkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZmFjZXRDb21wb25lbnREYXRhLnNlbGVjdGVkRmFjZXRMaXN0KS5sZW5ndGggPT09IDEgJiYgZmFjZXRDb21wb25lbnREYXRhLnNlbGVjdGVkRmFjZXRMaXN0W3Njb3BlRmFjZXRLZXldKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbi51cGRhdGVQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgICAgICBzY29wZTogdGhpcy5wcm9wcy5zY29wZXNDb25maWdbZmFjZXRDb21wb25lbnREYXRhLnNlbGVjdGVkRmFjZXRMaXN0W3Njb3BlRmFjZXRLZXldLmtleV0sXG4gICAgICAgICAgICAgICAgc29ydEJ5OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgc29ydEFzYzogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgZmFjZXRDb21wb25lbnREYXRhLnNlbGVjdGVkRmFjZXRMaXN0W3Njb3BlRmFjZXRLZXldO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEZhY2V0czogZmFjZXRDb21wb25lbnREYXRhLnNlbGVjdGVkRmFjZXRMaXN0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGlzRGlzYWJsZUdyb3VwKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvcGVydGllcy5ncm91cGluZ0tleSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9uLnVwZGF0ZVByb3BlcnRpZXMobmV3UHJvcGVydGllcyk7XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJuIHtIVE1MfSB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZhY2V0Qm94XG4gICAgICAgICAgICAgICAgZGF0YS1mb2N1cz0nYWR2YW5jZWQtc2VhcmNoLWZhY2V0LWJveCdcbiAgICAgICAgICAgICAgICBmYWNldExpc3Q9e3RoaXMucHJvcHMuZmFjZXRzfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmFjZXRMaXN0PXt0aGlzLnByb3BzLnNlbGVjdGVkRmFjZXRzfVxuICAgICAgICAgICAgICAgIGNvbmZpZz17dGhpcy5wcm9wcy5mYWNldENvbmZpZ31cbiAgICAgICAgICAgICAgICBvcGVuZWRGYWNldExpc3Q9e3RoaXMucHJvcHMub3BlbmVkRmFjZXRMaXN0fVxuICAgICAgICAgICAgICAgIGRhdGFTZWxlY3Rpb25IYW5kbGVyPXt0aGlzLl9vbkZhY2V0U2VsZWN0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoQm94KTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19