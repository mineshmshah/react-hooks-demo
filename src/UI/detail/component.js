import React from 'react';
import { Component, DetailInputContainer } from './styles';
import enhancer from './enhancer';

import GlobalTags from './global-tags';
import DetailName from './detail-name';
import Description from '../typography/description';

const Details = ({
  text,
  selectedItemsGlobalTags,
  valueGlobalTags,
  itemsGlobalTags,
  openGlobalTags,
  setAutoFocusGlobalTags,
  disabledGlobalTags,
  onUpdateGlobalTags,
  filledDetailName,
  errorField,
  errorMessageDetailName,
  disabledDetailName,
  colorDetailName,
  placeholderDetailName,
  valueDetailName,
  onUpdateDetailName
}) => (
  <Component>
    <Description
      text={text}
    />
    <DetailInputContainer>
      <DetailName
        {...{filledDetailName}}
        {...{errorField}}
        {...{errorMessageDetailName}}
        {...{disabledDetailName}}
        {...{colorDetailName}}
        {...{placeholderDetailName}}
        {...{valueDetailName}}
        {...{onUpdateDetailName}}
      />
      <GlobalTags
        {...{selectedItemsGlobalTags}}
        {...{itemsGlobalTags}}
        {...{openGlobalTags}}
        {...{setAutoFocusGlobalTags}}
        {...{disabledGlobalTags}}
        {...{onUpdateGlobalTags}}
        {...{valueGlobalTags}}
      />
    </DetailInputContainer>
  </Component>
);

export default enhancer(Details);
