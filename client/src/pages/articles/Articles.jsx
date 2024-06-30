import React from 'react'
import { Footer } from '@/components/common';
import Header  from "@/components/teacher_com/Header";
import Banner from '../../components/articles/Banner'
// import ArticleCards from '@/components/articles/ArticleHead';
import AddArticleBtn from '@/components/articles/AddArticleBtn';
import { Link } from 'react-router-dom';
import CardCarousel from '@/components/articles/CardCarousel';
import ArticleHead from '@/components/articles/ArticleHead';
const Articles = () => {
  return (
    <>
        <Header/>
        <Banner />
        <ArticleHead />
        {/* <Link to="/readArticles"> */}
            <CardCarousel/>
        {/* </Link> */}
        
        <Link to="/addArticleForm">
            <AddArticleBtn  buttonText="Add your Article" />
        </Link>
        
        <br></br>
        <iframe></iframe>
        <Footer />
    </>
  )
}
export default Articles;