import {
  compose,
  defaultProps,
  setPropTypes,
  setDisplayName
} from 'recompose';
import PropTypes from 'prop-types';
import runic from '@runic_variables';

const propTypes = {
  filled: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onUpdate: PropTypes.func
};

const initialProps = {
  filledDetailName: false,
  placeholderDetailName: 'Name',
  disabledDetailName: false,
  onUpdateDetailName: () => undefined,
  color: runic['runic-module-green-0']
};

export default compose(
  setDisplayName('DetailName'),
  defaultProps({...initialProps}),
  setPropTypes({...propTypes})
);
