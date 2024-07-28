import TableRawForPending from "@components/admin/TableRowForPending";

import React, { useState } from "react";
import Pagination from "@components/articles/Pagination";
const teacher = [
  {
    teacherId: 1,
    firstName: "M.perera",
    email: "perera23@gmail.com",
    proofPdf: "proof1.pdf",
  },
  {
    teacherId: 2,
    firstName: "A.silva",
    email: "silva24@gmail.com",
    proofPdf: "proof2.pdf",
  },
  {
    teacherId: 3,
    firstName: "D.fernando",
    email: "fernando25@gmail.com",
    proofPdf: "proof3.pdf",
  },
  {
    teacherId: 4,
    firstName: "N.jayasinghe",
    email: "jayasinghe26@gmail.com",
    proofPdf: "proof4.pdf",
  },
  {
    teacherId: 5,
    firstName: "K.ratnayake",
    email: "ratnayake27@gmail.com",
    proofPdf: "proof5.pdf",
  },
  {
    teacherId: 6,
    firstName: "W.karunaratne",
    email: "karunaratne28@gmail.com",
    proofPdf: "proof6.pdf",
  },
  {
    teacherId: 4,
    firstName: "N.jayasinghe",
    email: "jayasinghe26@gmail.com",
    proofPdf: "proof4.pdf",
  },
  {
    teacherId: 5,
    firstName: "K.ratnayake",
    email: "ratnayake27@gmail.com",
    proofPdf: "proof5.pdf",
  },
  {
    teacherId: 6,
    firstName: "W.karunaratne",
    email: "karunaratne28@gmail.com",
    proofPdf: "proof6.pdf",
  },
];

export default function ApproveTeachers() {
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 7;
  const totalPages = Math.ceil(teacher.length / rowsPerPage);

  const currentRows = teacher
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    .map((teacher, index) => (
      <TableRawForPending
        key={teacher.teacherId}
        teacherId={teacher.teacherId}
        firstName={teacher.firstName}
        email={teacher.email}
        proofPdf={teacher.proofPdf}
      />
    ));
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className=" my-28">
        <div>{currentRows}</div>
        <div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
