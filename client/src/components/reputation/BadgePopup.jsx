import React from 'react'
import BronzeBadge from '@assets/icons/bronzeBadge.svg'
import SilverBadge from '@assets/icons/silverBadge.svg'
import GoldBadge from '@assets/icons/goldBadge.svg'

export default function BadgePopup({onClose}) {
  return (
    <div className='p-5 '>
        <div className='flex justify-end'>
            <div onClick={onClose} className='rounded-full bg-yellow w-8 h-8 p-2 cursor-pointer '><b> X </b></div>
        </div>
       
         <p className='text-4xl text-center mb-5'>BadgeList</p>
         <div className='flex justify-start overflow-scroll'>
            <div className='w-1/3 mx-4'>
                <p  className='text-center'>Gold Badges</p>
                <div className='border border-blue rounded-xl px-4 py-1 my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={GoldBadge}/></div>
                       <span className="ml-8 text-2xl">Mastermind</span>
                    </div>
                    <p className='text-lg text-center'>Achieve 1000 reputation points.</p>
                </div>
                
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={GoldBadge}/></div>
                       <span className="ml-8 text-2xl">Reputation Titan</span>
                    </div>
                    <p className='text-lg text-center'>Earn 1000 reputation points in a single day</p>
                </div>
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={GoldBadge}/></div>
                       <span className="ml-8 text-2xl">Article Maven </span>
                    </div>
                    <p className='text-lg text-center'>You've added 500 insightful articles</p>
                </div>
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={GoldBadge}/></div>
                       <span className="ml-8 text-2xl">Assignment Ace</span>
                    </div>
                    <p className='text-lg text-center'>You've crafted 100 assignments</p>
                </div>
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={GoldBadge}/></div>
                       <span className="ml-8 text-2xl">Mentor Supreme</span>
                    </div>
                    <p className='text-lg text-center'>Awarded for guiding 200 students in your assignments</p>
                </div>
            </div>
            <div className='w-1/3 mx-4'>
                <p  className='text-center'>Silver Badges</p>
                <div className='border border-blue rounded-xl px-4 py-1 my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={SilverBadge}/></div>
                       <span className="ml-8 text-2xl">Rising Star</span>
                    </div>
                    <p className='text-lg text-center'>Achieve 500 reputation points</p>
                </div>
                
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={SilverBadge}/></div>
                       <span className="ml-8 text-2xl">Daily Dynamo</span>
                    </div>
                    <p className='text-lg text-center'>Earn 200 reputation points in a single day</p>
                </div>
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={SilverBadge}/></div>
                       <span className="ml-8 text-2xl">Article Expert </span>
                    </div>
                    <p className='text-lg text-center'>You've added 100 insightful articles</p>
                </div>
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={SilverBadge}/></div>
                       <span className="ml-8 text-2xl">Assignment Pro</span>
                    </div>
                    <p className='text-lg text-center'>You've crafted 50 assignments</p>
                </div>
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={SilverBadge}/></div>
                       <span className="ml-8 text-2xl">Student Guide </span>
                    </div>
                    <p className='text-lg text-center'>Awarded for guiding 100 students through your assignments</p>
                </div>
            </div>
            <div className='w-1/3 mx-4'>
                <p className='text-center'>Bronze Badges</p>
                <div className='border border-blue rounded-xl px-4 py-1 my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={BronzeBadge}/></div>
                       <span className="ml-8 text-2xl">Contributor </span>
                    </div>
                    <p className='text-lg text-center'>Achieve 100 reputation points</p>
                </div>
                
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={BronzeBadge}/></div>
                       <span className="ml-8 text-2xl">Daily Achiever</span>
                    </div>
                    <p className='text-lg text-center'>Earn 100 reputation points in a single day</p>
                </div>
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={BronzeBadge}/></div>
                       <span className="ml-8 text-2xl">Article Starter</span>
                    </div>
                    <p className='text-lg text-center'>You've added 50 insightful articles</p>
                </div>
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={BronzeBadge}/></div>
                       <span className="ml-4 text-2xl">Assignment Creator</span>
                    </div>
                    <p className='text-lg text-center'>You've created 10 assignments</p>
                </div>
                <div className='border border-blue rounded-xl px-4 py-1  my-5'>
                    <div className="rounded-xl border border-blue2 h-12  my-3 px-2 flex items-center relative">
                       <div className="w-8 h-8 "><img src={BronzeBadge}/></div>
                       <span className="ml-8 text-2xl text-center">Student Helper </span>
                    </div>
                    <p className='text-lg text-center'>Awarded for guiding 50 students through your assignments</p>
                </div>
            </div>

         </div>
      
    </div>
  )
}
