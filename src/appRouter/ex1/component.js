import React, { Component, useState } from 'react';
import logo from '../../logo.svg';
import styles from '../../App.module.scss';


const Ex1 = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return (
      <div className={styles.App}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2 className={styles.link}>
            (Hooks)Current Counter: {count}
          </h2>
          <button onClick={increment}>
            Increment
          </button>
        </header>
      </div>
    );
}

export default Ex1

// class Component extends Component {
//
//   constructor(){
//     super();
//     this.state = {
//       count: 0
//     };
//     this.increment = this.increment.bind(this);
//   }
//
//   increment(){
//     this.setState(({count}) => ({count: count + 1}));
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
//         </header>
//       </div>
//     );
//   }xw
// }
//
// export default Component;
