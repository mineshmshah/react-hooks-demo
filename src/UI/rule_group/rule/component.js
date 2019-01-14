import React from 'react';
import { ui } from 'runic-components';
import enhancer from './enhancer';
import { Component, Text, SingleSelectWrapper } from './styles';

const RunicSingleSelect = ui.Autocomplete.SingleSelect;

export default enhancer(
  ({
    text,
    selectedItem,
    items,
    setAutoFocus,
    disabled,
    placeholder,
    onUpdate,
    inputWidth,
    value,
    id,
    error,
    errorMessage,
    createNewEnabled,
    updateValue,
    color,
    type,
    ruleGroupIndex,
    ruleIndex
  }) => (
    <Component>
      <Text>
        {text ? text.toUpperCase() : text}
      </Text>
      <SingleSelectWrapper
        {...{inputWidth}}
        {...{error}}
      >
        <RunicSingleSelect
          {...{createNewEnabled}}
          {...{error}}
          {...{errorMessage}}
          {...{selectedItem}}
          {...{items}}
          {...{setAutoFocus}}
          {...{disabled}}
          {...{onUpdate}}
          {...{placeholder}}
          {...{value}}
          {...{color}}
          onUpdate={
            e => {
              if (e.type === 'SEARCH') {
                updateValue(e.value);
              };

              return onUpdate({
                ...e,
                payload: {
                  ...e.value,
                  value: e.value,
                  ruleId: id
                }
              });
            }
          }
          dataAutomation={`recipes_${type}_${ruleGroupIndex}_${ruleIndex}`}
        />
      </SingleSelectWrapper>
    </Component>
  )
);
