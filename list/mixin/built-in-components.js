'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fieldComponentBehaviour = require('../../common/mixin/field-component-behaviour');

var _fieldComponentBehaviour2 = _interopRequireDefault(_fieldComponentBehaviour);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _field = require('../../common/field');

var _text = require('../../components/display/text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builtInComponentsMixin = {
    /**
     * inherited minxins
     */
    mixins: [_fieldComponentBehaviour2.default],

    /**
     * @inheritDoc
     */
    getDefaultProps: function getDefaultProps() {
        return {
            isEdit: false
        };
    },


    /**
     * create an edit field for the given property metadata.
     * @param {string} name - name of the field.
     * @param {object} options - An object which contains all options for the built of the field.
     * @returns {object} - A React Field.
     */
    fieldFor: function fieldFor(name, options) {
        options = (0, _objectAssign2.default)({}, {
            isEdit: this.props.isEdit,
            hasLabel: false,
            value: this.props.data[name],
            refContainer: this.props.reference,
            style: { className: 'form-list' }
        }, options);

        var fieldProps = this._buildFieldProps(name, options, this);
        return _react2.default.createElement(_field.component, fieldProps);
    },

    /**
     * Add a select with a list name component It is a shortcut for the fieldComponent.
     * @param {string} name         - The property name.
     * @param {string} referenceKey - The list name in the references.
     * @param {object} options - An object which contains all options for the built of the field.
     * @returns {object} - A React Field.
     */
    selectFor: function selectFor(name, referenceKey, options) {
        options = options || {};
        options.listName = referenceKey;
        return this.fieldFor(name, options);
    },

    /**
     * Display a field.
     * @param {string} name - property name.
     * @param {object} options - options object.
     * @returns {object} - A React Field in display mode.
     */
    displayFor: function displayFor(name, options) {
        options = (0, _objectAssign2.default)({}, {
            isEdit: false,
            hasLabel: false,
            value: this.props.data[name],
            refContainer: this.props.reference,
            style: { className: 'form-list' }
        }, options);

        var fieldProps = this._buildFieldProps(name, options, this);
        return _react2.default.createElement(_field.component, fieldProps);
    },


    /**
     * Display the text for a given property.
     * @param {string} name  - property name.
     * @param {object} options - Option object
     * @returns {object} - A React component.
     */
    textFor: function textFor(name, options) {
        options = options || {};
        var def = this.definition && this.definition[name] ? this.definition[name] : {};
        return _react2.default.createElement(_text2.default, {
            name: options.name || this.definitionPath + '.' + name,
            style: options.style,
            FieldComponent: def.FieldComponent,
            formatter: options.formatter || def.formatter,
            value: this.props.data[name]
        });
    }
};

