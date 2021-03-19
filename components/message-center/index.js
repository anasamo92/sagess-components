'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _capitalize = require('lodash/string/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _builtInStore = require('sagess-core/message/built-in-store');

var _builtInStore2 = _interopRequireDefault(_builtInStore);

var _translation = require('sagess-core/translation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
    ttlError: 8000,
    ttlInfo: 3000,
    ttlSuccess: 3000,
    ttlWarning: 3000
};

var propTypes = {
    ttlError: _react.PropTypes.number.isRequired,
    ttlInfo: _react.PropTypes.number.isRequired,
    ttlSuccess: _react.PropTypes.number.isRequired,
    ttlWarning: _react.PropTypes.number.isRequired
};

var CONSTANT = {
    ANIMATION_LENGTH: 250
};

var MessageCenter = function (_Component) {
    _inherits(MessageCenter, _Component);

    function MessageCenter(props) {
        _classCallCheck(this, MessageCenter);

        var _this = _possibleConstructorReturn(this, (MessageCenter.__proto__ || Object.getPrototypeOf(MessageCenter)).call(this, props));

        _this.cleanupTimeout = null;
        _this.currentNotification = null;
        _this.queuedNotifications = [];

        _this._checkQueue = function () {
            if (_this.queuedNotifications.length > 0) {
                _this.showSnackbar(_this.queuedNotifications.shift());
            } else {
                _this.showSnackbar({ message: null });
            }
        };

        _this._forceCleanup = function () {
            clearTimeout(_this.cleanupTimeout);
            _this._cleanup();
        };

        _this._cleanup = function () {
            _this.cleanupTimeout = null;
            _this.setState({ active: false });
            if (_this.currentNotification.message !== null) {
                setTimeout(function () {
                    _this._checkQueue();
                }, CONSTANT.ANIMATION_LENGTH);
            }
        };

        _this._handlePushMessage = function (messageId) {
            var message = _builtInStore2.default.getMessage(messageId);
            var content = message.content,
                action = message.action,
                type = message.type;

            var ttl = _this.props['ttl' + (0, _capitalize2.default)(type)];
            var notificationData = {
                type: type,
                message: content,
                timeout: ttl
            };
            if (action) {
                notificationData.actionText = action.text;
                notificationData.actionHandler = action.handler;
            }
            _this.showSnackbar(notificationData);
        };

        _this.showSnackbar = function (data) {
            if (data === undefined) {
                throw new Error('Please provide a data object with at least a message to display.');
            }
            if (data.message === undefined) {
                throw new Error('Please provide a message to be displayed.');
            }
            if (data.actionHandler && !data.actionText) {
                throw new Error('Please provide action text with the handler.');
            }
            var active = _this.state.active;

            if (active) {
                _this.queuedNotifications.push(data);
            } else {
                _this.currentNotification = data;
                if (data.message !== null) {
                    _this.setState({ active: true });
                }
                _this.cleanupTimeout = setTimeout(_this._cleanup, data.timeout);
            }
        };

        _this.state = { active: false };
        return _this;
    }

    /** @inheriteddoc */


    _createClass(MessageCenter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _builtInStore2.default.addPushedMessageListener(this._handlePushMessage);
        }
        /** @inheriteddoc */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _builtInStore2.default.removePushedMessageListener(this._handlePushMessage);
        }

        /**
        * Check if the queue has items within it.
        * If it does, display the next entry.
        *
        * @private
        */


        /**
        * Remove cleanupTimeout
        * @return {[type]} [description]
        */


        /**
        * Cleanup the snackbar event listeners and accessiblity attributes.
        *
        * @private
        */


        /**
        * Push a new message into snackbar.
        * @type {number} message id.
        */

    }, {
        key: 'render',


        /** @inheritDoc */
        value: function render() {
            var active = this.state.active;

            var notification = this.currentNotification || {};
            var actionText = notification.actionText,
                actionHandler = notification.actionHandler,
                message = notification.message,
                type = notification.type;

            var classNames = 'mdl-snackbar ' + (active ? 'mdl-snackbar--active' : '');
            var otherProps = { 'aria-hidden': active, 'aria-live': 'assertive', 'aria-atomic': 'true', 'aria-relevant': 'text' };

            return _react2.default.createElement(
                'div',
                Object.assign({ 'data-focus': 'snackbar-message-center', 'data-message-type': type, className: classNames }, otherProps),
                _react2.default.createElement(
                    'div',
                    { className: 'mdl-snackbar__text' },
                    (0, _translation.translate)(message)
                ),
                actionText && _react2.default.createElement(
                    'button',
                    { className: 'mdl-snackbar__action', type: 'button', onClick: actionHandler },
                    (0, _translation.translate)(actionText)
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'mdl-snackbar__close', type: 'button', onClick: this._forceCleanup },
                    _react2.default.createElement(
                        'i',
                        { className: 'material-icons' },
                        'clear'
                    )
                )
            );
        }

        /**
        * Show the snackbar.
        *
        * @param {Object} data The data for the notification.
        * @public
        */

    }]);

    return MessageCenter;
}(_react.Component);

