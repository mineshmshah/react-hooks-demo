import styled from 'styled-components';

import runic from '@runic_variables';

const OpenComponent = `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Component = styled.div`
  width: 100%;
  height: ${({heightFooter}) => (heightFooter && `${heightFooter}px`) || `100%`};
  padding-left: 16px;
  padding-right: 16px;

  border-bottom-left-radius: ${runic['runic-border-radius']};
  border-bottom-right-radius: ${runic['runic-border-radius']};
  border-top: 1px solid ${runic['runic-dark-30']};

  background-color: ${runic['runic-dark-10']};

  display: none;

${({open}) => open && OpenComponent}
`;

const ButtonText = `
  font-family: ${runic['runic-font-family-sans-serif']};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${runic['runic-dark-90']};
  
  padding: 7px 16px;
`;

const isFirstStep = `
  display: none;
`;

const ProceedButton = `
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.3); // [RUNIC-shadow-missing]
  background-image: linear-gradient(to bottom, #429bff, #3f94f3);
  border: solid 1px rgba(0, 0, 0, 0.1);

  color: ${runic['runic-white']};
  
  margin-left: 8px;

  &:hover {
    background-image: linear-gradient(to bottom, #5ea9ff, #5eaaff); // missing [runic-color-code]
  }
`;

const proceedIsDisabledStyle = `
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.3); // [RUNIC-shadow-missing]
  background-color: linear-gradient(to bottom, ${runic['runic-dark-50']}, ${runic['runic-dark-50']});
  :hover {
    background-image: linear-gradient(to bottom, ${runic['runic-dark-50']}, ${runic['runic-dark-50']});
  }
  border: solid 1px rgba(0, 0, 0, 0.1);

  color: ${runic['runic-white']};

  cursor: not-allowed;
`;

const Button = styled.div`
  width: fit-content;
  height: fit-content;

  border-radius: ${runic['runic-border-radius']};
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to bottom, ${runic['runic-white']}, ${runic['runic-dark-10']});
  border: solid 1px ${runic['runic-dark-40']};
  cursor: pointer;
 
  &:hover {
    background-color: ${runic['runic-white']};
  }

${() => ButtonText}

${({ firstStep }) => firstStep && isFirstStep}

${({ proceed }) => proceed && ProceedButton}

${
  ({proceedIsDisabled}) => proceedIsDisabled && proceedIsDisabledStyle
};
`;

const RightButtonWrapper = styled.div`
  display: flex;
`;

export {
  Component,
  Button,
  RightButtonWrapper
};
