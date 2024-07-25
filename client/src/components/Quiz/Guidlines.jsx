import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
// import Quiz from './Quiz1';

const Guidlines = ({ subject }) => {
    return (
        <>
            <div className="modal-box w-11/12 max-w-4xl">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="s-topic text-blue text-center -mb-2">Start  {subject} Quiz!</h3>
                <p className="s-text text-gray-600 text-center">Read the following instructions carefully before you start the quiz</p>

                <div className='w-full p-2'>
                    <div className='flex items-center m-4'>
                        <FontAwesomeIcon icon={faBookOpen} style={{ color: "var(--color-primary)", }} size="2xl" className="mx-5" />
                        <p className='n-text'>The quiz will have 10 questions</p>
                    </div>
                    <div className='flex items-center m-4'>
                        <FontAwesomeIcon icon={faBookOpen} style={{ color: "var(--color-primary)", }} size="2xl" className="mx-5" />
                        <p className='n-text'>Select the most appropriate answer for each question</p>
                    </div>
                    <div className='flex items-center m-4'>
                        <FontAwesomeIcon icon={faBookOpen} style={{ color: "var(--color-primary)", }} size="2xl" className="mx-5" />
                        <p className='n-text'>You will be given 60 seconds for each question</p>
                    </div>
                    <div className='flex items-center m-4'>
                        <FontAwesomeIcon icon={faBookOpen} style={{ color: "var(--color-primary)", }} size="2xl" className="mx-5" />
                        <p className='n-text'>Each correct answer will add one mark to your total score</p>
                    </div>
                    <div className='flex items-center m-4'>
                        <FontAwesomeIcon icon={faBookOpen} style={{ color: "var(--color-primary)", }} size="2xl" className="mx-5" />
                        <p className='n-text'>Total time taken  in each quiz will be considered in final rankings</p>
                    </div>

                </div>
               
            </div>

        </>
    )
}

export default Guidlines