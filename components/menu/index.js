'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _history = require('sagess-core/history');

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function MenuItems(props) {
    var items = props.items,
        LinkComponent = props.LinkComponent,
        navigate = props.navigate;

    return _react2.default.createElement(
        'div',
        null,
        _renderItemsList(items, LinkComponent, navigate)
    );
}

MenuItems.propTypes = {
    items: _react.PropTypes.array
};

function _renderItemsList(items, LinkComponent, navigate) {
    return items.map(function (link, idx) {
        return _react2.default.createElement(
            'li',
            { key: idx },
            _renderButton(link, LinkComponent, navigate),
            _react2.default.createElement(
                'span',
                null,
                link.name
            )
        );
    });
}

//Todo: refactor into component
function _renderButton(menuButton, LinkComponent, navigate) {
    menuButton.shape = 'icon';
    menuButton.type = 'button';

    var buttonProps = {
        shape: 'icon',
        type: 'button'
    };

    var route = menuButton.route,
        option = menuButton.option,
        otherProps = _objectWithoutProperties(menuButton, ['route', 'option']);

    var menuButtonProps = Object.assign({}, buttonProps, otherProps);
    var clickHandler = void 0;

    if (menuButton.route !== undefined) {
        //React router case
        if (LinkComponent) {
            //Todo: check menButton onClick use
            return _react2.default.createElement(
                LinkComponent,
                { to: menuButton.route, style: { color: 'white' } },
                _react2.default.createElement(_button2.default, menuButtonProps)
            );
        }
        //Backbone case
        clickHandler = function clickHandler() {
            if (menuButton.onClick) {
                menuButton.onClick();
            }
            navigate(menuButton.route, true);
        };
        return _react2.default.createElement(_button2.default, Object.assign({}, menuButtonProps, { onClick: clickHandler }));
    }
    //No route => Both the same treatement.
    return _react2.default.createElement(_button2.default, Object.assign({}, menuButtonProps, { onClick: menuButton.onClick }));
}

// default props
var defaultProps = {
    items: [],
    LinkComponent: undefined,
    MenuItems: MenuItems,
    navigate: _history.navigate
};

// props types
var propTypes = {
    navigate: _react.PropTypes.func,
    items: _react.PropTypes.array,
    handleBrandClick: _react.PropTypes.func,
    LinkComponent: _react.PropTypes.func,
    MenuItems: _react.PropTypes.func
};

function MenuLeft(props) {
    var direction = props.direction,
        handleBrandClick = props.handleBrandClick,
        position = props.position,
        children = props.children,
        items = props.items,
        LinkComponent = props.LinkComponent,
        navigate = props.navigate,
        MenuItems = props.MenuItems,
        otherProps = _objectWithoutProperties(props, ['direction', 'handleBrandClick', 'position', 'children', 'items', 'LinkComponent', 'navigate', 'MenuItems']);

    var itemRenderProps = { LinkComponent: LinkComponent, navigate: navigate };
    var hasBrandClickHandler = !!handleBrandClick;

    return _react2.default.createElement(
        'nav',
        Object.assign({ 'data-focus': 'menu-left' }, otherProps),
        _react2.default.createElement('div', { 'data-focus': 'menu-brand', 'data-click': hasBrandClickHandler, onClick: function onClick() {
                return handleBrandClick && handleBrandClick();
            } }),
        _react2.default.createElement(
            'ul',
            { 'data-focus': 'menu-items' },
            _react2.default.createElement(MenuItems, Object.assign({ items: items }, itemRenderProps))
        ),
        children
    );
}

// Static props.
MenuLeft.defaultProps = defaultProps;
MenuLeft.propTypes = propTypes;

