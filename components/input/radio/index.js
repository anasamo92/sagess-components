'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('../../../behaviours/translation');

var _translation2 = _interopRequireDefault(_translation);

var _grid = require('../../../behaviours/grid');

var _grid2 = _interopRequireDefault(_grid);

var _material = require('../../../behaviours/material');

var _material2 = _interopRequireDefault(_material);

var _filterHtmlAttributes = require('../../../utils/filter-html-attributes');

var _filterHtmlAttributes2 = _interopRequireDefault(_filterHtmlAttributes);

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = (_dec = (0, _material2.default)('inputMdl'), (0, _translation2.default)(_class = _dec(_class = (0, _grid2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Radio, _Component);

    function Radio() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Radio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radio.__proto__ || Object.getPrototypeOf(Radio)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isChecked: (0, _isUndefined2.default)(_this.props.value) ? false : _this.props.value
        }, _this._onChange = function () {
            _this.setState({ isChecked: !_this.state.isChecked }, function () {
                if (_this.props.onChange) {
                    _this.props.onChange(_this.state.isChecked);
                }
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Radio, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            this.setState({ isChecked: newProps.value });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateCheckedClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.updateCheckedClass();
        }
    }, {
        key: 'updateCheckedClass',
        value: function updateCheckedClass() {
            var inputMdl = this.refs.inputMdl;
            var isChecked = this.state.isChecked;

            if (inputMdl) {
                var classList = inputMdl.classList;

                if (isChecked === true) classList.add('is-checked');
                if (isChecked === false) classList.remove('is-checked');
            }
        }

        /**
        * Executed actions on change event.
        * @param  {event} event
        */

    }, {
        key: 'getValue',


        /**
        * Get the value from the input in  the DOM.
        * @returns The DOM node value.
        */
        value: function getValue() {
            return this.state.isChecked;
        }

        /**
        * Render the Checkbox HTML.
        * @return {VirtualDOM} - The virtual DOM of the checkbox.
        */

    }, {
        key: 'render',
        value: function render() {
            var isChecked = this.state.isChecked;
            var label = this.props.label;

            var validInputProps = (0, _filterHtmlAttributes2.default)(this.props);

            validInputProps.onChange = this._onChange;
            validInputProps.checked = isChecked ? 'checked' : undefined;
            var inputProps = Object.assign({}, validInputProps);

            return _react2.default.createElement(
                'label',
                { className: 'mdl-radio mdl-js-radio mdl-js-ripple-effect', 'data-focus': 'input-radio', ref: 'inputMdl' },
                _react2.default.createElement('input', Object.assign({ className: 'mdl-radio__button', type: 'radio', ref: 'inputRadio' }, inputProps)),
                _react2.default.createElement(
                    'span',
                    { className: 'mdl-radio__label' },
                    this.i18n(label)
                )
            );
        }
    }]);

    return Radio;
}(_react.Component), _class2.defaultProps = {
    value: false
}, _class2.propTypes = {
    label: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string,
    value: _react.PropTypes.bool,
    onChange: _react.PropTypes.func
}, _temp2)) || _class) || _class) || _class);


Radio.displayName = 'InputRadio';

