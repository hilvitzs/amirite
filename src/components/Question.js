import React from 'react';
import D3PieChart from './ReactExample';

const Question = ({ id, question, sideOne, sideTwo, handleSideOneIncrease, handleSideTwoIncrease }) => {
  return (
    <section className='current-question'>
      <div className='piechart-container'>
        <D3PieChart className='piechart' sideOne={sideOne} sideTwo={sideTwo} />
        <button onClick={e => handleSideOneIncrease(id)}>I'm Right</button>
        <button onClick={e => handleSideTwoIncrease(id)}>I'm Wrong</button>
      </div>
      <div className='question-container'>
        <p className='question'>{question}</p>
      </div>
    </section>
  )
}

export default Question;
