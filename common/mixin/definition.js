'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _builder = require('sagess-core/definition/entity/builder');

var definitionMixin = {
    /**
    * Build the entity definition givent the path of the definition.
    */
    _buildDefinition: function _buildDefinition() {
        if (!this.definitionPath) {
            throw new Error('the definition path should be defined to know the domain of your entity property.');
        }
        this.definition = (0, _builder.getEntityInformations)(this.definitionPath, this.additionalDefinition);
    },

    /** @inheritdoc */
    componentWillMount: function componentWillMount() {
        this._buildDefinition();
    }
}; //Dependencies.
/**
* Accessor on the entity informations.
* @type {function} - Get the entity definition for a given key.
*/
exports.default = definitionMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGVmaW5pdGlvbk1peGluIiwiX2J1aWxkRGVmaW5pdGlvbiIsImRlZmluaXRpb25QYXRoIiwiRXJyb3IiLCJkZWZpbml0aW9uIiwiYWRkaXRpb25hbERlZmluaXRpb24iLCJjb21wb25lbnRXaWxsTW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOztBQUVBLElBQU1BLGtCQUFrQjtBQUNwQjs7O0FBR0FDLG9CQUpvQiw4QkFJRDtBQUNmLFlBQUksQ0FBQyxLQUFLQyxjQUFWLEVBQTBCO0FBQ3RCLGtCQUFNLElBQUlDLEtBQUosQ0FBVSxtRkFBVixDQUFOO0FBQ0g7QUFDRCxhQUFLQyxVQUFMLEdBQWtCLG9DQUFzQixLQUFLRixjQUEzQixFQUEyQyxLQUFLRyxvQkFBaEQsQ0FBbEI7QUFDSCxLQVRtQjs7QUFVcEI7QUFDQUMsc0JBWG9CLGdDQVdDO0FBQ2pCLGFBQUtMLGdCQUFMO0FBQ0g7QUFibUIsQ0FBeEIsQyxDQVBBO0FBQ0E7Ozs7a0JBc0JlRCxlIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0RlcGVuZGVuY2llcy5cbi8qKlxuKiBBY2Nlc3NvciBvbiB0aGUgZW50aXR5IGluZm9ybWF0aW9ucy5cbiogQHR5cGUge2Z1bmN0aW9ufSAtIEdldCB0aGUgZW50aXR5IGRlZmluaXRpb24gZm9yIGEgZ2l2ZW4ga2V5LlxuKi9cbmltcG9ydCB7IGdldEVudGl0eUluZm9ybWF0aW9ucyB9IGZyb20gJ3NhZ2Vzcy1jb3JlL2RlZmluaXRpb24vZW50aXR5L2J1aWxkZXInO1xuXG5jb25zdCBkZWZpbml0aW9uTWl4aW4gPSB7XG4gICAgLyoqXG4gICAgKiBCdWlsZCB0aGUgZW50aXR5IGRlZmluaXRpb24gZ2l2ZW50IHRoZSBwYXRoIG9mIHRoZSBkZWZpbml0aW9uLlxuICAgICovXG4gICAgX2J1aWxkRGVmaW5pdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRlZmluaXRpb25QYXRoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBkZWZpbml0aW9uIHBhdGggc2hvdWxkIGJlIGRlZmluZWQgdG8ga25vdyB0aGUgZG9tYWluIG9mIHlvdXIgZW50aXR5IHByb3BlcnR5LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IGdldEVudGl0eUluZm9ybWF0aW9ucyh0aGlzLmRlZmluaXRpb25QYXRoLCB0aGlzLmFkZGl0aW9uYWxEZWZpbml0aW9uKTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fYnVpbGREZWZpbml0aW9uKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5pdGlvbk1peGluO1xuIl19