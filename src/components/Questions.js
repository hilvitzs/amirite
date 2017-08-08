import React from 'react';
import Question from './Question'

const Questions = ({handleSideOneIncrease, handleSideTwoIncrease, questions}) => {
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
      {questions.map(question => {
        return (
          <Question {...question} key={question.id} handleSideOneIncrease={handleSideOneIncrease} handleSideTwoIncrease={handleSideTwoIncrease}/>
        )
      })}
    </div>
  )
}

export default Questions;
