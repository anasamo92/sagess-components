'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
    _getDetail: function _getDetail() {
        var detailJSON = {};
        for (var blockKey in this.refs) {
            if ((0, _isFunction2.default)(this.refs[blockKey]._getEntity)) {
                var blockJSON = this.refs[blockKey]._getEntity();
                (0, _objectAssign2.default)(detailJSON, _defineProperty({}, blockKey, blockJSON));
            }
        }
        return detailJSON;
    }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiX2dldERldGFpbCIsImRldGFpbEpTT04iLCJibG9ja0tleSIsInJlZnMiLCJfZ2V0RW50aXR5IiwiYmxvY2tKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztrQkFFZTtBQUNYQSxjQURXLHdCQUNFO0FBQ1QsWUFBSUMsYUFBYSxFQUFqQjtBQUNBLGFBQUssSUFBSUMsUUFBVCxJQUFxQixLQUFLQyxJQUExQixFQUFnQztBQUM1QixnQkFBSSwwQkFBVyxLQUFLQSxJQUFMLENBQVVELFFBQVYsRUFBb0JFLFVBQS9CLENBQUosRUFBZ0Q7QUFDNUMsb0JBQUlDLFlBQVksS0FBS0YsSUFBTCxDQUFVRCxRQUFWLEVBQW9CRSxVQUFwQixFQUFoQjtBQUNBLDRDQUFPSCxVQUFQLHNCQUNLQyxRQURMLEVBQ2dCRyxTQURoQjtBQUdIO0FBQ0o7QUFDRCxlQUFPSixVQUFQO0FBQ0g7QUFaVSxDIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvbGFuZy9pc0Z1bmN0aW9uJztcclxuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIF9nZXREZXRhaWwoKSB7XHJcbiAgICAgICAgbGV0IGRldGFpbEpTT04gPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBibG9ja0tleSBpbiB0aGlzLnJlZnMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5yZWZzW2Jsb2NrS2V5XS5fZ2V0RW50aXR5KSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrSlNPTiA9IHRoaXMucmVmc1tibG9ja0tleV0uX2dldEVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgYXNzaWduKGRldGFpbEpTT04sIHtcclxuICAgICAgICAgICAgICAgICAgICBbYmxvY2tLZXldOiBibG9ja0pTT05cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZXRhaWxKU09OO1xyXG4gICAgfVxyXG59O1xyXG4iXX0=