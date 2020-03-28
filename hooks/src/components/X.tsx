import React, { useEffect } from "react";
import Y from "./Y";

function X() {
  useEffect(() => {
    console.log("X");
  });
  return (
    <div
      style={{
        backgroundColor: "TEAL",
        height: "100%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Y />
    </div>
  );
}

export default X;
