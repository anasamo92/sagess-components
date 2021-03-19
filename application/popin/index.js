'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.component = exports.mixin = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _builder2 = require('sagess-core/component/builder');

var _builder3 = _interopRequireDefault(_builder2);

var _types = require('sagess-core/component/types');

var _types2 = _interopRequireDefault(_types);

var _exception = require('sagess-core/exception');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Small overlay component used to listen to scroll and prevent it to leave the Popin component
*/
var Overlay = _react2.default.createClass({
    displayName: 'PopinOverlay',
    propTypes: {
        children: _react.PropTypes.object,
        clickHandler: _react.PropTypes.func,
        show: _react.PropTypes.bool
    },
    getDefaultProps: function getDefaultProps() {
        return { show: false };
    },

    /**
    * Store the body overgflow property, and set it to hidden
    * @private
    */
    _hideBodyOverflow: function _hideBodyOverflow() {
        document.body.style['overflow-y'] = 'hidden';
    },

    /**
    * Restore body overflow property
    * @private
    */
    _restoreBodyOverflow: function _restoreBodyOverflow() {
        document.body.style['overflow-y'] = 'visible';
    },

    /**
    * Component will unmount event handler.
    * Remove the mouse wheel listener.
    */
    componentWillUnmount: function componentWillUnmount() {
        // ReactDOM.findDOMNode(this.refs.overlay).removeEventListener('mousewheel', this._onScroll);
        this._restoreBodyOverflow();
    },

    /**
    * Render the component
    * @return {XML} the rendered HTML
    */
    render: function render() {
        var _props = this.props,
            children = _props.children,
            clickHandler = _props.clickHandler,
            show = _props.show;

        return _react2.default.createElement(
            'div',
            { className: 'animated fadeIn', 'data-animation': 'fadeIn', 'data-closing-animation': 'fadeOut', 'data-focus': 'popin-overlay', 'data-visible': show, onClick: clickHandler, ref: 'overlay' },
            children
        );
    }
});

