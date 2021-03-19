'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builtInStore = require('sagess-core/message/built-in-store');

var _builtInStore2 = _interopRequireDefault(_builtInStore);

var _message = require('../../message');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _capitalize = require('lodash/string/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageCenterMixin = {
    getDefaultProps: function getDefaultProps() {
        return {
            ttlInfo: 10000,
            ttlSuccess: 5000,
            style: {}
        };
    },

    /** @inheriteddoc */
    getInitialState: function getInitialState() {
        return this._getStateFromStore();
    },

    /** @inheriteddoc */
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use component from sagess-components/components/message-center');
        _builtInStore2.default.addPushedMessageListener(this._handlePushMessage);
        _builtInStore2.default.addClearMessagesListener(this._handleClearMessage);
    },

    /** @inheriteddoc */
    componentWillUnmount: function componentWillUnmount() {
        _builtInStore2.default.removePushedMessageListener(this._handlePushMessage);
        _builtInStore2.default.removeClearMessagesListener(this._handleClearMessage);
    },
    _getStateFromStore: function _getStateFromStore() {
        return { messages: _builtInStore2.default.getMessages() || {} };
    },
    _handlePushMessage: function _handlePushMessage(messageId) {
        var messages = this.state.messages;
        messages[messageId] = _builtInStore2.default.getMessage(messageId);
        this.setState({ messages: messages });
    },
    _handleClearMessage: function _handleClearMessage() {
        this.setState({ messages: {} });
    },
    _handleRemoveMessage: function _handleRemoveMessage(messageId) {
        var msgs = this.state.messages;
        delete msgs[messageId];
        this.setState({ messages: msgs });
    },
    renderMessages: function renderMessages() {
        var msgs = [];
        for (var msgKey in this.state.messages) {
            var msg = this.state.messages[msgKey];
            var messageProps = (0, _objectAssign2.default)(this.state.messages[msgKey], { handleOnClick: this._handleRemoveMessage, key: msgKey });
            if (msg.type === 'info' || msg.type === 'success') {
                (0, _objectAssign2.default)(messageProps, { ttl: this.props['ttl' + (0, _capitalize2.default)(msg.type)], handleTimeToLeave: this._handleRemoveMessage });
            }
            msgs.push(_react2.default.createElement(_message.component, messageProps));
        }
        return msgs;
    },

    /** @inheriteddoc */
    render: function render() {
        var className = 'message-center ' + this.props.style.className;
        return _react2.default.createElement(
            'div',
            { className: className, 'data-focus': 'message-center' },
            this.renderMessages()
        );
    }
};

