'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('sagess-core/translation');

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _mapValues = require('lodash/object/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

var _omit = require('lodash/object/omit');

var _omit2 = _interopRequireDefault(_omit);

var _clone = require('lodash/lang/clone');

var _clone2 = _interopRequireDefault(_clone);

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _map = require('lodash/collection/map');

var _map2 = _interopRequireDefault(_map);

var _groupBy = require('lodash/collection/groupBy');

var _groupBy2 = _interopRequireDefault(_groupBy);

var _defaultEmptyComponent = require('./default-empty-component');

var _defaultEmptyComponent2 = _interopRequireDefault(_defaultEmptyComponent);

var _list2 = require('../../../../list/selection/list');

var _groupWrapper = require('./group-wrapper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // Dependencies


// Components


/**
* Results component, used to render the results, grouped or ungrouped
* @type {Object}
*/
var Results = {
    displayName: 'Results',
    /**
    * By default, an empty component is picked.
    * @return {Object} the default props
    */
    getDefaultProps: function getDefaultProps() {
        return {
            action: undefined,
            emptyComponent: _defaultEmptyComponent2.default,
            groupComponent: undefined,
            groupingKey: undefined,
            idField: undefined,
            initialRowsCount: 3,
            isSelection: undefined,
            lineClickHandler: undefined,
            lineComponentMapper: undefined,
            lineOperationList: undefined,
            lineSelectionHandler: undefined,
            scopesConfig: undefined,
            scopeFacetKey: 'FCT_SCOPE',
            scrollParentSelector: undefined,
            selectionStatus: undefined,
            renderSingleGroupDecoration: true,
            resultsMap: undefined,
            resultsFacets: undefined,
            selectionResultsMap: undefined,
            showMoreAdditionalRows: 5,
            store: undefined,
            totalCount: undefined
        };
    },

    /**
    * Initial state
    * @return {Object} Initial state
    */
    getInitialState: function getInitialState() {
        return {
            loading: false
        };
    },

    /**
    * Component will receive props
    */
    componentWillReceiveProps: function componentWillReceiveProps() {
        if (this.state.loading) {
            this.setState({
                loading: false
            });
        }
    },


    /**
    * Render a single group of results, using the group component given as a prop.
    * @param  {array} list the results list
    * @param  {string} key  the group key
    * @param  {int} count  the group's results count
    * @param  {bool} isUnique  is this the only rendered group
    * @return {HMTL}      the rendered group
    */
    _renderSingleGroup: function _renderSingleGroup(list, key, count, isUnique) {
        var initialRowsCount = this.props.initialRowsCount;

        if (this.props.renderSingleGroupDecoration && !this.props.groupComponent) {
            console.warn('You are trying to wrap your list in a group without a groupComponent. Please give one or set "renderSingleGroupDecoration" to false.');
        }

        if (isUnique) {
            if (this.props.renderSingleGroupDecoration) {
                return _react2.default.createElement(_groupWrapper.component, {
                    count: count,
                    groupComponent: this.props.groupComponent,
                    groupKey: key,
                    initialRowsCount: initialRowsCount,
                    isUnique: true,
                    list: list,
                    ref: 'group-' + key,
                    renderResultsList: this._renderResultsList,
                    showAllHandler: this._showAllHandler
                });
            } else {
                return this._renderResultsList(list, key, count, true);
            }
        } else {
            return _react2.default.createElement(_groupWrapper.component, {
                count: count,
                groupComponent: this.props.groupComponent,
                groupKey: key,
                initialRowsCount: initialRowsCount,
                key: key,
                list: list,
                ref: 'group-' + key,
                renderResultsList: this._renderResultsList,
                showAllHandler: this._showAllHandler
            });
        }
    },

    /**
    * Render the empty component given as a prop when the result map is empty.
    * @return {HMTL}      the rendered component
    */
    _renderEmptyResults: function _renderEmptyResults() {
        return _react2.default.createElement(this.props.emptyComponent, null);
    },

    /**
    * Render the results list
    * @param  {Array}  list     the results list
    * @param  {string}  key      the group key
    * @param  {integer}  count    the group count
    * @param  {Boolean} isUnique true if this is the only group rendered
    * @return {HTML}          the rendered component
    */
    _renderResultsList: function _renderResultsList(list, key, count, isUnique) {
        var _props = this.props,
            lineComponentMapper = _props.lineComponentMapper,
            idField = _props.idField,
            isSelection = _props.isSelection,
            lineSelectionHandler = _props.lineSelectionHandler,
            lineClickHandler = _props.lineClickHandler,
            lineOperationList = _props.lineOperationList,
            scrollParentSelector = _props.scrollParentSelector,
            selectionStatus = _props.selectionStatus,
            selectionResultsMap = _props.selectionResultsMap,
            otherProps = _objectWithoutProperties(_props, ['lineComponentMapper', 'idField', 'isSelection', 'lineSelectionHandler', 'lineClickHandler', 'lineOperationList', 'scrollParentSelector', 'selectionStatus', 'selectionResultsMap']);

        var selectionData = selectionResultsMap ? selectionResultsMap[key] || [] : [];
        var scope = otherProps.store.getScope();
        var lineKey = scope === undefined || scope === 'ALL' ? key : scope;
        var LineComponent = lineComponentMapper(lineKey, list);
        var hasMoreData = isUnique !== undefined && isUnique && list.length < count;
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_list2.component, Object.assign({
                data: list,
                'data-focus': 'results-list',
                fetchNextPage: this._onScrollReachedBottom,
                hasMoreData: hasMoreData,
                idField: idField,
                isSelection: isSelection,
                LineComponent: LineComponent,
                onLineClick: lineClickHandler,
                onSelection: lineSelectionHandler,
                operationList: lineOperationList,
                parentSelector: scrollParentSelector,
                ref: 'list-' + key,
                selectionData: selectionData,
                selectionStatus: selectionStatus
            }, otherProps)),
            this.state.loading && _react2.default.createElement(
                'div',
                { 'data-focus': 'loading-more-results' },
                (0, _translation.translate)('search.loadingMore')
            )
        );
    },


    /**
    * Construct the show all action
    * @param  {string} key the group key where the show all has been clicked
    */
    _showAllHandler: function _showAllHandler(key) {
        var _props2 = this.props,
            showAllHandler = _props2.showAllHandler,
            resultsFacets = _props2.resultsFacets,
            scopeFacetKey = _props2.scopeFacetKey,
            groupingKey = _props2.groupingKey,
            scopesConfig = _props2.scopesConfig;

        var selectedScope = key;
        if (scopesConfig && key && scopesConfig[key]) {
            selectedScope = scopesConfig[key];
        }
        if (resultsFacets[scopeFacetKey]) {
            this._scopeSelectionHandler(selectedScope);
        } else {
            var facetKey = groupingKey;
            var facetValue = selectedScope;
            this._facetSelectionHandler(facetKey, facetValue);
        }
        // Called if defined (may be used in the quick search to close the popin.)
        if (showAllHandler) {
            showAllHandler();
        }
    },

    /**
    * Construct the show more handler
    * @param  {string} key the group key where the show more has been clicked
    * @return {function}     the show more handler
    */
    _getShowMoreHandler: function _getShowMoreHandler(key) {
        var _this = this;

        return function () {
            var groupsRowsCounts = (0, _clone2.default)(_this.state.groupsRowsCounts);
            groupsRowsCounts[key] = groupsRowsCounts[key] ? groupsRowsCounts[key] + _this.props.showMoreAdditionalRows : _this.props.initialRowsCount;
            _this.setState({ groupsRowsCounts: groupsRowsCounts });
        };
    },


    /**
    * Scope selection handler
    * @param  {string} key the scope key
    */
    _scopeSelectionHandler: function _scopeSelectionHandler(key) {
        this.props.action.updateProperties({
            scope: key
        });
    },

    /**
    * Facet selection handler
    * @param  {string} key the facet key
    * @param  {string} value the facet value
    */
    _facetSelectionHandler: function _facetSelectionHandler(key, value) {
        var selectedFacets = Object.assign({}, this.props.store.getSelectedFacets(), _defineProperty({}, key, {
            key: value,
            data: {
                label: value,
                count: 0
            }
        }));
        this.props.action.updateProperties({
            groupingKey: undefined,
            selectedFacets: selectedFacets
        });
    },

    /**
    * Scroll reached bottom handler
    */
    _onScrollReachedBottom: function _onScrollReachedBottom() {
        var _this2 = this;

        if (!this.state.loading) {
            this.setState({
                loading: true
            }, function () {
                _this2.props.action.search(true);
            });
        }
    },


    /**
    * Get the group counts object
    * @param  {object} resultsMap the results map
    * @return {object}           the counts map
    */
    _getGroupCounts: function _getGroupCounts(resultsMap) {
        resultsMap = resultsMap ? resultsMap : this.props.resultsMap;
        // resultMap can be either an Array or an Object depending of the search being grouped or not.
        if (resultsMap && (0, _isArray2.default)(resultsMap) && 1 === resultsMap.length) {
            //Check if the resultMap contains an entry which is an array.
            var isResultMapEntryAnArray = (0, _isArray2.default)(resultsMap[0]);
            if (isResultMapEntryAnArray) {
                return _defineProperty({}, resultsMap[0][0], {
                    count: this.props.totalCount
                });
            }
            //this case occurs when the server response contains only one group with results.
            return _defineProperty({}, Object.keys(resultsMap[0]), {
                count: this.props.totalCount
            });
        } else if (1 === Object.keys(resultsMap).length) {
            return _defineProperty({}, Object.keys(resultsMap)[0], {
                count: this.props.totalCount
            });
        }

        // here : grouped list
        var resultsFacets = this.props.resultsFacets;

        if (resultsFacets) {
            var _props3 = this.props,
                scopeFacetKey = _props3.scopeFacetKey,
                groupingKey = _props3.groupingKey;

            var key = groupingKey === undefined ? scopeFacetKey : groupingKey;
            var scopeFacet = resultsFacets[key];
            return (0, _mapValues2.default)((0, _groupBy2.default)(scopeFacet, 'label'), function (facetData) {
                return facetData[0].count;
            });
        }
        return 0;
    },


    /**
    * Render the whole component
    * @return {HMTL}      the rendered component
    */
    render: function render() {
        var _this3 = this;

        // If there is no result, render the given empty component
        if (0 === this.props.totalCount) {
            return this._renderEmptyResults();
        }

        var resultsMap = void 0;

        // resultsMap can be an Array or an Object.
        if ((0, _isArray2.default)(this.props.resultsMap)) {
            resultsMap = this.props.resultsMap.filter(function (resultGroup) {
                var propertyGroupName = Object.keys(resultGroup)[0]; //group property name
                var list = resultGroup[propertyGroupName];
                return 0 !== list.length;
            });
        } else {
            resultsMap = (0, _omit2.default)(this.props.resultsMap, function (resultGroup) {
                var propertyGroupName = Object.keys(resultGroup)[0]; //group property name
                var list = resultGroup[propertyGroupName];
                return 0 === list.length;
            });
        }

        // Get the count for each group
        var groupCounts = this._getGroupCounts(resultsMap);
        // Check if there is only one group left

        if ((0, _isArray2.default)(resultsMap) && 1 === resultsMap.length) {
            var key = Object.keys(resultsMap[0])[0];
            var list = resultsMap[0][key];
            var count = groupCounts[key].count;
            return this._renderSingleGroup(list, key, count, true);
        } else if (1 === Object.keys(resultsMap).length) {
            var _key = Object.keys(resultsMap)[0];
            var _list = resultsMap[_key];
            var _count = groupCounts[_key].count;
            return this._renderSingleGroup(_list, _key, _count, true);
        } else {
            return _react2.default.createElement(
                'div',
                { 'data-focus': 'search-results' },
                (0, _map2.default)(resultsMap, function (resultGroup) {
                    var key = Object.keys(resultGroup)[0]; //group property name
                    var list = resultGroup[key];
                    var count = groupCounts[key];
                    return _this3._renderSingleGroup(list, key, count);
                })
            );
        }
    }
};

