import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import TableRaw from '@/components/articles/TableRaw';
import Pagination from '@/components/articles/Pagination';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/common';
import { listArticles } from '@/services/ArticleService';

export default function AddArticles() {
  const [currentPage, setCurrentPage] = useState(1);

  const [articles, setArticles] =useState([])
  useEffect(()=> {
    listArticles().then((response) =>{
      setArticles(response.data);
    }).catch(error=>{
      console.error(error);
    })
    },[])
  
  // const articles = [
  //   { articleId: 1, title: 'Article 1', imgUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg', pdfName: 'File1.pdf', tags: 'Tag1', status: 'New' },
  //   { articleId: 2, title: 'Article 2', imgUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg', pdfName: 'File2.pdf', tags: 'Tag2', status: 'New' },
  //   { articleId: 3, title: 'Article 3', imgUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg', pdfName: 'File3.pdf', tags: 'Tag3', status: 'New' },
  //   { articleId: 4, title: 'Article 4', imgUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg', pdfName: 'File4.pdf', tags: 'Tag4', status: 'New' },
  //   { articleId: 5, title: 'Article 5', imgUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg', pdfName: 'File5.pdf', tags: 'Tag5', status: 'New' },
  //   { articleId: 6, title: 'Article 6', imgUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg', pdfName: 'File6.pdf', tags: 'Tag6', status: 'New' },
  //   { articleId: 7, title: 'Article 7', imgUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg', pdfName: 'File7.pdf', tags: 'Tag7', status: 'New' },
  //   { articleId: 8, title: 'Article 8', imgUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg', pdfName: 'File8.pdf', tags: 'Tag8', status: 'New' },
  //   { articleId: 9, title: 'Article 9', imgUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg', pdfName: 'File9.pdf', tags: 'Tag9', status: 'New' },
  //   { articleId: 10, title: 'Article 10', imgUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg', pdfName: 'File10.pdf', tags: 'Tag10', status: 'New' }
  // ];

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
