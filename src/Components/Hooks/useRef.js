import React, { useRef } from "react";

const InputRef = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    console.log(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <div>
      <input ref={emailRef} placeholder="Enter Your Email ID " />
      <input ref={passwordRef} placeholder="Enter Your Password " />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default InputRef;
