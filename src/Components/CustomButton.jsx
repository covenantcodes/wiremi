import PropTypes from 'prop-types'

const CustomButton = ({
    children,
    icon,
    backgroundColor,
    fontFamily,
    fontSize,
    fontWeight,
    hoverColor,
    hoverTransformScale,
    borderRadius,
    ...rest
}) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        borderRadius: borderRadius,
        transition: 'transform 0.3s',
        ...(hoverColor && {'&:hover': {backgroundColor: hoverColor}}),
        ...(hoverTransformScale && {'&:hover': {transform: `scale(${hoverTransformScale})`}})
    };

    return (
        <button style={buttonStyle} {...rest}>
            {icon && <span>{icon}</span>}
            {children}  
        </button>
    );
};

CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node,
    backgroundColor: PropTypes.string,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    hoverColor: PropTypes.string,
    hoverTransformScale: PropTypes.number,
    borderRadius: PropTypes.string,
  };
  
  CustomButton.defaultProps = {
    backgroundColor: '#1a1a1a',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1em',
    fontWeight: '500',
    borderRadius: '8px', 
  };
  
  export default CustomButton;

