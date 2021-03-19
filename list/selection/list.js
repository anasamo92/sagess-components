'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = exports.component = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // Dependencies


//Add a ref to the props if the component is not pure add nothing in the other case.

// Mixins

// Components


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder = require('sagess-core/component/builder');

var _builder2 = _interopRequireDefault(_builder);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _reduce = require('lodash/collection/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isReactClassComponent = require('../../utils/is-react-class-component');

var _translation = require('sagess-core/translation');

var _infiniteScroll = require('../mixin/infinite-scroll');

var _referenceProperty = require('../../common/mixin/reference-property');

var _referenceProperty2 = _interopRequireDefault(_referenceProperty);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var listMixin = {
    /**
    * Display name.
    */
    displayName: 'SelectionList',

    /**
    * Mixin dependancies.
    */
    mixins: [_infiniteScroll.mixin, _referenceProperty2.default],

    /**
    * Default properties for the list.
    * @returns {{isSelection: boolean}} the default properties
    */
    getDefaultProps: function getListDefaultProps() {
        return {
            data: [],
            isSelection: true,
            selectionStatus: 'partial',
            selectionData: [],
            isLoading: false,
            operationList: [],
            idField: 'id'
        };
    },

    /**
    * list property validation.
    * @type {Object}
    */
    propTypes: {
        LineComponent: (0, _types2.default)('func'),
        buttonComponent: (0, _types2.default)('func'),
        data: (0, _types2.default)('array'),
        idField: (0, _types2.default)('string'),
        isLoading: (0, _types2.default)('bool'),
        isSelection: (0, _types2.default)('bool'),
        loader: (0, _types2.default)('func'),
        onLineClick: (0, _types2.default)('func'),
        onSelection: (0, _types2.default)('func'),
        operationList: (0, _types2.default)(['array', 'object']),
        selectionData: (0, _types2.default)('array'),
        selectionStatus: (0, _types2.default)('string')
    },

    getInitialState: function getInitialState() {
        return {
            selectedItems: null
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(_ref) {
        var selectionStatus = _ref.selectionStatus,
            data = _ref.data;

        switch (selectionStatus) {
            case 'none':
                this.setState({ selectedItems: new Map() });
                break;
            case 'selected':
                var selectedItems = new Map();
                data.forEach(function (item) {
                    selectedItems.set(JSON.stringify(item), item);
                });
                this.setState({ selectedItems: selectedItems });
                break;
        }
    },


    /**
    * Return selected items in the list.
    * @return {Array} selected items
    */
    getSelectedItems: function getSelectedItems() {
        var selectedItems = this.state.selectedItems;

        if (selectedItems !== null) {
            var _selectedItems = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.state.selectedItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref2 = _step.value;

                    var _ref3 = _slicedToArray(_ref2, 2);

                    var item = _ref3[0];
                    var isSelected = _ref3[1];

                    if (isSelected) _selectedItems.push(JSON.parse(item));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return _selectedItems;
        } else {
            return (0, _reduce2.default)(this.refs, function (acc, ref) {
                if (ref.getValue) {
                    var _ref$getValue = ref.getValue(),
                        _item = _ref$getValue.item,
                        _isSelected = _ref$getValue.isSelected;

                    if (_isSelected) acc.push(_item);
                }
                return acc;
            }, []);
        }
    },
    _handleLineSelection: function _handleLineSelection(data, isSelected) {
        var _this = this;

        var selectedItems = this.state.selectedItems;

        var newSelectedItems = new Map();
        if (selectedItems !== null) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = selectedItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _ref4 = _step2.value;

                    var _ref5 = _slicedToArray(_ref4, 2);

                    var key = _ref5[0];
                    var value = _ref5[1];

                    newSelectedItems.set(key, value);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
        newSelectedItems.set(JSON.stringify(data), isSelected);

        this.setState({ selectedItems: newSelectedItems }, function () {
            if (_this.props.onSelection) {
                _this.props.onSelection(data, isSelected);
            }
        });
    },


    /**
    * Render lines of the list.
    * @returns {*} DOM for lines
    */
    _renderLines: function _renderLines() {
        var _this2 = this;

        var _props = this.props,
            data = _props.data,
            Line = _props.LineComponent,
            selectionData = _props.selectionData,
            idField = _props.idField,
            selectionStatus = _props.selectionStatus,
            otherProps = _objectWithoutProperties(_props, ['data', 'LineComponent', 'selectionData', 'idField', 'selectionStatus']);

        if (selectionData && selectionData.length > 0) {
            console.warn('[DEPRECATED] You are using \'selectionData\' prop which is now DEPRECATED. Please use \'selectionnableInitializer\' on line component.');
        }
        // LEGACY CODE
        var customLineComponent = otherProps.lineComponent;
        if (customLineComponent) {
            console.warn('%c DEPRECATED : You are using the lineComponent prop in a list component, this will be removed in the next release of Sagess components. Please use LineComponent prop instead.', 'color: #FF9C00; font-weight: bold');
        }
        var FinalLineComponent = customLineComponent || Line;
        // END OF LEGACY CODE
        if (!(0, _isArray2.default)(data)) {
            console.error('List: Lines: it seems data is not an array, please check the value in your store, it could also be related to your action in case of a load (have a look to shouldDumpStoreOnActionCall option).');
        }
        return data.map(function (line, idx) {
            var isSelected = void 0;
            var selection = selectionData.find(function (item) {
                return item && item[idField] === line[idField];
            });
            if (selection) {
                isSelected = selection.isSelected;
            } else {
                switch (selectionStatus) {
                    case 'none':
                        isSelected = false;
                        break;
                    case 'selected':
                        isSelected = true;
                        break;
                    case 'partial':
                        isSelected = undefined;
                        break;
                    default:
                        isSelected = false;
                }
            }
            var listFinalProps = (0, _isReactClassComponent.addRefToPropsIfNotPure)(FinalLineComponent, Object.assign({}, otherProps, {
                data: line,
                isSelected: isSelected,
                key: line[idField] || idx,
                onSelection: _this2._handleLineSelection,
                reference: _this2._getReference()
            }), '' + _isReactClassComponent.LINE + idx);
            return _react2.default.createElement(FinalLineComponent, listFinalProps);
        });
    },

    /**
    * Render loading state
    * @return {HTML} the loading state
    */
    _renderLoading: function _renderLoading() {
        var _props2 = this.props,
            isLoading = _props2.isLoading,
            loader = _props2.loader;

        if (isLoading) {
            if (loader) {
                return loader();
            }
            return _react2.default.createElement(
                'li',
                { className: 'sl-loading' },
                (0, _translation.translate)('list.loading'),
                ' ...'
            );
        }
    },

    /**
    * Render manual fetch state
    * @return {HTML} the rendered manual fetch state
    */
    _renderManualFetch: function _renderManualFetch() {
        var _props3 = this.props,
            isManualFetch = _props3.isManualFetch,
            hasMoreData = _props3.hasMoreData;

        if (isManualFetch && hasMoreData) {
            var style = { className: 'primary' };
            return _react2.default.createElement(
                'li',
                { className: 'sl-button' },
                _react2.default.createElement(_button2.default, {
                    handleOnClick: this.handleShowMore,
                    label: 'list.button.showMore',
                    style: style,
                    type: 'button'
                })
            );
        }
    },
    shouldComponentUpdate: function shouldComponentUpdate(_ref6, _ref7) {
        var selectionStatus = _ref6.selectionStatus;
        var selectedItems = _ref7.selectedItems;

        return selectedItems === this.state.selectedItems || selectedItems.size === 0 || selectionStatus !== this.props.selectionStatus;
    },


    /**
    * Render the list.
    * @returns {XML} DOM of the component
    */
    render: function render() {
        var isSelection = this.props.isSelection;

        return _react2.default.createElement(
            'ul',
            { 'data-focus': 'selection-list', 'data-selection': isSelection },
            this._renderLines(),
            this._renderLoading(),
            this._renderManualFetch()
        );
    }
};

var builtComp = (0, _builder2.default)(listMixin);
var component = builtComp.component,
    mixin = builtComp.mixin;
exports.component = component;
exports.mixin = mixin;
exports.default = builtComp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibGlzdE1peGluIiwiZGlzcGxheU5hbWUiLCJtaXhpbnMiLCJpbmZpbml0ZVNjcm9sbE1peGluIiwicmVmZXJlbmNlTWl4aW4iLCJnZXREZWZhdWx0UHJvcHMiLCJnZXRMaXN0RGVmYXVsdFByb3BzIiwiZGF0YSIsImlzU2VsZWN0aW9uIiwic2VsZWN0aW9uU3RhdHVzIiwic2VsZWN0aW9uRGF0YSIsImlzTG9hZGluZyIsIm9wZXJhdGlvbkxpc3QiLCJpZEZpZWxkIiwicHJvcFR5cGVzIiwiTGluZUNvbXBvbmVudCIsImJ1dHRvbkNvbXBvbmVudCIsImxvYWRlciIsIm9uTGluZUNsaWNrIiwib25TZWxlY3Rpb24iLCJnZXRJbml0aWFsU3RhdGUiLCJzZWxlY3RlZEl0ZW1zIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNldFN0YXRlIiwiTWFwIiwiZm9yRWFjaCIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtIiwiZ2V0U2VsZWN0ZWRJdGVtcyIsInN0YXRlIiwiaXNTZWxlY3RlZCIsInB1c2giLCJwYXJzZSIsInJlZnMiLCJhY2MiLCJyZWYiLCJnZXRWYWx1ZSIsIl9oYW5kbGVMaW5lU2VsZWN0aW9uIiwibmV3U2VsZWN0ZWRJdGVtcyIsImtleSIsInZhbHVlIiwicHJvcHMiLCJfcmVuZGVyTGluZXMiLCJMaW5lIiwib3RoZXJQcm9wcyIsImxlbmd0aCIsImNvbnNvbGUiLCJ3YXJuIiwiY3VzdG9tTGluZUNvbXBvbmVudCIsImxpbmVDb21wb25lbnQiLCJGaW5hbExpbmVDb21wb25lbnQiLCJlcnJvciIsIm1hcCIsImxpbmUiLCJpZHgiLCJzZWxlY3Rpb24iLCJmaW5kIiwidW5kZWZpbmVkIiwibGlzdEZpbmFsUHJvcHMiLCJyZWZlcmVuY2UiLCJfZ2V0UmVmZXJlbmNlIiwiTElORSIsIl9yZW5kZXJMb2FkaW5nIiwiX3JlbmRlck1hbnVhbEZldGNoIiwiaXNNYW51YWxGZXRjaCIsImhhc01vcmVEYXRhIiwic3R5bGUiLCJjbGFzc05hbWUiLCJoYW5kbGVTaG93TW9yZSIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsInNpemUiLCJyZW5kZXIiLCJidWlsdENvbXAiLCJjb21wb25lbnQiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5cEJBQUE7OztBQVFBOztBQUdBOztBQUdBOzs7QUFiQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBR0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBQ2Q7OztBQUdBQyxpQkFBYSxlQUpDOztBQU1kOzs7QUFHQUMsWUFBUSxDQUFDQyxxQkFBRCxFQUFzQkMsMkJBQXRCLENBVE07O0FBV2Q7Ozs7QUFJQUMscUJBQWlCLFNBQVNDLG1CQUFULEdBQStCO0FBQzVDLGVBQU87QUFDSEMsa0JBQU0sRUFESDtBQUVIQyx5QkFBYSxJQUZWO0FBR0hDLDZCQUFpQixTQUhkO0FBSUhDLDJCQUFlLEVBSlo7QUFLSEMsdUJBQVcsS0FMUjtBQU1IQywyQkFBZSxFQU5aO0FBT0hDLHFCQUFTO0FBUE4sU0FBUDtBQVNILEtBekJhOztBQTJCZDs7OztBQUlBQyxlQUFXO0FBQ1BDLHVCQUFlLHFCQUFNLE1BQU4sQ0FEUjtBQUVQQyx5QkFBaUIscUJBQU0sTUFBTixDQUZWO0FBR1BULGNBQU0scUJBQU0sT0FBTixDQUhDO0FBSVBNLGlCQUFTLHFCQUFNLFFBQU4sQ0FKRjtBQUtQRixtQkFBVyxxQkFBTSxNQUFOLENBTEo7QUFNUEgscUJBQWEscUJBQU0sTUFBTixDQU5OO0FBT1BTLGdCQUFRLHFCQUFNLE1BQU4sQ0FQRDtBQVFQQyxxQkFBYSxxQkFBTSxNQUFOLENBUk47QUFTUEMscUJBQWEscUJBQU0sTUFBTixDQVROO0FBVVBQLHVCQUFlLHFCQUFNLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FBTixDQVZSO0FBV1BGLHVCQUFlLHFCQUFNLE9BQU4sQ0FYUjtBQVlQRCx5QkFBaUIscUJBQU0sUUFBTjtB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eEI7QUFFSSwyQkFBTSxzQkFGVjtBQUdJLDJCQUFPRixLQUhYO0FBSUksMEJBQUs7QUFKVDtBQURKLGFBREo7QUFVSDtBQUNKLEtBcE1hO0FBc01kRyx5QkF0TWMsK0NBc01nRDtBQUFBLFlBQXRDOUQsZUFBc0MsU0FBdENBLGVBQXNDO0FBQUEsWUFBakJZLGFBQWlCLFNBQWpCQSxhQUFpQjs7QUFDMUQsZUFBT0Esa0JBQWtCLEtBQUtVLEtBQUwsQ0FBV1YsYUFBN0IsSUFBOENBLGNBQWNtRCxJQUFkLEtBQXVCLENBQXJFLElBQTBFL0Qsb0JBQW9CLEtBQUtrQyxLQUFMLENBQVdsQyxlQUFoSDtBQUNILEtBeE1hOzs7QUEwTWQ7Ozs7QUFJQWdFLFVBOU1jLG9CQThNTDtBQUFBLFlBQ0dqRSxXQURILEdBQ21CLEtBQUttQyxLQUR4QixDQUNHbkMsV0FESDs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFJLGNBQVcsZ0JBQWYsRUFBZ0Msa0JBQWdCQSxXQUFoRDtBQUNLLGlCQUFLb0MsWUFBTCxFQURMO0FBRUssaUJBQUtvQixjQUFMLEVBRkw7QUFHSyxpQkFBS0Msa0JBQUw7QUFITCxTQURKO0FBT0g7QUF2TmEsQ0FBbEI7O0FBME5BLElBQU1TLFlBQVksdUJBQVExRSxTQUFSLENBQWxCO0lBQ1EyRSxTLEdBQXFCRCxTLENBQXJCQyxTO0lBQVdDLEssR0FBVUYsUyxDQUFWRSxLO1FBR2ZELFMsR0FBQUEsUztRQUNBQyxLLEdBQUFBLEs7a0JBRVdGLFMiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBidWlsZGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC9idWlsZGVyJztcbmltcG9ydCB0eXBlcyBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuXG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9jb2xsZWN0aW9uL3JlZHVjZSc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvbGFuZy9pc0FycmF5JztcblxuLy9BZGQgYSByZWYgdG8gdGhlIHByb3BzIGlmIHRoZSBjb21wb25lbnQgaXMgbm90IHB1cmUgYWRkIG5vdGhpbmcgaW4gdGhlIG90aGVyIGNhc2UuXG5pbXBvcnQgeyBhZGRSZWZUb1Byb3BzSWZOb3RQdXJlLCBMSU5FIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMtcmVhY3QtY2xhc3MtY29tcG9uZW50JztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL3RyYW5zbGF0aW9uJztcbi8vIE1peGluc1xuaW1wb3J0IHsgbWl4aW4gYXMgaW5maW5pdGVTY3JvbGxNaXhpbiB9IGZyb20gJy4uL21peGluL2luZmluaXRlLXNjcm9sbCc7XG5pbXBvcnQgcmVmZXJlbmNlTWl4aW4gZnJvbSAnLi4vLi4vY29tbW9uL21peGluL3JlZmVyZW5jZS1wcm9wZXJ0eSc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJztcblxuY29uc3QgbGlzdE1peGluID0ge1xuICAgIC8qKlxuICAgICogRGlzcGxheSBuYW1lLlxuICAgICovXG4gICAgZGlzcGxheU5hbWU6ICdTZWxlY3Rpb25MaXN0JyxcblxuICAgIC8qKlxuICAgICogTWl4aW4gZGVwZW5kYW5jaWVzLlxuICAgICovXG4gICAgbWl4aW5zOiBbaW5maW5pdGVTY3JvbGxNaXhpbiwgcmVmZXJlbmNlTWl4aW5dLFxuXG4gICAgLyoqXG4gICAgKiBEZWZhdWx0IHByb3BlcnRpZXMgZm9yIHRoZSBsaXN0LlxuICAgICogQHJldHVybnMge3tpc1NlbGVjdGlvbjogYm9vbGVhbn19IHRoZSBkZWZhdWx0IHByb3BlcnRpZXNcbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0TGlzdERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgaXNTZWxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICBzZWxlY3Rpb25TdGF0dXM6ICdwYXJ0aWFsJyxcbiAgICAgICAgICAgIHNlbGVjdGlvbkRhdGE6IFtdLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZXJhdGlvbkxpc3Q6IFtdLFxuICAgICAgICAgICAgaWRGaWVsZDogJ2lkJ1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIGxpc3QgcHJvcGVydHkgdmFsaWRhdGlvbi5cbiAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgTGluZUNvbXBvbmVudDogdHlwZXMoJ2Z1bmMnKSxcbiAgICAgICAgYnV0dG9uQ29tcG9uZW50OiB0eXBlcygnZnVuYycpLFxuICAgICAgICBkYXRhOiB0eXBlcygnYXJyYXknKSxcbiAgICAgICAgaWRGaWVsZDogdHlwZXMoJ3N0cmluZycpLFxuICAgICAgICBpc0xvYWRpbmc6IHR5cGVzKCdib29sJyksXG4gICAgICAgIGlzU2VsZWN0aW9uOiB0eXBlcygnYm9vbCcpLFxuICAgICAgICBsb2FkZXI6IHR5cGVzKCdmdW5jJyksXG4gICAgICAgIG9uTGluZUNsaWNrOiB0eXBlcygnZnVuYycpLFxuICAgICAgICBvblNlbGVjdGlvbjogdHlwZXMoJ2Z1bmMnKSxcbiAgICAgICAgb3BlcmF0aW9uTGlzdDogdHlwZXMoWydhcnJheScsICdvYmplY3QnXSksXG4gICAgICAgIHNlbGVjdGlvbkRhdGE6IHR5cGVzKCdhcnJheScpLFxuICAgICAgICBzZWxlY3Rpb25TdGF0dXM6IHR5cGVzKCdzdHJpbmcnKVxuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh7IHNlbGVjdGlvblN0YXR1cywgZGF0YSB9KSB7XG4gICAgICAgIHN3aXRjaCAoc2VsZWN0aW9uU3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtczogbmV3IE1hcCgpIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHsgc2VsZWN0ZWRJdGVtcy5zZXQoSlNPTi5zdHJpbmdpZnkoaXRlbSksIGl0ZW0pIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEl0ZW1zIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmV0dXJuIHNlbGVjdGVkIGl0ZW1zIGluIHRoZSBsaXN0LlxuICAgICogQHJldHVybiB7QXJyYXl9IHNlbGVjdGVkIGl0ZW1zXG4gICAgKi9cbiAgICBnZXRTZWxlY3RlZEl0ZW1zKCkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdGVkSXRlbXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW1zICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBbaXRlbSwgaXNTZWxlY3RlZF0gb2YgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIHNlbGVjdGVkSXRlbXMucHVzaChKU09OLnBhcnNlKGl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW1zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlZHVjZSh0aGlzLnJlZnMsIChhY2MsIHJlZikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWYuZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtLCBpc1NlbGVjdGVkIH0gPSByZWYuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIGFjYy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9oYW5kbGVMaW5lU2VsZWN0aW9uKGRhdGEsIGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZEl0ZW1zIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBuZXdTZWxlY3RlZEl0ZW1zID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIHNlbGVjdGVkSXRlbXMpIHtcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZEl0ZW1zLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdTZWxlY3RlZEl0ZW1zLnNldChKU09OLnN0cmluZ2lmeShkYXRhKSwgaXNTZWxlY3RlZCk7XG5cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJdGVtczogbmV3U2VsZWN0ZWRJdGVtcyB9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3Rpb24oZGF0YSwgaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogUmVuZGVyIGxpbmVzIG9mIHRoZSBsaXN0LlxuICAgICogQHJldHVybnMgeyp9IERPTSBmb3IgbGluZXNcbiAgICAqL1xuICAgIF9yZW5kZXJMaW5lcygpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhLCBMaW5lQ29tcG9uZW50OiBMaW5lLCBzZWxlY3Rpb25EYXRhLCBpZEZpZWxkLCBzZWxlY3Rpb25TdGF0dXMsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChzZWxlY3Rpb25EYXRhICYmIHNlbGVjdGlvbkRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdbREVQUkVDQVRFRF0gWW91IGFyZSB1c2luZyBcXCdzZWxlY3Rpb25EYXRhXFwnIHByb3Agd2hpY2ggaXMgbm93IERFUFJFQ0FURUQuIFBsZWFzZSB1c2UgXFwnc2VsZWN0aW9ubmFibGVJbml0aWFsaXplclxcJyBvbiBsaW5lIGNvbXBvbmVudC4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMRUdBQ1kgQ09ERVxuICAgICAgICBjb25zdCBjdXN0b21MaW5lQ29tcG9uZW50ID0gb3RoZXJQcm9wcy5saW5lQ29tcG9uZW50O1xuICAgICAgICBpZiAoY3VzdG9tTGluZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCclYyBERVBSRUNBVEVEIDogWW91IGFyZSB1c2luZyB0aGUgbGluZUNvbXBvbmVudCBwcm9wIGluIGEgbGlzdCBjb21wb25lbnQsIHRoaXMgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IHJlbGVhc2Ugb2YgU2FnZXNzIGNvbXBvbmVudHMuIFBsZWFzZSB1c2UgTGluZUNvbXBvbmVudCBwcm9wIGluc3RlYWQuJywgJ2NvbG9yOiAjRkY5QzAwOyBmb250LXdlaWdodDogYm9sZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IEZpbmFsTGluZUNvbXBvbmVudCA9IGN1c3RvbUxpbmVDb21wb25lbnQgfHwgTGluZTtcbiAgICAgICAgLy8gRU5EIE9GIExFR0FDWSBDT0RFXG4gICAgICAgIGlmICghaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAnTGlzdDogTGluZXM6IGl0IHNlZW1zIGRhdGEgaXMgbm90IGFuIGFycmF5LCBwbGVhc2UgY2hlY2sgdGhlIHZhbHVlIGluIHlvdXIgc3RvcmUsIGl0IGNvdWxkIGFsc28gYmUgcmVsYXRlZCB0byB5b3VyIGFjdGlvbiBpbiBjYXNlIG9mIGEgbG9hZCAoaGF2ZSBhIGxvb2sgdG8gc2hvdWxkRHVtcFN0b3JlT25BY3Rpb25DYWxsIG9wdGlvbikuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKGxpbmUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlzU2VsZWN0ZWQ7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBzZWxlY3Rpb25EYXRhLmZpbmQoaXRlbSA9PiBpdGVtICYmIGl0ZW1baWRGaWVsZF0gPT09IGxpbmVbaWRGaWVsZF0pO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBzZWxlY3Rpb24uaXNTZWxlY3RlZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzZWxlY3Rpb25TdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGFydGlhbCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGlzdEZpbmFsUHJvcHMgPSBhZGRSZWZUb1Byb3BzSWZOb3RQdXJlKFxuICAgICAgICAgICAgICAgIEZpbmFsTGluZUNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAuLi5vdGhlclByb3BzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBsaW5lLFxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBrZXk6IGxpbmVbaWRGaWVsZF0gfHwgaWR4LFxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbjogdGhpcy5faGFuZGxlTGluZVNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiB0aGlzLl9nZXRSZWZlcmVuY2UoKVxuICAgICAgICAgICAgICAgIH0sIGAke0xJTkV9JHtpZHh9YCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGaW5hbExpbmVDb21wb25lbnQgey4uLmxpc3RGaW5hbFByb3BzfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciBsb2FkaW5nIHN0YXRlXG4gICAgKiBAcmV0dXJuIHtIVE1MfSB0aGUgbG9hZGluZyBzdGF0ZVxuICAgICovXG4gICAgX3JlbmRlckxvYWRpbmcoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBsb2FkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIGlmIChsb2FkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3NsLWxvYWRpbmcnPnt0cmFuc2xhdGUoJ2xpc3QubG9hZGluZycpfSAuLi48L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgbWFudWFsIGZldGNoIHN0YXRlXG4gICAgKiBAcmV0dXJuIHtIVE1MfSB0aGUgcmVuZGVyZWQgbWFudWFsIGZldGNoIHN0YXRlXG4gICAgKi9cbiAgICBfcmVuZGVyTWFudWFsRmV0Y2goKSB7XG4gICAgICAgIGNvbnN0IHsgaXNNYW51YWxGZXRjaCwgaGFzTW9yZURhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChpc01hbnVhbEZldGNoICYmIGhhc01vcmVEYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHsgY2xhc3NOYW1lOiAncHJpbWFyeScgfTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nc2wtYnV0dG9uJz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DbGljaz17dGhpcy5oYW5kbGVTaG93TW9yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdsaXN0LmJ1dHRvbi5zaG93TW9yZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUoeyBzZWxlY3Rpb25TdGF0dXMgfSwgeyBzZWxlY3RlZEl0ZW1zIH0pIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbXMgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtcyB8fCBzZWxlY3RlZEl0ZW1zLnNpemUgPT09IDAgfHwgc2VsZWN0aW9uU3RhdHVzICE9PSB0aGlzLnByb3BzLnNlbGVjdGlvblN0YXR1cztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgdGhlIGxpc3QuXG4gICAgKiBAcmV0dXJucyB7WE1MfSBET00gb2YgdGhlIGNvbXBvbmVudFxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzU2VsZWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsIGRhdGEtZm9jdXM9J3NlbGVjdGlvbi1saXN0JyBkYXRhLXNlbGVjdGlvbj17aXNTZWxlY3Rpb259PlxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJMaW5lcygpfVxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJMb2FkaW5nKCl9XG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlck1hbnVhbEZldGNoKCl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmNvbnN0IGJ1aWx0Q29tcCA9IGJ1aWxkZXIobGlzdE1peGluKTtcbmNvbnN0IHsgY29tcG9uZW50LCBtaXhpbiB9ID0gYnVpbHRDb21wO1xuXG5leHBvcnQge1xuICAgIGNvbXBvbmVudCxcbiAgICBtaXhpblxufVxuZXhwb3J0IGRlZmF1bHQgYnVpbHRDb21wO1xuIl19