import React, { memo } from "react";

const Child = ({ handleIncrement }) => {
  console.log("I am child component");
  return (
    <div>
      <button onClick={handleIncrement}> Increment from CHILD</button>
    </div>
  );
};

export default memo(Child);
