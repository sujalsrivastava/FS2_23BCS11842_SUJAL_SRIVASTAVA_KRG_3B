import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("token", "userLoggedIn");
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Page</h2>
      <button onClick={login}>Fake Login</button>
    </div>
  );
}

export default Login;