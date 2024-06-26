import React from 'react';

export default function ArticleCards() {
  return (
    <div className='mt-10'>
      <h1 className='text-center text-5xl font-bold text-black'>Articles</h1>
      <hr className='my-4 border-yellow leading-8' />
      <div className='flex justify-end items-center m-20'>
        {/* <div className='flex  space-x-4'>
          <span className='text-gray-600'>Sort By</span>
        </div> */}
        <div className='flex space-x-4 text-sm'>
            <span className='text-gray text-3xl'>Sort By</span>
            <button className='text-3xl px-6 py-2 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              All
            </button>
            <button className=' text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Date
            </button>
            <button className='text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Grade
            </button>
            <button className='text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Subject
            </button>
            <button className=' text-3xl px-6 rounded-lg border border-blue text-blue hover:bg-blue hover:text-white transition-colors'>
              Tags
            </button>
        </div>
    </div>
    
    {/* article cards */}
    <div className='flex justify-between m-20'>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <span>M.Perera</span>
                    </div>
                    <div>
                        <span>23 March 2024</span>
                    </div>
                </div>
                <h2 className="card-title">
                Sinhabahu Natakaya
            
                </h2>
                <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</p>
                <div className="card-actions justify-end">
                
                </div>
                <div className="flex justify-start ">
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                    <div className="badge badge-secondary mr-2  bg-yellow border-none text-blue p-3">NEW</div>
                    <div className="badge badge-secondary mr-2  bg-yellow border-none text-blue p-3">NEW</div>
                </div>
                
            </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <span>M.Perera</span>
                    </div>
                    <div>
                        <span>23 March 2024</span>
                    </div>
                </div>
                <h2 className="card-title">
                Sinhabahu Natakaya
            
                </h2>
                <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</p>
                <div className="card-actions justify-end">
                
                </div>
                <div className="flex justify-start ">
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                </div>
                
            </div>
        </div>


        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <span>M.Perera</span>
                    </div>
                    <div>
                        <span>23 March 2024</span>
                    </div>
                </div>
                <h2 className="card-title">
                Sinhabahu Natakaya
            
                </h2>
                <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</p>
                <div className="card-actions justify-end">
                
                </div>
                <div className="flex justify-start ">
                    <div className="badge badge-secondary mr-2  bg-yellow border-none text-blue p-3">NEW</div>
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                </div>
                
            </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <span>M.Perera</span>
                    </div>
                    <div>
                        <span>23 March 2024</span>
                    </div>
                </div>
                <h2 className="card-title">
                Sinhabahu Natakaya
            
                </h2>
                <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</p>
                <div className="card-actions justify-end">
                
                </div>
                <div className="flex justify-start ">
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                </div>
                
            </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <span>M.Perera</span>
                    </div>
                    <div>
                        <span>23 March 2024</span>
                    </div>
                </div>
                <h2 className="card-title">
                Sinhabahu Natakaya
            
                </h2>
                <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</p>
                <div className="card-actions justify-end">
                
                </div>
                <div className="flex justify-start ">
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                    <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3">NEW</div>
                </div>
                
            </div>
        </div>
    </div>
    

</div>
    
  );
}
