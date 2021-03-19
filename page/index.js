'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDetail = exports.list = exports.mixin = exports.search = exports.detail = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _detail = require('./detail');

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _mixin = require('./mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper to creates a detail page.
 * @param {object} config - The page configuration.
 * @returns {object} - The react component associated to the page.
 */
function createDetail(config) {
    config = config || {};
    if (config.mixins) {
        config.mixins.push(_detail.mixin);
    } else {
        config.mixins = [_detail.mixin];
    }
    return _react2.default.createClass(config);
} // Dependencies
exports.detail = _detail.mixin;
exports.search = _search2.default;
exports.mixin = _mixin2.default;
exports.list = _list2.default;
exports.createDetail = createDetail;

//Function to help page creation.

exports.default = {
    detail: _detail.mixin,
    search: _search2.default,
    mixin: _mixin2.default,
    list: _list2.default,
    createDetail: createDetail
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY3JlYXRlRGV0YWlsIiwiY29uZmlnIiwibWl4aW5zIiwicHVzaCIsImRldGFpbE1peGluIiwiUmVhY3QiLCJjcmVhdGVDbGFzcyIsImRldGFpbCIsInNlYXJjaCIsIm1peGluIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLQSxTQUFTQSxZQUFULENBQXNCQyxNQUF0QixFQUE4QjtBQUMxQkEsYUFBU0EsVUFBVSxFQUFuQjtBQUNBLFFBQUlBLE9BQU9DLE1BQVgsRUFBbUI7QUFDZkQsZUFBT0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CQyxhQUFuQjtBQUNILEtBRkQsTUFFTztBQUNISCxlQUFPQyxNQUFQLEdBQWdCLENBQUNFLGFBQUQsQ0FBaEI7QUFDSDtBQUNELFdBQU9DLGdCQUFNQyxXQUFOLENBQWtCTCxNQUFsQixDQUFQO0FBQ0gsQyxDQXBCRDtRQXVCbUJNLE0sR0FBZkgsYTtRQUNBSSxNLEdBQUFBLGdCO1FBQ0FDLEssR0FBQUEsZTtRQUNBQyxJLEdBQUFBLGM7UUFDQVYsWSxHQUFBQSxZOztBQUdKOztrQkFDZTtBQUNYTyxZQUFRSCxhQURHO0FBRVhJLDRCQUZXO0FBR1hDLDBCQUhXO0FBSVhDLHdCQUpXO0FBS1hWO0FBTFcsQyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1peGluIGFzIGRldGFpbE1peGluIH0gZnJvbSAnLi9kZXRhaWwnO1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoJztcclxuaW1wb3J0IG1peGluIGZyb20gJy4vbWl4aW4nO1xyXG5pbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QnO1xyXG5cclxuLyoqXHJcbiAqIEhlbHBlciB0byBjcmVhdGVzIGEgZGV0YWlsIHBhZ2UuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSBUaGUgcGFnZSBjb25maWd1cmF0aW9uLlxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSAtIFRoZSByZWFjdCBjb21wb25lbnQgYXNzb2NpYXRlZCB0byB0aGUgcGFnZS5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZURldGFpbChjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGlmIChjb25maWcubWl4aW5zKSB7XHJcbiAgICAgICAgY29uZmlnLm1peGlucy5wdXNoKGRldGFpbE1peGluKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uZmlnLm1peGlucyA9IFtkZXRhaWxNaXhpbl07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlQ2xhc3MoY29uZmlnKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGRldGFpbE1peGluIGFzIGRldGFpbCxcclxuICAgIHNlYXJjaCxcclxuICAgIG1peGluLFxyXG4gICAgbGlzdCxcclxuICAgIGNyZWF0ZURldGFpbFxyXG59XHJcblxyXG4vL0Z1bmN0aW9uIHRvIGhlbHAgcGFnZSBjcmVhdGlvbi5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGV0YWlsOiBkZXRhaWxNaXhpbixcclxuICAgIHNlYXJjaCxcclxuICAgIG1peGluLFxyXG4gICAgbGlzdCxcclxuICAgIGNyZWF0ZURldGFpbFxyXG59O1xyXG4iXX0=