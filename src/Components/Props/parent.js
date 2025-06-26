import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const handleAlert = (value) => {
    alert(value);
  };

  return (
    <div>
      <div>This is my Parent Component : {counter}</div>
      <Child
        setCounter={setCounter}
        counter={counter}
        handleAlert={handleAlert}
      />
    </div>
  );
};

export default Parent;
