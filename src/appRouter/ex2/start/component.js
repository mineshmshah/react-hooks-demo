import React, { Component } from 'react';
import logo from '../../../logo.svg';
import { App, Header, Image, Link} from './styles';

class Ex2 extends Component {

  constructor(){
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState(({count}) => ({count: count + 1}));
  }

  decrement(){
    this.setState(({count}) => ({count: count -1 }))
  }

  render() {
    return (
      <App>
        <Header >
          Ex 2 - Multiple useState Hooks (Start -Class version)
          <Image src={logo} alt="logo" />
          <Link>
            (Class) Current Counter: {this.state.count}
          </Link>
          <button onClick={this.increment}>
            Increment
          </button>
          <button onClick={this.decrement}>
            Decrement
          </button>
        </Header>
      </App>
    );
  }
}

export default Ex2;
