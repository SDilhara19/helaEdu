import { Landing } from "@/components/landing";
import { Route, Routes } from "react-router-dom";
import Quiz from "@pages/quizes/Quiz";
import QuizHome from "@pages/quizes/QuizHome";
import Articles from "@pages/articles/Articles";
import ReadArticles from "@pages/articles/ReadArticles";
import Auth from "@pages/auth/Auth";
import AddArticles from "@pages/articles/AddArticles";
import AddArticleForm from "@pages/articles/AddArticleForm";
import ReviewList from "@pages/articles/ReviewList";
import ReviewArticle from "@pages/articles/ReviewArticle";
import AssignmentList from "@pages/assignments/AssignmentList";
import CreateAssignments from "@pages/assignments/CreateAssignments";
import QuizFormat from "@pages/assignments/QuizFormat";
import TProfile from "@pages/profiles/TProfile";

import LeaderBoard from "@pages/leaderboard/LeaderBoard";
import QuizEnd from "@pages/quizes/QuizEnd";
import History from "@pages/quizes/History";
import Friends from "@pages/quizes/Friends";
import Dashboard from "@pages/admin/Dashboard";
import ModeratorDetails from "@pages/admin/ModeratorDetails";
// import ModeratorManagement from "@pages/admin/ModeratorManagement";
import Notifications from "@pages/admin/Notifications";
import ApproveTeachers from "@pages/admin/ApproveTeachers";
import TopTeachers from "@pages/admin/TopTeachers";
import SubjectCatalog from "@pages/subjects/SubjectCatalog";
import Chat from "@components/chat/Chat";
import ViewArticleMyself from "@pages/articles/ViewArticleMyself";
import Subject from "@pages/subjects/Subject";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/quiz" element={<QuizHome />} />
        <Route path="/quiz/1" element={<Quiz />} />
        <Route path="/quizend/1" element={<QuizEnd />} />
        <Route path="/history/1" element={<History />} />
        <Route path="/friends/1" element={<Friends />} />
        <Route path="/leaderboard/1" element={<LeaderBoard />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/readArticles/:articleId" element={<ReadArticles />} />
        <Route path="/addArticles" element={<AddArticles />} />
        <Route path="/addArticleForm" element={<AddArticleForm />} />
        <Route path="/reviewList" element={<ReviewList />} />
        <Route path="/reviewArticle/:articleId" element={<ReviewArticle />} />
        <Route path="/assignmentList" element={<AssignmentList />} />
        <Route path="/tProfile" element={<TProfile />} />
        <Route path="/createAssignments" element={<CreateAssignments />} />
        <Route path="/quizFormat" element={<QuizFormat />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/moderatorDetails" element={<ModeratorDetails />} />
        {/* <Route path="/moderatorManagement" element={<ModeratorManagement />} /> */}
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/approveTeachers" element={<ApproveTeachers />} />
        <Route path="/topTeachers" element={<TopTeachers />} />
        <Route path="/viewMyArticles/1" element={<ViewArticleMyself />} />
        <Route path="/subjectCatalog" element={<SubjectCatalog />} />
        <Route path="/subject" element={<Subject />} />
      </Routes>
    </div>
  );
}

export default App;
