import React from 'react';
import { storiesOf } from '@storybook/react';
import { RuleWithWrapper } from './components';

storiesOf('UI/rule/closed', module)
  .add('default', () => (
    <RuleWithWrapper/>
  ))
  .add('with selected item', () => (
    <RuleWithWrapper
      placeholder=''
      selectedItem={{ name: 'selected item' }}
    />
  ));

storiesOf('UI/rule/open', module)
  .add('default', () => (
    <RuleWithWrapper
      open
    />
  ))
  .add('with selected item', () => (
    <RuleWithWrapper
      selectedItem={{ name: 'selected item' }}
      open
    />
  ));
