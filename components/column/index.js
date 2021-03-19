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
 * Compute class name.
 * @param {string} className base class name.
 * @param {number} size number of columns.
 */
function _className(className, size) {
    var SIZE_CSS = size ? 'mdl-cell--' + size + '-col' : '';
    return 'mdl-cell ' + SIZE_CSS + ' ' + className;
}

/**
 * Column component.
 */
function Column(_ref) {
    var size = _ref.size,
        className = _ref.className,
        children = _ref.children,
        otherProps = _objectWithoutProperties(_ref, ['size', 'className', 'children']);

    return _react2.default.createElement(
        'div',
        Object.assign({
            className: _className(className, size)
        }, (0, _filterHtmlAttributes2.default)(otherProps)),
        children
    );
}

Column.displayName = 'Column';

Column.propTypes = {
    size: _react.PropTypes.number,
    className: _react.PropTypes.string
};

Column.defaultProps = {
    size: 6,
    className: ''
};

exports.default = Column;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsInNpemUiLCJTSVpFX0NTUyIsIkNvbHVtbiIsImNoaWxkcmVuIiwib3RoZXJQcm9wcyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Nk5BRkE7OztBQUlBOzs7OztBQUtBLFNBQVNBLFVBQVQsQ0FBb0JDLFNBQXBCLEVBQStCQyxJQUEvQixFQUFxQztBQUNqQyxRQUFNQyxXQUFXRCxzQkFBb0JBLElBQXBCLFlBQWlDLEVBQWxEO0FBQ0EseUJBQW1CQyxRQUFuQixTQUErQkYsU0FBL0I7QUFDSDs7QUFFRDs7O0FBR0EsU0FBU0csTUFBVCxPQUE4RDtBQUFBLFFBQTVDRixJQUE0QyxRQUE1Q0EsSUFBNEM7QUFBQSxRQUF0Q0QsU0FBc0MsUUFBdENBLFNBQXNDO0FBQUEsUUFBM0JJLFFBQTJCLFFBQTNCQSxRQUEyQjtBQUFBLFFBQWRDLFVBQWM7O0FBQzFELFdBQ0k7QUFBQTtBQUFBO0FBQ0ksdUJBQVdOLFdBQVdDLFNBQVgsRUFBc0JDLElBQXRCO0FBRGYsV0FFUSxvQ0FBWUksVUFBWixDQUZSO0FBSUtEO0FBSkwsS0FESjtBQVFIOztBQUVERCxPQUFPRyxXQUFQLEdBQXFCLFFBQXJCOztBQUVBSCxPQUFPSSxTQUFQLEdBQW1CO0FBQ2ZOLFVBQU1PLGlCQUFVQyxNQUREO0FBRWZULGVBQVdRLGlCQUFVRTtBQUZOLENBQW5COztBQUtBUCxPQUFPUSxZQUFQLEdBQXNCO0FBQ2xCVixVQUFNLENBRFk7QUFFbEJELGVBQVc7QUFGTyxDQUF0Qjs7a0JBS2VHLE0iLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNlZSBodHRwOi8vd3d3LmdldG1kbC5pby9jb21wb25lbnRzL2luZGV4Lmh0bWwjbGF5b3V0LXNlY3Rpb24vZ3JpZFxyXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlsdGVyUHJvcHMgZnJvbSAnLi4vLi4vdXRpbHMvZmlsdGVyLWh0bWwtYXR0cmlidXRlcyc7XHJcblxyXG4vKipcclxuICogQ29tcHV0ZSBjbGFzcyBuYW1lLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIGJhc2UgY2xhc3MgbmFtZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgbnVtYmVyIG9mIGNvbHVtbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBfY2xhc3NOYW1lKGNsYXNzTmFtZSwgc2l6ZSkge1xyXG4gICAgY29uc3QgU0laRV9DU1MgPSBzaXplID8gYG1kbC1jZWxsLS0ke3NpemV9LWNvbGAgOiAnJztcclxuICAgIHJldHVybiBgbWRsLWNlbGwgJHtTSVpFX0NTU30gJHtjbGFzc05hbWV9YDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbHVtbiBjb21wb25lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBDb2x1bW4oeyBzaXplLCBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5vdGhlclByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e19jbGFzc05hbWUoY2xhc3NOYW1lLCBzaXplKX1cclxuICAgICAgICAgICAgey4uLmZpbHRlclByb3BzKG90aGVyUHJvcHMpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuQ29sdW1uLmRpc3BsYXlOYW1lID0gJ0NvbHVtbic7XHJcblxyXG5Db2x1bW4ucHJvcFR5cGVzID0ge1xyXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHNpemU6IDYsXHJcbiAgICBjbGFzc05hbWU6ICcnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XHJcbiJdfQ==