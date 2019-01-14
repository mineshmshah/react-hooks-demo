import React from 'react';
import { lowLevel } from 'runic-components';
import enhancer from './enhancer';
import { Component, Label, TextInputWrapper } from './styles';

const RunicTextInput = lowLevel.TextInput;

const DetailsName = ({
  inputWidthDetailName,
  filledDetailName,
  errorField,
  errorMessageDetailName,
  disabledDetailName,
  colorDetailName,
  placeholderDetailName,
  valueDetailName,
  onUpdateDetailName,
  color
}) =>
  <Component>
    <Label>
        Name *
    </Label>
    <TextInputWrapper
      {...{inputWidthDetailName}}
      error={errorMessageDetailName}
    >
      <RunicTextInput
        filled={filledDetailName}
        error={errorField}
        errorMessage={errorField ? errorMessageDetailName : ''}
        disabled={disabledDetailName}
        color={colorDetailName}
        placeholder={placeholderDetailName}
        value={valueDetailName}
        onUpdate={onUpdateDetailName}
        dataAutomation='recipes_details_name'
        {...{color}}
      />
    </TextInputWrapper>
  </Component>;

export default enhancer(DetailsName);
