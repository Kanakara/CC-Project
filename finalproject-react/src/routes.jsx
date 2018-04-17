import React from 'react';
import { render } from 'react-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { Layout } from './components/layout';
import Home from './components/home';
import ContactUs from './components/contactUs';
import Login from './components/login';
import RegisterPage from './components/registerPage';

const routes = ({store}) => (
    <Provider store={store}> 
        <Router>
            <div>
                <Route exact path='/' component={ Home } />
                <Route path='/Login' component={ Login } />
                <Route path='/ContactUs' component={ ContactUs } />
                <Route path='/RegisterPage' component={ RegisterPage } />
            </div>
        </Router>
    </Provider>
);

export default routes;