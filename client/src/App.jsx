import { Landing } from "@/components/landing";
import { Route, Routes } from "react-router-dom";
import Quiz from "@pages/quizes/Quiz";
import QuizHome from "@pages/quizes/QuizHome";
import Articles from "@pages/articles/Articles";
import ReadArticles from "@pages/articles/ReadArticles";
import Auth from "@pages/auth/Auth";
import AddArticles from "@pages/articles/AddArticles";
import AddArticleForm from "@pages/articles/AddArticleForm";
import ReviewList from "@pages/articles/reviewList";
import ReviewArticle from "@pages/articles/ReviewArticle";
import AssignmentList from "@pages/assignments/AssignmentList";
import CreateAssignments from "@pages/assignments/CreateAssignments";
import QuizFormat from "@pages/assignments/QuizFormat";
import T_profile from "@pages/profiles/T_profile";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        {/* http://localhost:5173/quiz */}
        <Route path='/quiz' element={<QuizHome />}></Route>
        {/* http://localhost:5173/quiz/id */}
         <Route path='/quiz/1' element={<Quiz />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/readArticles" element={<ReadArticles />}></Route>
        <Route path="/addArticles" element={<AddArticles />}></Route>
        <Route path="/addArticleForm" element={<AddArticleForm />}></Route>
        <Route path="/reviewList" element={<ReviewList />}></Route>
        <Route path="/reviewArticle" element={<ReviewArticle />}></Route>
        <Route path="/assignmentList" element={<AssignmentList />}></Route>
        <Route path="/t_profile" element={<T_profile/>} ></Route>
        <Route
          path="/createAssignments"
          element={<CreateAssignments />}
        ></Route>
        <Route path="/quizFormat" element={<QuizFormat/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
