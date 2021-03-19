'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentBase = require('../../../behaviours/component-base');

var _componentBase2 = _interopRequireDefault(_componentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutocompleteSelectConsult = (0, _componentBase2.default)(_class = function (_Component) {
    _inherits(AutocompleteSelectConsult, _Component);

    function AutocompleteSelectConsult() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AutocompleteSelectConsult);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutocompleteSelectConsult.__proto__ || Object.getPrototypeOf(AutocompleteSelectConsult)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AutocompleteSelectConsult, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._callKeyResolver(this.props.value);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref2) {
            var value = _ref2.value;

            if (value !== this.props.value) {
                this._callKeyResolver(value);
            }
        }
    }, {
        key: '_callKeyResolver',
        value: function _callKeyResolver(value) {
            var _this2 = this;

            var keyResolver = this.props.keyResolver;

            if (keyResolver && value !== undefined && value !== null) {
                keyResolver(value).then(function (label) {
                    _this2.setState({ resolvedLabel: label });
                }).catch(function (err) {
                    console.error(err.message);
                });
            } else {
                this.setState({ resolvedLabel: '' });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                label = _props.label,
                name = _props.name,
                type = _props.type,
                value = _props.value;
            var _state$resolvedLabel = this.state.resolvedLabel,
                resolvedLabel = _state$resolvedLabel === undefined ? value : _state$resolvedLabel;


            return _react2.default.createElement(
                'div',
                {
                    label: label,
                    name: name,
                    type: type
                },
                this.i18n(resolvedLabel)
            );
        }
    }]);

    return AutocompleteSelectConsult;
}(_react.Component)) || _class;

exports.default = AutocompleteSelectConsult;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlU2VsZWN0Q29uc3VsdCIsIkNvbXBvbmVudEJhc2VCZWhhdmlvdXIiLCJzdGF0ZSIsIl9jYWxsS2V5UmVzb2x2ZXIiLCJwcm9wcyIsInZhbHVlIiwia2V5UmVzb2x2ZXIiLCJ1bmRlZmluZWQiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXNvbHZlZExhYmVsIiwibGFiZWwiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImVyciIsIm1lc3NhZ2UiLCJuYW1lIiwidHlwZSIsImkxOG4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHTUEseUIsT0FETEMsdUI7Ozs7Ozs7Ozs7Ozs7O2dPQUdHQyxLLEdBQVEsRTs7Ozs7NENBRVk7QUFDaEIsaUJBQUtDLGdCQUFMLENBQXNCLEtBQUtDLEtBQUwsQ0FBV0MsS0FBakM7QUFDSDs7O3lEQUVvQztBQUFBLGdCQUFUQSxLQUFTLFNBQVRBLEtBQVM7O0FBQ2pDLGdCQUFJQSxVQUFVLEtBQUtELEtBQUwsQ0FBV0MsS0FBekIsRUFBZ0M7QUFDNUIscUJBQUtGLGdCQUFMLENBQXNCRSxLQUF0QjtBQUNIO0FBQ0o7Ozt5Q0FFZ0JBLEssRUFBTztBQUFBOztBQUFBLGdCQUNaQyxXQURZLEdBQ0ksS0FBS0YsS0FEVCxDQUNaRSxXQURZOztBQUVwQixnQkFBSUEsZUFBZUQsVUFBVUUsU0FBekIsSUFBc0NGLFVBQVUsSUFBcEQsRUFBMEQ7QUFDdERDLDRCQUFZRCxLQUFaLEVBQW1CRyxJQUFuQixDQUF3QixpQkFBUztBQUM3QiwyQkFBS0MsUUFBTCxDQUFjLEVBQUVDLGVBQWVDLEtBQWpCLEVBQWQ7QUFDSCxpQkFGRCxFQUVHQyxLQUZILENBRVMsZUFBTztBQUFFQyw0QkFBUUMsS0FBUixDQUFjQyxJQUFJQyxPQUFsQjtBQUE2QixpQkFGL0M7QUFHSCxhQUpELE1BSU87QUFDSCxxQkFBS1AsUUFBTCxDQUFjLEVBQUVDLGVBQWUsRUFBakIsRUFBZDtBQUNIO0FBQ0o7OztpQ0FFUTtBQUFBLHlCQUNnQyxLQUFLTixLQURyQztBQUFBLGdCQUNHTyxLQURILFVBQ0dBLEtBREg7QUFBQSxnQkFDVU0sSUFEVixVQUNVQSxJQURWO0FBQUEsZ0JBQ2dCQyxJQURoQixVQUNnQkEsSUFEaEI7QUFBQSxnQkFDc0JiLEtBRHRCLFVBQ3NCQSxLQUR0QjtBQUFBLHVDQUU2QixLQUFLSCxLQUZsQyxDQUVHUSxhQUZIO0FBQUEsZ0JBRUdBLGFBRkgsd0NBRW1CTCxLQUZuQjs7O0FBSUwsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksMkJBQU9NLEtBRFg7QUFFSSwwQkFBTU0sSUFGVjtBQUdJLDBCQUFNQztBQUhWO0FBS0sscUJBQUtDLElBQUwsQ0FBVVQsYUFBVjtBQUxMLGFBREo7QUFTSDs7OztFQXRDbUNVLGdCOztrQkF5Q3pCcEIseUIiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb21wb25lbnRCYXNlQmVoYXZpb3VyIGZyb20gJy4uLy4uLy4uL2JlaGF2aW91cnMvY29tcG9uZW50LWJhc2UnO1xyXG5cclxuQENvbXBvbmVudEJhc2VCZWhhdmlvdXJcclxuY2xhc3MgQXV0b2NvbXBsZXRlU2VsZWN0Q29uc3VsdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7fTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9jYWxsS2V5UmVzb2x2ZXIodGhpcy5wcm9wcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IHZhbHVlIH0pIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbEtleVJlc29sdmVyKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbGxLZXlSZXNvbHZlcih2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHsga2V5UmVzb2x2ZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKGtleVJlc29sdmVyICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAga2V5UmVzb2x2ZXIodmFsdWUpLnRoZW4obGFiZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc29sdmVkTGFiZWw6IGxhYmVsIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4geyBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTsgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc29sdmVkTGFiZWw6ICcnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgbmFtZSwgdHlwZSwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgeyByZXNvbHZlZExhYmVsID0gdmFsdWUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5pMThuKHJlc29sdmVkTGFiZWwpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGVTZWxlY3RDb25zdWx0O1xyXG4iXX0=