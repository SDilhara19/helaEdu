import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { createTeacher, uploadTeacherProof } from "@services/TeacherService";
import { useNavigate } from "react-router-dom";

function SignUpTeacher({ signUpType, setSignUpType, setLoadingState }) {
  let navigator = useNavigate();
  const uploadInputRef = useRef(null);
  const [proofFileName, setProofFileName] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    resetMessages();
    let files = uploadInputRef.current.files;

    if (formData.password !== formData.confirmPassword) {
      setError("Confirm Password didn't match the password");
    } else if (!files.length) {
      setError("Please upload proofs for verification");
    } else {
      await submitTeacherDetails();
    }
  };

  const resetMessages = () => {
    setError(false);
    setSuccess(false);
  };

  const submitTeacherDetails = async () => {
    try {
      setLoadingState(true);
      await createTeacher(formData);
      await uploadProofFile();
    } catch (error) {
      displayErrorMessage(error);
    }
  };

  const uploadProofFile = async () => {
    try {
      let files = uploadInputRef.current.files;
      let formDetails = new FormData();
      formDetails.append("proofFile", files[0]);
      await uploadTeacherProof(formDetails, formData.email);
      setSuccess("You will get notified once an Admin aprove the sign up");
      setLoadingState(false);
    } catch (error) {
      displayErrorMessage(error);
    }
  };

  const displayErrorMessage = (error) => {
    console.log(error);

    let errorResponse = error.response;
    let violations = errorResponse.data.violations;
    violations.forEach((errorObject) => {
      setError(errorObject.errorMessage);
    });
    setLoadingState(false);
  };

  return (
    <>
      <form
        method="POST"
        className="left-pannel flex-c signup"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="details ">
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
          <div className="flex-sb w-8/12">
            <h4 className="text-nowrap">Verification Proof</h4>
            <div
              className={proofFileName ? "upload-verification" : "no-display"}
            >
              <h4
                className="text-cyan-600 cursor-pointer"
                onClick={() => {
                  uploadInputRef.current.click();
                }}
              >
                {proofFileName}
              </h4>
            </div>
            <div
              className={proofFileName ? "no-display" : "upload-verification"}
            >
              <button
                className="btn white-button px-2"
                onClick={() => {
                  uploadInputRef.current.click();
                }}
              >
                <h4>Upload</h4>
              </button>
              <span className="mx-1">
                <FontAwesomeIcon icon={faInfo} size="2x" />
              </span>
              <input
                type="file"
                name="file"
                ref={uploadInputRef}
                onChange={() => {
                  let files = uploadInputRef.current.files;
                  if (files) {
                    setProofFileName(files[0].name);
                  }
                }}
                className="no-display"
              />
            </div>
          </div>

          <div className="m-3">
            <button className="btn gold-button px-2" onClick={formSubmit}>
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
