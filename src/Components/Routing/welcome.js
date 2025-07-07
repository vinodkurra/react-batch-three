import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <div
        onClick={() => navigate("/login")}
        style={{
          cursor: "pointer",
          color: "blue",
        }}
      >
        Click here to Login
      </div>
    </div>
  );
};

export default Welcome;
