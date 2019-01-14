import React from 'react';
import uuid from 'uuid/v4';
import runic from '@runic_variables';
import LabelTag from '@UI/typography/label_tag';
import Text from '@UI/typography/text';
import Description from '@UI/typography/description';
import enhancer from './enhancer';

import { Component, TextContainer, TagContainer } from './styles';

const createBlock = tagsArray => tagsArray.map(item => {
  const blockTags = {
    'labeltag': <TagContainer key={uuid()}><LabelTag
      text={item.value}
      color={runic['runic-dark-50']}
      dataAutomation={item.value}
    /></TagContainer>,
    'text': <TextContainer key={uuid()}><Text text={item.value}/></TextContainer>,
    'connector': <TextContainer key={uuid()}><Description text={item.value}/></TextContainer>
  };
  return blockTags[item.type];
}
);

export default enhancer(({tagsArray}) => <Component>{createBlock(tagsArray)}
</Component>);
