'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filterHtmlAttributes = require('../../utils/filter-html-attributes');

var _filterHtmlAttributes2 = _interopRequireDefault(_filterHtmlAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // see http://www.getmdl.io/components/index.html#layout-section/grid


/**
 * Grid component.
 */
function Grid(_ref) {
    var children = _ref.children,
        className = _ref.className,
        otherProps = _objectWithoutProperties(_ref, ['children', 'className']);

    return _react2.default.createElement(
        'div',
        Object.assign({ className: 'mdl-grid ' + className }, (0, _filterHtmlAttributes2.default)(otherProps)),
        children
    );
}

Grid.propTypes = {
    children: _react.PropTypes.element,
    className: _react.PropTypes.string
};

Grid.defaultProps = {
    className: ''
};

Grid.displayName = 'Grid';

exports.default = Grid;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiR3JpZCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwib3RoZXJQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnQiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OzZOQUZBOzs7QUFJQTs7O0FBR0EsU0FBU0EsSUFBVCxPQUFzRDtBQUFBLFFBQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7QUFBQSxRQUE1QkMsU0FBNEIsUUFBNUJBLFNBQTRCO0FBQUEsUUFBZEMsVUFBYzs7QUFDbEQsV0FDSTtBQUFBO0FBQUEsd0JBQUsseUJBQXVCRCxTQUE1QixJQUE2QyxvQ0FBWUMsVUFBWixDQUE3QztBQUNLRjtBQURMLEtBREo7QUFLSDs7QUFFREQsS0FBS0ksU0FBTCxHQUFpQjtBQUNiSCxjQUFVSSxpQkFBVUMsT0FEUDtBQUViSixlQUFXRyxpQkFBVUU7QUFGUixDQUFqQjs7QUFLQVAsS0FBS1EsWUFBTCxHQUFvQjtBQUNoQk4sZUFBVztBQURLLENBQXBCOztBQUlBRixLQUFLUyxXQUFMLEdBQW1CLE1BQW5COztrQkFFZVQsSSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2VlIGh0dHA6Ly93d3cuZ2V0bWRsLmlvL2NvbXBvbmVudHMvaW5kZXguaHRtbCNsYXlvdXQtc2VjdGlvbi9ncmlkXHJcbmltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmaWx0ZXJQcm9wcyBmcm9tICcuLi8uLi91dGlscy9maWx0ZXItaHRtbC1hdHRyaWJ1dGVzJztcclxuXHJcbi8qKlxyXG4gKiBHcmlkIGNvbXBvbmVudC5cclxuICovXHJcbmZ1bmN0aW9uIEdyaWQoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5vdGhlclByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZGwtZ3JpZCAke2NsYXNzTmFtZX1gfSB7Li4uZmlsdGVyUHJvcHMob3RoZXJQcm9wcyl9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5HcmlkLnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuR3JpZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjbGFzc05hbWU6ICcnXHJcbn07XHJcblxyXG5HcmlkLmRpc3BsYXlOYW1lID0gJ0dyaWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcclxuIl19