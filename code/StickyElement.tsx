import * as React from "react";
import NotConnected from "./NotConnected";

export class StickyElement extends React.Component {
  render() {
    const { children } = this.props;

    if (React.Children.count(children) === 0) {
      return <NotConnected prompt="Connect to something sticky" />;
    } else {
      return children;
    }
  }
}
