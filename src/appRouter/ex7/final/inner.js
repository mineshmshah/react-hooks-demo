import React, {useContext} from 'react';
import { InnerDiv, Header } from './styles';
import themeContext from './innerTheme';

const Inner = (props) => {
  const theme = useContext(themeContext)
  return (
  <InnerDiv colour={theme.colour}>
    <h2>
      {`My colour '${theme.colour}' from innerTheme`}
    </h2>
    {props.children}
  </InnerDiv>
)};

export default Inner