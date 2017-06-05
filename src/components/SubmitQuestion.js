import React, { Component } from 'react';

class SubmitQuestion extends Component {
  constructor(props) {
    console.log(props.history);
    super(props)

    this.state = { question: '' }
  }

  render() {
    const { handleSubmit, history } = this.props;

    return(
      <section>
        <h1>Submit a Question:</h1>
        <input value={this.state.question}
               placeholder='Ask a question...'
               onChange={e => this.setState({ question: e.target.value})} />
        <button onClick={e => {handleSubmit(this.state.question, Date.now()), history.replace(`/questions`)}}>Submit Question</button>
      </section>
    )
  }
}

export default SubmitQuestion;
