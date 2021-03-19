'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // see http://www.getmdl.io/components/index.html#layout-section/grid
//dependencies


/**
 * Grid component.
 */
var Grid = function (_Component) {
    _inherits(Grid, _Component);

    function Grid(props) {
        _classCallCheck(this, Grid);

        return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));
    }

    _createClass(Grid, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.warn('SagessComponents v0.15: the \'Grid\' component from SagessComponents.common is deprecated, please use SagessComponents.components.Grid');
        }
        /** @inheriteDoc */

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                otherProps = _objectWithoutProperties(_props, ['children']);

            return _react2.default.createElement(
                'div',
                Object.assign({ className: 'mdl-grid' }, otherProps),
                children
            );
        }
    }]);

    return Grid;
}(_react.Component);

Grid.displayName = 'Grid';

exports.default = Grid;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiR3JpZCIsInByb3BzIiwiY29uc29sZSIsIndhcm4iLCJjaGlsZHJlbiIsIm90aGVyUHJvcHMiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7OytlQUZBO0FBQ0E7OztBQUVBOzs7SUFHTUEsSTs7O0FBQ0Ysa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDVEEsS0FEUztBQUVsQjs7Ozs2Q0FDb0I7QUFDakJDLG9CQUFRQyxJQUFSLENBQWEsd0lBQWI7QUFDSDtBQUNEOzs7O2lDQUNTO0FBQUEseUJBQytCLEtBQUtGLEtBRHBDO0FBQUEsZ0JBQ0dHLFFBREgsVUFDR0EsUUFESDtBQUFBLGdCQUNnQkMsVUFEaEI7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGdDQUFLLFdBQVUsVUFBZixJQUE4QkEsVUFBOUI7QUFDS0Q7QUFETCxhQURKO0FBS0g7Ozs7RUFmY0UsZ0I7O0FBa0JuQk4sS0FBS08sV0FBTCxHQUFtQixNQUFuQjs7a0JBRWVQLEkiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNlZSBodHRwOi8vd3d3LmdldG1kbC5pby9jb21wb25lbnRzL2luZGV4Lmh0bWwjbGF5b3V0LXNlY3Rpb24vZ3JpZFxuLy9kZXBlbmRlbmNpZXNcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEdyaWQgY29tcG9uZW50LlxuICovXG5jbGFzcyBHcmlkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIHYwLjE1OiB0aGUgXFwnR3JpZFxcJyBjb21wb25lbnQgZnJvbSBTYWdlc3NDb21wb25lbnRzLmNvbW1vbiBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFNhZ2Vzc0NvbXBvbmVudHMuY29tcG9uZW50cy5HcmlkJyk7XG4gICAgfVxuICAgIC8qKiBAaW5oZXJpdGVEb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWRsLWdyaWQnIHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkdyaWQuZGlzcGxheU5hbWUgPSAnR3JpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iXX0=