import React from 'react';
import PendingRequests from "@components/articles/CommentList";
// import Students from "@pages/admin/Students";
// import Teachers from "@pages/admin/Teachers";
// import Moderators from "@pages/admin/Moderators";
import TopTeachers from "@pages/admin/TopTeachers";

const TableRows = ({ isPending, isStudents, isTeachers, isModerators, isTopTeachers }) => {
  if (isPending) {
    return <PendingRequests />;
  }
  {isPending ? (
    <PendingRequests/>
  ):(
    <div>hiii</div>
  )}
//   if (isStudents) {
//     return <Students />;
//   }
//   if (isTeachers) {
//     return <Teachers />;
//   }
//   if (isModerators) {
//     return <Moderators />;
//   }
  if (isTopTeachers) {
    return <TopTeachers />;
  }
  return null;
};

export default TableRows;
