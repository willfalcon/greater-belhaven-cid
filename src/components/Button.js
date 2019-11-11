import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';


const Button = ({ children, href, target, title, className, bold = false }) => {
  return (
    <StyledLink bold={bold} className={classNames('button', className)} href={href} target={target ? target : '_self'}>
      {children}{title}
    </StyledLink>
  );
};

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  border: 4px solid white;
  border-radius: 20px;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  font-weight: ${({ theme }) => theme.font.bold};
`;

export default Button;