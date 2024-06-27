import { Header } from '@/components/common'
import React from 'react'

export default function AddArticleForm() {
  return (
    <div>
      <Header />
      <div className='m-12'>
        <h1>Add Your Article</h1>
        <hr></hr>
        <form>
            <div className='p-10 my-10'>
                <div className='flex justify-around align-baseline my-5'>
                    <div className='w-2/6'><span className='text-3xl'>Title</span></div>
                    <div className='w-4/6'><input className='border border-blue rounded-2xl w-full h-16'></input></div>
                </div>
                <div className='flex justify-around align-baseline my-5'>
                    <div className='w-2/6'><span className='text-3xl'>Introduction</span></div>
                    <div className='w-4/6'><input className='border border-blue rounded-2xl w-full h-16'></input></div>
                </div>
               
                <div className='my-7'>
                    <span className='text-3xl'>Content</span>
                    <input  className='border border-blue rounded-2xl w-full h-64 my-5' ></input>
                    {/* text editor */}
                </div>
                <div>
                    <span className='text-3xl'>Select Your Tags</span>
                    <div className='flex justify-start my-5'>
                       <div className='text-3xl border border-blue rounded-2xl px-5 py-2 mx-4'>sinhala</div>
                       <div className='text-3xl border border-blue rounded-2xl px-5 py-2 mx-4'>sinhala</div>
                       <div className='text-3xl border border-blue rounded-2xl px-5 py-2 mx-4'>sinhala</div>
                    </div>
                    <input  className='border border-blue rounded-2xl w-full h-16' placeholder='Add your own tags'></input>
                </div>
                <div className='flex justify-around my-5'>
                    <div>
                        <span className='text-3xl align-middle'>Attach Additional files</span><br></br>
                       
                        <input type="file" className="my-7 file-input file-input-bordered file-input-lg w-full max-w-xs" />

                    </div>
                    <div>
                        <span className='text-3xl'>Upload Cover Image</span><br></br>
                        <input type="file" className="my-7 file-input file-input-bordered file-input-lg w-full max-w-xs" />
                    </div>

                </div>

            </div>
            <div className='flex justify-center'>
                <button className='bg-blue text-4xl text-white rounded-2xl p-6 '>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}
