import React from 'react'
import Sanduni from "@assets/temp/img1.jpg";
import Pathumi from "@assets/temp/img2.png";
import Nirmal from "@assets/temp/img3.png";

const FriendProfileList = ({name, grade, score, image}) => {
    return (
        <div className='n-text profile-card h-full'>
            <div className='w-full flex m-2 text-gray1'>
                <div className='prof-img m-2'>
                    <img src={Sanduni} alt='profile' className='rounded-full w-full' />
                </div>
                <div className='m-2'>
                    <div className='profile-thumbnail mb-3'>Score: {score}</div>
                    <div className='profile-thumbnail'>{grade}</div>
                </div>
            </div>
            <div className='text-left text-black'>{name}</div>


        </div>
    )
}

export default FriendProfileList