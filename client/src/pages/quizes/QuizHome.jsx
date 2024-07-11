import { Footer, Header } from '@/components/common'
import React from 'react'
import HomeBanner from '@/components/Quiz/HomeBanner'
import Subjects from '@/components/Quiz/Subjects'
const QuizHome = () => {
  return (
    <div>
        <Header/>
        <HomeBanner />
        <Subjects />
        {/* <Footer /> */}
    </div>
  )
}

export default QuizHome