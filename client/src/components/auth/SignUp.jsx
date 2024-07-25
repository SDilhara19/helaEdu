import React, { useState } from "react";
import SignUpStudent from "@components/auth/SignUpStudent";
import SignUpTeacher from "@components/auth/SignUpTeacher";

function SignUp() {
  const [signUpType, setSignUpType] = useState("teacher");
  return (
    <>
      {signUpType == "teacher" ? (
        <SignUpTeacher signUpType={signUpType} setSignUpType={setSignUpType} />
      ) : (
        <SignUpStudent signUpType={signUpType} setSignUpType={setSignUpType} />
      )}
    </>
  );
}

export default SignUp;
