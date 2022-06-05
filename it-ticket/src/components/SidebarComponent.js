import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class Sidebar extends Component {
    render() {
        return(
            <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={"#"}>Dashboard</MenuItem>
                <SubMenu title="Components" icon={"#"}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
            </ProSidebar>
        )
    }
}

export default Sidebar;