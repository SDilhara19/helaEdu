import React from 'react'
import { Footer } from '@/components/common';
import Header  from "@/components/teacher_com/Header";
import Banner from '../../components/articles/Banner'
import ArticleCards from '@/components/articles/ArticleHead';
import AddArticleBtn from '@/components/articles/AddArticleBtn';
import { Link } from 'react-router-dom';
const Articles = () => {
  return (
    <>
        <Header/>
        <Banner />
        <Link to="/readArticles">
            <ArticleCards/>
        </Link>
        
        <Link to="/addArticleForm">
            <AddArticleBtn  buttonText="Add your Article" />
        </Link>
        
        <br></br>
        <iframe></iframe>
        <Footer />
    </>
  )
}
export default Articles