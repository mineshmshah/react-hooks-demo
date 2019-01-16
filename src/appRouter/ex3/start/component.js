import React, {Component} from 'react';
import logo from '../../../logo.svg';
import {App, Image, Header, Link} from './styles'

class Ex3 extends Component {

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
        <Header>
          Ex3 useReducer hook (Start - Class Version)
          <Image src={logo} alt="logo" />
          <Link>
            Current Counter: {this.state.count}
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

export default Ex3;
