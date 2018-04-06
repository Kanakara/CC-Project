import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/layout';
import Home from './components/home';
import ContactUs from './components/contactUs';
import Login from './components/login';
import Register from './components/registerPage';

const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/Login' component={ Login } />
    <Route path='/ContactUs' component={ ContactUs } />
    <Route path='/Register' component={ Register } />
</Layout>;

export default routes;