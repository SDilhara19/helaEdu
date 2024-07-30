import { Footer } from "@/components/common";
import Header from "@components/common/Header";
import React from "react";
import EditArticle from "@/components/articles/EditArticle";

export default function EditArticleForm() {
  return (
    <div>
      <Header />
      <EditArticle />
      <Footer />
    </div>
  );
}
