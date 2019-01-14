import React from 'react';
import uuid from 'uuid/v4';
import { lowLevel } from 'runic-components';
import enhancer from './enhancer';
import { Component, ItemWrapper } from './styles';

const RunicItem = lowLevel.Item;

export default enhancer(
  ({ items, hasRightBorder, property }) => (
    <Component
      data-automation={`recipes__filter-list`}
    >
      {
        items.map(
          item => (
            <ItemWrapper
              key={uuid()}
              lastItem={item.lastItem}
              {...{hasRightBorder}}
            >
              <RunicItem
                text={item[property] || '-'}
                onSelectItem={item.onSelectItem}
                customIcon={item.primaryPhoto ? item.primaryPhoto.value : ''}
                dataAutomation={`recipes__filter-list__${item[property]}`}
              />
            </ItemWrapper>
          )
        )
      }
    </Component>
  )
);
