import React , { useState } from 'react';
import MyContext from './context';
import InnerTheme from './innerTheme';
import { Header } from './styles';
import Outer from './outer';
import Inner from './inner';
import Centre from './centre';
// Adding Context to pass data all the way down

const App = () => {
  
  return (
    <Outer
      colour='purple'
    >
      <Inner>
        <Centre/>
      </Inner>
    </Outer>
  );
}

const Ex7 = () => {
  let [editState, setEditState] = useState({
    edit: true
  });
  let [innerColour, setInnerColour] = useState({
    colour: 'blue'
  })
  return (
    <MyContext.Provider value={editState}>
      <InnerTheme.Provider value={innerColour}>
      <Header>Ex7 Using  multiple externally created contexts to pass props.</Header>
      <App />
      </InnerTheme.Provider>
    </MyContext.Provider>
  )
};

export default Ex7
