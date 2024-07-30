import TableRawForPending from "@components/admin/TableRowForPending";
import React, { useState, useEffect } from "react";
import Pagination from "@components/articles/Pagination";
import { getPendingTeachers } from "@services/TeacherService";

export default function ApproveTeachers() {
  const [teachers, setTeachers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 7;

  useEffect(() => {
    const fetchPendingTeachers = async () => {
      try {
        const response = await getPendingTeachers();
        const fetchedTeachers = response.data;
        if (Array.isArray(fetchedTeachers)) {
          setTeachers(fetchedTeachers);
        } else {
          setTeachers([]); // Ensure teachers is an array
        }
      } catch (error) {
        console.error(error);
        setTeachers([]); // Handle error by setting teachers to an empty array
      }
    };

    fetchPendingTeachers();
  }, []);

  const totalPages = Math.ceil(teachers.length / rowsPerPage);

  const currentRows = teachers
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    .map((teacher) => (
      <TableRawForPending
        key={teacher.teacherId}
        teacherId={teacher.teacherId}
        firstName={teacher.firstName}
        lastName={teacher.lastName}
        email={teacher.email}
        proofPdf={teacher.proofPdf}
      />
    ));

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="my-28">
        <div className="min-h-72">{currentRows}</div>
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
