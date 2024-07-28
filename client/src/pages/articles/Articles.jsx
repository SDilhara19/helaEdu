import React, { useState, useEffect } from "react";
import { Header, Footer } from "@/components/common";
import ArticleCard from "@components/articles/ArticleCard";
import { approvedArticles } from "@/services/ArticleService";
import { getUserDetails } from "@/services/TeacherService";
import ArticleHead from "@/components/articles/ArticleHead";
import { Link } from "react-router-dom";
import banner from "@assets/img/subject_background.png";

const Articles = () => {
  const [articles, setArticles] = useState([]); // Initialize articles state

  useEffect(() => {
    const fetchApprovedArticles = async () => {
      try {
        const response = await approvedArticles();
        const articles = response.data.slice(0, 3);
        console.log(articles);

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
    <>
      <Header />
      <div className="subject-catalog">
        <img className="catalog-img" src={banner} alt="" srcset="" />

        <div className="">
          <ArticleHead />
          <div className="mx-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {articles.map((article) => (
              <div key={article.articleId} className="p-2">
                <Link to={`/readArticles/${article.articleId}`}>
                  <ArticleCard
                    key={article.articleId}
                    imageUrl={article.imageRef}
                    profilePictureUrl={article.profilePictureUrl}
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
      </div>
      {/* <div className="min-h-128  " >
        <ArticleHead />
        <div className="mx-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article) => (
            <div key={article.articleId} className="p-2">
              <Link to={`/readArticles/${article.articleId}`}>
                <ArticleCard
                  key={article.articleId}
                  imageUrl={article.imageRef}
                  profilePictureUrl={article.profilePictureUrl}
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
      </div> */}
      <Footer />
    </>
  );
};

export default Articles;
