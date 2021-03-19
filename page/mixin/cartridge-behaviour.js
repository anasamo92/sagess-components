'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFunction = require('lodash/lang/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _application = require('sagess-core/application');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cartridgeBehaviour = {

    /**
     * Updates the cartridge using the cartridgeConfiguration.
     */
    _registerCartridge: function _registerCartridge() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

        var cartridgeConfiguration = this.cartridgeConfiguration || props.cartridgeConfiguration;
        var hasCartridge = (0, _isFunction2.default)(cartridgeConfiguration);
        if (!hasCartridge) {
            console.warn('\n                Your detail page does not have any cartrige configuration, this is not mandarory but recommended.\n                It should be a component attribute return by a function.\n                function cartridgeConfiguration(){\n                    var cartridgeConfiguration = {\n                    summary: {component: "A React Component", props: {id: this.props.id}},\n                    cartridge: {component: "A React Component"},\n                    actions: {components: "react actions"}\n                    };\n                    return cartridgeConfiguration;\n                }\n            ');
        }
        var config = hasCartridge ? cartridgeConfiguration() : {};
        (0, _application.setHeader)(config);
    },


    /**
     * Registers the cartridge upon mounting.
     */
    componentWillMount: function componentWillMount() {
        this._registerCartridge();
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this._registerCartridge(nextProps);
    }
};

exports.default = cartridgeBehaviour;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiY2FydHJpZGdlQmVoYXZpb3VyIiwiX3JlZ2lzdGVyQ2FydHJpZGdlIiwicHJvcHMiLCJjYXJ0cmlkZ2VDb25maWd1cmF0aW9uIiwiaGFzQ2FydHJpZGdlIiwiY29uc29sZSIsIndhcm4iLCJjb25maWciLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEscUJBQXFCOztBQUV2Qjs7O0FBR0FDLHNCQUx1QixnQ0FLZ0I7QUFBQSxZQUFwQkMsS0FBb0IsdUVBQVosS0FBS0EsS0FBTzs7QUFDbkMsWUFBTUMseUJBQXlCLEtBQUtBLHNCQUFMLElBQStCRCxNQUFNQyxzQkFBcEU7QUFDQSxZQUFNQyxlQUFlLDBCQUFXRCxzQkFBWCxDQUFyQjtBQUNBLFlBQUksQ0FBQ0MsWUFBTCxFQUFtQjtBQUNmQyxvQkFBUUMsSUFBUjtBQVlIO0FBQ0QsWUFBTUMsU0FBU0gsZUFBZUQsd0JBQWYsR0FBMEMsRUFBekQ7QUFDQSxvQ0FBVUksTUFBVjtBQUNILEtBeEJzQjs7O0FBMEJ2Qjs7O0FBR0FDLHNCQTdCdUIsZ0NBNkJGO0FBQ2pCLGFBQUtQLGtCQUFMO0FBQ0gsS0EvQnNCO0FBaUN2QlEsNkJBakN1QixxQ0FpQ0dDLFNBakNILEVBaUNjO0FBQ2pDLGFBQUtULGtCQUFMLENBQXdCUyxTQUF4QjtBQUNIO0FBbkNzQixDQUEzQjs7a0JBc0NlVixrQiIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2xhbmcvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBzZXRIZWFkZXIgfSBmcm9tICdzYWdlc3MtY29yZS9hcHBsaWNhdGlvbic7XG5cbmNvbnN0IGNhcnRyaWRnZUJlaGF2aW91ciA9IHtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGNhcnRyaWRnZSB1c2luZyB0aGUgY2FydHJpZGdlQ29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBfcmVnaXN0ZXJDYXJ0cmlkZ2UocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIGNvbnN0IGNhcnRyaWRnZUNvbmZpZ3VyYXRpb24gPSB0aGlzLmNhcnRyaWRnZUNvbmZpZ3VyYXRpb24gfHwgcHJvcHMuY2FydHJpZGdlQ29uZmlndXJhdGlvbjtcbiAgICAgICAgY29uc3QgaGFzQ2FydHJpZGdlID0gaXNGdW5jdGlvbihjYXJ0cmlkZ2VDb25maWd1cmF0aW9uKTtcbiAgICAgICAgaWYgKCFoYXNDYXJ0cmlkZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgXG4gICAgICAgICAgICAgICAgWW91ciBkZXRhaWwgcGFnZSBkb2VzIG5vdCBoYXZlIGFueSBjYXJ0cmlnZSBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBtYW5kYXJvcnkgYnV0IHJlY29tbWVuZGVkLlxuICAgICAgICAgICAgICAgIEl0IHNob3VsZCBiZSBhIGNvbXBvbmVudCBhdHRyaWJ1dGUgcmV0dXJuIGJ5IGEgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2FydHJpZGdlQ29uZmlndXJhdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FydHJpZGdlQ29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyeToge2NvbXBvbmVudDogXCJBIFJlYWN0IENvbXBvbmVudFwiLCBwcm9wczoge2lkOiB0aGlzLnByb3BzLmlkfX0sXG4gICAgICAgICAgICAgICAgICAgIGNhcnRyaWRnZToge2NvbXBvbmVudDogXCJBIFJlYWN0IENvbXBvbmVudFwifSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczoge2NvbXBvbmVudHM6IFwicmVhY3QgYWN0aW9uc1wifVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FydHJpZGdlQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25maWcgPSBoYXNDYXJ0cmlkZ2UgPyBjYXJ0cmlkZ2VDb25maWd1cmF0aW9uKCkgOiB7fTtcbiAgICAgICAgc2V0SGVhZGVyKGNvbmZpZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyB0aGUgY2FydHJpZGdlIHVwb24gbW91bnRpbmcuXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RlckNhcnRyaWRnZSgpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLl9yZWdpc3RlckNhcnRyaWRnZShuZXh0UHJvcHMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhcnRyaWRnZUJlaGF2aW91cjsgXG4iXX0=