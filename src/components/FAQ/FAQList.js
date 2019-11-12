import React from 'react';
import styled from "styled-components";

import { backgroundLogo } from './FAQ';
import { media } from "../theme";
import FAQAnswer from "./FAQAnswer";
import FAQQuestion from "./FAQQuestion";
import GreenLogo from "../../images/greater-belhaven-logo-green.svg";

const FAQList = ({ faqs, setActive, active, breakpoint }) => {
  return (
    <StyledFAQs className="question-list" bg={GreenLogo}>
      {faqs.map(faq => (
        <React.Fragment key={faq.id}>
          <FAQQuestion
            {...faq}
            setActive={setActive}
            active={active === faq.id}
          />
          {breakpoint === "small" && (
            <FAQAnswer id={`answer-${faq.id}`} active={active === faq.id}>
              {faq.answer}
            </FAQAnswer>
          )}
        </React.Fragment>
      ))}
    </StyledFAQs>
  );
};

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

export default FAQList;