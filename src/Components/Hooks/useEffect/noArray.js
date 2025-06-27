import React, { useEffect, useState } from "react";

const NoArray = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Runs after every render");
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default NoArray;
