import React, { Component } from 'react';
import key from '../key';

class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: [],
    }
  }


  componentWillMount () {
    fetch(`https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=${key}`)
      .then(response => response.json())
      .then(news => console.log(news))
  }


  render () {
    return(
      <section>News</section>
    )
  }
}

export default News;
