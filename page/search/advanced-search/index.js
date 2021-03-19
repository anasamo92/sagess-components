'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _dispatcher = require('sagess-core/dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _camelCase = require('lodash/string/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _capitalize = require('lodash/string/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _reduce = require('lodash/collection/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _facetBox = require('./facet-box');

var _actionBar = require('./action-bar');

var _listSummary = require('./list-summary');

var _results = require('../common/component/results');

var _buttonBackToTop = require('../../../components/button-back-to-top');

var _buttonBackToTop2 = _interopRequireDefault(_buttonBackToTop);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _builtInStore = require('sagess-core/search/built-in-store');

var _cartridgeBehaviour = require('../../mixin/cartridge-behaviour');

var _cartridgeBehaviour2 = _interopRequireDefault(_cartridgeBehaviour);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _actionBuilder = require('sagess-core/search/action-builder');

var _actionBuilder2 = _interopRequireDefault(_actionBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Page mixin of the advanced search.
* @type {Object}
*/

// Store

// Components
var AdvancedSearch = {
    /**
    * Component's mixins
    * @type {Array}
    */
    mixins: [_cartridgeBehaviour2.default],
    /**
    * Display name.
    */
    displayName: 'advanced-search',
    /**
    * Get the default props
    * @return {object} the default props
    */
    getDefaultProps: function getDefaultProps() {
        return {
            action: undefined,
            backToTopComponent: _buttonBackToTop2.default,
            callSearchOnMount: true,
            facetConfig: {},
            groupComponent: _group2.default,
            hasBackToTop: true,
            isSelection: true,
            lineOperationList: [],
            lineComponentMapper: undefined,
            orderableColumnList: [],
            onLineClick: undefined,
            openedFacetList: {},
            scopesConfig: {},
            scrollParentSelector: undefined,
            service: undefined,
            store: _builtInStore.advancedSearchStore
        };
    },

    /**
    * Props validation
    * @type {Object}
    */
    propTypes: {
        action: (0, _types2.default)('object'),
        backToTopComponent: (0, _types2.default)('func'),
        callSearchOnMount: (0, _types2.default)('bool'),
        exportAction: (0, _types2.default)('func'),
        facetConfig: (0, _types2.default)('object'),
        groupComponent: (0, _types2.default)('func'),
        hasBackToTop: (0, _types2.default)('bool'),
        isSelection: (0, _types2.default)('bool'),
        lineComponentMapper: (0, _types2.default)('func'),
        lineOperationList: (0, _types2.default)(['array', 'object']),
        onLineClick: (0, _types2.default)('func'),
        orderableColumnList: (0, _types2.default)(['array', 'object']),
        openedFacetList: (0, _types2.default)('object'),
        scopesConfig: (0, _types2.default)('object'),
        scrollParentSelector: (0, _types2.default)('string'),
        service: (0, _types2.default)('object'),
        store: (0, _types2.default)('object')
    },
    /**
    * Get initial state
    * @return {Object} initial state
    */
    getInitialState: function getInitialState() {
        return this._getNewStateFromStore();
    },

    /**
    * Register the store listeners
    */
    componentWillMount: function componentWillMount() {
        var _this = this;

        var _props = this.props,
            store = _props.store,
            callSearchOnMount = _props.callSearchOnMount,
            service = _props.service;
        //listen to search event

        store.on('advanced-search-criterias:change', this._onStoreChangeWithSearch);

        //listen to data changes
        ['facets', 'results', 'total-count'].forEach(function (node) {
            store['add' + (0, _capitalize2.default)((0, _camelCase2.default)(node)) + 'ChangeListener'](_this._onStoreChangeWithoutSearch);
        });

        // listen to scope change
        store.addScopeChangeListener(this._onScopeChange);

        this._action = this.props.action || (0, _actionBuilder2.default)({
            service: service,
            identifier: store.identifier,
            getSearchOptions: function getSearchOptions() {
                return store.getValue.call(store);
            } // Binding the store in the function call
        });
        if (this.props.callSearchOnMount) {
            this._action.search();
        }
    },

    /**
    * Un-register the store listeners
    */
    componentWillUnmount: function componentWillUnmount() {
        var _this2 = this;

        // remove listeners
        this.props.store.removeListener('advanced-search-criterias:change', this._onStoreChangeWithSearch);
        ['facets', 'results', 'total-count'].forEach(function (node) {
            _this2.props.store['remove' + (0, _capitalize2.default)((0, _camelCase2.default)(node)) + 'ChangeListener'](_this2._onStoreChangeWithoutSearch);
        });
        this.props.store.removeScopeChangeListener(this._onScopeChange);
    },
    getSelectedItems: function getSelectedItems() {
        var results = this.refs.resultList;
        var selectedItems = (0, _reduce2.default)(results.refs, function (selectedItems, ref) {
            if ((0, _isFunction2.default)(ref.getSelectedItems)) {
                selectedItems = selectedItems.concat(ref.getSelectedItems());
            } else if (ref.refs) {
                selectedItems = selectedItems.concat((0, _reduce2.default)(ref.refs, function (subSelectedItems, subRef) {
                    if ((0, _isFunction2.default)(subRef.getSelectedItems)) {
                        subSelectedItems = subSelectedItems.concat(subRef.getSelectedItems());
                    }
                    return subSelectedItems;
                }, []));
            }
            return selectedItems;
        }, []);
        return selectedItems;
    },

    /**
    * Store changed, update the state, trigger a search after update
    */
    _onStoreChangeWithSearch: function _onStoreChangeWithSearch() {
        this.setState(this._getNewStateFromStore(), this._action.search);
    },

    /**
    * Store changed, update the state, do not trigger a search after update
    */
    _onStoreChangeWithoutSearch: function _onStoreChangeWithoutSearch() {
        this.setState(this._getNewStateFromStore());
    },

    /**
    * Scope changed, need to remove all existing sort.
    */
    _onScopeChange: function _onScopeChange() {
        _dispatcher2.default.handleViewAction({
            data: { sortBy: null, sortAsc: null },
            type: 'update',
            identifier: _builtInStore.advancedSearchStore.identifier
        });
    },
    /**
    * Compute a state object from the store values.
    * @return {[type]} [description]
    */
    _getNewStateFromStore: function _getNewStateFromStore() {
        var store = this.props.store;

        var query = store.getQuery();
        var scope = store.getScope();
        var selectedFacets = store.getSelectedFacets() || {};
        var groupingKey = store.getGroupingKey();
        var sortBy = store.getSortBy();
        var sortAsc = store.getSortAsc();
        var facets = store.getFacets();
        var results = store.getResults();
        var totalCount = store.getTotalCount();
        var selectionStatus = 'none';
        var hasGrouping = scope !== undefined && scope !== 'ALL';
        return {
            facets: facets,
            groupingKey: groupingKey,
            hasGrouping: hasGrouping,
            query: query,
            selectionStatus: selectionStatus,
            scope: scope,
            selectedFacets: selectedFacets,
            sortBy: sortBy,
            sortAsc: sortAsc,
            results: results,
            totalCount: totalCount
        };
    },

    /**
    * Export action handler.
    */
    _exportHandler: function _exportHandler() {
        this.props.exportAction();
    },

    /**
    * Render the facet box.
    * @returns {HTML} the rendered component
    */
    _renderFacetBox: function _renderFacetBox() {
        var _state = this.state,
            facets = _state.facets,
            selectedFacets = _state.selectedFacets;
        var _props2 = this.props,
            facetConfig = _props2.facetConfig,
            scopesConfig = _props2.scopesConfig,
            openedFacetList = _props2.openedFacetList;

        return _react2.default.createElement(_facetBox.component, {
            action: this._action,
            facetConfig: facetConfig,
            openedFacetList: openedFacetList,
            facets: facets,
            ref: 'facetBox',
            scopesConfig: scopesConfig,
            selectedFacets: selectedFacets
        });
    },

    /**
    * Render the list summary component.
    * @returns {HTML} the rendered component
    */
    _renderListSummary: function _renderListSummary() {
        var _state2 = this.state,
            query = _state2.query,
            scope = _state2.scope,
            totalCount = _state2.totalCount;

        return _react2.default.createElement(_listSummary.component, {
            action: this._action,
            query: query,
            ref: 'summary',
            scope: scope,
            totalCount: totalCount
        });
    },

    /**
    * Render the action bar.
    * @returns {HTML} the rendered component
    */
    _renderActionBar: function _renderActionBar() {
        var _this3 = this;

        var _state3 = this.state,
            facets = _state3.facets,
            groupingKey = _state3.groupingKey,
            hasGrouping = _state3.hasGrouping,
            selectedFacets = _state3.selectedFacets,
            selectionStatus = _state3.selectionStatus,
            sortBy = _state3.sortBy;
        var _props3 = this.props,
            isSelection = _props3.isSelection,
            lineOperationList = _props3.lineOperationList,
            orderableColumnList = _props3.orderableColumnList;

        var groupableColumnList = facets ? Object.keys(facets).reduce(function (result, facetKey) {
            if (Object.keys(facets[facetKey]).length > 1) {
                result[facetKey] = facetKey;
            }
            return result;
        }, {}) : {};
        var selectionAction = function selectionAction(status) {
            _this3.setState({ selectionStatus: status });
        };
        return _react2.default.createElement(_actionBar.component, {
            action: this._action,
            groupSelectedKey: groupingKey,
            groupableColumnList: groupableColumnList,
            hasGrouping: hasGrouping,
            isSelection: isSelection,
            operationList: lineOperationList,
            orderSelected: sortBy,
            orderableColumnList: orderableColumnList,
            ref: 'actionBar',
            selectedFacets: selectedFacets,
            selectionAction: selectionAction,
            selectionStatus: selectionStatus
        });
    },

    /**
    * Render the results component
    * @return {HTML} the rendered component
    */
    _renderResults: function _renderResults() {
        var _props4 = this.props,
            groupComponent = _props4.groupComponent,
            isSelection = _props4.isSelection,
            lineComponentMapper = _props4.lineComponentMapper,
            lineOperationList = _props4.lineOperationList,
            scrollParentSelector = _props4.scrollParentSelector,
            store = _props4.store,
            scopesConfig = _props4.scopesConfig;
        var _state4 = this.state,
            groupingKey = _state4.groupingKey,
            facets = _state4.facets,
            results = _state4.results,
            selectionStatus = _state4.selectionStatus,
            totalCount = _state4.totalCount;

        return _react2.default.createElement(_results.component, {
            action: this._action,
            groupComponent: groupComponent,
            groupingKey: groupingKey,
            isSelection: isSelection,
            lineClickHandler: this._lineClick,
            lineComponentMapper: lineComponentMapper,
            lineOperationList: lineOperationList,
            lineSelectionHandler: this._selectItem,
            ref: 'resultList',
            renderSingleGroupDecoration: false,
            resultsFacets: facets,
            resultsMap: results,
            scopesConfig: scopesConfig,
            scrollParentSelector: scrollParentSelector,
            selectionStatus: selectionStatus,
            store: store,
            totalCount: totalCount
        });
    },

    /**
    * Line selection handler
    */
    _selectItem: function _selectItem() {
        // count the selected items
        var selectedItemsCount = this.getSelectedItems().length;
        // Count the visible items
        var visibleItemsCount = (0, _reduce2.default)(this.refs.resultList.refs, function (visibleItemsCount, refComponent, refKey) {
            // Results might be a list (non-grouped search) or groups (grouped search)
            if (refKey.indexOf('list-') === 0) {
                visibleItemsCount += refComponent.props.data.length;
            }
            if (refKey.indexOf('group-') === 0) {
                if (refComponent.props.list.length < refComponent.state.resultsDisplayedCount) {
                    visibleItemsCount += refComponent.props.list.length;
                } else {
                    visibleItemsCount += refComponent.state.resultsDisplayedCount;
                }
            }
            return visibleItemsCount;
        }, 0);
        // By default, the selection status is partial
        var selectionStatus = 'partial';
        // If no item is selected, then the selectionStatus is none
        if (selectedItemsCount === 0) {
            selectionStatus = 'none';
        } else if (selectedItemsCount === visibleItemsCount) {
            // There are as many selected items as visible items, so the selectionStatus is all
            selectionStatus = 'selected';
        }
        this.setState({ selectionStatus: selectionStatus });
    },

    /**
    * Action on line click.
    * @param {object} item  the item clicked
    */
    _lineClick: function _lineClick(item) {
        if (this.props.onLineClick) {
            this.props.onLineClick(item);
        }
    },

    /**
    * Render the component
    * @return {HTML} the rendered component
    */
    render: function render() {
        // true if a facet is collapsed
        var facetCollapsedClassName = Object.keys(this.props.openedFacetList).length === 0 ? 'facet-collapsed' : '';
        return _react2.default.createElement(
            'div',
            { className: 'advanced-search', 'data-focus': 'advanced-search' },
            _react2.default.createElement(
                'div',
                { 'data-focus': 'facet-container', className: facetCollapsedClassName },
                this._renderFacetBox()
            ),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'result-container' },
                this._renderListSummary(),
                this._renderActionBar(),
                this._renderResults()
            ),
            this.props.hasBackToTop && _react2.default.createElement(this.props.backToTopComponent, null)
        );
    }
};
// Actions

// Mixins
// Dependencies

var _builder = (0, _builder3.default)(AdvancedSearch),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQWR2YW5jZWRTZWFyY2giLCJtaXhpbnMiLCJDYXJ0cmlkZ2VCZWhhdmlvdXIiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImFjdGlvbiIsInVuZGVmaW5lZCIsImJhY2tUb1RvcENvbXBvbmVudCIsIkJhY2tUb1RvcENvbXBvbmVudCIsImNhbGxTZWFyY2hPbk1vdW50IiwiZmFjZXRDb25maWciLCJncm91cENvbXBvbmVudCIsIkRlZmF1bHRHcm91cENvbXBvbmVudCIsImhhc0JhY2tUb1RvcCIsImlzU2VsZWN0aW9uIiwibGluZU9wZXJhdGlvbkxpc3QiLCJsaW5lQ29tcG9uZW50TWFwcGVyIiwib3JkZXJhYmxlQ29sdW1uTGlzdCIsIm9uTGluZUNsaWNrIiwib3BlbmVkRmFjZXRMaXN0Iiwic2NvcGVzQ29uZmlnIiwic2Nyb2xsUGFyZW50U2VsZWN0b3IiLCJzZXJ2aWNlIiwic3RvcmUiLCJhZHZhbmNlZFNlYXJjaFN0b3JlIiwicHJvcFR5cGVzIiwiZXhwb3J0QWN0aW9uIiwiZ2V0SW5pdGlhbFN0YXRlIiwiX2dldE5ld1N0YXRlRnJvbVN0b3JlIiwiY29tcG9uZW50V2lsbE1vdW50IiwicHJvcHMiLCJvbiIsIl9vblN0b3JlQ2hhbmdlV2l0aFNlYXJjaCIsImZvckVhY2giLCJub2RlIiwiX29uU3RvcmVDaGFuZ2VXaXRob3V0U2VhcmNoIiwiYWRkU2NvcGVDaGFuZ2VMaXN0ZW5lciIsIl9vblNjb3BlQ2hhbmdlIiwiX2FjdGlvbiIsImlkZW50aWZpZXIiLCJnZXRTZWFyY2hPcHRpb25zIiwiZ2V0VmFsdWUiLCJjYWxsIiwic2VhcmNoIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZVNjb3BlQ2hhbmdlTGlzdGVuZXIiLCJnZXRTZWxlY3RlZEl0ZW1zIiwicmVzdWx0cyIsInJlZnMiLCJyZXN1bHRMaXN0Iiwic2VsZWN0ZWRJdGVtcyIsInJlZiIsImNvbmNhdCIsInN1YlNlbGVjdGVkSXRlbXMiLCJzdWJSZWYiLCJzZXRTdGF0ZSIsImRpc3BhdGNoZXIiLCJoYW5kbGVWaWV3QWN0aW9uIiwiZGF0YSIsInNvcnRCeSIsInNvcnRBc2MiLCJ0eXBlIiwicXVlcnkiLCJnZXRRdWVyeSIsInNjb3BlIiwiZ2V0U2NvcGUiLCJzZWxlY3RlZEZhY2V0cyIsImdldFNlbGVjdGVkRmFjZXRzIiwiZ3JvdXBpbmdLZXkiLCJnZXRHcm91cGluZ0tleSIsImdldFNvcnRCeSIsImdldFNvcnRBc2MiLCJmYWNldHMiLCJnZXRGYWNldHMiLCJnZXRSZXN1bHRzIiwidG90YWxDb3VudCIsImdldFRvdGFsQ291bnQiLCJzZWxlY3Rpb25TdGF0dXMiLCJoYXNHcm91cGluZyIsIl9leHBvcnRIYW5kbGVyIiwiX3JlbmRlckZhY2V0Qm94Iiwic3RhdGUiLCJfcmVuZGVyTGlzdFN1bW1hcnkiLCJfcmVuZGVyQWN0aW9uQmFyIiwiZ3JvdXBhYmxlQ29sdW1uTGlzdCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJmYWNldEtleSIsImxlbmd0aCIsInNlbGVjdGlvbkFjdGlvbiIsInN0YXR1cyIsIl9yZW5kZXJSZXN1bHRzIiwiX2xpbmVDbGljayIsIl9zZWxlY3RJdGVtIiwic2VsZWN0ZWRJdGVtc0NvdW50IiwidmlzaWJsZUl0ZW1zQ291bnQiLCJyZWZDb21wb25lbnQiLCJyZWZLZXkiLCJpbmRleE9mIiwibGlzdCIsInJlc3VsdHNEaXNwbGF5ZWRDb3VudCIsIml0ZW0iLCJyZW5kZXIiLCJmYWNldENvbGxhcHNlZENsYXNzTmFtZSIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQTs7Ozs7QUFS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QXVURjtBQUNiLFlBQUksS0FBSzFFLEtBQUwsQ0FBV1osV0FBZixFQUE0QjtBQUN4QixpQkFBS1ksS0FBTCxDQUFXWixXQUFYLENBQXVCc0YsSUFBdkI7QUFDSDtBQUNKLEtBM1RrQjs7QUE0VG5COzs7O0FBSUFDLFVBaFVtQixvQkFnVVY7QUFDTDtBQUNBLFlBQU1DLDBCQUEwQnBCLE9BQU9DLElBQVAsQ0FBWSxLQUFLekQsS0FBTCxDQUFXWCxlQUF2QixFQUF3Q3dFLE1BQXhDLEtBQW1ELENBQW5ELEdBQXVELGlCQUF2RCxHQUEyRSxFQUEzRztBQUNBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxpQkFBZixFQUFpQyxjQUFXLGlCQUE1QztBQUNJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLGlCQUFoQixFQUFrQyxXQUFXZSx1QkFBN0M7QUFDSyxxQkFBS3pCLGVBQUw7QUFETCxhQURKO0FBSUk7QUFBQTtBQUFBLGtCQUFLLGNBQVcsa0JBQWhCO0FBQ0sscUJBQUtFLGtCQUFMLEVBREw7QUFFSyxxQkFBS0MsZ0JBQUwsRUFGTDtBQUdLLHFCQUFLVSxjQUFMO0FBSEwsYUFKSjtBQVNLLGlCQUFLaEUsS0FBTCxDQUFXakIsWUFBWCxJQUEyQixtQ0FBTSxLQUFOLENBQVksa0JBQVo7QUFUaEMsU0FESjtBQWFIO0FBaFZrQixDQUF2QjtBQVBBOztBQUhBO0FBakJBOztlQThXNkIsdUJBQVFiLGNBQVIsQztJQUFyQjJHLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tICdzYWdlc3MtY29yZS9kaXNwYXRjaGVyJztcbmltcG9ydCBjYW1lbCBmcm9tICdsb2Rhc2gvc3RyaW5nL2NhbWVsQ2FzZSc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICdsb2Rhc2gvc3RyaW5nL2NhcGl0YWxpemUnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2xhbmcvaXNGdW5jdGlvbic7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9jb2xsZWN0aW9uL3JlZHVjZSc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBjb21wb25lbnQgYXMgRmFjZXRCb3ggfSBmcm9tICcuL2ZhY2V0LWJveCc7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgTGlzdEFjdGlvbkJhciB9IGZyb20gJy4vYWN0aW9uLWJhcic7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgTGlzdFN1bW1hcnkgfSBmcm9tICcuL2xpc3Qtc3VtbWFyeSc7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgUmVzdWx0cyB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQvcmVzdWx0cyc7XG5pbXBvcnQgQmFja1RvVG9wQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uLWJhY2stdG8tdG9wJztcbmltcG9ydCBEZWZhdWx0R3JvdXBDb21wb25lbnQgZnJvbSAnLi9ncm91cCc7XG4vLyBTdG9yZVxuaW1wb3J0IHsgYWR2YW5jZWRTZWFyY2hTdG9yZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL3NlYXJjaC9idWlsdC1pbi1zdG9yZSc7XG4vLyBNaXhpbnNcbmltcG9ydCBDYXJ0cmlkZ2VCZWhhdmlvdXIgZnJvbSAnLi4vLi4vbWl4aW4vY2FydHJpZGdlLWJlaGF2aW91cic7XG5pbXBvcnQgdHlwZSBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuLy8gQWN0aW9uc1xuaW1wb3J0IGFjdGlvbkJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvc2VhcmNoL2FjdGlvbi1idWlsZGVyJztcblxuLyoqXG4qIFBhZ2UgbWl4aW4gb2YgdGhlIGFkdmFuY2VkIHNlYXJjaC5cbiogQHR5cGUge09iamVjdH1cbiovXG5jb25zdCBBZHZhbmNlZFNlYXJjaCA9IHtcbiAgICAvKipcbiAgICAqIENvbXBvbmVudCdzIG1peGluc1xuICAgICogQHR5cGUge0FycmF5fVxuICAgICovXG4gICAgbWl4aW5zOiBbQ2FydHJpZGdlQmVoYXZpb3VyXSxcbiAgICAvKipcbiAgICAqIERpc3BsYXkgbmFtZS5cbiAgICAqL1xuICAgIGRpc3BsYXlOYW1lOiAnYWR2YW5jZWQtc2VhcmNoJyxcbiAgICAvKipcbiAgICAqIEdldCB0aGUgZGVmYXVsdCBwcm9wc1xuICAgICogQHJldHVybiB7b2JqZWN0fSB0aGUgZGVmYXVsdCBwcm9wc1xuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBiYWNrVG9Ub3BDb21wb25lbnQ6IEJhY2tUb1RvcENvbXBvbmVudCxcbiAgICAgICAgICAgIGNhbGxTZWFyY2hPbk1vdW50OiB0cnVlLFxuICAgICAgICAgICAgZmFjZXRDb25maWc6IHt9LFxuICAgICAgICAgICAgZ3JvdXBDb21wb25lbnQ6IERlZmF1bHRHcm91cENvbXBvbmVudCxcbiAgICAgICAgICAgIGhhc0JhY2tUb1RvcDogdHJ1ZSxcbiAgICAgICAgICAgIGlzU2VsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgbGluZU9wZXJhdGlvbkxpc3Q6IFtdLFxuICAgICAgICAgICAgbGluZUNvbXBvbmVudE1hcHBlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb3JkZXJhYmxlQ29sdW1uTGlzdDogW10sXG4gICAgICAgICAgICBvbkxpbmVDbGljazogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb3BlbmVkRmFjZXRMaXN0OiB7fSxcbiAgICAgICAgICAgIHNjb3Blc0NvbmZpZzoge30sXG4gICAgICAgICAgICBzY3JvbGxQYXJlbnRTZWxlY3RvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2VydmljZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3RvcmU6IGFkdmFuY2VkU2VhcmNoU3RvcmVcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUHJvcHMgdmFsaWRhdGlvblxuICAgICogQHR5cGUge09iamVjdH1cbiAgICAqL1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBhY3Rpb246IHR5cGUoJ29iamVjdCcpLFxuICAgICAgICBiYWNrVG9Ub3BDb21wb25lbnQ6IHR5cGUoJ2Z1bmMnKSxcbiAgICAgICAgY2FsbFNlYXJjaE9uTW91bnQ6IHR5cGUoJ2Jvb2wnKSxcbiAgICAgICAgZXhwb3J0QWN0aW9uOiB0eXBlKCdmdW5jJyksXG4gICAgICAgIGZhY2V0Q29uZmlnOiB0eXBlKCdvYmplY3QnKSxcbiAgICAgICAgZ3JvdXBDb21wb25lbnQ6IHR5cGUoJ2Z1bmMnKSxcbiAgICAgICAgaGFzQmFja1RvVG9wOiB0eXBlKCdib29sJyksXG4gICAgICAgIGlzU2VsZWN0aW9uOiB0eXBlKCdib29sJyksXG4gICAgICAgIGxpbmVDb21wb25lbnRNYXBwZXI6IHR5cGUoJ2Z1bmMnKSxcbiAgICAgICAgbGluZU9wZXJhdGlvbkxpc3Q6IHR5cGUoWydhcnJheScsICdvYmplY3QnXSksXG4gICAgICAgIG9uTGluZUNsaWNrOiB0eXBlKCdmdW5jJyksXG4gICAgICAgIG9yZGVyYWJsZUNvbHVtbkxpc3Q6IHR5cGUoWydhcnJheScsICdvYmplY3QnXSksXG4gICAgICAgIG9wZW5lZEZhY2V0TGlzdDogdHlwZSgnb2JqZWN0JyksXG4gICAgICAgIHNjb3Blc0NvbmZpZzogdHlwZSgnb2JqZWN0JyksXG4gICAgICAgIHNjcm9sbFBhcmVudFNlbGVjdG9yOiB0eXBlKCdzdHJpbmcnKSxcbiAgICAgICAgc2VydmljZTogdHlwZSgnb2JqZWN0JyksXG4gICAgICAgIHN0b3JlOiB0eXBlKCdvYmplY3QnKVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgaW5pdGlhbCBzdGF0ZVxuICAgICogQHJldHVybiB7T2JqZWN0fSBpbml0aWFsIHN0YXRlXG4gICAgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fZ2V0TmV3U3RhdGVGcm9tU3RvcmUoKSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlZ2lzdGVyIHRoZSBzdG9yZSBsaXN0ZW5lcnNcbiAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSwgY2FsbFNlYXJjaE9uTW91bnQsIHNlcnZpY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIC8vbGlzdGVuIHRvIHNlYXJjaCBldmVudFxuICAgICAgICBzdG9yZS5vbignYWR2YW5jZWQtc2VhcmNoLWNyaXRlcmlhczpjaGFuZ2UnLCB0aGlzLl9vblN0b3JlQ2hhbmdlV2l0aFNlYXJjaCk7XG5cbiAgICAgICAgLy9saXN0ZW4gdG8gZGF0YSBjaGFuZ2VzXG4gICAgICAgIFsnZmFjZXRzJywgJ3Jlc3VsdHMnLCAndG90YWwtY291bnQnXS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBzdG9yZVtgYWRkJHtjYXBpdGFsaXplKGNhbWVsKG5vZGUpKX1DaGFuZ2VMaXN0ZW5lcmBdKHRoaXMuX29uU3RvcmVDaGFuZ2VXaXRob3V0U2VhcmNoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGlzdGVuIHRvIHNjb3BlIGNoYW5nZVxuICAgICAgICBzdG9yZS5hZGRTY29wZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uU2NvcGVDaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMuX2FjdGlvbiA9IHRoaXMucHJvcHMuYWN0aW9uIHx8IGFjdGlvbkJ1aWxkZXIoe1xuICAgICAgICAgICAgc2VydmljZTogc2VydmljZSxcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IHN0b3JlLmlkZW50aWZpZXIsXG4gICAgICAgICAgICBnZXRTZWFyY2hPcHRpb25zOiAoKSA9PiB7IHJldHVybiBzdG9yZS5nZXRWYWx1ZS5jYWxsKHN0b3JlKTsgfSAvLyBCaW5kaW5nIHRoZSBzdG9yZSBpbiB0aGUgZnVuY3Rpb24gY2FsbFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2FsbFNlYXJjaE9uTW91bnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbi5zZWFyY2goKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBVbi1yZWdpc3RlciB0aGUgc3RvcmUgbGlzdGVuZXJzXG4gICAgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyc1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnJlbW92ZUxpc3RlbmVyKCdhZHZhbmNlZC1zZWFyY2gtY3JpdGVyaWFzOmNoYW5nZScsIHRoaXMuX29uU3RvcmVDaGFuZ2VXaXRoU2VhcmNoKTtcbiAgICAgICAgWydmYWNldHMnLCAncmVzdWx0cycsICd0b3RhbC1jb3VudCddLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmVbYHJlbW92ZSR7Y2FwaXRhbGl6ZShjYW1lbChub2RlKSl9Q2hhbmdlTGlzdGVuZXJgXSh0aGlzLl9vblN0b3JlQ2hhbmdlV2l0aG91dFNlYXJjaCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnJlbW92ZVNjb3BlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TY29wZUNoYW5nZSk7XG4gICAgfSxcblxuICAgIGdldFNlbGVjdGVkSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLnJlZnMucmVzdWx0TGlzdDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHJlZHVjZShyZXN1bHRzLnJlZnMsIChzZWxlY3RlZEl0ZW1zLCByZWYpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHJlZi5nZXRTZWxlY3RlZEl0ZW1zKSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMgPSBzZWxlY3RlZEl0ZW1zLmNvbmNhdChyZWYuZ2V0U2VsZWN0ZWRJdGVtcygpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVmLnJlZnMpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRJdGVtcy5jb25jYXQocmVkdWNlKHJlZi5yZWZzLCAoc3ViU2VsZWN0ZWRJdGVtcywgc3ViUmVmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHN1YlJlZi5nZXRTZWxlY3RlZEl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViU2VsZWN0ZWRJdGVtcyA9IHN1YlNlbGVjdGVkSXRlbXMuY29uY2F0KHN1YlJlZi5nZXRTZWxlY3RlZEl0ZW1zKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJTZWxlY3RlZEl0ZW1zO1xuICAgICAgICAgICAgICAgIH0sIFtdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtcztcbiAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJdGVtcztcbiAgICB9LFxuICAgIC8qKlxuICAgICogU3RvcmUgY2hhbmdlZCwgdXBkYXRlIHRoZSBzdGF0ZSwgdHJpZ2dlciBhIHNlYXJjaCBhZnRlciB1cGRhdGVcbiAgICAqL1xuICAgIF9vblN0b3JlQ2hhbmdlV2l0aFNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXROZXdTdGF0ZUZyb21TdG9yZSgpLCB0aGlzLl9hY3Rpb24uc2VhcmNoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogU3RvcmUgY2hhbmdlZCwgdXBkYXRlIHRoZSBzdGF0ZSwgZG8gbm90IHRyaWdnZXIgYSBzZWFyY2ggYWZ0ZXIgdXBkYXRlXG4gICAgKi9cbiAgICBfb25TdG9yZUNoYW5nZVdpdGhvdXRTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0TmV3U3RhdGVGcm9tU3RvcmUoKSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFNjb3BlIGNoYW5nZWQsIG5lZWQgdG8gcmVtb3ZlIGFsbCBleGlzdGluZyBzb3J0LlxuICAgICovXG4gICAgX29uU2NvcGVDaGFuZ2U6IGZ1bmN0aW9uIF9vblNjb3BlQ2hhbmdlKCkge1xuICAgICAgICBkaXNwYXRjaGVyLmhhbmRsZVZpZXdBY3Rpb24oe1xuICAgICAgICAgICAgZGF0YTogeyBzb3J0Qnk6IG51bGwsIHNvcnRBc2M6IG51bGwgfSxcbiAgICAgICAgICAgIHR5cGU6ICd1cGRhdGUnLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogYWR2YW5jZWRTZWFyY2hTdG9yZS5pZGVudGlmaWVyXG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogQ29tcHV0ZSBhIHN0YXRlIG9iamVjdCBmcm9tIHRoZSBzdG9yZSB2YWx1ZXMuXG4gICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAqL1xuICAgIF9nZXROZXdTdGF0ZUZyb21TdG9yZSgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgcXVlcnkgPSBzdG9yZS5nZXRRdWVyeSgpO1xuICAgICAgICBjb25zdCBzY29wZSA9IHN0b3JlLmdldFNjb3BlKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmFjZXRzID0gc3RvcmUuZ2V0U2VsZWN0ZWRGYWNldHMoKSB8fCB7fTtcbiAgICAgICAgY29uc3QgZ3JvdXBpbmdLZXkgPSBzdG9yZS5nZXRHcm91cGluZ0tleSgpO1xuICAgICAgICBjb25zdCBzb3J0QnkgPSBzdG9yZS5nZXRTb3J0QnkoKTtcbiAgICAgICAgY29uc3Qgc29ydEFzYyA9IHN0b3JlLmdldFNvcnRBc2MoKTtcbiAgICAgICAgY29uc3QgZmFjZXRzID0gc3RvcmUuZ2V0RmFjZXRzKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBzdG9yZS5nZXRSZXN1bHRzKCk7XG4gICAgICAgIGNvbnN0IHRvdGFsQ291bnQgPSBzdG9yZS5nZXRUb3RhbENvdW50KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvblN0YXR1cyA9ICdub25lJztcbiAgICAgICAgY29uc3QgaGFzR3JvdXBpbmcgPSBzY29wZSAhPT0gdW5kZWZpbmVkICYmIHNjb3BlICE9PSAnQUxMJztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZhY2V0cyxcbiAgICAgICAgICAgIGdyb3VwaW5nS2V5LFxuICAgICAgICAgICAgaGFzR3JvdXBpbmcsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHNlbGVjdGlvblN0YXR1cyxcbiAgICAgICAgICAgIHNjb3BlLFxuICAgICAgICAgICAgc2VsZWN0ZWRGYWNldHMsXG4gICAgICAgICAgICBzb3J0QnksXG4gICAgICAgICAgICBzb3J0QXNjLFxuICAgICAgICAgICAgcmVzdWx0cyxcbiAgICAgICAgICAgIHRvdGFsQ291bnRcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogRXhwb3J0IGFjdGlvbiBoYW5kbGVyLlxuICAgICovXG4gICAgX2V4cG9ydEhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZXhwb3J0QWN0aW9uKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgZmFjZXQgYm94LlxuICAgICogQHJldHVybnMge0hUTUx9IHRoZSByZW5kZXJlZCBjb21wb25lbnRcbiAgICAqL1xuICAgIF9yZW5kZXJGYWNldEJveCgpIHtcbiAgICAgICAgY29uc3QgeyBmYWNldHMsIHNlbGVjdGVkRmFjZXRzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IGZhY2V0Q29uZmlnLCBzY29wZXNDb25maWcsIG9wZW5lZEZhY2V0TGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGYWNldEJveFxuICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5fYWN0aW9ufVxuICAgICAgICAgICAgICAgIGZhY2V0Q29uZmlnPXtmYWNldENvbmZpZ31cbiAgICAgICAgICAgICAgICBvcGVuZWRGYWNldExpc3Q9e29wZW5lZEZhY2V0TGlzdH1cbiAgICAgICAgICAgICAgICBmYWNldHM9e2ZhY2V0c31cbiAgICAgICAgICAgICAgICByZWY9J2ZhY2V0Qm94J1xuICAgICAgICAgICAgICAgIHNjb3Blc0NvbmZpZz17c2NvcGVzQ29uZmlnfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmFjZXRzPXtzZWxlY3RlZEZhY2V0c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgbGlzdCBzdW1tYXJ5IGNvbXBvbmVudC5cbiAgICAqIEByZXR1cm5zIHtIVE1MfSB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG4gICAgKi9cbiAgICBfcmVuZGVyTGlzdFN1bW1hcnkoKSB7XG4gICAgICAgIGNvbnN0IHsgcXVlcnksIHNjb3BlLCB0b3RhbENvdW50IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3RTdW1tYXJ5XG4gICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLl9hY3Rpb259XG4gICAgICAgICAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICAgICAgICAgIHJlZj0nc3VtbWFyeSdcbiAgICAgICAgICAgICAgICBzY29wZT17c2NvcGV9XG4gICAgICAgICAgICAgICAgdG90YWxDb3VudD17dG90YWxDb3VudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgYWN0aW9uIGJhci5cbiAgICAqIEByZXR1cm5zIHtIVE1MfSB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG4gICAgKi9cbiAgICBfcmVuZGVyQWN0aW9uQmFyKCkge1xuICAgICAgICBjb25zdCB7IGZhY2V0cywgZ3JvdXBpbmdLZXksIGhhc0dyb3VwaW5nLCBzZWxlY3RlZEZhY2V0cywgc2VsZWN0aW9uU3RhdHVzLCBzb3J0QnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgaXNTZWxlY3Rpb24sIGxpbmVPcGVyYXRpb25MaXN0LCBvcmRlcmFibGVDb2x1bW5MaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBncm91cGFibGVDb2x1bW5MaXN0ID0gZmFjZXRzID8gT2JqZWN0LmtleXMoZmFjZXRzKS5yZWR1Y2UoKHJlc3VsdCwgZmFjZXRLZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhmYWNldHNbZmFjZXRLZXldKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ZhY2V0S2V5XSA9IGZhY2V0S2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSwge30pIDoge307XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkFjdGlvbiA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3Rpb25TdGF0dXM6IHN0YXR1cyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaXN0QWN0aW9uQmFyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLl9hY3Rpb259XG4gICAgICAgICAgICAgICAgZ3JvdXBTZWxlY3RlZEtleT17Z3JvdXBpbmdLZXl9XG4gICAgICAgICAgICAgICAgZ3JvdXBhYmxlQ29sdW1uTGlzdD17Z3JvdXBhYmxlQ29sdW1uTGlzdH1cbiAgICAgICAgICAgICAgICBoYXNHcm91cGluZz17aGFzR3JvdXBpbmd9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3Rpb249e2lzU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbkxpc3Q9e2xpbmVPcGVyYXRpb25MaXN0fVxuICAgICAgICAgICAgICAgIG9yZGVyU2VsZWN0ZWQ9e3NvcnRCeX1cbiAgICAgICAgICAgICAgICBvcmRlcmFibGVDb2x1bW5MaXN0PXtvcmRlcmFibGVDb2x1bW5MaXN0fVxuICAgICAgICAgICAgICAgIHJlZj0nYWN0aW9uQmFyJ1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmFjZXRzPXtzZWxlY3RlZEZhY2V0c31cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25BY3Rpb249e3NlbGVjdGlvbkFjdGlvbn1cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25TdGF0dXM9e3NlbGVjdGlvblN0YXR1c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgcmVzdWx0cyBjb21wb25lbnRcbiAgICAqIEByZXR1cm4ge0hUTUx9IHRoZSByZW5kZXJlZCBjb21wb25lbnRcbiAgICAqL1xuICAgIF9yZW5kZXJSZXN1bHRzKCkge1xuICAgICAgICBjb25zdCB7IGdyb3VwQ29tcG9uZW50LCBpc1NlbGVjdGlvbiwgbGluZUNvbXBvbmVudE1hcHBlciwgbGluZU9wZXJhdGlvbkxpc3QsIHNjcm9sbFBhcmVudFNlbGVjdG9yLCBzdG9yZSwgc2NvcGVzQ29uZmlnIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGdyb3VwaW5nS2V5LCBmYWNldHMsIHJlc3VsdHMsIHNlbGVjdGlvblN0YXR1cywgdG90YWxDb3VudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZXN1bHRzXG4gICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLl9hY3Rpb259XG4gICAgICAgICAgICAgICAgZ3JvdXBDb21wb25lbnQ9e2dyb3VwQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgIGdyb3VwaW5nS2V5PXtncm91cGluZ0tleX1cbiAgICAgICAgICAgICAgICBpc1NlbGVjdGlvbj17aXNTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgbGluZUNsaWNrSGFuZGxlcj17dGhpcy5fbGluZUNsaWNrfVxuICAgICAgICAgICAgICAgIGxpbmVDb21wb25lbnRNYXBwZXI9e2xpbmVDb21wb25lbnRNYXBwZXJ9XG4gICAgICAgICAgICAgICAgbGluZU9wZXJhdGlvbkxpc3Q9e2xpbmVPcGVyYXRpb25MaXN0fVxuICAgICAgICAgICAgICAgIGxpbmVTZWxlY3Rpb25IYW5kbGVyPXt0aGlzLl9zZWxlY3RJdGVtfVxuICAgICAgICAgICAgICAgIHJlZj0ncmVzdWx0TGlzdCdcbiAgICAgICAgICAgICAgICByZW5kZXJTaW5nbGVHcm91cERlY29yYXRpb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHJlc3VsdHNGYWNldHM9e2ZhY2V0c31cbiAgICAgICAgICAgICAgICByZXN1bHRzTWFwPXtyZXN1bHRzfVxuICAgICAgICAgICAgICAgIHNjb3Blc0NvbmZpZz17c2NvcGVzQ29uZmlnfVxuICAgICAgICAgICAgICAgIHNjcm9sbFBhcmVudFNlbGVjdG9yPXtzY3JvbGxQYXJlbnRTZWxlY3Rvcn1cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25TdGF0dXM9e3NlbGVjdGlvblN0YXR1c31cbiAgICAgICAgICAgICAgICBzdG9yZT17c3RvcmV9XG4gICAgICAgICAgICAgICAgdG90YWxDb3VudD17dG90YWxDb3VudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIExpbmUgc2VsZWN0aW9uIGhhbmRsZXJcbiAgICAqL1xuICAgIF9zZWxlY3RJdGVtKCkge1xuICAgICAgICAvLyBjb3VudCB0aGUgc2VsZWN0ZWQgaXRlbXNcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtc0NvdW50ID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW1zKCkubGVuZ3RoO1xuICAgICAgICAvLyBDb3VudCB0aGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICBjb25zdCB2aXNpYmxlSXRlbXNDb3VudCA9IHJlZHVjZSh0aGlzLnJlZnMucmVzdWx0TGlzdC5yZWZzLCAodmlzaWJsZUl0ZW1zQ291bnQsIHJlZkNvbXBvbmVudCwgcmVmS2V5KSA9PiB7XG4gICAgICAgICAgICAvLyBSZXN1bHRzIG1pZ2h0IGJlIGEgbGlzdCAobm9uLWdyb3VwZWQgc2VhcmNoKSBvciBncm91cHMgKGdyb3VwZWQgc2VhcmNoKVxuICAgICAgICAgICAgaWYgKHJlZktleS5pbmRleE9mKCdsaXN0LScpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmlzaWJsZUl0ZW1zQ291bnQgKz0gcmVmQ29tcG9uZW50LnByb3BzLmRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlZktleS5pbmRleE9mKCdncm91cC0nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChyZWZDb21wb25lbnQucHJvcHMubGlzdC5sZW5ndGggPCByZWZDb21wb25lbnQuc3RhdGUucmVzdWx0c0Rpc3BsYXllZENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVJdGVtc0NvdW50ICs9IHJlZkNvbXBvbmVudC5wcm9wcy5saXN0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlSXRlbXNDb3VudCArPSByZWZDb21wb25lbnQuc3RhdGUucmVzdWx0c0Rpc3BsYXllZENvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2aXNpYmxlSXRlbXNDb3VudDtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIHRoZSBzZWxlY3Rpb24gc3RhdHVzIGlzIHBhcnRpYWxcbiAgICAgICAgbGV0IHNlbGVjdGlvblN0YXR1cyA9ICdwYXJ0aWFsJztcbiAgICAgICAgLy8gSWYgbm8gaXRlbSBpcyBzZWxlY3RlZCwgdGhlbiB0aGUgc2VsZWN0aW9uU3RhdHVzIGlzIG5vbmVcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXNDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgc2VsZWN0aW9uU3RhdHVzID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSXRlbXNDb3VudCA9PT0gdmlzaWJsZUl0ZW1zQ291bnQpIHtcbiAgICAgICAgICAgIC8vIFRoZXJlIGFyZSBhcyBtYW55IHNlbGVjdGVkIGl0ZW1zIGFzIHZpc2libGUgaXRlbXMsIHNvIHRoZSBzZWxlY3Rpb25TdGF0dXMgaXMgYWxsXG4gICAgICAgICAgICBzZWxlY3Rpb25TdGF0dXMgPSAnc2VsZWN0ZWQnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3Rpb25TdGF0dXMgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIEFjdGlvbiBvbiBsaW5lIGNsaWNrLlxuICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gIHRoZSBpdGVtIGNsaWNrZWRcbiAgICAqL1xuICAgIF9saW5lQ2xpY2soaXRlbSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkxpbmVDbGljaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkxpbmVDbGljayhpdGVtKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudFxuICAgICogQHJldHVybiB7SFRNTH0gdGhlIHJlbmRlcmVkIGNvbXBvbmVudFxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyB0cnVlIGlmIGEgZmFjZXQgaXMgY29sbGFwc2VkXG4gICAgICAgIGNvbnN0IGZhY2V0Q29sbGFwc2VkQ2xhc3NOYW1lID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5vcGVuZWRGYWNldExpc3QpLmxlbmd0aCA9PT0gMCA/ICdmYWNldC1jb2xsYXBzZWQnIDogJyc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWR2YW5jZWQtc2VhcmNoJyBkYXRhLWZvY3VzPSdhZHZhbmNlZC1zZWFyY2gnPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nZmFjZXQtY29udGFpbmVyJyBjbGFzc05hbWU9e2ZhY2V0Q29sbGFwc2VkQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckZhY2V0Qm94KCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdyZXN1bHQtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckxpc3RTdW1tYXJ5KCl9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJBY3Rpb25CYXIoKX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlclJlc3VsdHMoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5oYXNCYWNrVG9Ub3AgJiYgPHRoaXMucHJvcHMuYmFja1RvVG9wQ29tcG9uZW50IC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKEFkdmFuY2VkU2VhcmNoKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19