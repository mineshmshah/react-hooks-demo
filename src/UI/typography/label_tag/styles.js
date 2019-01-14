import styled from 'styled-components';

const Component = styled.div`
margin-left:${
  ({marginLeft}) => `${marginLeft}px;`
};

height: ${
  ({height}) => `${height}px;`
}
`;

export {
  Component
};
