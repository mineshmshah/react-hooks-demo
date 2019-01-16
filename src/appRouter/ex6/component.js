import React , { useState, useContext } from 'react';
import { InnerDiv } from './styles';

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
      <App />
    </MyContext.Provider>
  )
};


export default Ex6

// // Adding Context to specific areas
// const MyContext = React.createContext();
//
// const Inner = (props) => (
//   <InnerDiv colour={props.colour}>
//     <h2>
//       {props.edit ? 'Edit' : 'Create'}
//     </h2>
//     <div>
//       {props.children ? '': <h1>Endgame</h1>}
//     </div>
//     {props.children}
//   </InnerDiv>
// );
//
// class Ex6 extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       edit: true
//     }
//   }
//   render() {
//     return (
//       <MyContext.Provider value={this.state}>
//         <MyContext.Consumer>
//           {(value) => (
//             <Inner
//               colour='purple'>
//               <Inner
//                 edit={value.edit}
//                 colour='red'>
//                 <Inner
//                   edit={value.edit}
//                   colour='blue'>
//                 </Inner>
//               </Inner>
//             </Inner>
//           )}
//         </MyContext.Consumer>
//       </MyContext.Provider>
//     )
//   }
// }
//
// export default Ex6

// // Adding Context to pass data all the way down
// const MyContext = React.createContext();
// class Provider extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       edit: true
//     }
//   }
//
//   render() {
//     return (
//       <MyContext.Provider value={this.state}>
//         {this.props.children}
//       </MyContext.Provider>
//     )
//   }
// }
//
// class Inner extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//       <InnerDiv colour={this.props.colour}>
//         <h2>
//           <MyContext.Consumer>{({edit})=> edit ? 'Edit' : 'Create'}</MyContext.Consumer>
//         </h2>
//         <div>
//           {this.props.children ? '': <h1>Endgame</h1>}
//         </div>
//         {this.props.children}
//       </InnerDiv>
//     );
//   }
// }
//
//
// class Ex6 extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//       <Provider>
//         <Inner
//           colour='purple'>
//           <Inner
//             colour='red'>
//             <Inner
//               colour='blue'>
//             </Inner>
//           </Inner>
//         </Inner>
//       </Provider>
//     );
//   }
// }
//
// export default Ex6

// //render props
// class Inner extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//       <InnerDiv colour={this.props.colour}>
//         <h2>
//           {this.props.edit ? 'Edit' : 'Create'}
//         </h2>
//         <div>
//           {this.props.children ? '': <h1>Endgame</h1>}
//         </div>
//         {this.props.children}
//       </InnerDiv>
//     );
//   }
// }
//
//
// class Ex6 extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   render() {
//     return (
//       <Inner
//         edit
//         colour='purple'>
//         <Inner
//         colour='red'
//         edit>
//           <Inner
//             colour='blue'
//             edit>
//           </Inner>
//         </Inner>
//       </Inner>
//     );
//   }
// }
//
// export default Ex6;

//
// Passing a component
//
// class Inner extends React.Component {
//   constructor(props){
//     super(props);
//   }
//     render() {
//       return (
//         <InnerDiv colour={this.props.colour} component={this.props.component}>
//           <h2>
//             {this.props.edit ? 'Edit' : 'Create'}
//           </h2>
//           <div>
//             {this.props.component ? this.props.component(): <h1>Endgame</h1>}
//           </div>
//         </InnerDiv>
//       );
//     }
// }
//
//
// class Ex6 extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   render() {
//     return (
//       <Inner
//         edit
//         colour='purple'
//         component={() => <Inner
//           colour='red'
//           edit
//           component={() => <Inner
//             colour='blue'
//             edit
//           />}
//         />}
//       >
//       </Inner>
//     );
//   }
// }
//
// export default Ex6;
//
//
