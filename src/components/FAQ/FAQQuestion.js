import React from 'react';
import styled from 'styled-components';

const FAQQuestion = ({ id, question, setActive, active }) => {
  return (
    <>
      <StyledQuestion active={active} className="question">
        <button
          className="question__button"
          aria-controls={`answer-${id}`}
          aria-expanded={active}
          onClick={() => (active ? setActive(null) : setActive(id))}
        >
          {question}
        </button>
      </StyledQuestion>
    </>
  );
};

const StyledQuestion = styled.li`
  margin: 0.5rem 0;
  button {
    line-height: 1.375;
    transition: 0.25s;
    color: ${({ active, theme }) => (active ? theme.red : theme.black)};
    cursor: pointer;
    text-align: left;
    font-weight: ${({ theme }) => theme.font.demibold};
    background: transparent;
    border: 0;
    outline: none;
  }
`;

export default FAQQuestion;