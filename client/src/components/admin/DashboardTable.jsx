import React from 'react';
import DashboardTableRow from '@/components/admin/DashboardTableRow';

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

  return (
    <div>
      {rows.map((row) => (
        <DashboardTableRow 
          key={row.userId}
          userId={row.userId}
          userRole={row.userRole}
          recentActivity={row.recentActivity}
          lastAccessedDate={row.lastAccessedDate}
          lastAccessedTime={row.lastAccessedTime}
        />
      ))}
    </div>
  );
};

export default DashboardTable;
