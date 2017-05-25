import React, { Component } from 'react';

class PersonalQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = { question: '' }
  }

  render() {
    const { handleSubmit, question } = this.props;
    console.log(question);

    return(
      <section>
        <input value={this.state.question}
               placeholder='Ask a question...'
               onChange={e => this.setState({ question: e.target.value})} />
        <button onClick={e => handleSubmit(this.state.question, question.length)}>Submit Question</button>
      </section>
    )
  }
}

export default PersonalQuestion;
