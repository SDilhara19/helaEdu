import React, { useEffect, useState } from 'react';
import Header from '@components/teacher_com/Header';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/common';
import { listArticlesByTeacher } from '@/services/ArticleService';

export default function AddArticles() {
  const [articles, setArticles] =useState([])
  useEffect(()=> {
    listArticlesByTeacher().then((response) =>{
      setArticles(response.data);
    }).catch(error=>{
      console.error(error);
    })
    },[])

  return (
    <div>
      <Header />
      <div className='flex justify-between mx-48 my-12'>
        <div>
          <h1>ARTICLES</h1>
          <hr className='border-yellow border-t-4 w-full hover:border-white transition duration-300 ease-in-out'></hr>

        </div>
        
        <div>
          <Link to="/addArticleForm">
            <button className='bg-yellow text-white rounded-xl p-4 text-3xl'>Add Article</button>
          </Link>
        </div>
      </div>
      <div className=" mx-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article) => (
            <div key={article.articleId} className="p-2">
              <Link to={`/readArticles/${article.articleId}`}>
                <ArticleCard
                  key={article.articleId}
                  imageUrl={article.imageRef}
                  authorImageUrl={article.authorImageUrl}
                  authorName={article.authorName}
                  date={article.publishedTimestamp}
                  title={article.title}
                  description={article.content}
                  badges={article.tags}
                />
              </Link>
            </div>
          ))}
      </div>
      
      
      <Footer />
    </div>
  );
}
