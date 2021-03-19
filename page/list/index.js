'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _camelCase = require('lodash/string/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _capitalize = require('lodash/string/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _actionBuilder = require('sagess-core/list/action-builder');

var _actionBuilder2 = _interopRequireDefault(_actionBuilder);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _list = require('../../list/table/list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//The purpose of this module is to deal with autonomous lists.
//If you need lists inside a form please see the listFor helper function in a form.
//The following lists can
//- be loaded from a criteria (or without) (the criteria can be the result of a form)
//- be paginated
//- be displayed in any list container.
var STORE_NODE = ['criteria', 'groupingKey', 'sortBy', 'sortAsc', 'dataList', 'totalCount'];

/**
 * Cretes a name for the property listener.
 * @param  {string} node - Node name.
 * @return {string} the built property.
 */
function _listenerProp(node) {
    return 'add' + (0, _capitalize2.default)((0, _camelCase2.default)(node)) + 'ChangeListener';
}
function _unListenerProp(node) {
    return 'remove' + (0, _capitalize2.default)((0, _camelCase2.default)(node)) + 'ChangeListener';
}
/**
 * Mixin to deal the list page.
 * @type {Object}
 */
var listPageMixin = {
    getDefaultProps: function getDefaultProps() {
        return {
            ListComponent: _list.component,
            pickProps: function pickProps(props) {
                return props;
            }
        };
    },
    getInitialState: function getInitialState() {
        return {};
    },

    /** @inheritdoc */
    propTypes: {
        //Store object.
        pickProps: (0, _types2.default)('func'),
        service: (0, _types2.default)('func'),
        store: (0, _types2.default)('object').isRequired
    },
    /**
     *  Build the action from.
     */
    _buildAction: function _buildAction() {
        var _this = this;

        this._action = this.props.action || (0, _actionBuilder2.default)({
            service: this.props.service,
            identifier: this.props.store.identifier,
            getListOptions: function getListOptions() {
                return _this.props.store.getValue.call(_this.props.store);
            } // Binding the store in the function call
        });
    },

    /**
     * Read the state from the store.
     * @return {object} - The object read from the store.
     */
    _getStateFromStore: function _getStateFromStore() {
        var store = this.props.store;
        return store.getValue();
    },

    /**
     * Hanlde the list store change.
     */
    _handleStoreChanged: function _handleStoreChanged() {
        this.setState(this._getStateFromStore());
    },

    /**
     * Register the store nodes.
     */
    _reload: function _reload() {
        this._action.load();
    },
    _registerStoreNode: function _registerStoreNode() {
        var _this2 = this;

        STORE_NODE.forEach(function (node) {
            //Maybe this is a bit too much, a global change event could be more efficient as almost all store props change.
            _this2.props.store[_listenerProp(node)](_this2._handleStoreChanged);
        });
        //When the criteria is changed, the search is triggered.
        this.props.store.addCriteriaChangeListener(this._reload);
    },
    _unRegisterStoreNode: function _unRegisterStoreNode() {
        var _this3 = this;

        STORE_NODE.forEach(function (node) {
            //Maybe this is a bit too much, a global change event could be more efficient as almost all store props change.
            _this3.props.store[_unListenerProp(node)](_this3._handleStoreChanged);
        });
        //When the criteria is changed, the search is triggered.
        this.props.store.removeCriteriaChangeListener(this._reload);
    },

    /**
     * build the list props.
     * @return {object} - the list property.
     */
    _buildListProps: function _buildListProps() {
        var props = this.props,
            state = this.state;
        var dataList = state.dataList,
            totalCount = state.totalCount;

        dataList = dataList || [];
        return (0, _objectAssign2.default)({}, props, state, {
            data: dataList,
            fetchNextPage: this._action.load,
            hasMoreData: dataList.length < totalCount
        });
    },

    /** @inheritdoc */
    componentWillMount: function componentWillMount() {
        this._registerStoreNode();
        this._buildAction();
        this._action.load();
    },
    componentWillUnmount: function componentWillUnmount() {
        this._unRegisterStoreNode();
    },

    /** @inheritdoc */
    render: function render() {
        var listProps = this._buildListProps();
        return _react2.default.createElement(this.props.ListComponent, Object.assign({}, listProps, { ref: 'list' }));
    }
};

var _builder = (0, _builder3.default)(listPageMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiU1RPUkVfTk9ERSIsIl9saXN0ZW5lclByb3AiLCJub2RlIiwiX3VuTGlzdGVuZXJQcm9wIiwibGlzdFBhZ2VNaXhpbiIsImdldERlZmF1bHRQcm9wcyIsIkxpc3RDb21wb25lbnQiLCJERUZBVUxUX0xJU1RfQ09NUE9ORU5UIiwicGlja1Byb3BzIiwicHJvcHMiLCJnZXRJbml0aWFsU3RhdGUiLCJwcm9wVHlwZXMiLCJzZXJ2aWNlIiwic3RvcmUiLCJpc1JlcXVpcmVkIiwiX2J1aWxkQWN0aW9uIiwiX2FjdGlvbiIsImFjdGlvbiIsImlkZW50aWZpZXIiLCJnZXRMaXN0T3B0aW9ucyIsImdldFZhbHVlIiwiY2FsbCIsIl9nZXRTdGF0ZUZyb21TdG9yZSIsIl9oYW5kbGVTdG9yZUNoYW5nZWQiLCJzZXRTdGF0ZSIsIl9yZWxvYWQiLCJsb2FkIiwiX3JlZ2lzdGVyU3RvcmVOb2RlIiwiZm9yRWFjaCIsImFkZENyaXRlcmlhQ2hhbmdlTGlzdGVuZXIiLCJfdW5SZWdpc3RlclN0b3JlTm9kZSIsInJlbW92ZUNyaXRlcmlhQ2hhbmdlTGlzdGVuZXIiLCJfYnVpbGRMaXN0UHJvcHMiLCJzdGF0ZSIsImRhdGFMaXN0IiwidG90YWxDb3VudCIsImRhdGEiLCJmZXRjaE5leHRQYWdlIiwiaGFzTW9yZURhdGEiLCJsZW5ndGgiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImxpc3RQcm9wcyIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBLElBQU1BLGFBQWEsQ0FBQyxVQUFELEVBQWEsYUFBYixFQUE0QixRQUE1QixFQUFzQyxTQUF0QyxFQUFpRCxVQUFqRCxF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NEJBQU8sRUFBUCxFQUFXekIsS0FBWCxFQUFrQndCLEtBQWxCLEVBQXlCO0FBQzVCRyxrQkFBTUYsUUFEc0I7QUFFNUJHLDJCQUFlLEtBQUtyQixPQUFMLENBQWFVLElBRkE7QUFHNUJZLHlCQUFhSixTQUFTSyxNQUFULEdBQWtCSjtBQUhILFNBQXpCLENBQVA7QUFLSCxLQTVFaUI7O0FBNkVsQjtBQUNBSyxzQkE5RWtCLGdDQThFRztBQUNqQixhQUFLYixrQkFBTDtBQUNBLGFBQUtaLFlBQUw7QUFDQSxhQUFLQyxPQUFMLENBQWFVLElBQWI7QUFDSCxLQWxGaUI7QUFtRmxCZSx3QkFuRmtCLGtDQW1GSztBQUNuQixhQUFLWCxvQkFBTDtBQUNILEtBckZpQjs7QUFzRmxCO0FBQ0FZLFVBdkZrQixvQkF1RlQ7QUFDTCxZQUFNQyxZQUFZLEtBQUtYLGVBQUwsRUFBbEI7QUFDQSxlQUNJLG1DQUFNLEtBQU4sQ0FBWSxhQUFaLG9CQUE4QlcsU0FBOUIsSUFBeUMsS0FBSSxNQUE3QyxJQURKO0FBR0g7QUE1RmlCLENBQXRCOztlQStGNkIsdUJBQVF2QyxhQUFSLEM7SUFBckJ3QyxLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9UaGUgcHVycG9zZSBvZiB0aGlzIG1vZHVsZSBpcyB0byBkZWFsIHdpdGggYXV0b25vbW91cyBsaXN0cy5cbi8vSWYgeW91IG5lZWQgbGlzdHMgaW5zaWRlIGEgZm9ybSBwbGVhc2Ugc2VlIHRoZSBsaXN0Rm9yIGhlbHBlciBmdW5jdGlvbiBpbiBhIGZvcm0uXG4vL1RoZSBmb2xsb3dpbmcgbGlzdHMgY2FuXG4vLy0gYmUgbG9hZGVkIGZyb20gYSBjcml0ZXJpYSAob3Igd2l0aG91dCkgKHRoZSBjcml0ZXJpYSBjYW4gYmUgdGhlIHJlc3VsdCBvZiBhIGZvcm0pXG4vLy0gYmUgcGFnaW5hdGVkXG4vLy0gYmUgZGlzcGxheWVkIGluIGFueSBsaXN0IGNvbnRhaW5lci5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2xvZGFzaC9zdHJpbmcvY2FtZWxDYXNlJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJ2xvZGFzaC9zdHJpbmcvY2FwaXRhbGl6ZSc7XG5cbmltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCB0eXBlcyBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IGFjdGlvbkJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvbGlzdC9hY3Rpb24tYnVpbGRlcic7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIERFRkFVTFRfTElTVF9DT01QT05FTlQgfSBmcm9tICcuLi8uLi9saXN0L3RhYmxlL2xpc3QnO1xuXG5jb25zdCBTVE9SRV9OT0RFID0gWydjcml0ZXJpYScsICdncm91cGluZ0tleScsICdzb3J0QnknLCAnc29ydEFzYycsICdkYXRhTGlzdCcsICd0b3RhbENvdW50J107XG5cbi8qKlxuICogQ3JldGVzIGEgbmFtZSBmb3IgdGhlIHByb3BlcnR5IGxpc3RlbmVyLlxuICogQHBhcmFtICB7c3RyaW5nfSBub2RlIC0gTm9kZSBuYW1lLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYnVpbHQgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIF9saXN0ZW5lclByb3Aobm9kZSkge1xuICAgIHJldHVybiBgYWRkJHtjYXBpdGFsaXplKGNhbWVsQ2FzZShub2RlKSl9Q2hhbmdlTGlzdGVuZXJgO1xufVxuZnVuY3Rpb24gX3VuTGlzdGVuZXJQcm9wKG5vZGUpIHtcbiAgICByZXR1cm4gYHJlbW92ZSR7Y2FwaXRhbGl6ZShjYW1lbENhc2Uobm9kZSkpfUNoYW5nZUxpc3RlbmVyYDtcbn1cbi8qKlxuICogTWl4aW4gdG8gZGVhbCB0aGUgbGlzdCBwYWdlLlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgbGlzdFBhZ2VNaXhpbiA9IHtcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBMaXN0Q29tcG9uZW50OiBERUZBVUxUX0xJU1RfQ09NUE9ORU5ULFxuICAgICAgICAgICAgcGlja1Byb3BzKHByb3BzKSB7IHJldHVybiBwcm9wczsgfVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgLy9TdG9yZSBvYmplY3QuXG4gICAgICAgIHBpY2tQcm9wczogdHlwZXMoJ2Z1bmMnKSxcbiAgICAgICAgc2VydmljZTogdHlwZXMoJ2Z1bmMnKSxcbiAgICAgICAgc3RvcmU6IHR5cGVzKCdvYmplY3QnKS5pc1JlcXVpcmVkXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiAgQnVpbGQgdGhlIGFjdGlvbiBmcm9tLlxuICAgICAqL1xuICAgIF9idWlsZEFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5fYWN0aW9uID0gdGhpcy5wcm9wcy5hY3Rpb24gfHwgYWN0aW9uQnVpbGRlcih7XG4gICAgICAgICAgICBzZXJ2aWNlOiB0aGlzLnByb3BzLnNlcnZpY2UsXG4gICAgICAgICAgICBpZGVudGlmaWVyOiB0aGlzLnByb3BzLnN0b3JlLmlkZW50aWZpZXIsXG4gICAgICAgICAgICBnZXRMaXN0T3B0aW9uczogKCkgPT4geyByZXR1cm4gdGhpcy5wcm9wcy5zdG9yZS5nZXRWYWx1ZS5jYWxsKHRoaXMucHJvcHMuc3RvcmUpOyB9IC8vIEJpbmRpbmcgdGhlIHN0b3JlIGluIHRoZSBmdW5jdGlvbiBjYWxsXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVhZCB0aGUgc3RhdGUgZnJvbSB0aGUgc3RvcmUuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAtIFRoZSBvYmplY3QgcmVhZCBmcm9tIHRoZSBzdG9yZS5cbiAgICAgKi9cbiAgICBfZ2V0U3RhdGVGcm9tU3RvcmUoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy5wcm9wcy5zdG9yZTtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmdldFZhbHVlKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBIYW5sZGUgdGhlIGxpc3Qgc3RvcmUgY2hhbmdlLlxuICAgICAqL1xuICAgIF9oYW5kbGVTdG9yZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3RhdGVGcm9tU3RvcmUoKSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciB0aGUgc3RvcmUgbm9kZXMuXG4gICAgICovXG4gICAgX3JlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5fYWN0aW9uLmxvYWQoKTtcbiAgICB9LFxuICAgIF9yZWdpc3RlclN0b3JlTm9kZSgpIHtcbiAgICAgICAgU1RPUkVfTk9ERS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAvL01heWJlIHRoaXMgaXMgYSBiaXQgdG9vIG11Y2gsIGEgZ2xvYmFsIGNoYW5nZSBldmVudCBjb3VsZCBiZSBtb3JlIGVmZmljaWVudCBhcyBhbG1vc3QgYWxsIHN0b3JlIHByb3BzIGNoYW5nZS5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmVbX2xpc3RlbmVyUHJvcChub2RlKV0odGhpcy5faGFuZGxlU3RvcmVDaGFuZ2VkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vV2hlbiB0aGUgY3JpdGVyaWEgaXMgY2hhbmdlZCwgdGhlIHNlYXJjaCBpcyB0cmlnZ2VyZWQuXG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuYWRkQ3JpdGVyaWFDaGFuZ2VMaXN0ZW5lcih0aGlzLl9yZWxvYWQpO1xuICAgIH0sXG4gICAgX3VuUmVnaXN0ZXJTdG9yZU5vZGUoKSB7XG4gICAgICAgIFNUT1JFX05PREUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgLy9NYXliZSB0aGlzIGlzIGEgYml0IHRvbyBtdWNoLCBhIGdsb2JhbCBjaGFuZ2UgZXZlbnQgY291bGQgYmUgbW9yZSBlZmZpY2llbnQgYXMgYWxtb3N0IGFsbCBzdG9yZSBwcm9wcyBjaGFuZ2UuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlW191bkxpc3RlbmVyUHJvcChub2RlKV0odGhpcy5faGFuZGxlU3RvcmVDaGFuZ2VkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vV2hlbiB0aGUgY3JpdGVyaWEgaXMgY2hhbmdlZCwgdGhlIHNlYXJjaCBpcyB0cmlnZ2VyZWQuXG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUucmVtb3ZlQ3JpdGVyaWFDaGFuZ2VMaXN0ZW5lcih0aGlzLl9yZWxvYWQpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogYnVpbGQgdGhlIGxpc3QgcHJvcHMuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAtIHRoZSBsaXN0IHByb3BlcnR5LlxuICAgICAqL1xuICAgIF9idWlsZExpc3RQcm9wcygpIHtcbiAgICAgICAgY29uc3QgeyBwcm9wcywgc3RhdGUgfSA9IHRoaXM7XG4gICAgICAgIGxldCB7IGRhdGFMaXN0LCB0b3RhbENvdW50IH0gPSBzdGF0ZTtcbiAgICAgICAgZGF0YUxpc3QgPSBkYXRhTGlzdCB8fCBbXTtcbiAgICAgICAgcmV0dXJuIGFzc2lnbih7fSwgcHJvcHMsIHN0YXRlLCB7XG4gICAgICAgICAgICBkYXRhOiBkYXRhTGlzdCxcbiAgICAgICAgICAgIGZldGNoTmV4dFBhZ2U6IHRoaXMuX2FjdGlvbi5sb2FkLFxuICAgICAgICAgICAgaGFzTW9yZURhdGE6IGRhdGFMaXN0Lmxlbmd0aCA8IHRvdGFsQ291bnRcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyU3RvcmVOb2RlKCk7XG4gICAgICAgIHRoaXMuX2J1aWxkQWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX2FjdGlvbi5sb2FkKCk7XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fdW5SZWdpc3RlclN0b3JlTm9kZSgpO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBsaXN0UHJvcHMgPSB0aGlzLl9idWlsZExpc3RQcm9wcygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoaXMucHJvcHMuTGlzdENvbXBvbmVudCB7Li4ubGlzdFByb3BzfSByZWY9J2xpc3QnIC8+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKGxpc3RQYWdlTWl4aW4pO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=