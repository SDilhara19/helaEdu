import CardCarousel from '@/components/articles/CardCarousel'
import { Banner, Header } from '@/components/common'
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
