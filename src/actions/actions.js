import key from '../key'

export const addQuestion = (question, id) => {
  return {
    type: 'ADD_QUESTION',
    question,
    id,
  }
}

export const accessNews = (news) => {
  return {
    type: 'ACCESS_NEWS',
    news
  }
}


export const getNews = () => {
  return dispatch => {
    fetch(`https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=${key}`)
      .then(response => response.json())
      .then(news => {
        dispatch(accessNews(news))
    })
  }
}

export const increaseScore = (id) => {
  return {
    type: 'INCREASE_SCORE',
    id
  }
}
