import React from "react";
import Card from "@components/catalog/Card";
import { Header, Footer } from "@components/common";
import banner from "@assets/img/subject_background.png";

function SubjectCatalog() {
  return (
    <>
      <Header />
      <div className="subject-catalog">
        <img className="catalog-img" src={banner} alt="" srcset="" />

        <div className="catalog-ul">
          <Card subject={""} />
          <Card subject={""} />
          <Card subject={""} />
          <Card subject={""} />
          <Card subject={""} />
          <Card subject={""} />
          <Card subject={""} />
          <Card subject={""} />
          <Card subject={""} />
          <Card subject={""} />
          <Card subject={""} />
          <Card subject={""} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SubjectCatalog;
