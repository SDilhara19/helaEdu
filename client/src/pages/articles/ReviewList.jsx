import React, { useState, useEffect } from "react";
import Header from "@components/common/Header";
import ArticleCard from "@components/articles/ArticleCard";
import { pendingArticles } from "@services/ArticleService";
import { getUserDetails } from "@services/TeacherService";
import { Link } from "react-router-dom";
import Sort from "@components/articles/Sort";
import Sidebar from "@components/teacher_com/ModeratorSidebar";

export default function reviewList() {
  const [articles, setArticles] = useState([]); // Initialize articles state

  useEffect(() => {
    const fetchApprovedArticles = async () => {
      try {
        const response = await pendingArticles();
        const articles = response.data;
        console.log(articles);

        const articlesWithUserDetails = await Promise.all(
          articles.map(async (article) => {
            console.log(article.userId);
            const userResponse = await getUserDetails(article.userId); // User ID is passed here
            const userDetails = userResponse.data;
            return {
              ...article,
              firstName: userDetails.firstName,
              lastName: userDetails.lastName,
              coverImage: userDetails.profilePictureUrl,
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
      <div className="dashboard">
        <div className="dashboard-wrapper mb-9">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="content-wrapper mx-32">
            <div className="flex ">
              <div className="my-16 ">
                <h1>Pending Articles</h1>
                <hr className="border-yellow border-t-4 "></hr>
              </div>
            </div>
            <div>
              <Sort />
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {articles.map((article) => (
                <div key={article.articleId} className="p-2">
                  <Link to={`/articles/reviewArticle/${article.articleId}`}>
                    <ArticleCard
                      key={article.articleId}
                      imageUrl={article.imageRef}
                      profilePictureUrl={article.coverImage}
                      firstName={article.firstName}
                      lastName={article.lastName}
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
      </div>
    </>
  );
}
