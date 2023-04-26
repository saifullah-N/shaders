import React, { useState, createContext } from "react";
 
 const  Context = createContext(
  {
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
  }
}
  );
export default Context