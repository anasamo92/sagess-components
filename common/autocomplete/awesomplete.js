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

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _find = require('lodash/collection/find');

var _find2 = _interopRequireDefault(_find);

var _text = require('../../components/input/text');

var _text2 = _interopRequireDefault(_text);

var _debounce = require('lodash/function/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

require('./lib/awesomplete');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Autocomplete component.
* Get a pickList as an input, then let the user type and suggests values from the picklist.
* Can force values in the input field to be taken from the pick list only.
* @type {Object}
*/

// Dependencies
/* globals Awesomplete */
var Autocomplete = {
    /**
    * Component will mount.
    * Check if the Awesomplete library is in the Window object.
    */
    componentWillMount: function componentWillMount() {
        // Check if Awesomplete is set in Window
        if (!window.Awesomplete) {
            throw new Error('Please include Awesomplete to your application. See http://leaverou.github.io/awesomplete/ for more information');
        }
    },

    /**
    * Component did mount.
    * Initiates the Awesomplete object.
    */
    componentDidMount: function componentDidMount() {
        var _this = this;

        var input = this.refs.input.refs.inputText;
        var _props = this.props,
            code = _props.code,
            codeResolver = _props.codeResolver,
            inputChangeHandler = _props.inputChangeHandler,
            pickList = _props.pickList,
            timeoutDuration = _props.timeoutDuration;

        this._awesomeplete = new Awesomplete(_reactDom2.default.findDOMNode(input), {
            list: this._extractListFromData(pickList)
        });
        this._awesomeplete.input.addEventListener('awesomplete-select', function (event) {
            return _this._selectionHandler(event.text);
        });
        this._resolveValueFromPicklistOrCodeResolver(code, pickList);
        this._debouncedInputChangeHandler = (0, _debounce2.default)(function (value) {
            if (inputChangeHandler) {
                inputChangeHandler(value);
            }
        }, timeoutDuration);
    },

    /**
    * Default props.
    * @return {Object} default props
    */
    getDefaultProps: function getDefaultProps() {
        return {
            code: '',
            pickList: [],
            InputAutoComplete: _text2.default,
            timeoutDuration: 200,
            allowUnmatchedValue: true
        };
    },

    /**
    * Prop validation
    * @type {Object}
    */
    propTypes: {
        allowUnmatchedValue: (0, _types2.default)('bool'), // restrict user input to values of the list, or allow freestyle
        code: (0, _types2.default)('string'), // the field code value
        inputChangeHandler: (0, _types2.default)('func'), // callback when input changed
        onInputBlur: (0, _types2.default)('func'),
        pickList: (0, _types2.default)('array'), // list of values, looking like [{code: '', value: ''}, {code: '', value: ''}, ...]
        selectionHandler: (0, _types2.default)('func'), // selection callback
        timeoutDuration: (0, _types2.default)('number') // the throttle duration of the input rate
    },
    /**
    * Initial state.
    * Retrieve the value from the provided code and pick list.
    * @return {Object} initial state
    */
    getInitialState: function getInitialState() {
        var _props2 = this.props,
            code = _props2.code,
            pickList = _props2.pickList;

        return {
            value: 0 < pickList.length ? this._getValueFromCode(code) : code,
            fromCodeResolver: false
        };
    },

    /**
    * Component will receive props.
    * Update the pick list, and try to resolve the new value.
    * @param  {Object} nextProps new props
    */
    componentWillReceiveProps: function componentWillReceiveProps(_ref) {
        var pickList = _ref.pickList,
            code = _ref.code;

        if (code !== this.props.code) {
            this._resolveValueFromPicklistOrCodeResolver(code, pickList);
        }
        this._awesomeplete.list = this._extractListFromData(pickList);
    },
    _resolveValueFromPicklistOrCodeResolver: function _resolveValueFromPicklistOrCodeResolver(code, pickList) {
        var _this2 = this;

        var codeResolver = this.props.codeResolver;

        var value = this._getValueFromCode(code, pickList);
        if ('' !== value) {
            this.setState({ value: value }); // eslint-disable-line
        } else if (codeResolver) {
            codeResolver(code).then(function (resolvedValue) {
                if ('' !== resolvedValue) {
                    _this2.setState({ value: resolvedValue, fromCodeResolver: true }, function () {
                        _this2.props.inputChangeHandler(resolvedValue);
                    }); // eslint-disable-line
                }
            });
        }
    },

    /**
    * Selection handler.
    * If a selection handler is set in the props, send it the selected pick.
    * Also, set a flag to tell the blur listener not to empty the value, because the selection, as it is a click outside the input, raises a blur event.
    * @param  {String} value selected value from the dropdown list
    */
    _selectionHandler: function _selectionHandler(value) {
        var selectionHandler = this.props.selectionHandler;

        if (selectionHandler) {
            var pickList = this.props.pickList;

            var selectedPick = (0, _find2.default)(pickList, { value: value });
            selectionHandler(selectedPick);
        }
        this._isSelecting = true; // Private flag to tell the blur listener not to replace the value
        this.setState({ value: value });
    },

    /**
    * Extract list of suggestions from pick list
    * @param  {Object} data the pick list
    * @return {Array}      the suggestion array
    */
    _extractListFromData: function _extractListFromData(data) {
        return data.map(function (datum) {
            return datum.value;
        });
    },

    /**
    * Get code from value in the pick list
    * @param  {String} value the value
    * @return {String} the code
    */
    _getCodeFromValue: function _getCodeFromValue(value) {
        var pickList = this.props.pickList;

        var pick = (0, _find2.default)(pickList, { value: value });
        return pick ? pick.code : pick;
    },

    /**
    * Get value from code in the pick list
    * @param  {String} code the code
    * @param  {Object} pickList=this.props.pickList  optional pick list to resolve the value from
    * @return {String} value
    */
    _getValueFromCode: function _getValueFromCode(code) {
        var pickList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.pickList;

        var pick = (0, _find2.default)(pickList, { code: code });
        return pick ? pick.value : '';
    },

    /**
    * Get the current code
    * @return {String} the code
    */
    getValue: function getValue() {
        var value = this.state.value;

        if (value === '') return null;
        var allowUnmatchedValue = this.props.allowUnmatchedValue;

        var computedValue = this._getCodeFromValue(value);
        return computedValue ? computedValue : allowUnmatchedValue ? value : this.props.code;
    },

    /**
    * On input blur.
    * If allowUnmatchedValue is set in the props, validate the current value and erase it if not valid.
    */
    _onInputBlur: function _onInputBlur() {
        var _state = this.state,
            value = _state.value,
            fromCodeResolver = _state.fromCodeResolver;
        var _props3 = this.props,
            allowUnmatchedValue = _props3.allowUnmatchedValue,
            onInputBlur = _props3.onInputBlur,
            pickList = _props3.pickList,
            selectionHandler = _props3.selectionHandler;

        var selectedPick = (0, _find2.default)(pickList, { value: value });
        var code = this._getCodeFromValue(value);
        if (selectedPick && !this._isSelecting && selectionHandler) {
            selectionHandler(selectedPick);
        }
        if (!code && !allowUnmatchedValue && !this._isSelecting && !fromCodeResolver) {
            this.setState({ value: '' });
            selectionHandler && selectionHandler({ code: '', value: '' });
        }

        onInputBlur && onInputBlur();

        this._isSelecting = false;
    },

    /**
    * On input change
    * @param  {Object} event change event
    */
    _onInputChange: function _onInputChange(_ref2) {
        var value = _ref2.target.value;

        this.setState({ value: value, fromCodeResolver: false });
        this._debouncedInputChangeHandler(value);
    },

    /**
    * Render
    * @return {HTML} rendered element
    */
    render: function render() {
        var value = this.state.value;
        var _props4 = this.props,
            timeoutDuration = _props4.timeoutDuration,
            InputAutoComplete = _props4.InputAutoComplete;
        var _onInputBlur = this._onInputBlur,
            _onInputChange = this._onInputChange;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'autocomplete' },
            InputAutoComplete ? _react2.default.createElement(InputAutoComplete, { onBlur: _onInputBlur, onChange: _onInputChange, ref: 'input', value: value }) : _react2.default.createElement(_text2.default, { onBlur: _onInputBlur, onChange: _onInputChange, ref: 'input', value: value })
        );
    }
};

