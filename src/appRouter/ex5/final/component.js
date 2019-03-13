import React , { useState, useEffect } from 'react';
import { Component, Input, Header } from './styles';

const InputClass = ({value, onUpdate}) => {
  const [initialValue, setInitialValue] = useState('');
  const [currentValue, setCurrentValue] = useState ('');

  useEffect(() =>{
      if(!initialValue.length) setInitialValue(value);
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
     <Header>
     Ex 5 - Input Passing input to state (Class Version_
     </Header>
      <Input
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
