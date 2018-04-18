import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import RegisterPage from './registerPage';
import { Provider } from 'react-redux';

import Home from './home';
import ContactUs from './contactUs';
import NavMenu from './navMenu';

import store from '../helpers/store';

export class Main extends React.Component {
    render() {
        return (
        <Provider store = {store}>    
        <Router>
            <div>
                <NavMenu />  
                <Route exact path='/' component={Home} />
                <Route path='/ContactUs' component={ ContactUs } />
                <Route path='/RegisterPage' component={ RegisterPage } />
            </div>
        </Router>
        </Provider>
        );
    }
}

export default Main;