import React from 'react';
import RuleGroup from '@UI/rule_group';

const items = [
  {name: 'fake'},
  {name: 'fake'},
  {name: 'fake'}
];

const twoRules = [
  {
    name: 'just a name',
    placeholder: 'something',
    items,
    text: 'WHEN SOMETHING'
  },
  {
    name: 'just a name',
    placeholder: 'something',
    items,
    text: 'THEN HAPPEN THAT'
  }
];

const GroupWithTwoRules = props => (
  <RuleGroup
    {...props}
    rules={twoRules}
  />
);

const ManyRules = [
  {
    name: 'just a name',
    placeholder: 'something',
    text: 'WHEN SOMETHING'
  },
  {
    name: 'just a name',
    placeholder: 'something',
    text: 'THEN HAPPEN THAT'
  },
  {
    name: 'just a name',
    placeholder: 'something',
    text: 'WHEN SOMETHING'
  },
  {
    name: 'just a name',
    placeholder: 'something',
    text: 'THEN HAPPEN THAT'
  },
  {
    name: 'just a name',
    placeholder: 'something',
    text: 'WHEN SOMETHING'
  },
  {
    name: 'just a name',
    placeholder: 'something',
    text: 'THEN HAPPEN THAT'
  },
  {
    name: 'just a name',
    placeholder: 'something',
    text: 'WHEN SOMETHING'
  },
  {
    name: 'just a name',
    placeholder: 'something',
    text: 'THEN HAPPEN THAT'
  }
];

const GroupWithManyRules = () => (
  <div style={{ width: 1000 }}>
    <RuleGroup
      rules={ManyRules}
    />
  </div>
);

const ruleWithConector = [
  {
    connector: 'OR'
  },
  {
    name: 'just a name',
    placeholder: 'something',
    text: 'WHEN SOMETHING'
  },
  {
    name: 'just a name',
    placeholder: 'something',
    text: 'THEN HAPPEN THAT'
  }
];

const GroupWithConnector = () => (
  <RuleGroup
    rules={ruleWithConector}
  />
);

export {
  GroupWithTwoRules,
  GroupWithManyRules,
  GroupWithConnector
};
