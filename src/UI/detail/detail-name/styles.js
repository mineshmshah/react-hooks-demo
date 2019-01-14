import styled from 'styled-components';
import runic from '@runic_variables';

const Component = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 8px;
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

const TextInputWrapper = styled.div`
  width: ${({inputWidthDetailName}) => inputWidthDetailName ? `${inputWidthDetailName}px` : '100%'};
  label {
    font-weight: ${runic['runic-font-weight-med']}
  }
  input {
    height:32px;
    box-shadow: ${({error}) => error && `inset 0 0 0 2px ${runic['runic-red']}`};
  }
`;

export {
  Component,
  Label,
  TextInputWrapper
};
