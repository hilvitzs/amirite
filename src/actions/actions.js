export const addQuestion = (question, id) => {
  return {
    type: 'ADD_QUESTION',
    question,
    id,
  }
}
