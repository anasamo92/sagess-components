'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _edit = require('./edit');

var _edit2 = _interopRequireDefault(_edit);

var _consult = require('./consult');

var _consult2 = _interopRequireDefault(_consult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutocompleteTextField = (_temp2 = _class = function (_Component) {
    _inherits(AutocompleteTextField, _Component);

    function AutocompleteTextField() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AutocompleteTextField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutocompleteTextField.__proto__ || Object.getPrototypeOf(AutocompleteTextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.getValue = function () {
            var _this$props = _this.props,
                isEdit = _this$props.isEdit,
                value = _this$props.value;

            if (isEdit) {
                return _this.refs.autocomplete.getValue();
            } else {
                return value;
            }
        }, _this._renderEdit = function () {
            return _react2.default.createElement(_edit2.default, Object.assign({
                ref: 'autocomplete'
            }, _this.props));
        }, _this._renderConsult = function () {
            return _react2.default.createElement(_consult2.default, _this.props);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AutocompleteTextField, [{
        key: 'render',
        value: function render() {
            var isEdit = this.props.isEdit;

            return isEdit ? this._renderEdit() : this._renderConsult();
        }
    }]);

    return AutocompleteTextField;
}(_react.Component), _class.propTypes = {
    isEdit: _react.PropTypes.bool.isRequired,
    onChange: _react.PropTypes.func,
    querySearcher: _react.PropTypes.func.isRequired
}, _temp2);
exports.default = AutocompleteTextField;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlVGV4dEZpZWxkIiwic3RhdGUiLCJnZXRWYWx1ZSIsInByb3BzIiwiaXNFZGl0IiwidmFsdWUiLCJyZWZzIiwiYXV0b2NvbXBsZXRlIiwiX3JlbmRlckVkaXQiLCJfcmVuZGVyQ29uc3VsdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwib25DaGFuZ2UiLCJmdW5jIiwicXVlcnlTZWFyY2hlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLHFCOzs7Ozs7Ozs7Ozs7Ozt3TkFFRkMsSyxHQUFRLEUsUUFRUkMsUSxHQUFXLFlBQU07QUFBQSw4QkFDYSxNQUFLQyxLQURsQjtBQUFBLGdCQUNMQyxNQURLLGVBQ0xBLE1BREs7QUFBQSxnQkFDR0MsS0FESCxlQUNHQSxLQURIOztBQUViLGdCQUFJRCxNQUFKLEVBQVk7QUFDUix1QkFBTyxNQUFLRSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJMLFFBQXZCLEVBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFBT0csS0FBUDtBQUNIO0FBQ0osUyxRQUVERyxXLEdBQWMsWUFBTTtBQUNoQixtQkFDSSw4QkFBQyxjQUFEO0FBQ0kscUJBQUk7QUFEUixlQUVRLE1BQUtMLEtBRmIsRUFESjtBQU1ILFMsUUFFRE0sYyxHQUFpQixZQUFNO0FBQ25CLG1CQUNJLDhCQUFDLGlCQUFELEVBQ1EsTUFBS04sS0FEYixDQURKO0FBS0gsUzs7Ozs7aUNBRVE7QUFBQSxnQkFDR0MsTUFESCxHQUNjLEtBQUtELEtBRG5CLENBQ0dDLE1BREg7O0FBRUwsbUJBQU9BLFNBQVMsS0FBS0ksV0FBTCxFQUFULEdBQThCLEtBQUtDLGNBQUwsRUFBckM7QUFDSDs7OztFQXZDK0JDLGdCLFVBSXpCQyxTLEdBQVk7QUFDZlAsWUFBUVEsaUJBQVVDLElBQVYsQ0FBZUMsVUFEUjtBQUVmQyxjQUFVSCxpQkFBVUksSUFGTDtBQUdmQyxtQkFBZUwsaUJBQVVJLElBQVYsQ0FBZUY7QUFIZixDO2tCQXNDUmQscUIiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF1dG9jb21wbGV0ZVRleHRFZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGVUZXh0Q29uc3VsdCBmcm9tICcuL2NvbnN1bHQnO1xyXG5cclxuY2xhc3MgQXV0b2NvbXBsZXRlVGV4dEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHt9O1xyXG5cclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgaXNFZGl0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBxdWVyeVNlYXJjaGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIGdldFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXNFZGl0LCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoaXNFZGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnMuYXV0b2NvbXBsZXRlLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX3JlbmRlckVkaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVRleHRFZGl0XHJcbiAgICAgICAgICAgICAgICByZWY9J2F1dG9jb21wbGV0ZSdcclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9yZW5kZXJDb25zdWx0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVUZXh0Q29uc3VsdFxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNFZGl0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBpc0VkaXQgPyB0aGlzLl9yZW5kZXJFZGl0KCkgOiB0aGlzLl9yZW5kZXJDb25zdWx0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dG9jb21wbGV0ZVRleHRGaWVsZDtcclxuIl19