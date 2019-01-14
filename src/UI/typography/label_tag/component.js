import React from 'react';
import { lowLevel } from 'runic-components';
import enhancer from './enhancer';
import { Component } from './styles';

const LabelTag = lowLevel.LabelTag;

export default enhancer(
  ({ text, marginLeft, height, color, dataAutomation }) => (
    <Component
      {...{marginLeft}}
      {...{height}}
    >
      <LabelTag
        {...{text}}
        color={color}
        {...{dataAutomation}}
      />
    </Component>
  )
);
