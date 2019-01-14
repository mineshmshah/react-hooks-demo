import React from 'react';
import { storiesOf } from '@storybook/react';
import { ListWithWrapper } from './components';

storiesOf('UI/list', module)
  .add('default', () => (
    <ListWithWrapper/>
  ));
