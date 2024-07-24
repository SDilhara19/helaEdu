
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
export default function ModeratorName() {
  return (
    <div className="flex justify-end mt-[0.005px]">
  <button className="px-6 py-2 border border-blue rounded-3xl">
    K.A.Kulasinghe <FontAwesomeIcon icon={faCaretRight} className="text-yellow text-lg ml-1" />
  </button>
</div>

  
  )
}
