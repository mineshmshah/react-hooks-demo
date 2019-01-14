import React from 'react';
import Field from '@UI/typography/field';
import enhancer from './enhancer';
import Rule from './rule';

import {
  Component,
  FieldWrapper,
  RemoveButton,
  RemoveButtonText,
  RuleWrapper
} from './styles';

export default enhancer(
  ({
    rules,
    connector,
    remove,
    onRemove,
    dataAutomation,
    onUpdate,
    blackListOptions,
    errorField,
    createNewEnabled,
    type,
    ruleGroupIndex,
    groupError
  }) => (
    <Component {...groupError}>
      <RuleWrapper
        data-automation={dataAutomation ? `recipes_rule-group` : ''}
      >
        <FieldWrapper
          {...{connector}}
        >
          <Field
            text={connector}
          />
        </FieldWrapper>
        {
          rules.map(
            (props, index) => (
              props.id && (
                <Rule
                  {...{errorField}}
                  {...{blackListOptions}}
                  key={props.id}
                  {...props}
                  {...{onUpdate}}
                  {...{createNewEnabled}}
                  {...{type}}
                  {...{ruleGroupIndex}}
                  ruleIndex={index}
                />
              )
            )
          )
        }
      </RuleWrapper>
      <RemoveButton
        {...{remove}}
        data-automation={dataAutomation ? `recipes_rule-group_remove-button` : ''}
        onClick={
          () => onRemove({
            type: 'REMOVE_RULE_GROUP'
          })
        }
      >
        <RemoveButtonText>
          {'Remove'}
        </RemoveButtonText>
      </RemoveButton>
    </Component>
  )
);
