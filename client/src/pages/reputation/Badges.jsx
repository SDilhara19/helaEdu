import React , {useState} from 'react'
import { Header , Footer } from '@components/common'
import BronzeBadge from '@assets/icons/bronzeBadge.svg'
import SilverBadge from '@assets/icons/silverBadge.svg'
import GoldBadge from '@assets/icons/goldBadge.svg'
import ActivityBar from '@components/reputation/ActivityBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import BadgePopup from '@components/reputation/BadgePopup';

export default function Badges() {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openBadgeList = () => {
    setIsPopupOpen(true);
  };

  const closeBadgeList = () => {
    setIsPopupOpen(false);
  };

  return (

    <>
    <Header />
    <div className="dashboard">
      <div className="dashboard-wrapper mb-9">
        <div className="sidebar-wrapper">
          <ActivityBar />
        </div>
        <div className="content-wrapper mx-36">
        {isPopupOpen && (
            <dialog open className="modal">
              <div className="modal-box max-w-7xl p-10">
                <BadgePopup onClose={closeBadgeList}/>
              </div>
            </dialog>                                                                             
          )}
               
          <h1 className='my-10 mx-10'>Badges</h1>
          <p className='text-2xl mx-10 pb-10'>These are the badges ,you have earned by engaging  activities</p>
          <div className='flex justify-start mx-10 my-5'>
            <div className='w-1/3 border border-blue rounded-xl px-10 py-4  mx-8 '>
              <p>Gold Badges</p>
              <div className='my-16 h-128'>  
                  <p className='text-2xl text-center'>No any gold badges </p>
              </div>
              <div className='flex justify-end'>
                <p className='text-2xl'>Next Badge</p>
                      
                <div className='rounded-xl bg-black px-3 py-2 flex justify-between mx-5 cursor-pointer' >
                  <div className="w-8 h-8 ml-1"><img src={BronzeBadge}/></div>
                  <span className="ml-3 text-xl text-white ">Contributor</span>
                </div>
                <div className="tooltip" data-tip="See all badges that you can earn" onClick={openBadgeList}>
                  <FontAwesomeIcon icon={faGear} className="size-7 pt-3 " />
                </div>               
              </div>
            </div>
            <div className='w-1/3 border border-blue rounded-xl px-10 py-4   mx-8'>
              <p>Silver Badges</p>
              <div className='my-16 h-128'>  
                <div className="rounded-xl border border-blue2 h-12 w-72 my-3 px-2 flex items-center relative">
                  <div className="w-8 h-8 "><img src={SilverBadge}/></div>
                  <span className="ml-8 text-2xl">Mastermind</span>
                </div>
                <div className="rounded-xl border border-blue2 h-12 w-72 my-3 px-2 flex items-center relative">
                  <div className="w-8 h-8 "><img src={SilverBadge}/></div>
                  <span className="ml-8 text-2xl">Mastermind</span>
                </div>                  
              </div>
              <div className='flex justify-end'>
                <p className='text-2xl'>Next Badge</p>
                      
                <div className='rounded-xl bg-black px-3 py-2 flex justify-between mx-5 cursor-pointer' >
                  <div className="w-8 h-8 ml-1"><img src={BronzeBadge}/></div>
                  <span className="ml-3 text-xl text-white ">Contributor</span>
                </div>
                <div className="tooltip" data-tip="See all badges that you can earn" onClick={openBadgeList}>
                  <FontAwesomeIcon icon={faGear} className="size-7 pt-3 " />
                </div>
              </div>
            </div>
            <div className='w-1/3 border border-blue rounded-xl px-10 py-4 mx-8'>
              <p>Bronze Badges</p>
              <div className='my-16 h-128'>  
                <div className="rounded-xl border border-blue2 h-12 w-72 my-3 px-2 flex items-center relative">
                  <div className="w-8 h-8 "><img src={BronzeBadge}/></div>
                  <span className="ml-8 text-2xl">Mastermind</span>
                </div>
                <div className="rounded-xl border border-blue2 h-12 w-72 my-3 px-2 flex items-center relative">
                  <div className="w-8 h-8 "><img src={BronzeBadge}/></div>
                  <span className="ml-8 text-2xl">Mastermind</span>
                </div>
                           
              </div>
              <div className='flex justify-end'>
                <p className='text-2xl'>Next Badge</p>
                      
                <div className='rounded-xl bg-black px-3 py-2 flex justify-between mx-5 cursor-pointer' >
                  <div className="w-8 h-8 ml-1"><img src={BronzeBadge}/></div>
                  <span className="ml-3 text-xl text-white ">Contributor</span>
                </div>

                <div className="tooltip" data-tip="See all badges that you can earn" onClick={openBadgeList}>
                  <FontAwesomeIcon icon={faGear} className="size-7 pt-3 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
          
  </>
  )
}
