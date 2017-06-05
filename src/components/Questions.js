import React, { Component } from 'react';
import D3PieChartExample from './ReactExample';

class Questions extends Component {
  constructor(props) {
    console.log(props);
    super(props)
  }



  render() {
    const { handleScoreIncrease, handleScoreDecrease, questions} = this.props

    return(
      <div>
        {questions.map((question) => {
          if(!question) {
            return <div>loading...</div>
          }

          return (
            <section key={question.id}>
              <p>{question.question}</p>
              <button onClick={e => handleScoreIncrease(question.id)}>Vote for Side One</button>
              <button onClick={e => handleScoreDecrease(question.id)}>Vote for Side Two</button>
              <D3PieChartExample sideOne={question.sideOne} sideTwo={question.sideTwo} />
            </section>
          )
        })}
      </div>
    )
  }
}

export default Questions;
