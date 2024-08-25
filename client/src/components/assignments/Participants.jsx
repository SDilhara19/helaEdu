import React , {useState} from 'react'
import TableRowHeaderReviewed from './TableRowHeaderReviewed';
import ReviewedTableRow from '@components/assignments/ReviewedTableRow';
import Pagination from '@components/articles/Pagination';

export default function Participants() {
    const participants = [
        { name: 'John Doe', email: 'john.doe@example.com', score: 85 },
        { name: 'Jane Smith', email: 'jane.smith@example.com', score: 92 },
        { name: 'Bob Johnson', email: 'bob.johnson@example.com', score: 78 },
        { name: 'Alice Williams', email: 'alice.williams@example.com', score: 88 },
        { name: 'Charlie Brown', email: 'charlie.brown@example.com', score: 94 },
        { name: 'Emily Davis', email: 'emily.davis@example.com', score: 82 },
      ];
      const [currentPage, setCurrentPage] = useState(1);
      const rowsPerPage = 7; 
      const totalPages = Math.ceil(participants.length / rowsPerPage);
    
      const currentRows = participants
        .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
        .map((participant, index) => (
          <ReviewedTableRow
            key={index}
            name={participant.name}
            email={participant.email}
            score={participant.score}
          />
        ));
    
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
  return (
    <div>
       <h1>Participants</h1>
            <TableRowHeaderReviewed/>
            <div>{currentRows}</div>
      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
  
    </div>
  )
}
