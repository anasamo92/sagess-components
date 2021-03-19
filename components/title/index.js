'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; // Dependencies


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _uniqueId = require('lodash/utility/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = (_temp2 = _class = function (_Component) {
    _inherits(Title, _Component);

    function Title() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Title);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Title.__proto__ || Object.getPrototypeOf(Title)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            spyId: (0, _uniqueId2.default)('title_')
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Title, [{
        key: 'render',
        value: function render() {
            var spyId = this.state.spyId;
            var _props = this.props,
                id = _props.id,
                label = _props.label;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    { 'data-spy': spyId, id: id },
                    label
                )
            );
        }
    }]);

    return Title;
}(_react.Component), _class.propTypes = {
    id: _react.PropTypes.string,
    label: _react.PropTypes.string
}, _temp2);
exports.default = Title;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiVGl0bGUiLCJzdGF0ZSIsInNweUlkIiwicHJvcHMiLCJpZCIsImxhYmVsIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFPRkMsSyxHQUFRO0FBQ0pDLG1CQUFPLHdCQUFTLFFBQVQ7QUFESCxTOzs7OztpQ0FJQztBQUFBLGdCQUNHQSxLQURILEdBQ2EsS0FBS0QsS0FEbEIsQ0FDR0MsS0FESDtBQUFBLHlCQUVpQixLQUFLQyxLQUZ0QjtBQUFBLGdCQUVHQyxFQUZILFVBRUdBLEVBRkg7QUFBQSxnQkFFT0MsS0FGUCxVQUVPQSxLQUZQOzs7QUFJTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQUksWUFBVUgsS0FBZCxFQUFxQixJQUFJRSxFQUF6QjtBQUE4QkM7QUFBOUI7QUFESixhQURKO0FBS0g7Ozs7RUFwQmVDLGdCLFVBRVRDLFMsR0FBWTtBQUNmSCxRQUFJSSxpQkFBVUMsTUFEQztBQUVmSixXQUFPRyxpQkFBVUM7QUFGRixDO2tCQXFCUlQsSyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgdHlwZSBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJ2xvZGFzaC91dGlsaXR5L3VuaXF1ZUlkJztcblxuY2xhc3MgVGl0bGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzcHlJZDogdW5pcXVlSWQoJ3RpdGxlXycpXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzcHlJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBpZCwgbGFiZWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGRhdGEtc3B5PXtzcHlJZH0gaWQ9e2lkfT57bGFiZWx9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iXX0=