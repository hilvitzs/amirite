import React, { Component } from 'react';

class PersonalQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = { question: '' }
  }

  render() {
    const { handleSubmit, questions } = this.props;

    return(
      <section>
        <input value={this.state.question}
               placeholder='Ask a question...'
               onChange={e => this.setState({ question: e.target.value})} />
        <button onClick={e => handleSubmit(this.state.question, Date.now())}>Submit Question</button>
        <div>
          {questions.map((question, id) => {
            console.log(question);
            return (
              <section key={id}>{question.question}</section>
            )
          })}
        </div>
      </section>
    )
  }
}

export default PersonalQuestion;
