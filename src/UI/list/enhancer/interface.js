import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.array.isRequired,
  hasRightBorder: PropTypes.bool,
  property: PropTypes.string
};

const initialProps = {
  hasRightBorder: false,
  property: 'text'
};

export default compose(
  setDisplayName('List'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
