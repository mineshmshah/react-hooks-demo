import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  marginLeft: PropTypes.number
};

const initialProps = {
  marginLeft: 0
};

export default compose(
  setDisplayName('Field'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
