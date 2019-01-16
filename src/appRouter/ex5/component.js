import React , { useState, useEffect } from 'react';
import { Component, InputField, ErrorMessage } from './styles';

const InputClass = ({value, onUpdate}) => {
  const [initialValue, setInitialValue] = useState('')
  const [currentValue, setCurrentValue] = useState ('')

  useEffect(() =>{
      if(initialValue) setInitialValue(value);
      setCurrentValue(value)
    }
  ,[value])

  const handleChange = event => {
    onUpdate({
      type: 'TYPE',
      value: event.target.value
    });
  }
  return (
    <Component
    >
      <input
        onInput={() => null}
        value={value}
        onChange={handleChange}
        onFocus={e => {
          // Assert duplicate focus events do not
          // cause cursor to skip to start
          const tempValue = e.target.value;
          e.target.value = '';
          e.target.value = tempValue;
        }}
      />
      <p>
        Initial: {initialValue}
      </p>
      <p>
        Current: {currentValue}
      </p>
    </Component>
  );
}

const Ex5 = () => {
  const [parentValue, setParentValue] = useState('start')

  const handleChange = update => {
   setParentValue(update.value);
   console.log(update)
  }
  return (
    <InputClass onUpdate={handleChange} value={parentValue} />
  );
}

export default Ex5;

// import React from 'react';
// import { Component, InputField, ErrorMessage } from './styles';
//
// class InputClass extends React.Component {
//
//   constructor(props){
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {
//       initialValue: '',
//       currentValue: ''
//     };
//   }
//
//   componentDidMount() {
//     this.setState({
//       initialValue: this.props.value,
//       currentValue: this.props.value
//     })
//   }
//
//   handleChange(event){
//     this.props.onUpdate({
//       type: 'TYPE',
//       value: event.target.value
//     });
//     this.setState({
//       currentValue: event.target.value
//     })
//   }
//
//   render() {
//     return (
//       <Component
//         disabled={this.props.disabled}
//       >
//         <input
//           {...this.props}
//           onInput={() => null}
//           value={this.props.value}
//           onChange={this.handleChange}
//           onFocus={e => {
//             // Assert duplicate focus events do not
//             // cause cursor to skip to start
//             const tempValue = e.target.value;
//             e.target.value = '';
//             e.target.value = tempValue;
//           }}
//           autoFocus={this.props.setAutoFocus}
//         />
//         <p>
//           Initial: {this.state.initialValue}
//         </p>
//         <p>
//           Current: {this.state.currentValue}
//         </p>
//       </Component>
//     );
//   }
// }
//
// class Ex5 extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       parentvalue: 'Start'
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(update){
//     this.setState({parentvalue: update.value});
//     console.log(this.state)
//     console.log(update)
//   }
//
//   render() {
//     return (
//       <InputClass onUpdate={this.handleChange} value={this.state.parentvalue} />
//     );
//   }
// }
//
// export default Ex5;


