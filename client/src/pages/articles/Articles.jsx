import React from "react";
import { Footer } from "@components/common";
import Header from "@components/teacher_com/Header";
import Banner from "@components/articles/Banner";
import ArticleCards from "@components/articles/ArticleHead";
import AddArticleBtn from "@components/articles/AddArticleBtn";
const Articles = () => {
  return (
    <>
      <Header />
      <Banner />
      <ArticleCards />
      <AddArticleBtn />
      <br></br>
      <iframe></iframe>
      <Footer />
    </>
  );
};
export default Articles;
