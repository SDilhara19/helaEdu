import TableRawStudents from '@components/admin/TableRowStudents';
import { Header, Footer } from '@components/common';
import React ,{useState} from 'react';
import Pagination from '@components/articles/Pagination';
const student = [
    {
      studentId: 1,
      firstName: 'M.perera',
      email: 'perera23@gmail.com',
      Grade:'6',
     
    },
    {
        studentId: 4,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        Grade:'6',
        
      },
      {
        studentId: 5,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        Grade:'6',
      },
      {
        studentId: 6,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        Grade:'6',
      }
    
  ];
  
export default function Students() {

    const [currentPage, setCurrentPage] = useState(1);
    
    const rowsPerPage = 7;
    const totalPages = Math.ceil(student.length / rowsPerPage);

    const currentRows = student.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    ).map((student, index) => (
        <TableRawStudents
        key={student.studentId}
        studentId={student.studentId}
        firstName={student.firstName}
        email={student.email}
        
       
        />
    ));
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

  return (
    <div>
     
      <div className=' my-28 z-50'>
       
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

    </div>
  );
}
