import React from 'react'
import congratulations from '@assets/img/congrats-banner.svg';
import goldBadge from '@assets/img/badges/gold.svg';


const Score = ({ score }) => {
  return (
    <div className=' popup-container'>
      <div className=' popup-box-large visible relative'>
        <div className='congrats-img'>
        <img src={congratulations} alt="" className=''/>
        </div>
        <div className='bagde-wrapper'>
        <img src={goldBadge} alt="" />
        </div>
        <div className='h-auto p-5 m-10 rounded-xl bg-white-transparent w-full'>
          <div className="overflow-x-auto">
            <div className='s-topic text-blue text-center leading-tight'>GodRexer </div>
            <div className='text-center text-gray1 s-text mt-0'>Grade 10</div>
            <table className="table special-text leading-tight">
              <tbody>
                <tr className='border-none'>
                  <td className=''>Score</td>
                  <td className='text-right'>{score}</td>
                </tr>
                <tr className='border-none'>
                  <td className=''>Time Taken</td>
                  <td className='text-right'>12:23 s</td>
                </tr>
                <tr className='border-none'>
                  <td className=''>Total Score</td>
                  <td className='text-right'>1690</td>
                </tr>
                <tr className='border-none'>
                  <td className=''>Current Rank</td>
                  <td className='text-right s-topic text-blue'>12</td>
                </tr>
                <tr className='border-none'>
                  <td className=''>Best Time</td>
                  <td className='text-right'>12:23 s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Score