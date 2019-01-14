import styled from 'styled-components';

import runic from '@runic_variables';

const OpenComponent = `
  border-bottom: 1px solid ${runic['runic-dark-30']};
  background-color: ${runic['runic-dark-10']};
  box-shadow: none;
  border-radius: 0px;
`;

const CompletedComponent = `
  background-color: #f3f6fa; // [RUNIC-missing-color]
`;

const Component = styled.div`
  width: 100%;
  height: ${({heightHeader}) => `${heightHeader}px` || `100%`};
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;

  border-radius: ${runic['runic-border-radius']};
  box-shadow: ${runic['runic-shadow-md']};
  background-color: ${runic['runic-white']};

  display: flex;
  justify-content: space-between;

  flex-direction: row;
  align-items: center;

  ${({ open }) => open && OpenComponent}

  ${({ completed }) => completed && CompletedComponent}
`;

const LeftSideWrapper = styled.div`
  display: flex;
`;

const RightSideWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  font-family: ${runic['runic-font-family-sans-serif']};
  font-size: 14px;
  font-weight: ${runic['runic-font-weight-med']};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3a4e68; // [RUNIC-missing-color]
`;

const Step = styled.div`
  font-family: ${runic['runic-font-family-sans-serif']};
  font-size: 14px;
  font-weight: ${runic['runic-font-weight-med']};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${runic['runic-dark-70']};

  margin-left: 8px;
`;

const ExpandOrCollapseIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
${({ open }) => open && `transform: rotate(180deg);`};
`;

const CheckIconWrapper = styled.div`
  display: none;
  width: 16px;
  height: 16px;
  margin-right: 8px;

${({ completed }) => completed && `display: block;`}
`;

const Summary = styled.div`
  font-family: ${runic['runic-font-family-sans-serif']};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${runic['runic-dark-80']};
  word-break: break-word;
  margin-right: 6px;
  max-width: 770px;
  align-items: center;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  Component,
  LeftSideWrapper,
  RightSideWrapper,
  Label,
  Step,
  ExpandOrCollapseIconWrapper,
  CheckIconWrapper,
  Summary
};
