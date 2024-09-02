import React from 'react'
import Profile from '@assets/img/articles/profile.jpg';
export default function TopScore() {
  return (
    <div>
            <h3 className="text-4xl  mb-4">Top Scores</h3>
              <div className='justify-center mt-5'>
               <div className='rounded-2xl border border-blue w-3/4 mx-40 h-20 flex justify-start px-5 py-2 my-3'>
                    <div className='w-14 mr-10 h-14 p-2 rounded-full bg-blue text-white'><p>1</p></div>
                    <div className='w-3/5 flex justify-start'>
                        <img src={Profile} className='w-14 h-14 rounded-full'/>
                        <p className=' py-2 text-2xl'>M.K.P.Ahinsa</p>
                    </div>
                   
                    <div className='w-2/5 py-2'><p>89 %</p></div>
               </div>
               <div className='rounded-2xl border border-blue w-3/4 mx-40 h-20 flex justify-start px-5 py-2 my-3'>
                    <div className='w-14 mr-10 h-14 p-2 rounded-full bg-blue text-white'><p>2</p></div>
                    <div className='w-3/5 flex justify-start'>
                        <img src={Profile} className='w-14 h-14 rounded-full'/>
                        <p className=' py-2 text-2xl'>Sanduni Dihara</p>
                    </div>
                  
                    <div className='w-2/5 py-2'><p>81 %</p></div>
               </div>
               <div className='rounded-2xl border border-blue w-3/4 mx-40 h-20 flex justify-start px-5 py-2 my-3'>
                    <div className='w-14 mr-10 h-14 p-2 rounded-full bg-blue text-white'><p>3</p></div>
                    <div className='w-3/5 flex justify-start'>
                        <img src={Profile} className='w-14 h-14 rounded-full'/>
                        <p className=' py-2 text-2xl'>Uththara Samadhi</p>
                    </div>
                   
                    <div className='w-2/5 py-2'><p>78 %</p></div>
               </div>
              </div>
    </div>
  )
}
