import { compose, defaultProps, setPropTypes, setDisplayName } from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  onAdd: PropTypes.func
};

const initialProps = {
  onAdd: () => undefined
};

export default compose(
  setDisplayName('AddElement'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
