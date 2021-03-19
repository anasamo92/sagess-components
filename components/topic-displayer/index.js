'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translation = require('sagess-core/translation');

var _map = require('lodash/collection/map');

var _map2 = _interopRequireDefault(_map);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Action on the topic click.
* @param  {String} key  topic key
* @return {Function}     Click handler
*/
function topicClickHandler(key, topicClickAction) {
    topicClickAction(key);
}

function TopicDisplayer(_ref) {
    var displayLabels = _ref.displayLabels,
        topicList = _ref.topicList,
        topicClickAction = _ref.topicClickAction;

    return _react2.default.createElement(
        'div',
        { 'data-focus': 'topic-displayer' },
        (0, _map2.default)(topicList, function (topic, key) {
            var text = displayLabels ? (0, _translation.translate)(topic.label) + ': ' + (0, _translation.translate)(topic.value) : (0, _translation.translate)(topic.value);
            return _react2.default.createElement(_button2.default, {
                handleOnClick: function handleOnClick() {
                    topicClickHandler(key, topicClickAction);
                },
                icon: 'clear',
                key: key,
                label: text
            });
        })
    );
}

TopicDisplayer.displayName = 'TopicDisplayer';

TopicDisplayer.defaultProps = {
    style: undefined, // Component css style.
    topicClickAction: function topicClickAction() {},
    // Action when click on topic
    topicList: {}, // {topic1: "Label of topic one", topic2:"Label of topic 2"} List f topics,
    displayLabels: false
};

exports.default = TopicDisplayer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsidG9waWNDbGlja0hhbmRsZXIiLCJrZXkiLCJ0b3BpY0NsaWNrQWN0aW9uIiwiVG9waWNEaXNwbGF5ZXIiLCJkaXNwbGF5TGFiZWxzIiwidG9waWNMaXN0IiwidG9waWMiLCJ0ZXh0IiwibGFiZWwiLCJ2YWx1ZSIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIiwic3R5bGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS0EsU0FBU0EsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQWdDQyxnQkFBaEMsRUFBa0Q7QUFDOUNBLHFCQUFpQkQsR0FBakI7QUFDSDs7QUFFRCxTQUFTRSxjQUFULE9BQXdFO0FBQUEsUUFBOUNDLGFBQThDLFFBQTlDQSxhQUE4QztBQUFBLFFBQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxRQUFwQkgsZ0JBQW9CLFFBQXBCQSxnQkFBb0I7O0FBQ3BFLFdBQ0k7QUFBQTtBQUFBLFVBQUssY0FBVyxpQkFBaEI7QUFDSywyQkFBSUcsU0FBSixFQUFlLFVBQUNDLEtBQUQsRUFBUUwsR0FBUixFQUFnQjtBQUM1QixnQkFBTU0sT0FBT0gsZ0JBQW1CLDRCQUFVRSxNQUFNRSxLQUFoQixDQUFuQixVQUE4Qyw0QkFBVUYsTUFBTUcsS0FBaEIsQ0FBOUMsR0FBeUUsNEJBQVVILE1BQU1HLEtBQWhCLENBQXRGO0FBQ0EsbUJBQ0ksOEJBQUMsZ0JBQUQ7QUFDSSwrQkFBZSx5QkFBTTtBQUFFVCxzQ0FBa0JDLEdBQWxCLEVBQXVCQyxnQkFBdkI7QUFBMEMsaUJBRHJFO0FBRUksc0JBQUssT0FGVDtBQUdJLHFCQUFLRCxHQUhUO0FBSUksdUJBQU9NO0FBSlgsY0FESjtBQVFILFNBVkE7QUFETCxLQURKO0FBZUg7O0FBRURKLGVBQWVPLFdBQWYsR0FBNkIsZ0JBQTdCOztBQUVBUCxlQUFlUSxZQUFmLEdBQThCO0FBQzFCQyxXQUFPQyxTQURtQixFQUNSO0FBQ2xCWCxvQkFGMEIsOEJBRVAsQ0FBRyxDQUZJO0FBRUY7QUFDeEJHLGVBQVcsRUFIZSxFQUdYO0FBQ2ZELG1CQUFlO0FBSlcsQ0FBOUI7O2tCQU9lRCxjIiwiZmlsZSI6InN0cmluZy1ub3JtYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAnc2FnZXNzLWNvcmUvdHJhbnNsYXRpb24nO1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvY29sbGVjdGlvbi9tYXAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO1xuXG4vKipcbiogQWN0aW9uIG9uIHRoZSB0b3BpYyBjbGljay5cbiogQHBhcmFtICB7U3RyaW5nfSBrZXkgIHRvcGljIGtleVxuKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgIENsaWNrIGhhbmRsZXJcbiovXG5mdW5jdGlvbiB0b3BpY0NsaWNrSGFuZGxlcihrZXksIHRvcGljQ2xpY2tBY3Rpb24pIHtcbiAgICB0b3BpY0NsaWNrQWN0aW9uKGtleSk7XG59XG5cbmZ1bmN0aW9uIFRvcGljRGlzcGxheWVyKHsgZGlzcGxheUxhYmVscywgdG9waWNMaXN0LCB0b3BpY0NsaWNrQWN0aW9uIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J3RvcGljLWRpc3BsYXllcic+XG4gICAgICAgICAgICB7bWFwKHRvcGljTGlzdCwgKHRvcGljLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZGlzcGxheUxhYmVscyA/IGAke3RyYW5zbGF0ZSh0b3BpYy5sYWJlbCl9OiAke3RyYW5zbGF0ZSh0b3BpYy52YWx1ZSl9YCA6IHRyYW5zbGF0ZSh0b3BpYy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DbGljaz17KCkgPT4geyB0b3BpY0NsaWNrSGFuZGxlcihrZXksIHRvcGljQ2xpY2tBY3Rpb24pIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdjbGVhcidcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Ub3BpY0Rpc3BsYXllci5kaXNwbGF5TmFtZSA9ICdUb3BpY0Rpc3BsYXllcic7XG5cblRvcGljRGlzcGxheWVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZTogdW5kZWZpbmVkLCAvLyBDb21wb25lbnQgY3NzIHN0eWxlLlxuICAgIHRvcGljQ2xpY2tBY3Rpb24oKSB7IH0sIC8vIEFjdGlvbiB3aGVuIGNsaWNrIG9uIHRvcGljXG4gICAgdG9waWNMaXN0OiB7fSwgLy8ge3RvcGljMTogXCJMYWJlbCBvZiB0b3BpYyBvbmVcIiwgdG9waWMyOlwiTGFiZWwgb2YgdG9waWMgMlwifSBMaXN0IGYgdG9waWNzLFxuICAgIGRpc3BsYXlMYWJlbHM6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcGljRGlzcGxheWVyO1xuIl19