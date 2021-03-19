'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _translation = require('sagess-core/translation');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixin = require('./mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'string-normalize',

    mixins: [_mixin2.default],
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'cartridge-search', 'data-focus': 'cartridge-search' },
            _react2.default.createElement(
                'h1',
                null,
                (0, _translation.translate)('search.cartridge.title')
            ),
            this._SearchBarComponent()
        );
    }
});
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDbGFzcyIsIm1peGlucyIsInNlYXJjaEhlYWRlck1peGluIiwicmVuZGVyIiwiX1NlYXJjaEJhckNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlQSxnQkFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUM3QkMsWUFBUSxDQUFDQyxlQUFELENBRHFCO0FBRTdCQyxVQUY2QixvQkFFcEI7QUFDTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWYsRUFBa0MsY0FBVyxrQkFBN0M7QUFDSTtBQUFBO0FBQUE7QUFBSyw0Q0FBVSx3QkFBVjtBQUFMLGFBREo7QUFFSyxpQkFBS0MsbUJBQUw7QUFGTCxTQURKO0FBTUg7QUFUNEIsQ0FBbEIsQyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnc2FnZXNzLWNvcmUvdHJhbnNsYXRpb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzZWFyY2hIZWFkZXJNaXhpbiBmcm9tICcuL21peGluJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIG1peGluczogW3NlYXJjaEhlYWRlck1peGluXSxcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FydHJpZGdlLXNlYXJjaCcgZGF0YS1mb2N1cz0nY2FydHJpZGdlLXNlYXJjaCc+XG4gICAgICAgICAgICAgICAgPGgxPnt0cmFuc2xhdGUoJ3NlYXJjaC5jYXJ0cmlkZ2UudGl0bGUnKX08L2gxPlxuICAgICAgICAgICAgICAgIHt0aGlzLl9TZWFyY2hCYXJDb21wb25lbnQoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuIl19