import questionReducer from './questionReducer';
import newsReducer from './newsReducer';

describe('reducers testing', () => {
  const question = {
    id: 0,
    question: 'something',
    sideOne: 1,
    sideTwo: 2,
  }

  const news = []

  it('questionReducer should add question', () => {
    const addQuestion = questionReducer(question, 'ADD_QUESTION')

    expect(addQuestion).toEqual(question)
  })

  it('questionReducer should increase side one', () => {
    const sideOne = questionReducer(question, 'INCREASE_SIDEONE')

    const returnedObject = {
      id: 0,
      question: 'something',
      sideOne: 1,
      sideTwo: 2,
    }

    expect(sideOne).toEqual(returnedObject)
  })

  it('questionReducer should increase side two', () => {
    const sideTwo = questionReducer(question, 'INCREASE_SIDETWO')

    const returnedObject = {
      id: 0,
      question: 'something',
      sideOne: 1,
      sideTwo: 2,
    }

    expect(sideTwo).toEqual(returnedObject)
  })

  it('should get the news', () => {
    expect(news.length).toEqual(0)

    const newNews = newsReducer(news, {type: 'ACCESS_NEWS', news: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}] })

    expect(newNews.length).toEqual(10)
  })
})
