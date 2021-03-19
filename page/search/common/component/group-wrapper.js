'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
var GroupWrapper = {
    getDefaultProps: function getDefaultProps() {
        return {
            groupComponent: undefined,
            groupKey: undefined,
            count: undefined,
            isUnique: false,
            showAllHandler: undefined,
            list: undefined,
            renderResultsList: undefined
        };
    },
    getInitialState: function getInitialState() {
        return {
            resultsDisplayedCount: this.props.initialRowsCount || 3
        };
    },
    _showMoreHandler: function _showMoreHandler() {
        this.setState({
            resultsDisplayedCount: this.state.resultsDisplayedCount + 3 <= this.props.list.length ? this.state.resultsDisplayedCount + 3 : this.props.list.length
        });
    },
    render: function render() {
        var list = this.props.isUnique ? this.props.list : this.props.list.slice(0, this.state.resultsDisplayedCount);
        return _react2.default.createElement(
            this.props.groupComponent,
            { canShowMore: this.props.list.length > this.state.resultsDisplayedCount, count: this.props.count, isUnique: this.props.isUnique, groupKey: this.props.groupKey, list: list, showAllHandler: this.props.showAllHandler, showMoreHandler: this._showMoreHandler },
            this.props.renderResultsList(list, this.props.groupKey, this.props.count, this.props.isUnique)
        );
    }
};

