import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

const FAQAnswer = ({ id, active, children}) => {

  const trans = useTransition(active, null, {
    from: {
      maxHeight: '0px',
    },
    enter: {
      maxHeight: '1000px'
    },
    leave: {
      maxHeight: '0px'
    }
  })

  return trans.map(({ item, key, props }) => item && (
    <Answer key={key} className="answer" id={id} style={props}>
      {children}
    </Answer>
  ));
};

const Answer = styled(animated.p)`
  padding: 1rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.black};
  overflow: hidden;
`;

export default FAQAnswer;