import React from 'react';
import DashboardTableRow from '@/components/admin/DashboardTableRow';
import DashboardTableHeader from '@/components/admin/DashboardTableHeader';

const DashboardTable = () => {
  const rows = [
    { userId: '1', name: 'K.P.Hewagamage', email: 'usert34@gmail.com', validationProof: 'proof.pdf', subjects: 'mathmatics' },
    { userId: '3', name: 'K.P.Hewagamage', email: 'usert34@gmail.com', validationProof: 'proof.pdf', subjects: 'mathmatics' },
    { userId: '5', name: 'K.P.Hewagamage', email: 'usert34@gmail.com', validationProof: 'proof.pdf', subjects: 'mathmatics' },
    
  ];

  return (
    <div>
      <div>
      <DashboardTableHeader
            user="User"
            name="name"
            email="email"
            validationProof="validationProof"
            subjects="subjects"
          />
        {rows.map((row) => (
          <DashboardTableRow
            key={row.userId}
            name={row.name}
            email={row.email}
            validationProof={row.validationProof}
            subjects={row.subjects}
          />
        ))}
      </div>
      
    </div>
  );
};

export default DashboardTable;