var _builder = (0, _builder3.default)(messageCenterMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibWVzc2FnZUNlbnRlck1peGluIiwiZ2V0RGVmYXVsdFByb3BzIiwidHRsSW5mbyIsInR0bFN1Y2Nlc3MiLCJzdHlsZSIsImdldEluaXRpYWxTdGF0ZSIsIl9nZXRTdGF0ZUZyb21TdG9yZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZVN0b3JlIiwiYWRkUHVzaGVkTWVzc2FnZUxpc3RlbmVyIiwiX2hhbmRsZVB1c2hNZXNzYWdlIiwiYWRkQ2xlYXJNZXNzYWdlc0xpc3RlbmVyIiwiX2hhbmRsZUNsZWFyTWVzc2FnZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlUHVzaGVkTWVzc2FnZUxpc3RlbmVyIiwicmVtb3ZlQ2xlYXJNZXNzYWdlc0xpc3RlbmVyIiwibWVzc2FnZXMiLCJnZXRNZXNzYWdlcyIsIm1lc3NhZ2VJZCIsInN0YXRlIiwiZ2V0TWVzc2FnZSIsInNldFN0YXRlIiwiX2hhbmRsZVJlbW92ZU1lc3NhZ2UiLCJtc2dzIiwicmVuZGVyTWVzc2FnZXMiLCJtc2dLZXkiLCJtc2ciLCJtZXNzYWdlUHJvcHMiLCJoYW5kbGVPbkNsaWNrIiwia2V5IiwidHlwZSIsInR0bCIsInByb3BzIiwiaGFuZGxlVGltZVRvTGVhdmUiLCJwdXNoIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiTWVzc2FnZSIsInJlbmRlciIsImNsYXNzTmFtZSIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEscUJBQXFCO0FBQ3JCQyxtQkFEcUIsNkJBQ0g7QUFDZCxlQUFPO0FBQ0hDLHFCQUFTLEtBRE47QUFFSEMsd0JBQVksSUFGVDtBQUdIQyxtQkFBTztBQUhKLFNBQVA7QUFLSCxLQVBvQjs7QUFRckI7QUFDQUMsbUJBVHFCLDZCQVNIO0FBQ2QsZUFBTyxLQUFLQyxrQkFBTCxFQUFQO0FBQ0gsS0FYb0I7O0FBWXJCO0FBQ0FDLHNCQWJxQixnQ0FhQTtBQUNqQkMsZ0JBQVFDLElBQVIsQ0FBYSw2SEFBYjtBQUNBQywrQkFBYUMsd0JBQWIsQ0FBc0MsS0FBS0Msa0JBQTNDO0FBQ0FGLCtCQUFhRyx3QkFBYixDQUFzQyxLQUFLQyxtQkFBM0M7QUFDSCxLQWpCb0I7O0FBa0JyQjtBQUNBQyx3QkFuQnFCLGtDQW1CRTtBQUNuQkwsK0JBQWFNLDJCQUFiLENBQXlDLEtBQUtKLGtCQUE5QztBQUNBRiwrQkFBYU8sMkJBQWIsQ0FBeUMsS0FBS0gsbUJBQTlDO0FBQ0gsS0F0Qm9CO0FBdUJyQlIsc0JBdkJxQixnQ0F1QkE7QUFDakIsZUFBTyxFQUFFWSxVQUFVUix1QkFBYVMsV0FBYixNQUE4QixFQUExQyxFQUFQO0FBQ0gsS0F6Qm9CO0FBMEJyQlAsc0JBMUJxQiw4QkEwQkZRLFNBMUJFLEVBMEJTO0FBQzFCLFlBQUlGLFdBQVcsS0FBS0csS0FBTCxDQUFXSCxRQUExQjtBQUNBQSxpQkFBU0UsU0FBVCxJQUFzQlYsdUJBQWFZLFVBQWIsQ0FBd0JGLFNBQXhCLENBQXRCO0FBQ0EsYUFBS0csUUFBTCxDQUFjLEVBQUVMLFVBQVVBLFFBQVosRUFBZDtBQUNILEtBOUJvQjtBQStCckJKLHVCQS9CcUIsaUNBK0JDO0FBQ2xCLGFBQUtTLFFBQUwsQ0FBYyxFQUFFTCxVQUFVLEVBQVosRUFBZDtBQUNILEtBakNvQjtBQWtDckJNLHdCQWxDcUIsZ0NBa0NBSixTQWxDQSxFQWtDVztBQUM1QixZQUFJSyxPQUFPLEtBQUtKLEtBQUwsQ0FBV0gsUUFBdEI7QUFDQSxlQUFPTyxLQUFLTCxTQUFMLENBQVA7QUFDQSxhQUFLRyxRQUFMLENBQWMsRUFBRUwsVUFBVU8sSUFBWixFQUFkO0FBQ0gsS0F0Q29CO0FBdUNyQkMsa0JBdkNxQiw0QkF1Q0o7QUFDYixZQUFJRCxPQUFPLEVBQVg7QUFDQSxhQUFLLElBQUlFLE1BQVQsSUFBbUIsS0FBS04sS0FBTCxDQUFXSCxRQUE5QixFQUF3QztBQUNwQyxnQkFBSVUsTUFBTSxLQUFLUCxLQUFMLENBQVdILFFBQVgsQ0FBb0JTLE1BQXBCLENBQVY7QUFDQSxnQkFBSUUsZUFBZSw0QkFBTyxLQUFLUixLQUFMLENBQVdILFFBQVgsQ0FBb0JTLE1BQXBCLENBQVAsRUFBb0MsRUFBRUcsZUFBZSxLQUFLTixvQkFBdEIsRUFBNENPLEtBQUtKLE1BQWpELEVBQXBDLENBQW5CO0FBQ0EsZ0JBQUlDLElBQUlJLElBQUosS0FBYSxNQUFiLElBQXVCSixJQUFJSSxJQUFKLEtBQWEsU0FBeEMsRUFBbUQ7QUFDL0MsNENBQU9ILFlBQVAsRUFBcUIsRUFBRUksS0FBSyxLQUFLQyxLQUFMLFNBQWlCLDBCQUFXTixJQUFJSSxJQUFmLENBQWpCLENBQVAsRUFBaURHLG1CQUFtQixLQUFLWCxvQkFBekUsRUFBckI7QUFDSDtBQUNEQyxpQkFBS1csSUFBTCxDQUFVQyxnQkFBTUMsYUFBTixDQUFvQkMsa0JBQXBCLEVBQTZCVixZQUE3QixDQUFWO0FBQ0g7QUFDRCxlQUFPSixJQUFQO0FBQ0gsS0FsRG9COztBQW1EckI7QUFDQWUsVUFwRHFCLG9CQW9EWjtBQUNMLFlBQUlDLGdDQUE4QixLQUFLUCxLQUFMLENBQVc5QixLQUFYLENBQWlCcUMsU0FBbkQ7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVdBLFNBQWhCLEVBQTJCLGNBQVcsZ0JBQXRDO0FBQ0ssaUJBQUtmLGNBQUw7QUFETCxTQURKO0FBS0g7QUEzRG9CLENBQXpCOztlQThENkIsdUJBQVExQixrQkFBUixDO0lBQXJCMEMsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWVzc2FnZVN0b3JlIGZyb20gJ3NhZ2Vzcy1jb3JlL21lc3NhZ2UvYnVpbHQtaW4tc3RvcmUnO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9tZXNzYWdlJztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICdsb2Rhc2gvc3RyaW5nL2NhcGl0YWxpemUnO1xuXG5sZXQgbWVzc2FnZUNlbnRlck1peGluID0ge1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR0bEluZm86IDEwMDAwLFxuICAgICAgICAgICAgdHRsU3VjY2VzczogNTAwMCxcbiAgICAgICAgICAgIHN0eWxlOiB7fVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRTdGF0ZUZyb21TdG9yZSgpO1xuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAyLjIuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBjb21wb25lbnQgZnJvbSBzYWdlc3MtY29tcG9uZW50cy9jb21wb25lbnRzL21lc3NhZ2UtY2VudGVyJyk7XG4gICAgICAgIG1lc3NhZ2VTdG9yZS5hZGRQdXNoZWRNZXNzYWdlTGlzdGVuZXIodGhpcy5faGFuZGxlUHVzaE1lc3NhZ2UpO1xuICAgICAgICBtZXNzYWdlU3RvcmUuYWRkQ2xlYXJNZXNzYWdlc0xpc3RlbmVyKHRoaXMuX2hhbmRsZUNsZWFyTWVzc2FnZSk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRlZGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBtZXNzYWdlU3RvcmUucmVtb3ZlUHVzaGVkTWVzc2FnZUxpc3RlbmVyKHRoaXMuX2hhbmRsZVB1c2hNZXNzYWdlKTtcbiAgICAgICAgbWVzc2FnZVN0b3JlLnJlbW92ZUNsZWFyTWVzc2FnZXNMaXN0ZW5lcih0aGlzLl9oYW5kbGVDbGVhck1lc3NhZ2UpO1xuICAgIH0sXG4gICAgX2dldFN0YXRlRnJvbVN0b3JlKCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbWVzc2FnZVN0b3JlLmdldE1lc3NhZ2VzKCkgfHwge30gfTtcbiAgICB9LFxuICAgIF9oYW5kbGVQdXNoTWVzc2FnZShtZXNzYWdlSWQpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2VzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcztcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZUlkXSA9IG1lc3NhZ2VTdG9yZS5nZXRNZXNzYWdlKG1lc3NhZ2VJZCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlczogbWVzc2FnZXMgfSk7XG4gICAgfSxcbiAgICBfaGFuZGxlQ2xlYXJNZXNzYWdlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IHt9IH0pO1xuICAgIH0sXG4gICAgX2hhbmRsZVJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkKSB7XG4gICAgICAgIGxldCBtc2dzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcztcbiAgICAgICAgZGVsZXRlIG1zZ3NbbWVzc2FnZUlkXTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBtc2dzIH0pO1xuICAgIH0sXG4gICAgcmVuZGVyTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBtc2dzID0gW107XG4gICAgICAgIGZvciAobGV0IG1zZ0tleSBpbiB0aGlzLnN0YXRlLm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBsZXQgbXNnID0gdGhpcy5zdGF0ZS5tZXNzYWdlc1ttc2dLZXldO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VQcm9wcyA9IGFzc2lnbih0aGlzLnN0YXRlLm1lc3NhZ2VzW21zZ0tleV0sIHsgaGFuZGxlT25DbGljazogdGhpcy5faGFuZGxlUmVtb3ZlTWVzc2FnZSwga2V5OiBtc2dLZXkgfSk7XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdpbmZvJyB8fCBtc2cudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgYXNzaWduKG1lc3NhZ2VQcm9wcywgeyB0dGw6IHRoaXMucHJvcHNbYHR0bCR7Y2FwaXRhbGl6ZShtc2cudHlwZSl9YF0sIGhhbmRsZVRpbWVUb0xlYXZlOiB0aGlzLl9oYW5kbGVSZW1vdmVNZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbXNncy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZSwgbWVzc2FnZVByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1zZ3M7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRlZGRvYyAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGBtZXNzYWdlLWNlbnRlciAke3RoaXMucHJvcHMuc3R5bGUuY2xhc3NOYW1lfWA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBkYXRhLWZvY3VzPSdtZXNzYWdlLWNlbnRlcic+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWVzc2FnZXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IHsgbWl4aW4sIGNvbXBvbmVudCB9ID0gYnVpbGRlcihtZXNzYWdlQ2VudGVyTWl4aW4pO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=