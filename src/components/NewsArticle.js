import React, { Component } from 'react';
import D3PieChart from './ReactExample';


class NewsArticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sideOne: 1,
      sideTwo: 1,
    }
  }

  increaseSideOne() {
    this.setState({ sideONe: this.state.sideOne++})
  }

  increaseSideTwo() {
    this.setState({ sideTWo: this.state.sideTwo++})
  }

  render() {
    const { article } = this.props;

    return (
      <section className='full-article'>
        <div className='piechart-container'>
          <D3PieChart className='piechart' sideOne={this.state.sideOne} sideTwo={this.state.sideTwo} />
          <button onClick={e => this.increaseSideOne()}>Author's Right</button>
          <button onClick={e => this.increaseSideTwo()}>Author's Wrong</button>
        </div>
        <div className='article-info'>
          <p className='article-title'>{article.title}</p>
          <p className='article-author'>{article.author}</p>
          <p className='article-excerpt'>{article.description}</p>
          <a href={article.url}>{article.url}</a>
        </div>
      </section>
    )
  }
}

export default NewsArticle;
