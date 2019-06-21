import React, { Fragment } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { Icon } from 'antd';

const links = [
    {
        key: 'Pro 首页',
        title: 'Pro 首页',
        href: 'http://pro.lizc.me',
        blankTarget: true,
    },
    {
        key: 'github',
        title: <Icon type="github" />,
        href: 'https://github.com/bs32g1038/react-admin-kit',
        blankTarget: true,
    },
    {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
    },
]

const copyright = (
    <Fragment>
        Copyright <Icon type="copyright" /> 2019 bs32g1038@163.com 体验技术部出品
    </Fragment>
)

const GlobalFooter = ({ className }) => {
    const clsString = classNames(styles.globalFooter, className);
    return (
        <footer className={clsString}>
            {links && (
                <div className={styles.links}>
                    {links.map(link => (
                        <a
                            key={link.key}
                            title={link.key}
                            target={link.blankTarget ? '_blank' : '_self'}
                            href={link.href}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            )}
            {copyright && <div className={styles.copyright}>{copyright}</div>}
        </footer>
    );
};

export default GlobalFooter;
