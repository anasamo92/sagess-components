'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _summary = require('../../../list/summary');

var _referenceBehaviour = require('../../../common/form/mixin/reference-behaviour');

var _referenceBehaviour2 = _interopRequireDefault(_referenceBehaviour);

var _storeBehaviour = require('../../../common/mixin/store-behaviour');

var _storeBehaviour2 = _interopRequireDefault(_storeBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mixins
var scopeAll = 'ALL';
// Components
// Dependencies


var Summary = {
    /**
    * Component's mixins
    * @type {Array}
    */
    mixins: [_referenceBehaviour2.default, _storeBehaviour2.default],

    /**
    * Reference names to be fetched by the reference behaviour
    * @type {Array}
    */
    referenceNames: ['scopes'],

    /**
     * Get the default props
     * @return {object} the default props
     */
    getDefaultProps: function getDefaultProps() {
        return {
            totalCount: 0,
            query: '',
            action: undefined,
            scope: undefined
        };
    },

    /**
     * Scope click handler
     * Set the scope to ALL.
     */
    _onScopeClick: function _onScopeClick() {
        this.props.action.updateProperties({
            scope: scopeAll,
            selectedFacets: {},
            groupingKey: undefined
        });
    },
    _getScopeLabel: function _getScopeLabel() {
        var _this = this;

        if (this.state && this.state.reference.scopes) {
            var selectedScope = this.state.reference.scopes.find(function (scope) {
                return scope.code === _this.props.scope;
            });
            return selectedScope.label || this.props.scope;
        }
        return this.props.scope;
    },

    /**
     * Render the component
     * @return {HTML} the rendered component
     */
    render: function render() {
        var scope = this.props.scope && this.props.scope !== scopeAll ? {
            scope: {
                code: this.props.scope,
                label: 'Scope',
                value: this._getScopeLabel()
            }
        } : undefined;
        return _react2.default.createElement(_summary.component, {
            'data-focus': 'advanced-search-list-summary',
            nb: this.props.totalCount,
            queryText: this.props.query,
            scopeList: scope,
            scopeClickAction: this._onScopeClick
        });
    }
};

var _builder = (0, _builder3.default)(Summary),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsic2NvcGVBbGwiLCJTdW1tYXJ5IiwibWl4aW5zIiwicmVmZXJlbmNlQmVoYXZpb3VyIiwic3RvcmVCZWhhdmlvdXIiLCJyZWZlcmVuY2VOYW1lcyIsImdldERlZmF1bHRQcm9wcyIsInRvdGFsQ291bnQiLCJxdWVyeSIsImFjdGlvbiIsInVuZGVmaW5lZCIsInNjb3BlIiwiX29uU2NvcGVDbGljayIsInByb3BzIiwidXBkYXRlUHJvcGVydGllcyIsInNlbGVjdGVkRmFjZXRzIiwiZ3JvdXBpbmdLZXkiLCJfZ2V0U2NvcGVMYWJlbCIsInN0YXRlIiwicmVmZXJlbmNlIiwic2NvcGVzIiwic2VsZWN0ZWRTY29wZSIsImZpbmQiLCJjb2RlIiwibGFiZWwiLCJyZW5kZXIiLCJ2YWx1ZSIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUZBO0FBSUEsSUFBTUEsV0FBVyxLQUFqQjtBQU5BO0FBSEE7OztBQVdBLElBQU1DLFVBQVU7QUFDWjs7OztBQUlBQyxZQUFRLENBQUNDLDRCQUFELEVBQXFCQyx3QkFBckIsQ0FMSTs7QUFPWjs7OztBQUlBQyxvQkFBZ0IsQ0FBQyxRQUFELENBWEo7O0FBYVo7Ozs7QUFJQUMsbUJBakJZLDZCQWlCTTtBQUNkLGVBQVE7QUFDSkMsd0JBQVksQ0FEUjtBQUVKQyxtQkFBTyxFQUZIO0FBR0pDLG9CQUFRQyxTQUhKO0FBSUpDLG1CQUFPRDtBQUpILFNBQVI7QUFNSCxLQXhCVzs7QUF5Qlo7Ozs7QUFJQUUsaUJBN0JZLDJCQTZCSTtBQUNaLGFBQUtDLEtBQUwsQ0FBV0osTUFBWCxDQUFrQkssZ0JBQWxCLENBQW1DO0FBQy9CSCxtQkFBT1gsUUFEd0I7QUFFL0JlLDRCQUFnQixFQUZlO0FBRy9CQyx5QkFBYU47QUFIa0IsU0FBbkM7QUFLSCxLQW5DVztBQW9DWk8sa0JBcENZLDRCQW9DSztBQUFBOztBQUNiLFlBQUksS0FBS0MsS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsTUFBdkMsRUFBK0M7QUFDM0MsZ0JBQU1DLGdCQUFnQixLQUFLSCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCRSxJQUE1QixDQUFpQztBQUFBLHVCQUNuRFgsTUFBTVksSUFBTixLQUFlLE1BQUtWLEtBQUwsQ0FBV0YsS0FEeUI7QUFBQSxhQUFqQyxDQUF0QjtBQUdBLG1CQUFPVSxjQUFjRyxLQUFkLElBQXVCLEtBQUtYLEtBQUwsQ0FBV0YsS0FBekM7QUFDSDtBQUNELGVBQU8sS0FBS0UsS0FBTCxDQUFXRixLQUFsQjtBQUNILEtBNUNXOztBQTZDWjs7OztBQUlBYyxVQWpEWSxvQkFpREg7QUFDTCxZQUFNZCxRQUFRLEtBQUtFLEtBQUwsQ0FBV0YsS0FBWCxJQUFvQixLQUFLRSxLQUFMLENBQVdGLEtBQVgsS0FBcUJYLFFBQXpDLEdBQW9EO0FBQzlEVyxtQkFBTztBQUNIWSxzQkFBTSxLQUFLVixLQUFMLENBQVdGLEtBRGQ7QUFFSGEsdUJBQU8sT0FGSjtBQUdIRSx1QkFBTyxLQUFLVCxjQUFMO0FBSEo7QUFEdUQsU0FBcEQsR0FNVlAsU0FOSjtBQU9BLGVBQ0ksOEJBQUMsa0JBQUQ7QUFDSSwwQkFBVyw4QkFEZjtBQUVJLGdCQUFJLEtBQUtHLEtBQUwsQ0FBV04sVUFGbkI7QUFHSSx1QkFBVyxLQUFLTSxLQUFMLENBQVdMLEtBSDFCO0FBSUksdUJBQVdHLEtBSmY7QUFLSSw4QkFBa0IsS0FBS0M7QUFMM0IsVUFESjtBQVNIO0FBbEVXLENBQWhCOztlQXFFNkIsdUJBQVFYLE9BQVIsQztJQUFyQjBCLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBjb21wb25lbnQgYXMgTGlzdFN1bW1hcnkgfSBmcm9tICcuLi8uLi8uLi9saXN0L3N1bW1hcnknO1xuLy8gTWl4aW5zXG5pbXBvcnQgcmVmZXJlbmNlQmVoYXZpb3VyIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9mb3JtL21peGluL3JlZmVyZW5jZS1iZWhhdmlvdXInO1xuaW1wb3J0IHN0b3JlQmVoYXZpb3VyIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9taXhpbi9zdG9yZS1iZWhhdmlvdXInO1xuXG5jb25zdCBzY29wZUFsbCA9ICdBTEwnO1xuXG5jb25zdCBTdW1tYXJ5ID0ge1xuICAgIC8qKlxuICAgICogQ29tcG9uZW50J3MgbWl4aW5zXG4gICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgKi9cbiAgICBtaXhpbnM6IFtyZWZlcmVuY2VCZWhhdmlvdXIsIHN0b3JlQmVoYXZpb3VyXSxcblxuICAgIC8qKlxuICAgICogUmVmZXJlbmNlIG5hbWVzIHRvIGJlIGZldGNoZWQgYnkgdGhlIHJlZmVyZW5jZSBiZWhhdmlvdXJcbiAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAqL1xuICAgIHJlZmVyZW5jZU5hbWVzOiBbJ3Njb3BlcyddLFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IHByb3BzXG4gICAgICogQHJldHVybiB7b2JqZWN0fSB0aGUgZGVmYXVsdCBwcm9wc1xuICAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgYWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzY29wZTogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2NvcGUgY2xpY2sgaGFuZGxlclxuICAgICAqIFNldCB0aGUgc2NvcGUgdG8gQUxMLlxuICAgICAqL1xuICAgIF9vblNjb3BlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9uLnVwZGF0ZVByb3BlcnRpZXMoe1xuICAgICAgICAgICAgc2NvcGU6IHNjb3BlQWxsLFxuICAgICAgICAgICAgc2VsZWN0ZWRGYWNldHM6IHt9LFxuICAgICAgICAgICAgZ3JvdXBpbmdLZXk6IHVuZGVmaW5lZFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIF9nZXRTY29wZUxhYmVsKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAmJiB0aGlzLnN0YXRlLnJlZmVyZW5jZS5zY29wZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU2NvcGUgPSB0aGlzLnN0YXRlLnJlZmVyZW5jZS5zY29wZXMuZmluZChzY29wZSA9PlxuICAgICAgICAgICAgICAgIHNjb3BlLmNvZGUgPT09IHRoaXMucHJvcHMuc2NvcGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFNjb3BlLmxhYmVsIHx8IHRoaXMucHJvcHMuc2NvcGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2NvcGU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudFxuICAgICAqIEByZXR1cm4ge0hUTUx9IHRoZSByZW5kZXJlZCBjb21wb25lbnRcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcy5wcm9wcy5zY29wZSAmJiB0aGlzLnByb3BzLnNjb3BlICE9PSBzY29wZUFsbCA/IHtcbiAgICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5wcm9wcy5zY29wZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Njb3BlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fZ2V0U2NvcGVMYWJlbCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlzdFN1bW1hcnlcbiAgICAgICAgICAgICAgICBkYXRhLWZvY3VzPSdhZHZhbmNlZC1zZWFyY2gtbGlzdC1zdW1tYXJ5J1xuICAgICAgICAgICAgICAgIG5iPXt0aGlzLnByb3BzLnRvdGFsQ291bnR9XG4gICAgICAgICAgICAgICAgcXVlcnlUZXh0PXt0aGlzLnByb3BzLnF1ZXJ5fVxuICAgICAgICAgICAgICAgIHNjb3BlTGlzdD17c2NvcGV9XG4gICAgICAgICAgICAgICAgc2NvcGVDbGlja0FjdGlvbj17dGhpcy5fb25TY29wZUNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoU3VtbWFyeSk7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==