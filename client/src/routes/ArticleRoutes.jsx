import React from "react";
import { Route, Routes } from "react-router-dom";
import { userRoles } from "@utils/userRoles";
import AddArticles from "@pages/articles/AddArticles";
import AddArticleForm from "@pages/articles/AddArticleForm";
import ReviewArticle from "@pages/articles/ReviewArticle";
import ReadArticles from "@pages/articles/ReadArticles";
import Articles from "@pages/articles/Articles";
import ReviewList from "@pages/articles/ReviewList";
import AuthorizeRoute from "@utils/AuthorizeRoute";
import ViewArticleMyself from "@pages/articles/ViewArticleMyself";
import EditArticleForm from "@pages/articles/EditArticleForm";

function ArticleRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/readArticles/:articleId" element={<ReadArticles />} />
      <Route
        path="/addArticles"
        element={
          <AuthorizeRoute
            Component={AddArticles}
            allowedUserRole={[userRoles.Teacher, userRoles.Moderator]}
            multiple={true}
          />
        }
      />

      <Route
        path="/addArticleForm"
        element={
          <AuthorizeRoute
            Component={AddArticleForm}
            allowedUserRole={[userRoles.Teacher, userRoles.Moderator]}
            multiple={true}
          />
        }
      />
      <Route path="/reviewArticle/:articleId" element={<ReviewArticle />} />
      <Route path="/reviewList" element={<ReviewList />} />
      <Route path="/editArticle/:articleId" element={<EditArticleForm />} />
      <Route
        path="/viewArticleMyself/:articleId"
        element={<ViewArticleMyself />}
      />
    </Routes>
  );
}

export default ArticleRoutes;
