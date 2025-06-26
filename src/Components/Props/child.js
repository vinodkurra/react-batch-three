import React from "react";

const Child = ({ counter, setCounter, handleAlert }) => {
  return (
    <div>
      <div>This is my Child Component </div>
      <button onClick={() => setCounter(counter + 1)}> Increment</button>
      <button onClick={() => handleAlert("I am Call back value")}>
        Call Back
      </button>
    </div>
  );
};

export default Child;
