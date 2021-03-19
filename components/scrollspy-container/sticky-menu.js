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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// component default props.
var defaultProps = {
    affix: false,
    affixOffset: 0,
    menuList: []
};

// component props definition.
var propTypes = {
    affix: _react.PropTypes.bool,
    affixOffset: _react.PropTypes.number,
    menuList: _react.PropTypes.array
};

/**
* Sticky menu component.
*/

var StickyMenu = function (_Component) {
    _inherits(StickyMenu, _Component);

    function StickyMenu() {
        _classCallCheck(this, StickyMenu);

        return _possibleConstructorReturn(this, (StickyMenu.__proto__ || Object.getPrototypeOf(StickyMenu)).apply(this, arguments));
    }

    _createClass(StickyMenu, [{
        key: 'render',

        /**
        * Render the a block container and the cild content of the block.
        * @return {DOM} React DOM element
        */
        value: function render() {
            var _props = this.props,
                affix = _props.affix,
                affixOffset = _props.affixOffset,
                menuList = _props.menuList,
                otherProps = _objectWithoutProperties(_props, ['affix', 'affixOffset', 'menuList']);

            return _react2.default.createElement(
                'nav',
                Object.assign({ 'data-affix': affix, 'data-focus': 'sticky-menu', 'data-offset': affixOffset }, otherProps),
                _react2.default.createElement(
                    'ul',
                    null,
                    menuList.map(function (menu) {
                        var label = menu.label,
                            nodeId = menu.nodeId,
                            isActive = menu.isActive,
                            onClick = menu.onClick;

                        return _react2.default.createElement(
                            'li',
                            { 'data-active': isActive, key: nodeId, onClick: onClick },
                            label
                        );
                    })
                )
            );
        }
    }]);

    return StickyMenu;
}(_react.Component);

//Static props.


StickyMenu.displayName = 'StickyMenu';
StickyMenu.defaultProps = defaultProps;
StickyMenu.propTypes = propTypes;

exports.default = StickyMenu;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYWZmaXgiLCJhZmZpeE9mZnNldCIsIm1lbnVMaXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm51bWJlciIsImFycmF5IiwiU3RpY2t5TWVudSIsInByb3BzIiwib3RoZXJQcm9wcyIsIm1hcCIsIm1lbnUiLCJsYWJlbCIsIm5vZGVJZCIsImlzQWN0aXZlIiwib25DbGljayIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsZUFBZTtBQUNqQkMsV0FBTyxLQURVO0FBRWpCQyxpQkFBYSxDQUZJO0FBR2pCQyxjQUFVO0FBSE8sQ0FBckI7O0FBTUE7QUFDQSxJQUFNQyxZQUFZO0FBQ2RILFdBQU9JLGlCQUFVQyxJQURIO0FBRWRKLGlCQUFhRyxpQkFBVUUsTUFGVDtBQUdkSixjQUFVRSxpQkFBVUc7QUFITixDQUFsQjs7QUFNQTs7OztJQUdNQyxVOzs7Ozs7Ozs7Ozs7QUFDRjs7OztpQ0FJUztBQUFBLHlCQUNpRCxLQUFLQyxLQUR0RDtBQUFBLGdCQUNFVCxLQURGLFVBQ0VBLEtBREY7QUFBQSxnQkFDU0MsV0FEVCxVQUNTQSxXQURUO0FBQUEsZ0JBQ3NCQyxRQUR0QixVQUNzQkEsUUFEdEI7QUFBQSxnQkFDbUNRLFVBRG5DOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxnQ0FBSyxjQUFZVixLQUFqQixFQUF3QixjQUFXLGFBQW5DLEVBQWlELGVBQWFDLFdBQTlELElBQStFUyxVQUEvRTtBQUNJO0FBQUE7QUFBQTtBQUNLUiw2QkFBU1MsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUFBLDRCQUNiQyxLQURhLEdBQ3VCRCxJQUR2QixDQUNiQyxLQURhO0FBQUEsNEJBQ05DLE1BRE0sR0FDdUJGLElBRHZCLENBQ05FLE1BRE07QUFBQSw0QkFDRUMsUUFERixHQUN1QkgsSUFEdkIsQ0FDRUcsUUFERjtBQUFBLDRCQUNZQyxPQURaLEdBQ3VCSixJQUR2QixDQUNZSSxPQURaOztBQUVwQiwrQkFDSTtBQUFBO0FBQUEsOEJBQUksZUFBYUQsUUFBakIsRUFBMkIsS0FBS0QsTUFBaEMsRUFBd0MsU0FBU0UsT0FBakQ7QUFBMkRIO0FBQTNELHlCQURKO0FBR0gscUJBTEE7QUFETDtBQURKLGFBREo7QUFZSDs7OztFQW5Cb0JJLGdCOztBQXNCekI7OztBQUNBVCxXQUFXVSxXQUFYLEdBQXlCLFlBQXpCO0FBQ0FWLFdBQVdULFlBQVgsR0FBMEJBLFlBQTFCO0FBQ0FTLFdBQVdMLFNBQVgsR0FBdUJBLFNBQXZCOztrQkFFZUssVSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcblxuLy8gY29tcG9uZW50IGRlZmF1bHQgcHJvcHMuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWZmaXg6IGZhbHNlLFxuICAgIGFmZml4T2Zmc2V0OiAwLFxuICAgIG1lbnVMaXN0OiBbXVxufTtcblxuLy8gY29tcG9uZW50IHByb3BzIGRlZmluaXRpb24uXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgYWZmaXg6IFByb3BUeXBlcy5ib29sLFxuICAgIGFmZml4T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1lbnVMaXN0OiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cbi8qKlxuKiBTdGlja3kgbWVudSBjb21wb25lbnQuXG4qL1xuY2xhc3MgU3RpY2t5TWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIGEgYmxvY2sgY29udGFpbmVyIGFuZCB0aGUgY2lsZCBjb250ZW50IG9mIHRoZSBibG9jay5cbiAgICAqIEByZXR1cm4ge0RPTX0gUmVhY3QgRE9NIGVsZW1lbnRcbiAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2FmZml4LCBhZmZpeE9mZnNldCwgbWVudUxpc3QsIC4uLm90aGVyUHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgZGF0YS1hZmZpeD17YWZmaXh9IGRhdGEtZm9jdXM9J3N0aWNreS1tZW51JyBkYXRhLW9mZnNldD17YWZmaXhPZmZzZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHttZW51TGlzdC5tYXAoKG1lbnUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtsYWJlbCwgbm9kZUlkLCBpc0FjdGl2ZSwgb25DbGlja30gPSBtZW51O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1hY3RpdmU9e2lzQWN0aXZlfSBrZXk9e25vZGVJZH0gb25DbGljaz17b25DbGlja30+e2xhYmVsfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vL1N0YXRpYyBwcm9wcy5cblN0aWNreU1lbnUuZGlzcGxheU5hbWUgPSAnU3RpY2t5TWVudSc7XG5TdGlja3lNZW51LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblN0aWNreU1lbnUucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBTdGlja3lNZW51O1xuIl19