//Static props.


MessageCenter.displayName = 'MessageCenter';
MessageCenter.defaultProps = defaultProps;
MessageCenter.propTypes = propTypes;

exports.default = MessageCenter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwidHRsRXJyb3IiLCJ0dGxJbmZvIiwidHRsU3VjY2VzcyIsInR0bFdhcm5pbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiQ09OU1RBTlQiLCJBTklNQVRJT05fTEVOR1RIIiwiTWVzc2FnZUNlbnRlciIsInByb3BzIiwiY2xlYW51cFRpbWVvdXQiLCJjdXJyZW50Tm90aWZpY2F0aW9uIiwicXVldWVkTm90aWZpY2F0aW9ucyIsIl9jaGVja1F1ZXVlIiwibGVuZ3RoIiwic2hvd1NuYWNrYmFyIiwic2hpZnQiLCJtZXNzYWdlIiwiX2ZvcmNlQ2xlYW51cCIsImNsZWFyVGltZW91dCIsIl9jbGVhbnVwIiwic2V0U3RhdGUiLCJhY3RpdmUiLCJzZXRUaW1lb3V0IiwiX2hhbmRsZVB1c2hNZXNzYWdlIiwibWVzc2FnZVN0b3JlIiwiZ2V0TWVzc2FnZSIsIm1lc3NhZ2VJZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJ0eXBlIiwidHRsIiwibm90aWZpY2F0aW9uRGF0YSIsInRpbWVvdXQiLCJhY3Rpb25UZXh0IiwidGV4dCIsImFjdGlvbkhhbmRsZXIiLCJoYW5kbGVyIiwiZGF0YSIsInVuZGVmaW5lZCIsIkVycm9yIiwic3RhdGUiLCJwdXNoIiwiYWRkUHVzaGVkTWVzc2FnZUxpc3RlbmVyIiwicmVtb3ZlUHVzaGVkTWVzc2FnZUxpc3RlbmVyIiwibm90aWZpY2F0aW9uIiwiY2xhc3NOYW1lcyIsIm90aGVyUHJvcHMiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWU7QUFDakJDLGNBQVUsSUFETztBQUVqQkMsYUFBUyxJQUZRO0FBR2pCQyxnQkFBWSxJQUhLO0FBSWpCQyxnQkFBWTtBQUpLLENBQXJCOztBQU9B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LGNBQVcseUJBQWhCLEVBQTBDLHFCQUFtQlEsSUFBN0QsRUFBbUUsV0FBV2dCLFVBQTlFLElBQThGQyxVQUE5RjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLG9CQUFmO0FBQXFDLGdEQUFVOUIsT0FBVjtBQUFyQyxpQkFESjtBQUVLaUIsOEJBQ0c7QUFBQTtBQUFBLHNCQUFRLFdBQVUsc0JBQWxCLEVBQXlDLE1BQUssUUFBOUMsRUFBdUQsU0FBU0UsYUFBaEU7QUFBZ0YsZ0RBQVVGLFVBQVY7QUFBaEYsaUJBSFI7QUFLSTtBQUFBO0FBQUEsc0JBQVEsV0FBVSxxQkFBbEIsRUFBd0MsTUFBSyxRQUE3QyxFQUFzRCxTQUFTLEtBQUtoQixhQUFwRTtBQUFtRjtBQUFBO0FBQUEsMEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFBbkY7QUFMSixhQURKO0FBU0g7O0FBRUQ7Ozs7Ozs7Ozs7RUFqR3dCOEIsZ0I7O0FBK0g1Qjs7O0FBQ0F4QyxjQUFjeUMsV0FBZCxHQUE0QixlQUE1QjtBQUNBekMsY0FBY1gsWUFBZCxHQUE2QkEsWUFBN0I7QUFDQVcsY0FBY04sU0FBZCxHQUEwQkEsU0FBMUI7O2tCQUVlTSxhIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICdsb2Rhc2gvc3RyaW5nL2NhcGl0YWxpemUnO1xuaW1wb3J0IG1lc3NhZ2VTdG9yZSBmcm9tICdzYWdlc3MtY29yZS9tZXNzYWdlL2J1aWx0LWluLXN0b3JlJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL3RyYW5zbGF0aW9uJztcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIHR0bEVycm9yOiA4MDAwLFxuICAgIHR0bEluZm86IDMwMDAsXG4gICAgdHRsU3VjY2VzczogMzAwMCxcbiAgICB0dGxXYXJuaW5nOiAzMDAwXG59O1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgdHRsRXJyb3I6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0dGxJbmZvOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdHRsU3VjY2VzczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHR0bFdhcm5pbmc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuY29uc3QgQ09OU1RBTlQgPSB7XG4gICAgQU5JTUFUSU9OX0xFTkdUSDogMjUwXG59O1xuXG5jbGFzcyBNZXNzYWdlQ2VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNsZWFudXBUaW1lb3V0ID0gbnVsbDtcbiAgICBjdXJyZW50Tm90aWZpY2F0aW9uID0gbnVsbDtcbiAgICBxdWV1ZWROb3RpZmljYXRpb25zID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGFjdGl2ZTogZmFsc2UgfTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRlZGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbWVzc2FnZVN0b3JlLmFkZFB1c2hlZE1lc3NhZ2VMaXN0ZW5lcih0aGlzLl9oYW5kbGVQdXNoTWVzc2FnZSk7XG4gICAgfVxuICAgIC8qKiBAaW5oZXJpdGVkZG9jICovXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIG1lc3NhZ2VTdG9yZS5yZW1vdmVQdXNoZWRNZXNzYWdlTGlzdGVuZXIodGhpcy5faGFuZGxlUHVzaE1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ2hlY2sgaWYgdGhlIHF1ZXVlIGhhcyBpdGVtcyB3aXRoaW4gaXQuXG4gICAgKiBJZiBpdCBkb2VzLCBkaXNwbGF5IHRoZSBuZXh0IGVudHJ5LlxuICAgICpcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBfY2hlY2tRdWV1ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucXVldWVkTm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTbmFja2Jhcih0aGlzLnF1ZXVlZE5vdGlmaWNhdGlvbnMuc2hpZnQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTbmFja2Jhcih7IG1lc3NhZ2U6IG51bGwgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiBSZW1vdmUgY2xlYW51cFRpbWVvdXRcbiAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgICovXG4gICAgX2ZvcmNlQ2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xlYW51cFRpbWVvdXQpO1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogQ2xlYW51cCB0aGUgc25hY2tiYXIgZXZlbnQgbGlzdGVuZXJzIGFuZCBhY2Nlc3NpYmxpdHkgYXR0cmlidXRlcy5cbiAgICAqXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgX2NsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xlYW51cFRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE5vdGlmaWNhdGlvbi5tZXNzYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1F1ZXVlKCk7XG4gICAgICAgICAgICB9LCBDT05TVEFOVC5BTklNQVRJT05fTEVOR1RIKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAqIFB1c2ggYSBuZXcgbWVzc2FnZSBpbnRvIHNuYWNrYmFyLlxuICAgICogQHR5cGUge251bWJlcn0gbWVzc2FnZSBpZC5cbiAgICAqL1xuICAgIF9oYW5kbGVQdXNoTWVzc2FnZSA9IG1lc3NhZ2VJZCA9PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlU3RvcmUuZ2V0TWVzc2FnZShtZXNzYWdlSWQpO1xuICAgICAgICBjb25zdCB7IGNvbnRlbnQsIGFjdGlvbiwgdHlwZSB9ID0gbWVzc2FnZTtcbiAgICAgICAgY29uc3QgdHRsID0gdGhpcy5wcm9wc1tgdHRsJHtjYXBpdGFsaXplKHR5cGUpfWBdO1xuICAgICAgICBjb25zdCBub3RpZmljYXRpb25EYXRhID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvbnRlbnQsXG4gICAgICAgICAgICB0aW1lb3V0OiB0dGxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uRGF0YS5hY3Rpb25UZXh0ID0gYWN0aW9uLnRleHQ7XG4gICAgICAgICAgICBub3RpZmljYXRpb25EYXRhLmFjdGlvbkhhbmRsZXIgPSBhY3Rpb24uaGFuZGxlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dTbmFja2Jhcihub3RpZmljYXRpb25EYXRhKTtcbiAgICB9O1xuXG4gICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gdGhpcy5jdXJyZW50Tm90aWZpY2F0aW9uIHx8IHt9O1xuICAgICAgICBjb25zdCB7IGFjdGlvblRleHQsIGFjdGlvbkhhbmRsZXIsIG1lc3NhZ2UsIHR5cGUgfSA9IG5vdGlmaWNhdGlvbjtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGBtZGwtc25hY2tiYXIgJHthY3RpdmUgPyAnbWRsLXNuYWNrYmFyLS1hY3RpdmUnIDogJyd9YDtcbiAgICAgICAgY29uc3Qgb3RoZXJQcm9wcyA9IHsgJ2FyaWEtaGlkZGVuJzogYWN0aXZlLCAnYXJpYS1saXZlJzogJ2Fzc2VydGl2ZScsICdhcmlhLWF0b21pYyc6ICd0cnVlJywgJ2FyaWEtcmVsZXZhbnQnOiAndGV4dCcgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdzbmFja2Jhci1tZXNzYWdlLWNlbnRlcicgZGF0YS1tZXNzYWdlLXR5cGU9e3R5cGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZGwtc25hY2tiYXJfX3RleHQnPnt0cmFuc2xhdGUobWVzc2FnZSl9PC9kaXY+XG4gICAgICAgICAgICAgICAge2FjdGlvblRleHQgJiZcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J21kbC1zbmFja2Jhcl9fYWN0aW9uJyB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2FjdGlvbkhhbmRsZXJ9Pnt0cmFuc2xhdGUoYWN0aW9uVGV4dCl9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtZGwtc25hY2tiYXJfX2Nsb3NlJyB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3RoaXMuX2ZvcmNlQ2xlYW51cH0+PGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+Y2xlYXI8L2k+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFNob3cgdGhlIHNuYWNrYmFyLlxuICAgICpcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIGZvciB0aGUgbm90aWZpY2F0aW9uLlxuICAgICogQHB1YmxpY1xuICAgICovXG4gICAgc2hvd1NuYWNrYmFyID0gZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBkYXRhIG9iamVjdCB3aXRoIGF0IGxlYXN0IGEgbWVzc2FnZSB0byBkaXNwbGF5LicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmFjdGlvbkhhbmRsZXIgJiYgIWRhdGEuYWN0aW9uVGV4dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhY3Rpb24gdGV4dCB3aXRoIHRoZSBoYW5kbGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlZE5vdGlmaWNhdGlvbnMucHVzaChkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5vdGlmaWNhdGlvbiA9IGRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xlYW51cFRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuX2NsZWFudXAsIGRhdGEudGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59XG5cbi8vU3RhdGljIHByb3BzLlxuTWVzc2FnZUNlbnRlci5kaXNwbGF5TmFtZSA9ICdNZXNzYWdlQ2VudGVyJztcbk1lc3NhZ2VDZW50ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuTWVzc2FnZUNlbnRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDZW50ZXI7XG4iXX0=