/**
* The popin component configuration
* @type {Object}
*/
// Dependencies
var popin = {
    /**
    * Init the component.
    * The popin is closed by default.
    * @return {Object} the initial state
    */
    getInitialState: function getInitialState() {
        return {
            opened: this.props.open
        };
    },

    /**
    * Init the props if not provided.
    * By default, a popin is full, medium and modal.
    * @return {Object} the default props
    */
    getDefaultProps: function getDefaultProps() {
        return {
            modal: true,
            size: 'medium',
            type: 'full',
            level: 0,
            overlay: true,
            open: false
        };
    },

    /**
    * Helper attribute, for React debugging
    */
    displayName: 'Popin',
    /**
    * Properties validation
    */
    propTypes: {
        modal: (0, _types2.default)('bool'),
        size: (0, _types2.default)('string'),
        types: (0, _types2.default)('string'),
        level: (0, _types2.default)('number'),
        overlay: (0, _types2.default)('bool'),
        open: (0, _types2.default)('bool')
    },
    /**
    * Wheel event handler.
    * @param  {object} event wheel event
    */
    _onWheel: function _onWheel(event) {
        _reactDom2.default.findDOMNode(this.refs['popin-window']).scrollTop += 0 < event.deltaY ? 100 : -100;
    },

    /**
    * Toggle the popin's open state
    */
    toggleOpen: function toggleOpen() {
        var _this = this;

        var timeout = 0;
        var opened = this.state.opened;
        var onPopinClose = this.props.onPopinClose;

        if (opened) {
            var popinWindow = _reactDom2.default.findDOMNode(this.refs['popin-window']);
            var popinOverlay = _reactDom2.default.findDOMNode(this.refs['popin-overlay']);
            popinWindow.classList.remove(popinWindow.getAttribute('data-animation'));
            popinWindow.classList.add(popinWindow.getAttribute('data-closing-animation'));
            popinOverlay.classList.remove(popinOverlay.getAttribute('data-animation'));
            popinOverlay.classList.add(popinOverlay.getAttribute('data-closing-animation'));
            timeout = 200;
        }
        if (opened && onPopinClose) {
            onPopinClose();
        }
        this._openTimeoutID = setTimeout(function () {
            // Store the current popin state
            var wasOpened = _this.state.opened;
            // If it was  opened, then we are closing it, so restore the body overflow before closing.
            if (wasOpened && _this.refs['popin-overlay']) {
                _this.refs['popin-overlay']._restoreBodyOverflow();
            }
            _this.setState({
                opened: !wasOpened
            }, function () {
                if (_this.refs['popin-overlay']) {
                    if (!wasOpened) {
                        // We just opened the popin, so store and hide the body overflow.
                        _this.refs['popin-overlay']._hideBodyOverflow();
                    }
                }
            });
        }, timeout);
    },
    componentWillUnmount: function componentWillUnmount() {
        window.clearTimeout(this._openTimeoutID);
    },

    /**
    * Render the component
    * @return {XML} the rendered HTML
    */
    render: function render() {
        // test for this.state.opened and return an Overlay component if true
        var _props2 = this.props,
            type = _props2.type,
            level = _props2.level,
            modal = _props2.modal,
            overlay = _props2.overlay,
            children = _props2.children;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'popin', 'data-level': level, 'data-size': this._validateSize(), 'data-type': type },
            this.state.opened && _react2.default.createElement(
                Overlay,
                { clickHandler: modal && this.toggleOpen, ref: 'popin-overlay', resize: 'full' === type, show: overlay },
                _react2.default.createElement(
                    'div',
                    Object.assign({}, this._getAnimationProps(), { 'data-focus': 'popin-window', onClick: this._preventPopinClose, ref: 'popin-window' }),
                    _react2.default.createElement(
                        'i',
                        { className: 'material-icons', 'data-focus': 'popin-window-close', onClick: this.toggleOpen },
                        'close'
                    ),
                    _react2.default.createElement(
                        'div',
                        { onWheel: this._onWheel },
                        children
                    )
                )
            )
        );
    },

    /**
    * Compute the animation classes
    * @return {Object} the props to attach to the component
    * @private
    */
    _getAnimationProps: function _getAnimationProps() {
        var openingAnimation = void 0;
        var closingAnimation = void 0;
        switch (this.props.type) {
            case 'from-menu':
                openingAnimation = 'slideInLeft';
                closingAnimation = 'slideOutLeft';
                break;
            case 'from-right':
                openingAnimation = 'slideInRight';
                closingAnimation = 'slideOutRight';
                break;
            default:
                openingAnimation = 'zoomIn';
                closingAnimation = 'zoomOut';
                break;
        }
        return {
            className: 'animated ' + openingAnimation,
            'data-animation': openingAnimation,
            'data-closing-animation': closingAnimation
        };
    },

    /**
    * Validate the optional given size
    * @return {string} the validated size
    * @private
    */
    _validateSize: function _validateSize() {
        if (!['small', 'medium', 'large'].includes(this.props.size)) {
            throw new _exception.ArgumentInvalidException('Please provide a valid popin size among small, medium and large. Provided ' + this.props.size);
        }
        return this.props.size;
    },

    /**
    * Prevent popin close when there's a click on the popin window
    * @param {Object} event - raised by the click
    * @private
    */
    _preventPopinClose: function _preventPopinClose(event) {
        event.stopPropagation();
    }
};

var _builder = (0, _builder3.default)(popin),
    mixin = _builder.mixin,
    component = _builder.component;

