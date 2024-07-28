import TableRawTeachers from '@components/admin/TableRowTeachers';
import { Header, Footer } from '@components/common';
import React ,{useState} from 'react';
import Pagination from '@components/articles/Pagination';
const teacher = [
    {
      teacherId: 1,
      firstName: 'M.perera',
      email: 'perera23@gmail.com',
      Grade:'6',
     
    },
    {
        teacherId: 4,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        Grade:'6',
        
      },
      {
        teacherId: 5,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        Grade:'6',
      },
      {
        teacherId: 6,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        Grade:'6',
      }
    
  ];
  
export default function Teachers() {

    const [currentPage, setCurrentPage] = useState(1);
    
    const rowsPerPage = 7;
    const totalPages = Math.ceil(teacher.length / rowsPerPage);

    const currentRows = teacher.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    ).map((teacher, index) => (
        <TableRawTeachers
        key={teacher.teacherId}
        teacherId={teacher.teacherId}
        firstName={teacher.firstName}
        email={teacher.email}
        
       
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
