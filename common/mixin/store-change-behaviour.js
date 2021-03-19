'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message = require('sagess-core/message');

var _message2 = _interopRequireDefault(_message);

var _application = require('sagess-core/application');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Behavior to update state according to stores.
 */
var changeBehaviourMixin = {

    /** @inheritdoc */
    getInitialState: function getInitialState() {
        return {};
    },


    /** @inheritdoc */
    componentWillMount: function componentWillMount() {
        this._isMountedChangeBehaviourMixin = false;
        this._pendingActionsChangeBehaviourMixin = [];
    },


    /** @inheritdoc */
    componentDidMount: function componentDidMount() {
        this._isMountedChangeBehaviourMixin = true;
        this._pendingActionsChangeBehaviourMixin.forEach(function (func) {
            return func();
        });
        this._pendingActionsChangeBehaviourMixin = [];
    },


    /** @inheritdoc */
    componentWillUnmount: function componentWillUnmount() {
        this._isMountedChangeBehaviourMixin = false;
    },


    /**
    * Display a message when there is a change on a store property resulting from a component action call.
    * @param  {object} changeInfos - An object containing all the event informations, without the data.
    * @return {function} - An override function can be called.
    */
    _displayMessageOnChange: function _displayMessageOnChange(changeInfos) {
        if (this.displayMessageOnChange) {
            return this.displayMessageOnChange(changeInfos);
        }

        if (changeInfos && changeInfos.status && changeInfos.status.name) {
            switch (changeInfos.status.name) {
                case 'loading':
                case 'loaded':
                case 'saving':
                    break;
                case 'saved':
                    //Maybe the action result or the event should have a caller notion.
                    _message2.default.addSuccessMessage('detail.saved');
                    //Change the page mode as edit
                    this.setState({ isEdit: false }, function () {
                        (0, _application.changeMode)('consult', 'edit');
                    });
                    break;
                default:
                    break;
            }
        }
    },


    /**
    * After change informations.
    * You can override this method using afterChange function.
    * @param {object} changeInfos - All informations relative to the change.
    * @returns {undefined} -  The return value is the callback.
    */
    _afterStoreChange: function _afterStoreChange(changeInfos) {
        var _this = this;

        if (this._isMountedChangeBehaviourMixin) {
            this._afterStoreChangeWrapped(changeInfos);
        } else {
            this._pendingActionsChangeBehaviourMixin.push(function () {
                return _this._afterChangeWrapped(changeInfos);
            });
        }
    },


    /**
    * After change informations.
    * You can override this method using afterChange function.
    * @param {object} changeInfos - All informations relative to the change.
    * @returns {undefined} -  The return value is the callback.
    */
    _afterStoreChangeWrapped: function _afterStoreChangeWrapped(changeInfos) {
        if (this.afterChange) {
            return this.afterChange(changeInfos);
        }

        //If there is no callerId in the event, the display message does not have any sens.
        //Other component responding to the store property change does not need to react on it.
        if (changeInfos && changeInfos.informations && changeInfos.informations.callerId && this._identifier === changeInfos.informations.callerId) {
            return this._displayMessageOnChange(changeInfos);
        }
    },


    /**
    * Event handler for 'change' events coming from the stores
    * @param {object} changeInfos - The changing informations.
    * @param {object} changeInfos The changing informations.
    */
    _onStoreChange: function _onStoreChange(changeInfos) {
        var _this2 = this;

        if (this._isMountedChangeBehaviourMixin) {
            this._onStoreChangeWrapped(changeInfos);
        } else {
            this._pendingActionsChangeBehaviourMixin.push(function () {
                return _this2._onStoreChangeWrapped(changeInfos);
            });
        }
    },


    /**
    * Event handler for 'change' events coming from the stores
    * @param {object} changeInfos - The changing informations.
    * @param {object} changeInfos The changing informations.
    */
    _onStoreChangeWrapped: function _onStoreChangeWrapped(changeInfos) {
        var _this3 = this;

        var onStoreChange = this.props.onStoreChange || this.onStoreChange;
        if (onStoreChange) {
            onStoreChange.call(this, changeInfos);
        }

        this.setState(this._getStateFromStores([changeInfos.property]), function () {
            return _this3._afterStoreChange(changeInfos);
        });
    },


    /**
    * Event handler for 'error' events coming from the stores.
    * @param {object} changeInfos The changing informations.
    */
    _onStoreError: function _onStoreError(changeInfos) {
        var _this4 = this;

        if (this._isMountedChangeBehaviourMixin) {
            this._onStoreErrorWrapped(changeInfos);
        } else {
            this._pendingActionsChangeBehaviourMixin.push(function () {
                return _this4._onStoreErrorWrapped(changeInfos);
            });
        }
    },


    /**
    * Event handler for 'error' events coming from the stores.
    * @param {object} changeInfos The changing informations.
    */
    _onStoreErrorWrapped: function _onStoreErrorWrapped(changeInfos) {
        var _this5 = this;

        this.setState(this._getLoadingStateFromStores(), function () {
            return _this5._handleErrors(changeInfos);
        }); // update errors after status
    },


    /**
     * Handle errors.
     */
    _handleErrors: function _handleErrors() {
        var _this6 = this;

        var errorState = this._getErrorStateFromStores();
        if (this.definitionPath) {
            var _loop = function _loop(key) {
                // Let's find that corresponding field, considering that the ref might not directly be 'storeNode.fieldName', but in fact 'entityPath.fieldName'
                if (_this6.refs) {
                    var refKey = Object.keys(_this6.refs).find(function (candidateRef) {
                        var candidate = candidateRef.replace(_this6.definitionPath + '.', ''); // Remove the 'definitionPath.'
                        return candidate === key.match(/([^\.]*)$/)[0]; // Look for the 'fieldName' part of 'storeNode.fieldName'
                    });

                    if (refKey) {
                        // If we found it, then bingo
                        _this6.refs[refKey].setError(errorState[key]);
                    }
                }
            };

            // In case we have a definitionPath, we might want to trigger a setError on the corresponding field
            for (var key in errorState) {
                _loop(key);
            }
        }
    },


    /**
       * Read
       * @param  {[type]} changeInfos [description]
       */
    _onStoreStatus: function _onStoreStatus(changeInfos) {
        var _this7 = this;

        if (this._isMountedChangeBehaviourMixin) {
            this._onStoreStatusWrapped(changeInfos);
        } else {
            this._pendingActionsChangeBehaviourMixin.push(function () {
                return _this7._onStoreStatusWrapped(changeInfos);
            });
        }
    },


    /**
       * Read
       * @param  {[type]} changeInfos [description]
       */
    _onStoreStatusWrapped: function _onStoreStatusWrapped(changeInfos) {
        if (this._getEntity) {
            this.setState(Object.assign({}, this._getEntity(), this._getLoadingStateFromStores()));
        } else {
            this.setState(this._getLoadingStateFromStores());
        }
    }
};

