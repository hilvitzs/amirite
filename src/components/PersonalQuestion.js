import React, { Component } from 'react';
import D3PieChartExample from './ReactExample';


class PersonalQuestion extends Component {
  constructor(props) {
    console.log(props);
    super(props)

    this.state = { question: '' }
  }

  render() {
    const { handleSubmit, questions, handleScoreIncrease, handleScoreDecrease } = this.props;

    return(
      <section>
        <input value={this.state.question}
               placeholder='Ask a question...'
               onChange={e => this.setState({ question: e.target.value})} />
        <button onClick={e => handleSubmit(this.state.question, Date.now())}>Submit Question</button>
        <div>
          {questions.map((question) => {
            return (
              <section key={question.id}>
                <p>{question.question}</p>
                <p>{question.sideOne}</p>
                <p>{question.sideTwo}</p>
                <button onClick={e => handleScoreIncrease(question.id)}>Upvote</button>
                <button onClick={e => handleScoreDecrease(question.id)}>Downvote</button>
                <D3PieChartExample sideOne={question.sideOne} sideTwo={question.sideTwo} />
              </section>
            )
          })}
        </div>
      </section>
    )
  }
}

export default PersonalQuestion;
