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
        <h1>AMIRITE?</h1>
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <section>
                <div className='header'>
                  <Navbar />
                </div>
                <SubmitQuestionContainer history={history}/>
              </section>
            )
          }}/>
          <Route exact path='/submitQuestion' render={() => {
            return (
              <section>
                <div className='header'>
                  <Navbar />
                </div>
                <SubmitQuestionContainer history={history}/>
              </section>
            )
          }}/>
          <Route exact path='/news' render={() => {
            return (
              <section>
                <div className='header'>
                  <Navbar />
                </div>
                <NewsContainer />
              </section>
            )
          }}/>
          <Route exact path='/questions' render={() => {
            return (
              <section>
                <div>
                  <Navbar />
                </div>
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
