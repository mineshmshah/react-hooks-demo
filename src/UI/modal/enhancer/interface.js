import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onBack: PropTypes.func,
  onCustom: PropTypes.func,
  onClose: PropTypes.func
};

const initialProps = {
  onBack: () => undefined,
  onCustom: () => undefined,
  onClose: () => undefined
};

export default compose(
  setDisplayName('Modal'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
