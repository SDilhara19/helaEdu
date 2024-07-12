import { React, useState } from "react";
import { LogIn, SignUp } from "@components/auth";
import { useLocation } from "react-router-dom";

function Auth() {
  let Component;
  let location = useLocation();
  let [loadingState, setLoadingState] = useState(false);
  let { authType } = location.state;
  if (authType == "login") {
    Component = <LogIn setLoadingState={setLoadingState} />;
  } else if (authType == "signup") {
    Component = <SignUp setLoadingState={setLoadingState} />;
  }

  return (
    <div className={`auth ${loadingState ? "loading-body" : ""}`}>
      <span
        className={`loading loading-dots loading-lg loading-span ${
          loadingState ? "loading-span" : "no-display"
        }`}
      ></span>
      {Component}
    </div>
  );
}

export default Auth;
