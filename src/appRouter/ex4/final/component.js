import React, { useState, useEffect } from "react";
import {App, Image, Header} from './styles'
import logo from '../../../logo.svg';

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
    <App>
      <div className="Media">
        <Header>Ex4 - useEffect -Media (Final - Hooks Version)</Header>
        <Image src={logo} alt="logo" />
        <p>
          Small? {small ? "Yep" : "Nope"}.
        </p>
        <p>
          Large? {large ? "Yep" : "Nope"}.
        </p>
      </div>
    </App>
  );
}

export default Ex4;

