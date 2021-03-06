import builder from 'sagess-core/component/builder';
import React from 'react';

const headerMixin = {
    componenWillMount() {
        console.warn('SagessComponents 2.2.0: this component is deprecated, please use components from sagess-components/components/layout folder');
    },
    /** @inheriteddoc */
    render() {
        return (
            <div data-focus='content-bar'>
                {this.props.children}
            </div>
        );
    }
};

const { mixin, component } = builder(headerMixin);
export { mixin, component };
export default { mixin, component };
