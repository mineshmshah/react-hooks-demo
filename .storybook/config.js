import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

// Automatically import all files ending in *.stories.js.
function loadStories() {
  require('../stories');
}

configure(loadStories, module);

