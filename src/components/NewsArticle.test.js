import React from 'react';
import { shallow, mount } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('News Article', () => {
  const article = {
    author: '',
    description: '',
    publishedAt: '',
    title: 'something',
    url: '',
    urlToImage: '',
  }

  const wrapper = shallow(<NewsArticle article={article}/>)

  it('should render article title', () => {

    expect(wrapper.find('.article-title')).toHaveLength(1)
  })

  it('should render article author', () => {
    expect(wrapper.find('.article-author')).toHaveLength(1)
  })

  it('should render article author', () => {
    expect(wrapper.find('.article-excerpt')).toHaveLength(1)
  })
})
