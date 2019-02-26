import * as React from "react";

const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#FF0155",
  background: "rgba(255, 1, 85, 0.1)",
  overflow: "hidden"
};

function Component(props) {
  const { message = "Something went wrong" } = props;
  return <div style={style}>{message}</div>;
}

export const ErrorMessage = Component;
