import React, { useState } from 'react';
import Header from '@/components/teacher_com/Header';
import TableRaw from '@/components/articles/TableRaw';
import Pagination from '@/components/articles/Pagination';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/common';

export default function AddArticles() {
  const [currentPage, setCurrentPage] = useState(1);

  const tableRows = [
    <TableRaw key="1" />,
    <TableRaw key="2" />,
    <TableRaw key="3" />,
    <TableRaw key="4" />,
    <TableRaw key="5" />,
    <TableRaw key="6" />,
    <TableRaw key="7" />,
    <TableRaw key="8" />,
    <TableRaw key="9" />,
    <TableRaw key="10" />
    // Add as many TableRaw components as needed
  ];

  const rowsPerPage = 7;
  const totalPages = Math.ceil(tableRows.length / rowsPerPage);

  const currentRows = tableRows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      <div className='flex justify-between mx-48 my-12'>
        <div>
          <h1>ARTICLES</h1>
          <hr className='border-yellow border-t-4 w-full hover:border-white transition duration-300 ease-in-out'></hr>
        </div>
        <div>
          <Link to="/addArticleForm">
            <button className='bg-yellow text-white rounded-xl p-4 text-3xl'>Add Article</button>
          </Link>
        </div>
      </div>
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
      <Footer />
    </div>
  );
}
