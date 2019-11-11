import React from 'react';
import styled from 'styled-components';


import Logo from '../images/greater-belhaven-logo.svg';
import CountMeIn from '../images/count-me-in-red.svg';
import cidRed from '../images/cid-red.svg';

import { media } from './theme';

const Header = () => {
  return (
    <StyledHeader className="header">
      <img className="header-logo" src={Logo} alt="Greater Belhaven Foundation" />
      <div className="header-cid">
        <img className="count-me-in" src={CountMeIn} alt="Count Me In" />
        <img className="cid" src={cidRed} alt="Community Improvement District" />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  .header-logo {
    margin-bottom: 2.5rem;
  }
  .count-me-in {
    margin-bottom: 1.5rem;
    padding: 0 .15rem;
  }
  .cid {
    padding: 0 .15rem;
  }
  ${media.break`
    flex-direction: row;
    align-items: flex-end;
    padding: 2rem 3rem;
    .header-logo {
      margin-bottom: 0;
      padding: 0 2rem;
      flex: 0 1 300px;
      max-width: 300px;
    }
    .header-cid {
      padding: 0 2rem;
      flex: 1 0 600px;
    }
  `}
`;

export default Header;