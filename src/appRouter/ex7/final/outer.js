import React, {useContext} from 'react';
import { InnerDiv, Header } from './styles';
import MyContext from './context';

const Outer = (props) => {
  const MyContextHook = useContext(MyContext);
  return (
  <InnerDiv colour={props.colour}>
    <h2>
      {props.edit ? `'${props.edit}' from props`: ''}
      {MyContextHook.edit ? `'${MyContextHook.edit}' from MyContextHook`: ''}
    </h2>
    <div>
      {props.children ? '': <h1>Endgame</h1>}
    </div>
    {props.children}
  </InnerDiv>
)};
export default Outer