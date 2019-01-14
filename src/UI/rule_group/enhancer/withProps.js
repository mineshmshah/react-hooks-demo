import { withProps } from 'recompose';

export const hasConnector = rules => (
  rules.reduce(
    (acc, rule) => {
      if (acc) return acc;

      return rule.connector || acc;
    },
    ''
  )
);

export default withProps(
  ({ rules }) => ({
    connector: hasConnector(rules),
    groupError: !rules.every(r => !r.error)
  }),
);
