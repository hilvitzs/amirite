import './index.css';

import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../src/reducers/rootReducer'
import App from './components/App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools);

const history = createHistory()

render(
  <Provider store={store} >
    <Router history={history}>
      <Route path='/' component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
