'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _translation = require('sagess-core/translation');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _find = require('lodash/collection/find');

var _find2 = _interopRequireDefault(_find);

var _uniqueId = require('lodash/utility/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

require('material-design-lite/material');

var _icon = require('../../components/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Components


var scopeMixin = {
    /**
    * Component tag name.
    * @type {String}
    */
    displayName: 'Scope',
    /**
    * Component default properties.
    * @return {Object} the default props.
    */
    getDefaultProps: function getDefaultProps() {
        return {
            list: []
        };
    },

    /**
    * Scope property validation.
    * @type {Object}
    */
    propTypes: {
        list: _react.PropTypes.array.isRequired,
        value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
    },
    /**
    * Called when component will mount.
    */
    componentWillMount: function componentWillMount() {
        this.scopesId = (0, _uniqueId2.default)('scopes_');
    },

    /**
    * Called when component is mounted.
    */
    componentDidMount: function componentDidMount() {
        if (_reactDom2.default.findDOMNode(this.refs.scopeDropdown)) {
            componentHandler.upgradeElement(_reactDom2.default.findDOMNode(this.refs.scopeDropdown));
        }
    },

    /**
    * Component will receive props.
    * @param {Object} nextProps the next props
    */
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (_reactDom2.default.findDOMNode(this.refs.scopeDropdown)) {
            componentHandler.upgradeElement(_reactDom2.default.findDOMNode(this.refs.scopeDropdown));
        }
    },

    /**
    * Called before component is unmounted.
    */
    componentWillUnmount: function componentWillUnmount() {
        if (_reactDom2.default.findDOMNode(this.refs.scopeDropdown)) {
            componentHandler.downgradeElements(_reactDom2.default.findDOMNode(this.refs.scopeDropdown));
        }
    },

    /**
    * Get the scope click handler, based on the scope given as an argument.
    * @param  {String} code   the clicked scope's code
    * @return {Function}  the scope click handler
    */
    _getScopeClickHandler: function _getScopeClickHandler(_ref) {
        var _this = this;

        var code = _ref.code;
        var onScopeSelection = this.props.onScopeSelection;

        return function () {
            if (onScopeSelection) {
                onScopeSelection(code);
            }
            // Fix MDL issue with closing a dropdown
            var parentRef = _this.refs.parent;
            if (parentRef) {
                var dropdownDiv = parentRef.getElementsByTagName('div')[0];
                dropdownDiv.className = dropdownDiv.className.replace(' is-visible', '');
            }
        };
    },
    _getActiveScope: function _getActiveScope() {
        var _props = this.props,
            list = _props.list,
            value = _props.value;

        var activeScope = (0, _find2.default)(list, { code: value });
        return activeScope || {};
    },

    /**
    * Render the scope list if it is deployed
    * @return {HTML} the rendered scope list
    */
    _renderScopeList: function _renderScopeList() {
        var _this2 = this;

        var scopesId = this.scopesId;
        var _props2 = this.props,
            scopeList = _props2.list,
            value = _props2.value;

        return _react2.default.createElement(
            'ul',
            { className: 'mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect', 'data-focus': 'search-bar-scopes', htmlFor: scopesId, ref: 'scopeDropdown' },
            0 < scopeList.length && scopeList.map(function (scope) {
                var code = scope.code,
                    icon = scope.icon,
                    label = scope.label,
                    otherScopeProps = _objectWithoutProperties(scope, ['code', 'icon', 'label']);

                var scopeId = (0, _uniqueId2.default)('scopes_');
                var isActive = value === code;
                return _react2.default.createElement(
                    'li',
                    { className: 'mdl-menu__item', 'data-active': isActive, key: scope.code || scopeId, 'data-scope': scope.code || scopeId, onClick: _this2._getScopeClickHandler(scope) },
                    scope.code && _react2.default.createElement(_icon2.default, Object.assign({ name: icon || code }, otherScopeProps)),
                    _react2.default.createElement(
                        'span',
                        null,
                        (0, _translation.translate)(label)
                    )
                );
            }),
            0 === scopeList.length && _react2.default.createElement(
                'li',
                { className: 'mdl-menu__item' },
                (0, _translation.translate)('scopes.empty')
            )
        );
    },

    /**
    * Render the complete scope element.
    * @return {object} - The jsx element.
    */
    render: function render() {
        var scopesId = this.scopesId;

        var activeScope = this._getActiveScope();

        var code = activeScope.code,
            icon = activeScope.icon,
            label = activeScope.label,
            otherScopeProps = _objectWithoutProperties(activeScope, ['code', 'icon', 'label']);

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'search-bar-scope', ref: 'parent' },
            _react2.default.createElement(
                'button',
                { className: 'mdl-button mdl-js-button', id: scopesId, 'data-scope': code },
                _react2.default.createElement(_icon2.default, Object.assign({ name: icon || code }, otherScopeProps)),
                _react2.default.createElement(
                    'span',
                    null,
                    (0, _translation.translate)(label)
                )
            ),
            this._renderScopeList()
        );
    }
};

