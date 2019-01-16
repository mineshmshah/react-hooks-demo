import styled from 'styled-components';

const InnerDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  padding: 5%;
  background: ${({colour}) => colour ? colour : "green"};
`;


export {
  InnerDiv
};
