import TableRawForPending from "@components/admin/TableRowForPending";

import React, { useState } from "react";
import Pagination from "@components/articles/Pagination";


export default function ApproveTeachers() {

  const [isStudent,SetIsStudent]=useState();
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
