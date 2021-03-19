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

var _uniqueId = require('lodash/utility/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Dependencies
var titleMixin = {

    /**
    * Display name.
    */
    displayName: 'Title',
    /** @inheritDoc */
    getInitialState: function getInitialState() {
        return {
            spyId: (0, _uniqueId2.default)('title_')
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents v0.15: the \'Title\' component from SagessComponents.common is deprecated, please use SagessComponents.components.Title');
    },

    /**
    * Props validation
    */
    propTypes: {
        id: (0, _types2.default)('string'),
        label: (0, _types2.default)('string')
    },
    /**
    * Render the component.
    * @returns {JSX} Htm code.
    */
    render: function render() {
        var spyId = this.state.spyId;
        var _props = this.props,
            id = _props.id,
            label = _props.label;

        return _react2.default.createElement(
            'h3',
            { 'data-spy': spyId, id: id },
            label
        );
    }
};

var _builder = (0, _builder3.default)(titleMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsidGl0bGVNaXhpbiIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFN0YXRlIiwic3B5SWQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsInByb3BUeXBlcyIsImlkIiwibGFiZWwiLCJyZW5kZXIiLCJzdGF0ZSIsInByb3BzIiwibWl4aW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkE7QUFNQSxJQUFNQSxhQUFhOztBQUVmOzs7QUFHQUMsaUJBQWEsT0FMRTtBQU1mO0FBQ0FDLG1CQVBlLDZCQU9HO0FBQ2QsZUFBTztBQUNIQyxtQkFBTyx3QkFBUyxRQUFUO0FBREosU0FBUDtBQUdILEtBWGM7QUFZZkMsc0JBWmUsZ0NBWU07QUFDakJDLGdCQUFRQyxJQUFSLENBQWEsMElBQWI7QUFDSCxLQWRjOztBQWVmOzs7QUFHQUMsZUFBVztBQUNQQyxZQUFJLHFCQUFLLFFBQUwsQ0FERztBQUVQQyxlQUFPLHFCQUFLLFFBQUw7QUFGQSxLQWxCSTtBQXNCZjs7OztBQUlBQyxVQTFCZSxvQkEwQk47QUFBQSxZQUNHUCxLQURILEdBQ2EsS0FBS1EsS0FEbEIsQ0FDR1IsS0FESDtBQUFBLHFCQUVpQixLQUFLUyxLQUZ0QjtBQUFBLFlBRUdKLEVBRkgsVUFFR0EsRUFGSDtBQUFBLFlBRU9DLEtBRlAsVUFFT0EsS0FGUDs7QUFHTCxlQUFPO0FBQUE7QUFBQSxjQUFJLFlBQVVOLEtBQWQsRUFBcUIsSUFBSUssRUFBekI7QUFBOEJDO0FBQTlCLFNBQVA7QUFDSDtBQTlCYyxDQUFuQjs7ZUFpQzZCLHVCQUFRVCxVQUFSLEM7SUFBckJhLEssWUFBQUEsSztJQUFPQyxTLFlBQUFBLFM7O1FBQ05ELEssR0FBQUEsSztRQUFPQyxTLEdBQUFBLFM7a0JBQ0QsRUFBRUQsWUFBRixFQUFTQyxvQkFBVCxFIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgdHlwZSBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJ2xvZGFzaC91dGlsaXR5L3VuaXF1ZUlkJztcblxuY29uc3QgdGl0bGVNaXhpbiA9IHtcblxuICAgIC8qKlxuICAgICogRGlzcGxheSBuYW1lLlxuICAgICovXG4gICAgZGlzcGxheU5hbWU6ICdUaXRsZScsXG4gICAgLyoqIEBpbmhlcml0RG9jICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3B5SWQ6IHVuaXF1ZUlkKCd0aXRsZV8nKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NhZ2Vzc0NvbXBvbmVudHMgdjAuMTU6IHRoZSBcXCdUaXRsZVxcJyBjb21wb25lbnQgZnJvbSBTYWdlc3NDb21wb25lbnRzLmNvbW1vbiBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFNhZ2Vzc0NvbXBvbmVudHMuY29tcG9uZW50cy5UaXRsZScpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBQcm9wcyB2YWxpZGF0aW9uXG4gICAgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgaWQ6IHR5cGUoJ3N0cmluZycpLFxuICAgICAgICBsYWJlbDogdHlwZSgnc3RyaW5nJylcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBjb21wb25lbnQuXG4gICAgKiBAcmV0dXJucyB7SlNYfSBIdG0gY29kZS5cbiAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzcHlJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBpZCwgbGFiZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiA8aDMgZGF0YS1zcHk9e3NweUlkfSBpZD17aWR9PntsYWJlbH08L2gzPjtcbiAgICB9XG59O1xuXG5jb25zdCB7IG1peGluLCBjb21wb25lbnQgfSA9IGJ1aWxkZXIodGl0bGVNaXhpbik7XG5leHBvcnQgeyBtaXhpbiwgY29tcG9uZW50IH07XG5leHBvcnQgZGVmYXVsdCB7IG1peGluLCBjb21wb25lbnQgfTtcbiJdfQ==