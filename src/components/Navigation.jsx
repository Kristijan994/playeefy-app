import React, { Component } from 'react'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

import Logo from '../assets/img/logo.svg';

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Navbar">
        <Navbar id="nav" color="" light expand="md" fixed="top">
          <Container fluid>
            <NavbarBrand href="/" className="bold">
              <img src={Logo} alt="Logo" className="logo" /> <span className="bold rel-5 -white txt-shadow rel-l-30">Playeefy</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto rel-3" navbar>
                <NavItem>
                  <NavLink to='/' className="-white offset-lr-10 txt-shadow">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/404' className="-white offset-lr-10 txt-shadow">Help</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/404' className="-white offset-lr-10 txt-shadow">Why Playeefy?</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register" className="-white offset-lr-10 txt-shadow">Register</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/404' className="-white offset-lr-10 txt-shadow">Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;