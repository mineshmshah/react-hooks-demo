import React from "react";
import {App, Image, Header} from './styles'
import logo from '../../../logo.svg';

class Media extends React.Component {
  state = {
    matches: window.matchMedia(this.props.query)
      .matches
  };

  componentDidMount() {
    this.setup();
  }

  setup() {
    let media = window.matchMedia(this.props.query);
    let listener = () =>
      this.setState({ matches: media.matches });
    media.addListener(listener);
    this.removeListener = () =>
      media.removeListener(listener);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.removeListener();
      this.setState({
        matches: window.matchMedia(this.props.query)
          .matches
      });
      this.setup();
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    console.log(this.props);
    return this.props.children(this.state.matches);
  }
}

function Ex4() {
  return (
    <App>
      <Media query="(max-width: 900px)">
        {small => (
          <Media query="(min-width: 800px)">
            {large => (
              <div className="Media">
                <Header>Ex4 - useEffect -Media </Header>
                <Image src={logo} alt="logo" />
                <p>
                  Small? {small ? "Yep" : "Nope"}.
                </p>
                <p>
                  Large? {large ? "Yep" : "Nope"}.
                </p>
              </div>
            )}
          </Media>
        )}
      </Media>
    </App>
  );
}

export default Ex4;
