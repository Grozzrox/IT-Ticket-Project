import React from 'react';
import { Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

function RenderTabs() {
    return(
        <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              active
              href="#"
            >
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Second Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Third Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
            >
              Fourth Link
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
}

function Home() {
    return(
        <div className="container">
            <RenderTabs />
        </div>
    )
}

export default Home;