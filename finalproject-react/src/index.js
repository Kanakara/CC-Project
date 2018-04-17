import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import thunk from 'redux-thunk';
import store from './helpers/store';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

// // import { render } from  'react-dom';
// // import { Route } from 'react-router-dom';
// // import { Provider } from 'react-redux';
// // import home from './components/home';

// // This is the code that is making things not work,
// // because we need to set up the reducers for the project

// {/* // import { ConnectedRouter as Router, routerReducer, routerMiddleware } from 'react-router-redux';
// // import createHistory from 'history/createBrowserHistory';
// // import { createStore, applyMiddleware, combineReducers } from 'redux'; */}

// import registerReducer from './reducers/';

// {/* This will need to be implemented eventually:
// import { ApplicationState }  from './store'; */}

// const history = createHistory();
// const middleware = routerMiddleware(history);

// const initialState = null;
// const reducers = combineReducers({ register: registerReducer, router: routerReducer });


ReactDOM.render(
    // <Provider store={ store }>
    // <Router history={ history } routes={ routes } />
    // </Provider>
    <Main />
    , document.getElementById('root'));
    
registerServiceWorker();

