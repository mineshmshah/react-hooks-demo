import React from 'react';
import enhancer from './enhancer';
import { Component } from './styles';

export default enhancer(
  ({ text, onAdd }) => (
    <Component
      onClick={() => onAdd(
        {
          type: 'ADD_ELEMENT'
        }
      )}
      data-automation='recipes_add-trigger-button'
    >
      {text}
    </Component>
  )
);
