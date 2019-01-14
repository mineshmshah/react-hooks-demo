import { compose } from 'recompose';

import applyInterface from './interface';
import mapProps from './mapProps';
import withState from './withState';
import withProps from './withProps';

export default compose(
  applyInterface,
  withState,
  withProps,
  mapProps
);
