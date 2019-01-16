import styled from 'styled-components';


const App = styled.div`
  text-align: center;
  width: 100%;
  background-color:#31b3a4;

`;
const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Image = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    width: 10%;
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
    }
}
`;

const Link = styled.h2`
   color: #61dafb;
`;

export {
  App,
  Header,
  Image,
  Link
};
