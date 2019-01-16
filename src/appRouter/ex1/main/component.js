import React, { Component, useState } from 'react';
import logo from '../../../logo.svg';
import { App, Header, Image, Link } from './styles'

class Ex1 extends Component {

  constructor(){
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment(){
    this.setState(({count}) => ({count: count + 1}));
  }

  render() {
    return (
      <App>
        <Header>
          <Image src={logo}  alt="logo" />
          <Link>
            Current Counter: {this.state.count}
          </Link>
          <button onClick={this.increment}>
            Increment
          </button>
        </Header>
      </App>
    );
  }
}

export default Ex1;
