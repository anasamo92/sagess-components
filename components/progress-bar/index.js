'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; // Dependencies


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _material = require('../../behaviours/material');

var _material2 = _interopRequireDefault(_material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = (_dec = (0, _material2.default)('bar'), _dec(_class = (_temp = _class2 = function (_Component) {
    _inherits(ProgressBar, _Component);

    function ProgressBar() {
        _classCallCheck(this, ProgressBar);

        return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
    }

    _createClass(ProgressBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var completed = this.props.completed;

            var bar = _reactDom2.default.findDOMNode(this.refs.bar);
            if (bar) {
                bar.MaterialProgress.setProgress(completed);
                bar.MaterialProgress.setBuffer(100);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var completed = _ref.completed;

            if (0 > completed) {
                completed = 0;
            }
            if (100 < completed) {
                completed = 100;
            }
            var bar = _reactDom2.default.findDOMNode(this.refs.bar);
            if (bar) {
                bar.MaterialProgress.setProgress(completed);
                bar.MaterialProgress.setBuffer(100);
            }
        }
    }, {
        key: '_renderClassName',
        value: function _renderClassName() {
            var indeterminated = this.props.indeterminated;


            if (indeterminated) {
                return 'mdl-progress mdl-js-progress mdl-progress__indeterminate';
            } else {
                return 'mdl-progress mdl-js-progress';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var completed = +this.props.completed;
            if (0 > completed) {
                completed = 0;
            }
            if (100 < completed) {
                completed = 100;
            }
            return _react2.default.createElement('div', { className: this._renderClassName(), 'data-focus': 'progress-bar', ref: 'bar' });
        }
    }]);

    return ProgressBar;
}(_react.Component), _class2.propTypes = {
    completed: _react.PropTypes.number,
    indeterminated: _react.PropTypes.bool
}, _class2.defaultProps = {
    completed: 0,
    indetermindated: false
}, _temp)) || _class);


ProgressBar.displayName = 'ProgressBar';

