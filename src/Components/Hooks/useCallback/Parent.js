import React, { useState, useCallback } from "react";
import Child from "./child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count : {count}</h2>
      <Child handleIncrement={handleIncrement} />
    </div>
  );
};

export default Parent;
