import builder from 'sagess-core/component/builder';
import React, { PropTypes } from 'react';

const iconMixin = {
    displayName: 'Icon',
    getDefaultProps() {
        return {
            name: '',
            library: 'material'
        };
    },
    componentWillMount() {
        console.warn('SagessComponents v0.15: the \'Icon\' component from SagessComponents.common is deprecated, please use SagessComponents.components.Icon');
    },
    propTypes: {
        handleOnClick: PropTypes.func,
        library: PropTypes.oneOf(['material', 'font-awesome', 'font-custom']),
        name: PropTypes.string
    },
    /**
    * Render the img.
    * @returns {XML} Html code.
    */
    render() {
        const { name, library, onClick, style } = this.props;
        switch (library) {
            case 'material':
                return (
                    <i className='material-icons' onClick={onClick} {...style}>{name}</i>
                );
            case 'font-awesome':
                const faCss = `fa fa-${name}`;
                return (
                    <i className={faCss} onClick={onClick} {...style} />
                );
            case 'font-custom':
                return (
                    <span className={`icon-${name}`} />
                );
            default:
                return null;
        }
    }
};

const { mixin, component } = builder(iconMixin);
export { mixin, component };
export default { mixin, component };
