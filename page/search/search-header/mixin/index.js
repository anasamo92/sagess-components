'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionBuilder = require('sagess-core/search/action-builder');

var _actionBuilder2 = _interopRequireDefault(_actionBuilder);

var _builtInStore = require('sagess-core/search/built-in-store');

var _searchBar = require('../../../..//search/search-bar');

var _referenceBehaviour = require('../../../..//common/form/mixin/reference-behaviour');

var _referenceBehaviour2 = _interopRequireDefault(_referenceBehaviour);

var _storeBehaviour = require('../../../..//common/mixin/store-behaviour');

var _storeBehaviour2 = _interopRequireDefault(_storeBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_referenceBehaviour2.default, _storeBehaviour2.default],
    referenceNames: ['scopes'],
    getDefaultProps: function getDefaultProps() {
        return {
            service: undefined,
            store: _builtInStore.advancedSearchStore,
            onSearchCriteriaChange: undefined,
            onSearchCriteriaChangeByUser: undefined,
            scopeName: undefined
        };
    },
    getInitialState: function getInitialState() {
        return {
            isLoading: false
        };
    },
    componentWillMount: function componentWillMount() {
        var _this = this;

        this._action = this.props.action || (0, _actionBuilder2.default)({
            service: this.props.service,
            identifier: this.props.store.identifier,
            getSearchOptions: function getSearchOptions() {
                return _this.props.store.getValue.call(_this.props.store);
            } // Binding the store in the function call
        });
        this.props.store.addQueryChangeListener(this._onSearchCriteriaChange);
        this.props.store.addScopeChangeListener(this._onSearchCriteriaChange);
    },
    componentWillReceiveProps: function componentWillReceiveProps(_ref) {
        var store = _ref.store,
            service = _ref.service,
            action = _ref.action;

        if (store.identifier !== this.props.store.identifier) {
            this._action = action || (0, _actionBuilder2.default)({
                service: service,
                identifier: store.identifier,
                getSearchOptions: function getSearchOptions() {
                    return store.getValue.call(store);
                } // Binding the store in the function call
            });

            this.props.store.removeQueryChangeListener(this._onSearchCriteriaChange);
            this.props.store.removeScopeChangeListener(this._onSearchCriteriaChange);

            store.addQueryChangeListener(this._onSearchCriteriaChange);
            store.addScopeChangeListener(this._onSearchCriteriaChange);
        }
    },
    componentWillUnmount: function componentWillUnmount() {
        this.props.store.removeQueryChangeListener(this._onSearchCriteriaChange);
        this.props.store.removeScopeChangeListener(this._onSearchCriteriaChange);
    },
    _onSearchCriteriaChange: function _onSearchCriteriaChange() {
        var onSearchCriteriaChange = this.props.onSearchCriteriaChange;

        if (onSearchCriteriaChange) {
            onSearchCriteriaChange();
        }
    },
    _SearchBarComponent: function _SearchBarComponent() {
        var _props = this.props,
            helpTranslationPath = _props.helpTranslationPath,
            minChar = _props.minChar,
            onSearchCriteriaChangeByUser = _props.onSearchCriteriaChangeByUser,
            placeholder = _props.placeholder,
            store = _props.store,
            scopeName = _props.scopeName,
            keepProperties = _props.keepProperties;
        var _state = this.state,
            isLoading = _state.isLoading,
            datalist = _state.reference[scopeName ? scopeName : 'scopes'];

        return _react2.default.createElement(_searchBar.component, {
            action: this._action,
            helpTranslationPath: helpTranslationPath,
            loading: isLoading,
            minChar: minChar,
            placeholder: placeholder,
            ref: 'searchBar',
            scopes: datalist,
            store: store,
            onSearchCriteriaChangeByUser: onSearchCriteriaChangeByUser,
            keepProperties: keepProperties
        });
    }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibWl4aW5zIiwicmVmZXJlbmNlQmVoYXZpb3VyIiwic3RvcmVCZWhhdmlvdXIiLCJyZWZlcmVuY2VOYW1lcyIsImdldERlZmF1bHRQcm9wcyIsInNlcnZpY2UiLCJ1bmRlZmluZWQiLCJzdG9yZSIsImFkdmFuY2VkU2VhcmNoU3RvcmUiLCJvblNlYXJjaENyaXRlcmlhQ2hhbmdlIiwib25TZWFyY2hDcml0ZXJpYUNoYW5nZUJ5VXNlciIsInNjb3BlTmFtZSIsImdldEluaXRpYWxTdGF0ZSIsImlzTG9hZGluZyIsImNvbXBvbmVudFdpbGxNb3VudCIsIl9hY3Rpb24iLCJwcm9wcyIsImFjdGlvbiIsImlkZW50aWZpZXIiLCJnZXRTZWFyY2hPcHRpb25zIiwiZ2V0VmFsdWUiLCJjYWxsIiwiYWRkUXVlcnlDaGFuZ2VMaXN0ZW5lciIsIl9vblNlYXJjaENyaXRlcmlhQ2hhbmdlIiwiYWRkU2NvcGVDaGFuZ2VMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJyZW1vdmVRdWVyeUNoYW5nZUxpc3RlbmVyIiwicmVtb3ZlU2NvcGVDaGFuZ2VMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiX1NlYXJjaEJhckNvbXBvbmVudCIsImhlbHBUcmFuc2xhdGlvblBhdGgiLCJtaW5DaGFyIiwicGxhY2Vob2xkZXIiLCJrZWVwUHJvcGVydGllcyIsInN0YXRlIiwiZGF0YWxpc3QiLCJyZWZlcmVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDWEEsWUFBUSxDQUFDQyw0QkFBRCxFQUFxQkMsd0JBQXJCLENBREc7QUFFWEMsb0JBQWdCLENBQUMsUUFBRCxDQUZMO0FBR1hDLG1CQUhXLDZCQUdPO0FBQ2QsZUFBTztBQUNIQyxxQkFBU0MsU0FETjtBQUVIQyxtQkFBT0MsaUNBRko7QUFHSEMsb0NB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QXdCLFFBRnZDOztBQUdsQixlQUNJLDhCQUFDLG9CQUFEO0FBQ0ksb0JBQVEsS0FBS0ksT0FEakI7QUFFSSxpQ0FBcUJlLG1CQUZ6QjtBQUdJLHFCQUFTakIsU0FIYjtBQUlJLHFCQUFTa0IsT0FKYjtBQUtJLHlCQUFhQyxXQUxqQjtBQU1JLGlCQUFJLFdBTlI7QUFPSSxvQkFBUUcsUUFQWjtBQVFJLG1CQUFPNUIsS0FSWDtBQVNJLDBDQUE4QkcsNEJBVGxDO0FBVUksNEJBQWdCdUI7QUFWcEIsVUFESjtBQWNIO0FBcEVVLEMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBhY3Rpb25CdWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL3NlYXJjaC9hY3Rpb24tYnVpbGRlcic7XG5pbXBvcnQgeyBhZHZhbmNlZFNlYXJjaFN0b3JlIH0gZnJvbSAnc2FnZXNzLWNvcmUvc2VhcmNoL2J1aWx0LWluLXN0b3JlJztcblxuaW1wb3J0IHsgY29tcG9uZW50IGFzIFNlYXJjaEJhciB9IGZyb20gJy4uLy4uLy4uLy4uLy9zZWFyY2gvc2VhcmNoLWJhcic7XG5pbXBvcnQgcmVmZXJlbmNlQmVoYXZpb3VyIGZyb20gJy4uLy4uLy4uLy4uLy9jb21tb24vZm9ybS9taXhpbi9yZWZlcmVuY2UtYmVoYXZpb3VyJztcbmltcG9ydCBzdG9yZUJlaGF2aW91ciBmcm9tICcuLi8uLi8uLi8uLi8vY29tbW9uL21peGluL3N0b3JlLWJlaGF2aW91cic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtyZWZlcmVuY2VCZWhhdmlvdXIsIHN0b3JlQmVoYXZpb3VyXSxcbiAgICByZWZlcmVuY2VOYW1lczogWydzY29wZXMnXSxcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXJ2aWNlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdG9yZTogYWR2YW5jZWRTZWFyY2hTdG9yZSxcbiAgICAgICAgICAgIG9uU2VhcmNoQ3JpdGVyaWFDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9uU2VhcmNoQ3JpdGVyaWFDaGFuZ2VCeVVzZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNjb3BlTmFtZTogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2FjdGlvbiA9IHRoaXMucHJvcHMuYWN0aW9uIHx8IGFjdGlvbkJ1aWxkZXIoe1xuICAgICAgICAgICAgc2VydmljZTogdGhpcy5wcm9wcy5zZXJ2aWNlLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogdGhpcy5wcm9wcy5zdG9yZS5pZGVudGlmaWVyLFxuICAgICAgICAgICAgZ2V0U2VhcmNoT3B0aW9uczogKCkgPT4geyByZXR1cm4gdGhpcy5wcm9wcy5zdG9yZS5nZXRWYWx1ZS5jYWxsKHRoaXMucHJvcHMuc3RvcmUpOyB9IC8vIEJpbmRpbmcgdGhlIHN0b3JlIGluIHRoZSBmdW5jdGlvbiBjYWxsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmFkZFF1ZXJ5Q2hhbmdlTGlzdGVuZXIodGhpcy5fb25TZWFyY2hDcml0ZXJpYUNoYW5nZSk7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuYWRkU2NvcGVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblNlYXJjaENyaXRlcmlhQ2hhbmdlKTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyBzdG9yZSwgc2VydmljZSwgYWN0aW9uIH0pIHtcbiAgICAgICAgaWYgKHN0b3JlLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuc3RvcmUuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgdGhpcy5fYWN0aW9uID0gYWN0aW9uIHx8IGFjdGlvbkJ1aWxkZXIoe1xuICAgICAgICAgICAgICAgIHNlcnZpY2U6IHNlcnZpY2UsXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcjogc3RvcmUuaWRlbnRpZmllcixcbiAgICAgICAgICAgICAgICBnZXRTZWFyY2hPcHRpb25zOiAoKSA9PiB7IHJldHVybiBzdG9yZS5nZXRWYWx1ZS5jYWxsKHN0b3JlKTsgfSAvLyBCaW5kaW5nIHRoZSBzdG9yZSBpbiB0aGUgZnVuY3Rpb24gY2FsbFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUucmVtb3ZlUXVlcnlDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblNlYXJjaENyaXRlcmlhQ2hhbmdlKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUucmVtb3ZlU2NvcGVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblNlYXJjaENyaXRlcmlhQ2hhbmdlKTtcblxuICAgICAgICAgICAgc3RvcmUuYWRkUXVlcnlDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblNlYXJjaENyaXRlcmlhQ2hhbmdlKTtcbiAgICAgICAgICAgIHN0b3JlLmFkZFNjb3BlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TZWFyY2hDcml0ZXJpYUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnJlbW92ZVF1ZXJ5Q2hhbmdlTGlzdGVuZXIodGhpcy5fb25TZWFyY2hDcml0ZXJpYUNoYW5nZSk7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUucmVtb3ZlU2NvcGVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblNlYXJjaENyaXRlcmlhQ2hhbmdlKTtcbiAgICB9LFxuICAgIF9vblNlYXJjaENyaXRlcmlhQ2hhbmdlKCkge1xuICAgICAgICBjb25zdCB7IG9uU2VhcmNoQ3JpdGVyaWFDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvblNlYXJjaENyaXRlcmlhQ2hhbmdlKSB7XG4gICAgICAgICAgICBvblNlYXJjaENyaXRlcmlhQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIF9TZWFyY2hCYXJDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgaGVscFRyYW5zbGF0aW9uUGF0aCwgbWluQ2hhciwgb25TZWFyY2hDcml0ZXJpYUNoYW5nZUJ5VXNlciwgcGxhY2Vob2xkZXIsIHN0b3JlLCBzY29wZU5hbWUsIGtlZXBQcm9wZXJ0aWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGlzTG9hZGluZywgcmVmZXJlbmNlOiB7IFtzY29wZU5hbWUgPyBzY29wZU5hbWUgOiAnc2NvcGVzJ106IGRhdGFsaXN0IH0gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLl9hY3Rpb259XG4gICAgICAgICAgICAgICAgaGVscFRyYW5zbGF0aW9uUGF0aD17aGVscFRyYW5zbGF0aW9uUGF0aH1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgbWluQ2hhcj17bWluQ2hhcn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgcmVmPSdzZWFyY2hCYXInXG4gICAgICAgICAgICAgICAgc2NvcGVzPXtkYXRhbGlzdH1cbiAgICAgICAgICAgICAgICBzdG9yZT17c3RvcmV9XG4gICAgICAgICAgICAgICAgb25TZWFyY2hDcml0ZXJpYUNoYW5nZUJ5VXNlcj17b25TZWFyY2hDcml0ZXJpYUNoYW5nZUJ5VXNlcn1cbiAgICAgICAgICAgICAgICBrZWVwUHJvcGVydGllcz17a2VlcFByb3BlcnRpZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn07XG4iXX0=