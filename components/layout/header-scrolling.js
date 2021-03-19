'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builtInStore = require('sagess-core/application/built-in-store');

var _builtInStore2 = _interopRequireDefault(_builtInStore);

var _scroll = require('../../behaviours/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _connect = require('../../behaviours/store/connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Component default props.
var defaultProps = {
    canDeploy: true, // Determines if the header can be deployed (revealing the cartridge component) or not.
    notifySizeChange: undefined, // A handler to notify other elements that the header has added/removed the cartridge.
    scrollTargetSelector: undefined // Selector for the domNode on which the scroll is attached.
};

// Component props definition.
var propTypes = {
    canDeploy: _react.PropTypes.bool,
    notifySizeChange: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object]),
    scrollTargetSelector: _react.PropTypes.string
};

// getState function.
function getState() {
    var processMode = _builtInStore2.default.getMode();
    var mode = 'consult';

    if (processMode && processMode.edit && processMode.edit > 0) {
        mode = 'edit';
    }

    return {
        mode: mode,
        route: _builtInStore2.default.getRoute(),
        canDeploy: _builtInStore2.default.getCanDeploy()
    };
}

/**
* HeaderScrolling component.
*/
var HeaderScrolling = (_dec = (0, _connect2.default)([{ store: _builtInStore2.default, properties: ['mode', 'route', 'canDeploy'] }], getState), _dec(_class = (0, _scroll2.default)(_class = function (_Component) {
    _inherits(HeaderScrolling, _Component);

    function HeaderScrolling(props) {
        _classCallCheck(this, HeaderScrolling);

        var _this = _possibleConstructorReturn(this, (HeaderScrolling.__proto__ || Object.getPrototypeOf(HeaderScrolling)).call(this, props));

        _this._notifySizeChange = function () {
            var notifySizeChange = _this.props.notifySizeChange;
            var isDeployed = _this.state.isDeployed;

            if (notifySizeChange) {
                notifySizeChange(isDeployed);
            }
        };

        _this.handleScroll = function (event, canDeploy) {
            var _this$state = _this.state,
                deployThreshold = _this$state.deployThreshold,
                placeholderHeight = _this$state.placeholderHeight;


            if (_this.state.isDeployed) {
                var content = _this.refs ? _this.refs.header : undefined;
                deployThreshold = content ? content.clientHeight - 60 : 1000; // 1000 is arbitrary, but a value high enough is required by default.
                placeholderHeight = content ? content.clientHeight : 1000;
                _this.setState({ deployThreshold: deployThreshold, placeholderHeight: placeholderHeight });
            }

            var _this$scrollPosition = _this.scrollPosition(),
                top = _this$scrollPosition.top;

            var isDeployed = (canDeploy !== undefined ? canDeploy : _this.props.canDeploy) ? top <= deployThreshold : false;

            if (isDeployed !== _this.state.isDeployed) {
                _this.setState({ isDeployed: isDeployed }, _this._notifySizeChange);
            }
        };

        _this.state = Object.assign({}, getState(), { isDeployed: true });
        return _this;
    }

    /** @inheriteddoc */


    _createClass(HeaderScrolling, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.handleScroll();
            var scrollTargetSelector = this.props.scrollTargetSelector;

            this.scrollTargetNode = scrollTargetSelector && scrollTargetSelector !== '' ? document.querySelector(scrollTargetSelector) : window;
        }

        /** @inheriteddoc */

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.scrollTargetNode.addEventListener('scroll', this.handleScroll);
            this.scrollTargetNode.addEventListener('resize', this.handleScroll);
        }

        /** @inheriteddoc */

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var _this2 = this;

            var canDeploy = _ref.canDeploy;

            this.setState({ isDeployed: true }, function () {
                return _this2.handleScroll(null, canDeploy);
            });
        }

        /** @inheriteddoc */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.scrollTargetNode.removeEventListener('scroll', this.handleScroll);
            this.scrollTargetNode.removeEventListener('resize', this.handleScroll);
        }

        /**
         * Notify other elements that the header has added/removed the cartridge.
         */


        /**
         * Handle the scroll event in order to show/hide the cartridge.
         * @param {object} event [description]
         */

    }, {
        key: 'render',


        /** @inheriteddoc */
        value: function render() {
            var _state = this.state,
                isDeployed = _state.isDeployed,
                placeholderHeight = _state.placeholderHeight;
            var _props = this.props,
                children = _props.children,
                canDeploy = _props.canDeploy,
                mode = _props.mode,
                route = _props.route;


            return _react2.default.createElement(
                'header',
                { ref: 'header', 'data-focus': 'header-scrolling', 'data-mode': mode, 'data-route': route, 'data-deployed': isDeployed },
                children,
                !isDeployed ? _react2.default.createElement('div', { style: { height: canDeploy ? placeholderHeight : 60, width: '100%' } }) : ''
            );
        }
    }]);

    return HeaderScrolling;
}(_react.Component)) || _class) || _class);

