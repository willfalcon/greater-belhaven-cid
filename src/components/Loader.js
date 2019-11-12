import React, { useContext } from "react";
import styled, { keyframes } from 'styled-components';
import Loader from 'react-loaders';
import { useTransition, animated } from 'react-spring';

import 'loaders.css/src/animations/ball-pulse-rise.scss';

import SiteContext from "./SiteContext";

const LoaderWrap = () => {

  const { ready } = useContext(SiteContext);
  
  const transition = useTransition(ready, null, {
    from: {
      opacity: 1,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    }
  });

  return transition.map(({ item, key, props}) => !item &&
    <StyledLoaderWrapper key={item} style={props}>
      <CIDLoader>
        <div />
        <div />
        <div />
        <div />
        <div />
      </CIDLoader>
    </StyledLoaderWrapper>
  );
};


const ballPulseRiseEven = keyframes`
  0% {
    transform: scale(1.1);
  }
  25% {
    transform: translateY(-30px);
  }
  50% {
    transform: scale(0.4);
  }
  75% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
    transform: scale(1.0);
  }
`;

const ballPulseRiseOdd = keyframes`
  0% {
    transform: scale(0.4);
  }
  25% {
    transform: translateY(30px);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
    transform: scale(0.75);
  }
`;

const StyledLoaderWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  left: 0;
  top: 0;
  z-index: 10;
`;

const CIDLoader = styled.div`
  position: absolute;
  top: 250px;
  top: 50vh;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  > div {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    background: ${({ theme }) => theme.red};
    display: inline-block;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.15, 0.46, 0.9, 0.6);
    animation-iteration-count: infinite;
    animation-delay: 0;
    &:nth-child(2n) {
      animation-name: ${ballPulseRiseEven};
    }

    &:nth-child(2n-1) {
      animation-name: ${ballPulseRiseOdd};
    }
  }
`;

export default LoaderWrap;