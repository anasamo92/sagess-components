'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = exports.component = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _translation = require('sagess-core/translation');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _omit = require('lodash/object/omit');

var _omit2 = _interopRequireDefault(_omit);

var _facet = require('./facet');

var _stylable = require('../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Components

// Mixins


var FacetBox = {
    /**
     * Component's mixins
     */
    mixins: [_stylable2.default],
    /**
     * Display name.
     */
    displayName: 'facet-box',
    /**
     * Init the default properties
     * @returns {object} Initial properties.
     */
    getDefaultProps: function getDefaultProps() {
        return {
            facetList: {},
            selectedFacetList: {},
            openedFacetList: {},
            config: {}
        };
    },

    /**
     * List property validation.
     */
    propTypes: {
        facetList: (0, _types2.default)('object'),
        selectedFacetList: (0, _types2.default)('object'),
        openedFacetList: (0, _types2.default)('object'),
        config: (0, _types2.default)('object'),
        dataSelectionHandler: (0, _types2.default)('func')
    },
    /**
     * Init the state of the component.
     * @returns {object} Iitial state.
     */
    getInitialState: function getInitialState() {
        var openedFacetList = this._generateOpenedFacetList(this.props.openedFacetList, this.props.facetList);
        return {
            isExpanded: true,
            openedFacetList: openedFacetList
        };
    },

    /**
     * New properties set event handle
     * @param {Object} nextProps nextProps
     */
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var openedFacetList = this._generateOpenedFacetList(nextProps.openedFacetList, nextProps.facetList);
        this.setState({ openedFacetList: openedFacetList });
    },
    _generateOpenedFacetList: function _generateOpenedFacetList(openedFacetList, facetList) {
        if (openedFacetList.length === 0) {
            return Object.keys(facetList).reduce(function (list, facetKey) {
                list[facetKey] = true;
                return list;
            }, {});
        } else {
            return openedFacetList;
        }
    },

    /**
     * Render the component.
     * @returns {XML} Html code.
     */
    render: function render() {
        var className = '';
        if (this.state.isExpanded) {
            className += ' expanded';
        } else {
            className += ' collapsed';
        }
        return _react2.default.createElement(
            'div',
            { className: '' + (this._getStyleClassName() + className), 'data-focus': 'facet-box' },
            this._renderFacetBoxTitle(),
            this._renderFacetList()
        );
    },

    /**
     * Render the div title of the component.
     * @returns {XML} Html content.
     */
    _renderFacetBoxTitle: function _renderFacetBoxTitle() {
        var title = this.state.isExpanded ? (0, _translation.translate)('live.filter.title') : '';
        //TODO onClick={this._facetBoxTitleClickHandler} (le repli doit aussi etre porté par le data-focus=advanced-search
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'facet-box-heading', onClick: this._facetBoxTitleClickHandler },
            _react2.default.createElement(
                'h2',
                null,
                title
            )
        );
    },

    /**
     * Render the list of the facets.
     * @returns {XML} Html content.
     */
    _renderFacetList: function _renderFacetList() {
        var _this = this;

        if (!this.state.isExpanded) {
            return '';
        }
        return _react2.default.createElement(
            'div',
            { 'data-focus': 'facet-box-body' },
            Object.keys(this.props.facetList).map(function (facetKey) {
                var facet = _this.props.facetList[facetKey];
                var selectedDataKey = _this.props.selectedFacetList[facetKey] ? _this.props.selectedFacetList[facetKey].key : undefined;
                if (selectedDataKey || Object.keys(facet).length > 1) {
                    return _react2.default.createElement(_facet.component, { facetKey: facetKey, key: facetKey,
                        facet: facet,
                        selectedDataKey: selectedDataKey,
                        isExpanded: _this.state.openedFacetList[facetKey],
                        expandHandler: _this._facetExpansionHandler,
                        selectHandler: _this._facetSelectionHandler,
                        type: _this.props.config[facetKey]
                    });
                }
            })
        );
    },

    /**
     * Action on title click.
     * Hide / Expand the component.
     */
    _facetBoxTitleClickHandler: function _facetBoxTitleClickHandler() {
        this.setState({ isExpanded: !this.state.isExpanded });
    },

    /**
     * Facet selection action handler.
     * @param {string} facetKey Key of the selected facet.
     * @param {string} dataKey Key of the selceted data.
     * @param {object} data Content of the selected data facet.
     */
    _facetSelectionHandler: function _facetSelectionHandler(facetKey, dataKey, data) {
        var result = { openedFacetList: this.state.openedFacetList };
        if (dataKey == undefined) {
            result.selectedFacetList = (0, _omit2.default)(this.props.selectedFacetList, facetKey);
        } else {
            result.selectedFacetList = (0, _objectAssign2.default)(this.props.selectedFacetList, _defineProperty({}, facetKey, { key: dataKey, data: data }));
        }
        this.props.dataSelectionHandler(result);
    },

    /**
     * Expand facet action handler.
     * @param {string} facetKey Key of the facet.
     * @param {string} isExpanded true if expand action, false if collapse action.
     */
    _facetExpansionHandler: function _facetExpansionHandler(facetKey, isExpanded) {
        var openedFacetList = this.state.openedFacetList;
        openedFacetList[facetKey] = isExpanded;
        this.setState({ openedFacetList: openedFacetList });
    }
};

