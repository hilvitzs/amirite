import React, { Component } from 'react';
import key from '../key';

class News extends Component {
  constructor(props) {
    super(props)

    this.state = []
  }


  componentWillMount () {
    fetch(`https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=${key}`)
      .then(response => response.JSON())
      .then(news => console.log())
  }


  render () {
    return(
      <section>News</section>
    )
  }
}

export default News;
