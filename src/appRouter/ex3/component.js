import React, {Component, useReducer, useState} from 'react';
import logo from '../../logo.svg';
import styles from '../../App.module.scss';

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
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h2 className={styles.link}>
          (Hooks) Current Counter: {state.count}
        </h2>
        <button onClick={() => dispatch({type:'increment'})}>
          Increment
        </button>
        <button onClick={() => dispatch({type:'increment'})}>
          Decrement
        </button>
      </header>
    </div>

  );
}

export default Ex3

// class Component extends Component {
//
//   constructor(){
//     super();
//     this.state = {
//       count: 0
//     };
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//   }
//
//   increment(){
//     this.setState(({count}) => ({count: count + 1}));
//   }
//
//   decrement(){
//     this.setState(({count}) => ({count: count -1 }))
//   }
//
//   render() {
//     return (
//       <div className={styles.Component}>
//         <header className={styles.header}>
//           <img src={logo} className={styles.logo} alt="logo" />
//           <h2 className={styles.link}>
//             Current Counter: {this.state.count}
//           </h2>
//           <button onClick={this.increment}>
//             Increment
//           </button>
//           <button onClick={this.decrement}>
//             Decrement
//           </button>
//         </header>
//       </div>
//
//     );
//   }
// }
//
// export default Component;
