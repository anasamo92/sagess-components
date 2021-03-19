'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _application = require('sagess-core/application');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _result = require('lodash/object/result');

var _result2 = _interopRequireDefault(_result);

var _find2 = require('lodash/collection/find');

var _find3 = _interopRequireDefault(_find2);

var _defaultsDeep = require('lodash/object/defaultsDeep');

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

var _field = require('../field');

var _text = require('../../components/display/text');

var _text2 = _interopRequireDefault(_text);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _list = require('../list');

var _list2 = require('../../list/table/list');

var _list3 = require('../../list/selection/list');

var _fieldComponentBehaviour = require('./field-component-behaviour');

var _fieldComponentBehaviour2 = _interopRequireDefault(_fieldComponentBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Dependencies


// Components

// Mixins


exports.default = {
    mixins: [_fieldComponentBehaviour2.default],
    /**
    * Create a field for the given property metadata.
    * @param {string} name - property name.
    * @param {object} options - An object which contains all options for the built of the field.
    * @returns {object} - A React Field.
    */
    fieldFor: function fieldFor(name, options) {
        options = (0, _objectAssign2.default)({}, options);
        var fieldProps = this._buildFieldProps(name, options, this);
        return this._renderField(fieldProps);
    },
    autocompleteSelectFor: function autocompleteSelectFor(name, _ref) {
        var keyResolver = _ref.keyResolver,
            querySearcher = _ref.querySearcher;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        options = (0, _objectAssign2.default)({}, options);
        options.keyResolver = keyResolver;
        options.querySearcher = querySearcher;
        var fieldProps = this._buildFieldProps(name, options, this);
        return this._renderField(fieldProps);
    },
    autocompleteTextFor: function autocompleteTextFor(name, _ref2) {
        var querySearcher = _ref2.querySearcher;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        options = (0, _objectAssign2.default)({}, options);
        options.querySearcher = querySearcher;
        var fieldProps = this._buildFieldProps(name, options, this);
        return this._renderField(fieldProps);
    },

    /**
    * Display two different fields, depending on wheter the user is editing the form or not
    * @param  {Object} config the configuration, with the structure {consultField: ..., editField: ...}
    * @return {Object} the rendered resulting field
    */
    dualFieldFor: function dualFieldFor(_ref3) {
        var consultField = _ref3.consultField,
            editField = _ref3.editField;

        return this.state.isEdit ? editField : consultField;
    },

    /**
    * Select component for the component.
    * @param {string} name - property name.
    * @param {string} listName - list name.
    * @param {object} options - options object.
    * @returns {object} - A React Field.
    */
    selectFor: function selectFor(name, listName, options) {
        options = options || {};
        options.listName = listName || options.listName;
        var fieldProps = this._buildFieldProps(name, options, this);
        return this._renderField(fieldProps);
    },

    /**
    * Display a field.
    * @param {string} name - property name.
    * @param {object} options - options object.
    * @returns {object} - A React Field.
    */
    displayFor: function displayFor(name, options) {
        options = options || {};
        options.isEdit = false;
        var fieldProps = this._buildFieldProps(name, options, this);
        return this._renderField(fieldProps);
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
        var fieldProps = this._buildFieldProps(name, options, this);
        var value = this.state[name];
        var valueKey = fieldProps.valueKey,
            labelKey = fieldProps.labelKey,
            values = fieldProps.values;

        var _processValue = values ? (0, _result2.default)((0, _find3.default)(values, _defineProperty({}, valueKey || 'code', value)), labelKey || 'label') : value;
        return _react2.default.createElement(_text2.default, {
            formatter: options.formatter || def.formatter,
            name: options.name || this.definitionPath + '.' + name,
            style: options.style,
            value: _processValue
        });
    },

    /**
    * Display a list component.
    * @param {string} name - Property name.
    * @param {object} options - Options object.
    * @returns {object} - The react component for the list.
    */
    listFor: function listFor(name, options) {
        options = options || {};
        options.reference = options.reference || this.state.reference;
        options.listComponent = options.listComponent || _list3.component;
        var listForProps = (0, _objectAssign2.default)({}, options, {
            data: this.state[name],
            LineComponent: options.lineComponent || options.LineComponent || this.props.LineComponent || this.LineComponent || this.lineComponent,
            perPage: options.perPage || 5,
            reference: options.reference,
            isEdit: options.isEdit !== undefined ? options.isEdit : false
        });
        return _react2.default.createElement(_list.component, Object.assign({ ref: 'list' }, listForProps));
    },


    /**
    * Display a table component.
    * @param {string} name - Property name.
    * @param {object} options - Options object.
    * @returns {object} - The react component for the list.
    */
    tableFor: function tableFor(name, options) {
        options.listComponent = options.listComponent || _list2.component;
        return this.listFor(name, options);
    },

    /**
    * Button delete generation.
    * @returns {object} - A Reacte button.
    */
    buttonDelete: function buttonDelete() {
        var _this = this;

        var handleOnClick = function handleOnClick() {
            _this.action.delete.call(_this, _this._getEntity());
        };
        return _react2.default.createElement(_button2.default, {
            handleOnClick: handleOnClick,
            icon: 'delete',
            label: 'button.delete',
            shape: null,
            type: 'button'
        });
    },

    /**
    * Edition button.
    * @returns {object} - The React component for the button.
    */
    buttonEdit: function buttonEdit() {
        var _this2 = this;

        var handleOnClick = function handleOnClick() {
            _this2.setState({ isEdit: !_this2.state.isEdit }, function () {
                (0, _application.changeMode)('edit', 'consult');
            });
        };
        return _react2.default.createElement(_button2.default, {
            handleOnClick: handleOnClick,
            icon: 'edit',
            label: 'button.edit',
            shape: null,
            type: 'button'
        });
    },

    /**
    * Cancel button.
    * @returns {object} - The React component for the button.
    */
    buttonCancel: function buttonCancel() {
        var _this3 = this;

        var handleOnClick = function handleOnClick() {
            _this3.clearError();
            // Change the mode.
            // Read the state from the stores, it should contain the last data from the server.
            _this3.setState((0, _defaultsDeep2.default)({ isEdit: false }, _this3._getStateFromStores(), _this3._buildResetState()), function () {
                (0, _application.changeMode)('consult', 'edit');
            });
        };
        return _react2.default.createElement(_button2.default, { handleOnClick: handleOnClick, icon: 'undo', label: 'button.cancel', shape: null, type: 'button' });
    },

    /**
    * Button save generation.
    * @returns {object} - A React  save button.
    */
    buttonSave: function buttonSave() {
        var _this4 = this;

        var isLoading = this.state.isLoading;

        var handleOnClick = function handleOnClick() {
            _this4.clearError();
            if (_this4._validate()) {
                _this4.action.save.call(_this4, _this4._getEntity());
            }
        };
        return _react2.default.createElement(_button2.default, {
            handleOnClick: handleOnClick,
            icon: 'save',
            label: 'button.save',
            shape: null,
            type: 'button',
            isLoading: isLoading,
            processLabel: 'button.saving'
        });
    },

    /**
    * Render a field with the provided props.
    * @param  {object} fieldProps the props
    * @return {XML} rendered field
    */
    _renderField: function _renderField(fieldProps) {
        return _react2.default.createElement(_field.component, fieldProps);
    }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibWl4aW5zIiwiZmllbGRDb21wb25lbnRCZWhhdmlvdXIiLCJmaWVsZEZvciIsIm5hbWUiLCJvcHRpb25zIiwiZmllbGRQcm9wcyIsIl9idWlsZEZpZWxkUHJvcHMiLCJfcmVuZGVyRmllbGQiLCJhdXRvY29tcGxldGVTZWxlY3RGb3IiLCJrZXlSZXNvbHZlciIsInF1ZXJ5U2VhcmNoZXIiLCJhdXRvY29tcGxldGVUZXh0Rm9yIiwiZHVhbEZpZWxkRm9yIiwiY29uc3VsdEZpZWxkIiwiZWRpdEZpZWxkIiwic3RhdGUiLCJpc0VkaXQiLCJzZWxlY3RGb3IiLCJsaXN0TmFtZSIsImRpc3BsYXlGb3IiLCJ0ZXh0Rm9yIiwiZGVmIiwiZGVmaW5pdGlvbiIsInZhbHVlIiwidmFsdWVLZXkiLCJsYWJlbEtleSIsInZhbHVlcyIsIl9wcm9jZXNzVmFsdWUiLCJmb3JtYXR0ZXIiLCJkZWZpbml0aW9uUGF0aCIsInN0eWxlIiwibGlzdEZvciIsInJlZmVyZW5jZSIsImxpc3RDb21wb25lbnQiLCJMaXN0IiwibGlzdEZvclByb3BzIiwiZGF0YSIsIkxpbmVDb21wb25lbnQiLCJsaW5lQ29tcG9uZW50IiwicHJvcHMiLCJwZXJQYWdlIiwidW5kZWZpbmVkIiwidGFibGVGb3IiLCJUYWJsZSIsImJ1dHRvbkRlbGV0ZSIsImhhbmRsZU9uQ2xpY2siLCJhY3Rpb24iLCJkZWxldGUiLCJjYWxsIiwiX2dldEVudGl0eSIsImJ1dHRvbkVkaXQiLCJzZXRTdGF0ZSIsImJ1dHRvbkNhbmNlbCIsImNsZWFyRXJyb3IiLCJfZ2V0U3RhdGVGcm9tU3RvcmVzIiwiX2J1aWxkUmVzZXRTdGF0ZSIsImJ1dHRvblNhdmUiLCJpc0xvYWRpbmciLCJfdmFsaWRhdGUiLCJzYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBQ0E7Ozs7QUFDQTs7OztB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OztBQWdNWDs7Ozs7QUFLQWxELGdCQXJNVyx3QkFxTUVGLFVBck1GLEVBcU1jO0FBQ3JCLGVBQ0ksOEJBQUMsZ0JBQUQsRUFBV0EsVUFBWCxDQURKO0FBR0g7QUF6TVUsQyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2hhbmdlTW9kZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL2FwcGxpY2F0aW9uJztcbmltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5cbmltcG9ydCByZXN1bHQgZnJvbSAnbG9kYXNoL29iamVjdC9yZXN1bHQnO1xuaW1wb3J0IGZpbmQgZnJvbSAnbG9kYXNoL2NvbGxlY3Rpb24vZmluZCc7XG5pbXBvcnQgZGVmYXVsdHNEZWVwIGZyb20gJ2xvZGFzaC9vYmplY3QvZGVmYXVsdHNEZWVwJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIEZpZWxkIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaXNwbGF5L3RleHQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgeyBjb21wb25lbnQgYXMgTWVtb3J5TGlzdCB9IGZyb20gJy4uL2xpc3QnO1xuaW1wb3J0IHsgY29tcG9uZW50IGFzIFRhYmxlIH0gZnJvbSAnLi4vLi4vbGlzdC90YWJsZS9saXN0JztcbmltcG9ydCB7IGNvbXBvbmVudCBhcyBMaXN0IH0gZnJvbSAnLi4vLi4vbGlzdC9zZWxlY3Rpb24vbGlzdCc7XG4vLyBNaXhpbnNcbmltcG9ydCBmaWVsZENvbXBvbmVudEJlaGF2aW91ciBmcm9tICcuL2ZpZWxkLWNvbXBvbmVudC1iZWhhdmlvdXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbZmllbGRDb21wb25lbnRCZWhhdmlvdXJdLFxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgZmllbGQgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBtZXRhZGF0YS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gcHJvcGVydHkgbmFtZS5cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQW4gb2JqZWN0IHdoaWNoIGNvbnRhaW5zIGFsbCBvcHRpb25zIGZvciB0aGUgYnVpbHQgb2YgdGhlIGZpZWxkLlxuICAgICogQHJldHVybnMge29iamVjdH0gLSBBIFJlYWN0IEZpZWxkLlxuICAgICovXG4gICAgZmllbGRGb3IobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgICAgICAgY29uc3QgZmllbGRQcm9wcyA9IHRoaXMuX2J1aWxkRmllbGRQcm9wcyhuYW1lLCBvcHRpb25zLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckZpZWxkKGZpZWxkUHJvcHMpO1xuICAgIH0sXG4gICAgYXV0b2NvbXBsZXRlU2VsZWN0Rm9yKG5hbWUsIHsga2V5UmVzb2x2ZXIsIHF1ZXJ5U2VhcmNoZXIgfSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIG9wdGlvbnMgPSBhc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgICAgICBvcHRpb25zLmtleVJlc29sdmVyID0ga2V5UmVzb2x2ZXI7XG4gICAgICAgIG9wdGlvbnMucXVlcnlTZWFyY2hlciA9IHF1ZXJ5U2VhcmNoZXI7XG4gICAgICAgIGNvbnN0IGZpZWxkUHJvcHMgPSB0aGlzLl9idWlsZEZpZWxkUHJvcHMobmFtZSwgb3B0aW9ucywgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJGaWVsZChmaWVsZFByb3BzKTtcbiAgICB9LFxuICAgIGF1dG9jb21wbGV0ZVRleHRGb3IobmFtZSwgeyBxdWVyeVNlYXJjaGVyIH0sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBvcHRpb25zID0gYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgICAgICAgb3B0aW9ucy5xdWVyeVNlYXJjaGVyID0gcXVlcnlTZWFyY2hlcjtcbiAgICAgICAgY29uc3QgZmllbGRQcm9wcyA9IHRoaXMuX2J1aWxkRmllbGRQcm9wcyhuYW1lLCBvcHRpb25zLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckZpZWxkKGZpZWxkUHJvcHMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBEaXNwbGF5IHR3byBkaWZmZXJlbnQgZmllbGRzLCBkZXBlbmRpbmcgb24gd2hldGVyIHRoZSB1c2VyIGlzIGVkaXRpbmcgdGhlIGZvcm0gb3Igbm90XG4gICAgKiBAcGFyYW0gIHtPYmplY3R9IGNvbmZpZyB0aGUgY29uZmlndXJhdGlvbiwgd2l0aCB0aGUgc3RydWN0dXJlIHtjb25zdWx0RmllbGQ6IC4uLiwgZWRpdEZpZWxkOiAuLi59XG4gICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSByZW5kZXJlZCByZXN1bHRpbmcgZmllbGRcbiAgICAqL1xuICAgIGR1YWxGaWVsZEZvcih7IGNvbnN1bHRGaWVsZCwgZWRpdEZpZWxkIH0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNFZGl0ID8gZWRpdEZpZWxkIDogY29uc3VsdEZpZWxkO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBTZWxlY3QgY29tcG9uZW50IGZvciB0aGUgY29tcG9uZW50LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBwcm9wZXJ0eSBuYW1lLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGxpc3ROYW1lIC0gbGlzdCBuYW1lLlxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIG9iamVjdC5cbiAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSBSZWFjdCBGaWVsZC5cbiAgICAqL1xuICAgIHNlbGVjdEZvcihuYW1lLCBsaXN0TmFtZSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgb3B0aW9ucy5saXN0TmFtZSA9IGxpc3ROYW1lIHx8IG9wdGlvbnMubGlzdE5hbWU7XG4gICAgICAgIGNvbnN0IGZpZWxkUHJvcHMgPSB0aGlzLl9idWlsZEZpZWxkUHJvcHMobmFtZSwgb3B0aW9ucywgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJGaWVsZChmaWVsZFByb3BzKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogRGlzcGxheSBhIGZpZWxkLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBwcm9wZXJ0eSBuYW1lLlxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIG9iamVjdC5cbiAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSBSZWFjdCBGaWVsZC5cbiAgICAqL1xuICAgIGRpc3BsYXlGb3IobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgb3B0aW9ucy5pc0VkaXQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZmllbGRQcm9wcyA9IHRoaXMuX2J1aWxkRmllbGRQcm9wcyhuYW1lLCBvcHRpb25zLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckZpZWxkKGZpZWxkUHJvcHMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBEaXNwbGF5IHRoZSB0ZXh0IGZvciBhIGdpdmVuIHByb3BlcnR5LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIC0gcHJvcGVydHkgbmFtZS5cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uIG9iamVjdFxuICAgICogQHJldHVybnMge29iamVjdH0gLSBBIFJlYWN0IGNvbXBvbmVudC5cbiAgICAqL1xuICAgIHRleHRGb3IobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgY29uc3QgZGVmID0gKHRoaXMuZGVmaW5pdGlvbiAmJiB0aGlzLmRlZmluaXRpb25bbmFtZV0pID8gdGhpcy5kZWZpbml0aW9uW25hbWVdIDoge307XG4gICAgICAgIGNvbnN0IGZpZWxkUHJvcHMgPSB0aGlzLl9idWlsZEZpZWxkUHJvcHMobmFtZSwgb3B0aW9ucywgdGhpcyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZVtuYW1lXTtcbiAgICAgICAgY29uc3QgeyB2YWx1ZUtleSwgbGFiZWxLZXksIHZhbHVlcyB9ID0gZmllbGRQcm9wcztcbiAgICAgICAgY29uc3QgX3Byb2Nlc3NWYWx1ZSA9IHZhbHVlcyA/IHJlc3VsdChmaW5kKHZhbHVlcywgeyBbdmFsdWVLZXkgfHwgJ2NvZGUnXTogdmFsdWUgfSksIGxhYmVsS2V5IHx8ICdsYWJlbCcpIDogdmFsdWU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcj17b3B0aW9ucy5mb3JtYXR0ZXIgfHwgZGVmLmZvcm1hdHRlcn1cbiAgICAgICAgICAgICAgICBuYW1lPXtvcHRpb25zLm5hbWUgfHwgYCR7dGhpcy5kZWZpbml0aW9uUGF0aH0uJHtuYW1lfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e29wdGlvbnMuc3R5bGV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e19wcm9jZXNzVmFsdWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBEaXNwbGF5IGEgbGlzdCBjb21wb25lbnQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFByb3BlcnR5IG5hbWUuXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0LlxuICAgICogQHJldHVybnMge29iamVjdH0gLSBUaGUgcmVhY3QgY29tcG9uZW50IGZvciB0aGUgbGlzdC5cbiAgICAqL1xuICAgIGxpc3RGb3IobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgb3B0aW9ucy5yZWZlcmVuY2UgPSBvcHRpb25zLnJlZmVyZW5jZSB8fCB0aGlzLnN0YXRlLnJlZmVyZW5jZTtcbiAgICAgICAgb3B0aW9ucy5saXN0Q29tcG9uZW50ID0gb3B0aW9ucy5saXN0Q29tcG9uZW50IHx8IExpc3Q7XG4gICAgICAgIGNvbnN0IGxpc3RGb3JQcm9wcyA9IGFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgZGF0YTogdGhpcy5zdGF0ZVtuYW1lXSxcbiAgICAgICAgICAgIExpbmVDb21wb25lbnQ6IG9wdGlvbnMubGluZUNvbXBvbmVudCB8fCBvcHRpb25zLkxpbmVDb21wb25lbnQgfHwgdGhpcy5wcm9wcy5MaW5lQ29tcG9uZW50IHx8IHRoaXMuTGluZUNvbXBvbmVudCB8fCB0aGlzLmxpbmVDb21wb25lbnQsXG4gICAgICAgICAgICBwZXJQYWdlOiBvcHRpb25zLnBlclBhZ2UgfHwgNSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogb3B0aW9ucy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBpc0VkaXQ6IG9wdGlvbnMuaXNFZGl0ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmlzRWRpdCA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1lbW9yeUxpc3QgcmVmPSdsaXN0JyB7Li4ubGlzdEZvclByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIERpc3BsYXkgYSB0YWJsZSBjb21wb25lbnQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFByb3BlcnR5IG5hbWUuXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0LlxuICAgICogQHJldHVybnMge29iamVjdH0gLSBUaGUgcmVhY3QgY29tcG9uZW50IGZvciB0aGUgbGlzdC5cbiAgICAqL1xuICAgIHRhYmxlRm9yKG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucy5saXN0Q29tcG9uZW50ID0gb3B0aW9ucy5saXN0Q29tcG9uZW50IHx8IFRhYmxlO1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0Rm9yKG5hbWUsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBCdXR0b24gZGVsZXRlIGdlbmVyYXRpb24uXG4gICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIEEgUmVhY3RlIGJ1dHRvbi5cbiAgICAqL1xuICAgIGJ1dHRvbkRlbGV0ZSgpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlT25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmRlbGV0ZS5jYWxsKHRoaXMsIHRoaXMuX2dldEVudGl0eSgpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBoYW5kbGVPbkNsaWNrPXtoYW5kbGVPbkNsaWNrfVxuICAgICAgICAgICAgICAgIGljb249J2RlbGV0ZSdcbiAgICAgICAgICAgICAgICBsYWJlbD0nYnV0dG9uLmRlbGV0ZSdcbiAgICAgICAgICAgICAgICBzaGFwZT17bnVsbH1cbiAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBFZGl0aW9uIGJ1dHRvbi5cbiAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gVGhlIFJlYWN0IGNvbXBvbmVudCBmb3IgdGhlIGJ1dHRvbi5cbiAgICAqL1xuICAgIGJ1dHRvbkVkaXQoKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNFZGl0OiAhdGhpcy5zdGF0ZS5pc0VkaXQgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoYW5nZU1vZGUoJ2VkaXQnLCAnY29uc3VsdCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaGFuZGxlT25DbGljaz17aGFuZGxlT25DbGlja31cbiAgICAgICAgICAgICAgICBpY29uPSdlZGl0J1xuICAgICAgICAgICAgICAgIGxhYmVsPSdidXR0b24uZWRpdCdcbiAgICAgICAgICAgICAgICBzaGFwZT17bnVsbH1cbiAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBDYW5jZWwgYnV0dG9uLlxuICAgICogQHJldHVybnMge29iamVjdH0gLSBUaGUgUmVhY3QgY29tcG9uZW50IGZvciB0aGUgYnV0dG9uLlxuICAgICovXG4gICAgYnV0dG9uQ2FuY2VsKCkge1xuICAgICAgICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckVycm9yKCk7XG4gICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIG1vZGUuXG4gICAgICAgICAgICAvLyBSZWFkIHRoZSBzdGF0ZSBmcm9tIHRoZSBzdG9yZXMsIGl0IHNob3VsZCBjb250YWluIHRoZSBsYXN0IGRhdGEgZnJvbSB0aGUgc2VydmVyLlxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShkZWZhdWx0c0RlZXAoeyBpc0VkaXQ6IGZhbHNlIH0sIHRoaXMuX2dldFN0YXRlRnJvbVN0b3JlcygpLCB0aGlzLl9idWlsZFJlc2V0U3RhdGUoKSksICgpID0+IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb2RlKCdjb25zdWx0JywgJ2VkaXQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvbiBoYW5kbGVPbkNsaWNrPXtoYW5kbGVPbkNsaWNrfSBpY29uPSd1bmRvJyBsYWJlbD0nYnV0dG9uLmNhbmNlbCcgc2hhcGU9e251bGx9IHR5cGU9J2J1dHRvbicgLz5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogQnV0dG9uIHNhdmUgZ2VuZXJhdGlvbi5cbiAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSBSZWFjdCAgc2F2ZSBidXR0b24uXG4gICAgKi9cbiAgICBidXR0b25TYXZlKCkge1xuICAgICAgICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgaGFuZGxlT25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJFcnJvcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbGlkYXRlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5zYXZlLmNhbGwodGhpcywgdGhpcy5fZ2V0RW50aXR5KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGhhbmRsZU9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgaWNvbj0nc2F2ZSdcbiAgICAgICAgICAgICAgICBsYWJlbD0nYnV0dG9uLnNhdmUnXG4gICAgICAgICAgICAgICAgc2hhcGU9e251bGx9XG4gICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIHByb2Nlc3NMYWJlbD0nYnV0dG9uLnNhdmluZydcbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlbmRlciBhIGZpZWxkIHdpdGggdGhlIHByb3ZpZGVkIHByb3BzLlxuICAgICogQHBhcmFtICB7b2JqZWN0fSBmaWVsZFByb3BzIHRoZSBwcm9wc1xuICAgICogQHJldHVybiB7WE1MfSByZW5kZXJlZCBmaWVsZFxuICAgICovXG4gICAgX3JlbmRlckZpZWxkKGZpZWxkUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGaWVsZCB7Li4uZmllbGRQcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuIl19