import React from 'react';
import styled from 'styled-components';

import WhiteLogo from '../images/greater-belhaven-logo-white.svg';

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <a className="footer__home_link" href="/">
        <img
          className="footer__logo"
          src={WhiteLogo}
          alt="Greater Belhaven Foundation"
        />
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.green};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .footer {
    &__home_link {
      display: block;
    }
  }
`;

export default Footer;