var builtComp = (0, _builder2.default)(FacetBox);
var component = builtComp.component,
    mixin = builtComp.mixin;
exports.component = component;
exports.mixin = mixin;
exports.default = builtComp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiRmFjZXRCb3giLCJtaXhpbnMiLCJzdHlsYWJsZSIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiZmFjZXRMaXN0Iiwic2VsZWN0ZWRGYWNldExpc3QiLCJvcGVuZWRGYWNldExpc3QiLCJjb25maWciLCJwcm9wVHlwZXMiLCJkYXRhU2VsZWN0aW9uSGFuZGxlciIsImdldEluaXRpYWxTdGF0ZSIsIl9nZW5lcmF0ZU9wZW5lZEZhY2V0TGlzdCIsInByb3BzIiwiaXNFeHBhbmRlZCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJsaXN0IiwiZmFjZXRLZXkiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJzdGF0ZSIsIl9nZXRTdHlsZUNsYXNzTmFtZSIsIl9yZW5kZXJGYWNldEJveFRpdGxlIiwiX3JlbmRlckZhY2V0TGlzdCIsInRpdGxlIiwiX2ZhY2V0Qm94VGl0bGVDbGlja0hhbmRsZXIiLCJtYXAiLCJmYWNldCIsInNlbGVjdGVkRGF0YUtleSIsImtleSIsInVuZGVmaW5lZCIsIl9mYWNldEV4cGFuc2lvbkhhbmRsZXIiLCJfZmFjZXRTZWxlY3Rpb25IYW5kbGVyIiwiZGF0YUtleSIsImRhdGEiLCJyZXN1bHQiLCJidWlsdENvbXAiLCJjb21wb25lbnQiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7QUFFQTs7Ozs7Ozs7QUFIQTs7QUFFQTs7O0FBR0EsSUFBTUEsV0FBVztBQUNiOzs7QUFHQUMsWUFBUSxDQUFDQyxrQkFBRCxDQUpLO0FBS2I7OztBQUdBQyxpQkFBYSxXQVJBO0FBU2I7Ozs7QUFJQUMsbUJBYmEsNkJBYUs7QUFDZCxlQUFPO0FBQ0hDLHVCQUFXLEVBRFI7QUFFSEMsK0JBQW1CLEVBRmhCO0FBR0hDLDZCQUFpQixFQUhkO0FBSUhDLG9CQUFRO0FBSkwsU0FBUDtBQU1ILEtBcEJZOztBQXFCYjs7O0FBR0FDLGVBQVc7QUFDUEosbUJBQVcscUJBQUssUUFBTCxDQURKO0FBRVBDLDJCQUFtQixxQkFBSyxRQUFMLENBRlo7QUFHUEMseUJBQWlCLHFCQUFLLFFBQUwsQ0FIVjtBQUlQQyxnQkFBUSxxQkFBSyxRQUFMLENBSkQ7QUFLUEUsOEJBQXNCLHFCQUFLLE1BQUw7QUFMZixLQXhCRTtBQStCYjs7OztBQUlBQyxtQkFuQ2EsNkJBbUNLO0FBQ2QsWUFBTUosa0JBQWtCLEtBQUtLLHdCQUFMLENBQThCLEtBQUtDLEtBQUwsQ0FBV04sZUFBekMsRUFBMEQsS0FBS00sS0FBTCxDQUFXUixTQUFyRSxDQUF4QjtBQUNBLGVBQU87QUFDSFMsd0JBQVksSUFEVDtBQUVIUDtBQUZHLFNBQVA7QUFJSCxLQXpDWTs7QUEwQ2I7Ozs7QUFJQVEsNkJBOUNhLHFDQThDYUMsU0E5Q2IsRUE4Q3dCO0FBQ2pDLFlBQU1ULGtCQUFrQixLQUFLSyx3QkFBTCxDQUE4QkksVUFBVVQsZUFBeEMsRUFBeURTLFVBQVVYLFNBQW5FLENBQXhCO0FBQ0EsYUFBS1ksUUFBTCxDQUFjLEVBQUVWLGdDQUFGLEVBQWQ7QUFDSCxLQWpEWTtBQWtEYkssNEJBbERhLG9DQWtEWUwsZUFsRFosRUFrRDZCRixTQWxEN0IsRUFrRHdDO0FBQ2pELFlBQUlFLGdCQUFnQlcsTUFBaEIsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUIsbUJBQU9DLE9BQU9DLElBQVAsQ0FBWWYsU0FBWixFQUF1QmdCLE1BQXZCLENBQThCLFVBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNyREQscUJBQUtDLFFBQUwsSUFBaUIsSUFBakI7QUFDQSx1QkFBT0QsSUFBUDtBQUNILGFBSE0sRUFHSixFQUhJLENBQVA7QUFJSCxTQUxELE1BS087QUFDSCxtQkFBT2YsZUFBUDtBQUNIO0FBQ0osS0EzRFk7O0FBNERiOzs7O0FBSUFpQixVQWhFYSxvQkFnRUo7QUFDTCxZQUFJQyxZQUFZLEVBQWhCO0FBQ0EsWUFBSSxLQUFLQyxLQUFMLENBQVdaLFVBQWYsRUFBMkI7QUFDdkJXLHlCQUFhLFdBQWI7QUFDSCxTQUZELE1BRU87QUFDSEEseUJBQWEsWUFBYjtBQUNIO0FBQ0QsZUFDSTtBQUFBO0FBQUEsY0FBSyxpQkFBYyxLQUFLRSxrQkFBTCxLQUE0QkYsU0FBMUMsQ0FBTCxFQUE0RCxjQUFXLFdBQXZFO0FBQ0ssaUJBQUtHLG9CQUFMLEVBREw7QUFFSyxpQkFBS0MsZ0JBQUw7QUFGTCxTQURKO0FBTUgsS0E3RVk7O0FBOEViOzs7O0FBSUFELHdCQWxGYSxrQ0FrRlU7QUFDbkIsWUFBSUUsUUFBUSxLQUFLSixLQUFMLENBQVdaLFVBQVgsR0FBd0IsNEJBQVUsbUJBQVYsQ0FBeEIsR0FBeUQsRUFBckU7QUFDQTtBQUNBLGVBQ0k7QUFBQTtBQUFBLGNBQUssY0FBVyxtQkFBaEIsRUFBb0MsU0FBUyxLQUFLaUIsMEJBQWxEO0FBQ0k7QUFBQTtBQUFBO0FBQUtEO0FBQUw7QUFESixTQURKO0FBS0gsS0ExRlk7O0FBMkZiOzs7O0FBSUFELG9CQS9GYSw4QkErRk07QUFBQTs7QUFDZixZQUFJLENBQUMsS0FBS0gsS0FBTCxDQUFXWixVQUFoQixFQUE0QjtBQUN4QixtQkFBTyxFQUFQO0FBQ0g7QUFDRCxlQUNJO0FBQUE7QUFBQSxjQUFLLGNBQVcsZ0JBQWhCO0FBQ0tLLG1CQUFPQyxJQUFQLENBQVksS0FBS1AsS0FBTCxDQUFXUixTQUF2QixFQUFrQzJCLEdBQWxDLENBQXNDLFVBQUNULFFBQUQsRUFBYztBQUNqRCxvQkFBSVUsUUFBUSxNQUFLcEIsS0FBTCxDQUFXUixTQUFYLENBQXFCa0IsUUFBckIsQ0FBWjtBQUNBLG9CQUFJVyxrQkFBa0IsTUFBS3JCLEtBQUwsQ0FBV1AsaUJBQVgsQ0FBNkJpQixRQUE3QixJQUF5QyxNQUFLVixLQUFMLENBQVdQLGlCQUFYLENBQTZCaUIsUUFBN0IsRUFBdUNZLEdBQWhGLEdBQXNGQyxTQUE1RztBQUNBLG9CQUFJRixtQkFBbUJmLE9BQU9DLElBQVAsQ0FBWWEsS0FBWixFQUFtQmYsTUFBbkIsR0FBNEIsQ0FBbkQsRUFBc0Q7QUFDbEQsMkJBQ0ksOEJBQUMsZ0JBQUQsSUFBTyxVQUFVSyxRQUFqQixFQUEyQixLQUFLQSxRQUFoQztBQUNJLCtCQUFPVSxLQURYO0FBRUkseUNBQWlCQyxlQUZyQjtBQUdJLG9DQUFZLE1BQUtSLEtBQUwsQ0FBV25CLGVBQVgsQ0FBMkJnQixRQUEzQixDQUhoQjtBQUlJLHVDQUFlLE1BQUtjLHNCQUp4QjtBQUtJLHVDQUFlLE1BQUtDLHNCQUx4QjtBQU1JLDhCQUFNLE1BQUt6QixLQUFMLENBQVdMLE1BQVgsQ0FBa0JlLFFBQWxCO0FBTlYsc0JBREo7QUFVSDtBQUNKLGFBZkE7QUFETCxTQURKO0FBb0JILEtBdkhZOztBQXdIYjs7OztBQUlBUSw4QkE1SGEsd0NBNEhnQjtBQUN6QixhQUFLZCxRQUFMLENBQWMsRUFBRUgsWUFBWSxDQUFDLEtBQUtZLEtBQUwsQ0FBV1osVUFBMUIsRUFBZDtBQUNILEtBOUhZOztBQStIYjs7Ozs7O0FBTUF3QiwwQkFySWEsa0NBcUlVZixRQXJJVixFQXFJb0JnQixPQXJJcEIsRUFxSTZCQyxJQXJJN0IsRUFxSW1DO0FBQzVDLFlBQUlDLFNBQVMsRUFBRWxDLGlCQUFpQixLQUFLbUIsS0FBTCxDQUFXbkIsZUFBOUIsRUFBYjtBQUNBLFlBQUlnQyxXQUFXSCxTQUFmLEVBQTBCO0FBQ3RCSyxtQkFBT25DLGlCQUFQLEdBQTJCLG9CQUFLLEtBQUtPLEtBQUwsQ0FBV1AsaUJBQWhCLEVBQW1DaUIsUUFBbkMsQ0FBM0I7QUFDSCxTQUZELE1BRU87QUFDSGtCLG1CQUFPbkMsaUJBQVAsR0FBMkIsNEJBQU8sS0FBS08sS0FBTCxDQUFXUCxpQkFBbEIsc0JBQXdDaUIsUUFBeEMsRUFBbUQsRUFBRVksS0FBS0ksT0FBUCxFQUFnQkMsTUFBTUEsSUFBdEIsRUFBbkQsRUFBM0I7QUFDSDtBQUNELGFBQUszQixLQUFMLENBQVdILG9CQUFYLENBQWdDK0IsTUFBaEM7QUFDSCxLQTdJWTs7QUE4SWI7Ozs7O0FBS0FKLDBCQW5KYSxrQ0FtSlVkLFFBbkpWLEVBbUpvQlQsVUFuSnBCLEVBbUpnQztBQUN6QyxZQUFJUCxrQkFBa0IsS0FBS21CLEtBQUwsQ0FBV25CLGVBQWpDO0FBQ0FBLHdCQUFnQmdCLFFBQWhCLElBQTRCVCxVQUE1QjtBQUNBLGFBQUtHLFFBQUwsQ0FBYyxFQUFFVixpQkFBaUJBLGVBQW5CLEVBQWQ7QUFDSDtBQXZKWSxDQUFqQjs7QUEwSkEsSUFBTW1DLFlBQVksdUJBQVExQyxRQUFSLENBQWxCO0lBQ1EyQyxTLEdBQXFCRCxTLENBQXJCQyxTO0lBQVdDLEssR0FBVUYsUyxDQUFWRSxLO1FBR2ZELFMsR0FBQUEsUztRQUNBQyxLLEdBQUFBLEs7a0JBRVdGLFMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgdHlwZSBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnc2FnZXNzLWNvcmUvdHJhbnNsYXRpb24nO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vYmplY3Qvb21pdCc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IGNvbXBvbmVudCBhcyBGYWNldCB9IGZyb20gJy4vZmFjZXQnO1xuLy8gTWl4aW5zXG5pbXBvcnQgc3R5bGFibGUgZnJvbSAnLi4vLi4vbWl4aW4vc3R5bGFibGUnO1xuXG5jb25zdCBGYWNldEJveCA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQncyBtaXhpbnNcbiAgICAgKi9cbiAgICBtaXhpbnM6IFtzdHlsYWJsZV0sXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBuYW1lLlxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lOiAnZmFjZXQtYm94JyxcbiAgICAvKipcbiAgICAgKiBJbml0IHRoZSBkZWZhdWx0IHByb3BlcnRpZXNcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBJbml0aWFsIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmFjZXRMaXN0OiB7fSxcbiAgICAgICAgICAgIHNlbGVjdGVkRmFjZXRMaXN0OiB7fSxcbiAgICAgICAgICAgIG9wZW5lZEZhY2V0TGlzdDoge30sXG4gICAgICAgICAgICBjb25maWc6IHt9XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBMaXN0IHByb3BlcnR5IHZhbGlkYXRpb24uXG4gICAgICovXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGZhY2V0TGlzdDogdHlwZSgnb2JqZWN0JyksXG4gICAgICAgIHNlbGVjdGVkRmFjZXRMaXN0OiB0eXBlKCdvYmplY3QnKSxcbiAgICAgICAgb3BlbmVkRmFjZXRMaXN0OiB0eXBlKCdvYmplY3QnKSxcbiAgICAgICAgY29uZmlnOiB0eXBlKCdvYmplY3QnKSxcbiAgICAgICAgZGF0YVNlbGVjdGlvbkhhbmRsZXI6IHR5cGUoJ2Z1bmMnKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogSW5pdCB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBJaXRpYWwgc3RhdGUuXG4gICAgICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICBjb25zdCBvcGVuZWRGYWNldExpc3QgPSB0aGlzLl9nZW5lcmF0ZU9wZW5lZEZhY2V0TGlzdCh0aGlzLnByb3BzLm9wZW5lZEZhY2V0TGlzdCwgdGhpcy5wcm9wcy5mYWNldExpc3QpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNFeHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9wZW5lZEZhY2V0TGlzdFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogTmV3IHByb3BlcnRpZXMgc2V0IGV2ZW50IGhhbmRsZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXh0UHJvcHMgbmV4dFByb3BzXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgY29uc3Qgb3BlbmVkRmFjZXRMaXN0ID0gdGhpcy5fZ2VuZXJhdGVPcGVuZWRGYWNldExpc3QobmV4dFByb3BzLm9wZW5lZEZhY2V0TGlzdCwgbmV4dFByb3BzLmZhY2V0TGlzdCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWRGYWNldExpc3QgfSk7XG4gICAgfSxcbiAgICBfZ2VuZXJhdGVPcGVuZWRGYWNldExpc3Qob3BlbmVkRmFjZXRMaXN0LCBmYWNldExpc3QpIHtcbiAgICAgICAgaWYgKG9wZW5lZEZhY2V0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmYWNldExpc3QpLnJlZHVjZSgobGlzdCwgZmFjZXRLZXkpID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0W2ZhY2V0S2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb3BlbmVkRmFjZXRMaXN0O1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAcmV0dXJucyB7WE1MfSBIdG1sIGNvZGUuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGV4cGFuZGVkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGNvbGxhcHNlZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLl9nZXRTdHlsZUNsYXNzTmFtZSgpICsgY2xhc3NOYW1lfWB9IGRhdGEtZm9jdXM9J2ZhY2V0LWJveCc+XG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckZhY2V0Qm94VGl0bGUoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyRmFjZXRMaXN0KCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgZGl2IHRpdGxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQHJldHVybnMge1hNTH0gSHRtbCBjb250ZW50LlxuICAgICAqL1xuICAgIF9yZW5kZXJGYWNldEJveFRpdGxlKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnN0YXRlLmlzRXhwYW5kZWQgPyB0cmFuc2xhdGUoJ2xpdmUuZmlsdGVyLnRpdGxlJykgOiAnJztcbiAgICAgICAgLy9UT0RPIG9uQ2xpY2s9e3RoaXMuX2ZhY2V0Qm94VGl0bGVDbGlja0hhbmRsZXJ9IChsZSByZXBsaSBkb2l0IGF1c3NpIGV0cmUgcG9ydMOpIHBhciBsZSBkYXRhLWZvY3VzPWFkdmFuY2VkLXNlYXJjaFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdmYWNldC1ib3gtaGVhZGluZycgb25DbGljaz17dGhpcy5fZmFjZXRCb3hUaXRsZUNsaWNrSGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGxpc3Qgb2YgdGhlIGZhY2V0cy5cbiAgICAgKiBAcmV0dXJucyB7WE1MfSBIdG1sIGNvbnRlbnQuXG4gICAgICovXG4gICAgX3JlbmRlckZhY2V0TGlzdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdmYWNldC1ib3gtYm9keSc+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuZmFjZXRMaXN0KS5tYXAoKGZhY2V0S2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmYWNldCA9IHRoaXMucHJvcHMuZmFjZXRMaXN0W2ZhY2V0S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkRGF0YUtleSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRGYWNldExpc3RbZmFjZXRLZXldID8gdGhpcy5wcm9wcy5zZWxlY3RlZEZhY2V0TGlzdFtmYWNldEtleV0ua2V5IDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWREYXRhS2V5IHx8IE9iamVjdC5rZXlzKGZhY2V0KS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNldCBmYWNldEtleT17ZmFjZXRLZXl9IGtleT17ZmFjZXRLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY2V0PXtmYWNldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRhS2V5PXtzZWxlY3RlZERhdGFLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRXhwYW5kZWQ9e3RoaXMuc3RhdGUub3BlbmVkRmFjZXRMaXN0W2ZhY2V0S2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSGFuZGxlcj17dGhpcy5fZmFjZXRFeHBhbnNpb25IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RIYW5kbGVyPXt0aGlzLl9mYWNldFNlbGVjdGlvbkhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMuY29uZmlnW2ZhY2V0S2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBBY3Rpb24gb24gdGl0bGUgY2xpY2suXG4gICAgICogSGlkZSAvIEV4cGFuZCB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIF9mYWNldEJveFRpdGxlQ2xpY2tIYW5kbGVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNFeHBhbmRlZDogIXRoaXMuc3RhdGUuaXNFeHBhbmRlZCB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEZhY2V0IHNlbGVjdGlvbiBhY3Rpb24gaGFuZGxlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmFjZXRLZXkgS2V5IG9mIHRoZSBzZWxlY3RlZCBmYWNldC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YUtleSBLZXkgb2YgdGhlIHNlbGNldGVkIGRhdGEuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgQ29udGVudCBvZiB0aGUgc2VsZWN0ZWQgZGF0YSBmYWNldC5cbiAgICAgKi9cbiAgICBfZmFjZXRTZWxlY3Rpb25IYW5kbGVyKGZhY2V0S2V5LCBkYXRhS2V5LCBkYXRhKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB7IG9wZW5lZEZhY2V0TGlzdDogdGhpcy5zdGF0ZS5vcGVuZWRGYWNldExpc3QgfTtcbiAgICAgICAgaWYgKGRhdGFLZXkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQuc2VsZWN0ZWRGYWNldExpc3QgPSBvbWl0KHRoaXMucHJvcHMuc2VsZWN0ZWRGYWNldExpc3QsIGZhY2V0S2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5zZWxlY3RlZEZhY2V0TGlzdCA9IGFzc2lnbih0aGlzLnByb3BzLnNlbGVjdGVkRmFjZXRMaXN0LCB7IFtmYWNldEtleV06IHsga2V5OiBkYXRhS2V5LCBkYXRhOiBkYXRhIH0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5kYXRhU2VsZWN0aW9uSGFuZGxlcihyZXN1bHQpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRXhwYW5kIGZhY2V0IGFjdGlvbiBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmYWNldEtleSBLZXkgb2YgdGhlIGZhY2V0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpc0V4cGFuZGVkIHRydWUgaWYgZXhwYW5kIGFjdGlvbiwgZmFsc2UgaWYgY29sbGFwc2UgYWN0aW9uLlxuICAgICAqL1xuICAgIF9mYWNldEV4cGFuc2lvbkhhbmRsZXIoZmFjZXRLZXksIGlzRXhwYW5kZWQpIHtcbiAgICAgICAgbGV0IG9wZW5lZEZhY2V0TGlzdCA9IHRoaXMuc3RhdGUub3BlbmVkRmFjZXRMaXN0O1xuICAgICAgICBvcGVuZWRGYWNldExpc3RbZmFjZXRLZXldID0gaXNFeHBhbmRlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZEZhY2V0TGlzdDogb3BlbmVkRmFjZXRMaXN0IH0pO1xuICAgIH1cbn07XG5cbmNvbnN0IGJ1aWx0Q29tcCA9IGJ1aWxkZXIoRmFjZXRCb3gpO1xuY29uc3QgeyBjb21wb25lbnQsIG1peGluIH0gPSBidWlsdENvbXA7XG5cbmV4cG9ydCB7XG4gICAgY29tcG9uZW50LFxuICAgIG1peGluXG59XG5leHBvcnQgZGVmYXVsdCBidWlsdENvbXA7XG4iXX0=