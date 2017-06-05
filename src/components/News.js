import React from 'react';
import NewsArticle from './NewsArticle';

const News = ({ news }) => {
  if (!news) {
    return(
      <section>loading...</section>
    )
  }

  return(
    <section>
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
