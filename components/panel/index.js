'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('../../behaviours/translation');

var _translation2 = _interopRequireDefault(_translation);

var _uniqueId = require('lodash/utility/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _snakeCase = require('lodash/string/snakeCase');

var _snakeCase2 = _interopRequireDefault(_snakeCase);

var _buttonHelp = require('../button-help');

var _buttonHelp2 = _interopRequireDefault(_buttonHelp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
    actionsPosition: 'top'
};

var propTypes = {
    actions: _react.PropTypes.func,
    actionsPosition: _react.PropTypes.oneOf(['both', 'bottom', 'top']).isRequired,
    title: _react.PropTypes.string,
    showHelp: _react.PropTypes.bool,
    blockName: _react.PropTypes.string
};

/**
* Panel.
*/

var Panel = (0, _translation2.default)(_class = function (_Component) {
    _inherits(Panel, _Component);

    function Panel(props) {
        _classCallCheck(this, Panel);

        var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

        var state = {
            spyId: (0, _uniqueId2.default)('panel_')
        };
        _this.state = state;
        return _this;
    }

    /**
    * Render the a block container and the cild content of the block.
    * @return {DOM} React DOM element
    */


    _createClass(Panel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                actions = _props.actions,
                actionsPosition = _props.actionsPosition,
                children = _props.children,
                title = _props.title,
                showHelp = _props.showHelp,
                blockName = _props.blockName,
                otherProps = _objectWithoutProperties(_props, ['actions', 'actionsPosition', 'children', 'title', 'showHelp', 'blockName']);

            var spyId = this.state.spyId;

            var shouldDisplayActionsTop = actions && ['both', 'top'].includes(actionsPosition);
            var shouldDisplayActionsBottom = actions && ['both', 'bottom'].includes(actionsPosition);
            return _react2.default.createElement(
                'div',
                Object.assign({ className: 'mdl-card mdl-card--border mdl-shadow--4dp', 'data-spy': spyId, 'data-focus': 'panel' }, otherProps),
                (title || shouldDisplayActionsTop || showHelp) && _react2.default.createElement(
                    'div',
                    { className: 'mdl-card__title mdl-card--border', 'data-focus': 'panel-title' },
                    title && _react2.default.createElement(
                        'h3',
                        { 'data-spy-title': true },
                        this.i18n(title)
                    ),
                    shouldDisplayActionsTop && _react2.default.createElement(
                        'div',
                        { className: 'actions' },
                        actions()
                    ),
                    showHelp && _react2.default.createElement(_buttonHelp2.default, { blockName: blockName || (0, _snakeCase2.default)(this.i18n(title)).split('_')[0] })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mdl-card__supporting-text', 'data-focus': 'panel-content' },
                    children
                ),
                shouldDisplayActionsBottom && _react2.default.createElement(
                    'div',
                    { className: 'mdl-card__actions mdl-card--border', 'data-focus': 'panel-actions' },
                    _react2.default.createElement(
                        'div',
                        { className: 'actions' },
                        actions()
                    )
                )
            );
        }
    }]);

    return Panel;
}(_react.Component)) || _class;

//Static props.


Panel.displayName = 'Panel';
Panel.defaultProps = defaultProps;
Panel.propTypes = propTypes;

