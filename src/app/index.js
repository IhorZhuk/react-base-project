const css = require('./scss/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createHashHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import App from 'Components/app';

import NamesReducer from 'Reducers/names';
import SecondReducer from 'Reducers/second';

const history = createHistory();
const middleware = routerMiddleware(history);

const reducer = combineReducers({
  names: NamesReducer,
  second: SecondReducer,
  router: routerReducer
});

const store = createStore(
  reducer,
  applyMiddleware(middleware)
)
 window.store = store;
 
ReactDOM.render((
  <Provider store={store}>
     <ConnectedRouter history={history}>
        <App />
     </ConnectedRouter>
  </Provider>
), document.getElementById('app'))
