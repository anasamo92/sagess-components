'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isNull = require('lodash/lang/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scroll = function Scroll(Component) {
    return function (_Component) {
        _inherits(ScrollComponent, _Component);

        function ScrollComponent(props) {
            _classCallCheck(this, ScrollComponent);

            return _possibleConstructorReturn(this, (ScrollComponent.__proto__ || Object.getPrototypeOf(ScrollComponent)).call(this, props));
        }

        /**
        * Get the scroll position from the top of the screen.
        *
        * https://developer.mozilla.org/fr/docs/Web/API/Element/getBoundingClientRect
        *
        * @param {object} domNode domNoe to get the position from
        * @returns {int} - The position in pixel from the top of the scroll container.
        */


        _createClass(ScrollComponent, [{
            key: 'scrollPosition',
            value: function scrollPosition(domNode) {
                var y = window.pageYOffset || document.documentElement.scrollTop;
                var x = window.pageXOffset || document.documentElement.scrollLeft;
                if ((0, _isUndefined2.default)(domNode) || (0, _isNull2.default)(domNode)) {
                    return { top: y, left: x };
                }
                var nodeRect = domNode.getBoundingClientRect();
                return { left: nodeRect.left + x, top: nodeRect.top + y };
            }
        }, {
            key: 'isAtPageBottom',
            value: function isAtPageBottom(domNode) {
                return this.scrollPosition().top >= this._getScrollingElement().scrollHeight - window.innerHeight;
            }
        }, {
            key: '_getScrollingElement',
            value: function _getScrollingElement() {
                if (document.scrollingElement) {
                    return document.scrollingElement;
                } else if (document.documentElement) {
                    return document.documentElement;
                }
                return document.querySelector('body');
            }

            /**
            * Set scrollbar position with smooth animation.
            * http://www.w3schools.com/jsref/prop_win_pagexoffset.asp
            *
            * @param {object} element  element parent for the scroll
            * @param {number} to       position of the scroll
            * @param {number} duration duration of animation
            */

        }, {
            key: 'scrollTo',
            value: function scrollTo(element, to) {
                var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

                if ((0, _isUndefined2.default)(element)) {
                    window.scrollTo(0, to);
                    return;
                }
                element.scrollTop = to;
            }
        }]);

        return ScrollComponent;
    }(Component);
};

