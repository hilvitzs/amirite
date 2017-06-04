import { connect } from 'react-redux';
import { addQuestion } from '../actions/actions';
import { increaseScore } from '../actions/actions';
import { decreaseScore } from '../actions/actions';
import PersonalQuestion from './PersonalQuestion';

const mapStateToProps = (state) => {
  return { questions: state.questionReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (question, id) => {
      dispatch(addQuestion(question, id))
    },

    handleScoreIncrease: (id) => {
      dispatch(increaseScore(id))
    },

    handleScoreDecrease: (id) => {
      dispatch(decreaseScore(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalQuestion)
