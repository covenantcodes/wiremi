import PropTypes from 'prop-types';
import "../Auth/Login.css"

const CustomInput = ({ icon, placeholder, type, ...rest }) => {
  return (
    <div className="login_input_container">
    <div className="login_input_top"></div>
    <div className="login_input_bottom">
      <div className="login_input_bottom_main">
        <div className="login_input_icon_container">
          {icon}
        </div>
        <input placeholder={placeholder} type={type} {...rest} className="input_container"/>
      </div>
    </div>
  </div>
  );
};

CustomInput.propTypes = {
  icon: PropTypes.node.isRequired, 
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default CustomInput;