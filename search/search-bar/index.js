'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _translation = require('sagess-core/translation');

var _actionWrapper = require('../../page/search/search-header/action-wrapper');

var _actionWrapper2 = _interopRequireDefault(_actionWrapper);

var _scope = require('./scope');

var _text = require('../../components/input/text');

var _text2 = _interopRequireDefault(_text);

var _stylable = require('../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* SearchBar component
* @type {Object}
*/
// Dependencies
var SearchBar = {
    mixins: [_stylable2.default],
    displayName: 'SearchBar',
    /**
    * Component default properties.
    * @return {Object} the default props.
    */
    getDefaultProps: function getDefaultProps() {
        return {
            placeholder: 'search.bar.placeholder',
            scopes: [],
            minChar: 0,
            loading: false,
            helpTranslationPath: 'search.bar.help',
            hasScopes: true,
            identifier: undefined,
            store: undefined,
            action: undefined,
            onSearchCriteriaChangeByUser: undefined,
            keepProperties: {
                groupingKey: false,
                sortBy: false,
                sortAsc: false
            }
        };
    },

    propTypes: {
        hasScopes: _react.PropTypes.bool,
        helpTranslationPath: _react.PropTypes.string,
        loading: _react.PropTypes.bool,
        minChar: _react.PropTypes.number,
        placeholder: _react.PropTypes.string,
        scopes: _react.PropTypes.array,
        value: _react.PropTypes.string,
        onSearchCriteriaChangeByUser: _react.PropTypes.func,
        keepProperties: _react.PropTypes.shape({
            groupingKey: _react.PropTypes.bool.isRequired,
            sortBy: _react.PropTypes.bool.isRequired,
            sortAsc: _react.PropTypes.bool.isRequired
        })
    },
    /**
    * Get the initial state
    * @return {Object} the initial state
    */
    getInitialState: function getInitialState() {
        return {
            loading: this.props.loading,
            scope: this.props.store.getScope(),
            query: this.props.store.getQuery()
        };
    },

    /**
    * Component did mount handler
    */
    componentDidMount: function componentDidMount() {
        this._focusQuery();
    },

    /**
    * Component will mount handler
    */
    componentWillMount: function componentWillMount() {
        this.props.store.addQueryChangeListener(this._onQueryChangeFromStore);
        this.props.store.addScopeChangeListener(this._onScopeChangeFromStore);
        this.props.store.addResultsChangeListener(this._onResultsChangeFromStore);
    },
    componentWillReceiveProps: function componentWillReceiveProps(_ref) {
        var store = _ref.store;

        if (store.identifier !== this.props.store.identifier) {
            this.props.store.removeQueryChangeListener(this._onQueryChangeFromStore);
            this.props.store.removeScopeChangeListener(this._onScopeChangeFromStore);
            this.props.store.removeResultsChangeListener(this._onResultsChangeFromStore);

            store.addQueryChangeListener(this._onQueryChangeFromStore);
            store.addScopeChangeListener(this._onScopeChangeFromStore);
            store.addResultsChangeListener(this._onResultsChangeFromStore);
        }
    },


    /**
    * Component did unmount handler
    */
    componentWillUnmount: function componentWillUnmount() {
        this.props.store.removeQueryChangeListener(this._onQueryChangeFromStore);
        this.props.store.removeScopeChangeListener(this._onScopeChangeFromStore);
        this.props.store.removeResultsChangeListener(this._onResultsChangeFromStore);
    },
    componentDidUpdate: function componentDidUpdate(_ref2) {
        var store = _ref2.store;

        if (store.identifier !== this.props.store.identifier) {
            this._onQueryChangeFromStore();
            this._onScopeChangeFromStore();
            this._onResultsChangeFromStore();
        }
    },

    /**
    * Query changed in store event handler
    */
    _onQueryChangeFromStore: function _onQueryChangeFromStore() {
        this.setState({
            query: this.props.store.getQuery()
        });
    },

    /**
    * Scope changed in store event handler
    */
    _onScopeChangeFromStore: function _onScopeChangeFromStore() {
        this.setState({
            scope: this.props.store.getScope()
        });
    },
    _onResultsChangeFromStore: function _onResultsChangeFromStore() {
        this.setState({ loading: false });
    },

    /**
    * Broadcast query change
    */
    _broadcastQueryChange: function _broadcastQueryChange() {
        var _this = this;

        (0, _actionWrapper2.default)(function () {
            _this.props.action.updateProperties({
                query: _this.refs.query.getValue()
            });
            _this.setState({
                loading: true
            });
        })();
    },

    /**
    * Input change handler
    * @param  {String} query the new query
    */
    _onInputChange: function _onInputChange(query) {
        this.setState({ query: query });
        var _props = this.props,
            minChar = _props.minChar,
            onSearchCriteriaChangeByUser = _props.onSearchCriteriaChangeByUser;

        if (query.length >= minChar) {
            this._broadcastQueryChange();
        }
        if (onSearchCriteriaChangeByUser) {
            onSearchCriteriaChangeByUser();
        }
    },

    /**
    * Scope selection handler
    * @param  {Object} scope selected scope
    */
    _onScopeSelection: function _onScopeSelection(scope) {
        this._focusQuery();
        var _props2 = this.props,
            action = _props2.action,
            onSearchCriteriaChangeByUser = _props2.onSearchCriteriaChangeByUser,
            _props2$keepPropertie = _props2.keepProperties,
            groupingKey = _props2$keepPropertie.groupingKey,
            sortBy = _props2$keepPropertie.sortBy,
            sortAsc = _props2$keepPropertie.sortAsc;

        var properties = {
            scope: scope,
            selectedFacets: {}
        };
        if (!groupingKey) {
            properties.groupingKey = undefined;
        }
        if (!sortBy) {
            properties.sortBy = undefined;
        }
        if (!sortAsc) {
            properties.sortAsc = true;
        }
        action.updateProperties(properties);
        this.setState({ scope: scope });
        if (onSearchCriteriaChangeByUser) {
            onSearchCriteriaChangeByUser();
        }
    },

    /**
    * Input key press handler
    * @param  {String} key pressed key
    */
    _handleInputKeyPress: function _handleInputKeyPress(_ref3) {
        var _this2 = this;

        var key = _ref3.key;

        if ('Enter' === key) {
            var onSearchCriteriaChangeByUser = this.props.onSearchCriteriaChangeByUser;

            (0, _actionWrapper2.default)(function () {
                _this2.props.action.updateProperties({
                    query: _this2.refs.query.getValue()
                });
            }, null, 0)();
            if (onSearchCriteriaChangeByUser) {
                onSearchCriteriaChangeByUser();
            }
        }
    },

    /**
    * Render help message
    * @return {HTML} rendered help message
    */
    _renderHelp: function _renderHelp() {
        return _react2.default.createElement(
            'div',
            { ref: 'help' },
            (0, _translation.translate)(this.props.helpTranslationPath)
        );
    },

    /**
    * Focus the query input field
    */
    _focusQuery: function _focusQuery() {
        _reactDom2.default.findDOMNode(this.refs.query).focus();
    },

    /**
    * Render the component.
    * @return {HTML} - The rendered component
    */
    render: function render() {
        var _props3 = this.props,
            hasScopes = _props3.hasScopes,
            scopes = _props3.scopes;
        var _state = this.state,
            loading = _state.loading,
            query = _state.query,
            scope = _state.scope;

        var placeholder = this.props.placeholder;
        if (query && 0 < query.length) {
            placeholder = '';
        }
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'search-bar' },
            hasScopes && _react2.default.createElement(_scope.component, { list: scopes, onScopeSelection: this._onScopeSelection, ref: 'scope', value: scope }),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'search-bar-input' },
                _react2.default.createElement(_text2.default, { name: 'searchbarinput', onChange: this._onInputChange, onKeyPress: this._handleInputKeyPress, placeholder: (0, _translation.translate)(placeholder), ref: 'query', value: query }),
                loading && _react2.default.createElement('div', { className: 'three-quarters-loader', 'data-role': 'spinner' })
            )
        );
    }
};

