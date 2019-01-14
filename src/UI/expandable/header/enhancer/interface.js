import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  labelText: PropTypes.string.isRequired,
  stepText: PropTypes.string.isRequired,
  open: PropTypes.bool,
  heightHeader: PropTypes.number,
  completed: PropTypes.bool,
  onExpandOrCollapse: PropTypes.func,
  summaryText: PropTypes.string,
  dataAutomation: PropTypes.string.isRequired
};

const initialProps = {
  open: false,
  heightHeader: 48,
  completed: false,
  onExpandOrCollapse: () => undefined,
  summaryText: ''
};

export default compose(
  setDisplayName('Header'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
