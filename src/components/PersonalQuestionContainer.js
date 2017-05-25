import { connect } from 'react-redux';
import { addQuestion } from '../actions/actions';
import PersonalQuestion from './PersonalQuestion';

const mapStateToProps = (state) => {
  return { question: state.submitQuestion}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (question, id) => {
      dispatch(addQuestion(question, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalQuestion)
