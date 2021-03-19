'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _stylable = require('../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

var _scroll = require('../mixin/scroll');

var _filter = require('lodash/collection/filter');

var _filter2 = _interopRequireDefault(_filter);

var _first = require('lodash/array/first');

var _first2 = _interopRequireDefault(_first);

var _last = require('lodash/array/last');

var _last2 = _interopRequireDefault(_last);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Scrollspy component.
* Listen to a scroll, and sets an active class to the currently displayed element.
*/
var Scrollspy = {
    /**
    * Stylable mixin.
    */
    mixins: [_stylable2.default],
    /**
    * Get the default props.
    * By default, listen to the body element
    * @return {Object} the default properties
    */
    getDefaultProps: function getDefaultProps() {
        return {
            titleSelector: '[data-spy]',
            affixOffset: 0
        };
    },

    /**
    * Props validation
    */
    propTypes: {
        titleSelector: (0, _types2.default)('string'),
        affixOffset: (0, _types2.default)('number')
    },
    /** @inheritDoc */
    getInitialState: function getInitialState() {
        return {
            titleList: []
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/scrollspy-container instead');
    },

    /** @inheritDoc */
    componentDidMount: function componentDidMount() {
        this.setState({
            titleList: this._getTitleList()
        });
        this._scrollCarrier = window;
        this._scrollCarrier.addEventListener('scroll', this._scrollSpy);
        this._scrollCarrier.addEventListener('resize', this._scrollSpy);
        this._scrollSpy();
    },

    /** @inheritDoc */
    componentWillUnmount: function componentWillUnmount() {
        this._scrollCarrier.removeEventListener('scroll', this._scrollSpy);
        this._scrollCarrier.removeEventListener('resize', this._scrollSpy);
    },

    /**
    * Get the menu items list
    * @return {Array} the menu items
    * @private
    */
    _getTitleList: function _getTitleList() {
        var titleSelector = this.props.titleSelector;

        var rawTitleList = document.querySelectorAll(titleSelector);
        return [].map.call(rawTitleList, function (titleElement, index) {
            return {
                index: index,
                label: titleElement.innerHTML,
                id: titleElement.getAttribute('data-spy'),
                offsetTop: titleElement.parentElement.parentElement.offsetTop // TODO TGN : to rewrite
            };
        });
    },

    /**
    * Item click handler.
    * Set the scroll to display the clicked item
    * @param {Object} title - the clicked item object
    * @return {Function} hte click handler
    * @private
    */
    _linkClickHandler: function _linkClickHandler(title) {
        var _this = this;

        return function () {
            var selectedTitle = document.querySelector('[data-spy=\'' + title.id + '\']');
            (0, _scroll.scrollTo)(undefined, selectedTitle.offsetTop - _this.props.affixOffset);
        };
    },

    /**
    * Render the items list
    * @return {XML} the rendered HTML
    * @private
    */
    _renderList: function _renderList() {
        var _this2 = this;

        var _state = this.state,
            activeTitleId = _state.activeTitleId,
            titleList = _state.titleList;

        return _react2.default.createElement(
            'ul',
            null,
            ' ',
            titleList.map(function (title) {
                var lineProps = {
                    className: activeTitleId === title.id && 'active',
                    key: title.id,
                    onClick: _this2._linkClickHandler(title)
                };
                return _react2.default.createElement(
                    'li',
                    lineProps,
                    title.label
                );
            }),
            ' '
        );
    },

    /**
    * Render the component
    * @return {XML} the rendered component
    */
    render: function render() {
        var affix = this.state.affix;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'scrollspy', ref: 'scrollSpy' },
            _react2.default.createElement(
                'nav',
                { 'data-affix': !!affix, style: affix ? { position: 'fixed', top: this.props.affixOffset + 'px' } : null },
                this._renderList()
            ),
            _react2.default.createElement(
                'div',
                null,
                this.props.children
            )
        );
    },

    /**
    * The scroll event handler
    * @private
    */
    _scrollSpy: function _scrollSpy() {
        var _this3 = this;

        var titleList = this._getTitleList();
        if (0 === titleList.length) {
            return;
        }
        //---
        var scrollposition = (0, _scroll.scrollPosition)();

        var nextTitles = (0, _filter2.default)(titleList, function (n) {
            return scrollposition.top < n.offsetTop - _this3.props.affixOffset;
        });

        //by default, first node is indexed
        var currentId = titleList[0].id;
        if (0 < nextTitles.length) {
            //check the first node
            var firstNode = (0, _first2.default)(nextTitles);
            var index = firstNode.index;
            if (0 < index) {
                currentId = titleList[index - 1].id;
            }
        } else {
            //means that the position is the last title
            currentId = (0, _last2.default)(titleList).id;
        }
        //save current state
        var scrollSpy = this.refs.scrollSpy;

        if (scrollSpy) {
            var componentTopPosition = _reactDom2.default.findDOMNode(scrollSpy).offsetTop;
            this.setState({
                activeTitleId: currentId,
                affix: componentTopPosition + this.props.affixOffset < scrollposition.top
            });
        }
    }
};
// Mixins
// Dependencies

