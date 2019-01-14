import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  open: PropTypes.bool,
  heightFooter: PropTypes.number,
  onCancel: PropTypes.func,
  onBack: PropTypes.func,
  onProceed: PropTypes.func,
  firstStep: PropTypes.bool,
  lastStep: PropTypes.bool,
  dataAutomation: PropTypes.string.isRequired,
  proceedIsDisabled: PropTypes.bool
};

const initialProps = {
  open: false,
  heightFooter: 56,
  onCancel: () => undefined,
  onBack: () => undefined,
  onProceed: () => undefined,
  firstStep: false,
  lastStep: false,
  proceedIsDisabled: false
};

export default compose(
  setDisplayName('Footer'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
