'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _builtInStore = require('sagess-core/reference/built-in-store');

var _builtInStore2 = _interopRequireDefault(_builtInStore);

var _builtInAction = require('sagess-core/reference/built-in-action');

var _builtInAction2 = _interopRequireDefault(_builtInAction);

var _difference = require('lodash/array/difference');

var _difference2 = _interopRequireDefault(_difference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var referenceMixin = {

    /** @inheritdoc */
    getInitialState: function getInitialState() {
        return { reference: {} };
    },


    /**
    * Build actions associated to the reference.
    */
    _buildReferenceActions: function _buildReferenceActions(referenceNames) {
        if (!this.action) {
            this.action = {};
        }
        this.action.loadReference = (0, _builtInAction2.default)(referenceNames);
    },
    _loadReference: function _loadReference() {
        return this.action.loadReference();
    },


    /**
    * Build the reference names and set the store into the application.
    */
    _buildReferenceStoreConfig: function _buildReferenceStoreConfig(referenceNames, oldReferenceNames) {
        var _this = this;

        var safeReferenceNames = referenceNames || [];
        var safeOldReferenceNames = oldReferenceNames || [];

        if (this.addStoreSub && this.removeStoreSub) {
            var toAdd = (0, _difference2.default)(safeReferenceNames, safeOldReferenceNames);
            var toDelete = (0, _difference2.default)(safeOldReferenceNames, safeReferenceNames);

            toAdd.forEach(function (name) {
                return _this.addStoreSub((0, _builtInStore2.default)(), name);
            });
            toDelete.forEach(function (name) {
                return _this.removeStoreSub((0, _builtInStore2.default)(), name);
            });
        } else {
            // LEGACY CODE : if ever some project uses reference-behaviour without store-behaviour
            if (!this.stores) {
                this.stores = [];
            }
            //Set as referencestore the referencestore of the application.
            this.stores.push({
                store: (0, _builtInStore2.default)(),
                properties: this.referenceNames
            });
        }
    },
    componentWillReceiveProps: function componentWillReceiveProps(_ref) {
        var referenceNames = _ref.referenceNames;

        if (referenceNames) {
            var shouldReload = (0, _difference2.default)(referenceNames, this.referenceNames).length > 0;
            this._buildReference(referenceNames, this.referenceNames);
            if (shouldReload) {
                this._loadReference();
            }
        }
    },


    /**
    * Build store and actions related to the reference.
    */
    _buildReference: function _buildReference(referenceNames, oldReferenceNames) {
        this._buildReferenceStoreConfig(referenceNames, oldReferenceNames);
        this._buildReferenceActions(referenceNames);
        this.referenceNames = referenceNames;
    },
    componentDidMount: function componentDidMount() {
        // Calling at didMount and not willMount to be coherent with old loadReference from form
        this._loadReference();
    },


    /** @inheritdoc */
    componentWillMount: function componentWillMount() {
        var referenceNames = this.props.referenceNames || this.referenceNames;
        this._buildReference(referenceNames);
    }
};

exports.default = referenceMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicmVmZXJlbmNlTWl4aW4iLCJnZXRJbml0aWFsU3RhdGUiLCJyZWZlcmVuY2UiLCJfYnVpbGRSZWZlcmVuY2VBY3Rpb25zIiwicmVmZXJlbmNlTmFtZXMiLCJhY3Rpb24iLCJsb2FkUmVmZXJlbmNlIiwiX2xvYWRSZWZlcmVuY2UiLCJfYnVpbGRSZWZlcmVuY2VTdG9yZUNvbmZpZyIsIm9sZFJlZmVyZW5jZU5hbWVzIiwic2FmZVJlZmVyZW5jZU5hbWVzIiwic2FmZU9sZFJlZmVyZW5jZU5hbWVzIiwiYWRkU3RvcmVTdWIiLCJyZW1vdmVTdG9yZVN1YiIsInRvQWRkIiwidG9EZWxldGUiLCJmb3JFYWNoIiwibmFtZSIsInN0b3JlcyIsInB1c2giLCJzdG9yZSIsInByb3BlcnRpZXMiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2hvdWxkUmVsb2FkIiwibGVuZ3RoIiwiX2J1aWxkUmVmZXJlbmNlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxpQkFBaUI7O0FBRW5CO0FBQ0FDLG1CQUhtQiw2QkFHRDtBQUNkLGVBQU8sRUFBRUMsV0FBVyxFQUFiLEVBQVA7QUFDSCxLQUxrQjs7O0FBT25COzs7QUFHQUMsMEJBVm1CLGtDQVVJQyxjQVZKLEVBVW9CO0FBQ25DLFlBQUksQ0FBQyxLQUFLQyxNQUFWLEVBQWtCO0FBQ2QsaUJBQUtBLE1BQUwsR0FBYyxFQUFkO0FBQ0g7QUFDRCxhQUFLQSxNQUFMLENBQVlDLGFBQVosR0FBNEIsNkJBQTZCRixjQUE3QixDQUE1QjtBQUNILEtBZmtCO0FBaUJuQkcsa0JBakJtQiw0QkFpQkY7QUFDYixlQUFPLEtBQUtGLE1BQUwsQ0FBWUMsYUFBWixFQUFQO0FBQ0gsS0FuQmtCOzs7QUFxQm5COzs7QUFHQUUsOEJBeEJtQixzQ0F3QlFKLGNBeEJSLEVBd0J3QkssaUJBeEJ4QixFQXdCMkM7QUFBQTs7QUFDMUQsWUFBTUMscUJBQXFCTixrQkFBa0IsRUFBN0M7QUFDQSxZQUFNTyx3QkFBd0JGLHFCQUFxQixFQUFuRDs7QUFFQSxZQUFJLEtBQUtHLFdBQUwsSUFBb0IsS0FBS0MsY0FBN0IsRUFBNkM7QUFDekMsZ0JBQU1DLFFBQVEsMEJBQVdKLGtCQUFYLEVBQStCQyxxQkFBL0IsQ0FBZDtBQUNBLGdCQUFNSSxXQUFXLDBCQUFXSixxQkFBWCxFQUFrQ0Qsa0JBQWxDLENBQWpCOztBQUVBSSxrQkFBTUUsT0FBTixDQUFjLFVBQUNDLElBQUQ7QUFBQSx1QkFBVSxNQUFLTCxXQUFMLENBQWlCLDZCQUFqQixFQUFnQ0ssSUFBaEMsQ0FBVjtBQUFBLGFBQWQ7QUFDQUYscUJBQVNDLE9BQVQsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLHVCQUFVLE1BQUtKLGNBQUwsQ0FBb0IsNkJBQXBCLEVBQW1DSSxJQUFuQyxDQUFWO0FBQUEsYUFBakI7QUFFSCxTQVBELE1BT087QUFDSDtBQUNBLGdCQUFJLENBQUMsS0FBS0MsTUFBVixFQUFrQjtBQUNkLHFCQUFLQSxNQUFMLEdBQWMsRUFBZDtBQUNIO0FBQ0Q7QUFDQSxpQkFBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCO0FBQ2JDLHVCQUFPLDZCQURNO0FBRWJDLDRCQUFZLEtBQUtqQjtBQUZKLGFBQWpCO0FBSUg7QUFDSixLQTlDa0I7QUFnRG5Ca0IsNkJBaERtQiwyQ0FnRDJCO0FBQUEsWUFBbEJsQixjQUFrQixRQUFsQkEsY0FBa0I7O0FBQzFDLFlBQUlBLGNBQUosRUFBb0I7QUFDaEIsZ0JBQU1tQixlQUFlLDBCQUFXbkIsY0FBWCxFQUEyQixLQUFLQSxjQUFoQyxFQUFnRG9CLE1BQWhELEdBQXlELENBQTlFO0FBQ0EsaUJBQUtDLGVBQUwsQ0FBcUJyQixjQUFyQixFQUFxQyxLQUFLQSxjQUExQztBQUNBLGdCQUFHbUIsWUFBSCxFQUFpQjtBQUNiLHFCQUFLaEIsY0FBTDtBQUNIO0FBQ0o7QUFDSixLQXhEa0I7OztBQTBEbkI7OztBQUdBa0IsbUJBN0RtQiwyQkE2REhyQixjQTdERyxFQTZEYUssaUJBN0RiLEVBNkRnQztBQUMvQyxhQUFLRCwwQkFBTCxDQUFnQ0osY0FBaEMsRUFBZ0RLLGlCQUFoRDtBQUNBLGFBQUtOLHNCQUFMLENBQTRCQyxjQUE1QjtBQUNBLGFBQUtBLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0gsS0FqRWtCO0FBbUVuQnNCLHFCQW5FbUIsK0JBbUVDO0FBQ2hCO0FBQ0EsYUFBS25CLGNBQUw7QUFDSCxLQXRFa0I7OztBQXdFbkI7QUFDQW9CLHNCQXpFbUIsZ0NBeUVFO0FBQ2pCLFlBQU12QixpQkFBaUIsS0FBS3dCLEtBQUwsQ0FBV3hCLGNBQVgsSUFBNkIsS0FBS0EsY0FBekQ7QUFDQSxhQUFLcUIsZUFBTCxDQUFxQnJCLGNBQXJCO0FBQ0g7QUE1RWtCLENBQXZCOztrQkErRWVKLGMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZUdldHRlciBmcm9tICdzYWdlc3MtY29yZS9yZWZlcmVuY2UvYnVpbHQtaW4tc3RvcmUnO1xuaW1wb3J0IGJ1aWx0SW5BY3Rpb25SZWZlcmVuY2VMb2FkZXIgZnJvbSAnc2FnZXNzLWNvcmUvcmVmZXJlbmNlL2J1aWx0LWluLWFjdGlvbic7XG5pbXBvcnQgZGlmZmVyZW5jZSBmcm9tICdsb2Rhc2gvYXJyYXkvZGlmZmVyZW5jZSc7XG5cbmNvbnN0IHJlZmVyZW5jZU1peGluID0ge1xuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4geyByZWZlcmVuY2U6IHt9IH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQnVpbGQgYWN0aW9ucyBhc3NvY2lhdGVkIHRvIHRoZSByZWZlcmVuY2UuXG4gICAgKi9cbiAgICBfYnVpbGRSZWZlcmVuY2VBY3Rpb25zKHJlZmVyZW5jZU5hbWVzKSB7XG4gICAgICAgIGlmICghdGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rpb24ubG9hZFJlZmVyZW5jZSA9IGJ1aWx0SW5BY3Rpb25SZWZlcmVuY2VMb2FkZXIocmVmZXJlbmNlTmFtZXMpO1xuICAgIH0sXG5cbiAgICBfbG9hZFJlZmVyZW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uLmxvYWRSZWZlcmVuY2UoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBCdWlsZCB0aGUgcmVmZXJlbmNlIG5hbWVzIGFuZCBzZXQgdGhlIHN0b3JlIGludG8gdGhlIGFwcGxpY2F0aW9uLlxuICAgICovXG4gICAgX2J1aWxkUmVmZXJlbmNlU3RvcmVDb25maWcocmVmZXJlbmNlTmFtZXMsIG9sZFJlZmVyZW5jZU5hbWVzKSB7XG4gICAgICAgIGNvbnN0IHNhZmVSZWZlcmVuY2VOYW1lcyA9IHJlZmVyZW5jZU5hbWVzIHx8IFtdO1xuICAgICAgICBjb25zdCBzYWZlT2xkUmVmZXJlbmNlTmFtZXMgPSBvbGRSZWZlcmVuY2VOYW1lcyB8fCBbXTtcblxuICAgICAgICBpZiAodGhpcy5hZGRTdG9yZVN1YiAmJiB0aGlzLnJlbW92ZVN0b3JlU3ViKSB7XG4gICAgICAgICAgICBjb25zdCB0b0FkZCA9IGRpZmZlcmVuY2Uoc2FmZVJlZmVyZW5jZU5hbWVzLCBzYWZlT2xkUmVmZXJlbmNlTmFtZXMpO1xuICAgICAgICAgICAgY29uc3QgdG9EZWxldGUgPSBkaWZmZXJlbmNlKHNhZmVPbGRSZWZlcmVuY2VOYW1lcywgc2FmZVJlZmVyZW5jZU5hbWVzKTtcblxuICAgICAgICAgICAgdG9BZGQuZm9yRWFjaCgobmFtZSkgPT4gdGhpcy5hZGRTdG9yZVN1YihzdG9yZUdldHRlcigpLCBuYW1lKSk7XG4gICAgICAgICAgICB0b0RlbGV0ZS5mb3JFYWNoKChuYW1lKSA9PiB0aGlzLnJlbW92ZVN0b3JlU3ViKHN0b3JlR2V0dGVyKCksIG5hbWUpKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTEVHQUNZIENPREUgOiBpZiBldmVyIHNvbWUgcHJvamVjdCB1c2VzIHJlZmVyZW5jZS1iZWhhdmlvdXIgd2l0aG91dCBzdG9yZS1iZWhhdmlvdXJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdG9yZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9TZXQgYXMgcmVmZXJlbmNlc3RvcmUgdGhlIHJlZmVyZW5jZXN0b3JlIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIHRoaXMuc3RvcmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHN0b3JlOiBzdG9yZUdldHRlcigpLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMucmVmZXJlbmNlTmFtZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyByZWZlcmVuY2VOYW1lcyB9KSB7XG4gICAgICAgIGlmIChyZWZlcmVuY2VOYW1lcykge1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkUmVsb2FkID0gZGlmZmVyZW5jZShyZWZlcmVuY2VOYW1lcywgdGhpcy5yZWZlcmVuY2VOYW1lcykubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIHRoaXMuX2J1aWxkUmVmZXJlbmNlKHJlZmVyZW5jZU5hbWVzLCB0aGlzLnJlZmVyZW5jZU5hbWVzKTtcbiAgICAgICAgICAgIGlmKHNob3VsZFJlbG9hZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRSZWZlcmVuY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEJ1aWxkIHN0b3JlIGFuZCBhY3Rpb25zIHJlbGF0ZWQgdG8gdGhlIHJlZmVyZW5jZS5cbiAgICAqL1xuICAgIF9idWlsZFJlZmVyZW5jZShyZWZlcmVuY2VOYW1lcywgb2xkUmVmZXJlbmNlTmFtZXMpIHtcbiAgICAgICAgdGhpcy5fYnVpbGRSZWZlcmVuY2VTdG9yZUNvbmZpZyhyZWZlcmVuY2VOYW1lcywgb2xkUmVmZXJlbmNlTmFtZXMpO1xuICAgICAgICB0aGlzLl9idWlsZFJlZmVyZW5jZUFjdGlvbnMocmVmZXJlbmNlTmFtZXMpO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZU5hbWVzID0gcmVmZXJlbmNlTmFtZXM7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvLyBDYWxsaW5nIGF0IGRpZE1vdW50IGFuZCBub3Qgd2lsbE1vdW50IHRvIGJlIGNvaGVyZW50IHdpdGggb2xkIGxvYWRSZWZlcmVuY2UgZnJvbSBmb3JtXG4gICAgICAgIHRoaXMuX2xvYWRSZWZlcmVuY2UoKTtcbiAgICB9LFxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VOYW1lcyA9IHRoaXMucHJvcHMucmVmZXJlbmNlTmFtZXMgfHwgdGhpcy5yZWZlcmVuY2VOYW1lcztcbiAgICAgICAgdGhpcy5fYnVpbGRSZWZlcmVuY2UocmVmZXJlbmNlTmFtZXMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZmVyZW5jZU1peGluO1xuIl19