exports.mixin = mixin;
exports.component = component;
exports.default = { mixin: mixin, component: component };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy1ub3JtYWxpemUuanMiXSwibmFtZXMiOlsiT3ZlcmxheSIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiY2xpY2tIYW5kbGVyIiwiZnVuYyIsInNob3ciLCJib29sIiwiZ2V0RGVmYXVsdFByb3BzIiwiX2hpZGVCb2R5T3ZlcmZsb3ciLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIl9yZXN0b3JlQm9keU92ZXJmbG93IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJwcm9wcyIsInBvcGluIiwiZ2V0SW5pdGlhbFN0YXRlIiwib3BlbmVkIiwib3BlbiIsIm1vZGFsIiwic2l6ZSIsInR5cGUiLCJsZXZlbCIsIm92ZXJsYXkiLCJ0eXBlcyIsIl9vbldoZWVsIiwiZXZlbnQiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwicmVmcyIsInNjcm9sbFRvcCIsImRlbHRhWSIsInRvZ2dsZU9wZW4iLCJ0aW1lb3V0Iiwic3RhdGUiLCJvblBvcGluQ2xvc2UiLCJwb3BpbldpbmRvdyIsInBvcGluT3ZlcmxheSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImdldEF0dHJpYnV0ZSIsImFkZCIsIl9vcGVuVGltZW91dElEIiwic2V0VGltZW91dCIsIndhc09wZW5lZCIsInNldFN0YXRlIiwid2luZG93IiwiY2xlYXJUaW1lb3V0IiwiX3ZhbGlkYXRlU2l6ZSIsIl9nZXRBbmltYXRpb25Qcm9wcyIsIl9wcmV2ZW50UG9waW5DbG9zZSIsIm9wZW5pbmdBbmltYXRpb24iLCJjbG9zaW5nQW5pbWF0aW9uIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJBcmd1bWVudEludmFsaWRFeGNlcHRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJtaXhpbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7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bkI7QUFDQTtBQVpSO0FBY0EsZUFBUTtBQUNKQyxxQ0FBdUJGLGdCQURuQjtBQUVKLDhCQUFrQkEsZ0JBRmQ7QUFHSixzQ0FBMEJDO0FBSHRCLFNBQVI7QUFLSCxLQXpJUzs7QUEwSVY7Ozs7O0FBS0FKLGlCQS9JVSwyQkErSU07QUFDWixZQUFJLENBQUMsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixFQUE2Qk0sUUFBN0IsQ0FBc0MsS0FBS3hDLEtBQUwsQ0FBV00sSUFBakQsQ0FBTCxFQUE2RDtBQUN6RCxrQkFBTSxJQUFJbUMsbUNBQUosQ0FBNkIsK0VBQStFLEtBQUt6QyxLQUFMLENBQVdNLElBQXZILENBQU47QUFDSDtBQUNELGVBQU8sS0FBS04sS0FBTCxDQUFXTSxJQUFsQjtBQUNILEtBcEpTOztBQXFKVjs7Ozs7QUFLQThCLHNCQTFKVSw4QkEwSlN4QixLQTFKVCxFQTBKZ0I7QUFDdEJBLGNBQU04QixlQUFOO0FBQ0g7QUE1SlMsQ0FBZDs7ZUErSjZCLHVCQUFRekMsS0FBUixDO0lBQXJCMEMsSyxZQUFBQSxLO0lBQU9DLFMsWUFBQUEsUzs7UUFDTkQsSyxHQUFBQSxLO1FBQU9DLFMsR0FBQUEsUztrQkFDRCxFQUFFRCxZQUFGLEVBQVNDLG9CQUFULEUiLCJmaWxlIjoic3RyaW5nLW5vcm1hbGl6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGJ1aWxkZXIgZnJvbSAnc2FnZXNzLWNvcmUvY29tcG9uZW50L2J1aWxkZXInO1xuaW1wb3J0IHR5cGVzIGZyb20gJ3NhZ2Vzcy1jb3JlL2NvbXBvbmVudC90eXBlcyc7XG5pbXBvcnQgeyBBcmd1bWVudEludmFsaWRFeGNlcHRpb24gfSBmcm9tICdzYWdlc3MtY29yZS9leGNlcHRpb24nO1xuXG4vKipcbiogU21hbGwgb3ZlcmxheSBjb21wb25lbnQgdXNlZCB0byBsaXN0ZW4gdG8gc2Nyb2xsIGFuZCBwcmV2ZW50IGl0IHRvIGxlYXZlIHRoZSBQb3BpbiBjb21wb25lbnRcbiovXG5jb25zdCBPdmVybGF5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnUG9waW5PdmVybGF5JyxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIGNsaWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNob3c6IFByb3BUeXBlcy5ib29sXG4gICAgfSxcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7IHNob3c6IGZhbHNlIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFN0b3JlIHRoZSBib2R5IG92ZXJnZmxvdyBwcm9wZXJ0eSwgYW5kIHNldCBpdCB0byBoaWRkZW5cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBfaGlkZUJvZHlPdmVyZmxvdygpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVsnb3ZlcmZsb3cteSddID0gJ2hpZGRlbic7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFJlc3RvcmUgYm9keSBvdmVyZmxvdyBwcm9wZXJ0eVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIF9yZXN0b3JlQm9keU92ZXJmbG93KCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlWydvdmVyZmxvdy15J10gPSAndmlzaWJsZSc7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIENvbXBvbmVudCB3aWxsIHVubW91bnQgZXZlbnQgaGFuZGxlci5cbiAgICAqIFJlbW92ZSB0aGUgbW91c2Ugd2hlZWwgbGlzdGVuZXIuXG4gICAgKi9cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgLy8gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLm92ZXJsYXkpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vblNjcm9sbCk7XG4gICAgICAgIHRoaXMuX3Jlc3RvcmVCb2R5T3ZlcmZsb3coKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBjb21wb25lbnRcbiAgICAqIEByZXR1cm4ge1hNTH0gdGhlIHJlbmRlcmVkIEhUTUxcbiAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgY2xpY2tIYW5kbGVyLCBzaG93IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW1hdGVkIGZhZGVJbicgZGF0YS1hbmltYXRpb249J2ZhZGVJbicgZGF0YS1jbG9zaW5nLWFuaW1hdGlvbj0nZmFkZU91dCcgZGF0YS1mb2N1cz0ncG9waW4tb3ZlcmxheScgZGF0YS12aXNpYmxlPXtzaG93fSBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9IHJlZj0nb3ZlcmxheSc+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbi8qKlxuKiBUaGUgcG9waW4gY29tcG9uZW50IGNvbmZpZ3VyYXRpb25cbiogQHR5cGUge09iamVjdH1cbiovXG5jb25zdCBwb3BpbiA9IHtcbiAgICAvKipcbiAgICAqIEluaXQgdGhlIGNvbXBvbmVudC5cbiAgICAqIFRoZSBwb3BpbiBpcyBjbG9zZWQgYnkgZGVmYXVsdC5cbiAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIGluaXRpYWwgc3RhdGVcbiAgICAqL1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBvcGVuZWQ6IHRoaXMucHJvcHMub3BlblxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogSW5pdCB0aGUgcHJvcHMgaWYgbm90IHByb3ZpZGVkLlxuICAgICogQnkgZGVmYXVsdCwgYSBwb3BpbiBpcyBmdWxsLCBtZWRpdW0gYW5kIG1vZGFsLlxuICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgZGVmYXVsdCBwcm9wc1xuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIG1vZGFsOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogJ21lZGl1bScsXG4gICAgICAgICAgICB0eXBlOiAnZnVsbCcsXG4gICAgICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgICAgIG92ZXJsYXk6IHRydWUsXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogSGVscGVyIGF0dHJpYnV0ZSwgZm9yIFJlYWN0IGRlYnVnZ2luZ1xuICAgICovXG4gICAgZGlzcGxheU5hbWU6ICdQb3BpbicsXG4gICAgLyoqXG4gICAgKiBQcm9wZXJ0aWVzIHZhbGlkYXRpb25cbiAgICAqL1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBtb2RhbDogdHlwZXMoJ2Jvb2wnKSxcbiAgICAgICAgc2l6ZTogdHlwZXMoJ3N0cmluZycpLFxuICAgICAgICB0eXBlczogdHlwZXMoJ3N0cmluZycpLFxuICAgICAgICBsZXZlbDogdHlwZXMoJ251bWJlcicpLFxuICAgICAgICBvdmVybGF5OiB0eXBlcygnYm9vbCcpLFxuICAgICAgICBvcGVuOiB0eXBlcygnYm9vbCcpXG4gICAgfSxcbiAgICAvKipcbiAgICAqIFdoZWVsIGV2ZW50IGhhbmRsZXIuXG4gICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IHdoZWVsIGV2ZW50XG4gICAgKi9cbiAgICBfb25XaGVlbChldmVudCkge1xuICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BvcGluLXdpbmRvdyddKS5zY3JvbGxUb3AgKz0gMCA8IGV2ZW50LmRlbHRhWSA/IDEwMCA6IC0xMDA7XG4gICAgfSxcbiAgICAvKipcbiAgICAqIFRvZ2dsZSB0aGUgcG9waW4ncyBvcGVuIHN0YXRlXG4gICAgKi9cbiAgICB0b2dnbGVPcGVuKCkge1xuICAgICAgICBsZXQgdGltZW91dCA9IDA7XG4gICAgICAgIGNvbnN0IHsgb3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IG9uUG9waW5DbG9zZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKG9wZW5lZCkge1xuICAgICAgICAgICAgY29uc3QgcG9waW5XaW5kb3cgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNbJ3BvcGluLXdpbmRvdyddKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcGluT3ZlcmxheSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmc1sncG9waW4tb3ZlcmxheSddKTtcbiAgICAgICAgICAgIHBvcGluV2luZG93LmNsYXNzTGlzdC5yZW1vdmUocG9waW5XaW5kb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicpKTtcbiAgICAgICAgICAgIHBvcGluV2luZG93LmNsYXNzTGlzdC5hZGQocG9waW5XaW5kb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWNsb3NpbmctYW5pbWF0aW9uJykpO1xuICAgICAgICAgICAgcG9waW5PdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUocG9waW5PdmVybGF5LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nKSk7XG4gICAgICAgICAgICBwb3Bpbk92ZXJsYXkuY2xhc3NMaXN0LmFkZChwb3Bpbk92ZXJsYXkuZ2V0QXR0cmlidXRlKCdkYXRhLWNsb3NpbmctYW5pbWF0aW9uJykpO1xuICAgICAgICAgICAgdGltZW91dCA9IDIwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BlbmVkICYmIG9uUG9waW5DbG9zZSkge1xuICAgICAgICAgICAgb25Qb3BpbkNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb3BlblRpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgcG9waW4gc3RhdGVcbiAgICAgICAgICAgIGNvbnN0IHdhc09wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkO1xuICAgICAgICAgICAgLy8gSWYgaXQgd2FzICBvcGVuZWQsIHRoZW4gd2UgYXJlIGNsb3NpbmcgaXQsIHNvIHJlc3RvcmUgdGhlIGJvZHkgb3ZlcmZsb3cgYmVmb3JlIGNsb3NpbmcuXG4gICAgICAgICAgICBpZiAod2FzT3BlbmVkICYmIHRoaXMucmVmc1sncG9waW4tb3ZlcmxheSddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzWydwb3Bpbi1vdmVybGF5J10uX3Jlc3RvcmVCb2R5T3ZlcmZsb3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wZW5lZDogIXdhc09wZW5lZFxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZnNbJ3BvcGluLW92ZXJsYXknXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXdhc09wZW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UganVzdCBvcGVuZWQgdGhlIHBvcGluLCBzbyBzdG9yZSBhbmQgaGlkZSB0aGUgYm9keSBvdmVyZmxvdy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmc1sncG9waW4tb3ZlcmxheSddLl9oaWRlQm9keU92ZXJmbG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9vcGVuVGltZW91dElEKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICogUmVuZGVyIHRoZSBjb21wb25lbnRcbiAgICAqIEByZXR1cm4ge1hNTH0gdGhlIHJlbmRlcmVkIEhUTUxcbiAgICAqL1xuICAgIHJlbmRlcigpIHsgLy8gdGVzdCBmb3IgdGhpcy5zdGF0ZS5vcGVuZWQgYW5kIHJldHVybiBhbiBPdmVybGF5IGNvbXBvbmVudCBpZiB0cnVlXG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbGV2ZWwsIG1vZGFsLCBvdmVybGF5LCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZGF0YS1mb2N1cz0ncG9waW4nIGRhdGEtbGV2ZWw9e2xldmVsfSBkYXRhLXNpemU9e3RoaXMuX3ZhbGlkYXRlU2l6ZSgpfSBkYXRhLXR5cGU9e3R5cGV9ID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXkgY2xpY2tIYW5kbGVyPXttb2RhbCAmJiB0aGlzLnRvZ2dsZU9wZW59IHJlZj0ncG9waW4tb3ZlcmxheScgcmVzaXplPXsnZnVsbCcgPT09IHR5cGV9IHNob3c9e292ZXJsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5fZ2V0QW5pbWF0aW9uUHJvcHMoKX0gZGF0YS1mb2N1cz0ncG9waW4td2luZG93JyBvbkNsaWNrPXt0aGlzLl9wcmV2ZW50UG9waW5DbG9zZX0gcmVmPSdwb3Bpbi13aW5kb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nbWF0ZXJpYWwtaWNvbnMnIGRhdGEtZm9jdXM9J3BvcGluLXdpbmRvdy1jbG9zZScgb25DbGljaz17dGhpcy50b2dnbGVPcGVufT5jbG9zZTwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uV2hlZWw9e3RoaXMuX29uV2hlZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBDb21wdXRlIHRoZSBhbmltYXRpb24gY2xhc3Nlc1xuICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgcHJvcHMgdG8gYXR0YWNoIHRvIHRoZSBjb21wb25lbnRcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBfZ2V0QW5pbWF0aW9uUHJvcHMoKSB7XG4gICAgICAgIGxldCBvcGVuaW5nQW5pbWF0aW9uO1xuICAgICAgICBsZXQgY2xvc2luZ0FuaW1hdGlvbjtcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Zyb20tbWVudSc6XG4gICAgICAgICAgICAgICAgb3BlbmluZ0FuaW1hdGlvbiA9ICdzbGlkZUluTGVmdCc7XG4gICAgICAgICAgICAgICAgY2xvc2luZ0FuaW1hdGlvbiA9ICdzbGlkZU91dExlZnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZnJvbS1yaWdodCc6XG4gICAgICAgICAgICAgICAgb3BlbmluZ0FuaW1hdGlvbiA9ICdzbGlkZUluUmlnaHQnO1xuICAgICAgICAgICAgICAgIGNsb3NpbmdBbmltYXRpb24gPSAnc2xpZGVPdXRSaWdodCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG9wZW5pbmdBbmltYXRpb24gPSAnem9vbUluJztcbiAgICAgICAgICAgICAgICBjbG9zaW5nQW5pbWF0aW9uID0gJ3pvb21PdXQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBgYW5pbWF0ZWQgJHtvcGVuaW5nQW5pbWF0aW9ufWAsXG4gICAgICAgICAgICAnZGF0YS1hbmltYXRpb24nOiBvcGVuaW5nQW5pbWF0aW9uLFxuICAgICAgICAgICAgJ2RhdGEtY2xvc2luZy1hbmltYXRpb24nOiBjbG9zaW5nQW5pbWF0aW9uXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBWYWxpZGF0ZSB0aGUgb3B0aW9uYWwgZ2l2ZW4gc2l6ZVxuICAgICogQHJldHVybiB7c3RyaW5nfSB0aGUgdmFsaWRhdGVkIHNpemVcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBfdmFsaWRhdGVTaXplKCkge1xuICAgICAgICBpZiAoIVsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10uaW5jbHVkZXModGhpcy5wcm9wcy5zaXplKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50SW52YWxpZEV4Y2VwdGlvbignUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBwb3BpbiBzaXplIGFtb25nIHNtYWxsLCBtZWRpdW0gYW5kIGxhcmdlLiBQcm92aWRlZCAnICsgdGhpcy5wcm9wcy5zaXplKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zaXplO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiBQcmV2ZW50IHBvcGluIGNsb3NlIHdoZW4gdGhlcmUncyBhIGNsaWNrIG9uIHRoZSBwb3BpbiB3aW5kb3dcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCAtIHJhaXNlZCBieSB0aGUgY2xpY2tcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBfcHJldmVudFBvcGluQ2xvc2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxufTtcblxuY29uc3QgeyBtaXhpbiwgY29tcG9uZW50IH0gPSBidWlsZGVyKHBvcGluKTtcbmV4cG9ydCB7IG1peGluLCBjb21wb25lbnQgfTtcbmV4cG9ydCBkZWZhdWx0IHsgbWl4aW4sIGNvbXBvbmVudCB9O1xuIl19