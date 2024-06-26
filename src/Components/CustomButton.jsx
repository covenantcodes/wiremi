import PropTypes from 'prop-types';

const CustomButton = ({
    children,
    icon,
    iconSpacing,
    backgroundColor,
    fontFamily,
    fontSize,
    fontWeight,
    hoverColor,
    hoverTransformScale,
    borderRadius,
    padding,
    color,
    width,
    borderWidth,
    borderColor,
    onClick,
    marginLeft,
    ...rest
}) => {
    const buttonStyle = {
        display: 'inline-flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: backgroundColor,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        borderRadius: borderRadius,
        padding: padding,
        color: color,
        width: width,
        cursor: 'pointer',
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderStyle: 'solid', // Adding border style
        transition: 'transform 0.3s',
        marginLeft: marginLeft,
        ...(hoverColor && {'&:hover': {backgroundColor: hoverColor}}),
        ...(hoverTransformScale && {'&:hover': {transform: `scale(${hoverTransformScale})`}})
    };

    const iconStyle = {
        marginRight: iconSpacing 
    };

    return (
        <div style={buttonStyle} onClick={onClick} {...rest}>
            {icon && <span style={iconStyle}>{icon}</span>}
            {children}  
        </div>
    );
};

CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node,
    iconSpacing: PropTypes.string,
    backgroundColor: PropTypes.string,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    hoverColor: PropTypes.string,
    hoverTransformScale: PropTypes.number,
    borderRadius: PropTypes.string,
    padding: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    borderWidth: PropTypes.string,
    borderColor: PropTypes.string, 
    marginLeft: PropTypes.string,
    onClick: PropTypes.func
};
  
CustomButton.defaultProps = {
    backgroundColor: '#1a1a1a',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1em',
    fontWeight: '500',
    borderRadius: '8px', 
    padding: '1rem',
    color: '#ffffff',
    width: '7rem',
    iconSpacing: '0.5rem',
    borderWidth: '0px', 
    borderColor: '#000000', 
    marginLeft: "0px"
};
  
export default CustomButton;
