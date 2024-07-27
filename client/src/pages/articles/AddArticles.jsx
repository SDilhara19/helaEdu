import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "@/components/common";
import { listArticlesByTeacher } from "@/services/ArticleService";
import ArticleCardMe from "@components/articles/ArticleCardMe";
export default function AddArticles() {
  // const [articles, setArticles] =useState([])
  // useEffect(()=> {
  //   listArticlesByTeacher().then((response) =>{
  //     setArticles(response.data);
  //   }).catch(error=>{
  //     console.error(error);
  //   })
  //   },[])
  const articles = [
    {
      id: "1",
      authorName: "K.N. Perera",
      date: "23/3/2024",
      title: "How to Write a Literature Review",
      content:
        "This article provides a comprehensive guide on writing a literature review, covering key aspects and tips for success.</p>",
      badges: ["Literature", "Review", "Writing"],
      status: "pending",
    },
    {
      id: "2",
      authorName: "A.B. Silva",
      date: "12/7/2023",
      title: "The Impact of Climate Change on Coastal Ecosystems",
      content:
        "An in-depth analysis of how climate change is affecting coastal ecosystems, with a focus on long-term consequences and mitigation strategies.</p>",
      badges: ["Climate Change", "Ecosystems", "Environmental Science"],
      status: "pending",
    },
    {
      id: "3",
      authorName: "C.D. Fernando",
      date: "15/5/2023",
      title: "Exploring AI in Modern Healthcare",
      content:
        "A look into the various applications of AI in healthcare, including diagnostics, treatment plans, and patient care improvements.</p>",
      badges: ["AI", "Healthcare", "Technology"],
      status: "pending",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex justify-between mx-48 my-12">
        <div>
          <h1>ARTICLES</h1>
          <hr className="border-yellow border-t-4 w-full hover:border-white transition duration-300 ease-in-out"></hr>
        </div>

        <div>
          <Link to="/addArticleForm">
            <button className="bg-yellow text-white rounded-xl p-4 text-3xl">
              Add Article
            </button>
          </Link>
        </div>
      </div>
      <div className=" mx-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <div key={article.articleId} className="p-2">
            <Link to={`/ViewMyArticles/1`}>
              <ArticleCardMe
                key={article.articleId}
                // imageUrl={article.imageRef}
                // authorImageUrl={article.authorImageUrl}
                authorName={article.authorName}
                date={article.publishedTimestamp}
                title={article.title}
                description={article.content}
                badges={article.tags}
                status={article.status}
              />
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
