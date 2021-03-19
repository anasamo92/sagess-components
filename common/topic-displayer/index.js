'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _translation = require('sagess-core/translation');

var _map = require('lodash/collection/map');

var _map2 = _interopRequireDefault(_map);

var _action = require('../button/action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicDisplayer = {
    displayName: 'TopicDisplayer',

    /**
     * Default props.
     * @returns {object} default props.
     */
    getDefaultProps: function getDefaultProps() {
        return {
            style: undefined, // Component css style.
            topicClickAction: function topicClickAction() {},
            // Action when click on topic
            topicList: {}, // {topic1: "Label of topic one", topic2:"Label of topic 2"} List f topics,
            displayLabels: false
        };
    },
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use sagess-components/components/topic-displayer instead');
    },

    /**
     * Render the component.
     * @returns {JSX} Htm code.
     */
    render: function render() {
        var _this = this;

        var _props = this.props,
            displayLabels = _props.displayLabels,
            topicList = _props.topicList;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'topic-displayer' },
            (0, _map2.default)(topicList, function (topic, key) {
                var text = displayLabels ? (0, _translation.translate)(topic.label) + ': ' + (0, _translation.translate)(topic.value) : (0, _translation.translate)(topic.value);
                return _react2.default.createElement(_action.component, {
                    handleOnClick: _this.topicClickHandler(key),
                    icon: 'clear',
                    key: key,
                    label: text
                });
            })
        );
    },


    /**
     * Action on the topic click.
     * @param  {String} key  topic key
     * @return {Function}     Click handler
     */
    topicClickHandler: function topicClickHandler(key) {
        var _this2 = this;

        return function (event) {
            if (event) {
                event.preventDefault();
            }
            _this2.props.topicClickAction(key);
        };
    }
};
// Components

