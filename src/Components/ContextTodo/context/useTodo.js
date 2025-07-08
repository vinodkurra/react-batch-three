import { useContext } from "react";
import { TodoContext } from "./TodoProvider";

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      "useTodo must be used with in a component that wrapped in its Todo provider"
    );
  }
  return context;
};
