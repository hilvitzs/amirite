import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import SubmitQuestionContainer from './SubmitQuestionContainer';
import NewsContainer from './NewsContainer';
import Navbar from './Navbar';
import QuestionsContainer from './QuestionsContainer';


class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { history } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <section>
                <Navbar />
                <SubmitQuestionContainer history={history}/>
              </section>
            )
          }}/>
          <Route exact path='/submitQuestion' render={() => {
            return (
              <section>
                <Navbar />
                <SubmitQuestionContainer history={history}/>
              </section>
            )
          }}/>
          <Route exact path='/news' render={() => {
            return (
              <section>
                <Navbar />
                <NewsContainer />
              </section>
            )
          }}/>
          <Route exact path='/questions' render={() => {
            return (
              <section>
                <Navbar />
                <QuestionsContainer />
              </section>
            )
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
