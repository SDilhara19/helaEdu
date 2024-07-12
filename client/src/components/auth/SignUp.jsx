import React from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "@assets/icons/hela-edu-white-text.svg";
import {
  faEnvelope,
  faInfo,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { authenticateUser } from "@services/AuthService";
import rightBanner from "@assets/img/hero-banner.svg";

function SignUp() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const signIn = useSignIn();

  const onSubmit = (e) => {
    e.preventDefault();
    authenticateUser(formData).then((res) => {
      if (res.status === 200) {
        let auth = {
          token: res.data.jwt,
          type: "Bearer",
        };
        let status = signIn({ auth });
      }
    });
  };
  return (
    <>
      <form
        method="POST"
        className="signup-left-pannel flex-c"
        onSubmit={onSubmit}
      >
        <div className="signup-details flex-col-c">
          <h2 className="m-3">Teacher</h2>
          <div className="m-3 w-10/12">
            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faUser} size="3x" className="icon" />
              <div className="floating-input-label">
                <input
                  placeholder=""
                  type="text"
                  name="firstname"
                  id="firstname"
                  required
                />
                <label for="firstname">First Name</label>
              </div>
            </div>
            <h5>&nbsp;</h5>

            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faUser} size="3x" className="icon" />
              <div className="floating-input-label">
                <input
                  placeholder=""
                  type="text"
                  name="lastname"
                  id="lastname"
                  required
                />
                <label for="lastname">Last Name</label>
              </div>
            </div>
            <h5>&nbsp;</h5>
            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faEnvelope} size="3x" className="icon" />
              <div className="floating-input-label">
                <input
                  placeholder=""
                  type="text"
                  name="email"
                  id="email"
                  required
                />
                <label for="email">Email</label>
              </div>
            </div>
            <h5>&nbsp;</h5>
            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faLock} size="3x" className="icon" />
              <div className="floating-input-label">
                <input
                  placeholder=""
                  type="password"
                  name="password"
                  id="password"
                  required
                />
                <label for="password">Passowrd</label>
              </div>
            </div>
            <h5>&nbsp;</h5>

            <div className="flex-end input-wrapper">
              <FontAwesomeIcon icon={faLock} size="3x" className="icon" />
              <div className="floating-input-label">
                <input
                  placeholder=""
                  type="password"
                  name="confim_password"
                  id="confim_password"
                  required
                />
                <label for="confim_password">Confirm Passowrd</label>
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

      <div className="signup-right-pannel flex-c">
        <img src={rightBanner} alt="" className="signup-banner-image" />
        <div className="signup-banner flex-col-c">
          <h2>Welcome Back!</h2>
          <img src={logo} alt="" srcSet="" className="w-full" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rem id
            pariatur aspernatur quia aperiam ad vero, dolore maxime, iusto fuga
            velit deleniti consequatur qui, veritatis libero facilis
            voluptatibus facere magni itaque ut cum beatae dolores voluptatum!
            Animi atque earum neque, explicabo, accusamus exercitationem libero
            nulla quasi consequatur assumenda veniam similique pariatur odio
            repudiandae. Voluptas, illo nihil ?
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
