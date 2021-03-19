'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

var _uniqueId = require('lodash/utility/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _translation = require('../../../behaviours/translation');

var _translation2 = _interopRequireDefault(_translation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectRadio = (0, _translation2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(SelectRadio, _Component);

    function SelectRadio() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectRadio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectRadio.__proto__ || Object.getPrototypeOf(SelectRadio)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            uniqueName: (0, _uniqueId2.default)('options_'),
            value: _this.props.value
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectRadio, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            this.setState({ value: newProps.value });
        }

        /**
         * Get the value from the select in the DOM.
         * @return {string, number} selected value
         */

    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }

        /**
        * handle click on radio
        * @param {object} event - the click event
        */

    }, {
        key: '_handleRadioChange',
        value: function _handleRadioChange(newValue) {
            var onChange = this.props.onChange;

            if (onChange) {
                onChange(newValue);
                return;
            }
            //Set the state then call the change handler.
            this.setState({ value: newValue });
        }

        /**
         * Closure to capture key and radio status.
         * @param  {string} key the key of radio
         * @return {func} status closure
         */

    }, {
        key: '_getRadioChangeHandler',
        value: function _getRadioChangeHandler(key) {
            var _this2 = this;

            return function () {
                _this2._handleRadioChange(key);
            };
        }

        /**
        * Render radio for each values
        * @return {XML} the different radio values
        */

    }, {
        key: 'renderSelectRadios',
        value: function renderSelectRadios() {
            var _this3 = this;

            var uniqueName = this.state.uniqueName;


            return this.props.values.map(function (val, idx) {
                var value = val[_this3.props.valueKey];
                var label = val[_this3.props.labelKey];
                var disabled = _this3.props.disabled;
                var isChecked = value === _this3.state.value;

                return _react2.default.createElement(_radio2.default, {
                    key: idx,
                    label: _this3.i18n(label),
                    name: uniqueName,
                    onChange: _this3._getRadioChangeHandler(value),
                    value: isChecked,
                    disabled: disabled
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                error = _props.error,
                style = _props.style;


            return _react2.default.createElement(
                'div',
                { 'data-focus': 'select-radio', 'data-valid': !error, style: style },
                this.renderSelectRadios(),
                error && _react2.default.createElement(
                    'div',
                    { className: 'label-error' },
                    error
                )
            );
        }
    }]);

    return SelectRadio;
}(_react.Component), _class2.defaultProps = {
    values: [],
    valueKey: 'code',
    labelKey: 'label',
    disabled: false
}, _class2.propTypes = {
    values: _react.PropTypes.array,
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.array]),
    valueKey: _react.PropTypes.string,
    labelKey: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    disabled: _react.PropTypes.bool
}, _temp2)) || _class;

SelectRadio.displayName = 'SelectRadio';

