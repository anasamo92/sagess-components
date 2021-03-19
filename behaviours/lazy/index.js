'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lazyDecorator;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLazyload = require('react-lazyload');

var _panel = require('../../components/panel');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Lazy loading component with sagess component Panel in placeholder by default.
 * The source code is available here: https://github.com/jasonslyvia/react-lazyload
 * Some demonstrations on this page: https://jasonslyvia.github.io/react-lazyload/examples/#/?_k=dr4z6a
 * 
 * @param {any} { title,
 *     height = 300,
 *     offset = 150,
 *     placeholder = <Panel style={{ height }} title={title} />,
 *     debounce = 250,
 *     once = true } 
 * @returns Your wrapped component
 */
function lazyDecorator(_ref) {
  var title = _ref.title,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 300 : _ref$height,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 150 : _ref$offset,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? _react2.default.createElement(_panel2.default, { style: { height: height }, title: title }) : _ref$placeholder,
      _ref$debounce = _ref.debounce,
      debounce = _ref$debounce === undefined ? 250 : _ref$debounce,
      _ref$once = _ref.once,
      once = _ref$once === undefined ? true : _ref$once;

  return (0, _reactLazyload.lazyload)({ height: height, debounce: debounce, once: once, offset: offset, placeholder: placeholder });
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsibGF6eURlY29yYXRvciIsInRpdGxlIiwiaGVpZ2h0Iiwib2Zmc2V0IiwicGxhY2Vob2xkZXIiLCJkZWJvdW5jZSIsIm9uY2UiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWtCd0JBLGE7O0FBbEJ4Qjs7OztBQUNBOztBQUVBOzs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFlLFNBQVNBLGFBQVQsT0FLSTtBQUFBLE1BTHFCQyxLQUtyQixRQUxxQkEsS0FLckI7QUFBQSx5QkFKZkMsTUFJZTtBQUFBLE1BSmZBLE1BSWUsK0JBSk4sR0FJTTtBQUFBLHlCQUhmQyxNQUdlO0FBQUEsTUFIZkEsTUFHZSwrQkFITixHQUdNO0FBQUEsOEJBRmZDLFdBRWU7QUFBQSxNQUZmQSxXQUVlLG9DQUZELDhCQUFDLGVBQUQsSUFBTyxPQUFPLEVBQUVGLGNBQUYsRUFBZCxFQUEwQixPQUFPRCxLQUFqQyxHQUVDO0FBQUEsMkJBRGZJLFFBQ2U7QUFBQSxNQURmQSxRQUNlLGlDQURKLEdBQ0k7QUFBQSx1QkFBZkMsSUFBZTtBQUFBLE1BQWZBLElBQWUsNkJBQVIsSUFBUTs7QUFDZixTQUFPLDZCQUFTLEVBQUVKLGNBQUYsRUFBVUcsa0JBQVYsRUFBb0JDLFVBQXBCLEVBQTBCSCxjQUExQixFQUFrQ0Msd0JBQWxDLEVBQVQsQ0FBUDtBQUNIIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbGF6eWxvYWQgfSBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XG5cbmltcG9ydCBQYW5lbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhbmVsJztcblxuLyoqXG4gKiBMYXp5IGxvYWRpbmcgY29tcG9uZW50IHdpdGggc2FnZXNzIGNvbXBvbmVudCBQYW5lbCBpbiBwbGFjZWhvbGRlciBieSBkZWZhdWx0LlxuICogVGhlIHNvdXJjZSBjb2RlIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vamFzb25zbHl2aWEvcmVhY3QtbGF6eWxvYWRcbiAqIFNvbWUgZGVtb25zdHJhdGlvbnMgb24gdGhpcyBwYWdlOiBodHRwczovL2phc29uc2x5dmlhLmdpdGh1Yi5pby9yZWFjdC1sYXp5bG9hZC9leGFtcGxlcy8jLz9faz1kcjR6NmFcbiAqIFxuICogQHBhcmFtIHthbnl9IHsgdGl0bGUsXG4gKiAgICAgaGVpZ2h0ID0gMzAwLFxuICogICAgIG9mZnNldCA9IDE1MCxcbiAqICAgICBwbGFjZWhvbGRlciA9IDxQYW5lbCBzdHlsZT17eyBoZWlnaHQgfX0gdGl0bGU9e3RpdGxlfSAvPixcbiAqICAgICBkZWJvdW5jZSA9IDI1MCxcbiAqICAgICBvbmNlID0gdHJ1ZSB9IFxuICogQHJldHVybnMgWW91ciB3cmFwcGVkIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYXp5RGVjb3JhdG9yKHsgdGl0bGUsXG4gICAgaGVpZ2h0ID0gMzAwLFxuICAgIG9mZnNldCA9IDE1MCxcbiAgICBwbGFjZWhvbGRlciA9IDxQYW5lbCBzdHlsZT17eyBoZWlnaHQgfX0gdGl0bGU9e3RpdGxlfSAvPixcbiAgICBkZWJvdW5jZSA9IDI1MCxcbiAgICBvbmNlID0gdHJ1ZSB9KSB7XG4gICAgcmV0dXJuIGxhenlsb2FkKHsgaGVpZ2h0LCBkZWJvdW5jZSwgb25jZSwgb2Zmc2V0LCBwbGFjZWhvbGRlciB9KTtcbn1cbiJdfQ==