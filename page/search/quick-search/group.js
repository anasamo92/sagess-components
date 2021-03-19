'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; // libraires


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('../../../behaviours/translation');

var _translation2 = _interopRequireDefault(_translation);

var _number = require('sagess-core/definition/formatter/number');

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//web components

var propTypes = {
    count: _react.PropTypes.number.isRequired,
    groupKey: _react.PropTypes.string.isRequired
};

var defaultProps = {
    count: 0
};

var QuickSearchGroup = (0, _translation2.default)(_class = function (_Component) {
    _inherits(QuickSearchGroup, _Component);

    function QuickSearchGroup() {
        _classCallCheck(this, QuickSearchGroup);

        return _possibleConstructorReturn(this, (QuickSearchGroup.__proto__ || Object.getPrototypeOf(QuickSearchGroup)).apply(this, arguments));
    }

    _createClass(QuickSearchGroup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                count = _props.count,
                groupKey = _props.groupKey,
                showAllHandler = _props.showAllHandler;

            return _react2.default.createElement(
                'div',
                { 'data-focus': 'group-container' },
                _react2.default.createElement(
                    'h3',
                    null,
                    _react2.default.createElement(
                        'span',
                        null,
                        groupKey
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        _number2.default.format(count)
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.i18n('search.mostRelevant')
                ),
                _react2.default.createElement(
                    'div',
                    { 'data-focus': 'group-container-results' },
                    children
                )
            );
        }
    }]);

    return QuickSearchGroup;
}(_react.Component)) || _class;

QuickSearchGroup.propTypes = propTypes;
QuickSearchGroup.defaultProps = defaultProps;
QuickSearchGroup.displayName = 'QuickSearchGroup';

exports.default = QuickSearchGroup;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiY291bnQiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZ3JvdXBLZXkiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJRdWlja1NlYXJjaEdyb3VwIiwiVHJhbnNsYXRpb24iLCJwcm9wcyIsImNoaWxkcmVuIiwic2hvd0FsbEhhbmRsZXIiLCJmb3JtYXR0ZXIiLCJmb3JtYXQiLCJpMThuIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1lBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUEsSUFBTUEsWUFBWTtBQUNkQyxXQUFPQyxpQkFBVUMsTUFBVixDQUFpQkMsVUFEVjtBQUVkQyxjQUFVSCxpQkFBVUksTUFBVixDQUFpQkY7QUFGYixDQUFsQjs7QUFLQSxJQUFNRyxlQUFlO0FBQ2pCTixXQUFPO0FBRFUsQ0FBckI7O0lBS01PLGdCLE9BRExDLHFCOzs7Ozs7Ozs7OztpQ0FFWTtBQUFBLHlCQUNpRCxLQUFLQyxLQUR0RDtBQUFBLGdCQUNHQyxRQURILFVBQ0dBLFFBREg7QUFBQSxnQkFDYVYsS0FEYixVQUNhQSxLQURiO0FBQUEsZ0JBQ29CSSxRQURwQixVQUNvQkEsUUFEcEI7QUFBQSxnQkFDOEJPLGNBRDlCLFVBQzhCQSxjQUQ5Qjs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssY0FBVyxpQkFBaEI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBT1A7QUFBUCxxQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFPUSx5Q0FBVUMsTUFBVixDQUFpQmIsS0FBakI7QUFBUDtBQUZKLGlCQURKO0FBS0k7QUFBQTtBQUFBO0FBQUkseUJBQUtjLElBQUwsQ0FBVSxxQkFBVjtBQUFKLGlCQUxKO0FBTUk7QUFBQTtBQUFBLHNCQUFLLGNBQVcseUJBQWhCO0FBQ0tKO0FBREw7QUFOSixhQURKO0FBWUg7Ozs7RUFmMEJLLGdCOztBQWtCL0JSLGlCQUFpQlIsU0FBakIsR0FBNkJBLFNBQTdCO0FBQ0FRLGlCQUFpQkQsWUFBakIsR0FBZ0NBLFlBQWhDO0FBQ0FDLGlCQUFpQlMsV0FBakIsR0FBK0Isa0JBQS9COztrQkFFZVQsZ0IiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnJhaXJlc1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYW5zbGF0aW9uIGZyb20gJy4uLy4uLy4uL2JlaGF2aW91cnMvdHJhbnNsYXRpb24nO1xuaW1wb3J0IGZvcm1hdHRlciBmcm9tICdzYWdlc3MtY29yZS9kZWZpbml0aW9uL2Zvcm1hdHRlci9udW1iZXInO1xuXG4vL3dlYiBjb21wb25lbnRzXG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBjb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGdyb3VwS2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb3VudDogMFxufTtcblxuQFRyYW5zbGF0aW9uXG5jbGFzcyBRdWlja1NlYXJjaEdyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNvdW50LCBncm91cEtleSwgc2hvd0FsbEhhbmRsZXIgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nZ3JvdXAtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntncm91cEtleX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntmb3JtYXR0ZXIuZm9ybWF0KGNvdW50KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5pMThuKCdzZWFyY2gubW9zdFJlbGV2YW50Jyl9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nZ3JvdXAtY29udGFpbmVyLXJlc3VsdHMnPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblF1aWNrU2VhcmNoR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUXVpY2tTZWFyY2hHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5RdWlja1NlYXJjaEdyb3VwLmRpc3BsYXlOYW1lID0gJ1F1aWNrU2VhcmNoR3JvdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBRdWlja1NlYXJjaEdyb3VwO1xuIl19