'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _translation = require('sagess-core/translation');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Translation = function Translation(Component) {
    return function (_Component) {
        _inherits(TranslatedComponent, _Component);

        function TranslatedComponent(props) {
            _classCallCheck(this, TranslatedComponent);

            var _this = _possibleConstructorReturn(this, (TranslatedComponent.__proto__ || Object.getPrototypeOf(TranslatedComponent)).call(this, props));

            _this.i18n = _translation.translate;
            return _this;
        }

        return TranslatedComponent;
    }(Component);
};

exports.default = Translation;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiVHJhbnNsYXRpb24iLCJwcm9wcyIsImkxOG4iLCJ0cmFuc2xhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGNBQWMsU0FBZEEsV0FBYztBQUFBO0FBQUE7O0FBQ2hCLHFDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0pBQ1RBLEtBRFM7O0FBRWYsa0JBQUtDLElBQUwsR0FBWUMsc0JBQVo7QUFGZTtBQUdsQjs7QUFKZTtBQUFBLE1BQStDQyxTQUEvQztBQUFBLENBQXBCOztrQkFRZUosVyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0cmFuc2xhdGV9IGZyb20gJ3NhZ2Vzcy1jb3JlL3RyYW5zbGF0aW9uJztcblxuY29uc3QgVHJhbnNsYXRpb24gPSBDb21wb25lbnQgPT4gY2xhc3MgVHJhbnNsYXRlZENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmkxOG4gPSB0cmFuc2xhdGU7XG4gICAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2xhdGlvbjtcbiJdfQ==