import React from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

function Test() {
  const auth = useAuthUser().role;
  return (
    <>
      <h2> test</h2>

      <h4>Hello {auth}</h4>
    </>
  );
}

export default Test;
