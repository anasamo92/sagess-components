'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _scroll = require('../../common/mixin/scroll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Back to top button.
 */
var ButtonBackToTop = (_temp2 = _class = function (_Component) {
    _inherits(ButtonBackToTop, _Component);

    function ButtonBackToTop() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ButtonBackToTop);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonBackToTop.__proto__ || Object.getPrototypeOf(ButtonBackToTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isVisible: false
        }, _this._scrollSpy = function () {
            var currentScrollPosition = (0, _scroll.scrollPosition)();
            if (currentScrollPosition.top > _this.props.scrollStart) {
                if (!_this.state.isVisible) {
                    _this.setState({ isVisible: true });
                }
            } else {
                if (_this.state.isVisible) {
                    _this.setState({ isVisible: false });
                }
            }
        }, _this.goBackToTop = function () {
            (0, _scroll.scrollTo)(undefined, 0);
        }, _this.render = function () {
            var isVisible = _this.state.isVisible;

            return isVisible ? _react2.default.createElement(
                'div',
                { 'data-focus': 'back-to-top' },
                _react2.default.createElement(_button2.default, {
                    color: 'colored',
                    handleOnClick: _this.goBackToTop,
                    icon: 'expand_less',
                    shape: 'fab', t: true,
                    ype: 'button'
                })
            ) : null;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ButtonBackToTop, [{
        key: 'componentDidMount',


        /** @inheritdoc */
        value: function componentDidMount() {
            this._scrollCarrier = window;
            this._scrollCarrier.addEventListener('scroll', this._scrollSpy);
            this._scrollCarrier.addEventListener('resize', this._scrollSpy);
            this._scrollSpy();
        }

        /** @inheritdoc */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._scrollCarrier.removeEventListener('scroll', this._scrollSpy);
            this._scrollCarrier.removeEventListener('resize', this._scrollSpy);
        }

        /**
        * The scroll event handler
        * @private
        */


        /**
        * Go back to the top of the page.
        */


        /** @inheritdoc */

    }]);

    return ButtonBackToTop;
}(_react.Component), _class.displayName = 'ButtonBackToTop', _class.defaultProps = {
    iconPrefix: 'fa fa-',
    iconName: 'arrow-circle-up',
    duration: 100,
    scrollStart: 100
}, _class.propTypes = {
    iconPrefix: _react.PropTypes.string,
    iconName: _react.PropTypes.string,
    duration: _react.PropTypes.number,
    scrollStart: _react.PropTypes.number
}, _temp2);
exports.default = ButtonBackToTop;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQnV0dG9uQmFja1RvVG9wIiwic3RhdGUiLCJpc1Zpc2libGUiLCJfc2Nyb2xsU3B5IiwiY3VycmVudFNjcm9sbFBvc2l0aW9uIiwidG9wIiwicHJvcHMiLCJzY3JvbGxTdGFydCIsInNldFN0YXRlIiwiZ29CYWNrVG9Ub3AiLCJ1bmRlZmluZWQiLCJyZW5kZXIiLCJfc2Nyb2xsQ2FycmllciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJpY29uUHJlZml4IiwiaWNvbk5hbWUiLCJkdXJhdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsZTs7Ozs7Ozs7Ozs7Ozs7NE1Ba0JGQyxLLEdBQVE7QUFDSkMsdUJBQVc7QUFEUCxTLFFBc0JSQyxVLEdBQWEsWUFBTTtBQUNmLGdCQUFNQyx3QkFBd0IsNkJBQTlCO0FBQ0EsZ0JBQUlBLHNCQUFzQkMsR0FBdEIsR0FBNEIsTUFBS0MsS0FBTCxDQUFXQyxXQUEzQyxFQUF3RDtBQUNwRCxvQkFBSSxDQUFDLE1BQUtOLEtBQUwsQ0FBV0MsU0FBaEIsRUFBMkI7QUFDdkIsMEJBQUtNLFFBQUwsQ0FBYyxFQUFFTixXQUFXLElBQWIsRUFBZDtBQUNIO0FBQ0osYUFKRCxNQUlPO0FBQ0gsb0JBQUksTUFBS0QsS0FBTCxDQUFXQyxTQUFmLEVBQTBCO0FBQ3RCLDBCQUFLTSxRQUFMLENBQWMsRUFBRU4sV0FBVyxLQUFiLEVBQWQ7QUFDSDtBQUNKO0FBQ0osUyxRQUtETyxXLEdBQWMsWUFBTTtBQUNoQixrQ0FBU0MsU0FBVCxFQUFvQixDQUFwQjtBQUNILFMsUUFHREMsTSxHQUFTLFlBQU07QUFBQSxnQkFDSFQsU0FERyxHQUNXLE1BQUtELEtBRGhCLENBQ0hDLFNBREc7O0FBRVgsbUJBQU9BLFlBQ0g7QUFBQTtBQUFBLGtCQUFLLGNBQVcsYUFBaEI7QUFDSSw4Q0FBQyxnQkFBRDtBQUNJLDJCQUFNLFNBRFY7QUFFSSxtQ0FBZSxNQUFLTyxXQUZ4QjtBQUdJLDBCQUFLLGFBSFQ7QUFJSSwyQkFBTSxLQUpWLEVBSWdCLE9BSmhCO0FBS0kseUJBQUk7QUFMUjtBQURKLGFBREcsR0FVSCxJQVZKO0FBV0gsUzs7Ozs7OztBQXBERDs0Q0FDb0I7QUFDaEIsaUJBQUtHLGNBQUwsR0FBc0JDLE1BQXRCO0FBQ0EsaUJBQUtELGNBQUwsQ0FBb0JFLGdCQUFwQixDQUFxQyxRQUFyQyxFQUErQyxLQUFLWCxVQUFwRDtBQUNBLGlCQUFLUyxjQUFMLENBQW9CRSxnQkFBcEIsQ0FBcUMsUUFBckMsRUFBK0MsS0FBS1gsVUFBcEQ7QUFDQSxpQkFBS0EsVUFBTDtBQUNIOztBQUVEOzs7OytDQUN1QjtBQUNuQixpQkFBS1MsY0FBTCxDQUFvQkcsbUJBQXBCLENBQXdDLFFBQXhDLEVBQWtELEtBQUtaLFVBQXZEO0FBQ0EsaUJBQUtTLGNBQUwsQ0FBb0JHLG1CQUFwQixDQUF3QyxRQUF4QyxFQUFrRCxLQUFLWixVQUF2RDtBQUNIOztBQUVEOzs7Ozs7QUFpQkE7Ozs7O0FBT0E7Ozs7O0VBNUQwQmEsZ0IsVUFFbkJDLFcsR0FBYyxpQixTQUVkQyxZLEdBQWU7QUFDbEJDLGdCQUFZLFFBRE07QUFFbEJDLGNBQVUsaUJBRlE7QUFHbEJDLGNBQVUsR0FIUTtBQUlsQmQsaUJBQWE7QUFKSyxDLFNBT2ZlLFMsR0FBWTtBQUNmSCxnQkFBWUksaUJBQVVDLE1BRFA7QUFFZkosY0FBVUcsaUJBQVVDLE1BRkw7QUFHZkgsY0FBVUUsaUJBQVVFLE1BSEw7QUFJZmxCLGlCQUFhZ0IsaUJBQVVFO0FBSlIsQztrQkFrRVJ6QixlIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XG5pbXBvcnQgeyBzY3JvbGxUbywgc2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb21tb24vbWl4aW4vc2Nyb2xsJztcblxuLyoqXG4gKiBCYWNrIHRvIHRvcCBidXR0b24uXG4gKi9cbmNsYXNzIEJ1dHRvbkJhY2tUb1RvcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQnV0dG9uQmFja1RvVG9wJztcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGljb25QcmVmaXg6ICdmYSBmYS0nLFxuICAgICAgICBpY29uTmFtZTogJ2Fycm93LWNpcmNsZS11cCcsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAsXG4gICAgICAgIHNjcm9sbFN0YXJ0OiAxMDBcbiAgICB9O1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaWNvblByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBzY3JvbGxTdGFydDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgIH07XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsQ2FycmllciA9IHdpbmRvdztcbiAgICAgICAgdGhpcy5fc2Nyb2xsQ2Fycmllci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGxTcHkpO1xuICAgICAgICB0aGlzLl9zY3JvbGxDYXJyaWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Njcm9sbFNweSk7XG4gICAgICAgIHRoaXMuX3Njcm9sbFNweSgpO1xuICAgIH1cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxDYXJyaWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbFNweSk7XG4gICAgICAgIHRoaXMuX3Njcm9sbENhcnJpZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fc2Nyb2xsU3B5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFRoZSBzY3JvbGwgZXZlbnQgaGFuZGxlclxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIF9zY3JvbGxTcHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsUG9zaXRpb24udG9wID4gdGhpcy5wcm9wcy5zY3JvbGxTdGFydCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Zpc2libGU6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAqIEdvIGJhY2sgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZS5cbiAgICAqL1xuICAgIGdvQmFja1RvVG9wID0gKCkgPT4ge1xuICAgICAgICBzY3JvbGxUbyh1bmRlZmluZWQsIDApO1xuICAgIH07XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaXNWaXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gaXNWaXNpYmxlID8gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdiYWNrLXRvLXRvcCc+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0nY29sb3JlZCdcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DbGljaz17dGhpcy5nb0JhY2tUb1RvcH1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj0nZXhwYW5kX2xlc3MnXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlPSdmYWInIHRcbiAgICAgICAgICAgICAgICAgICAgeXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25CYWNrVG9Ub3A7XG4iXX0=