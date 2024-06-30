import CardCarousel from '@/components/articles/CardCarousel'
import { Banner } from '@/components/common'
import React from 'react'
import Header from '@/components/common'
import Footer from '@/components/common'


export default function reviewList() {
  return (
    <div>
      <Header />
      <Banner />
      {/* <articleHead /> */}
      <CardCarousel />
      <Footer />


    </div>
  )
}
