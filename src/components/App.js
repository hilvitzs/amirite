import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import PersonalQuestionContainer from './PersonalQuestionContainer'
import NewsContainer from './NewsContainer';
import Navbar from './Navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <Navbar />
            )
          }}/>
          <Route exact path='/submitQuestion' render={() => {
            return (
            <PersonalQuestionContainer />
            )
          }}/>
          <Route exact path='/news' render={() => {
            return (
              <NewsContainer />
            )
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
