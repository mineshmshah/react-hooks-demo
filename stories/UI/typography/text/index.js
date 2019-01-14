import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '@UI/typography/text';

storiesOf('UI/typography/text', module)
  .add('default', () => (
    <Text
      text='just a text'
    />
  ));
