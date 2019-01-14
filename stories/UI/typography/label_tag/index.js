import React from 'react';
import { storiesOf } from '@storybook/react';
import LabelTag from '@UI/typography/label_tag';

storiesOf('UI/typography/label tag', module)
  .add('default', () => (
    <LabelTag
      text='just a tag'
    />
  ));
