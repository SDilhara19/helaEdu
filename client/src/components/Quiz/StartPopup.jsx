import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const StartPopup = ({ onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const messages = ["On your mark", "Ready", "Start"];
    // const animations = ["animate-pop-in", "animate-pop-in", "animate-pop-in"];
    const animations = ["animate-spin animate-infinite animate-duration-400 animate-linear animate-normal", "animate-wiggle-more animate-infinite animate-duration-1000 animate-linear animate-normal", "animated-icon"];


    useEffect(() => {
        if (currentIndex < messages.length) {
            const timer = setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
            }, 1500); // 2 seconds delay for each message box

            return () => clearTimeout(timer);
        } else {
            onComplete();
        }
    }, [currentIndex, onComplete]);

    return (
        <div className="popup-container">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`popup-box ${currentIndex === index ? 'visible' : 'hidden'} animate-pop-in text-white`}
                >
                    <div className='flex items-center gap-8'>
                        <h3 className='s-topic'>{message}</h3>
                        {/* <FontAwesomeIcon icon={faRocket} size="2xl" className='' /> */}
                        <FontAwesomeIcon icon={faRocket} size="2xl" className=  {`${animations[index]}`} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StartPopup;
