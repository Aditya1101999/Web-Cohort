import { createContext } from "react";

// export const CountContext=createContext(0)
export const CountContext = createContext({
    count: 0,
    setCount: () => {},
  });