var _builder = (0, _builder3.default)(GroupWrapper),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiR3JvdXBXcmFwcGVyIiwiZ2V0RGVmYXVsdFByb3BzIiwiZ3JvdXBDb21wb25lbnQiLCJ1bmRlZmluZWQiLCJncm91cEtleSIsImNvdW50IiwiaXNVbmlxdWUiLCJzaG93QWxsSGFuZGxlciIsImxpc3QiLCJyZW5kZXJSZXN1bHRzTGlzdCIsImdldEluaXRpYWxTdGF0ZSIsInJlc3VsdHNEaXNwbGF5ZWRDb3VudCIsInByb3BzIiwiaW5pdGlhbFJvd3NDb3VudCIsIl9zaG93TW9yZUhhbmRsZXIiLCJzZXRTdGF0ZSIsInN0YXRlIiwibGVuZ3RoIiwicmVuZGVyIiwic2xpY2UiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUZBO0FBSUEsSUFBTUEsZUFBZTtBQUNqQkMsbUJBRGlCLDZCQUNDO0FBQ2QsZUFBUTtBQUNKQyw0QkFBZ0JDLFNBRFo7QUFFSkMsc0JBQVVELFNBRk47QUFHSkUsbUJBQU9GLFNBSEg7QUFJSkcsc0JBQVUsS0FKTjtBQUtKQyw0QkFBZ0JKLFNBTFo7QUFNSkssa0JBQU1MLFNBTkY7QUFPSk0sK0JBQW1CTjtBQVBmLFNBQVI7QUFTSCxLQVhnQjtBQVlqQk8sbUJBWmlCLDZCQVlDO0FBQ2QsZUFBUTtBQUNKQyxtQ0FBdUIsS0FBS0MsS0FBTCxDQUFXQyxnQkFBWCxJQUErQjtBQURsRCxTQUFSO0FBR0gsS0FoQmdCO0FBaUJqQkMsb0JBakJpQiw4QkFpQkU7QUFDZixhQUFLQyxRQUFMLENBQWM7QUFDVkosbUNBQXVCLEtBQUtLLEtBQUwsQ0FBV0wscUJBQVgsR0FBbUMsQ0FBbkMsSUFBd0MsS0FBS0MsS0FBTCxDQUFXSixJQUFYLENBQWdCUyxNQUF4RCxHQUFpRSxLQUFLRCxLQUFMLENBQVdMLHFCQUFYLEdBQW1DLENBQXBHLEdBQXdHLEtBQUtDLEtBQUwsQ0FBV0osSUFBWCxDQUFnQlM7QUFEckksU0FBZDtBQUdILEtBckJnQjtBQXNCakJDLFVBdEJpQixvQkFzQlI7QUFDTCxZQUFNVixPQUFPLEtBQUtJLEtBQUwsQ0FBV04sUUFBWCxHQUFzQixLQUFLTSxLQUFMLENBQVdKLElBQWpDLEdBQXdDLEtBQUtJLEtBQUwsQ0FBV0osSUFBWCxDQUFnQlcsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUIsS0FBS0gsS0FBTCxDQUFXTCxxQkFBcEMsQ0FBckQ7QUFDQSxlQUNJO0FBQUEsaUJBQU0sS0FBTixDQUFZLGNBQVo7QUFBQSxjQUEyQixhQUFhLEtBQUtDLEtBQUwsQ0FBV0osSUFBWCxDQUFnQlMsTUFBaEIsR0FBeUIsS0FBS0QsS0FBTCxDQUFXTCxxQkFBNUUsRUFBbUcsT0FBTyxLQUFLQyxLQUFMLENBQVdQLEtBQXJILEVBQTRILFVBQVUsS0FBS08sS0FBTCxDQUFXTixRQUFqSixFQUEySixVQUFVLEtBQUtNLEtBQUwsQ0FBV1IsUUFBaEwsRUFBMEwsTUFBTUksSUFBaE0sRUFBc00sZ0JBQWdCLEtBQUtJLEtBQUwsQ0FBV0wsY0FBak8sRUFBaVAsaUJBQWlCLEtBQUtPLGdCQUF2UTtBQUNLLGlCQUFLRixLQUFMLENBQVdILGlCQUFYLENBQTZCRCxJQUE3QixFQUFtQyxLQUFLSSxLQUFMLENBQVdSLFFBQTlDLEVBQXdELEtBQUtRLEtBQUwsQ0FBV1AsS0FBbkUsRUFBMEUsS0FBS08sS0FBTCxDQUFXTixRQUFyRjtBQURMLFNBREo7QUFLSDtBQTdCZ0IsQ0FBckI7O2VBZ0M2Qix1QkFBUU4sWUFBUixDO0lBQXJCb0IsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcblxuY29uc3QgR3JvdXBXcmFwcGVyID0ge1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBncm91cENvbXBvbmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ3JvdXBLZXk6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvdW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBpc1VuaXF1ZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93QWxsSGFuZGxlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGlzdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVuZGVyUmVzdWx0c0xpc3Q6IHVuZGVmaW5lZFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICByZXN1bHRzRGlzcGxheWVkQ291bnQ6IHRoaXMucHJvcHMuaW5pdGlhbFJvd3NDb3VudCB8fCAzXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgX3Nob3dNb3JlSGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZXN1bHRzRGlzcGxheWVkQ291bnQ6IHRoaXMuc3RhdGUucmVzdWx0c0Rpc3BsYXllZENvdW50ICsgMyA8PSB0aGlzLnByb3BzLmxpc3QubGVuZ3RoID8gdGhpcy5zdGF0ZS5yZXN1bHRzRGlzcGxheWVkQ291bnQgKyAzIDogdGhpcy5wcm9wcy5saXN0Lmxlbmd0aFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMucHJvcHMuaXNVbmlxdWUgPyB0aGlzLnByb3BzLmxpc3QgOiB0aGlzLnByb3BzLmxpc3Quc2xpY2UoMCwgdGhpcy5zdGF0ZS5yZXN1bHRzRGlzcGxheWVkQ291bnQpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoaXMucHJvcHMuZ3JvdXBDb21wb25lbnQgY2FuU2hvd01vcmU9e3RoaXMucHJvcHMubGlzdC5sZW5ndGggPiB0aGlzLnN0YXRlLnJlc3VsdHNEaXNwbGF5ZWRDb3VudH0gY291bnQ9e3RoaXMucHJvcHMuY291bnR9IGlzVW5pcXVlPXt0aGlzLnByb3BzLmlzVW5pcXVlfSBncm91cEtleT17dGhpcy5wcm9wcy5ncm91cEtleX0gbGlzdD17bGlzdH0gc2hvd0FsbEhhbmRsZXI9e3RoaXMucHJvcHMuc2hvd0FsbEhhbmRsZXJ9IHNob3dNb3JlSGFuZGxlcj17dGhpcy5fc2hvd01vcmVIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZW5kZXJSZXN1bHRzTGlzdChsaXN0LCB0aGlzLnByb3BzLmdyb3VwS2V5LCB0aGlzLnByb3BzLmNvdW50LCB0aGlzLnByb3BzLmlzVW5pcXVlKX1cbiAgICAgICAgICAgIDwvdGhpcy5wcm9wcy5ncm91cENvbXBvbmVudD5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoR3JvdXBXcmFwcGVyKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19