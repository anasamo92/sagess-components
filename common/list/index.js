'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = exports.component = undefined;

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _omit = require('lodash/object/omit');

var _omit2 = _interopRequireDefault(_omit);

var _memoryScroll = require('../../list/mixin/memory-scroll');

var _memoryScroll2 = _interopRequireDefault(_memoryScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MemoryListMixin = {
    mixins: [_memoryScroll2.default],

    propTypes: {
        listComponent: (0, _types2.default)(['func', 'object'])
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/list instead');
    },

    /** @inheritdoc */
    render: function render() {
        var data = this.props.data || [];
        var hasMoreData = data.length > this.state.maxElements;
        var childProps = (0, _omit2.default)(this.props, ['lineComponent', 'data']);
        return _react2.default.createElement(this.props.listComponent, Object.assign({
            ref: 'list',
            data: this.getDataToUse(),
            hasMoreData: hasMoreData,
            LineComponent: this.props.LineComponent,
            isSelection: false,
            isManualFetch: true,
            fetchNextPage: this.fetchNextPage,
            reference: this.getReference()
        }, childProps));
    }
};

var builtComp = (0, _builder2.default)(MemoryListMixin);
var component = builtComp.component,
    mixin = builtComp.mixin;
exports.component = component;
exports.mixin = mixin;
exports.default = builtComp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiTWVtb3J5TGlzdE1peGluIiwibWl4aW5zIiwibWVtb3J5TWl4aW4iLCJwcm9wVHlwZXMiLCJsaXN0Q29tcG9uZW50IiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJyZW5kZXIiLCJkYXRhIiwicHJvcHMiLCJoYXNNb3JlRGF0YSIsImxlbmd0aCIsInN0YXRlIiwibWF4RWxlbWVudHMiLCJjaGlsZFByb3BzIiwiZ2V0RGF0YVRvVXNlIiwiTGluZUNvbXBvbmVudCIsImZldGNoTmV4dFBhZ2UiLCJnZXRSZWZlcmVuY2UiLCJidWlsdENvbXAiLCJjb21wb25lbnQiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLGtCQUFrQjtBQUNsQkMsWUFBUSxDQUFDQyxzQkFBRCxDQURVOztBQUdsQkMsZUFBVztBQUNQQyx1QkFBZSxxQkFBSyxDQUFDLE1BQUQsRUFBUyxRQUFULENBQUw7QUFEUixLQUhPO0FBTWxCQyxzQkFOa0IsZ0NBTUc7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsaUdBQWI7QUFDSCxLQVJpQjs7QUFTbEI7QUFDQUMsVUFWa0Isb0JBVVQ7QUFDTCxZQUFJQyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0QsSUFBWCxJQUFtQixFQUE5QjtBQUNBLFlBQUlFLGNBQWNGLEtBQUtHLE1BQUwsR0FBYyxLQUFLQyxLQUFMLENBQVdDLFdBQTNDO0FBQ0EsWUFBSUMsYUFBYSxvQkFBSyxLQUFLTCxLQUFWLEVBQWlCLENBQUMsZUFBRCxFQUFrQixNQUFsQixDQUFqQixDQUFqQjtBQUNBLGVBQ0ksbUNBQU0sS0FBTixDQUFZLGFBQVo7QUFDSSxpQkFBSSxNQURSO0FBRUksa0JBQU0sS0FBS00sWUFBTCxFQUZWO0FBR0kseUJBQWFMLFdBSGpCO0FBSUksMkJBQWUsS0FBS0QsS0FBTCxDQUFXTyxhQUo5QjtBQUtJLHlCQUFhLEtBTGpCO0FBTUksK0JBTko7QUFPSSwyQkFBZSxLQUFLQyxhQVB4QjtBQVFJLHVCQUFXLEtBQUtDLFlBQUw7QUFSZixXQVNRSixVQVRSLEVBREo7QUFhSDtBQTNCaUIsQ0FBdEI7O0FBOEJBLElBQU1LLFlBQVksdUJBQVFwQixlQUFSLENBQWxCO0lBQ1FxQixTLEdBQXFCRCxTLENBQXJCQyxTO0lBQVdDLEssR0FBVUYsUyxDQUFWRSxLO1FBR2ZELFMsR0FBQUEsUztRQUNBQyxLLEdBQUFBLEs7a0JBRVdGLFMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IG9taXQgZnJvbSAnbG9kYXNoL29iamVjdC9vbWl0JztcbmltcG9ydCBtZW1vcnlNaXhpbiBmcm9tICcuLi8uLi9saXN0L21peGluL21lbW9yeS1zY3JvbGwnO1xuXG5sZXQgTWVtb3J5TGlzdE1peGluID0ge1xuICAgIG1peGluczogW21lbW9yeU1peGluXSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgICBsaXN0Q29tcG9uZW50OiB0eXBlKFsnZnVuYycsICdvYmplY3QnXSlcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIDIuMi4wOiB0aGlzIGNvbXBvbmVudCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIHNhZ2Vzcy1jb21wb25lbnRzL2xpc3QgaW5zdGVhZCcpO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YSB8fCBbXTtcbiAgICAgICAgbGV0IGhhc01vcmVEYXRhID0gZGF0YS5sZW5ndGggPiB0aGlzLnN0YXRlLm1heEVsZW1lbnRzO1xuICAgICAgICBsZXQgY2hpbGRQcm9wcyA9IG9taXQodGhpcy5wcm9wcywgWydsaW5lQ29tcG9uZW50JywgJ2RhdGEnXSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGhpcy5wcm9wcy5saXN0Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgcmVmPSdsaXN0J1xuICAgICAgICAgICAgICAgIGRhdGE9e3RoaXMuZ2V0RGF0YVRvVXNlKCl9XG4gICAgICAgICAgICAgICAgaGFzTW9yZURhdGE9e2hhc01vcmVEYXRhfVxuICAgICAgICAgICAgICAgIExpbmVDb21wb25lbnQ9e3RoaXMucHJvcHMuTGluZUNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICBpc1NlbGVjdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgaXNNYW51YWxGZXRjaFxuICAgICAgICAgICAgICAgIGZldGNoTmV4dFBhZ2U9e3RoaXMuZmV0Y2hOZXh0UGFnZX1cbiAgICAgICAgICAgICAgICByZWZlcmVuY2U9e3RoaXMuZ2V0UmVmZXJlbmNlKCl9XG4gICAgICAgICAgICAgICAgey4uLmNoaWxkUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IGJ1aWx0Q29tcCA9IGJ1aWxkZXIoTWVtb3J5TGlzdE1peGluKTtcbmNvbnN0IHsgY29tcG9uZW50LCBtaXhpbiB9ID0gYnVpbHRDb21wO1xuXG5leHBvcnQge1xuICAgIGNvbXBvbmVudCxcbiAgICBtaXhpblxufVxuZXhwb3J0IGRlZmF1bHQgYnVpbHRDb21wO1xuIl19