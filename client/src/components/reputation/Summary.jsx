import React , {useState} from 'react'
import Vector from '@assets/icons/Vector.svg'
import WhiteBadge from '@assets/icons/whiteBadge.svg'
import BronzeBadge from '@assets/icons/bronzeBadge.svg'
import score from '@assets/icons/score.svg'
import BadgePopup from '@components/reputation/BadgePopup'
import SilverBadge from '@assets/icons/silverBadge.svg'
import GoldBadge from '@assets/icons/goldBadge.svg'

export default function Summary() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const openBadgeList = () => {
    setIsPopupOpen(true);
  };

  const closeBadgeList = () => {
    setIsPopupOpen(false);
  };
  return (
    <div>
      <div className='flex justify-start'>
        {isPopupOpen && (
            <dialog open className="modal">
              <div className="modal-box max-w-7xl p-10">
                <BadgePopup onClose={closeBadgeList}/>
              </div>
            </dialog>                                                                             
          )}
               
               <div className='rounded-xl shadow-2xl p-3 w-128 h-96 mx-14 '>
                   <div className='rounded-full  p-1 w-16 h-16 bg-blue'><img src={score} className='w-20 z-50' /></div>
                   <p className='text-center px-10 text-2xl'><b>Your Total Reputation Points</b></p>
                   <p className='text-center text-blue px-10 py-5 text-6xl'>1200</p>
                   <p className=' text-2xl mt-2 text-center text-gray-500'>Reputation is how the community thanks you.</p><br></br>
                   <p className=' text-xl text-center'>When users upvote your helpful posts, you'll earn reputation and unlock new privileges.</p>
               </div>
              
               <div className='rounded-xl shadow-2xl p-3 w-128 h-96 mx-14'>
                    <div className='rounded-full  p-1 w-16 h-16 bg-blue'><img src={WhiteBadge} className='w-20 z-50' /></div>
                   <p className='text-center  px-10 text-2xl py-3 '><b>Badges</b></p>
                   
                   <div className="rounded-xl bg-blue2 h-12 mx-4 my-3 flex items-center relative">
                        <div className="w-8 h-8 ml-3"><img src={GoldBadge}/></div>
                       <span className="ml-40 text-2xl">1</span>
                   </div>

                    <div className='rounded-xl bg-blue2 h-12 mx-4 my-3 flex items-center relative'>
                       <div className="w-8 h-8 ml-3"><img src={SilverBadge}/></div>
                       <span className="ml-40 text-2xl">4</span>
                    </div>
                    <div className='rounded-xl bg-blue2 h-12 mx-4 my-3 flex items-center relative'>
                       <div className="w-8 h-8 ml-3"><img src={BronzeBadge}/></div>
                       <span className="ml-40 text-2xl">2</span>
                    </div>
                    <div className='flex justify-end'>
                       <p className='text-2xl'>Next Badge</p>
                      
                       <div className='rounded-xl bg-black px-3 py-2 flex justify-between mx-5 cursor-pointer' onClick={openBadgeList}>
                           <div className="w-8 h-8 ml-1"><img src={BronzeBadge}/></div>
                           <span className="ml-5 text-xl text-white ">Top Contributor</span>
                       </div>
                    </div>
                   
               </div>
               <div className='rounded-xl shadow-2xl p-10 w-96 h-96 mx-8'>
                  <div className='flex justify-center items-center my-9 '>
                    <img src={Vector} className='w-20 h-20 ' />
                    </div>
                   <p className='text-xl text-center '><b>Measure your impact</b></p>
                   <p className='text-xl text-center my-6'>Your posts and helpful actions here help hundreds or thousands of people searching for help</p>
               </div>
           </div>
    </div>
  )
}
