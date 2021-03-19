'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _applicationState = require('./mixin/application-state');

var _applicationState2 = _interopRequireDefault(_applicationState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headerMixin = {
    mixins: [_applicationState2.default],
    /** @inheriteddoc */
    getDefaultProps: function getDefaultProps() {
        return {
            /**
            * Selector for the domNode on which the scroll is attached.
            * @type {string}
            */
            scrollTargetSelector: undefined,
            /**
            * Default style of the component.s
            * @type {Object}
            */
            style: {},
            /**
            * Default size of the bar. Should be present in sizeMap.
            * @type {String}
            */
            size: 'medium',
            /**
            * Map which defines sizes exists for the components and their border.
            * @type {Object}
            */
            sizeMap: {
                small: {
                    sizeBorder: 5
                },
                medium: {
                    sizeBorder: 0
                }
            },
            /**
            * A way to redefine the process size of the element.
            * @type {function}
            */
            processSize: undefined,
            /**
            * A handler to notify other elements that the size has changed.
            * @type {[type]}
            */
            notifySizeChange: undefined
        };
    },

    /** @inheritdoc */
    propTypes: {
        size: (0, _types2.default)('string'),
        scrollTargetSelector: (0, _types2.default)('string'),
        style: (0, _types2.default)('object'),
        sizeMap: (0, _types2.default)('object'),
        notifySizeChange: (0, _types2.default)(['func', 'object']),
        processSize: (0, _types2.default)(['func', 'object'])
    },
    /** @inheritdoc */
    getInitialState: function getInitialState() {
        /** @inheriteddoc */
        return {
            open: this.props.open,
            size: this.props.size
        };
    },


    /** @inheriteddoc */
    componentWillMount: function componentWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use components from sagess-components/components/layout folder');
        this._processSizes();
        this.scrollTargetNode = this.props.scrollTargetSelector && this.props.scrollTargetSelector !== '' ? document.querySelector(this.props.scrollTargetSelector) : window;
    },

    /** @inheriteddoc */
    componentDidMount: function componentDidMount() {
        this.attachScrollListener();
    },

    /** @inheriteddoc */
    componentWillUnmount: function componentWillUnmount() {
        this.detachScrollListener();
        this.appStateWillUnmount();
    },

    /**
    * Process the sizeMap in order to sort them by border size and create a sizes array.
    */
    _processSizes: function _processSizes() {
        var sizes = [];
        for (var sz in this.props.sizeMap) {
            sizes.push({ name: sz, sizeBorder: this.props.sizeMap[sz].sizeBorder });
        }
        this.sizes = sizes.sort(function (a, b) {
            return a.sizeBorder - b.sizeBorder;
        }).map(function (elt) {
            return elt.name;
        });
    },

    /**
    * Get the current element size.
    * @returns {int} - The size in pixel of the current element in the browser.
    */
    _processElementSize: function _processElementSize() {
        return _reactDom2.default.findDOMNode(this).offsetHeight;
    },

    /**
    * Get the scroll position from the top of the screen.
    * @returns {int} - The position in pixel from the top of the scroll container.
    */
    _getScrollPosition: function _getScrollPosition() {
        //The pageYOffset is done in order to deal with the window case. Another possibility would have been to use window.docment.body as a node for scrollTop.
        //But the scrollListener on the page is only on the window element.
        return this.scrollTargetNode.pageYOffset !== undefined ? this.scrollTargetNode.pageYOffset : this.scrollTargetNode.scrollTop;
    },

    /**
    * Notify other elements that the size has changed.
    */
    _notifySizeChange: function _notifySizeChange() {
        if (this.props.notifySizeChange) {
            this.props.notifySizeChange(this.state.size);
        }
    },

    /**
    * Change the size of the bar.
    * @param {string} newSize - The new size.
    * @returns {undefined} -  A way to stop the propagation.
    */
    _changeSize: function _changeSize(newSize) {
        // Todo: see if the notification of the changed size can be called before.
        return this.setState({ size: newSize }, this._notifySizeChange);
    },

    /**
    * Process the size in order to know if the size should be changed depending on the scroll position and the border of each zone.
    * @returns {object} - The return is used to stop the treatement.
    */
    _processSize: function _processSize() {
        //Allow the user to redefine the process size function.
        if (this.props.processSize) {
            return this.props.processSize();
        }
        var currentIndex = this.sizes.indexOf(this.state.size);
        var currentScrollPosition = this._getScrollPosition();
        //Process increase treatement.
        if (currentIndex < this.sizes.length - 1) {
            var increaseBorder = this.props.sizeMap[this.sizes[currentIndex + 1]].sizeBorder;
            if (currentScrollPosition > increaseBorder) {
                return this._changeSize(this.sizes[currentIndex + 1]);
            }
        }
        //Process decrease treatement.
        if (currentIndex > 0) {
            var decreaseBorder = this.props.sizeMap[this.sizes[currentIndex - 1]].sizeBorder;
            if (currentScrollPosition <= decreaseBorder) {
                return this._changeSize(this.sizes[currentIndex - 1]);
            }
        }
    },

    /**
    * Handle the scroll event in order to resize the page.
    * @param {object} event [description]
    */
    handleScroll: function handleScroll(event) {
        this._processSize();
    },


    /**
    * Attach scroll listener on the scroll target node.
    */
    attachScrollListener: function attachScrollListener() {
        this.scrollTargetNode.addEventListener('scroll', this.handleScroll);
        this.scrollTargetNode.addEventListener('resize', this.handleScroll);
    },


    /**
    * Detach scroll handler on the scroll target node.
    */
    detachScrollListener: function detachScrollListener() {
        this.scrollTargetNode.removeEventListener('scroll', this.handleScroll);
        this.scrollTargetNode.removeEventListener('resize', this.handleScroll);
    },

    /** @inheriteddoc */
    render: function render() {
        var className = 'header-' + this.state.size;
        return _react2.default.createElement(
            'header',
            { className: className, 'data-focus': 'header', 'data-route': this.state.route, 'data-mode': this.state.mode, 'data-size': this.state.size },
            this.props.children
        );
    }
};

