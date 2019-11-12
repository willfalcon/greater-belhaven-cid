import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

const FAQAnswer = ({ id, active, children}) => {

  const trans = useTransition(active, null, {
    from: {
      maxHeight: "0px",
      paddingTop: "0rem",
      paddingBottom: "0rem"
    },
    enter: {
      maxHeight: "1000px",
      paddingTop: "2.6rem",
      paddingBottom: "2.6rem"
    },
    leave: {
      maxHeight: "0px",
      paddingTop: "0rem",
      paddingBottom: "0rem"
    }
  });

  return trans.map(({ item, key, props }) => item && (
    <Answer key={key} className="answer" id={id} style={props}>
      {children}
    </Answer>
  ));
};

const Answer = styled(animated.p)`
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  line-height: 1.85;
  color: ${({ theme }) => theme.black};
  overflow: hidden;
`;

export default FAQAnswer;