import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "@assets/icons/hela-edu-white-text.svg";
import {
  faEnvelope,
  faLock,
  faUser,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import rightBanner from "@assets/img/hero-banner.svg";

function SignUpTeacher({ signUpType, setSignUpType, setLoadingState }) {
  const uploadInputRef = useRef(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Confirm Password didn't match the password");
    } else {
      setLoadingState(true);
      createStudent(formData)
        .then((res) => {
          if (res.status === 201) {
            let userId = { role: res.data.userId };
            if (userId) {
              setSuccess("Verification Email have been send");
              setLoadingState(false);
            }
          }
        })
        .catch((error) => {
          let res = error.response;
          if (res.status == 400) {
            let violations = res.data.violations;
            violations.forEach((error) => {
              setError(error.errorMessage);
            });
            setLoadingState(false);
          }
        });
    }
  };
  return (
    <>
      <form method="POST" className="left-pannel flex-c" onSubmit={onSubmit}>
        <div className="details flex-col-c">
          <div className="form-header">
            <h3
              className={`m-3 ${signUpType == "teacher" ? "active" : ""}`}
              onClick={() => {
                setSignUpType("teacher");
              }}
            >
              Teacher
            </h3>
            <h3
              className={`m-3 ${signUpType == "student" ? "active" : ""}`}
              onClick={() => {
                setSignUpType("student");
              }}
            >
              Student
            </h3>
          </div>
          <div className="form-wrapper">
            <div className="flex-sb">
              <div className="flex-end input-wrapper">
                <FontAwesomeIcon icon={faUser} size="2x" className="icon" />
                <div className="floating-input-label">
                  <input
                    placeholder=""
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
              </div>

              <div className="flex-end input-wrapper">
                <div className="floating-input-label">
                  <input
                    placeholder=""
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
            </div>
            <h5>&nbsp;</h5>
            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
              <div className="floating-input-label">
                <input
                  placeholder=""
                  type="text"
                  name="email"
                  id="email"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <h5>&nbsp;</h5>
            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faLock} size="2x" className="icon" />
              <div className="floating-input-label">
                <input
                  placeholder=""
                  type="password"
                  name="password"
                  id="password"
                  required
                />
                <label htmlFor="password">Passowrd</label>
              </div>
            </div>
            <h5>&nbsp;</h5>

            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faLock} size="2x" className="icon" />
              <div className="floating-input-label">
                <input
                  placeholder=""
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  required
                />
                <label htmlFor="confirmPassword">Confirm Passowrd</label>
              </div>
            </div>
            <h5>&nbsp;</h5>
          </div>
          <div className="flex-sb w-8/12">
            <h4>Verification Proof</h4>
            <div className="upload-verification">
              <button className="btn white-button px-2">
                <h4>Upload</h4>
              </button>
              <span className="mx-1">
                <FontAwesomeIcon icon={faInfo} size="2x" />
              </span>
              <input type="file" name="file" ref={uploadInputRef} />
            </div>
          </div>

          <div className="m-3">
            <button className="btn gold-button px-2">
              <h4>Sign Up</h4>
            </button>
          </div>
          <div className="flex-c m-3">
            <h4>
              Already have an account?{" "}
              <span
                className="navigate"
                onClick={() => {
                  navigator("/auth", { state: { isLoginAction: true } });
                }}
              >
                Sign In
              </span>
            </h4>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpTeacher;
