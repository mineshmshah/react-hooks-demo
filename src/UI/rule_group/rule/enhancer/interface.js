import { compose, defaultProps, setPropTypes, setDisplayName } from 'recompose';
import PropTypes from 'prop-types';
import runic from '@runic_variables';

const propTypes = {
  items: PropTypes.array,
  selectedItem: PropTypes.object,
  text: PropTypes.string,
  connector: PropTypes.string,
  open: PropTypes.bool,
  setAutoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onUpdate: PropTypes.func,
  value: PropTypes.string,
  inputWidth: PropTypes.number,
  onSelectItem: PropTypes.func,
  id: PropTypes.string,
  onItemRemove: PropTypes.func,
  blackListOptions: PropTypes.object,
  createNewEnabled: PropTypes.bool,
  color: PropTypes.string,
  errorField: PropTypes.bool
};

const initialProps = {
  selectedItem: undefined,
  text: '',
  setAutoFocus: false,
  open: false,
  disabled: false,
  placeholder: '',
  value: '',
  inputWidth: 160,
  connector: '',
  blackListOptions: {},
  onSelectItem: () => undefined,
  onItemRemove: () => undefined,
  createNewEnabled: false,
  color: runic['runic-module-green-0'],
  errorField: false
};

export default compose(
  setDisplayName('Rule'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
