import React from "react";
import bookLogo from "@assets/img/book.svg";
import logo from "@assets/icons/hela-edu-white-text.svg";
import robotImg from "@assets/img/robot-from-the-side.svg";
function Hero() {
  return (
    <main className="hero flex-sb">
      <div className="left-pannel">
        <img src={logo} alt="logo" />
        <div className="hero-text-box">
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          <h4>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            cumque amet architecto nihil sapiente accusantium, ipsum velit
            dolores delectus eius doloremque unde? Ut, sit nihil, officiis sequi
            voluptate odit nobis illo facere excepturi molestiae asperiores
            eveniet, saepe quas praesentium magni.
          </h4>
        </div>
        <img src={bookLogo} className="absolute book" alt="" />
      </div>
      <div className="right-pannel">
        <div className="chat-box flex-col-sa box-shadow">
          <h2 className="text-center">
            Hi there, 👋 <br />
            how can I help you today
          </h2>

          <div className="flex-sb p-2 m-auto w-10/12">
            <button className="btn black-button">Sinhala</button>
            <button className="btn black-button">English</button>
          </div>
        </div>
        <img src={robotImg} alt="" />
      </div>
    </main>
  );
}

export default Hero;
