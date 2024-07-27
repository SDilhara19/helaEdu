import React, { useEffect, useState } from 'react';
import Header from '@components/common/Header';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/common';
import { listArticlesByTeacher } from '@/services/ArticleService';
import ArticleCardMe from '@components/articles/ArticleCardMe';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import AddArticleBtn from '@components/articles/AddArticleBtn';

export default function AddArticles() {
  const authHeader = useAuthHeader();
  const headers = {
    Authorization: authHeader,
  };
  const [articles, setArticles] =useState([])
  useEffect(()=> {
    listArticlesByTeacher(headers).then((response) =>{
      setArticles(response.data);
    }).catch(error=>{
      console.error(error);
    })
    },[])
  

  return (
    <div>
      <Header />
      <div className="flex justify-between mx-48 my-12 min-h-80">
        <div>
          <h1>My Articles</h1>
          <hr className='border-yellow border-t-4 w-full hover:border-white transition duration-300 ease-in-out'></hr>

        </div>

        <div>
          <Link to="/addArticleForm">
            <AddArticleBtn/>
          </Link>
        </div>
      </div>
      <div className=" mx-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article) => (
            <div key={article.articleId} className="p-2">
              <Link to={`/viewArticleMyself/${article.articleId}`}>
                <ArticleCardMe
                  key={article.articleId}
                  imageUrl={article.imageRef}
                  title={article.title}
                  description={article.content}
                  badges={article.tags}
                  status={article.status}
                  date={article.publishedTimestamp}

                />
              </Link>
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
}
