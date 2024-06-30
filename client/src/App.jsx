import { Landing } from "@/components/landing";
import { Route, Routes } from "react-router-dom";
import Quiz from "./pages/quizes/Quiz";
import Articles from "./pages/articles/Articles";
import ReadArticles from "./pages/articles/ReadArticles";
import AddArticles from "./pages/articles/AddArticles";
import AddArticleForm from "./pages/articles/AddArticleForm";
import ReviewList from "./pages/articles/reviewList";
import ReviewArticle from "./pages/articles/ReviewArticle";
import AssignmentList from "./pages/assignments/AssignmentList";
import createAssignments from "@pages/assignments/createAssignments";
function App() {
  return (
    <div>
      <Routes>
        {/* http://localhost:5173/ */}
        <Route path="/" element={<Landing />}></Route>
        {/* http://localhost:5173/quiz */}
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/readArticles" element={<ReadArticles />}></Route>
        <Route path="/addArticles" element={<AddArticles />}></Route>
        <Route path="/addArticleForm" element={<AddArticleForm />}></Route>
        <Route path="/reviewList" element={<ReviewList />}></Route>
        <Route path="/reviewArticle" element={<ReviewArticle />}></Route>
        <Route path="/assignmentList" element={<AssignmentList/>}></Route>
        <Route path="/createAssignments" element={<createAssignments/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
