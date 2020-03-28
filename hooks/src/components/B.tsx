import React, { useEffect } from "react";
import C from "./C";
import { useAppContext } from "../hooks/useAppContext";

function B() {
  const { increment } = useAppContext();
  useEffect(() => {
    console.log("B");
  }, [increment]);
  return (
    <div
      style={{
        backgroundColor: "KHAKI",
        height: "50%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <C />
      <button onClick={increment}>Button</button>
    </div>
  );
}

export default B;
