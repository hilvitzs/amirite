import React from 'react';
import NewsArticle from './NewsArticle';

const News = ({ news }) => {
  console.log(news);
  if (!news) {
    return(
      <section>loading...</section>
    )
  }

  return(
    <section className='news-section'>
      <h1>News</h1>
      {news.map((article, index) => {
        return (
          <section key={index} className='news-section'>
            <NewsArticle article={article}/>
          </section>
        )
      })}
    </section>
  )
}

export default News;
