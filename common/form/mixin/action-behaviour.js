'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _omit = require('lodash/object/omit');

var _omit2 = _interopRequireDefault(_omit);

var _focusException = require('sagess-core/exception/focus-exception');

var _focusException2 = _interopRequireDefault(_focusException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionMixin = {

    /**
     * Get the entity identifier for the form loading.
     * @returns {object} - The identifier of the entity.
     */
    _getId: function _getId() {
        if (this.getId) {
            return this.getId();
        }
        return this.state.id;
    },

    /**
     * Get a clean state to send data to the server.
     * @returns {object} - The state json cleanded
     */
    _getCleanState: function _getCleanState() {
        return (0, _omit2.default)(this.state, ['reference', 'isLoading', 'isEdit']);
    },

    /**
     * Compute the entity read from the html givent the keys and the definition Path, this operation is reversed from the _computeEntityFromStore operation.
     * @param {object} htmlData - Data read from the html form.
     * @returns {object} - The computed entity from html.
     */
    _computeEntityFromHtml: function _computeEntityFromHtml(htmlData) {
        var DEF = this.definitionPath + '.';
        var EMPTY = '';
        var computedEntity = {};
        for (var prop in htmlData) {
            computedEntity[prop.replace(DEF, EMPTY)] = htmlData[prop];
        }
        return computedEntity;
    },

    /**
     * Get entity from the state, and the HTML.
     * @return {object} - Combinaison of state and HTML builded entity.
     */
    _getEntityFromHTMLAndState: function _getEntityFromHTMLAndState() {
        //Build the entity value from the ref getVaue.
        var htmlData = {};
        var refs = this.refs;

        for (var r in refs) {
            //If the reference has a getValue function if is read.
            if (refs[r] && (0, _isFunction2.default)(refs[r].getValue)) {
                htmlData[r] = refs[r].getValue();
            }
        }
        //Maybe a merge cold be done if we need a deeper property merge.
        return (0, _objectAssign2.default)({}, this._getCleanState(), this._computeEntityFromHtml(htmlData));
    },

    /**
     * Get the constructed entity from the state.
     * If you need to perform a custom getEntity just write a getEntity function in your mixin.
     * @returns {object} - the entity informations.
     */
    _getEntity: function _getEntity() {
        if (this.getEntity) {
            return this.getEntity();
        }
        return this._getEntityFromHTMLAndState();
    },

    /**
     * This is the load action of the form.
     */
    _loadData: function _loadData() {
        if (!this.action || !(0, _isFunction2.default)(this.action.load)) {
            throw new _focusException2.default('It seems your form component does not have a load action, and your props is set to hasLoad={true}.', this);
        }
        this.action.load.call(this, this._getId());
    },
    clearError: function clearError() {
        for (var r in this.refs) {
            //If the reference has a getValue function if is read.
            if (this.refs[r] && (0, _isFunction2.default)(this.refs[r].setError)) {
                this.refs[r].setError(undefined);
            }
        }
    }
};

exports.default = actionMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiYWN0aW9uTWl4aW4iLCJfZ2V0SWQiLCJnZXRJZCIsInN0YXRlIiwiaWQiLCJfZ2V0Q2xlYW5TdGF0ZSIsIl9jb21wdXRlRW50aXR5RnJvbUh0bWwiLCJodG1sRGF0YSIsIkRFRiIsImRlZmluaXRpb25QYXRoIiwiRU1QVFkiLCJjb21wdXRlZEVudGl0eSIsInByb3AiLCJyZXBsYWNlIiwiX2dldEVudGl0eUZyb21IVE1MQW5kU3RhdGUiLCJyZWZzIiwiciIsImdldFZhbHVlIiwiX2dldEVudGl0eSIsImdldEVudGl0eSIsIl9sb2FkRGF0YSIsImFjdGlvbiIsImxvYWQiLCJGb2N1c0V4Y2VwdGlvbiIsImNhbGwiLCJjbGVhckVycm9yIiwic2V0RXJyb3IiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFJQSxjQUFjOztBQUVkOzs7O0FBSUFDLFVBTmMsb0JBTUw7QUFDTCxZQUFJLEtBQUtDLEtBQVQsRUFBZ0I7QUFDWixtQkFBTyxLQUFLQSxLQUFMLEVBQVA7QUFDSDtBQUNELGVBQU8sS0FBS0MsS0FBTCxDQUFXQyxFQUFsQjtBQUNILEtBWGE7O0FBWWQ7Ozs7QUFJQUMsa0JBaEJjLDRCQWdCRztBQUNiLGVBQU8sb0JBQUssS0FBS0YsS0FBVixFQUFpQixDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLFFBQTNCLENBQWpCLENBQVA7QUFDSCxLQWxCYTs7QUFtQmQ7Ozs7O0FBS0FHLDBCQXhCYyxrQ0F3QlNDLFFBeEJULEVBd0JtQjtBQUM3QixZQUFNQyxNQUFTLEtBQUtDLGNBQWQsTUFBTjtBQUNBLFlBQU1DLFFBQVEsRUFBZDtBQUNBLFlBQUlDLGlCQUFpQixFQUFyQjtBQUNBLGFBQUssSUFBSUMsSUFBVCxJQUFpQkwsUUFBakIsRUFBMkI7QUFDdkJJLDJCQUFlQyxLQUFLQyxPQUFMLENBQWFMLEdBQWIsRUFBa0JFLEtBQWxCLENBQWYsSUFBMkNILFNBQVNLLElBQVQsQ0FBM0M7QUFDSDtBQUNELGVBQU9ELGNBQVA7QUFDSCxLQWhDYTs7QUFpQ2Q7Ozs7QUFJQUcsOEJBckNjLHdDQXFDZTtBQUN6QjtBQUNBLFlBQUlQLFdBQVcsRUFBZjtBQUZ5QixZQUduQlEsSUFIbUIsR0FHVixJQUhVLENBR25CQSxJQUhtQjs7QUFJekIsYUFBSyxJQUFJQyxDQUFULElBQWNELElBQWQsRUFBb0I7QUFDaEI7QUFDQSxnQkFBSUEsS0FBS0MsQ0FBTCxLQUFXLDBCQUFXRCxLQUFLQyxDQUFMLEVBQVFDLFFBQW5CLENBQWYsRUFBNkM7QUFDekNWLHlCQUFTUyxDQUFULElBQWNELEtBQUtDLENBQUwsRUFBUUMsUUFBUixFQUFkO0FBQ0g7QUFDSjtBQUNEO0FBQ0EsZUFBTyw0QkFBTyxFQUFQLEVBQVcsS0FBS1osY0FBTCxFQUFYLEVBQWtDLEtBQUtDLHNCQUFMLENBQTRCQyxRQUE1QixDQUFsQyxDQUFQO0FBQ0gsS0FqRGE7O0FBa0RkOzs7OztBQUtBVyxjQXZEYyx3QkF1REQ7QUFDVCxZQUFJLEtBQUtDLFNBQVQsRUFBb0I7QUFDaEIsbUJBQU8sS0FBS0EsU0FBTCxFQUFQO0FBQ0g7QUFDRCxlQUFPLEtBQUtMLDBCQUFMLEVBQVA7QUFDSCxLQTVEYTs7QUE2RGQ7OztBQUdBTSxhQWhFYyx1QkFnRUY7QUFDUixZQUFJLENBQUMsS0FBS0MsTUFBTixJQUFnQixDQUFDLDBCQUFXLEtBQUtBLE1BQUwsQ0FBWUMsSUFBdkIsQ0FBckIsRUFBbUQ7QUFDL0Msa0JBQU0sSUFBSUMsd0JBQUosQ0FBbUIsb0dBQW5CLEVBQXlILElBQXpILENBQU47QUFDSDtBQUNELGFBQUtGLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkUsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEIsS0FBS3ZCLE1BQUwsRUFBNUI7QUFDSCxLQXJFYTtBQXNFZHdCLGNBdEVjLHdCQXNFRDtBQUNULGFBQUssSUFBSVQsQ0FBVCxJQUFjLEtBQUtELElBQW5CLEVBQXlCO0FBQ3JCO0FBQ0EsZ0JBQUksS0FBS0EsSUFBTCxDQUFVQyxDQUFWLEtBQWdCLDBCQUFXLEtBQUtELElBQUwsQ0FBVUMsQ0FBVixFQUFhVSxRQUF4QixDQUFwQixFQUF1RDtBQUNuRCxxQkFBS1gsSUFBTCxDQUFVQyxDQUFWLEVBQWFVLFFBQWIsQ0FBc0JDLFNBQXRCO0FBQ0g7QUFDSjtBQUNKO0FBN0VhLENBQWxCOztrQkFnRmUzQixXIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuXG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvbGFuZy9pc0Z1bmN0aW9uJztcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vYmplY3Qvb21pdCc7XG5cbmltcG9ydCBGb2N1c0V4Y2VwdGlvbiBmcm9tICdzYWdlc3MtY29yZS9leGNlcHRpb24vZm9jdXMtZXhjZXB0aW9uJztcblxubGV0IGFjdGlvbk1peGluID0ge1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBlbnRpdHkgaWRlbnRpZmllciBmb3IgdGhlIGZvcm0gbG9hZGluZy5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIFRoZSBpZGVudGlmaWVyIG9mIHRoZSBlbnRpdHkuXG4gICAgICovXG4gICAgX2dldElkKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pZDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCBhIGNsZWFuIHN0YXRlIHRvIHNlbmQgZGF0YSB0byB0aGUgc2VydmVyLlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gVGhlIHN0YXRlIGpzb24gY2xlYW5kZWRcbiAgICAgKi9cbiAgICBfZ2V0Q2xlYW5TdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG9taXQodGhpcy5zdGF0ZSwgWydyZWZlcmVuY2UnLCAnaXNMb2FkaW5nJywgJ2lzRWRpdCddKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENvbXB1dGUgdGhlIGVudGl0eSByZWFkIGZyb20gdGhlIGh0bWwgZ2l2ZW50IHRoZSBrZXlzIGFuZCB0aGUgZGVmaW5pdGlvbiBQYXRoLCB0aGlzIG9wZXJhdGlvbiBpcyByZXZlcnNlZCBmcm9tIHRoZSBfY29tcHV0ZUVudGl0eUZyb21TdG9yZSBvcGVyYXRpb24uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGh0bWxEYXRhIC0gRGF0YSByZWFkIGZyb20gdGhlIGh0bWwgZm9ybS5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIFRoZSBjb21wdXRlZCBlbnRpdHkgZnJvbSBodG1sLlxuICAgICAqL1xuICAgIF9jb21wdXRlRW50aXR5RnJvbUh0bWwoaHRtbERhdGEpIHtcbiAgICAgICAgY29uc3QgREVGID0gYCR7dGhpcy5kZWZpbml0aW9uUGF0aH0uYDtcbiAgICAgICAgY29uc3QgRU1QVFkgPSAnJztcbiAgICAgICAgbGV0IGNvbXB1dGVkRW50aXR5ID0ge307XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gaHRtbERhdGEpIHtcbiAgICAgICAgICAgIGNvbXB1dGVkRW50aXR5W3Byb3AucmVwbGFjZShERUYsIEVNUFRZKV0gPSBodG1sRGF0YVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcHV0ZWRFbnRpdHk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgZW50aXR5IGZyb20gdGhlIHN0YXRlLCBhbmQgdGhlIEhUTUwuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAtIENvbWJpbmFpc29uIG9mIHN0YXRlIGFuZCBIVE1MIGJ1aWxkZWQgZW50aXR5LlxuICAgICAqL1xuICAgIF9nZXRFbnRpdHlGcm9tSFRNTEFuZFN0YXRlKCkge1xuICAgICAgICAvL0J1aWxkIHRoZSBlbnRpdHkgdmFsdWUgZnJvbSB0aGUgcmVmIGdldFZhdWUuXG4gICAgICAgIGxldCBodG1sRGF0YSA9IHt9O1xuICAgICAgICBsZXQgeyByZWZzIH0gPSB0aGlzO1xuICAgICAgICBmb3IgKGxldCByIGluIHJlZnMpIHtcbiAgICAgICAgICAgIC8vSWYgdGhlIHJlZmVyZW5jZSBoYXMgYSBnZXRWYWx1ZSBmdW5jdGlvbiBpZiBpcyByZWFkLlxuICAgICAgICAgICAgaWYgKHJlZnNbcl0gJiYgaXNGdW5jdGlvbihyZWZzW3JdLmdldFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGh0bWxEYXRhW3JdID0gcmVmc1tyXS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vTWF5YmUgYSBtZXJnZSBjb2xkIGJlIGRvbmUgaWYgd2UgbmVlZCBhIGRlZXBlciBwcm9wZXJ0eSBtZXJnZS5cbiAgICAgICAgcmV0dXJuIGFzc2lnbih7fSwgdGhpcy5fZ2V0Q2xlYW5TdGF0ZSgpLCB0aGlzLl9jb21wdXRlRW50aXR5RnJvbUh0bWwoaHRtbERhdGEpKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29uc3RydWN0ZWQgZW50aXR5IGZyb20gdGhlIHN0YXRlLlxuICAgICAqIElmIHlvdSBuZWVkIHRvIHBlcmZvcm0gYSBjdXN0b20gZ2V0RW50aXR5IGp1c3Qgd3JpdGUgYSBnZXRFbnRpdHkgZnVuY3Rpb24gaW4geW91ciBtaXhpbi5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIHRoZSBlbnRpdHkgaW5mb3JtYXRpb25zLlxuICAgICAqL1xuICAgIF9nZXRFbnRpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEVudGl0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW50aXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEVudGl0eUZyb21IVE1MQW5kU3RhdGUoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIGxvYWQgYWN0aW9uIG9mIHRoZSBmb3JtLlxuICAgICAqL1xuICAgIF9sb2FkRGF0YSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbiB8fCAhaXNGdW5jdGlvbih0aGlzLmFjdGlvbi5sb2FkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEZvY3VzRXhjZXB0aW9uKCdJdCBzZWVtcyB5b3VyIGZvcm0gY29tcG9uZW50IGRvZXMgbm90IGhhdmUgYSBsb2FkIGFjdGlvbiwgYW5kIHlvdXIgcHJvcHMgaXMgc2V0IHRvIGhhc0xvYWQ9e3RydWV9LicsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aW9uLmxvYWQuY2FsbCh0aGlzLCB0aGlzLl9nZXRJZCgpKTtcbiAgICB9LFxuICAgIGNsZWFyRXJyb3IoKSB7XG4gICAgICAgIGZvciAobGV0IHIgaW4gdGhpcy5yZWZzKSB7XG4gICAgICAgICAgICAvL0lmIHRoZSByZWZlcmVuY2UgaGFzIGEgZ2V0VmFsdWUgZnVuY3Rpb24gaWYgaXMgcmVhZC5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnNbcl0gJiYgaXNGdW5jdGlvbih0aGlzLnJlZnNbcl0uc2V0RXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW3JdLnNldEVycm9yKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25NaXhpbjtcbiJdfQ==