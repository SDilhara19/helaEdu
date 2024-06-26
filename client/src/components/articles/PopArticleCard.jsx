import React from 'react'

export default function PopArticleCard() {
  return (
    <div>
      <div className="card card-side bg-white border border-blue rounded-3xl shadow-xl">
        <figure>
            <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie" />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-4xl">The standard Lorem Ipsum passage, used since the 1500s</h2>
            <div className='card-actions flex justify-between mt-20'>
                    <div className='flex justify-between align-baseline'>
                        <img className="w-10 h-10 rounded-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Rounded avatar" />
                        <span className='text-lg'> M.Perera</span>
                    </div>
                    <div>
                        <span className='text-lg'>23 March 2024</span>
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}
