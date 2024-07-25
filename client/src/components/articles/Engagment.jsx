import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {  faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

export default function Engagment() {
  return (
    <div>
      <div className='flex justify-between my-10'>
              <div className='rounded-xl w-72 h-48 shadow-2xl p-6 m-4'>
                  <div className='text-gray1 '><p className='text-3xl'>Total Likes</p></div>
                    <div className='flex justify-between items-center py-3'>
                      <div><p className='text-purple-600 text-4xl'>25.6K</p></div>
                      <div>
                        <FontAwesomeIcon icon={faThumbsUpRegular} className='text-3xl' style={{color:'#6A0DAD'}} />
                      </div>
                    </div>
                    <div className='text-gray1 '>
                      <p className='text-lg'>21% more than last month</p>
                    </div>
                </div>
              <div className='rounded-xl w-72 h-48 shadow-2xl p-6 m-4'>
                <div className='text-gray1 '><p className='text-3xl'>User Views</p></div>
                  <div className='flex justify-between items-center py-3'>
                    <div><p className='text-purple-600 text-4xl'>5600</p></div>
                    <div>
                      <FontAwesomeIcon icon={faEye} className='text-3xl' style={{color:'#6A0DAD'}} />
                    </div>
                  </div>
                  <div className='text-gray1 '>
                    <p className='text-lg'>41% more than last month</p>
                  </div>
              </div>
            </div>
            <div className='flex justify-between my-10'>
              <div className='rounded-xl w-72 h-48 shadow-2xl p-6 m-4'>
                  <div className='text-gray1 '><p className='text-3xl'>Comments</p></div>
                    <div className='flex justify-between items-center py-3'>
                      <div><p className='text-purple-600 text-4xl'>27</p></div>
                      <div>
                        <FontAwesomeIcon icon={faComment} className='text-3xl' style={{color:'#6A0DAD'}} />
                      </div>
                    </div>
                    <div className='text-gray1 '>
                      <p className='text-lg'>21% more than last month</p>
                    </div>
                </div>
              <div className='rounded-xl w-72 h-48 shadow-2xl p-6 m-4'>
                <div className='text-gray1 '><p className='text-3xl'> Bookmarks</p></div>
                  <div className='flex justify-between items-center py-3'>
                    <div><p className='text-purple-600 text-4xl'>25</p></div>
                    <div>
                      <FontAwesomeIcon icon={faBookmarkRegular} className='text-3xl' style={{color:'#6A0DAD'}} />
                    </div>
                  </div>
                  <div className='text-gray1 '>
                    <p className='text-lg'>21% more than last month</p>
                  </div>
              </div>
            </div>
    </div>
  )
}
