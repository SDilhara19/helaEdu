import React from "react";
import Card from "@components/catalog/Card";
import { Header, Footer } from "@components/common";
import banner from "@assets/img/subject_background.png";

function SubjectCatalog() {
  const subjects = [
    "BusinessStudies",
    "Catholicism",
    "Geography",
    "HealthScience",
    "ICT",
    "Mathematics",
    "Science",
  ];
  return (
    <>
      <Header />
      <div className="subject-catalog">
        <img className="catalog-img" src={banner} alt="" />

        <div className="catalog-ul">
          {subjects.map((subject, index) => (
            <Card key={index} subject={subject} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SubjectCatalog;
