import React from 'react';
import Modal from '@UI/modal';

const ModalWithWrapper = props => (
  <div
    style={
      {
        width: 480
      }
    }
  >
    <Modal
      {...props}
      title='My title'
      message='just a question?'
      buttonText='Click Me'
    />
  </div>
);

export {
  ModalWithWrapper
};
