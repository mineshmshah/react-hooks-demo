import { compose, defaultProps, setPropTypes, setDisplayName } from 'recompose';
import PropTypes from 'prop-types';

const propTypes = {
  rules: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.bool,
  onRemove: PropTypes.func,
  onSelectItem: PropTypes.func,
  blackListOptions: PropTypes.object
};

const initialProps = {
  remove: false,
  onRemove: () => undefined,
  blackListOptions: {},
  errorField: false
};

export default compose(
  setDisplayName('RuleGroup'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
