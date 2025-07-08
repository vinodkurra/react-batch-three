import React from "react";
import { useTodo } from "./context/useTodo";

const Todo = () => {
  const { user, setUser, editIndex, handleAdd, handleUpdate } = useTodo();
  return (
    <div>
      <h2>TODO</h2>
      <div>
        <label>User</label>
        <input value={user} onChange={(e) => setUser(e.target.value)} />
        <button onClick={editIndex !== null ? handleUpdate : handleAdd}>
          {editIndex !== null ? "update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
