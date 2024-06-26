import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quiz from "./pages/quizes/Quiz";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


