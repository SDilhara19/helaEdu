import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookOpen, faCircleArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import BackKey from '@components/common/BackKey';
import { useNavigate } from 'react-router-dom';
// import Quiz from './Quiz1';

const Guidlines = ({ subject }) => {

    const navigator = useNavigate()

    const clickBack = () => {
        navigator(`/quiz`)
    }
    return (
        <>
            <div className="bg-white max-w-4xl mx-auto py-8 shadow-2xl rounded-xl border relative mt-10">
                <div className='absolute top-12 left-6 text-blue'><BackKey click={clickBack} /></div>
                <h3 className="special-text text-blue text-center -mb-2">Start Your Weekly {subject} Quiz!</h3>
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

                    <div className='special-text text-blue text-center mx-20 mt-10'>Each question you conquer is a step closer to mastery—keep moving, keep learning!"</div>

                </div>

            </div>


        </>
    )
}

export default Guidlines