import {
  withState,
  withHandlers,
  compose
} from 'recompose';

export default compose(
  withState('newValue', 'setNewValue', ''),
  withHandlers({
    updateValue: ({setNewValue}) => value => (
      setNewValue(value)
    )
  })
);
