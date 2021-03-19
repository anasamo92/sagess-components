'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GRID_SIZE = 12,
    CELL = 'mdl-cell';
/**
* An example of the label and content size, and of label and content offset, with function fieldFor
*
* I want to have the label on the first row of the grid, the field on the second one,
* with a 'padding' (offset) of one cell on each row.
*
* const fieldOptions = { labelSize: 10, contentSize: 10, labelOffset:1, contentOffset:1 };
* ...
* {this.fieldFor('nom', fieldOptions)}
*
**/

var Grid = function Grid(Component) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
        _inherits(GridComponent, _Component);

        function GridComponent() {
            _classCallCheck(this, GridComponent);

            return _possibleConstructorReturn(this, (GridComponent.__proto__ || Object.getPrototypeOf(GridComponent)).apply(this, arguments));
        }

        _createClass(GridComponent, [{
            key: '_buildGridClassName',
            value: function _buildGridClassName(prop, suffix) {
                return prop ? ' mdl-cell--' + prop + (suffix ? suffix : '') : '';
            }

            /**
            * Get the label gridClass.
            * @returns {string} - The label gridSize.
            */

        }, {
            key: '_getCellGridClassName',
            value: function _getCellGridClassName(position, size, offset) {
                var cellPosition = this._buildGridClassName(position);
                var cellSize = this._buildGridClassName(size, '-col');
                var cellOffset = this._buildGridClassName(offset, '-offset');

                return CELL + cellPosition + cellSize + cellOffset;
            }

            /**
            * Get the content class Name.
            * @returns {string} - The content gridSize.
            */

        }, {
            key: '_getLabelGridClassName',
            value: function _getLabelGridClassName() {
                return this._getCellGridClassName(this.props.labelCellPosition, this.props.labelSize, this.props.labelOffset);
            }
        }, {
            key: '_getContentGridClassName',
            value: function _getContentGridClassName() {
                return this._getCellGridClassName(this.props.contentCellPosition, this.props.contentSize || GRID_SIZE - this.props.labelSize, this.props.contentOffset);
            }

            /**
            * Get the content offset className.
            * @returns {string} - The label gridSize.
            */

        }, {
            key: '_getContentOffsetClassName',
            value: function _getContentOffsetClassName() {
                return CELL + ' mdl-cell--' + this.props.labelSize + '-offset';
            }
        }]);

        return GridComponent;
    }(Component), _class.defaultProps = {
        /**
        * Size of the label in the grid system.
        * @type {Number}
        */
        labelSize: 4,
        /**
        * POsition of the label in the cell.
        * Possible values: top, middle, bottom
        * @type {String}
        */
        labelCellPosition: 'top',
        /**
        * Position of the content in the cell.
        * Possible values: top, middle, bottom
        * @type {String}
        */
        contentCellPosition: 'top'
    }, _class.propTypes = {
        contentCellPosition: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
        labelCellPosition: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
        labelSize: _react.PropTypes.number,
        contentSize: _react.PropTypes.number,
        labelOffset: _react.PropTypes.number,
        contentOffset: _react.PropTypes.number
    }, _temp;
};

