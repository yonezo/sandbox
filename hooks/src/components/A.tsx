import React, { useEffect } from "react";
import B from "./B";

function A() {
  useEffect(() => {
    console.log("A");
  });
  return (
    <div
      style={{
        backgroundColor: "DARKKHAKI",
        height: "100%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <B />
    </div>
  );
}

export default A;
