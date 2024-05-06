import "./Login.css";
// import CustomButton from "../Components/CustomButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import CustomInput from "../Components/CustomInput";

const Login = () => {
  return (
    <div className="main_container">
      <div className="semi-circle top-left"></div>
      <div className="semi-circle bottom-right"></div>

      {/* LOGIN FORM */}
      <div className="login_container">
        <div className="login_box">
          <div className="login_title">Login</div>
            
            
          <CustomInput
            icon={
              <FontAwesomeIcon
                icon={faEnvelope}
                fontSize={40}
                color="#898989"
              />
            }
            placeholder="Email Address"
            type="email"
          />
        </div>
        <div className="login_box"></div>
      </div>
    </div>
  );
};

export default Login;
