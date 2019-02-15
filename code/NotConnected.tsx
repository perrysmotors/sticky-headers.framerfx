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

export default function NotConnected(props) {
  const { prompt = "Connect to content" } = props
    return <div style={style}>{prompt} →</div>;
  }
