'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filterHtmlAttributes = require('../../utils/filter-html-attributes');

var _filterHtmlAttributes2 = _interopRequireDefault(_filterHtmlAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Icon(_ref) {
    var name = _ref.name,
        library = _ref.library,
        onClick = _ref.onClick,
        style = _ref.style;

    switch (library) {
        case 'material':
            return _react2.default.createElement(
                'i',
                Object.assign({ className: 'material-icons', onClick: onClick }, (0, _filterHtmlAttributes2.default)(style)),
                name
            );
        case 'font-awesome':
            return _react2.default.createElement('i', Object.assign({ className: 'fa fa-' + name, onClick: onClick }, (0, _filterHtmlAttributes2.default)(style)));
        case 'font-custom':
            return _react2.default.createElement('span', Object.assign({ className: 'icon-' + name }, (0, _filterHtmlAttributes2.default)(style)));
        default:
            return null;
    }
}

Icon.displayName = 'Icon';

Icon.defaultProps = {
    name: '',
    library: 'material'
};

Icon.propTypes = {
    onClick: _react.PropTypes.func,
    library: _react.PropTypes.oneOf(['material', 'font-awesome', 'font-custom']),
    name: _react.PropTypes.string
};

exports.default = Icon;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiSWNvbiIsIm5hbWUiLCJsaWJyYXJ5Iiwib25DbGljayIsInN0eWxlIiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwib25lT2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLElBQVQsT0FBaUQ7QUFBQSxRQUFqQ0MsSUFBaUMsUUFBakNBLElBQWlDO0FBQUEsUUFBM0JDLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLFFBQWxCQyxPQUFrQixRQUFsQkEsT0FBa0I7QUFBQSxRQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQzdDLFlBQVFGLE9BQVI7QUFDSSxhQUFLLFVBQUw7QUFDSSxtQkFDSTtBQUFBO0FBQUEsZ0NBQUcsV0FBVSxnQkFBYixFQUE4QixTQUFTQyxPQUF2QyxJQUFvRCxvQ0FBWUMsS0FBWixDQUFwRDtBQUEwRUg7QUFBMUUsYUFESjtBQUdKLGFBQUssY0FBTDtBQUNJLG1CQUNJLG1EQUFHLHNCQUFvQkEsSUFBdkIsRUFBK0IsU0FBU0UsT0FBeEMsSUFBcUQsb0NBQVlDLEtBQVosQ0FBckQsRUFESjtBQUdKLGFBQUssYUFBTDtBQUNJLG1CQUNJLHNEQUFNLHFCQUFtQkgsSUFBekIsSUFBcUMsb0NBQVlHLEtBQVosQ0FBckMsRUFESjtBQUdKO0FBQ0ksbUJBQU8sSUFBUDtBQWRSO0FBZ0JIOztBQUVESixLQUFLSyxXQUFMLEdBQW1CLE1BQW5COztBQUVBTCxLQUFLTSxZQUFMLEdBQW9CO0FBQ2hCTCxVQUFNLEVBRFU7QUFFaEJDLGFBQVM7QUFGTyxDQUFwQjs7QUFLQUYsS0FBS08sU0FBTCxHQUFpQjtBQUNiSixhQUFTSyxpQkFBVUMsSUFETjtBQUViUCxhQUFTTSxpQkFBVUUsS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxjQUFiLEVBQTZCLGFBQTdCLENBQWhCLENBRkk7QUFHYlQsVUFBTU8saUJBQVVHO0FBSEgsQ0FBakI7O2tCQU1lWCxJIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlsdGVyUHJvcHMgZnJvbSAnLi4vLi4vdXRpbHMvZmlsdGVyLWh0bWwtYXR0cmlidXRlcyc7XHJcblxyXG5mdW5jdGlvbiBJY29uKHsgbmFtZSwgbGlicmFyeSwgb25DbGljaywgc3R5bGUgfSkge1xyXG4gICAgc3dpdGNoIChsaWJyYXJ5KSB7XHJcbiAgICAgICAgY2FzZSAnbWF0ZXJpYWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucycgb25DbGljaz17b25DbGlja30gey4uLmZpbHRlclByb3BzKHN0eWxlKSB9PntuYW1lfTwvaT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdmb250LWF3ZXNvbWUnOlxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmEgZmEtJHtuYW1lfWB9IG9uQ2xpY2s9e29uQ2xpY2t9IHsuLi5maWx0ZXJQcm9wcyhzdHlsZSkgfSAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ2ZvbnQtY3VzdG9tJzpcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGljb24tJHtuYW1lfWB9IHsuLi5maWx0ZXJQcm9wcyhzdHlsZSkgfSAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5JY29uLmRpc3BsYXlOYW1lID0gJ0ljb24nO1xyXG5cclxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGxpYnJhcnk6ICdtYXRlcmlhbCdcclxufTtcclxuXHJcbkljb24ucHJvcFR5cGVzID0ge1xyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBsaWJyYXJ5OiBQcm9wVHlwZXMub25lT2YoWydtYXRlcmlhbCcsICdmb250LWF3ZXNvbWUnLCAnZm9udC1jdXN0b20nXSksXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uO1xyXG4iXX0=