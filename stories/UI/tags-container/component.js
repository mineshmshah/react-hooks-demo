import React from 'react';
import TagsContainer from '@UI/tags-container';

const TagContainerWithWrapper = props => (
  <div
    style={{width: 600, height: 'auto', backgroundColor: 'grainsboro'}}
  >
    <TagsContainer
      {...props}
    />
  </div>
);
;

export {
  TagContainerWithWrapper
};