// Static props.

HeaderScrolling.displayName = 'HeaderScrolling';
HeaderScrolling.defaultProps = defaultProps;
HeaderScrolling.propTypes = propTypes;

exports.default = HeaderScrolling;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiY2FuRGVwbG95Iiwibm90aWZ5U2l6ZUNoYW5nZSIsInVuZGVmaW5lZCIsInNjcm9sbFRhcmdldFNlbGVjdG9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJvYmplY3QiLCJzdHJpbmciLCJnZXRTdGF0ZSIsInByb2Nlc3NNb2RlIiwiYXBwbGljYXRpb25TdG9yZSIsImdldE1vZGUiLCJtb2RlIiwiZWRpdCIsInJvdXRlIiwiZ2V0Um91dGUiLCJnZXRDYW5EZXBsb3kiLCJIZWFkZXJTY3JvbGxpbmciLCJzdG9yZSIsInByb3BlcnRpZXMiLCJTY3JvbGwiLCJwcm9wcyIsIl9ub3RpZnlTaXplQ2hhbmdlIiwiaXNEZXBsb3llZCIsInN0YXRlIiwiaGFuZGxlU2Nyb2xsIiwiZXZlbnQiLCJkZXBsb3lUaHJlc2hvbGQiLCJwbGFjZWhvbGRlckhlaWdodCIsImNvbnRlbnQiLCJyZWZzIiwiaGVhZGVyIiwiY2xpZW50SGVpZ2h0Iiwic2V0U3RhdGUiLCJzY3JvbGxQb3NpdGlvbiIsInRvcCIsInNjcm9sbFRhcmdldE5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwiaGVpZ2h0Iiwid2lkdGgiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BLGVBQWU7QUFDakJDLGVBQVcsSUFETSxFQUNBO0FBQ2pCQyxzQkFBa0JDLFNBRkQsRUFFWTtBQUM3QkMsMEJBQXNCRCxTQUhMLENBR2U7QUFIZixDQUFyQjs7QUFNQTtBQUNBLElBQU1FLFlBQVk7QUFDZEosZUFBV0ssaUJBQVVDLElB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RUFBWixHQUFkLEdBQThGO0FBRm5HLGFBREo7QUFNSDs7OztFQTVFeUJDLGdCOztBQStFOUI7O0FBQ0E1QixnQkFBZ0I2QixXQUFoQixHQUE4QixpQkFBOUI7QUFDQTdCLGdCQUFnQnJCLFlBQWhCLEdBQStCQSxZQUEvQjtBQUNBcUIsZ0JBQWdCaEIsU0FBaEIsR0FBNEJBLFNBQTVCOztrQkFFZWdCLGUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcHBsaWNhdGlvblN0b3JlIGZyb20gJ3NhZ2Vzcy1jb3JlL2FwcGxpY2F0aW9uL2J1aWx0LWluLXN0b3JlJztcbmltcG9ydCBTY3JvbGwgZnJvbSAnLi4vLi4vYmVoYXZpb3Vycy9zY3JvbGwnO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi4vLi4vYmVoYXZpb3Vycy9zdG9yZS9jb25uZWN0JztcblxuLy8gQ29tcG9uZW50IGRlZmF1bHQgcHJvcHMuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2FuRGVwbG95OiB0cnVlLCAvLyBEZXRlcm1pbmVzIGlmIHRoZSBoZWFkZXIgY2FuIGJlIGRlcGxveWVkIChyZXZlYWxpbmcgdGhlIGNhcnRyaWRnZSBjb21wb25lbnQpIG9yIG5vdC5cbiAgICBub3RpZnlTaXplQ2hhbmdlOiB1bmRlZmluZWQsIC8vIEEgaGFuZGxlciB0byBub3RpZnkgb3RoZXIgZWxlbWVudHMgdGhhdCB0aGUgaGVhZGVyIGhhcyBhZGRlZC9yZW1vdmVkIHRoZSBjYXJ0cmlkZ2UuXG4gICAgc2Nyb2xsVGFyZ2V0U2VsZWN0b3I6IHVuZGVmaW5lZCAvLyBTZWxlY3RvciBmb3IgdGhlIGRvbU5vZGUgb24gd2hpY2ggdGhlIHNjcm9sbCBpcyBhdHRhY2hlZC5cbn07XG5cbi8vIENvbXBvbmVudCBwcm9wcyBkZWZpbml0aW9uLlxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGNhbkRlcGxveTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbm90aWZ5U2l6ZUNoYW5nZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBzY3JvbGxUYXJnZXRTZWxlY3RvcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuLy8gZ2V0U3RhdGUgZnVuY3Rpb24uXG5mdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBjb25zdCBwcm9jZXNzTW9kZSA9IGFwcGxpY2F0aW9uU3RvcmUuZ2V0TW9kZSgpO1xuICAgIGxldCBtb2RlID0gJ2NvbnN1bHQnO1xuXG4gICAgaWYgKHByb2Nlc3NNb2RlICYmIHByb2Nlc3NNb2RlLmVkaXQgJiYgcHJvY2Vzc01vZGUuZWRpdCA+IDApIHtcbiAgICAgICAgbW9kZSA9ICdlZGl0JztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICByb3V0ZTogYXBwbGljYXRpb25TdG9yZS5nZXRSb3V0ZSgpLFxuICAgICAgICBjYW5EZXBsb3k6IGFwcGxpY2F0aW9uU3RvcmUuZ2V0Q2FuRGVwbG95KClcbiAgICB9O1xufVxuXG4vKipcbiogSGVhZGVyU2Nyb2xsaW5nIGNvbXBvbmVudC5cbiovXG5AY29ubmVjdChbeyBzdG9yZTogYXBwbGljYXRpb25TdG9yZSwgcHJvcGVydGllczogWydtb2RlJywgJ3JvdXRlJywgJ2NhbkRlcGxveSddIH1dLCBnZXRTdGF0ZSlcbkBTY3JvbGxcbmNsYXNzIEhlYWRlclNjcm9sbGluZyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4uZ2V0U3RhdGUoKSwgaXNEZXBsb3llZDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8qKiBAaW5oZXJpdGVkZG9jICovXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICBjb25zdCB7IHNjcm9sbFRhcmdldFNlbGVjdG9yIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldE5vZGUgPSAoc2Nyb2xsVGFyZ2V0U2VsZWN0b3IgJiYgc2Nyb2xsVGFyZ2V0U2VsZWN0b3IgIT09ICcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2Nyb2xsVGFyZ2V0U2VsZWN0b3IpIDogd2luZG93O1xuICAgIH1cblxuICAgIC8qKiBAaW5oZXJpdGVkZG9jICovXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgY2FuRGVwbG95IH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGVwbG95ZWQ6IHRydWUgfSwgKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwobnVsbCwgY2FuRGVwbG95KSk7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXROb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXROb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZnkgb3RoZXIgZWxlbWVudHMgdGhhdCB0aGUgaGVhZGVyIGhhcyBhZGRlZC9yZW1vdmVkIHRoZSBjYXJ0cmlkZ2UuXG4gICAgICovXG4gICAgX25vdGlmeVNpemVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbm90aWZ5U2l6ZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBpc0RlcGxveWVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAobm90aWZ5U2l6ZUNoYW5nZSkge1xuICAgICAgICAgICAgbm90aWZ5U2l6ZUNoYW5nZShpc0RlcGxveWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIHNjcm9sbCBldmVudCBpbiBvcmRlciB0byBzaG93L2hpZGUgdGhlIGNhcnRyaWRnZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGhhbmRsZVNjcm9sbCA9IChldmVudCwgY2FuRGVwbG95KSA9PiB7XG4gICAgICAgIGxldCB7IGRlcGxveVRocmVzaG9sZCwgcGxhY2Vob2xkZXJIZWlnaHQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNEZXBsb3llZCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMucmVmcyA/IHRoaXMucmVmcy5oZWFkZXIgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBkZXBsb3lUaHJlc2hvbGQgPSBjb250ZW50ID8gY29udGVudC5jbGllbnRIZWlnaHQgLSA2MCA6IDEwMDA7IC8vIDEwMDAgaXMgYXJiaXRyYXJ5LCBidXQgYSB2YWx1ZSBoaWdoIGVub3VnaCBpcyByZXF1aXJlZCBieSBkZWZhdWx0LlxuICAgICAgICAgICAgcGxhY2Vob2xkZXJIZWlnaHQgPSBjb250ZW50ID8gY29udGVudC5jbGllbnRIZWlnaHQgOiAxMDAwO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlcGxveVRocmVzaG9sZCwgcGxhY2Vob2xkZXJIZWlnaHQgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IHRvcCB9ID0gdGhpcy5zY3JvbGxQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBpc0RlcGxveWVkID0gKGNhbkRlcGxveSAhPT0gdW5kZWZpbmVkID8gY2FuRGVwbG95IDogdGhpcy5wcm9wcy5jYW5EZXBsb3kpID8gdG9wIDw9IGRlcGxveVRocmVzaG9sZCA6IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc0RlcGxveWVkICE9PSB0aGlzLnN0YXRlLmlzRGVwbG95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RlcGxveWVkIH0sIHRoaXMuX25vdGlmeVNpemVDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBAaW5oZXJpdGVkZG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzRGVwbG95ZWQsIHBsYWNlaG9sZGVySGVpZ2h0IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCBjYW5EZXBsb3ksIG1vZGUsIHJvdXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aGVhZGVyIHJlZj0naGVhZGVyJyBkYXRhLWZvY3VzPSdoZWFkZXItc2Nyb2xsaW5nJyBkYXRhLW1vZGU9e21vZGV9IGRhdGEtcm91dGU9e3JvdXRlfSBkYXRhLWRlcGxveWVkPXtpc0RlcGxveWVkfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgeyFpc0RlcGxveWVkID8gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IGNhbkRlcGxveSA/IHBsYWNlaG9sZGVySGVpZ2h0IDogNjAsIHdpZHRoOiAnMTAwJScgfX0gLz4gOiAnJ31cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLy8gU3RhdGljIHByb3BzLlxuSGVhZGVyU2Nyb2xsaW5nLmRpc3BsYXlOYW1lID0gJ0hlYWRlclNjcm9sbGluZyc7XG5IZWFkZXJTY3JvbGxpbmcuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuSGVhZGVyU2Nyb2xsaW5nLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyU2Nyb2xsaW5nO1xuIl19