exports.default = Radio;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiUmFkaW8iLCJUcmFuc2xhdGlvbiIsIkdyaWRCZWhhdmlvdXIiLCJzdGF0ZSIsImlzQ2hlY2tlZCIsInByb3BzIiwidmFsdWUiLCJfb25DaGFuZ2UiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwibmV3UHJvcHMiLCJ1cGRhdGVDaGVja2VkQ2xhc3MiLCJpbnB1dE1kbCIsInJlZnMiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJsYWJlbCIsInZhbGlkSW5wdXRQcm9wcyIsImNoZWNrZWQiLCJ1bmRlZmluZWQiLCJpbnB1dFByb3BzIiwiaTE4biIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwiYm9vbCIsImZ1bmMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBS01BLEssV0FGTCx3QkFBa0IsVUFBbEIsQyxNQURBQyxxQiw2QkFFQUMsYzs7Ozs7Ozs7Ozs7Ozs7d0xBY0dDLEssR0FBUTtBQUNKQyx1QkFBVywyQkFBWSxNQUFLQyxLQUFMLENBQVdDLEtBQXZCLElBQWdDLEtBQWhDLEdBQXdDLE1BQUtELEtBQUwsQ0FBV0M7QUFEMUQsUyxRQThCUkMsUyxHQUFZLFlBQU07QUFDZCxrQkFBS0MsUUFBTCxDQUFjLEVBQUVKLFdBQVcsQ0FBQyxNQUFLRCxLQUFMLENBQVdDLFNBQXpCLEVBQWQsRUFBb0QsWUFBTTtBQUN0RCxvQkFBSSxNQUFLQyxLQUFMLENBQVdJLFFBQWYsRUFBeUI7QUFDckIsMEJBQUtKLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQixNQUFLTixLQUFMLENBQVdDLFNBQS9CO0FBQ0g7QUFDSixhQUpEO0FBS0gsUzs7Ozs7a0RBaEN5Qk0sUSxFQUFVO0FBQ2hDLGlCQUFLRixRQUFMLENBQWMsRUFBRUosV0FBV00sU0FBU0osS0FBdEIsRUFBZDtBQUNIOzs7NENBRW1CO0FBQ2hCLGlCQUFLSyxrQkFBTDtBQUNIOzs7NkNBRW9CO0FBQ2pCLGlCQUFLQSxrQkFBTDtBQUNIOzs7NkNBRW9CO0FBQUEsZ0JBQ1RDLFFBRFMsR0FDSSxLQUFLQyxJQURULENBQ1RELFFBRFM7QUFBQSxnQkFFVFIsU0FGUyxHQUVLLEtBQUtELEtBRlYsQ0FFVEMsU0FGUzs7QUFHakIsZ0JBQUlRLFFBQUosRUFBYztBQUFBLG9CQUNGRSxTQURFLEdBQ1lGLFFBRFosQ0FDRkUsU0FERTs7QUFFVixvQkFBSVYsY0FBYyxJQUFsQixFQUF3QlUsVUFBVUMsR0FBVixDQUFjLFlBQWQ7QUFDeEIsb0JBQUlYLGNBQWMsS0FBbEIsRUFBeUJVLFVBQVVFLE1BQVYsQ0FBaUIsWUFBakI7QUFDNUI7QUFDSjs7QUFFRDs7Ozs7Ozs7O0FBWUE7Ozs7bUNBSVc7QUFDUCxtQkFBTyxLQUFLYixLQUFMLENBQVdDLFNBQWxCO0FBQ0g7O0FBRUQ7Ozs7Ozs7aUNBSVM7QUFBQSxnQkFDR0EsU0FESCxHQUNpQixLQUFLRCxLQUR0QixDQUNHQyxTQURIO0FBQUEsZ0JBRUdhLEtBRkgsR0FFYSxLQUFLWixLQUZsQixDQUVHWSxLQUZIOztBQUdMLGdCQUFNQyxrQkFBa0Isb0NBQVksS0FBS2IsS0FBakIsQ0FBeEI7O0FBRUFhLDRCQUFnQlQsUUFBaEIsR0FBMkIsS0FBS0YsU0FBaEM7QUFDQVcsNEJBQWdCQyxPQUFoQixHQUEwQmYsWUFBWSxTQUFaLEdBQXdCZ0IsU0FBbEQ7QUFDQSxnQkFBTUMsK0JBQWtCSCxlQUFsQixDQUFOOztBQUVBLG1CQUNJO0FBQUE7QUFBQSxrQkFBTyxXQUFVLDZDQUFqQixFQUErRCxjQUFXLGFBQTFFLEVBQXdGLEtBQUksVUFBNUY7QUFDSSx1RUFBTyxXQUFVLG1CQUFqQixFQUFxQyxNQUFLLE9BQTFDLEVBQWtELEtBQUksWUFBdEQsSUFBdUVHLFVBQXZFLEVBREo7QUFFSTtBQUFBO0FBQUEsc0JBQU0sV0FBVSxrQkFBaEI7QUFBb0MseUJBQUtDLElBQUwsQ0FBVUwsS0FBVjtBQUFwQztBQUZKLGFBREo7QUFNSDs7OztFQTlFZU0sZ0IsV0FFVEMsWSxHQUFlO0FBQ2xCbEIsV0FBTztBQURXLEMsVUFJZm1CLFMsR0FBWTtBQUNmUixXQUFPUyxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVmQyxVQUFNSCxpQkFBVUMsTUFGRDtBQUdmckIsV0FBT29CLGlCQUFVSSxJQUhGO0FBSWZyQixjQUFVaUIsaUJBQVVLO0FBSkwsQzs7O0FBMkV2Qi9CLE1BQU1nQyxXQUFOLEdBQW9CLFlBQXBCOztrQkFFZWhDLEsiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2xhdGlvbiBmcm9tICcuLi8uLi8uLi9iZWhhdmlvdXJzL3RyYW5zbGF0aW9uJztcbmltcG9ydCBHcmlkQmVoYXZpb3VyIGZyb20gJy4uLy4uLy4uL2JlaGF2aW91cnMvZ3JpZCc7XG5pbXBvcnQgTWF0ZXJpYWxCZWhhdmlvdXIgZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3Vycy9tYXRlcmlhbCc7XG5pbXBvcnQgZmlsdGVyUHJvcHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmlsdGVyLWh0bWwtYXR0cmlidXRlcyc7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnbG9kYXNoL2xhbmcvaXNVbmRlZmluZWQnO1xuXG5AVHJhbnNsYXRpb25cbkBNYXRlcmlhbEJlaGF2aW91cignaW5wdXRNZGwnKVxuQEdyaWRCZWhhdmlvdXJcbmNsYXNzIFJhZGlvIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH07XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaXNDaGVja2VkOiBpc1VuZGVmaW5lZCh0aGlzLnByb3BzLnZhbHVlKSA/IGZhbHNlIDogdGhpcy5wcm9wcy52YWx1ZVxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0NoZWNrZWQ6IG5ld1Byb3BzLnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrZWRDbGFzcygpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGVja2VkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDaGVja2VkQ2xhc3MoKSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXRNZGwgfSA9IHRoaXMucmVmcztcbiAgICAgICAgY29uc3QgeyBpc0NoZWNrZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChpbnB1dE1kbCkge1xuICAgICAgICAgICAgY29uc3QgeyBjbGFzc0xpc3QgfSA9IGlucHV0TWRsO1xuICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCA9PT0gdHJ1ZSkgY2xhc3NMaXN0LmFkZCgnaXMtY2hlY2tlZCcpO1xuICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZCA9PT0gZmFsc2UpIGNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogRXhlY3V0ZWQgYWN0aW9ucyBvbiBjaGFuZ2UgZXZlbnQuXG4gICAgKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAgICAqL1xuICAgIF9vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ2hlY2tlZDogIXRoaXMuc3RhdGUuaXNDaGVja2VkIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmlzQ2hlY2tlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogR2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBpbnB1dCBpbiAgdGhlIERPTS5cbiAgICAqIEByZXR1cm5zIFRoZSBET00gbm9kZSB2YWx1ZS5cbiAgICAqL1xuICAgIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0NoZWNrZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIENoZWNrYm94IEhUTUwuXG4gICAgKiBAcmV0dXJuIHtWaXJ0dWFsRE9NfSAtIFRoZSB2aXJ0dWFsIERPTSBvZiB0aGUgY2hlY2tib3guXG4gICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNDaGVja2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IGxhYmVsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB2YWxpZElucHV0UHJvcHMgPSBmaWx0ZXJQcm9wcyh0aGlzLnByb3BzKTtcblxuICAgICAgICB2YWxpZElucHV0UHJvcHMub25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZTtcbiAgICAgICAgdmFsaWRJbnB1dFByb3BzLmNoZWNrZWQgPSBpc0NoZWNrZWQgPyAnY2hlY2tlZCcgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGlucHV0UHJvcHMgPSB7IC4uLnZhbGlkSW5wdXRQcm9wcyB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtZGwtcmFkaW8gbWRsLWpzLXJhZGlvIG1kbC1qcy1yaXBwbGUtZWZmZWN0JyBkYXRhLWZvY3VzPSdpbnB1dC1yYWRpbycgcmVmPSdpbnB1dE1kbCc+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nbWRsLXJhZGlvX19idXR0b24nIHR5cGU9J3JhZGlvJyByZWY9J2lucHV0UmFkaW8nIHsuLi5pbnB1dFByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWRsLXJhZGlvX19sYWJlbCc+e3RoaXMuaTE4bihsYWJlbCl9PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJhZGlvLmRpc3BsYXlOYW1lID0gJ0lucHV0UmFkaW8nO1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcbiJdfQ==