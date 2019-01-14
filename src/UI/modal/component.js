import React from 'react';
import enhancer from './enhancer';
import {
  Component,
  Title,
  Message,
  BackButton,
  CustomButton,
  ButtonWrapper,
  IconWrapper,
  FirstRowWrapper,
  Icon
} from './styles';

import closeIcon from './assets/close.svg';

export default enhancer(
  ({ title, message, buttonText, onBack, onCustom, onClose }) => (
    <Component>
      <FirstRowWrapper>
        <Title>
          {title}
        </Title>
        <IconWrapper
          onClick={() => onClose(
            {
              type: 'CLOSE_BUTTON'
            }
          )}
        >
          <Icon
            data-automation='recipes_modal_close-button'
          >
            <img src={closeIcon} alt='close-icon' />
          </Icon>
        </IconWrapper>
      </FirstRowWrapper>
      <Message>
        {message}
      </Message>
      <ButtonWrapper>
        <BackButton
          data-automation='recipes_modal_back-button'
          onClick={
            () => onBack(
              {
                type: 'BACK_BUTTON'
              }
            )
          }
        >
          {'Cancel'}
        </BackButton>
        <CustomButton
          data-automation='recipes_modal_custom-button'
          onClick={
            () => onCustom(
              {
                type: 'CUSTOM_BUTTON'
              }
            )
          }
        >
          {buttonText}
        </CustomButton>
      </ButtonWrapper>
    </Component>
  )
);
