import React from "react";
import { AppProvider } from "./contexts/AppContext";
import A from "./components/A";
import X from "./components/X";

function App() {
  return (
    <AppProvider>
      <div style={{ display: "flex", height: "100%" }}>
        <A />
        <X />
      </div>
    </AppProvider>
  );
}

export default App;
