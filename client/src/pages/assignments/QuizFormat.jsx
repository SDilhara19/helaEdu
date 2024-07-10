import { Footer} from '@components/common'
import React from 'react'
import Header from '@components/teacher_com/Header'
export default function QuizFormat() {
  return (
    <div>
      <Header/>
      <div className='border border-blue rounded-xl m-20 p-10'>
        <div className='mb-10'>
            <h1 className='text-blue text-4xl'>Question <span className='text-6xl'>1</span><span>/10</span></h1>

        </div>
        <div className='mx-10'>
            <label className=' text-3xl'>Enter your question </label><br></br><br></br>
            <input className='border border-blue rounded-xl h-32    w-full'></input>
        </div>
        <div className='my-10'>
            <label className='text-3xl'>Enter your options
            Check mark the right answer for your question</label><br></br><br></br>
            <div  className='flex justify-between'>
                <div className="flex items-center space-x-4 w-1/2 mx-10">
                        <div >
                            <input type="checkbox" defaultChecked className="checkbox border-blue h-16 w-16 [--chkbg:theme(colors.white)] [--chkfg:orange] checked:border-blue" />
                        </div>
                        <div className='w-full'>
                            <input placeholder="option 1" className='border border-blue rounded-xl h-16 w-full  text-xl'></input>
                        </div>
                </div>
                <div className="flex items-center space-x-4 w-1/2 mx-10">
                        <div>
                            <input type="checkbox" defaultChecked className="checkbox border-blue h-16 w-16 [--chkbg:theme(colors.white)] [--chkfg:orange] checked:border-blue" />
                        </div>
                        <div className='w-full'>
                            <input placeholder="option 1" className='border border-blue rounded-xl h-16 w-full text-xl'></input>
                        </div>
                </div>
                
            </div>
            <div  className='flex justify-between'>
                <div className="flex items-center space-x-4 w-1/2 mx-10 ">
                        <div>
                            <input type="checkbox" defaultChecked className="checkbox border-blue h-16 w-16 [--chkbg:theme(colors.white)] [--chkfg:orange] checked:border-blue" />
                        </div>
                        <div className='w-full'>
                            <input placeholder="option 1" className='border border-blue rounded-xl h-16 w-full text-xl'></input>
                        </div>
                </div>
                <div className="flex items-center space-x-4 w-1/2 mx-10">
                        <div>
                            <input type="checkbox" defaultChecked className="checkbox border-blue h-16 w-16 [--chkbg:theme(colors.white)] [--chkfg:orange] checked:border-blue" />
                        </div>
                        <div className='w-full'>
                            <input placeholder="option 1" className='border border-blue rounded-xl h-16 w-full text-xl'></input>
                        </div>
                </div>
                
            </div>
            <div  className='flex justify-between'>
                
            </div>
            
        </div>
        <div className='flex justify-end mr-16'>
            <button className='bg-yellow text-white px-10 py-3 rounded-xl  text-2xl'>Next</button>
      </div>

      </div>
     <Footer />
      
    </div>
  )
}
