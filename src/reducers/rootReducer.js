import { combineReducers } from 'redux';
import submitQuestion from './submitQuestionReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  submitQuestion,
  newsReducer
})

export default rootReducer;
