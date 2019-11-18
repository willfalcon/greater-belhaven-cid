import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';

import map from '../images/cid-map.png';
import countMeIn from '../images/count-me-in-white.svg';

import SiteContext from './SiteContext';
import { media } from './theme';

const Instructions = () => {
  const { instruction_block, setLeftWidth } = useContext(SiteContext);

  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      setLeftWidth(imgRef.current.clientWidth);
    }
  });

  return (
    <StyledInstructions id="count-me-in" className="instructions">
      <div className="instructions__map">
        <img
          className="cid-map"
          src={map}
          alt="Map of Belhaven District"
          ref={imgRef}
        />
      </div>
      <div className="instructions__count-me-in">
        <img className="count-me-in" src={countMeIn} alt="Count Me In" />
        <div
          className="instructions__content"
          dangerouslySetInnerHTML={{ __html: instruction_block }}
        />
      </div>
    </StyledInstructions>
  );
};

const StyledInstructions = styled.div`
  background: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.offWhite};
  font-size: 1.8rem;
  letter-spacing: 0.9px;
  line-height: 1.33;

  p,
  strong,
  em {
    color: ${({ theme }) => theme.offWhite};
  }

  .instructions {
    &__count-me-in {
      padding: 2.5rem 2rem;
      .count-me-in {
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        margin-bottom: 2rem;
      }
    }
  }
  ${media.break`
    display: flex;
    background: transparent;

    .instructions {
      &__count-me-in {
        background: ${({ theme }) => theme.red};
        padding: 3rem 4rem;
        .count-me-in {
          width: auto;
          height: 30px;
        }
      }
    }
  `}
`;

export default Instructions;
