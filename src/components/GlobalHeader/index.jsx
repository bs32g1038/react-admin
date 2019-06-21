import React, { Component } from 'react';
import { Menu, Icon, Layout, Tooltip, Avatar } from 'antd';
import styles from './index.module.scss';
import HeaderDropdown from '../HeaderDropdown';

const { Header } = Layout;

class GlobalHeader extends Component {
    state = {
        collapsed: false
    }
    menuClick = e => {
        e.key === 'logout' && this.logout();
    };
    logout = () => {
        localStorage.removeItem('user');
        this.props.history.push('/login')
    };
    toggle = () => {
        const { collapsed, onCollapse } = this.props;
        this.setState({
            collapsed: !collapsed
        })
        if (onCollapse) onCollapse(!collapsed);
    };
    render() {
        const menu = (
            <Menu className={styles.menu} selectedKeys={[]}>
                <Menu.Item key="userCenter">
                    <Icon type="user" />
                    用户中心
                </Menu.Item>
                <Menu.Item key="userinfo">
                    <Icon type="setting" />
                    用户设置
                </Menu.Item>
                <Menu.Item key="triggerError">
                    <Icon type="close-circle" />
                    触发错误
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout">
                    <Icon type="logout" />
                    退出登录
                </Menu.Item>
            </Menu>
        );
        return (
            <Header style={{
                padding: '0px',
                width: '100%',
                zIndex: 2
            }}>
                <div className={styles.header}>
                    <Icon
                        className={styles.trigger}
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                    <div className={styles.right}>
                        <Tooltip title="help">
                            <a
                                target="_blank"
                                href="https://github.com/bs32g1038/react-admin-kit"
                                rel="noopener noreferrer"
                                className={styles.action}
                            >
                                <Icon type="github" className={styles.github}/>
                                <span>Github</span>
                            </a>
                        </Tooltip>
                        <HeaderDropdown overlay={menu}>
                            <span className={`${styles.action} ${styles.account}`}>
                                <Avatar
                                    size="small"
                                    className={styles.avatar}
                                    src={'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'}
                                    alt="avatar"
                                />
                                <span className={styles.name}>bs32g1038</span>
                            </span>
                        </HeaderDropdown>
                    </div>
                </div>
            </Header>
        )
    }
}

export default GlobalHeader;