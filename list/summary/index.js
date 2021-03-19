'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _translation = require('sagess-core/translation');

var _stylable = require('../../mixin/stylable');

var _stylable2 = _interopRequireDefault(_stylable);

var _topicDisplayer = require('../../components/topic-displayer');

var _topicDisplayer2 = _interopRequireDefault(_topicDisplayer);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _number = require('sagess-core/definition/formatter/number');

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listSummaryMixin = {
    mixins: [_stylable2.default],
    /**
     * Display name.
     */
    displayName: 'ListSummary',

    /**
     * Init the default props.
     * @returns {objet} default props.
     */
    getDefaultProps: function getDefaultProps() {
        return {
            scopeList: {}
        };
    },

    /** @inheritdoc */
    propTypes: {
        nb: (0, _types2.default)('number'),
        queryText: (0, _types2.default)('string'),
        scopeList: (0, _types2.default)('object').isRequired,
        scopeClickAction: (0, _types2.default)('func'),
        exportAction: (0, _types2.default)('func')
    },
    /**
     * Return result sentence.
     * @return {object} Result sentence
     */
    _getResultSentence: function _getResultSentence() {
        var _props = this.props,
            nb = _props.nb,
            queryText = _props.queryText;

        var hasText = queryText && queryText.trim().length > 0;
        var sentence = nb > 1 ? hasText ? 'results.for' : 'results.all' : hasText ? 'result.for' : 'result.all';
        return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
                'strong',
                null,
                _number2.default.format(nb),
                '\xA0'
            ),
            _react2.default.createElement(
                'span',
                null,
                (0, _translation.translate)(sentence),
                hasText && _react2.default.createElement(
                    'span',
                    { className: 'search-text' },
                    '\xAB\xA0',
                    queryText,
                    '\xA0\xBB'
                )
            )
        );
    },

    /**
     * Render the html.
     * @returns {JSX} Html rendering.
     */
    render: function render() {
        var _props2 = this.props,
            exportAction = _props2.exportAction,
            scopeList = _props2.scopeList,
            scopeClickAction = _props2.scopeClickAction;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'list-summary' },
            exportAction && _react2.default.createElement(
                'div',
                { className: 'print' },
                _react2.default.createElement(_button2.default, { handleOnClick: exportAction, icon: 'print', label: 'result.export', shape: null })
            ),
            _react2.default.createElement(
                'span',
                { className: 'sentence' },
                this._getResultSentence()
            ),
            _react2.default.createElement(
                'span',
                { className: 'topics' },
                _react2.default.createElement(_topicDisplayer2.default, { topicClickAction: scopeClickAction, topicList: scopeList })
            )
        );
    }
};