exports.default = Scroll;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiU2Nyb2xsIiwicHJvcHMiLCJkb21Ob2RlIiwieSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ4IiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwidG9wIiwibGVmdCIsIm5vZGVSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2Nyb2xsUG9zaXRpb24iLCJfZ2V0U2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsaW5nRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbGVtZW50IiwidG8iLCJkdXJhdGlvbiIsInNjcm9sbFRvIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUztBQUFBO0FBQUE7O0FBQ1gsaUNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxSUFDVEEsS0FEUztBQUVsQjs7QUFFRDs7Ozs7Ozs7OztBQUxXO0FBQUE7QUFBQSwyQ0FhSUMsT0FiSixFQWFhO0FBQ3BCLG9CQUFNQyxJQUFJQyxPQUFPQyxXQUFQLElBQXNCQyxTQUFTQyxlQUFULENBQXlCQyxTQUF6RDtBQUNBLG9CQUFNQyxJQUFJTCxPQUFPTSxXQUFQLElBQXNCSixTQUFTQyxlQUFULENBQXlCSSxVQUF6RDtBQUNBLG9CQUFJLDJCQUFZVCxPQUFaLEtBQXdCLHNCQUFPQSxPQUFQLENBQTVCLEVBQTZDO0FBQ3pDLDJCQUFPLEVBQUVVLEtBQUtULENBQVAsRUFBVVUsTUFBTUosQ0FBaEIsRUFBUDtBQUNIO0FBQ0Qsb0JBQU1LLFdBQVdaLFFBQVFhLHFCQUFSLEVBQWpCO0FBQ0EsdUJBQU8sRUFBRUYsTUFBTUMsU0FBU0QsSUFBVCxHQUFnQkosQ0FBeEIsRUFBMkJHLEtBQUtFLFNBQVNGLEdBQVQsR0FBZVQsQ0FBL0MsRUFBUDtBQUNIO0FBckJVO0FBQUE7QUFBQSwyQ0F1QklELE9BdkJKLEVBdUJhO0FBQ3BCLHVCQUFPLEtBQUtjLGNBQUwsR0FBc0JKLEdBQXRCLElBQTZCLEtBQUtLLG9CQUFMLEdBQTRCQyxZQUE1QixHQUEyQ2QsT0FBT2UsV0FBdEY7QUFDSDtBQXpCVTtBQUFBO0FBQUEsbURBMkJZO0FBQ25CLG9CQUFJYixTQUFTYyxnQkFBYixFQUErQjtBQUMzQiwyQkFBT2QsU0FBU2MsZ0JBQWhCO0FBQ0gsaUJBRkQsTUFFTyxJQUFJZCxTQUFTQyxlQUFiLEVBQThCO0FBQ2pDLDJCQUFPRCxTQUFTQyxlQUFoQjtBQUNIO0FBQ0QsdUJBQU9ELFNBQVNlLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7QUFwQ1c7QUFBQTtBQUFBLHFDQTRDRkMsT0E1Q0UsRUE0Q09DLEVBNUNQLEVBNEMyQjtBQUFBLG9CQUFoQkMsUUFBZ0IsdUVBQUwsR0FBSzs7QUFDbEMsb0JBQUksMkJBQVlGLE9BQVosQ0FBSixFQUEwQjtBQUN0QmxCLDJCQUFPcUIsUUFBUCxDQUFnQixDQUFoQixFQUFtQkYsRUFBbkI7QUFDQTtBQUNIO0FBQ0RELHdCQUFRZCxTQUFSLEdBQW9CZSxFQUFwQjtBQUNIO0FBbERVOztBQUFBO0FBQUEsTUFBMkNHLFNBQTNDO0FBQUEsQ0FBZjs7a0JBc0RlMUIsTSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzTnVsbCBmcm9tICdsb2Rhc2gvbGFuZy9pc051bGwnO1xyXG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnbG9kYXNoL2xhbmcvaXNVbmRlZmluZWQnO1xyXG5cclxuY29uc3QgU2Nyb2xsID0gQ29tcG9uZW50ID0+IGNsYXNzIFNjcm9sbENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0IHRoZSBzY3JvbGwgcG9zaXRpb24gZnJvbSB0aGUgdG9wIG9mIHRoZSBzY3JlZW4uXHJcbiAgICAqXHJcbiAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0FQSS9FbGVtZW50L2dldEJvdW5kaW5nQ2xpZW50UmVjdFxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZG9tTm9kZSBkb21Ob2UgdG8gZ2V0IHRoZSBwb3NpdGlvbiBmcm9tXHJcbiAgICAqIEByZXR1cm5zIHtpbnR9IC0gVGhlIHBvc2l0aW9uIGluIHBpeGVsIGZyb20gdGhlIHRvcCBvZiB0aGUgc2Nyb2xsIGNvbnRhaW5lci5cclxuICAgICovXHJcbiAgICBzY3JvbGxQb3NpdGlvbihkb21Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgeSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGNvbnN0IHggPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGRvbU5vZGUpIHx8IGlzTnVsbChkb21Ob2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyB0b3A6IHksIGxlZnQ6IHggfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9kZVJlY3QgPSBkb21Ob2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiB7IGxlZnQ6IG5vZGVSZWN0LmxlZnQgKyB4LCB0b3A6IG5vZGVSZWN0LnRvcCArIHkgfTtcclxuICAgIH1cclxuXHJcbiAgICBpc0F0UGFnZUJvdHRvbShkb21Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsUG9zaXRpb24oKS50b3AgPj0gdGhpcy5fZ2V0U2Nyb2xsaW5nRWxlbWVudCgpLnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0U2Nyb2xsaW5nRWxlbWVudCgpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBTZXQgc2Nyb2xsYmFyIHBvc2l0aW9uIHdpdGggc21vb3RoIGFuaW1hdGlvbi5cclxuICAgICogaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2pzcmVmL3Byb3Bfd2luX3BhZ2V4b2Zmc2V0LmFzcFxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudCAgZWxlbWVudCBwYXJlbnQgZm9yIHRoZSBzY3JvbGxcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IHRvICAgICAgIHBvc2l0aW9uIG9mIHRoZSBzY3JvbGxcclxuICAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIGR1cmF0aW9uIG9mIGFuaW1hdGlvblxyXG4gICAgKi9cclxuICAgIHNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiA9IDUwMCkge1xyXG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG8pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG87XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsO1xyXG4iXX0=