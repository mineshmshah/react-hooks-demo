import React , { useState, useContext } from 'react';
import { InnerDiv, Header } from './styles';

// Adding Context to pass data all the way down
const MyContext = React.createContext();


const Inner = (props) => (
  <InnerDiv colour={props.colour}>
    <h2>
      {props.edit ? 'Edit' : 'Create'}
    </h2>
    <div>
      {props.children ? '': <h1>Endgame</h1>}
    </div>
    {props.children}
  </InnerDiv>
);

const App = () => {
  const MyContextHook = useContext(MyContext);
  return (
    <Inner
      colour='purple'>
      <Inner
        edit={MyContextHook.edit}
        colour='red'>
        <Inner
          edit={MyContextHook.edit}
          colour='blue'>
        </Inner>
      </Inner>
    </Inner>
  );
}

const Ex6 = () => {
  let [editState, setEditState] = useState({
    edit: true
  });
  return (
    <MyContext.Provider value={editState}>
      <Header>Ex6 Passing down mulitple Props (Hooks)</Header>
      <App />
    </MyContext.Provider>
  )
};


export default Ex6
