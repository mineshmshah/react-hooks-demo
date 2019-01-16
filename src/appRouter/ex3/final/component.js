import React, {useReducer,} from 'react';
import logo from '../../../logo.svg';
import {App, Image, Header, Link} from './styles'

const counterReducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
}
function Ex3({initialCount}) {
  const [state, dispatch] = useReducer(counterReducer, {count: initialCount||0 });
  return (
    <App>
      <Header>
        Ex3 useReducer hook (Final - Hook Version)
        <Image src={logo} alt="logo" />
        <Link >
          (Hooks) Current Counter: {state.count}
        </Link>
        <button onClick={() => dispatch({type:'increment'})}>
          Increment
        </button>
        <button onClick={() => dispatch({type:'increment'})}>
          Decrement
        </button>
      </Header>
    </App>
  );
}

export default Ex3

