'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _capitalize = require('lodash/string/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = require('lodash/lang/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _defaultsDeep = require('lodash/object/defaultsDeep');

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

var _findIndex = require('lodash/array/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

var _pick = require('lodash/object/pick');

var _pick2 = _interopRequireDefault(_pick);

var _storeChangeBehaviour = require('./store-change-behaviour');

var _storeChangeBehaviour2 = _interopRequireDefault(_storeChangeBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Behavior to update state according to stores.
 */
var storeMixin = {

    mixins: [_storeChangeBehaviour2.default],

    /** @inheritdoc */
    componentWillMount: function componentWillMount() {
        if (!this.stores) {
            this.stores = [];
        }

        //These listeners are registered before the mounting because they are not correlated to the DOM.
        this._registerListeners();
    },


    /** @inheritdoc */
    componentDidMount: function componentDidMount() {
        if (this.stores && this.stores.length > 0) {
            var newState = this._getStateFromStores();
            this.setState(newState);
        }
    },


    /** @inheritdoc */
    componentWillUnmount: function componentWillUnmount() {
        this._unRegisterListeners();
    },


    /**
     * Get the state informations from the store.
     * @param  {array} filterNodesArg - An object containing nodes key to update.
     * @returns {object} - The js object constructed from store data.
     */
    _getStateFromStores: function _getStateFromStores(filterNodesArg) {
        if (this.getStateFromStore) {
            return this.getStateFromStore(filterNodesArg);
        }
        // Build state from store.
        var newState = {};
        this.stores.forEach(function (storeConf) {
            storeConf.properties.forEach(function (property) {
                newState[property] = storeConf.store['get' + (0, _capitalize2.default)(property)]();
            });
        });
        // If filter is given, we need to filter, even if the array is empty.
        var hasFilter = filterNodesArg !== undefined && filterNodesArg !== null;

        var defaultStateData = {};
        // If there is a custom function, use it. It should return store-level data, with node.
        if (this.getDefaultStoreData) {
            defaultStateData = this.getDefaultStoreData(this.definition, filterNodesArg);
        } else if ((!hasFilter || this.definitionInNode) && this.definition) {
            // If the information about store node is known, or we load all data from store
            // We build the default data
            defaultStateData = this._buildEmptyFromDefinition();
            // If the information about store node is known, we wrapped the object
            if (this.definitionInNode) {
                defaultStateData = _defineProperty({}, this.definitionInNode, defaultStateData);

                // Merge deep consider 'null' as value and therefore wins over defaultStateData below
                if (newState[this.definitionInNode] === null) {
                    newState[this.definitionInNode] = undefined;
                }
            }
        }

        // We handle store-level default data (object with key, for node name)
        if (this.definitionInNode || this.getDefaultStoreData) {
            newState = (0, _defaultsDeep2.default)({}, newState, defaultStateData);
        }

        // We want to pick only some nodes & reference nodes
        if (hasFilter) {
            // We take all references in addition to given node
            newState = (0, _pick2.default)(newState, (filterNodesArg || []).concat(this.referenceNames || []));
        }

        var computedState = (0, _objectAssign2.default)(this._computeEntityFromStoresData(newState), this._getLoadingStateFromStores());

        // First encountered key wins
        return !hasFilter && !this.definitionInNode && !this.getDefaultStoreData ? (0, _defaultsDeep2.default)({}, computedState, defaultStateData) : computedState;
    },


    /**
     * Get the error state informations from the store.
     * @returns {object} - The js error object constructed from the store data.
     */
    _getErrorStateFromStores: function _getErrorStateFromStores() {
        if (this.getErrorStateFromStore) {
            return this.getErrorStateFromStore();
        }

        var newState = {};
        this.stores.forEach(function (storeConf) {
            storeConf.properties.forEach(function (property) {
                var errorState = storeConf.store['getError' + (0, _capitalize2.default)(property)]();
                for (var prop in errorState) {
                    newState[property + '.' + prop] = errorState[prop];
                }
            });
        });

        return newState;
    },


    /**
     * Build object with null values for each key of definition.
     * @returns {object} Empty object.
     */
    _buildEmptyFromDefinition: function _buildEmptyFromDefinition() {
        var _this = this;

        if (this.buildEmptyFromDefinition) {
            return this.buildEmptyFromDefinition();
        }

        return Object.keys(this.definition).reduce(function (acc, key) {
            return (__IS_VERTIGO__ || _this.partialObject) && !_this.refs[_this.definitionPath + '.' + key] ? acc : Object.assign({}, acc, _defineProperty({}, key, null));
        }, {});
    },


    /**
     * Get the isLoading state from  all the store.
     * @returns {object} The object with isLoading key set.
     */
    _getLoadingStateFromStores: function _getLoadingStateFromStores() {
        if (this.getLoadingStateFromStores) {
            return this.getLoadingStateFromStores();
        }

        var isLoading = false;
        this.stores.forEach(function (storeConf) {
            if (!isLoading) {
                storeConf.properties.forEach(function (property) {
                    if (!isLoading) {
                        var propStatus = storeConf.store.getStatus(property) || {};
                        isLoading = propStatus.isLoading || false;
                    }
                });
            }
        });

        return { isLoading: isLoading };
    },


    /**
     * Compute the data given from the stores.
     * @param {object} data The data ordered by store.
     * @returns {object} The js object transformed from store data.
     */
    _computeEntityFromStoresData: function _computeEntityFromStoresData(data) {
        if (this.computeEntityFromStoresData) {
            return this.computeEntityFromStoresData(data);
        }

        var entity = {
            reference: {}
        };
        for (var key in data) {
            if (this.referenceNames && this.referenceNames.includes(key)) {
                entity.reference[key] = data[key];
            } else {
                var d = data[key];
                if ((0, _isArray2.default)(d) || !(0, _isObject2.default)(d)) {
                    d = _defineProperty({}, key, d);
                }
                (0, _objectAssign2.default)(entity, d);
            }
        }

        return entity;
    },


    /**
     * Register all the listeners related to the page.
     */
    _registerListeners: function _registerListeners() {
        var _this2 = this;

        if (this.stores) {
            this.stores.forEach(function (storeConf) {
                storeConf.properties.forEach(function (property) {
                    _this2._addRemoveSingleListener('add', storeConf.store, property);
                });
            });
        }
    },


    /**
    * Unregister all the listeners related to the page.
    */
    _unRegisterListeners: function _unRegisterListeners() {
        var _this3 = this;

        if (this.stores) {
            this.stores.forEach(function (storeConf) {
                storeConf.properties.forEach(function (property) {
                    _this3._addRemoveSingleListener('remove', storeConf.store, property);
                });
            });
        }
    },


    /**
     * Add or remove on listener.
     * @param {*} action Add or remove operation.
     * @param {*} store  Store to operate on.
     * @param {*} property Node to operate on.
     */
    _addRemoveSingleListener: function _addRemoveSingleListener(action, store, property) {
        if (!store || !store.definition || !store.definition[property]) {
            throw new Error('You ' + action + ' a property : ' + property + ' in your store subscription for ' + (store.name || store.identifier) + ' which is not in your definition : ' + Object.keys(store.definition));
        }
        store['' + action + (0, _capitalize2.default)(property) + 'ChangeListener'](this._onStoreChange);
        store['' + action + (0, _capitalize2.default)(property) + 'ErrorListener'](this._onStoreError);
        store['' + action + (0, _capitalize2.default)(property) + 'StatusListener'](this._onStoreStatus);
    },


    /**
     * Add a listened node.
     * @param {*} store Store to listen to.
     * @param {*} property Node to listen to.
     */
    addStoreSub: function addStoreSub(store, property) {
        if (!this.stores) {
            this.stores = [];
        }

        var storeIndex = (0, _findIndex2.default)(this.stores, function (elt) {
            return elt.store === store;
        });
        var existingConf = storeIndex === -1 ? null : this.stores[storeIndex];

        if (existingConf && existingConf.properties.includes(property)) {
            return; // Store/Node tuple already listened.
        }

        this._addRemoveSingleListener('add', store, property);

        if (existingConf) {
            existingConf.properties.push(property);
        } else {
            this.stores.push({
                store: store,
                properties: [property]
            });
        }
    },


    /**
     * Remove a listened node.
     * @param {*} store Store to unlisten to.
     * @param {*} property Node to unlisten to.
     */
    removeStoreSub: function removeStoreSub(store, property) {
        if (!this.stores) {
            this.stores = [];
        }

        var storeIndex = (0, _findIndex2.default)(this.stores, function (elt) {
            return elt.store === store;
        });
        if (storeIndex === -1) {
            return;
        }

        var existingConf = this.stores[storeIndex];
        var propertyIndex = existingConf.properties.indexOf(property);
        if (propertyIndex === -1) {
            return;
        }

        this._addRemoveSingleListener('remove', store, property);

        existingConf.properties.splice(propertyIndex, 1);
        if (existingConf.properties.length === 0) {
            this.stores.splice(storeIndex, 1);
        }
    }
};

exports.default = storeMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsic3RvcmVNaXhpbiIsIm1peGlucyIsInN0b3JlQ2hhbmdlQmVoYXZpb3VyIiwiY29tcG9uZW50V2lsbE1vdW50Iiwic3RvcmVzIiwiX3JlZ2lzdGVyTGlzdGVuZXJzIiwiY29tcG9uZW50RGlkTW91bnQiLCJsZW5ndGgiLCJuZXdTdGF0ZSIsIl9nZXRTdGF0ZUZyb21TdG9yZXMiLCJzZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiX3VuUmVnaXN0ZXJMaXN0ZW5lcnMiLCJmaWx0ZXJOb2Rlc0FyZyIsImdldFN0YXRlRnJvbVN0b3JlIiwiZm9yRWFjaCIsInN0b3JlQ29uZiIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eSIsInN0b3JlIiwiaGFzRmlsdGVyIiwidW5kZWZpbmVkIiwiZGVmYXVsdFN0YXRlRGF0YSIsImdldERlZmF1bHRTdG9yZURhdGEiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkluTm9kZSIsIl9idWlsZEVtcHR5RnJvbURlZmluaXRpb24iLCJjb25jYXQiLCJyZWZlcmVuY2VOYW1lcyIsImNvbXB1dGVkU3RhdGUiLCJfY29tcHV0ZUVudGl0eUZyb21TdG9yZXNEYXRhIiwiX2dldExvYWRpbmdTdGF0ZUZyb21TdG9yZXMiLCJfZ2V0RXJyb3JTdGF0ZUZyb21TdG9yZXMiLCJnZXRFcnJvclN0YXRlRnJvbVN0b3JlIiwiZXJyb3JTdGF0ZSIsInByb3AiLCJidWlsZEVtcHR5RnJvbURlZmluaXRpb24iLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwiX19JU19WRVJUSUdPX18iLCJwYXJ0aWFsT2JqZWN0IiwicmVmcyIsImRlZmluaXRpb25QYXRoIiwiZ2V0TG9hZGluZ1N0YXRlRnJvbVN0b3JlcyIsImlzTG9hZGluZyIsInByb3BTdGF0dXMiLCJnZXRTdGF0dXMiLCJkYXRhIiwiY29tcHV0ZUVudGl0eUZyb21TdG9yZXNEYXRhIiwiZW50aXR5IiwicmVmZXJlbmNlIiwiaW5jbHVkZXMiLCJkIiwiX2FkZFJlbW92ZVNpbmdsZUxpc3RlbmVyIiwiYWN0aW9uIiwiRXJyb3IiLCJuYW1lIiwiaWRlbnRpZmllciIsIl9vblN0b3JlQ2hhbmdlIiwiX29uU3RvcmVFcnJvciIsIl9vblN0b3JlU3RhdHVzIiwiYWRkU3RvcmVTdWIiLCJzdG9yZUluZGV4IiwiZWx0IiwiZXhpc3RpbmdDb25mIiwicHVzaCIsInJlbW92ZVN0b3JlU3ViIiwicHJvcGVydHlJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7O0FBRUE7OztBQUdBLElBQU1BLGFBQWE7O0FBRWZDLFlBQVEsQ0FBQ0MsOEJBQUQsQ0FGTzs7QUFJZjtBQUNBQyxzQkFMZSxnQ0FLTTtBQUNqQixZQUFJLENBQUMsS0FBS0MsTUFBVixFQUFrQjtBQUNkLGlCQUFLQSxNQUFMLEdBQWMsRUFBZDtBQUNIOztBQUVEO0FBQ0EsYUFBS0Msa0JBQUw7QUFDSCxLQVpjOzs7QUFjZjtBQUNBQyxxQkFmZSwrQkFlSztBQUNoQixZQUFJLEtBQUtGLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlHLE1BQVosR0FBcUIsQ0FBeEMsRUFBMkM7QUFDdkMsZ0JBQU1DLFdBQVcsS0FBS0MsbUJBQUwsRUFBakI7QUFDQSxpQkFBS0MsUUFBTCxDQUFjRixRQUFkO0FBQ0g7QUFDSixLQXBCYzs7O0FBc0JmO0FBQ0FHLHdCQXZCZSxrQ0F1QlE7QUFDbkIsYUFBS0Msb0JBQUw7QUFDSCxLQXpCYzs7O0FBMkJmOzs7OztBQUtBSCx1QkFoQ2UsK0JBZ0NLSSxjQWhDTCxFQWdDcUI7QUFDaEMsWUFBSSxLQUFLQyxpQkFBVCxFQUE0QjtBQUN4QixtQkFBTyxLQUFLQSxpQkFBTCxDQUF1QkQsY0FBdkIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSxZQUFJTCxXQUFXLEVBQWY7QUFDQSxhQUFLSixNQUFMLENBQVlX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QUE2QmxELFFBQTdCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsaUJBQUtkLE1BQUwsQ0FBWWdFLElBQVosQ0FBaUI7QUFDYmpELDRCQURhO0FBRWJGLDRCQUFZLENBQUNDLFFBQUQ7QUFGQyxhQUFqQjtBQUlIO0FBQ0osS0EvT2M7OztBQWlQZjs7Ozs7QUFLQW1ELGtCQXRQZSwwQkFzUEFsRCxLQXRQQSxFQXNQT0QsUUF0UFAsRUFzUGlCO0FBQzVCLFlBQUksQ0FBQyxLQUFLZCxNQUFWLEVBQWtCO0FBQ2QsaUJBQUtBLE1BQUwsR0FBYyxFQUFkO0FBQ0g7O0FBRUQsWUFBTTZELGFBQWEseUJBQVUsS0FBSzdELE1BQWYsRUFBdUI7QUFBQSxtQkFBTzhELElBQUkvQyxLQUFKLEtBQWNBLEtBQXJCO0FBQUEsU0FBdkIsQ0FBbkI7QUFDQSxZQUFJOEMsZUFBZSxDQUFDLENBQXBCLEVBQXVCO0FBQ25CO0FBQ0g7O0FBRUQsWUFBTUUsZUFBZSxLQUFLL0QsTUFBTCxDQUFZNkQsVUFBWixDQUFyQjtBQUNBLFlBQU1LLGdCQUFnQkgsYUFBYWxELFVBQWIsQ0FBd0JzRCxPQUF4QixDQUFnQ3JELFFBQWhDLENBQXRCO0FBQ0EsWUFBSW9ELGtCQUFrQixDQUFDLENBQXZCLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBRUQsYUFBS2Qsd0JBQUwsQ0FBOEIsUUFBOUIsRUFBd0NyQyxLQUF4QyxFQUErQ0QsUUFBL0M7O0FBRUFpRCxxQkFBYWxELFVBQWIsQ0FBd0J1RCxNQUF4QixDQUErQkYsYUFBL0IsRUFBOEMsQ0FBOUM7QUFDQSxZQUFJSCxhQUFhbEQsVUFBYixDQUF3QlYsTUFBeEIsS0FBbUMsQ0FBdkMsRUFBMEM7QUFDdEMsaUJBQUtILE1BQUwsQ0FBWW9FLE1BQVosQ0FBbUJQLFVBQW5CLEVBQStCLENBQS9CO0FBQ0g7QUFDSjtBQTVRYyxDQUFuQjs7a0JBZ1JlakUsVSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcclxuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnbG9kYXNoL3N0cmluZy9jYXBpdGFsaXplJztcclxuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2xhbmcvaXNBcnJheSc7XHJcbmltcG9ydCBpc09iamVjdCBmcm9tICdsb2Rhc2gvbGFuZy9pc09iamVjdCc7XHJcbmltcG9ydCBkZWZhdWx0c0RlZXAgZnJvbSAnbG9kYXNoL29iamVjdC9kZWZhdWx0c0RlZXAnO1xyXG5pbXBvcnQgZmluZEluZGV4IGZyb20gJ2xvZGFzaC9hcnJheS9maW5kSW5kZXgnO1xyXG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gvb2JqZWN0L3BpY2snO1xyXG5cclxuaW1wb3J0IHN0b3JlQ2hhbmdlQmVoYXZpb3VyIGZyb20gJy4vc3RvcmUtY2hhbmdlLWJlaGF2aW91cic7XHJcblxyXG4vKipcclxuICogQmVoYXZpb3IgdG8gdXBkYXRlIHN0YXRlIGFjY29yZGluZyB0byBzdG9yZXMuXHJcbiAqL1xyXG5jb25zdCBzdG9yZU1peGluID0ge1xyXG5cclxuICAgIG1peGluczogW3N0b3JlQ2hhbmdlQmVoYXZpb3VyXSxcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RvcmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1RoZXNlIGxpc3RlbmVycyBhcmUgcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIG1vdW50aW5nIGJlY2F1c2UgdGhleSBhcmUgbm90IGNvcnJlbGF0ZWQgdG8gdGhlIERPTS5cclxuICAgICAgICB0aGlzLl9yZWdpc3Rlckxpc3RlbmVycygpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3JlcyAmJiB0aGlzLnN0b3Jlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gdGhpcy5fZ2V0U3RhdGVGcm9tU3RvcmVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLl91blJlZ2lzdGVyTGlzdGVuZXJzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdGF0ZSBpbmZvcm1hdGlvbnMgZnJvbSB0aGUgc3RvcmUuXHJcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gZmlsdGVyTm9kZXNBcmcgLSBBbiBvYmplY3QgY29udGFpbmluZyBub2RlcyBrZXkgdG8gdXBkYXRlLlxyXG4gICAgICogQHJldHVybnMge29iamVjdH0gLSBUaGUganMgb2JqZWN0IGNvbnN0cnVjdGVkIGZyb20gc3RvcmUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgX2dldFN0YXRlRnJvbVN0b3JlcyhmaWx0ZXJOb2Rlc0FyZykge1xyXG4gICAgICAgIGlmICh0aGlzLmdldFN0YXRlRnJvbVN0b3JlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN0YXRlRnJvbVN0b3JlKGZpbHRlck5vZGVzQXJnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQnVpbGQgc3RhdGUgZnJvbSBzdG9yZS5cclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7fTtcclxuICAgICAgICB0aGlzLnN0b3Jlcy5mb3JFYWNoKChzdG9yZUNvbmYpID0+IHtcclxuICAgICAgICAgICAgc3RvcmVDb25mLnByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlW3Byb3BlcnR5XSA9IHN0b3JlQ29uZi5zdG9yZVtgZ2V0JHtjYXBpdGFsaXplKHByb3BlcnR5KX1gXSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBJZiBmaWx0ZXIgaXMgZ2l2ZW4sIHdlIG5lZWQgdG8gZmlsdGVyLCBldmVuIGlmIHRoZSBhcnJheSBpcyBlbXB0eS5cclxuICAgICAgICBsZXQgaGFzRmlsdGVyID0gZmlsdGVyTm9kZXNBcmcgIT09IHVuZGVmaW5lZCAmJiBmaWx0ZXJOb2Rlc0FyZyAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IGRlZmF1bHRTdGF0ZURhdGEgPSB7fTtcclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGN1c3RvbSBmdW5jdGlvbiwgdXNlIGl0LiBJdCBzaG91bGQgcmV0dXJuIHN0b3JlLWxldmVsIGRhdGEsIHdpdGggbm9kZS5cclxuICAgICAgICBpZiAodGhpcy5nZXREZWZhdWx0U3RvcmVEYXRhKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRTdGF0ZURhdGEgPSB0aGlzLmdldERlZmF1bHRTdG9yZURhdGEodGhpcy5kZWZpbml0aW9uLCBmaWx0ZXJOb2Rlc0FyZyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgoIWhhc0ZpbHRlciB8fCB0aGlzLmRlZmluaXRpb25Jbk5vZGUpICYmIHRoaXMuZGVmaW5pdGlvbikge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgaW5mb3JtYXRpb24gYWJvdXQgc3RvcmUgbm9kZSBpcyBrbm93biwgb3Igd2UgbG9hZCBhbGwgZGF0YSBmcm9tIHN0b3JlXHJcbiAgICAgICAgICAgIC8vIFdlIGJ1aWxkIHRoZSBkZWZhdWx0IGRhdGFcclxuICAgICAgICAgICAgZGVmYXVsdFN0YXRlRGF0YSA9IHRoaXMuX2J1aWxkRW1wdHlGcm9tRGVmaW5pdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgaW5mb3JtYXRpb24gYWJvdXQgc3RvcmUgbm9kZSBpcyBrbm93biwgd2Ugd3JhcHBlZCB0aGUgb2JqZWN0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmluaXRpb25Jbk5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTdGF0ZURhdGEgPSB7IFt0aGlzLmRlZmluaXRpb25Jbk5vZGVdOiBkZWZhdWx0U3RhdGVEYXRhIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBkZWVwIGNvbnNpZGVyICdudWxsJyBhcyB2YWx1ZSBhbmQgdGhlcmVmb3JlIHdpbnMgb3ZlciBkZWZhdWx0U3RhdGVEYXRhIGJlbG93XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3U3RhdGVbdGhpcy5kZWZpbml0aW9uSW5Ob2RlXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlW3RoaXMuZGVmaW5pdGlvbkluTm9kZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdlIGhhbmRsZSBzdG9yZS1sZXZlbCBkZWZhdWx0IGRhdGEgKG9iamVjdCB3aXRoIGtleSwgZm9yIG5vZGUgbmFtZSlcclxuICAgICAgICBpZiAodGhpcy5kZWZpbml0aW9uSW5Ob2RlIHx8IHRoaXMuZ2V0RGVmYXVsdFN0b3JlRGF0YSkge1xyXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IGRlZmF1bHRzRGVlcCh7fSwgbmV3U3RhdGUsIGRlZmF1bHRTdGF0ZURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2Ugd2FudCB0byBwaWNrIG9ubHkgc29tZSBub2RlcyAmIHJlZmVyZW5jZSBub2Rlc1xyXG4gICAgICAgIGlmIChoYXNGaWx0ZXIpIHtcclxuICAgICAgICAgICAgLy8gV2UgdGFrZSBhbGwgcmVmZXJlbmNlcyBpbiBhZGRpdGlvbiB0byBnaXZlbiBub2RlXHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0gcGljayhuZXdTdGF0ZSwgKGZpbHRlck5vZGVzQXJnIHx8IFtdKS5jb25jYXQodGhpcy5yZWZlcmVuY2VOYW1lcyB8fCBbXSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29tcHV0ZWRTdGF0ZSA9IGFzc2lnbih0aGlzLl9jb21wdXRlRW50aXR5RnJvbVN0b3Jlc0RhdGEobmV3U3RhdGUpLCB0aGlzLl9nZXRMb2FkaW5nU3RhdGVGcm9tU3RvcmVzKCkpO1xyXG5cclxuICAgICAgICAvLyBGaXJzdCBlbmNvdW50ZXJlZCBrZXkgd2luc1xyXG4gICAgICAgIHJldHVybiAhaGFzRmlsdGVyICYmICF0aGlzLmRlZmluaXRpb25Jbk5vZGUgJiYgIXRoaXMuZ2V0RGVmYXVsdFN0b3JlRGF0YVxyXG4gICAgICAgICAgICA/IGRlZmF1bHRzRGVlcCh7fSwgY29tcHV0ZWRTdGF0ZSwgZGVmYXVsdFN0YXRlRGF0YSlcclxuICAgICAgICAgICAgOiBjb21wdXRlZFN0YXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZXJyb3Igc3RhdGUgaW5mb3JtYXRpb25zIGZyb20gdGhlIHN0b3JlLlxyXG4gICAgICogQHJldHVybnMge29iamVjdH0gLSBUaGUganMgZXJyb3Igb2JqZWN0IGNvbnN0cnVjdGVkIGZyb20gdGhlIHN0b3JlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIF9nZXRFcnJvclN0YXRlRnJvbVN0b3JlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRFcnJvclN0YXRlRnJvbVN0b3JlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVycm9yU3RhdGVGcm9tU3RvcmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge307XHJcbiAgICAgICAgdGhpcy5zdG9yZXMuZm9yRWFjaChzdG9yZUNvbmYgPT4ge1xyXG4gICAgICAgICAgICBzdG9yZUNvbmYucHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yU3RhdGUgPSBzdG9yZUNvbmYuc3RvcmVbYGdldEVycm9yJHtjYXBpdGFsaXplKHByb3BlcnR5KX1gXSgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBlcnJvclN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGVbYCR7cHJvcGVydHl9LiR7cHJvcH1gXSA9IGVycm9yU3RhdGVbcHJvcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGQgb2JqZWN0IHdpdGggbnVsbCB2YWx1ZXMgZm9yIGVhY2gga2V5IG9mIGRlZmluaXRpb24uXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBFbXB0eSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIF9idWlsZEVtcHR5RnJvbURlZmluaXRpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVpbGRFbXB0eUZyb21EZWZpbml0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRW1wdHlGcm9tRGVmaW5pdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGVmaW5pdGlvbilcclxuICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBrZXkpID0+ICgoX19JU19WRVJUSUdPX18gfHwgdGhpcy5wYXJ0aWFsT2JqZWN0KSAmJiAhdGhpcy5yZWZzW2Ake3RoaXMuZGVmaW5pdGlvblBhdGh9LiR7a2V5fWBdID8gYWNjIDogeyAuLi5hY2MsIFtrZXldOiBudWxsIH0pLCB7fSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpc0xvYWRpbmcgc3RhdGUgZnJvbSAgYWxsIHRoZSBzdG9yZS5cclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFRoZSBvYmplY3Qgd2l0aCBpc0xvYWRpbmcga2V5IHNldC5cclxuICAgICAqL1xyXG4gICAgX2dldExvYWRpbmdTdGF0ZUZyb21TdG9yZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TG9hZGluZ1N0YXRlRnJvbVN0b3Jlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRMb2FkaW5nU3RhdGVGcm9tU3RvcmVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdG9yZXMuZm9yRWFjaCgoc3RvcmVDb25mKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZUNvbmYucHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BTdGF0dXMgPSBzdG9yZUNvbmYuc3RvcmUuZ2V0U3RhdHVzKHByb3BlcnR5KSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nID0gcHJvcFN0YXR1cy5pc0xvYWRpbmcgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaXNMb2FkaW5nIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcHV0ZSB0aGUgZGF0YSBnaXZlbiBmcm9tIHRoZSBzdG9yZXMuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSBvcmRlcmVkIGJ5IHN0b3JlLlxyXG4gICAgICogQHJldHVybnMge29iamVjdH0gVGhlIGpzIG9iamVjdCB0cmFuc2Zvcm1lZCBmcm9tIHN0b3JlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIF9jb21wdXRlRW50aXR5RnJvbVN0b3Jlc0RhdGEoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXB1dGVFbnRpdHlGcm9tU3RvcmVzRGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wdXRlRW50aXR5RnJvbVN0b3Jlc0RhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbnRpdHkgPSB7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZToge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZmVyZW5jZU5hbWVzICYmIHRoaXMucmVmZXJlbmNlTmFtZXMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgZW50aXR5LnJlZmVyZW5jZVtrZXldID0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGQgPSBkYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShkKSB8fCAhaXNPYmplY3QoZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkID0geyBba2V5XTogZCB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXNzaWduKGVudGl0eSwgZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbnRpdHk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYWxsIHRoZSBsaXN0ZW5lcnMgcmVsYXRlZCB0byB0aGUgcGFnZS5cclxuICAgICAqL1xyXG4gICAgX3JlZ2lzdGVyTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0b3Jlcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3Jlcy5mb3JFYWNoKChzdG9yZUNvbmYpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0b3JlQ29uZi5wcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkUmVtb3ZlU2luZ2xlTGlzdGVuZXIoJ2FkZCcsIHN0b3JlQ29uZi5zdG9yZSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFVucmVnaXN0ZXIgYWxsIHRoZSBsaXN0ZW5lcnMgcmVsYXRlZCB0byB0aGUgcGFnZS5cclxuICAgICovXHJcbiAgICBfdW5SZWdpc3Rlckxpc3RlbmVycygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdG9yZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZXMuZm9yRWFjaCgoc3RvcmVDb25mKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZUNvbmYucHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZFJlbW92ZVNpbmdsZUxpc3RlbmVyKCdyZW1vdmUnLCBzdG9yZUNvbmYuc3RvcmUsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG9yIHJlbW92ZSBvbiBsaXN0ZW5lci5cclxuICAgICAqIEBwYXJhbSB7Kn0gYWN0aW9uIEFkZCBvciByZW1vdmUgb3BlcmF0aW9uLlxyXG4gICAgICogQHBhcmFtIHsqfSBzdG9yZSAgU3RvcmUgdG8gb3BlcmF0ZSBvbi5cclxuICAgICAqIEBwYXJhbSB7Kn0gcHJvcGVydHkgTm9kZSB0byBvcGVyYXRlIG9uLlxyXG4gICAgICovXHJcbiAgICBfYWRkUmVtb3ZlU2luZ2xlTGlzdGVuZXIoYWN0aW9uLCBzdG9yZSwgcHJvcGVydHkpIHtcclxuICAgICAgICBpZiAoIXN0b3JlIHx8ICFzdG9yZS5kZWZpbml0aW9uIHx8ICFzdG9yZS5kZWZpbml0aW9uW3Byb3BlcnR5XSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSAke2FjdGlvbn0gYSBwcm9wZXJ0eSA6ICR7cHJvcGVydHl9IGluIHlvdXIgc3RvcmUgc3Vic2NyaXB0aW9uIGZvciAke3N0b3JlLm5hbWUgfHwgc3RvcmUuaWRlbnRpZmllcn0gd2hpY2ggaXMgbm90IGluIHlvdXIgZGVmaW5pdGlvbiA6ICR7T2JqZWN0LmtleXMoc3RvcmUuZGVmaW5pdGlvbil9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JlW2Ake2FjdGlvbn0ke2NhcGl0YWxpemUocHJvcGVydHkpfUNoYW5nZUxpc3RlbmVyYF0odGhpcy5fb25TdG9yZUNoYW5nZSk7XHJcbiAgICAgICAgc3RvcmVbYCR7YWN0aW9ufSR7Y2FwaXRhbGl6ZShwcm9wZXJ0eSl9RXJyb3JMaXN0ZW5lcmBdKHRoaXMuX29uU3RvcmVFcnJvcik7XHJcbiAgICAgICAgc3RvcmVbYCR7YWN0aW9ufSR7Y2FwaXRhbGl6ZShwcm9wZXJ0eSl9U3RhdHVzTGlzdGVuZXJgXSh0aGlzLl9vblN0b3JlU3RhdHVzKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBsaXN0ZW5lZCBub2RlLlxyXG4gICAgICogQHBhcmFtIHsqfSBzdG9yZSBTdG9yZSB0byBsaXN0ZW4gdG8uXHJcbiAgICAgKiBAcGFyYW0geyp9IHByb3BlcnR5IE5vZGUgdG8gbGlzdGVuIHRvLlxyXG4gICAgICovXHJcbiAgICBhZGRTdG9yZVN1YihzdG9yZSwgcHJvcGVydHkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RvcmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdG9yZUluZGV4ID0gZmluZEluZGV4KHRoaXMuc3RvcmVzLCBlbHQgPT4gZWx0LnN0b3JlID09PSBzdG9yZSk7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdDb25mID0gc3RvcmVJbmRleCA9PT0gLTEgPyBudWxsIDogdGhpcy5zdG9yZXNbc3RvcmVJbmRleF07XHJcblxyXG4gICAgICAgIGlmIChleGlzdGluZ0NvbmYgJiYgZXhpc3RpbmdDb25mLnByb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gU3RvcmUvTm9kZSB0dXBsZSBhbHJlYWR5IGxpc3RlbmVkLlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYWRkUmVtb3ZlU2luZ2xlTGlzdGVuZXIoJ2FkZCcsIHN0b3JlLCBwcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgIGlmIChleGlzdGluZ0NvbmYpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdDb25mLnByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBzdG9yZSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IFtwcm9wZXJ0eV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIGxpc3RlbmVkIG5vZGUuXHJcbiAgICAgKiBAcGFyYW0geyp9IHN0b3JlIFN0b3JlIHRvIHVubGlzdGVuIHRvLlxyXG4gICAgICogQHBhcmFtIHsqfSBwcm9wZXJ0eSBOb2RlIHRvIHVubGlzdGVuIHRvLlxyXG4gICAgICovXHJcbiAgICByZW1vdmVTdG9yZVN1YihzdG9yZSwgcHJvcGVydHkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RvcmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdG9yZUluZGV4ID0gZmluZEluZGV4KHRoaXMuc3RvcmVzLCBlbHQgPT4gZWx0LnN0b3JlID09PSBzdG9yZSk7XHJcbiAgICAgICAgaWYgKHN0b3JlSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ29uZiA9IHRoaXMuc3RvcmVzW3N0b3JlSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnR5SW5kZXggPSBleGlzdGluZ0NvbmYucHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KTtcclxuICAgICAgICBpZiAocHJvcGVydHlJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYWRkUmVtb3ZlU2luZ2xlTGlzdGVuZXIoJ3JlbW92ZScsIHN0b3JlLCBwcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgIGV4aXN0aW5nQ29uZi5wcm9wZXJ0aWVzLnNwbGljZShwcm9wZXJ0eUluZGV4LCAxKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmdDb25mLnByb3BlcnRpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmVzLnNwbGljZShzdG9yZUluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVNaXhpbjtcclxuIl19