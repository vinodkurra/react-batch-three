import { useUsers } from "./useUsers";

const ApiCall = () => {
  const { getUserData_data, getData, getUserData } = useUsers();

  return (
    <div>
      <h2>API RESPONSE LIST</h2>
      <button onClick={() => getUserData()}>API Call</button>
      <div>
        {getUserData_data?.map((user, index) => {
          return <div key={`users-${index}`}>{user.name}</div>;
        })}
      </div>
    </div>
  );
};

export default ApiCall;
