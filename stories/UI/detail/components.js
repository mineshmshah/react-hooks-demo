import React from 'react';
import Detail from '@UI/detail';

const itemsGlobalTags = [
  {value: 'just an item'},
  {value: 'just an item1'},
  {name: 'just an item2'}
];

const DetailWithWrapper = props => (
  <div
    style={{ width: 1000, height: 125 }}
  >
    <Detail
      {...props}
      itemsGlobalTags={itemsGlobalTags}
    />
  </div>
);
;

export {
  DetailWithWrapper
};
