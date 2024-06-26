import React from 'react'
import { Header, Footer } from "@/components/common";
import Question from '@/components/Quiz/Question'
import Answers from '@/components/Quiz/Answers';
import SubmitButton from '@/components/Quiz/SubmitButton';

const Quiz = () => {
  return (
    
    <>
    <Header/>
    <Question/>
    <Answers/>
    <SubmitButton/>
    </>
  )
}

export default Quiz