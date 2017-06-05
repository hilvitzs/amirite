import { connect } from 'react-redux';
import { addQuestion } from '../actions/actions';
import SubmitQuestion from './SubmitQuestion';

const mapStateToProps = (state) => {
  return { questions: state.questionReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (question, id) => {
      dispatch(addQuestion(question, id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitQuestion)
