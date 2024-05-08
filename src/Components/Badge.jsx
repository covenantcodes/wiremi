import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledBadge = styled.div`
  min-width: 18px;
  min-height: 18px;
  display: flex;
  align-items: center;
  margin-right: .5rem;
  justify-content: center;
  border-radius: ${({ shape }) => {
    if (shape === 'circle') return '50%';
    if (shape === 'square') return '15%';
    return '16px'; 
  }};
  padding: ${({ shape }) => (shape === 'circle' ? '0' : '0 2px')};
  font-size: 11px;
  font-weight: 600;

  ${({ variant }) => {
    switch (variant) {
      case 'info':
        return `
          background-color: #3355FF;
          color: #fff;
        `;
      case 'success':
        return `
          background-color: #0cbb34;
          color: #fff;
        `;
      case 'danger':
        return `
          background-color: #fb3939;
          color: #fff;
        `;
      case 'warning':
        return `
          background-color: #e25807;
          color: #fff;
        `;
      default:
        return '';
    }
  }}
`;

const Badge = ({ children, variant = 'info', shape = 'rounded', ...rest }) => {
  return (
    <StyledBadge variant={variant} shape={shape} {...rest}>
      {children}
    </StyledBadge>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  shape: PropTypes.oneOf(['circle', 'rounded', 'square']),
};

export default Badge;