exports.default = ProgressBar;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiUHJvZ3Jlc3NCYXIiLCJjb21wbGV0ZWQiLCJwcm9wcyIsImJhciIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZWZzIiwiTWF0ZXJpYWxQcm9ncmVzcyIsInNldFByb2dyZXNzIiwic2V0QnVmZmVyIiwiaW5kZXRlcm1pbmF0ZWQiLCJfcmVuZGVyQ2xhc3NOYW1lIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsImluZGV0ZXJtaW5kYXRlZCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQ0FBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHTUEsVyxXQURMLHdCQUFhLEtBQWIsQzs7Ozs7Ozs7Ozs7NENBYXVCO0FBQUEsZ0JBQ1JDLFNBRFEsR0FDTSxLQUFLQyxLQURYLENBQ1JELFNBRFE7O0FBRWhCLGdCQUFNRSxNQUFNQyxtQkFBU0MsV0FBVCxDQUFxQixLQUFLQyxJQUFMLENBQVVILEdBQS9CLENBQVo7QUFDQSxnQkFBSUEsR0FBSixFQUFTO0FBQ0xBLG9CQUFJSSxnQkFBSixDQUFxQkMsV0FBckIsQ0FBaUNQLFNBQWpDO0FBQ0FFLG9CQUFJSSxnQkFBSixDQUFxQkUsU0FBckIsQ0FBK0IsR0FBL0I7QUFDSDtBQUNKOzs7d0RBRXdDO0FBQUEsZ0JBQWJSLFNBQWEsUUFBYkEsU0FBYTs7QUFDckMsZ0JBQUksSUFBSUEsU0FBUixFQUFtQjtBQUNmQSw0QkFBWSxDQUFaO0FBQ0g7QUFDRCxnQkFBSSxNQUFNQSxTQUFWLEVBQXFCO0FBQ2pCQSw0QkFBWSxHQUFaO0FBQ0g7QUFDRCxnQkFBTUUsTUFBTUMsbUJBQVNDLFdBQVQsQ0FBcUIsS0FBS0MsSUFBTCxDQUFVSCxHQUEvQixDQUFaO0FBQ0EsZ0JBQUlBLEdBQUosRUFBUztBQUNMQSxvQkFBSUksZ0JBQUosQ0FBcUJDLFdBQXJCLENBQWlDUCxTQUFqQztBQUNBRSxvQkFBSUksZ0JBQUosQ0FBcUJFLFNBQXJCLENBQStCLEdBQS9CO0FBQ0g7QUFDSjs7OzJDQUVrQjtBQUFBLGdCQUNQQyxjQURPLEdBQ1ksS0FBS1IsS0FEakIsQ0FDUFEsY0FETzs7O0FBR2YsZ0JBQUlBLGNBQUosRUFBb0I7QUFDaEIsdUJBQU8sMERBQVA7QUFDSCxhQUZELE1BR0s7QUFDRCx1QkFBTyw4QkFBUDtBQUNIO0FBQ0o7OztpQ0FFUTtBQUNMLGdCQUFJVCxZQUFZLENBQUMsS0FBS0MsS0FBTCxDQUFXRCxTQUE1QjtBQUNBLGdCQUFJLElBQUlBLFNBQVIsRUFBbUI7QUFDZkEsNEJBQVksQ0FBWjtBQUNIO0FBQ0QsZ0JBQUksTUFBTUEsU0FBVixFQUFxQjtBQUNqQkEsNEJBQVksR0FBWjtBQUNIO0FBQ0QsbUJBQ0ksdUNBQUssV0FBVyxLQUFLVSxnQkFBTCxFQUFoQixFQUF5QyxjQUFXLGNBQXBELEVBQW1FLEtBQUksS0FBdkUsR0FESjtBQUdIOzs7O0VBekRxQkMsZ0IsV0FFZkMsUyxHQUFZO0FBQ2ZaLGVBQVdhLGlCQUFVQyxNQUROO0FBRWZMLG9CQUFnQkksaUJBQVVFO0FBRlgsQyxVQUtaQyxZLEdBQWU7QUFDbEJoQixlQUFXLENBRE87QUFFbEJpQixxQkFBaUI7QUFGQyxDOzs7QUFxRDFCbEIsWUFBWW1CLFdBQVosR0FBMEIsYUFBMUI7O2tCQUVlbkIsVyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBtZGxCZWhhdmlvdXIgZnJvbSAnLi4vLi4vYmVoYXZpb3Vycy9tYXRlcmlhbCc7XG5cbkBtZGxCZWhhdmlvdXIoJ2JhcicpXG5jbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjb21wbGV0ZWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGluZGV0ZXJtaW5hdGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgICAgIGluZGV0ZXJtaW5kYXRlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGNvbnN0IGJhciA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5iYXIpO1xuICAgICAgICBpZiAoYmFyKSB7XG4gICAgICAgICAgICBiYXIuTWF0ZXJpYWxQcm9ncmVzcy5zZXRQcm9ncmVzcyhjb21wbGV0ZWQpO1xuICAgICAgICAgICAgYmFyLk1hdGVyaWFsUHJvZ3Jlc3Muc2V0QnVmZmVyKDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHsgY29tcGxldGVkIH0pIHtcbiAgICAgICAgaWYgKDAgPiBjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDEwMCA8IGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgY29tcGxldGVkID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJhciA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5iYXIpO1xuICAgICAgICBpZiAoYmFyKSB7XG4gICAgICAgICAgICBiYXIuTWF0ZXJpYWxQcm9ncmVzcy5zZXRQcm9ncmVzcyhjb21wbGV0ZWQpO1xuICAgICAgICAgICAgYmFyLk1hdGVyaWFsUHJvZ3Jlc3Muc2V0QnVmZmVyKDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVuZGVyQ2xhc3NOYW1lKCkge1xuICAgICAgICBjb25zdCB7IGluZGV0ZXJtaW5hdGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChpbmRldGVybWluYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuICdtZGwtcHJvZ3Jlc3MgbWRsLWpzLXByb2dyZXNzIG1kbC1wcm9ncmVzc19faW5kZXRlcm1pbmF0ZSdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnbWRsLXByb2dyZXNzIG1kbC1qcy1wcm9ncmVzcydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNvbXBsZXRlZCA9ICt0aGlzLnByb3BzLmNvbXBsZXRlZDtcbiAgICAgICAgaWYgKDAgPiBjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDEwMCA8IGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgY29tcGxldGVkID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5fcmVuZGVyQ2xhc3NOYW1lKCl9IGRhdGEtZm9jdXM9J3Byb2dyZXNzLWJhcicgcmVmPSdiYXInIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Qcm9ncmVzc0Jhci5kaXNwbGF5TmFtZSA9ICdQcm9ncmVzc0Jhcic7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIl19