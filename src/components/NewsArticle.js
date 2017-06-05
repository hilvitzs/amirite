import React from 'react';


const NewsArticle = ({article}) => {
  return (
    <section className='full-article'>
      <div className='img-container'>
        <img className='news-img' src={article.urlToImage} alt='news-article'/>
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

export default NewsArticle;
