import React, { useState, useEffect } from 'react';
import Header from '@components/teacher_com/Header'
import ArticleHead from '@components/articles/ArticleHead'
// import Footer from '@components/common'
import ArticleCard from '@components/articles/ArticleCard'
import { pendingArticles } from '@services/ArticleService'
import { getUserDetails } from '@services/TeacherService'
import { Link } from 'react-router-dom';

export default function reviewList() {
  const [articles, setArticles] = useState([]); // Initialize articles state

  useEffect(() => {
    const fetchApprovedArticles = async () => {
      try {
        const response = await pendingArticles();
        const articles = response.data.slice(0,3);
        console.log(articles)

        const articlesWithUserDetails = await Promise.all(
          articles.map(async (article) => {
            console.log(article.userId);
            const userResponse = await getUserDetails(article.userId); // User ID is passed here
            const userDetails = userResponse.data;
            return {
              ...article,
              authorName: userDetails.firstName,
            };
          })
        );
        

        setArticles(articlesWithUserDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApprovedArticles();
  }, []);

  return (
    <div>
      <Header />
      {/* <Banner /> */}
      <ArticleHead/>
      <div className="mx-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article) => (
            <div key={article.articleId} className="p-2">
              <Link to={`/reviewArticle/${article.articleId}`}>
                <ArticleCard
                  key={article.articleId}
                  // imageUrl={article.imageRef}
                  // authorImageUrl={article.authorImageUrl}
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


    </div>
  )
}
