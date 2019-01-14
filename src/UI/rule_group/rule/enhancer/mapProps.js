import { mapProps } from 'recompose';
import runic from '@runic_variables';

export const visibleItems = ({
  items,
  query,
  value,
  blackListOptions,
  selectedItem,
  error
}) => (
  (
    (query && query.length) || (query && !query.length && value)
      ? query : items
  )
    .filter(
      i => selectedItem
        ? i.name !== selectedItem.name
        : i
    )
    .filter(
      i => (
        !blackListOptions[i.dbId]
        || !i.dbId
      )
    )
    // for actions
    .filter(
      i => (
        !blackListOptions[i.attribute]
      )
    )
    // for triggers
    .filter(
      i => (
        !blackListOptions[i.when]
      )
    )
);

export default mapProps(
  props => ({
    ...props,
    items: visibleItems({
      items: props.items,
      query: props.searchedItems,
      value: props.newValue || props.value,
      blackListOptions: props.blackListOptions,
      selectedItem: props.selectedItem
    }),
    value: props.newValue || props.value,
    error: props.error && props.errorField,
    color: props.error ? runic['runic-red'] : props.color
  })
);