// Mixins


// Components

var _builder = (0, _builder3.default)(SearchBar),
    mixin = _builder.mixin,
    component = _builder.component;

exports.default = {
    mixin: mixin, component: component
};
exports.mixin = mixin;
exports.component = component;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwibWl4aW5zIiwic3R5bGFibGUiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInBsYWNlaG9sZGVyIiwic2NvcGVzIiwibWluQ2hhciIsImxvYWRpbmciLCJoZWxwVHJhbnNsYXRpb25QYXRoIiwiaGFzU2NvcGVzIiwiaWRlbnRpZmllciIsInVuZGVmaW5lZCIsInN0b3JlIiwiYWN0aW9uIiwib25TZWFyY2hDcml0ZXJpYUNoYW5nZUJ5VXNlciIsImtlZXBQcm9wZXJ0aWVzIiwiZ3JvdXBpbmdLZXkiLCJzb3J0QnkiLCJzb3J0QXNjIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsImFycmF5IiwidmFsdWUiLCJmdW5jIiwic2hhcGUiLCJpc1JlcXVpcmVkIiwiZ2V0SW5pdGlhbFN0YXRlIiwicHJvcHMiLCJzY29wZSIsImdldFNjb3BlIiwicXVlcnkiLCJnZXRRdWVyeSIsImNvbXBvbmVudERpZE1vdW50IiwiX2ZvY3VzUXVlcnkiLCJjb21wb25lbnRXaWxsTW91bnQiLCJhZGRRdWVyeUNoYW5nZUxpc3RlbmVyIiwiX29uUXVlcnlDaGFuZ2VGcm9tU3RvcmUiLCJhZGRTY29wZUNoYW5nZUxpc3RlbmVyIiwiX29uU2NvcGVDaGFuZ2VGcm9tU3RvcmUiLCJhZGRSZXN1bHRzQ2hhbmdlTGlzdGVuZXIiLCJfb25SZXN1bHRzQ2hhbmdlRnJvbVN0b3JlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInJlbW92ZVF1ZXJ5Q2hhbmdlTGlzdGVuZXIiLCJyZW1vdmVTY29wZUNoYW5nZUxpc3RlbmVyIiwicmVtb3ZlUmVzdWx0c0NoYW5nZUxpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJzZXRTdGF0ZSIsIl9icm9hZGNhc3RRdWVyeUNoYW5nZSIsInVwZGF0ZVByb3BlcnRpZXMiLCJyZWZzIiwiZ2V0VmFsdWUiLCJfb25JbnB1dENoYW5nZSIsImxlbmd0aCIsIl9vblNjb3BlU2VsZWN0aW9uIiwicHJvcGVydGllcyIsInNlbGVjdGVkRmFjZXRzIiwiX2hhbmRsZUlucHV0S2V5UHJlc3MiLCJrZXkiLCJfcmVuZGVySGVscCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJmb2N1cyIsInJlbmRlciIsInN0YXRlIiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUdBOztBQUNBOzs7O0FBR0E7Ozs7OztBQUVBOzs7O0FBZkE7QUFtQkEsSUFBTUEsWUFBWTtBQUNkQyxZQUFRLENBQUNDLGtCQUFELENBRE07QUFFZEMsaUJBQWEsV0FGQztBQUdkOzs7O0FBSUFDLG1CQVBjLDZCQU9JO0FBQ2QsZUFBTztBQUNIQyx5QkFBYSx3QkFEVjtBQUVIQyxvQkFBUSxFQUZMO0FBR0hDLHFCQUFTLENBSE47QUFJSEMscUJBQVMsS0FKTjtBQUtIQyxpQ0FBcUIsaUJBTGxCO0FBTUhDLHVCQUFXLElBTlI7QUFPSEMsd0JBQVlDLFNBUFQ7QUFRSEMsbUJBQU9ELFNBUko7QUFTSEUsb0JBQVFGLFNBVEw7QUFVSEcsMENBQThCSCxTQVYzQjtBQVdISSw0QkFBZ0I7QUFDWkMsNkJBQWEsS0FERDtBQUVaQyx3QkFBUSxLQUZJO0FBR1pDLHlCQUFTO0FBSEc7QUFYYixTQUFQO0FBaUJILEtBekJhOztBQTBCZEMsZUFBVztBQUNQVixtQkFBV1csaUJBQVVDLElBRGQ7QUFFUGIsNkJBQXFCWSxpQkFBVUUsTUFGeEI7QUFHUGYsaUJBQVNhLGlCQUFVQyxJQUhaO0FBSVBmLGlCQUFTYyxpQkFBVUcsTUFKWjtBQUtQbkIscUJBQWFnQixpQkFBVUUsTUFMaEI7QUFNUGpCLGdCQUFRZSxpQkFBVUksS0FOWDtBQU9QQyxlQUFPTCxpQkFBVUUsTUFQVjtBQVFQUixzQ0FBOEJNLGlCQUFVTSxJQVJqQztBQVNQWCx3QkFBZ0JL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XG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdzYWdlc3MtY29yZS90cmFuc2xhdGlvbic7XG5cbmltcG9ydCBhY3Rpb25XcmFwcGVyIGZyb20gJy4uLy4uL3BhZ2Uvc2VhcmNoL3NlYXJjaC1oZWFkZXIvYWN0aW9uLXdyYXBwZXInO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBjb21wb25lbnQgYXMgU2NvcGUgfSBmcm9tICcuL3Njb3BlJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0L3RleHQnO1xuXG4vLyBNaXhpbnNcbmltcG9ydCBzdHlsYWJsZSBmcm9tICcuLi8uLi9taXhpbi9zdHlsYWJsZSc7XG5cbi8qKlxuKiBTZWFyY2hCYXIgY29tcG9uZW50XG4qIEB0eXBlIHtPYmplY3R9XG4qL1xuY29uc3QgU2VhcmNoQmFyID0ge1xuICAgIG1peGluczogW3N0eWxhYmxlXSxcbiAgICBkaXNwbGF5TmFtZTogJ1NlYXJjaEJhcicsXG4gICAgLyoqXG4gICAgKiBDb21wb25lbnQgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgZGVmYXVsdCBwcm9wcy5cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnc2VhcmNoLmJhci5wbGFjZWhvbGRlcicsXG4gICAgICAgICAgICBzY29wZXM6IFtdLFxuICAgICAgICAgICAgbWluQ2hhcjogMCxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgaGVscFRyYW5zbGF0aW9uUGF0aDogJ3NlYXJjaC5iYXIuaGVscCcsXG4gICAgICAgICAgICBoYXNTY29wZXM6IHRydWUsXG4gICAgICAgICAgICBpZGVudGlmaWVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdG9yZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBvblNlYXJjaENyaXRlcmlhQ2hhbmdlQnlVc2VyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBrZWVwUHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGdyb3VwaW5nS2V5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNvcnRBc2M6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgaGFzU2NvcGVzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgaGVscFRyYW5zbGF0aW9uUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG1pbkNoYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzY29wZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG9uU2VhcmNoQ3JpdGVyaWFDaGFuZ2VCeVVzZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBrZWVwUHJvcGVydGllczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGdyb3VwaW5nS2V5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgc29ydEJ5OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgc29ydEFzYzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIGluaXRpYWwgc3RhdGVcbiAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGluaXRpYWwgc3RhdGVcbiAgICAqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvYWRpbmc6IHRoaXMucHJvcHMubG9hZGluZyxcbiAgICAgICAgICAgIHNjb3BlOiB0aGlzLnByb3BzLnN0b3JlLmdldFNjb3BlKCksXG4gICAgICAgICAgICBxdWVyeTogdGhpcy5wcm9wcy5zdG9yZS5nZXRRdWVyeSgpXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAqIENvbXBvbmVudCBkaWQgbW91bnQgaGFuZGxlclxuICAgICovXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzUXVlcnkoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogQ29tcG9uZW50IHdpbGwgbW91bnQgaGFuZGxlclxuICAgICovXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmFkZFF1ZXJ5Q2hhbmdlTGlzdGVuZXIodGhpcy5fb25RdWVyeUNoYW5nZUZyb21TdG9yZSk7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUuYWRkU2NvcGVDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblNjb3BlQ2hhbmdlRnJvbVN0b3JlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5hZGRSZXN1bHRzQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25SZXN1bHRzQ2hhbmdlRnJvbVN0b3JlKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IHN0b3JlIH0pIHtcbiAgICAgICAgaWYgKHN0b3JlLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuc3RvcmUuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5yZW1vdmVRdWVyeUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uUXVlcnlDaGFuZ2VGcm9tU3RvcmUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5yZW1vdmVTY29wZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uU2NvcGVDaGFuZ2VGcm9tU3RvcmUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5yZW1vdmVSZXN1bHRzQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25SZXN1bHRzQ2hhbmdlRnJvbVN0b3JlKTtcblxuICAgICAgICAgICAgc3RvcmUuYWRkUXVlcnlDaGFuZ2VMaXN0ZW5lcih0aGlzLl9vblF1ZXJ5Q2hhbmdlRnJvbVN0b3JlKTtcbiAgICAgICAgICAgIHN0b3JlLmFkZFNjb3BlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TY29wZUNoYW5nZUZyb21TdG9yZSk7XG4gICAgICAgICAgICBzdG9yZS5hZGRSZXN1bHRzQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25SZXN1bHRzQ2hhbmdlRnJvbVN0b3JlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIENvbXBvbmVudCBkaWQgdW5tb3VudCBoYW5kbGVyXG4gICAgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5yZW1vdmVRdWVyeUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uUXVlcnlDaGFuZ2VGcm9tU3RvcmUpO1xuICAgICAgICB0aGlzLnByb3BzLnN0b3JlLnJlbW92ZVNjb3BlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25TY29wZUNoYW5nZUZyb21TdG9yZSk7XG4gICAgICAgIHRoaXMucHJvcHMuc3RvcmUucmVtb3ZlUmVzdWx0c0NoYW5nZUxpc3RlbmVyKHRoaXMuX29uUmVzdWx0c0NoYW5nZUZyb21TdG9yZSk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSh7IHN0b3JlIH0pIHtcbiAgICAgICAgaWYgKHN0b3JlLmlkZW50aWZpZXIgIT09IHRoaXMucHJvcHMuc3RvcmUuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgdGhpcy5fb25RdWVyeUNoYW5nZUZyb21TdG9yZSgpO1xuICAgICAgICAgICAgdGhpcy5fb25TY29wZUNoYW5nZUZyb21TdG9yZSgpO1xuICAgICAgICAgICAgdGhpcy5fb25SZXN1bHRzQ2hhbmdlRnJvbVN0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICogUXVlcnkgY2hhbmdlZCBpbiBzdG9yZSBldmVudCBoYW5kbGVyXG4gICAgKi9cbiAgICBfb25RdWVyeUNoYW5nZUZyb21TdG9yZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBxdWVyeTogdGhpcy5wcm9wcy5zdG9yZS5nZXRRdWVyeSgpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBTY29wZSBjaGFuZ2VkIGluIHN0b3JlIGV2ZW50IGhhbmRsZXJcbiAgICAqL1xuICAgIF9vblNjb3BlQ2hhbmdlRnJvbVN0b3JlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNjb3BlOiB0aGlzLnByb3BzLnN0b3JlLmdldFNjb3BlKClcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9vblJlc3VsdHNDaGFuZ2VGcm9tU3RvcmUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogQnJvYWRjYXN0IHF1ZXJ5IGNoYW5nZVxuICAgICovXG4gICAgX2Jyb2FkY2FzdFF1ZXJ5Q2hhbmdlKCkge1xuICAgICAgICBhY3Rpb25XcmFwcGVyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9uLnVwZGF0ZVByb3BlcnRpZXMoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLnJlZnMucXVlcnkuZ2V0VmFsdWUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogSW5wdXQgY2hhbmdlIGhhbmRsZXJcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gcXVlcnkgdGhlIG5ldyBxdWVyeVxuICAgICovXG4gICAgX29uSW5wdXRDaGFuZ2UocXVlcnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHF1ZXJ5IH0pO1xuICAgICAgICBjb25zdCB7IG1pbkNoYXIsIG9uU2VhcmNoQ3JpdGVyaWFDaGFuZ2VCeVVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChxdWVyeS5sZW5ndGggPj0gbWluQ2hhcikge1xuICAgICAgICAgICAgdGhpcy5fYnJvYWRjYXN0UXVlcnlDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25TZWFyY2hDcml0ZXJpYUNoYW5nZUJ5VXNlcikge1xuICAgICAgICAgICAgb25TZWFyY2hDcml0ZXJpYUNoYW5nZUJ5VXNlcigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFNjb3BlIHNlbGVjdGlvbiBoYW5kbGVyXG4gICAgKiBAcGFyYW0gIHtPYmplY3R9IHNjb3BlIHNlbGVjdGVkIHNjb3BlXG4gICAgKi9cbiAgICBfb25TY29wZVNlbGVjdGlvbihzY29wZSkge1xuICAgICAgICB0aGlzLl9mb2N1c1F1ZXJ5KCk7XG4gICAgICAgIGNvbnN0IHsgYWN0aW9uLCBvblNlYXJjaENyaXRlcmlhQ2hhbmdlQnlVc2VyLCBrZWVwUHJvcGVydGllczogeyBncm91cGluZ0tleSwgc29ydEJ5LCBzb3J0QXNjIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICBzY29wZSxcbiAgICAgICAgICAgIHNlbGVjdGVkRmFjZXRzOiB7fVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWdyb3VwaW5nS2V5KSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmdyb3VwaW5nS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc29ydEJ5KSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnNvcnRCeSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNvcnRBc2MpIHtcbiAgICAgICAgICAgIHByb3BlcnRpZXMuc29ydEFzYyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aW9uLnVwZGF0ZVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzY29wZSB9KTtcbiAgICAgICAgaWYgKG9uU2VhcmNoQ3JpdGVyaWFDaGFuZ2VCeVVzZXIpIHtcbiAgICAgICAgICAgIG9uU2VhcmNoQ3JpdGVyaWFDaGFuZ2VCeVVzZXIoKTtcbiAgICAgICAgfVxuICAgIH0sICBcbiAgICAvKipcbiAgICAqIElucHV0IGtleSBwcmVzcyBoYW5kbGVyXG4gICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleSBwcmVzc2VkIGtleVxuICAgICovXG4gICAgX2hhbmRsZUlucHV0S2V5UHJlc3MoeyBrZXkgfSkge1xuICAgICAgICBpZiAoJ0VudGVyJyA9PT0ga2V5KSB7XG4gICAgICAgICAgICBjb25zdCB7IG9uU2VhcmNoQ3JpdGVyaWFDaGFuZ2VCeVVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBhY3Rpb25XcmFwcGVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbi51cGRhdGVQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucmVmcy5xdWVyeS5nZXRWYWx1ZSgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBudWxsLCAwKSgpO1xuICAgICAgICAgICAgaWYgKG9uU2VhcmNoQ3JpdGVyaWFDaGFuZ2VCeVVzZXIpIHtcbiAgICAgICAgICAgICAgICBvblNlYXJjaENyaXRlcmlhQ2hhbmdlQnlVc2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIGhlbHAgbWVzc2FnZVxuICAgICogQHJldHVybiB7SFRNTH0gcmVuZGVyZWQgaGVscCBtZXNzYWdlXG4gICAgKi9cbiAgICBfcmVuZGVySGVscCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPSdoZWxwJz57dHJhbnNsYXRlKHRoaXMucHJvcHMuaGVscFRyYW5zbGF0aW9uUGF0aCl9PC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIEZvY3VzIHRoZSBxdWVyeSBpbnB1dCBmaWVsZFxuICAgICovXG4gICAgX2ZvY3VzUXVlcnkoKSB7XG4gICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5xdWVyeSkuZm9jdXMoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBjb21wb25lbnQuXG4gICAgKiBAcmV0dXJuIHtIVE1MfSAtIFRoZSByZW5kZXJlZCBjb21wb25lbnRcbiAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBoYXNTY29wZXMsIHNjb3BlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBsb2FkaW5nLCBxdWVyeSwgc2NvcGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG4gICAgICAgIGlmIChxdWVyeSAmJiAwIDwgcXVlcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J3NlYXJjaC1iYXInPlxuICAgICAgICAgICAgICAgIHtoYXNTY29wZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgPFNjb3BlIGxpc3Q9e3Njb3Blc30gb25TY29wZVNlbGVjdGlvbj17dGhpcy5fb25TY29wZVNlbGVjdGlvbn0gcmVmPSdzY29wZScgdmFsdWU9e3Njb3BlfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J3NlYXJjaC1iYXItaW5wdXQnPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT0nc2VhcmNoYmFyaW5wdXQnIG9uQ2hhbmdlPXt0aGlzLl9vbklucHV0Q2hhbmdlfSBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVJbnB1dEtleVByZXNzfSBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKHBsYWNlaG9sZGVyKX0gcmVmPSdxdWVyeScgdmFsdWU9e3F1ZXJ5fSAvPlxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RocmVlLXF1YXJ0ZXJzLWxvYWRlcicgZGF0YS1yb2xlPSdzcGlubmVyJyAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoU2VhcmNoQmFyKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbiwgY29tcG9uZW50XG59XG5leHBvcnQge1xuICAgIG1peGluLFxuICAgIGNvbXBvbmVudFxufVxuIl19