import TableRawTopTeachers from '@components/admin/TableRowTopTeachers';
import { Header, Footer } from '@components/common';
import React ,{useState} from 'react';
import Pagination from '@components/articles/Pagination';
const teacher = [
    {
      teacherId: 1,
      firstName: 'M.perera',
      email: 'perera23@gmail.com',
      contactNo: '0766767678',
      subjects:'sinhala,english'
    },
    {
        teacherId: 4,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        contactNo: '0766767678',
        subjects:'sinhala,english'
      },
      {
        teacherId: 5,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        contactNo: '0766767678',
        subjects:'sinhala,english'
      },
      {
        teacherId: 6,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        contactNo: '0766767678',
        subjects:'sinhala,english'
      }
    
  ];
  
export default function TopTeachers() {

    const [currentPage, setCurrentPage] = useState(1);
    
    const rowsPerPage = 7;
    const totalPages = Math.ceil(teacher.length / rowsPerPage);

    const currentRows = teacher.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    ).map((teacher, index) => (
        <TableRawTopTeachers
        key={teacher.teacherId}
        teacherId={teacher.teacherId}
        firstName={teacher.firstName}
        email={teacher.email}
        contactNo={teacher.contactNo}
        subjects={teacher.subjects}
       
        />
    ));
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

  return (
    <div>
      <Header />
      <div className='mx-24 my-8'>
        <h1>Top Teachers</h1>
        <hr className='border-yellow border-t-4 w-1/4' />
        <br></br>
        <br></br>
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

      <Footer />
    </div>
  );
}
