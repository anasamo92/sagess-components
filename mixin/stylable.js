'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    /** @inheritedDocs */
    getDefaultProps: function getDefaultProps() {
        return {
            style: { className: '' }
        };
    },

    /** @inheritedDocs */
    propTypes: {
        style: (0, _types2.default)('object')
    },
    /**
    * Get the className from the style.className props
    * @returns {string} - the className.
    */
    _getStyleClassName: function getStyleClassName() {
        if (this.props.style && this.props.style.className) {
            return this.props.style.className;
        }
        return '';
    }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZ2V0RGVmYXVsdFByb3BzIiwic3R5bGUiLCJjbGFzc05hbWUiLCJwcm9wVHlwZXMiLCJfZ2V0U3R5bGVDbGFzc05hbWUiLCJnZXRTdHlsZUNsYXNzTmFtZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ1g7QUFDQUEsbUJBRlcsNkJBRU87QUFDZCxlQUFPO0FBQ0hDLG1CQUFPLEVBQUVDLFdBQVcsRUFBYjtBQURKLFNBQVA7QUFHSCxLQU5VOztBQU9YO0FBQ0FDLGVBQVc7QUFDUEYsZUFBTyxxQkFBTSxRQUFOO0FBREEsS0FSQTtBQVdYOzs7O0FBSUFHLHdCQUFvQixTQUFTQyxpQkFBVCxHQUE2QjtBQUM3QyxZQUFJLEtBQUtDLEtBQUwsQ0FBV0wsS0FBWCxJQUFvQixLQUFLSyxLQUFMLENBQVdMLEtBQVgsQ0FBaUJDLFNBQXpDLEVBQW9EO0FBQ2hELG1CQUFPLEtBQUtJLEtBQUwsQ0FBV0wsS0FBWCxDQUFpQkMsU0FBeEI7QUFDSDtBQUNELGVBQU8sRUFBUDtBQUNIO0FBcEJVLEMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlcyBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLyoqIEBpbmhlcml0ZWREb2NzICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3R5bGU6IHsgY2xhc3NOYW1lOiAnJyB9XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRlZERvY3MgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgc3R5bGU6IHR5cGVzKCdvYmplY3QnKVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIGNsYXNzTmFtZSBmcm9tIHRoZSBzdHlsZS5jbGFzc05hbWUgcHJvcHNcbiAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gdGhlIGNsYXNzTmFtZS5cbiAgICAqL1xuICAgIF9nZXRTdHlsZUNsYXNzTmFtZTogZnVuY3Rpb24gZ2V0U3R5bGVDbGFzc05hbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0eWxlICYmIHRoaXMucHJvcHMuc3R5bGUuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zdHlsZS5jbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn07XG4iXX0=