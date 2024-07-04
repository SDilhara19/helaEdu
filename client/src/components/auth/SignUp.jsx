import React from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import axios from "axios";

function SignUp() {
  return (
    <div className="floating-input-label">
      <input type="input" placeholder="Name" name="name" id="name" required />
      <label for="name">Name</label>
    </div>
  );
}

export default SignUp;
