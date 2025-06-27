import React, { useEffect, useState } from "react";

const EmptyArray = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Runs only once on mount");
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default EmptyArray;
