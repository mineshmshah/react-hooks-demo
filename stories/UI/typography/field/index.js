import React from 'react';
import { storiesOf } from '@storybook/react';
import Field from '@UI/typography/field';

storiesOf('UI/typography/field', module)
  .add('default', () => (
    <Field
      text='just a title'
      height={24}
    />
  ));
