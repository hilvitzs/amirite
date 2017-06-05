const newsReducer = (state=[], action) => {
  switch (action.type) {
    case 'ACCESS_NEWS':
      return action.news
    default:
      return state;
  }
}

export default newsReducer;