var _builder = (0, _builder3.default)(Scrollspy),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiU2Nyb2xsc3B5IiwibWl4aW5zIiwiU3R5bGFiZSIsImdldERlZmF1bHRQcm9wcyIsInRpdGxlU2VsZWN0b3IiLCJhZmZpeE9mZnNldCIsInByb3BUeXBlcyIsImdldEluaXRpYWxTdGF0ZSIsInRpdGxlTGlzdCIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbnNvbGUiLCJ3YXJuIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRTdGF0ZSIsIl9nZXRUaXRsZUxpc3QiLCJfc2Nyb2xsQ2FycmllciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfc2Nyb2xsU3B5IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvcHMiLCJyYXdUaXRsZUxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJjYWxsIiwidGl0bGVFbGVtZW50IiwiaW5kZXgiLCJsYWJlbCIsImlubmVySFRNTCIsImlkIiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0VG9wIiwicGFyZW50RWxlbWVudCIsIl9saW5rQ2xpY2tIYW5kbGVyIiwidGl0bGUiLCJzZWxlY3RlZFRpdGxlIiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsIl9yZW5kZXJMaXN0Iiwic3RhdGUiLCJhY3RpdmVUaXRsZUlkIiwibGluZVByb3BzIiwiY2xhc3NOYW1lIiwia2V5Iiwib25DbGljayIsInJlbmRlciIsImFmZml4IiwicG9zaXRpb24iLCJ0b3AiLCJjaGlsZHJlbiIsImxlbmd0aCIsInNjcm9sbHBvc2l0aW9uIiwibmV4dFRpdGxlcyIsIm4iLCJjdXJyZW50SWQiLCJmaXJzdE5vZGUiLCJzY3JvbGxTcHkiLCJyZWZzIiwiY29tcG9uZW50VG9wUG9zaXRpb24iLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztB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NEIsNEJBQVloRCxVQUFVb0IsUUFBUSxDQUFsQixFQUFxQkcsRUFBakM7QUFDSDtBQUNKLFNBUEQsTUFPTztBQUNIO0FBQ0F5Qix3QkFBWSxvQkFBS2hELFNBQUwsRUFBZ0J1QixFQUE1QjtBQUNIO0FBQ0Q7QUF2QlMsWUF3QkQyQixTQXhCQyxHQXdCYSxLQUFLQyxJQXhCbEIsQ0F3QkRELFNBeEJDOztBQXlCVCxZQUFJQSxTQUFKLEVBQWU7QUFDWCxnQkFBTUUsdUJBQXVCQyxtQkFBU0MsV0FBVCxDQUFxQkosU0FBckIsRUFBZ0N6QixTQUE3RDtBQUNBLGlCQUFLcEIsUUFBTCxDQUFjO0FBQ1Y2QiwrQkFBZWMsU0FETDtBQUVWUix1QkFBT1ksdUJBQXVCLEtBQUt2QyxLQUFMLENBQVdoQixXQUFsQyxHQUFnRGdELGVBQWVIO0FBRjVELGFBQWQ7QUFJSDtBQUNKO0FBcEphLENBQWxCO0FBWkE7QUFMQTs7ZUF3SzZCLHVCQUFRbEQsU0FBUixDO0lBQXJCK0QsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHR5cGVzIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC90eXBlcyc7XG4vLyBNaXhpbnNcbmltcG9ydCBTdHlsYWJlIGZyb20gJy4uLy4uL21peGluL3N0eWxhYmxlJztcbmltcG9ydCB7IHNjcm9sbFRvLCBzY3JvbGxQb3NpdGlvbiB9IGZyb20gJy4uL21peGluL3Njcm9sbCc7XG5cbmltcG9ydCBmaWx0ZXIgZnJvbSAnbG9kYXNoL2NvbGxlY3Rpb24vZmlsdGVyJztcbmltcG9ydCBmaXJzdCBmcm9tICdsb2Rhc2gvYXJyYXkvZmlyc3QnO1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2FycmF5L2xhc3QnO1xuXG4vKipcbiogU2Nyb2xsc3B5IGNvbXBvbmVudC5cbiogTGlzdGVuIHRvIGEgc2Nyb2xsLCBhbmQgc2V0cyBhbiBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgZWxlbWVudC5cbiovXG5jb25zdCBTY3JvbGxzcHkgPSB7XG4gICAgLyoqXG4gICAgKiBTdHlsYWJsZSBtaXhpbi5cbiAgICAqL1xuICAgIG1peGluczogW1N0eWxhYmVdLFxuICAgIC8qKlxuICAgICogR2V0IHRoZSBkZWZhdWx0IHByb3BzLlxuICAgICogQnkgZGVmYXVsdCwgbGlzdGVuIHRvIHRoZSBib2R5IGVsZW1lbnRcbiAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGRlZmF1bHQgcHJvcGVydGllc1xuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGVTZWxlY3RvcjogJ1tkYXRhLXNweV0nLFxuICAgICAgICAgICAgYWZmaXhPZmZzZXQ6IDBcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUHJvcHMgdmFsaWRhdGlvblxuICAgICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHRpdGxlU2VsZWN0b3I6IHR5cGVzKCdzdHJpbmcnKSxcbiAgICAgICAgYWZmaXhPZmZzZXQ6IHR5cGVzKCdudW1iZXInKVxuICAgIH0sXG4gICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGVMaXN0OiBbXVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgMi4yLjA6IHRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2Ugc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9zY3JvbGxzcHktY29udGFpbmVyIGluc3RlYWQnKTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpdGxlTGlzdDogdGhpcy5fZ2V0VGl0bGVMaXN0KClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Njcm9sbENhcnJpZXIgPSB3aW5kb3c7XG4gICAgICAgIHRoaXMuX3Njcm9sbENhcnJpZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsU3B5KTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQ2Fycmllci5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9zY3JvbGxTcHkpO1xuICAgICAgICB0aGlzLl9zY3JvbGxTcHkoKTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxDYXJyaWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbFNweSk7XG4gICAgICAgIHRoaXMuX3Njcm9sbENhcnJpZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fc2Nyb2xsU3B5KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogR2V0IHRoZSBtZW51IGl0ZW1zIGxpc3RcbiAgICAqIEByZXR1cm4ge0FycmF5fSB0aGUgbWVudSBpdGVtc1xuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIF9nZXRUaXRsZUxpc3QoKSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGVTZWxlY3RvciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgcmF3VGl0bGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aXRsZVNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIFtdLm1hcC5jYWxsKHJhd1RpdGxlTGlzdCwgKHRpdGxlRWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGlkOiB0aXRsZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNweScpLFxuICAgICAgICAgICAgICAgIG9mZnNldFRvcDogdGl0bGVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRUb3AgLy8gVE9ETyBUR04gOiB0byByZXdyaXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogSXRlbSBjbGljayBoYW5kbGVyLlxuICAgICogU2V0IHRoZSBzY3JvbGwgdG8gZGlzcGxheSB0aGUgY2xpY2tlZCBpdGVtXG4gICAgKiBAcGFyYW0ge09iamVjdH0gdGl0bGUgLSB0aGUgY2xpY2tlZCBpdGVtIG9iamVjdFxuICAgICogQHJldHVybiB7RnVuY3Rpb259IGh0ZSBjbGljayBoYW5kbGVyXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgX2xpbmtDbGlja0hhbmRsZXIodGl0bGUpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zcHk9XFwnJyArIHRpdGxlLmlkICsgJ1xcJ10nKTtcbiAgICAgICAgICAgIHNjcm9sbFRvKHVuZGVmaW5lZCwgc2VsZWN0ZWRUaXRsZS5vZmZzZXRUb3AgLSB0aGlzLnByb3BzLmFmZml4T2Zmc2V0KTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBpdGVtcyBsaXN0XG4gICAgKiBAcmV0dXJuIHtYTUx9IHRoZSByZW5kZXJlZCBIVE1MXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgX3JlbmRlckxpc3QoKSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlVGl0bGVJZCwgdGl0bGVMaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsPiB7XG4gICAgICAgICAgICAgICAgdGl0bGVMaXN0Lm1hcCgodGl0bGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZVByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBhY3RpdmVUaXRsZUlkID09PSB0aXRsZS5pZCAmJiAnYWN0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdGl0bGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLl9saW5rQ2xpY2tIYW5kbGVyKHRpdGxlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHsuLi5saW5lUHJvcHN9Pnt0aXRsZS5sYWJlbH08L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IDwvdWw+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50XG4gICAgKiBAcmV0dXJuIHtYTUx9IHRoZSByZW5kZXJlZCBjb21wb25lbnRcbiAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhZmZpeCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nc2Nyb2xsc3B5JyByZWY9J3Njcm9sbFNweSc+XG4gICAgICAgICAgICAgICAgPG5hdiBkYXRhLWFmZml4PXshIWFmZml4fSBzdHlsZT17YWZmaXggPyB7IHBvc2l0aW9uOiAnZml4ZWQnLCB0b3A6IGAke3RoaXMucHJvcHMuYWZmaXhPZmZzZXR9cHhgIH0gOiBudWxsfT57dGhpcy5fcmVuZGVyTGlzdCgpfTwvbmF2PlxuICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogVGhlIHNjcm9sbCBldmVudCBoYW5kbGVyXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgX3Njcm9sbFNweSgpIHtcbiAgICAgICAgY29uc3QgdGl0bGVMaXN0ID0gdGhpcy5fZ2V0VGl0bGVMaXN0KCk7XG4gICAgICAgIGlmICgwID09PSB0aXRsZUxpc3QubGVuZ3RoKSB7IHJldHVybjsgfVxuICAgICAgICAvLy0tLVxuICAgICAgICBjb25zdCBzY3JvbGxwb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbmV4dFRpdGxlcyA9IGZpbHRlcih0aXRsZUxpc3QsIG4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNjcm9sbHBvc2l0aW9uLnRvcCA8IG4ub2Zmc2V0VG9wIC0gdGhpcy5wcm9wcy5hZmZpeE9mZnNldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9ieSBkZWZhdWx0LCBmaXJzdCBub2RlIGlzIGluZGV4ZWRcbiAgICAgICAgbGV0IGN1cnJlbnRJZCA9IHRpdGxlTGlzdFswXS5pZDtcbiAgICAgICAgaWYgKDAgPCBuZXh0VGl0bGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy9jaGVjayB0aGUgZmlyc3Qgbm9kZVxuICAgICAgICAgICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3QobmV4dFRpdGxlcyk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGZpcnN0Tm9kZS5pbmRleDtcbiAgICAgICAgICAgIGlmICgwIDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50SWQgPSB0aXRsZUxpc3RbaW5kZXggLSAxXS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vbWVhbnMgdGhhdCB0aGUgcG9zaXRpb24gaXMgdGhlIGxhc3QgdGl0bGVcbiAgICAgICAgICAgIGN1cnJlbnRJZCA9IGxhc3QodGl0bGVMaXN0KS5pZDtcbiAgICAgICAgfVxuICAgICAgICAvL3NhdmUgY3VycmVudCBzdGF0ZVxuICAgICAgICBjb25zdCB7IHNjcm9sbFNweSB9ID0gdGhpcy5yZWZzO1xuICAgICAgICBpZiAoc2Nyb2xsU3B5KSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRUb3BQb3NpdGlvbiA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHNjcm9sbFNweSkub2Zmc2V0VG9wO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGl0bGVJZDogY3VycmVudElkLFxuICAgICAgICAgICAgICAgIGFmZml4OiBjb21wb25lbnRUb3BQb3NpdGlvbiArIHRoaXMucHJvcHMuYWZmaXhPZmZzZXQgPCBzY3JvbGxwb3NpdGlvbi50b3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKFNjcm9sbHNweSk7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==