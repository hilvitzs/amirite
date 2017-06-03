import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  questionReducer,
  newsReducer
})

export default rootReducer;
