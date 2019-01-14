import React, { useState, useEffect } from "react";

let useMedia = query => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(() => {
      let media = window.matchMedia(query);
      let listener = () =>
        setMatches(media.matches)
      media.addListener(listener);
      listener();
      return () => media.removeListener(listener)
    }
    ,[query])

  return matches
}

function Ex4() {
  let small = useMedia("(max-width: 420px)")
  let large = useMedia("(min-width: 800px)")
  return (
    <div className="Media">
      <h1>Media</h1>
      <p>
        Small? {small ? "Yep" : "Nope"}.
      </p>
      <p>
        Large? {large ? "Yep" : "Nope"}.
      </p>
    </div>
  );
}

export default Ex4;
//
// import React, { useState, useEffect } from "react";
//
// class Media extends React.Component {
//   state = {
//     matches: window.matchMedia(this.props.query)
//       .matches
//   };
//
//   componentDidMount() {
//     this.setup();
//   }
//
//   setup() {
//     let media = window.matchMedia(this.props.query);
//     let listener = () =>
//       this.setState({ matches: media.matches });
//     media.addListener(listener);
//     this.removeListener = () =>
//       media.removeListener(listener);
//   }
//
//   componentDidUpdate(prevProps) {
//     if (prevProps.query !== this.props.query) {
//       this.removeListener();
//       this.setState({
//         matches: window.matchMedia(this.props.query)
//           .matches
//       });
//       this.setup();
//     }
//   }
//
//   componentWillUnmount() {
//     this.removeListener();
//   }
//
//   render() {
//     return this.props.children(this.state.matches);
//   }
// }
//
// function App() {
//   return (
//     <Media query="(max-width: 400px)">
//       {small => (
//         <Media query="(min-width: 800px)">
//           {large => (
//             <div className="Media">
//               <h1>Media</h1>
//               <p>
//                 Small? {small ? "Yep" : "Nope"}.
//               </p>
//               <p>
//                 Large? {large ? "Yep" : "Nope"}.
//               </p>
//             </div>
//           )}
//         </Media>
//       )}
//     </Media>
//   );
// }
//
// export default App;
