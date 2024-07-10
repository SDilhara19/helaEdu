
import { Landing } from "@/components/landing";
import {  Route, Routes } from 'react-router-dom';
import Quiz from "./pages/quizes/Quiz";
import Articles from "./pages/articles/Articles";
import ReadArticles from "./pages/articles/ReadArticles";
import Dashboard from "./pages/admin/Dashboard";
import ModeratorManagement from "./pages/admin/ModeratorManagement";
import Notifications from "./pages/admin/Notifications";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";
import ModeratorDetails from "./pages/admin/ModeratorDetails";


function App() {
  return (
    <div>
  
      <Routes>
    {/* http://localhost:5173/ */}
    <Route path="/" element={<Landing />}></Route>
    {/* http://localhost:5173/quiz */}
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/readArticles" element={<ReadArticles />}></Route>
        <Route path="/dashboard" element ={<Dashboard/>}></Route>
        <Route path="/ModeratorManagement" element={<ModeratorManagement/>}></Route>
        <Route path="/Notifications" element={<Notifications/>}></Route>
        <Route path="/Reports" element={<Reports/>}></Route>
        <Route path="/Settings" element={<Settings/>}></Route>
        <Route path="/ModeratorDetails" element={<ModeratorDetails/>}></Route>
       
      </Routes>
   
   </div> 
  )  
}
export default App;


