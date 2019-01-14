import { withProps } from 'recompose';

export const searchedItems = ({items, value}) => (
  items.filter(
    i => {
      // escape special regex characters
      const valueToMatch = value && value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return !value || !!i.name.match(
        new RegExp(valueToMatch, 'ig')
      );
    }
  )
);

export default withProps(
  ({ items, newValue }) => ({
    searchedItems: searchedItems({
      items,
      value: newValue
    })
  })
);
