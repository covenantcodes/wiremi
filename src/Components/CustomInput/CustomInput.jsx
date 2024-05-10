import PropTypes from 'prop-types';
import "./CustomInput.css"

const CustomInput = ({ icon, placeholder, type, ...rest }) => {
  return (
    <div className="custom_input_container">
    <div className="custom_input">
        <div className="custom_input_icon_container">
          {icon}
        </div>
        <input placeholder={placeholder} type={type} {...rest} className="input_container" />
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