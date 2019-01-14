import styled from 'styled-components';

import runic from '@runic_variables';

const Component = styled.div`
  font-family: ${runic['runic-font-family-sans-serif']};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: ${runic['runic-base-line-height']};
  letter-spacing: normal;
  color: ${runic['runic-dark-50']};
  white-space: nowrap;
${
  ({ marginLeft }) => marginLeft && `margin-left:${marginLeft}px;`
}
`;

export {
  Component
};
