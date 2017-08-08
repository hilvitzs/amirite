import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import SubmitQuestionContainer from './SubmitQuestionContainer';
import SubmitQuestion from './SubmitQuestion';

describe('Submit Question', () => {
  const questions = [
    {
      id: 0,
      question: 'something',
      sideOne: 1,
      sideTwo: 1,
    }
  ]

  const mockFn = jest.fn();

  const history = {
    action: "PUSH",
    blocK: mockFn,
    createHref: mockFn,
    go: mockFn,
    goBack: mockFn,
    goForward: mockFn,
    length: 50,
    listen: mockFn,
    location: {},
    push: mockFn,
    replace: mockFn,
  }

  const wrapper = shallow(<SubmitQuestion history={history} questions={questions} handleSubmit={mockFn}/>)


  it('should render a SubmitQuestion', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should render an submit button', () => {
    const button = wrapper.find('button')

    expect(button).toHaveLength(1)
  })

  it('should render an input field', () => {
    const input = wrapper.find('input')

    expect(input).toHaveLength(1)
  })

  it('expect handleSubmit to have been called on button click', () => {
    const button = wrapper.find('.submit-button')

    button.simulate('click')

    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
