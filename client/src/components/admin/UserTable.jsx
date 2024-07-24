import React from 'react';
import UserTableRow from './UserTableRow'; // Adjust the import path as necessary

const Table = () => {
  const rows = [
    { userId: '1', name: 'John Doe', email: 'john@example.com', status: 'Approved' },
    { userId: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Not Approved' },
    { userId: '3', name: 'Alice Johnson', email: 'alice@example.com', status: 'Approved' },
    { userId: '4', name: 'Bob Brown', email: 'bob@example.com', status: 'Not Approved' },
    { userId: '5', name: 'Carol White', email: 'carol@example.com', status: 'Approved' },
    { userId: '6', name: 'David Green', email: 'david@example.com', status: 'Not Approved' },
    { userId: '7', name: 'Eve Black', email: 'eve@example.com', status: 'Approved' },
    { userId: '8', name: 'Bob Brown', email: 'bob@example.com', status: 'Not Approved' },
    { userId: '9', name: 'Carol White', email: 'carol@example.com', status: 'Approved' },
    { userId: '10', name: 'David Green', email: 'david@example.com', status: 'Not Approved' },
    { userId: '11', name: 'Eve Black', email: 'eve@example.com', status: 'Approved' }
  ];

  return (
    <div style={{ marginLeft: '-60px',marginRight: '100PX' }}>
      {rows.map((row) => (
        <UserTableRow 
          key={row.userId}
          userId={row.userId}
          name={row.name}
          email={row.email}
          status={row.status}
        />
      ))}
    </div>
  );
};

export default Table;
