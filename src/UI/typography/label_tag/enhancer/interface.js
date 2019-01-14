import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  marginLeft: PropTypes.number,
  height: PropTypes.number
};

const initialProps = {
  marginLeft: 0,
  height: 24
};

export default compose(
  setDisplayName('LabelTag'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
