'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _network = require('sagess-core/network');

var _progressBar = require('../../common/progress-bar');

var _icon = require('../../common/icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingBarMixin = {
    /** @inheriteddoc */
    getInitialState: function getInitialState() {
        return this._getStateFromStore();
    },

    /** @inheriteddoc */
    componentWillMount: function componentWillMount() {
        _network.builtInStore.addUpdateRequestListener(this._handleRequestsUpdate);
        _network.builtInStore.addClearRequestsListener(this._handleClearRequests);
    },

    /** @inheriteddoc */
    componentWillUnmount: function componentWillUnmount() {
        _network.builtInStore.removeUpdateRequestListener(this._handleRequestsUpdate);
        _network.builtInStore.removeClearRequestsListener(this._handleClearRequests);
    },
    _getStateFromStore: function _getStateFromStore() {
        return _network.builtInStore.getRequests();
    },
    _handleRequestsUpdate: function _handleRequestsUpdate(messageId) {
        this.setState(this._getStateFromStore());
    },
    _handleClearRequests: function _handleClearRequests() {
        this.setState({ requests: {} });
    },

    /** @inheriteddoc */
    render: function render() {
        var completed = +((this.state.total - this.state.pending) / this.state.total) * 100;
        var visible = false;
        var displayDevBar = this.props.displayDevBar;

        if (completed < 100) {
            visible = true;
        }
        //Else empty the loading list?
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'loading-bar' },
            visible && _react2.default.createElement(_progressBar.component, { completed: completed }),
            displayDevBar && _react2.default.createElement(
                'ul',
                { className: 'fa-ul' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_icon.component, { name: 'swap_vert' }),
                    ' pending ',
                    this.state.pending
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_icon.component, { name: 'not_interested' }),
                    ' cancelled ',
                    this.state.cancelled
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_icon.component, { name: 'check_circle' }),
                    ' success ',
                    this.state.success
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_icon.component, { name: 'error' }),
                    ' error ',
                    this.state.error
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_icon.component, { name: 'functions' }),
                    ' total ',
                    this.state.total
                )
            )
        );
    }
};

