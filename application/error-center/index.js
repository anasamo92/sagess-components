'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REACT_NOT_COMPONENT_ERROR = 'Uncaught TypeError: undefined is not a function';
var REACT_NOT_COMPONENT_MESSAGE = 'Check your console errors, it seems you are trying to create a component from something which is not a component.';

/**
 * Error center component.
 * @example React.render(<ErrorCenter />, document.querySelector('#container'))
 * @type {Object}
 */
var errorCenter = {
    displayName: 'ErrorCenter',
    /** @inheriteddoc */
    getDefaultProps: function getDefaultProps() {
        return {
            source: window,
            errors: [],
            isErrorsVisible: false,
            numberDisplayed: 3
        };
    },

    /** @inheriteddoc */
    getInitialState: function getInitialState() {
        return { errors: this.props.errors, isErrorsVisible: this.props.isErrorsVisible };
    },

    /** @inheriteddoc */
    componentWillMount: function componentWillMount() {
        var _this = this;

        this.props.source.onerror = function (e) {
            var errors = _this.state.errors;

            errors.push(e);
            _this.setState({ errors: errors });
        };
    },

    /**
     * Toggle the visibility of the error component.
     */
    _toggleVisible: function _toggleVisible() {
        this.setState({ isErrorsVisible: !this.state.isErrorsVisible });
    },

    /**
     * Render all the errors.
     * @return {object} - The jsx errors.
     */
    _renderErrors: function _renderErrors() {
        var _this2 = this;

        var _state = this.state,
            errors = _state.errors,
            isErrorsVisible = _state.isErrorsVisible;
        var numberDisplayed = this.props.numberDisplayed;

        var errorLength = errors.length;
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'error-center' },
            _react2.default.createElement(
                'div',
                { 'data-focus': 'error-counter' },
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons', style: { cursor: 'pointer', fontSize: '28px', padding: '15px 5px 5px 5px' } },
                    'error'
                ),
                errorLength
            ),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'error-actions' },
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons', style: { cursor: 'pointer', fontSize: '36px', padding: '10px' }, onClick: function onClick() {
                            window.location.reload();
                        } },
                    'refresh'
                ),
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons', style: { cursor: 'pointer', fontSize: '36px', padding: '10px' }, onClick: this._toggleVisible },
                    'keyboard_arrow_' + (isErrorsVisible ? 'down' : 'up')
                ),
                _react2.default.createElement(
                    'i',
                    { className: 'material-icons', style: { cursor: 'pointer', fontSize: '36px', padding: '10px' }, onClick: function onClick() {
                            _this2.setState({ errors: [] });
                        } },
                    'delete'
                )
            ),
            _react2.default.createElement(
                'ul',
                { 'data-focus': 'error-stack' },
                isErrorsVisible ? errors.slice(errorLength - numberDisplayed, errorLength).map(function (err) {
                    var e = REACT_NOT_COMPONENT_ERROR === err ? REACT_NOT_COMPONENT_MESSAGE : err;return _react2.default.createElement(
                        'li',
                        null,
                        e
                    );
                }) : null
            )
        );
    },

    /** @inheriteddoc */
    render: function render() {
        return 0 < this.state.errors.length ? this._renderErrors() : null;
    }
};

