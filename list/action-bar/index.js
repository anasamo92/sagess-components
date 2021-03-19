'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = exports.component = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _reduce = require('lodash/collection/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _dropdown = require('../../components/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _actionContextual = require('../action-contextual');

var _topicDisplayer = require('../../components/topic-displayer');

var _topicDisplayer2 = _interopRequireDefault(_topicDisplayer);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _mixin = require('../../common/i18n/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
var ActionBar = {

    /**
    * Display name.
    */
    displayName: 'ListActionBar',

    mixins: [_mixin2.default],

    propTypes: {
        facetClickAction: _react.PropTypes.func,
        facetList: _react.PropTypes.object,
        groupAction: _react.PropTypes.func,
        groupLabelPrefix: _react.PropTypes.string,
        groupSelectedKey: _react.PropTypes.string,
        groupableColumnList: _react.PropTypes.object,
        hasGrouping: _react.PropTypes.bool.isRequired,
        isSelection: _react.PropTypes.bool.isRequired,
        operationList: _react.PropTypes.array,
        orderAction: _react.PropTypes.func,
        orderSelected: _react.PropTypes.object,
        orderableColumnList: _react.PropTypes.array, // [{key:'columnKey', label:'columnLabel'}]
        selectionAction: _react.PropTypes.func,
        selectionStatus: _react.PropTypes.string // none, selected, partial
    },

    /**
    * INit default props
    * @returns {object} Defautkl props.
    */
    getDefaultProps: function getDefaultProps() {
        return {
            isSelection: true,
            hasGrouping: true,
            selectionStatus: 'none', // none, selected, partial
            selectionAction: function selectionAction(selectionStatus) {
                console.warn(selectionStatus);
            },
            // Action on selection click
            orderableColumnList: undefined, // [{key:'columnKey', label:'columnLabel'}]
            orderAction: function orderAction(key, order) {
                console.warn(key + '-' + order);
            },
            // Action on click on order function
            orderSelected: {},
            facetClickAction: function facetClickAction(key) {
                console.warn(key);
            },
            // Action when click on facet
            facetList: {}, // {facet1: 'Label of facet one', facet2:'Label of facet 2'} List of facets
            groupableColumnList: {}, // {col1: 'Label1', col2: 'Label2'}
            groupAction: function groupAction(key) {
                console.warn(key);
            },
            // Action on group function
            operationList: [], // List of contextual operations
            groupLabelPrefix: ''
        };
    },


    /**
    * @returns {JSX} Selection component.
    * @private
    */
    _getSelectionObject: function _getSelectionObject() {
        var _this = this;

        var onIconClick = function onIconClick() {
            var newSelectionStatus = _this.props.selectionStatus === 'none' ? 'selected' : 'none';
            _this.props.selectionAction(newSelectionStatus);
        };
        return _react2.default.createElement(_button2.default, { shape: 'icon', icon: this._getSelectionObjectIcon(), handleOnClick: onIconClick });
    },


    /**
    * @returns {JSX} Order component.
    * @private
    */
    _getOrderObject: function _getOrderObject() {
        if (this.props.orderableColumnList) {
            var orderSelectedParsedKey = this.props.orderSelected.key + this.props.orderSelected.order;
            var orderOperationList = []; // [{key:'columnKey', order:'asc', label:'columnLabel'}]
            for (var key in this.props.orderableColumnList) {
                var description = this.props.orderableColumnList[key];
                orderOperationList.push({
                    action: this._orderFunction(description.key, description.order),
                    label: description.label,
                    style: this._getSelectedStyle(description.key + description.order, orderSelectedParsedKey)
                });
            }
            var orderIcon = 'sort_by_alpha';
            return _react2.default.createElement(_dropdown2.default, { iconProps: { name: orderIcon }, key: 'down', operationList: orderOperationList });
        }
        return null;
    },


    /**
    * @returns {JSX} Grouping component.
    * @private
    */
    _getGroupObject: function _getGroupObject() {
        var _this2 = this;

        var hasGrouping = this.props.hasGrouping;

        if (hasGrouping) {
            var _props = this.props,
                groupLabelPrefix = _props.groupLabelPrefix,
                groupSelectedKey = _props.groupSelectedKey,
                groupableColumnList = _props.groupableColumnList,
                style = _props.style;

            var groupOperationList = (0, _reduce2.default)(groupableColumnList, function (operationList, label, key) {
                operationList.push({
                    action: _this2._groupFunction(key),
                    label: _this2.i18n(groupLabelPrefix + label),
                    style: _this2._getSelectedStyle(key, groupSelectedKey)
                });
                return operationList;
            }, []).concat([{
                label: this.i18n('list.actionBar.ungroup'),
                action: this._groupFunction()
            }]);
            var groupIcon = 'folder_open';
            return _react2.default.createElement(_dropdown2.default, { iconProps: { name: groupIcon }, operationList: groupOperationList });
        }
        return null;
    },


    /**
    * @param {string} currentKey Current selected key.
    * @param {string} selectedKey Key corresponding to the selected one.
    * @returns {string} Class selected if currentKey corresponds to the selectedKey.
    * @private
    */
    _getSelectedStyle: function _getSelectedStyle(currentKey, selectedKey) {
        if (currentKey === selectedKey) {
            return ' selected ';
        }
        return undefined;
    },


    /**
    * @return {string} Class of the selection component icon.
    * @private
    */
    _getSelectionObjectIcon: function _getSelectionObjectIcon() {
        if ('none' === this.props.selectionStatus) {
            return 'check_box_outline_blank';
        } else if ('selected' === this.props.selectionStatus) {
            return 'check_box';
        }
        return 'indeterminate_check_box';
    },
    _orderFunction: function _orderFunction(key, order) {
        var _this3 = this;

        return function () {
            _this3.props.orderAction(key, order);
        };
    },
    _groupFunction: function _groupFunction(key) {
        var _this4 = this;

        return function () {
            _this4.props.groupAction(key);
        };
    },


    /**
    * Render the html
    * @returns {JSX} Htm content.
    */
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'mdl-grid', 'data-focus': 'list-action-bar' },
            _react2.default.createElement(
                'div',
                { className: 'mdl-cell', 'data-focus': 'global-list-content' },
                this.props.isSelection && this._getSelectionObject(),
                this._getOrderObject(),
                this._getGroupObject()
            ),
            _react2.default.createElement(
                'div',
                { className: 'mdl-cell mdl-cell--hide-tablet mdl-cell--hide-phone', 'data-focus': 'selected-facet-content' },
                _react2.default.createElement(_topicDisplayer2.default, {
                    displayLabels: true,
                    topicClickAction: this.props.facetClickAction,
                    topicList: this.props.facetList
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'mdl-cell', 'data-focus': 'contextual-action-content' },
                _react2.default.createElement(_actionContextual.component, { operationList: this.props.operationList })
            )
        );
    }
};
// Mixins

