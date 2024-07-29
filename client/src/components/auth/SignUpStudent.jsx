import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faInfo,
  faLock,
  faUser,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { createStudent } from "@services/StudentService";

function SignUpStudent({ signUpType, setSignUpType, setLoadingState }) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    grade: "",
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
          <div className={`error-msg ${error ? "" : "no-display"}`}>
            <span>{error}</span>
          </div>
          <div className={`success-msg ${success ? "" : "no-display"}`}>
            <span>{success}</span>
          </div>
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
                    onInput={(e) => {
                      setFormData({ ...formData, firstName: e.target.value });
                    }}
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
                    onInput={(e) => {
                      setFormData({ ...formData, lastName: e.target.value });
                    }}
                    required
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
            </div>
            <h5>&nbsp;</h5>

            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faBookOpen} size="2x" className="icon" />
              <div className="floating-input-label">
                <input
                  placeholder=""
                  type="text"
                  name="grade"
                  id="grade"
                  onInput={(e) => {
                    setFormData({ ...formData, grade: e.target.value });
                  }}
                  required
                />
                <label htmlFor="grade">Grade</label>
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
                  onInput={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
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
                  onInput={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
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
                  onInput={(e) => {
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    });
                  }}
                  required
                />
                <label htmlFor="confirmPassword">Confirm Passowrd</label>
              </div>
            </div>
            <h5>&nbsp;</h5>
          </div>
          <div className="placeholder">
            <h4></h4>
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

export default SignUpStudent;
