'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = undefined;

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mixin used in order to create a popin or a menu.
 * @type {Object} - popin behavour mixin
 */
var PopinProperties = {
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please wrap content inside a popin instead');
    },

    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            direction: 'vertical', //horizontal
            position: 'left', // top, bottom, right, left
            open: false
        };
    },

    /** @inheritdoc */
    propTypes: {
        open: (0, _types2.default)('bool')
    },
    /** @inheritdoc */
    getInitialState: function getInitialState() {
        return {
            open: this.props.open
        };
    }
};

exports.mixin = PopinProperties;
exports.default = { mixin: PopinProperties };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiUG9waW5Qcm9wZXJ0aWVzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJnZXREZWZhdWx0UHJvcHMiLCJkaXJlY3Rpb24iLCJwb3NpdGlvbiIsIm9wZW4iLCJwcm9wVHlwZXMiLCJnZXRJbml0aWFsU3RhdGUiLCJwcm9wcyIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBOzs7O0FBSUEsSUFBSUEsa0JBQWtCO0FBQ2xCQyxzQkFEa0IsZ0NBQ0c7QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsa0dBQWI7QUFDSCxLQUhpQjs7QUFJbEI7QUFDQUMsbUJBTGtCLDZCQUtBO0FBQ2QsZUFBTztBQUNIQyx1QkFBVyxVQURSLEVBQ21CO0FBQ3RCQyxzQkFBVSxNQUZQLEVBRWU7QUFDbEJDLGtCQUFNO0FBSEgsU0FBUDtBQUtILEtBWGlCOztBQVlsQjtBQUNBQyxlQUFXO0FBQ1BELGNBQU0scUJBQUssTUFBTDtBQURDLEtBYk87QUFnQmxCO0FBQ0FFLG1CQWpCa0IsNkJBaUJBO0FBQ2QsZUFBTztBQUNIRixrQkFBTSxLQUFLRyxLQUFMLENBQVdIO0FBRGQsU0FBUDtBQUdIO0FBckJpQixDQUF0Qjs7UUF3QjRCSSxLLEdBQW5CWCxlO2tCQUNNLEVBQUVXLE9BQU9YLGVBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcblxuLyoqXG4gKiBNaXhpbiB1c2VkIGluIG9yZGVyIHRvIGNyZWF0ZSBhIHBvcGluIG9yIGEgbWVudS5cbiAqIEB0eXBlIHtPYmplY3R9IC0gcG9waW4gYmVoYXZvdXIgbWl4aW5cbiAqL1xubGV0IFBvcGluUHJvcGVydGllcyA9IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAyLjIuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHdyYXAgY29udGVudCBpbnNpZGUgYSBwb3BpbiBpbnN0ZWFkJyk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsLy9ob3Jpem9udGFsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLCAvLyB0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgb3BlbjogdHlwZSgnYm9vbCcpXG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcGVuOiB0aGlzLnByb3BzLm9wZW5cbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBQb3BpblByb3BlcnRpZXMgYXMgbWl4aW4gfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW46IFBvcGluUHJvcGVydGllcyB9O1xuIl19