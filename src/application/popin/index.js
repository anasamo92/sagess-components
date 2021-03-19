// Dependencies
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import builder from 'focus-core/component/builder';
import types from 'focus-core/component/types';
import { ArgumentInvalidException } from 'focus-core/exception';

/**
* Small overlay component used to listen to scroll and prevent it to leave the Popin component
*/
const Overlay = React.createClass({
    displayName: 'PopinOverlay',
    propTypes: {
        children: PropTypes.object,
        clickHandler: PropTypes.func,
        show: PropTypes.bool
    },
    getDefaultProps() {
        return { show: false };
    },
    /**
    * Store the body overgflow property, and set it to hidden
    * @private
    */
    _hideBodyOverflow() {
        document.body.style['overflow-y'] = 'hidden';
    },
    /**
    * Restore body overflow property
    * @private
    */
    _restoreBodyOverflow() {
        document.body.style['overflow-y'] = 'visible';
    },
    /**
    * Component will unmount event handler.
    * Remove the mouse wheel listener.
    */
    componentWillUnmount() {
        // ReactDOM.findDOMNode(this.refs.overlay).removeEventListener('mousewheel', this._onScroll);
        this._restoreBodyOverflow();
    },
    /**
    * Render the component
    * @return {XML} the rendered HTML
    */
    render() {
        const { children, clickHandler, show } = this.props;
        return (
            <div className='animated fadeIn' data-animation='fadeIn' data-closing-animation='fadeOut' data-focus='popin-overlay' data-visible={show} onClick={clickHandler} ref='overlay'>
                {children}
            </div>
        );
    }
});

/**
* The popin component configuration
* @type {Object}
*/
const popin = {
    /**
    * Init the component.
    * The popin is closed by default.
    * @return {Object} the initial state
    */
    getInitialState() {
        return ({
            opened: this.props.open
        });
    },
    /**
    * Init the props if not provided.
    * By default, a popin is full, medium and modal.
    * @return {Object} the default props
    */
    getDefaultProps() {
        return ({
            modal: true,
            size: 'medium',
            type: 'full',
            level: 0,
            overlay: true,
            open: false
        });
    },
    /**
    * Helper attribute, for React debugging
    */
    displayName: 'Popin',
    /**
    * Properties validation
    */
    propTypes: {
        modal: types('bool'),
        size: types('string'),
        types: types('string'),
        level: types('number'),
        overlay: types('bool'),
        open: types('bool')
    },
    /**
    * Wheel event handler.
    * @param  {object} event wheel event
    */
    _onWheel(event) {
        ReactDOM.findDOMNode(this.refs['popin-window']).scrollTop += 0 < event.deltaY ? 100 : -100;
    },
    /**
    * Toggle the popin's open state
    */
    toggleOpen() {
        let timeout = 0;
        const { opened } = this.state;
        const { onPopinClose } = this.props;
        if (opened) {
            const popinWindow = ReactDOM.findDOMNode(this.refs['popin-window']);
            const popinOverlay = ReactDOM.findDOMNode(this.refs['popin-overlay']);
            popinWindow.classList.remove(popinWindow.getAttribute('data-animation'));
            popinWindow.classList.add(popinWindow.getAttribute('data-closing-animation'));
            popinOverlay.classList.remove(popinOverlay.getAttribute('data-animation'));
            popinOverlay.classList.add(popinOverlay.getAttribute('data-closing-animation'));
            timeout = 200;
        }
        if (opened && onPopinClose) {
            onPopinClose();
        }
        this._openTimeoutID = setTimeout(() => {
            // Store the current popin state
            const wasOpened = this.state.opened;
            // If it was  opened, then we are closing it, so restore the body overflow before closing.
            if (wasOpened && this.refs['popin-overlay']) {
                this.refs['popin-overlay']._restoreBodyOverflow();
            }
            this.setState({
                opened: !wasOpened
            }, () => {
                if (this.refs['popin-overlay']) {
                    if (!wasOpened) {
                        // We just opened the popin, so store and hide the body overflow.
                        this.refs['popin-overlay']._hideBodyOverflow();
                    }
                }
            });
        }, timeout);
    },
    componentWillUnmount() {
        window.clearTimeout(this._openTimeoutID);
    },
    /**
    * Render the component
    * @return {XML} the rendered HTML
    */
    render() { // test for this.state.opened and return an Overlay component if true
        const { type, level, modal, overlay, children } = this.props;
        return (
            <div data-focus='popin' data-level={level} data-size={this._validateSize()} data-type={type} >
                {this.state.opened &&
                    <Overlay clickHandler={modal && this.toggleOpen} ref='popin-overlay' resize={'full' === type} show={overlay}>
                        <div {...this._getAnimationProps()} data-focus='popin-window' onClick={this._preventPopinClose} ref='popin-window'>
                            <i className='material-icons' data-focus='popin-window-close' onClick={this.toggleOpen}>close</i>
                            <div onWheel={this._onWheel}>
                                {children}
                            </div>
                        </div>
                    </Overlay>
                }
            </div>
        );
    },
    /**
    * Compute the animation classes
    * @return {Object} the props to attach to the component
    * @private
    */
    _getAnimationProps() {
        let openingAnimation;
        let closingAnimation;
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
        return ({
            className: `animated ${openingAnimation}`,
            'data-animation': openingAnimation,
            'data-closing-animation': closingAnimation
        });
    },
    /**
    * Validate the optional given size
    * @return {string} the validated size
    * @private
    */
    _validateSize() {
        if (!['small', 'medium', 'large'].includes(this.props.size)) {
            throw new ArgumentInvalidException('Please provide a valid popin size among small, medium and large. Provided ' + this.props.size);
        }
        return this.props.size;
    },
    /**
    * Prevent popin close when there's a click on the popin window
    * @param {Object} event - raised by the click
    * @private
    */
    _preventPopinClose(event) {
        event.stopPropagation();
    }
};

const { mixin, component } = builder(popin);
export { mixin, component };
export default { mixin, component };
