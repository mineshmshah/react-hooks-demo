import React, {useContext} from 'react';
import { InnerDiv } from './styles';
import MyContext from './context';
import centreTheme from './centreTheme';

const Inner = (props) => {
  const MyContextHook = useContext(MyContext);
  const theme = useContext(centreTheme)
  return (
  <InnerDiv colour={theme.colour}>
    <h2>
      {MyContextHook.edit ? `'${MyContextHook.edit}' from MyContextHook`: ''}
    </h2>
    <div>
      {props.children ? '': <h1>My {theme.colour} colour comes from centreTheme!</h1>}
    </div>
    {props.children}
  </InnerDiv>
)};

export default Inner