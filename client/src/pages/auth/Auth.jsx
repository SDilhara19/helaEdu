import { React, useState } from "react";
import { LogIn, SignUp } from "@components/auth";
import { useLocation } from "react-router-dom";

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
    </div>
  );
}

export default Auth;
