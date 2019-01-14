import React from 'react';
import { storiesOf } from '@storybook/react';
import AddElement from '@UI/add_element';

storiesOf('UI/add element', module)
  .add('default', () => (
    <AddElement
      text='+ Add Trigger'
    />
  ))
  .add('with callback', () => (
    <AddElement
      text='+ Add Trigger'
      onAdd={ callback => console.log(callback)}
    />
  ));
