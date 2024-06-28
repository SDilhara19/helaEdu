import { Landing } from "@/components/landing";
import { Route, Routes } from "react-router-dom";
import Quiz from "./pages/quizes/Quiz";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </div>
  );
}

export default App;
