import { compose, mapProps } from 'recompose';

export const error1 = props => {
  if (props.firstStep && props.lastStep) {
    throw Error(`cannot be props.firstStep and props.lastStep at the same time`);
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
