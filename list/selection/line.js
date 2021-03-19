'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = undefined;

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEqual = require('lodash/lang/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _actionContextual = require('../action-contextual');

var _input = require('../../components/input');

var _referenceProperty = require('../../common/mixin/reference-property');

var _referenceProperty2 = _interopRequireDefault(_referenceProperty);

var _definition = require('../../common/mixin/definition');

var _definition2 = _interopRequireDefault(_definition);

var _builtInComponents = require('../mixin/built-in-components');

var _builtInComponents2 = _interopRequireDefault(_builtInComponents);

var _i18n = require('../../common/i18n');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mixins

// Components
var lineMixin = {
    /**
    * React component name.
    */
    displayName: 'SelectionLine',

    /**
    * Mixin dependancies.
    */
    mixins: [_i18n.mixin, _definition2.default, _referenceProperty2.default, _builtInComponents2.default],

    /**
     * Get default props
     * @return {object} default props
     */
    getDefaultProps: function getDefaultProps() {
        return {
            isSelection: true,
            operationList: {}
        };
    },


    /**
    * line property validation.
    * @type {Object}
    */
    propTypes: {
        data: (0, _types2.default)('object'),
        isSelected: (0, _types2.default)('bool'),
        isSelection: (0, _types2.default)('bool'),
        onLineClick: (0, _types2.default)('func'),
        onSelection: (0, _types2.default)('func'),
        operationList: (0, _types2.default)(['array', 'object'])
    },

    /**
    * State initialization.
    * @return {object} initial state
    */
    getInitialState: function getInitialState() {
        var data = this.props.data;
        var isSelected = this.props.isSelected;

        if (this.selectedInitializer) {
            // this allows to initiate a data specific value for isSelected
            isSelected = this.selectedInitializer(data);
        }
        return {
            isSelected: isSelected || false
        };
    },


    /**
     * Before component is mounted.
     */
    componentWillMount: function componentWillMount() {
        var _props = this.props,
            data = _props.data,
            isSelection = _props.isSelection;

        this._isSelectionnable = isSelection;
        if (this.selectionnableInitializer) {
            this._isSelectionnable = this.selectionnableInitializer(data);
        }
    },


    /**
     * Component will receive props
     * @param  {object} nextProps new component's props
     */
    componentWillReceiveProps: function componentWillReceiveProps(_ref) {
        var isSelected = _ref.isSelected,
            data = _ref.data;

        if ((0, _isEqual2.default)(data, this.props.data)) {
            if (isSelected !== undefined) {
                this.setState({ isSelected: isSelected });
            }
        } else {
            this.setState({ isSelected: false });
        }
    },


    /**
    * Get the line value.
    * @return {object} the line value
    */
    getValue: function getValue() {
        var item = this.props.data;
        var isSelected = this.state.isSelected;

        return { item: item, isSelected: isSelected };
    },


    /**
    * Selection Click handler.
    */
    _handleSelectionClick: function _handleSelectionClick() {
        var isSelected = !this.state.isSelected;
        var _props2 = this.props,
            data = _props2.data,
            onSelection = _props2.onSelection;

        this.setState({ isSelected: isSelected }, function () {
            if (onSelection) {
                onSelection(data, isSelected);
            }
        });
    },


    /**
    * Line Click handler.
    */
    _handleLineClick: function _handleLineClick() {
        var _props3 = this.props,
            data = _props3.data,
            onLineClick = _props3.onLineClick;

        if (onLineClick) {
            onLineClick(data);
        }
    },


    /**
    * Render the left box for selection
    * @return {XML} the rendered selection box
    */
    _renderSelectionBox: function _renderSelectionBox() {
        var isSelected = this.state.isSelected;

        if (this._isSelectionnable) {
            var selectionClass = isSelected ? 'selected' : 'no-selection';
            return _react2.default.createElement(
                'div',
                { className: 'sl-selection ' + selectionClass },
                _react2.default.createElement(_input.Checkbox, { onChange: this._handleSelectionClick, value: isSelected })
            );
        }
        return null;
    },


    /**
    * render content for a line.
    * @return {XML} the rendered line content
    */
    _renderLineContent: function _renderLineContent() {
        var data = this.props.data;
        var title = data.title,
            body = data.body;

        if (this.renderLineContent) {
            return this.renderLineContent(data);
        } else {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    title
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    body
                )
            );
        }
    },


    /**
    * Render actions which can be applied on the line
    * @return {XML} the rendered actions
    */
    _renderActions: function _renderActions() {
        var props = Object.assign({ operationParam: this.props.data }, this.props);
        if (0 < props.operationList.length) {
            return _react2.default.createElement(
                'div',
                { className: 'sl-actions' },
                _react2.default.createElement(_actionContextual.component, props)
            );
        }
    },


    /**
    * Render line in list.
    *  @return {XML} the rendered line
    */
    render: function render() {
        if (this.renderLine) {
            return this.renderLine();
        } else {
            return _react2.default.createElement(
                'li',
                { 'data-focus': 'sl-line' },
                this._renderSelectionBox(),
                _react2.default.createElement(
                    'div',
                    { className: 'sl-content', onClick: this._handleLineClick },
                    this._renderLineContent()
                ),
                this._renderActions()
            );
        }
    }
}; // Dependencies
exports.default = {
    mixin: lineMixin
};
exports.mixin = lineMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibGluZU1peGluIiwiZGlzcGxheU5hbWUiLCJtaXhpbnMiLCJ0cmFuc2xhdGlvbk1peGluIiwiZGVmaW5pdGlvbk1peGluIiwicmVmZXJlbmNlTWl4aW4iLCJidWlsdEluQ29tcG9uZW50c01peGluIiwiZ2V0RGVmYXVsdFByb3BzIiwiaXNTZWxlY3Rpb24iLCJvcGVyYXRpb25MaXN0IiwicHJvcFR5cGVzIiwiZGF0YSIsImlzU2VsZWN0ZWQiLCJvbkxpbmVDbGljayIsIm9uU2VsZWN0aW9uIiwiZ2V0SW5pdGlhbFN0YXRlIiwicHJvcHMiLCJzZWxlY3RlZEluaXRpYWxpemVyIiwiY29tcG9uZW50V2lsbE1vdW50IiwiX2lzU2VsZWN0aW9ubmFibGUiLCJzZWxlY3Rpb25uYWJsZUluaXRpYWxpemVyIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiZ2V0VmFsdWUiLCJpdGVtIiwic3RhdGUiLCJfaGFuZGxlU2VsZWN0aW9uQ2xpY2siLCJfaGFuZGxlTGluZUNsaWNrIiwiX3JlbmRlclNlbGVjdGlvbkJveCIsInNlbGVjdGlvbkNsYXNzIiwiX3JlbmRlckxpbmVDb250ZW50IiwidGl0bGUiLCJib2R5IiwicmVuZGVyTGluZUNvbnRlbnQiLCJfcmVuZGVyQWN0aW9ucyIsIm9wZXJhdGlvblBhcmFtIiwibGVuZ3RoIiwicmVuZGVyIiwicmVuZGVyTGluZSIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFKQTs7QUFIQTtBQVNBLElBQU1BLFlBQVk7QUFDZDs7O0FBR0FDLGlCQUFhLGVBSkM7O0FBTWQ7OztBQUdBQyxZQUFRLENBQUNDLFdBQUQsRUFBbUJDLG9CQUFuQixFQUFvQ0MsMkJBQXBDLEVBQW9EQywyQkFBcEQsQ0FUTTs7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QUNILG1CQUNJO0FBQUE7QUFBQSxrQkFBSSxjQUFXLFNBQWY7QUFDSyxxQkFBS1YsbUJBQUwsRUFETDtBQUVJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFlBQWYsRUFBNEIsU0FBUyxLQUFLRCxnQkFBMUM7QUFDSyx5QkFBS0csa0JBQUw7QUFETCxpQkFGSjtBQUtLLHFCQUFLSSxjQUFMO0FBTEwsYUFESjtBQVNIO0FBQ0o7QUFqTGEsQ0FBbEIsQyxDQWJBO2tCQWlNZTtBQUNYSyxXQUFPeEM7QUFESSxDO1FBSUV3QyxLLEdBQWJ4QyxTIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCB0eXBlcyBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9sYW5nL2lzRXF1YWwnO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIENvbnRleHR1YWxBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9uLWNvbnRleHR1YWwnO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0Jztcbi8vIE1peGluc1xuaW1wb3J0IHJlZmVyZW5jZU1peGluIGZyb20gJy4uLy4uL2NvbW1vbi9taXhpbi9yZWZlcmVuY2UtcHJvcGVydHknO1xuaW1wb3J0IGRlZmluaXRpb25NaXhpbiBmcm9tICcuLi8uLi9jb21tb24vbWl4aW4vZGVmaW5pdGlvbic7XG5pbXBvcnQgYnVpbHRJbkNvbXBvbmVudHNNaXhpbiBmcm9tICcuLi9taXhpbi9idWlsdC1pbi1jb21wb25lbnRzJztcbmltcG9ydCB7IG1peGluIGFzIHRyYW5zbGF0aW9uTWl4aW4gfSBmcm9tICcuLi8uLi9jb21tb24vaTE4bic7XG5cbmNvbnN0IGxpbmVNaXhpbiA9IHtcbiAgICAvKipcbiAgICAqIFJlYWN0IGNvbXBvbmVudCBuYW1lLlxuICAgICovXG4gICAgZGlzcGxheU5hbWU6ICdTZWxlY3Rpb25MaW5lJyxcblxuICAgIC8qKlxuICAgICogTWl4aW4gZGVwZW5kYW5jaWVzLlxuICAgICovXG4gICAgbWl4aW5zOiBbdHJhbnNsYXRpb25NaXhpbiwgZGVmaW5pdGlvbk1peGluLCByZWZlcmVuY2VNaXhpbiwgYnVpbHRJbkNvbXBvbmVudHNNaXhpbl0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgZGVmYXVsdCBwcm9wc1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gZGVmYXVsdCBwcm9wc1xuICAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzU2VsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgb3BlcmF0aW9uTGlzdDoge31cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBsaW5lIHByb3BlcnR5IHZhbGlkYXRpb24uXG4gICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGRhdGE6IHR5cGVzKCdvYmplY3QnKSxcbiAgICAgICAgaXNTZWxlY3RlZDogdHlwZXMoJ2Jvb2wnKSxcbiAgICAgICAgaXNTZWxlY3Rpb246IHR5cGVzKCdib29sJyksXG4gICAgICAgIG9uTGluZUNsaWNrOiB0eXBlcygnZnVuYycpLFxuICAgICAgICBvblNlbGVjdGlvbjogdHlwZXMoJ2Z1bmMnKSxcbiAgICAgICAgb3BlcmF0aW9uTGlzdDogdHlwZXMoWydhcnJheScsICdvYmplY3QnXSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBTdGF0ZSBpbml0aWFsaXphdGlvbi5cbiAgICAqIEByZXR1cm4ge29iamVjdH0gaW5pdGlhbCBzdGF0ZVxuICAgICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7IGlzU2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5pdGlhbGl6ZXIpIHsgLy8gdGhpcyBhbGxvd3MgdG8gaW5pdGlhdGUgYSBkYXRhIHNwZWNpZmljIHZhbHVlIGZvciBpc1NlbGVjdGVkXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEluaXRpYWxpemVyKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkIHx8IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJlZm9yZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSwgaXNTZWxlY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMuX2lzU2VsZWN0aW9ubmFibGUgPSBpc1NlbGVjdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9ubmFibGVJbml0aWFsaXplcikge1xuICAgICAgICAgICAgdGhpcy5faXNTZWxlY3Rpb25uYWJsZSA9IHRoaXMuc2VsZWN0aW9ubmFibGVJbml0aWFsaXplcihkYXRhKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQgd2lsbCByZWNlaXZlIHByb3BzXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBuZXh0UHJvcHMgbmV3IGNvbXBvbmVudCdzIHByb3BzXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IGlzU2VsZWN0ZWQsIGRhdGEgfSkge1xuICAgICAgICBpZiAoaXNFcXVhbChkYXRhLCB0aGlzLnByb3BzLmRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoaXNTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2VsZWN0ZWQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNTZWxlY3RlZDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBHZXQgdGhlIGxpbmUgdmFsdWUuXG4gICAgKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBsaW5lIHZhbHVlXG4gICAgKi9cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBpdGVtIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGlzU2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiB7IGl0ZW0sIGlzU2VsZWN0ZWQgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBTZWxlY3Rpb24gQ2xpY2sgaGFuZGxlci5cbiAgICAqL1xuICAgIF9oYW5kbGVTZWxlY3Rpb25DbGljaygpIHtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9ICF0aGlzLnN0YXRlLmlzU2VsZWN0ZWQ7XG4gICAgICAgIGNvbnN0IHsgZGF0YSwgb25TZWxlY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1NlbGVjdGVkIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmIChvblNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uKGRhdGEsIGlzU2VsZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBMaW5lIENsaWNrIGhhbmRsZXIuXG4gICAgKi9cbiAgICBfaGFuZGxlTGluZUNsaWNrKCkge1xuICAgICAgICBjb25zdCB7IGRhdGEsIG9uTGluZUNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25MaW5lQ2xpY2spIHtcbiAgICAgICAgICAgIG9uTGluZUNsaWNrKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBsZWZ0IGJveCBmb3Igc2VsZWN0aW9uXG4gICAgKiBAcmV0dXJuIHtYTUx9IHRoZSByZW5kZXJlZCBzZWxlY3Rpb24gYm94XG4gICAgKi9cbiAgICBfcmVuZGVyU2VsZWN0aW9uQm94KCkge1xuICAgICAgICBjb25zdCB7IGlzU2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmICh0aGlzLl9pc1NlbGVjdGlvbm5hYmxlKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25DbGFzcyA9IGlzU2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJ25vLXNlbGVjdGlvbic7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2wtc2VsZWN0aW9uICR7c2VsZWN0aW9uQ2xhc3N9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17dGhpcy5faGFuZGxlU2VsZWN0aW9uQ2xpY2t9IHZhbHVlPXtpc1NlbGVjdGVkfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiByZW5kZXIgY29udGVudCBmb3IgYSBsaW5lLlxuICAgICogQHJldHVybiB7WE1MfSB0aGUgcmVuZGVyZWQgbGluZSBjb250ZW50XG4gICAgKi9cbiAgICBfcmVuZGVyTGluZUNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgYm9keSB9ID0gZGF0YTtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyTGluZUNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxpbmVDb250ZW50KGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57Ym9keX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgYWN0aW9ucyB3aGljaCBjYW4gYmUgYXBwbGllZCBvbiB0aGUgbGluZVxuICAgICogQHJldHVybiB7WE1MfSB0aGUgcmVuZGVyZWQgYWN0aW9uc1xuICAgICovXG4gICAgX3JlbmRlckFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0geyBvcGVyYXRpb25QYXJhbTogdGhpcy5wcm9wcy5kYXRhLCAuLi50aGlzLnByb3BzIH07XG4gICAgICAgIGlmICgwIDwgcHJvcHMub3BlcmF0aW9uTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsLWFjdGlvbnMnPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGV4dHVhbEFjdGlvbnMgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIFJlbmRlciBsaW5lIGluIGxpc3QuXG4gICAgKiAgQHJldHVybiB7WE1MfSB0aGUgcmVuZGVyZWQgbGluZVxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJMaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJMaW5lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBkYXRhLWZvY3VzPSdzbC1saW5lJz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlclNlbGVjdGlvbkJveCgpfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2wtY29udGVudCcgb25DbGljaz17dGhpcy5faGFuZGxlTGluZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJMaW5lQ29udGVudCgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckFjdGlvbnMoKX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbjogbGluZU1peGluXG59XG5leHBvcnQge1xuICAgIGxpbmVNaXhpbiBhcyBtaXhpblxufVxuIl19