import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faTrophy,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import StartQuiz from "./StartQuiz";
import Top3 from "./Top3";
import bot from "@assets/img/robot-from-the-side.svg";
import banner from "@assets/img/banner.png";

const HomeBanner = () => {
  return (
    <div
      className="flex mb-4"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-col">
        <div className="icon-circle">
          <FontAwesomeIcon icon={faTrophy} size="3x" className="black" />
        </div>
        <div className="icon-circle">
          <FontAwesomeIcon icon={faUserGroup} size="3x" className="black" />
        </div>
        <div className="icon-circle">
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            size="3x"
            className="black"
          />
        </div>
      </div>
      <div className="flex-col grow">
        <div>
          <div className="flex justify-end">
            <div className="mx-6 text-1 font-semibold"> TOTAL SCORE: 322</div>
            <div className="mx-6 text-1 font-semibold"> CURRENT STREAK: 2</div>
          </div>
        </div>
        <div className="flex h-128">
          <div className="w-5/12 h-full flex flex-col justify-center items-center">
            {/* <div className='text-shadows text-header2 mx-auto w-full text-center'>Weekly Brain Teaser</div> */}
            <div className="text-3d text-header2 mx-auto w-full text-center">
              Weekly Brain Teaser
            </div>
            <StartQuiz />
          </div>
          <div className="w-7/12 h-full">
            <Top3 />
            {/* <img src={bot} alt="img" className='robo-img' /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
