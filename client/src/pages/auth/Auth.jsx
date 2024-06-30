import React from "react";
import { LogIn, SignUp } from "@components/auth";
import { useLocation } from "react-router-dom";
function Auth() {
  let Component;
  let location = useLocation();
  let { authType } = location.state;
  if (authType == "login") {
    Component = <LogIn />;
  } else if (authType == "signup") {
    Component = <SignUp />;
  }
  return <div className="auth">{Component}</div>;
}

export default Auth;
