import React, { useState } from 'react';
import DashboardTableRow from '@/components/admin/DashboardTableRow';
import Pagination from '@components/articles/Pagination'; // Ensure you have a Pagination component

const DashboardTable = () => {
  const rows = [
    { userId: '1', userRole: 'Moderator', recentActivity: 'Reviewed Posts', lastAccessedDate: '2024-07-20', lastAccessedTime: '10:15 AM' },
    { userId: '2', userRole: 'Teacher', recentActivity: 'Created Assignment', lastAccessedDate: '2024-07-19', lastAccessedTime: '2:30 PM' },
    { userId: '3', userRole: 'Student', recentActivity: 'Submitted Homework', lastAccessedDate: '2024-07-18', lastAccessedTime: '11:00 AM' },
    { userId: '4', userRole: 'Moderator', recentActivity: 'Deleted User', lastAccessedDate: '2024-07-17', lastAccessedTime: '9:45 AM' },
    { userId: '5', userRole: 'Teacher', recentActivity: 'Updated Profile', lastAccessedDate: '2024-07-16', lastAccessedTime: '3:00 PM' },
    { userId: '6', userRole: 'Student', recentActivity: 'Read Course Material', lastAccessedDate: '2024-07-15', lastAccessedTime: '4:30 PM' },
    { userId: '7', userRole: 'Moderator', recentActivity: 'Approved Post', lastAccessedDate: '2024-07-14', lastAccessedTime: '8:00 AM' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
    
  const rowsPerPage = 7;
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const currentRows = rows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  ).map((row) => (
    <DashboardTableRow 
      key={row.userId}
      userId={row.userId}
      userRole={row.userRole}
      recentActivity={row.recentActivity}
      lastAccessedDate={row.lastAccessedDate}
      lastAccessedTime={row.lastAccessedTime}
    />
  ));

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        {currentRows}
      </div>
      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default DashboardTable;
