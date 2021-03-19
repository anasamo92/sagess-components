'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

require('material-design-lite/material');

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _translation = require('sagess-core/translation');

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = {

    /** DisplayName. */
    displayName: 'Dropdown',

    /** @inheritdoc */
    propTypes: {
        iconLibrary: _react.PropTypes.string,
        iconProps: _react.PropTypes.shape({
            name: _react.PropTypes.string,
            iconLibrary: _react.PropTypes.string
        }),
        operationList: _react.PropTypes.array,
        position: _react.PropTypes.string,
        shape: _react.PropTypes.string
    },

    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            iconProps: {
                name: 'more_vert',
                iconLibrary: undefined
            },
            operationList: [],
            position: 'right',
            shape: 'icon'
        };
    },


    /** @inheritdoc */
    componentWillMount: function componentWillMount() {
        this._htmlId = _uuid2.default.v4();
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/dropdown or sagess-components/components/icon-dropdown instead');
    },


    /** @inheritdoc */
    componentDidMount: function componentDidMount() {
        if (0 !== this.props.operationList.length && _reactDom2.default.findDOMNode(this.refs.dropdown)) {
            componentHandler.upgradeElement(_reactDom2.default.findDOMNode(this.refs.dropdown));
        }
    },


    /** @inheritdoc */
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (0 !== nextProps.operationList.length && _reactDom2.default.findDOMNode(this.refs.dropdown)) {
            componentHandler.upgradeElement(_reactDom2.default.findDOMNode(this.refs.dropdown));
        }
    },


    /** @inheritdoc */
    componentWillUnmount: function componentWillUnmount() {
        if (0 !== this.props.operationList.length && _reactDom2.default.findDOMNode(this.refs.dropdown)) {
            componentHandler.downgradeElements(_reactDom2.default.findDOMNode(this.refs.dropdown));
        }
    },


    /**
    * Handle action on selected item.
    * @param {function} action Action to call
    * @returns {function} Function called when item is selected.
    * @private
    */
    _handleAction: function _handleAction(action) {
        var _this = this;

        return function () {
            if (_this.props.operationParam) {
                action(_this.props.operationParam);
            } else {
                action();
            }
        };
    },


    /** @inheritdoc */
    render: function render() {
        var _this2 = this;

        var _props = this.props,
            iconProps = _props.iconProps,
            operationList = _props.operationList,
            position = _props.position,
            shape = _props.shape;

        var id = this._htmlId;

        if (0 === operationList.length) {
            return null;
        }

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_button2.default, { icon: iconProps.name, iconLibrary: iconProps.iconLibrary, id: id, isJs: true, shape: shape }),
            _react2.default.createElement(
                'ul',
                { className: 'mdl-menu mdl-menu--bottom-' + position + ' mdl-js-menu mdl-js-ripple-effect', htmlFor: id, ref: 'dropdown' },
                operationList.map(function (operation, idx) {
                    return _react2.default.createElement(
                        'li',
                        { className: 'mdl-menu__item ' + operation.style, key: idx, onClick: _this2._handleAction(operation.action) },
                        (0, _translation.translate)(operation.label)
                    );
                })
            )
        );
    }
};
// Components

// Dependencies
// Libs

var _builder = (0, _builder3.default)(Dropdown),
    mixin = _builder.mixin,
    component = _builder.component;

