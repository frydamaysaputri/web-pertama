import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">CodeLife</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventkey={1} ComponentClass={Link} to="/">
                    Home
                </NavItem>
                <NavItem eventkey={2} ComponentClass={Link} to="/About">
                    About
                </NavItem>
                <NavItem eventkey={3} ComponentClass={Link} to="/News">
                    News
                </NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
