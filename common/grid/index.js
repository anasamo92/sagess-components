// see http://www.getmdl.io/components/index.html#layout-section/grid
//dependencies
import React, { Component } from 'react';
/**
 * Grid component.
 */
class Grid extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.warn('SagessComponents v0.15: the \'Grid\' component from SagessComponents.common is deprecated, please use SagessComponents.components.Grid');
    }
    /** @inheriteDoc */
    render() {
        const { children, ...otherProps } = this.props;
        return (
            <div className='mdl-grid' {...otherProps}>
                {children}
            </div>
        );
    }
}

Grid.displayName = 'Grid';

export default Grid;
