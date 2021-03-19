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

var _translation = require('sagess-core/translation');

var _translation2 = _interopRequireDefault(_translation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutocompleteSelectField = (_temp2 = _class = function (_Component) {
    _inherits(AutocompleteSelectField, _Component);

    function AutocompleteSelectField() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AutocompleteSelectField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutocompleteSelectField.__proto__ || Object.getPrototypeOf(AutocompleteSelectField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.getValue = function () {
            var _this$props = _this.props,
                isEdit = _this$props.isEdit,
                value = _this$props.value;

            if (isEdit) {
                return _this.refs.autocomplete.getValue();
            } else {
                return value;
            }
        }, _this._handleAutocompleteBadInput = function (value) {
            _this.setState({ customError: _translation2.default.translate('autocomplete.error.badInput', { value: value }) });
        }, _this._handleAutocompleteChange = function (value) {
            var onChange = _this.props.onChange;

            _this.setState({ customError: null }, function () {
                if (onChange) onChange(value);
            });
        }, _this._renderEdit = function () {
            var customError = _this.state.customError;

            return _react2.default.createElement(_edit2.default, Object.assign({
                customError: customError,
                onBadInput: _this._handleAutocompleteBadInput,
                onChange: _this._handleAutocompleteChange,
                ref: 'autocomplete'
            }, _this.props));
        }, _this._renderConsult = function () {
            return _react2.default.createElement(_consult2.default, _this.props);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AutocompleteSelectField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref2) {
            var error = _ref2.error;

            this.setState({ customError: error });
        }
    }, {
        key: 'render',
        value: function render() {
            var isEdit = this.props.isEdit;

            return isEdit ? this._renderEdit() : this._renderConsult();
        }
    }]);

    return AutocompleteSelectField;
}(_react.Component), _class.propTypes = {
    isEdit: _react.PropTypes.bool.isRequired,
    keyResolver: _react.PropTypes.func.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    querySearcher: _react.PropTypes.func.isRequired
}, _temp2);
exports.default = AutocompleteSelectField;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlU2VsZWN0RmllbGQiLCJzdGF0ZSIsImdldFZhbHVlIiwicHJvcHMiLCJpc0VkaXQiLCJ2YWx1ZSIsInJlZnMiLCJhdXRvY29tcGxldGUiLCJfaGFuZGxlQXV0b2NvbXBsZXRlQmFkSW5wdXQiLCJzZXRTdGF0ZSIsImN1c3RvbUVycm9yIiwidHJhbnNsYXRpb24iLCJ0cmFuc2xhdGUiLCJfaGFuZGxlQXV0b2NvbXBsZXRlQ2hhbmdlIiwib25DaGFuZ2UiLCJfcmVuZGVyRWRpdCIsIl9yZW5kZXJDb25zdWx0IiwiZXJyb3IiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImtleVJlc29sdmVyIiwiZnVuYyIsInF1ZXJ5U2VhcmNoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLHVCOzs7Ozs7Ozs7Ozs7Ozs0TkFFRkMsSyxHQUFRLEUsUUFhUkMsUSxHQUFXLFlBQU07QUFBQSw4QkFDYSxNQUFLQyxLQURsQjtBQUFBLGdCQUNMQyxNQURLLGVBQ0xBLE1BREs7QUFBQSxnQkFDR0MsS0FESCxlQUNHQSxLQURIOztBQUViLGdCQUFJRCxNQUFKLEVBQVk7QUFDUix1QkFBTyxNQUFLRSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJMLFFBQXZCLEVBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFBT0csS0FBUDtBQUNIO0FBQ0osUyxRQUVERywyQixHQUE4QixpQkFBUztBQUNuQyxrQkFBS0MsUUFBTCxDQUFjLEVBQUVDLGFBQWFDLHNCQUFZQyxTQUFaLENBQXNCLDZCQUF0QixFQUFxRCxFQUFFUCxZQUFGLEVBQXJELENBQWYsRUFBZDtBQUNILFMsUUFFRFEseUIsR0FBNEIsaUJBQVM7QUFBQSxnQkFDekJDLFFBRHlCLEdBQ1osTUFBS1gsS0FETyxDQUN6QlcsUUFEeUI7O0FBRWpDLGtCQUFLTCxRQUFMLENBQWMsRUFBRUMsYUFBYSxJQUFmLEVBQWQsRUFBcUMsWUFBTTtBQUN2QyxvQkFBSUksUUFBSixFQUFjQSxTQUFTVCxLQUFUO0FBQ2pCLGFBRkQ7QUFHSCxTLFFBRURVLFcsR0FBYyxZQUFNO0FBQUEsZ0JBQ1JMLFdBRFEsR0FDUSxNQUFLVCxLQURiLENBQ1JTLFdBRFE7O0FBRWhCLG1CQUNJLDhCQUFDLGNBQUQ7QUFDSSw2QkFBYUEsV0FEakI7QUFFSSw0QkFBWSxNQUFLRiwyQkFGckI7QUFHSSwwQkFBVSxNQUFLSyx5QkFIbkI7QUFJSSxxQkFBSTtBQUpSLGVBS1EsTUFBS1YsS0FMYixFQURKO0FBU0gsUyxRQUVEYSxjLEdBQWlCLFlBQU07QUFDbkIsbUJBQ0ksOEJBQUMsaUJBQUQsRUFDUSxNQUFLYixLQURiLENBREo7QUFLSCxTOzs7Ozt5REEzQ29DO0FBQUEsZ0JBQVRjLEtBQVMsU0FBVEEsS0FBUzs7QUFDakMsaUJBQUtSLFFBQUwsQ0FBYyxFQUFFQyxhQUFhTyxLQUFmLEVBQWQ7QUFDSDs7O2lDQTJDUTtBQUFBLGdCQUNHYixNQURILEdBQ2MsS0FBS0QsS0FEbkIsQ0FDR0MsTUFESDs7QUFFTCxtQkFBT0EsU0FBUyxLQUFLVyxXQUFMLEVBQVQsR0FBOEIsS0FBS0MsY0FBTCxFQUFyQztBQUNIOzs7O0VBM0RpQ0UsZ0IsVUFJM0JDLFMsR0FBWTtBQUNmZixZQUFRZ0IsaUJBQVVDLElBQVYsQ0FBZUMsVUFEUjtBQUVmQyxpQkFBYUgsaUJBQVVJLElBQVYsQ0FBZUYsVUFGYjtBQUdmUixjQUFVTSxpQkFBVUksSUFBVixDQUFlRixVQUhWO0FBSWZHLG1CQUFlTCxpQkFBVUksSUFBVixDQUFlRjtBQUpmLEM7a0JBMERSdEIsdUIiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdXRvY29tcGxldGVTZWxlY3RFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgQXV0b2NvbXBsZXRlU2VsZWN0Q29uc3VsdCBmcm9tICcuL2NvbnN1bHQnO1xuaW1wb3J0IHRyYW5zbGF0aW9uIGZyb20gJ3NhZ2Vzcy1jb3JlL3RyYW5zbGF0aW9uJztcblxuY2xhc3MgQXV0b2NvbXBsZXRlU2VsZWN0RmllbGQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7fTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGlzRWRpdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAga2V5UmVzb2x2ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBxdWVyeVNlYXJjaGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyBlcnJvciB9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21FcnJvcjogZXJyb3IgfSk7XG4gICAgfVxuXG4gICAgZ2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaXNFZGl0LCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGlzRWRpdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5hdXRvY29tcGxldGUuZ2V0VmFsdWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBfaGFuZGxlQXV0b2NvbXBsZXRlQmFkSW5wdXQgPSB2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21FcnJvcjogdHJhbnNsYXRpb24udHJhbnNsYXRlKCdhdXRvY29tcGxldGUuZXJyb3IuYmFkSW5wdXQnLCB7IHZhbHVlIH0pIH0pXG4gICAgfTtcblxuICAgIF9oYW5kbGVBdXRvY29tcGxldGVDaGFuZ2UgPSB2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXN0b21FcnJvcjogbnVsbCB9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAob25DaGFuZ2UpIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9yZW5kZXJFZGl0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1c3RvbUVycm9yIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVNlbGVjdEVkaXRcbiAgICAgICAgICAgICAgICBjdXN0b21FcnJvcj17Y3VzdG9tRXJyb3J9XG4gICAgICAgICAgICAgICAgb25CYWRJbnB1dD17dGhpcy5faGFuZGxlQXV0b2NvbXBsZXRlQmFkSW5wdXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUF1dG9jb21wbGV0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICByZWY9J2F1dG9jb21wbGV0ZSdcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIF9yZW5kZXJDb25zdWx0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVNlbGVjdENvbnN1bHRcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc0VkaXQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBpc0VkaXQgPyB0aGlzLl9yZW5kZXJFZGl0KCkgOiB0aGlzLl9yZW5kZXJDb25zdWx0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGVTZWxlY3RGaWVsZDtcbiJdfQ==