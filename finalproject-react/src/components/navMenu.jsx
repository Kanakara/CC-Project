import React from 'react';
import { Button, Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

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
                        <NavItem eventKey={1}>
                        {/* </NavItem> componentClass={NavLink} to='/'> */}
                        <Link to="home">Home</Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                        {/* </NavItem> componentClass={NavLink} to='/AboutUs'> */}
                        <Link to="AboutUs">About Us</Link>    
                        </NavItem>
                        <NavItem eventKey={3}>
                        {/* </NavItem> componentClass={NavLink} to='/contactUs'> */}
                        <Link to="contactUs">Contact Us</Link>    
                        </NavItem>
                        <NavItem eventKey={4}>
                        {/* </NavItem> componentClass={NavLink} to='/registerPage'> */}
                        <Link to="registerPage">Register</Link>
                        </NavItem>
                        <NavItem eventKey={5}>
                        {/* </NavItem> componentClass={NavLink} to='/login'> */}
                        <Link to="login">Log In</Link>    
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            );
    }
}

export default NavMenu;
