import styled from 'styled-components';

import runic from '@runic_variables';

const errorStyles = `
  border: 2px solid ${runic['runic-red']};
`;

const Component = styled.div`
  box-shadow: ${runic['runic-shadow-md']};
  border-radius: ${runic['runic-border-radius']};

  margin-bottom: 16px;

${
  ({ error }) => error && errorStyles
}
`;

export {
  Component
};
