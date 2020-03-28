import React, { useEffect } from "react";

function Z() {
  useEffect(() => {
    console.log("Z");
  });
  return (
    <div
      style={{
        backgroundColor: "LIGHTSEAGREEN",
        height: "50%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    ></div>
  );
}

export default Z;
