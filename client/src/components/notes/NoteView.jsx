import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const NoteView = ({ topic, subject, date, content }) => {
    return (
        <div className='p-5'>
            <div>
                <div className='flex justify-between items-center'>
                <h2 className='s-topic w-full'>{topic}</h2>
                <div><FontAwesomeIcon icon={faPencil} className="size-8"/> </div>
                </div>
                <div className='flex justify-between items-center '>
                    <p className='n-text text-gray1'>{subject}</p>
                    <p className='n-text text-gray1'>{date}</p>
                </div> 
               
               
               
            </div>
            <div>
                <p className='n-text p-10'>{content}</p>
            </div>

        </div>
    )
}

export default NoteView