import React from 'react';
import { Menu, Icon, Input } from 'antd';
import data from './response';
import styles from "./style.scss";

const SubMenu = Menu.SubMenu;
const Search = Input.Search;

export default class Sider extends React.Component {
    handleClick = (e) => {
        console.log('click ', e);
    }

    handleCollection = (menu, e) => {
        // this.props.handleCollection
    }

    nodeStatus = () => {
        const { statusIcon } = this.props;
        if (statusIcon) {
            return <>{statusIcon}</>
        } else {
            return <Icon type="star" />
        }
    }

    toolBtns = (props) => {
        const { toolBtns } = this.props;
        if (toolBtns) {
            return toolBtns.map((Btn, index) => (<Btn key={index} {...props} forceUpdate={this.forceUpdate.bind(this)} />));
        } else {
            return <Icon type="star" onClick={this.handleCollection} />
        }
    }

    mapMenus = (menus) => {
        if (menus && menus.length) {
            return (
                menus.map(menu => {
                    if (menu.child) {
                        return (
                            <SubMenu key={menu.id} title={<span>{menu.resource_name}</span>}>
                                {this.mapMenus(menu.child)}
                            </SubMenu>
                        )
                    } else {
                        return (
                            <Menu.Item key={menu.id} className={styles.menuItem}>
                                <span className={`${styles.treeNodeStatus} ${styles.offline}`}>
                                    <this.nodeStatus />
                                </span>
                                <span className={styles.treeNodeName}>{menu.resource_name}</span>
                                <div className={styles.toolBox}>
                                    <this.toolBtns node={menu} />
                                </div>
                            </Menu.Item>
                        )
                    }
                })
            )
        }
    }

    render() {
        const {
            searchPlaceholder = "searchPlaceholder",
            toolBtns
        } = this.props;
        return (
            <div className="hz-common-web-resource-tree">
                <Search
                    placeholder={searchPlaceholder}
                    onSearch={value => console.log(value)}
                    className={styles.searchBox}
                />
                <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    {this.mapMenus(data.data)}
                </Menu>
            </div>
        );
    }
}
