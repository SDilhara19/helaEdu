import React, { useEffect, useState } from 'react';
import Header from '@components/teacher_com/Header';
import TableRaw from '@/components/articles/TableRaw';
import Pagination from '@/components/articles/Pagination';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/common';
import { listArticlesByTeacher } from '@/services/ArticleService';

export default function AddArticles() {
  const [currentPage, setCurrentPage] = useState(1);

  const [articles, setArticles] =useState([])
  useEffect(()=> {
    listArticlesByTeacher().then((response) =>{
      setArticles(response.data);
    }).catch(error=>{
      console.error(error);
    })
    },[])
  

  const rowsPerPage = 7;
  const totalPages = Math.ceil(articles.length / rowsPerPage);

  const currentRows = articles.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  ).map((article, index) => (
    <TableRaw
      key={article.articleId}
      articleId={article.articleId}
      title={article.title}
      imgUrl={article.imgRef}
      pdfName={article.additionalFilesRefs}
      tags={article.tags}
      status={article.status}
    />
  ));
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
