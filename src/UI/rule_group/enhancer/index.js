import { compose } from 'recompose';

import applyInterface from './interface';
import withProps from './withProps';
import mapProps from './mapProps';

export default compose(
  applyInterface,
  withProps,
  mapProps
);
