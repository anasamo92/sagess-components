'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _buttonBackToTop = require('../button-back-to-top');

var _buttonBackToTop2 = _interopRequireDefault(_buttonBackToTop);

var _stickyMenu = require('./sticky-menu');

var _stickyMenu2 = _interopRequireDefault(_stickyMenu);

var _scroll = require('../../behaviours/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _debounce = require('lodash/function/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _filter = require('lodash/collection/filter');

var _filter2 = _interopRequireDefault(_filter);

var _first = require('lodash/array/first');

var _first2 = _interopRequireDefault(_first);

var _last = require('lodash/array/last');

var _last2 = _interopRequireDefault(_last);

var _xor = require('lodash/array/xor');

var _xor2 = _interopRequireDefault(_xor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackToTopComponent = _buttonBackToTop2.default;

// component default props.
var defaultProps = {
    hasMenu: true, //Activate the presence of the sticky navigation component.
    hasBackToTop: true, //Activate the presence of BackToTop button
    offset: 100, //offset position when affix
    scrollDelay: 10 //defaut debounce delay for scroll spy call
};

// component props definition.
var propTypes = {
    hasMenu: _react.PropTypes.bool,
    hasBackToTop: _react.PropTypes.bool,
    offset: _react.PropTypes.number,
    scrollDelay: _react.PropTypes.number
};

/**
* ScrollspyContainer component.
*/

var ScrollspyContainer = (0, _scroll2.default)(_class = function (_Component) {
    _inherits(ScrollspyContainer, _Component);

    function ScrollspyContainer(props) {
        _classCallCheck(this, ScrollspyContainer);

        var _this = _possibleConstructorReturn(this, (ScrollspyContainer.__proto__ || Object.getPrototypeOf(ScrollspyContainer)).call(this, props));

        var state = {
            menuList: [],
            affix: false
        };
        _this.state = state;
        return _this;
    }

    /** @inheritDoc */


    _createClass(ScrollspyContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._scrollCarrier = window;
            this._debouncedRefresh = (0, _debounce2.default)(this._refreshMenu, this.props.scrollDelay);
            this._scrollCarrier.addEventListener('scroll', this._debounceRefreshMenu);
            this._scrollCarrier.addEventListener('resize', this._debounceRefreshMenu);
            this._executeRefreshMenu(10);
        }

        /** @inheritDoc */

    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this._refreshMenu = this._refreshMenu.bind(this);
            this._debounceRefreshMenu = this._debounceRefreshMenu.bind(this);
        }

        /** @inheritDoc */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._timeouts.map(clearTimeout);
            this._scrollCarrier.removeEventListener('scroll', this._debounceRefreshMenu);
            this._scrollCarrier.removeEventListener('resize', this._debounceRefreshMenu);
            this._debouncedRefresh.cancel();
        }

        /**
        * Refresh screen X times.
        * @param  {number} time number of execution
        */

    }, {
        key: '_executeRefreshMenu',
        value: function _executeRefreshMenu(time) {
            this._timeouts = [];
            for (var i = 0; i < time; i++) {
                this._timeouts.push(setTimeout(this._refreshMenu, i * 1000));
            }
        }
    }, {
        key: '_debounceRefreshMenu',
        value: function _debounceRefreshMenu() {
            this._debouncedRefresh();
        }

        /**
        * The scroll event handler
        * @private
        */

    }, {
        key: '_refreshMenu',
        value: function _refreshMenu() {
            if (!this.props.hasMenu) {
                return;
            }
            var stickyMenu = this.refs.stickyMenu;
            var clickedId = this.state.clickedId;

            var menus = this._buildMenuList(); //build the menu list
            //TODO remove this check
            var affix = stickyMenu ? this._isMenuAffix() : this.state.affix; //Calculate menu position (affix or not)
            // Check if scroll is at cliked item level
            var isAtClickedItem = void 0;
            if (clickedId !== undefined) {
                var selector = '[data-spy=\'' + clickedId + '\']';
                var node = document.querySelector(selector);
                if (node) {
                    var nodePosition = this.scrollPosition(node);
                    var positionTop = this._getElementRealPosition(nodePosition.top);
                    isAtClickedItem = this.scrollPosition().top === positionTop;
                }
            }
            this.setState({
                menuList: menus,
                clickedId: isAtClickedItem ? undefined : clickedId,
                affix: affix
            });
        }

        /**
        * Build the list of menus.
        * @private
        * @return {array} the list of menus.
        */

    }, {
        key: '_buildMenuList',
        value: function _buildMenuList() {
            var _this2 = this;

            var hasMenu = this.props.hasMenu;

            if (!hasMenu) {
                return [];
            }
            var detectionOffset = window.screen.height / 5;
            var currentScrollPosition = { top: this.scrollPosition().top, left: this.scrollPosition().left };
            var isAtPageBottom = this.isAtPageBottom();

            //get the menu list (without blocks in popin)
            var thisComponentNode = _reactDom2.default.findDOMNode(this);
            var allDataSpy = thisComponentNode.querySelectorAll('[data-spy]');
            var popinDataSpy = thisComponentNode.querySelectorAll('[data-focus=\'popin-window\'] [data-spy]');
            var selectionList = (0, _xor2.default)(allDataSpy, popinDataSpy);

            if (selectionList.length === 0) {
                return;
            }
            var menuList = selectionList.map(function (selection) {
                return {
                    title: selection.querySelector('[data-spy-title]'),
                    nodeId: selection.getAttribute('data-spy'),
                    selection: selection
                };
            }).filter(function (_ref) {
                var title = _ref.title,
                    nodeId = _ref.nodeId,
                    selection = _ref.selection;
                return title && nodeId && selection;
            }).map(function (_ref2, index) {
                var title = _ref2.title,
                    nodeId = _ref2.nodeId,
                    selection = _ref2.selection;

                return {
                    index: index,
                    label: title.innerHTML,
                    nodeId: nodeId,
                    scrollTop: _this2.scrollPosition(selection).top, // offset of 10 to be safe
                    isActive: false,
                    onClick: _this2._getMenuItemClickHandler(nodeId)
                };
            });

            var nextTitles = (0, _filter2.default)(menuList, function (n) {
                return currentScrollPosition.top + detectionOffset < _this2._getElementRealPosition(n.scrollTop);
            });

            //Calculate current node
            //by default, first node is indexed
            var currentIndex = menuList[0].index;
            if (0 < nextTitles.length) {
                //check the first node
                var firstNode = (0, _first2.default)(nextTitles);
                var index = firstNode.index;
                if (0 < index) {
                    currentIndex = menuList[index - 1].index;
                }
            } else {
                //means that the position is the last title
                currentIndex = (0, _last2.default)(menuList).index;
            }
            var clickedId = this.state.clickedId;
            if (isAtPageBottom && undefined !== clickedId) {
                menuList = menuList.map(function (item) {
                    if (item.nodeId === clickedId) {
                        item.isActive = true;
                    }
                    return item;
                });
                this.setState({ clickedId: undefined });
            } else {
                menuList[currentIndex].isActive = true;
            }
            return menuList;
        }

        /**
        * Calculate the real position of an element, depending on declared offset in props.
        * @private
        * @param  {number} position position
        * @return {number} the real position
        */

    }, {
        key: '_getElementRealPosition',
        value: function _getElementRealPosition(position) {
            var sscDomNode = _reactDom2.default.findDOMNode(this);
            var sscPosition = this.scrollPosition(sscDomNode);
            return position - sscPosition.top;
        }

        /**
        * Calculate menu position (affix or not)
        * @private
        * @return {Boolean} true is menu must be affix, else false
        */

    }, {
        key: '_isMenuAffix',
        value: function _isMenuAffix() {
            var offset = this.props.offset;
            var hasMenu = this.props.hasMenu;

            if (!hasMenu) {
                return false;
            }
            var sscDomNode = _reactDom2.default.findDOMNode(this);
            var currentViewPosition = sscDomNode.getBoundingClientRect();
            var containerPaddingTop = this._getPaddingTopValue();
            offset -= containerPaddingTop;
            return currentViewPosition.top <= offset;
        }
    }, {
        key: '_getPaddingTopValue',
        value: function _getPaddingTopValue() {
            var sscDomNode = _reactDom2.default.findDOMNode(this);
            var computedStyles = window.getComputedStyle(sscDomNode, null);
            var paddingTop = computedStyles.getPropertyValue('padding-top');
            return paddingTop ? parseInt(paddingTop, 0) : 0;
        }

        /**
        * Handle click on item menu function.
        * @private
        * @param  {string} menuId  node spyId in DOM to scroll to
        * @return {function}        function to call
        */

    }, {
        key: '_getMenuItemClickHandler',
        value: function _getMenuItemClickHandler(menuId) {
            var _this3 = this;

            return function () {
                _this3.setState({
                    clickedId: menuId
                }, function () {
                    _this3._refreshMenu();
                    _this3._onMenuItemClick(menuId);
                });
            };
        }

        /**
        * Menu click function. Scroll to the node position.
        * @private
        * @param  {string} menuId  node spyId in DOM to scroll to
        */

    }, {
        key: '_onMenuItemClick',
        value: function _onMenuItemClick(menuId) {
            var selector = '[data-spy=\'' + menuId + '\']';
            var node = document.querySelector(selector);
            var nodePosition = this.scrollPosition(node);
            var positionTop = this._getElementRealPosition(nodePosition.top);
            this.scrollTo(undefined, positionTop);
        }

        /** @inheritedDoc */

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                hasMenu = _props.hasMenu,
                hasBackToTop = _props.hasBackToTop,
                offset = _props.offset,
                scrollDelay = _props.scrollDelay,
                otherProps = _objectWithoutProperties(_props, ['children', 'hasMenu', 'hasBackToTop', 'offset', 'scrollDelay']);

            var _state = this.state,
                affix = _state.affix,
                menuList = _state.menuList;


            return _react2.default.createElement(
                'div',
                Object.assign({ 'data-focus': 'scrollspy-container' }, otherProps),
                hasMenu && _react2.default.createElement(_stickyMenu2.default, { affix: affix, affixOffset: offset, menuList: menuList, ref: 'stickyMenu' }),
                _react2.default.createElement(
                    'div',
                    { 'data-focus': 'scrollspy-container-content' },
                    children
                ),
                hasBackToTop && _react2.default.createElement(BackToTopComponent, null)
            );
        }
    }]);

    return ScrollspyContainer;
}(_react.Component)) || _class;