exports.default = MenuLeft;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiTWVudUl0ZW1zIiwicHJvcHMiLCJpdGVtcyIsIkxpbmtDb21wb25lbnQiLCJuYXZpZ2F0ZSIsIl9yZW5kZXJJdGVtc0xpc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsIm1hcCIsImxpbmsiLCJpZHgiLCJfcmVuZGVyQnV0dG9uIiwibmFtZSIsIm1lbnVCdXR0b24iLCJzaGFwZSIsInR5cGUiLCJidXR0b25Qcm9wcyIsInJvdXRlIiwib3B0aW9uIiwib3RoZXJQcm9wcyIsIm1lbnVCdXR0b25Qcm9wcyIsImNsaWNrSGFuZGxlciIsInVuZGVmaW5lZCIsImNvbG9yIiwib25DbGljayIsImRlZmF1bHRQcm9wcyIsImZ1bmMiLCJoYW5kbGVCcmFuZENsaWNrIiwiTWVudUxlZnQiLCJkaXJlY3Rpb24iLCJwb3NpdGlvbiIsImNoaWxkcmVuIiwiaXRlbVJlbmRlclByb3BzIiwiaGFzQnJhbmRDbGlja0hhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxRQUNkQyxLQURjLEdBQ3FCRCxLQURyQixDQUNkQyxLQURjO0FBQUEsUUFDUEMsYUFETyxHQUNxQkYsS0FEckIsQ0FDUEUsYUFETztBQUFBLFFBQ1FDLFFBRFIsR0FDcUJILEtBRHJCLENBQ1FHLFFBRFI7O0FBRXRCLFdBQ0k7QUFBQTtBQUFBO0FBQU1DLHlCQUFpQkgsS0FBakIsRUFBd0JDLGFBQXhCLEVBQXVDQyxRQUF2QztBQUFOLEtBREo7QUFHSDs7QUFFREosVUFBVU0sU0FBVixHQUFzQjtBQUNsQkosV0FBT0ssaUJBQVVDO0FBREMsQ0FBdEI7O0FBSUEsU0FBU0gsZ0JBQVQsQ0FBMEJILEtBQTFCLEVBQWlDQyxhQUFqQyxFQUFnREMsUUFBaEQsRUFBMEQ7QUFDdEQsV0FBT0YsTUFBTU8sR0FBTixDQUFVLFVBQUND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LFdBQWhCLElBQWdDUixVQUFoQztBQUNJLCtDQUFLLGNBQVcsWUFBaEIsRUFBNkIsY0FBWWMsb0JBQXpDLEVBQStELFNBQVM7QUFBQSx1QkFBTU4sb0JBQW9CQSxrQkFBMUI7QUFBQSxhQUF4RSxHQURKO0FBRUk7QUFBQTtBQUFBLGNBQUksY0FBVyxZQUFmO0FBQTRCLDBDQUFDLFNBQUQsa0JBQVcsT0FBTzFCLEtBQWxCLElBQTZCK0IsZUFBN0I7QUFBNUIsU0FGSjtBQUdLRDtBQUhMLEtBREo7QUFPSDs7QUFFRDtBQUNBSCxTQUFTSCxZQUFULEdBQXdCQSxZQUF4QjtBQUNBRyxTQUFTdkIsU0FBVCxHQUFxQkEsU0FBckI7O2tCQUVldUIsUSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdzYWdlc3MtY29yZS9oaXN0b3J5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcblxuZnVuY3Rpb24gTWVudUl0ZW1zKHByb3BzKSB7XG4gICAgY29uc3QgeyBpdGVtcywgTGlua0NvbXBvbmVudCwgbmF2aWdhdGUgfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+e19yZW5kZXJJdGVtc0xpc3QoaXRlbXMsIExpbmtDb21wb25lbnQsIG5hdmlnYXRlKX08L2Rpdj5cbiAgICApO1xufVxuXG5NZW51SXRlbXMucHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuZnVuY3Rpb24gX3JlbmRlckl0ZW1zTGlzdChpdGVtcywgTGlua0NvbXBvbmVudCwgbmF2aWdhdGUpIHtcbiAgICByZXR1cm4gaXRlbXMubWFwKChsaW5rLCBpZHgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAge19yZW5kZXJCdXR0b24obGluaywgTGlua0NvbXBvbmVudCwgbmF2aWdhdGUpfVxuICAgICAgICAgICAgICAgIDxzcGFuPntsaW5rLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9KTtcbn1cblxuLy9Ub2RvOiByZWZhY3RvciBpbnRvIGNvbXBvbmVudFxuZnVuY3Rpb24gX3JlbmRlckJ1dHRvbihtZW51QnV0dG9uLCBMaW5rQ29tcG9uZW50LCBuYXZpZ2F0ZSkge1xuICAgIG1lbnVCdXR0b24uc2hhcGUgPSAnaWNvbic7XG4gICAgbWVudUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG5cbiAgICBjb25zdCBidXR0b25Qcm9wcyA9IHtcbiAgICAgICAgc2hhcGU6ICdpY29uJyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbidcbiAgICB9XG5cbiAgICBjb25zdCB7IHJvdXRlLCBvcHRpb24sIC4uLm90aGVyUHJvcHMgfSA9IG1lbnVCdXR0b247XG4gICAgY29uc3QgbWVudUJ1dHRvblByb3BzID0geyAuLi5idXR0b25Qcm9wcywgLi4ub3RoZXJQcm9wcyB9O1xuICAgIGxldCBjbGlja0hhbmRsZXI7XG5cbiAgICBpZiAobWVudUJ1dHRvbi5yb3V0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vUmVhY3Qgcm91dGVyIGNhc2VcbiAgICAgICAgaWYgKExpbmtDb21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vVG9kbzogY2hlY2sgbWVuQnV0dG9uIG9uQ2xpY2sgdXNlXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rQ29tcG9uZW50IHRvPXttZW51QnV0dG9uLnJvdXRlfSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT48QnV0dG9uIHsuLi5tZW51QnV0dG9uUHJvcHN9IC8+PC9MaW5rQ29tcG9uZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvL0JhY2tib25lIGNhc2VcbiAgICAgICAgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1lbnVCdXR0b24ub25DbGljaykge1xuICAgICAgICAgICAgICAgIG1lbnVCdXR0b24ub25DbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2aWdhdGUobWVudUJ1dHRvbi5yb3V0ZSwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uIHsuLi5tZW51QnV0dG9uUHJvcHN9IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0gLz5cbiAgICAgICAgKTtcblxuICAgIH1cbiAgICAvL05vIHJvdXRlID0+IEJvdGggdGhlIHNhbWUgdHJlYXRlbWVudC5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uIHsuLi5tZW51QnV0dG9uUHJvcHN9IG9uQ2xpY2s9e21lbnVCdXR0b24ub25DbGlja30gLz5cbiAgICApO1xufVxuXG4vLyBkZWZhdWx0IHByb3BzXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIExpbmtDb21wb25lbnQ6IHVuZGVmaW5lZCxcbiAgICBNZW51SXRlbXMsXG4gICAgbmF2aWdhdGVcbn07XG5cbi8vIHByb3BzIHR5cGVzXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgbmF2aWdhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgaGFuZGxlQnJhbmRDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgTGlua0NvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgTWVudUl0ZW1zOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZnVuY3Rpb24gTWVudUxlZnQocHJvcHMpIHtcbiAgICBjb25zdCB7IGRpcmVjdGlvbiwgaGFuZGxlQnJhbmRDbGljaywgcG9zaXRpb24sIGNoaWxkcmVuLCBpdGVtcywgTGlua0NvbXBvbmVudCwgbmF2aWdhdGUsIE1lbnVJdGVtcywgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3QgaXRlbVJlbmRlclByb3BzID0geyBMaW5rQ29tcG9uZW50LCBuYXZpZ2F0ZSB9O1xuICAgIGNvbnN0IGhhc0JyYW5kQ2xpY2tIYW5kbGVyID0gISFoYW5kbGVCcmFuZENsaWNrO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBkYXRhLWZvY3VzPSdtZW51LWxlZnQnIHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbWVudS1icmFuZCcgZGF0YS1jbGljaz17aGFzQnJhbmRDbGlja0hhbmRsZXJ9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUJyYW5kQ2xpY2sgJiYgaGFuZGxlQnJhbmRDbGljaygpfSAvPlxuICAgICAgICAgICAgPHVsIGRhdGEtZm9jdXM9J21lbnUtaXRlbXMnPjxNZW51SXRlbXMgaXRlbXM9e2l0ZW1zfSB7Li4uaXRlbVJlbmRlclByb3BzfSAvPjwvdWw+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvbmF2PlxuICAgICk7XG59XG5cbi8vIFN0YXRpYyBwcm9wcy5cbk1lbnVMZWZ0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbk1lbnVMZWZ0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgTWVudUxlZnQ7XG4iXX0=