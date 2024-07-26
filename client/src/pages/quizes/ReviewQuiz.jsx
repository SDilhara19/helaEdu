import React from "react";
import { Header, Footer } from "@/components/common";
import Question from "@/components/Quiz/Question";
import Answers from "@/components/Quiz/Answer";
import RegenarateButton from "@/components/Quiz/RegenarateButton";

const Quiz = () => {
  return (
    <>
      <Header />
      <Question />
      <Answers />
      <RegenarateButton />
      <Footer />
    </>
  );
};

export default Quiz;
