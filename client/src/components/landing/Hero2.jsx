import React from "react";
import bot from "@assets/img/bot.svg";
import logo from "@assets/icons/hela-edu-black-text.svg";
import land from "@assets/img/Land bg.svg";

import maths from "@assets/img/subjects/maths.png";
import science from "@assets/img/subjects/2.png";
import geography from "@assets/img/subjects/3.png";
import bussiness from "@assets/img/subjects/4.png";
import buddhism from "@assets/img/subjects/5.png";
import islam from "@assets/img/subjects/6.png";
import christian from "@assets/img/subjects/7.png";
import hinduism from "@assets/img/subjects/8.png";
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
      <section className="subject-section">
        <h3>Subjects</h3>
        <div className="my-4">
          <div className="flex-sa">
            <button
              className="lg:tooltip custom-tooltip"
              data-tip="Mathematics"
            >
              <div className="subject-circles">
                <img src={maths} alt="image" />
              </div>
            </button>
            <div className="lg:tooltip custom-tooltip" data-tip="Science">
              <div className="subject-circles">
                <img src={science} alt="image" />
              </div>
            </div>
            <div className="lg:tooltip custom-tooltip" data-tip="Geography">
              <div className="subject-circles">
                <img src={geography} alt="image" />
              </div>
            </div>
            <div
              className="lg:tooltip custom-tooltip"
              data-tip="B. Studies & Acc."
            >
              <div className="subject-circles">
                <img src={bussiness} alt="image" />
              </div>
            </div>
            <div className="lg:tooltip custom-tooltip" data-tip="Buddhism">
              <div className="subject-circles">
                <img src={buddhism} alt="image" />
              </div>
            </div>
            <div className="lg:tooltip custom-tooltip" data-tip="Hinduism">
              <div className="subject-circles">
                <img src={hinduism} alt="image" />
              </div>
            </div>
            <div className="lg:tooltip custom-tooltip" data-tip="Christian">
              <div className="subject-circles">
                <img src={christian} alt="image" />
              </div>
            </div>
            <div className="lg:tooltip custom-tooltip" data-tip="Islam">
              <div className="subject-circles">
                <img src={islam} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="article-header">
        <h3>Most Popular Articles</h3>
      </div>
      <section className="article-section">
        <h3></h3>
      </section>
    </div>
  );
}

export default Hero2;
