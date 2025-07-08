import { useUsers } from "./useUsers";

const ApiCall = () => {
  const { data, getData } = useUsers();

  return (
    <div>
      <h2>API RESPONSE LIST</h2>
      <button onClick={getData}>API Call</button>
      <div>
        {data.map((user, index) => {
          return <div key={`users-${index}`}>{user.name}</div>;
        })}
      </div>
    </div>
  );
};

export default ApiCall;