exports.default = builtInComponentsMixin;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiYnVpbHRJbkNvbXBvbmVudHNNaXhpbiIsIm1peGlucyIsImZpZWxkQmVoYXZpb3VyTWl4aW4iLCJnZXREZWZhdWx0UHJvcHMiLCJpc0VkaXQiLCJmaWVsZEZvciIsIm5hbWUiLCJvcHRpb25zIiwicHJvcHMiLCJoYXNMYWJlbCIsInZhbHVlIiwiZGF0YSIsInJlZkNvbnRhaW5lciIsInJlZmVyZW5jZSIsInN0eWxlIiwiY2xhc3NOYW1lIiwiZmllbGRQcm9wcyIsIl9idWlsZEZpZWxkUHJvcHMiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGaWVsZCIsInNlbGVjdEZvciIsInJlZmVyZW5jZUtleSIsImxpc3ROYW1lIiwiZGlzcGxheUZvciIsInRleHRGb3IiLCJkZWYiLCJkZWZpbml0aW9uIiwiRGlzcGxheVRleHQiLCJkZWZpbml0aW9uUGF0aCIsIkZpZWxkQ29tcG9uZW50IiwiZm9ybWF0dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEseUJBQXlCO0FBQzNCOzs7QUFHQUMsWUFBUSxDQUFDQyxpQ0FBRCxDQUptQjs7QUFNM0I7OztBQUdBQyxtQkFUMkIsNkJBU1Q7QUFDZCxlQUFPO0FBQ0hDLG9CQUFRO0FBREwsU0FBUDtBQUdILEtBYjBCOzs7QUFlM0I7Ozs7OztBQU1BQyxZQXJCMkIsb0JBcUJsQkMsSUFyQmtCLEVBcUJaQyxPQXJCWSxFQXFCSDtBQUNwQkEsa0JBQVUsNEJBQU8sRUFBUCxFQUFXO0FBQ2pCSCxvQkFBUSxLQUFLSSxLQUFMLENBQVdKLE1BREY7QUFFakJLLHNCQUFVLEtBRk87QUFHakJDLG1CQUFPLEtBQUtGLEtBQUwsQ0FBV0csSUFBWCxDQUFnQkwsSUFBaEIsQ0FIVTtBQUlqQk0sMEJBQWMsS0FBS0osS0FBTCxDQUFXSyxTQUpSO0FBS2pCQyxtQkFBTyxFQUFFQyxXQUFXLFdBQWI7QUFMVSxTQUFYLEVBTVBSLE9BTk8sQ0FBVjs7QUFRQSxZQUFJUyxhQUFhLEtBQUtDLGdCQUFMLENBQXNCWCxJQUF0QixFQUE0QkMsT0FBNUIsRUFBcUMsSUFBckMsQ0FBakI7QUFDQSxlQUFPVyxnQkFBTUMsYUFBTixDQUFvQkMsZ0JBQXBCLEVBQTJCSixVQUEzQixDQUFQO0FBQ0gsS0FoQzBCOztBQWlDM0I7Ozs7Ozs7QUFPQUssYUF4QzJCLHFCQXdDakJmLElBeENpQixFQXdDWGdCLFlBeENXLEVBd0NHZixPQXhDSCxFQXdDWTtBQUNuQ0Esa0JBQVVBLFdBQVcsRUFBckI7QUFDQUEsZ0JBQVFnQixRQUFSLEdBQW1CRCxZQUFuQjtBQUNBLGVBQU8sS0FBS2pCLFFBQUwsQ0FBY0MsSUFBZCxFQUFvQkMsT0FBcEIsQ0FBUDtBQUNILEtBNUMwQjs7QUE2QzNCOzs7Ozs7QUFNQWlCLGNBbkQyQixzQkFtRGhCbEIsSUFuRGdCLEVBbURWQyxPQW5EVSxFQW1ERDtBQUN0QkEsa0JBQVUsNEJBQU8sRUFBUCxFQUFXO0FBQ2pCSCxvQkFBUSxLQURTO0FBRWpCSyxzQkFBVSxLQUZPO0FBR2pCQyxtQkFBTyxLQUFLRixLQUFMLENBQVdHLElBQVgsQ0FBZ0JMLElBQWhCLENBSFU7QUFJakJNLDBCQUFjLEtBQUtKLEtBQUwsQ0FBV0ssU0FKUjtBQUtqQkMsbUJBQU8sRUFBRUMsV0FBVyxXQUFiO0FBTFUsU0FBWCxFQU1QUixPQU5PLENBQVY7O0FBUUEsWUFBSVMsYUFBYSxLQUFLQyxnQkFBTCxDQUFzQlgsSUFBdEIsRUFBNEJDLE9BQTVCLEVBQXFDLElBQXJDLENBQWpCO0FBQ0EsZUFBT1csZ0JBQU1DLGFBQU4sQ0FBb0JDLGdCQUFwQixFQUEyQkosVUFBM0IsQ0FBUDtBQUNILEtBOUQwQjs7O0FBZ0UzQjs7Ozs7O0FBTUFTLFdBdEUyQixtQkFzRW5CbkIsSUF0RW1CLEVBc0ViQyxPQXRFYSxFQXNFSjtBQUNuQkEsa0JBQVVBLFdBQVcsRUFBckI7QUFDQSxZQUFJbUIsTUFBTyxLQUFLQyxVQUFMLElBQW1CLEtBQUtBLFVBQUwsQ0FBZ0JyQixJQUFoQixDQUFwQixHQUE2QyxLQUFLcUIsVUFBTCxDQUFnQnJCLElBQWhCLENBQTdDLEdBQXFFLEVBQS9FO0FBQ0EsZUFBT1ksZ0JBQU1DLGFBQU4sQ0FBb0JTLGNBQXBCLEVBQWlDO0FBQ3BDdEIsa0JBQU1DLFFBQVFELElBQVIsSUFBbUIsS0FBS3VCLGNBQXhCLFNBQTBDdkIsSUFEWjtBQUVwQ1EsbUJBQU9QLFFBQVFPLEtBRnFCO0FBR3BDZ0IsNEJBQWdCSixJQUFJSSxjQUhnQjtBQUlwQ0MsdUJBQVd4QixRQUFRd0IsU0FBUixJQUFxQkwsSUFBSUssU0FKQTtBQUtwQ3JCLG1CQUFPLEtBQUtGLEtBQUwsQ0FBV0csSUFBWCxDQUFnQkwsSUFBaEI7QUFMNkIsU0FBakMsQ0FBUDtBQU9IO0FBaEYwQixDQUEvQjs7a0JBbUZlTixzQiIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZpZWxkQmVoYXZpb3VyTWl4aW4gZnJvbSAnLi4vLi4vY29tbW9uL21peGluL2ZpZWxkLWNvbXBvbmVudC1iZWhhdmlvdXInO1xyXG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xyXG5pbXBvcnQgeyBjb21wb25lbnQgYXMgRmllbGQgfSBmcm9tICcuLi8uLi9jb21tb24vZmllbGQnO1xyXG5pbXBvcnQgRGlzcGxheVRleHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaXNwbGF5L3RleHQnO1xyXG5cclxuY29uc3QgYnVpbHRJbkNvbXBvbmVudHNNaXhpbiA9IHtcclxuICAgIC8qKlxyXG4gICAgICogaW5oZXJpdGVkIG1pbnhpbnNcclxuICAgICAqL1xyXG4gICAgbWl4aW5zOiBbZmllbGRCZWhhdmlvdXJNaXhpbl0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW5oZXJpdERvY1xyXG4gICAgICovXHJcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNFZGl0OiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGFuIGVkaXQgZmllbGQgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBtZXRhZGF0YS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZmllbGQuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aGljaCBjb250YWlucyBhbGwgb3B0aW9ucyBmb3IgdGhlIGJ1aWx0IG9mIHRoZSBmaWVsZC5cclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSBSZWFjdCBGaWVsZC5cclxuICAgICAqL1xyXG4gICAgZmllbGRGb3IobmFtZSwgb3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMgPSBhc3NpZ24oe30sIHtcclxuICAgICAgICAgICAgaXNFZGl0OiB0aGlzLnByb3BzLmlzRWRpdCxcclxuICAgICAgICAgICAgaGFzTGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy5kYXRhW25hbWVdLFxyXG4gICAgICAgICAgICByZWZDb250YWluZXI6IHRoaXMucHJvcHMucmVmZXJlbmNlLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjbGFzc05hbWU6ICdmb3JtLWxpc3QnIH1cclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgbGV0IGZpZWxkUHJvcHMgPSB0aGlzLl9idWlsZEZpZWxkUHJvcHMobmFtZSwgb3B0aW9ucywgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGQsIGZpZWxkUHJvcHMpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgc2VsZWN0IHdpdGggYSBsaXN0IG5hbWUgY29tcG9uZW50IEl0IGlzIGEgc2hvcnRjdXQgZm9yIHRoZSBmaWVsZENvbXBvbmVudC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgICAgICAgLSBUaGUgcHJvcGVydHkgbmFtZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWZlcmVuY2VLZXkgLSBUaGUgbGlzdCBuYW1lIGluIHRoZSByZWZlcmVuY2VzLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBBbiBvYmplY3Qgd2hpY2ggY29udGFpbnMgYWxsIG9wdGlvbnMgZm9yIHRoZSBidWlsdCBvZiB0aGUgZmllbGQuXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIEEgUmVhY3QgRmllbGQuXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdEZvcihuYW1lLCByZWZlcmVuY2VLZXksIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICBvcHRpb25zLmxpc3ROYW1lID0gcmVmZXJlbmNlS2V5O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkRm9yKG5hbWUsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheSBhIGZpZWxkLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBwcm9wZXJ0eSBuYW1lLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSBSZWFjdCBGaWVsZCBpbiBkaXNwbGF5IG1vZGUuXHJcbiAgICAgKi9cclxuICAgIGRpc3BsYXlGb3IobmFtZSwgb3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMgPSBhc3NpZ24oe30sIHtcclxuICAgICAgICAgICAgaXNFZGl0OiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzTGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy5kYXRhW25hbWVdLFxyXG4gICAgICAgICAgICByZWZDb250YWluZXI6IHRoaXMucHJvcHMucmVmZXJlbmNlLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBjbGFzc05hbWU6ICdmb3JtLWxpc3QnIH1cclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgbGV0IGZpZWxkUHJvcHMgPSB0aGlzLl9idWlsZEZpZWxkUHJvcHMobmFtZSwgb3B0aW9ucywgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGQsIGZpZWxkUHJvcHMpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgdGhlIHRleHQgZm9yIGEgZ2l2ZW4gcHJvcGVydHkuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgLSBwcm9wZXJ0eSBuYW1lLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb24gb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIEEgUmVhY3QgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICB0ZXh0Rm9yKG5hbWUsIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICBsZXQgZGVmID0gKHRoaXMuZGVmaW5pdGlvbiAmJiB0aGlzLmRlZmluaXRpb25bbmFtZV0pID8gdGhpcy5kZWZpbml0aW9uW25hbWVdIDoge307XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlzcGxheVRleHQsIHtcclxuICAgICAgICAgICAgbmFtZTogb3B0aW9ucy5uYW1lIHx8IGAke3RoaXMuZGVmaW5pdGlvblBhdGh9LiR7bmFtZX1gLFxyXG4gICAgICAgICAgICBzdHlsZTogb3B0aW9ucy5zdHlsZSxcclxuICAgICAgICAgICAgRmllbGRDb21wb25lbnQ6IGRlZi5GaWVsZENvbXBvbmVudCxcclxuICAgICAgICAgICAgZm9ybWF0dGVyOiBvcHRpb25zLmZvcm1hdHRlciB8fCBkZWYuZm9ybWF0dGVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy5kYXRhW25hbWVdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidWlsdEluQ29tcG9uZW50c01peGluO1xyXG4iXX0=