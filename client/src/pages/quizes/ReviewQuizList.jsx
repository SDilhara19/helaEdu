import React from "react";
import { Header, Footer } from "@/components/common";
import Banner from "../../components/Quiz/Banner";
import QuizCard from "@components/Quiz/QuizCard";
import { Link } from "react-router-dom";
//import CardCarousel from "@/components/articles/CardCarousel";
import QuizHead from "@/components/Quiz/QuizHead";
const Articles = () => {
  return (
    <>
      <Header />
      <Banner />
      <QuizHead />
      <QuizCard />

      {/* <Link to="/addArticleForm">
       <AddArticleBtn buttonText="Add your Article" />
      </Link> */}

      <br></br>
      <iframe></iframe>
      <Footer />
    </>
  );
};
export default Articles;
