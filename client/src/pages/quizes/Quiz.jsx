import React from 'react'
import Header from '../../components/Header'
import Question from '../../components/Quiz/Question'
import nightwind from "nightwind/helper"

const Quiz = () => {
  return (
    
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>
    <Header/>
    <Question/>
    <div>Quiz</div>
    </>
  )
}

export default Quiz