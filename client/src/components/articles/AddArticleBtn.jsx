
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
export default function AddArticleBtn() {
  return (
    <div>
      <div className='items-center flex justify-center '>
        <button className="px-6 py-2  bg-white border border-blue hover:bg-yellow hover:text-white rounded-3xl">
            Add your articles <FontAwesomeIcon icon={faCaretRight} className="text-yellow hover:text-white text-lg size-10" />
        </button>
    </div>
    </div>
  )
}
