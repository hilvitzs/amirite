const questionReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_QUESTION':
      let newQuestion = {id: action.id, question: action.question, sideOne: 1, sideTwo: 1}
      return [...state, newQuestion]
    case 'INCREASE_SIDEONE':
      return state.map(question => {
        if (question.id !== action.id) {
          return question;
        }
        console.log(question.sideOne++);
        return Object.assign({}, question, {sideOne: question.sideOne++})
      })
    case 'INCREASE_SIDETWO':
      return state.map(question => {
        if (question.id !== action.id) {
          return question;
        };
        console.log(question.sideTwo++);
        return Object.assign({}, question, {sideTwo: question.sideTwo++});
    })
    default:
      return state
  }
}

export default questionReducer;
