import { useContext } from "react";
import { UsersContext } from "./UsersProvider";

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error(
      "We have to wrap the components with in UsersProvider to use useUsers hook "
    );
  }
  return context;
};
