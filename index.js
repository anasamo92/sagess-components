'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _translation = require('sagess-core/translation');

var _translation2 = _interopRequireDefault(_translation);

var _history = require('sagess-core/history');

var _history2 = _interopRequireDefault(_history);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _behaviours = require('./behaviours');

var _behaviours2 = _interopRequireDefault(_behaviours);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Generator http://patorjk.com/software/taag/#p=display&h=1&f=Banner4&t=Sagess-COMPONENTS
// import './style';
var infos = require(__PACKAGE_JSON_PATH__ + '/package.json');

/** LEGACY DIRTY HACKISH RUBBISH TRICK */
window.i18n = {
    t: _translation2.default.translate,
    init: _translation2.default.init
};
window.Backbone = {
    history: _history2.default
};

/**
* Display information data for Sagess-COMPONENTS
*/
var infosFn = function infos() {
    console.log('\n        SAGESS COMPONENTS\n\n        version: ' + infos.version + '\n        sagess-components: ' + infos.homepage + '\n        documentation: ' + infos.documentation + '\n        issues: ' + infos.bugs.url + '\n        ');
};

exports.default = {
    VERSION: infos.version,
    AUTHORS: infos.author,
    NAME: infos.name,

    /**
    * Display documentation data
    */
    DOCUMENTATION: function DOCUMENTATION() {
        console.log('documentation: http://kleegroup.github.io/sagess-components');
        console.log('components available');
        console.table(infos.components);
        console.log('repository: ' + infos.repository.url);
        console.log('issues: ' + infos.bugs.url);
    },

    common: require('./common'),
    list: require('./list'),
    search: require('./search'),
    page: require('./page'),
    message: require('./message'),
    application: require('./application'),
    infos: infosFn,
    components: _components2.default,
    behaviours: _behaviours2.default
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiaW5mb3MiLCJyZXF1aXJlIiwiX19QQUNLQUdFX0pTT05fUEFUSF9fIiwid2luZG93IiwiaTE4biIsInQiLCJ0cmFuc2xhdGlvbiIsInRyYW5zbGF0ZSIsImluaXQiLCJCYWNrYm9uZSIsImhpc3RvcnkiLCJpbmZvc0ZuIiwiY29uc29sZSIsImxvZyIsInZlcnNpb24iLCJob21lcGFnZSIsImRvY3VtZW50YXRpb24iLCJidWdzIiwidXJsIiwiVkVSU0lPTiIsIkFVVEhPUlMiLCJhdXRob3IiLCJOQU1FIiwibmFtZSIsIkRPQ1VNRU5UQVRJT04iLCJ0YWJsZSIsImNvbXBvbmVudHMiLCJyZXBvc2l0b3J5IiwiY29tbW9uIiwibGlzdCIsInNlYXJjaCIsInBhZ2UiLCJtZXNzYWdlIiwiYXBwbGljYXRpb24iLCJiZWhhdmlvdXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBSUE7Ozs7QUFDQTs7Ozs7O0FBUkE7QUFDQTtBQUlBLElBQU1BLFFBQVFDLFFBQVdDLHFCQUFYLG1CQUFkOztBQUtBO0FBQ0FDLE9BQU9DLElBQVAsR0FBYztBQUNWQyxPQUFHQyxzQkFBWUMsU0FETDtBQUVWQyxVQUFNRixzQkFBWUU7QUFGUixDQUFkO0FBSUFMLE9BQU9NLFFBQVAsR0FBa0I7QUFDZEM7QUFEYyxDQUFsQjs7QUFJQTs7O0FBR0EsSUFBTUMsVUFBVSxTQUFTWCxLQUFULEdBQWlCO0FBQzdCWSxZQUFRQyxHQUFSLHNEQUllYixNQUFNYyxPQUpyQixxQ0FLeUJkLE1BQU1lLFFBTC9CLGlDQU1xQmYsTUFBTWdCLGFBTjNCLDBCQU9jaEIsTUFBTWlCLElBQU4sQ0FBV0MsR0FQekI7QUFVSCxDQVhEOztrQkFhZTtBQUNYQyxhQUFTbkIsTUFBTWMsT0FESjtBQUVYTSxhQUFTcEIsTUFBTXFCLE1BRko7QUFHWEMsVUFBTXRCLE1BQU11QixJQUhEOztBQUtYOzs7QUFHQUMsaUJBUlcsMkJBUUs7QUFDWlosZ0JBQVFDLEdBQVIsQ0FBWSw2REFBWjtBQUNBRCxnQkFBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0FELGdCQUFRYSxLQUFSLENBQWN6QixNQUFNMEIsVUFBcEI7QUFDQWQsZ0JBQVFDLEdBQVIsa0JBQTJCYixNQUFNMkIsVUFBTixDQUFpQlQsR0FBNUM7QUFDQU4sZ0JBQVFDLEdBQVIsY0FBdUJiLE1BQU1pQixJQUFOLENBQVdDLEdBQWxDO0FBQ0gsS0FkVTs7QUFlWFUsWUFBUTNCLFFBQVEsVUFBUixDQWZHO0FBZ0JYNEIsVUFBTTVCLFFBQVEsUUFBUixDQWhCSztBQWlCWDZCLFlBQVE3QixRQUFRLFVBQVIsQ0FqQkc7QUFrQlg4QixVQUFNOUIsUUFBUSxRQUFSLENBbEJLO0FBbUJYK0IsYUFBUy9CLFFBQVEsV0FBUixDQW5CRTtBQW9CWGdDLGlCQUFhaEMsUUFBUSxlQUFSLENBcEJGO0FBcUJYRCxXQUFPVyxPQXJCSTtBQXNCWGUsb0NBdEJXO0FBdUJYUTtBQXZCVyxDIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0dlbmVyYXRvciBodHRwOi8vcGF0b3Jqay5jb20vc29mdHdhcmUvdGFhZy8jcD1kaXNwbGF5Jmg9MSZmPUJhbm5lcjQmdD1TYWdlc3MtQ09NUE9ORU5UU1xuLy8gaW1wb3J0ICcuL3N0eWxlJztcbmltcG9ydCB0cmFuc2xhdGlvbiBmcm9tICdzYWdlc3MtY29yZS90cmFuc2xhdGlvbic7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICdzYWdlc3MtY29yZS9oaXN0b3J5JztcblxuY29uc3QgaW5mb3MgPSByZXF1aXJlKGAke19fUEFDS0FHRV9KU09OX1BBVEhfX30vcGFja2FnZS5qc29uYCk7XG5cbmltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgYmVoYXZpb3VycyBmcm9tICcuL2JlaGF2aW91cnMnO1xuXG4vKiogTEVHQUNZIERJUlRZIEhBQ0tJU0ggUlVCQklTSCBUUklDSyAqL1xud2luZG93LmkxOG4gPSB7XG4gICAgdDogdHJhbnNsYXRpb24udHJhbnNsYXRlLFxuICAgIGluaXQ6IHRyYW5zbGF0aW9uLmluaXRcbn07XG53aW5kb3cuQmFja2JvbmUgPSB7XG4gICAgaGlzdG9yeVxufTtcblxuLyoqXG4qIERpc3BsYXkgaW5mb3JtYXRpb24gZGF0YSBmb3IgU2FnZXNzLUNPTVBPTkVOVFNcbiovXG5jb25zdCBpbmZvc0ZuID0gZnVuY3Rpb24gaW5mb3MoKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICAgIGBcbiAgICAgICAgU0FHRVNTIENPTVBPTkVOVFNcblxuICAgICAgICB2ZXJzaW9uOiAke2luZm9zLnZlcnNpb259XG4gICAgICAgIHNhZ2Vzcy1jb21wb25lbnRzOiAke2luZm9zLmhvbWVwYWdlfVxuICAgICAgICBkb2N1bWVudGF0aW9uOiAke2luZm9zLmRvY3VtZW50YXRpb259XG4gICAgICAgIGlzc3VlczogJHtpbmZvcy5idWdzLnVybH1cbiAgICAgICAgYFxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgVkVSU0lPTjogaW5mb3MudmVyc2lvbixcbiAgICBBVVRIT1JTOiBpbmZvcy5hdXRob3IsXG4gICAgTkFNRTogaW5mb3MubmFtZSxcblxuICAgIC8qKlxuICAgICogRGlzcGxheSBkb2N1bWVudGF0aW9uIGRhdGFcbiAgICAqL1xuICAgIERPQ1VNRU5UQVRJT04oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb2N1bWVudGF0aW9uOiBodHRwOi8va2xlZWdyb3VwLmdpdGh1Yi5pby9zYWdlc3MtY29tcG9uZW50cycpO1xuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50cyBhdmFpbGFibGUnKTtcbiAgICAgICAgY29uc29sZS50YWJsZShpbmZvcy5jb21wb25lbnRzKTtcbiAgICAgICAgY29uc29sZS5sb2coYHJlcG9zaXRvcnk6ICR7aW5mb3MucmVwb3NpdG9yeS51cmx9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBpc3N1ZXM6ICR7aW5mb3MuYnVncy51cmx9YCk7XG4gICAgfSxcbiAgICBjb21tb246IHJlcXVpcmUoJy4vY29tbW9uJyksXG4gICAgbGlzdDogcmVxdWlyZSgnLi9saXN0JyksXG4gICAgc2VhcmNoOiByZXF1aXJlKCcuL3NlYXJjaCcpLFxuICAgIHBhZ2U6IHJlcXVpcmUoJy4vcGFnZScpLFxuICAgIG1lc3NhZ2U6IHJlcXVpcmUoJy4vbWVzc2FnZScpLFxuICAgIGFwcGxpY2F0aW9uOiByZXF1aXJlKCcuL2FwcGxpY2F0aW9uJyksXG4gICAgaW5mb3M6IGluZm9zRm4sXG4gICAgY29tcG9uZW50cyxcbiAgICBiZWhhdmlvdXJzXG59O1xuIl19