import styled from 'styled-components';

import runic from '@runic_variables';

const Component = styled.div`
  height: 100%;

  display: flex;
  align-items: top;
  margin: 8px;
  margin-left: 0px;
`;

const Text = styled.div`
  font-family: ${runic['runic-font-family-sans-serif']};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${runic['runic-dark-90']};
  padding-top: 8px;
`;

const SingleSelectWrapper = styled.div`
  margin-left: 8px;
  width: ${({ inputWidth }) => inputWidth ? `${inputWidth}px` : '100%'};
  height: auto;

  input {
    padding-right: 24px;
  }

  input[placeholder] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:not(:hover):not(:focus-within) {
    input {
      border-radius: ${runic['runic-border-radius']};
      box-shadow: ${({error}) => error && `inset 0 0 0 2px ${runic['runic-red']}, 0 1px 4px -1px rgba(0, 0, 0, 0.3)`};
    }
  }

  svg {
    fill: ${({error}) => error && `${runic['runic-red']};`};
  }

  // override leaking global styles
  line-height: 1.15;
`;

export {
  Component,
  Text,
  SingleSelectWrapper
};
