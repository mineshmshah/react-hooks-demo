import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';
import runic from '@runic_variables';

const propTypes = {
  items: PropTypes.array,
  selectedItems: PropTypes.array,
  valueGlobalTags: PropTypes.string,
  open: PropTypes.bool,
  setAutoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onUpdate: PropTypes.func,
  value: PropTypes.string,
  inputWidth: PropTypes.number,
  color: PropTypes.string
};

const initialProps = {
  itemsGlobalTags: [],
  selectedItemsGlobalTags: [],
  setAutoFocusGlobalTags: false,
  openGlobalTags: false,
  disabledGlobalTags: false,
  placeholderGlobalTags: 'Select Global Tags',
  onUpdateGlobalTags: () => undefined,
  valueGlobalTags: '',
  color: runic['runic-module-green-0']
};

export default compose(
  setDisplayName('GlobalTags'),
  defaultProps({ ...initialProps }),
  setPropTypes({ ...propTypes }),
);