exports.default = SelectRadio;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiU2VsZWN0UmFkaW8iLCJUcmFuc2xhdGlvbiIsInN0YXRlIiwidW5pcXVlTmFtZSIsInZhbHVlIiwicHJvcHMiLCJuZXdQcm9wcyIsInNldFN0YXRlIiwibmV3VmFsdWUiLCJvbkNoYW5nZSIsImtleSIsIl9oYW5kbGVSYWRpb0NoYW5nZSIsInZhbHVlcyIsIm1hcCIsInZhbCIsImlkeCIsInZhbHVlS2V5IiwibGFiZWwiLCJsYWJlbEtleSIsImRpc2FibGVkIiwiaXNDaGVja2VkIiwiaTE4biIsIl9nZXRSYWRpb0NoYW5nZUhhbmRsZXIiLCJlcnJvciIsInN0eWxlIiwicmVuZGVyU2VsZWN0UmFkaW9zIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdNQSxXLE9BRExDLHFCOzs7Ozs7Ozs7Ozs7OztvTUFtQkdDLEssR0FBUTtBQUNKQyx3QkFBWSx3QkFBUyxVQUFULENBRFI7QUFFSkMsbUJBQU8sTUFBS0MsS0FBTCxDQUFXRDtBQUZkLFM7Ozs7O2tEQUtrQkUsUSxFQUFVO0FBQ2hDLGlCQUFLQyxRQUFMLENBQWMsRUFBRUgsT0FBT0UsU0FBU0YsS0FBbEIsRUFBZDtBQUNIOztBQUVEOzs7Ozs7O21DQUlXO0FBQ1AsbUJBQU8sS0FBS0YsS0FBTCxDQUFXRSxLQUFsQjtBQUNIOztBQUVEOzs7Ozs7OzJDQUltQkksUSxFQUFVO0FBQUEsZ0JBQ2pCQyxRQURpQixHQUNKLEtBQUtKLEtBREQsQ0FDakJJLFFBRGlCOztBQUV6QixnQkFBSUEsUUFBSixFQUFjO0FBQ1ZBLHlCQUFTRCxRQUFUO0FBQ0E7QUFDSDtBQUNEO0FBQ0EsaUJBQUtELFFBQUwsQ0FBYyxFQUFFSCxPQUFPSSxRQUFULEVBQWQ7QUFDSDs7QUFFRDs7Ozs7Ozs7K0NBS3VCRSxHLEVBQUs7QUFBQTs7QUFDeEIsbUJBQU8sWUFBTTtBQUNULHVCQUFLQyxrQkFBTCxDQUF3QkQsR0FBeEI7QUFDSCxhQUZEO0FBR0g7O0FBRUQ7Ozs7Ozs7NkNBSXFCO0FBQUE7O0FBQUEsZ0JBQ1RQLFVBRFMsR0FDTSxLQUFLRCxLQURYLENBQ1RDLFVBRFM7OztBQUdqQixtQkFBTyxLQUFLRSxLQUFMLENBQVdPLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3ZDLG9CQUFNWCxRQUFRVSxJQUFJLE9BQUtULEtBQUwsQ0FBV1csUUFBZixDQUFkO0FBQ0Esb0JBQU1DLFFBQVFILElBQUksT0FBS1QsS0FBTCxDQUFXYSxRQUFmLENBQWQ7QUFDQSxvQkFBTUMsV0FBVyxPQUFLZCxLQUFMLENBQVdjLFFBQTVCO0FBQ0Esb0JBQU1DLFlBQVloQixVQUFVLE9BQUtGLEtBQUwsQ0FBV0UsS0FBdkM7O0FBRUEsdUJBQ0ksOEJBQUMsZUFBRDtBQUNJLHlCQUFLVyxHQURUO0FBRUksMkJBQU8sT0FBS00sSUFBTCxDQUFVSixLQUFWLENBRlg7QUFHSSwwQkFBTWQsVUFIVjtBQUlJLDhCQUFVLE9BQUttQixzQkFBTCxDQUE0QmxCLEtBQTVCLENBSmQ7QUFLSSwyQkFBT2dCLFNBTFg7QUFNSSw4QkFBVUQ7QUFOZCxrQkFESjtBQVVILGFBaEJNLENBQVA7QUFpQkg7OztpQ0FFUTtBQUFBLHlCQUNvQixLQUFLZCxLQUR6QjtBQUFBLGdCQUNHa0IsS0FESCxVQUNHQSxLQURIO0FBQUEsZ0JBQ1VDLEtBRFYsVUFDVUEsS0FEVjs7O0FBR0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLGNBQVcsY0FBaEIsRUFBK0IsY0FBWSxDQUFDRCxLQUE1QyxFQUFtRCxPQUFPQyxLQUExRDtBQUNLLHFCQUFLQyxrQkFBTCxFQURMO0FBRUtGLHlCQUFTO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGFBQWY7QUFBOEJBO0FBQTlCO0FBRmQsYUFESjtBQU1IOzs7O0VBL0ZxQkcsZ0IsV0FFZkMsWSxHQUFlO0FBQ2xCZixZQUFRLEVBRFU7QUFFbEJJLGNBQVUsTUFGUTtBQUdsQkUsY0FBVSxPQUhRO0FBSWxCQyxjQUFVO0FBSlEsQyxVQU9mUyxTLEdBQVk7QUFDZmhCLFlBQVFpQixpQkFBVUMsS0FESDtBQUVmMUIsV0FBT3lCLGlCQUFVRSxTQUFWLENBQW9CLENBQUNGLGlCQUFVRyxNQUFYLEVBQW1CSCxpQkFBVUksTUFBN0IsRUFBcUNKLGlCQUFVQyxLQUEvQyxDQUFwQixDQUZRO0FBR2ZkLGNBQVVhLGlCQUFVSSxNQUhMO0FBSWZmLGNBQVVXLGlCQUFVSSxNQUpMO0FBS2Z4QixjQUFVb0IsaUJBQVVLLElBTEw7QUFNZmYsY0FBVVUsaUJBQVVNO0FBTkwsQzs7QUF5RnZCbkMsWUFBWW9DLFdBQVosR0FBMEIsYUFBMUI7O2tCQUVlcEMsVyIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4uL3JhZGlvJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICdsb2Rhc2gvdXRpbGl0eS91bmlxdWVJZCc7XG5pbXBvcnQgVHJhbnNsYXRpb24gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3Vycy90cmFuc2xhdGlvbic7XG5cbkBUcmFuc2xhdGlvblxuY2xhc3MgU2VsZWN0UmFkaW8gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgdmFsdWVLZXk6ICdjb2RlJyxcbiAgICAgICAgbGFiZWxLZXk6ICdsYWJlbCcsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgICAgICB2YWx1ZUtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbGFiZWxLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICB1bmlxdWVOYW1lOiB1bmlxdWVJZCgnb3B0aW9uc18nKSxcbiAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWVcbiAgICB9O1xuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1Byb3BzLnZhbHVlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgZnJvbSB0aGUgc2VsZWN0IGluIHRoZSBET00uXG4gICAgICogQHJldHVybiB7c3RyaW5nLCBudW1iZXJ9IHNlbGVjdGVkIHZhbHVlXG4gICAgICovXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogaGFuZGxlIGNsaWNrIG9uIHJhZGlvXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgLSB0aGUgY2xpY2sgZXZlbnRcbiAgICAqL1xuICAgIF9oYW5kbGVSYWRpb0NoYW5nZShuZXdWYWx1ZSkge1xuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL1NldCB0aGUgc3RhdGUgdGhlbiBjYWxsIHRoZSBjaGFuZ2UgaGFuZGxlci5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zdXJlIHRvIGNhcHR1cmUga2V5IGFuZCByYWRpbyBzdGF0dXMuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBrZXkgdGhlIGtleSBvZiByYWRpb1xuICAgICAqIEByZXR1cm4ge2Z1bmN9IHN0YXR1cyBjbG9zdXJlXG4gICAgICovXG4gICAgX2dldFJhZGlvQ2hhbmdlSGFuZGxlcihrZXkpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZVJhZGlvQ2hhbmdlKGtleSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW5kZXIgcmFkaW8gZm9yIGVhY2ggdmFsdWVzXG4gICAgKiBAcmV0dXJuIHtYTUx9IHRoZSBkaWZmZXJlbnQgcmFkaW8gdmFsdWVzXG4gICAgKi9cbiAgICByZW5kZXJTZWxlY3RSYWRpb3MoKSB7XG4gICAgICAgIGNvbnN0IHsgdW5pcXVlTmFtZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZXMubWFwKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWxbdGhpcy5wcm9wcy52YWx1ZUtleV07XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHZhbFt0aGlzLnByb3BzLmxhYmVsS2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZDtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IHZhbHVlID09PSB0aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSYWRpb1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMuaTE4bihsYWJlbCl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3VuaXF1ZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9nZXRSYWRpb0NoYW5nZUhhbmRsZXIodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBlcnJvciwgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0nc2VsZWN0LXJhZGlvJyBkYXRhLXZhbGlkPXshZXJyb3J9IHN0eWxlPXtzdHlsZX0gPlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNlbGVjdFJhZGlvcygpfVxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT0nbGFiZWwtZXJyb3InPntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNlbGVjdFJhZGlvLmRpc3BsYXlOYW1lID0gJ1NlbGVjdFJhZGlvJztcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0UmFkaW87XG4iXX0=