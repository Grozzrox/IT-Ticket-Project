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
          <Dropdown
            nav
            toggle={function noRefCheck(){}}
          >
            <DropdownToggle
              caret
              nav
            >
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                Header
              </DropdownItem>
              <DropdownItem disabled>
                Action
              </DropdownItem>
              <DropdownItem>
                Another Action
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Another Action
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Another Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              disabled
              href="#"
            >
              Disabled Link
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