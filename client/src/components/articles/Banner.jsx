import React from "react";
import bookLogo from "@assets/img/book.svg";
import logo from "@assets/icons/hela-edu-white-text.svg";
import robotImg from "@assets/img/robot-from-the-side.svg";
import { secondaryColor } from "@styles/_global.module.scss";

function Banner() {
  return (
    <main className="hero_tec flex-sb dark:bg-black">
      <div className="left-pannel">
        <img src={logo} alt="logo" className="logo" />

        <img src={bookLogo} className="absolute book" alt="" />
      </div>
      <div className="right-pannel">
        <img src={robotImg} alt="" />
      </div>
    </main>
  );
}

export default Banner;
