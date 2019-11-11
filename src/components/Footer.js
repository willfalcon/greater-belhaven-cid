import React from 'react';
import styled from 'styled-components';

import WhiteLogo from '../images/greater-belhaven-logo-white.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <img className="footer__logo" src={WhiteLogo} alt="Greater Belhaven Foundation" />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.green};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;