import { useState } from "react";

const MyStateFunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      This is Functonal Component
      <div> Counter : {counter}</div>
      {counter < 3 ? (
        <div>
          <button onClick={() => setCounter(counter + 1)}>increment</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyStateFunctionalComponent;
