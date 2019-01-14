import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  GroupWithTwoRules,
  GroupWithManyRules,
  GroupWithConnector
} from './components';

storiesOf('UI/rule group', module)
  .add('two rules', () => (
    <GroupWithTwoRules/>
  ))
  .add('two rules with remove and calback', () => (
    <GroupWithTwoRules
      remove
      onRemove={ callback => console.log(callback)}
      onUpdate={ callback => console.log(callback)}
    />
  ))
  .add('many rules', () => (
    <GroupWithManyRules/>
  ))
  .add('with connector', () => (
    <GroupWithConnector/>
  ));
