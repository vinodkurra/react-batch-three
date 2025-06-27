import { useEffect, useState } from "react";

const FunctionalComponentWithHooks = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("hhhh", name);
  }, [name]);

  useEffect(() => {
    const handleAlert = (e) => {
      if (e.key === "Enter") {
        alert(name);
      }
    };

    document.addEventListener("keydown", handleAlert);

    return () => {
      document.removeEventListener("keydown", handleAlert);
    };
  }, [name]);

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <div>
      I am FunctionalComponentWithHooks
      <div>useState and useEffect</div>
      <input value={name} onChange={handleName} />
    </div>
  );
};

export default FunctionalComponentWithHooks;

// 1)  hooks will come from react;

// 2) useState is method which will return two things

//     getter and setter

//     getter will holds the state value
//     setter will update the state value

// 3) useEffect

//     useEffect(callBack, [])

// 1) useEffect without empty Array
// 2) useEffect with empty Array
// 3) useEffect with array has some values
// 4) useEffect with return method

// username;

// password;

// submit;
