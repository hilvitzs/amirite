import * as actions from './actions';

describe('Actions', () => {
  it('should get News', () => {
    const news = {
      articles: [],
      sortBy: 'top',
      source: 'cnn',
      status: 'ok'
    }

    const action = actions.accessNews(news)

    const returnedObject = {
      type: 'ACCESS_NEWS',
      news
    }

    expect(action).toEqual(returnedObject)
  })

  it('should add a question', () => {
    const question = 'something';

    const id = 1;

    const action = actions.addQuestion(question, id)

    const returnedObject = {
      type: 'ADD_QUESTION',
      question,
      id
    }

    expect(action).toEqual(returnedObject)
  })

  it('should increase score', () => {
    const id = 1;

    const action = actions.increaseSideOne(id);

    const returnedObject = {
      type: 'INCREASE_SIDEONE',
      id
    }

    expect(action).toEqual(returnedObject);
  })

  it('should decrease score', () => {
    const id = 1;

    const action = actions.increaseSideTwo(id);

    const returnedObject = {
      type: 'INCREASE_SIDETWO',
      id
    }

    expect(action).toEqual(returnedObject);
  })
})