exports.default = changeBehaviourMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY2hhbmdlQmVoYXZpb3VyTWl4aW4iLCJnZXRJbml0aWFsU3RhdGUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJfaXNNb3VudGVkQ2hhbmdlQmVoYXZpb3VyTWl4aW4iLCJfcGVuZGluZ0FjdGlvbnNDaGFuZ2VCZWhhdmlvdXJNaXhpbiIsImNvbXBvbmVudERpZE1vdW50IiwiZm9yRWFjaCIsImZ1bmMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIl9kaXNwbGF5TWVzc2FnZU9uQ2hhbmdlIiwiY2hhbmdlSW5mb3MiLCJkaXNwbGF5TWVzc2FnZU9uQ2hhbmdlIiwic3RhdHVzIiwibmFtZSIsIm1lc3NhZ2UiLCJhZGRTdWNjZXNzTWVzc2FnZSIsInNldFN0YXRlIiwiaXNFZGl0IiwiX2FmdGVyU3RvcmVDaGFuZ2UiLCJfYWZ0ZXJTdG9yZUNoYW5nZVdyYXBwZWQiLCJwdXNoIiwiX2FmdGVyQ2hhbmdlV3JhcHBlZCIsImFmdGVyQ2hhbmdlIiwiaW5mb3JtYXRpb25zIiwiY2FsbGVySWQiLCJfaWRlbnRpZmllciIsIl9vblN0b3JlQ2hhbmdlIiwiX29uU3RvcmVDaGFuZ2VXcmFwcGVkIiwib25TdG9yZUNoYW5nZSIsInByb3BzIiwiY2FsbCIsIl9nZXRTdGF0ZUZyb21TdG9yZXMiLCJwcm9wZXJ0eSIsIl9vblN0b3JlRXJyb3IiLCJfb25TdG9yZUVycm9yV3JhcHBlZCIsIl9nZXRMb2FkaW5nU3RhdGVGcm9tU3RvcmVzIiwiX2hhbmRsZUVycm9ycyIsImVycm9yU3RhdGUiLCJfZ2V0RXJyb3JTdGF0ZUZyb21TdG9yZXMiLCJkZWZpbml0aW9uUGF0aCIsImtleSIsInJlZnMiLCJyZWZLZXkiLCJPYmplY3QiLCJrZXlzIiwiZmluZCIsImNhbmRpZGF0ZSIsImNhbmRpZGF0ZVJlZiIsInJlcGxhY2UiLCJtYXRjaCIsInNldEVycm9yIiwiX29uU3RvcmVTdGF0dXMiLCJfb25TdG9yZVN0YXR1c1dyYXBwZWQiLCJfZ2V0RW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7OztBQUdBLElBQU1BLHVCQUF1Qjs7QUFFekI7QUFDQUMsbUJBSHlCLDZCQUdQO0FBQ2QsZUFBTyxFQUFQO0FBQ0gsS0FMd0I7OztBQU96QjtBQUNBQyxzQkFSeUIsZ0NBUUo7QUFDakIsYUFBS0MsOEJBQUwsR0FBc0MsS0FBdEM7QUFDQSxhQUFLQyxtQ0FBTCxHQUEyQyxFQUEzQztBQUNILEtBWHdCOzs7QUFhekI7QUFDQUMscUJBZHlCLCtCQWNMO0FBQ2hCLGFBQUtGLDhCQUFMLEdBQXNDLElBQXRDO0FBQ0EsYUFBS0MsbUNBQUwsQ0FBeUNFLE9BQXpDLENBQWlEO0FBQUEsbUJBQVFDLE1BQVI7QUFBQSxTQUFqRDtBQUNBLGFBQUtILG1DQUFMLEdBQTJDLEVBQTNDO0FBQ0gsS0FsQndCOzs7QUFvQnpCO0FBQ0FJLHdCQXJCeUIsa0NBcUJGO0FBQ25CLGFBQUtMLDhCQUFMLEdBQXNDLEtBQXRDO0FBQ0gsS0F2QndCOzs7QUF5QnpCOzs7OztBQUtBTSwyQkE5QnlCLG1DQThCREMsV0E5QkMsRUE4Qlk7QUFDakMsWUFBSSxLQUFLQyxzQkFBVCxFQUFpQztBQUM3QixtQkFBTyxLQUFLQSxzQkFBTCxDQUE0QkQsV0FBNUIsQ0FBUDtBQUNIOztBQUVELFlBQUlBLGVBQWVBLFlBQVlFLE1BQTNCLElBQXFDRixZQUFZRSxNQUFaLENBQW1CQyxJQUE1RCxFQUFrRTtBQUM5RCxvQkFBUUgsWUFBWUUsTUFBWixDQUFtQkMsSUFBM0I7QUFDSSxxQkFBSyxTQUFMO0FBQ0EscUJBQUssUUFBTDtBQUNBLHFCQUFLLFFBQUw7QUFDSTtBQUNKLHFCQUFLLE9BQUw7QUFDSTtBQUNBQyxzQ0FBUUMsaUJBQVIsQ0FBMEIsY0FBMUI7QUFDQTtBQUNBLHlCQUFLQyxRQUFMLENBQWMsRUFBRUMsUUFBUSxLQUFWLEVBQWQsRUFBaUMsWUFBTTtBQUNuQyxxREFBVyxTQUFYLEVBQXNCLE1BQXRCO0FBQ0gscUJBRkQ7QUFHQTtBQUNKO0FBQ0k7QUFkUjtBQWdCSDtBQUNKLEtBckR3Qjs7O0FBdUR6Qjs7Ozs7O0FBTUFDLHFCQTdEeUIsNkJBNkRQUixXQTdETyxFQTZETTtBQUFBOztBQUMzQixZQUFJLEtBQUtQLDhCQUFULEVBQXlDO0FBQ3JDLGlCQUFLZ0Isd0JBQUwsQ0FBOEJULFdBQTlCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsaUJBQUtOLG1DQUFMLENBQXlDZ0IsSUFBekMsQ0FBOEM7QUFBQSx1QkFBTSxNQUFLQyxtQkFBTCxDQUF5QlgsV0FBekIsQ0FBTjtBQUFBLGFBQTlDO0FBQ0g7QUFDSixLQW5Fd0I7OztBQXFFekI7Ozs7OztBQU1BUyw0QkEzRXlCLG9DQTJFQVQsV0EzRUEsRUEyRWE7QUFDbEMsWUFBSSxLQUFLWSxXQUFULEVBQXNCO0FBQ2xCLG1CQUFPLEtBQUtBLFdBQUwsQ0FBaUJaLFdBQWpCLENBQVA7QUFDSDs7QUFFRDtBQUNBO0FBQ0EsWUFBSUEsZUFBZUEsWUFBWWEsWUFBM0IsSUFBMkNiLFlBQVlhLFlBQVosQ0FBeUJDLFFBQXBFLElBQWdGLEtBQUtDLFdBQUwsS0FBcUJmLFlBQVlhLFlBQVosQ0FBeUJDLFFBQWxJLEVBQTRJO0FBQ3hJLG1CQUFPLEtBQUtmLHVCQUFMLENBQTZCQyxXQUE3QixDQUFQO0FBQ0g7QUFDSixLQXJGd0I7OztBQXVGekI7Ozs7O0FBS0FnQixrQkE1RnlCLDBCQTRGVmhCLFdBNUZVLEVBNEZHO0FBQUE7O0FBQ3hCLFlBQUksS0FBS1AsOEJBQVQsRUFBeUM7QUFDckMsaUJBQUt3QixxQkFBTCxDQUEyQmpCLFdBQTNCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsaUJBQUtOLG1DQUFMLENBQXlDZ0IsSUFBekMsQ0FBOEM7QUFBQSx1QkFBTSxPQUFLTyxxQkFBTCxDQUEyQmpCLFdBQTNCLENBQU47QUFBQSxhQUE5QztBQUNIO0FBQ0osS0FsR3dCOzs7QUFvR3pCOzs7OztBQUtBaUIseUJBekd5QixpQ0F5R0hqQixXQXpHRyxFQXlHVTtBQUFBOztBQUMvQixZQUFJa0IsZ0JBQWdCLEtBQUtDLEtBQUwsQ0FBV0QsYUFBWCxJQUE0QixLQUFLQSxhQUFyRDtBQUNBLFlBQUlBLGFBQUosRUFBbUI7QUFDZkEsMEJBQWNFLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUJwQixXQUF6QjtBQUNIOztBQUVELGFBQUtNLFFBQUwsQ0FBYyxLQUFLZSxtQkFBTCxDQUF5QixDQUFDckIsWUFBWXNCLFFBQWIsQ0FBekIsQ0FBZCxFQUFnRTtBQUFBLG1CQUFNLE9BQUtkLGlCQUFMLENBQXVCUixXQUF2QixDQUFOO0FBQUEsU0FBaEU7QUFDSCxLQWhId0I7OztBQWtIekI7Ozs7QUFJQXVCLGlCQXRIeUIseUJBc0hYdkIsV0F0SFcsRUFzSEU7QUFBQTs7QUFDdkIsWUFBSSxLQUFLUCw4QkFBVCxFQUF5QztBQUNyQyxpQkFBSytCLG9CQUFMLENBQTBCeEIsV0FBMUI7QUFDSCxTQUZELE1BRU87QUFDSCxpQkFBS04sbUNBQUwsQ0FBeUNnQixJQUF6QyxDQUE4QztBQUFBLHVCQUFNLE9BQUtjLG9CQUFMLENBQTBCeEIsV0FBMUIsQ0FBTjtBQUFBLGFBQTlDO0FBQ0g7QUFDSixLQTVId0I7OztBQThIekI7Ozs7QUFJQXdCLHdCQWxJeUIsZ0NBa0lKeEIsV0FsSUksRUFrSVM7QUFBQTs7QUFDOUIsYUFBS00sUUFBTCxDQUFjLEtBQUttQiwwQkFBTCxFQUFkLEVBQWlEO0FBQUEsbUJBQU0sT0FBS0MsYUFBTCxDQUFtQjFCLFdBQW5CLENBQU47QUFBQSxTQUFqRCxFQUQ4QixDQUMyRDtBQUM1RixLQXBJd0I7OztBQXNJekI7OztBQUdBMEIsaUJBekl5QiwyQkF5SVQ7QUFBQTs7QUFDWixZQUFNQyxhQUFhLEtBQUtDLHdCQUFMLEVBQW5CO0FBQ0EsWUFBSSxLQUFLQyxjQUFULEVBQXlCO0FBQUEsdUNBRVpDLEdBRlk7QUFHakI7QUFDQSxvQkFBSSxPQUFLQyxJQUFULEVBQWU7QUFDWCx3QkFBTUMsU0FBU0MsT0FBT0MsSUFBUCxDQUFZLE9BQUtILElBQWpCLEVBQXVCSSxJQUF2QixDQUE0Qix3QkFBZ0I7QUFDdkQsNEJBQU1DLFlBQVlDLGFBQWFDLE9BQWIsQ0FBd0IsT0FBS1QsY0FBN0IsUUFBZ0QsRUFBaEQsQ0FBbEIsQ0FEdUQsQ0FDZ0I7QUFDdkUsK0JBQU9PLGNBQWNOLElBQUlTLEtBQUosQ0FBVSxXQUFWLEVBQXVCLENBQXZCLENBQXJCLENBRnVELENBRVI7QUFDbEQscUJBSGMsQ0FBZjs7QUFLQSx3QkFBSVAsTUFBSixFQUFZO0FBQUU7QUFDViwrQkFBS0QsSUFBTCxDQUFVQyxNQUFWLEVBQWtCUSxRQUFsQixDQUEyQmIsV0FBV0csR0FBWCxDQUEzQjtBQUNIO0FBQ0o7QUFiZ0I7O0FBQ3JCO0FBQ0EsaUJBQUssSUFBSUEsR0FBVCxJQUFnQkgsVUFBaEIsRUFBNEI7QUFBQSxzQkFBbkJHLEdBQW1CO0FBWTNCO0FBQ0o7QUFDSixLQTNKd0I7OztBQTZKNUI7Ozs7QUFJR1csa0JBakt5QiwwQkFpS1Z6QyxXQWpLVSxFQWlLRztBQUFBOztBQUN4QixZQUFJLEtBQUtQLDhCQUFULEVBQXlDO0FBQ3JDLGlCQUFLaUQscUJBQUwsQ0FBMkIxQyxXQUEzQjtBQUNILFNBRkQsTUFFTztBQUNILGlCQUFLTixtQ0FBTCxDQUF5Q2dCLElBQXpDLENBQThDO0FBQUEsdUJBQU0sT0FBS2dDLHFCQUFMLENBQTJCMUMsV0FBM0IsQ0FBTjtBQUFBLGFBQTlDO0FBQ0g7QUFDSixLQXZLd0I7OztBQXlLNUI7Ozs7QUFJRzBDLHlCQTdLeUIsaUNBNktIMUMsV0E3S0csRUE2S1U7QUFDL0IsWUFBSSxLQUFLMkMsVUFBVCxFQUFxQjtBQUNqQixpQkFBS3JDLFFBQUwsbUJBQW1CLEtBQUtxQyxVQUFMLEVBQW5CLEVBQXlDLEtBQUtsQiwwQkFBTCxFQUF6QztBQUNILFNBRkQsTUFFTztBQUNILGlCQUFLbkIsUUFBTCxDQUFjLEtBQUttQiwwQkFBTCxFQUFkO0FBRUg7QUFDSjtBQXBMd0IsQ0FBN0I7O2tCQXVMZW5DLG9CIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVzc2FnZSBmcm9tICdzYWdlc3MtY29yZS9tZXNzYWdlJztcbmltcG9ydCB7IGNoYW5nZU1vZGUgfSBmcm9tICdzYWdlc3MtY29yZS9hcHBsaWNhdGlvbic7XG5cbi8qKlxuICogQmVoYXZpb3IgdG8gdXBkYXRlIHN0YXRlIGFjY29yZGluZyB0byBzdG9yZXMuXG4gKi9cbmNvbnN0IGNoYW5nZUJlaGF2aW91ck1peGluID0ge1xuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5faXNNb3VudGVkQ2hhbmdlQmVoYXZpb3VyTWl4aW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ0FjdGlvbnNDaGFuZ2VCZWhhdmlvdXJNaXhpbiA9IFtdO1xuICAgIH0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5faXNNb3VudGVkQ2hhbmdlQmVoYXZpb3VyTWl4aW4gPSB0cnVlO1xuICAgICAgICB0aGlzLl9wZW5kaW5nQWN0aW9uc0NoYW5nZUJlaGF2aW91ck1peGluLmZvckVhY2goZnVuYyA9PiBmdW5jKCkpO1xuICAgICAgICB0aGlzLl9wZW5kaW5nQWN0aW9uc0NoYW5nZUJlaGF2aW91ck1peGluID0gW107XG4gICAgfSxcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9pc01vdW50ZWRDaGFuZ2VCZWhhdmlvdXJNaXhpbiA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIERpc3BsYXkgYSBtZXNzYWdlIHdoZW4gdGhlcmUgaXMgYSBjaGFuZ2Ugb24gYSBzdG9yZSBwcm9wZXJ0eSByZXN1bHRpbmcgZnJvbSBhIGNvbXBvbmVudCBhY3Rpb24gY2FsbC5cbiAgICAqIEBwYXJhbSAge29iamVjdH0gY2hhbmdlSW5mb3MgLSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGV2ZW50IGluZm9ybWF0aW9ucywgd2l0aG91dCB0aGUgZGF0YS5cbiAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSAtIEFuIG92ZXJyaWRlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQuXG4gICAgKi9cbiAgICBfZGlzcGxheU1lc3NhZ2VPbkNoYW5nZShjaGFuZ2VJbmZvcykge1xuICAgICAgICBpZiAodGhpcy5kaXNwbGF5TWVzc2FnZU9uQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5TWVzc2FnZU9uQ2hhbmdlKGNoYW5nZUluZm9zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VJbmZvcyAmJiBjaGFuZ2VJbmZvcy5zdGF0dXMgJiYgY2hhbmdlSW5mb3Muc3RhdHVzLm5hbWUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoY2hhbmdlSW5mb3Muc3RhdHVzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkaW5nJzpcbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkZWQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmluZyc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmVkJzpcbiAgICAgICAgICAgICAgICAgICAgLy9NYXliZSB0aGUgYWN0aW9uIHJlc3VsdCBvciB0aGUgZXZlbnQgc2hvdWxkIGhhdmUgYSBjYWxsZXIgbm90aW9uLlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmFkZFN1Y2Nlc3NNZXNzYWdlKCdkZXRhaWwuc2F2ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy9DaGFuZ2UgdGhlIHBhZ2UgbW9kZSBhcyBlZGl0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VkaXQ6IGZhbHNlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vZGUoJ2NvbnN1bHQnLCAnZWRpdCcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBBZnRlciBjaGFuZ2UgaW5mb3JtYXRpb25zLlxuICAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB1c2luZyBhZnRlckNoYW5nZSBmdW5jdGlvbi5cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBjaGFuZ2VJbmZvcyAtIEFsbCBpbmZvcm1hdGlvbnMgcmVsYXRpdmUgdG8gdGhlIGNoYW5nZS5cbiAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9IC0gIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGNhbGxiYWNrLlxuICAgICovXG4gICAgX2FmdGVyU3RvcmVDaGFuZ2UoY2hhbmdlSW5mb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTW91bnRlZENoYW5nZUJlaGF2aW91ck1peGluKSB7XG4gICAgICAgICAgICB0aGlzLl9hZnRlclN0b3JlQ2hhbmdlV3JhcHBlZChjaGFuZ2VJbmZvcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nQWN0aW9uc0NoYW5nZUJlaGF2aW91ck1peGluLnB1c2goKCkgPT4gdGhpcy5fYWZ0ZXJDaGFuZ2VXcmFwcGVkKGNoYW5nZUluZm9zKSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBBZnRlciBjaGFuZ2UgaW5mb3JtYXRpb25zLlxuICAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB1c2luZyBhZnRlckNoYW5nZSBmdW5jdGlvbi5cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBjaGFuZ2VJbmZvcyAtIEFsbCBpbmZvcm1hdGlvbnMgcmVsYXRpdmUgdG8gdGhlIGNoYW5nZS5cbiAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9IC0gIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGNhbGxiYWNrLlxuICAgICovXG4gICAgX2FmdGVyU3RvcmVDaGFuZ2VXcmFwcGVkKGNoYW5nZUluZm9zKSB7XG4gICAgICAgIGlmICh0aGlzLmFmdGVyQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZnRlckNoYW5nZShjaGFuZ2VJbmZvcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0lmIHRoZXJlIGlzIG5vIGNhbGxlcklkIGluIHRoZSBldmVudCwgdGhlIGRpc3BsYXkgbWVzc2FnZSBkb2VzIG5vdCBoYXZlIGFueSBzZW5zLlxuICAgICAgICAvL090aGVyIGNvbXBvbmVudCByZXNwb25kaW5nIHRvIHRoZSBzdG9yZSBwcm9wZXJ0eSBjaGFuZ2UgZG9lcyBub3QgbmVlZCB0byByZWFjdCBvbiBpdC5cbiAgICAgICAgaWYgKGNoYW5nZUluZm9zICYmIGNoYW5nZUluZm9zLmluZm9ybWF0aW9ucyAmJiBjaGFuZ2VJbmZvcy5pbmZvcm1hdGlvbnMuY2FsbGVySWQgJiYgdGhpcy5faWRlbnRpZmllciA9PT0gY2hhbmdlSW5mb3MuaW5mb3JtYXRpb25zLmNhbGxlcklkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlzcGxheU1lc3NhZ2VPbkNoYW5nZShjaGFuZ2VJbmZvcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBFdmVudCBoYW5kbGVyIGZvciAnY2hhbmdlJyBldmVudHMgY29taW5nIGZyb20gdGhlIHN0b3Jlc1xuICAgICogQHBhcmFtIHtvYmplY3R9IGNoYW5nZUluZm9zIC0gVGhlIGNoYW5naW5nIGluZm9ybWF0aW9ucy5cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBjaGFuZ2VJbmZvcyBUaGUgY2hhbmdpbmcgaW5mb3JtYXRpb25zLlxuICAgICovXG4gICAgX29uU3RvcmVDaGFuZ2UoY2hhbmdlSW5mb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTW91bnRlZENoYW5nZUJlaGF2aW91ck1peGluKSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0b3JlQ2hhbmdlV3JhcHBlZChjaGFuZ2VJbmZvcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nQWN0aW9uc0NoYW5nZUJlaGF2aW91ck1peGluLnB1c2goKCkgPT4gdGhpcy5fb25TdG9yZUNoYW5nZVdyYXBwZWQoY2hhbmdlSW5mb3MpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEV2ZW50IGhhbmRsZXIgZm9yICdjaGFuZ2UnIGV2ZW50cyBjb21pbmcgZnJvbSB0aGUgc3RvcmVzXG4gICAgKiBAcGFyYW0ge29iamVjdH0gY2hhbmdlSW5mb3MgLSBUaGUgY2hhbmdpbmcgaW5mb3JtYXRpb25zLlxuICAgICogQHBhcmFtIHtvYmplY3R9IGNoYW5nZUluZm9zIFRoZSBjaGFuZ2luZyBpbmZvcm1hdGlvbnMuXG4gICAgKi9cbiAgICBfb25TdG9yZUNoYW5nZVdyYXBwZWQoY2hhbmdlSW5mb3MpIHtcbiAgICAgICAgbGV0IG9uU3RvcmVDaGFuZ2UgPSB0aGlzLnByb3BzLm9uU3RvcmVDaGFuZ2UgfHwgdGhpcy5vblN0b3JlQ2hhbmdlO1xuICAgICAgICBpZiAob25TdG9yZUNoYW5nZSkge1xuICAgICAgICAgICAgb25TdG9yZUNoYW5nZS5jYWxsKHRoaXMsIGNoYW5nZUluZm9zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0U3RhdGVGcm9tU3RvcmVzKFtjaGFuZ2VJbmZvcy5wcm9wZXJ0eV0pLCAoKSA9PiB0aGlzLl9hZnRlclN0b3JlQ2hhbmdlKGNoYW5nZUluZm9zKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogRXZlbnQgaGFuZGxlciBmb3IgJ2Vycm9yJyBldmVudHMgY29taW5nIGZyb20gdGhlIHN0b3Jlcy5cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBjaGFuZ2VJbmZvcyBUaGUgY2hhbmdpbmcgaW5mb3JtYXRpb25zLlxuICAgICovXG4gICAgX29uU3RvcmVFcnJvcihjaGFuZ2VJbmZvcykge1xuICAgICAgICBpZiAodGhpcy5faXNNb3VudGVkQ2hhbmdlQmVoYXZpb3VyTWl4aW4pIHtcbiAgICAgICAgICAgIHRoaXMuX29uU3RvcmVFcnJvcldyYXBwZWQoY2hhbmdlSW5mb3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ0FjdGlvbnNDaGFuZ2VCZWhhdmlvdXJNaXhpbi5wdXNoKCgpID0+IHRoaXMuX29uU3RvcmVFcnJvcldyYXBwZWQoY2hhbmdlSW5mb3MpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEV2ZW50IGhhbmRsZXIgZm9yICdlcnJvcicgZXZlbnRzIGNvbWluZyBmcm9tIHRoZSBzdG9yZXMuXG4gICAgKiBAcGFyYW0ge29iamVjdH0gY2hhbmdlSW5mb3MgVGhlIGNoYW5naW5nIGluZm9ybWF0aW9ucy5cbiAgICAqL1xuICAgIF9vblN0b3JlRXJyb3JXcmFwcGVkKGNoYW5nZUluZm9zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0TG9hZGluZ1N0YXRlRnJvbVN0b3JlcygpLCAoKSA9PiB0aGlzLl9oYW5kbGVFcnJvcnMoY2hhbmdlSW5mb3MpKTsgLy8gdXBkYXRlIGVycm9ycyBhZnRlciBzdGF0dXNcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGVycm9ycy5cbiAgICAgKi9cbiAgICBfaGFuZGxlRXJyb3JzKCkge1xuICAgICAgICBjb25zdCBlcnJvclN0YXRlID0gdGhpcy5fZ2V0RXJyb3JTdGF0ZUZyb21TdG9yZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuZGVmaW5pdGlvblBhdGgpIHtcbiAgICAgICAgICAgIC8vIEluIGNhc2Ugd2UgaGF2ZSBhIGRlZmluaXRpb25QYXRoLCB3ZSBtaWdodCB3YW50IHRvIHRyaWdnZXIgYSBzZXRFcnJvciBvbiB0aGUgY29ycmVzcG9uZGluZyBmaWVsZFxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGVycm9yU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBMZXQncyBmaW5kIHRoYXQgY29ycmVzcG9uZGluZyBmaWVsZCwgY29uc2lkZXJpbmcgdGhhdCB0aGUgcmVmIG1pZ2h0IG5vdCBkaXJlY3RseSBiZSAnc3RvcmVOb2RlLmZpZWxkTmFtZScsIGJ1dCBpbiBmYWN0ICdlbnRpdHlQYXRoLmZpZWxkTmFtZSdcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWZzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZktleSA9IE9iamVjdC5rZXlzKHRoaXMucmVmcykuZmluZChjYW5kaWRhdGVSZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gY2FuZGlkYXRlUmVmLnJlcGxhY2UoYCR7dGhpcy5kZWZpbml0aW9uUGF0aH0uYCwgJycpOyAvLyBSZW1vdmUgdGhlICdkZWZpbml0aW9uUGF0aC4nXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlID09PSBrZXkubWF0Y2goLyhbXlxcLl0qKSQvKVswXSAvLyBMb29rIGZvciB0aGUgJ2ZpZWxkTmFtZScgcGFydCBvZiAnc3RvcmVOb2RlLmZpZWxkTmFtZSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZktleSkgeyAvLyBJZiB3ZSBmb3VuZCBpdCwgdGhlbiBiaW5nb1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzW3JlZktleV0uc2V0RXJyb3IoZXJyb3JTdGF0ZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cblx0LyoqXG4gICAgKiBSZWFkXG4gICAgKiBAcGFyYW0gIHtbdHlwZV19IGNoYW5nZUluZm9zIFtkZXNjcmlwdGlvbl1cbiAgICAqL1xuICAgIF9vblN0b3JlU3RhdHVzKGNoYW5nZUluZm9zKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc01vdW50ZWRDaGFuZ2VCZWhhdmlvdXJNaXhpbikge1xuICAgICAgICAgICAgdGhpcy5fb25TdG9yZVN0YXR1c1dyYXBwZWQoY2hhbmdlSW5mb3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ0FjdGlvbnNDaGFuZ2VCZWhhdmlvdXJNaXhpbi5wdXNoKCgpID0+IHRoaXMuX29uU3RvcmVTdGF0dXNXcmFwcGVkKGNoYW5nZUluZm9zKSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG5cdC8qKlxuICAgICogUmVhZFxuICAgICogQHBhcmFtICB7W3R5cGVdfSBjaGFuZ2VJbmZvcyBbZGVzY3JpcHRpb25dXG4gICAgKi9cbiAgICBfb25TdG9yZVN0YXR1c1dyYXBwZWQoY2hhbmdlSW5mb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX2dldEVudGl0eSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuX2dldEVudGl0eSgpLCAuLi50aGlzLl9nZXRMb2FkaW5nU3RhdGVGcm9tU3RvcmVzKCkgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldExvYWRpbmdTdGF0ZUZyb21TdG9yZXMoKSk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlQmVoYXZpb3VyTWl4aW47XG4iXX0=