exports.default = Panel;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYWN0aW9uc1Bvc2l0aW9uIiwicHJvcFR5cGVzIiwiYWN0aW9ucyIsIlByb3BUeXBlcyIsImZ1bmMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJ0aXRsZSIsInN0cmluZyIsInNob3dIZWxwIiwiYm9vbCIsImJsb2NrTmFtZSIsIlBhbmVsIiwiVHJhbnNsYXRpb24iLCJwcm9wcyIsInN0YXRlIiwic3B5SWQiLCJjaGlsZHJlbiIsIm90aGVyUHJvcHMiLCJzaG91bGREaXNwbGF5QWN0aW9uc1RvcCIsImluY2x1ZGVzIiwic2hvdWxkRGlzcGxheUFjdGlvbnNCb3R0b20iLCJpMThuIiwic3BsaXQiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZTtBQUNqQkMscUJBQWlCO0FBREEsQ0FBckI7O0FBSUEsSUFBTUMsWUFBWTtBQUNkQyxhQUFTQyxpQkFBVUMsSUFETDtBQUVkSixxQkFBaUJHLGlCQUFVRSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsS0FBbkIsQ0FBaEIsRUFBMkNDLFVBRjlDO0FBR2RDLFdBQU9KLGlCQUFVSyxNQUhIO0FBSWRDLGNBQVVOLGlCQUFVTyxJQUpOO0FBS2RDLGVBQVdSLGlCQUFVSztBQUxQLENBQWxCOztBQVFBOzs7O0lBSU1JLEssT0FETEMscUI7OztBQUdHLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1RBLEtBRFM7O0FBRWYsWUFBTUMsUUFBUTtBQUNWQyxtQkFBTyx3QkFBUyxRQUFUO0FBREcsU0FBZDtBQUdBLGNBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxlO0FBTWxCOztBQUVEOzs7Ozs7OztpQ0FJUztBQUFBLHlCQUNxRixLQUFLRCxLQUQxRjtBQUFBLGdCQUNHWixPQURILFVBQ0dBLE9BREg7QUFBQSxnQkFDWUYsZUFEWixVQUNZQSxlQURaO0FBQUEsZ0JBQzZCaUIsUUFEN0IsVUFDNkJBLFFBRDdCO0FBQUEsZ0JBQ3VDVixLQUR2QyxVQUN1Q0EsS0FEdkM7QUFBQSxnQkFDOENFLFFBRDlDLFVBQzhDQSxRQUQ5QztBQUFBLGdCQUN3REUsU0FEeEQsVUFDd0RBLFNBRHhEO0FBQUEsZ0JBQ3NFTyxVQUR0RTs7QUFBQSxnQkFFR0YsS0FGSCxHQUVhLEtBQUtELEtBRmxCLENBRUdDLEtBRkg7O0FBR0wsZ0JBQU1HLDBCQUEwQmpCLFdBQVcsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQmtCLFFBQWhCLENBQXlCcEIsZUFBekIsQ0FBM0M7QUFDQSxnQkFBTXFCLDZCQUE2Qm5CLFdBQVcsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQmtCLFFBQW5CLENBQTRCcEIsZUFBNUIsQ0FBOUM7QUFDQSxtQkFDSTtBQUFBO0FBQUEsZ0NBQUssV0FBVSwyQ0FBZixFQUEyRCxZQUFVZ0IsS0FBckUsRUFBNEUsY0FBVyxPQUF2RixJQUFtR0UsVUFBbkc7QUFDSyxpQkFBQ1gsU0FBU1ksdUJBQVQsSUFBb0NWLFFBQXJDLEtBQWtEO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGtDQUFmLEVBQWtELGNBQVcsYUFBN0Q7QUFDOUNGLDZCQUNHO0FBQUE7QUFBQSwwQkFBSSxzQkFBSjtBQUFvQiw2QkFBS2UsSUFBTCxDQUFVZixLQUFWO0FBQXBCLHFCQUYyQztBQUk5Q1ksK0NBQ0c7QUFBQTtBQUFBLDBCQUFLLFdBQVUsU0FBZjtBQUEwQmpCO0FBQTFCLHFCQUwyQztBQU85Q08sZ0NBQVksOEJBQUMsb0JBQUQsSUFBWSxXQUFXRSxhQUFhLHlCQUFVLEtBQUtXLElBQUwsQ0FBVWYsS0FBVixDQUFWLEVBQTRCZ0IsS0FBNUIsQ0FBa0MsR0FBbEMsRUFBdUMsQ0FBdkMsQ0FBcEM7QUFQa0MsaUJBRHZEO0FBVUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsMkJBQWYsRUFBMkMsY0FBVyxlQUF0RDtBQUNLTjtBQURMLGlCQVZKO0FBYUtJLDhDQUNHO0FBQUE7QUFBQSxzQkFBSyxXQUFVLG9DQUFmLEVBQW9ELGNBQVcsZUFBL0Q7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxTQUFmO0FBQTBCbkI7QUFBMUI7QUFESjtBQWRSLGFBREo7QUFxQkg7Ozs7RUF4Q2VzQixnQjs7QUEyQ3BCOzs7QUFDQVosTUFBTWEsV0FBTixHQUFvQixPQUFwQjtBQUNBYixNQUFNYixZQUFOLEdBQXFCQSxZQUFyQjtBQUNBYSxNQUFNWCxTQUFOLEdBQWtCQSxTQUFsQjs7a0JBRWVXLEsiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2xhdGlvbiBmcm9tICcuLi8uLi9iZWhhdmlvdXJzL3RyYW5zbGF0aW9uJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICdsb2Rhc2gvdXRpbGl0eS91bmlxdWVJZCc7XG5pbXBvcnQgc25ha2VDYXNlIGZyb20gJ2xvZGFzaC9zdHJpbmcvc25ha2VDYXNlJztcbmltcG9ydCBCdXR0b25IZWxwIGZyb20gJy4uL2J1dHRvbi1oZWxwJztcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjdGlvbnNQb3NpdGlvbjogJ3RvcCdcbn07XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpb25zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhY3Rpb25zUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2JvdGgnLCAnYm90dG9tJywgJ3RvcCddKS5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNob3dIZWxwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBibG9ja05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbi8qKlxuKiBQYW5lbC5cbiovXG5AVHJhbnNsYXRpb25cbmNsYXNzIFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgICAgICBzcHlJZDogdW5pcXVlSWQoJ3BhbmVsXycpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlbmRlciB0aGUgYSBibG9jayBjb250YWluZXIgYW5kIHRoZSBjaWxkIGNvbnRlbnQgb2YgdGhlIGJsb2NrLlxuICAgICogQHJldHVybiB7RE9NfSBSZWFjdCBET00gZWxlbWVudFxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFjdGlvbnMsIGFjdGlvbnNQb3NpdGlvbiwgY2hpbGRyZW4sIHRpdGxlLCBzaG93SGVscCwgYmxvY2tOYW1lLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHNweUlkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzaG91bGREaXNwbGF5QWN0aW9uc1RvcCA9IGFjdGlvbnMgJiYgWydib3RoJywgJ3RvcCddLmluY2x1ZGVzKGFjdGlvbnNQb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHNob3VsZERpc3BsYXlBY3Rpb25zQm90dG9tID0gYWN0aW9ucyAmJiBbJ2JvdGgnLCAnYm90dG9tJ10uaW5jbHVkZXMoYWN0aW9uc1Bvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZGwtY2FyZCBtZGwtY2FyZC0tYm9yZGVyIG1kbC1zaGFkb3ctLTRkcCcgZGF0YS1zcHk9e3NweUlkfSBkYXRhLWZvY3VzPSdwYW5lbCcgey4uLm90aGVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIHsodGl0bGUgfHwgc2hvdWxkRGlzcGxheUFjdGlvbnNUb3AgfHwgc2hvd0hlbHApICYmIDxkaXYgY2xhc3NOYW1lPSdtZGwtY2FyZF9fdGl0bGUgbWRsLWNhcmQtLWJvcmRlcicgZGF0YS1mb2N1cz0ncGFuZWwtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNweS10aXRsZT57dGhpcy5pMThuKHRpdGxlKX08L2gzPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtzaG91bGREaXNwbGF5QWN0aW9uc1RvcCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbnMnPnthY3Rpb25zKCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge3Nob3dIZWxwICYmIDxCdXR0b25IZWxwIGJsb2NrTmFtZT17YmxvY2tOYW1lIHx8IHNuYWtlQ2FzZSh0aGlzLmkxOG4odGl0bGUpKS5zcGxpdCgnXycpWzBdfSAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQnIGRhdGEtZm9jdXM9J3BhbmVsLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3Nob3VsZERpc3BsYXlBY3Rpb25zQm90dG9tICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZGwtY2FyZF9fYWN0aW9ucyBtZGwtY2FyZC0tYm9yZGVyJyBkYXRhLWZvY3VzPSdwYW5lbC1hY3Rpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb25zJz57YWN0aW9ucygpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8vU3RhdGljIHByb3BzLlxuUGFuZWwuZGlzcGxheU5hbWUgPSAnUGFuZWwnO1xuUGFuZWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuUGFuZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBQYW5lbDtcbiJdfQ==