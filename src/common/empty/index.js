import builder from 'sagess-core/component/builder';
import React from 'react';

let emptyMixin = {
    componentWillMount() {
        console.warn('SagessComponents v0.15: the \'Empty\' component from SagessComponents.common is deprecated, please use SagessComponents.components.Empty');
    },
    render() {
        return (
            <div data-focus='empty' />
        );
    }
}

const { mixin, component } = builder(emptyMixin);
export { mixin, component };
export default { mixin, component };
