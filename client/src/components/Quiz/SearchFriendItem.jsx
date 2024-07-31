import React from 'react'
import Pathumi from "@assets/temp/img2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser} from '@fortawesome/free-solid-svg-icons';


const SearchFriendItem = () => {
    return (
        <div className='flex h-auto p-2 bg-white-transparent shadow-sm'>
            <div className='w-1/3'>
                <div className="avatar">
                    <div className="mask mask-squircle w-24">
                        <img src={Pathumi} />
                    </div>
                </div>
            </div>
            <div className='w-2/3'>
            <div>
            <h5 className='n-text-bold text-left'>Pathumi Ahinsa</h5>
<div className='flex justify-around items-center mt-2'>
    <button className='py-2 px-10 border-blue bg-blue rounded-2xl n-text text-white  w-32 flex justify-center items-center'>
        <p className='n-text text-center'>Profile</p>
        <FontAwesomeIcon icon={faUser} size="1x" className='mx-4'/>
    </button>
    <button className='py-2 px-10 border-blue bg-blue rounded-2xl n-text text-white  w-32 flex justify-center items-center'>
        <p className='n-text text-center'>Add</p>
        <FontAwesomeIcon icon={faPlus} size="1x" className='mx-4'/>
    </button>

</div>
            </div>
            </div>
        </div>
    )
}

export default SearchFriendItem