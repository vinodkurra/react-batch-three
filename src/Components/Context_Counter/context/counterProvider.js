import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    debugger;
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    debugger;
    setCounter(counter - 1);
  };

  const data = {
    counter,
    handleIncrement,
    handleDecrement,
  };

  return (
    <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
  );
};
