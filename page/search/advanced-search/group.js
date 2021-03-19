'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;
//web components


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('../../../behaviours/translation');

var _translation2 = _interopRequireDefault(_translation);

var _number = require('sagess-core/definition/formatter/number');

var _number2 = _interopRequireDefault(_number);

var _button = require('../../../components/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    canShowMore: _react.PropTypes.bool.isRequired,
    count: _react.PropTypes.number.isRequired,
    groupKey: _react.PropTypes.string.isRequired,
    showAllHandler: _react.PropTypes.func.isRequired,
    showMoreHandler: _react.PropTypes.func.isRequired
};

var defaultProps = {
    count: 0
};

var AdvancedSearchGroup = (0, _translation2.default)(_class = function (_Component) {
    _inherits(AdvancedSearchGroup, _Component);

    function AdvancedSearchGroup() {
        _classCallCheck(this, AdvancedSearchGroup);

        return _possibleConstructorReturn(this, (AdvancedSearchGroup.__proto__ || Object.getPrototypeOf(AdvancedSearchGroup)).apply(this, arguments));
    }

    _createClass(AdvancedSearchGroup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                canShowMore = _props.canShowMore,
                count = _props.count,
                children = _props.children,
                groupKey = _props.groupKey,
                showAllHandler = _props.showAllHandler,
                showMoreHandler = _props.showMoreHandler;

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
                ),
                _react2.default.createElement(
                    'div',
                    { 'data-focus': 'group-container-actions' },
                    _react2.default.createElement(
                        'div',
                        { 'data-focus': 'group-container-actions__left' },
                        canShowMore && _react2.default.createElement(_button2.default, { handleOnClick: showMoreHandler, label: this.i18n('search.show.more') })
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'data-focus': 'group-container-actions__right' },
                        _react2.default.createElement(_button2.default, { shape: null, color: 'accent', handleOnClick: function handleOnClick() {
                                showAllHandler(groupKey);
                            }, label: this.i18n('search.show.all') })
                    )
                )
            );
        }
    }]);

    return AdvancedSearchGroup;
}(_react.Component)) || _class;

AdvancedSearchGroup.propTypes = propTypes;
AdvancedSearchGroup.defaultProps = defaultProps;
AdvancedSearchGroup.displayName = 'AdvancedSearchGroup';

