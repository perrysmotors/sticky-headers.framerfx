import * as React from "react";

const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#8855FF",
  background: "rgba(136, 85, 255, 0.1)",
  overflow: "hidden"
};

export class StickyElement extends React.Component {
  render() {
    const { children } = this.props;

    if (children.length <= 0) {
      return <div style={style}>Connect to something sticky →</div>;
    } else {
      return children;
    }
  }
}
