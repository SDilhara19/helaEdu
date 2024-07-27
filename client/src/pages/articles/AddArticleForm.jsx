import { Header, Footer } from "@/components/common";
import React from "react";
import AddArticlesForm from "@/components/articles/AddArticlesForm";

export default function AddArticleForm() {
  return (
    <div>
      <Header />
      <AddArticlesForm />
      <Footer />
    </div>
  );
}
