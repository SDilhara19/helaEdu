import CardCarouselReview from '@components/articles/CardCarouselReview'
import Banner from '@components/articles/Banner'
import Header from '@components/teacher_com/Header'
import ArticleHead from '@components/articles/ArticleHead'
import React from 'react'
// import Footer from '@components/common'


export default function reviewList() {
  return (
    <div>
      <Header />
      <Banner />
      <ArticleHead/>
      <CardCarouselReview />
      {/* <Footer /> */}


    </div>
  )
}
