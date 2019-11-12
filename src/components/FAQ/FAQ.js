import React, { useContext, useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useTransition, animated } from 'react-spring';

import SiteContext from '../SiteContext';
import FAQList from './FAQList';
import GreenLogo from '../../images/greater-belhaven-logo-green.svg';
import { media } from '../theme';

const FAQ = () => {
  
  const pastBreak = breakpoint !== 'small';
  const { faqs, ready, breakpoint, leftWidth, setHeightReady, heightReady } = useContext(SiteContext);
  const [active, setActive] = useState(pastBreak && faqs ? faqs[0].id : null);
  const [longestAnswer, setLongestAnswer] = useState(false);
  const [answerHeight, setAnswerHeight] = useState(0);

  
  useEffect(() => {
    setLongestAnswer(faqs && faqs.reduce((acc, cur) => cur.answer.length > acc.answer.length ? cur : acc));
    if (pastBreak && faqs) {
      setActive(faqs[0].id);
    }
  }, [faqs]);

  const answerRef = useRef(null);

  useEffect(() => {
    if (longestAnswer && breakpoint === "break") {
      setActive(longestAnswer.id);
      setAnswerHeight(answerRef.current.clientHeight + 100 + 32);
      setHeightReady(true);
      setActive(breakpoint !== "small" ? faqs[0].id : null);
    }
    if (breakpoint === 'small') {
      setHeightReady(true);
    }
  }, [longestAnswer]);

  const answerTransition = useTransition(
    faqs ? faqs.filter(({ id }) => id === active) : [],
    item => item.id,
    {
      from: {
        opacity: "0",
        transform: "translateX(-100%)",
      },
      enter: {
        opacity: "1",
        transform: "translateX(0)"
      },
      leave: {
        opacity: "0",
        transform: "translateX(100%)"
      }
    }
  );

  return (
    <FAQContainer className="faq" leftWidth={leftWidth}>
      <div className="faq-questions">
        <FAQHeading className="faq__heading">
          Frequently Asked Questions
        </FAQHeading>
        {ready ? (
          <FAQList faqs={faqs} setActive={setActive} active={active} breakpoint={breakpoint} />
        ) : null}
      </div>
      {faqs && breakpoint === "break" && (
        <AnswerBox
          className="faq-answer"
          bg={GreenLogo}
          style={{ height: heightReady ? `${answerHeight}px` : null }}
        >
          {answerTransition.map(({ item, key, props }) => (
            <AnimatedAnswer
              key={key}
              className="answer"
              style={props}
              ref={answerRef}
            >
              {item.answer}
            </AnimatedAnswer>
          ))}
        </AnswerBox>
      )}
    </FAQContainer>
  );
};


const FAQContainer = styled.div`
  ${media.break`
    display: flex;
  `}
  .faq-questions {
    background: ${({ theme }) => theme.light};
    ${media.break`
      flex: 0 0 ${({ leftWidth }) => leftWidth}px;
      z-index: 2;
    `}
  }
`;

const FAQHeading = styled.h2`
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.red};
  margin: 0;
  padding: 2rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.67px;
  ${media.break`
    background: transparent;
  `}
`;

const backgroundLogo = css`
  content: '';
  background-image: ${({ bg }) => `url(${bg})`};
  position: absolute;
  opacity: 0.25;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
  ${media.break`
    bottom: 3rem;
  `}
`;


const AnswerBox = styled.div`
  position: relative;
  padding: 5rem 4rem;
  line-height: 2;
  flex-grow: 1;
  z-index: 1;
  overflow: hidden;
  ::before {
    ${backgroundLogo}
  }
`;

const AnimatedAnswer = styled(animated.p)`
  position: absolute;
  width: calc(100% - 8rem);
`;

export { backgroundLogo };
export default FAQ;