import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired
};

const initialProps = {
};

export default compose(
  setDisplayName('Detail'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
