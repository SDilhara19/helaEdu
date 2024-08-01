import React from 'react'
import congratulations from '@assets/img/congrats-banner.svg';
import goldBadge from '@assets/img/badges/gold.svg';
import { useNavigate } from 'react-router-dom';

const formatTime = (time) => {
  const min = Math.floor(time / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const miniseconds = time % 100;
  return `${min}:${seconds < 10 ? "0" : ""}${seconds}:${miniseconds < 10 ? "0" : ""}${miniseconds}`;
};

const Score = ({ score, totalTime }) => {

  const navigator = useNavigate()

  const handleBtnClick = (path) => {
    navigator(`/${path}`)
  }
  return (
    <div className=' popup-container'>
      <div className=' popup-box-large visible relative'>
        <div className='congrats-img'>
          <img src={congratulations} alt="" className='' />
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
                  <td className='text-right'>{formatTime(totalTime)} s</td>
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
        <div className='flex justify-center items-center '>
          <button className='n-text-bold white-button'  onClick={() => handleBtnClick('quiz')}><h4>Go to home</h4></button>
          <button className='n-text-bold gold-button' onClick={() => handleBtnClick('quiz')}><h4>Review Quiz</h4></button>
        </div>
      </div>
    </div>
  )
}

export default Score