import React from 'react'

export default function ViewArticle() {
  return (
    <div>
      <div>
        <h1 className='text-5xl'>The standard Lorem Ipsum passage, used since the 1500s</h1>
        <div className='card-actions flex justify-between mt-20'>
            <div className='flex justify-between align-baseline'>
                <img className="w-10 h-10 rounded-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Rounded avatar" />
                <span className='text-lg'> M.Perera</span>
            </div>
            <div>
                <span className='text-lg'>23 March 2024</span>
            </div>
        </div>
        {/* tags */}
        <div className="flex justify-start ">
            <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-4">NEW</div>
            <div className="badge badge-secondary mr-2  bg-yellow border-none text-blue p-4">NEW</div>
            <div className="badge badge-secondary mr-2  bg-yellow border-none text-blue p-4">NEW</div>
        </div>
        <div>
            <img className="w-3/4 h-3/4 " src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Rounded avatar" />
        </div>
        <div>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p> 
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p> 
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p> 

        </div>
        <div>
            
        </div>
      </div>
    </div>
  )
}
