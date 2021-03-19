'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixin = undefined;

var _saveBehaviour = require('./mixin/save-behaviour');

var _saveBehaviour2 = _interopRequireDefault(_saveBehaviour);

var _validateBehaviour = require('./mixin/validate-behaviour');

var _validateBehaviour2 = _interopRequireDefault(_validateBehaviour);

var _cartridgeBehaviour = require('../mixin/cartridge-behaviour');

var _cartridgeBehaviour2 = _interopRequireDefault(_cartridgeBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detailMixin = {
    mixins: [_validateBehaviour2.default, _saveBehaviour2.default, _cartridgeBehaviour2.default]
};

exports.mixin = detailMixin;
exports.default = { mixin: detailMixin };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGV0YWlsTWl4aW4iLCJtaXhpbnMiLCJ2YWxpZGF0ZUJlaGF2aW91ciIsInNhdmVCZWhhdmlvdXIiLCJjYXJ0cmlkZ2VCZWhhdmlvdXIiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYztBQUNoQkMsWUFBUSxDQUFDQywyQkFBRCxFQUFvQkMsdUJBQXBCLEVBQW1DQyw0QkFBbkM7QUFEUSxDQUFwQjs7UUFJd0JDLEssR0FBZkwsVztrQkFDTSxFQUFFSyxPQUFPTCxXQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYXZlQmVoYXZpb3VyIGZyb20gJy4vbWl4aW4vc2F2ZS1iZWhhdmlvdXInO1xyXG5pbXBvcnQgdmFsaWRhdGVCZWhhdmlvdXIgZnJvbSAnLi9taXhpbi92YWxpZGF0ZS1iZWhhdmlvdXInO1xyXG5pbXBvcnQgY2FydHJpZGdlQmVoYXZpb3VyIGZyb20gJy4uL21peGluL2NhcnRyaWRnZS1iZWhhdmlvdXInO1xyXG5cclxuY29uc3QgZGV0YWlsTWl4aW4gPSB7XHJcbiAgICBtaXhpbnM6IFt2YWxpZGF0ZUJlaGF2aW91ciwgc2F2ZUJlaGF2aW91ciwgY2FydHJpZGdlQmVoYXZpb3VyXVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGV0YWlsTWl4aW4gYXMgbWl4aW4gfTtcclxuZXhwb3J0IGRlZmF1bHQgeyBtaXhpbjogZGV0YWlsTWl4aW4gfTtcclxuIl19