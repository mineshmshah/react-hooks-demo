import React from 'react';
import { storiesOf } from '@storybook/react';
import { TagContainerWithWrapper } from './component';

storiesOf('UI/tags-container', module)
  .add('a few mixed options', () => (
    <TagContainerWithWrapper
      tagsArray={
        [
          {
            type: 'connector',
            value: 'OR'
          },
          {
            type: 'text',
            value: 'when a tag'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'text',
            value: 'followed by another'
          },
          {
            type: 'labeltag',
            value: 'test1'
          }
        ]
      }
    />
  ))
  .add('alot of items', () => (
    <TagContainerWithWrapper
      tagsArray={
        [
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'text',
            value: 'followed by another'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'text',
            value: 'followed by another and another'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'text',
            value: 'followed by another and another one '
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'text',
            value: 'followed by another and another one again!!!'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'text',
            value: 'followed by another'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'connector',
            value: 'OR'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'text',
            value: 'followed by another'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'text',
            value: 'followed by another'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'connector',
            value: 'OR'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'labeltag',
            value: 'test1'
          },
          {
            type: 'connector',
            value: 'OR'
          },
          {
            type: 'text',
            value: 'followed by another'
          },
          {
            type: 'labeltag',
            value: 'test1'
          }
        ]
      }
    />
  ));