exports.default = AdvancedSearchGroup;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiY2FuU2hvd01vcmUiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImNvdW50IiwibnVtYmVyIiwiZ3JvdXBLZXkiLCJzdHJpbmciLCJzaG93QWxsSGFuZGxlciIsImZ1bmMiLCJzaG93TW9yZUhhbmRsZXIiLCJkZWZhdWx0UHJvcHMiLCJBZHZhbmNlZFNlYXJjaEdyb3VwIiwiVHJhbnNsYXRpb24iLCJwcm9wcyIsImNoaWxkcmVuIiwiZm9ybWF0dGVyIiwiZm9ybWF0IiwiaTE4biIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQTs7O0FBSEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDZEMsaUJBQWFDLGlCQUFVQyxJQUFWLENBQWVDLFVBRGQ7QUFFZEMsV0FBT0gsaUJBQVVJLE1BQVYsQ0FBaUJGLFVBRlY7QUFHZEcsY0FBVUwsaUJBQVVNLE1BQVYsQ0FBaUJKLFVBSGI7QUFJZEssb0JBQWdCUCxpQkFBVVEsSUFBVixDQUFlTixVQUpqQjtBQUtkTyxxQkFBaUJULGlCQUFVUSxJQUFWLENBQWVOO0FBTGxCLENBQWxCOztBQVFBLElBQU1RLGVBQWU7QUFDakJQLFdBQU87QUFEVSxDQUFyQjs7SUFLTVEsbUIsT0FETEMscUI7Ozs7Ozs7Ozs7O2lDQUdZO0FBQUEseUJBQytFLEtBQUtDLEtBRHBGO0FBQUEsZ0JBQ0dkLFdBREgsVUFDR0EsV0FESDtBQUFBLGdCQUNnQkksS0FEaEIsVUFDZ0JBLEtBRGhCO0FBQUEsZ0JBQ3VCVyxRQUR2QixVQUN1QkEsUUFEdkI7QUFBQSxnQkFDaUNULFFBRGpDLFVBQ2lDQSxRQURqQztBQUFBLGdCQUMyQ0UsY0FEM0MsVUFDMkNBLGNBRDNDO0FBQUEsZ0JBQzJERSxlQUQzRCxVQUMyREEsZUFEM0Q7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLGNBQVcsaUJBQWhCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQU9KO0FBQVAscUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBT1UseUNBQVVDLE1BQVYsQ0FBaUJiLEtBQWpCO0FBQVA7QUFGSixpQkFESjtBQUtJO0FBQUE7QUFBQTtBQUFJLHlCQUFLYyxJQUFMLENBQVUscUJBQVY7QUFBSixpQkFMSjtBQU1JO0FBQUE7QUFBQSxzQkFBSyxjQUFXLHlCQUFoQjtBQUNLSDtBQURMLGlCQU5KO0FBU0k7QUFBQTtBQUFBLHNCQUFLLGNBQVcseUJBQWhCO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLGNBQVcsK0JBQWhCO0FBQ0tmLHVDQUNHLDhCQUFDLGdCQUFELElBQVEsZUFBZVUsZUFBdkIsRUFBd0MsT0FBTyxLQUFLUSxJQUFMLENBQVUsa0JBQVYsQ0FBL0M7QUFGUixxQkFESjtBQU1JO0FBQUE7QUFBQSwwQkFBSyxjQUFXLGdDQUFoQjtBQUNJLHNEQUFDLGdCQUFELElBQVEsT0FBTyxJQUFmLEVBQXFCLE9BQU0sUUFBM0IsRUFBb0MsZUFBZSx5QkFBTTtBQUFFViwrQ0FBZUYsUUFBZjtBQUEyQiw2QkFBdEYsRUFBd0YsT0FBTyxLQUFLWSxJQUFMLENBQVUsaUJBQVYsQ0FBL0Y7QUFESjtBQU5KO0FBVEosYUFESjtBQXNCSDs7OztFQTFCNkJDLGdCOztBQTZCbENQLG9CQUFvQmIsU0FBcEIsR0FBZ0NBLFNBQWhDO0FBQ0FhLG9CQUFvQkQsWUFBcEIsR0FBbUNBLFlBQW5DO0FBQ0FDLG9CQUFvQlEsV0FBcEIsR0FBa0MscUJBQWxDOztrQkFFZVIsbUIiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2xhdGlvbiBmcm9tICcuLi8uLi8uLi9iZWhhdmlvdXJzL3RyYW5zbGF0aW9uJztcbmltcG9ydCBmb3JtYXR0ZXIgZnJvbSAnc2FnZXNzLWNvcmUvZGVmaW5pdGlvbi9mb3JtYXR0ZXIvbnVtYmVyJztcbi8vd2ViIGNvbXBvbmVudHNcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24nO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgY2FuU2hvd01vcmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBncm91cEtleTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNob3dBbGxIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNob3dNb3JlSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvdW50OiAwXG59O1xuXG5AVHJhbnNsYXRpb25cbmNsYXNzIEFkdmFuY2VkU2VhcmNoR3JvdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNhblNob3dNb3JlLCBjb3VudCwgY2hpbGRyZW4sIGdyb3VwS2V5LCBzaG93QWxsSGFuZGxlciwgc2hvd01vcmVIYW5kbGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdncm91cC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2dyb3VwS2V5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdHRlci5mb3JtYXQoY291bnQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLmkxOG4oJ3NlYXJjaC5tb3N0UmVsZXZhbnQnKX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdncm91cC1jb250YWluZXItcmVzdWx0cyc+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2dyb3VwLWNvbnRhaW5lci1hY3Rpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdncm91cC1jb250YWluZXItYWN0aW9uc19fbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FuU2hvd01vcmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaGFuZGxlT25DbGljaz17c2hvd01vcmVIYW5kbGVyfSBsYWJlbD17dGhpcy5pMThuKCdzZWFyY2guc2hvdy5tb3JlJyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdncm91cC1jb250YWluZXItYWN0aW9uc19fcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaGFwZT17bnVsbH0gY29sb3I9J2FjY2VudCcgaGFuZGxlT25DbGljaz17KCkgPT4geyBzaG93QWxsSGFuZGxlcihncm91cEtleSk7IH19IGxhYmVsPXt0aGlzLmkxOG4oJ3NlYXJjaC5zaG93LmFsbCcpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQWR2YW5jZWRTZWFyY2hHcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5BZHZhbmNlZFNlYXJjaEdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbkFkdmFuY2VkU2VhcmNoR3JvdXAuZGlzcGxheU5hbWUgPSAnQWR2YW5jZWRTZWFyY2hHcm91cCc7XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkU2VhcmNoR3JvdXA7XG4iXX0=