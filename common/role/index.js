'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _user = require('sagess-core/user');

var _user2 = _interopRequireDefault(_user);

var _intersection = require('lodash/array/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mixin button.
 * @type {Object}
 */
var roleMixin = {
    propTypes: {
        hasOne: (0, _types2.default)('array'),
        hasAll: (0, _types2.default)('array')
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/role instead');
    },
    render: function render() {
        var userRoles = _user2.default.getRoles();
        if ((0, _isArray2.default)(this.props.hasAll) && (0, _intersection2.default)(userRoles, this.props.hasAll).length === this.props.hasAll.length) {
            return this.props.children;
        } else if ((0, _isArray2.default)(this.props.hasOne) && (0, _intersection2.default)(userRoles, this.props.hasOne).length > 0) {
            return this.props.children;
        }
        return null;
    }
};

var _builder = (0, _builder3.default)(roleMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicm9sZU1peGluIiwicHJvcFR5cGVzIiwiaGFzT25lIiwiaGFzQWxsIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJyZW5kZXIiLCJ1c2VyUm9sZXMiLCJ1c2VyIiwiZ2V0Um9sZXMiLCJwcm9wcyIsImxlbmd0aCIsImNoaWxkcmVuIiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBOzs7O0FBSUEsSUFBSUEsWUFBWTtBQUNaQyxlQUFXO0FBQ1BDLGdCQUFRLHFCQUFLLE9BQUwsQ0FERDtBQUVQQyxnQkFBUSxxQkFBSyxPQUFMO0FBRkQsS0FEQztBQUtaQyxzQkFMWSxnQ0FLUztBQUNqQkMsZ0JBQVFDLElBQVIsQ0FBYSw0R0FBYjtBQUNILEtBUFc7QUFRWkMsVUFSWSxvQkFRSDtBQUNMLFlBQUlDLFlBQVlDLGVBQUtDLFFBQUwsRUFBaEI7QUFDQSxZQUFJLHVCQUFRLEtBQUtDLEtBQUwsQ0FBV1IsTUFBbkIsS0FBOEIsNEJBQWFLLFNBQWIsRUFBd0IsS0FBS0csS0FBTCxDQUFXUixNQUFuQyxFQUEyQ1MsTUFBM0MsS0FBc0QsS0FBS0QsS0FBTCxDQUFXUixNQUFYLENBQWtCUyxNQUExRyxFQUFrSDtBQUM5RyxtQkFBTyxLQUFLRCxLQUFMLENBQVdFLFFBQWxCO0FBQ0gsU0FGRCxNQUVPLElBQUksdUJBQVEsS0FBS0YsS0FBTCxDQUFXVCxNQUFuQixLQUE4Qiw0QkFBYU0sU0FBYixFQUF3QixLQUFLRyxLQUFMLENBQVdULE1BQW5DLEVBQTJDVSxNQUEzQyxHQUFvRCxDQUF0RixFQUF5RjtBQUM1RixtQkFBTyxLQUFLRCxLQUFMLENBQVdFLFFBQWxCO0FBQ0g7QUFDRCxlQUFPLElBQVA7QUFFSDtBQWpCVyxDQUFoQjs7ZUFvQjZCLHVCQUFRYixTQUFSLEM7SUFBckJjLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHVzZXIgZnJvbSAnc2FnZXNzLWNvcmUvdXNlcic7XG5cbmltcG9ydCBpbnRlcnNlY3Rpb24gZnJvbSAnbG9kYXNoL2FycmF5L2ludGVyc2VjdGlvbic7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvbGFuZy9pc0FycmF5JztcblxuaW1wb3J0IHR5cGUgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcblxuLyoqXG4gKiBNaXhpbiBidXR0b24uXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5sZXQgcm9sZU1peGluID0ge1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBoYXNPbmU6IHR5cGUoJ2FycmF5JyksXG4gICAgICAgIGhhc0FsbDogdHlwZSgnYXJyYXknKVxuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgMi4yLjA6IHRoaXMgY29tcG9uZW50IGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2Ugc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9yb2xlIGluc3RlYWQnKTtcbiAgICB9LFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHVzZXJSb2xlcyA9IHVzZXIuZ2V0Um9sZXMoKTtcbiAgICAgICAgaWYgKGlzQXJyYXkodGhpcy5wcm9wcy5oYXNBbGwpICYmIGludGVyc2VjdGlvbih1c2VyUm9sZXMsIHRoaXMucHJvcHMuaGFzQWxsKS5sZW5ndGggPT09IHRoaXMucHJvcHMuaGFzQWxsLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0aGlzLnByb3BzLmhhc09uZSkgJiYgaW50ZXJzZWN0aW9uKHVzZXJSb2xlcywgdGhpcy5wcm9wcy5oYXNPbmUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKHJvbGVNaXhpbik7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==