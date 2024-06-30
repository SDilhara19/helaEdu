import AddArticleBtn from '@/components/articles/AddArticleBtn'
import AddComment from '@/components/articles/AddComment'
import CommentList from '@/components/articles/CommentList'
import Comments from '@/components/articles/Comments'
import PopArticleCard from '@/components/articles/PopArticleCard'
import ViewArticle from '@/components/articles/ViewArticle'
import Header from '@/components/teacher_com/Header'
import React from 'react'
import { Footer } from '@/components/common'
import { Link } from 'react-router-dom'
export default function ReadArticle() {
  return (
    <div>
      <Header />
      <div className='flex justify-between'>
        <div className='w-5/6'>
            <ViewArticle />
        </div>
        <div className='m-12'>
            <h1>Top Articles</h1>
            <hr className='border-yellow border-t-4 w-1/4'></hr>
            <br></br>
            <PopArticleCard />
            <PopArticleCard />
            <PopArticleCard />
            <PopArticleCard />
            <PopArticleCard />
            <Link to="/addArticleForm">
                <AddArticleBtn />
            </Link>
           
            <iframe></iframe>
        </div>
        
      </div>
      <div>
            <CommentList />
            {/* <Comments /> */}
        </div>
        <div>
            
            <Footer />
        </div>
          
       
    </div>
  )
}