exports.default = Grid;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiR1JJRF9TSVpFIiwiQ0VMTCIsIkdyaWQiLCJwcm9wIiwic3VmZml4IiwicG9zaXRpb24iLCJzaXplIiwib2Zmc2V0IiwiY2VsbFBvc2l0aW9uIiwiX2J1aWxkR3JpZENsYXNzTmFtZSIsImNlbGxTaXplIiwiY2VsbE9mZnNldCIsIl9nZXRDZWxsR3JpZENsYXNzTmFtZSIsInByb3BzIiwibGFiZWxDZWxsUG9zaXRpb24iLCJsYWJlbFNpemUiLCJsYWJlbE9mZnNldCIsImNvbnRlbnRDZWxsUG9zaXRpb24iLCJjb250ZW50U2l6ZSIsImNvbnRlbnRPZmZzZXQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksRUFBbEI7QUFBQSxJQUFzQkMsT0FBTyxVQUE3QjtBQUNBOzs7Ozs7Ozs7Ozs7QUFhQSxJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsZ0RBK0JXQyxJQS9CWCxFQStCaUJDLE1BL0JqQixFQStCeUI7QUFDOUIsdUJBQU9ELE9BQU0sZ0JBQWdCQSxJQUFoQixJQUF3QkMsU0FBU0EsTUFBVCxHQUFrQixFQUExQyxDQUFOLEdBQXFELEVBQTVEO0FBQ0g7O0FBRUQ7Ozs7O0FBbkNTO0FBQUE7QUFBQSxrREF1Q2FDLFFBdkNiLEVBdUNzQkMsSUF2Q3RCLEVBdUM0QkMsTUF2QzVCLEVBdUNvQztBQUN6QyxvQkFBTUMsZUFBZSxLQUFLQyxtQkFBTCxDQUF5QkosUUFBekIsQ0FBckI7QUFDQSxvQkFBTUssV0FBVyxLQUFLRCxtQkFBTCxDQUF5QkgsSUFBekIsRUFBK0IsTUFBL0IsQ0FBakI7QUFDQSxvQkFBTUssYUFBYSxLQUFLRixtQkFBTCxDQUF5QkYsTUFBekIsRUFBaUMsU0FBakMsQ0FBbkI7O0FBRUEsdUJBQU9OLE9BQU9PLFlBQVAsR0FBc0JFLFFBQXRCLEdBQWlDQyxVQUF4QztBQUNIOztBQUVEOzs7OztBQS9DUztBQUFBO0FBQUEscURBbURnQjtBQUNyQix1QkFBTyxLQUFLQyxxQkFBTCxDQUEyQixLQUFLQyxLQUFMLENBQVdDLGlCQUF0QyxFQUF5RCxLQUFLRCxLQUFMLENBQVdFLFNBQXBFLEVBQStFLEtBQUtGLEtBQUwsQ0FBV0csV0FBMUYsQ0FBUDtBQUNIO0FBckRRO0FBQUE7QUFBQSx1REF1RGtCO0FBQ3ZCLHVCQUFPLEtBQUtKLHFCQUFMLENBQTJCLEtBQUtDLEtBQUwsQ0FBV0ksbUJBQXRDLEVBQTRELEtBQUtKLEtBQUwsQ0FBV0ssV0FBWCxJQUEyQmxCLFlBQVksS0FBS2EsS0FBTCxDQUFXRSxTQUE5RyxFQUEySCxLQUFLRixLQUFMLENBQVdNLGFBQXRJLENBQVA7QUFDSDs7QUFFRDs7Ozs7QUEzRFM7QUFBQTtBQUFBLHlEQStEb0I7QUFDekIsdUJBQVVsQixJQUFWLG1CQUE0QixLQUFLWSxLQUFMLENBQVdFLFNBQXZDO0FBQ0g7QUFqRVE7O0FBQUE7QUFBQSxNQUF5Q0ssU0FBekMsVUFFRkMsWUFGRSxHQUVhO0FBQ2xCOzs7O0FBSUFOLG1CQUFXLENBTE87QUFNbEI7Ozs7O0FBS0FELDJCQUFtQixLQVhEO0FBWWxCOzs7OztBQUtBRyw2QkFBcUI7QUFqQkgsS0FGYixTQXNCRkssU0F0QkUsR0FzQlU7QUFDZkwsNkJBQXFCTSxpQkFBVUMsU0FBVixDQUFvQixDQUFDRCxpQkFBVUUsTUFBWCxFQUFtQkYsaUJBQVVHLE1BQTdCLENBQXBCLENBRE47QUFFZlosMkJBQW1CUyxpQkFBVUMsU0FBVixDQUFvQixDQUFDRCxpQkFBVUUsTUFBWCxFQUFtQkYsaUJBQVVHLE1BQTdCLENBQXBCLENBRko7QUFHZlgsbUJBQVdRLGlCQUFVRSxNQUhOO0FBSWZQLHFCQUFhSyxpQkFBVUUsTUFKUjtBQUtmVCxxQkFBYU8saUJBQVVFLE1BTFI7QUFNZk4sdUJBQWVJLGlCQUFVRTtBQU5WLEtBdEJWO0FBQUEsQ0FBYjs7a0JBb0VldkIsSSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBHUklEX1NJWkUgPSAxMiwgQ0VMTCA9ICdtZGwtY2VsbCc7XHJcbi8qKlxyXG4qIEFuIGV4YW1wbGUgb2YgdGhlIGxhYmVsIGFuZCBjb250ZW50IHNpemUsIGFuZCBvZiBsYWJlbCBhbmQgY29udGVudCBvZmZzZXQsIHdpdGggZnVuY3Rpb24gZmllbGRGb3JcclxuKlxyXG4qIEkgd2FudCB0byBoYXZlIHRoZSBsYWJlbCBvbiB0aGUgZmlyc3Qgcm93IG9mIHRoZSBncmlkLCB0aGUgZmllbGQgb24gdGhlIHNlY29uZCBvbmUsXHJcbiogd2l0aCBhICdwYWRkaW5nJyAob2Zmc2V0KSBvZiBvbmUgY2VsbCBvbiBlYWNoIHJvdy5cclxuKlxyXG4qIGNvbnN0IGZpZWxkT3B0aW9ucyA9IHsgbGFiZWxTaXplOiAxMCwgY29udGVudFNpemU6IDEwLCBsYWJlbE9mZnNldDoxLCBjb250ZW50T2Zmc2V0OjEgfTtcclxuKiAuLi5cclxuKiB7dGhpcy5maWVsZEZvcignbm9tJywgZmllbGRPcHRpb25zKX1cclxuKlxyXG4qKi9cclxuXHJcblxyXG5jb25zdCBHcmlkID0gQ29tcG9uZW50ID0+IGNsYXNzIEdyaWRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTaXplIG9mIHRoZSBsYWJlbCBpbiB0aGUgZ3JpZCBzeXN0ZW0uXHJcbiAgICAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgbGFiZWxTaXplOiA0LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUE9zaXRpb24gb2YgdGhlIGxhYmVsIGluIHRoZSBjZWxsLlxyXG4gICAgICAgICogUG9zc2libGUgdmFsdWVzOiB0b3AsIG1pZGRsZSwgYm90dG9tXHJcbiAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgbGFiZWxDZWxsUG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUG9zaXRpb24gb2YgdGhlIGNvbnRlbnQgaW4gdGhlIGNlbGwuXHJcbiAgICAgICAgKiBQb3NzaWJsZSB2YWx1ZXM6IHRvcCwgbWlkZGxlLCBib3R0b21cclxuICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgKi9cclxuICAgICAgICBjb250ZW50Q2VsbFBvc2l0aW9uOiAndG9wJ1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGNvbnRlbnRDZWxsUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICAgICAgICBsYWJlbENlbGxQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgICAgIGxhYmVsU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBjb250ZW50U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBsYWJlbE9mZnNldDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBjb250ZW50T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIF9idWlsZEdyaWRDbGFzc05hbWUocHJvcCwgc3VmZml4KSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3A/KCcgbWRsLWNlbGwtLScgKyBwcm9wICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKSk6Jyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldCB0aGUgbGFiZWwgZ3JpZENsYXNzLlxyXG4gICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBsYWJlbCBncmlkU2l6ZS5cclxuICAgICovXHJcbiAgICBfZ2V0Q2VsbEdyaWRDbGFzc05hbWUocG9zaXRpb24sc2l6ZSwgb2Zmc2V0KSB7XHJcbiAgICAgICAgY29uc3QgY2VsbFBvc2l0aW9uID0gdGhpcy5fYnVpbGRHcmlkQ2xhc3NOYW1lKHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBjZWxsU2l6ZSA9IHRoaXMuX2J1aWxkR3JpZENsYXNzTmFtZShzaXplLCAnLWNvbCcpO1xyXG4gICAgICAgIGNvbnN0IGNlbGxPZmZzZXQgPSB0aGlzLl9idWlsZEdyaWRDbGFzc05hbWUob2Zmc2V0LCAnLW9mZnNldCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gQ0VMTCArIGNlbGxQb3NpdGlvbiArIGNlbGxTaXplICsgY2VsbE9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0IHRoZSBjb250ZW50IGNsYXNzIE5hbWUuXHJcbiAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGNvbnRlbnQgZ3JpZFNpemUuXHJcbiAgICAqL1xyXG4gICAgX2dldExhYmVsR3JpZENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Q2VsbEdyaWRDbGFzc05hbWUodGhpcy5wcm9wcy5sYWJlbENlbGxQb3NpdGlvbiwgdGhpcy5wcm9wcy5sYWJlbFNpemUsIHRoaXMucHJvcHMubGFiZWxPZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRDb250ZW50R3JpZENsYXNzTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Q2VsbEdyaWRDbGFzc05hbWUodGhpcy5wcm9wcy5jb250ZW50Q2VsbFBvc2l0aW9uLCAodGhpcy5wcm9wcy5jb250ZW50U2l6ZSB8fCAoR1JJRF9TSVpFIC0gdGhpcy5wcm9wcy5sYWJlbFNpemUpKSwgdGhpcy5wcm9wcy5jb250ZW50T2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0IHRoZSBjb250ZW50IG9mZnNldCBjbGFzc05hbWUuXHJcbiAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGxhYmVsIGdyaWRTaXplLlxyXG4gICAgKi9cclxuICAgIF9nZXRDb250ZW50T2Zmc2V0Q2xhc3NOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBgJHtDRUxMfSBtZGwtY2VsbC0tJHt0aGlzLnByb3BzLmxhYmVsU2l6ZX0tb2Zmc2V0YDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcclxuIl19