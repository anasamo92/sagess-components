'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _translation = require('sagess-core/translation');

var _isObject = require('lodash/lang/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _uniqueId = require('lodash/utility/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _facetData = require('./facet-data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Facet = {
    /**
     * Display name.
     */
    displayName: 'Facet',
    /**
     * Init the component state.
     * @returns {object} Initial state.
     */
    getInitialState: function getInitialState() {
        return {
            isShowAll: false
        };
    },

    /**
     * Init the default props.
     * @returns {object} Initial state.
     */
    getDefaultProps: function getDefaultProps() {
        return {
            nbDefaultDataList: 6
        };
    },

    propTypes: {
        facet: _react.PropTypes.array,
        isShowAll: _react.PropTypes.bool,
        nbDefaultDataList: _react.PropTypes.number
    },
    /**
     * Render the component.
     * @returns {XML} Html component code.
     */
    render: function render() {
        var className = 'facet';
        if (this.props.selectedDataKey) {
            className += '-selected';
        } else if (this.props.isExpanded) {
            className += '-expanded';
        } else {
            className += '-collapsed';
        }
        return _react2.default.createElement(
            'div',
            { className: className, 'data-focus': 'facet' },
            this._renderFacetTitle(),
            this._renderFacetDataList()
        );
    },

    /**
     * Render the component title.
     * @returns {XML} Html component code.
     */
    _renderFacetTitle: function _renderFacetTitle() {
        var _this = this;

        var title = (0, _translation.translate)('live.filter.facets.' + this.props.facetKey); // Default facet translation path is live.filter.facets.
        if (this.props.selectedDataKey) {
            var facetLabel = '';
            var facet = this.props.facet && (0, _isObject2.default)(this.props.facet[this.props.selectedDataKey]) ? this.props.facet[this.props.selectedDataKey].label : this.props.facet.find(function (elm) {
                return elm.label === _this.props.selectedDataKey;
            });
            if (facet) {
                facetLabel = facet.label;
            }
            title = title + ' : ' + facetLabel;
        }
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'facet-title', onClick: this._facetTitleClickHandler },
            _react2.default.createElement(
                'h3',
                null,
                title
            )
        );
    },

    /**
     * Action on facet title click.
     */
    _facetTitleClickHandler: function _facetTitleClickHandler() {
        this.props.expandHandler(this.props.facetKey, !this.props.isExpanded);
        if (this.props.selectedDataKey) {
            this.props.selectHandler(this.props.facetKey, undefined, undefined);
        }
        this.setState({
            isExpanded: !this.props.isExpanded,
            isShowAll: false
        });
    },

    /**
     * Render the list of data of the facet.
     * @returns {XML} Html component code.
     */
    _renderFacetDataList: function _renderFacetDataList() {
        var _this2 = this;

        if (!this.props.isExpanded || this.props.selectedDataKey) {
            return '';
        }
        // The parsed facets are now an array
        var facetValues = this.state.isShowAll ? this.props.facet : this.props.facet.slice(0, this.props.nbDefaultDataList);
        return _react2.default.createElement(
            'div',
            { className: '', 'data-focus': 'facet-data-list' },
            _react2.default.createElement(
                'ul',
                null,
                facetValues.map(function (facetValue) {
                    return _react2.default.createElement(
                        'li',
                        { key: (0, _uniqueId2.default)('facet-item') },
                        _react2.default.createElement(_facetData.component, {
                            dataKey: facetValue.label,
                            data: facetValue,
                            selectHandler: _this2._facetDataSelectionHandler,
                            type: _this2.props.type
                        })
                    );
                })
            ),
            _react2.default.createElement(
                'div',
                { 'data-focus': 'facet-data-show-all' },
                this._renderShowAllDataList()
            )
        );
    },

    /**
     * Action on facet data selection.
     * @param {string} dataKey Key of the selected data.
     * @param {string} data Selected data.
     */
    _facetDataSelectionHandler: function _facetDataSelectionHandler(dataKey, data) {
        this.props.expandHandler(this.props.facetKey, false);
        this.props.selectHandler(this.props.facetKey, dataKey, data);
    },

    /**
     * Render all the data facets.
     * @returns {XML} Html component code.
     */
    _renderShowAllDataList: function _renderShowAllDataList() {
        if (!this.state.isShowAll && Object.keys(this.props.facet).length > this.props.nbDefaultDataList) {
            return _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', 'data-focus': 'facet-show-all', onClick: this._showAllHandler },
                (0, _translation.translate)('show.all')
            );
        }
    },

    /**
     * Action on 'show all' action.
     */
    _showAllHandler: function _showAllHandler() {
        this.setState({ isShowAll: !this.state.isShowAll });
    }
};
// Components

