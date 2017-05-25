const submitQuestion = (state=[], action) => {
  switch(action.type) {
    case 'ADD_QUESTION':
      let newQuestion = {id: action.id, question: action.question}
      return [...state, newQuestion]
    default:
      return state
  }
}

export default submitQuestion;