// Components

var _builder = (0, _builder3.default)(ActionBar),
    component = _builder.component,
    mixin = _builder.mixin;

exports.component = component;
exports.mixin = mixin;
exports.default = { component: component, mixin: mixin };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiQWN0aW9uQmFyIiwiZGlzcGxheU5hbWUiLCJtaXhpbnMiLCJ0cmFuc2xhdGlvbk1peGluIiwicHJvcFR5cGVzIiwiZmFjZXRDbGlja0FjdGlvbiIsIlByb3BUeXBlcyIsImZ1bmMiLCJmYWNldExpc3QiLCJvYmplY3QiLCJncm91cEFjdGlvbiIsImdyb3VwTGFiZWxQcmVmaXgiLCJzdHJpbmciLCJncm91cFNlbGVjdGVkS2V5IiwiZ3JvdXBhYmxlQ29sdW1uTGlzdCIsImhhc0dyb3VwaW5nIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJpc1NlbGVjdGlvbiIsIm9wZXJhdGlvbkxpc3QiLCJhcnJheSIsIm9yZGVyQWN0aW9uIiwib3JkZXJTZWxlY3RlZCIsIm9yZGVyYWJsZUNvbHVtbkxpc3QiLCJzZWxlY3Rpb25BY3Rpb24iLCJzZWxlY3Rpb25TdGF0dXMiLCJnZXREZWZhdWx0UHJvcHMiLCJjb25zb2xlIiwid2FybiIsInVuZGVmaW5lZCIsImtleSIsIm9yZGVyIiwiX2dldFNlbGVjdGlvbk9iamVjdCIsIm9uSWNvbkNsaWNrIiwibmV3U2VsZWN0aW9uU3RhdHVzIiwicHJvcHMiLCJfZ2V0U2VsZWN0aW9uT2JqZWN0SWNvbiIsIl9nZXRPcmRlck9iamVjdCIsIm9yZGVyU2VsZWN0ZWRQYXJzZWRLZXkiLCJvcmRlck9wZXJhdGlvbkxpc3QiLCJkZXNjcmlwdGlvbiIsInB1c2giLCJhY3Rpb24iLCJfb3JkZXJGdW5jdGlvbiIsImxhYmVsIiwic3R5bGUiLCJfZ2V0U2VsZWN0ZWRTdHlsZSIsIm9yZGVySWNvbiIsIm5hbWUiLCJfZ2V0R3JvdXBPYmplY3QiLCJncm91cE9wZXJhdGlvbkxpc3QiLCJfZ3JvdXBGdW5jdGlvbiIsImkxOG4iLCJjb25jYXQiLCJncm91cEljb24iLCJjdXJyZW50S2V5Iiwic2VsZWN0ZWRLZXkiLCJyZW5kZXIiLCJjb21wb25lbnQiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7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Q0k7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmLEVBQTBCLGNBQVcsaUJBQXJDO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsVUFBZixFQUEwQixjQUFXLHFCQUFyQztBQUNLLHFCQUFLdEIsS0FBTCxDQUFXakIsV0FBWCxJQUEwQixLQUFLYyxtQkFBTCxFQUQvQjtBQUVLLHFCQUFLSyxlQUFMLEVBRkw7QUFHSyxxQkFBS1ksZUFBTDtBQUhMLGFBREo7QUFNSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxxREFBZixFQUFxRSxjQUFXLHdCQUFoRjtBQUNJLDhDQUFDLHdCQUFEO0FBQ0ksdUNBREo7QUFFSSxzQ0FBa0IsS0FBS2QsS0FBTCxDQUFXOUIsZ0JBRmpDO0FBR0ksK0JBQVcsS0FBSzhCLEtBQUwsQ0FBVzNCO0FBSDFCO0FBREosYUFOSjtBQWFJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFVBQWYsRUFBMEIsY0FBVywyQkFBckM7QUFDSSw4Q0FBQywyQkFBRCxJQUFrQixlQUFlLEtBQUsyQixLQUFMLENBQVdoQixhQUE1QztBQURKO0FBYkosU0FESjtBQW1CSDtBQXRMYSxDQUFsQjtBQUhBOztBQUxBOztlQWlNNkIsdUJBQVFuQixTQUFSLEM7SUFBckIwRCxTLFlBQUFBLFM7SUFBV0MsSyxZQUFBQSxLOztRQUNWRCxTLEdBQUFBLFM7UUFBV0MsSyxHQUFBQSxLO2tCQUNMLEVBQUVELG9CQUFGLEVBQWFDLFlBQWIsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHJlZHVjZSBmcm9tICdsb2Rhc2gvY29sbGVjdGlvbi9yZWR1Y2UnO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZHJvcGRvd24nO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIEFjdGlvbkNvbnRleHR1YWwgfSBmcm9tICcuLi9hY3Rpb24tY29udGV4dHVhbCc7XG5pbXBvcnQgVG9waWNEaXNwbGF5ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90b3BpYy1kaXNwbGF5ZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbic7XG4vLyBNaXhpbnNcbmltcG9ydCB0cmFuc2xhdGlvbk1peGluIGZyb20gJy4uLy4uL2NvbW1vbi9pMThuL21peGluJztcblxuY29uc3QgQWN0aW9uQmFyID0ge1xuXG4gICAgLyoqXG4gICAgKiBEaXNwbGF5IG5hbWUuXG4gICAgKi9cbiAgICBkaXNwbGF5TmFtZTogJ0xpc3RBY3Rpb25CYXInLFxuXG4gICAgbWl4aW5zOiBbdHJhbnNsYXRpb25NaXhpbl0sXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgZmFjZXRDbGlja0FjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGZhY2V0TGlzdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgZ3JvdXBBY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBncm91cExhYmVsUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBncm91cFNlbGVjdGVkS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBncm91cGFibGVDb2x1bW5MaXN0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBoYXNHcm91cGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgaXNTZWxlY3Rpb246IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIG9wZXJhdGlvbkxpc3Q6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgb3JkZXJBY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvcmRlclNlbGVjdGVkOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBvcmRlcmFibGVDb2x1bW5MaXN0OiBQcm9wVHlwZXMuYXJyYXksIC8vIFt7a2V5Oidjb2x1bW5LZXknLCBsYWJlbDonY29sdW1uTGFiZWwnfV1cbiAgICAgICAgc2VsZWN0aW9uQWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc2VsZWN0aW9uU3RhdHVzOiBQcm9wVHlwZXMuc3RyaW5nIC8vIG5vbmUsIHNlbGVjdGVkLCBwYXJ0aWFsXG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgKiBJTml0IGRlZmF1bHQgcHJvcHNcbiAgICAqIEByZXR1cm5zIHtvYmplY3R9IERlZmF1dGtsIHByb3BzLlxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNTZWxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICBoYXNHcm91cGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvblN0YXR1czogJ25vbmUnLCAvLyBub25lLCBzZWxlY3RlZCwgcGFydGlhbFxuICAgICAgICAgICAgc2VsZWN0aW9uQWN0aW9uKHNlbGVjdGlvblN0YXR1cykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihzZWxlY3Rpb25TdGF0dXMpO1xuICAgICAgICAgICAgfSwgLy8gQWN0aW9uIG9uIHNlbGVjdGlvbiBjbGlja1xuICAgICAgICAgICAgb3JkZXJhYmxlQ29sdW1uTGlzdDogdW5kZWZpbmVkLCAvLyBbe2tleTonY29sdW1uS2V5JywgbGFiZWw6J2NvbHVtbkxhYmVsJ31dXG4gICAgICAgICAgICBvcmRlckFjdGlvbihrZXksIG9yZGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGtleSArICctJyArIG9yZGVyKTtcbiAgICAgICAgICAgIH0sIC8vIEFjdGlvbiBvbiBjbGljayBvbiBvcmRlciBmdW5jdGlvblxuICAgICAgICAgICAgb3JkZXJTZWxlY3RlZDoge30sXG4gICAgICAgICAgICBmYWNldENsaWNrQWN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihrZXkpO1xuICAgICAgICAgICAgfSwgLy8gQWN0aW9uIHdoZW4gY2xpY2sgb24gZmFjZXRcbiAgICAgICAgICAgIGZhY2V0TGlzdDoge30sIC8vIHtmYWNldDE6ICdMYWJlbCBvZiBmYWNldCBvbmUnLCBmYWNldDI6J0xhYmVsIG9mIGZhY2V0IDInfSBMaXN0IG9mIGZhY2V0c1xuICAgICAgICAgICAgZ3JvdXBhYmxlQ29sdW1uTGlzdDoge30sIC8vIHtjb2wxOiAnTGFiZWwxJywgY29sMjogJ0xhYmVsMid9XG4gICAgICAgICAgICBncm91cEFjdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oa2V5KTtcbiAgICAgICAgICAgIH0sIC8vIEFjdGlvbiBvbiBncm91cCBmdW5jdGlvblxuICAgICAgICAgICAgb3BlcmF0aW9uTGlzdDogW10sIC8vIExpc3Qgb2YgY29udGV4dHVhbCBvcGVyYXRpb25zXG4gICAgICAgICAgICBncm91cExhYmVsUHJlZml4OiAnJ1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEByZXR1cm5zIHtKU1h9IFNlbGVjdGlvbiBjb21wb25lbnQuXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgX2dldFNlbGVjdGlvbk9iamVjdCgpIHtcbiAgICAgICAgY29uc3Qgb25JY29uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb25TdGF0dXMgPSB0aGlzLnByb3BzLnNlbGVjdGlvblN0YXR1cyA9PT0gJ25vbmUnID8gJ3NlbGVjdGVkJyA6ICdub25lJztcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0aW9uQWN0aW9uKG5ld1NlbGVjdGlvblN0YXR1cyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uIHNoYXBlPSdpY29uJyBpY29uPXt0aGlzLl9nZXRTZWxlY3Rpb25PYmplY3RJY29uKCl9IGhhbmRsZU9uQ2xpY2s9e29uSWNvbkNsaWNrfSAvPlxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEByZXR1cm5zIHtKU1h9IE9yZGVyIGNvbXBvbmVudC5cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBfZ2V0T3JkZXJPYmplY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9yZGVyYWJsZUNvbHVtbkxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyU2VsZWN0ZWRQYXJzZWRLZXkgPSB0aGlzLnByb3BzLm9yZGVyU2VsZWN0ZWQua2V5ICsgdGhpcy5wcm9wcy5vcmRlclNlbGVjdGVkLm9yZGVyO1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJPcGVyYXRpb25MaXN0ID0gW107IC8vIFt7a2V5Oidjb2x1bW5LZXknLCBvcmRlcjonYXNjJywgbGFiZWw6J2NvbHVtbkxhYmVsJ31dXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnByb3BzLm9yZGVyYWJsZUNvbHVtbkxpc3QpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMucHJvcHMub3JkZXJhYmxlQ29sdW1uTGlzdFtrZXldO1xuICAgICAgICAgICAgICAgIG9yZGVyT3BlcmF0aW9uTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLl9vcmRlckZ1bmN0aW9uKGRlc2NyaXB0aW9uLmtleSwgZGVzY3JpcHRpb24ub3JkZXIpLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZGVzY3JpcHRpb24ubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLl9nZXRTZWxlY3RlZFN0eWxlKGRlc2NyaXB0aW9uLmtleSArIGRlc2NyaXB0aW9uLm9yZGVyLCBvcmRlclNlbGVjdGVkUGFyc2VkS2V5KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3JkZXJJY29uID0gJ3NvcnRfYnlfYWxwaGEnO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gaWNvblByb3BzPXt7IG5hbWU6IG9yZGVySWNvbiB9fSBrZXk9J2Rvd24nIG9wZXJhdGlvbkxpc3Q9e29yZGVyT3BlcmF0aW9uTGlzdH0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQHJldHVybnMge0pTWH0gR3JvdXBpbmcgY29tcG9uZW50LlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIF9nZXRHcm91cE9iamVjdCgpIHtcbiAgICAgICAgY29uc3QgeyBoYXNHcm91cGluZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGhhc0dyb3VwaW5nKSB7XG4gICAgICAgICAgICBjb25zdCB7IGdyb3VwTGFiZWxQcmVmaXgsIGdyb3VwU2VsZWN0ZWRLZXksIGdyb3VwYWJsZUNvbHVtbkxpc3QsIHN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBPcGVyYXRpb25MaXN0ID0gcmVkdWNlKGdyb3VwYWJsZUNvbHVtbkxpc3QsIChvcGVyYXRpb25MaXN0LCBsYWJlbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLl9ncm91cEZ1bmN0aW9uKGtleSksXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmkxOG4oZ3JvdXBMYWJlbFByZWZpeCArIGxhYmVsKSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHRoaXMuX2dldFNlbGVjdGVkU3R5bGUoa2V5LCBncm91cFNlbGVjdGVkS2V5KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcGVyYXRpb25MaXN0O1xuICAgICAgICAgICAgfSwgW10pLmNvbmNhdChbe1xuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmkxOG4oJ2xpc3QuYWN0aW9uQmFyLnVuZ3JvdXAnKSxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuX2dyb3VwRnVuY3Rpb24oKVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBJY29uID0gJ2ZvbGRlcl9vcGVuJztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIGljb25Qcm9wcz17eyBuYW1lOiBncm91cEljb24gfX0gb3BlcmF0aW9uTGlzdD17Z3JvdXBPcGVyYXRpb25MaXN0fSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudEtleSBDdXJyZW50IHNlbGVjdGVkIGtleS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZEtleSBLZXkgY29ycmVzcG9uZGluZyB0byB0aGUgc2VsZWN0ZWQgb25lLlxuICAgICogQHJldHVybnMge3N0cmluZ30gQ2xhc3Mgc2VsZWN0ZWQgaWYgY3VycmVudEtleSBjb3JyZXNwb25kcyB0byB0aGUgc2VsZWN0ZWRLZXkuXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgX2dldFNlbGVjdGVkU3R5bGUoY3VycmVudEtleSwgc2VsZWN0ZWRLZXkpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRLZXkgPT09IHNlbGVjdGVkS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gJyBzZWxlY3RlZCAnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQHJldHVybiB7c3RyaW5nfSBDbGFzcyBvZiB0aGUgc2VsZWN0aW9uIGNvbXBvbmVudCBpY29uLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIF9nZXRTZWxlY3Rpb25PYmplY3RJY29uKCkge1xuICAgICAgICBpZiAoJ25vbmUnID09PSB0aGlzLnByb3BzLnNlbGVjdGlvblN0YXR1cykge1xuICAgICAgICAgICAgcmV0dXJuICdjaGVja19ib3hfb3V0bGluZV9ibGFuayc7XG4gICAgICAgIH0gZWxzZSBpZiAoJ3NlbGVjdGVkJyA9PT0gdGhpcy5wcm9wcy5zZWxlY3Rpb25TdGF0dXMpIHtcbiAgICAgICAgICAgIHJldHVybiAnY2hlY2tfYm94JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ2luZGV0ZXJtaW5hdGVfY2hlY2tfYm94JztcbiAgICB9LFxuICAgIF9vcmRlckZ1bmN0aW9uKGtleSwgb3JkZXIpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3JkZXJBY3Rpb24oa2V5LCBvcmRlcik7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICBfZ3JvdXBGdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ3JvdXBBY3Rpb24oa2V5KTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIGh0bWxcbiAgICAqIEByZXR1cm5zIHtKU1h9IEh0bSBjb250ZW50LlxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kbC1ncmlkJyBkYXRhLWZvY3VzPSdsaXN0LWFjdGlvbi1iYXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZGwtY2VsbCcgZGF0YS1mb2N1cz0nZ2xvYmFsLWxpc3QtY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzU2VsZWN0aW9uICYmIHRoaXMuX2dldFNlbGVjdGlvbk9iamVjdCgpfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5fZ2V0T3JkZXJPYmplY3QoKX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX2dldEdyb3VwT2JqZWN0KCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kbC1jZWxsIG1kbC1jZWxsLS1oaWRlLXRhYmxldCBtZGwtY2VsbC0taGlkZS1waG9uZScgZGF0YS1mb2N1cz0nc2VsZWN0ZWQtZmFjZXQtY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BpY0Rpc3BsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUxhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWNDbGlja0FjdGlvbj17dGhpcy5wcm9wcy5mYWNldENsaWNrQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWNMaXN0PXt0aGlzLnByb3BzLmZhY2V0TGlzdH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWRsLWNlbGwnIGRhdGEtZm9jdXM9J2NvbnRleHR1YWwtYWN0aW9uLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICA8QWN0aW9uQ29udGV4dHVhbCBvcGVyYXRpb25MaXN0PXt0aGlzLnByb3BzLm9wZXJhdGlvbkxpc3R9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IGNvbXBvbmVudCwgbWl4aW4gfSA9IGJ1aWxkZXIoQWN0aW9uQmFyKTtcbmV4cG9ydCB7IGNvbXBvbmVudCwgbWl4aW4gfTtcbmV4cG9ydCBkZWZhdWx0IHsgY29tcG9uZW50LCBtaXhpbiB9O1xuIl19