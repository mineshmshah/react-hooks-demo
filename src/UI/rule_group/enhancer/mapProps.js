import { mapProps } from 'recompose';

export const removeConnector = items => (
  items.filter(
    item => !item.connector
  )
);

export default mapProps(
  props => ({
    ...props,
    rules: removeConnector(props.rules)
  })
);
