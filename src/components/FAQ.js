import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';

import SiteContext from './SiteContext';
import FAQAnswer from './FAQAnswer';
import GreenLogo from '../images/greater-belhaven-logo-green.svg';
import { media } from './theme';

const FAQ = () => {

  const { faqs, ready, breakpoint, leftWidth } = useContext(SiteContext);
  const [active, setActive] = useState(breakpoint === 'small' ? null : 0);
  
  return (
    <FAQContainer className="faq" leftWidth={leftWidth}>
      <div className="faq-questions">
        <FAQHeading className="faq__heading">
          Frequently Asked Questions
        </FAQHeading>
        {ready ? (
          <StyledFAQs className="question-list" bg={GreenLogo}>
            {faqs.map((faq, i) => (
              <React.Fragment key={i}>
                <StyledQuestion active={active === i} className="question">
                  <button
                    className="question__button"
                    aria-controls={`answer-${i}`}
                    aria-expanded={active === i}
                    onClick={() => setActive(i)}
                  >
                    {faq.question}
                  </button>
                </StyledQuestion>
                {breakpoint === 'small' && (
                  <FAQAnswer id={`answer-${i}`} active={active === i}>
                    {faq.answer}
                  </FAQAnswer>
                )}
              </React.Fragment>
            ))}
          </StyledFAQs>
        ) : null}
      </div>
      {ready && breakpoint === 'break' && (
        <AnswerBox className="faq-answer" bg={GreenLogo}>
          {faqs
            .filter((faq, i) => i === active)
            .map((faq, i) => (
              <p className="answer" key={i}>{faq.answer}</p>
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
  ::before {
    ${backgroundLogo}
  }
`;

const StyledFAQs = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  ::before {
    ${backgroundLogo}
    ${media.break`
      content: none;
    `}
  }
`;

const StyledQuestion = styled.li`
  margin: .5rem 0;
  button {
    line-height: 1.375;
    transition: .25s;
    color: ${({ active, theme }) => active ? theme.red : theme.black};
    cursor: pointer;
    text-align: left;
    font-weight: ${({ theme }) => theme.font.demibold};
    background: transparent;
    border: 0;
    outline: none;
  }
`;

export default FAQ;