import './index.css';

import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { getNews } from './actions/actions'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from '../src/reducers/rootReducer'
import App from './components/App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const enhancers = compose(
  applyMiddleware(thunk),
  devTools
)

const store = createStore(rootReducer, enhancers);
store.dispatch(getNews())

const history = createHistory()

render(
  <Provider store={store} >
    <Router history={history}>
      <Route path='/' component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
