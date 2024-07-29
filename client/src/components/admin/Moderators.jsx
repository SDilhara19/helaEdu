import TableRawModerators from '@components/admin/TableRowModerators';
import { Header, Footer } from '@components/common';
import React ,{useState} from 'react';
import Pagination from '@components/articles/Pagination';
const moderator = [
    {
      moderatorId: 1,
      firstName: 'M.perera',
      email: 'perera23@gmail.com',
      Grade:'6',
     
    },
    {
        moderatorId: 4,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        Grade:'6',
        
      },
      {
        moderatorId: 5,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        Grade:'6',
      },
      {
        moderatorId: 6,
        firstName: 'M.perera',
        email: 'perera23@gmail.com',
        Grade:'6',
      }
    
  ];
  
export default function moderators() {

    const [currentPage, setCurrentPage] = useState(1);
    
    const rowsPerPage = 7;
    const totalPages = Math.ceil(moderator.length / rowsPerPage);

    const currentRows = moderator.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    ).map((moderator, index) => (
        <TableRawModerators
        key={moderator.moderatorId}
        moderatorId={moderator.moderatorId}
        firstName={moderator.firstName}
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
            onPageChange={handlePageChange}
            />
      </div>
      </div>

    </div>
  );
}
