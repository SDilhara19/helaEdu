import { Landing } from "@/components/landing";
import { Route, Routes } from "react-router-dom";
import Quiz from "@pages/quizes/Quiz";
import Articles from "@pages/articles/Articles";
import ReadArticles from "@pages/articles/ReadArticles";
import Auth from "@pages/auth/Auth";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/readArticles" element={<ReadArticles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
