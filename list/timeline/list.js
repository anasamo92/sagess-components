'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _line = require('./line');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _i18n = require('../../common/i18n');

var _infiniteScroll = require('../mixin/infinite-scroll');

var _referenceProperty = require('../../common/mixin/reference-property');

var _referenceProperty2 = _interopRequireDefault(_referenceProperty);

var _object = require('sagess-core/util/object');

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _isReactClassComponent = require('../../utils/is-react-class-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//Add a ref to the props if the component is not pure add nothing in the other case.


var listMixin = {
    /**
    * Tag name
    */
    displayName: 'timeline',

    /**
    * Mixin dependancies.
    */
    mixins: [_i18n.mixin, _infiniteScroll.mixin, _referenceProperty2.default],

    /**
    * Default properties for the list.
    * @return {object} default props.
    */
    getDefaultProps: function getDefaultProps() {
        return {
            data: [],
            idField: 'id',
            dateField: 'date',
            isLoading: false
        };
    },


    /**
    * list property validation.
    */
    propTypes: {
        data: (0, _types2.default)('array'),
        idField: (0, _types2.default)('string'),
        dateField: (0, _types2.default)('string'),
        dateComponent: (0, _types2.default)('object'),
        lineComponent: (0, _types2.default)('func'),
        isloading: (0, _types2.default)('bool'),
        loader: (0, _types2.default)('func'),
        onLineClick: (0, _types2.default)('func')
    },

    /**
    * Render lines of the list.
    * @returns {*} the lines
    */
    _renderLines: function _renderLines() {
        var _this = this;

        var _props = this.props,
            _props$LineComponent = _props.LineComponent,
            LineComponent = _props$LineComponent === undefined ? _react2.default.createClass(_line.mixin) : _props$LineComponent,
            idField = _props.idField,
            dateField = _props.dateField,
            onLineClick = _props.onLineClick,
            data = _props.data,
            otherProps = _objectWithoutProperties(_props, ['LineComponent', 'idField', 'dateField', 'onLineClick', 'data']);
        // LEGACY CODE


        var customLineComponent = otherProps.lineComponent;
        if (customLineComponent) {
            console.warn('%c DEPRECATED : You are using the lineComponent prop in a timeline component, this will be removed in the next release of Sagess components. Please use LineComponent prop instead.', 'color: #FF9C00; font-weight: bold');
        }
        var FinalLineComponent = customLineComponent || LineComponent;
        // END OF LEGACY CODE

        return data.map(function (line, idx) {
            var timelineFinalProps = (0, _isReactClassComponent.addRefToPropsIfNotPure)(FinalLineComponent, Object.assign({}, otherProps, {
                data: line,
                dateField: dateField,
                key: line[idField] || _uuid2.default.v4(),
                onLineClick: onLineClick,
                reference: _this._getReference()
            }), '' + _isReactClassComponent.LINE + idx);
            return _react2.default.createElement(FinalLineComponent, timelineFinalProps);
        });
    },
    _renderLoading: function _renderLoading() {
        if (this.props.isLoading) {
            if (this.props.loader) {
                return this.props.loader();
            }
            return _react2.default.createElement(
                'li',
                { className: 'timeline-loading' },
                this.i18n('list.loading'),
                ' ...'
            );
        }
    },
    _renderManualFetch: function _renderManualFetch() {
        if (this.props.isManualFetch && this.props.hasMoreData) {
            var style = { className: 'primary' };
            return _react2.default.createElement(
                'li',
                { className: 'timeline-button' },
                _react2.default.createElement(_button2.default, { label: 'list.button.showMore',
                    type: 'button',
                    handleOnClick: this.handleShowMore,
                    style: style
                })
            );
        }
    },


    /**
    * Render the list.
    * @returns {XML} the list component
    */
    render: function render() {
        return _react2.default.createElement(
            'ul',
            { className: 'timeline' },
            this._renderLines(),
            this._renderLoading(),
            this._renderManualFetch()
        );
    }
};

var _builder = (0, _builder3.default)(listMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibGlzdE1peGluIiwiZGlzcGxheU5hbWUiLCJtaXhpbnMiLCJ0cmFuc2xhdGlvbk1peGluIiwiaW5maW5pdGVTY3JvbGxNaXhpbiIsInJlZmVyZW5jZU1peGluIiwiZ2V0RGVmYXVsdFByb3BzIiwiZGF0YSIsImlkRmllbGQiLCJkYXRlRmllbGQiLCJpc0xvYWRpbmciLCJwcm9wVHlwZXMiLCJkYXRlQ29tcG9uZW50IiwibGluZUNvbXBvbmVudCIsImlzbG9hZGluZyIsImxvYWRlciIsIm9uTGluZUNsaWNrIiwiX3JlbmRlckxpbmVzIiwicHJvcHMiLCJMaW5lQ29tcG9uZW50IiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsIkxpbmUiLCJvdGhlclByb3BzIiwiY3VzdG9tTGluZUNvbXBvbmVudCIsImNvbnNvbGUiLCJ3YXJuIiwiRmluYWxMaW5lQ29tcG9uZW50IiwibWFwIiwibGluZSIsImlkeCIsInRpbWVsaW5lRmluYWxQcm9wcyIsImtleSIsInV1aWQiLCJ2NCIsInJlZmVyZW5jZSIsIl9nZXRSZWZlcmVuY2UiLCJMSU5FIiwiX3JlbmRlckxvYWRpbmciLCJpMThuIiwiX3JlbmRlck1hbnVhbEZldGNoIiwiaXNNYW51YWxGZXRjaCIsImhhc01vcmVEYXRhIiwic3R5bGUiLCJjbGFzc05hbWUiLCJoYW5kbGVTaG93TW9yZSIsInJlbmRlciIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7O0FBREE7OztBQUdBLElBQU1BLFlBQVk7QUFDZDs7O0FBR0FDLGlCQUFhLFVBSkM7O0FBTWQ7OztBQUdBQyxZQUFRLENBQUNDLFdBQUQsRUFBbUJDLHFCQUFuQixFQUF3Q0MsMkJBQXhDLENBVE07O0FBV2Q7Ozs7QUFJQUMsbUJBZmMsNkJBZUk7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QUFReEMsU0FBUixDO0lBQXJCK0MsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IHsgbWl4aW4gYXMgTGluZSB9IGZyb20gJy4vbGluZSdcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgbWl4aW4gYXMgdHJhbnNsYXRpb25NaXhpbiB9IGZyb20gJy4uLy4uL2NvbW1vbi9pMThuJztcbmltcG9ydCB7IG1peGluIGFzIGluZmluaXRlU2Nyb2xsTWl4aW4gfSBmcm9tICcuLi9taXhpbi9pbmZpbml0ZS1zY3JvbGwnO1xuaW1wb3J0IHJlZmVyZW5jZU1peGluIGZyb20gJy4uLy4uL2NvbW1vbi9taXhpbi9yZWZlcmVuY2UtcHJvcGVydHknO1xuaW1wb3J0IHsgY2hlY2tJc05vdE51bGwgfSBmcm9tICdzYWdlc3MtY29yZS91dGlsL29iamVjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJztcbi8vQWRkIGEgcmVmIHRvIHRoZSBwcm9wcyBpZiB0aGUgY29tcG9uZW50IGlzIG5vdCBwdXJlIGFkZCBub3RoaW5nIGluIHRoZSBvdGhlciBjYXNlLlxuaW1wb3J0IHsgYWRkUmVmVG9Qcm9wc0lmTm90UHVyZSwgTElORSB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLXJlYWN0LWNsYXNzLWNvbXBvbmVudCc7XG5cbmNvbnN0IGxpc3RNaXhpbiA9IHtcbiAgICAvKipcbiAgICAqIFRhZyBuYW1lXG4gICAgKi9cbiAgICBkaXNwbGF5TmFtZTogJ3RpbWVsaW5lJyxcblxuICAgIC8qKlxuICAgICogTWl4aW4gZGVwZW5kYW5jaWVzLlxuICAgICovXG4gICAgbWl4aW5zOiBbdHJhbnNsYXRpb25NaXhpbiwgaW5maW5pdGVTY3JvbGxNaXhpbiwgcmVmZXJlbmNlTWl4aW5dLFxuXG4gICAgLyoqXG4gICAgKiBEZWZhdWx0IHByb3BlcnRpZXMgZm9yIHRoZSBsaXN0LlxuICAgICogQHJldHVybiB7b2JqZWN0fSBkZWZhdWx0IHByb3BzLlxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBpZEZpZWxkOiAnaWQnLFxuICAgICAgICAgICAgZGF0ZUZpZWxkOiAnZGF0ZScsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogbGlzdCBwcm9wZXJ0eSB2YWxpZGF0aW9uLlxuICAgICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGRhdGE6IHR5cGUoJ2FycmF5JyksXG4gICAgICAgIGlkRmllbGQ6IHR5cGUoJ3N0cmluZycpLFxuICAgICAgICBkYXRlRmllbGQ6IHR5cGUoJ3N0cmluZycpLFxuICAgICAgICBkYXRlQ29tcG9uZW50OiB0eXBlKCdvYmplY3QnKSxcbiAgICAgICAgbGluZUNvbXBvbmVudDogdHlwZSgnZnVuYycpLFxuICAgICAgICBpc2xvYWRpbmc6IHR5cGUoJ2Jvb2wnKSxcbiAgICAgICAgbG9hZGVyOiB0eXBlKCdmdW5jJyksXG4gICAgICAgIG9uTGluZUNsaWNrOiB0eXBlKCdmdW5jJylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgbGluZXMgb2YgdGhlIGxpc3QuXG4gICAgKiBAcmV0dXJucyB7Kn0gdGhlIGxpbmVzXG4gICAgKi9cbiAgICBfcmVuZGVyTGluZXMoKSB7XG4gICAgICAgIGNvbnN0IHsgTGluZUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKExpbmUpLCBpZEZpZWxkLCBkYXRlRmllbGQsIG9uTGluZUNsaWNrLCBkYXRhLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvLyBMRUdBQ1kgQ09ERVxuICAgICAgICBjb25zdCBjdXN0b21MaW5lQ29tcG9uZW50ID0gb3RoZXJQcm9wcy5saW5lQ29tcG9uZW50O1xuICAgICAgICBpZiAoY3VzdG9tTGluZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCclYyBERVBSRUNBVEVEIDogWW91IGFyZSB1c2luZyB0aGUgbGluZUNvbXBvbmVudCBwcm9wIGluIGEgdGltZWxpbmUgY29tcG9uZW50LCB0aGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCByZWxlYXNlIG9mIFNhZ2VzcyBjb21wb25lbnRzLiBQbGVhc2UgdXNlIExpbmVDb21wb25lbnQgcHJvcCBpbnN0ZWFkLicsICdjb2xvcjogI0ZGOUMwMDsgZm9udC13ZWlnaHQ6IGJvbGQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBGaW5hbExpbmVDb21wb25lbnQgPSBjdXN0b21MaW5lQ29tcG9uZW50IHx8IExpbmVDb21wb25lbnQ7XG4gICAgICAgIC8vIEVORCBPRiBMRUdBQ1kgQ09ERVxuXG4gICAgICAgIHJldHVybiBkYXRhLm1hcCgobGluZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lbGluZUZpbmFsUHJvcHMgPSBhZGRSZWZUb1Byb3BzSWZOb3RQdXJlKFxuICAgICAgICAgICAgICAgIEZpbmFsTGluZUNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAuLi5vdGhlclByb3BzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBsaW5lLFxuICAgICAgICAgICAgICAgICAgICBkYXRlRmllbGQsXG4gICAgICAgICAgICAgICAgICAgIGtleTogbGluZVtpZEZpZWxkXSB8fCB1dWlkLnY0KCksXG4gICAgICAgICAgICAgICAgICAgIG9uTGluZUNsaWNrLFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6IHRoaXMuX2dldFJlZmVyZW5jZSgpXG4gICAgICAgICAgICAgICAgfSwgYCR7TElORX0ke2lkeH1gKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZpbmFsTGluZUNvbXBvbmVudCB7Li4udGltZWxpbmVGaW5hbFByb3BzfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9yZW5kZXJMb2FkaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvYWRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmxvYWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0aW1lbGluZS1sb2FkaW5nJz57dGhpcy5pMThuKCdsaXN0LmxvYWRpbmcnKX0gLi4uPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3JlbmRlck1hbnVhbEZldGNoKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc01hbnVhbEZldGNoICYmIHRoaXMucHJvcHMuaGFzTW9yZURhdGEpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHsgY2xhc3NOYW1lOiAncHJpbWFyeScgfTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndGltZWxpbmUtYnV0dG9uJz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD0nbGlzdC5idXR0b24uc2hvd01vcmUnXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dNb3JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBsaXN0LlxuICAgICogQHJldHVybnMge1hNTH0gdGhlIGxpc3QgY29tcG9uZW50XG4gICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd0aW1lbGluZSc+XG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckxpbmVzKCl9XG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckxvYWRpbmcoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyTWFudWFsRmV0Y2goKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKGxpc3RNaXhpbik7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==