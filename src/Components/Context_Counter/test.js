import { useCounter } from "./context/useCounter";

const Test = () => {
  const { counter } = useCounter();
  return <div>{counter}</div>;
};

export default Test;
