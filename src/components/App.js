import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import PersonalQuestionContainer from './PersonalQuestionContainer'
import News from './News';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/' render={() => {
          return (
          <PersonalQuestionContainer />
          )
        }}/>
        <Route exact path='/Home' render={() => {
          return (
            <News />
          )
        }}/>
      </Switch>
      </div>
    );
  }
}

export default App;
