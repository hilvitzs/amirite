import React from 'react';

const News = ({ news }) => {
  if (!news) {
    return(
      <section>loading...</section>
    )
  }
  console.log(news);
  return(
    <section>
      {news.map((article, index) => {
        return (
          <section key={index}>
            <p>{article.title}</p>
            <p>{article.author}</p>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt='news-article'/>
          </section>
        )
      })}
    </section>
  )
}

export default News;
