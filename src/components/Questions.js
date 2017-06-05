import React from 'react';
import D3PieChart from './ReactExample';

const Questions = ({handleSideOneIncrease, handleSideTwoIncrease, questions}) => {
  console.log(handleSideOneIncrease, handleSideTwoIncrease, questions);
  if(questions.length === 0) {
    return (
      <section>
        <h1>Current Questions</h1>
        <div>Please add a question</div>
      </section>
    )
  }

  return (
    <div>
      <h1>Current Questions</h1>
      {questions.map((question) => {
        return (
          <section key={question.id} className='current-question'>
            <div className='piechart-container'>
              <D3PieChart className='piechart' sideOne={question.sideOne} sideTwo={question.sideTwo} />
              <button onClick={e => handleSideOneIncrease(question.id)}>I'm Right</button>
              <button onClick={e => handleSideTwoIncrease(question.id)}>I'm Wrong</button>
            </div>
            <div className='question-container'>
              <p className='question'>{question.question}</p>
            </div>
          </section>
        )
      })}
    </div>
  )
}


export default Questions;
