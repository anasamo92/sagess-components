'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _awesomplete = require('./awesomplete');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // Dependencies

// Components


/**
 * Autocomplete for component
 * @type {Object}
 */
var AutocompleteFor = {
    /**
     * Default props
     * @return {Object} default props
     */
    getDefaultProps: function getDefaultProps() {
        return {
            AutocompleteComp: _awesomplete.component,
            pickList: [],
            value: ''
        };
    },

    /**
     * Props validation
     * @type {Object}
     */
    propTypes: {
        AutocompleteComp: (0, _types2.default)('func'),
        allowUnmatchedValue: (0, _types2.default)('bool'),
        codeResolver: (0, _types2.default)('func'),
        isEdit: (0, _types2.default)('bool'),
        onInputBlur: (0, _types2.default)('func'),
        pickList: (0, _types2.default)('array'),
        searcher: (0, _types2.default)('func'),
        selectionHandler: (0, _types2.default)('func'),
        value: (0, _types2.default)('string')
    },
    /**
     * Get initial state
     * @return {Object} initial state
     */
    getInitialState: function getInitialState() {
        var pickList = this.props.pickList;

        return { pickList: pickList };
    },

    /**
     * Component will mount, load the list
     */
    componentWillMount: function componentWillMount() {
        var _this = this;

        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/input/autocomplete-select');
        var _props = this.props,
            isEdit = _props.isEdit,
            value = _props.value,
            codeResolver = _props.codeResolver;

        if (!isEdit && value && codeResolver) {
            // Resolve the code if in consult
            codeResolver(value).then(function (resolvedCode) {
                return _this.setState({ value: resolvedCode });
            });
        } else {
            this._doLoad();
        }
    },
    componentWillReceiveProps: function componentWillReceiveProps(_ref) {
        var _this2 = this;

        var codeResolver = _ref.codeResolver,
            value = _ref.value;

        if (value !== this.props.value) {
            codeResolver(value).then(function (resolvedCode) {
                return _this2.setState({ value: resolvedCode });
            });
        }
    },

    /**
     * List loader
     * @param  {string} text='' input text to search from
     */
    _doLoad: function _doLoad() {
        var _this3 = this;

        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var searcher = this.props.searcher;

        if (searcher) {
            searcher(text).then(function (pickList) {
                return _this3.setState({ pickList: pickList });
            });
        }
    },

    /**
     * Get value of the field
     * @return {string} the code of the curren value
     */
    getValue: function getValue() {
        var autocomplete = this.refs.autocomplete;
        var _props2 = this.props,
            allowUnmatchedValue = _props2.allowUnmatchedValue,
            value = _props2.value;

        return autocomplete ? autocomplete.getValue() : allowUnmatchedValue ? this.state.value : value;
    },

    /**
     * Render the edit mode
     * @return {HTML} rendered element
     */
    _renderEdit: function _renderEdit() {
        var _props3 = this.props,
            AutocompleteComp = _props3.AutocompleteComp,
            allowUnmatchedValue = _props3.allowUnmatchedValue,
            codeResolver = _props3.codeResolver,
            onInputBlur = _props3.onInputBlur,
            selectionHandler = _props3.selectionHandler,
            code = _props3.value,
            InputAutoComplete = _props3.InputAutoComplete,
            defaultPickList = _props3.pickList,
            otherProps = _objectWithoutProperties(_props3, ['AutocompleteComp', 'allowUnmatchedValue', 'codeResolver', 'onInputBlur', 'selectionHandler', 'value', 'InputAutoComplete', 'pickList']);

        var pickList = this.state.pickList;

        return _react2.default.createElement(AutocompleteComp, Object.assign({
            InputAutoComplete: InputAutoComplete,
            allowUnmatchedValue: allowUnmatchedValue,
            code: code,
            codeResolver: codeResolver,
            inputChangeHandler: this._doLoad,
            onInputBlur: onInputBlur,
            pickList: pickList,
            ref: 'autocomplete',
            selectionHandler: selectionHandler
        }, otherProps));
    },

    /**
     * Render the consult mode
     * @return {HTML} rendered element
     */
    _renderConsult: function _renderConsult() {
        var value = this.state.value;
        var code = this.props.value;

        return _react2.default.createElement(
            'span',
            null,
            value ? value : code
        );
    },

    /**
     * Render the component
     * @return {HTML} the rendered component
     */
    render: function render() {
        var isEdit = this.props.isEdit;

        return false === isEdit ? this._renderConsult() : this._renderEdit();
    }
};

