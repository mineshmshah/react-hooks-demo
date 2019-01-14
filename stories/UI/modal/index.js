import React from 'react';
import { storiesOf } from '@storybook/react';
import { ModalWithWrapper } from './components';

storiesOf('UI/modal', module)
  .add('default', () => (
    <ModalWithWrapper
      dataAutomation='example-modal'
    />
  ))
  .add('with callback', () => (
    <ModalWithWrapper
      dataAutomation='example-modal'
      onBack={
        callback => console.log(callback)
      }
      onCustom={
        callback => console.log(callback)
      }
      onClose={
        callback => console.log(callback)
      }
    />
  ));