var _builder = (0, _builder3.default)(LoadingBarMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiTG9hZGluZ0Jhck1peGluIiwiZ2V0SW5pdGlhbFN0YXRlIiwiX2dldFN0YXRlRnJvbVN0b3JlIiwiY29tcG9uZW50V2lsbE1vdW50IiwicmVxdWVzdFN0b3JlIiwiYWRkVXBkYXRlUmVxdWVzdExpc3RlbmVyIiwiX2hhbmRsZVJlcXVlc3RzVXBkYXRlIiwiYWRkQ2xlYXJSZXF1ZXN0c0xpc3RlbmVyIiwiX2hhbmRsZUNsZWFyUmVxdWVzdHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZVVwZGF0ZVJlcXVlc3RMaXN0ZW5lciIsInJlbW92ZUNsZWFyUmVxdWVzdHNMaXN0ZW5lciIsImdldFJlcXVlc3RzIiwibWVzc2FnZUlkIiwic2V0U3RhdGUiLCJyZXF1ZXN0cyIsInJlbmRlciIsImNvbXBsZXRlZCIsInN0YXRlIiwidG90YWwiLCJwZW5kaW5nIiwidmlzaWJsZSIsImRpc3BsYXlEZXZCYXIiLCJwcm9wcyIsImNhbmNlbGxlZCIsInN1Y2Nlc3MiLCJlcnJvciIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBSUEsa0JBQWtCO0FBQ2xCO0FBQ0FDLG1CQUZrQiw2QkFFQTtBQUNkLGVBQU8sS0FBS0Msa0JBQUwsRUFBUDtBQUNILEtBSmlCOztBQUtsQjtBQUNBQyxzQkFOa0IsZ0NBTUc7QUFDakJDLDhCQUFhQyx3QkFBYixDQUFzQyxLQUFLQyxxQkFBM0M7QUFDQUYsOEJBQWFHLHdCQUFiLENBQXNDLEtBQUtDLG9CQUEzQztBQUNILEtBVGlCOztBQVVsQjtBQUNBQyx3QkFYa0Isa0NBV0s7QUFDbkJMLDhCQUFhTSwyQkFBYixDQUF5QyxLQUFLSixxQkFBOUM7QUFDQUYsOEJBQWFPLDJCQUFiLENBQXlDLEtBQUtILG9CQUE5QztBQUNILEtBZGlCO0FBZWxCTixzQkFma0IsZ0NBZUc7QUFDakIsZUFBT0Usc0JBQWFRLFdBQWIsRUFBUDtBQUNILEtBakJpQjtBQWtCbEJOLHlCQWxCa0IsaUNBa0JJTyxTQWxCSixFQWtCZTtBQUM3QixhQUFLQyxRQUFMLENBQWMsS0FBS1osa0JBQUwsRUFBZDtBQUNILEtBcEJpQjtBQXFCbEJNLHdCQXJCa0Isa0NBcUJLO0FBQ25CLGFBQUtNLFFBQUwsQ0FBYyxFQUFFQyxVQUFVLEVBQVosRUFBZDtBQUNILEtBdkJpQjs7QUF3QmxCO0FBQ0FDLFVBekJrQixvQkF5QlQ7QUFDTCxZQUFJQyxZQUFZLEVBQUUsQ0FBQyxLQUFLQyxLQUFMLENBQVdDLEtBQVgsR0FBbUIsS0FBS0QsS0FBTCxDQUFXRSxPQUEvQixJQUEwQyxLQUFLRixLQUFMLENBQVdDLEtBQXZELElBQWdFLEdBQWhGO0FBQ0EsWUFBSUUsVUFBVSxLQUFkO0FBRkssWUFHR0MsYUFISCxHQUdxQixLQUFLQyxLQUgxQixDQUdHRCxhQUhIOztBQUlMLFlBQUlMLFlBQVksR0FBaEIsRUFBcUI7QUFDakJJLHNCQUFVLElBQVY7QUFDSDtBQUNEO0FBQ0EsZUFDSTtBQUFBO0FBQUEsY0FBSyxjQUFXLGFBQWhCO0FBQ0tBLHVCQUFXLDhCQUFDLHNCQUFELElBQWEsV0FBV0osU0FBeEIsR0FEaEI7QUFFS0ssNkJBQ0c7QUFBQTtBQUFBLGtCQUFJLFdBQVUsT0FBZDtBQUNJO0FBQUE7QUFBQTtBQUFJLGtEQUFDLGVBQUQsSUFBTSxNQUFLLFdBQVgsR0FBSjtBQUFBO0FBQXVDLHlCQUFLSixLQUFMLENBQVdFO0FBQWxELGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUksa0RBQUMsZUFBRCxJQUFNLE1BQUssZ0JBQVgsR0FBSjtBQUFBO0FBQThDLHlCQUFLRixLQUFMLENBQVdNO0FBQXpELGlCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUksa0RBQUMsZUFBRCxJQUFNLE1BQUssY0FBWCxHQUFKO0FBQUE7QUFBMEMseUJBQUtOLEtBQUwsQ0FBV087QUFBckQsaUJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBSSxrREFBQyxlQUFELElBQU0sTUFBSyxPQUFYLEdBQUo7QUFBQTtBQUFpQyx5QkFBS1AsS0FBTCxDQUFXUTtBQUE1QyxpQkFKSjtBQUtJO0FBQUE7QUFBQTtBQUFJLGtEQUFDLGVBQUQsSUFBTSxNQUFLLFdBQVgsR0FBSjtBQUFBO0FBQXFDLHlCQUFLUixLQUFMLENBQVdDO0FBQWhEO0FBTEo7QUFIUixTQURKO0FBY0g7QUEvQ2lCLENBQXRCOztlQWtENkIsdUJBQVFuQixlQUFSLEM7SUFBckIyQixLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJ1aWx0SW5TdG9yZSBhcyByZXF1ZXN0U3RvcmUgfSBmcm9tICdzYWdlc3MtY29yZS9uZXR3b3JrJztcbmltcG9ydCB7IGNvbXBvbmVudCBhcyBQcm9ncmVzc0JhciB9IGZyb20gJy4uLy4uL2NvbW1vbi9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIEljb24gfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbic7XG5cbmxldCBMb2FkaW5nQmFyTWl4aW4gPSB7XG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRTdGF0ZUZyb21TdG9yZSgpO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHJlcXVlc3RTdG9yZS5hZGRVcGRhdGVSZXF1ZXN0TGlzdGVuZXIodGhpcy5faGFuZGxlUmVxdWVzdHNVcGRhdGUpO1xuICAgICAgICByZXF1ZXN0U3RvcmUuYWRkQ2xlYXJSZXF1ZXN0c0xpc3RlbmVyKHRoaXMuX2hhbmRsZUNsZWFyUmVxdWVzdHMpO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgcmVxdWVzdFN0b3JlLnJlbW92ZVVwZGF0ZVJlcXVlc3RMaXN0ZW5lcih0aGlzLl9oYW5kbGVSZXF1ZXN0c1VwZGF0ZSk7XG4gICAgICAgIHJlcXVlc3RTdG9yZS5yZW1vdmVDbGVhclJlcXVlc3RzTGlzdGVuZXIodGhpcy5faGFuZGxlQ2xlYXJSZXF1ZXN0cyk7XG4gICAgfSxcbiAgICBfZ2V0U3RhdGVGcm9tU3RvcmUoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0U3RvcmUuZ2V0UmVxdWVzdHMoKTtcbiAgICB9LFxuICAgIF9oYW5kbGVSZXF1ZXN0c1VwZGF0ZShtZXNzYWdlSWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRTdGF0ZUZyb21TdG9yZSgpKTtcbiAgICB9LFxuICAgIF9oYW5kbGVDbGVhclJlcXVlc3RzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVxdWVzdHM6IHt9IH0pO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjb21wbGV0ZWQgPSArKCh0aGlzLnN0YXRlLnRvdGFsIC0gdGhpcy5zdGF0ZS5wZW5kaW5nKSAvIHRoaXMuc3RhdGUudG90YWwpICogMTAwO1xuICAgICAgICBsZXQgdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCB7IGRpc3BsYXlEZXZCYXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChjb21wbGV0ZWQgPCAxMDApIHtcbiAgICAgICAgICAgIHZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vRWxzZSBlbXB0eSB0aGUgbG9hZGluZyBsaXN0P1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdsb2FkaW5nLWJhcic+XG4gICAgICAgICAgICAgICAge3Zpc2libGUgJiYgPFByb2dyZXNzQmFyIGNvbXBsZXRlZD17Y29tcGxldGVkfSAvPn1cbiAgICAgICAgICAgICAgICB7ZGlzcGxheURldkJhciAmJlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmYS11bCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEljb24gbmFtZT0nc3dhcF92ZXJ0JyAvPiBwZW5kaW5nIHt0aGlzLnN0YXRlLnBlbmRpbmd9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48SWNvbiBuYW1lPSdub3RfaW50ZXJlc3RlZCcgLz4gY2FuY2VsbGVkIHt0aGlzLnN0YXRlLmNhbmNlbGxlZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxJY29uIG5hbWU9J2NoZWNrX2NpcmNsZScgLz4gc3VjY2VzcyB7dGhpcy5zdGF0ZS5zdWNjZXNzfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEljb24gbmFtZT0nZXJyb3InIC8+IGVycm9yIHt0aGlzLnN0YXRlLmVycm9yfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEljb24gbmFtZT0nZnVuY3Rpb25zJyAvPiB0b3RhbCB7dGhpcy5zdGF0ZS50b3RhbH08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihMb2FkaW5nQmFyTWl4aW4pO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=