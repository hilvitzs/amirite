import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question';

describe('Question', () => {
  const question = {
    id: '',
    question: '',
    sideOne: 1,
    sideTwo: 1
  }

  const wrapper = shallow(<Question {...question} />)

  it('should render a question', () => {
    expect(wrapper.find('.question')).toHaveLength(1)
  })

  it('should render a D3PieChart', () => {
    expect(wrapper.find('.piechart')).toHaveLength(1)
  })
})
