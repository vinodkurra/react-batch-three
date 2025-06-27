import React, { useEffect, useState } from "react";

const ValuesInArray = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(" Runs only when count or user changes");
  }, [count, user]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
    </div>
  );
};

export default ValuesInArray;
