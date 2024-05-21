import { useState } from "react";
import Lottie from "lottie-react";
import "./Login.css";
import CustomButton from "../Components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../Components/CustomInput/CustomInput";
import { useNavigate } from "react-router-dom";
import loadingData from "../../public/img/loading.json";

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggingIn(true);
    // Simulate login process
    setTimeout(() => {
      navigate("/Dashboard");
    }, 2000);
  };

  return (
    <div className="main_container">
      <div className="semi-circle top-left"></div>
      <div className="semi-circle bottom-right"></div>

      {/* LOGIN FORM */}
      <div className="login_container">
        <div className="login_box-bg">
          <img src="../../public/img/logo.png" className="logo_img" />
        </div>
        <div className="login_box">
          <div className="login_title">Login</div>

          <div className="login_input">
            <CustomInput
              icon={
                <FontAwesomeIcon
                  icon={faEnvelope}
                  fontSize={20}
                  color="#898989"
                />
              }
              placeholder="Input your user ID or Email"
              type="email"
            />

            <CustomInput
              icon={
                <FontAwesomeIcon icon={faKey} fontSize={20} color="#898989" />
              }
              placeholder="Input your Password"
              type="password"
            />
          </div>

          <div className="login_extras">
            {/* Remember Me checkbox */}
            <div className="checkbox-wrapper-1">
              <input
                id="example-1"
                className="substituted"
                type="checkbox"
                aria-hidden="true"
              />
              <label htmlFor="example-1">Remember Me</label>
            </div>

            {/* Forgot Password link */}
            <div className="login_forgot">Forgot Password?</div>
          </div>

          {/* LOGIN BUTTON */}
          <div className="login_button">
            {isLoggingIn ? (
              <div className="custom-animation">
                <Lottie
                  animationData={loadingData}
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            ) : (
              <CustomButton
                onClick={handleLogin}
                icon={<FontAwesomeIcon icon={faDoorOpen} />}
                backgroundColor="var(--sub-primary-color)"
                fontWeight="700"
              >
                LOGIN
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