var _builder = (0, _builder3.default)(Autocomplete),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlIiwiY29tcG9uZW50V2lsbE1vdW50Iiwid2luZG93IiwiQXdlc29tcGxldGUiLCJFcnJvciIsImNvbXBvbmVudERpZE1vdW50IiwiaW5wdXQiLCJyZWZzIiwiaW5wdXRUZXh0IiwicHJvcHMiLCJjb2RlIiwiY29kZVJlc29sdmVyIiwiaW5wdXRDaGFuZ2VIYW5kbGVyIiwicGlja0xpc3QiLCJ0aW1lb3V0RHVyYXRpb24iLCJfYXdlc29tZXBsZXRlIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsImxpc3QiLCJfZXh0cmFjdExpc3RGcm9tRGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfc2VsZWN0aW9uSGFuZGxlciIsImV2ZW50IiwidGV4dCIsIl9yZXNvbHZlVmFsdWVGcm9tUGlja2xpc3RPckNvZGVSZXNvbHZlciIsIl9kZWJvdW5jZWRJbnB1dENoYW5nZUhhbmRsZXIiLCJ2YWx1ZSIsImdldERlZmF1bHRQcm9wcyIsIklucHV0QXV0b0NvbXBsZXRlIiwiSW5wdXRUZXh0IiwiYWxsb3dVbm1hdGNoZWRWYWx1ZSIsInByb3BUeXBlcyIsIm9uSW5wdXRCbHVyIiwic2VsZWN0aW9uSGFuZGxlciIsImdldEluaXRpYWxTdGF0ZSIsImxlbmd0aCIsIl9nZXRWYWx1ZUZyb21Db2RlIiwiZnJvbUNvZGVSZXNvbHZlciIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzZXRTdGF0ZSIsInRoZW4iLCJyZXNvbHZlZFZhbHVlIiwic2VsZWN0ZWRQaWNrIiwiX2lzU2VsZWN0aW5nIiwiZGF0YSIsIm1hcCIsImRhdHVtIiwiX2dldENvZGVGcm9tVmFsdWUiLCJwaWNrIiwiZ2V0VmFsdWUiLCJzdGF0ZSIsImNvbXB1dGVkVmFsdWUiLCJfb25JbnB1dEJsdXIiLCJfb25JbnB1dENoYW5nZSIsInRhcmdldCIsInJlbmRlciIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7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QkFxTFI7QUFBQSxZQUNHN0IsS0FESCxHQUNhLEtBQUt3QixLQURsQixDQUNHeEIsS0FESDtBQUFBLHNCQUUwQyxLQUFLakIsS0FGL0M7QUFBQSxZQUVHSyxlQUZILFdBRUdBLGVBRkg7QUFBQSxZQUVvQmMsaUJBRnBCLFdBRW9CQSxpQkFGcEI7QUFBQSxZQUdHd0IsWUFISCxHQUdvQyxJQUhwQyxDQUdHQSxZQUhIO0FBQUEsWUFHaUJDLGNBSGpCLEdBR29DLElBSHBDLENBR2lCQSxjQUhqQjs7QUFJTCxlQUNJO0FBQUE7QUFBQSxjQUFLLGNBQVcsY0FBaEI7QUFFUXpCLGdDQUNJLDhCQUFDLGlCQUFELElBQW1CLFFBQVF3QixZQUEzQixFQUF5QyxVQUFVQyxjQUFuRCxFQUFtRSxLQUFJLE9BQXZFLEVBQStFLE9BQU8zQixLQUF0RixHQURKLEdBR0ksOEJBQUMsY0FBRCxJQUFXLFFBQVEwQixZQUFuQixFQUFpQyxVQUFVQyxjQUEzQyxFQUEyRCxLQUFJLE9BQS9ELEVBQXVFLE9BQU8zQixLQUE5RTtBQUxaLFNBREo7QUFVSDtBQW5NZ0IsQ0FBckI7O2VBc002Qix1QkFBUTFCLFlBQVIsQztJQUFyQndELEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIEF3ZXNvbXBsZXRlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vLyBEZXBlbmRlbmNpZXNcbmltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCB0eXBlcyBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IGZpbmQgZnJvbSAnbG9kYXNoL2NvbGxlY3Rpb24vZmluZCc7XG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5wdXQvdGV4dCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlJztcbmltcG9ydCAnLi9saWIvYXdlc29tcGxldGUnO1xuXG4vKipcbiogQXV0b2NvbXBsZXRlIGNvbXBvbmVudC5cbiogR2V0IGEgcGlja0xpc3QgYXMgYW4gaW5wdXQsIHRoZW4gbGV0IHRoZSB1c2VyIHR5cGUgYW5kIHN1Z2dlc3RzIHZhbHVlcyBmcm9tIHRoZSBwaWNrbGlzdC5cbiogQ2FuIGZvcmNlIHZhbHVlcyBpbiB0aGUgaW5wdXQgZmllbGQgdG8gYmUgdGFrZW4gZnJvbSB0aGUgcGljayBsaXN0IG9ubHkuXG4qIEB0eXBlIHtPYmplY3R9XG4qL1xuY29uc3QgQXV0b2NvbXBsZXRlID0ge1xuICAgIC8qKlxuICAgICogQ29tcG9uZW50IHdpbGwgbW91bnQuXG4gICAgKiBDaGVjayBpZiB0aGUgQXdlc29tcGxldGUgbGlicmFyeSBpcyBpbiB0aGUgV2luZG93IG9iamVjdC5cbiAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgQXdlc29tcGxldGUgaXMgc2V0IGluIFdpbmRvd1xuICAgICAgICBpZiAoIXdpbmRvdy5Bd2Vzb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgaW5jbHVkZSBBd2Vzb21wbGV0ZSB0byB5b3VyIGFwcGxpY2F0aW9uLiBTZWUgaHR0cDovL2xlYXZlcm91LmdpdGh1Yi5pby9hd2Vzb21wbGV0ZS8gZm9yIG1vcmUgaW5mb3JtYXRpb24nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBDb21wb25lbnQgZGlkIG1vdW50LlxuICAgICogSW5pdGlhdGVzIHRoZSBBd2Vzb21wbGV0ZSBvYmplY3QuXG4gICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHsgaW5wdXRUZXh0OiBpbnB1dCB9ID0gdGhpcy5yZWZzLmlucHV0LnJlZnM7XG4gICAgICAgIGxldCB7IGNvZGUsIGNvZGVSZXNvbHZlciwgaW5wdXRDaGFuZ2VIYW5kbGVyLCBwaWNrTGlzdCwgdGltZW91dER1cmF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLl9hd2Vzb21lcGxldGUgPSBuZXcgQXdlc29tcGxldGUoUmVhY3RET00uZmluZERPTU5vZGUoaW5wdXQpLCB7XG4gICAgICAgICAgICBsaXN0OiB0aGlzLl9leHRyYWN0TGlzdEZyb21EYXRhKHBpY2tMaXN0KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYXdlc29tZXBsZXRlLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2F3ZXNvbXBsZXRlLXNlbGVjdCcsIGV2ZW50ID0+IHRoaXMuX3NlbGVjdGlvbkhhbmRsZXIoZXZlbnQudGV4dCkpO1xuICAgICAgICB0aGlzLl9yZXNvbHZlVmFsdWVGcm9tUGlja2xpc3RPckNvZGVSZXNvbHZlcihjb2RlLCBwaWNrTGlzdCk7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlZElucHV0Q2hhbmdlSGFuZGxlciA9IGRlYm91bmNlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmIChpbnB1dENoYW5nZUhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dENoYW5nZUhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBEZWZhdWx0IHByb3BzLlxuICAgICogQHJldHVybiB7T2JqZWN0fSBkZWZhdWx0IHByb3BzXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiAnJyxcbiAgICAgICAgICAgIHBpY2tMaXN0OiBbXSxcbiAgICAgICAgICAgIElucHV0QXV0b0NvbXBsZXRlOiBJbnB1dFRleHQsXG4gICAgICAgICAgICB0aW1lb3V0RHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIGFsbG93VW5tYXRjaGVkVmFsdWU6IHRydWVcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUHJvcCB2YWxpZGF0aW9uXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGFsbG93VW5tYXRjaGVkVmFsdWU6IHR5cGVzKCdib29sJyksIC8vIHJlc3RyaWN0IHVzZXIgaW5wdXQgdG8gdmFsdWVzIG9mIHRoZSBsaXN0LCBvciBhbGxvdyBmcmVlc3R5bGVcbiAgICAgICAgY29kZTogdHlwZXMoJ3N0cmluZycpLCAvLyB0aGUgZmllbGQgY29kZSB2YWx1ZVxuICAgICAgICBpbnB1dENoYW5nZUhhbmRsZXI6IHR5cGVzKCdmdW5jJyksIC8vIGNhbGxiYWNrIHdoZW4gaW5wdXQgY2hhbmdlZFxuICAgICAgICBvbklucHV0Qmx1cjogdHlwZXMoJ2Z1bmMnKSxcbiAgICAgICAgcGlja0xpc3Q6IHR5cGVzKCdhcnJheScpLCAvLyBsaXN0IG9mIHZhbHVlcywgbG9va2luZyBsaWtlIFt7Y29kZTogJycsIHZhbHVlOiAnJ30sIHtjb2RlOiAnJywgdmFsdWU6ICcnfSwgLi4uXVxuICAgICAgICBzZWxlY3Rpb25IYW5kbGVyOiB0eXBlcygnZnVuYycpLCAvLyBzZWxlY3Rpb24gY2FsbGJhY2tcbiAgICAgICAgdGltZW91dER1cmF0aW9uOiB0eXBlcygnbnVtYmVyJykgLy8gdGhlIHRocm90dGxlIGR1cmF0aW9uIG9mIHRoZSBpbnB1dCByYXRlXG4gICAgfSxcbiAgICAvKipcbiAgICAqIEluaXRpYWwgc3RhdGUuXG4gICAgKiBSZXRyaWV2ZSB0aGUgdmFsdWUgZnJvbSB0aGUgcHJvdmlkZWQgY29kZSBhbmQgcGljayBsaXN0LlxuICAgICogQHJldHVybiB7T2JqZWN0fSBpbml0aWFsIHN0YXRlXG4gICAgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgY29kZSwgcGlja0xpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgdmFsdWU6IDAgPCBwaWNrTGlzdC5sZW5ndGggPyB0aGlzLl9nZXRWYWx1ZUZyb21Db2RlKGNvZGUpIDogY29kZSxcbiAgICAgICAgICAgIGZyb21Db2RlUmVzb2x2ZXI6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBDb21wb25lbnQgd2lsbCByZWNlaXZlIHByb3BzLlxuICAgICogVXBkYXRlIHRoZSBwaWNrIGxpc3QsIGFuZCB0cnkgdG8gcmVzb2x2ZSB0aGUgbmV3IHZhbHVlLlxuICAgICogQHBhcmFtICB7T2JqZWN0fSBuZXh0UHJvcHMgbmV3IHByb3BzXG4gICAgKi9cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgcGlja0xpc3QsIGNvZGUgfSkge1xuICAgICAgICBpZiAoY29kZSAhPT0gdGhpcy5wcm9wcy5jb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlVmFsdWVGcm9tUGlja2xpc3RPckNvZGVSZXNvbHZlcihjb2RlLCBwaWNrTGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXdlc29tZXBsZXRlLmxpc3QgPSB0aGlzLl9leHRyYWN0TGlzdEZyb21EYXRhKHBpY2tMaXN0KTtcbiAgICB9LFxuICAgIF9yZXNvbHZlVmFsdWVGcm9tUGlja2xpc3RPckNvZGVSZXNvbHZlcihjb2RlLCBwaWNrTGlzdCkge1xuICAgICAgICBjb25zdCB7IGNvZGVSZXNvbHZlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9nZXRWYWx1ZUZyb21Db2RlKGNvZGUsIHBpY2tMaXN0KTtcbiAgICAgICAgaWYgKCcnICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIH0gZWxzZSBpZiAoY29kZVJlc29sdmVyKSB7XG4gICAgICAgICAgICBjb2RlUmVzb2x2ZXIoY29kZSkudGhlbihyZXNvbHZlZFZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoJycgIT09IHJlc29sdmVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiByZXNvbHZlZFZhbHVlLCBmcm9tQ29kZVJlc29sdmVyOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5wdXRDaGFuZ2VIYW5kbGVyKHJlc29sdmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFNlbGVjdGlvbiBoYW5kbGVyLlxuICAgICogSWYgYSBzZWxlY3Rpb24gaGFuZGxlciBpcyBzZXQgaW4gdGhlIHByb3BzLCBzZW5kIGl0IHRoZSBzZWxlY3RlZCBwaWNrLlxuICAgICogQWxzbywgc2V0IGEgZmxhZyB0byB0ZWxsIHRoZSBibHVyIGxpc3RlbmVyIG5vdCB0byBlbXB0eSB0aGUgdmFsdWUsIGJlY2F1c2UgdGhlIHNlbGVjdGlvbiwgYXMgaXQgaXMgYSBjbGljayBvdXRzaWRlIHRoZSBpbnB1dCwgcmFpc2VzIGEgYmx1ciBldmVudC5cbiAgICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgc2VsZWN0ZWQgdmFsdWUgZnJvbSB0aGUgZHJvcGRvd24gbGlzdFxuICAgICovXG4gICAgX3NlbGVjdGlvbkhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3Rpb25IYW5kbGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoc2VsZWN0aW9uSGFuZGxlcikge1xuICAgICAgICAgICAgY29uc3QgeyBwaWNrTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUGljayA9IGZpbmQocGlja0xpc3QsIHsgdmFsdWUgfSk7XG4gICAgICAgICAgICBzZWxlY3Rpb25IYW5kbGVyKHNlbGVjdGVkUGljayk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNTZWxlY3RpbmcgPSB0cnVlOyAvLyBQcml2YXRlIGZsYWcgdG8gdGVsbCB0aGUgYmx1ciBsaXN0ZW5lciBub3QgdG8gcmVwbGFjZSB0aGUgdmFsdWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBFeHRyYWN0IGxpc3Qgb2Ygc3VnZ2VzdGlvbnMgZnJvbSBwaWNrIGxpc3RcbiAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSB0aGUgcGljayBsaXN0XG4gICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICB0aGUgc3VnZ2VzdGlvbiBhcnJheVxuICAgICovXG4gICAgX2V4dHJhY3RMaXN0RnJvbURhdGEoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0udmFsdWUpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgY29kZSBmcm9tIHZhbHVlIGluIHRoZSBwaWNrIGxpc3RcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgdGhlIHZhbHVlXG4gICAgKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBjb2RlXG4gICAgKi9cbiAgICBfZ2V0Q29kZUZyb21WYWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCB7IHBpY2tMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBwaWNrID0gZmluZChwaWNrTGlzdCwgeyB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHBpY2sgPyBwaWNrLmNvZGUgOiBwaWNrO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgdmFsdWUgZnJvbSBjb2RlIGluIHRoZSBwaWNrIGxpc3RcbiAgICAqIEBwYXJhbSAge1N0cmluZ30gY29kZSB0aGUgY29kZVxuICAgICogQHBhcmFtICB7T2JqZWN0fSBwaWNrTGlzdD10aGlzLnByb3BzLnBpY2tMaXN0ICBvcHRpb25hbCBwaWNrIGxpc3QgdG8gcmVzb2x2ZSB0aGUgdmFsdWUgZnJvbVxuICAgICogQHJldHVybiB7U3RyaW5nfSB2YWx1ZVxuICAgICovXG4gICAgX2dldFZhbHVlRnJvbUNvZGUoY29kZSwgcGlja0xpc3QgPSB0aGlzLnByb3BzLnBpY2tMaXN0KSB7XG4gICAgICAgIGNvbnN0IHBpY2sgPSBmaW5kKHBpY2tMaXN0LCB7IGNvZGUgfSk7XG4gICAgICAgIHJldHVybiBwaWNrID8gcGljay52YWx1ZSA6ICcnO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIGN1cnJlbnQgY29kZVxuICAgICogQHJldHVybiB7U3RyaW5nfSB0aGUgY29kZVxuICAgICovXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCB7IGFsbG93VW5tYXRjaGVkVmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVkVmFsdWUgPSB0aGlzLl9nZXRDb2RlRnJvbVZhbHVlKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVkVmFsdWUgPyBjb21wdXRlZFZhbHVlIDogYWxsb3dVbm1hdGNoZWRWYWx1ZSA/IHZhbHVlIDogdGhpcy5wcm9wcy5jb2RlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBPbiBpbnB1dCBibHVyLlxuICAgICogSWYgYWxsb3dVbm1hdGNoZWRWYWx1ZSBpcyBzZXQgaW4gdGhlIHByb3BzLCB2YWxpZGF0ZSB0aGUgY3VycmVudCB2YWx1ZSBhbmQgZXJhc2UgaXQgaWYgbm90IHZhbGlkLlxuICAgICovXG4gICAgX29uSW5wdXRCbHVyKCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBmcm9tQ29kZVJlc29sdmVyIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IGFsbG93VW5tYXRjaGVkVmFsdWUsIG9uSW5wdXRCbHVyLCBwaWNrTGlzdCwgc2VsZWN0aW9uSGFuZGxlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQaWNrID0gZmluZChwaWNrTGlzdCwgeyB2YWx1ZSB9KTtcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuX2dldENvZGVGcm9tVmFsdWUodmFsdWUpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRQaWNrICYmICF0aGlzLl9pc1NlbGVjdGluZyAmJiBzZWxlY3Rpb25IYW5kbGVyKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25IYW5kbGVyKHNlbGVjdGVkUGljayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb2RlICYmICFhbGxvd1VubWF0Y2hlZFZhbHVlICYmICF0aGlzLl9pc1NlbGVjdGluZyAmJiAhZnJvbUNvZGVSZXNvbHZlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9KTtcbiAgICAgICAgICAgIHNlbGVjdGlvbkhhbmRsZXIgJiYgc2VsZWN0aW9uSGFuZGxlcih7IGNvZGU6ICcnLCB2YWx1ZTogJycgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBvbklucHV0Qmx1ciAmJiBvbklucHV0Qmx1cigpO1xuXG4gICAgICAgIHRoaXMuX2lzU2VsZWN0aW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIE9uIGlucHV0IGNoYW5nZVxuICAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudCBjaGFuZ2UgZXZlbnRcbiAgICAqL1xuICAgIF9vbklucHV0Q2hhbmdlKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGZyb21Db2RlUmVzb2x2ZXI6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLl9kZWJvdW5jZWRJbnB1dENoYW5nZUhhbmRsZXIodmFsdWUpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXJcbiAgICAqIEByZXR1cm4ge0hUTUx9IHJlbmRlcmVkIGVsZW1lbnRcbiAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyB0aW1lb3V0RHVyYXRpb24sIElucHV0QXV0b0NvbXBsZXRlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IF9vbklucHV0Qmx1ciwgX29uSW5wdXRDaGFuZ2UgfSA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2F1dG9jb21wbGV0ZSc+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBJbnB1dEF1dG9Db21wbGV0ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBdXRvQ29tcGxldGUgb25CbHVyPXtfb25JbnB1dEJsdXJ9IG9uQ2hhbmdlPXtfb25JbnB1dENoYW5nZX0gcmVmPSdpbnB1dCcgdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0VGV4dCBvbkJsdXI9e19vbklucHV0Qmx1cn0gb25DaGFuZ2U9e19vbklucHV0Q2hhbmdlfSByZWY9J2lucHV0JyB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKEF1dG9jb21wbGV0ZSk7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==