import TableRaw from "@components/assignments/TableRaw";
import { Header, Footer } from "@components/common";
import React, { useState , useEffect } from "react";
import Pagination from "@components/articles/Pagination";
import { Link } from "react-router-dom";
import { listAssignment } from "@services/AssignmentService";
import TableRowHeader from "@components/assignments/TableRowHeader";
import { listTeacherDetails } from "@services/TeacherService";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import DetailesView from "@components/assignments/DetailesView";

export default function AssignmentList() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isViewPopup, setIsViewPopupOpen] = useState(false);
  const [assignment, setAssignment] = useState([]); 
  const authHeader = useAuthHeader();
  const headers = {
    Authorization: authHeader,
  };

  const openDeleteModal = () => {
    setIsPopupOpen(true);
  };

  const closeDeleteModal = () => {
    setIsPopupOpen(false);
  };
  const openViewModal = () => {
    setIsViewPopupOpen(true);
  };

  const closeViewModal = () => {
    setIsViewPopupOpen(false);
  };

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const teacherDetails =await listTeacherDetails(headers);
        const teacherResponse = teacherDetails.data.userId;
        console.log(teacherResponse);
        const assignmentDetails = await listAssignment(teacherResponse);
        const assignment = assignmentDetails.data;

        console.log(assignment);
        setAssignment(assignment);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAssignments();
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
        onClose={openDeleteModal}
        onView={openViewModal}
      />
    ));
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-between mx-48 my-12">
      {isPopupOpen && (
          <dialog open className="modal">
            <div className="modal-box max-w-3xl p-10">
              <p className="py-4 text-3xl">
                Are you sure you want to delete this assignment?
              </p>
              <div className="modal-action">
                <button
                  className="btn bg-red-400 text-white text-2xl"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
                <button
                  className="btn bg-blue text-white text-2xl"
                  
                >
                  Delete
                </button>
              </div>
            </div>
          </dialog>
        )}
        {isViewPopup && (
          <dialog open className="modal">
            <div className="modal-box max-w-3xl p-10">
              <DetailesView/>
            </div>
          </dialog>
        )}
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
