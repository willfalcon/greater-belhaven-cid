import React, { useContext } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import tree from '../images/tree.jpg';

import SiteContext from './SiteContext';
import { media } from './theme';
import Button from './Button';
import countMeIn from '../images/count-me-in-white.svg';

const Info = () => {

  const { main_content, link_1, link_2, leftWidth, viewport } = useContext(SiteContext);

  return (
    <StyledInfo className="info" bg={tree} leftWidth={leftWidth} viewWidth={viewport.width}>
      <div className="info__video-wrapper"></div>
      <div className="info__content-wrapper">
        <div
          className="info__content"
          dangerouslySetInnerHTML={{ __html: main_content }}
        />
        {link_1 && (
          <Button
            className="info__link"
            href={link_1.url}
            target={link_1.target}
          >
            <img src={countMeIn} alt="Count Me In" />
          </Button>
        )}
        {link_2 && (
          <Button
            className="info__link"
            href={link_2.url}
            target={link_2.target}
          >
            {link_2.title}
          </Button>
        )}
      </div>
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  background-image: ${({ bg }) => `url(${bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  color: ${({ theme }) => theme.offWhite};
  font-size: 1.8rem;
  letter-spacing: .9px;
  line-height: 1.33;

  position: relative;

  ${media.break`
    display: flex;

    ::before {
      content: '';
      background: ${({ theme }) => theme.orange};
      mix-blend-mode: screen;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: ${({ leftWidth }) => leftWidth}px;
    }
  `}

  ::after {
    content: '';
    background: ${({ theme }) => rgba(theme.blue, .85)};
    width: 100%;
    ${media.break`
      width: ${({ leftWidth, viewWidth }) => viewWidth - leftWidth}px;
    `}
    height: 100%;
    right: 0;
    top: 0;
    position: absolute;
    z-index: 0;
  }

  .info {
    &__video-wrapper {
      flex: 0 0 ${({ leftWidth }) => leftWidth + 25}px;
    }
    &__content-wrapper {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      ${media.break`
        flex-flow: row wrap;
        /* justify-content: center; */
      `}
    }
    &__content {
      position: relative;
      z-index: 1;
      flex: 0 0 100%;
    }
    &__link {
      z-index: 1;
      position: relative;
      ${media.break`
        margin: 0 1rem 2rem;
      `}
    }
  }
`;

export default Info;