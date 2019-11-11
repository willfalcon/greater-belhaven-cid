import React, { useContext } from "react";
import styled from 'styled-components';
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
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });

  return transition.map(({ item, key, props}) => !item &&
    <StyledLoaderWrapper key={item} style={props}>
      <Loader type="ball-pulse-rise" />
    </StyledLoaderWrapper>
  );
};

const StyledLoaderWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  left: 0;
  top: 0;
  z-index: 10;
  .loader {
    position: absolute;
    top: 250px;
    top: 50vh;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  .ball-pulse-rise > div {
    background: ${({ theme }) => theme.red};
  }
`;

export default LoaderWrap;