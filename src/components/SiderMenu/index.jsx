import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import MenuList from './MenuList';
import styles from './index.module.scss';
import classNames from 'classnames';
import config from '../../configs/default.config';
import { ReactComponent as IconLogo } from '../../assets/logo.svg'

const { Sider } = Layout;

class SiderMenu extends Component {
    static getDerivedStateFromProps(props, state) {
        if (props.collapsed !== state.collapsed) {
            const state1 = SiderMenu.setMenuOpen(props);
            const state2 = SiderMenu.onCollapse(props.collapsed);
            return {
                ...state1,
                ...state2,
                firstHide: state.collapsed !== props.collapsed && props.collapsed, // 两个不等时赋值props属性值否则为false
                openKey: state.openKey || (!props.collapsed && state1.openKey)
            }
        }
        return null;
    }
    static setMenuOpen = props => {
        const { pathname } = props.location;
        return {
            openKey: pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey: pathname
        };
    };
    static onCollapse = (collapsed) => {
        return {
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        };
    };
    state = {
        mode: 'inline',
        openKey: '',
        selectedKey: '',
        firstHide: true
    };
    componentDidMount() {
        const state = SiderMenu.setMenuOpen(this.props);
        this.setState(state);
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        const { popoverHide } = this.props; // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };
    render() {
        const { selectedKey, openKey, firstHide, collapsed } = this.state;
        const { routes } = this.props
        const theme = 'light'
        const siderClassName = classNames(styles.sider, {
            [styles.fixSiderBar]: false,
            [styles.light]: theme === 'light',
        });
        return (
            <Sider
                width={256}
                theme={theme}
                className={siderClassName}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className={styles.logo} id="logo">
                    <Link to="/">
                        <IconLogo></IconLogo>
                        <h1>{config.title}</h1>
                    </Link>
                </div>
                <MenuList
                    key="Menu"
                    theme={theme}
                    menus={routes}
                    onClick={this.menuClick}
                    mode={this.state.mode}
                    selectedKeys={[selectedKey]}
                    openKeys={firstHide ? null : [openKey]}
                    onOpenChange={this.openMenu}
                />
            </Sider>
        )
    }
}

export default withRouter(SiderMenu);