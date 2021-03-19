'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _exception = require('sagess-core/exception');

var _number = require('sagess-core/definition/formatter/number');

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacetData = {
    getDefaultProps: function getDefaultProps() {
        return {
            type: 'text'
        };
    },

    /**
     * Display name.
     */
    displayName: 'FacetData',
    /**
     * Render the component.
     * @returns {XML} Html code of the component.
     */
    render: function render() {
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'facet-data', onClick: this._selectFacetData },
            this._renderData()
        );
    },

    /**
     * Render the data.
     * @returns {string} Html generated code.
     */
    _renderData: function _renderData() {
        if (this.props.type == 'text') {
            return this.props.data.label + ' (' + _number2.default.format(this.props.data.count) + ')';
        }
        throw new _exception.ArgumentInvalidException('Unknown property type : ' + this.props.type);
    },

    /**
     * Facet selection action handler.
     * @returns {function} the facet selection handler.
     */
    _selectFacetData: function _selectFacetData() {
        return this.props.selectHandler(this.props.dataKey, this.props.data);
    }
};

var _builder = (0, _builder3.default)(FacetData),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiRmFjZXREYXRhIiwiZ2V0RGVmYXVsdFByb3BzIiwidHlwZSIsImRpc3BsYXlOYW1lIiwicmVuZGVyIiwiX3NlbGVjdEZhY2V0RGF0YSIsIl9yZW5kZXJEYXRhIiwicHJvcHMiLCJkYXRhIiwibGFiZWwiLCJudW1iZXJGb3JtYXR0ZXIiLCJmb3JtYXQiLCJjb3VudCIsIkFyZ3VtZW50SW52YWxpZEV4Y2VwdGlvbiIsInNlbGVjdEhhbmRsZXIiLCJkYXRhS2V5IiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFDZEMsbUJBRGMsNkJBQ0k7QUFDZCxlQUFRO0FBQ0pDLGtCQUFNO0FBREYsU0FBUjtBQUdILEtBTGE7O0FBTWQ7OztBQUdBQyxpQkFBYSxXQVRDO0FBVWQ7Ozs7QUFJQUMsVUFkYyxvQkFjTDtBQUNMLGVBQ0k7QUFBQTtBQUFBLGNBQUssY0FBVyxZQUFoQixFQUE2QixTQUFTLEtBQUtDLGdCQUEzQztBQUNLLGlCQUFLQyxXQUFMO0FBREwsU0FESjtBQUtILEtBcEJhOztBQXFCZDs7OztBQUlBQSxlQXpCYyx5QkF5QkE7QUFDVixZQUFJLEtBQUtDLEtBQUwsQ0FBV0wsSUFBWCxJQUFtQixNQUF2QixFQUErQjtBQUMzQixtQkFBVSxLQUFLSyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEtBQTFCLFVBQW9DQyxpQkFBZ0JDLE1BQWhCLENBQXVCLEtBQUtKLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkksS0FBdkMsQ0FBcEM7QUFDSDtBQUNELGNBQU0sSUFBSUMsbUNBQUosQ0FBNkIsNkJBQTZCLEtBQUtOLEtBQUwsQ0FBV0wsSUFBckUsQ0FBTjtBQUNILEtBOUJhOztBQStCZDs7OztBQUlBRyxvQkFuQ2MsOEJBbUNLO0FBQ2YsZUFBTyxLQUFLRSxLQUFMLENBQVdPLGFBQVgsQ0FBeUIsS0FBS1AsS0FBTCxDQUFXUSxPQUFwQyxFQUE2QyxLQUFLUixLQUFMLENBQVdDLElBQXhELENBQVA7QUFDSDtBQXJDYSxDQUFsQjs7ZUF3QzZCLHVCQUFRUixTQUFSLEM7SUFBckJnQixLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCB7IEFyZ3VtZW50SW52YWxpZEV4Y2VwdGlvbiB9IGZyb20gJ3NhZ2Vzcy1jb3JlL2V4Y2VwdGlvbic7XG5pbXBvcnQgbnVtYmVyRm9ybWF0dGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2RlZmluaXRpb24vZm9ybWF0dGVyL251bWJlcic7XG5cbmNvbnN0IEZhY2V0RGF0YSA9IHtcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBuYW1lLlxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lOiAnRmFjZXREYXRhJyxcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAcmV0dXJucyB7WE1MfSBIdG1sIGNvZGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2ZhY2V0LWRhdGEnIG9uQ2xpY2s9e3RoaXMuX3NlbGVjdEZhY2V0RGF0YX0+XG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckRhdGEoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEh0bWwgZ2VuZXJhdGVkIGNvZGUuXG4gICAgICovXG4gICAgX3JlbmRlckRhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gJ3RleHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm9wcy5kYXRhLmxhYmVsfSAoJHtudW1iZXJGb3JtYXR0ZXIuZm9ybWF0KHRoaXMucHJvcHMuZGF0YS5jb3VudCl9KWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50SW52YWxpZEV4Y2VwdGlvbignVW5rbm93biBwcm9wZXJ0eSB0eXBlIDogJyArIHRoaXMucHJvcHMudHlwZSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBGYWNldCBzZWxlY3Rpb24gYWN0aW9uIGhhbmRsZXIuXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufSB0aGUgZmFjZXQgc2VsZWN0aW9uIGhhbmRsZXIuXG4gICAgICovXG4gICAgX3NlbGVjdEZhY2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0SGFuZGxlcih0aGlzLnByb3BzLmRhdGFLZXksIHRoaXMucHJvcHMuZGF0YSk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKEZhY2V0RGF0YSk7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==