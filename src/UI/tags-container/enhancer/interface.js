import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  tagsArray: PropTypes.arrayOf(PropTypes.object)
};

const initialProps = {
  tagsArray: []
};

export default compose(
  setDisplayName('TagContainer'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
