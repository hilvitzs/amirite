const questionReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_QUESTION':
      let newQuestion = {id: action.id, question: action.question, score: 0}
      return [...state, newQuestion]
    case 'INCREASE_SCORE':
      return state.map(question => {
        if (question.id !== action.id) {
          return question;
        }
        console.log(question.score++);
        return Object.assign({}, question, {score: question.score++})
      })
    default:
      return state
  }
}

export default questionReducer;
