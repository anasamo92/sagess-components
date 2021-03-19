'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isObject = require('lodash/lang/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMPTY = '';

var valueBehaviourMixin = {
    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            error: undefined,
            value: undefined
        };
    },

    /** @inheritdoc */
    getInitialState: function getInitialState() {
        return {
            error: this.props.error,
            value: this.props.value
        };
    },

    /**
    * Gte the value from the field, it will look into the refs for the value, then into the state and then into the props.
    * If the value is null or empty string the value will be changed to undefined.
    * @return {object} - The value of the field.
    */
    getValue: function getValue() {
        var value = void 0;
        if ((0, _isObject2.default)(this.refs) && (0, _isObject2.default)(this.refs.input) && (0, _isFunction2.default)(this.refs.input.getValue)) {
            value = this.refs.input.getValue();
        } else if (this.state && this.state.value !== undefined) {
            value = this.state.value;
        } else if (this.props && this.props.value !== undefined) {
            value = this.props.value;
        }
        if ((0, _isUndefined2.default)(value) || EMPTY === value) {
            value = null;
        }
        return value;
    },

    /**
    * Handler called when the input Change its value.
    * @param {any} newValue - The value to set.
    */
    onInputChange: function onInputChange(newValue) {
        if (this.props.onChange) {
            return this.props.onChange(newValue);
        }
        this.setState({ error: null, value: newValue });
    }
};

exports.default = valueBehaviourMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiRU1QVFkiLCJ2YWx1ZUJlaGF2aW91ck1peGluIiwiZ2V0RGVmYXVsdFByb3BzIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImdldEluaXRpYWxTdGF0ZSIsInByb3BzIiwiZ2V0VmFsdWUiLCJyZWZzIiwiaW5wdXQiLCJzdGF0ZSIsIm9uSW5wdXRDaGFuZ2UiLCJuZXdWYWx1ZSIsIm9uQ2hhbmdlIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxFQUFkOztBQUVBLElBQU1DLHNCQUFzQjtBQUN4QjtBQUNBQyxtQkFGd0IsNkJBRU47QUFDZCxlQUFPO0FBQ0hDLG1CQUFPQyxTQURKO0FBRUhDLG1CQUFPRDtBQUZKLFNBQVA7QUFJSCxLQVB1Qjs7QUFReEI7QUFDQUUsbUJBVHdCLDZCQVNOO0FBQ2QsZUFBTztBQUNISCxtQkFBTyxLQUFLSSxLQUFMLENBQVdKLEtBRGY7QUFFSEUsbUJBQU8sS0FBS0UsS0FBTCxDQUFXRjtBQUZmLFNBQVA7QUFJSCxLQWR1Qjs7QUFleEI7Ozs7O0FBS0FHLFlBcEJ3QixzQkFvQmI7QUFDUCxZQUFJSCxjQUFKO0FBQ0EsWUFBSSx3QkFBUyxLQUFLSSxJQUFkLEtBQXVCLHdCQUFTLEtBQUtBLElBQUwsQ0FBVUMsS0FBbkIsQ0FBdkIsSUFBb0QsMEJBQVcsS0FBS0QsSUFBTCxDQUFVQyxLQUFWLENBQWdCRixRQUEzQixDQUF4RCxFQUE4RjtBQUMxRkgsb0JBQVEsS0FBS0ksSUFBTCxDQUFVQyxLQUFWLENBQWdCRixRQUFoQixFQUFSO0FBQ0gsU0FGRCxNQUVPLElBQUksS0FBS0csS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV04sS0FBWCxLQUFxQkQsU0FBdkMsRUFBa0Q7QUFDckRDLG9CQUFRLEtBQUtNLEtBQUwsQ0FBV04sS0FBbkI7QUFDSCxTQUZNLE1BRUEsSUFBSSxLQUFLRSxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXRixLQUFYLEtBQXFCRCxTQUF2QyxFQUFrRDtBQUNyREMsb0JBQVEsS0FBS0UsS0FBTCxDQUFXRixLQUFuQjtBQUNIO0FBQ0QsWUFBSSwyQkFBWUEsS0FBWixLQUFzQkwsVUFBVUssS0FBcEMsRUFBMkM7QUFDdkNBLG9CQUFRLElBQVI7QUFDSDtBQUNELGVBQU9BLEtBQVA7QUFDSCxLQWpDdUI7O0FBa0N4Qjs7OztBQUlBTyxpQkF0Q3dCLHlCQXNDVkMsUUF0Q1UsRUFzQ0E7QUFDcEIsWUFBSSxLQUFLTixLQUFMLENBQVdPLFFBQWYsRUFBeUI7QUFDckIsbUJBQU8sS0FBS1AsS0FBTCxDQUFXTyxRQUFYLENBQW9CRCxRQUFwQixDQUFQO0FBQ0g7QUFDRCxhQUFLRSxRQUFMLENBQWMsRUFBRVosT0FBTyxJQUFULEVBQWVFLE9BQU9RLFFBQXRCLEVBQWQ7QUFDSDtBQTNDdUIsQ0FBNUI7O2tCQThDZVosbUIiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc1VuZGVmaW5lZCBmcm9tICdsb2Rhc2gvbGFuZy9pc1VuZGVmaW5lZCc7XHJcbmltcG9ydCBpc09iamVjdCBmcm9tICdsb2Rhc2gvbGFuZy9pc09iamVjdCc7XHJcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9sYW5nL2lzRnVuY3Rpb24nO1xyXG5cclxuY29uc3QgRU1QVFkgPSAnJztcclxuXHJcbmNvbnN0IHZhbHVlQmVoYXZpb3VyTWl4aW4gPSB7XHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cclxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcjogdGhpcy5wcm9wcy5lcnJvcixcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgKiBHdGUgdGhlIHZhbHVlIGZyb20gdGhlIGZpZWxkLCBpdCB3aWxsIGxvb2sgaW50byB0aGUgcmVmcyBmb3IgdGhlIHZhbHVlLCB0aGVuIGludG8gdGhlIHN0YXRlIGFuZCB0aGVuIGludG8gdGhlIHByb3BzLlxyXG4gICAgKiBJZiB0aGUgdmFsdWUgaXMgbnVsbCBvciBlbXB0eSBzdHJpbmcgdGhlIHZhbHVlIHdpbGwgYmUgY2hhbmdlZCB0byB1bmRlZmluZWQuXHJcbiAgICAqIEByZXR1cm4ge29iamVjdH0gLSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkLlxyXG4gICAgKi9cclxuICAgIGdldFZhbHVlKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICBpZiAoaXNPYmplY3QodGhpcy5yZWZzKSAmJiBpc09iamVjdCh0aGlzLnJlZnMuaW5wdXQpICYmIGlzRnVuY3Rpb24odGhpcy5yZWZzLmlucHV0LmdldFZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVmcy5pbnB1dC5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSAmJiB0aGlzLnN0YXRlLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWUpIHx8IEVNUFRZID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICogSGFuZGxlciBjYWxsZWQgd2hlbiB0aGUgaW5wdXQgQ2hhbmdlIGl0cyB2YWx1ZS5cclxuICAgICogQHBhcmFtIHthbnl9IG5ld1ZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldC5cclxuICAgICovXHJcbiAgICBvbklucHV0Q2hhbmdlKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IG51bGwsIHZhbHVlOiBuZXdWYWx1ZSB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZhbHVlQmVoYXZpb3VyTWl4aW47XHJcbiJdfQ==