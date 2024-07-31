import TableRawModerators from '@components/admin/TableRowModerators';
import { Header, Footer } from '@components/common';
import React ,{useState , useEffect} from 'react';
import Pagination from '@components/admin/Pagination';
import { listModeratorDetails } from '@services/TeacherService';

export default function Moderators() {
  const [currentPage, setCurrentPage] = useState(1);
  const [moderators, setModerators] = useState([]);
  const totalPages = 2; 
  
  useEffect(() => {
    const fetchModerators = async () => {
        const response = await listModeratorDetails(currentPage);
        setModerators(response.data); 
        console.log(response.data);
    };
    fetchModerators();
  }, [currentPage]);

  const currentRows = moderators.map((moderator) => (
    <TableRawModerators
      key={moderator.userId}
      userId={moderator.userId}
      profileRef={moderator.profilePictureUrl}
      firstName={moderator.firstName}
      lastName={moderator.lastName}
      email={moderator.email}
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
            onPageChange={setCurrentPage}
            />
      </div>
      </div>

    </div>
  );
}
