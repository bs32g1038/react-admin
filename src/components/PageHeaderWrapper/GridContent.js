import React, { PureComponent } from './node_modules/react';

class GridContent extends PureComponent {
    render() {
        const { children } = this.props;

        return <div>{children}</div>;
    }
}

export default GridContent;