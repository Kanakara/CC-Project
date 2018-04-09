import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavMenu extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to={'/'}>Sleepy You</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={NavLink} to='/'>
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={NavLink} to='/about'>
                            About Us
                        </NavItem>
                        <NavItem eventKey={3} componentClass={NavLink} to='/contactUs'>
                            Contact Us
                        </NavItem>
                        <NavItem eventKey={4} componentClass={NavLink} to='/registerPage'>
                            Register
                        </NavItem>
                        <NavItem eventKey={5} componentClass={NavLink} to='/login'>
                            Login
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            );
    }
}

export default NavMenu;
