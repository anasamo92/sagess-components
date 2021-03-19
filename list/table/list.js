'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = exports.component = undefined;

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduce = require('lodash/collection/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _translation = require('sagess-core/translation');

var _isReactClassComponent = require('../../utils/is-react-class-component');

var _infiniteScroll = require('../mixin/infinite-scroll');

var _referenceProperty = require('../../common/mixin/reference-property');

var _referenceProperty2 = _interopRequireDefault(_referenceProperty);

var _mdlBehaviour = require('../../common/mixin/mdl-behaviour');

var _mdlBehaviour2 = _interopRequireDefault(_mdlBehaviour);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // Dependencies

//Add a ref to the props if the component is not pure add nothing in the other case.


// Table class.
var TABLE_CSS_CLASS = 'mdl-data-table mdl-js-data-table mdl-shadow--2dp ';
var TABLE_CELL_CLASS = 'mdl-data-table__cell--non-numeric';
// Mixins

// Components


var tableMixin = {
    /**
     * React tag name.
     */
    displayName: 'Table',

    /**
     * Mixin dependancies.
     */
    mixins: [_infiniteScroll.mixin, _referenceProperty2.default, _mdlBehaviour2.default],
    /** inheriteddoc */
    getDefaultProps: function getDefaultProps() {
        return {
            data: [],
            idField: 'id',
            isLoading: false,
            operationList: [],
            isSelectable: false
        };
    },

    /** inheriteddoc */
    proptypes: {
        data: (0, _types2.default)('array'),
        isSelectable: (0, _types2.default)('bool'),
        onLineClick: (0, _types2.default)('func'),
        idField: (0, _types2.default)('string'),
        lineComponent: (0, _types2.default)('func').isRequired,
        operationList: (0, _types2.default)('array'),
        columns: (0, _types2.default)('object'),
        sortColumn: (0, _types2.default)('func'),
        isloading: (0, _types2.default)('bool'),
        loader: (0, _types2.default)('func')
    },
    /**
     * Render the table header.
     * @return {Component} - Render the table header.
     */
    _renderTableHeader: function _renderTableHeader() {
        var columns = this.props.columns;

        return _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                (0, _reduce2.default)(columns, this._renderColumnHeader, [])
            )
        );
    },

    /**
     * Build a function which is called when there is a click on a table column.
     * @param  {string} column - Column name.
     * @param  {string} order  - The order config.
     * @return {function} - The function to be called when there is a click on it.
     */
    _sortColumnAction: function _sortColumnAction(column, order) {
        var currentComponent = this;
        return function (event) {
            event.preventDefault();
            currentComponent.props.sortColumn(column, order);
        };
    },

    /**
     * Render the column header.
     * @param {array} accumulator - The array co,ntaining the accumulating component.
     * @param  {object} colProperties - The column properties.
     * @param  {string} name - The column name.
     * @return {Component} - The component header.
     */
    _renderColumnHeader: function _renderColumnHeader(accumulator, colProperties, name) {
        var sort = void 0;
        if (!this.props.isEdit && !colProperties.noSort) {
            var order = colProperties.sort ? colProperties.sort : 'asc';
            var iconName = 'asc' === order ? 'arrow_drop_up' : 'arrow_drop_down';
            var icon = _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                iconName
            );
            sort = _react2.default.createElement(
                'a',
                { className: 'sort', 'data-bypass': true, 'data-name': name, href: '#', onClick: this._sortColumnAction(name, 'asc' === order ? 'desc' : 'asc') },
                icon
            );
        }
        accumulator.push(_react2.default.createElement(
            'th',
            { className: TABLE_CELL_CLASS, key: colProperties.label },
            (0, _translation.translate)(colProperties.label),
            sort
        ));

        return accumulator;
    },

    /**
     * Render the tbody tag and the content.
     * @return {Component} - The component containing the tbody.
     */
    _renderTableBody: function _renderTableBody() {
        var _this = this;

        var _props = this.props,
            data = _props.data,
            TableLineComponent = _props.LineComponent,
            idField = _props.idField;

        var reference = this._getReference();
        return _react2.default.createElement(
            'tbody',
            null,
            data.map(function (line, idx) {
                var _props2 = _this.props,
                    data = _props2.data,
                    otherLineProps = _objectWithoutProperties(_props2, ['data']);

                var tableBodyFinalProps = (0, _isReactClassComponent.addRefToPropsIfNotPure)(TableLineComponent, Object.assign({
                    className: TABLE_CELL_CLASS,
                    data: line,
                    key: line[idField],
                    reference: reference
                }, otherLineProps), '' + _isReactClassComponent.LINE + idx);
                return _react2.default.createElement(TableLineComponent, tableBodyFinalProps);
            })
        );
    },

    /**
     * Render the loading table
     * @return {Component} - The table in the loading mode.
     */
    _renderLoading: function _renderLoading() {
        var _props3 = this.props,
            isLoading = _props3.isLoading,
            loader = _props3.loader;

        if (isLoading) {
            if (loader) {
                return loader();
            }
            return _react2.default.createElement(
                'tbody',
                { className: 'table-loading' },
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
                        '' + (0, _translation.translate)('list.loading')
                    )
                )
            );
        }
    },

    /**
     * Render the manual fetch mode for the table.
     * @return {Component} - The footer component when the mode is manual fetch , a show mode button is shown.
     */
    _renderManualFetch: function _renderManualFetch() {
        var _props4 = this.props,
            isManualFetch = _props4.isManualFetch,
            hasMoreData = _props4.hasMoreData;

        if (isManualFetch && hasMoreData) {
            return _react2.default.createElement(
                'tfoot',
                { className: 'table-manual-fetch' },
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        { colSpan: Object.keys(this.props.columns).length },
                        _react2.default.createElement(_button2.default, { handleOnClick: this.fetchNextPage, label: 'list.button.showMore', type: 'button' })
                    )
                )
            );
        }
    },


    /**
     * Render the list.
     * @return {XML} the render of the table list.
     */
    render: function render() {
        var SELECTABLE_CSS = this.props.isSelectable ? 'mdl-data-table--selectable' : '';
        return _react2.default.createElement(
            'table',
            { className: TABLE_CSS_CLASS + ' ' + SELECTABLE_CSS },
            this._renderTableHeader(),
            this._renderTableBody(),
            this._renderLoading(),
            this._renderManualFetch()
        );
    }
};

