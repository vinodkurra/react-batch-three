import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <div
        onClick={() => navigate("/dashboard")}
        style={{
          cursor: "pointer",
          color: "blue",
        }}
      >
        Click here to Navigate Dashboard
      </div>

      <Link to="/">Welcome Page</Link>
    </div>
  );
};

export default Login;
