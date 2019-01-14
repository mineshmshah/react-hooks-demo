import React from 'react';
import Expandable from '@UI/expandable';

const MyComponent = () => (
  <div style={{ height: 100, display: 'flex', alignItems: 'center' }}>
    {'my component goes here'}
  </div>
);

const ExpandableWithWrapper = props => (
  <div
    style={{ width: 1000 }}
  >
    <Expandable
      {...props}
      labelText='Label'
      stepText='Step 1 of 5'
      component={MyComponent}
    />
  </div>
);

export {
  ExpandableWithWrapper
};
