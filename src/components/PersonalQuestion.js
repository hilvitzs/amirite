import React, { Component } from 'react';

class PersonalQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = { question: '' }
  }

  render() {
    const { handleSubmit, questions, handleScoreChange } = this.props;

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
                <p>{question.score}</p>
                <button onClick={e => handleScoreChange(question.id)}>Upvote</button>
                <button>Downvote</button>
              </section>
            )
          })}
        </div>
      </section>
    )
  }
}

export default PersonalQuestion;
