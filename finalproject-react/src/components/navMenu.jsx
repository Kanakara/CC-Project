import React from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends React.Component {
    render() {
        return (
            <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink exact to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/login' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/ContactUs' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </div>);
    }
}

export default NavMenu;
