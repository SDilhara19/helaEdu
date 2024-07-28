import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AddArticleBtn from './AddArticleBtn';
import { Link } from "react-router-dom";
import Sort from "@components/articles/Sort";
export default function ArticleHead() {
  const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'];

  return (
    <div className='mx-44 '>
      <div className='flex justify-between'>
        <div>
        <h1 className='text-center text-5xl font-bold '>Articles</h1>
        </div>
        <div>
          <Link to="/addArticleForm">
            <AddArticleBtn/>
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center mt-12'>
        <Sort/>
      </div>
    </div>
  );
}
