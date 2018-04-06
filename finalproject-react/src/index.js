import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
// import configureStore from './configureStore';
// import { ApplicationState }  from './store';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

const initialState = null;
const store = createStore(null);

ReactDOM.render(
    <Provider store={ store }>
    <ConnectedRouter history={ history } children={ routes } />
</Provider>, document.getElementById('root'));
registerServiceWorker();
