import styled from 'styled-components';

import runic from '@runic_variables';

const Component = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  &:nth-last-child(2) {
    padding-bottom: ${({ groupError }) => groupError ? '0px' : '12px'};
  }
`;

const RuleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: top;
`;

const FieldWrapper = styled.div`
  margin-right: 9px;
  padding-top: 14px;
${
  ({connector}) => !connector && 'display: none;'
}
`;

const RemoveButton = styled.div`
  font-family: ${runic['runic-font-family-sans-serif']};;
  font-size: ${runic['runic-font-size-sm']};
  font-weight: ${runic['runic-font-weight-med']};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${runic['runic-red']};
  margin-top: 16px;
  margin-right: 14px;
${
  ({remove}) => !remove && 'display: none;'
}
`;

const RemoveButtonText = styled.span`
    cursor: pointer;
`;

export {
  Component,
  FieldWrapper,
  RemoveButton,
  RuleWrapper,
  RemoveButtonText
};