var _builder = (0, _builder3.default)(listSummaryMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibGlzdFN1bW1hcnlNaXhpbiIsIm1peGlucyIsInN0eWxlQmVoYXZpb3VyIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJzY29wZUxpc3QiLCJwcm9wVHlwZXMiLCJuYiIsInF1ZXJ5VGV4dCIsImlzUmVxdWlyZWQiLCJzY29wZUNsaWNrQWN0aW9uIiwiZXhwb3J0QWN0aW9uIiwiX2dldFJlc3VsdFNlbnRlbmNlIiwicHJvcHMiLCJoYXNUZXh0IiwidHJpbSIsImxlbmd0aCIsInNlbnRlbmNlIiwibnVtYmVyRm9ybWF0dGVyIiwiZm9ybWF0IiwicmVuZGVyIiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CO0FBQ3JCQyxZQUFRLENBQUNDLGtCQUFELENBRGE7QUFFckI7OztBQUdBQyxpQkFBYSxhQUxROztBQU9yQjs7OztBQUlBQyxtQkFYcUIsNkJBV0g7QUFDZCxlQUFPO0FBQ0hDLHVCQUFXO0FBRFIsU0FBUDtBQUdILEtBZm9COztBQWdCckI7QUFDQUMsZUFBVztBQUNQQyxZQUFJLHFCQUFNLFFBQU4sQ0FERztBQUVQQyxtQkFBVyxxQkFBTSxRQUFOLENBRko7QUFHUEgsbUJBQVcscUJBQU0sUUFBTixFQUFnQkksVUFIcEI7QUFJUEMsMEJBQWtCLHFCQUFNLE1BQU4sQ0FKWDtBQUtQQyxzQkFBYyxxQkFBTSxNQUFOO0FBTFAsS0FqQlU7QUF3QnJCOzs7O0FBSUFDLHNCQTVCcUIsZ0NBNEJBO0FBQUEscUJBQ1MsS0FBS0MsS0FEZDtBQUFBLFlBQ1ROLEVBRFMsVUFDVEEsRUFEUztBQUFBLFlBQ0xDLFNBREssVUFDTEEsU0FESzs7QUFFakIsWUFBTU0sVUFBVU4sYUFBYUEsVUFBVU8sSUFBVixHQUFpQkMsTUFBakIsR0FBMEIsQ0FBdkQ7QUFDQSxZQUFNQyxXQUFXVixLQUFLLENBQUwsR0FBU08sVUFBVSxhQUFWLEdBQTBCLGFBQW5DLEdBQW1EQSxVQUFVLFlBQVYsR0FBeUIsWUFBN0Y7QUFDQSxlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFTSSxpQ0FBZ0JDLE1BQWhCLENBQXVCWixFQUF2QixDQUFUO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBO0FBQU8sNENBQVVVLFFBQVYsQ0FBUDtBQUNLSCwyQkFDRztBQUFBO0FBQUEsc0JBQU0sV0FBVSxhQUFoQjtBQUFBO0FBQTJDTiw2QkFBM0M7QUFBQTtBQUFBO0FBRlI7QUFGSixTQURKO0FBVUgsS0ExQ29COztBQTJDckI7Ozs7QUFJQVksVUEvQ3FCLG9CQStDWjtBQUFBLHNCQUNpRCxLQUFLUCxLQUR0RDtBQUFBLFlBQ0dGLFlBREgsV0FDR0EsWUFESDtBQUFBLFlBQ2lCTixTQURqQixXQUNpQkEsU0FEakI7QUFBQSxZQUM0QkssZ0JBRDVCLFdBQzRCQSxnQkFENUI7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxjQUFXLGNBQWhCO0FBQ0tDLDRCQUNHO0FBQUE7QUFBQSxrQkFBSyxXQUFVLE9BQWY7QUFDSSw4Q0FBQyxnQkFBRCxJQUFRLGVBQWVBLFlBQXZCLEVBQXFDLE1BQUssT0FBMUMsRUFBa0QsT0FBTSxlQUF4RCxFQUF3RSxPQUFPLElBQS9FO0FBREosYUFGUjtBQU1JO0FBQUE7QUFBQSxrQkFBTSxXQUFVLFVBQWhCO0FBQTRCLHFCQUFLQyxrQkFBTDtBQUE1QixhQU5KO0FBT0k7QUFBQTtBQUFBLGtCQUFNLFdBQVUsUUFBaEI7QUFDSSw4Q0FBQyx3QkFBRCxJQUFnQixrQkFBa0JGLGdCQUFsQyxFQUFvRCxXQUFXTCxTQUEvRDtBQURKO0FBUEosU0FESjtBQWFIO0FBOURvQixDQUF6Qjs7ZUFpRTZCLHVCQUFRTCxnQkFBUixDO0lBQXJCcUIsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgdHlwZXMgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3NhZ2Vzcy1jb3JlL3RyYW5zbGF0aW9uJztcbmltcG9ydCBzdHlsZUJlaGF2aW91ciBmcm9tICcuLi8uLi9taXhpbi9zdHlsYWJsZSc7XG5pbXBvcnQgVG9waWNEaXNwbGF5ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90b3BpYy1kaXNwbGF5ZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgbnVtYmVyRm9ybWF0dGVyIGZyb20gJ3NhZ2Vzcy1jb3JlL2RlZmluaXRpb24vZm9ybWF0dGVyL251bWJlcic7XG5cbmNvbnN0IGxpc3RTdW1tYXJ5TWl4aW4gPSB7XG4gICAgbWl4aW5zOiBbc3R5bGVCZWhhdmlvdXJdLFxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgbmFtZS5cbiAgICAgKi9cbiAgICBkaXNwbGF5TmFtZTogJ0xpc3RTdW1tYXJ5JyxcblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIGRlZmF1bHQgcHJvcHMuXG4gICAgICogQHJldHVybnMge29iamV0fSBkZWZhdWx0IHByb3BzLlxuICAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjb3BlTGlzdDoge31cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBuYjogdHlwZXMoJ251bWJlcicpLFxuICAgICAgICBxdWVyeVRleHQ6IHR5cGVzKCdzdHJpbmcnKSxcbiAgICAgICAgc2NvcGVMaXN0OiB0eXBlcygnb2JqZWN0JykuaXNSZXF1aXJlZCxcbiAgICAgICAgc2NvcGVDbGlja0FjdGlvbjogdHlwZXMoJ2Z1bmMnKSxcbiAgICAgICAgZXhwb3J0QWN0aW9uOiB0eXBlcygnZnVuYycpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gcmVzdWx0IHNlbnRlbmNlLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gUmVzdWx0IHNlbnRlbmNlXG4gICAgICovXG4gICAgX2dldFJlc3VsdFNlbnRlbmNlKCkge1xuICAgICAgICBjb25zdCB7IG5iLCBxdWVyeVRleHQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGhhc1RleHQgPSBxdWVyeVRleHQgJiYgcXVlcnlUZXh0LnRyaW0oKS5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBzZW50ZW5jZSA9IG5iID4gMSA/IGhhc1RleHQgPyAncmVzdWx0cy5mb3InIDogJ3Jlc3VsdHMuYWxsJyA6IGhhc1RleHQgPyAncmVzdWx0LmZvcicgOiAncmVzdWx0LmFsbCc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPntudW1iZXJGb3JtYXR0ZXIuZm9ybWF0KG5iKX0mbmJzcDs8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dHJhbnNsYXRlKHNlbnRlbmNlKX1cbiAgICAgICAgICAgICAgICAgICAge2hhc1RleHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzZWFyY2gtdGV4dCc+JiMxNzE7Jm5ic3A7e3F1ZXJ5VGV4dH0mbmJzcDsmIzE4Nzs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBodG1sLlxuICAgICAqIEByZXR1cm5zIHtKU1h9IEh0bWwgcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBleHBvcnRBY3Rpb24sIHNjb3BlTGlzdCwgc2NvcGVDbGlja0FjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nbGlzdC1zdW1tYXJ5Jz5cbiAgICAgICAgICAgICAgICB7ZXhwb3J0QWN0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaGFuZGxlT25DbGljaz17ZXhwb3J0QWN0aW9ufSBpY29uPSdwcmludCcgbGFiZWw9J3Jlc3VsdC5leHBvcnQnIHNoYXBlPXtudWxsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2VudGVuY2UnPnt0aGlzLl9nZXRSZXN1bHRTZW50ZW5jZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RvcGljcyc+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BpY0Rpc3BsYXllciB0b3BpY0NsaWNrQWN0aW9uPXtzY29wZUNsaWNrQWN0aW9ufSB0b3BpY0xpc3Q9e3Njb3BlTGlzdH0gLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIobGlzdFN1bW1hcnlNaXhpbik7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==