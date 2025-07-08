import { createContext, useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    const value = user.trim();
    if (value?.length < 3) {
      alert("Please enter some valid input, more than 2 characters");
      return;
    }
    if (users?.includes(user)) {
      alert("Duplicate value, please add another");
      return;
    }
    setUsers([value, ...users]);
    setUser("");
  };

  const handleUpdate = () => {
    const list = [...users];
    list[editIndex] = user;
    setUsers(list);
    setUser("");
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const list = [...users];
    list.splice(index, 1);
    setUsers(list);
  };

  const handleSelectEdit = (user, index) => {
    setUser(user);
    setEditIndex(index);
  };

  const data = {
    user,
    setUser,
    editIndex,
    handleAdd,
    handleUpdate,
    users,
    handleDelete,
    handleSelectEdit,
  };

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};
