import { combineReducers } from 'redux';
import submitQuestion from './submitQuestionReducer';

const rootReducer = combineReducers({
  submitQuestion,
})

export default rootReducer; 