var _builder = (0, _builder3.default)(scopeMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.default = {
    mixin: mixin, component: component
};
exports.mixin = mixin;
exports.component = component;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsic2NvcGVNaXhpbiIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwibGlzdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsInZhbHVlIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibnVtYmVyIiwiY29tcG9uZW50V2lsbE1vdW50Iiwic2NvcGVzSWQiLCJjb21wb25lbnREaWRNb3VudCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZWZzIiwic2NvcGVEcm9wZG93biIsImNvbXBvbmVudEhhbmRsZXIiLCJ1cGdyYWRlRWxlbWVudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvd25ncmFkZUVsZW1lbnRzIiwiX2dldFNjb3BlQ2xpY2tIYW5kbGVyIiwiY29kZSIsIm9uU2NvcGVTZWxlY3Rpb24iLCJwcm9wcyIsInBhcmVudFJlZiIsInBhcmVudCIsImRyb3Bkb3duRGl2IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwiX2dldEFjdGl2ZVNjb3BlIiwiYWN0aXZlU2NvcGUiLCJfcmVuZGVyU2NvcGVMaXN0Iiwic2NvcGVMaXN0IiwibGVuZ3RoIiwibWFwIiwic2NvcGUiLCJpY29uIiwibGFiZWwiLCJvdGhlclNjb3BlUHJvcHMiLCJzY29wZUlkIiwiaXNBY3RpdmUiLCJyZW5kZXIiLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7Ozs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsYUFBYTtBQUNmOzs7O0FBSUFDLGlCQUFhLE9BTEU7QUFNZjs7OztBQUlBQyxtQkFWZSw2QkFVRztBQUNkLGVBQU87QUFDSEMsa0JBQU07QUFESCxTQUFQO0FBR0gsS0FkYzs7QUFlZjs7OztBQUlBQyxlQUFXO0FBQ1BELGNBQU1FLGlCQUFVQyxLQUFWLENBQWdCQyxVQURmO0FBRVBDLGVBQU9ILGlCQUFVSSxTQUFWLENBQW9CLENBQUNKLGlCQUFVSyxNQUFYLEVBQW1CTCxpQkFBVU0sTUFBN0IsQ0FBcEI7QUFGQSxLQW5CSTtBQXVCZjs7O0FBR0FDLHNCQTFCZSxnQ0EwQk07QUFDakIsYUFBS0MsUUFBTCxHQUFnQix3QkFBUyxTQUFULENBQWhCO0FBQ0gsS0E1QmM7O0FBNkJmOzs7QUFHQUMscUJBaENlLCtCQWdDSztBQUNoQixZQUFJQyxtQkFBU0MsV0FBVCxDQUFxQixLQUFLQyxJQUFMLENBQVVDLGFBQS9CLENBQUosRUFBbUQ7QUFDL0NDLDZCQUFpQkMsY0FBakIsQ0FBZ0NMLG1CQUFTQyxXQUFULENBQXFCLEtBQUtDLElBQUwsQ0FBVUMsYUFBL0IsQ0FBaEM7QUFDSDtBQUNKLEtBcENjOztBQXFDZjs7OztBQUlBRyw2QkF6Q2UscUNBeUNXQyxTQXpDWCxFQXlDc0I7QUFDakMsWUFBSVAsbUJBQVNDLFdBQVQsQ0FBcUIsS0FBS0MsSUFBTCxDQUFVQyxhQUEvQixDQUFKLEVBQW1EO0FBQy9DQyw2QkFBaUJDLGNBQWpCLENBQWdDTCxtQkFBU0MsV0FBVCxDQUFxQixLQUFLQyxJQUFMLENBQVVDLGFBQS9CLENBQWhDO0FBQ0g7QUFDSixLQTdDYzs7QUE4Q2Y7OztBQUdBSyx3QkFqRGUsa0NBaURRO0FBQ25CLFlBQUlSLG1CQUFTQyxXQUFULENBQXFCLEtBQUtDLElBQUwsQ0FBVUMsYUFBL0IsQ0FBSixFQUFtRDtBQUMvQ0MsNkJBQWlCSyxpQkFBakIsQ0FBbUNULG1CQUFTQyxXQUFULENBQXFCLEtBQUtDLElBQUwsQ0FBVUMsYUFBL0IsQ0FBbkM7QUFDSDtBQUNKLEtBckRjOztBQXNEZjs7Ozs7QUFLQU8seUJBM0RlLHVDQTJEaUI7QUFBQTs7QUFBQSxZQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFBQSxZQUNwQkMsZ0JBRG9CLEdBQ0MsS0FBS0MsS0FETixDQUNwQkQsZ0JBRG9COztBQUU1QixlQUFPLFlBQU07QUFDVCxnQkFBSUEsZ0JBQUosRUFBc0I7QUFDbEJBLGlDQUFpQkQsSUFBakI7QUFDSDtBQUNEO0FBQ0EsZ0JBQU1HLFlBQVksTUFBS1osSUFBTCxDQUFVYSxNQUE1QjtBQUNBLGdCQUFJRCxTQUFKLEVBQWU7QUFDWCxvQkFBTUUsY0FBY0YsVUFBVUcsb0JBQVYsQ0FBK0IsS0FBL0IsRUFBc0MsQ0FBdEMsQ0FBcEI7QUFDQUQsNEJBQVlFLFNBQVosR0FBd0JGLFlBQVlFLFNBQVosQ0FBc0JDLE9BQXRCLENBQThCLGFBQTlCLEVBQTZDLEVBQTdDLENBQXhCO0FBQ0g7QUFDSixTQVZEO0FBV0gsS0F4RWM7QUF5RWZDLG1CQXpFZSw2QkF5RUc7QUFBQSxxQkFDVSxLQUFLUCxLQURmO0FBQUEsWUFDTnpCLElBRE0sVUFDTkEsSUFETTtBQUFBLFlBQ0FLLEtBREEsVUFDQUEsS0FEQTs7QUFFZCxZQUFNNEIsY0FBYyxvQkFBS2pDLElBQUwsRUFBVyxFQUFFdUIsTUFBTWxCLEtBQVIsRUFBWCxDQUFwQjtBQUNBLGVBQU80QixlQUFlLEVBQXRCO0FBQ0gsS0E3RWM7O0FBOEVmOzs7O0FBSUFDLG9CQWxGZSw4QkFrRkk7QUFBQTs7QUFBQSxZQUNQeEIsUUFETyxHQUNNLElBRE4sQ0FDUEEsUUFETztBQUFBLHNCQUVvQixLQUFLZSxLQUZ6QjtBQUFBLFlBRURVLFNBRkMsV0FFUG5DLElBRk87QUFBQSxZQUVVSyxLQUZWLFdBRVVBLEtBRlY7O0FBR2YsZUFDSTtBQUFBO0FBQUEsY0FBSSxXQUFXLGlFQUFmLEVBQWtGLGNBQVcsbUJBQTdGLEVBQWlILFNBQVNLLFFBQTFILEVBQW9JLEtBQUksZUFBeEk7QUFDSyxnQkFBSXlCLFVBQVVDLE1BQWQsSUFBd0JELFVBQVVFLEdBQVYsQ0FBYyxpQkFBUztBQUFBLG9CQUNwQ2QsSUFEb0MsR0FDTWUsS0FETixDQUNwQ2YsSUFEb0M7QUFBQSxvQkFDOUJnQixJQUQ4QixHQUNNRCxLQUROLENBQzlCQyxJQUQ4QjtBQUFBLG9CQUN4QkMsS0FEd0IsR0FDTUYsS0FETixDQUN4QkUsS0FEd0I7QUFBQSxvQkFDZEMsZUFEYyw0QkFDTUgsS0FETjs7QUFFNUMsb0JBQU1JLFVBQVUsd0JBQVMsU0FBVCxDQUFoQjtBQUNBLG9CQUFNQyxXQUFXdEMsVUFBVWtCLElBQTNCO0FBQ0EsdUJBQ0k7QUFBQTtBQUFBLHNCQUFJLFdBQVUsZ0JBQWQsRUFBK0IsZUFBYW9CLFFBQTVDLEVBQXNELEtBQUtMLE1BQU1mLElBQU4sSUFBY21CLE9BQXpFLEVBQWtGLGNBQVlKLE1BQU1mLElBQU4sSUFBY21CLE9BQTVHLEVBQXFILFNBQVMsT0FBS3BCLHFCQUFMLENBQTJCZ0IsS0FBM0IsQ0FBOUg7QUFDS0EsMEJBQU1mLElBQU4sSUFDRyw4QkFBQyxjQUFELGtCQUFNLE1BQU1nQixRQUFRaEIsSUFBcEIsSUFBOEJrQixlQUE5QixFQUZSO0FBSUk7QUFBQTtBQUFBO0FBQU8sb0RBQVVELEtBQVY7QUFBUDtBQUpKLGlCQURKO0FBUUgsYUFad0IsQ0FEN0I7QUFjSyxrQkFBTUwsVUFBVUMsTUFBaEIsSUFDRztBQUFBO0FBQUEsa0JBQUksV0FBVSxnQkFBZDtBQUNLLDRDQUFVLGNBQVY7QUFETDtBQWZSLFNBREo7QUFzQkgsS0EzR2M7O0FBNEdmOzs7O0FBSUFRLFVBaEhlLG9CQWdITjtBQUFBLFlBQ0dsQyxRQURILEdBQ2dCLElBRGhCLENBQ0dBLFFBREg7O0FBRUwsWUFBTXVCLGNBQWMsS0FBS0QsZUFBTCxFQUFwQjs7QUFGSyxZQUdHVCxJQUhILEdBRzZDVSxXQUg3QyxDQUdHVixJQUhIO0FBQUEsWUFHU2dCLElBSFQsR0FHNkNOLFdBSDdDLENBR1NNLElBSFQ7QUFBQSxZQUdlQyxLQUhmLEdBRzZDUCxXQUg3QyxDQUdlTyxLQUhmO0FBQUEsWUFHeUJDLGVBSHpCLDRCQUc2Q1IsV0FIN0M7O0FBSUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxjQUFXLGtCQUFoQixFQUFtQyxLQUFJLFFBQXZDO0FBQ0k7QUFBQTtBQUFBLGtCQUFRLFdBQVUsMEJBQWxCLEVBQTZDLElBQUl2QixRQUFqRCxFQUEyRCxjQUFZYSxJQUF2RTtBQUNJLDhDQUFDLGNBQUQsa0JBQU0sTUFBTWdCLFFBQVFoQixJQUFwQixJQUE4QmtCLGVBQTlCLEVBREo7QUFFSTtBQUFBO0FBQUE7QUFBTyxnREFBVUQsS0FBVjtBQUFQO0FBRkosYUFESjtBQUtLLGlCQUFLTixnQkFBTDtBQUxMLFNBREo7QUFTSDtBQTdIYyxDQUFuQjs7ZUErSDZCLHVCQUFRckMsVUFBUixDO0lBQXJCZ0QsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7a0JBQ0E7QUFDWEQsZ0JBRFcsRUFDSkM7QUFESSxDO1FBSVhELEssR0FBQUEsSztRQUNBQyxTLEdBQUFBLFMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL3RyYW5zbGF0aW9uJztcblxuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgZmluZCBmcm9tICdsb2Rhc2gvY29sbGVjdGlvbi9maW5kJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICdsb2Rhc2gvdXRpbGl0eS91bmlxdWVJZCc7XG5pbXBvcnQgJ21hdGVyaWFsLWRlc2lnbi1saXRlL21hdGVyaWFsJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pY29uJztcblxuY29uc3Qgc2NvcGVNaXhpbiA9IHtcbiAgICAvKipcbiAgICAqIENvbXBvbmVudCB0YWcgbmFtZS5cbiAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgKi9cbiAgICBkaXNwbGF5TmFtZTogJ1Njb3BlJyxcbiAgICAvKipcbiAgICAqIENvbXBvbmVudCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBkZWZhdWx0IHByb3BzLlxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGlzdDogW11cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogU2NvcGUgcHJvcGVydHkgdmFsaWRhdGlvbi5cbiAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgbGlzdDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICB9LFxuICAgIC8qKlxuICAgICogQ2FsbGVkIHdoZW4gY29tcG9uZW50IHdpbGwgbW91bnQuXG4gICAgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2NvcGVzSWQgPSB1bmlxdWVJZCgnc2NvcGVzXycpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBDYWxsZWQgd2hlbiBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnNjb3BlRHJvcGRvd24pKSB7XG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zY29wZURyb3Bkb3duKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICogQ29tcG9uZW50IHdpbGwgcmVjZWl2ZSBwcm9wcy5cbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXh0UHJvcHMgdGhlIG5leHQgcHJvcHNcbiAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc2NvcGVEcm9wZG93bikpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQoUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnNjb3BlRHJvcGRvd24pKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBDYWxsZWQgYmVmb3JlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQuXG4gICAgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zY29wZURyb3Bkb3duKSkge1xuICAgICAgICAgICAgY29tcG9uZW50SGFuZGxlci5kb3duZ3JhZGVFbGVtZW50cyhSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc2NvcGVEcm9wZG93bikpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAqIEdldCB0aGUgc2NvcGUgY2xpY2sgaGFuZGxlciwgYmFzZWQgb24gdGhlIHNjb3BlIGdpdmVuIGFzIGFuIGFyZ3VtZW50LlxuICAgICogQHBhcmFtICB7U3RyaW5nfSBjb2RlICAgdGhlIGNsaWNrZWQgc2NvcGUncyBjb2RlXG4gICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gIHRoZSBzY29wZSBjbGljayBoYW5kbGVyXG4gICAgKi9cbiAgICBfZ2V0U2NvcGVDbGlja0hhbmRsZXIoeyBjb2RlIH0pIHtcbiAgICAgICAgY29uc3QgeyBvblNjb3BlU2VsZWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9uU2NvcGVTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBvblNjb3BlU2VsZWN0aW9uKGNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRml4IE1ETCBpc3N1ZSB3aXRoIGNsb3NpbmcgYSBkcm9wZG93blxuICAgICAgICAgICAgY29uc3QgcGFyZW50UmVmID0gdGhpcy5yZWZzLnBhcmVudDtcbiAgICAgICAgICAgIGlmIChwYXJlbnRSZWYpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bkRpdiA9IHBhcmVudFJlZi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JylbMF07XG4gICAgICAgICAgICAgICAgZHJvcGRvd25EaXYuY2xhc3NOYW1lID0gZHJvcGRvd25EaXYuY2xhc3NOYW1lLnJlcGxhY2UoJyBpcy12aXNpYmxlJywgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgX2dldEFjdGl2ZVNjb3BlKCkge1xuICAgICAgICBjb25zdCB7IGxpc3QsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBhY3RpdmVTY29wZSA9IGZpbmQobGlzdCwgeyBjb2RlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVNjb3BlIHx8IHt9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIHNjb3BlIGxpc3QgaWYgaXQgaXMgZGVwbG95ZWRcbiAgICAqIEByZXR1cm4ge0hUTUx9IHRoZSByZW5kZXJlZCBzY29wZSBsaXN0XG4gICAgKi9cbiAgICBfcmVuZGVyU2NvcGVMaXN0KCkge1xuICAgICAgICBjb25zdCB7IHNjb3Blc0lkIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCB7IGxpc3Q6IHNjb3BlTGlzdCwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsnbWRsLW1lbnUgbWRsLW1lbnUtLWJvdHRvbS1sZWZ0IG1kbC1qcy1tZW51IG1kbC1qcy1yaXBwbGUtZWZmZWN0J30gZGF0YS1mb2N1cz0nc2VhcmNoLWJhci1zY29wZXMnIGh0bWxGb3I9e3Njb3Blc0lkfSByZWY9J3Njb3BlRHJvcGRvd24nPlxuICAgICAgICAgICAgICAgIHswIDwgc2NvcGVMaXN0Lmxlbmd0aCAmJiBzY29wZUxpc3QubWFwKHNjb3BlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjb2RlLCBpY29uLCBsYWJlbCwgLi4ub3RoZXJTY29wZVByb3BzIH0gPSBzY29wZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVJZCA9IHVuaXF1ZUlkKCdzY29wZXNfJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdmFsdWUgPT09IGNvZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtZGwtbWVudV9faXRlbScgZGF0YS1hY3RpdmU9e2lzQWN0aXZlfSBrZXk9e3Njb3BlLmNvZGUgfHwgc2NvcGVJZH0gZGF0YS1zY29wZT17c2NvcGUuY29kZSB8fCBzY29wZUlkfSBvbkNsaWNrPXt0aGlzLl9nZXRTY29wZUNsaWNrSGFuZGxlcihzY29wZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY29wZS5jb2RlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e2ljb24gfHwgY29kZX0gey4uLm90aGVyU2NvcGVQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RyYW5zbGF0ZShsYWJlbCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7MCA9PT0gc2NvcGVMaXN0Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtZGwtbWVudV9faXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdzY29wZXMuZW1wdHknKX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIGNvbXBsZXRlIHNjb3BlIGVsZW1lbnQuXG4gICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIGpzeCBlbGVtZW50LlxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHNjb3Blc0lkIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBhY3RpdmVTY29wZSA9IHRoaXMuX2dldEFjdGl2ZVNjb3BlKCk7XG4gICAgICAgIGNvbnN0IHsgY29kZSwgaWNvbiwgbGFiZWwsIC4uLm90aGVyU2NvcGVQcm9wcyB9ID0gYWN0aXZlU2NvcGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J3NlYXJjaC1iYXItc2NvcGUnIHJlZj0ncGFyZW50Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uJyBpZD17c2NvcGVzSWR9IGRhdGEtc2NvcGU9e2NvZGV9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtpY29uIHx8IGNvZGV9IHsuLi5vdGhlclNjb3BlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0cmFuc2xhdGUobGFiZWwpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyU2NvcGVMaXN0KCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKHNjb3BlTWl4aW4pO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluLCBjb21wb25lbnRcbn1cbmV4cG9ydCB7XG4gICAgbWl4aW4sXG4gICAgY29tcG9uZW50XG59XG4iXX0=