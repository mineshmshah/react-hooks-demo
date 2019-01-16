import styled from 'styled-components';

const Component = styled.div`
  z-index: 0;
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  

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


const Input = styled.input`
  width: 476px;
  height: 32px;
  border-radius: 4px;
  border-color: #a9b5c7;
`;

const Header = styled.h2`
   color: #61dafb;
   font-size: 40px;
   font-weight: bold;
`

export {
  Component,
  Input,
  Header
};