var _builder = (0, _builder3.default)(headerMixin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiaGVhZGVyTWl4aW4iLCJtaXhpbnMiLCJhcHBsaWNhdGlvblN0YXRlQmVoYXZpb3VyIiwiZ2V0RGVmYXVsdFByb3BzIiwic2Nyb2xsVGFyZ2V0U2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJzdHlsZSIsInNpemUiLCJzaXplTWFwIiwic21hbGwiLCJzaXplQm9yZGVyIiwibWVkaXVtIiwicHJvY2Vzc1NpemUiLCJub3RpZnlTaXplQ2hhbmdlIiwicHJvcFR5cGVzIiwiZ2V0SW5pdGlhbFN0YXRlIiwib3BlbiIsInByb3BzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsIndhcm4iLCJfcHJvY2Vzc1NpemVzIiwic2Nyb2xsVGFyZ2V0Tm9kZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsImNvbXBvbmVudERpZE1vdW50IiwiYXR0YWNoU2Nyb2xsTGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRldGFjaFNjcm9sbExpc3RlbmVyIiwiYXBwU3RhdGVXaWxsVW5tb3VudCIsInNpemVzIiwic3oiLCJwdXNoIiwibmFtZSIsInNvcnQiLCJhIiwiYiIsIm1hcCIsImVsdCIsIl9wcm9jZXNzRWxlbWVudFNpemUiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwib2Zmc2V0SGVpZ2h0IiwiX2dldFNjcm9sbFBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJfbm90aWZ5U2l6ZUNoYW5nZSIsInN0YXRlIiwiX2NoYW5nZVNpemUiLCJuZXdTaXplIiwic2V0U3RhdGUiLCJfcHJvY2Vzc1NpemUiLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwiY3VycmVudFNjcm9sbFBvc2l0aW9uIiwibGVuZ3RoIiwiaW5jcmVhc2VCb3JkZXIiLCJkZWNyZWFzZUJvcmRlciIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJyb3V0ZSIsIm1vZGUiLCJjaGlsZHJlbiIsIm1peGluIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYztBQUNoQkMsWUFBUSxDQUFDQywwQkFBRCxDQURRO0FBRWhCO0FBQ0FDLG1CQUhnQiw2QkFHRTtBQUNkLGVBQU87QUFDSDs7OztBQUlBQyxrQ0FBc0JDLFNBTG5CO0FBTUg7Ozs7QUFJQUMsbUJBQU8sRUFWSjtBQVdIOzs7O0FBSUFDLGtCQUFNLFFBZkg7QUFnQkg7Ozs7QUFJQUMscUJBQVM7QUFDTEMsdUJBQU87QUFDSEMsZ0NBQVk7QUFEVCxpQkFERjtBQUlMQyx3QkFBUTtBQUNKRCxnQ0FBWTtBQURSO0FBSkgsYUFwQk47QUE0Qkg7Ozs7QUFJQUUseUJBQWFQLFNBaENWO0FBaUNIOzs7O0FBSUFRLDhCQUFrQlI7QUFyQ2YsU0FBUDtBQXVDSCxLQTNDZTs7QUE0Q2hCO0FBQ0FTLGVBQVc7QUFDUFAsY0FBTSxxQkFBSyxRQUFMLENBREM7QUFFUEgsOEJBQXNCLHFCQUFLLFFBQUwsQ0FGZjtBQUdQRSxlQUFPLHFCQUFLLFFBQUwsQ0FIQTtBQUlQRSxpQkFBUyxxQkFBSyxRQUFMLENBSkY7QUFLUEssMEJBQWtCLHFCQUFLLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBTCxDQUxYO0FBTVBELHFCQUFhLHFCQUFLLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBTDtBQU5OLEtBN0NLO0FBcURoQjtBQUNBRyxtQkF0RGdCLDZCQXNERTtBQUNkO0FBQ0EsZUFBTztBQUNIQyxrQkFBTSxLQUFLQyxLQUFMLENBQVdELElBRGQ7QUFFSFQsa0JBQU0sS0FBS1UsS0FBTCxDQUFXVjtBQUZkLFNBQVA7QUFJSCxLQTVEZTs7O0FBOERoQjtBQUNBVyxzQkEvRGdCLGdDQStESztBQUNqQkMsZ0JBQVFDLElBQVIsQ0FBYSw2SEFBYjtBQUNBLGFBQUtDLGFB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U0FESjtBQUtIO0FBbkxlLENBQXBCOztlQXNMNkIsdUJBQVFuRSxXQUFSLEM7SUFBckJvRSxLLFlBQUFBLEs7SUFBT0MsUyxZQUFBQSxTOztRQUNORCxLLEdBQUFBLEs7UUFBT0MsUyxHQUFBQSxTO2tCQUNELEVBQUVELFlBQUYsRUFBU0Msb0JBQVQsRSIsImZpbGUiOiJzdHJpbmctbm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgdHlwZSBmcm9tICdzYWdlc3MtY29yZS9jb21wb25lbnQvdHlwZXMnO1xuXG5pbXBvcnQgYXBwbGljYXRpb25TdGF0ZUJlaGF2aW91ciBmcm9tICcuL21peGluL2FwcGxpY2F0aW9uLXN0YXRlJztcblxuY29uc3QgaGVhZGVyTWl4aW4gPSB7XG4gICAgbWl4aW5zOiBbYXBwbGljYXRpb25TdGF0ZUJlaGF2aW91cl0sXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogU2VsZWN0b3IgZm9yIHRoZSBkb21Ob2RlIG9uIHdoaWNoIHRoZSBzY3JvbGwgaXMgYXR0YWNoZWQuXG4gICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0U2VsZWN0b3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBEZWZhdWx0IHN0eWxlIG9mIHRoZSBjb21wb25lbnQuc1xuICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBEZWZhdWx0IHNpemUgb2YgdGhlIGJhci4gU2hvdWxkIGJlIHByZXNlbnQgaW4gc2l6ZU1hcC5cbiAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaXplOiAnbWVkaXVtJyxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBNYXAgd2hpY2ggZGVmaW5lcyBzaXplcyBleGlzdHMgZm9yIHRoZSBjb21wb25lbnRzIGFuZCB0aGVpciBib3JkZXIuXG4gICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2l6ZU1hcDoge1xuICAgICAgICAgICAgICAgIHNtYWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIHNpemVCb3JkZXI6IDVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lZGl1bToge1xuICAgICAgICAgICAgICAgICAgICBzaXplQm9yZGVyOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBBIHdheSB0byByZWRlZmluZSB0aGUgcHJvY2VzcyBzaXplIG9mIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHJvY2Vzc1NpemU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBBIGhhbmRsZXIgdG8gbm90aWZ5IG90aGVyIGVsZW1lbnRzIHRoYXQgdGhlIHNpemUgaGFzIGNoYW5nZWQuXG4gICAgICAgICAgICAqIEB0eXBlIHtbdHlwZV19XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgbm90aWZ5U2l6ZUNoYW5nZTogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgc2l6ZTogdHlwZSgnc3RyaW5nJyksXG4gICAgICAgIHNjcm9sbFRhcmdldFNlbGVjdG9yOiB0eXBlKCdzdHJpbmcnKSxcbiAgICAgICAgc3R5bGU6IHR5cGUoJ29iamVjdCcpLFxuICAgICAgICBzaXplTWFwOiB0eXBlKCdvYmplY3QnKSxcbiAgICAgICAgbm90aWZ5U2l6ZUNoYW5nZTogdHlwZShbJ2Z1bmMnLCAnb2JqZWN0J10pLFxuICAgICAgICBwcm9jZXNzU2l6ZTogdHlwZShbJ2Z1bmMnLCAnb2JqZWN0J10pXG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIC8qKiBAaW5oZXJpdGVkZG9jICovXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcGVuOiB0aGlzLnByb3BzLm9wZW4sXG4gICAgICAgICAgICBzaXplOiB0aGlzLnByb3BzLnNpemVcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqIEBpbmhlcml0ZWRkb2MgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2FnZXNzQ29tcG9uZW50cyAyLjIuMDogdGhpcyBjb21wb25lbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBjb21wb25lbnRzIGZyb20gc2FnZXNzLWNvbXBvbmVudHMvY29tcG9uZW50cy9sYXlvdXQgZm9sZGVyJyk7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NTaXplcygpO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldE5vZGUgPSAodGhpcy5wcm9wcy5zY3JvbGxUYXJnZXRTZWxlY3RvciAmJiB0aGlzLnByb3BzLnNjcm9sbFRhcmdldFNlbGVjdG9yICE9PSAnJylcbiAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnByb3BzLnNjcm9sbFRhcmdldFNlbGVjdG9yKVxuICAgICAgICAgICAgOiB3aW5kb3c7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRlZGRvYyAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmF0dGFjaFNjcm9sbExpc3RlbmVyKCk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRlZGRvYyAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmRldGFjaFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuYXBwU3RhdGVXaWxsVW5tb3VudCgpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBQcm9jZXNzIHRoZSBzaXplTWFwIGluIG9yZGVyIHRvIHNvcnQgdGhlbSBieSBib3JkZXIgc2l6ZSBhbmQgY3JlYXRlIGEgc2l6ZXMgYXJyYXkuXG4gICAgKi9cbiAgICBfcHJvY2Vzc1NpemVzKCkge1xuICAgICAgICBsZXQgc2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgc3ogaW4gdGhpcy5wcm9wcy5zaXplTWFwKSB7XG4gICAgICAgICAgICBzaXplcy5wdXNoKHsgbmFtZTogc3osIHNpemVCb3JkZXI6IHRoaXMucHJvcHMuc2l6ZU1hcFtzel0uc2l6ZUJvcmRlciB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNpemVzID0gc2l6ZXMuc29ydCgoYSwgYikgPT4gYS5zaXplQm9yZGVyIC0gYi5zaXplQm9yZGVyKS5tYXAoZWx0ID0+IGVsdC5uYW1lKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogR2V0IHRoZSBjdXJyZW50IGVsZW1lbnQgc2l6ZS5cbiAgICAqIEByZXR1cm5zIHtpbnR9IC0gVGhlIHNpemUgaW4gcGl4ZWwgb2YgdGhlIGN1cnJlbnQgZWxlbWVudCBpbiB0aGUgYnJvd3Nlci5cbiAgICAqL1xuICAgIF9wcm9jZXNzRWxlbWVudFNpemUoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5vZmZzZXRIZWlnaHQ7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIEdldCB0aGUgc2Nyb2xsIHBvc2l0aW9uIGZyb20gdGhlIHRvcCBvZiB0aGUgc2NyZWVuLlxuICAgICogQHJldHVybnMge2ludH0gLSBUaGUgcG9zaXRpb24gaW4gcGl4ZWwgZnJvbSB0aGUgdG9wIG9mIHRoZSBzY3JvbGwgY29udGFpbmVyLlxuICAgICovXG4gICAgX2dldFNjcm9sbFBvc2l0aW9uKCkge1xuICAgICAgICAvL1RoZSBwYWdlWU9mZnNldCBpcyBkb25lIGluIG9yZGVyIHRvIGRlYWwgd2l0aCB0aGUgd2luZG93IGNhc2UuIEFub3RoZXIgcG9zc2liaWxpdHkgd291bGQgaGF2ZSBiZWVuIHRvIHVzZSB3aW5kb3cuZG9jbWVudC5ib2R5IGFzIGEgbm9kZSBmb3Igc2Nyb2xsVG9wLlxuICAgICAgICAvL0J1dCB0aGUgc2Nyb2xsTGlzdGVuZXIgb24gdGhlIHBhZ2UgaXMgb25seSBvbiB0aGUgd2luZG93IGVsZW1lbnQuXG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRhcmdldE5vZGUucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IHRoaXMuc2Nyb2xsVGFyZ2V0Tm9kZS5wYWdlWU9mZnNldCA6IHRoaXMuc2Nyb2xsVGFyZ2V0Tm9kZS5zY3JvbGxUb3A7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIE5vdGlmeSBvdGhlciBlbGVtZW50cyB0aGF0IHRoZSBzaXplIGhhcyBjaGFuZ2VkLlxuICAgICovXG4gICAgX25vdGlmeVNpemVDaGFuZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5vdGlmeVNpemVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubm90aWZ5U2l6ZUNoYW5nZSh0aGlzLnN0YXRlLnNpemUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAqIENoYW5nZSB0aGUgc2l6ZSBvZiB0aGUgYmFyLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1NpemUgLSBUaGUgbmV3IHNpemUuXG4gICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfSAtICBBIHdheSB0byBzdG9wIHRoZSBwcm9wYWdhdGlvbi5cbiAgICAqL1xuICAgIF9jaGFuZ2VTaXplKG5ld1NpemUpIHtcbiAgICAgICAgLy8gVG9kbzogc2VlIGlmIHRoZSBub3RpZmljYXRpb24gb2YgdGhlIGNoYW5nZWQgc2l6ZSBjYW4gYmUgY2FsbGVkIGJlZm9yZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBzaXplOiBuZXdTaXplIH0sIHRoaXMuX25vdGlmeVNpemVDaGFuZ2UpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBQcm9jZXNzIHRoZSBzaXplIGluIG9yZGVyIHRvIGtub3cgaWYgdGhlIHNpemUgc2hvdWxkIGJlIGNoYW5nZWQgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGwgcG9zaXRpb24gYW5kIHRoZSBib3JkZXIgb2YgZWFjaCB6b25lLlxuICAgICogQHJldHVybnMge29iamVjdH0gLSBUaGUgcmV0dXJuIGlzIHVzZWQgdG8gc3RvcCB0aGUgdHJlYXRlbWVudC5cbiAgICAqL1xuICAgIF9wcm9jZXNzU2l6ZSgpIHtcbiAgICAgICAgLy9BbGxvdyB0aGUgdXNlciB0byByZWRlZmluZSB0aGUgcHJvY2VzcyBzaXplIGZ1bmN0aW9uLlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9jZXNzU2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucHJvY2Vzc1NpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5zaXplcy5pbmRleE9mKHRoaXMuc3RhdGUuc2l6ZSk7XG4gICAgICAgIGxldCBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPSB0aGlzLl9nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgICAvL1Byb2Nlc3MgaW5jcmVhc2UgdHJlYXRlbWVudC5cbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8ICh0aGlzLnNpemVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICBsZXQgaW5jcmVhc2VCb3JkZXIgPSB0aGlzLnByb3BzLnNpemVNYXBbdGhpcy5zaXplc1tjdXJyZW50SW5kZXggKyAxXV0uc2l6ZUJvcmRlcjtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsUG9zaXRpb24gPiBpbmNyZWFzZUJvcmRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGFuZ2VTaXplKHRoaXMuc2l6ZXNbY3VycmVudEluZGV4ICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vUHJvY2VzcyBkZWNyZWFzZSB0cmVhdGVtZW50LlxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xuICAgICAgICAgICAgbGV0IGRlY3JlYXNlQm9yZGVyID0gdGhpcy5wcm9wcy5zaXplTWFwW3RoaXMuc2l6ZXNbY3VycmVudEluZGV4IC0gMV1dLnNpemVCb3JkZXI7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFBvc2l0aW9uIDw9IGRlY3JlYXNlQm9yZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZVNpemUodGhpcy5zaXplc1tjdXJyZW50SW5kZXggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICogSGFuZGxlIHRoZSBzY3JvbGwgZXZlbnQgaW4gb3JkZXIgdG8gcmVzaXplIHRoZSBwYWdlLlxuICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFtkZXNjcmlwdGlvbl1cbiAgICAqL1xuICAgIGhhbmRsZVNjcm9sbChldmVudCkge1xuICAgICAgICB0aGlzLl9wcm9jZXNzU2l6ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIEF0dGFjaCBzY3JvbGwgbGlzdGVuZXIgb24gdGhlIHNjcm9sbCB0YXJnZXQgbm9kZS5cbiAgICAqL1xuICAgIGF0dGFjaFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldE5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAqIERldGFjaCBzY3JvbGwgaGFuZGxlciBvbiB0aGUgc2Nyb2xsIHRhcmdldCBub2RlLlxuICAgICovXG4gICAgZGV0YWNoU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Tm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Tm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gICAgfSxcbiAgICAvKiogQGluaGVyaXRlZGRvYyAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGhlYWRlci0ke3RoaXMuc3RhdGUuc2l6ZX1gO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZGF0YS1mb2N1cz0naGVhZGVyJyBkYXRhLXJvdXRlPXt0aGlzLnN0YXRlLnJvdXRlfSBkYXRhLW1vZGU9e3RoaXMuc3RhdGUubW9kZX0gZGF0YS1zaXplPXt0aGlzLnN0YXRlLnNpemV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKGhlYWRlck1peGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19