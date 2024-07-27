import React, { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { authenticateUser } from "@services/AuthService";
import { useNavigate } from "react-router-dom";

function Login({ setLoadingState }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const signIn = useSignIn();
  const navigator = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoadingState(true);
    authenticateUser(formData)
      .then((res) => {
        if (res.status === 200) {
          let auth = {
            token: res.data.jwt,
            type: "Bearer",
          };
          let status = signIn({ auth });
          if (status) {
            navigator("/");
          }
        }
      })
      .catch((error) => {
        let res = error.response;
        if (res.status == 401) {
          let violations = res.data.violations;
          violations.forEach((error) => {
            setError(error.errorMessage);
          });
          setLoadingState(false);
        }
      });
  };
  return (
    <>
      <form method="POST" className="left-pannel flex-c" onSubmit={onSubmit}>
        <div className="details flex-col-c">
          <h3 className="m-3">Sign into your account</h3>
          <div className={`error-msg ${error ? "" : "no-display"}`}>
            <span>{error}</span>
          </div>
          <div className="m-3 w-10/12">
            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
              <div className="floating-input-label">
                <input
                  type="text"
                  placeholder="Name"
                  name="email"
                  id="email"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <h5>&nbsp;</h5>

            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faLock} size="2x" className="icon" />
              <div className="floating-input-label">
                <input
                  type="password"
                  placeholder="Name"
                  name="name"
                  id="name"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <label htmlFor="name">Password</label>
              </div>
            </div>
            <h5>&nbsp;</h5>
          </div>
          <div className="flex-sb w-11/12 m-3">
            <div className="flex">
              <input type="checkbox" name="remember" className="mx-1" />
              <h5>Remember me</h5>
            </div>
            <h5>Forgotten Password</h5>
          </div>
          <div className="m-3">
            <button className="btn gold-button px-2">
              <h4>Sign In</h4>
            </button>
          </div>
          <div className="flex-c m-3">
            <h4>
              Don't have an account?{" "}
              <span
                className="navigate"
                onClick={() => {
                  navigator("/auth", { state: { isLoginAction: false } });
                }}
              >
                Create
              </span>
            </h4>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
