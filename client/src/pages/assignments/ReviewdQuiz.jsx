import { Footer, Header } from '@components/common';
import React from 'react';
import Banner from '@assets/img/articles/bannerP.jpg';
import AverageScoreChart from '@components/assignments/AverageScoreChart';
import TopScore from '@components/assignments/TopScore';
import Participants from '@components/assignments/Participants';

export default function ReviewdQuiz() {
    const averageScore=65;
   
  return (
    <div>
      <Header />
      <div className="min-h-screen">
      
        <div className="relative">
          <img src={Banner} className="w-full h-128 object-cover" alt="Banner" />
          <div className="absolute inset-x-0 top-10 flex justify-start space-x-6 left-60 ">
            <div className=" ">
                
            </div>
          </div>
          <div className="absolute inset-x-0 top-80 flex justify-center space-x-6 left-60 right-60">
           
            <div className="bg-white rounded-xl shadow-lg p-8 w-2/5 text-center">
              <h3 className="text-4xl  mb-4">Summary</h3>
              <div className='flex justify-center'>
               <AverageScoreChart averageScore={averageScore} />
              </div>
              <div className="text-center mt-5">
                <p className='text-2xl '>Average Score: 65%</p>
                <p className='text-2xl '>No of Participants: 24</p>
               
               
              </div>
            </div>

            
            <div className="bg-white rounded-xl shadow-lg p-8 w-3/5 text-center">
              <TopScore/>
            </div>
          </div>
        </div>
        <div className='px-60 mt-80'>
           <Participants/>
        </div>

      </div>
      <Footer />
    </div>
  );
}
