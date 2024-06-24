import React from "react";
import bookLogo from "@assets/img/book.svg";
import logo from "@assets/icons/logo.svg";
import robotImg from "@assets/img/bot 2.svg";
import { secondaryColor } from "@styles/_global.module.scss";

function Banner() {
  return (
    <main className="hero flex-sb">
      <div className="left-pannel">
        <img src={logo} alt="logo" />
        <div className="hero-text-box">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </div>
        <img src={bookLogo} className="absolute book" alt="" />
      </div>
      <div className="right-pannel">
        <img src={robotImg} alt="" />
      </div>
    </main>
  );
}

export default Banner;