var _builder = (0, _builder3.default)(AutocompleteFor),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlRm9yIiwiZ2V0RGVmYXVsdFByb3BzIiwiQXV0b2NvbXBsZXRlQ29tcCIsIkF1dG9jb21wbGV0ZSIsInBpY2tMaXN0IiwidmFsdWUiLCJwcm9wVHlwZXMiLCJhbGxvd1VubWF0Y2hlZFZhbHVlIiwiY29kZVJlc29sdmVyIiwiaXNFZGl0Iiwib25JbnB1dEJsdXIiLCJzZWFyY2hlciIsInNlbGVjdGlvbkhhbmRsZXIiLCJnZXRJbml0aWFsU3RhdGUiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwidGhlbiIsInNldFN0YXRlIiwicmVzb2x2ZWRDb2RlIiwiX2RvTG9hZCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJ0ZXh0IiwiZ2V0VmFsdWUiLCJhdXRvY29tcGxldGUiLCJyZWZzIiwic3RhdGUiLCJfcmVuZGVyRWRpdCIsImNvZGUiLCJJbnB1dEF1dG9Db21wbGV0ZSIsImRlZmF1bHRQaWNrTGlzdCIsIm90aGVyUHJvcHMiLCJfcmVuZGVyQ29uc3VsdCIsInJlbmRlciIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Nk5BTEE7O0FBSUE7OztBQUdBOzs7O0FBSUEsSUFBTUEsa0JBQWtCO0FBQ3BCOzs7O0FBSUFDLG1CQUxvQiw2QkFLRjtBQUNkLGVBQU87QUFDSEMsOEJBQWtCQyxzQkFEZjtBQUVIQyxzQkFBVSxFQUZQO0FBR0hDLG1CQUFPO0FBSEosU0FBUDtBQUtILEtBWG1COztBQVlwQjs7OztBQUlBQyxlQUFXO0FBQ1BKLDBCQUFrQixxQkFBTSxNQUFOLENBRFg7QUFFUEssNkJBQXFCLHFCQUFNLE1BQU4sQ0FGZDtBQUdQQyxzQkFBYyxxQkFBTSxNQUFOLENBSFA7QUFJUEMsZ0JBQVEscUJBQU0sTUFBTixDQUpEO0FBS1BDLHFCQUFhLHFCQUFN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MEIsaUJBRHZCO0FBRUksaUNBQXFCdkIsbUJBRnpCO0FBR0ksa0JBQU1zQixJQUhWO0FBSUksMEJBQWNyQixZQUpsQjtBQUtJLGdDQUFvQixLQUFLYSxPQUw3QjtBQU1JLHlCQUFhWCxXQU5qQjtBQU9JLHNCQUFVTixRQVBkO0FBUUksaUJBQUksY0FSUjtBQVNJLDhCQUFrQlE7QUFUdEIsV0FVUW9CLFVBVlIsRUFESjtBQWNILEtBNUZtQjs7QUE2RnBCOzs7O0FBSUFDLGtCQWpHb0IsNEJBaUdIO0FBQUEsWUFDTDVCLEtBREssR0FDSyxLQUFLc0IsS0FEVixDQUNMdEIsS0FESztBQUFBLFlBRUV3QixJQUZGLEdBRVcsS0FBS2YsS0FGaEIsQ0FFTFQsS0FGSzs7QUFHYixlQUNJO0FBQUE7QUFBQTtBQUFPQSxvQkFBUUEsS0FBUixHQUFnQndCO0FBQXZCLFNBREo7QUFHSCxLQXZHbUI7O0FBd0dwQjs7OztBQUlBSyxVQTVHb0Isb0JBNEdYO0FBQUEsWUFDQ3pCLE1BREQsR0FDWSxLQUFLSyxLQURqQixDQUNDTCxNQUREOztBQUVMLGVBQU8sVUFBVUEsTUFBVixHQUFtQixLQUFLd0IsY0FBTCxFQUFuQixHQUEyQyxLQUFLTCxXQUFMLEVBQWxEO0FBQ0g7QUEvR21CLENBQXhCOztlQWtINkIsdUJBQVE1QixlQUFSLEM7SUFBckJtQyxLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHR5cGVzIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC90eXBlcyc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBjb21wb25lbnQgYXMgQXV0b2NvbXBsZXRlIH0gZnJvbSAnLi9hd2Vzb21wbGV0ZSc7XG5cbi8qKlxuICogQXV0b2NvbXBsZXRlIGZvciBjb21wb25lbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IEF1dG9jb21wbGV0ZUZvciA9IHtcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IHByb3BzXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBkZWZhdWx0IHByb3BzXG4gICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgQXV0b2NvbXBsZXRlQ29tcDogQXV0b2NvbXBsZXRlLFxuICAgICAgICAgICAgcGlja0xpc3Q6IFtdLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBQcm9wcyB2YWxpZGF0aW9uXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgQXV0b2NvbXBsZXRlQ29tcDogdHlwZXMoJ2Z1bmMnKSxcbiAgICAgICAgYWxsb3dVbm1hdGNoZWRWYWx1ZTogdHlwZXMoJ2Jvb2wnKSxcbiAgICAgICAgY29kZVJlc29sdmVyOiB0eXBlcygnZnVuYycpLFxuICAgICAgICBpc0VkaXQ6IHR5cGVzKCdib29sJyksXG4gICAgICAgIG9uSW5wdXRCbHVyOiB0eXBlcygnZnVuYycpLFxuICAgICAgICBwaWNrTGlzdDogdHlwZXMoJ2FycmF5JyksXG4gICAgICAgIHNlYXJjaGVyOiB0eXBlcygnZnVuYycpLFxuICAgICAgICBzZWxlY3Rpb25IYW5kbGVyOiB0eXBlcygnZnVuYycpLFxuICAgICAgICB2YWx1ZTogdHlwZXMoJ3N0cmluZycpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgaW5pdGlhbCBzdGF0ZVxuICAgICAqIEByZXR1cm4ge09iamVjdH0gaW5pdGlhbCBzdGF0ZVxuICAgICAqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgbGV0IHsgcGlja0xpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiB7IHBpY2tMaXN0IH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQgd2lsbCBtb3VudCwgbG9hZCB0aGUgbGlzdFxuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIDIuMi4wOiB0aGlzIGNvbXBvbmVudCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIHNhZ2Vzcy1jb21wb25lbnRzL2NvbXBvbmVudHMvaW5wdXQvYXV0b2NvbXBsZXRlLXNlbGVjdCcpO1xuICAgICAgICBjb25zdCB7IGlzRWRpdCwgdmFsdWUsIGNvZGVSZXNvbHZlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFpc0VkaXQgJiYgdmFsdWUgJiYgY29kZVJlc29sdmVyKSB7IC8vIFJlc29sdmUgdGhlIGNvZGUgaWYgaW4gY29uc3VsdFxuICAgICAgICAgICAgY29kZVJlc29sdmVyKHZhbHVlKS50aGVuKHJlc29sdmVkQ29kZSA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHJlc29sdmVkQ29kZSB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kb0xvYWQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IGNvZGVSZXNvbHZlciwgdmFsdWUgfSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgIGNvZGVSZXNvbHZlcih2YWx1ZSkudGhlbihyZXNvbHZlZENvZGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiByZXNvbHZlZENvZGUgfSkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBMaXN0IGxvYWRlclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGV4dD0nJyBpbnB1dCB0ZXh0IHRvIHNlYXJjaCBmcm9tXG4gICAgICovXG4gICAgX2RvTG9hZCh0ZXh0ID0gJycpIHtcbiAgICAgICAgY29uc3QgeyBzZWFyY2hlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKHNlYXJjaGVyKSB7XG4gICAgICAgICAgICBzZWFyY2hlcih0ZXh0KS50aGVuKHBpY2tMaXN0ID0+IHRoaXMuc2V0U3RhdGUoeyBwaWNrTGlzdCB9KSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBjb2RlIG9mIHRoZSBjdXJyZW4gdmFsdWVcbiAgICAgKi9cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3QgeyBhdXRvY29tcGxldGUgfSA9IHRoaXMucmVmcztcbiAgICAgICAgY29uc3QgeyBhbGxvd1VubWF0Y2hlZFZhbHVlLCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIGF1dG9jb21wbGV0ZSA/IGF1dG9jb21wbGV0ZS5nZXRWYWx1ZSgpIDogYWxsb3dVbm1hdGNoZWRWYWx1ZSA/IHRoaXMuc3RhdGUudmFsdWUgOiB2YWx1ZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgZWRpdCBtb2RlXG4gICAgICogQHJldHVybiB7SFRNTH0gcmVuZGVyZWQgZWxlbWVudFxuICAgICAqL1xuICAgIF9yZW5kZXJFZGl0KCkge1xuICAgICAgICBjb25zdCB7IEF1dG9jb21wbGV0ZUNvbXAsIGFsbG93VW5tYXRjaGVkVmFsdWUsIGNvZGVSZXNvbHZlciwgb25JbnB1dEJsdXIsIHNlbGVjdGlvbkhhbmRsZXIsIHZhbHVlOiBjb2RlLCBJbnB1dEF1dG9Db21wbGV0ZSwgcGlja0xpc3Q6IGRlZmF1bHRQaWNrTGlzdCwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBwaWNrTGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVDb21wXG4gICAgICAgICAgICAgICAgSW5wdXRBdXRvQ29tcGxldGU9e0lucHV0QXV0b0NvbXBsZXRlfVxuICAgICAgICAgICAgICAgIGFsbG93VW5tYXRjaGVkVmFsdWU9e2FsbG93VW5tYXRjaGVkVmFsdWV9XG4gICAgICAgICAgICAgICAgY29kZT17Y29kZX1cbiAgICAgICAgICAgICAgICBjb2RlUmVzb2x2ZXI9e2NvZGVSZXNvbHZlcn1cbiAgICAgICAgICAgICAgICBpbnB1dENoYW5nZUhhbmRsZXI9e3RoaXMuX2RvTG9hZH1cbiAgICAgICAgICAgICAgICBvbklucHV0Qmx1cj17b25JbnB1dEJsdXJ9XG4gICAgICAgICAgICAgICAgcGlja0xpc3Q9e3BpY2tMaXN0fVxuICAgICAgICAgICAgICAgIHJlZj0nYXV0b2NvbXBsZXRlJ1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkhhbmRsZXI9e3NlbGVjdGlvbkhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb25zdWx0IG1vZGVcbiAgICAgKiBAcmV0dXJuIHtIVE1MfSByZW5kZXJlZCBlbGVtZW50XG4gICAgICovXG4gICAgX3JlbmRlckNvbnN1bHQoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IGNvZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj57dmFsdWUgPyB2YWx1ZSA6IGNvZGV9PC9zcGFuPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJuIHtIVE1MfSB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBpc0VkaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBmYWxzZSA9PT0gaXNFZGl0ID8gdGhpcy5fcmVuZGVyQ29uc3VsdCgpIDogdGhpcy5fcmVuZGVyRWRpdCgpO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihBdXRvY29tcGxldGVGb3IpO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=