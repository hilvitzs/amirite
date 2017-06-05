import { connect } from 'react-redux';
import { getNews } from '../actions/actions';
import News from './News';

const mapStateToProps = (state) => {
  return { news: state.newsReducer.articles }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNewsApi: (news) => dispatch(getNews(news)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
