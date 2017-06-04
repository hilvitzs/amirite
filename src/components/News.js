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
    <section>
      {news.map((article, index) => {
        return (
          <section key={index}>
            <NewsArticle article={article}/>
          </section>
        )
      })}
    </section>
  )
}

export default News;
