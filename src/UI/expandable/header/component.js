import React from 'react';
import {
  Component,
  Label,
  Step,
  ExpandOrCollapseIconWrapper,
  LeftSideWrapper,
  RightSideWrapper,
  Summary,
  CheckIconWrapper
} from './styles';

import enhancer from './enhancer';

// SVG
import expandIcon from './assets/expand-icon.svg';
import checkIcon from './assets/check-icon.svg';

export default enhancer(
  ({
    labelText,
    stepText,
    open,
    heightHeader,
    completed,
    onExpandOrCollapse,
    summaryText,
    dataAutomation
  }) => (
    <Component
      {...{open}}
      {...{heightHeader}}
      {...{completed}}
      onClick={() => onExpandOrCollapse(
        { type: 'EXPAND_OR_COlLAPSE' }
      )}
    >
      <LeftSideWrapper>
        <CheckIconWrapper
          {...{completed}}
        >
          <img src={checkIcon} alt='check-icon'/>
        </CheckIconWrapper>
        <Label>
          {labelText}
        </Label>
        <Step>
          {stepText}
        </Step>
      </LeftSideWrapper>
      <RightSideWrapper>
        <Summary title={summaryText}>
          {summaryText}
        </Summary>
        <ExpandOrCollapseIconWrapper
          {...{open}}
          data-automation={
            dataAutomation
              ? `recipes_expandable_expand_collapse-button__${dataAutomation}`
              : ''
          }
        >
          <img src={expandIcon} alt='expand-icon'/>
        </ExpandOrCollapseIconWrapper>
      </RightSideWrapper>
    </Component>
  )
);
