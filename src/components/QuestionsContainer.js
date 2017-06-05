import { connect } from 'react-redux';
import { increaseScore } from '../actions/actions';
import { decreaseScore } from '../actions/actions';
import Questions from './Questions';

const mapStateToProps = (state) => {
  console.log(state);
  return { questions: state.questionReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleScoreIncrease: (id) => {
      dispatch(increaseScore(id))
    },

    handleScoreDecrease: (id) => {
      dispatch(decreaseScore(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
