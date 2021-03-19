'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _searchBar = require('../../../search/search-bar');

var _results = require('../common/component/results');

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _referenceBehaviour = require('../../../common/form/mixin/reference-behaviour');

var _referenceBehaviour2 = _interopRequireDefault(_referenceBehaviour);

var _storeBehaviour = require('../../../common/mixin/store-behaviour');

var _storeBehaviour2 = _interopRequireDefault(_storeBehaviour);

var _actionBuilder = require('sagess-core/search/action-builder');

var _actionBuilder2 = _interopRequireDefault(_actionBuilder);

var _builtInStore = require('sagess-core/search/built-in-store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // Dependencies

// Components

// Mixins

// Actions

// Stores


/**
* General search mixin.
* Contains a search bar, and a results list.
* @type {Object}
*/
var QuickSearchComponent = {
    /**
    * Component's mixins
    * @type {Array}
    */
    mixins: [_referenceBehaviour2.default, _storeBehaviour2.default],
    /**
    * Tag name.
    */
    displayName: 'QuickSearch',
    /**
    * Reference names to be fetched by the reference behaviour
    * @type {Array}
    */
    referenceNames: ['scopes'],
    /**
    * Get the default props
    * @return {object} the default props
    */
    getDefaultProps: function getDefaultProps() {
        return {
            action: undefined,
            groupComponent: _group2.default,
            groupMaxRows: undefined,
            lineComponentMapper: undefined,
            lineOperationList: undefined,
            onLineClick: undefined,
            scopesConfig: {},
            scopeFacetKey: 'FCT_SCOPE',
            scopeSelectionHandler: this._scopeSelectionHandler,
            scrollParentSelector: undefined,
            SearchBar: _searchBar.component,
            service: undefined,
            store: _builtInStore.quickSearchStore
        };
    },

    /**
    * Prop validation
    * @type {Object}
    */
    propTypes: {
        action: _react.PropTypes.object,
        groupComponent: _react.PropTypes.func,
        groupMaxRows: _react.PropTypes.number,
        lineComponentMapper: _react.PropTypes.func,
        onLineClick: _react.PropTypes.func,
        scopesConfig: _react.PropTypes.object,
        scopeFacetKey: _react.PropTypes.string,
        scopeSelectionHandler: _react.PropTypes.func,
        service: _react.PropTypes.object,
        store: _react.PropTypes.object,
        showAllHandler: _react.PropTypes.func
    },
    /**
    * Register the store listeners
    */
    componentWillMount: function componentWillMount() {
        var _props = this.props,
            action = _props.action,
            service = _props.service,
            store = _props.store;

        this._action = action || (0, _actionBuilder2.default)({
            service: service,
            identifier: store.identifier,
            getSearchOptions: function getSearchOptions() {
                return store.getValue.call(store);
            } // Binding the store in the function call
        });

        store.on('quick-search-criterias:change', this._triggerSearch);
        // store.addQueryChangeListener(this._triggerSearch);
        // store.addScopeChangeListener(this._triggerSearch);
        store.addResultsChangeListener(this._onResultsChange);
    },

    /**
    * Unregister the store listeners
    */
    componentWillUnmount: function componentWillUnmount() {
        var store = this.props.store;

        store.removeListener('quick-search-criterias:change', this._triggerSearch);
        // store.removeQueryChangeListener(this._triggerSearch);
        // store.removeScopeChangeListener(this._triggerSearch);
        store.removeResultsChangeListener(this._onResultsChange);
    },

    /**
    * Trigger search
    */
    _triggerSearch: function _triggerSearch() {
        this._action.search();
    },

    /**
    * Results change handler
    */
    _onResultsChange: function _onResultsChange() {
        var store = this.props.store;

        var resultsMap = store.getResults();
        var facets = store.getFacets();
        var totalCount = store.getTotalCount();
        this.setState({ resultsMap: resultsMap, facets: facets, totalCount: totalCount });
    },

    /**
    * Action on line click.
    * @param {object} item  the item clicked
    */
    _lineClickHandler: function _lineClickHandler(item) {
        if (this.props.onLineClick) {
            this.props.onLineClick(item);
        }
    },

    /**
    * redner the SearchBar
    * @returns {HTML} the rendered component
    */
    _renderSearchBar: function _renderSearchBar() {
        var _props2 = this.props,
            placeholder = _props2.placeholder,
            SearchBar = _props2.SearchBar,
            store = _props2.store;
        var _state = this.state,
            isLoading = _state.isLoading,
            scopes = _state.reference.scopes;

        return _react2.default.createElement(SearchBar, {
            action: this._action,
            'data-focus': 'search-bar',
            loading: isLoading,
            placeholder: placeholder,
            ref: 'searchBar',
            scopes: scopes,
            store: store
        });
    },

    /**
    * redner the results
    * @returns {HTML} the rendered component
    */
    _renderResults: function _renderResults() {
        // Adding 'action' in this.props destructuring here prevent the fact that '...otherProps' consider the props 'action' in otherProps.
        // It didn't give 'this._action' to the 'action' props without doing it
        var _props3 = this.props,
            action = _props3.action,
            groupComponent = _props3.groupComponent,
            groupMaxRows = _props3.groupMaxRows,
            lineComponentMapper = _props3.lineComponentMapper,
            lineOperationList = _props3.lineOperationList,
            scrollParentSelector = _props3.scrollParentSelector,
            scopeFacetKey = _props3.scopeFacetKey,
            store = _props3.store,
            scopesConfig = _props3.scopesConfig,
            otherProps = _objectWithoutProperties(_props3, ['action', 'groupComponent', 'groupMaxRows', 'lineComponentMapper', 'lineOperationList', 'scrollParentSelector', 'scopeFacetKey', 'store', 'scopesConfig']);

        var _state2 = this.state,
            facets = _state2.facets,
            resultsMap = _state2.resultsMap,
            totalCount = _state2.totalCount;

        return _react2.default.createElement(_results.component, Object.assign({
            action: this._action,
            groupComponent: groupComponent,
            groupingKey: scopeFacetKey,
            initialRowsCount: groupMaxRows,
            isSelection: false,
            lineClickHandler: this._lineClickHandler,
            lineComponentMapper: lineComponentMapper,
            lineOperationList: lineOperationList,
            resultsFacets: facets,
            resultsMap: resultsMap,
            scopesConfig: scopesConfig,
            scrollParentSelector: scrollParentSelector,
            store: store,
            totalCount: totalCount
        }, otherProps));
    },

    /**
    * Render the component
    * @return {HTML} the rendered component
    */
    render: function render() {

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'quick-search' },
            _react2.default.createElement(
                'div',
                { 'data-focus': 'quick-search-bar' },
                this._renderSearchBar()
            ),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'quick-search-results' },
                this._renderResults()
            )
        );
    }
};

