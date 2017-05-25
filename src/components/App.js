import React, { Component } from 'react';
import './App.css';

import PersonalQuestionContainer from './PersonalQuestionContainer'
import News from './News';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonalQuestionContainer />
      </div>
    );
  }
}

export default App;