var _builder = (0, _builder3.default)(Facet),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiRmFjZXQiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxTdGF0ZSIsImlzU2hvd0FsbCIsImdldERlZmF1bHRQcm9wcyIsIm5iRGVmYXVsdERhdGFMaXN0IiwicHJvcFR5cGVzIiwiZmFjZXQiLCJQcm9wVHlwZXMiLCJhcnJheSIsImJvb2wiLCJudW1iZXIiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJwcm9wcyIsInNlbGVjdGVkRGF0YUtleSIsImlzRXhwYW5kZWQiLCJfcmVuZGVyRmFjZXRUaXRsZSIsIl9yZW5kZXJGYWNldERhdGFMaXN0IiwidGl0bGUiLCJmYWNldEtleSIsImZhY2V0TGFiZWwiLCJsYWJlbCIsImZpbmQiLCJlbG0iLCJfZmFjZXRUaXRsZUNsaWNrSGFuZGxlciIsImV4cGFuZEhhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJmYWNldFZhbHVlcyIsInN0YXRlIiwic2xpY2UiLCJtYXAiLCJmYWNldFZhbHVlIiwiX2ZhY2V0RGF0YVNlbGVjdGlvbkhhbmRsZXIiLCJ0eXBlIiwiX3JlbmRlclNob3dBbGxEYXRhTGlzdCIsImRhdGFLZXkiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIl9zaG93QWxsSGFuZGxlciIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBLElBQU1BLFFBQVE7QUFDVjs7O0FBR0FDLGlCQUFhLE9BSkg7QUFLVjs7OztBQUlBQyxtQkFUVSw2QkFTUTtBQUNkLGVBQU87QUFDSEMsdUJBQVc7QUFEUixTQUFQO0FBR0gsS0FiUzs7QUFjVjs7OztBQUlBQyxtQkFsQlUsNkJBa0JRO0FBQ2QsZUFBTztBQUNIQywrQkFBbUI7QUFEaEIsU0FBUDtBQUdILEtBdEJTOztBQXVCVkMsZUFBVztBQUNQQyxlQUFP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ZDtBQUhBOztlQWdKNkIsdUJBQVFILEtBQVIsQztJQUFyQjRDLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnc2FnZXNzLWNvcmUvdHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnbG9kYXNoL2xhbmcvaXNPYmplY3QnO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJ2xvZGFzaC91dGlsaXR5L3VuaXF1ZUlkJztcbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IGNvbXBvbmVudCBhcyBGYWNldERhdGEgfSBmcm9tICcuL2ZhY2V0LWRhdGEnO1xuXG5jb25zdCBGYWNldCA9IHtcbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IG5hbWUuXG4gICAgICovXG4gICAgZGlzcGxheU5hbWU6ICdGYWNldCcsXG4gICAgLyoqXG4gICAgICogSW5pdCB0aGUgY29tcG9uZW50IHN0YXRlLlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEluaXRpYWwgc3RhdGUuXG4gICAgICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNTaG93QWxsOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogSW5pdCB0aGUgZGVmYXVsdCBwcm9wcy5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBJbml0aWFsIHN0YXRlLlxuICAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5iRGVmYXVsdERhdGFMaXN0OiA2XG4gICAgICAgIH07XG4gICAgfSxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgZmFjZXQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgaXNTaG93QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbmJEZWZhdWx0RGF0YUxpc3Q6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LlxuICAgICAqIEByZXR1cm5zIHtYTUx9IEh0bWwgY29tcG9uZW50IGNvZGUuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gJ2ZhY2V0JztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRhS2V5KSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJy1zZWxlY3RlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc0V4cGFuZGVkKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJy1leHBhbmRlZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJy1jb2xsYXBzZWQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBkYXRhLWZvY3VzPSdmYWNldCc+XG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckZhY2V0VGl0bGUoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyRmFjZXREYXRhTGlzdCgpfVxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50IHRpdGxlLlxuICAgICAqIEByZXR1cm5zIHtYTUx9IEh0bWwgY29tcG9uZW50IGNvZGUuXG4gICAgICovXG4gICAgX3JlbmRlckZhY2V0VGl0bGUoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRyYW5zbGF0ZSgnbGl2ZS5maWx0ZXIuZmFjZXRzLicgKyB0aGlzLnByb3BzLmZhY2V0S2V5KTsgLy8gRGVmYXVsdCBmYWNldCB0cmFuc2xhdGlvbiBwYXRoIGlzIGxpdmUuZmlsdGVyLmZhY2V0cy5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRhS2V5KSB7XG4gICAgICAgICAgICBsZXQgZmFjZXRMYWJlbCA9ICcnO1xuICAgICAgICAgICAgY29uc3QgZmFjZXQgPSB0aGlzLnByb3BzLmZhY2V0ICYmIGlzT2JqZWN0KHRoaXMucHJvcHMuZmFjZXRbdGhpcy5wcm9wcy5zZWxlY3RlZERhdGFLZXldKSA/IHRoaXMucHJvcHMuZmFjZXRbdGhpcy5wcm9wcy5zZWxlY3RlZERhdGFLZXldLmxhYmVsIDogdGhpcy5wcm9wcy5mYWNldC5maW5kKGVsbSA9PiBlbG0ubGFiZWwgPT09IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRhS2V5KTtcbiAgICAgICAgICAgIGlmIChmYWNldCkge1xuICAgICAgICAgICAgICAgIGZhY2V0TGFiZWwgPSBmYWNldC5sYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGl0bGUgPSBgJHt0aXRsZX0gOiAke2ZhY2V0TGFiZWx9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdmYWNldC10aXRsZScgb25DbGljaz17dGhpcy5fZmFjZXRUaXRsZUNsaWNrSGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBBY3Rpb24gb24gZmFjZXQgdGl0bGUgY2xpY2suXG4gICAgICovXG4gICAgX2ZhY2V0VGl0bGVDbGlja0hhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZXhwYW5kSGFuZGxlcih0aGlzLnByb3BzLmZhY2V0S2V5LCAhdGhpcy5wcm9wcy5pc0V4cGFuZGVkKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRhS2V5KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdEhhbmRsZXIodGhpcy5wcm9wcy5mYWNldEtleSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNFeHBhbmRlZDogIXRoaXMucHJvcHMuaXNFeHBhbmRlZCxcbiAgICAgICAgICAgIGlzU2hvd0FsbDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGxpc3Qgb2YgZGF0YSBvZiB0aGUgZmFjZXQuXG4gICAgICogQHJldHVybnMge1hNTH0gSHRtbCBjb21wb25lbnQgY29kZS5cbiAgICAgKi9cbiAgICBfcmVuZGVyRmFjZXREYXRhTGlzdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmlzRXhwYW5kZWQgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGFLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgcGFyc2VkIGZhY2V0cyBhcmUgbm93IGFuIGFycmF5XG4gICAgICAgIGNvbnN0IGZhY2V0VmFsdWVzID0gdGhpcy5zdGF0ZS5pc1Nob3dBbGwgPyB0aGlzLnByb3BzLmZhY2V0IDogdGhpcy5wcm9wcy5mYWNldC5zbGljZSgwLCB0aGlzLnByb3BzLm5iRGVmYXVsdERhdGFMaXN0KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnIGRhdGEtZm9jdXM9J2ZhY2V0LWRhdGEtbGlzdCc+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7ZmFjZXRWYWx1ZXMubWFwKGZhY2V0VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1bmlxdWVJZCgnZmFjZXQtaXRlbScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2V0RGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT17ZmFjZXRWYWx1ZS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2ZhY2V0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RIYW5kbGVyPXt0aGlzLl9mYWNldERhdGFTZWxlY3Rpb25IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nZmFjZXQtZGF0YS1zaG93LWFsbCc+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJTaG93QWxsRGF0YUxpc3QoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBBY3Rpb24gb24gZmFjZXQgZGF0YSBzZWxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFLZXkgS2V5IG9mIHRoZSBzZWxlY3RlZCBkYXRhLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFNlbGVjdGVkIGRhdGEuXG4gICAgICovXG4gICAgX2ZhY2V0RGF0YVNlbGVjdGlvbkhhbmRsZXIoZGF0YUtleSwgZGF0YSkge1xuICAgICAgICB0aGlzLnByb3BzLmV4cGFuZEhhbmRsZXIodGhpcy5wcm9wcy5mYWNldEtleSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdEhhbmRsZXIodGhpcy5wcm9wcy5mYWNldEtleSwgZGF0YUtleSwgZGF0YSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYWxsIHRoZSBkYXRhIGZhY2V0cy5cbiAgICAgKiBAcmV0dXJucyB7WE1MfSBIdG1sIGNvbXBvbmVudCBjb2RlLlxuICAgICAqL1xuICAgIF9yZW5kZXJTaG93QWxsRGF0YUxpc3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1Nob3dBbGwgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5mYWNldCkubGVuZ3RoID4gdGhpcy5wcm9wcy5uYkRlZmF1bHREYXRhTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YSBocmVmPSdqYXZhc2NyaXB0OnZvaWQoMCk7JyBkYXRhLWZvY3VzPSdmYWNldC1zaG93LWFsbCcgb25DbGljaz17dGhpcy5fc2hvd0FsbEhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdzaG93LmFsbCcpfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEFjdGlvbiBvbiAnc2hvdyBhbGwnIGFjdGlvbi5cbiAgICAgKi9cbiAgICBfc2hvd0FsbEhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Nob3dBbGw6ICF0aGlzLnN0YXRlLmlzU2hvd0FsbCB9KTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIoRmFjZXQpO1xuZXhwb3J0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbiwgY29tcG9uZW50IH07XG4iXX0=