var _builder = (0, _builder3.default)(errorCenter),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiUkVBQ1RfTk9UX0NPTVBPTkVOVF9FUlJPUiIsIlJFQUNUX05PVF9DT01QT05FTlRfTUVTU0FHRSIsImVycm9yQ2VudGVyIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJzb3VyY2UiLCJ3aW5kb3ciLCJlcnJvcnMiLCJpc0Vycm9yc1Zpc2libGUiLCJudW1iZXJEaXNwbGF5ZWQiLCJnZXRJbml0aWFsU3RhdGUiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsIm9uZXJyb3IiLCJlIiwic3RhdGUiLCJwdXNoIiwic2V0U3RhdGUiLCJfdG9nZ2xlVmlzaWJsZSIsIl9yZW5kZXJFcnJvcnMiLCJlcnJvckxlbmd0aCIsImxlbmd0aCIsImN1cnNvciIsImZvbnRTaXplIiwicGFkZGluZyIsImxvY2F0aW9uIiwicmVsb2FkIiwic2xpY2UiLCJtYXAiLCJlcnIiLCJyZW5kZXIiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLDRCQUE0QixpREFBbEM7QUFDQSxJQUFNQyw4QkFBOEIsbUhBQXBDOztBQUVBOzs7OztBQUtBLElBQU1DLGNBQWM7QUFDaEJDLGlCQUFhLGFBREc7QUFFaEI7QUFDQUMsbUJBSGdCLDZCQUdFO0FBQ2QsZUFBTztBQUNIQyxvQkFBUUMsTUFETDtBQUVIQyxvQkFBUSxFQUZMO0FBR0hDLDZCQUFpQixLQUhkO0FBSUhDLDZCQUFpQjtBQUpkLFNBQVA7QUFNSCxLQVZlOztBQVdoQjtBQUNBQyxtQkFaZ0IsNkJBWUU7QUFDZCxlQUFPLEVBQUVILFFBQVEsS0FBS0ksS0FBTCxDQUFXSixNQUFyQixFQUE2QkMsaUJBQWlCLEtBQUtHLEtBQUwsQ0FBV0gsZUFBekQsRUFBUDtBQUNILEtBZGU7O0FBZWhCO0FBQ0FJLHNCQWhCZ0IsZ0NBZ0JLO0FBQUE7O0FBQ2pCLGFBQUtELEtBQUwsQ0FBV04sTUFB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c3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJFQUNUX05PVF9DT01QT05FTlRfRVJST1IgPSAnVW5jYXVnaHQgVHlwZUVycm9yOiB1bmRlZmluZWQgaXMgbm90IGEgZnVuY3Rpb24nO1xuY29uc3QgUkVBQ1RfTk9UX0NPTVBPTkVOVF9NRVNTQUdFID0gJ0NoZWNrIHlvdXIgY29uc29sZSBlcnJvcnMsIGl0IHNlZW1zIHlvdSBhcmUgdHJ5aW5nIHRvIGNyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIHNvbWV0aGluZyB3aGljaCBpcyBub3QgYSBjb21wb25lbnQuJztcblxuLyoqXG4gKiBFcnJvciBjZW50ZXIgY29tcG9uZW50LlxuICogQGV4YW1wbGUgUmVhY3QucmVuZGVyKDxFcnJvckNlbnRlciAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpKVxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgZXJyb3JDZW50ZXIgPSB7XG4gICAgZGlzcGxheU5hbWU6ICdFcnJvckNlbnRlcicsXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb3VyY2U6IHdpbmRvdyxcbiAgICAgICAgICAgIGVycm9yczogW10sXG4gICAgICAgICAgICBpc0Vycm9yc1Zpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgbnVtYmVyRGlzcGxheWVkOiAzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGVkZG9jICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4geyBlcnJvcnM6IHRoaXMucHJvcHMuZXJyb3JzLCBpc0Vycm9yc1Zpc2libGU6IHRoaXMucHJvcHMuaXNFcnJvcnNWaXNpYmxlIH07XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRlZGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zb3VyY2Uub25lcnJvciA9ICgoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgZXJyb3JzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgZXJyb3JzLnB1c2goZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzOiBlcnJvcnMgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBlcnJvciBjb21wb25lbnQuXG4gICAgICovXG4gICAgX3RvZ2dsZVZpc2libGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Vycm9yc1Zpc2libGU6ICF0aGlzLnN0YXRlLmlzRXJyb3JzVmlzaWJsZSB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhbGwgdGhlIGVycm9ycy5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGpzeCBlcnJvcnMuXG4gICAgICovXG4gICAgX3JlbmRlckVycm9ycygpIHtcbiAgICAgICAgY29uc3QgeyBlcnJvcnMsIGlzRXJyb3JzVmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBudW1iZXJEaXNwbGF5ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGVycm9yTGVuZ3RoID0gZXJyb3JzLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nZXJyb3ItY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2Vycm9yLWNvdW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgZm9udFNpemU6ICcyOHB4JywgcGFkZGluZzogJzE1cHggNXB4IDVweCA1cHgnIH19PmVycm9yPC9pPntlcnJvckxlbmd0aH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2Vycm9yLWFjdGlvbnMnPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgZm9udFNpemU6ICczNnB4JywgcGFkZGluZzogJzEwcHgnIH19IG9uQ2xpY2s9eygpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9fT5yZWZyZXNoPC9pPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgZm9udFNpemU6ICczNnB4JywgcGFkZGluZzogJzEwcHgnIH19IG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVZpc2libGV9Pntga2V5Ym9hcmRfYXJyb3dfJHtpc0Vycm9yc1Zpc2libGUgPyAnZG93bicgOiAndXAnfWB9PC9pPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgZm9udFNpemU6ICczNnB4JywgcGFkZGluZzogJzEwcHgnIH19IG9uQ2xpY2s9eygpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IGVycm9yczogW10gfSk7IH19PmRlbGV0ZTwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgZGF0YS1mb2N1cz0nZXJyb3Itc3RhY2snPlxuICAgICAgICAgICAgICAgICAgICB7aXNFcnJvcnNWaXNpYmxlID8gZXJyb3JzLnNsaWNlKGVycm9yTGVuZ3RoIC0gbnVtYmVyRGlzcGxheWVkLCBlcnJvckxlbmd0aCkubWFwKChlcnIpID0+IHsgY29uc3QgZSA9IFJFQUNUX05PVF9DT01QT05FTlRfRVJST1IgPT09IGVyciA/IFJFQUNUX05PVF9DT01QT05FTlRfTUVTU0FHRSA6IGVycjsgcmV0dXJuIDxsaT57ZX08L2xpPjsgfSkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGVkZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gMCA8IHRoaXMuc3RhdGUuZXJyb3JzLmxlbmd0aCA/IHRoaXMuX3JlbmRlckVycm9ycygpIDogbnVsbDtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoZXJyb3JDZW50ZXIpO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=