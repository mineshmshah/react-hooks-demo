import React, { Component, useState } from 'react';
import logo from '../../../logo.svg';
import { App, Header, Image, Link } from './styles'


const Ex1 = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
      <App>
        <Header>
          <Image src={logo} alt="logo" />
          <Link>
            (Hooks) Current Counter: {count}
          </Link>
          <button onClick={increment}>
            Increment
          </button>
        </Header>
      </App>
    );
}

export default Ex1