var _builder = (0, _builder3.default)(TopicDisplayer),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiVG9waWNEaXNwbGF5ZXIiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInN0eWxlIiwidW5kZWZpbmVkIiwidG9waWNDbGlja0FjdGlvbiIsInRvcGljTGlzdCIsImRpc3BsYXlMYWJlbHMiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb25zb2xlIiwid2FybiIsInJlbmRlciIsInByb3BzIiwidG9waWMiLCJrZXkiLCJ0ZXh0IiwibGFiZWwiLCJ2YWx1ZSIsInRvcGljQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7QUFFQSxJQUFNQSxpQkFBaUI7QUFDbkJDLGlCQUFhLGdCQURNOztBQUduQjs7OztBQUlBQyxtQkFQbUIsNkJBT0Q7QUFDZCxlQUFPO0FBQ0hDLG1CQUFPQyxTQURKLEVBQ2U7QUFDbEJDLDRCQUZHLDhCQUVnQixDQUFHLENBRm5CO0FBRXFCO0FBQ3hCQyx1QkFBVyxFQUhSLEVBR1k7QUFDZkMsMkJBQWU7QUFKWixTQUFQO0FBTUgsS0Fka0I7QUFlbkJDLHNCQWZtQixnQ0FlRTtBQUNqQkMsZ0JBQVFDLElBQVIsQ0FBYSx1SEFBYjtBQUNILEtBakJrQjs7QUFrQm5COzs7O0FBSUFDLFVBdEJtQixvQkFzQlY7QUFBQTs7QUFBQSxxQkFDZ0MsS0FBS0MsS0FEckM7QUFBQSxZQUNHTCxhQURILFVBQ0dBLGFBREg7QUFBQSxZQUNrQkQsU0FEbEIsVUFDa0JBLFNBRGxCOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssY0FBVyxpQkFBaEI7QUFDSywrQkFBSUEsU0FBSixFQUFlLFVBQUNPLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUM1QixvQkFBTUMsT0FBT1IsZ0JBQW1CLDRCQUFVTSxNQUFNRyxLQUFoQixDQUFuQixVQUE4Qyw0QkFBVUgsTUFBTUksS0FBaEIsQ0FBOUMsR0FBeUUsNEJBQVVKLE1BQU1JLEtBQWhCLENBQXRGO0FBQ0EsdUJBQ0ksOEJBQUMsaUJBQUQ7QUFDSSxtQ0FBZSxNQUFLQyxpQkFBTCxDQUF1QkosR0FBdkIsQ0FEbkI7QUFFSSwwQkFBSyxPQUZUO0FBR0kseUJBQUtBLEdBSFQ7QUFJSSwyQkFBT0M7QUFKWCxrQkFESjtBQVFILGFBVkE7QUFETCxTQURKO0FBZUgsS0F2Q2tCOzs7QUF5Q25COzs7OztBQUtBRyxxQkE5Q21CLDZCQThDREosR0E5Q0MsRUE4Q0k7QUFBQTs7QUFDbkIsZUFBTyxVQUFDSyxLQUFELEVBQVc7QUFDZCxnQkFBSUEsS0FBSixFQUFXO0FBQ1BBLHNCQUFNQyxjQUFOO0FBQ0g7QUFDRCxtQkFBS1IsS0FBTCxDQUFXUCxnQkFBWCxDQUE0QlMsR0FBNUI7QUFDSCxTQUxEO0FBTUg7QUFyRGtCLENBQXZCO0FBSEE7O2VBMkQ2Qix1QkFBUWQsY0FBUixDO0lBQXJCcUIsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVpbGRlciBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdzYWdlc3MtY29yZS90cmFuc2xhdGlvbic7XG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9jb2xsZWN0aW9uL21hcCc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBjb21wb25lbnQgYXMgQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9uL2FjdGlvbic7XG5cbmNvbnN0IFRvcGljRGlzcGxheWVyID0ge1xuICAgIGRpc3BsYXlOYW1lOiAnVG9waWNEaXNwbGF5ZXInLFxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBwcm9wcy5cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBkZWZhdWx0IHByb3BzLlxuICAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0eWxlOiB1bmRlZmluZWQsIC8vIENvbXBvbmVudCBjc3Mgc3R5bGUuXG4gICAgICAgICAgICB0b3BpY0NsaWNrQWN0aW9uKCkgeyB9LCAvLyBBY3Rpb24gd2hlbiBjbGljayBvbiB0b3BpY1xuICAgICAgICAgICAgdG9waWNMaXN0OiB7fSwgLy8ge3RvcGljMTogXCJMYWJlbCBvZiB0b3BpYyBvbmVcIiwgdG9waWMyOlwiTGFiZWwgb2YgdG9waWMgMlwifSBMaXN0IGYgdG9waWNzLFxuICAgICAgICAgICAgZGlzcGxheUxhYmVsczogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTYWdlc3NDb21wb25lbnRzIDIuMi4wOiB0aGlzIGNvbXBvbmVudCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIHNhZ2Vzcy1jb21wb25lbnRzL2NvbXBvbmVudHMvdG9waWMtZGlzcGxheWVyIGluc3RlYWQnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY29tcG9uZW50LlxuICAgICAqIEByZXR1cm5zIHtKU1h9IEh0bSBjb2RlLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBkaXNwbGF5TGFiZWxzLCB0b3BpY0xpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J3RvcGljLWRpc3BsYXllcic+XG4gICAgICAgICAgICAgICAge21hcCh0b3BpY0xpc3QsICh0b3BpYywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkaXNwbGF5TGFiZWxzID8gYCR7dHJhbnNsYXRlKHRvcGljLmxhYmVsKX06ICR7dHJhbnNsYXRlKHRvcGljLnZhbHVlKX1gIDogdHJhbnNsYXRlKHRvcGljLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPbkNsaWNrPXt0aGlzLnRvcGljQ2xpY2tIYW5kbGVyKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nY2xlYXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFjdGlvbiBvbiB0aGUgdG9waWMgY2xpY2suXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBrZXkgIHRvcGljIGtleVxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgQ2xpY2sgaGFuZGxlclxuICAgICAqL1xuICAgIHRvcGljQ2xpY2tIYW5kbGVyKGtleSkge1xuICAgICAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b3BpY0NsaWNrQWN0aW9uKGtleSk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKFRvcGljRGlzcGxheWVyKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19