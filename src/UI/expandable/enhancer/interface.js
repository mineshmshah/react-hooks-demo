import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  open: PropTypes.bool,
  component: PropTypes.func.isRequired,
  error: PropTypes.bool
};

const initialProps = {
  open: false,
  error: false
};

export default compose(
  setDisplayName('Expandable'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
