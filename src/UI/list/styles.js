import styled from 'styled-components';

import runic from '@runic_variables';

const Component = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${runic['runic-dark-20']};

  &:hover {
    div:hover {
      background-color: inherit;
      cursor: auto;
    }
  }

${
  ({ lastItem }) => lastItem && `border-bottom: 0px;`
}

${
  ({ hasRightBorder }) => (
    hasRightBorder && `border-right: 1px solid ${runic['runic-dark-20']};`
  )
}
`;

export {
  Component,
  ItemWrapper
};
