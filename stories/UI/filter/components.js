import React from 'react';
import Filter from '@UI/list';

import picture from './assets/picture.png';

const items = [
  {text: 'itemA', customIcon: picture},
  {text: 'itemA'},
  {text: 'itemB'},
  {text: 'itemB'},
  {text: 'itemC'},
  {text: 'itemC'},
  {text: 'itemD'},
  {text: 'itemD'},
  {text: 'itemE'},
  {text: 'itemE'},
  {text: 'itemF'},
  {text: 'itemF'},
  {text: 'itemG'},
  {text: 'itemG'},
  {text: 'itemH'},
  {text: 'itemH'},
  {text: 'itemI'}
];

const ListWithWrapper = props => (
  <div
    style={{
      width: 680,
      height: 363
    }}
  >
    <Filter
      {...props}
      {...{items}}
    />
  </div>
);

export {
  ListWithWrapper
};
