
import { Landing } from "@/components/landing";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from "./pages/quizes/Quiz";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
    {/* http://localhost:5173/landing */}
    <Route path="/" element={<Landing />}></Route>
    {/* http://localhost:5173/quiz */}
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
      </BrowserRouter>
      

export default App;