var builtComp = (0, _builder2.default)(tableMixin);
var component = builtComp.component,
    mixin = builtComp.mixin;
exports.component = component;
exports.mixin = mixin;
exports.default = builtComp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiVEFCTEVfQ1NTX0NMQVNTIiwiVEFCTEVfQ0VMTF9DTEFTUyIsInRhYmxlTWl4aW4iLCJkaXNwbGF5TmFtZSIsIm1peGlucyIsImluZmluaXRlU2Nyb2xsTWl4aW4iLCJyZWZlcmVuY2VNaXhpbiIsIm1kbEJlaGF2aW91ciIsImdldERlZmF1bHRQcm9wcyIsImRhdGEiLCJpZEZpZWxkIiwiaXNMb2FkaW5nIiwib3BlcmF0aW9uTGlzdCIsImlzU2VsZWN0YWJsZSIsInByb3B0eXBlcyIsIm9uTGluZUNsaWNrIiwibGluZUNvbXBvbmVudCIsImlzUmVxdWlyZWQiLCJjb2x1bW5zIiwic29ydENvbHVtbiIsImlzbG9hZGluZyIsImxvYWRlciIsIl9yZW5kZXJUYWJsZUhlYWRlciIsInByb3BzIiwiX3JlbmRlckNvbHVtbkhlYWRlciIsIl9zb3J0Q29sdW1uQWN0aW9uIiwiY29sdW1uIiwib3JkZXIiLCJjdXJyZW50Q29tcG9uZW50IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFjY3VtdWxhdG9yIiwiY29sUHJvcGVydGllcyIsIm5hbWUiLCJzb3J0IiwiaXNFZGl0Iiwibm9Tb3J0IiwiaWNvbk5hbWUiLCJpY29uIiwicHVzaCIsImxhYmVsIiwiX3JlbmRlclRhYmxlQm9keSIsIlRhYmxlTGluZUNvbXBvbmVudCIsIkxpbmVDb21wb25lbnQiLCJyZWZlcmVuY2UiLCJfZ2V0UmVmZXJlbmNlIiwibWFwIiwibGluZSIsImlkeCIsIm90aGVyTGluZVByb3BzIiwidGFibGVCb2R5RmluYWxQcm9wcyIsImNsYXNzTmFtZSIsImtleSIsIkxJTkUiLCJfcmVuZGVyTG9hZGluZyIsIl9yZW5kZXJNYW51YWxGZXRjaCIsImlzTWFudWFsRmV0Y2giLCJoYXNNb3JlRGF0YSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmZXRjaE5leHRQYWdlIiwicmVuZGVyIiwiU0VMRUNUQUJMRV9DU1MiLCJidWlsdENvbXAi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QWtDLHNCQXBJZSxnQ0FvSU07QUFBQSxzQkFDc0IsS0FBS2hDLEtBRDNCO0FBQUEsWUFDVGlDLGFBRFMsV0FDVEEsYUFEUztBQUFBLFlBQ01DLFdBRE4sV0FDTUEsV0FETjs7QUFFakIsWUFBSUQsaUJBQWlCQyxXQUFyQixFQUFrQztBQUM5QixtQkFDSTtBQUFBO0FBQUEsa0JBQU8sV0FBVSxvQkFBakI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMEJBQUksU0FBU0MsT0FBT0MsSUFBUCxDQUFZLEtBQUtwQyxLQUFMLENBQVdMLE9BQXZCLEVBQWdDMEMsTUFBN0M7QUFDSSxzREFBQyxnQkFBRCxJQUFRLGVBQWUsS0FBS0MsYUFBNUIsRUFBMkMsT0FBTSxzQkFBakQsRUFBd0UsTUFBSyxRQUE3RTtBQURKO0FBREo7QUFESixhQURKO0FBU0g7QUFDSixLQWpKYzs7O0FBbUpmOzs7O0FBSUFDLFVBdkplLG9CQXVKTjtBQUNMLFlBQU1DLGlCQUFpQixLQUFLeEMsS0FBTCxDQUFXVixZQUFYLEdBQTBCLDRCQUExQixHQUF5RCxFQUFoRjtBQUNBLGVBQ0k7QUFBQTtBQUFBLGNBQU8sV0FBY2IsZUFBZCxTQUFpQytELGNBQXhDO0FBQ0ssaUJBQUt6QyxrQkFBTCxFQURMO0FBRUssaUJBQUttQixnQkFBTCxFQUZMO0FBR0ssaUJBQUthLGNBQUwsRUFITDtBQUlLLGlCQUFLQyxrQkFBTDtBQUpMLFNBREo7QUFRSDtBQWpLYyxDQUFuQjs7QUFxS0EsSUFBTVMsWUFBWSx1QkFBUTlELFVBQVIsQ0FBbEI7SUFDUStELFMsR0FBcUJELFMsQ0FBckJDLFM7SUFBV0MsSyxHQUFVRixTLENBQVZFLEs7UUFHZkQsUyxHQUFBQSxTO1FBQ0FDLEssR0FBQUEsSztrQkFFV0YsUyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgdHlwZXMgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL2NvbGxlY3Rpb24vcmVkdWNlJztcblxuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnc2FnZXNzLWNvcmUvdHJhbnNsYXRpb24nO1xuLy9BZGQgYSByZWYgdG8gdGhlIHByb3BzIGlmIHRoZSBjb21wb25lbnQgaXMgbm90IHB1cmUgYWRkIG5vdGhpbmcgaW4gdGhlIG90aGVyIGNhc2UuXG5pbXBvcnQgeyBhZGRSZWZUb1Byb3BzSWZOb3RQdXJlLCBMSU5FIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMtcmVhY3QtY2xhc3MtY29tcG9uZW50Jztcbi8vIFRhYmxlIGNsYXNzLlxuY29uc3QgVEFCTEVfQ1NTX0NMQVNTID0gJ21kbC1kYXRhLXRhYmxlIG1kbC1qcy1kYXRhLXRhYmxlIG1kbC1zaGFkb3ctLTJkcCAnO1xuY29uc3QgVEFCTEVfQ0VMTF9DTEFTUyA9ICdtZGwtZGF0YS10YWJsZV9fY2VsbC0tbm9uLW51bWVyaWMnO1xuLy8gTWl4aW5zXG5pbXBvcnQgeyBtaXhpbiBhcyBpbmZpbml0ZVNjcm9sbE1peGluIH0gZnJvbSAnLi4vbWl4aW4vaW5maW5pdGUtc2Nyb2xsJztcbmltcG9ydCByZWZlcmVuY2VNaXhpbiBmcm9tICcuLi8uLi9jb21tb24vbWl4aW4vcmVmZXJlbmNlLXByb3BlcnR5JztcbmltcG9ydCBtZGxCZWhhdmlvdXIgZnJvbSAnLi4vLi4vY29tbW9uL21peGluL21kbC1iZWhhdmlvdXInO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbic7XG5cbmNvbnN0IHRhYmxlTWl4aW4gPSB7XG4gICAgLyoqXG4gICAgICogUmVhY3QgdGFnIG5hbWUuXG4gICAgICovXG4gICAgZGlzcGxheU5hbWU6ICdUYWJsZScsXG5cbiAgICAvKipcbiAgICAgKiBNaXhpbiBkZXBlbmRhbmNpZXMuXG4gICAgICovXG4gICAgbWl4aW5zOiBbaW5maW5pdGVTY3JvbGxNaXhpbiwgcmVmZXJlbmNlTWl4aW4sIG1kbEJlaGF2aW91cl0sXG4gICAgLyoqIGluaGVyaXRlZGRvYyAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgaWRGaWVsZDogJ2lkJyxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBvcGVyYXRpb25MaXN0OiBbXSxcbiAgICAgICAgICAgIGlzU2VsZWN0YWJsZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKiBpbmhlcml0ZWRkb2MgKi9cbiAgICBwcm9wdHlwZXM6IHtcbiAgICAgICAgZGF0YTogdHlwZXMoJ2FycmF5JyksXG4gICAgICAgIGlzU2VsZWN0YWJsZTogdHlwZXMoJ2Jvb2wnKSxcbiAgICAgICAgb25MaW5lQ2xpY2s6IHR5cGVzKCdmdW5jJyksXG4gICAgICAgIGlkRmllbGQ6IHR5cGVzKCdzdHJpbmcnKSxcbiAgICAgICAgbGluZUNvbXBvbmVudDogdHlwZXMoJ2Z1bmMnKS5pc1JlcXVpcmVkLFxuICAgICAgICBvcGVyYXRpb25MaXN0OiB0eXBlcygnYXJyYXknKSxcbiAgICAgICAgY29sdW1uczogdHlwZXMoJ29iamVjdCcpLFxuICAgICAgICBzb3J0Q29sdW1uOiB0eXBlcygnZnVuYycpLFxuICAgICAgICBpc2xvYWRpbmc6IHR5cGVzKCdib29sJyksXG4gICAgICAgIGxvYWRlcjogdHlwZXMoJ2Z1bmMnKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSB0YWJsZSBoZWFkZXIuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFJlbmRlciB0aGUgdGFibGUgaGVhZGVyLlxuICAgICAqL1xuICAgIF9yZW5kZXJUYWJsZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjb2x1bW5zIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj57cmVkdWNlKGNvbHVtbnMsIHRoaXMuX3JlbmRlckNvbHVtbkhlYWRlciwgW10pfTwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQnVpbGQgYSBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGVyZSBpcyBhIGNsaWNrIG9uIGEgdGFibGUgY29sdW1uLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gY29sdW1uIC0gQ29sdW1uIG5hbWUuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBvcmRlciAgLSBUaGUgb3JkZXIgY29uZmlnLlxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSAtIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGVyZSBpcyBhIGNsaWNrIG9uIGl0LlxuICAgICAqL1xuICAgIF9zb3J0Q29sdW1uQWN0aW9uKGNvbHVtbiwgb3JkZXIpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDb21wb25lbnQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY3VycmVudENvbXBvbmVudC5wcm9wcy5zb3J0Q29sdW1uKGNvbHVtbiwgb3JkZXIpO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjb2x1bW4gaGVhZGVyLlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFjY3VtdWxhdG9yIC0gVGhlIGFycmF5IGNvLG50YWluaW5nIHRoZSBhY2N1bXVsYXRpbmcgY29tcG9uZW50LlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gY29sUHJvcGVydGllcyAtIFRoZSBjb2x1bW4gcHJvcGVydGllcy5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWUgLSBUaGUgY29sdW1uIG5hbWUuXG4gICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIFRoZSBjb21wb25lbnQgaGVhZGVyLlxuICAgICAqL1xuICAgIF9yZW5kZXJDb2x1bW5IZWFkZXIoYWNjdW11bGF0b3IsIGNvbFByb3BlcnRpZXMsIG5hbWUpIHtcbiAgICAgICAgbGV0IHNvcnQ7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc0VkaXQgJiYgIWNvbFByb3BlcnRpZXMubm9Tb3J0KSB7XG4gICAgICAgICAgICBjb25zdCBvcmRlciA9IGNvbFByb3BlcnRpZXMuc29ydCA/IGNvbFByb3BlcnRpZXMuc29ydCA6ICdhc2MnO1xuICAgICAgICAgICAgY29uc3QgaWNvbk5hbWUgPSAnYXNjJyA9PT0gb3JkZXIgPyAnYXJyb3dfZHJvcF91cCcgOiAnYXJyb3dfZHJvcF9kb3duJztcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAoPGkgY2xhc3NOYW1lPSdtYXRlcmlhbC1pY29ucyc+e2ljb25OYW1lfTwvaT4pO1xuICAgICAgICAgICAgc29ydCA9IChcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3NvcnQnIGRhdGEtYnlwYXNzIGRhdGEtbmFtZT17bmFtZX0gaHJlZj0nIycgb25DbGljaz17dGhpcy5fc29ydENvbHVtbkFjdGlvbihuYW1lLCAoJ2FzYycgPT09IG9yZGVyID8gJ2Rlc2MnIDogJ2FzYycpKX0+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYWNjdW11bGF0b3IucHVzaCgoXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtUQUJMRV9DRUxMX0NMQVNTfSBrZXk9e2NvbFByb3BlcnRpZXMubGFiZWx9Pnt0cmFuc2xhdGUoY29sUHJvcGVydGllcy5sYWJlbCl9e3NvcnR9PC90aD5cbiAgICAgICAgKSk7XG5cbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSB0Ym9keSB0YWcgYW5kIHRoZSBjb250ZW50LlxuICAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBUaGUgY29tcG9uZW50IGNvbnRhaW5pbmcgdGhlIHRib2R5LlxuICAgICAqL1xuICAgIF9yZW5kZXJUYWJsZUJvZHkoKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSwgTGluZUNvbXBvbmVudDogVGFibGVMaW5lQ29tcG9uZW50LCBpZEZpZWxkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLl9nZXRSZWZlcmVuY2UoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGxpbmUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIC4uLm90aGVyTGluZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZUJvZHlGaW5hbFByb3BzID0gYWRkUmVmVG9Qcm9wc0lmTm90UHVyZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlTGluZUNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogVEFCTEVfQ0VMTF9DTEFTUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBsaW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbGluZVtpZEZpZWxkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3RoZXJMaW5lUHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGAke0xJTkV9JHtpZHh9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVMaW5lQ29tcG9uZW50IHsuLi50YWJsZUJvZHlGaW5hbFByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgbG9hZGluZyB0YWJsZVxuICAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBUaGUgdGFibGUgaW4gdGhlIGxvYWRpbmcgbW9kZS5cbiAgICAgKi9cbiAgICBfcmVuZGVyTG9hZGluZygpIHtcbiAgICAgICAgY29uc3QgeyBpc0xvYWRpbmcsIGxvYWRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgaWYgKGxvYWRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT17J3RhYmxlLWxvYWRpbmcnfT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntgJHt0cmFuc2xhdGUoJ2xpc3QubG9hZGluZycpfWB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBtYW51YWwgZmV0Y2ggbW9kZSBmb3IgdGhlIHRhYmxlLlxuICAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBUaGUgZm9vdGVyIGNvbXBvbmVudCB3aGVuIHRoZSBtb2RlIGlzIG1hbnVhbCBmZXRjaCAsIGEgc2hvdyBtb2RlIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBfcmVuZGVyTWFudWFsRmV0Y2goKSB7XG4gICAgICAgIGNvbnN0IHsgaXNNYW51YWxGZXRjaCwgaGFzTW9yZURhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChpc01hbnVhbEZldGNoICYmIGhhc01vcmVEYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0Zm9vdCBjbGFzc05hbWU9J3RhYmxlLW1hbnVhbC1mZXRjaCc+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXtPYmplY3Qua2V5cyh0aGlzLnByb3BzLmNvbHVtbnMpLmxlbmd0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBoYW5kbGVPbkNsaWNrPXt0aGlzLmZldGNoTmV4dFBhZ2V9IGxhYmVsPSdsaXN0LmJ1dHRvbi5zaG93TW9yZScgdHlwZT0nYnV0dG9uJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rmb290PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGxpc3QuXG4gICAgICogQHJldHVybiB7WE1MfSB0aGUgcmVuZGVyIG9mIHRoZSB0YWJsZSBsaXN0LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgU0VMRUNUQUJMRV9DU1MgPSB0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSA/ICdtZGwtZGF0YS10YWJsZS0tc2VsZWN0YWJsZScgOiAnJztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2Ake1RBQkxFX0NTU19DTEFTU30gJHtTRUxFQ1RBQkxFX0NTU31gfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyVGFibGVIZWFkZXIoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyVGFibGVCb2R5KCl9XG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckxvYWRpbmcoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyTWFudWFsRmV0Y2goKX1cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICk7XG4gICAgfVxuXG59O1xuXG5jb25zdCBidWlsdENvbXAgPSBidWlsZGVyKHRhYmxlTWl4aW4pO1xuY29uc3QgeyBjb21wb25lbnQsIG1peGluIH0gPSBidWlsdENvbXA7XG5cbmV4cG9ydCB7XG4gICAgY29tcG9uZW50LFxuICAgIG1peGluXG59XG5leHBvcnQgZGVmYXVsdCBidWlsdENvbXA7XG4iXX0=