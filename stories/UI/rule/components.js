import React from 'react';
import Rule from '@UI/rule_group/rule';

const items = [
  {name: 'just an item'},
  {name: 'just an item1'},
  {name: 'just an item2'}
];

const RuleWithWrapper = props => (
  <div>
    <Rule
      {...{items}}
      placeholder='just a placeholder'
      text='WHEN SOMETHING'
      {...props}
    />
  </div>
);

export {
  RuleWithWrapper
};
