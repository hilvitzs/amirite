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
  const wrapper = shallow(<SubmitQuestion history={{}} questions={questions} handleSubmit={mockFn}/>)

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
    const button = wrapper.find('button')

    button.simulate('click')

    expect(handleSubmit).toHaveBeenCalled(1)
  })
})
