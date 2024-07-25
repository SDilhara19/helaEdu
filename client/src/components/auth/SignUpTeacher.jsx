import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "@assets/icons/hela-edu-white-text.svg";
import {
  faEnvelope,
  faBookOpen,
  faLock,
  faUser,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import rightBanner from "@assets/img/hero-banner.svg";

function SignUpTeacher({ signUpType, setSignUpType }) {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
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
                    name="firstname"
                    id="firstname"
                    required
                  />
                  <label htmlFor="firstname">First Name</label>
                </div>
              </div>

              <div className="flex-end input-wrapper">
                <div className="floating-input-label">
                  <input
                    placeholder=""
                    type="text"
                    name="lastname"
                    id="lastname"
                    required
                  />
                  <label htmlFor="lastname">Last Name</label>
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
                  name="confim_password"
                  id="confim_password"
                  required
                />
                <label htmlFor="confim_password">Confirm Passowrd</label>
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
            </div>
          </div>

          <div className="m-3">
            <button className="btn white-button px-2">
              <h4>Sign Up</h4>
            </button>
          </div>
          <div className="flex-c m-3">
            <h4>
              Already have an account? <span>Sign In</span>
            </h4>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpTeacher;
