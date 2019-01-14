import React from 'react';
import { ui } from 'runic-components';
import enhancer from './enhancer';
import { Component, Label, MultiSelectWrapper } from './styles';

const RunicMultiSelect = ui.Autocomplete.MultiSelect;

export default enhancer(
  ({
    selectedItemsGlobalTags,
    itemsGlobalTags,
    openGlobalTags,
    setAutoFocusGlobalTags,
    disabledGlobalTags,
    onUpdateGlobalTags,
    inputWidthGlobalTags,
    placeHolderGlobalTags,
    valueGlobalTags,
    color
  }) => (
    <Component>
      <Label>
          Global tags
      </Label>
      <MultiSelectWrapper
        {...{inputWidthGlobalTags}}
      >
        <RunicMultiSelect
          selectedItems={selectedItemsGlobalTags}
          placeholder={placeHolderGlobalTags}
          items={itemsGlobalTags}
          open={openGlobalTags}
          setAutoFocus={setAutoFocusGlobalTags}
          disabled={disabledGlobalTags}
          onUpdate={onUpdateGlobalTags}
          value={valueGlobalTags}
          dataAutomation='recipes_details_global-tags'
          createNewEnabled={false}
          {...{color}}
        />
      </MultiSelectWrapper>
    </Component>
  )
);
