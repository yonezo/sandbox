import React, { useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import Z from "./Z";

function Y() {
  const { count } = useAppContext();
  useEffect(() => {
    console.log("Y");
  });
  return (
    <div
      style={{
        backgroundColor: "DARKCYAN",
        height: "50%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {count}
      <Z />
    </div>
  );
}

export default Y;
