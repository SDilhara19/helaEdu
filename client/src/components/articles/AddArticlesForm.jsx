import React , { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
export default function AddArticlesForm() {
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };
  return (
    <div className='mx-96 my-20'>
        <h1>Add Your Article</h1>
        <hr></hr>
        <form>
            <div className='p-10 '>
                <div className='flex justify-around align-baseline my-5'>
                    <div className='w-2/6'><span className='text-3xl'>Title</span></div>
                    <div className='w-4/6'><input className='border border-blue rounded-2xl w-full h-20'></input>
                    </div>
                </div>
                <div className='flex justify-around align-baseline my-5'>
                    <div className='w-2/6'><span className='text-3xl'>Introduction</span></div>
                    <div className='w-4/6'><input className='border border-blue rounded-2xl w-full h-20'></input></div>
                </div>
                <div className='my-7'>
                    <span className='text-3xl'>Content</span>
                    <input  className='border border-blue rounded-2xl w-full h-64 my-5' ></input>
                </div>
                <div>
                    <span className='text-3xl'>Select Your Tags</span>
                    <div className='flex justify-start my-5'>
                       <div className='text-3xl border border-blue rounded-2xl px-5 py-2 mx-4'>sinhala</div>
                       <div className='text-3xl border border-blue rounded-2xl px-5 py-2 mx-4'>sinhala</div>
                       <div className='text-3xl border border-blue rounded-2xl px-5 py-2 mx-4'>sinhala</div>
                    </div>
                    <input  className='border border-blue rounded-2xl w-full h-20' placeholder='Add your own tags'></input>
                </div>
                <div className='flex justify-between my-10'>
                    <div>
                        <span className='text-3xl align-middle'>Attach Additional files</span><br></br>
                        <div className='border border-dashed border-4 rounded-xl p-20 flex-c flex-col my-6'>
                            <FontAwesomeIcon icon={faUpload}  className='text-4xl justify-center'/>
                            <p className='text-3xl'>Drag & drop or <span onClick={handleUploadClick} className='text-blue '>Choose files</span> to upload</p>
                            {/* <input type="file" className="items-center text-blue bg-white  " /> */}
                        </div>
                        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={(event) => console.log(event.target.files)} />
                       
                    </div>
                    <div>
                        <span className='text-3xl'>Upload Cover Image</span><br></br>
                        <div className='border border-dashed border-4 rounded-xl p-20 flex-c flex-col'>
                            <FontAwesomeIcon icon={faUpload}  className='text-4xl justify-center'/>
                            <p className='text-3xl'>Drag & drop or <span onClick={handleUploadClick} className='text-blue '>Choose files</span> to upload</p>
                            {/* <input type="file" className="items-center text-blue bg-white  " /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-blue text-4xl text-white rounded-2xl p-6 '>Submit</button>
            </div>
        </form>
      </div>
  )
}
