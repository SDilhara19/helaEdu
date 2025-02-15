import React from 'react';
import ApproveTeachers from '@components/admin/ApproveTeachers';
import TopTeachersPage from "@components/admin/TopTeachersPage"
import Students from "@components/admin/Students";
import Moderators from "@components/admin/Moderators";
import Teachers from '@components/admin/Teachers';

const TableRows = ({ isPending, isStudents, isTeachers, isModerators, isTopTeachers }) => {
  if (isPending) {
    return <ApproveTeachers />;
  }
  
  if (isStudents) {
    return <Students />;
  }
  if (isTeachers) {
    return <Teachers />;
  }
  if (isModerators) {
    return <Moderators />;
  }
  if (isTopTeachers) {
    return <TopTeachersPage />;
  }
  return null;
};

export default TableRows;
