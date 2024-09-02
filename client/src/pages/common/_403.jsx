import React from "react";
import { useEffect } from "react";
import { resetUserState } from "@reducers/userId";
import { useDispatch } from "react-redux";
function _403(validationType = "Id") {
  let dispatch = useDispatch();
  if ((validationType = "Id")) {
    useEffect(() => {
      dispatch(resetUserState(false));
      return () => dispatch(resetUserState(true));
    }, []);
  }
  return <h2>403 Forbidden</h2>;
}

export default _403;
