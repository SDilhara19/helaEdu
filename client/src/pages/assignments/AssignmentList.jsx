import TableRaw from "@components/assignments/TableRaw";
import { Header, Footer } from "@components/common";
import React, { useState , useEffect } from "react";
import Pagination from "@components/articles/Pagination";
import { Link } from "react-router-dom";
import { listAssignment } from "@services/AssignmentService";
import TableRowHeader from "@components/assignments/TableRowHeader";

export default function AssignmentList() {
  const [assignment, setAssignment] = useState([]); 

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const response = await listAssignment();
        const assignment = response.data;
        console.log(assignment);

       

        setAssignment(assignment);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAssignment();
  }, []);


  
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(assignment.length / rowsPerPage);

  const currentRows = assignment
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    .map((data, index) => (
      <TableRaw
        key={data.assignmentId}
        assignmentId={data.assignmentId}
        title={data.title}
        instruction={data.instructions}
        publishedDate={data.publishedTimestamp}
        totalTime={data.totalTime}
      />
    ));
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-between mx-48 my-12">
        <div>
          <h1>My Assignments</h1>
          <hr className="border-yellow border-t-4 w-full hover:border-white transition duration-300 ease-in-out"></hr>
        </div>
        <div>
          <Link to="/createAssignments">
            <button className="bg-blue text-white rounded-xl p-4 text-3xl">
              Create Assignment
            </button>
          </Link>
        </div>
      </div>
      <TableRowHeader/>
      <div>{currentRows}</div>
      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
}
