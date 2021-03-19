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

var _mdlBehaviour = require('../mixin/mdl-behaviour');

var _mdlBehaviour2 = _interopRequireDefault(_mdlBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
var Progress = {
    mixins: [_mdlBehaviour2.default],
    /**
     * Get default props
     * @return {Object} the default props
     */
    getDefaultProps: function getDefaultProps() {
        return {
            completed: 0
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/progress-bar instead');
    },
    componentDidMount: function componentDidMount() {
        var bar = _reactDom2.default.findDOMNode(this.refs.bar);
        if (bar) {
            bar.MaterialProgress.setProgress(0);
            bar.MaterialProgress.setBuffer(100);
        }
    },

    /**
     * Component will receive props
     * @param  {Object} completed new completed prop
     */
    componentWillReceiveProps: function componentWillReceiveProps(_ref) {
        var completed = _ref.completed;

        if (0 > completed) {
            completed = 0;
        }
        if (100 < completed) {
            completed = 100;
        }
        var bar = _reactDom2.default.findDOMNode(this.refs.bar);
        if (bar) {
            bar.MaterialProgress.setProgress(completed);
            bar.MaterialProgress.setBuffer(100);
        }
    },

    /**
     * Render the component
     * @return {Function} the rendered component
     */
    render: function render() {
        var completed = +this.props.completed;
        if (0 > completed) {
            completed = 0;
        }
        if (100 < completed) {
            completed = 100;
        }
        return _react2.default.createElement('div', { className: 'mdl-progress mdl-js-progress', 'data-focus': 'progress-bar', ref: 'bar' });
    }
};
// Mixins

var _builder = (0, _builder3.default)(Progress),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiUHJvZ3Jlc3MiLCJtaXhpbnMiLCJtZGxCZWhhdmlvdXIiLCJnZXREZWZhdWx0UHJvcHMiLCJjb21wbGV0ZWQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsImNvbXBvbmVudERpZE1vdW50IiwiYmFyIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInJlZnMiLCJNYXRlcmlhbFByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJzZXRCdWZmZXIiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwicmVuZGVyIiwicHJvcHMiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFMQTtBQU9BLElBQU1BLFdBQVc7QUFDYkMsWUFBUSxDQUFDQyxzQkFBRCxDQURLO0FBRWI7Ozs7QUFJQUMsbUJBTmEsNkJBTUs7QUFDZCxlQUFPO0FBQ0hDLHVCQUFXO0FBRFIsU0FBUDtBQUdILEtBVlk7QUFXYkMsc0JBWGEsZ0NBV1E7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsb0hBQWI7QUFDSCxLQWJZO0FBY2JDLHFCQWRhLCtCQWNPO0FBQ2hCLFlBQU1DLE1BQU1DLG1CQUFTQyxXQUFULENBQXFCLEtBQUtDLElBQUwsQ0FBVUgsR0FBL0IsQ0FBWjtBQUNBLFlBQUlBLEdBQUosRUFBUztBQUNMQSxnQkFBSUksZ0JBQUosQ0FBcUJDLFdBQXJCLENBQWlDLENBQWpDO0FBQ0FMLGdCQUFJSSxnQkFBSixDQUFxQkUsU0FBckIsQ0FBK0IsR0FBL0I7QUFDSDtBQUNKLEtBcEJZOztBQXFCYjs7OztBQUlBQyw2QkF6QmEsMkNBeUI0QjtBQUFBLFlBQWJaLFNBQWEsUUFBYkEsU0FBYTs7QUFDckMsWUFBSSxJQUFJQSxTQUFSLEVBQW1CO0FBQ2ZBLHdCQUFZLENBQVo7QUFDSDtBQUNELFlBQUksTUFBTUEsU0FBVixFQUFxQjtBQUNqQkEsd0JBQVksR0FBWjtBQUNIO0FBQ0QsWUFBTUssTUFBTUMsbUJBQVNDLFdBQVQsQ0FBcUIsS0FBS0MsSUFBTCxDQUFVSCxHQUEvQixDQUFaO0FBQ0EsWUFBSUEsR0FBSixFQUFTO0FBQ0xBLGdCQUFJSSxnQkFBSixDQUFxQkMsV0FBckIsQ0FBaUNWLFNBQWpDO0FBQ0FLLGdCQUFJSSxnQkFBSixDQUFxQkUsU0FBckIsQ0FBK0IsR0FBL0I7QUFDSDtBQUNKLEtBckNZOztBQXNDYjs7OztBQUlBRSxVQTFDYSxvQkEwQ0o7QUFDTCxZQUFJYixZQUFZLENBQUMsS0FBS2MsS0FBTCxDQUFXZCxTQUE1QjtBQUNBLFlBQUksSUFBSUEsU0FBUixFQUFtQjtBQUNmQSx3QkFBWSxDQUFaO0FBQ0g7QUFDRCxZQUFJLE1BQU1BLFNBQVYsRUFBcUI7QUFDakJBLHdCQUFZLEdBQVo7QUFDSDtBQUNELGVBQ0ksdUNBQUssV0FBVSw4QkFBZixFQUE4QyxjQUFXLGNBQXpELEVBQXdFLEtBQUksS0FBNUUsR0FESjtBQUdIO0FBckRZLENBQWpCO0FBSEE7O2VBMkQ2Qix1QkFBUUosUUFBUixDO0lBQXJCbUIsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuLy8gTWl4aW5zXG5pbXBvcnQgbWRsQmVoYXZpb3VyIGZyb20gJy4uL21peGluL21kbC1iZWhhdmlvdXInO1xuXG5jb25zdCBQcm9ncmVzcyA9IHtcbiAgICBtaXhpbnM6IFttZGxCZWhhdmlvdXJdLFxuICAgIC8qKlxuICAgICAqIEdldCBkZWZhdWx0IHByb3BzXG4gICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgZGVmYXVsdCBwcm9wc1xuICAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZDogMFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgMi4yLjA6IHRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2Ugc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIgaW5zdGVhZCcpO1xuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGJhciA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5iYXIpO1xuICAgICAgICBpZiAoYmFyKSB7XG4gICAgICAgICAgICBiYXIuTWF0ZXJpYWxQcm9ncmVzcy5zZXRQcm9ncmVzcygwKTtcbiAgICAgICAgICAgIGJhci5NYXRlcmlhbFByb2dyZXNzLnNldEJ1ZmZlcigxMDApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQgd2lsbCByZWNlaXZlIHByb3BzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjb21wbGV0ZWQgbmV3IGNvbXBsZXRlZCBwcm9wXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IGNvbXBsZXRlZCB9KSB7XG4gICAgICAgIGlmICgwID4gY29tcGxldGVkKSB7XG4gICAgICAgICAgICBjb21wbGV0ZWQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgxMDAgPCBjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9IDEwMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYXIgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuYmFyKTtcbiAgICAgICAgaWYgKGJhcikge1xuICAgICAgICAgICAgYmFyLk1hdGVyaWFsUHJvZ3Jlc3Muc2V0UHJvZ3Jlc3MoY29tcGxldGVkKTtcbiAgICAgICAgICAgIGJhci5NYXRlcmlhbFByb2dyZXNzLnNldEJ1ZmZlcigxMDApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudFxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgcmVuZGVyZWQgY29tcG9uZW50XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY29tcGxldGVkID0gK3RoaXMucHJvcHMuY29tcGxldGVkO1xuICAgICAgICBpZiAoMCA+IGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgY29tcGxldGVkID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoMTAwIDwgY29tcGxldGVkKSB7XG4gICAgICAgICAgICBjb21wbGV0ZWQgPSAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZGwtcHJvZ3Jlc3MgbWRsLWpzLXByb2dyZXNzJyBkYXRhLWZvY3VzPSdwcm9ncmVzcy1iYXInIHJlZj0nYmFyJyAvPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihQcm9ncmVzcyk7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==