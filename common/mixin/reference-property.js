'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var referenceMixin = {
    /** @inheritdoc */
    getDefaultProps: function getDefaultProps() {
        return {
            /**
             * Size of the label in the grid system.
             * @type {Number}
             */
            reference: {}
        };
    },


    /** @inheritdoc */
    propTypes: {
        reference: (0, _types2.default)('object')
    },

    /**
     * @returns {object} -
     */
    _getReference: function _getReference() {
        return this.props.reference;
    }
};

exports.default = referenceMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsicmVmZXJlbmNlTWl4aW4iLCJnZXREZWZhdWx0UHJvcHMiLCJyZWZlcmVuY2UiLCJwcm9wVHlwZXMiLCJfZ2V0UmVmZXJlbmNlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFJQSxpQkFBaUI7QUFDakI7QUFDQUMsbUJBRmlCLDZCQUVDO0FBQ2QsZUFBTztBQUNIOzs7O0FBSUFDLHVCQUFXO0FBTFIsU0FBUDtBQU9ILEtBVmdCOzs7QUFZakI7QUFDQUMsZUFBVztBQUNQRCxtQkFBVyxxQkFBSyxRQUFMO0FBREosS0FiTTs7QUFpQmpCOzs7QUFHQUUsaUJBcEJpQiwyQkFvQkQ7QUFDWixlQUFPLEtBQUtDLEtBQUwsQ0FBV0gsU0FBbEI7QUFDSDtBQXRCZ0IsQ0FBckI7O2tCQXlCZUYsYyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcblxubGV0IHJlZmVyZW5jZU1peGluID0ge1xuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2l6ZSBvZiB0aGUgbGFiZWwgaW4gdGhlIGdyaWQgc3lzdGVtLlxuICAgICAgICAgICAgICogQHR5cGUge051bWJlcn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVmZXJlbmNlOiB7fVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiB0eXBlKCdvYmplY3QnKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtXG4gICAgICovXG4gICAgX2dldFJlZmVyZW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVmZXJlbmNlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZmVyZW5jZU1peGluO1xuIl19