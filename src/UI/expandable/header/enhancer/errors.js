import { compose, mapProps } from 'recompose';

export const error1 = props => {
  if (props.completed && props.open) {
    throw Error(`cannot be props.completed and props.open at the same time`);
  }
};

export default compose(
  mapProps(
    props => {
      error1(props);
      return props;
    }
  )
);
