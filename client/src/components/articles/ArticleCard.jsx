import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function ArticleCard() {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 transition-transform">
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
                <FontAwesomeIcon icon={faHeart} className="like-icon"/>
            </div>
        </div>
    </div>
  )
}

