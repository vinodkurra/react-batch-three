import { useCounter } from "./context/useCounter";
const Counter = () => {
  const { handleIncrement, handleDecrement } = useCounter();

  return (
    <>
      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleDecrement}> Decrement</button>
    </>
  );
};

export default Counter;
