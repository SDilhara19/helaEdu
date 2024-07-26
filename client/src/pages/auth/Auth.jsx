import { React, useState } from "react";
import { LogIn, SignUpTeacher, SignUp } from "@components/auth";
import { useLocation } from "react-router-dom";
import logo from "@assets/icons/hela-edu-white-text.svg";
import rightBanner from "@assets/img/hero-banner.svg";

function Auth() {
  let location = useLocation();
  let [loadingState, setLoadingState] = useState(false);
  let isLoginAction = location.state ? location.state.isLoginAction : true;

  return (
    <div className={`auth ${loadingState ? "loading-body" : ""}`}>
      <span
        className={`loading loading-dots loading-lg loading-span ${
          loadingState ? "loading-span" : "no-display"
        }`}
      ></span>
      {isLoginAction ? (
        <LogIn setLoadingState={setLoadingState} />
      ) : (
        <SignUp setLoadingState={setLoadingState} />
      )}
      <div className="right-pannel flex-c">
        <img src={rightBanner} alt="" className="banner-image" />
        <div className="banner flex-col-c">
          <h2>Welcome Back!</h2>
          <img src={logo} alt="" srcSet="" className="w-full" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rem id
            pariatur aspernatur quia aperiam ad vero, dolore maxime, iusto fuga
            velit deleniti consequatur qui, veritatis libero facilis
            voluptatibus facere magni itaque ut cum beatae dolores voluptatum!
            Animi atque earum neque, explicabo, accusamus exercitationem libero
            nulla quasi consequatur assumenda veniam similique pariatur odio
            repudiandae. Voluptas, illo nihil ?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
