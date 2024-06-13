import React, { useRef, useLayoutEffect } from "react";
import logo from "../icons/logo.svg";
import { secondaryColor } from "../styles/_global.module.scss";

function Header() {
  return (
    <header>
      <div className="flex-c header-wrapper">
        <div className="flex-grow">
          <img id="logo" className="mb-6" src={logo} alt="" srcset="" />
        </div>
        <nav className="flex-grow flex-sa">
          <a className="nav-text flex-c m-4 cursor-pointer">
            <h4>Home</h4>
          </a>
          <a className="nav-text flex-c m-4 cursor-pointer">
            <h4>Home</h4>
          </a>
          <a className="nav-text flex-c m-4 cursor-pointer">
            <h4>Home</h4>
          </a>
          <a className="nav-text flex-c m-4 cursor-pointer">
            <h4>Home</h4>
          </a>
          <button className="gold-button">
            <h4>Foo IN</h4>
          </button>
          <button className="gold-button">
            <h4>Foo Out</h4>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