//Static props.


ScrollspyContainer.displayName = 'ScrollspyContainer';
ScrollspyContainer.defaultProps = defaultProps;
ScrollspyContainer.propTypes = propTypes;

exports.default = ScrollspyContainer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQmFja1RvVG9wQ29tcG9uZW50IiwiQmFja1RvVG9wIiwiZGVmYXVsdFByb3BzIiwiaGFzTWVudSIsImhhc0JhY2tUb1RvcCIsIm9mZnNldCIsInNjcm9sbERlbGF5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm51bWJlciIsIlNjcm9sbHNweUNvbnRhaW5lciIsIlNjcm9sbCIsInByb3BzIiwic3RhdGUiLCJtZW51TGlzdCIsImFmZml4IiwiX3Njcm9sbENhcnJpZXIiLCJ3aW5kb3ciLCJfZGVib3VuY2VkUmVmcmVzaCIsIl9yZWZyZXNoTWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZGVib3VuY2VSZWZyZXNoTWVudSIsIl9leGVjdXRlUmVmcmVzaE1lbnUiLCJiaW5kIiwiX3RpbWVvdXRzIiwibWFwIiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbmNlbCIsInRpbWUiLCJpIiwicHVzaCIsInNldFRpbWVvdXQiLCJzdGlja3lNZW51IiwicmVmcyIsImNsaWNrZWRJZCIsIm1lbnVzIiwiX2J1aWxkTWVudUxpc3QiLCJfaXNNZW51QWZmaXgiLCJpc0F0Q2xpY2tlZEl0ZW0iLCJ1bmRlZmluZWQiLCJzZWxlY3RvciIsIm5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJub2RlUG9zaXRpb24iLCJzY3JvbGxQb3NpdGlvbiIsInBvc2l0aW9uVG9wIiwiX2dldEVsZW1lbnRSZWFsUG9zaXRpb24iLCJ0b3AiLCJzZXRTdGF0ZSIsImRldGVjdGlvbk9mZnNldCIsInNjcmVlbiIsImhlaWdodCIsImN1cnJlbnRTY3JvbGxQb3NpdGlvbiIsImxlZnQiLCJpc0F0UGFnZUJvdHRvbSIsInRoaXNDb21wb25lbnROb2RlIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsImFsbERhdGFTcHkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9waW5EYXRhU3B5Iiwic2VsZWN0aW9uTGlzdCIsImxlbmd0aCIsInNlbGVjdGlvbiIsInRpdGxlIiwibm9kZUlkIiwiZ2V0QXR0cmlidXRlIiwiZmlsdGVyIiwiaW5kZXgiLCJsYWJlbCIsImlubmVySFRNTCIsInNjcm9sbFRvcCIsImlzQWN0aXZlIiwib25DbGljayIsIl9nZXRNZW51SXRlbUNsaWNrSGFuZGxlciIsIm5leHRUaXRsZXMiLCJuIiwiY3VycmVudEluZGV4IiwiZmlyc3ROb2RlIiwiaXRlbSIsInBvc2l0aW9uIiwic3NjRG9tTm9kZSIsInNzY1Bvc2l0aW9uIiwiY3VycmVudFZpZXdQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRhaW5lclBhZGRpbmdUb3AiLCJfZ2V0UGFkZGluZ1RvcFZhbHVlIiwiY29tcHV0ZWRTdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFkZGluZ1RvcCIsImdldFByb3BlcnR5VmFsdWUiLCJwYXJzZUludCIsIm1lbnVJZCIsIl9vbk1lbnVJdGVtQ2xpY2siLCJzY3JvbGxUbyIsImNoaWxkcmVuIiwib3RoZXJQcm9wcyIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEscUJBQXFCQyx5QkFBM0I7O0FBRUE7QUFDQSxJQUFNQyxlQUFlO0FBQ2pCQyxhQUFTLElBRFEsRUFDRjtBQUNmQyxrQkFBYyxJQUZHLEVBRUc7QUFDcEJDLFlBQVEsR0FIUyxFQUdKO0FBQ2JDLGlCQUFhLEVBSkksQ0FJRDtBQUpDLENBQXJCOztBQU9BO0FBQ0EsSUFBTUMsWUFBWTtBQUNkSixhQUFTSyxpQkFBVUMsSUFETDtBQUVkTCxrQkFBY0ksaUJBQVVDLElBRlY7QUFHZEosWUFBUUcsaUJBQVVFLE1BSEo7QUFJZEosaUJBQWFFLGlCQUFVRTtBQUpULENBQWxCOztBQU9B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Q0toRywyQkFDRyw4QkFBQyxvQkFBRCxJQUFZLE9BQU9hLEtBQW5CLEVBQTBCLGFBQWFYLE1BQXZDLEVBQStDLFVBQVVVLFFBQXpELEVBQW1FLEtBQUksWUFBdkUsR0FGUjtBQUlJO0FBQUE7QUFBQSxzQkFBSyxjQUFXLDZCQUFoQjtBQUNLbUY7QUFETCxpQkFKSjtBQU9LOUYsZ0NBQ0csOEJBQUMsa0JBQUQ7QUFSUixhQURKO0FBYUg7Ozs7RUE1TzRCZ0csZ0I7O0FBK09qQzs7O0FBQ0F6RixtQkFBbUIwRixXQUFuQixHQUFpQyxvQkFBakM7QUFDQTFGLG1CQUFtQlQsWUFBbkIsR0FBa0NBLFlBQWxDO0FBQ0FTLG1CQUFtQkosU0FBbkIsR0FBK0JBLFNBQS9COztrQkFFZUksa0IiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJhY2tUb1RvcCBmcm9tICcuLi9idXR0b24tYmFjay10by10b3AnXG5pbXBvcnQgU3RpY2t5TWVudSBmcm9tICcuL3N0aWNreS1tZW51JztcbmltcG9ydCBTY3JvbGwgZnJvbSAnLi4vLi4vYmVoYXZpb3Vycy9zY3JvbGwnO1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlJztcbmltcG9ydCBmaWx0ZXIgZnJvbSAnbG9kYXNoL2NvbGxlY3Rpb24vZmlsdGVyJztcbmltcG9ydCBmaXJzdCBmcm9tICdsb2Rhc2gvYXJyYXkvZmlyc3QnO1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2FycmF5L2xhc3QnO1xuaW1wb3J0IHhvciBmcm9tICdsb2Rhc2gvYXJyYXkveG9yJztcblxuXG5jb25zdCBCYWNrVG9Ub3BDb21wb25lbnQgPSBCYWNrVG9Ub3A7XG5cbi8vIGNvbXBvbmVudCBkZWZhdWx0IHByb3BzLlxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGhhc01lbnU6IHRydWUsIC8vQWN0aXZhdGUgdGhlIHByZXNlbmNlIG9mIHRoZSBzdGlja3kgbmF2aWdhdGlvbiBjb21wb25lbnQuXG4gICAgaGFzQmFja1RvVG9wOiB0cnVlLCAvL0FjdGl2YXRlIHRoZSBwcmVzZW5jZSBvZiBCYWNrVG9Ub3AgYnV0dG9uXG4gICAgb2Zmc2V0OiAxMDAsIC8vb2Zmc2V0IHBvc2l0aW9uIHdoZW4gYWZmaXhcbiAgICBzY3JvbGxEZWxheTogMTAgLy9kZWZhdXQgZGVib3VuY2UgZGVsYXkgZm9yIHNjcm9sbCBzcHkgY2FsbFxufTtcblxuLy8gY29tcG9uZW50IHByb3BzIGRlZmluaXRpb24uXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgaGFzTWVudTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzQmFja1RvVG9wOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc2Nyb2xsRGVsYXk6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbi8qKlxuKiBTY3JvbGxzcHlDb250YWluZXIgY29tcG9uZW50LlxuKi9cbkBTY3JvbGxcbmNsYXNzIFNjcm9sbHNweUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICAgICAgbWVudUxpc3Q6IFtdLFxuICAgICAgICAgICAgYWZmaXg6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXREb2MgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQ2FycmllciA9IHdpbmRvdztcbiAgICAgICAgdGhpcy5fZGVib3VuY2VkUmVmcmVzaCA9IGRlYm91bmNlKHRoaXMuX3JlZnJlc2hNZW51LCB0aGlzLnByb3BzLnNjcm9sbERlbGF5KTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQ2Fycmllci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9kZWJvdW5jZVJlZnJlc2hNZW51KTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQ2Fycmllci5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9kZWJvdW5jZVJlZnJlc2hNZW51KTtcbiAgICAgICAgdGhpcy5fZXhlY3V0ZVJlZnJlc2hNZW51KDEwKTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXREb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hNZW51ID0gdGhpcy5fcmVmcmVzaE1lbnUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fZGVib3VuY2VSZWZyZXNoTWVudSA9IHRoaXMuX2RlYm91bmNlUmVmcmVzaE1lbnUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXREb2MgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fdGltZW91dHMubWFwKGNsZWFyVGltZW91dCk7XG4gICAgICAgIHRoaXMuX3Njcm9sbENhcnJpZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fZGVib3VuY2VSZWZyZXNoTWVudSk7XG4gICAgICAgIHRoaXMuX3Njcm9sbENhcnJpZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fZGVib3VuY2VSZWZyZXNoTWVudSk7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlZFJlZnJlc2guY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZWZyZXNoIHNjcmVlbiBYIHRpbWVzLlxuICAgICogQHBhcmFtICB7bnVtYmVyfSB0aW1lIG51bWJlciBvZiBleGVjdXRpb25cbiAgICAqL1xuICAgIF9leGVjdXRlUmVmcmVzaE1lbnUodGltZSkge1xuICAgICAgICB0aGlzLl90aW1lb3V0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fdGltZW91dHMucHVzaChzZXRUaW1lb3V0KHRoaXMuX3JlZnJlc2hNZW51LCBpICogMTAwMCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2RlYm91bmNlUmVmcmVzaE1lbnUoKSB7XG4gICAgICAgIHRoaXMuX2RlYm91bmNlZFJlZnJlc2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFRoZSBzY3JvbGwgZXZlbnQgaGFuZGxlclxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIF9yZWZyZXNoTWVudSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmhhc01lbnUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHN0aWNreU1lbnUgfSA9IHRoaXMucmVmcztcbiAgICAgICAgY29uc3QgeyBjbGlja2VkSWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IG1lbnVzID0gdGhpcy5fYnVpbGRNZW51TGlzdCgpOyAvL2J1aWxkIHRoZSBtZW51IGxpc3RcbiAgICAgICAgLy9UT0RPIHJlbW92ZSB0aGlzIGNoZWNrXG4gICAgICAgIGNvbnN0IGFmZml4ID0gc3RpY2t5TWVudSA/IHRoaXMuX2lzTWVudUFmZml4KCkgOiB0aGlzLnN0YXRlLmFmZml4OyAvL0NhbGN1bGF0ZSBtZW51IHBvc2l0aW9uIChhZmZpeCBvciBub3QpXG4gICAgICAgIC8vIENoZWNrIGlmIHNjcm9sbCBpcyBhdCBjbGlrZWQgaXRlbSBsZXZlbFxuICAgICAgICBsZXQgaXNBdENsaWNrZWRJdGVtO1xuICAgICAgICBpZiAoY2xpY2tlZElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gYFtkYXRhLXNweT0nJHtjbGlja2VkSWR9J11gO1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlUG9zaXRpb24gPSB0aGlzLnNjcm9sbFBvc2l0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uVG9wID0gdGhpcy5fZ2V0RWxlbWVudFJlYWxQb3NpdGlvbihub2RlUG9zaXRpb24udG9wKTtcbiAgICAgICAgICAgICAgICBpc0F0Q2xpY2tlZEl0ZW0gPSB0aGlzLnNjcm9sbFBvc2l0aW9uKCkudG9wID09PSBwb3NpdGlvblRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1lbnVMaXN0OiBtZW51cyxcbiAgICAgICAgICAgIGNsaWNrZWRJZDogaXNBdENsaWNrZWRJdGVtID8gdW5kZWZpbmVkIDogY2xpY2tlZElkLFxuICAgICAgICAgICAgYWZmaXhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBCdWlsZCB0aGUgbGlzdCBvZiBtZW51cy5cbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcmV0dXJuIHthcnJheX0gdGhlIGxpc3Qgb2YgbWVudXMuXG4gICAgKi9cbiAgICBfYnVpbGRNZW51TGlzdCgpIHtcbiAgICAgICAgY29uc3QgeyBoYXNNZW51IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWhhc01lbnUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXRlY3Rpb25PZmZzZXQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodCAvIDU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA9IHsgdG9wOiB0aGlzLnNjcm9sbFBvc2l0aW9uKCkudG9wLCBsZWZ0OiB0aGlzLnNjcm9sbFBvc2l0aW9uKCkubGVmdCB9O1xuICAgICAgICBjb25zdCBpc0F0UGFnZUJvdHRvbSA9IHRoaXMuaXNBdFBhZ2VCb3R0b20oKTtcblxuICAgICAgICAvL2dldCB0aGUgbWVudSBsaXN0ICh3aXRob3V0IGJsb2NrcyBpbiBwb3BpbilcbiAgICAgICAgY29uc3QgdGhpc0NvbXBvbmVudE5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgY29uc3QgYWxsRGF0YVNweSA9IHRoaXNDb21wb25lbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNweV0nKTtcbiAgICAgICAgY29uc3QgcG9waW5EYXRhU3B5ID0gdGhpc0NvbXBvbmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9jdXM9XFwncG9waW4td2luZG93XFwnXSBbZGF0YS1zcHldJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkxpc3QgPSB4b3IoYWxsRGF0YVNweSwgcG9waW5EYXRhU3B5KTtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWVudUxpc3QgPSBzZWxlY3Rpb25MaXN0Lm1hcCgoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzZWxlY3Rpb24ucXVlcnlTZWxlY3RvcignW2RhdGEtc3B5LXRpdGxlXScpLFxuICAgICAgICAgICAgICAgIG5vZGVJZDogc2VsZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1zcHknKSxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pLmZpbHRlcigoeyB0aXRsZSwgbm9kZUlkLCBzZWxlY3Rpb24gfSkgPT4gdGl0bGUgJiYgbm9kZUlkICYmIHNlbGVjdGlvbikubWFwKCh7IHRpdGxlLCBub2RlSWQsIHNlbGVjdGlvbiB9LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGl0bGUuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIG5vZGVJZCxcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMuc2Nyb2xsUG9zaXRpb24oc2VsZWN0aW9uKS50b3AsIC8vIG9mZnNldCBvZiAxMCB0byBiZSBzYWZlXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuX2dldE1lbnVJdGVtQ2xpY2tIYW5kbGVyKG5vZGVJZClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRUaXRsZXMgPSBmaWx0ZXIobWVudUxpc3QsIChuKSA9PiBjdXJyZW50U2Nyb2xsUG9zaXRpb24udG9wICsgZGV0ZWN0aW9uT2Zmc2V0IDwgdGhpcy5fZ2V0RWxlbWVudFJlYWxQb3NpdGlvbihuLnNjcm9sbFRvcCkpO1xuXG4gICAgICAgIC8vQ2FsY3VsYXRlIGN1cnJlbnQgbm9kZVxuICAgICAgICAvL2J5IGRlZmF1bHQsIGZpcnN0IG5vZGUgaXMgaW5kZXhlZFxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gbWVudUxpc3RbMF0uaW5kZXg7XG4gICAgICAgIGlmICgwIDwgbmV4dFRpdGxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vY2hlY2sgdGhlIGZpcnN0IG5vZGVcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5leHRUaXRsZXMpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmaXJzdE5vZGUuaW5kZXg7XG4gICAgICAgICAgICBpZiAoMCA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbWVudUxpc3RbaW5kZXggLSAxXS5pbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vbWVhbnMgdGhhdCB0aGUgcG9zaXRpb24gaXMgdGhlIGxhc3QgdGl0bGVcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGxhc3QobWVudUxpc3QpLmluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWNrZWRJZCA9IHRoaXMuc3RhdGUuY2xpY2tlZElkO1xuICAgICAgICBpZiAoaXNBdFBhZ2VCb3R0b20gJiYgdW5kZWZpbmVkICE9PSBjbGlja2VkSWQpIHtcbiAgICAgICAgICAgIG1lbnVMaXN0ID0gbWVudUxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubm9kZUlkID09PSBjbGlja2VkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2xpY2tlZElkOiB1bmRlZmluZWQgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51TGlzdFtjdXJyZW50SW5kZXhdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVudUxpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDYWxjdWxhdGUgdGhlIHJlYWwgcG9zaXRpb24gb2YgYW4gZWxlbWVudCwgZGVwZW5kaW5nIG9uIGRlY2xhcmVkIG9mZnNldCBpbiBwcm9wcy5cbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcGFyYW0gIHtudW1iZXJ9IHBvc2l0aW9uIHBvc2l0aW9uXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSByZWFsIHBvc2l0aW9uXG4gICAgKi9cbiAgICBfZ2V0RWxlbWVudFJlYWxQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBzc2NEb21Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IHNzY1Bvc2l0aW9uID0gdGhpcy5zY3JvbGxQb3NpdGlvbihzc2NEb21Ob2RlKTtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uIC0gc3NjUG9zaXRpb24udG9wO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ2FsY3VsYXRlIG1lbnUgcG9zaXRpb24gKGFmZml4IG9yIG5vdClcbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIG1lbnUgbXVzdCBiZSBhZmZpeCwgZWxzZSBmYWxzZVxuICAgICovXG4gICAgX2lzTWVudUFmZml4KCkge1xuICAgICAgICBsZXQgeyBvZmZzZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgaGFzTWVudSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFoYXNNZW51KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3NjRG9tTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICBjb25zdCBjdXJyZW50Vmlld1Bvc2l0aW9uID0gc3NjRG9tTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyUGFkZGluZ1RvcCA9IHRoaXMuX2dldFBhZGRpbmdUb3BWYWx1ZSgpO1xuICAgICAgICBvZmZzZXQgLT0gY29udGFpbmVyUGFkZGluZ1RvcDtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRWaWV3UG9zaXRpb24udG9wIDw9IG9mZnNldDtcbiAgICB9XG5cbiAgICBfZ2V0UGFkZGluZ1RvcFZhbHVlKCkge1xuICAgICAgICBjb25zdCBzc2NEb21Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3NjRG9tTm9kZSwgbnVsbCk7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBjb21wdXRlZFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpO1xuICAgICAgICByZXR1cm4gcGFkZGluZ1RvcCA/IHBhcnNlSW50KHBhZGRpbmdUb3AsIDApIDogMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEhhbmRsZSBjbGljayBvbiBpdGVtIG1lbnUgZnVuY3Rpb24uXG4gICAgKiBAcHJpdmF0ZVxuICAgICogQHBhcmFtICB7c3RyaW5nfSBtZW51SWQgIG5vZGUgc3B5SWQgaW4gRE9NIHRvIHNjcm9sbCB0b1xuICAgICogQHJldHVybiB7ZnVuY3Rpb259ICAgICAgICBmdW5jdGlvbiB0byBjYWxsXG4gICAgKi9cbiAgICBfZ2V0TWVudUl0ZW1DbGlja0hhbmRsZXIobWVudUlkKSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjbGlja2VkSWQ6IG1lbnVJZFxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hNZW51KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25NZW51SXRlbUNsaWNrKG1lbnVJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIE1lbnUgY2xpY2sgZnVuY3Rpb24uIFNjcm9sbCB0byB0aGUgbm9kZSBwb3NpdGlvbi5cbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcGFyYW0gIHtzdHJpbmd9IG1lbnVJZCAgbm9kZSBzcHlJZCBpbiBET00gdG8gc2Nyb2xsIHRvXG4gICAgKi9cbiAgICBfb25NZW51SXRlbUNsaWNrKG1lbnVJZCkge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IGBbZGF0YS1zcHk9JyR7bWVudUlkfSddYDtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBub2RlUG9zaXRpb24gPSB0aGlzLnNjcm9sbFBvc2l0aW9uKG5vZGUpO1xuICAgICAgICBjb25zdCBwb3NpdGlvblRvcCA9IHRoaXMuX2dldEVsZW1lbnRSZWFsUG9zaXRpb24obm9kZVBvc2l0aW9uLnRvcCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8odW5kZWZpbmVkLCBwb3NpdGlvblRvcCk7XG4gICAgfVxuXG4gICAgLyoqIEBpbmhlcml0ZWREb2MgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhhc01lbnUsIGhhc0JhY2tUb1RvcCwgb2Zmc2V0LCBzY3JvbGxEZWxheSwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBhZmZpeCwgbWVudUxpc3QgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nc2Nyb2xsc3B5LWNvbnRhaW5lcicgey4uLm90aGVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIHtoYXNNZW51ICYmXG4gICAgICAgICAgICAgICAgICAgIDxTdGlja3lNZW51IGFmZml4PXthZmZpeH0gYWZmaXhPZmZzZXQ9e29mZnNldH0gbWVudUxpc3Q9e21lbnVMaXN0fSByZWY9J3N0aWNreU1lbnUnIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nc2Nyb2xsc3B5LWNvbnRhaW5lci1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtoYXNCYWNrVG9Ub3AgJiZcbiAgICAgICAgICAgICAgICAgICAgPEJhY2tUb1RvcENvbXBvbmVudCAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLy9TdGF0aWMgcHJvcHMuXG5TY3JvbGxzcHlDb250YWluZXIuZGlzcGxheU5hbWUgPSAnU2Nyb2xsc3B5Q29udGFpbmVyJztcblNjcm9sbHNweUNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5TY3JvbGxzcHlDb250YWluZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxzcHlDb250YWluZXI7XG4iXX0=