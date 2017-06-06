import { connect } from 'react-redux';
import { increaseSideOne } from '../actions/actions';
import { increaseSideTwo } from '../actions/actions';
import Questions from './Questions';

const mapStateToProps = (state) => {
  return { questions: state.questionReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSideOneIncrease: (id) => {
      dispatch(increaseSideOne(id))
    },

    handleSideTwoIncrease: (id) => {
      dispatch(increaseSideTwo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
