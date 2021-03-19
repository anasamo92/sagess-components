'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mixin = require('../../../../common/i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _mdlBehaviour = require('../../../../common/mixin/mdl-behaviour');

var _mdlBehaviour2 = _interopRequireDefault(_mdlBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
*
* @type {Object}
*/
var textAreaMixin = {
    mixins: [_mixin2.default, _mdlBehaviour2.default],
    /**
    * Gets the default props.
    * @return {object} default props
    */
    getDefaultProps: function getDefaultProps() {
        return {
            minlength: 0,
            wrap: 'soft',
            required: false,
            rows: 5,
            cols: 50
        };
    },

    /**
    * Properties validation.
    * @type {Object}
    */
    propTypes: {
        minlength: (0, _types2.default)('number'),
        maxlength: (0, _types2.default)('number'),
        wrap: (0, _types2.default)('string'),
        required: (0, _types2.default)('bool'),
        value: (0, _types2.default)('string'),
        label: (0, _types2.default)('string'),
        rows: (0, _types2.default)('number'),
        cols: (0, _types2.default)('number')
    },
    /** inheritedDoc */
    getInitialState: function getInitialState() {
        return {
            value: this.props.value
        };
    },

    /**
    * On change handler.
    * @param {object} event - Sanitize event.
    */
    _onChange: function onChange(event) {
        this.setState({ value: event.target.value });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    },
    /**
    * Get the value from the input in the DOM.
    */
    getValue: function getTextAreaValue() {
        return _reactDom2.default.findDOMNode(this).value;
    },
    /**
    * Render the Checkbox HTML.
    * @return {VirtualDOM} - The virtual DOM of the checkbox.
    */
    render: function renderTextArea() {
        var _props = this.props,
            cols = _props.cols,
            label = _props.label,
            maxlength = _props.maxlength,
            minlength = _props.minlength,
            rows = _props.rows;
        var value = this.state.value;

        return _react2.default.createElement(
            'div',
            { className: 'mdl-textfield mdl-js-textfield', 'data-focus': 'input-textarea' },
            _react2.default.createElement(
                'textarea',
                { className: 'mdl-textfield__input', cols: cols, maxLength: maxlength, minLength: minlength, onChange: this._onChange, ref: 'textarea', rows: rows, type: 'text' },
                value
            ),
            _react2.default.createElement(
                'label',
                { className: 'mdl-textfield__label' },
                value ? '' : this.i18n(label)
            )
        );
    }
};

exports.default = (0, _builder2.default)(textAreaMixin);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsidGV4dEFyZWFNaXhpbiIsIm1peGlucyIsImkxOG5CZWhhdmlvdXIiLCJtZGxCZWhhdmlvdXIiLCJnZXREZWZhdWx0UHJvcHMiLCJtaW5sZW5ndGgiLCJ3cmFwIiwicmVxdWlyZWQiLCJyb3dzIiwiY29scyIsInByb3BUeXBlcyIsIm1heGxlbmd0aCIsInZhbHVlIiwibGFiZWwiLCJnZXRJbml0aWFsU3RhdGUiLCJwcm9wcyIsIl9vbkNoYW5nZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImdldFZhbHVlIiwiZ2V0VGV4dEFyZWFWYWx1ZSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZW5kZXIiLCJyZW5kZXJUZXh0QXJlYSIsInN0YXRlIiwiaTE4biJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7OztBQUlBLElBQU1BLGdCQUFnQjtBQUNsQkMsWUFBUSxDQUFDQyxlQUFELEVBQWdCQyxzQkFBaEIsQ0FEVTtBQUVsQjs7OztBQUlBQyxtQkFOa0IsNkJBTUE7QUFDZCxlQUFPO0FBQ0hDLHVCQUFXLENBRFI7QUFFSEMsa0JBQU0sTUFGSDtBQUdIQyxzQkFBVSxLQUhQO0FBSUhDLGtCQUFNLENBSkg7QUFLSEMsa0JBQU07QUFMSCxTQUFQO0FBT0gsS0FkaUI7O0FBZWxCOzs7O0FBSUFDLGVBQVc7QUFDUEwsbUJBQVcscUJBQU0sUUFBTixDQURKO0FBRVBNLG1CQUFXLHFCQUFNLFFBQU4sQ0FGSjtBQUdQTCxjQUFNLHFCQUFNLFFBQU4sQ0FIQztBQUlQQyxrQkFBVSxxQkFBTSxNQUFOLENBSkg7QUFLUEssZUFBTyxxQkFBTSxRQUFOLENBTEE7QUFNUEMsZUFBTyxxQkFBTSxRQUFOLENBTkE7QUFPUEwsY0FBTSxxQkFBTSxRQUFOLENBUEM7QUFRUEMsY0FBTSxxQkFBTSxRQUFOO0FBUkMsS0FuQk87QUE2QmxCO0FBQ0FLLG1CQTlCa0IsNkJBOEJBO0FBQ2QsZUFBTztBQUNIRixtQkFBTyxLQUFLRyxLQUFMLENBQVdIO0FBRGYsU0FBUDtBQUdILEtBbENpQjs7QUFtQ2xCOzs7O0FBSUFJLGVBQVcsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDaEMsYUFBS0MsUUFBTCxDQUFjLEVBQUVQLE9BQU9NLE1BQU1FLE1BQU4sQ0FBYVIsS0FBdEIsRUFBZDtBQUNBLFlBQUksS0FBS0csS0FBTCxDQUFXRSxRQUFmLEVBQXlCO0FBQ3JCLGlCQUFLRixLQUFMLENBQVdFLFFBQVgsQ0FBb0JDLEtBQXBCO0FBQ0g7QUFDSixLQTVDaUI7QUE2Q2xCOzs7QUFHQUcsY0FBVSxTQUFTQyxnQkFBVCxHQUE0QjtBQUNsQyxlQUFPQyxtQkFBU0MsV0FBVCxDQUFxQixJQUFyQixFQUEyQlosS0FBbEM7QUFDSCxLQWxEaUI7QUFtRGxCOzs7O0FBSUFhLFlBQVEsU0FBU0MsY0FBVCxHQUEwQjtBQUFBLHFCQUNzQixLQUFLWCxLQUQzQjtBQUFBLFlBQ3RCTixJQURzQixVQUN0QkEsSUFEc0I7QUFBQSxZQUNoQkksS0FEZ0IsVUFDaEJBLEtBRGdCO0FBQUEsWUFDVEYsU0FEUyxVQUNUQSxTQURTO0FBQUEsWUFDRU4sU0FERixVQUNFQSxTQURGO0FBQUEsWUFDYUcsSUFEYixVQUNhQSxJQURiO0FBQUEsWUFFdEJJLEtBRnNCLEdBRVosS0FBS2UsS0FGTyxDQUV0QmYsS0FGc0I7O0FBRzlCLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxnQ0FBZixFQUFnRCxjQUFXLGdCQUEzRDtBQUNJO0FBQUE7QUFBQSxrQkFBVSxXQUFVLHNCQUFwQixFQUEyQyxNQUFNSCxJQUFqRCxFQUF1RCxXQUFXRSxTQUFsRSxFQUE2RSxXQUFXTixTQUF4RixFQUFtRyxVQUFVLEtBQUtXLFNBQWxILEVBQTZILEtBQUksVUFBakksRUFBNEksTUFBTVIsSUFBbEosRUFBd0osTUFBSyxNQUE3SjtBQUFxS0k7QUFBckssYUFESjtBQUVJO0FBQUE7QUFBQSxrQkFBTyxXQUFVLHNCQUFqQjtBQUF5Q0Esd0JBQVEsRUFBUixHQUFhLEtBQUtnQixJQUFMLENBQVVmLEtBQVY7QUFBdEQ7QUFGSixTQURKO0FBTUg7QUFoRWlCLENBQXRCOztrQkFtRWUsdUJBQVFiLGFBQVIsQyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHR5cGVzIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC90eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgaTE4bkJlaGF2aW91ciBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vaTE4bi9taXhpbic7XG5pbXBvcnQgbWRsQmVoYXZpb3VyIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9taXhpbi9tZGwtYmVoYXZpb3VyJztcblxuLyoqXG4qXG4qIEB0eXBlIHtPYmplY3R9XG4qL1xuY29uc3QgdGV4dEFyZWFNaXhpbiA9IHtcbiAgICBtaXhpbnM6IFtpMThuQmVoYXZpb3VyLCBtZGxCZWhhdmlvdXJdLFxuICAgIC8qKlxuICAgICogR2V0cyB0aGUgZGVmYXVsdCBwcm9wcy5cbiAgICAqIEByZXR1cm4ge29iamVjdH0gZGVmYXVsdCBwcm9wc1xuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWlubGVuZ3RoOiAwLFxuICAgICAgICAgICAgd3JhcDogJ3NvZnQnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcm93czogNSxcbiAgICAgICAgICAgIGNvbHM6IDUwXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFByb3BlcnRpZXMgdmFsaWRhdGlvbi5cbiAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgbWlubGVuZ3RoOiB0eXBlcygnbnVtYmVyJyksXG4gICAgICAgIG1heGxlbmd0aDogdHlwZXMoJ251bWJlcicpLFxuICAgICAgICB3cmFwOiB0eXBlcygnc3RyaW5nJyksXG4gICAgICAgIHJlcXVpcmVkOiB0eXBlcygnYm9vbCcpLFxuICAgICAgICB2YWx1ZTogdHlwZXMoJ3N0cmluZycpLFxuICAgICAgICBsYWJlbDogdHlwZXMoJ3N0cmluZycpLFxuICAgICAgICByb3dzOiB0eXBlcygnbnVtYmVyJyksXG4gICAgICAgIGNvbHM6IHR5cGVzKCdudW1iZXInKVxuICAgIH0sXG4gICAgLyoqIGluaGVyaXRlZERvYyAqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAqIE9uIGNoYW5nZSBoYW5kbGVyLlxuICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IC0gU2FuaXRpemUgZXZlbnQuXG4gICAgKi9cbiAgICBfb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICogR2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBpbnB1dCBpbiB0aGUgRE9NLlxuICAgICovXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIGdldFRleHRBcmVhVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBDaGVja2JveCBIVE1MLlxuICAgICogQHJldHVybiB7VmlydHVhbERPTX0gLSBUaGUgdmlydHVhbCBET00gb2YgdGhlIGNoZWNrYm94LlxuICAgICovXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXJUZXh0QXJlYSgpIHtcbiAgICAgICAgY29uc3QgeyBjb2xzLCBsYWJlbCwgbWF4bGVuZ3RoLCBtaW5sZW5ndGgsIHJvd3MgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkJyBkYXRhLWZvY3VzPSdpbnB1dC10ZXh0YXJlYSc+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT0nbWRsLXRleHRmaWVsZF9faW5wdXQnIGNvbHM9e2NvbHN9IG1heExlbmd0aD17bWF4bGVuZ3RofSBtaW5MZW5ndGg9e21pbmxlbmd0aH0gb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfSByZWY9J3RleHRhcmVhJyByb3dzPXtyb3dzfSB0eXBlPSd0ZXh0Jz57dmFsdWV9PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtZGwtdGV4dGZpZWxkX19sYWJlbCc+e3ZhbHVlID8gJycgOiB0aGlzLmkxOG4obGFiZWwpfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZGVyKHRleHRBcmVhTWl4aW4pO1xuIl19