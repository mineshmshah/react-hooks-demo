import styled from 'styled-components';

const Component = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  margin: 0 8px 8px 0;
  div {
    margin-top: 2px
  }
`;

const TagContainer = styled.div`
  margin-right: 8px
`;

export {
  Component,
  TextContainer,
  TagContainer
};
