'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // see http://www.getmdl.io/components/index.html#layout-section/grid
//dependencies


/**
 * Column component.
 */
var Column = function (_Component) {
    _inherits(Column, _Component);

    function Column(props) {
        _classCallCheck(this, Column);

        var _this = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, props));

        _this._className = _this._className.bind(_this);
        return _this;
    }

    _createClass(Column, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.warn('SagessComponents v0.15: the \'Column\' component from SagessComponents.common is deprecated, please use SagessComponents.components.Column');
        }
    }, {
        key: '_className',
        value: function _className() {
            var _props = this.props,
                size = _props.size,
                className = _props.className;

            if (className) {
                return className;
            }
            var SIZE_CSS = size ? 'mdl-cell--' + size + '-col' : '';
            return 'mdl-cell ' + SIZE_CSS + ' ';
        }
        /** @inheriteDoc */

    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                children = _props2.children,
                otherProps = _objectWithoutProperties(_props2, ['children']);

            var className = this._className();
            return _react2.default.createElement(
                'div',
                Object.assign({ className: className }, otherProps),
                children
            );
        }
    }]);

    return Column;
}(_react.Component);

//Static props.


Column.displayName = 'Column';
Column.defaultProps = {
    size: 6
};
Column.propTypes = {
    size: (0, _types2.default)('number'),
    className: (0, _types2.default)('string')
};

exports.default = Column;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQ29sdW1uIiwicHJvcHMiLCJfY2xhc3NOYW1lIiwiYmluZCIsImNvbnNvbGUiLCJ3YXJuIiwic2l6ZSIsImNsYXNzTmFtZSIsIlNJWkVfQ1NTIiwiY2hpbGRyZW4iLCJvdGhlclByb3BzIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OytlQUhBO0FBQ0E7OztBQUlBOzs7SUFHTUEsTTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBRmU7QUFHbEI7Ozs7NkNBQ29CO0FBQ2pCQyxvQkFBUUMsSUFBUixDQUFhLDRJQUFiO0FBQ0g7OztxQ0FDWTtBQUFBLHlCQUNtQixLQUFLSixLQUR4QjtBQUFBLGdCQUNESyxJQURDLFVBQ0RBLElBREM7QUFBQSxnQkFDS0MsU0FETCxVQUNLQSxTQURMOztBQUVULGdCQUFJQSxTQUFKLEVBQWU7QUFBRSx1QkFBT0EsU0FBUDtBQUFtQjtBQUNwQyxnQkFBTUMsV0FBV0Ysc0JBQW9CQSxJQUFwQixZQUFpQyxFQUFsRDtBQUNBLGlDQUFtQkUsUUFBbkI7QUFDSDtBQUNEOzs7O2lDQUNTO0FBQUEsMEJBQytCLEtBQUtQLEtBRHBDO0FBQUEsZ0JBQ0dRLFFBREgsV0FDR0EsUUFESDtBQUFBLGdCQUNnQkMsVUFEaEI7O0FBRUwsZ0JBQU1ILFlBQVksS0FBS0wsVUFBTCxFQUFsQjtBQUNBLG1CQUNJO0FBQUE7QUFBQSxnQ0FBSyxXQUFXSyxTQUFoQixJQUErQkcsVUFBL0I7QUFDS0Q7QUFETCxhQURKO0FBS0g7Ozs7RUF2QmdCRSxnQjs7QUEwQnJCOzs7QUFDQVgsT0FBT1ksV0FBUCxHQUFxQixRQUFyQjtBQUNBWixPQUFPYSxZQUFQLEdBQXNCO0FBQ2xCUCxVQUFNO0FBRFksQ0FBdEI7QUFHQU4sT0FBT2MsU0FBUCxHQUFtQjtBQUNmUixVQUFNLHFCQUFNLFFBQU4sQ0FEUztBQUVmQyxlQUFXLHFCQUFNLFFBQU47QUFGSSxDQUFuQjs7a0JBS2VQLE0iLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNlZSBodHRwOi8vd3d3LmdldG1kbC5pby9jb21wb25lbnRzL2luZGV4Lmh0bWwjbGF5b3V0LXNlY3Rpb24vZ3JpZFxuLy9kZXBlbmRlbmNpZXNcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZXMgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcblxuLyoqXG4gKiBDb2x1bW4gY29tcG9uZW50LlxuICovXG5jbGFzcyBDb2x1bW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy5fY2xhc3NOYW1lLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIHYwLjE1OiB0aGUgXFwnQ29sdW1uXFwnIGNvbXBvbmVudCBmcm9tIFNhZ2Vzc0NvbXBvbmVudHMuY29tbW9uIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgU2FnZXNzQ29tcG9uZW50cy5jb21wb25lbnRzLkNvbHVtbicpO1xuICAgIH1cbiAgICBfY2xhc3NOYW1lKCkge1xuICAgICAgICBjb25zdCB7IHNpemUsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGNsYXNzTmFtZSkgeyByZXR1cm4gY2xhc3NOYW1lOyB9XG4gICAgICAgIGNvbnN0IFNJWkVfQ1NTID0gc2l6ZSA/IGBtZGwtY2VsbC0tJHtzaXplfS1jb2xgIDogJyc7XG4gICAgICAgIHJldHVybiBgbWRsLWNlbGwgJHtTSVpFX0NTU30gYDtcbiAgICB9XG4gICAgLyoqIEBpbmhlcml0ZURvYyAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5fY2xhc3NOYW1lKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vL1N0YXRpYyBwcm9wcy5cbkNvbHVtbi5kaXNwbGF5TmFtZSA9ICdDb2x1bW4nO1xuQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA2XG59O1xuQ29sdW1uLnByb3BUeXBlcyA9IHtcbiAgICBzaXplOiB0eXBlcygnbnVtYmVyJyksXG4gICAgY2xhc3NOYW1lOiB0eXBlcygnc3RyaW5nJylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcbiJdfQ==