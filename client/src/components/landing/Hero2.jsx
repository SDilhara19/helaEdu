import React from "react";
import bot from "@assets/img/bot.svg";
import logo from "@assets/icons/hela-edu-black-text.svg";
import land from "@assets/img/Land bg.svg";
function Hero2() {
  return (
    <div className="hero2">
      <div className="flex-c">
        <img src={logo} alt="" srcset="" className="banner-logo" />
      </div>
      <div>
        <img src={land} alt="" srcset="" className="banner-bg" />
      </div>
      <main className="pannels">
        <div className="left-pannel">
          <div className="hero-text-box">
            <div className="subscribe">
              <h3 className="text-center blue">Subscribe to premium now</h3>
              <h3 className="text-center white">Subscribe</h3>
            </div>
            <h4>
              Your ultimate self-study platform, designed to make learning
              engaging and effective. Start your journey to academic excellence
              today with HelaEdu!
            </h4>
            <h3>Unlock Your Academic Potential with HelaEdu!</h3>
          </div>
        </div>
        <div className="right-pannel">
          <div className="chat-box flex-col-sa box-shadow">
            {/* <h2 className="text-center">
              Hi there, 👋 <br />
              how can I help you today
            </h2> */}
            {/* 
            <div className="flex-sb p-2 m-auto w-10/12">
              <button className="btn black-button">Sinhala</button>
              <button className="btn black-button">English</button>
            </div> */}
          </div>
          <div className="bot-wrapper flex-end">
            <img src={bot} alt="" className="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero2;
