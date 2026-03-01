import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/dashboard/water">Water Tracker</Link> |{" "}
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;