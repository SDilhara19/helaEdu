import PopArticleCard from '@/components/articles/PopArticleCard'
import ViewArticle from '@/components/articles/ViewArticle'
import Header from '@/components/teacher_com/Header'
import React from 'react'

export default function ViewArticle() {
  return (
    <div>
      <Header />
      <div className='flex justify-between'>
        <ViewArticle />
        <PopArticleCard />
      </div>
    </div>
  )
}
