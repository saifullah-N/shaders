import { useState } from "react";
import { ContextAction, ContextValue } from "./Context";

export default function ContextProvider({ children }) {
  const [materialBG, setMaterialBG] = useState({
    current: "none",
    items: {
      laces: "#ff3",
      mesh: "#3f3",
      caps: "#3f3",
      inner: "#3f3",
      sole: "#3f3",
      stripes: "#3f3",
      band: "#3f3",
      patch: "#3f3",
    },
  });
  return (
    <ContextAction.Provider value={setMaterialBG}>
      <ContextValue.Provider value={materialBG}>
        {children}
      </ContextValue.Provider>
    </ContextAction.Provider>
  );
}
