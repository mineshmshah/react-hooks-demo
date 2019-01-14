import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExpandableWithWrapper } from './components';

storiesOf('UI/expandable', module)
  .add('default', () => (
    <ExpandableWithWrapper
      dataAutomation='expandable-name'
    />
  ))
  .add('default open', () => (
    <ExpandableWithWrapper
      open
      dataAutomation='expandable-name'
    />
  ))
  .add('open and is first step', () => (
    <ExpandableWithWrapper
      open
      firstStep
      dataAutomation='expandable-name'
    />
  ))
  .add('open and is last step', () => (
    <ExpandableWithWrapper
      open
      lastStep
      dataAutomation='expandable-name'
    />
  ))
  .add('when filled', () => (
    <ExpandableWithWrapper
      completed
      summaryText='summary text'
      dataAutomation='expandable-name'
    />
  ))
  .add('open and with error', () => (
    <ExpandableWithWrapper
      error
      open
      summaryText='summary text'
      dataAutomation='expandable-name'
    />
  ))
  .add('closed and with error', () => (
    <ExpandableWithWrapper
      error
      summaryText='summary text'
      dataAutomation='expandable-name'
    />
  ));

// CallBacks

storiesOf('UI/expandable/callbacks', module)
  .add('open with callback', () => (
    <ExpandableWithWrapper
      open
      onCancel={callback => console.log(callback)}
      onProceed={callback => console.log(callback)}
      onBack={callback => console.log(callback)}
      onExpandOrCollapse={callback => console.log(callback)}
      dataAutomation='expandable-name'
    />
  ))
  .add('open and is last step with callback', () => (
    <ExpandableWithWrapper
      open
      lastStep
      onCancel={callback => console.log(callback)}
      onProceed={callback => console.log(callback)}
      onBack={callback => console.log(callback)}
      onExpandOrCollapse={callback => console.log(callback)}
      dataAutomation='expandable-name'
    />
  ));

// errors

storiesOf('UI/expandable/errors', module)
  .add('firstStep && lastStep', () => (
    <ExpandableWithWrapper
      lastStep
      firstStep
    />
  ))
  .add('completed && open', () => (
    <ExpandableWithWrapper
      completed
      open
    />
  ));