exports.default = { mixin: mixin, component: component };
exports.mixin = mixin;
exports.component = component;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImljb25MaWJyYXJ5IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaWNvblByb3BzIiwic2hhcGUiLCJuYW1lIiwib3BlcmF0aW9uTGlzdCIsImFycmF5IiwicG9zaXRpb24iLCJnZXREZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJfaHRtbElkIiwidXVpZCIsInY0IiwiY29uc29sZSIsIndhcm4iLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwibGVuZ3RoIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInJlZnMiLCJkcm9wZG93biIsImNvbXBvbmVudEhhbmRsZXIiLCJ1cGdyYWRlRWxlbWVudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvd25ncmFkZUVsZW1lbnRzIiwiX2hhbmRsZUFjdGlvbiIsImFjdGlvbiIsIm9wZXJhdGlvblBhcmFtIiwicmVuZGVyIiwiaWQiLCJtYXAiLCJvcGVyYXRpb24iLCJpZHgiLCJzdHlsZSIsImxhYmVsIiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXOztBQUViO0FBQ0FDLGlCQUFhLFVBSEE7O0FBS2I7QUFDQUMsZUFBVztBQUNQQyxxQkFBYUMsaUJBQVVDLE1BRGhCO0FBRVBDLG1CQUFXRixpQkFBVUcsS0FBVixDQUFnQjtBQUN2QkMsa0JBQU1KLGlCQUFVQyxNQURPO0FBRXZCRix5QkFBYUMsaUJBQVVDO0FBRkEsU0FBaEIsQ0FGSjtBQU1QSSx1QkFBZUwsaUJBQVVNLEtBTmxCO0FBT1BDLGtCQUFVUCxpQkFBVUMsTUFQYjtBQVFQ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TSxVQUFVTCxNQUE3QixDQUF2RTtBQUNLLG9EQUFVSyxVQUFVRyxLQUFwQjtBQURMLHFCQURKO0FBS0gsaUJBTkE7QUFETDtBQUZKLFNBREo7QUFjSDtBQWpHWSxDQUFqQjtBQUhBOztBQUhBO0FBTEE7O2VBK0c2Qix1QkFBUTFDLFFBQVIsQztJQUFyQjJDLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O2tCQUNBLEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRTtRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCAnbWF0ZXJpYWwtZGVzaWduLWxpdGUvbWF0ZXJpYWwnO1xuLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdzYWdlc3MtY29yZS90cmFuc2xhdGlvbic7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJztcblxuY29uc3QgRHJvcGRvd24gPSB7XG5cbiAgICAvKiogRGlzcGxheU5hbWUuICovXG4gICAgZGlzcGxheU5hbWU6ICdEcm9wZG93bicsXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgaWNvbkxpYnJhcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGljb25Qcm9wczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICBpY29uTGlicmFyeTogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgICB9KSxcbiAgICAgICAgb3BlcmF0aW9uTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICBwb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc2hhcGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9LFxuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWNvblByb3BzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ21vcmVfdmVydCcsXG4gICAgICAgICAgICAgICAgaWNvbkxpYnJhcnk6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wZXJhdGlvbkxpc3Q6IFtdLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgICBzaGFwZTogJ2ljb24nXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5faHRtbElkID0gdXVpZC52NCgpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgMi4yLjA6IHRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2Ugc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9kcm9wZG93biBvciBzYWdlc3MtY29tcG9uZW50cy9jb21wb25lbnRzL2ljb24tZHJvcGRvd24gaW5zdGVhZCcpO1xuXG4gICAgfSxcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoMCAhPT0gdGhpcy5wcm9wcy5vcGVyYXRpb25MaXN0Lmxlbmd0aCAmJiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZHJvcGRvd24pKSB7XG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5kcm9wZG93bikpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICgwICE9PSBuZXh0UHJvcHMub3BlcmF0aW9uTGlzdC5sZW5ndGggJiYgUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmRyb3Bkb3duKSkge1xuICAgICAgICAgICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudChSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZHJvcGRvd24pKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKDAgIT09IHRoaXMucHJvcHMub3BlcmF0aW9uTGlzdC5sZW5ndGggJiYgUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmRyb3Bkb3duKSkge1xuICAgICAgICAgICAgY29tcG9uZW50SGFuZGxlci5kb3duZ3JhZGVFbGVtZW50cyhSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZHJvcGRvd24pKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEhhbmRsZSBhY3Rpb24gb24gc2VsZWN0ZWQgaXRlbS5cbiAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGFjdGlvbiBBY3Rpb24gdG8gY2FsbFxuICAgICogQHJldHVybnMge2Z1bmN0aW9ufSBGdW5jdGlvbiBjYWxsZWQgd2hlbiBpdGVtIGlzIHNlbGVjdGVkLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIF9oYW5kbGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcGVyYXRpb25QYXJhbSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbih0aGlzLnByb3BzLm9wZXJhdGlvblBhcmFtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpY29uUHJvcHMsIG9wZXJhdGlvbkxpc3QsIHBvc2l0aW9uLCBzaGFwZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLl9odG1sSWQ7XG5cbiAgICAgICAgaWYgKDAgPT09IG9wZXJhdGlvbkxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17aWNvblByb3BzLm5hbWV9IGljb25MaWJyYXJ5PXtpY29uUHJvcHMuaWNvbkxpYnJhcnl9IGlkPXtpZH0gaXNKcyBzaGFwZT17c2hhcGV9IC8+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YG1kbC1tZW51IG1kbC1tZW51LS1ib3R0b20tJHtwb3NpdGlvbn0gbWRsLWpzLW1lbnUgbWRsLWpzLXJpcHBsZS1lZmZlY3RgfSBodG1sRm9yPXtpZH0gcmVmPSdkcm9wZG93bic+XG4gICAgICAgICAgICAgICAgICAgIHtvcGVyYXRpb25MaXN0Lm1hcCgob3BlcmF0aW9uLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YG1kbC1tZW51X19pdGVtICR7b3BlcmF0aW9uLnN0eWxlfWB9IGtleT17aWR4fSBvbkNsaWNrPXt0aGlzLl9oYW5kbGVBY3Rpb24ob3BlcmF0aW9uLmFjdGlvbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKG9wZXJhdGlvbi5sYWJlbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoRHJvcGRvd24pO1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=