var _builder = (0, _builder3.default)(Results),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiUmVzdWx0cyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiYWN0aW9uIiwidW5kZWZpbmVkIiwiZW1wdHlDb21wb25lbnQiLCJEZWZhdWx0RW1wdHkiLCJncm91cENvbXBvbmVudCIsImdyb3VwaW5nS2V5IiwiaWRGaWVsZCIsImluaXRpYWxSb3dzQ291bnQiLCJpc1NlbGVjdGlvbiIsImxpbmVDbGlja0hhbmRsZXIiLCJsaW5lQ29tcG9uZW50TWFwcGVyIiwibGluZU9wZXJhdGlvbkxpc3QiLCJsaW5lU2VsZWN0aW9uSGFuZGxlciIsInNjb3Blc0NvbmZpZyIsInNjb3BlRmFjZXRLZXkiLCJzY3JvbGxQYXJlbnRTZWxlY3RvciIsInNlbGVjdGlvblN0YXR1cyIsInJlbmRlclNpbmdsZUdyb3VwRGVjb3JhdGlvbiIsInJlc3VsdHNNYXAiLCJyZXN1bHRzRmFjZXRzIiwic2VsZWN0aW9uUmVzdWx0c01hcCIsInNob3dNb3JlQWRkaXRpb25hbFJvd3MiLCJzdG9yZSIsInRvdGFsQ291bnQiLCJnZXRJbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJfcmVuZGVyU2luZ2xlR3JvdXAiLCJsaXN0Iiwia2V5IiwiY291bnQiLCJpc1VuaXF1ZSIsInByb3BzIiwiY29uc29sZSIsIndhcm4iLCJfcmVuZGVyUmVzdWx0c0xpc3QiLCJfc2hvd0FsbEhhbmRsZXIiLCJfcmVuZGVyRW1wdHlSZXN1bHRzIiwib3RoZXJQcm9wcyIsInNlbGVjdGlvbkRhdGEiLCJzY29wZSIsImdldFNjb3BlIiwibGluZUtleSIsIkxpbmVDb21wb25lbnQiLCJoYXNNb3JlRGF0YSIsImxlbmd0aCIsIl9vblNjcm9sbFJlYWNoZWRCb3R0b20iLCJzaG93QWxsSGFuZGxlciIsInNlbGVjdGVkU2NvcGUiLCJfc2NvcGVTZWxlY3Rpb25IYW5kbGVyIiwiZmFjZXRLZXkiLCJmYWNldFZhbHVlIiwiX2ZhY2V0U2VsZWN0aW9uSGFuZGxlciIsIl9nZXRTaG93TW9yZUhhbmRsZXIiLCJncm91cHNSb3dzQ291bnRzIiwidXBkYXRlUHJvcGVydGllcyIsInZhbHVlIiwic2VsZWN0ZWRGYWNldHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRTZWxlY3RlZEZhY2V0cyIsImRhdGEiLCJsYWJlbCIsInNlYXJjaCIsIl9nZXRHcm91cENvdW50cyIsImlzUmVzdWx0TWFwRW50cnlBbkFycmF5Iiwia2V5cyIsInNjb3BlRmFjZXQiLCJmYWNldERhdGEiLCJyZW5kZXIiLCJmaWx0ZXIiLCJyZXN1bHRHcm91cCIsInByb3BlcnR5R3JvdXBOYW1lIiwiZ3JvdXBDb3VudHMiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOztBQUNBOzs7Ozs7Nk5BakJBOzs7QUFjQTs7O0FBS0E7Ozs7QUFJQSxJQUFNQSxVQUFVO0FBQ1pDLGlCQUFhLFNBREQ7QUFFWjs7OztBQUlBQyxtQkFOWSw2QkFNTTtBQUNkLGVBQU87QUFDSEMsb0JBQVFDLFNBREw7QUFFSEMsNEJBQWdCQywrQkFGYjtBQUdIQyw0QkFBZ0JILFNBSGI7QUFJSEkseUJBQWFKLFNBSlY7QUFLSEsscUJBQVNMLFNBTE47QUFNSE0sOEJBQWtCLENBTmY7QUFPSEMseUJBQWFQLFNBUFY7QUFRSFEsOEJBQWtCUixTQVJmO0FBU0hTLGlDQUFxQlQsU0FUbEI7QUFVSFUsK0JBQW1CVixTQVZoQjtBQVdIVyxrQ0FBc0JYLFNBWG5CO0FBWUhZLDBCQUFjWixTQVpYO0FBYUhhLDJCQUFlLFdBYlo7QUFjSEMsa0NBQXNCZCxTQWRuQjtBQWVIZSw2QkFBaUJmLFNBZmQ7QUFnQkhnQix5Q0FBNkIsSUFoQjFCO0FBaUJIQyx3QkFBWWpCLFNBakJUO0FBa0JIa0Is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QUFNQyxTQUFRMkMsWUFBWTVDLElBQVosRUFBaUJDLEtBQS9CO0FBQ0EsbUJBQU8sS0FBS0gsa0JBQUwsQ0FBd0JDLEtBQXhCLEVBQThCQyxJQUE5QixFQUFtQ0MsTUFBbkMsRUFBMEMsSUFBMUMsQ0FBUDtBQUNILFNBTE0sTUFLQTtBQUNILG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLGdCQUFoQjtBQUVRLG1DQUFJZCxVQUFKLEVBQWdCLFVBQUN1RCxXQUFELEVBQWlCO0FBQzdCLHdCQUFNMUMsTUFBTTZCLE9BQU9RLElBQVAsQ0FBWUssV0FBWixFQUF5QixDQUF6QixDQUFaLENBRDZCLENBQ1k7QUFDekMsd0JBQU0zQyxPQUFPMkMsWUFBWTFDLEdBQVosQ0FBYjtBQUNBLHdCQUFNQyxRQUFRMkMsWUFBWTVDLEdBQVosQ0FBZDtBQUNBLDJCQUFPLE9BQUtGLGtCQUFMLENBQXdCQyxJQUF4QixFQUE4QkMsR0FBOUIsRUFBbUNDLEtBQW5DLENBQVA7QUFDSCxpQkFMRDtBQUZSLGFBREo7QUFZSDtBQUNKO0FBdFZXLENBQWhCOztlQTBWNkIsdUJBQVFuQyxPQUFSLEM7SUFBckIrRSxLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnc2FnZXNzLWNvcmUvdHJhbnNsYXRpb24nO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuXG5pbXBvcnQgbWFwVmFsdWVzIGZyb20gJ2xvZGFzaC9vYmplY3QvbWFwVmFsdWVzJztcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vYmplY3Qvb21pdCc7XG5cbmltcG9ydCBjbG9uZSBmcm9tICdsb2Rhc2gvbGFuZy9jbG9uZSc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvbGFuZy9pc0FycmF5JztcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvY29sbGVjdGlvbi9tYXAnO1xuaW1wb3J0IGdyb3VwQnkgZnJvbSAnbG9kYXNoL2NvbGxlY3Rpb24vZ3JvdXBCeSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBEZWZhdWx0RW1wdHkgZnJvbSAnLi9kZWZhdWx0LWVtcHR5LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgTGlzdFNlbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2xpc3Qvc2VsZWN0aW9uL2xpc3QnO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIEdyb3VwV3JhcHBlciB9IGZyb20gJy4vZ3JvdXAtd3JhcHBlcic7XG5cbi8qKlxuKiBSZXN1bHRzIGNvbXBvbmVudCwgdXNlZCB0byByZW5kZXIgdGhlIHJlc3VsdHMsIGdyb3VwZWQgb3IgdW5ncm91cGVkXG4qIEB0eXBlIHtPYmplY3R9XG4qL1xuY29uc3QgUmVzdWx0cyA9IHtcbiAgICBkaXNwbGF5TmFtZTogJ1Jlc3VsdHMnLFxuICAgIC8qKlxuICAgICogQnkgZGVmYXVsdCwgYW4gZW1wdHkgY29tcG9uZW50IGlzIHBpY2tlZC5cbiAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGRlZmF1bHQgcHJvcHNcbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZW1wdHlDb21wb25lbnQ6IERlZmF1bHRFbXB0eSxcbiAgICAgICAgICAgIGdyb3VwQ29tcG9uZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBncm91cGluZ0tleTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaWRGaWVsZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaW5pdGlhbFJvd3NDb3VudDogMyxcbiAgICAgICAgICAgIGlzU2VsZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsaW5lQ2xpY2tIYW5kbGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsaW5lQ29tcG9uZW50TWFwcGVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsaW5lT3BlcmF0aW9uTGlzdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGluZVNlbGVjdGlvbkhhbmRsZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNjb3Blc0NvbmZpZzogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2NvcGVGYWNldEtleTogJ0ZDVF9TQ09QRScsXG4gICAgICAgICAgICBzY3JvbGxQYXJlbnRTZWxlY3RvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2VsZWN0aW9uU3RhdHVzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZW5kZXJTaW5nbGVHcm91cERlY29yYXRpb246IHRydWUsXG4gICAgICAgICAgICByZXN1bHRzTWFwOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZXN1bHRzRmFjZXRzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzZWxlY3Rpb25SZXN1bHRzTWFwOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaG93TW9yZUFkZGl0aW9uYWxSb3dzOiA1LFxuICAgICAgICAgICAgc3RvcmU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRvdGFsQ291bnQ6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBJbml0aWFsIHN0YXRlXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9IEluaXRpYWwgc3RhdGVcbiAgICAqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogQ29tcG9uZW50IHdpbGwgcmVjZWl2ZSBwcm9wc1xuICAgICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmVuZGVyIGEgc2luZ2xlIGdyb3VwIG9mIHJlc3VsdHMsIHVzaW5nIHRoZSBncm91cCBjb21wb25lbnQgZ2l2ZW4gYXMgYSBwcm9wLlxuICAgICogQHBhcmFtICB7YXJyYXl9IGxpc3QgdGhlIHJlc3VsdHMgbGlzdFxuICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgIHRoZSBncm91cCBrZXlcbiAgICAqIEBwYXJhbSAge2ludH0gY291bnQgIHRoZSBncm91cCdzIHJlc3VsdHMgY291bnRcbiAgICAqIEBwYXJhbSAge2Jvb2x9IGlzVW5pcXVlICBpcyB0aGlzIHRoZSBvbmx5IHJlbmRlcmVkIGdyb3VwXG4gICAgKiBAcmV0dXJuIHtITVRMfSAgICAgIHRoZSByZW5kZXJlZCBncm91cFxuICAgICovXG4gICAgX3JlbmRlclNpbmdsZUdyb3VwKGxpc3QsIGtleSwgY291bnQsIGlzVW5pcXVlKSB7XG4gICAgICAgIGNvbnN0IHsgaW5pdGlhbFJvd3NDb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucmVuZGVyU2luZ2xlR3JvdXBEZWNvcmF0aW9uICYmICF0aGlzLnByb3BzLmdyb3VwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBhcmUgdHJ5aW5nIHRvIHdyYXAgeW91ciBsaXN0IGluIGEgZ3JvdXAgd2l0aG91dCBhIGdyb3VwQ29tcG9uZW50LiBQbGVhc2UgZ2l2ZSBvbmUgb3Igc2V0IFwicmVuZGVyU2luZ2xlR3JvdXBEZWNvcmF0aW9uXCIgdG8gZmFsc2UuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNVbmlxdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlbmRlclNpbmdsZUdyb3VwRGVjb3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxHcm91cFdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwQ29tcG9uZW50PXt0aGlzLnByb3BzLmdyb3VwQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBLZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxSb3dzQ291bnQ9e2luaXRpYWxSb3dzQ291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1VuaXF1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17bGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17YGdyb3VwLSR7a2V5fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJSZXN1bHRzTGlzdD17dGhpcy5fcmVuZGVyUmVzdWx0c0xpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxsSGFuZGxlcj17dGhpcy5fc2hvd0FsbEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclJlc3VsdHNMaXN0KGxpc3QsIGtleSwgY291bnQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8R3JvdXBXcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50PXtjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBDb21wb25lbnQ9e3RoaXMucHJvcHMuZ3JvdXBDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwS2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxSb3dzQ291bnQ9e2luaXRpYWxSb3dzQ291bnR9XG4gICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICBsaXN0PXtsaXN0fVxuICAgICAgICAgICAgICAgICAgICByZWY9e2Bncm91cC0ke2tleX1gfVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJSZXN1bHRzTGlzdD17dGhpcy5fcmVuZGVyUmVzdWx0c0xpc3R9XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGxIYW5kbGVyPXt0aGlzLl9zaG93QWxsSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIGVtcHR5IGNvbXBvbmVudCBnaXZlbiBhcyBhIHByb3Agd2hlbiB0aGUgcmVzdWx0IG1hcCBpcyBlbXB0eS5cbiAgICAqIEByZXR1cm4ge0hNVEx9ICAgICAgdGhlIHJlbmRlcmVkIGNvbXBvbmVudFxuICAgICovXG4gICAgX3JlbmRlckVtcHR5UmVzdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0aGlzLnByb3BzLmVtcHR5Q29tcG9uZW50IC8+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgcmVzdWx0cyBsaXN0XG4gICAgKiBAcGFyYW0gIHtBcnJheX0gIGxpc3QgICAgIHRoZSByZXN1bHRzIGxpc3RcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gIGtleSAgICAgIHRoZSBncm91cCBrZXlcbiAgICAqIEBwYXJhbSAge2ludGVnZXJ9ICBjb3VudCAgICB0aGUgZ3JvdXAgY291bnRcbiAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGlzVW5pcXVlIHRydWUgaWYgdGhpcyBpcyB0aGUgb25seSBncm91cCByZW5kZXJlZFxuICAgICogQHJldHVybiB7SFRNTH0gICAgICAgICAgdGhlIHJlbmRlcmVkIGNvbXBvbmVudFxuICAgICovXG4gICAgX3JlbmRlclJlc3VsdHNMaXN0KGxpc3QsIGtleSwgY291bnQsIGlzVW5pcXVlKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBsaW5lQ29tcG9uZW50TWFwcGVyLFxuICAgICAgICAgICAgaWRGaWVsZCxcbiAgICAgICAgICAgIGlzU2VsZWN0aW9uLFxuICAgICAgICAgICAgbGluZVNlbGVjdGlvbkhhbmRsZXIsXG4gICAgICAgICAgICBsaW5lQ2xpY2tIYW5kbGVyLFxuICAgICAgICAgICAgbGluZU9wZXJhdGlvbkxpc3QsXG4gICAgICAgICAgICBzY3JvbGxQYXJlbnRTZWxlY3RvcixcbiAgICAgICAgICAgIHNlbGVjdGlvblN0YXR1cyxcbiAgICAgICAgICAgIHNlbGVjdGlvblJlc3VsdHNNYXAsXG4gICAgICAgICAgICAuLi5vdGhlclByb3BzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25EYXRhID0gc2VsZWN0aW9uUmVzdWx0c01hcCA/IHNlbGVjdGlvblJlc3VsdHNNYXBba2V5XSB8fCBbXSA6IFtdO1xuICAgICAgICBjb25zdCBzY29wZSA9IG90aGVyUHJvcHMuc3RvcmUuZ2V0U2NvcGUoKTtcbiAgICAgICAgY29uc3QgbGluZUtleSA9IHNjb3BlID09PSB1bmRlZmluZWQgfHwgc2NvcGUgPT09ICdBTEwnID8ga2V5IDogc2NvcGU7XG4gICAgICAgIGNvbnN0IExpbmVDb21wb25lbnQgPSBsaW5lQ29tcG9uZW50TWFwcGVyKGxpbmVLZXksIGxpc3QpO1xuICAgICAgICBjb25zdCBoYXNNb3JlRGF0YSA9IGlzVW5pcXVlICE9PSB1bmRlZmluZWQgJiYgaXNVbmlxdWUgJiYgbGlzdC5sZW5ndGggPCBjb3VudDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpc3RTZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17bGlzdH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1mb2N1cz0ncmVzdWx0cy1saXN0J1xuICAgICAgICAgICAgICAgICAgICBmZXRjaE5leHRQYWdlPXt0aGlzLl9vblNjcm9sbFJlYWNoZWRCb3R0b219XG4gICAgICAgICAgICAgICAgICAgIGhhc01vcmVEYXRhPXtoYXNNb3JlRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgaWRGaWVsZD17aWRGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3Rpb249e2lzU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBMaW5lQ29tcG9uZW50PXtMaW5lQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICBvbkxpbmVDbGljaz17bGluZUNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb249e2xpbmVTZWxlY3Rpb25IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25MaXN0PXtsaW5lT3BlcmF0aW9uTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50U2VsZWN0b3I9e3Njcm9sbFBhcmVudFNlbGVjdG9yfVxuICAgICAgICAgICAgICAgICAgICByZWY9e2BsaXN0LSR7a2V5fWB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkRhdGE9e3NlbGVjdGlvbkRhdGF9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblN0YXR1cz17c2VsZWN0aW9uU3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2xvYWRpbmctbW9yZS1yZXN1bHRzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ3NlYXJjaC5sb2FkaW5nTW9yZScpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQ29uc3RydWN0IHRoZSBzaG93IGFsbCBhY3Rpb25cbiAgICAqIEBwYXJhbSAge3N0cmluZ30ga2V5IHRoZSBncm91cCBrZXkgd2hlcmUgdGhlIHNob3cgYWxsIGhhcyBiZWVuIGNsaWNrZWRcbiAgICAqL1xuICAgIF9zaG93QWxsSGFuZGxlcihrZXkpIHtcbiAgICAgICAgY29uc3QgeyBzaG93QWxsSGFuZGxlciwgcmVzdWx0c0ZhY2V0cywgc2NvcGVGYWNldEtleSwgZ3JvdXBpbmdLZXksIHNjb3Blc0NvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHNlbGVjdGVkU2NvcGUgPSBrZXk7XG4gICAgICAgIGlmIChzY29wZXNDb25maWcgJiYga2V5ICYmIHNjb3Blc0NvbmZpZ1trZXldKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFNjb3BlID0gc2NvcGVzQ29uZmlnW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdHNGYWNldHNbc2NvcGVGYWNldEtleV0pIHtcbiAgICAgICAgICAgIHRoaXMuX3Njb3BlU2VsZWN0aW9uSGFuZGxlcihzZWxlY3RlZFNjb3BlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmYWNldEtleSA9IGdyb3VwaW5nS2V5O1xuICAgICAgICAgICAgbGV0IGZhY2V0VmFsdWUgPSBzZWxlY3RlZFNjb3BlO1xuICAgICAgICAgICAgdGhpcy5fZmFjZXRTZWxlY3Rpb25IYW5kbGVyKGZhY2V0S2V5LCBmYWNldFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYWxsZWQgaWYgZGVmaW5lZCAobWF5IGJlIHVzZWQgaW4gdGhlIHF1aWNrIHNlYXJjaCB0byBjbG9zZSB0aGUgcG9waW4uKVxuICAgICAgICBpZiAoc2hvd0FsbEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHNob3dBbGxIYW5kbGVyKCk7XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBDb25zdHJ1Y3QgdGhlIHNob3cgbW9yZSBoYW5kbGVyXG4gICAgKiBAcGFyYW0gIHtzdHJpbmd9IGtleSB0aGUgZ3JvdXAga2V5IHdoZXJlIHRoZSBzaG93IG1vcmUgaGFzIGJlZW4gY2xpY2tlZFxuICAgICogQHJldHVybiB7ZnVuY3Rpb259ICAgICB0aGUgc2hvdyBtb3JlIGhhbmRsZXJcbiAgICAqL1xuICAgIF9nZXRTaG93TW9yZUhhbmRsZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBzUm93c0NvdW50cyA9IGNsb25lKHRoaXMuc3RhdGUuZ3JvdXBzUm93c0NvdW50cyk7XG4gICAgICAgICAgICBncm91cHNSb3dzQ291bnRzW2tleV0gPSBncm91cHNSb3dzQ291bnRzW2tleV0gPyBncm91cHNSb3dzQ291bnRzW2tleV0gKyB0aGlzLnByb3BzLnNob3dNb3JlQWRkaXRpb25hbFJvd3MgOiB0aGlzLnByb3BzLmluaXRpYWxSb3dzQ291bnQ7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ3JvdXBzUm93c0NvdW50cyB9KTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBTY29wZSBzZWxlY3Rpb24gaGFuZGxlclxuICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgdGhlIHNjb3BlIGtleVxuICAgICovXG4gICAgX3Njb3BlU2VsZWN0aW9uSGFuZGxlcihrZXkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb24udXBkYXRlUHJvcGVydGllcyh7XG4gICAgICAgICAgICBzY29wZToga2V5XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBGYWNldCBzZWxlY3Rpb24gaGFuZGxlclxuICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgdGhlIGZhY2V0IGtleVxuICAgICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZSB0aGUgZmFjZXQgdmFsdWVcbiAgICAqL1xuICAgIF9mYWNldFNlbGVjdGlvbkhhbmRsZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRGYWNldHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnN0b3JlLmdldFNlbGVjdGVkRmFjZXRzKCksIHtcbiAgICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICAgICAga2V5OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmFjdGlvbi51cGRhdGVQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgIGdyb3VwaW5nS2V5OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzZWxlY3RlZEZhY2V0c1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogU2Nyb2xsIHJlYWNoZWQgYm90dG9tIGhhbmRsZXJcbiAgICAqL1xuICAgIF9vblNjcm9sbFJlYWNoZWRCb3R0b20oKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb24uc2VhcmNoKHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEdldCB0aGUgZ3JvdXAgY291bnRzIG9iamVjdFxuICAgICogQHBhcmFtICB7b2JqZWN0fSByZXN1bHRzTWFwIHRoZSByZXN1bHRzIG1hcFxuICAgICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgdGhlIGNvdW50cyBtYXBcbiAgICAqL1xuICAgIF9nZXRHcm91cENvdW50cyhyZXN1bHRzTWFwKSB7XG4gICAgICAgIHJlc3VsdHNNYXAgPSByZXN1bHRzTWFwID8gcmVzdWx0c01hcCA6IHRoaXMucHJvcHMucmVzdWx0c01hcDtcbiAgICAgICAgLy8gcmVzdWx0TWFwIGNhbiBiZSBlaXRoZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGRlcGVuZGluZyBvZiB0aGUgc2VhcmNoIGJlaW5nIGdyb3VwZWQgb3Igbm90LlxuICAgICAgICBpZiAocmVzdWx0c01hcCAmJiBpc0FycmF5KHJlc3VsdHNNYXApICYmIDEgPT09IHJlc3VsdHNNYXAubGVuZ3RoKSB7XG4gICAgICAgICAgICAvL0NoZWNrIGlmIHRoZSByZXN1bHRNYXAgY29udGFpbnMgYW4gZW50cnkgd2hpY2ggaXMgYW4gYXJyYXkuXG4gICAgICAgICAgICBjb25zdCBpc1Jlc3VsdE1hcEVudHJ5QW5BcnJheSA9IGlzQXJyYXkocmVzdWx0c01hcFswXSk7XG4gICAgICAgICAgICBpZiAoaXNSZXN1bHRNYXBFbnRyeUFuQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBbcmVzdWx0c01hcFswXVswXV06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiB0aGlzLnByb3BzLnRvdGFsQ291bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3RoaXMgY2FzZSBvY2N1cnMgd2hlbiB0aGUgc2VydmVyIHJlc3BvbnNlIGNvbnRhaW5zIG9ubHkgb25lIGdyb3VwIHdpdGggcmVzdWx0cy5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW09iamVjdC5rZXlzKHJlc3VsdHNNYXBbMF0pXToge1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogdGhpcy5wcm9wcy50b3RhbENvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICgxID09PSBPYmplY3Qua2V5cyhyZXN1bHRzTWFwKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgW09iamVjdC5rZXlzKHJlc3VsdHNNYXApWzBdXToge1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogdGhpcy5wcm9wcy50b3RhbENvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhlcmUgOiBncm91cGVkIGxpc3RcbiAgICAgICAgY29uc3QgeyByZXN1bHRzRmFjZXRzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAocmVzdWx0c0ZhY2V0cykge1xuICAgICAgICAgICAgY29uc3QgeyBzY29wZUZhY2V0S2V5LCBncm91cGluZ0tleSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGdyb3VwaW5nS2V5ID09PSB1bmRlZmluZWQgPyBzY29wZUZhY2V0S2V5IDogZ3JvdXBpbmdLZXk7XG4gICAgICAgICAgICBjb25zdCBzY29wZUZhY2V0ID0gcmVzdWx0c0ZhY2V0c1trZXldO1xuICAgICAgICAgICAgcmV0dXJuIG1hcFZhbHVlcyhncm91cEJ5KHNjb3BlRmFjZXQsICdsYWJlbCcpLCAoZmFjZXREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0RGF0YVswXS5jb3VudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgd2hvbGUgY29tcG9uZW50XG4gICAgKiBAcmV0dXJuIHtITVRMfSAgICAgIHRoZSByZW5kZXJlZCBjb21wb25lbnRcbiAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gcmVzdWx0LCByZW5kZXIgdGhlIGdpdmVuIGVtcHR5IGNvbXBvbmVudFxuICAgICAgICBpZiAoMCA9PT0gdGhpcy5wcm9wcy50b3RhbENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyRW1wdHlSZXN1bHRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0c01hcDtcblxuICAgICAgICAvLyByZXN1bHRzTWFwIGNhbiBiZSBhbiBBcnJheSBvciBhbiBPYmplY3QuXG4gICAgICAgIGlmIChpc0FycmF5KHRoaXMucHJvcHMucmVzdWx0c01hcCkpIHtcbiAgICAgICAgICAgIHJlc3VsdHNNYXAgPSB0aGlzLnByb3BzLnJlc3VsdHNNYXAuZmlsdGVyKChyZXN1bHRHcm91cCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5R3JvdXBOYW1lID0gT2JqZWN0LmtleXMocmVzdWx0R3JvdXApWzBdOyAvL2dyb3VwIHByb3BlcnR5IG5hbWVcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gcmVzdWx0R3JvdXBbcHJvcGVydHlHcm91cE5hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiAwICE9PSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0c01hcCA9IG9taXQodGhpcy5wcm9wcy5yZXN1bHRzTWFwLCAocmVzdWx0R3JvdXApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eUdyb3VwTmFtZSA9IE9iamVjdC5rZXlzKHJlc3VsdEdyb3VwKVswXTsgLy9ncm91cCBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IHJlc3VsdEdyb3VwW3Byb3BlcnR5R3JvdXBOYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMCA9PT0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCB0aGUgY291bnQgZm9yIGVhY2ggZ3JvdXBcbiAgICAgICAgY29uc3QgZ3JvdXBDb3VudHMgPSB0aGlzLl9nZXRHcm91cENvdW50cyhyZXN1bHRzTWFwKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgb25seSBvbmUgZ3JvdXAgbGVmdFxuXG4gICAgICAgIGlmIChpc0FycmF5KHJlc3VsdHNNYXApICYmIDEgPT09IHJlc3VsdHNNYXAubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhyZXN1bHRzTWFwWzBdKVswXTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSByZXN1bHRzTWFwWzBdW2tleV07XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGdyb3VwQ291bnRzW2tleV0uY291bnQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2luZ2xlR3JvdXAobGlzdCwga2V5LCBjb3VudCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoMSA9PT0gT2JqZWN0LmtleXMocmVzdWx0c01hcCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhyZXN1bHRzTWFwKVswXTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSByZXN1bHRzTWFwW2tleV07XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGdyb3VwQ291bnRzW2tleV0uY291bnQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2luZ2xlR3JvdXAobGlzdCwga2V5LCBjb3VudCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nc2VhcmNoLXJlc3VsdHMnPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAocmVzdWx0c01hcCwgKHJlc3VsdEdyb3VwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMocmVzdWx0R3JvdXApWzBdOyAvL2dyb3VwIHByb3BlcnR5IG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gcmVzdWx0R3JvdXBba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IGdyb3VwQ291bnRzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclNpbmdsZUdyb3VwKGxpc3QsIGtleSwgY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKFJlc3VsdHMpO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=