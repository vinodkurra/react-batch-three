import { useTodo } from "./context/useTodo";

const Users = () => {
  const { users, handleDelete, handleSelectEdit } = useTodo();
  return (
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
  );
};

export default Users;
