import { Footer} from '@/components/common'
import Header from '@components/teacher_com/Header'
import React from 'react'
import AddArticlesForm from '@/components/articles/AddArticlesForm'
export default function AddArticleForm() {
  return (
    <div>
      <Header />
      <AddArticlesForm />
      <Footer />
    </div>
  )
}
