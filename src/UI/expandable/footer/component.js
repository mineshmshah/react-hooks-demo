import React from 'react';
import { Component, Button, RightButtonWrapper } from './styles';
import enhancer from './enhancer';

const ExpandableFooter = ({
  open,
  heightFooter,
  onCancel,
  onBack,
  onProceed,
  firstStep,
  lastStep,
  dataAutomation,
  customProceedText,
  proceedIsDisabled
}) => (
  <Component
    {...{open}}
    {...{heightFooter}}
  >
    <Button
      onClick={() => onCancel({ type: 'CANCEL_CLICK' })}
      data-automation={dataAutomation ? `recipes_expandable_cancel-button__${dataAutomation}` : ''}
    >
      {'Exit editor'}
    </Button>
    <RightButtonWrapper>
      <Button
        {...{firstStep}}
        onClick={() => onBack({ type: 'BACK_CLICK' })}
        data-automation={dataAutomation ? `recipes_expandable_back-button__${dataAutomation}` : ''}
      >
        {'Back'}
      </Button>

      <Button
        {...{proceedIsDisabled}}
        proceed
        data-automation={dataAutomation ? `recipes_expandable_proceed-button__${dataAutomation}` : ''}
        onClick={() => !proceedIsDisabled && onProceed(
          lastStep
            ? { type: 'ACTIVATE_CLICK' } : { type: 'CONTINUE_CLICK' }
        )}
      >
        { lastStep ? customProceedText : 'Continue' }
      </Button>
    </RightButtonWrapper>
  </Component>
);

export default enhancer(ExpandableFooter);
