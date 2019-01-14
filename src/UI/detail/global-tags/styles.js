import styled from 'styled-components';

import runic from '@runic_variables';

const Component = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 8px;
`;

const Label = styled.label`
  font-family: ${runic['runic-font-family-sans-serif']};
  font-size: 14px;
  font-weight: ${runic['runic-font-weight-med']};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${runic['runic-dark-90']};
  margin-bottom: 8px;
  text-transform: none;
`;

const MultiSelectWrapper = styled.div`
  width: ${({ inputWidthGlobalTags }) => inputWidthGlobalTags ? `${inputWidthGlobalTags}px` : '100%'};
  height: 32px;
  input {
    height: 32px;
  }
`;

export {
  Component,
  Label,
  MultiSelectWrapper
};
