import CardCarousel from '@/components/articles/CardCarousel'
import { Banner } from '@/components/common'
import Header from '@components/teacher_com/Header'
import ArticleHead from '@components/articles/ArticleHead'
import React from 'react'
// import Footer from '@/components/common'


export default function reviewList() {
  return (
    <div>
      <Header />
      <Banner />
      <ArticleHead/>
      <CardCarousel />
     {/* <Footer /> */}


    </div>
  )
}
