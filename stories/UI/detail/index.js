import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';

import { DetailWithWrapper } from './components';

storiesOf('UI/detail', module)
  .add('default', () => (
    <DetailWithWrapper text="Detail description"/>
  ))
  .add('single global tag added', () => (
    <DetailWithWrapper
      text="Detail description"
      selectedItemsGlobalTags={[
        {name: 'just an item1'}]
      }
    />
  ))
  .add('multiple global tags added', () => (
    <DetailWithWrapper
      text="Detail description"
      selectedItemsGlobalTags={[
        {name: 'just an item1'},
        {name: 'just an item2'}]
      }
    />
  ))
  .add('detail name filled in', () => (
    <DetailWithWrapper
      text="Detail description"
      valueDetailName="Detail Name Example"
    />
  ));

storiesOf('UI/detail/callbacks', module)
  .add('detail name with callback', () => {
    const store = new Store({
      valueDetailName: ''
    });
    return (
      <State {...{store}}>
        <DetailWithWrapper
          text="Detail description"
          onUpdateDetailName={({value}) => {
            console.log({value});
            store.set({valueDetailName: value});
            console.log(store.get('valueDetailName'));
          }}
        />
      </State>
    );
  })
  .add('globalTag with callback', () => {
    const store = new Store({
      selectedItemsGlobalTags: [],
      valueGlobalTags: ''
    });

    const itemsGlobalTags = [
      {name: 'just an item'},
      {name: 'just an item1'},
      {name: 'just an item2'}
    ];

    const onUpdate = ({type, value}) => ({
      SEARCH: str => store.set({valueGlobalTags: str, itemsGlobalTags: itemsGlobalTags.filter(i => !str || i.name.toLowerCase().includes(str.toLowerCase()))}),
      SELECT: item => store.set({selectedItemsGlobalTags: [...store.get('selectedItemsGlobalTags'), item], value: item.name}),
      REMOVE: item => store.set({selectedItemsGlobalTags: store.get('selectedItemsGlobalTags').filter(i => i.name !== item.name)}),
      FOCUS: () => null,
      SCROLLED_TO_TOP: () => null,
      SCROLLED_TO_BOTTOM: () => null,
      CREATE_NEW_CLICK: () => console.log('Clicked Create New')
    })[type](value);
    return (
      <State store={store}>
        <DetailWithWrapper
          text="Detail description"
          onUpdateGlobalTags={onUpdate}
        />
      </State>
    );
  });
