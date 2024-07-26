
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
export default function AddArticleBtn() {
  return (
    <div>
      <div className='items-center flex justify-center mt-5 '>
        <button className="px-10 py-4 p-2  border border-blue bg-blue rounded-2xl text-3xl text-black">
            Add your article   +
        </button>
    </div>
    </div>
  )
}
