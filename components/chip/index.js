'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Implementation of material design lite Chip component.
 * @see https://getmdl.io/components/index.html#chips-section
 * @param {object} props props given to component.
 * @return {ReactElement} markup.
 */
var Chip = function Chip(_ref) {
    var label = _ref.label,
        deleteElement = _ref.deleteElement,
        readonly = _ref.readonly;

    var className = 'mdl-chip';
    if (!readonly) {
        className += ' mdl-chip--deletable';
    }

    return _react2.default.createElement(
        'div',
        { 'data-focus': 'chip', className: className },
        _react2.default.createElement(
            'span',
            { 'data-focus': 'chip-text', className: 'mdl-chip__text' },
            label
        ),
        !readonly && _react2.default.createElement(
            'button',
            {
                type: 'button',
                'data-focus': 'chip-button',
                className: 'mdl-chip__action',
                onClick: deleteElement
            },
            _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'cancel'
            )
        )
    );
};

/**
 * Chip's display name.
 */
Chip.displayName = 'Chip';

/**
 * Chip's prop types.
 */
Chip.propTypes = {
    label: _react.PropTypes.string.isRequired,
    readonly: _react.PropTypes.bool.isRequired,
    deleteElement: _react.PropTypes.func.isRequired
};

/**
 * Chip's default props.
 */
Chip.defaultProps = {};

exports.default = Chip;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQ2hpcCIsImxhYmVsIiwiZGVsZXRlRWxlbWVudCIsInJlYWRvbmx5IiwiY2xhc3NOYW1lIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsT0FBTyxTQUFQQSxJQUFPLE9BQXdDO0FBQUEsUUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUFBLFFBQTlCQyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxRQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQ2pELFFBQUlDLFlBQVksVUFBaEI7QUFDQSxRQUFJLENBQUNELFFBQUwsRUFBZTtBQUNYQyxxQkFBYSxzQkFBYjtBQUNIOztBQUVELFdBQ0k7QUFBQTtBQUFBLFVBQUssY0FBVyxNQUFoQixFQUF1QixXQUFXQSxTQUFsQztBQUNJO0FBQUE7QUFBQSxjQUFNLGNBQVcsV0FBakIsRUFBNkIsV0FBVSxnQkFBdkM7QUFBeURIO0FBQXpELFNBREo7QUFFSyxTQUFDRSxRQUFELElBQ0c7QUFBQTtBQUFBO0FBQ0ksc0JBQUssUUFEVDtBQUVJLDhCQUFXLGFBRmY7QUFHSSwyQkFBVSxrQkFIZDtBQUlJLHlCQUFTRDtBQUpiO0FBTUk7QUFBQTtBQUFBLGtCQUFHLFdBQVUsZ0JBQWI7QUFBK0I7QUFBL0I7QUFOSjtBQUhSLEtBREo7QUFlSCxDQXJCRDs7QUF1QkE7OztBQUdBRixLQUFLSyxXQUFMLEdBQW1CLE1BQW5COztBQUVBOzs7QUFHQUwsS0FBS00sU0FBTCxHQUFpQjtBQUNiTCxXQUFPTSxpQkFBVUMsTUFBVixDQUFpQkMsVUFEWDtBQUViTixjQUFVSSxpQkFBVUcsSUFBVixDQUFlRCxVQUZaO0FBR2JQLG1CQUFlSyxpQkFBVUksSUFBVixDQUFlRjtBQUhqQixDQUFqQjs7QUFNQTs7O0FBR0FULEtBQUtZLFlBQUwsR0FBb0IsRUFBcEI7O2tCQUllWixJIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIG1hdGVyaWFsIGRlc2lnbiBsaXRlIENoaXAgY29tcG9uZW50LlxuICogQHNlZSBodHRwczovL2dldG1kbC5pby9jb21wb25lbnRzL2luZGV4Lmh0bWwjY2hpcHMtc2VjdGlvblxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIHByb3BzIGdpdmVuIHRvIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gbWFya3VwLlxuICovXG5jb25zdCBDaGlwID0gKHsgbGFiZWwsIGRlbGV0ZUVsZW1lbnQsIHJlYWRvbmx5IH0pID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lID0gJ21kbC1jaGlwJztcbiAgICBpZiAoIXJlYWRvbmx5KSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSAnIG1kbC1jaGlwLS1kZWxldGFibGUnO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nY2hpcCcgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1mb2N1cz0nY2hpcC10ZXh0JyBjbGFzc05hbWU9J21kbC1jaGlwX190ZXh0Jz57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgeyFyZWFkb25seSAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZm9jdXM9J2NoaXAtYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21kbC1jaGlwX19hY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZUVsZW1lbnR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz57J2NhbmNlbCd9PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbi8qKlxuICogQ2hpcCdzIGRpc3BsYXkgbmFtZS5cbiAqL1xuQ2hpcC5kaXNwbGF5TmFtZSA9ICdDaGlwJztcblxuLyoqXG4gKiBDaGlwJ3MgcHJvcCB0eXBlcy5cbiAqL1xuQ2hpcC5wcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBkZWxldGVFbGVtZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG4vKipcbiAqIENoaXAncyBkZWZhdWx0IHByb3BzLlxuICovXG5DaGlwLmRlZmF1bHRQcm9wcyA9IHtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hpcDtcbiJdfQ==