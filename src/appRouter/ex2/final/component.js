import React, { useState } from 'react';
import logo from '../../../logo.svg';
import { App, Header, Image, Link} from './styles';

const Ex2 = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count -1 );
  return (
        <App>
          <Header>
            Ex 2 - Multiple useState Hooks (Final - Hooks version)
            <Image src={logo} alt="logo" />
            <Link>
              (Hooks) Current Counter: {count}
            </Link>
            <button onClick={increment}>
              Increment
            </button>
            <button onClick={decrement}>
              Decrement
            </button>
          </Header>
        </App>
      );
};

export default Ex2
