import { compose } from 'recompose';

import applyInterface from './interface';
import errors from './errors';

export default compose(
  applyInterface,
  errors
);
