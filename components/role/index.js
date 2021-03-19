'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _user = require('sagess-core/user');

var _user2 = _interopRequireDefault(_user);

var _intersection = require('lodash/array/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Role(_ref) {
    var hasAll = _ref.hasAll,
        hasOne = _ref.hasOne,
        children = _ref.children,
        emptyBlock = _ref.emptyBlock;

    var userRoles = _user2.default.getRoles();
    //console.log("emptyBlock",emptyBlock);
    if ((0, _isArray2.default)(hasAll) && (0, _intersection2.default)(userRoles, hasAll).length === hasAll.length) {
        return children;
    } else if ((0, _isArray2.default)(hasOne) && (0, _intersection2.default)(userRoles, hasOne).length > 0) {
        return children;
    }
    return emptyBlock;
}

Role.displayName = 'Role';

Role.propTypes = {
    children: _react.PropTypes.object,
    hasOne: _react.PropTypes.array,
    hasAll: _react.PropTypes.array
};

Role.defaultProps = {
    emptyBlock: null
};

exports.default = Role;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiUm9sZSIsImhhc0FsbCIsImhhc09uZSIsImNoaWxkcmVuIiwiZW1wdHlCbG9jayIsInVzZXJSb2xlcyIsInVzZXIiLCJnZXRSb2xlcyIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxJQUFULE9BQXdEO0FBQUEsUUFBeENDLE1BQXdDLFFBQXhDQSxNQUF3QztBQUFBLFFBQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxRQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsUUFBZEMsVUFBYyxRQUFkQSxVQUFjOztBQUNwRCxRQUFJQyxZQUFZQyxlQUFLQyxRQUFMLEVBQWhCO0FBQ0E7QUFDQSxRQUFJLHVCQUFRTixNQUFSLEtBQW1CLDRCQUFhSSxTQUFiLEVBQXdCSixNQUF4QixFQUFnQ08sTUFBaEMsS0FBMkNQLE9BQU9PLE1BQXpFLEVBQWlGO0FBQzdFLGVBQU9MLFFBQVA7QUFDSCxLQUZELE1BRU8sSUFBSSx1QkFBUUQsTUFBUixLQUFtQiw0QkFBYUcsU0FBYixFQUF3QkgsTUFBeEIsRUFBZ0NNLE1BQWhDLEdBQXlDLENBQWhFLEVBQW1FO0FBQ3RFLGVBQU9MLFFBQVA7QUFDSDtBQUNELFdBQU9DLFVBQVA7QUFDSDs7QUFFREosS0FBS1MsV0FBTCxHQUFtQixNQUFuQjs7QUFFQVQsS0FBS1UsU0FBTCxHQUFpQjtBQUNiUCxjQUFVUSxpQkFBVUMsTUFEUDtBQUViVixZQUFRUyxpQkFBVUUsS0FGTDtBQUdiWixZQUFRVSxpQkFBVUU7QUFITCxDQUFqQjs7QUFNQWIsS0FBS2MsWUFBTCxHQUFvQjtBQUNoQlYsZ0JBQVk7QUFESSxDQUFwQjs7a0JBSWVKLEkiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VyIGZyb20gJ3NhZ2Vzcy1jb3JlL3VzZXInO1xuaW1wb3J0IGludGVyc2VjdGlvbiBmcm9tICdsb2Rhc2gvYXJyYXkvaW50ZXJzZWN0aW9uJztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9sYW5nL2lzQXJyYXknO1xuXG5mdW5jdGlvbiBSb2xlKHsgaGFzQWxsLCBoYXNPbmUsIGNoaWxkcmVuLCBlbXB0eUJsb2NrIH0pIHtcbiAgICBsZXQgdXNlclJvbGVzID0gdXNlci5nZXRSb2xlcygpO1xuICAgIC8vY29uc29sZS5sb2coXCJlbXB0eUJsb2NrXCIsZW1wdHlCbG9jayk7XG4gICAgaWYgKGlzQXJyYXkoaGFzQWxsKSAmJiBpbnRlcnNlY3Rpb24odXNlclJvbGVzLCBoYXNBbGwpLmxlbmd0aCA9PT0gaGFzQWxsLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGhhc09uZSkgJiYgaW50ZXJzZWN0aW9uKHVzZXJSb2xlcywgaGFzT25lKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5QmxvY2s7XG59XG5cblJvbGUuZGlzcGxheU5hbWUgPSAnUm9sZSc7XG5cblJvbGUucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGhhc09uZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIGhhc0FsbDogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5Sb2xlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBlbXB0eUJsb2NrOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb2xlO1xuIl19