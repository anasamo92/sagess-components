'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconMixin = {
    displayName: 'Icon',
    getDefaultProps: function getDefaultProps() {
        return {
            name: '',
            library: 'material'
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents v0.15: the \'Icon\' component from SagessComponents.common is deprecated, please use SagessComponents.components.Icon');
    },

    propTypes: {
        handleOnClick: _react.PropTypes.func,
        library: _react.PropTypes.oneOf(['material', 'font-awesome', 'font-custom']),
        name: _react.PropTypes.string
    },
    /**
    * Render the img.
    * @returns {XML} Html code.
    */
    render: function render() {
        var _props = this.props,
            name = _props.name,
            library = _props.library,
            onClick = _props.onClick,
            style = _props.style;

        switch (library) {
            case 'material':
                return _react2.default.createElement(
                    'i',
                    Object.assign({ className: 'material-icons', onClick: onClick }, style),
                    name
                );
            case 'font-awesome':
                var faCss = 'fa fa-' + name;
                return _react2.default.createElement('i', Object.assign({ className: faCss, onClick: onClick }, style));
            case 'font-custom':
                return _react2.default.createElement('span', { className: 'icon-' + name });
            default:
                return null;
        }
    }
};

var _builder = (0, _builder3.default)(iconMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiaWNvbk1peGluIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJuYW1lIiwibGlicmFyeSIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwicHJvcFR5cGVzIiwiaGFuZGxlT25DbGljayIsIlByb3BUeXBlcyIsImZ1bmMiLCJvbmVPZiIsInN0cmluZyIsInJlbmRlciIsInByb3BzIiwib25DbGljayIsInN0eWxlIiwiZmFDc3MiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDZEMsaUJBQWEsTUFEQztBQUVkQyxtQkFGYyw2QkFFSTtBQUNkLGVBQU87QUFDSEMsa0JBQU0sRUFESDtBQUVIQyxxQkFBUztBQUZOLFNBQVA7QUFJSCxLQVBhO0FBUWRDLHNCQVJjLGdDQVFPO0FBQ2pCQyxnQkFBUUMsSUFBUixDQUFhLHdJQUFiO0FBQ0gsS0FWYTs7QUFXZEMsZUFBVztBQUNQQyx1QkFBZUMsaUJBQVVDLElBRGxCO0FBRVBQLGlCQUFTTSxpQkFBVUUsS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxjQUFiLEVBQTZCLGFBQTdCLENBQWhCLENBRkY7QUFHUFQsY0FBTU8saUJBQVVHO0FBSFQsS0FYRztBQWdCZDs7OztBQUlBQyxVQXBCYyxvQkFvQkw7QUFBQSxxQkFDcUMsS0FBS0MsS0FEMUM7QUFBQSxZQUNHWixJQURILFVBQ0dBLElBREg7QUFBQSxZQUNTQyxPQURULFVBQ1NBLE9BRFQ7QUFBQSxZQUNrQlksT0FEbEIsVUFDa0JBLE9BRGxCO0FBQUEsWUFDMkJDLEtBRDNCLFVBQzJCQSxLQUQzQjs7QUFFTCxnQkFBUWIsT0FBUjtBQUNJLGlCQUFLLFVBQUw7QUFDSSx1QkFDSTtBQUFBO0FBQUEsb0NBQUcsV0FBVSxnQkFBYixFQUE4QixTQUFTWSxPQUF2QyxJQUFvREMsS0FBcEQ7QUFBNERkO0FBQTVELGlCQURKO0FBR0osaUJBQUssY0FBTDtBQUNJLG9CQUFNZSxtQkFBaUJmLElBQXZCO0FBQ0EsdUJBQ0ksbURBQUcsV0FBV2UsS0FBZCxFQUFxQixTQUFTRixPQUE5QixJQUEyQ0MsS0FBM0MsRUFESjtBQUdKLGlCQUFLLGFBQUw7QUFDSSx1QkFDSSx3Q0FBTSxxQkFBbUJkLElBQXpCLEdBREo7QUFHSjtBQUNJLHVCQUFPLElBQVA7QUFmUjtBQWlCSDtBQXZDYSxDQUFsQjs7ZUEwQzZCLHVCQUFRSCxTQUFSLEM7SUFBckJtQixLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgaWNvbk1peGluID0ge1xuICAgIGRpc3BsYXlOYW1lOiAnSWNvbicsXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBsaWJyYXJ5OiAnbWF0ZXJpYWwnXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyB2MC4xNTogdGhlIFxcJ0ljb25cXCcgY29tcG9uZW50IGZyb20gU2FnZXNzQ29tcG9uZW50cy5jb21tb24gaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBTYWdlc3NDb21wb25lbnRzLmNvbXBvbmVudHMuSWNvbicpO1xuICAgIH0sXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGhhbmRsZU9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBsaWJyYXJ5OiBQcm9wVHlwZXMub25lT2YoWydtYXRlcmlhbCcsICdmb250LWF3ZXNvbWUnLCAnZm9udC1jdXN0b20nXSksXG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBpbWcuXG4gICAgKiBAcmV0dXJucyB7WE1MfSBIdG1sIGNvZGUuXG4gICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgbGlicmFyeSwgb25DbGljaywgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHN3aXRjaCAobGlicmFyeSkge1xuICAgICAgICAgICAgY2FzZSAnbWF0ZXJpYWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnIG9uQ2xpY2s9e29uQ2xpY2t9IHsuLi5zdHlsZX0+e25hbWV9PC9pPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlICdmb250LWF3ZXNvbWUnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGZhQ3NzID0gYGZhIGZhLSR7bmFtZX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZmFDc3N9IG9uQ2xpY2s9e29uQ2xpY2t9IHsuLi5zdHlsZX0gLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSAnZm9udC1jdXN0b20nOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGljb24tJHtuYW1lfWB9IC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoaWNvbk1peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19