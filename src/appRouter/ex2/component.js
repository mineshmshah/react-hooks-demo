import React, { Component, useState } from 'react';
import logo from '../../logo.svg';
import styles from '../../App.module.scss';

const Ex2 = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count -1 );
  return (
        <div className={styles.App}>
          <header className={styles.header}>
            <img src={logo} className={styles.logo} alt="logo" />
            <h2 className={styles.link}>
              (Hooks) Current Counter: {count}
            </h2>
            <button onClick={increment}>
              Increment
            </button>
            <button onClick={decrement}>
              Decrement
            </button>
          </header>
        </div>
      );
}

export default Ex2

// class App extends Component {
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
//       <div className={styles.App}>
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
//     );
//   }
// }
//
// export default App;
