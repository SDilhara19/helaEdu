
import { Landing } from "@/components/landing";
import {Route, Routes } from 'react-router-dom';
import Quiz from "./pages/quizes/Quiz";
import QuizHome from "./pages/quizes/QuizHome";

function App() {
  return (
    <div>
    
        <Routes>
          {/* http://localhost:5173/landing */}
          <Route path="/" element={<Landing />}></Route>
          {/* http://localhost:5173/quiz */}
          <Route path='/quiz' element={<QuizHome />}></Route>
          {/* http://localhost:5173/quiz/id */}
          <Route path='/quiz/1' element={<Quiz />}></Route>
        </Routes>


    </div>
  )
}
export default App;


