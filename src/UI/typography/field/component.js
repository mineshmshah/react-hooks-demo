import React from 'react';
import enhancer from './enhancer';
import { Component } from './styles';

export default enhancer(
  ({ text, marginLeft }) => (
    <Component
      {...{marginLeft}}
    >
      {text}
    </Component>
  )
);
