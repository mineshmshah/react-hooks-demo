import { compose } from 'recompose';

import applyInterface from './interface';
import mapProps from './mapProps';

export default compose(
  applyInterface,
  mapProps
);
