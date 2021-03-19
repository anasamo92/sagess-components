'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markdownEditorMixin = {
    /** @inherideddoc */
    getInitialState: function getInitialState() {
        return { value: this.props.value };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/input/rich-text instead');
    },

    /** @inherideddoc */
    componentDidMount: function componentDidMount() {
        if (!window.Showdown) {
            console.warn('The showdown library should be imported. See https://github.com/showdownjs/showdown');
        }
    },

    /**
     * Handle the change of the value.
     */
    handleChange: function handleChange() {
        this.setState({ value: _reactDom2.default.findDOMNode(this.refs.textarea).value });
    },

    /** @inherideddoc */
    render: function render() {
        var converter = window.Showdown ? function (data) {
            console.warn('showdown should be imported/');return data;
        } : new window.Showdown.converter();
        return _react2.default.createElement(
            'div',
            { className: 'MarkdownEditor' },
            _react2.default.createElement('textarea', {
                onChange: this.handleChange,
                ref: 'textarea',
                defaultValue: this.state.value
            }),
            _react2.default.createElement('div', {
                className: 'content',
                dangerouslySetInnerHTML: {
                    __html: converter.makeHtml(this.state.value)
                }
            })
        );
    }
}; //Dependencies.

var _builder = (0, _builder3.default)(markdownEditorMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibWFya2Rvd25FZGl0b3JNaXhpbiIsImdldEluaXRpYWxTdGF0ZSIsInZhbHVlIiwicHJvcHMiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiU2hvd2Rvd24iLCJoYW5kbGVDaGFuZ2UiLCJzZXRTdGF0ZSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZWZzIiwidGV4dGFyZWEiLCJyZW5kZXIiLCJjb252ZXJ0ZXIiLCJkYXRhIiwic3RhdGUiLCJfX2h0bWwiLCJtYWtlSHRtbCIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxzQkFBc0I7QUFDeEI7QUFDQUMsbUJBRndCLDZCQUVOO0FBQ2QsZUFBTyxFQUFFQyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0QsS0FBcEIsRUFBUDtBQUNILEtBSnVCO0FBS3hCRSxzQkFMd0IsZ0NBS0g7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsdUhBQWI7QUFDSCxLQVB1Qjs7QUFReEI7QUFDQUMscUJBVHdCLCtCQVNKO0FBQ2hCLFlBQUksQ0FBQ0MsT0FBT0MsUUFBWixFQUFzQjtBQUNsQkosb0JBQVFDLElBQVIsQ0FBYSxxRkFBYjtBQUNIO0FBQ0osS0FidUI7O0FBY3hCOzs7QUFHQUksZ0JBakJ3QiwwQkFpQlQ7QUFDWCxhQUFLQyxRQUFMLENBQWMsRUFBRVQsT0FBT1UsbUJBQVNDLFdBQVQsQ0FBcUIsS0FBS0MsSUFBTCxDQUFVQyxRQUEvQixFQUF5Q2IsS0FBbEQsRUFBZDtBQUNILEtBbkJ1Qjs7QUFvQnhCO0FBQ0FjLFVBckJ3QixvQkFxQmY7QUFDTCxZQUFNQyxZQUFZVCxPQUFPQyxRQUFQLEdBQ1osVUFBQ1MsSUFBRCxFQUFVO0FBQUViLG9CQUFRQyxJQUFSLENBQWEsOEJBQWIsRUFBOEMsT0FBT1ksSUFBUDtBQUFjLFNBRDVELEdBRVosSUFBSVYsT0FBT0MsUUFBUCxDQUFnQlEsU0FBcEIsRUFGTjtBQUdBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxnQkFBZjtBQUNJO0FBQ0ksMEJBQVUsS0FBS1AsWUFEbkI7QUFFSSxxQkFBSSxVQUZSO0FBR0ksOEJBQWMsS0FBS1MsS0FBTCxDQUFXakI7QUFIN0IsY0FESjtBQU9JO0FBQ0ksMkJBQVUsU0FEZDtBQUVJLHlDQUF5QjtBQUNyQmtCLDRCQUFRSCxVQUFVSSxRQUFWLENBQW1CLEtBQUtGLEtBQUwsQ0FBV2pCLEtBQTlCO0FBRGE7QUFGN0I7QUFQSixTQURKO0FBZ0JIO0FBekN1QixDQUE1QixDLENBTEE7O2VBaUQ2Qix1QkFBUUYsbUJBQVIsQztJQUFyQnNCLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0RlcGVuZGVuY2llcy5cbmltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3QgbWFya2Rvd25FZGl0b3JNaXhpbiA9IHtcbiAgICAvKiogQGluaGVyaWRlZGRvYyAqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIDIuMi4wOiB0aGlzIGNvbXBvbmVudCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIHNhZ2Vzcy1jb21wb25lbnRzL2NvbXBvbmVudHMvaW5wdXQvcmljaC10ZXh0IGluc3RlYWQnKTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpZGVkZG9jICovXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghd2luZG93LlNob3dkb3duKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBzaG93ZG93biBsaWJyYXJ5IHNob3VsZCBiZSBpbXBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaG93ZG93bmpzL3Nob3dkb3duJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgY2hhbmdlIG9mIHRoZSB2YWx1ZS5cbiAgICAgKi9cbiAgICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnRleHRhcmVhKS52YWx1ZSB9KTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpZGVkZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSB3aW5kb3cuU2hvd2Rvd25cbiAgICAgICAgICAgID8gKGRhdGEpID0+IHsgY29uc29sZS53YXJuKCdzaG93ZG93biBzaG91bGQgYmUgaW1wb3J0ZWQvJyk7IHJldHVybiBkYXRhOyB9XG4gICAgICAgICAgICA6IG5ldyB3aW5kb3cuU2hvd2Rvd24uY29udmVydGVyKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTWFya2Rvd25FZGl0b3InPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHJlZj0ndGV4dGFyZWEnXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvbnRlbnQnXG4gICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGNvbnZlcnRlci5tYWtlSHRtbCh0aGlzLnN0YXRlLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIobWFya2Rvd25FZGl0b3JNaXhpbik7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==