var _builder = (0, _builder3.default)(QuickSearchComponent),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiUXVpY2tTZWFyY2hDb21wb25lbnQiLCJtaXhpbnMiLCJyZWZlcmVuY2VCZWhhdmlvdXIiLCJzdG9yZUJlaGF2aW91ciIsImRpc3BsYXlOYW1lIiwicmVmZXJlbmNlTmFtZXMiLCJnZXREZWZhdWx0UHJvcHMiLCJhY3Rpb24iLCJ1bmRlZmluZWQiLCJncm91cENvbXBvbmVudCIsIkRlZmF1bHRHcm91cENvbXBvbmVudCIsImdyb3VwTWF4Um93cyIsImxpbmVDb21wb25lbnRNYXBwZXIiLCJsaW5lT3BlcmF0aW9uTGlzdCIsIm9uTGluZUNsaWNrIiwic2NvcGVzQ29uZmlnIiwic2NvcGVGYWNldEtleSIsInNjb3BlU2VsZWN0aW9uSGFuZGxlciIsIl9zY29wZVNlbGVjdGlvbkhhbmRsZXIiLCJzY3JvbGxQYXJlbnRTZWxlY3RvciIsIlNlYXJjaEJhciIsIkRlZmF1bHRTZWFyY2hCYXIiLCJzZXJ2aWNlIiwic3RvcmUiLCJxdWlja1NlYXJjaFN0b3JlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZnVuYyIsIm51bWJlciIsInN0cmluZyIsInNob3dBbGxIYW5kbGVyIiwiY29tcG9uZW50V2lsbE1vdW50IiwicHJvcHMiLCJfYWN0aW9uIiwiaWRlbnRpZmllciIsImdldFNlYXJjaE9wdGlvbnMiLCJnZXRWYWx1ZSIsImNhbGwiLCJvbiIsIl90cmlnZ2VyU2VhcmNoIiwiYWRkUmVzdWx0c0NoYW5nZUxpc3RlbmVyIiwiX29uUmVzdWx0c0NoYW5nZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVSZXN1bHRzQ2hhbmdlTGlzdGVuZXIiLCJzZWFyY2giLCJyZXN1bHRzTWFwIiwiZ2V0UmVzdWx0cyIsImZhY2V0cyIsImdldEZhY2V0cyIsInRvdGFsQ291bnQiLCJnZXRUb3RhbENvdW50Iiwic2V0U3RhdGUiLCJfbGluZUNsaWNrSGFuZGxlciIsIml0ZW0iLCJfcmVuZGVyU2VhcmNoQmFyIiwicGxhY2Vob2xkZXIiLCJzdGF0ZSIsImlzTG9hZGluZyIsInNjb3BlcyIsInJlZmVyZW5jZSIsIl9yZW5kZXJSZXN1bHRzIiwib3RoZXJQcm9wcyIsInJlbmRlciIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7Nk5BYkE7O0FBR0E7O0FBSUE7O0FBR0E7O0FBRUE7OztBQUdBOzs7OztBQUtBLElBQU1BLHVCQUF1QjtBQUN6Qjs7OztBQUlBQyxZQUFRLENBQUNDLDRCQUFELEVBQXFCQyx3QkFBckIsQ0FMaUI7QUFNekI7OztBQUdBQyxpQkFBYSxhQVRZO0FBVXpCOzs7O0FBSUFDLG9CQUFnQixDQUFDLFFBQUQsQ0FkUztBQWV6Qjs7OztBQUlBQyxtQkFuQnlCLDZCQW1CUDtBQUNkLGVBQU87QUFDSEMsb0JBQVFDLFNBREw7QUFFSEMsNEJBQWdCQyxlQUZiO0FBR0hDLDBCQUFjSCxTQUhYO0FBSUhJLGlDQUFxQkosU0FKbEI7QUFLSEssK0JBQW1CTCxTQUxoQjtBQU1ITSx5QkFBYU4sU0FOVjtBQU9ITywwQkFBYyxFQVBYO0FBUUhDLDJCQUFlLFdBUlo7QUFTSEMsbUNBQXVCLEtBQUtDLHNCQVR6QjtBQVVIQyxrQ0FBc0JYLFNBVm5CO0FBV0hZLHVCQUFXQyxvQkFYUjtBQVlIQyxxQkFBU2QsU0FaTjtBQWFIZSxtQkFBT0M7QUFiSixTQUFQO0FBZUgsS0FuQ3dCOztBQW9DekI7Ozs7QUFJQUMsZUFBVztBQUNQbEIsZ0JBQVFtQixpQkFBVUMsTUFEWDtBQUVQbEIsd0JBQWdCaUIsaUJBQVVFLElBRm5CO0FBR1BqQixzQkFBY2UsaUJBQVVHLE1BSGpCO0FBSVBqQiw2QkFBcUJjLGlCQUFVRSxJQUp4QjtBQUtQZCxxQkFBYVksaUJBQVVFLElBTGhCO0FBTVBiLHNCQUFjVyxpQkFBVUMsTUFOakI7QUFPUFgsdUJBQWVV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TkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IGNvbXBvbmVudCBhcyBEZWZhdWx0U2VhcmNoQmFyIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL3NlYXJjaC1iYXInO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIFJlc3VsdHMgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50L3Jlc3VsdHMnO1xuaW1wb3J0IERlZmF1bHRHcm91cENvbXBvbmVudCBmcm9tICcuL2dyb3VwJztcbi8vIE1peGluc1xuaW1wb3J0IHJlZmVyZW5jZUJlaGF2aW91ciBmcm9tICcuLi8uLi8uLi9jb21tb24vZm9ybS9taXhpbi9yZWZlcmVuY2UtYmVoYXZpb3VyJztcbmltcG9ydCBzdG9yZUJlaGF2aW91ciBmcm9tICcuLi8uLi8uLi9jb21tb24vbWl4aW4vc3RvcmUtYmVoYXZpb3VyJztcbi8vIEFjdGlvbnNcbmltcG9ydCBhY3Rpb25CdWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL3NlYXJjaC9hY3Rpb24tYnVpbGRlcic7XG4vLyBTdG9yZXNcbmltcG9ydCB7IHF1aWNrU2VhcmNoU3RvcmUgfSBmcm9tICdzYWdlc3MtY29yZS9zZWFyY2gvYnVpbHQtaW4tc3RvcmUnO1xuXG4vKipcbiogR2VuZXJhbCBzZWFyY2ggbWl4aW4uXG4qIENvbnRhaW5zIGEgc2VhcmNoIGJhciwgYW5kIGEgcmVzdWx0cyBsaXN0LlxuKiBAdHlwZSB7T2JqZWN0fVxuKi9cbmNvbnN0IFF1aWNrU2VhcmNoQ29tcG9uZW50ID0ge1xuICAgIC8qKlxuICAgICogQ29tcG9uZW50J3MgbWl4aW5zXG4gICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgKi9cbiAgICBtaXhpbnM6IFtyZWZlcmVuY2VCZWhhdmlvdXIsIHN0b3JlQmVoYXZpb3VyXSxcbiAgICAvKipcbiAgICAqIFRhZyBuYW1lLlxuICAgICovXG4gICAgZGlzcGxheU5hbWU6ICdRdWlja1NlYXJjaCcsXG4gICAgLyoqXG4gICAgKiBSZWZlcmVuY2UgbmFtZXMgdG8gYmUgZmV0Y2hlZCBieSB0aGUgcmVmZXJlbmNlIGJlaGF2aW91clxuICAgICogQHR5cGUge0FycmF5fVxuICAgICovXG4gICAgcmVmZXJlbmNlTmFtZXM6IFsnc2NvcGVzJ10sXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIGRlZmF1bHQgcHJvcHNcbiAgICAqIEByZXR1cm4ge29iamVjdH0gdGhlIGRlZmF1bHQgcHJvcHNcbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ3JvdXBDb21wb25lbnQ6IERlZmF1bHRHcm91cENvbXBvbmVudCxcbiAgICAgICAgICAgIGdyb3VwTWF4Um93czogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGluZUNvbXBvbmVudE1hcHBlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGluZU9wZXJhdGlvbkxpc3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9uTGluZUNsaWNrOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzY29wZXNDb25maWc6IHt9LFxuICAgICAgICAgICAgc2NvcGVGYWNldEtleTogJ0ZDVF9TQ09QRScsXG4gICAgICAgICAgICBzY29wZVNlbGVjdGlvbkhhbmRsZXI6IHRoaXMuX3Njb3BlU2VsZWN0aW9uSGFuZGxlcixcbiAgICAgICAgICAgIHNjcm9sbFBhcmVudFNlbGVjdG9yOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBTZWFyY2hCYXI6IERlZmF1bHRTZWFyY2hCYXIsXG4gICAgICAgICAgICBzZXJ2aWNlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdG9yZTogcXVpY2tTZWFyY2hTdG9yZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBQcm9wIHZhbGlkYXRpb25cbiAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgYWN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBncm91cENvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGdyb3VwTWF4Um93czogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgbGluZUNvbXBvbmVudE1hcHBlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uTGluZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc2NvcGVzQ29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBzY29wZUZhY2V0S2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzY29wZVNlbGVjdGlvbkhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzZXJ2aWNlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgc2hvd0FsbEhhbmRsZXI6IFByb3BUeXBlcy5mdW5jXG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlZ2lzdGVyIHRoZSBzdG9yZSBsaXN0ZW5lcnNcbiAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBhY3Rpb24sIHNlcnZpY2UsIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLl9hY3Rpb24gPSBhY3Rpb24gfHwgYWN0aW9uQnVpbGRlcih7XG4gICAgICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogc3RvcmUuaWRlbnRpZmllcixcbiAgICAgICAgICAgIGdldFNlYXJjaE9wdGlvbnM6ICgpID0+IHsgcmV0dXJuIHN0b3JlLmdldFZhbHVlLmNhbGwoc3RvcmUpOyB9IC8vIEJpbmRpbmcgdGhlIHN0b3JlIGluIHRoZSBmdW5jdGlvbiBjYWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0b3JlLm9uKCdxdWljay1zZWFyY2gtY3JpdGVyaWFzOmNoYW5nZScsIHRoaXMuX3RyaWdnZXJTZWFyY2gpO1xuICAgICAgICAvLyBzdG9yZS5hZGRRdWVyeUNoYW5nZUxpc3RlbmVyKHRoaXMuX3RyaWdnZXJTZWFyY2gpO1xuICAgICAgICAvLyBzdG9yZS5hZGRTY29wZUNoYW5nZUxpc3RlbmVyKHRoaXMuX3RyaWdnZXJTZWFyY2gpO1xuICAgICAgICBzdG9yZS5hZGRSZXN1bHRzQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25SZXN1bHRzQ2hhbmdlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogVW5yZWdpc3RlciB0aGUgc3RvcmUgbGlzdGVuZXJzXG4gICAgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgc3RvcmUucmVtb3ZlTGlzdGVuZXIoJ3F1aWNrLXNlYXJjaC1jcml0ZXJpYXM6Y2hhbmdlJywgdGhpcy5fdHJpZ2dlclNlYXJjaCk7XG4gICAgICAgIC8vIHN0b3JlLnJlbW92ZVF1ZXJ5Q2hhbmdlTGlzdGVuZXIodGhpcy5fdHJpZ2dlclNlYXJjaCk7XG4gICAgICAgIC8vIHN0b3JlLnJlbW92ZVNjb3BlQ2hhbmdlTGlzdGVuZXIodGhpcy5fdHJpZ2dlclNlYXJjaCk7XG4gICAgICAgIHN0b3JlLnJlbW92ZVJlc3VsdHNDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblJlc3VsdHNDaGFuZ2UpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBUcmlnZ2VyIHNlYXJjaFxuICAgICovXG4gICAgX3RyaWdnZXJTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuX2FjdGlvbi5zZWFyY2goKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVzdWx0cyBjaGFuZ2UgaGFuZGxlclxuICAgICovXG4gICAgX29uUmVzdWx0c0NoYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgcmVzdWx0c01hcCA9IHN0b3JlLmdldFJlc3VsdHMoKTtcbiAgICAgICAgY29uc3QgZmFjZXRzID0gc3RvcmUuZ2V0RmFjZXRzKCk7XG4gICAgICAgIGNvbnN0IHRvdGFsQ291bnQgPSBzdG9yZS5nZXRUb3RhbENvdW50KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHRzTWFwLCBmYWNldHMsIHRvdGFsQ291bnQgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIEFjdGlvbiBvbiBsaW5lIGNsaWNrLlxuICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gIHRoZSBpdGVtIGNsaWNrZWRcbiAgICAqL1xuICAgIF9saW5lQ2xpY2tIYW5kbGVyKGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25MaW5lQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25MaW5lQ2xpY2soaXRlbSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICogcmVkbmVyIHRoZSBTZWFyY2hCYXJcbiAgICAqIEByZXR1cm5zIHtIVE1MfSB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG4gICAgKi9cbiAgICBfcmVuZGVyU2VhcmNoQmFyKCkge1xuICAgICAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCBTZWFyY2hCYXIsIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGlzTG9hZGluZywgcmVmZXJlbmNlOiB7IHNjb3BlcyB9IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5fYWN0aW9ufVxuICAgICAgICAgICAgICAgIGRhdGEtZm9jdXM9J3NlYXJjaC1iYXInXG4gICAgICAgICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICByZWY9J3NlYXJjaEJhcidcbiAgICAgICAgICAgICAgICBzY29wZXM9e3Njb3Blc31cbiAgICAgICAgICAgICAgICBzdG9yZT17c3RvcmV9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiByZWRuZXIgdGhlIHJlc3VsdHNcbiAgICAqIEByZXR1cm5zIHtIVE1MfSB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG4gICAgKi9cbiAgICBfcmVuZGVyUmVzdWx0cygpIHtcbiAgICAgICAgLy8gQWRkaW5nICdhY3Rpb24nIGluIHRoaXMucHJvcHMgZGVzdHJ1Y3R1cmluZyBoZXJlIHByZXZlbnQgdGhlIGZhY3QgdGhhdCAnLi4ub3RoZXJQcm9wcycgY29uc2lkZXIgdGhlIHByb3BzICdhY3Rpb24nIGluIG90aGVyUHJvcHMuXG4gICAgICAgIC8vIEl0IGRpZG4ndCBnaXZlICd0aGlzLl9hY3Rpb24nIHRvIHRoZSAnYWN0aW9uJyBwcm9wcyB3aXRob3V0IGRvaW5nIGl0XG4gICAgICAgIGNvbnN0IHsgYWN0aW9uLCBncm91cENvbXBvbmVudCwgZ3JvdXBNYXhSb3dzLCBsaW5lQ29tcG9uZW50TWFwcGVyLCBsaW5lT3BlcmF0aW9uTGlzdCwgc2Nyb2xsUGFyZW50U2VsZWN0b3IsIHNjb3BlRmFjZXRLZXksIHN0b3JlLCBzY29wZXNDb25maWcsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgZmFjZXRzLCByZXN1bHRzTWFwLCB0b3RhbENvdW50IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlc3VsdHNcbiAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuX2FjdGlvbn1cbiAgICAgICAgICAgICAgICBncm91cENvbXBvbmVudD17Z3JvdXBDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgZ3JvdXBpbmdLZXk9e3Njb3BlRmFjZXRLZXl9XG4gICAgICAgICAgICAgICAgaW5pdGlhbFJvd3NDb3VudD17Z3JvdXBNYXhSb3dzfVxuICAgICAgICAgICAgICAgIGlzU2VsZWN0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBsaW5lQ2xpY2tIYW5kbGVyPXt0aGlzLl9saW5lQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgIGxpbmVDb21wb25lbnRNYXBwZXI9e2xpbmVDb21wb25lbnRNYXBwZXJ9XG4gICAgICAgICAgICAgICAgbGluZU9wZXJhdGlvbkxpc3Q9e2xpbmVPcGVyYXRpb25MaXN0fVxuICAgICAgICAgICAgICAgIHJlc3VsdHNGYWNldHM9e2ZhY2V0c31cbiAgICAgICAgICAgICAgICByZXN1bHRzTWFwPXtyZXN1bHRzTWFwfVxuICAgICAgICAgICAgICAgIHNjb3Blc0NvbmZpZz17c2NvcGVzQ29uZmlnfVxuICAgICAgICAgICAgICAgIHNjcm9sbFBhcmVudFNlbGVjdG9yPXtzY3JvbGxQYXJlbnRTZWxlY3Rvcn1cbiAgICAgICAgICAgICAgICBzdG9yZT17c3RvcmV9XG4gICAgICAgICAgICAgICAgdG90YWxDb3VudD17dG90YWxDb3VudH1cbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50XG4gICAgKiBAcmV0dXJuIHtIVE1MfSB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG4gICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0ncXVpY2stc2VhcmNoJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J3F1aWNrLXNlYXJjaC1iYXInPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyU2VhcmNoQmFyKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdxdWljay1zZWFyY2gtcmVzdWx0cyc+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJSZXN1bHRzKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoUXVpY2tTZWFyY2hDb21wb25lbnQpO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=