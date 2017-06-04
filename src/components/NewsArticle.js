import React from 'react';


const NewsArticle = ({article}) => {
  return (
    <section className='full-article'>
      <p>{article.title}</p>
      <p>{article.author}</p>
      <p>{article.description}</p>
      <img src={article.urlToImage} alt='news-article'/>
      <a href={article.url}>{article.url}</a>j
    </section>
  )
}

export default NewsArticle;
