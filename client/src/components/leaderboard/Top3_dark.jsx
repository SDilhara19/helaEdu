import React from 'react'
import first from "@assets/temp/img1.jpg";
import second from "@assets/temp/img2.png";
import third from "@assets/temp/img3.png";

const Top3_dark = () => {
    return (
        <div className='flex h-auto w-full my-auto justify-center items-center'>
          <div className='top-place-box  -mr-10'>
            <div className='top-place-dark'>
              <img src={second} alt="image" />
            </div>
            <div className=''><span className='s-topic text-white'>2<sup className='ordinal text-1'>nd</sup></span></div>
            <div className='text-blue2 font-semibold text-header4 -mt-6 -mb-2'>Pathumi</div>
            <div className='text-black'>1490 Points</div>
          </div>
          <div className='top-place-box z-40'>
            <div className='top-place-dark ring-4 first'>
              <img src={first} alt="image" />
            </div>
            <div className=''><span className='text-white s-topic'>1<sup className='ordinal text-1'>st</sup></span></div>
            <div className='text-blue2 font-semibold text-header4 -mt-6 -mb-2'>Sanduni</div>
            <div className='text-black'>1530 Points</div>
          </div>
          <div className='top-place-box -ml-10'>
            <div className='top-place-dark'>
              <img src={third} alt="image" />
            </div>
            <div className=''><span className='s-topic text-white'>3<sup className='ordinal text-1'>rd</sup></span></div>
            <div className='text-blue2 font-semibold text-header4 -mt-6 -mb-2'>Nirmal</div>
            <div className='text-black'>1390 Points</div>
          </div>
        </div>
      )
  
}

export default Top3_dark