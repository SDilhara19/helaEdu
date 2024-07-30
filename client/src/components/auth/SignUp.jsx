import React, { useState } from "react";
import SignUpStudent from "@components/auth/SignUpStudent";
import SignUpTeacher from "@components/auth/SignUpTeacher";

function SignUp({ setLoadingState }) {
  const [signUpType, setSignUpType] = useState("teacher");
  return (
    <>
      {signUpType == "teacher" ? (
        <SignUpTeacher
          signUpType={signUpType}
          setSignUpType={setSignUpType}
          setLoadingState={setLoadingState}
        />
      ) : (
        <SignUpStudent
          signUpType={signUpType}
          setSignUpType={setSignUpType}
          setLoadingState={setLoadingState}
        />
      )}
    </>
  );
}

export default SignUp;
