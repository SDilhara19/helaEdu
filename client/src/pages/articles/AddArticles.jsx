import React, { useEffect, useState } from "react";
import Header from "@components/common/Header";
import { Footer } from "@/components/common";
import { listArticlesByTeacher } from "@/services/ArticleService";
import ArticleCardMe from "@components/articles/ArticleCardMe";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import AddArticleBtn from "@components/articles/AddArticleBtn";
import ArticleHead from "@components/articles/ArticleHead";
import Sort from "@components/articles/Sort";
import { Link } from "react-router-dom";
import banner from "@assets/img/subject_background.png";

export default function AddArticles() {
  const authHeader = useAuthHeader();
  const headers = {
    Authorization: authHeader,
  };
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    listArticlesByTeacher(headers)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="subject-catalog">
        <img className="catalog-img" src={banner} alt="" srcSet="" />

        <div className="">
          <ArticleHead />
          <div className="mx-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {articles.map((article) => (
              <div key={article.articleId} className="p-2">
                <Link to={`/articles/viewArticleMyself/${article.articleId}`}>
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
        </div>
      </div>

      <Footer />
    </>
  );
}
