import React, { useState } from "react";

const Todo = () => {
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
      <div style={{ marginTop: "30px" }}>
        <h3>User List</h3>
        {users.map((user, index) => {
          return (
            <div key={`${user}-${index}`} style={{ padding: "10px" }}>
              {user}{" "}
              <span
                style={{
                  padding: "2px 10px",
                  backgroundColor: "red",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
                onClick={() => handleDelete(index)}
              >
                X
              </span>
              <span
                style={{
                  padding: "2px 10px",
                  backgroundColor: "orange",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
                onClick={() => handleSelectEdit(user, index)}
              >
                Edit
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
