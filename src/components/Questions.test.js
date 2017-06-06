import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import QuestionsContainer from './QuestionsContainer';
import Questions from './Questions';

describe('QuestionsContainer', () => {
  const mockFn = jest.fn();
  const handleSideOneIncrease = mockFn;
  const handleSideTwoIncrease = mockFn;

  const questions = [
    {
      id: 0,
      question: 'something',
      sideOne: 1,
      sideTwo: 1,
    }
  ]

  const mockStore = configureMockStore() ({
    handleSideOneIncrease: handleSideOneIncrease,
    handleSideTwoIncrease: handleSideTwoIncrease,
    questions: questions
  })


  const setup = () => {
    const Container = mount(<Provider store={mockStore}><QuestionsContainer /></Provider>)
    const Component = Container.find(Questions)

    return (
      {
        Container,
        Component
      }
    )
  }


  const { Container, Component } = setup();

  it.only('should render questions', () => {
    console.log("********HERE********");
    const wrapper = shallow(<Questions handleSideOneIncrease={mockFn} handleSideTwoIncrease={mockFn} questions={questions} />)
    console.log(wrapper.debug());
    expect(wrapper.length).toEqual(1)
  })

  it('should render question information', () => {
    expect(Object.keys(Component.props())).toContain('.question')
  })
})
