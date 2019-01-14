import styled from 'styled-components';

import runic from '@runic_variables';

const Component = styled.div`
  width: 100%;
  height: 100%;

  border-radius: ${runic['runic-border-radius']};
  background-color: ${runic['runic-dark-10']};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  font-family: ${runic['runic-font-family-sans-serif']};
  font-size: ${runic['runic-font-size-reg']};
  font-weight: ${runic['runic-font-weight-med']};
  font-style: normal;
  font-stretch: normal;
  line-height: ${runic['runic-heading-line-height']};
  letter-spacing: normal;
  color: ${runic['runic-dark-90']};
`;

const Message = styled.div`
  font-family: ${runic['runic-font-family-sans-serif']};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: ${runic['runic-heading-line-height']};;
  letter-spacing: normal;
  color: ${runic['runic-dark-90']};

  margin-top: 14px;
  margin-left: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-right: 16px;
  margin-bottom: 16px;
  margin-top: 13px;
`;

const buttonText = `
  font-family: ${runic['runic-font-family-sans-serif']};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: ${runic['runic-heading-line-height']};;
  letter-spacing: normal;
  font-size: 14px;
`;

const BackButton = styled.div`
  ${() => buttonText}

  width: fit-content;
  height: 20px;
  border-radius: ${runic['runic-border-radius']};
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.2); [RUNIC-shadow-missing]
  background-image: linear-gradient(to bottom, ${runic['runic-dark-0']}, ${runic['runic-dark-10']});
  border: solid 1px #c8d1de;
  cursor: pointer;
  padding: 5px 16px;
  box-sizing: content-box;
  color: ${runic['runic-dark-90']};
`;

const CustomButton = styled.div`
  ${() => buttonText};
  width: fit-content;
  height: 20px;
  border-radius: ${runic['runic-border-radius']};
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.3); // [RUNIC-shadow-missing]
  background-image: linear-gradient(to bottom, #429bff, #3f94f3); // [RUNIC-shadow-missing]
  border: solid 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 5px 16px;
  color: ${runic['runic-dark-0']};
  box-sizing: content-box;
  margin-left: 8px;
`;

const IconWrapper = styled.div`
  margin-right: 16px;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const FirstRowWrapper = styled.div`
  margin-left: 16px;
  padding-top: 16px;

  display: flex;
  justify-content: space-between;
`;

export {
  Component,
  Title,
  Message,
  BackButton,
  CustomButton,
  ButtonWrapper,
  IconWrapper,
  FirstRowWrapper,
  Icon
};
