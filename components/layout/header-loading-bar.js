'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _network = require('sagess-core/network');

var _progressBar = require('../progress-bar');

var _progressBar2 = _interopRequireDefault(_progressBar);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import storeConnect from '../../behaviours/store/connect';


/**
 * Loading bar, listening on Request store
 * 
 * @class HeaderLoadingBar
 * @extends {Component}
 */
// @storeConnect([{ store: requestStore, properties: ['request'] }], () => requestStore.getRequests())
var HeaderLoadingBar = function (_Component) {
    _inherits(HeaderLoadingBar, _Component);

    /**
     * Creates an instance of HeaderLoadingBar.
     * @param {object} props component props
     * @memberof HeaderLoadingBar
     */
    function HeaderLoadingBar(props) {
        _classCallCheck(this, HeaderLoadingBar);

        var _this = _possibleConstructorReturn(this, (HeaderLoadingBar.__proto__ || Object.getPrototypeOf(HeaderLoadingBar)).call(this, props));

        _this._handleRequestsUpdate = _this._handleRequestsUpdate.bind(_this);
        _this.state = {
            isVisible: true
        };
        return _this;
    }

    /** @inheriteddoc */


    _createClass(HeaderLoadingBar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _network.builtInStore.addUpdateRequestListener(this._handleRequestsUpdate);
            _network.builtInStore.addClearRequestsListener(this._handleRequestsUpdate);
        }

        /** @inheriteddoc */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _network.builtInStore.removeUpdateRequestListener(this._handleRequestsUpdate);
            _network.builtInStore.removeClearRequestsListener(this._handleRequestsUpdate);
        }
    }, {
        key: '_handleRequestsUpdate',
        value: function _handleRequestsUpdate() {
            this.setState(_network.builtInStore.getRequests());
        }

        /** @inheritdoc */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                total = _state.total,
                pending = _state.pending,
                isVisible = _state.isVisible;

            var completed = +((total - pending) / total) * 100;
            var visible = completed < 100;

            return _react2.default.createElement(
                'div',
                { 'data-focus': 'header-loading-bar' },
                visible && _react2.default.createElement(_progressBar2.default, { completed: completed }),
                __DEV__ && _react2.default.createElement(
                    'div',
                    { 'data-focus': 'dev-network' },
                    _react2.default.createElement(_icon2.default, { name: isVisible ? 'network_check' : 'network_locked', onClick: function onClick() {
                            return _this2.setState({ isVisible: !_this2.state.isVisible });
                        } }),
                    isVisible && _react2.default.createElement(
                        'ul',
                        { className: 'fa-ul' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(_icon2.default, { name: 'swap_vert' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                'Pending: ' + this.state.pending
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(_icon2.default, { name: 'not_interested' }),
                            ' ',
                            _react2.default.createElement(
                                'div',
                                null,
                                'Cancelled: ' + this.state.cancelled
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(_icon2.default, { name: 'check_circle' }),
                            ' ',
                            _react2.default.createElement(
                                'div',
                                null,
                                'Success: ' + this.state.success
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(_icon2.default, { name: 'error' }),
                            ' ',
                            _react2.default.createElement(
                                'div',
                                null,
                                'Error: ' + this.state.error
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(_icon2.default, { name: 'functions' }),
                            ' ',
                            _react2.default.createElement(
                                'div',
                                null,
                                'Total: ' + this.state.total
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HeaderLoadingBar;
}(_react.Component);

HeaderLoadingBar.displayName = 'HeaderLoadingBar';

exports.default = HeaderLoadingBar;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiSGVhZGVyTG9hZGluZ0JhciIsInByb3BzIiwiX2hhbmRsZVJlcXVlc3RzVXBkYXRlIiwiYmluZCIsInN0YXRlIiwiaXNWaXNpYmxlIiwicmVxdWVzdFN0b3JlIiwiYWRkVXBkYXRlUmVxdWVzdExpc3RlbmVyIiwiYWRkQ2xlYXJSZXF1ZXN0c0xpc3RlbmVyIiwicmVtb3ZlVXBkYXRlUmVxdWVzdExpc3RlbmVyIiwicmVtb3ZlQ2xlYXJSZXF1ZXN0c0xpc3RlbmVyIiwic2V0U3RhdGUiLCJnZXRSZXF1ZXN0cyIsInRvdGFsIiwicGVuZGluZyIsImNvbXBsZXRlZCIsInZpc2libGUiLCJfX0RFVl9fIiwiY2FuY2VsbGVkIiwic3VjY2VzcyIsImVycm9yIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFGQTs7O0FBSUE7Ozs7OztBQU1BO0lBQ01BLGdCOzs7QUFFRjs7Ozs7QUFLQSw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdJQUNUQSxLQURTOztBQUVmLGNBQUtDLHFCQUFMLEdBQTZCLE1BQUtBLHFCQUFMLENBQTJCQyxJQUEzQixPQUE3QjtBQUNBLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx1QkFBVztBQURGLFNBQWI7QUFIZTtBQU1sQjs7QUFHRDs7Ozs7NkNBQ3FCO0FBQ2pCQyxrQ0FBYUMsd0JBQWIsQ0FBc0MsS0FBS0wscUJBQTNDO0FBQ0FJLGtDQUFhRSx3QkFBYixDQUFzQyxLQUFLTixxQkFBM0M7QUFDSDs7QUFFRDs7OzsrQ0FDdUI7QUFDbkJJLGtDQUFhRywyQkFBYixDQUF5QyxLQUFLUCxxQkFBOUM7QUFDQUksa0NBQWFJLDJCQUFiLENBQXlDLEtBQUtSLHFCQUE5QztBQUNIOzs7Z0RBRXVCO0FBQ3BCLGlCQUFLUyxRQUFMLENBQWNMLHNCQUFhTSxXQUFiLEVBQWQ7QUFDSDs7QUFFRDs7OztpQ0FDUztBQUFBOztBQUFBLHlCQUNpQyxLQUFLUixLQUR0QztBQUFBLGdCQUNHUyxLQURILFVBQ0dBLEtBREg7QUFBQSxnQkFDVUMsT0FEVixVQUNVQSxPQURWO0FBQUEsZ0JBQ21CVCxTQURuQixVQUNtQkEsU0FEbkI7O0FBRUwsZ0JBQU1VLFlBQVksRUFBRSxDQUFDRixRQUFRQyxPQUFULElBQW9CRCxLQUF0QixJQUErQixHQUFqRDtBQUNBLGdCQUFNRyxVQUFVRCxZQUFZLEdBQTVCOztBQUVBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxjQUFXLG9CQUFoQjtBQUNLQywyQkFBVyw4QkFBQyxxQkFBRCxJQUFhLFdBQVdELFNBQXhCLEdBRGhCO0FBRUtFLDJCQUNHO0FBQUE7QUFBQSxzQkFBSyxjQUFXLGFBQWhCO0FBQ0ksa0RBQUMsY0FBRCxJQUFNLE1BQU1aLFlBQVksZUFBWixHQUE4QixnQkFBMUMsRUFBNEQsU0FBUztBQUFBLG1DQUFNLE9BQUtNLFFBQUwsQ0FBYyxFQUFFTixXQUFXLENBQUMsT0FBS0QsS0FBTCxDQUFXQyxTQUF6QixFQUFkLENBQU47QUFBQSx5QkFBckUsR0FESjtBQUVLQSxpQ0FBYTtBQUFBO0FBQUEsMEJBQUksV0FBVSxPQUFkO0FBQ1Y7QUFBQTtBQUFBO0FBQUksMERBQUMsY0FBRCxJQUFNLE1BQUssV0FBWCxHQUFKO0FBQTZCO0FBQUE7QUFBQTtBQUFBLDhDQUFrQixLQUFLRCxLQUFMLENBQVdVO0FBQTdCO0FBQTdCLHlCQURVO0FBRVY7QUFBQTtBQUFBO0FBQUksMERBQUMsY0FBRCxJQUFNLE1BQUssZ0JBQVgsR0FBSjtBQUFBO0FBQW1DO0FBQUE7QUFBQTtBQUFBLGdEQUFvQixLQUFLVixLQUFMLENBQVdjO0FBQS9CO0FBQW5DLHlCQUZVO0FBR1Y7QUFBQTtBQUFBO0FBQUksMERBQUMsY0FBRCxJQUFNLE1BQUssY0FBWCxHQUFKO0FBQUE7QUFBaUM7QUFBQTtBQUFBO0FBQUEsOENBQWtCLEtBQUtkLEtBQUwsQ0FBV2U7QUFBN0I7QUFBakMseUJBSFU7QUFJVjtBQUFBO0FBQUE7QUFBSSwwREFBQyxjQUFELElBQU0sTUFBSyxPQUFYLEdBQUo7QUFBQTtBQUEwQjtBQUFBO0FBQUE7QUFBQSw0Q0FBZ0IsS0FBS2YsS0FBTCxDQUFXZ0I7QUFBM0I7QUFBMUIseUJBSlU7QUFLVjtBQUFBO0FBQUE7QUFBSSwwREFBQyxjQUFELElBQU0sTUFBSyxXQUFYLEdBQUo7QUFBQTtBQUE4QjtBQUFBO0FBQUE7QUFBQSw0Q0FBZ0IsS0FBS2hCLEtBQUwsQ0FBV1M7QUFBM0I7QUFBOUI7QUFMVTtBQUZsQjtBQUhSLGFBREo7QUFrQkg7Ozs7RUF4RDBCUSxnQjs7QUE0RC9CckIsaUJBQWlCc0IsV0FBakIsR0FBK0Isa0JBQS9COztrQkFFZXRCLGdCIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYnVpbHRJblN0b3JlIGFzIHJlcXVlc3RTdG9yZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL25ldHdvcmsnO1xuXG4vLyBpbXBvcnQgc3RvcmVDb25uZWN0IGZyb20gJy4uLy4uL2JlaGF2aW91cnMvc3RvcmUvY29ubmVjdCc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuXG4vKipcbiAqIExvYWRpbmcgYmFyLCBsaXN0ZW5pbmcgb24gUmVxdWVzdCBzdG9yZVxuICogXG4gKiBAY2xhc3MgSGVhZGVyTG9hZGluZ0JhclxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuLy8gQHN0b3JlQ29ubmVjdChbeyBzdG9yZTogcmVxdWVzdFN0b3JlLCBwcm9wZXJ0aWVzOiBbJ3JlcXVlc3QnXSB9XSwgKCkgPT4gcmVxdWVzdFN0b3JlLmdldFJlcXVlc3RzKCkpXG5jbGFzcyBIZWFkZXJMb2FkaW5nQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgSGVhZGVyTG9hZGluZ0Jhci5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgY29tcG9uZW50IHByb3BzXG4gICAgICogQG1lbWJlcm9mIEhlYWRlckxvYWRpbmdCYXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZVJlcXVlc3RzVXBkYXRlID0gdGhpcy5faGFuZGxlUmVxdWVzdHNVcGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHJlcXVlc3RTdG9yZS5hZGRVcGRhdGVSZXF1ZXN0TGlzdGVuZXIodGhpcy5faGFuZGxlUmVxdWVzdHNVcGRhdGUpO1xuICAgICAgICByZXF1ZXN0U3RvcmUuYWRkQ2xlYXJSZXF1ZXN0c0xpc3RlbmVyKHRoaXMuX2hhbmRsZVJlcXVlc3RzVXBkYXRlKTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRlZGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICByZXF1ZXN0U3RvcmUucmVtb3ZlVXBkYXRlUmVxdWVzdExpc3RlbmVyKHRoaXMuX2hhbmRsZVJlcXVlc3RzVXBkYXRlKTtcbiAgICAgICAgcmVxdWVzdFN0b3JlLnJlbW92ZUNsZWFyUmVxdWVzdHNMaXN0ZW5lcih0aGlzLl9oYW5kbGVSZXF1ZXN0c1VwZGF0ZSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZVJlcXVlc3RzVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHJlcXVlc3RTdG9yZS5nZXRSZXF1ZXN0cygpKTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdG90YWwsIHBlbmRpbmcsIGlzVmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY29tcGxldGVkID0gKygodG90YWwgLSBwZW5kaW5nKSAvIHRvdGFsKSAqIDEwMDtcbiAgICAgICAgY29uc3QgdmlzaWJsZSA9IGNvbXBsZXRlZCA8IDEwMDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdoZWFkZXItbG9hZGluZy1iYXInPlxuICAgICAgICAgICAgICAgIHt2aXNpYmxlICYmIDxQcm9ncmVzc0JhciBjb21wbGV0ZWQ9e2NvbXBsZXRlZH0gLz59XG4gICAgICAgICAgICAgICAge19fREVWX18gJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdkZXYtbmV0d29yayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtpc1Zpc2libGUgPyAnbmV0d29ya19jaGVjaycgOiAnbmV0d29ya19sb2NrZWQnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiAhdGhpcy5zdGF0ZS5pc1Zpc2libGUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNWaXNpYmxlICYmIDx1bCBjbGFzc05hbWU9J2ZhLXVsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEljb24gbmFtZT0nc3dhcF92ZXJ0JyAvPjxkaXY+e2BQZW5kaW5nOiAke3RoaXMuc3RhdGUucGVuZGluZ31gfTwvZGl2PjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxJY29uIG5hbWU9J25vdF9pbnRlcmVzdGVkJyAvPiA8ZGl2PntgQ2FuY2VsbGVkOiAke3RoaXMuc3RhdGUuY2FuY2VsbGVkfWB9PC9kaXY+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PEljb24gbmFtZT0nY2hlY2tfY2lyY2xlJyAvPiA8ZGl2PntgU3VjY2VzczogJHt0aGlzLnN0YXRlLnN1Y2Nlc3N9YH08L2Rpdj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48SWNvbiBuYW1lPSdlcnJvcicgLz4gPGRpdj57YEVycm9yOiAke3RoaXMuc3RhdGUuZXJyb3J9YH08L2Rpdj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48SWNvbiBuYW1lPSdmdW5jdGlvbnMnIC8+IDxkaXY+e2BUb3RhbDogJHt0aGlzLnN0YXRlLnRvdGFsfWB9PC9kaXY+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5IZWFkZXJMb2FkaW5nQmFyLmRpc3BsYXlOYW1lID0gJ0hlYWRlckxvYWRpbmdCYXInO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJMb2FkaW5nQmFyO1xuIl19