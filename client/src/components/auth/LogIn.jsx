import React from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "@assets/icons/hela-edu-white-text.svg";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { authenticateUser } from "@services/AuthService";

function Login() {
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const signIn = useSignIn();

  const onSubmit = (e) => {
    e.preventDefault();
    authenticateUser(formData).then((res) => {
      if (res.status === 200) {
        if (
          signIn({
            auth: {
              token: res.data.jwt,
              type: "Bearer",
            },
            refresh: res.data.jwt,
          })
        ) {
        } else {
        }
      }
    });
  };
  return (
    <>
      <form
        method="POST"
        className="login-left-pannel flex-c"
        onSubmit={onSubmit}
      >
        <div className="login-details flex-col-c">
          <h2 className="m-3">Hello</h2>
          <h3 className="m-3">Sign into your account</h3>
          <div className="m-3 w-full">
            <label className="flex text-input m-3">
              <FontAwesomeIcon icon={faEnvelope} size="1.5x" className="icon" />
              <input
                type={"email"}
                name="email"
                placeholder="Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </label>
            <h5>&nbsp;</h5>
            <label className="flex text-input m-3">
              <FontAwesomeIcon icon={faLock} size="1.5x" className="icon" />
              <input
                type={"password"}
                name="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </label>
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
              Don't have an account? <span>Create</span>
            </h4>
          </div>
        </div>
      </form>

      <div className="login-right-pannel flex-c">
        <div className="login-banner flex-col-c">
          <h2>Welcome Back!</h2>
          <img src={logo} alt="" srcset="" className="w-full" />
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

export default Login;
