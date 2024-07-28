import TableRaw from "@components/assignments/TableRaw";
import { Header, Footer } from "@components/common";
import React, { useState } from "react";
import Pagination from "@components/articles/Pagination";
import { Link } from "react-router-dom";

export default function AssignmentList() {
  const dummyData = [
    {
      assignmentId: "A001",
      title: "Math Homework",
      dueDate: "2024-07-01",
      instruction: "Complete all exercises",
      noOfQuiz: 5,
      totalTime: "1hr",
    },
    {
      assignmentId: "A002",
      title: "Science Project",
      dueDate: "2024-07-05",
      instruction: "Submit the report",
      noOfQuiz: 1,
      totalTime: "3hr",
    },
    {
      assignmentId: "A003",
      title: "History Assignment",
      dueDate: "2024-07-10",
      instruction: "Read chapters 4 and 5",
      noOfQuiz: 3,
      totalTime: "2hr",
    },
    {
      assignmentId: "A004",
      title: "English Essay",
      dueDate: "2024-07-15",
      instruction: "Write an essay on climate change",
      noOfQuiz: 0,
      totalTime: "4hr",
    },
    {
      assignmentId: "A005",
      title: "Geography Quiz",
      dueDate: "2024-07-20",
      instruction: "Study the world map",
      noOfQuiz: 10,
      totalTime: "1.5hr",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(dummyData.length / rowsPerPage);

  const currentRows = dummyData
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    .map((data, index) => (
      <TableRaw
        key={data.assignmentId}
        assignmentId={data.assignmentId}
        title={data.title}
        dueDate={data.dueDate}
        instruction={data.instruction}
        noOfQuiz={data.noOfQuiz}
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
            <button className="bg-yellow text-white rounded-xl p-4 text-3xl">
              Create Assignment
            </button>
          </Link>
        </div>
      </div>
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
