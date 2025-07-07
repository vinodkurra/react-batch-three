import { useCounter } from "./context/useCounter";

const ViewCounter = () => {
  const { counter } = useCounter();
  return <div>{counter}</div>;
};

export default ViewCounter;
