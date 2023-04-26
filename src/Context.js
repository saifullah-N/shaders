import { createContext } from "react";

export const ContextValue = createContext();
export const ContextAction = createContext();

const Context = {
  ContextValue,
  ContextAction,
};

export default Context;
