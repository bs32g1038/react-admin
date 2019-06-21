import React, { PureComponent } from './node_modules/react';
import { Dropdown } from './node_modules/antd';
import classNames from './node_modules/classnames';
import styles from './index.module.scss';

export default class HeaderDropdown extends PureComponent {
    render() {
        const { overlayClassName, ...props } = this.props;
        return (
            <Dropdown overlayClassName={classNames(styles.container, overlayClassName)} {...props} />
        );
    }
}
