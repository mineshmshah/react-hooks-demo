import React from 'react';
import { storiesOf } from '@storybook/react';
import Description from '@UI/typography/description';

storiesOf('UI/typography/description', module)
  .add('default', () => (
    <Description
      text='just a description'
    />
  ));
