import React, { useState, useEffect } from "react";
import { Header, Footer } from "@/components/common";
import ArticleCard from "@components/articles/ArticleCard";
import { approvedArticles } from "@/services/ArticleService";
import { getUserDetails } from "@/services/TeacherService";
import ArticleHead from "@/components/articles/ArticleHead";
import { Link } from "react-router-dom";
import banner from "@assets/img/subject_background.png";

const Articles = () => {
  const [articles, setArticles] = useState([]); 
  const [visibleArticles, setVisibleArticles] = useState(8); 

  useEffect(() => {
    const fetchApprovedArticles = async () => {
      try {
        const response = await approvedArticles();
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

  const handleSeeMore = () => {
    setVisibleArticles((prevVisible) => prevVisible + 4); 
  };

  return (
    <>
      <Header />
      <div className="subject-catalog">
        <img className="catalog-img" src={banner} alt="" srcSet="" />

        <div className="">
          <ArticleHead />
          <div className="mx-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {articles.slice(0, visibleArticles).map((article) => (
              <div key={article.articleId} className="p-2">
                <Link to={`/articles/readArticles/${article.articleId}`}>
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

       
          {visibleArticles < articles.length && (
            <div className="text-right mt-4">
              <button
                className=" text-blue px-4 py-2 rounded text-2xl mr-64"
                onClick={handleSeeMore}
              >
                See More
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Articles;
