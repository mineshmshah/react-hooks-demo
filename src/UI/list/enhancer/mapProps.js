import { mapProps } from 'recompose';

export const checkIfLast = items => (
  items.map(
    (item, index) => (
      (items.length - 1 !== index)
        ? item : {...item, lastItem: true}
    )
  )
);

export default mapProps(
  props => ({
    ...props,
    items: checkIfLast(props.items)
  })
);
