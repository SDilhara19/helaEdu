import { ArticleRoutes, GlobalRoutes } from "@routes";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/articles/*" element={<ArticleRoutes />} />
        <Route path="/*" element={<GlobalRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
