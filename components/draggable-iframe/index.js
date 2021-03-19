'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('sagess-core/translation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DraggableIframe = (_temp = _class = function (_React$Component) {
    _inherits(DraggableIframe, _React$Component);

    function DraggableIframe(props) {
        _classCallCheck(this, DraggableIframe);

        var _this = _possibleConstructorReturn(this, (DraggableIframe.__proto__ || Object.getPrototypeOf(DraggableIframe)).call(this, props));

        _this.state = {
            isShown: false,
            params: [],
            xPos: 0,
            yPos: 0,
            xElem: 0,
            yElem: 0,
            selected: null
        };

        _this.dragInit = function (e) {
            e.preventDefault();
            document.onmousemove = _this.moveElem;
            document.onmouseup = _this.destroy;
            _this.setState({
                xPos: e.pageX,
                yPos: e.pageY,
                selected: _this.refs.helpFrame,
                xElem: e.pageX - _this.refs.helpFrame.offsetLeft,
                yElem: e.pageY - _this.refs.helpFrame.offsetTop
            });
        };

        _this.moveElem = function (e) {
            var _this$state = _this.state,
                xPos = _this$state.xPos,
                yPos = _this$state.yPos,
                xElem = _this$state.xElem,
                yElem = _this$state.yElem,
                selected = _this$state.selected;

            _this.setState({
                xPos: e.pageX,
                yPos: e.pageY
            });
            if (selected !== null) {
                selected.style.left = xPos - xElem + 'px';
                selected.style.top = yPos - yElem + 'px';
            }
        };

        _this.destroy = function (e) {
            e.preventDefault();
            document.onmousemove = null;
            document.onmouseup = null;
            _this.setState({ selected: null });
        };

        _this.toggle = function () {
            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = arguments[_key];
            }

            var _this$state2 = _this.state,
                oldPos = _this$state2.yPos,
                isShown = _this$state2.isShown,
                yElem = _this$state2.yElem;
            var _window = window,
                pageYOffset = _window.pageYOffset,
                outerHeight = _window.outerHeight;

            var yPos = isShown ? oldPos : pageYOffset > oldPos ? pageYOffset + 50 : pageYOffset + outerHeight < oldPos ? pageYOffset + outerHeight - _this.props.height - 100 : oldPos;
            _this.setState({ isShown: !_this.state.isShown, params: params, yPos: yPos });
            _this.refs.helpFrame.style.top = yPos - yElem + 'px';
        };

        if (props.toggleFunctionName) {
            window[props.toggleFunctionName] = _this.toggle;
        }
        return _this;
    }

    _createClass(DraggableIframe, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                iframeUrl = _props.iframeUrl,
                width = _props.width,
                height = _props.height,
                queryUrl = _props.queryUrl;
            var _state = this.state,
                selected = _state.selected,
                isShown = _state.isShown,
                params = _state.params;

            var url = iframeUrl + params.map(function (param, i) {
                return typeof queryUrl[i] === 'string' ? queryUrl[i] + param : '';
            }).join('');
            return _react2.default.createElement(
                'div',
                { className: 'help-frame ' + (selected ? 'is-dragging' : ''), onMouseDown: this.dragInit, ref: 'helpFrame', style: { width: width, display: isShown ? 'block' : 'none' } },
                _react2.default.createElement(
                    'span',
                    { className: 'help-center-title' },
                    (0, _translation.translate)(title)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect close-icon', onClick: this.toggle },
                    _react2.default.createElement(
                        'i',
                        { className: 'material-icons' },
                        'close'
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(IFrame, { height: height, src: url, width: width })
            );
        }
    }]);

    return DraggableIframe;
}(_react2.default.Component), _class.propTypes = {
    iframeUrl: _react.PropTypes.string.isRequired,
    width: _react.PropTypes.number.isRequired,
    height: _react.PropTypes.number.isRequired,
    title: _react.PropTypes.string.isRequired,
    toggleFunctionName: _react.PropTypes.string,
    queryUrl: _react.PropTypes.array
}, _temp);

var IFrame = function (_React$Component2) {
    _inherits(IFrame, _React$Component2);

    function IFrame() {
        _classCallCheck(this, IFrame);

        return _possibleConstructorReturn(this, (IFrame.__proto__ || Object.getPrototypeOf(IFrame)).apply(this, arguments));
    }

    _createClass(IFrame, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(_ref) {
            var src = _ref.src;

            return src !== this.props.src;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                height = _props2.height,
                src = _props2.src,
                width = _props2.width;

            return _react2.default.createElement('iframe', { frameBorder: 0, height: height, src: src, width: width });
        }
    }]);

    return IFrame;
}(_react2.default.Component);

