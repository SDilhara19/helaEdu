import TableRawTeachers from '@components/admin/TableRowTeachers';
import React ,{useState, useEffect} from 'react';
import Pagination from '@components/admin/Pagination';
import { listAllTeachersDetails } from '@services/TeacherService';
  
export default function Teachers() {

    const [currentPage, setCurrentPage] = useState(1);
    const [teachers, setTeachers] = useState([]);
    const totalPages =2;

    useEffect(() => {
      const fetchTeachers = async () => {
          const response = await listAllTeachersDetails(currentPage);
          setTeachers(response.data); 
          console.log(response.data);
      };
      fetchTeachers();
    }, [currentPage]);
    
    const currentRows = teachers
    .map((teacher) => (
        <TableRawTeachers
        key={teacher.teacherId}
        teacherId={teacher.teacherId}
        profileRef={teacher.profilePictureUrl}
        firstName={teacher.firstName}
        lastNAme={teacher.lastName}
        email={teacher.email}
        
       
        />
    ));
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

  return (
    <div>
     
      <div className=' my-28 z-50'>
       
        <div className="min-h-72">
            {currentRows}
        </div>
        <div>
            <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            />
      </div>
      </div>

    </div>
  );
}
