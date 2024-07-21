import React , { useState, useEffect } from "react";
import { Footer } from "@/components/common";
import Header from "@components/teacher_com/Header";
import Banner from "../../components/articles/Banner";
// import ArticleCards from '@/components/articles/ArticleHead';
import ArticleCard from '@components/articles/ArticleCard';
import { approvedArticles } from '@/services/ArticleService';
import ArticleHead from "@/components/articles/ArticleHead";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]); // Initialize articles state

  useEffect(() => {
    const fetchApprovedArticles = async () => {
      try {
        const response = await approvedArticles();
        setArticles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApprovedArticles();
  }, []);

  return (
    <>
      <Header />
     
      <div className="">
        <ArticleHead />

        <div className=" mx-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
        {/* <CardCarousel /> */}
      </div>
     
      {/* <Link to="/readArticles"> */}
      {/* <CardCarousel /> */}
      {/* </Link> */}

      

      <br></br>
      <iframe></iframe>
      <Footer />
    </>
  );
};
export default Articles;