exports.default = DraggableIframe;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiRHJhZ2dhYmxlSWZyYW1lIiwicHJvcHMiLCJzdGF0ZSIsImlzU2hvd24iLCJwYXJhbXMiLCJ4UG9zIiwieVBvcyIsInhFbGVtIiwieUVsZW0iLCJzZWxlY3RlZCIsImRyYWdJbml0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJvbm1vdXNlbW92ZSIsIm1vdmVFbGVtIiwib25tb3VzZXVwIiwiZGVzdHJveSIsInNldFN0YXRlIiwicGFnZVgiLCJwYWdlWSIsInJlZnMiLCJoZWxwRnJhbWUiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwidG9nZ2xlIiwib2xkUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJvdXRlckhlaWdodCIsImhlaWdodCIsInRvZ2dsZUZ1bmN0aW9uTmFtZSIsInRpdGxlIiwiaWZyYW1lVXJsIiwid2lkdGgiLCJxdWVyeVVybCIsInVybCIsIm1hcCIsInBhcmFtIiwiaSIsImpvaW4iLCJkaXNwbGF5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiYXJyYXkiLCJJRnJhbWUiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLGU7OztBQVdGLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0lBQ1RBLEtBRFM7O0FBQUEsY0FPbkJDLEtBUG1CLEdBT1g7QUFDSkMscUJBQVMsS0FETDtBQUVKQyxvQkFBUSxFQUZKO0FBR0pDLGtCQUFNLENBSEY7QUFJSkMsa0JBQU0sQ0FKRjtBQUtKQyxtQkFBTyxDQUxIO0FBTUpDLG1CQUFPLENBTkg7QUFPSkMsc0JBQVU7QUFQTixTQVBXOztBQUFBLGNBaUJuQkMsUUFqQm1CLEdBaUJSLFVBQUNDLENBQUQsRUFBTztBQUNkQSxjQUFFQyxj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VUFGVDtBQUdmakIsWUFBUWUsaUJBQVVHLE1BQVYsQ0FBaUJELFVBSFY7QUFJZmYsV0FBT2EsaUJBQVVDLE1BQVYsQ0FBaUJDLFVBSlQ7QUFLZmhCLHdCQUFvQmMsaUJBQVVDLE1BTGY7QUFNZlgsY0FBVVUsaUJBQVVJO0FBTkwsQzs7SUFtRmpCQyxNOzs7Ozs7Ozs7OztvREFDNkI7QUFBQSxnQkFBUEMsR0FBTyxRQUFQQSxHQUFPOztBQUMzQixtQkFBT0EsUUFBUSxLQUFLckQsS0FBTCxDQUFXcUQsR0FBMUI7QUFDSDs7O2lDQUVRO0FBQUEsMEJBQzBCLEtBQUtyRCxLQUQvQjtBQUFBLGdCQUNHZ0MsTUFESCxXQUNHQSxNQURIO0FBQUEsZ0JBQ1dxQixHQURYLFdBQ1dBLEdBRFg7QUFBQSxnQkFDZ0JqQixLQURoQixXQUNnQkEsS0FEaEI7O0FBRUwsbUJBQU8sMENBQVEsYUFBYSxDQUFyQixFQUF3QixRQUFRSixNQUFoQyxFQUF3QyxLQUFLcUIsR0FBN0MsRUFBa0QsT0FBT2pCLEtBQXpELEdBQVA7QUFDSDs7OztFQVJnQlEsZ0JBQU1DLFM7O2tCQVdaOUMsZSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL3RyYW5zbGF0aW9uJztcblxuY2xhc3MgRHJhZ2dhYmxlSWZyYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGlmcmFtZVVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdG9nZ2xlRnVuY3Rpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBxdWVyeVVybDogUHJvcFR5cGVzLmFycmF5XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgaWYgKHByb3BzLnRvZ2dsZUZ1bmN0aW9uTmFtZSkge1xuICAgICAgICAgICAgd2luZG93W3Byb3BzLnRvZ2dsZUZ1bmN0aW9uTmFtZV0gPSB0aGlzLnRvZ2dsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBpc1Nob3duOiBmYWxzZSxcbiAgICAgICAgcGFyYW1zOiBbXSxcbiAgICAgICAgeFBvczogMCxcbiAgICAgICAgeVBvczogMCxcbiAgICAgICAgeEVsZW06IDAsXG4gICAgICAgIHlFbGVtOiAwLFxuICAgICAgICBzZWxlY3RlZDogbnVsbFxuICAgIH07XG5cbiAgICBkcmFnSW5pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLm1vdmVFbGVtO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSB0aGlzLmRlc3Ryb3k7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgeFBvczogZS5wYWdlWCxcbiAgICAgICAgICAgIHlQb3M6IGUucGFnZVksXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5yZWZzLmhlbHBGcmFtZSxcbiAgICAgICAgICAgIHhFbGVtOiBlLnBhZ2VYIC0gdGhpcy5yZWZzLmhlbHBGcmFtZS5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgeUVsZW06IGUucGFnZVkgLSB0aGlzLnJlZnMuaGVscEZyYW1lLm9mZnNldFRvcFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbW92ZUVsZW0gPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IHhQb3MsIHlQb3MsIHhFbGVtLCB5RWxlbSwgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgeFBvczogZS5wYWdlWCxcbiAgICAgICAgICAgIHlQb3M6IGUucGFnZVlcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzZWxlY3RlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZWN0ZWQuc3R5bGUubGVmdCA9ICh4UG9zIC0geEVsZW0pICsgJ3B4JztcbiAgICAgICAgICAgIHNlbGVjdGVkLnN0eWxlLnRvcCA9ICh5UG9zIC0geUVsZW0pICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkZXN0cm95ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogbnVsbCB9KTtcbiAgICB9O1xuXG4gICAgdG9nZ2xlID0gKC4uLnBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCB7IHlQb3M6IG9sZFBvcywgaXNTaG93biwgeUVsZW0gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgcGFnZVlPZmZzZXQsIG91dGVySGVpZ2h0IH0gPSB3aW5kb3c7XG4gICAgICAgIGNvbnN0IHlQb3MgPSBpc1Nob3duID8gb2xkUG9zIDogcGFnZVlPZmZzZXQgPiBvbGRQb3MgPyBwYWdlWU9mZnNldCArIDUwIDogcGFnZVlPZmZzZXQgKyBvdXRlckhlaWdodCA8IG9sZFBvcyA/IHBhZ2VZT2Zmc2V0ICsgb3V0ZXJIZWlnaHQgLSB0aGlzLnByb3BzLmhlaWdodCAtIDEwMCA6IG9sZFBvcztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2hvd246ICF0aGlzLnN0YXRlLmlzU2hvd24sIHBhcmFtcywgeVBvcyB9KTtcbiAgICAgICAgdGhpcy5yZWZzLmhlbHBGcmFtZS5zdHlsZS50b3AgPSAoeVBvcyAtIHlFbGVtKSArICdweCc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBpZnJhbWVVcmwsIHdpZHRoLCBoZWlnaHQsIHF1ZXJ5VXJsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHNlbGVjdGVkLCBpc1Nob3duLCBwYXJhbXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHVybCA9IGlmcmFtZVVybCArIHBhcmFtcy5tYXAoKHBhcmFtLCBpKSA9PiB0eXBlb2YgcXVlcnlVcmxbaV0gPT09ICdzdHJpbmcnID8gcXVlcnlVcmxbaV0gKyBwYXJhbSA6ICcnKS5qb2luKCcnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVscC1mcmFtZSAke3NlbGVjdGVkID8gJ2lzLWRyYWdnaW5nJyA6ICcnfWB9IG9uTW91c2VEb3duPXt0aGlzLmRyYWdJbml0fSByZWY9J2hlbHBGcmFtZScgc3R5bGU9e3sgd2lkdGgsIGRpc3BsYXk6IGlzU2hvd24gPyAnYmxvY2snIDogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVscC1jZW50ZXItdGl0bGUnPnt0cmFuc2xhdGUodGl0bGUpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWljb24gbWRsLWpzLXJpcHBsZS1lZmZlY3QgY2xvc2UtaWNvbicgb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz5jbG9zZTwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8SUZyYW1lIGhlaWdodD17aGVpZ2h0fSBzcmM9e3VybH0gd2lkdGg9e3dpZHRofSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBJRnJhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSh7IHNyYyB9KSB7XG4gICAgICAgIHJldHVybiBzcmMgIT09IHRoaXMucHJvcHMuc3JjO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBoZWlnaHQsIHNyYywgd2lkdGggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiA8aWZyYW1lIGZyYW1lQm9yZGVyPXswfSBoZWlnaHQ9e2hlaWdodH0gc3JjPXtzcmN9IHdpZHRoPXt3aWR0aH0gLz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnZ2FibGVJZnJhbWU7XG4iXX0=