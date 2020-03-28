import React, { useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";

function C() {
  const { increment } = useAppContext();
  useEffect(() => {
    console.log("C");
  }, [increment]);
  return (
    <div
      style={{
        backgroundColor: "PALEGOLDENROD",
        height: "50%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    ></div>
  );
}

export default C;
