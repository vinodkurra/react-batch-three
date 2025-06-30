import React, { useState, useCallback, useMemo } from "react";

const useMemo = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h2>Count : {doubleCount}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default useMemo;

// 2 cart

// 10 %

// delivery fee - 50

// pack - 20
