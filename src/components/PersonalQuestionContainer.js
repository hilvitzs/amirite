import { connect } from 'react-redux';
import { addQuestion } from '../actions/actions';
import { increaseScore } from '../actions/actions';
import PersonalQuestion from './PersonalQuestion';

const mapStateToProps = (state) => {
  return { questions: state.questionReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (question, id) => {
      dispatch(addQuestion(question, id))
    },

    handleScoreChange: (id) => {
      dispatch(increaseScore(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalQuestion)
