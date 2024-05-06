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
    padding,
    color,
    ...rest
}) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        borderRadius: borderRadius,
        padding: padding,
        color,
        transition: 'transform 0.3s',
        ...(hoverColor && {'&:hover': {backgroundColor: hoverColor}}),
        ...(hoverTransformScale && {'&:hover': {transform: `scale(${hoverTransformScale})`}})
    };

    return (
        <div style={buttonStyle} {...rest}>
            {icon && <span>{icon}</span>}
            {children}  
        </div>
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
    padding: PropTypes.string,
    color: PropTypes.string
  };
  
  CustomButton.defaultProps = {
    backgroundColor: '#1a1a1a',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1em',
    fontWeight: '500',
    borderRadius: '8px', 
    padding: '1rem',
    color: '#ffffff '
  };
  
  export default CustomButton;

