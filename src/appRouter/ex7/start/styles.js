import styled from 'styled-components';

const InnerDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  padding: 5%;
  background: ${({colour}) => colour ? colour : "green"};
`;

const Header = styled.h2`
   color: #61dafb;
   font-size: 40px;
   font-weight: bold;
`


export {
  InnerDiv,
  Header
};
