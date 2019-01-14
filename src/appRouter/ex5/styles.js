import styled from 'styled-components';

const Component = styled.div`
  z-index: 0;
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  ${({disabled}) => disabled && `
    &:after {
      position: absolute;
      display: block;
      left: 8px;
      top: 8px;
      width: 12px;
      height: 12px;
      opacity: 0.9;
    };
  `}
`;

const defaultInput = color => `
  &:focus {
    box-shadow: inset 0 0 0 2px ${color}, 0 1px 4px -1px rgba(0, 0, 0, 0.3) !important;
  }

  &:hover {
    box-shadow: inset 0 0 0 1px ${color};
  }
`;

const errorInput = `
  box-shadow: inset 0 0 0 1px red;
`;

const disableInput = `
  background-color: gray;
  border: solid 1px black;
  padding-left: 25px;
  color: black;

  &::placeholder {
    color: black;
  }
`;

const filledInput = `
  color: green;
`;

const InputField = styled.input`
  outline: none;
  box-sizing: border-box;
  height:100%;
  width: 100%;
  font-size: 14px;
  border-radius: 2px;
  background-color: white;
  color: black;
  box-shadow: inset 0 0 0 1px black;
  border: none;

  &::placeholder {
    color: black;
  }

${
  ({error}) => error && errorInput
  }

${
  ({disabled}) => disabled && disableInput
  }

${
  ({disabled, error, color}) => !disabled && !error && defaultInput(color)
  }

${
  ({ value }) => value && filledInput
  }
`;

const ErrorMessage = styled.div`
  display: ${({error}) => !error && 'none'};
  color: red;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
`;

export {
  Component,
  InputField,
  ErrorMessage
};
