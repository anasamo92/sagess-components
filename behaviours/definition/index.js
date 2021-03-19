'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = definitionBehaviour;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isNull = require('lodash/lang/isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _isUndefined = require('lodash/lang/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isArray = require('lodash/lang/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isString = require('lodash/lang/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isObject = require('lodash/lang/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _builder = require('sagess-core/definition/entity/builder');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Dependencies


// Import from sagess-core
// We need to investigate why import {getEntityInformations} from 'sagess-core/entity/builder' didn't work, maybe an ES2015 related issue with babel.
// Maybe because the node modules reads from the builded lib  instead of src.


/**
 * This function is a behaviour. It aims to comment a component to a definition.
 *  - A definition is related to the data model
 *  - Each field of the domain have a definition which contains its domain and the fact that it is required ot not.
 *  - The definitions of your application should have been set using `sagess-core/definition/entity/container/setEntityConfiguration`
 * @param  {string | array} definitionPath - A string or an array of the definition path to the configuration.
 * @param  {object} additionalDefinition - If you need to override a definition for a specific component, you can use this object.
 * @return {function} - A function to commect a component to a definition.
 * @example please read the end of the file.
 */
function definitionBehaviour(definitionPath, additionalDefinition) {

    // Arguments validation
    if ((0, _isUndefined2.default)(definitionPath) || (0, _isNull2.default)(definitionPath) || !(0, _isString2.default)(definitionPath) && !(0, _isArray2.default)(definitionPath)) {
        throw new Error('the definition path should be givent in order to to know the domain of your entity property.');
    }
    if (!(0, _isUndefined2.default)(additionalDefinition) && !(0, _isNull2.default)(additionalDefinition) && !(0, _isObject2.default)(additionalDefinition)) {
        throw new Error('The additional definition if is defined should be an object');
    }

    // Definition Construction
    var definitionConf = (0, _isArray2.default)(definitionPath) ? definitionPath : [definitionPath];
    var definition = definitionConf.reduce(function (valeurPrecedente, valeurCourante) {
        return Object.assign({}, valeurPrecedente, (0, _builder.getEntityInformations)(definitionPath, additionalDefinition));
    }, {});

    // annotation
    // The wrapped component should have a props containing the definition object.
    return function wrapComponentWithDefinition(ComponentToWrap) {

        // Save the display name for later
        var displayName = ComponentToWrap.displayName || 'Component';

        // TODO: @reviewer
        // It could have been nice to have a pure function for this.
        // Except for the tests, do we need a React.Component class and a ref.
        // I think it is safer to have it instead of a pure function.
        // Maybe we should have a look on `ownPropertyDescriptor` instead of wrapping class aruoud component for this case.
        // But having everything as props is really clean.

        // # Wrapped component
        //        function DefinitionWrappedComponent(props) {
        //            return <ComponentToWrap definition={definition} {...props}/>;
        //        }

        /**
         * This class stands for the wrapped component with its props plus the definition object as props.
         * It has a reference to the wrapped component in `this.refs.wrappedComponent`
         */

        var DefinitionWrappedComponent = function (_Component) {
            _inherits(DefinitionWrappedComponent, _Component);

            function DefinitionWrappedComponent() {
                _classCallCheck(this, DefinitionWrappedComponent);

                return _possibleConstructorReturn(this, (DefinitionWrappedComponent.__proto__ || Object.getPrototypeOf(DefinitionWrappedComponent)).apply(this, arguments));
            }

            _createClass(DefinitionWrappedComponent, [{
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(ComponentToWrap, Object.assign({ ref: 'wrappedComponent', definition: definition }, this.props));
                }
            }]);

            return DefinitionWrappedComponent;
        }(_react.Component);

        // Add with definition to the name of the component.


        DefinitionWrappedComponent.displayName = displayName + 'WithDefinition';

        return DefinitionWrappedComponent;
    };
}

/*
 Example
// ES6

class MyComponent{
    render(){
      return <div>{JSON.stringify(this.props)}</div>;

    }
}
// The annotation is just a function, you compose your component with a definition builder.
const MyComponentWithDefinition = definition('path.to.my.awesome.entity')(MyComponent);

 // ES7

@definition('path.to.my.awesome.entity')
class MyComponent{
    render(){
      return <div>{JSON.stringify(this.props)}</div>;

    }
}

*/

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiZGVmaW5pdGlvbkJlaGF2aW91ciIsImRlZmluaXRpb25QYXRoIiwiYWRkaXRpb25hbERlZmluaXRpb24iLCJFcnJvciIsImRlZmluaXRpb25Db25mIiwiZGVmaW5pdGlvbiIsInJlZHVjZSIsInZhbGV1clByZWNlZGVudGUiLCJ2YWxldXJDb3VyYW50ZSIsIndyYXBDb21wb25lbnRXaXRoRGVmaW5pdGlvbiIsIkNvbXBvbmVudFRvV3JhcCIsImRpc3BsYXlOYW1lIiwiRGVmaW5pdGlvbldyYXBwZWRDb21wb25lbnQiLCJwcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBd0J3QkEsbUI7O0FBdkJ4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFLQTs7Ozs7Ozs7K2VBWEE7OztBQVFBO0FBQ0E7QUFDQTs7O0FBSUE7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxtQkFBVCxDQUE2QkMsY0FBN0IsRUFBNkNDLG9CQUE3QyxFQUFtRTs7QUFFOUU7QUFDQSxRQUFJLDJCQUFZRCxjQUFaLEtBQStCLHNCQUFPQSxjQUFQLENBQS9CLElBQTBELENBQUMsd0JBQVNBLGNBQVQsQ0FBRCxJQUE2QixDQUFDLHVCQUFRQSxjQUFSLENBQTVGLEVBQXNIO0FBQ2xILGNBQU0sSUFBSUUsS0FBSixDQUFVLDhGQUFWLENBQU47QUFDSDtBQUNELFFBQUksQ0FBQywyQkFBWUQsb0JBQVosQ0FBRCxJQUFzQyxDQUFDLHNCQUFPQSxvQkFBUCxDQUF2QyxJQUF1RSxDQUFDLHdCQUFTQSxvQkFBVCxDQUE1RSxFQUE0RztBQUN4RyxjQUFNLElBQUlDLEtBQUosQ0FBVSw2REFBVixDQUFOO0FBQ0g7O0FBRUQ7QUFDQSxRQUFNQyxpQkFBaUIsdUJBQVFILGNBQVIsSUFBMEJBLGNBQTFCLEdBQTJDLENBQUNBLGNBQUQsQ0FBbEU7QUFDQSxRQUFNSSxhQUFhRCxlQUFlRSxNQUFmLENBQXNCLFVBQUNDLGdCQUFELEVBQW1CQyxjQUFuQjtBQUFBLGlDQUE0Q0QsZ0JBQTVDLEVBQWlFLG9DQUFzQk4sY0FBdEIsRUFBc0NDLG9CQUF0QyxDQUFqRTtBQUFBLEtBQXRCLEVBQXVKLEVBQXZKLENBQW5COztBQUVBO0FBQ0E7QUFDQSxXQUFPLFNBQVNPLDJCQUFULENBQXFDQyxlQUFyQyxFQUFzRDs7QUFFekQ7QUFDQSxZQUFNQyxjQUFjRCxnQkFBZ0JDLFdBQWhCLElBQStCLFdBQW5EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFqQnlELFlBcUJuREMsMEJBckJtRDtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEseUNBc0I1QztBQUNMLDJCQUFPLDhCQUFDLGVBQUQsa0JBQWlCLEtBQUksa0JBQXJCLEVBQXdDLFlBQVlQLFVBQXBELElBQW9FLEtBQUtRLEtBQXpFLEVBQVA7QUFDSDtBQXhCb0Q7O0FBQUE7QUFBQSxVQXFCaEJDLGdCQXJCZ0I7O0FBMkJ6RDs7O0FBQ0FGLG1DQUEyQkQsV0FBM0IsR0FBNENBLFdBQTVDOztBQUVBLGVBQU9DLDBCQUFQO0FBQ0gsS0EvQkQ7QUFnQ0g7O0FBRUQiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRGVwZW5kZW5jaWVzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNOdWxsIGZyb20gJ2xvZGFzaC9sYW5nL2lzTnVsbCc7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnbG9kYXNoL2xhbmcvaXNVbmRlZmluZWQnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnbG9kYXNoL2xhbmcvaXNBcnJheSc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2xhbmcvaXNTdHJpbmcnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJ2xvZGFzaC9sYW5nL2lzT2JqZWN0JztcblxuLy8gSW1wb3J0IGZyb20gc2FnZXNzLWNvcmVcbi8vIFdlIG5lZWQgdG8gaW52ZXN0aWdhdGUgd2h5IGltcG9ydCB7Z2V0RW50aXR5SW5mb3JtYXRpb25zfSBmcm9tICdzYWdlc3MtY29yZS9lbnRpdHkvYnVpbGRlcicgZGlkbid0IHdvcmssIG1heWJlIGFuIEVTMjAxNSByZWxhdGVkIGlzc3VlIHdpdGggYmFiZWwuXG4vLyBNYXliZSBiZWNhdXNlIHRoZSBub2RlIG1vZHVsZXMgcmVhZHMgZnJvbSB0aGUgYnVpbGRlZCBsaWIgIGluc3RlYWQgb2Ygc3JjLlxuaW1wb3J0IHsgZ2V0RW50aXR5SW5mb3JtYXRpb25zIH0gZnJvbSAnc2FnZXNzLWNvcmUvZGVmaW5pdGlvbi9lbnRpdHkvYnVpbGRlcic7XG5cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGEgYmVoYXZpb3VyLiBJdCBhaW1zIHRvIGNvbW1lbnQgYSBjb21wb25lbnQgdG8gYSBkZWZpbml0aW9uLlxuICogIC0gQSBkZWZpbml0aW9uIGlzIHJlbGF0ZWQgdG8gdGhlIGRhdGEgbW9kZWxcbiAqICAtIEVhY2ggZmllbGQgb2YgdGhlIGRvbWFpbiBoYXZlIGEgZGVmaW5pdGlvbiB3aGljaCBjb250YWlucyBpdHMgZG9tYWluIGFuZCB0aGUgZmFjdCB0aGF0IGl0IGlzIHJlcXVpcmVkIG90IG5vdC5cbiAqICAtIFRoZSBkZWZpbml0aW9ucyBvZiB5b3VyIGFwcGxpY2F0aW9uIHNob3VsZCBoYXZlIGJlZW4gc2V0IHVzaW5nIGBzYWdlc3MtY29yZS9kZWZpbml0aW9uL2VudGl0eS9jb250YWluZXIvc2V0RW50aXR5Q29uZmlndXJhdGlvbmBcbiAqIEBwYXJhbSAge3N0cmluZyB8IGFycmF5fSBkZWZpbml0aW9uUGF0aCAtIEEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHRoZSBkZWZpbml0aW9uIHBhdGggdG8gdGhlIGNvbmZpZ3VyYXRpb24uXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFkZGl0aW9uYWxEZWZpbml0aW9uIC0gSWYgeW91IG5lZWQgdG8gb3ZlcnJpZGUgYSBkZWZpbml0aW9uIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCwgeW91IGNhbiB1c2UgdGhpcyBvYmplY3QuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gLSBBIGZ1bmN0aW9uIHRvIGNvbW1lY3QgYSBjb21wb25lbnQgdG8gYSBkZWZpbml0aW9uLlxuICogQGV4YW1wbGUgcGxlYXNlIHJlYWQgdGhlIGVuZCBvZiB0aGUgZmlsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmaW5pdGlvbkJlaGF2aW91cihkZWZpbml0aW9uUGF0aCwgYWRkaXRpb25hbERlZmluaXRpb24pIHtcblxuICAgIC8vIEFyZ3VtZW50cyB2YWxpZGF0aW9uXG4gICAgaWYgKGlzVW5kZWZpbmVkKGRlZmluaXRpb25QYXRoKSB8fCBpc051bGwoZGVmaW5pdGlvblBhdGgpIHx8ICghaXNTdHJpbmcoZGVmaW5pdGlvblBhdGgpICYmICFpc0FycmF5KGRlZmluaXRpb25QYXRoKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgZGVmaW5pdGlvbiBwYXRoIHNob3VsZCBiZSBnaXZlbnQgaW4gb3JkZXIgdG8gdG8ga25vdyB0aGUgZG9tYWluIG9mIHlvdXIgZW50aXR5IHByb3BlcnR5LicpO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGFkZGl0aW9uYWxEZWZpbml0aW9uKSAmJiAhaXNOdWxsKGFkZGl0aW9uYWxEZWZpbml0aW9uKSAmJiAhaXNPYmplY3QoYWRkaXRpb25hbERlZmluaXRpb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFkZGl0aW9uYWwgZGVmaW5pdGlvbiBpZiBpcyBkZWZpbmVkIHNob3VsZCBiZSBhbiBvYmplY3QnKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbml0aW9uIENvbnN0cnVjdGlvblxuICAgIGNvbnN0IGRlZmluaXRpb25Db25mID0gaXNBcnJheShkZWZpbml0aW9uUGF0aCkgPyBkZWZpbml0aW9uUGF0aCA6IFtkZWZpbml0aW9uUGF0aF07XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IGRlZmluaXRpb25Db25mLnJlZHVjZSgodmFsZXVyUHJlY2VkZW50ZSwgdmFsZXVyQ291cmFudGUpID0+ICh7IC4uLnZhbGV1clByZWNlZGVudGUsIC4uLmdldEVudGl0eUluZm9ybWF0aW9ucyhkZWZpbml0aW9uUGF0aCwgYWRkaXRpb25hbERlZmluaXRpb24pIH0pLCB7fSk7XG5cbiAgICAvLyBhbm5vdGF0aW9uXG4gICAgLy8gVGhlIHdyYXBwZWQgY29tcG9uZW50IHNob3VsZCBoYXZlIGEgcHJvcHMgY29udGFpbmluZyB0aGUgZGVmaW5pdGlvbiBvYmplY3QuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBDb21wb25lbnRXaXRoRGVmaW5pdGlvbihDb21wb25lbnRUb1dyYXApIHtcblxuICAgICAgICAvLyBTYXZlIHRoZSBkaXNwbGF5IG5hbWUgZm9yIGxhdGVyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gQ29tcG9uZW50VG9XcmFwLmRpc3BsYXlOYW1lIHx8ICdDb21wb25lbnQnO1xuXG4gICAgICAgIC8vIFRPRE86IEByZXZpZXdlclxuICAgICAgICAvLyBJdCBjb3VsZCBoYXZlIGJlZW4gbmljZSB0byBoYXZlIGEgcHVyZSBmdW5jdGlvbiBmb3IgdGhpcy5cbiAgICAgICAgLy8gRXhjZXB0IGZvciB0aGUgdGVzdHMsIGRvIHdlIG5lZWQgYSBSZWFjdC5Db21wb25lbnQgY2xhc3MgYW5kIGEgcmVmLlxuICAgICAgICAvLyBJIHRoaW5rIGl0IGlzIHNhZmVyIHRvIGhhdmUgaXQgaW5zdGVhZCBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gICAgICAgIC8vIE1heWJlIHdlIHNob3VsZCBoYXZlIGEgbG9vayBvbiBgb3duUHJvcGVydHlEZXNjcmlwdG9yYCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGNsYXNzIGFydW91ZCBjb21wb25lbnQgZm9yIHRoaXMgY2FzZS5cbiAgICAgICAgLy8gQnV0IGhhdmluZyBldmVyeXRoaW5nIGFzIHByb3BzIGlzIHJlYWxseSBjbGVhbi5cblxuICAgICAgICAvLyAjIFdyYXBwZWQgY29tcG9uZW50XG4gICAgICAgIC8vICAgICAgICBmdW5jdGlvbiBEZWZpbml0aW9uV3JhcHBlZENvbXBvbmVudChwcm9wcykge1xuICAgICAgICAvLyAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50VG9XcmFwIGRlZmluaXRpb249e2RlZmluaXRpb259IHsuLi5wcm9wc30vPjtcbiAgICAgICAgLy8gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBjbGFzcyBzdGFuZHMgZm9yIHRoZSB3cmFwcGVkIGNvbXBvbmVudCB3aXRoIGl0cyBwcm9wcyBwbHVzIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhcyBwcm9wcy5cbiAgICAgICAgICogSXQgaGFzIGEgcmVmZXJlbmNlIHRvIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBpbiBgdGhpcy5yZWZzLndyYXBwZWRDb21wb25lbnRgXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzcyBEZWZpbml0aW9uV3JhcHBlZENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnRUb1dyYXAgcmVmPSd3cmFwcGVkQ29tcG9uZW50JyBkZWZpbml0aW9uPXtkZWZpbml0aW9ufSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgd2l0aCBkZWZpbml0aW9uIHRvIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICAgIERlZmluaXRpb25XcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gYCR7ZGlzcGxheU5hbWV9V2l0aERlZmluaXRpb25gO1xuXG4gICAgICAgIHJldHVybiBEZWZpbml0aW9uV3JhcHBlZENvbXBvbmVudDtcbiAgICB9XG59XG5cbi8qXG4gRXhhbXBsZVxuLy8gRVM2XG5cbmNsYXNzIE15Q29tcG9uZW50e1xuICAgIHJlbmRlcigpe1xuICAgICAgcmV0dXJuIDxkaXY+e0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpfTwvZGl2PjtcblxuICAgIH1cbn1cbi8vIFRoZSBhbm5vdGF0aW9uIGlzIGp1c3QgYSBmdW5jdGlvbiwgeW91IGNvbXBvc2UgeW91ciBjb21wb25lbnQgd2l0aCBhIGRlZmluaXRpb24gYnVpbGRlci5cbmNvbnN0IE15Q29tcG9uZW50V2l0aERlZmluaXRpb24gPSBkZWZpbml0aW9uKCdwYXRoLnRvLm15LmF3ZXNvbWUuZW50aXR5JykoTXlDb21wb25lbnQpO1xuXG4gLy8gRVM3XG5cbkBkZWZpbml0aW9uKCdwYXRoLnRvLm15LmF3ZXNvbWUuZW50aXR5JylcbmNsYXNzIE15Q29tcG9uZW50e1xuICAgIHJlbmRlcigpe1xuICAgICAgcmV0dXJuIDxkaXY+e0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpfTwvZGl2PjtcblxuICAgIH1cbn1cblxuKi9cbiJdfQ==